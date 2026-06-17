import fs from 'fs'
import path from 'path'

export interface BlogPost {
  title: string
  description: string   // 140-160 chars for meta description
  publishDate: string   // YYYY-MM-DD
  htmlContent: string   // Semantic HTML, no inline styles, no classes
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

/* ---------------------------------------------------------------------------
 * SEO post-processing applied to every post's htmlContent on load.
 * Outrank-generated posts ship with raw HTML; this layer fixes link hygiene
 * and adds contextual internal links to our service pages â automatically,
 * across the whole library, with zero edits to the content files.
 * ------------------------------------------------------------------------- */

const SITE = 'https://www.onlinebrandgrowth.com'

// Direct-competitor domains whose outbound links get unwrapped to plain text.
// Extend this list to neutralize more competitors site-wide.
const COMPETITOR_DOMAINS = ['chameleoncollective.com', 'sellerassistant.app']

// Contextual internal links: first matching phrase per service, body text only.
// Ordered most-specific first so broad phrases don't pre-empt precise ones.
const SERVICE_KEYWORDS: Array<[string, RegExp[]]> = [
  ['/calculator', [/\bprofit calculator\b/i, /\bFBA calculator\b/i, /\bfee calculator\b/i, /\bmargin calculator\b/i, /\bAmazon calculator\b/i]],
  ['/services/amazon-seo-listing-optimization', [/\blisting optimization\b/i, /\bAmazon SEO\b/i]],
  ['/services/amazon-ppc-management', [/\bPPC management\b/i, /\bAmazon PPC\b/i, /\bSponsored Products\b/i]],
  ['/services/brand-registry-enforcement', [/\bBrand Registry\b/i, /\bunauthorized sellers?\b/i, /\bMAP enforcement\b/i]],
  ['/services/aplus-content-design', [/\bA\+ Content\b/i]],
  ['/services/fba-reimbursement', [/\bFBA reimbursements?\b/i]],
  ['/services/fba-logistics-operations', [/\bFBA logistics\b/i, /\binventory management\b/i]],
  ['/services/amazon-strategic-consulting', [/\bAmazon consulting\b/i, /\bAmazon strategy\b/i]],
  ['/services/full-account-management', [/\bAmazon account management\b/i]],
  ['/services/amazon-storefront-design', [/\bAmazon storefront\b/i, /\bstorefront design\b/i]],
  ['/services/amazon-product-launch', [/\bproduct launch\b/i]],
  ['/services/international-amazon-expansion', [/\binternational expansion\b/i]],
  ['/services/vendor-vs-seller-central', [/\bVendor Central\b/i]],
]

// Keep auto-linking natural; never spam.
const MAX_AUTOLINKS = 5

function domainOf(url: string): string {
  return url.replace(/^https?:\/\//i, '').split('/')[0].replace(/^www\./i, '').toLowerCase()
}

export function processBlogHtml(html: string): string {
  if (!html) return html
  let out = html

  // (A) Normalize internal absolute links to the canonical www host (kills 301 hops).
  out = out.replace(/\bhttps?:\/\/(?:www\.)?onlinebrandgrowth\.com/gi, SITE)

  // (B) Outbound links: strip direct competitors, nofollow the rest.
  out = out.replace(
    /<a\b([^>]*?)href=("|')(.*?)\2([^>]*)>([\s\S]*?)<\/a>/gi,
    (match, pre, q, url, post, inner) => {
      const isInternal = /onlinebrandgrowth\.com/i.test(url) || url.startsWith('/') || url.startsWith('#')
      if (isInternal) return match
      if (!/^https?:\/\//i.test(url)) return match // mailto:, tel:, etc.
      if (COMPETITOR_DOMAINS.includes(domainOf(url))) return inner // unwrap to plain text
      const attrs = (pre + ' ' + post)
        .replace(/\s*rel=("|').*?\1/gi, '')
        .replace(/\s*target=("|').*?\1/gi, '')
        .trim()
      return `<a ${attrs ? attrs + ' ' : ''}href=${q}${url}${q} rel="nofollow noopener noreferrer" target="_blank">${inner}</a>`
    }
  )

  // (C) Auto-link service keywords â first occurrence per service, text nodes only,
  //     never inside existing anchors or headings, capped for a natural footprint.
  const usedServices = new Set<string>()
  let added = 0
  const tokens = out.split(/(<[^>]+>)/)
  const stack: string[] = []
  for (let i = 0; i < tokens.length; i++) {
    const tok = tokens[i]
    if (tok.startsWith('<')) {
      const closeMatch = tok.match(/^<\/([a-z0-9]+)/i)
      const openMatch = tok.match(/^<([a-z0-9]+)/i)
      if (closeMatch) {
        const t = closeMatch[1].toLowerCase()
        const idx = stack.lastIndexOf(t)
        if (idx !== -1) stack.splice(idx, 1)
      } else if (openMatch && !tok.endsWith('/>')) {
        stack.push(openMatch[1].toLowerCase())
      }
      continue
    }
    if (!tok.trim()) continue
    const blocked = stack.some((t) => t === 'a' || t === 'h1' || t === 'h2' || t === 'h3')
    if (blocked) continue
    let text = tok
    for (const [servicePath, regexes] of SERVICE_KEYWORDS) {
      if (added >= MAX_AUTOLINKS) break
      if (usedServices.has(servicePath)) continue
      for (const re of regexes) {
        const mm = text.match(re)
        if (mm) {
          text = text.replace(re, `<a href="${servicePath}">${mm[0]}</a>`)
          usedServices.add(servicePath)
          added++
          break
        }
      }
    }
    tokens[i] = text
  }
  return tokens.join('')
}

/**
 * List every blog post slug by reading content/blog/.
 * This is what makes Outrank webhook â new file â article live on autopilot.
 */
export function getAllSlugs(): string[] {
  try {
    return fs
      .readdirSync(BLOG_DIR)
      .filter((f) => f.endsWith('.ts') && f !== 'index.ts')
      .map((f) => f.replace(/\.ts$/, ''))
  } catch {
    return []
  }
}

/**
 * Load a blog post from the static content directory.
 * Uses dynamic import so each post is a separate chunk â only loaded
 * when that specific page is requested or pre-rendered.
 * Returns null if the content file doesn't exist.
 */
export async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const mod = await import(`../content/blog/${slug}`)
    const post = (mod.default ?? mod) as BlogPost
    return { ...post, htmlContent: processBlogHtml(post.htmlContent) }
  } catch {
    return null
  }
}

/**
 * Load every post's metadata (title, date, slug) for the /blog index page.
 * Sorted newest-first.
 */
export async function getAllPostsMeta(): Promise<
  Array<{ slug: string; title: string; publishDate: string }>
> {
  const slugs = getAllSlugs()
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPost(slug)
      if (!post) return null
      return { slug, title: post.title, publishDate: post.publishDate }
    })
  )
  return posts
    .filter((p): p is { slug: string; title: string; publishDate: string } => p !== null)
    .sort((a, b) => b.publishDate.localeCompare(a.publishDate))
}
