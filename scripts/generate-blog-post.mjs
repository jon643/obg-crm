#!/usr/bin/env node
/**
 * OBG Daily Blog Post Generator
 * --------------------------------
 * 1. Checks #obg-content-and-pr Slack channel for new content/ideas (every ~7 days)
 * 2. Picks the next topic from scripts/blog-topics.json queue (Slack ideas get inserted at front)
 * 3. Calls Anthropic API to generate a full, on-brand blog post
 * 4. Writes content/blog/{slug}.ts
 * 5. Injects the slug into app/blog/[slug]/page.tsx blogSlugs array
 * 6. git add + git commit + vercel --prod deploy
 *
 * Usage:
 *   node scripts/generate-blog-post.mjs
 *
 * API key stored in macOS Keychain:
 *   security add-generic-password -s "obg-anthropic" -a "api_key" -w "sk-ant-..."
 *
 * Slack token stored in macOS Keychain:
 *   security add-generic-password -s "obg-slack" -a "api_token" -w "xoxp-..."
 */

import { execSync, spawnSync } from 'child_process'
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import https from 'https'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const TOPICS_FILE = join(__dirname, 'blog-topics.json')
const PAGE_FILE = join(ROOT, 'app', 'blog', '[slug]', 'page.tsx')
const CONTENT_DIR = join(ROOT, 'content', 'blog')
const LOG_FILE = join(__dirname, 'generate-blog-post.log')
const SLACK_STATE_FILE = join(__dirname, 'slack-state.json')

// How often to check Slack (every N days)
const SLACK_CHECK_INTERVAL_DAYS = 7

