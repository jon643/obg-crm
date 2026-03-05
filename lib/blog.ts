export interface BlogPost {
  title: string
  description: string   // 140-160 chars for meta description
  publishDate: string   // YYYY-MM-DD
  htmlContent: string   // Semantic HTML, no inline styles, no classes
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
