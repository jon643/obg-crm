import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { getPost, getAllSlugs, getAllPostsMeta } from '@/lib/blog'

const BASE_URL = 'https://www.onlinebrandgrowth.com'

// Infer category from slug
function getCategory(slug: string): string {
  if (slug.match(/ppc|advertising|ads|sponsored|acos|dsp/)) return 'Advertising'
  if (slug.match(/listing|keyword|seo|optimiz|image|photography|a-plus|content|storefront/)) return 'Catalog & SEO'
  if (slug.match(/fba|fbm|freight|ship|inventory|logistics|packaging|fulfillment|prep-center/)) return 'Operations'
  if (slug.match(/brand-registry|brand-protect|map|msrp|unauthorized|reseller|map-pricing/)) return 'Brand Protection'
  if (slug.match(/suspend|reinstate|account-suspend|deactivat/)) return 'Account Health'
  if (slug.match(/conversion|growth|strategy|channel|ecommerce|launch|scale|increase|improve|worldwide|global/)) return 'Strategy'
  if (slug.match(/fee|cost|margin|contribution|pricing|price|buy-box|profit/)) return 'Profitability'
  return 'Strategy'
}

// Pre-render all blog pages at build time — slugs discovered from content/blog/.
// Adding a new .ts file to that folder (e.g. via the Outrank webhook) auto-generates the route.
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