// ─── Logging ───────────────────────────────────────────────────────────────
function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}`
  console.log(line)
  try {
    const existing = existsSync(LOG_FILE) ? readFileSync(LOG_FILE, 'utf8') : ''
    // Keep last 500 lines
    const lines = existing.split('\n')
    const trimmed = lines.slice(-499).join('\n')
    writeFileSync(LOG_FILE, trimmed + '\n' + line + '\n')
  } catch {}
}

// ─── Get secret from Keychain ───────────────────────────────────────────────
function getKeychainSecret(service, account) {
  try {
    const result = spawnSync('security', [
      'find-generic-password', '-s', service, '-a', account, '-w'
    ], { encoding: 'utf8' })
    if (result.stdout && result.stdout.trim()) return result.stdout.trim()
  } catch {}
  return null
}

// ─── Get Anthropic API key ──────────────────────────────────────────────────
function getApiKey() {
  if (process.env.ANTHROPIC_API_KEY) return process.env.ANTHROPIC_API_KEY
  const key = getKeychainSecret('obg-anthropic', 'api_key')
  if (key) return key
  throw new Error(
    'No ANTHROPIC_API_KEY found.\n' +
    'Store it with: security add-generic-password -s "obg-anthropic" -a "api_key" -w "sk-ant-YOUR_KEY"'
  )
}

// ─── Generic HTTPS request ──────────────────────────────────────────────────
function httpsRequest(options, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = ''
      res.on('data', chunk => data += chunk)
      res.on('end', () => {
        try { resolve({ status: res.statusCode, body: JSON.parse(data) }) }
        catch (e) { resolve({ status: res.statusCode, body: data }) }
      })
    })
    req.on('error', reject)
    if (body) req.write(typeof body === 'string' ? body : JSON.stringify(body))
    req.end()
  })
}

// ─── Slack: check #obg-content-and-pr for new content ideas ─────────────────
async function checkSlackForContentIdeas() {
  const token = getKeychainSecret('obg-slack', 'api_token')
  if (!token) {
    log('No Slack token found — skipping Slack check. Store with: security add-generic-password -s "obg-slack" -a "api_token" -w "xoxp-..."')
    return []
  }

  // Load last-checked state
  let slackState = { lastChecked: null, lastTs: '0', processedTs: [] }
  if (existsSync(SLACK_STATE_FILE)) {
    try { slackState = JSON.parse(readFileSync(SLACK_STATE_FILE, 'utf8')) } catch {}
  }

  // Check if enough time has passed
  const now = Date.now()
  const daysSinceCheck = slackState.lastChecked
    ? (now - new Date(slackState.lastChecked).getTime()) / (1000 * 60 * 60 * 24)
    : 999

  if (daysSinceCheck < SLACK_CHECK_INTERVAL_DAYS) {
    log(`Slack check skipped — last checked ${Math.round(daysSinceCheck)} days ago (interval: ${SLACK_CHECK_INTERVAL_DAYS} days)`)
    return []
  }

  log('Checking #obg-content-and-pr for new content ideas...')

  // 1. Find the channel ID for #obg-content-and-pr
  const channelsResp = await httpsRequest({
    hostname: 'slack.com',
    path: '/api/conversations.list?exclude_archived=true&types=public_channel,private_channel&limit=200',
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` }
  })

  if (!channelsResp.body.ok) {
    log(`Slack channels.list error: ${channelsResp.body.error}`)
    return []
  }

  const channel = channelsResp.body.channels?.find(c => c.name === 'obg-content-and-pr')
  if (!channel) {
    log('Channel #obg-content-and-pr not found')
    return []
  }

  // 2. Fetch recent messages since last check
  const oldest = slackState.lastTs || String(Math.floor((now / 1000) - 30 * 24 * 60 * 60)) // last 30 days on first run
  const msgsResp = await httpsRequest({
    hostname: 'slack.com',
    path: `/api/conversations.history?channel=${channel.id}&oldest=${oldest}&limit=100`,
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` }
  })

  if (!msgsResp.body.ok) {
    log(`Slack conversations.history error: ${msgsResp.body.error}`)
    return []
  }

  const messages = msgsResp.body.messages || []
  log(`Found ${messages.length} new messages in #obg-content-and-pr`)

  // Update state
  if (messages.length > 0) {
    slackState.lastTs = messages[0].ts // most recent first
  }
  slackState.lastChecked = new Date().toISOString()

  // 3. Use Claude to extract blog ideas from the messages
  const messageText = messages
    .filter(m => !m.subtype) // only real messages
    .map(m => `[${new Date(parseFloat(m.ts) * 1000).toLocaleDateString()}] ${m.text}`)
    .join('\n\n')
    .slice(0, 8000) // cap to avoid huge prompts

  if (!messageText.trim()) {
    writeFileSync(SLACK_STATE_FILE, JSON.stringify(slackState, null, 2))
    return []
  }

  // 4. Ask Claude to extract blog topics from the Slack messages
  const apiKey = getApiKey()
  const extractPrompt = `You are reviewing Slack messages from the #obg-content-and-pr channel of Online Brand Growth (OBG), an Amazon brand management agency.

Extract any blog post ideas, content pieces, frameworks, or topics mentioned. For each one, generate a blog topic object.

Slack messages:
${messageText}

Return a JSON array of blog topic objects. Each object must have:
- slug: kebab-case URL slug (e.g. "amazon-vine-strategy")
- title: compelling blog post title
- keyword: primary SEO keyword phrase (2-4 words)
- angle: 2-3 sentence description of the specific angle/insight to cover, grounded in OBG's voice

Return ONLY a valid JSON array, no explanation. If no clear blog ideas are found, return [].
Example: [{"slug":"amazon-vine-strategy","title":"Amazon Vine: The Launch Tool Most Brands Misuse","keyword":"amazon vine program","angle":"Vine is a launch sequencer, not a review shortcut..."}]`

  try {
    const extracted = await callAnthropic(apiKey,
      'You extract structured blog topic data from Slack messages. Return only valid JSON arrays.',
      extractPrompt
    )

    let ideas = []
    const jsonMatch = extracted.match(/\[[\s\S]*\]/)
    if (jsonMatch) {
      ideas = JSON.parse(jsonMatch[0])
    }

    log(`Extracted ${ideas.length} blog ideas from Slack`)

    // Save state
    slackState.processedTs = [...(slackState.processedTs || []), ...messages.map(m => m.ts)].slice(-200)
    writeFileSync(SLACK_STATE_FILE, JSON.stringify(slackState, null, 2))

    return ideas
  } catch (e) {
    log(`Error extracting Slack ideas: ${e.message}`)
    writeFileSync(SLACK_STATE_FILE, JSON.stringify(slackState, null, 2))
    return []
  }
}

// ─── Call Anthropic API ─────────────────────────────────────────────────────
function callAnthropic(apiKey, systemPrompt, userPrompt) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      model: 'claude-opus-4-5',
      max_tokens: 4096,
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }]
    })

    const options = {
      hostname: 'api.anthropic.com',
      path: '/v1/messages',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'Content-Length': Buffer.byteLength(body)
      }
    }

    const req = https.request(options, (res) => {
      let data = ''
      res.on('data', chunk => data += chunk)
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data)
          if (parsed.error) reject(new Error(parsed.error.message))
          else resolve(parsed.content[0].text)
        } catch (e) {
          reject(new Error(`Parse error: ${e.message}\nRaw: ${data.slice(0, 500)}`))
        }
      })
    })

    req.on('error', reject)
    req.write(body)
    req.end()
  })
}

