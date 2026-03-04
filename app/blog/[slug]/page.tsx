import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ArrowLeft, ExternalLink, BookOpen } from 'lucide-react'

const BASE_URL = 'https://www.onlinebrandgrowth.com'
const OLD_SITE = 'https://onlinebrandgrowth.com'

// All blog post slugs — must match sitemap.ts
const blogSlugs = [
  'what-is-fulfillment-by-amazon',
  'product-information-management',
  'sponsored-ad-amazon',
  'amazon-backend-keywords',
  'can-you-use-coupons-on-amazon',
  'what-is-frustration-free-packaging',
  'seller-fulfilled-prime-fulfillment',
  'amazon-brand-guide',
  'amazon-channel-management',
  'ecommerce-conversion-rates',
  'image-guidelines-amazon',
  'inventory-turnover-ratio-explained',
  'amazon-vendor-vs-seller',
  'how-much-does-amazon-charge-to-sell',
  'amazon-storefront-design',
  'suspended-from-amazon',
  'ecommerce-account-management',
  'what-is-an-amazon-storefront',
  'amazon-brand-protection-services',
  'amazon-ppc-agency-pricing',
  'how-to-calculate-contribution-margin',
  'amazon-fba-fees',
  'amazon-listing-optimisation',
  'brand-registry-amazon',
  'photography-for-amazon',
  'what-does-acos-stand-for',
  'create-an-amazon-storefront',
  'prep-center-fba',
  'minimum-advertised-price-monitoring',
  'how-to-make-an-amazon-storefront',
  'amazon-product-photography',
  'acos-in-amazon',
  'what-does-map-mean-in-pricing',
  'digital-shelf-analytics',
  'ecommerce-growth-strategies',
  'amazon-fba-freight-forwarders',
  'amazon-suspending-accounts',
  'amazon-seller-central-vs-vendor-central',
  'amazon-advertising-strategy',
  'brand-protection-amazon',
  'what-is-frustration-free-packaging-on-amazon',
  'product-photography-for-amazon',
  'amazon-fba-vs-fbm',
  'find-amazon-keywords',
  'amazon-pricing-strategy',
  'fba-freight-forwarder',
  'sell-on-amazon-worldwide',
  'freight-forwarder-for-amazon-fba',
  'account-suspension-amazon',
  'map-vs-msrp',
  'amazon-brand-store',
  'inventory-management-best-practices',
  'amazon-images-requirements',
  'amazon-deactivated-seller-account',
  'msrp-vs-map',
  'amazon-account-suspended',
  'product-photography-amazon',
  'best-amazon-storefronts',
  'listing-optimization-on-amazon',
  'amazon-account-suspensions',
  'freight-forwarders-for-amazon-fba',
  'amazon-brand-stores',
  'listing-optimization-amazon',
  'amazon-advertising-strategies',
  'map-vs-msrp-price',
  'track-amazon-ranking',
  'amazon-brand-guidelines',
  'amazon-ppc-management-services',
  'amazon-listing-optimization',
  'amazon-fba-is-it-worth-it-2',
  'suspended-amazon-account',
  'amazon-ad-management',
  'how-to-increase-amazon-sales',
  'product-launch-strategies',
  'optimizing-amazon-listings',
  'global-selling-with-amazon',
  'account-suspended-amazon',
  'optimizing-amazon-product-listings',
  'optimize-amazon-product-listings',
  'improve-amazon-sales',
  'increase-amazon-sales',
  'how-to-improve-amazon-sales',
  'target-market-for-amazon',
  'how-to-launch-product-on-amazon',
  'what-is-frustration-free-packaging-at-amazon',
  'freight-forwarder-amazon-fba',
  'ship-from-china-to-amazon-fba',
  'amazon-brand-registry-benefits',
  'what-is-amazon-brand-registry',
  'best-amazon-inventory-management-software',
  'amazon-account-suspension',
  'unauthorized-sellers-on-amazon',
  'how-to-win-amazon-buy-box',
  'amazon-fba-profit-margin-calculator',
  'map-pricing-vs-msrp',
  'minimum-advertised-price-policy',
  'amazon-pricing-changes',
  'cost-of-selling-on-amazon',
  'amazon-pricing-strategies',
  'amazon-dsp-advertising',
  'acos-on-amazon',
  'amazon-ads-management',
  'image-requirements-for-amazon',
]

// Infer category from slug — same logic as blog/page.tsx
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

// Fetch and extract article content from the old WordPress site
interface ArticleData {
  title: string
  description: string
  htmlContent: string
  publishDate: string
}

