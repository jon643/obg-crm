import { NextRequest, NextResponse } from 'next/server'

const TOPICS = [
  {
    theme: 'Amazon PPC',
    prompt: 'Write an expert Amazon PPC strategy blog post for 7- and 8-figure brand owners. Cover bid strategy, campaign structure (Sponsored Products, Sponsored Brands, Sponsored Display), targeting types (auto vs manual, broad/phrase/exact), and how to systematically improve profitability. Include actionable frameworks, specific numbers/benchmarks where relevant, and OBG\'s perspective. Do NOT include a generic intro or fluffy conclusion — get straight to the insight. Write in semantic HTML only (p, h2, h3, ul, li, strong, a tags). No inline styles, no classes. End with a CTA paragraph mentioning a free strategy session linked to <a href="/#book-call">book a free strategy session</a>.',
    titleSeed: 'Amazon PPC bid strategy',
  },
  {
    theme: 'Listing Optimization',
    prompt: 'Write an expert Amazon listing optimization blog post for serious brand owners. Cover title optimization, bullet points, backend keywords, A+ content, and how the A9/A10 algorithm ranks listings. Include conversion rate benchmarks, keyword research methodology, and common mistakes brands make. Write in OBG\'s voice — direct, data-driven, no fluff. Use semantic HTML only (p, h2, h3, ul, li, strong, a tags). No inline styles, no classes. End with a CTA paragraph mentioning a free strategy session linked to <a href="/#book-call">book a free strategy session</a>.',
    titleSeed: 'Amazon listing optimization',
  },
  {
    theme: 'FBA Logistics',
    prompt: 'Write an expert Amazon FBA logistics blog post for 7- and 8-figure brand owners. Cover inventory planning, reorder points, lead time management, FBA fee structures, stranded inventory prevention, and the real cost of stockouts vs. overstock. Include specific calculations and frameworks a brand operations team can use. Write in OBG\'s voice — direct, practical, no fluff. Use semantic HTML only (p, h2, h3, ul, li, strong, a tags). No inline styles, no classes. End with a CTA paragraph mentioning a free strategy session linked to <a href="/#book-call">book a free strategy session</a>.',
    titleSeed: 'Amazon FBA inventory management',
  },
  {
    theme: 'Brand Protection',
    prompt: 'Write an expert Amazon brand protection blog post for serious brand owners. Cover Brand Registry enrollment, Project Zero, IP Accelerator, unauthorized seller enforcement, counterfeit reporting, and MAP policy enforcement. Include what works, what doesn\'t, and OBG\'s actual enforcement methodology. Write in OBG\'s voice — direct, authoritative, no fluff. Use semantic HTML only (p, h2, h3, ul, li, strong, a tags). No inline styles, no classes. End with a CTA paragraph mentioning a free strategy session linked to <a href="/#book-call">book a free strategy session</a>.',
    titleSeed: 'Amazon brand protection strategy',
  },
  {
    theme: 'MAP Enforcement',
    prompt: 'Write an expert MAP pricing enforcement blog post for Amazon brand owners. Cover what MAP is vs MSRP, how to write an enforceable MAP policy, tools for monitoring violations, seller agreement structures, and how to enforce MAP without violating antitrust law. Include real-world enforcement tactics. Write in OBG\'s voice — direct, legal-aware, no fluff. Use semantic HTML only (p, h2, h3, ul, li, strong, a tags). No inline styles, no classes. End with a CTA paragraph mentioning a free strategy session linked to <a href="/#book-call">book a free strategy session</a>.',
    titleSeed: 'MAP pricing enforcement on Amazon',
  },
  {
    theme: 'Amazon SEO',
    prompt: 'Write an expert Amazon SEO blog post for brand owners who want to rank organically. Cover how A9/A10 algorithm works, keyword indexing, search query performance data, the role of conversion rate in ranking, and how PPC drives organic rank. Include tactics OBG uses to compound organic growth. Write in OBG\'s voice — direct, strategic, no fluff. Use semantic HTML only (p, h2, h3, ul, li, strong, a tags). No inline styles, no classes. End with a CTA paragraph mentioning a free strategy session linked to <a href="/#book-call">book a free strategy session</a>.',
    titleSeed: 'Amazon SEO and organic ranking',
  },
  {
    theme: 'Inventory Management',
    prompt: 'Write an expert Amazon inventory management blog post for 7- and 8-figure sellers. Cover IPI score optimization, aged inventory fees, restock limits, demand forecasting methods, safety stock calculations, and balancing FBA vs FBM during stockouts. Include specific formulas and decision frameworks. Write in OBG\'s voice — direct, analytical, no fluff. Use semantic HTML only (p, h2, h3, ul, li, strong, a tags). No inline styles, no classes. End with a CTA paragraph mentioning a free strategy session linked to <a href="/#book-call">book a free strategy session</a>.',
    titleSeed: 'Amazon inventory management strategy',
  },
  {
    theme: 'Product Launch Strategy',
    prompt: 'Write an expert Amazon product launch strategy blog post for brands launching new ASINs. Cover the launch sequence (external traffic, vine reviews, PPC launch structure, keyword rank building), how to achieve initial velocity without violating TOS, launch budget sizing, and how to know when a launch has succeeded. Include OBG\'s 90-day launch framework. Write in OBG\'s voice — direct, practical, no fluff. Use semantic HTML only (p, h2, h3, ul, li, strong, a tags). No inline styles, no classes. End with a CTA paragraph mentioning a free strategy session linked to <a href="/#book-call">book a free strategy session</a>.',
    titleSeed: 'Amazon product launch strategy',
  },
]

