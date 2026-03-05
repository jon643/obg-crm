#!/usr/bin/env node
/**
 * OBG Backlink Outreach Email Generator
 *
 * Generates personalized outreach emails for listicle inclusion and guest post pitches.
 * Uses Claude API with OBG's real client results and brand voice.
 *
 * Usage:
 *   node scripts/backlinks/generate-outreach.mjs              # Process all pending targets
 *   node scripts/backlinks/generate-outreach.mjs --id clutch  # Process single target by ID
 *   node scripts/backlinks/generate-outreach.mjs --type guest_post  # Process by type
 *   node scripts/backlinks/generate-outreach.mjs --preview    # Show emails without saving
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', '..');

// ── Config ──────────────────────────────────────────────────────────────────
const TARGETS_FILE = join(__dirname, 'targets.json');
const OUTREACH_DIR = join(__dirname, 'outreach');
const LOG_FILE = join(__dirname, 'outreach.log');

// ── OBG Context (injected into every prompt) ─────────────────────────────────
const OBG_CONTEXT = `
COMPANY: Online Brand Growth (OBG)
WEBSITE: https://www.onlinebrandgrowth.com
FOUNDERS: Jon Klein and Dan Balda (former brand owners who scaled and exited 7-8 figure Amazon brands before building OBG)
FOUNDED: 2018
MODEL: Founder-led Amazon brand management agency (not a big agency staffed with juniors)

UNIQUE POSITIONING:
- Jon and Dan were Amazon brand OWNERS before they became operators — they've been on the client side
- 30-day performance guarantee (no other serious Amazon agency does this)
- Proprietary frameworks: PPC Lifecycle, 360 Brand Protection™, Avatar Alignment, Growth Team OS™
- TACoS-first advertising philosophy (not ACoS-first, which is what most agencies focus on)
- Deep specialization: only take brands doing $1M+ on Amazon, strong focus on manufacturer/brand owner clients

REAL CLIENT RESULTS (use these in outreach):
- NumNum Baby: 30x revenue growth on Amazon under OBG management
- Streetwise Security: 50% year-over-year revenue growth
- Blue Forest Holdings: Revenue doubled then tripled across portfolio
- Neutralyze: Organic rank improvements after listing + A+ content rebuild

SERVICES: Amazon PPC management, listing optimization, brand protection (360 Brand Protection™), FBA logistics, storefront design, A+ content, global expansion

EMAIL TONE: Confident and direct. Not groveling. We are peer experts reaching out to peer content creators. Short. No fluff. Lead with value.
`;

// ── Helpers ──────────────────────────────────────────────────────────────────
function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}`;
  console.log(line);
  try {
    const existing = existsSync(LOG_FILE) ? readFileSync(LOG_FILE, 'utf8') : '';
    writeFileSync(LOG_FILE, existing + line + '\n');
  } catch {}
}

function getApiKey() {
  try {
    return execSync('security find-generic-password -s "obg-anthropic" -a "api_key" -w', {
      encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe']
    }).trim();
  } catch {
    throw new Error('Anthropic API key not found in Keychain. Run: security add-generic-password -s "obg-anthropic" -a "api_key" -w "sk-ant-..."');
  }
}

function callClaude(apiKey, systemPrompt, userMessage) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      model: 'claude-opus-4-5',
      max_tokens: 1024,
      messages: [{ role: 'user', content: userMessage }],
      system: systemPrompt,
    });

    const req = https.request({
      hostname: 'api.anthropic.com',
      path: '/v1/messages',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'Content-Length': Buffer.byteLength(body),
      },
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.error) reject(new Error(parsed.error.message));
          else resolve(parsed.content[0].text);
        } catch (e) { reject(e); }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// ── Email Generators ─────────────────────────────────────────────────────────

async function generateListicleEmail(target, apiKey) {
  const systemPrompt = `${OBG_CONTEXT}

You write short, confident outreach emails for Online Brand Growth.
Rules:
- Maximum 150 words in the email body
- No subject line padding — be direct
- Lead with why OBG is worth including (results, uniqueness)
- One specific call to action at the end
- Do NOT use phrases like "I hope this email finds you well" or "I wanted to reach out"
- Do NOT grovel or over-explain
- Write as Jon Klein, Co-Founder`;

  const userMessage = `Write a cold outreach email to the team at "${target.name}" (${target.url}) asking to be included in their list of top Amazon marketing agencies.

Key points to include based on these notes: ${target.notes}

The email should:
1. Open with our most impressive differentiator (30-day guarantee or founder-operators angle)
2. Drop 1-2 specific client results
3. Reference their specific article URL: ${target.url}
4. End with a clear ask

Format your response as:
SUBJECT: [subject line]

[email body]`;

  const response = await callClaude(apiKey, systemPrompt, userMessage);
  return response;
}

async function generateGuestPostEmail(target, apiKey) {
  const systemPrompt = `${OBG_CONTEXT}

You write confident, value-first guest post pitch emails for Online Brand Growth.
Rules:
- Maximum 200 words
- Lead with the article concept, not with "I'd love to contribute"
- Show you know their audience
- Include a 1-sentence outline of the article
- No groveling
- Write as Jon Klein, Co-Founder`;

  const userMessage = `Write a guest post pitch email to the editors at "${target.name}" (${target.url}).

Their submission page is: ${target.submit_url}

Notes about this target and ideal pitch angle: ${target.notes}

The email should:
1. Open with the proposed article title/angle (lead with the content idea, not the ask)
2. One sentence on why their readers need this
3. One sentence on OBG's credibility (founder-operators, real client results)
4. Clear ask: "Would you be open to this?" or similar

Format your response as:
SUBJECT: [subject line]

[email body]

---
ARTICLE OUTLINE (optional section for their review):
[3-4 bullet outline of the proposed article]`;

  const response = await callClaude(apiKey, systemPrompt, userMessage);
  return response;
}

// ── Main Runner ──────────────────────────────────────────────────────────────

async function processTarget(target, apiKey, preview = false) {
  log(`Processing ${target.type} target: ${target.name} (${target.id})`);

  let email;
  if (target.type === 'listicle') {
    email = await generateListicleEmail(target, apiKey);
  } else if (target.type === 'guest_post') {
    email = await generateGuestPostEmail(target, apiKey);
  } else {
    log(`Skipping ${target.id} — type "${target.type}" does not use outreach emails`);
    return null;
  }

  const outreachData = {
    id: target.id,
    name: target.name,
    type: target.type,
    url: target.url,
    contact_url: target.contact_url || target.submit_url,
    generated_at: new Date().toISOString(),
    email,
    status: 'draft',
  };

  if (!preview) {
    if (!existsSync(OUTREACH_DIR)) mkdirSync(OUTREACH_DIR, { recursive: true });
    const outFile = join(OUTREACH_DIR, `${target.id}.json`);
    writeFileSync(outFile, JSON.stringify(outreachData, null, 2));
    log(`✓ Saved outreach draft: ${outFile}`);
  }

  return outreachData;
}

async function main() {
  const args = process.argv.slice(2);
  const preview = args.includes('--preview');
  const targetId = args.includes('--id') ? args[args.indexOf('--id') + 1] : null;
  const targetType = args.includes('--type') ? args[args.indexOf('--type') + 1] : null;

  log('=== OBG Outreach Email Generator Starting ===');

  let apiKey;
  try {
    apiKey = getApiKey();
  } catch (e) {
    log(`ERROR: ${e.message}`);
    process.exit(1);
  }

  const { directories, listicles, guest_posts } = JSON.parse(readFileSync(TARGETS_FILE, 'utf8'));
  const allTargets = [...listicles, ...guest_posts]; // Only listicles and guest posts use email outreach

  let targets = allTargets;
  if (targetId) {
    targets = allTargets.filter(t => t.id === targetId);
    if (!targets.length) {
      log(`ERROR: No target found with id "${targetId}"`);
      process.exit(1);
    }
  } else if (targetType) {
    targets = allTargets.filter(t => t.type === targetType);
  } else {
    // Default: only pending targets
    targets = allTargets.filter(t => t.status === 'pending');
  }

  log(`Found ${targets.length} target(s) to process`);

  let processed = 0;
  for (const target of targets) {
    try {
      const result = await processTarget(target, apiKey, preview);
      if (result) {
        processed++;
        if (preview) {
          console.log('\n' + '═'.repeat(60));
          console.log(`TARGET: ${result.name}`);
          console.log(`TYPE: ${result.type}`);
          console.log(`CONTACT: ${result.contact_url}`);
          console.log('─'.repeat(60));
          console.log(result.email);
        }
        // Rate limit
        await new Promise(r => setTimeout(r, 1500));
      }
    } catch (e) {
      log(`ERROR processing ${target.id}: ${e.message}`);
    }
  }

  log(`=== Done. Generated ${processed} outreach email(s) ===`);

  if (!preview && processed > 0) {
    console.log(`\n✓ ${processed} outreach email drafts saved to: scripts/backlinks/outreach/`);
    console.log('Next steps:');
    console.log('  1. Review drafts in scripts/backlinks/outreach/*.json');
    console.log('  2. Run: node scripts/backlinks/tracker.mjs to see dashboard');
    console.log('  3. Send emails manually or via your preferred tool');
    console.log('  4. Update status with: node scripts/backlinks/tracker.mjs --update <id> submitted');
  }
}

main().catch(e => {
  log(`FATAL: ${e.message}`);
  process.exit(1);
});