async function fetchArticle(slug: string): Promise<ArticleData | null> {
  try {
    const res = await fetch(`${OLD_SITE}/blog/${slug}/`, {
      next: { revalidate: 86400 }, // cache for 24h, revalidate daily
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; OBG-site-bot/1.0)',
      },
    })

    if (!res.ok) return null

    const html = await res.text()

    // Extract title
    const titleMatch = html.match(/<h1[^>]*class="[^"]*entry-title[^"]*"[^>]*>([\s\S]*?)<\/h1>/i)
      || html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)
    const rawTitle = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : slug.replace(/-/g, ' ')

    // Extract meta description
    const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i)
      || html.match(/<meta\s+content="([^"]+)"\s+name="description"/i)
    const description = descMatch ? descMatch[1] : `${rawTitle} — Amazon strategy insights from Online Brand Growth.`

    // Extract publish date
    const dateMatch = html.match(/<time[^>]*datetime="([^"]+)"[^>]*>/i)
    const publishDate = dateMatch ? dateMatch[1].split('T')[0] : ''

    // Extract article body — try multiple WordPress content selectors
    let content = ''
    const selectors = [
      { start: 'class="entry-content', end: '</article>' },
      { start: 'class="post-content', end: '</article>' },
      { start: 'class="article-content', end: '</section>' },
      { start: '<article', end: '</article>' },
    ]

    for (const sel of selectors) {
      const startIdx = html.indexOf(sel.start)
      if (startIdx !== -1) {
        // Find the opening tag's closing >
        const tagEnd = html.indexOf('>', startIdx) + 1
        const endIdx = html.indexOf(sel.end, tagEnd)
        if (endIdx !== -1) {
          content = html.substring(tagEnd, endIdx)
          break
        }
      }
    }

    // Fallback: look for main content area
    if (!content) {
      const mainStart = html.indexOf('<main')
      const mainEnd = html.indexOf('</main>')
      if (mainStart !== -1 && mainEnd !== -1) {
        const tagEnd = html.indexOf('>', mainStart) + 1
        content = html.substring(tagEnd, mainEnd)
      }
    }

    if (!content) return null

    // Clean up the extracted HTML:
    // 1. Remove scripts and styles
    content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    content = content.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    // 2. Remove comments
    content = content.replace(/<!--[\s\S]*?-->/g, '')
    // 3. Remove share buttons, nav, sidebars, comments sections
    content = content.replace(/<(nav|aside|footer|form)[^>]*>[\s\S]*?<\/\1>/gi, '')
    // 4. Remove empty paragraphs
    content = content.replace(/<p[^>]*>\s*<\/p>/gi, '')
    // 5. Fix relative links to point to old domain
    content = content.replace(/href="\//g, `href="${OLD_SITE}/`)
    content = content.replace(/src="\//g, `src="${OLD_SITE}/`)
    // 6. Strip inline style attributes that may conflict
    content = content.replace(/\sstyle="[^"]*"/gi, '')

    return {
      title: rawTitle,
      description,
      htmlContent: content,
      publishDate,
    }
  } catch {
    return null
  }
}

// Pre-render all blog pages at build time
export function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }))
}

// Generate per-page metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const article = await fetchArticle(params.slug)
  const canonicalUrl = `${BASE_URL}/blog/${params.slug}/`

  if (!article) {
    return {
      title: 'Article Not Found',
      robots: { index: false, follow: false },
    }
  }

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: canonicalUrl,
      type: 'article',
      ...(article.publishDate && { publishedTime: article.publishDate }),
    },
    authors: [
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

  // Validate slug is one we know about
  if (!blogSlugs.includes(slug)) {
    notFound()
  }

  const article = await fetchArticle(slug)

  if (!article) {
    // Graceful fallback if fetch fails — show a redirect notice
    return (
      <>
        <Header />
        <main className="min-h-screen bg-obg-blue-darker pt-28 pb-20">
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-obg-orange text-sm font-semibold hover:underline"
              >
                <ArrowLeft size={14} /> Back to Blog
              </Link>
            </div>
            <div className="w-16 h-16 rounded-full bg-obg-orange/20 border border-obg-orange/30 flex items-center justify-center mx-auto mb-6">
              <BookOpen size={28} className="text-obg-orange" />
            </div>
            <h1 className="text-white text-2xl font-bold mb-4">
              {slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
            </h1>
            <p className="text-obg-gray mb-8">
              This article is currently loading. Read it directly on our site:
            </p>
            <a
              href={`${OLD_SITE}/blog/${slug}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Read Article <ExternalLink size={14} />
            </a>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const category = getCategory(slug)

  // JSON-LD Article schema for rich results
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: `${BASE_URL}/blog/${slug}/`,
    author: [
      {
        '@type': 'Person',
        name: 'Jon Klein',
        url: 'https://www.linkedin.com/in/jon-klein-5489724b/',
      },
    ],
    publisher: {
      '@type': 'Organization',
      name: 'Online Brand Growth',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logos/obg-logo-white.png`,
      },
    },
    ...(article.publishDate && { datePublished: article.publishDate }),
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
            <h1 className="text-white font-display font-bold leading-tight mb-6 text-balance"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-obg-gray text-sm">
              <span>By <strong className="text-obg-offwhite">Online Brand Growth</strong></span>
              {article.publishDate && (
                <>
                  <span className="text-obg-gray/30">·</span>
                  <time dateTime={article.publishDate}>
                    {new Date(article.publishDate).toLocaleDateString('en-US', {
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
                dangerouslySetInnerHTML={{ __html: article.htmlContent }}
              />

              {/* Sidebar */}
              <aside className="lg:sticky lg:top-28 space-y-6">

                {/* CTA Card */}
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
                    href="https://app.usemotion.com/meet/dan-balda/obg-intro-45"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm px-5 py-2.5 w-full text-center block"
                  >
                    Book a Free Call
                  </Link>
                </div>

                {/* Back to blog */}
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
              href="https://app.usemotion.com/meet/dan-balda/obg-intro-45"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-9 py-4 inline-block"
            >
              Book a Free Strategy Call
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