// Topic rotation by day of week (0=Sun, 1=Mon, ..., 6=Sat)
// Mon=PPC, Tue=Listing, Wed=FBA, Thu=Brand Protection, Fri=SEO, Sat=Inventory, Sun=Launch
const DAY_TO_TOPIC_INDEX = [6, 0, 1, 2, 3, 4, 5] as const

function getTopicForDate(dateStr: string): typeof TOPICS[0] {
  const day = new Date(dateStr + 'T00:00:00Z').getUTCDay()
  return TOPICS[DAY_TO_TOPIC_INDEX[day]]
}

// Generate a slug from a title
function titleToSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80)
    .replace(/-$/, '')
}

export async function GET(request: NextRequest) {
  // Verify cron secret to prevent unauthorized calls
  const authHeader = request.headers.get('authorization')
  const cronSecret = process.env.CRON_SECRET
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const today = new Date().toISOString().split('T')[0] // YYYY-MM-DD
  const topic = getTopicForDate(today)

  try {
    // Step 1: Generate blog post content via Anthropic API
    const anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY!,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 4000,
        messages: [
          {
            role: 'user',
            content: `You are writing for Online Brand Growth (OBG), an Amazon growth agency founded by Jon Klein and Dan Balda that manages $30M+ in annual Amazon revenue for 7- and 8-figure brands. Your writing is direct, data-driven, and authoritative — no filler, no generic advice.

${topic.prompt}

IMPORTANT FORMAT REQUIREMENTS:
- Start your response with a JSON block wrapped in <json> tags containing: title (compelling SEO title, 50-65 chars), description (meta description 140-160 chars), slug (URL slug)
- Then provide the full HTML content after </json>
- The slug must be unique and descriptive, related to: ${topic.titleSeed}

Example format:
<json>
{"title": "Your Title Here", "description": "Your meta description here.", "slug": "your-url-slug-here"}
</json>
<p>Your content starts here...</p>`,
          },
        ],
      }),
    })

    if (!anthropicResponse.ok) {
      const err = await anthropicResponse.text()
      console.error('Anthropic API error:', err)
      return NextResponse.json({ error: 'Anthropic API failed', detail: err }, { status: 500 })
    }

    const anthropicData = await anthropicResponse.json()
    const rawContent = anthropicData.content[0]?.text || ''

    // Parse the JSON metadata block
    const jsonMatch = rawContent.match(/<json>([\s\S]*?)<\/json>/)
    if (!jsonMatch) {
      return NextResponse.json({ error: 'Failed to parse JSON from AI response', raw: rawContent.slice(0, 500) }, { status: 500 })
    }

    let meta: { title: string; description: string; slug: string }
    try {
      meta = JSON.parse(jsonMatch[1].trim())
    } catch {
      return NextResponse.json({ error: 'Invalid JSON in AI response', raw: jsonMatch[1] }, { status: 500 })
    }

    const htmlContent = rawContent.replace(/<json>[\s\S]*?<\/json>/, '').trim()
    const slug = titleToSlug(meta.slug || meta.title)
    const filename = `${slug}.ts`

    // Build the TypeScript content file
    const tsContent = `import type { BlogPost } from '@/lib/blog'

const post: BlogPost = {
  title: ${JSON.stringify(meta.title)},
  description: ${JSON.stringify(meta.description)},
  publishDate: '${today}',
  htmlContent: \`
    ${htmlContent.replace(/`/g, '\\`')}
  \`,
}

export default post
`

    // Step 2: Commit to GitHub via API
    const githubToken = process.env.GITHUB_TOKEN
    if (!githubToken) {
      return NextResponse.json({ error: 'GITHUB_TOKEN not configured' }, { status: 500 })
    }

    // Get the current file SHA if it exists (required for update, not needed for create)
    const githubApiBase = 'https://api.github.com/repos/jonny-vibes/online-brand-growth/contents'
    const filePath = `content/blog/${filename}`

    let fileSha: string | undefined
    const existingFileResponse = await fetch(`${githubApiBase}/${filePath}`, {
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
    })
    if (existingFileResponse.ok) {
      const existingFile = await existingFileResponse.json()
      fileSha = existingFile.sha
    }

    // Commit the new blog post file
    const commitBody: Record<string, string> = {
      message: `blog: auto-publish "${meta.title}" (${today})`,
      content: Buffer.from(tsContent).toString('base64'),
      branch: 'main',
    }
    if (fileSha) commitBody.sha = fileSha

    const commitResponse = await fetch(`${githubApiBase}/${filePath}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      body: JSON.stringify(commitBody),
    })

    if (!commitResponse.ok) {
      const err = await commitResponse.text()
      console.error('GitHub commit error:', err)
      return NextResponse.json({ error: 'GitHub commit failed', detail: err }, { status: 500 })
    }

    const commitData = await commitResponse.json()

    return NextResponse.json({
      success: true,
      post: {
        title: meta.title,
        slug,
        date: today,
        topic: topic.theme,
      },
      github: {
        sha: commitData.content?.sha,
        url: commitData.content?.html_url,
      },
    })
  } catch (error) {
    console.error('Cron job error:', error)
    return NextResponse.json(
      { error: 'Internal server error', detail: String(error) },
      { status: 500 }
    )
  }
}
