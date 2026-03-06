import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import { ArrowRight, BookOpen } from 'lucide-react'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Amazon Blog & Resources | Online Brand Growth',
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

const posts = [
  { title: "What Is Fulfillment by Amazon: Your Complete 2026 Guide", href: "/blog/what-is-fulfillment-by-amazon", date: "2026-03-06" },
  { title: "Master Product Information Management to Dominate Amazon", href: "/blog/product-information-management", date: "2026-03-05" },
  { title: "TACoS vs ACoS: The Amazon Advertising Metric That Actually Matters", href: "/blog/amazon-tacos-vs-acos", date: "2026-03-05" },
  { title: "Sponsored Ad Amazon Strategies for 2026", href: "/blog/sponsored-ad-amazon", date: "2026-03-03" },
  { title: "Unlocking Sales with Amazon Backend Keywords in 2026", href: "/blog/amazon-backend-keywords", date: "2026-03-02" },
  { title: "Can You Use Coupons on Amazon to Scale Your Brand in 2026", href: "/blog/can-you-use-coupons-on-amazon", date: "2026-02-28" },
  { title: "What Is Frustration-Free Packaging and Why It Matters for Amazon Sellers", href: "/blog/what-is-frustration-free-packaging", date: "2026-02-25" },
  { title: "Unlocking Seller Fulfilled Prime Fulfillment for Your Brand", href: "/blog/seller-fulfilled-prime-fulfillment", date: "2026-02-24" },
  { title: "The Definitive Amazon Brand Guide: Protect, Optimize, and Scale Your Empire", href: "/blog/amazon-brand-guide", date: "2026-02-22" },
  { title: "The Ultimate Guide to Amazon Channel Management", href: "/blog/amazon-channel-management", date: "2026-02-21" },
  { title: "Improving Ecommerce Conversion Rates: An Amazon Founder's Playbook", href: "/blog/ecommerce-conversion-rates", date: "2026-02-18" },
  { title: "Image Guidelines Amazon: The Authoritative Guide to Product Images that Drive Sales", href: "/blog/image-guidelines-amazon", date: "2026-02-16" },
  { title: "Inventory Turnover Ratio Explained: The Ultimate Guide for Amazon Growth", href: "/blog/inventory-turnover-ratio-explained", date: "2026-02-15" },
  { title: "Amazon Vendor vs. Seller: A Strategic Guide for Brands", href: "/blog/amazon-vendor-vs-seller", date: "2026-02-14" },
  { title: "How Much Does Amazon Charge to Sell: An Expert's Guide to Protecting Your Profits", href: "/blog/how-much-does-amazon-charge-to-sell", date: "2026-02-12" },
  { title: "Unlocking Sales with Expert Amazon Storefront Design", href: "/blog/amazon-storefront-design", date: "2026-02-09" },
  { title: "Suspended From Amazon: A Seller's Guide To Reinstatement", href: "/blog/suspended-from-amazon", date: "2026-02-09" },
  { title: "The Amazon Growth Playbook for Ecommerce Account Management", href: "/blog/ecommerce-account-management", date: "2026-02-08" },
  { title: "What Is an Amazon Storefront and How Do You Build One?", href: "/blog/what-is-an-amazon-storefront", date: "2026-02-06" },
  { title: "A Strategic Guide to Amazon Brand Protection Services", href: "/blog/amazon-brand-protection-services", date: "2026-02-05" },
  { title: "Understanding Amazon PPC Agency Pricing Models", href: "/blog/amazon-ppc-agency-pricing", date: "2026-02-03" },
  { title: "How to Calculate Contribution Margin: The Ultimate Guide for Amazon Sellers", href: "/blog/how-to-calculate-contribution-margin", date: "2026-02-02" },
  { title: "The Ultimate Guide to Mastering Amazon FBA Fees", href: "/blog/amazon-fba-fees", date: "2026-01-30" },
  { title: "Amazon Listing Optimisation: The Authoritative Guide to Boosting Sales", href: "/blog/amazon-listing-optimisation", date: "2026-01-30" },
  { title: "Unlocking Your Potential: A Guide to Amazon Brand Registry for Serious Sellers", href: "/blog/brand-registry-amazon", date: "2026-01-29" },
  { title: "Mastering Photography for Amazon: A Strategic Guide to Driving Sales Growth", href: "/blog/photography-for-amazon", date: "2026-01-29" },
  { title: "What Does ACOS Stand For? A Definitive Guide to Amazon Profitability", href: "/blog/what-does-acos-stand-for", date: "2026-01-27" },
  { title: "How to Create an Amazon Storefront That Converts", href: "/blog/create-an-amazon-storefront", date: "2026-01-26" },
  { title: "Your Ultimate Guide to Scaling with a Prep Center FBA", href: "/blog/prep-center-fba", date: "2026-01-24" },
  { title: "A Guide to Minimum Advertised Price Monitoring for Amazon Brands", href: "/blog/minimum-advertised-price-monitoring", date: "2026-01-21" },
  { title: "How to Make an Amazon Storefront and Drive Brand Growth", href: "/blog/how-to-make-an-amazon-storefront", date: "2026-01-20" },
  { title: "Mastering Amazon Product Photography: A Guide to Images That Drive Sales", href: "/blog/amazon-product-photography", date: "2026-01-18" },
  { title: "Mastering ACoS in Amazon: A Definitive Guide for Sales Growth", href: "/blog/acos-in-amazon", date: "2026-01-18" },
  { title: "What Does MAP Mean in Pricing for Amazon Brands?", href: "/blog/what-does-map-mean-in-pricing", date: "2026-01-17" },
  { title: "Mastering Digital Shelf Analytics for Amazon Growth", href: "/blog/digital-shelf-analytics", date: "2026-01-14" },
  { title: "Ecommerce Growth Strategies to Scale Your Brand on Amazon", href: "/blog/ecommerce-growth-strategies", date: "2026-01-12" },
  { title: "The Authoritative Guide to Amazon FBA Freight Forwarders for 7-Figure Brands", href: "/blog/amazon-fba-freight-forwarders", date: "2026-01-11" },
  { title: "Amazon Suspending Accounts: An Expert's Playbook to Diagnose, Correct, and Prevent", href: "/blog/amazon-suspending-accounts", date: "2026-01-11" },
  { title: "Amazon Seller Central vs. Vendor Central: The Definitive Guide for Brands", href: "/blog/amazon-seller-central-vs-vendor-central", date: "2026-01-10" },
  { title: "A Proven Amazon Advertising Strategy for Profitable Growth", href: "/blog/amazon-advertising-strategy", date: "2026-01-08" },
  { title: "Master Amazon Brand Protection: The Ultimate Strategy for Sales Growth", href: "/blog/brand-protection-amazon", date: "2026-01-05" },
  { title: "What is Frustration-Free Packaging on Amazon: A Complete Guide for Sellers", href: "/blog/what-is-frustration-free-packaging-on-amazon", date: "2026-01-05" },
  { title: "Master Your Amazon Sales With Expert Product Photography", href: "/blog/product-photography-for-amazon", date: "2026-01-05" },
  { title: "Amazon FBA vs. FBM: A Definitive Guide to Brand Profitability", href: "/blog/amazon-fba-vs-fbm", date: "2026-01-04" },
  { title: "Find Amazon Keywords: Uncover Gaps Competitors Miss for Higher Sales", href: "/blog/find-amazon-keywords", date: "2026-01-02" },
  { title: "Mastering Your Amazon Pricing Strategy: A Blueprint for Profitable Growth", href: "/blog/amazon-pricing-strategy", date: "2026-01-01" },
  { title: "Leading FBA Freight Forwarder: A Proven Plan for Faster Shipments", href: "/blog/fba-freight-forwarder", date: "2026-01-01" },
  { title: "Sell on Amazon Worldwide: A Strategic Blueprint for Global Expansion", href: "/blog/sell-on-amazon-worldwide", date: "2025-12-30" },
  { title: "Choosing a Freight Forwarder for Amazon FBA That Drives Growth", href: "/blog/freight-forwarder-for-amazon-fba", date: "2025-12-30" },
  { title: "Mastering the Amazon Account Suspension Process: An Expert's Guide", href: "/blog/account-suspension-amazon", date: "2025-12-30" },
  { title: "MAP vs MSRP: A Strategic Guide for Dominating Amazon", href: "/blog/map-vs-msrp", date: "2025-12-29" },
  { title: "Your Guide to Building a High-Growth Amazon Brand Store", href: "/blog/amazon-brand-store", date: "2025-12-26" },
  { title: "10 Amazon Inventory Management Best Practices for Explosive Growth in 2026", href: "/blog/inventory-management-best-practices", date: "2025-12-25" },
  { title: "Mastering Amazon Images Requirements for Maximum Conversion", href: "/blog/amazon-images-requirements", date: "2025-12-23" },
  { title: "A Guide to Recovering Your Amazon Deactivated Seller Account", href: "/blog/amazon-deactivated-seller-account", date: "2025-12-23" },
  { title: "MSRP vs MAP Pricing: The Definitive Guide for Amazon Brands", href: "/blog/msrp-vs-map", date: "2025-12-23" },
  { title: "Amazon Account Suspended? A Strategic Guide to Fast Reinstatement", href: "/blog/amazon-account-suspended", date: "2025-12-23" },
  { title: "A Guide to Product Photography Amazon Sellers Need", href: "/blog/product-photography-amazon", date: "2025-12-22" },
  { title: "The 7 Best Amazon Storefronts of 2026: A Growth Agency's Breakdown", href: "/blog/best-amazon-storefronts", date: "2025-12-22" },
  { title: "A Guide to Listing Optimization on Amazon for Higher Sales", href: "/blog/listing-optimization-on-amazon", date: "2025-12-22" },
  { title: "Mastering Amazon Account Suspensions: A Growth-Focused Reinstatement Guide", href: "/blog/amazon-account-suspensions", date: "2025-12-22" },
  { title: "Your Guide to Freight Forwarders for Amazon FBA", href: "/blog/freight-forwarders-for-amazon-fba", date: "2025-12-22" },
  { title: "Master Amazon Brand Stores to Unlock Exponential Growth", href: "/blog/amazon-brand-stores", date: "2025-12-22" },
  { title: "Mastering Amazon Listing Optimization: A Strategic Guide to Dominating Search and Driving Sales", href: "/blog/listing-optimization-amazon", date: "2025-12-22" },
  { title: "Mastering Amazon Advertising Strategies for Unstoppable Growth", href: "/blog/amazon-advertising-strategies", date: "2025-12-22" },
  { title: "MAP vs MSRP Price: A Brand's Guide to Protecting Profits on Amazon", href: "/blog/map-vs-msrp-price", date: "2025-12-22" },
  { title: "How to Track Amazon Ranking: A Guide for Scalable Growth", href: "/blog/track-amazon-ranking", date: "2025-12-20" },
  { title: "The Ultimate Guide to Amazon Brand Guidelines for Sellers", href: "/blog/amazon-brand-guidelines", date: "2025-12-17" },
  { title: "Amazon PPC Management Services: Your Guide to Scalable Growth", href: "/blog/amazon-ppc-management-services", date: "2025-12-16" },
  { title: "A Brand's Guide to Amazon Listing Optimization", href: "/blog/amazon-listing-optimization", date: "2025-12-14" },
  { title: "Is Amazon FBA Worth It? A Data-Driven Guide for Brands", href: "/blog/amazon-fba-is-it-worth-it-2", date: "2025-12-13" },
  { title: "Suspended Amazon Account: A Definitive Recovery Guide to Restore Your Amazon Business", href: "/blog/suspended-amazon-account", date: "2025-12-13" },
  { title: "Mastering Amazon Ad Management for Unstoppable Growth", href: "/blog/amazon-ad-management", date: "2025-12-10" },
  { title: "How to Increase Amazon Sales: A Proven Playbook to Grow Your Brand", href: "/blog/how-to-increase-amazon-sales", date: "2025-12-08" },
  { title: "10 Proven Amazon Product Launch Strategies for 2025", href: "/blog/product-launch-strategies", date: "2025-12-07" },
  { title: "Optimizing Amazon Listings For Maximum Sales Growth", href: "/blog/optimizing-amazon-listings", date: "2025-12-07" },
  { title: "Global Selling With Amazon: A Modern Playbook For Brands", href: "/blog/global-selling-with-amazon", date: "2025-12-06" },
  { title: "Account Suspended Amazon: The Definitive Reinstatement Guide", href: "/blog/account-suspended-amazon", date: "2025-12-06" },
  { title: "Optimizing Amazon Product Listings for Maximum Sales", href: "/blog/optimizing-amazon-product-listings", date: "2025-12-06" },
  { title: "Master the Algorithm: How to Optimize Amazon Product Listings for Dominant Growth", href: "/blog/optimize-amazon-product-listings", date: "2025-12-06" },
  { title: "Improve Amazon Sales: Proven Strategies for Listings and PPC", href: "/blog/improve-amazon-sales", date: "2025-12-06" },
  { title: "A Guide to Increase Amazon Sales and Dominate Your Niche", href: "/blog/increase-amazon-sales", date: "2025-12-06" },
  { title: "How to Improve Amazon Sales: A Proven Seller's Playbook", href: "/blog/how-to-improve-amazon-sales", date: "2025-12-06" },
  { title: "Finding Your Target Market for Amazon to Drive Real Growth", href: "/blog/target-market-for-amazon", date: "2025-12-04" },
  { title: "How to Launch a Product on Amazon: A Modern Seller's Playbook", href: "/blog/how-to-launch-product-on-amazon", date: "2025-12-01" },
  { title: "What Is Frustration Free Packaging at Amazon Explained", href: "/blog/what-is-frustration-free-packaging-at-amazon", date: "2025-12-01" },
  { title: "Your Guide to Using a Freight Forwarder for Amazon FBA to Scale Your Business", href: "/blog/freight-forwarder-amazon-fba", date: "2025-12-01" },
  { title: "Your Authoritative Guide to Ship from China to Amazon FBA", href: "/blog/ship-from-china-to-amazon-fba", date: "2025-11-30" },
  { title: "Mastering the Marketplace: Why Amazon Brand Registry is Non-Negotiable for Growth", href: "/blog/amazon-brand-registry-benefits", date: "2025-11-28" },
  { title: "What Is Amazon Brand Registry? The Ultimate Seller Guide", href: "/blog/what-is-amazon-brand-registry", date: "2025-11-27" },
  { title: "Best Amazon Inventory Management Software Reviewed", href: "/blog/best-amazon-inventory-management-software", date: "2025-11-25" },
  { title: "Your Guide to Amazon Account Suspension Recovery", href: "/blog/amazon-account-suspension", date: "2025-11-24" },
  { title: "Stop Unauthorized Sellers on Amazon", href: "/blog/unauthorized-sellers-on-amazon", date: "2025-11-21" },
  { title: "How to Win the Amazon Buy Box: A Definitive Guide for Sales Dominance", href: "/blog/how-to-win-amazon-buy-box", date: "2025-11-20" },
  { title: "Amazon FBA Profit Margin Calculator and Guide", href: "/blog/amazon-fba-profit-margin-calculator", date: "2025-11-18" },
  { title: "MAP Pricing vs MSRP: The Amazon Brand's Playbook for Price Control & Growth", href: "/blog/map-pricing-vs-msrp", date: "2025-11-18" },
  { title: "Your Guide to a Minimum Advertised Price Policy", href: "/blog/minimum-advertised-price-policy", date: "2025-11-17" },
  { title: "Mastering Amazon Pricing Changes to Win the Buy Box", href: "/blog/amazon-pricing-changes", date: "2025-11-15" },
  { title: "The Real Cost of Selling on Amazon: A Complete Guide for Brands", href: "/blog/cost-of-selling-on-amazon", date: "2025-11-12" },
  { title: "Amazon Pricing Strategies to Win the Buy Box", href: "/blog/amazon-pricing-strategies", date: "2025-11-11" },
  { title: "Amazon DSP Advertising: Your Ultimate Growth Guide", href: "/blog/amazon-dsp-advertising", date: "2025-11-09" },
  { title: "Your Guide to ACOS on Amazon", href: "/blog/acos-on-amazon", date: "2025-11-09" },
  { title: "Mastering Amazon Ads Management for Scalable Growth", href: "/blog/amazon-ads-management", date: "2025-11-08" },
  { title: "Amazon Image Requirements: The Definitive Guide for Sales Growth", href: "/blog/image-requirements-for-amazon", date: "2025-11-05" },
]

// Sort newest-first by date
const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date))

const featuredPost = sortedPosts[0]
const remainingPosts = sortedPosts.slice(1)

export default function BlogPage() {
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
                Book a Free Strategy Call
              </Link>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