// ─── System prompt (OBG brand voice) ────────────────────────────────────────
const SYSTEM_PROMPT = `You are a ghostwriter for Jon Klein and Dan Balda, co-founders of Online Brand Growth (OBG), a premium Amazon brand management agency founded in 2018.

BRAND VOICE (from Jon's actual writing):
- Short, punchy sentences. Contrarian takes. Direct and opinionated.
- Practitioner voice — you've done this, you have the numbers.
- Key phrases Jon actually uses: "High TACoS isn't automatically bad. Unclear intent is." / "Early aggression is not always smart aggression." / "Revenue is vanity. Contribution margin is sanity." / "Daily data is lying to you." / "At some point, customers won't shop. Their AI will."
- Uses "we" for OBG, "you" for the reader. Never "one should" or passive voice.
- Never starts with "In the world of Amazon..." or "As an Amazon seller..." or any generic opener.
- No fluff. No padding. Every sentence earns its place.

OBG PROPRIETARY FRAMEWORKS (always reference at least one per post):
1. Growth Team OS™ — OBG's full Amazon department (catalog, creative, PPC, operations) that plugs into your business. 30-day profitability guarantee: "If we don't increase your profitability in 30 days, you get a full refund. No questions asked."
2. PPC Lifecycle Framework — Launch (2x breakeven ACoS, ~60 days, branded+exact only) → Trimming (cut losers, reach 8-12% TACoS) → Re-optimization (SQP CVR vs market average) → Growth/Scaling (8-14% TACoS) → Maturity (8-12% TACoS forever). TACoS = total ad spend ÷ total revenue = the only metric that matters long-term.
3. 360 Brand Protection™ — 24/7 listing monitoring, automated cease & desist, MAP enforcement. Free value-add for brand partners.
4. Avatar Alignment Framework — review mining → customer avatar creation → 3 listing variants → Jungle Ace split test.
5. Revenue Rescue Decision Tree — diagnostic for sales/profit decline: traffic vs conversion split, buy box loss, pricing positioning, review damage, organic rank breakdown.

REAL CLIENT RESULTS (cite at least one per post):
- NumNum Baby: 30x revenue in 18 months ($100K → $3M), led to 8-figure exit. — Doug Gonterman, Founder
- Streetwise Security: 50%+ sales and profit YOY. — Lori Cortright, CFO
- Minerva Research Labs: increased contribution margin. — Lynn Cartwright, N.A. Business Director
- Blue Forest Holdings: revenue doubled, profit tripled in 12 months. — David Cook, CEO
- Neutralyze (OBG's own brand): $0 to 7-figures year 1, zero outside traffic.
- Retail-first fitness brand: $0 to $500K year 1 on Amazon.
- OBG overall: "Since 2018, we've grown four different brands to 7 figures and beyond on Amazon."

OBG TOOLS: Scale Insights (PPC), DataDive (keyword research), Datarova (digital shelf analytics), Sellerise (review monitoring + ranking), Jungle Ace (A/B split testing)

TARGET CLIENT: DTC-first or retail-first product brands doing $500K–$5M/year wanting to grow Amazon as a profitable channel.

OUTPUT FORMAT — respond with a TypeScript file ONLY, no explanation, no markdown code fences, starting directly with:
import type { BlogPost } from '@/lib/blog'

const post: BlogPost = {
  title: '...',
  description: '...', // EXACTLY 140-160 characters for meta description
  publishDate: 'YYYY-MM-DD',
  htmlContent: \`
    ... semantic HTML here ...
  \`,
}

export default post

HTML RULES (strict):
- NO <h1> tags
- NO inline styles
- NO class attributes
- Use: <h2>, <h3>, <p>, <ul>, <ol>, <li>, <blockquote>, <strong>, <em>, <hr>
- 1,000–1,500 words of HTML content
- Final section MUST be:
  <h2>Work With OBG</h2>
  <p>If you want to see how this would work for your brand, <a href="/#book-call">book a free strategy session</a>. We'll audit your account, identify the fastest wins, and map out exactly how we'll execute. And if we don't increase your profitability in the first 30 days, you don't pay. Zero risk.</p>`