// Generate per-page metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getPost(params.slug)
  const canonicalUrl = `${BASE_URL}/blog/${params.slug}/`

  if (!post) {
    return {
      title: 'Article Not Found',
      robots: { index: false, follow: false },
    }
  }

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonicalUrl,
      type: 'article',
      ...(post.publishDate && { publishedTime: post.publishDate }),
    },
    authors: post.author
      ? [{ name: post.author.name, ...(post.author.url ? { url: post.author.url } : {}) }]
      : [
          { name: 'Jon Klein', url: 'https://www.linkedin.com/in/jon-klein-5489724b/' },
          { name: 'Dan Balda', url: 'https://www.linkedin.com/in/daniel-balda/' },
        ],
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params

  // Validate slug (filesystem is the source of truth)
  if (!getAllSlugs().includes(slug)) notFound()

  const post = await getPost(slug)
  if (!post) notFound()

  const category = getCategory(slug)

  const allPosts = await getAllPostsMeta()
  const relatedPosts = [
    ...allPosts.filter((p) => p.slug !== slug && getCategory(p.slug) === category),
    ...allPosts.filter((p) => p.slug !== slug && getCategory(p.slug) !== category),
  ].slice(0, 4)

  const articleImage =
    (post.htmlContent.match(/<img[^>]+src=["']([^"']+)["']/i) || [])[1] ||
    `${BASE_URL}/og-image.jpg`

  const schemaAuthor = post.author
    ? [
        {
          '@type': 'Person',
          name: post.author.name,
          ...(post.author.url ? { url: post.author.url } : {}),
        },
      ]
    : [
        {
          '@type': 'Person',
          name: 'Jon Klein',
          url: 'https://www.linkedin.com/in/jon-klein-5489724b/',
        },
        {
          '@type': 'Person',
          name: 'Dan Balda',
          url: 'https://www.linkedin.com/in/daniel-balda/',
        },
      ]

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    image: articleImage,
    headline: post.title,
    description: post.description,
    url: `${BASE_URL}/blog/${slug}/`,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: schemaAuthor,
    publisher: {
      '@type': 'Organization',
      name: 'Online Brand Growth',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logos/obg-logo-white.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${slug}/`,
    },
  }

  return (
    <>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: BASE_URL },
          { name: 'Blog', url: `${BASE_URL}/blog` },
          { name: post.title, url: `${BASE_URL}/blog/${slug}/` },
        ]}
      />

      <main className="min-h-screen bg-obg-blue-darker">

        {/* Article Hero */}
        <section className="relative overflow-hidden bg-gradient-hero pt-28 pb-14">
          <div
            aria-hidden
            className="absolute inset-0 opacity-10"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #ff795e 0%, transparent 70%)',
            }}
          />
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-4xl mx-auto relative z-10">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8 text-sm">
              <Link href="/blog" className="text-obg-gray hover:text-obg-orange transition-colors duration-200">
                Blog
              </Link>
              <span className="text-obg-gray/40">/</span>
              <span className="text-obg-orange font-medium truncate max-w-xs">{category}</span>
            </div>

            {/* Category badge */}
            <span className="inline-block text-xs font-bold text-obg-orange border border-obg-orange/30 rounded-full px-3 py-1 bg-obg-blue-darker/80 mb-5">
              {category}
            </span>

            {/* Title */}
            <h1
              className="text-white font-display font-bold leading-tight mb-6 text-balance"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
            >
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-obg-gray text-sm">
              <span>By <strong className="text-obg-offwhite">{post.author?.name ?? 'Online Brand Growth'}</strong>{post.author?.title ? `, ${post.author.title}` : ''}</span>
              {post.publishDate && (
                <>
                  <span className="text-obg-gray/30">·</span>
                  <time dateTime={post.publishDate}>
                    {new Date(post.publishDate).toLocaleDateString('en-US', {
                      year: 'numeric', month: 'long', day: 'numeric',
                    })}
                  </time>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-14 bg-obg-blue-darker">
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 items-start">

              {/* Main article body */}
              <article
                className="prose-obg"
                dangerouslySetInnerHTML={{ __html: post.htmlContent }}
              />

              {/* Sidebar */}
              <aside className="lg:sticky lg:top-28 space-y-6">
                <div className="rounded-2xl border border-obg-orange/20 bg-obg-blue p-6">
                  <div className="w-10 h-10 rounded-xl bg-obg-orange/10 border border-obg-orange/20 flex items-center justify-center mb-4">
                    <BookOpen size={18} className="text-obg-orange" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">
                    Ready to Grow on Amazon?
                  </h3>
                  <p className="text-obg-gray text-sm leading-relaxed mb-4">
                    Book a free strategy call with OBG&apos;s founders. No fluff — just an honest audit of your Amazon presence and a plan to grow it.
                  </p>
                  <Link
                    href="/#book-call"
                    className="btn-primary text-sm px-5 py-2.5 w-full text-center block"
                  >
                    Get Your Free Audit
                  </Link>
                </div>

                <Link
                  href="/blog"
                  className="flex items-center gap-2 text-obg-gray text-sm hover:text-obg-orange transition-colors duration-200"
                >
                  <ArrowLeft size={14} /> Back to all articles
                </Link>
              </aside>

            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="section bg-obg-blue-darker border-t border-obg-blue-light/10">
            <div className="container-obg px-6 md:px-8 lg:px-12 max-w-5xl mx-auto">
              <h2 className="text-white text-2xl mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="group block p-5 rounded-xl bg-obg-blue border border-obg-blue-light/15 hover:border-obg-orange/40 transition-colors duration-200"
                  >
                    <span className="text-obg-orange text-xs font-semibold tracking-widest uppercase">{getCategory(rp.slug)}</span>
                    <span className="block text-white font-semibold mt-2 leading-snug group-hover:text-obg-orange transition-colors duration-200">{rp.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="section bg-obg-blue border-t border-obg-blue-light/20">
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-3xl mx-auto text-center">
            <span className="inline-block text-obg-orange font-semibold text-sm tracking-widest uppercase mb-3">
              Ready to Grow?
            </span>
            <h2 className="text-white mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
              Turn Amazon Knowledge Into Real Results
            </h2>
            <p className="text-obg-gray text-lg mb-10">
              Reading is just the start. Book a free strategy call and let&apos;s audit your Amazon presence, identify your biggest opportunities, and build a plan together.
            </p>
            <Link
              href="/#book-call"
              className="btn-primary text-lg px-9 py-4 inline-block"
            >
              Get Your FREE OBG360 Audit
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
