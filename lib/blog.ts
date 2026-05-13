import fs from 'fs'
import path from 'path'

export interface BlogPost {
  title: string
  description: string   // 140-160 chars for meta description
  publishDate: string   // YYYY-MM-DD
  htmlContent: string   // Semantic HTML, no inline styles, no classes
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

/**
 * List every blog post slug by reading content/blog/.
 * This is what makes Outrank webhook → new file → article live on autopilot.
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
 * Uses dynamic import so each post is a separate chunk — only loaded
 * when that specific page is requested or pre-rendered.
 * Returns null if the content file doesn't exist.
 */
export async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const mod = await import(`../content/blog/${slug}`)
    return (mod.default ?? mod) as BlogPost
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