// ─── Pick next topic ─────────────────────────────────────────────────────────
function pickNextTopic(slackIdeas = []) {
  const data = JSON.parse(readFileSync(TOPICS_FILE, 'utf8'))

  // Prepend any new Slack ideas that aren't already in queue or published
  const existingSlugs = new Set([
    ...data.published,
    ...data.queue.map(t => t.slug)
  ])

  const newIdeas = slackIdeas.filter(idea =>
    idea.slug && !existingSlugs.has(idea.slug)
  )

  if (newIdeas.length > 0) {
    log(`Inserting ${newIdeas.length} Slack-sourced ideas at front of queue`)
    data.queue = [...newIdeas, ...data.queue]
    writeFileSync(TOPICS_FILE, JSON.stringify(data, null, 2))
  }

  if (data.queue.length === 0) {
    throw new Error('Topic queue is empty. Add more topics to scripts/blog-topics.json')
  }

  // Skip already-published or existing files
  while (data.queue.length > 0) {
    const topic = data.queue[0]
    const contentPath = join(CONTENT_DIR, `${topic.slug}.ts`)

    if (data.published.includes(topic.slug) || existsSync(contentPath)) {
      log(`Slug ${topic.slug} already exists, skipping...`)
      data.queue.shift()
      if (!data.published.includes(topic.slug)) data.published.push(topic.slug)
      writeFileSync(TOPICS_FILE, JSON.stringify(data, null, 2))
      continue
    }

    return { topic, data }
  }

  throw new Error('All queued topics already published. Add more to scripts/blog-topics.json')
}

// ─── Write content file ──────────────────────────────────────────────────────
function writeContentFile(slug, tsContent) {
  const filePath = join(CONTENT_DIR, `${slug}.ts`)

  if (!tsContent.includes("import type { BlogPost }") || !tsContent.includes('export default post')) {
    throw new Error(`Generated content for ${slug} doesn't match expected format`)
  }
  if (/<h1[\s>]/i.test(tsContent)) {
    throw new Error(`Generated content contains <h1> tag — not allowed`)
  }

  writeFileSync(filePath, tsContent, 'utf8')
  log(`Wrote ${filePath}`)
  return filePath
}

