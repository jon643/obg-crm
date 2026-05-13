import { NextRequest, NextResponse } from 'next/server'

/**
 * Outrank → onlinebrandgrowth.com webhook.
 *
 * 1. Validates the Bearer access token (must match env OUTRANK_WEBHOOK_TOKEN).
 * 2. For each article in the payload, writes a new content/blog/{slug}.ts file
 *    to the GitHub repo using the Contents API.
 * 3. Vercel's GitHub integration auto-deploys on push, so the new article appears
 *    at https://www.onlinebrandgrowth.com/blog/{slug} within ~1-2 minutes.
 *
 * Required env vars (set in Vercel Project Settings → Environment Variables):
 *   OUTRANK_WEBHOOK_TOKEN  – the secret Outrank sends as `Authorization: Bearer …`
 *   GITHUB_TOKEN           – fine-grained PAT with Contents: read/write on jon643/obg-crm
 *   GITHUB_REPO            – e.g. "jon643/obg-crm"   (optional, defaults to that)
 *   GITHUB_BRANCH          – e.g. "main"             (optional, defaults to "main")
 *
 * Spec: https://www.outrank.so/docs/webhook
 */

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 60

// ---------- Types matching Outrank's documented payload ----------
interface OutrankArticle {
  id: string
  title: string
  content_markdown?: string
  content_html: string
  meta_description?: string
  created_at: string // ISO 8601
  image_url?: string
  slug: string
  tags?: string[]
}

interface OutrankPayload {
  event_type: string
  timestamp: string
  data: {
    articles: OutrankArticle[]
  }
}

// ---------- Helpers ----------

/** Escape a string so it is safe to embed inside a TS template literal (`...`). */
function escapeForBacktick(input: string): string {
  // Order matters: escape backslash first, then backticks and ${ interpolations.
  return input
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${')
}

/** Sanitise a slug to a-z, 0-9, hyphen. Used as filename. */
function sanitiseSlug(raw: string): string {
  return raw
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

/** Convert ISO timestamp to YYYY-MM-DD. */
function toPublishDate(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return new Date().toISOString().slice(0, 10)
  return d.toISOString().slice(0, 10)
}

/** Generate the TypeScript source for a content/blog/{slug}.ts file. */
function generatePostFile(article: OutrankArticle): string {
  const title = escapeForBacktick(article.title ?? '')
  const description = escapeForBacktick(
    (article.meta_description ?? article.title ?? '').slice(0, 300)
  )
  const publishDate = toPublishDate(article.created_at)
  const htmlContent = escapeForBacktick(article.content_html ?? '')

  return `import type { BlogPost } from '@/lib/blog'

// Auto-generated from Outrank webhook (article id: ${article.id}).
// Do not hand-edit; re-publish in Outrank to update.

const post: BlogPost = {
  title: \`${title}\`,
  description: \`${description}\`,
  publishDate: '${publishDate}',
  htmlContent: \`${htmlContent}\`,
}

export default post
`
}

/** Commit a single file to GitHub via the Contents API (creates or updates). */
async function commitFileToGitHub(args: {
  repo: string
  branch: string
  token: string
  path: string
  contents: string
  message: string
}): Promise<{ ok: boolean; status: number; body?: unknown }> {
  const { repo, branch, token, path, contents, message } = args
  const apiUrl = `https://api.github.com/repos/${repo}/contents/${path}`

  // Look up the existing file's sha (required if we're updating).
  let sha: string | undefined
  const headRes = await fetch(`${apiUrl}?ref=${encodeURIComponent(branch)}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    cache: 'no-store',
  })
  if (headRes.ok) {
    const existing = (await headRes.json()) as { sha?: string }
    sha = existing?.sha
  } else if (headRes.status !== 404) {
    return { ok: false, status: headRes.status, body: await headRes.text() }
  }

  const putRes = await fetch(apiUrl, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message,
      content: Buffer.from(contents, 'utf8').toString('base64'),
      branch,
      ...(sha ? { sha } : {}),
    }),
    cache: 'no-store',
  })

  if (!putRes.ok) {
    return { ok: false, status: putRes.status, body: await putRes.text() }
  }
  return { ok: true, status: putRes.status }
}

// ---------- Route handler ----------

function unauthorized(reason: string) {
  return NextResponse.json({ error: 'Unauthorized', reason }, { status: 401 })
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    info: 'Outrank webhook endpoint. POST JSON with Authorization: Bearer <token>.',
  })
}

export async function POST(req: NextRequest) {
  // 1. Verify access token
  const expectedToken = process.env.OUTRANK_WEBHOOK_TOKEN
  if (!expectedToken) {
    return NextResponse.json(
      { error: 'Server misconfigured: OUTRANK_WEBHOOK_TOKEN is not set.' },
      { status: 500 }
    )
  }

  const authHeader = req.headers.get('authorization') ?? ''
  if (!authHeader.startsWith('Bearer ')) return unauthorized('missing-bearer')
  const token = authHeader.slice('Bearer '.length).trim()
  if (token !== expectedToken) return unauthorized('bad-token')

  // 2. Parse payload
  let payload: OutrankPayload
  try {
    payload = (await req.json()) as OutrankPayload
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const articles = payload?.data?.articles ?? []
  if (!Array.isArray(articles) || articles.length === 0) {
    return NextResponse.json(
      { message: 'No articles in payload', event_type: payload?.event_type },
      { status: 200 }
    )
  }

  // 3. GitHub config
  const githubToken = process.env.GITHUB_TOKEN
  const repo = process.env.GITHUB_REPO ?? 'jon643/obg-crm'
  const branch = process.env.GITHUB_BRANCH ?? 'main'
  if (!githubToken) {
    return NextResponse.json(
      { error: 'Server misconfigured: GITHUB_TOKEN is not set.' },
      { status: 500 }
    )
  }

  // 4. Commit each article
  const results: Array<{
    slug: string
    title: string
    ok: boolean
    status: number
    error?: unknown
  }> = []

  for (const article of articles) {
    const slug = sanitiseSlug(article.slug || article.title || article.id)
    if (!slug) {
      results.push({
        slug: '',
        title: article.title ?? '',
        ok: false,
        status: 400,
        error: 'empty-slug',
      })
      continue
    }
    const path = `content/blog/${slug}.ts`
    const contents = generatePostFile(article)
    const message = `outrank: publish "${article.title}" (${slug})`

    try {
      const res = await commitFileToGitHub({
        repo,
        branch,
        token: githubToken,
        path,
        contents,
        message,
      })
      results.push({
        slug,
        title: article.title ?? '',
        ok: res.ok,
        status: res.status,
        ...(res.ok ? {} : { error: res.body }),
      })
    } catch (err) {
      results.push({
        slug,
        title: article.title ?? '',
        ok: false,
        status: 500,
        error: err instanceof Error ? err.message : String(err),
      })
    }
  }

  const anyFailed = results.some((r) => !r.ok)
  return NextResponse.json(
    {
      message: anyFailed
        ? 'Webhook received; some articles failed to commit.'
        : 'Webhook processed successfully',
      event_type: payload.event_type,
      results,
    },
    { status: anyFailed ? 207 : 200 }
  )
}
