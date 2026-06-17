import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import { ArrowRight, BookOpen } from 'lucide-react'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { getAllPostsMeta } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Amazon Blog & Resources',
  description:
    'Amazon strategy, advertising, SEO, logistics, and brand protection insights from the founders of Online Brand Growth. Practical guides for 7- and 8-figure brands.',
  alternates: {
    canonical: 'https://www.onlinebrandgrowth.com/blog',
  },
  openGraph: {
    title: 'Amazon Strategy Blog | Online Brand Growth',
    description: 'Practical Amazon advertising, SEO, logistics, and brand protection guides from founders managing $30M+ in annual Amazon revenue.',
    url: 'https://www.onlinebrandgrowth.com/blog',
  },
}

// Helper to infer category from URL slug
function getCategory(slug: string): string {
  const s = slug.replace(/^\/blog\//, '').replace(/\/$/, '')
  if (s.match(/ppc|advertising|ads|sponsored|acos|dsp/)) return 'Advertising'
  if (s.match(/listing|keyword|seo|optimiz|image|photography|a-plus|content|storefront/)) return 'Catalog & SEO'
  if (s.match(/fba|fbm|freight|ship|inventory|logistics|packaging|fulfillment|prep-center/)) return 'Operations'
  if (s.match(/brand-registry|brand-protect|map|msrp|unauthorized|reseller|map-pricing/)) return 'Brand Protection'
  if (s.match(/suspend|reinstate|account-suspend|deactivat/)) return 'Account Health'
  if (s.match(/conversion|growth|strategy|channel|ecommerce|launch|scale|increase|improve|worldwide|global/)) return 'Strategy'
  if (s.match(/fee|cost|margin|contribution|pricing|price|buy-box|profit/)) return 'Profitability'
  return 'Strategy'
}

// Posts are discovered from content/blog/ at build time.
// Adding a new .ts file there (e.g. via the Outrank webhook) makes it appear here automatically.
export default async function BlogPage() {
  const metas = await getAllPostsMeta()
  const sortedPosts = metas.map((m) => ({
    title: m.title,
    href: `/blog/${m.slug}`,
    date: m.publishDate,
  }))
  const posts = sortedPosts // kept for the count text below
  const featuredPost = sortedPosts[0]
  const remainingPosts = sortedPosts.slice(1)
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.onlinebrandgrowth.com' },
          { name: 'Blog', url: 'https://www.onlinebrandgrowth.com/blog' },
        ]}
      />
      <Header />
      <main>

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-hero pt-28 pb-20">
          <div
            aria-hidden
            className="absolute inset-0 opacity-10"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #ff795e 0%, transparent 70%)',
            }}
          />
          <div className="container-obg px-6 md:px-8 lg:px-12 relative z-10 max-w-3xl mx-auto text-center">
            <AnimatedSection direction="up">
              <SectionLabel>Resources</SectionLabel>
              <h1 className="text-hero font-display font-bold text-white mb-6 text-balance">
                Amazon Strategy{' '}
                <span className="text-gradient-orange">Blog</span>
              </h1>
              <p className="text-obg-gray text-xl leading-relaxed">
                Practical guides and no-fluff insights on Amazon advertising, SEO, operations, and brand
                protection — written by founders who manage $30M+ in annual revenue on Amazon.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="section bg-obg-blue-dark">
          <div className="container-obg px-6 md:px-8 lg:px-12">

            {/* Featured (first) post */}
            <AnimatedSection>
              <Link
                href={featuredPost.href}
                className="group block card-dark mb-10 hover:border-obg-orange/40 transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/5 aspect-video bg-obg-blue-darker rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-obg-orange/20 border border-obg-orange/30 flex items-center justify-center">
                      <BookOpen size={32} className="text-obg-orange" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold text-obg-orange border border-obg-orange/30 rounded-full px-2.5 py-1">
                        {getCategory(featuredPost.href)}
                      </span>
                      <span className="text-obg-gray text-xs">Featured Article</span>
                    </div>
                    <h2 className="text-white text-2xl font-bold mb-4 leading-snug group-hover:text-obg-orange transition-colors duration-200">
                      {featuredPost.title}
                    </h2>
                    <span className="text-obg-orange font-semibold flex items-center gap-2 text-sm">
                      Read Article <ArrowRight size={15} />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            {/* All remaining posts — compact 3-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {remainingPosts.map((post, i) => (
                <AnimatedSection key={post.href} delay={Math.min(i * 40, 400)}>
                  <Link
                    href={post.href}
                    className="group flex items-start gap-3 p-4 rounded-xl border border-obg-blue-light/20 bg-obg-blue/50 hover:border-obg-orange/40 hover:bg-obg-blue transition-all duration-200"
                  >
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-bold text-obg-orange uppercase tracking-wider block mb-1">
                        {getCategory(post.href)}
                      </span>
                      <h3 className="text-white text-sm font-semibold leading-snug group-hover:text-obg-orange transition-colors duration-200 line-clamp-2">
                        {post.title}
                      </h3>
                    </div>
                    <ArrowRight size={13} className="text-obg-gray/40 group-hover:text-obg-orange transition-colors duration-200 flex-shrink-0 mt-1" />
                  </Link>
                </AnimatedSection>
              ))}
            </div>

            {/* Post count */}
            <AnimatedSection delay={300}>
              <p className="text-center text-obg-gray text-sm mt-10">
                Showing all <span className="text-obg-orange font-semibold">{posts.length} articles</span> — updated regularly with new Amazon strategy guides.
              </p>
            </AnimatedSection>

          </div>
        </section>

        {/* Bottom CTA */}
        <section className="section bg-obg-blue-darker">
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <SectionLabel>Ready to Grow?</SectionLabel>
              <h2 className="text-white mb-6">
                Turn Amazon Knowledge Into Real Results
              </h2>
              <p className="text-obg-gray text-lg mb-10">
                Reading is just the start. Book a free strategy call and let&apos;s audit your Amazon
                presence, identify your biggest opportunities, and build a plan together.
              </p>
              <Link
                href="https://app.usemotion.com/meet/dan-balda/obg-intro-45"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-9 py-4"
              >
                Get Your FREE OBG360 Audit
              </Link>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