// ─── Inject slug into page.tsx ───────────────────────────────────────────────
function injectSlugIntoPage(slug) {
  let pageContent = readFileSync(PAGE_FILE, 'utf8')

  if (pageContent.includes(`'${slug}'`)) {
    log(`Slug ${slug} already in page.tsx`)
    return
  }

  // Find the closing ] of the blogSlugs array and insert before it
  // Match the last slug line + closing bracket pattern
  const arrayEndPattern = /(  '[a-z0-9-]+'(?:,\n)?)\n\]/
  const match = pageContent.match(arrayEndPattern)
  if (!match) {
    throw new Error('Cannot find end of blogSlugs array in page.tsx')
  }

  // Insert new slug before the closing ]
  pageContent = pageContent.replace(/(\n\](\s*\n\/\/ Infer category))/, `\n  '${slug}',\n]$2`)

  // Fallback: simpler replacement
  if (!pageContent.includes(`'${slug}'`)) {
    pageContent = pageContent.replace(
      "'image-requirements-for-amazon',\n]",
      `'image-requirements-for-amazon',\n  '${slug}',\n]`
    )
  }

  // Final fallback: find last quoted slug before ]
  if (!pageContent.includes(`'${slug}'`)) {
    pageContent = pageContent.replace(
      /('[\w-]+'(?:,)?)\n\]\n\n\/\/ Infer/,
      `$1\n  '${slug}',\n]\n\n// Infer`
    )
  }

  if (!pageContent.includes(`'${slug}'`)) {
    throw new Error(`Failed to inject slug ${slug} into page.tsx`)
  }

  writeFileSync(PAGE_FILE, pageContent, 'utf8')
  log(`Injected slug ${slug} into page.tsx`)
}

// ─── Git commit + Vercel deploy ──────────────────────────────────────────────
function deployToVercel(slug, title) {
  const VERCEL_BIN = join(ROOT, 'node_modules', '.bin', 'vercel')
  const vercelCmd = existsSync(VERCEL_BIN) ? VERCEL_BIN : 'npx vercel'

  log('Running git add...')
  execSync(
    `git -C "${ROOT}" add "content/blog/${slug}.ts" "app/blog/[slug]/page.tsx" "scripts/blog-topics.json" "scripts/slack-state.json" 2>/dev/null || true`,
    { shell: true }
  )

  log('Running git commit...')
  const commitMsg = `Add blog post: ${title}\n\nAuto-generated daily blog post via OBG content pipeline.\nSlug: /blog/${slug}\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>`
  execSync(`git -C "${ROOT}" commit -m ${JSON.stringify(commitMsg)}`, { stdio: 'inherit' })

  log('Deploying to Vercel production...')
  execSync(`cd "${ROOT}" && ${vercelCmd} --prod --yes 2>&1`, { stdio: 'inherit', timeout: 180000 })

  log(`✅ Successfully deployed /blog/${slug}`)
}

// ─── Main ────────────────────────────────────────────────────────────────────
async function main() {
  log('=== OBG Daily Blog Post Generator starting ===')

  const apiKey = getApiKey()
  log('Anthropic API key loaded.')

  // Check Slack for fresh content ideas (respects interval)
  const slackIdeas = await checkSlackForContentIdeas()

  // Pick next topic (Slack ideas go to front of queue)
  const { topic, data } = pickNextTopic(slackIdeas)
  log(`Generating post for: ${topic.slug} — "${topic.title}"`)

  const today = new Date().toISOString().split('T')[0]

  const userPrompt = `Write a complete blog post for Online Brand Growth with the following brief:

Slug: ${topic.slug}
Title: ${topic.title}
Primary keyword: ${topic.keyword}
Today's date (use as publishDate): ${today}

Angle / what to cover:
${topic.angle}

Remember:
- Use the exact title provided
- Primary keyword "${topic.keyword}" should appear naturally in h2 headings and body text
- Reference at least one real OBG client result with name/company
- Reference at least one named OBG framework
- 1,000–1,500 words
- End with the Work With OBG CTA section
- Output TypeScript file content ONLY, starting with: import type { BlogPost } from '@/lib/blog'`

  log('Calling Anthropic API...')
  const tsContent = await callAnthropic(apiKey, SYSTEM_PROMPT, userPrompt)
  log(`Received ${tsContent.length} characters from API.`)

  writeContentFile(topic.slug, tsContent)

  // Update topics tracker
  data.queue.shift()
  data.published.push(topic.slug)
  writeFileSync(TOPICS_FILE, JSON.stringify(data, null, 2))

  injectSlugIntoPage(topic.slug)

  deployToVercel(topic.slug, topic.title)

  log('=== Done ===')
}

main().catch(err => {
  log(`ERROR: ${err.message}`)
  process.exit(1)
})
