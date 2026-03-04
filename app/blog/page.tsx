import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import { ArrowRight, BookOpen, ExternalLink } from 'lucide-react'

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
function getCategory(url: string): string {
  const slug = url.split('/blog/')[1] || ''
  if (slug.match(/ppc|advertising|ads|sponsored|acos|dsp/)) return 'Advertising'
  if (slug.match(/listing|keyword|seo|optimiz|image|photography|a-plus|content|storefront/)) return 'Catalog & SEO'
  if (slug.match(/fba|fbm|freight|ship|inventory|logistics|packaging|fulfillment|prep-center/)) return 'Operations'
  if (slug.match(/brand-registry|brand-protect|map|msrp|unauthorized|reseller|map-pricing/)) return 'Brand Protection'
  if (slug.match(/suspend|reinstate|account-suspend|deactivat/)) return 'Account Health'
  if (slug.match(/conversion|growth|strategy|channel|ecommerce|launch|scale|increase|improve|worldwide|global/)) return 'Strategy'
  if (slug.match(/fee|cost|margin|contribution|pricing|price|buy-box|profit/)) return 'Profitability'
  return 'Strategy'
}

const posts = [
  { title: "What Is Fulfillment by Amazon: Your Complete 2026 Guide", href: "https://onlinebrandgrowth.com/blog/what-is-fulfillment-by-amazon/" },
  { title: "Master Product Information Management to Dominate Amazon", href: "https://onlinebrandgrowth.com/blog/product-information-management/" },
  { title: "Sponsored Ad Amazon Strategies for 2026", href: "https://onlinebrandgrowth.com/blog/sponsored-ad-amazon/" },
  { title: "Unlocking Sales with Amazon Backend Keywords in 2026", href: "https://onlinebrandgrowth.com/blog/amazon-backend-keywords/" },
  { title: "Can You Use Coupons on Amazon to Scale Your Brand in 2026", href: "https://onlinebrandgrowth.com/blog/can-you-use-coupons-on-amazon/" },
  { title: "What Is Frustration-Free Packaging and Why It Matters for Amazon Sellers", href: "https://onlinebrandgrowth.com/blog/what-is-frustration-free-packaging/" },
  { title: "Unlocking Seller Fulfilled Prime Fulfillment for Your Brand", href: "https://onlinebrandgrowth.com/blog/seller-fulfilled-prime-fulfillment/" },
  { title: "The Definitive Amazon Brand Guide: Protect, Optimize, and Scale Your Empire", href: "https://onlinebrandgrowth.com/blog/amazon-brand-guide/" },
  { title: "The Ultimate Guide to Amazon Channel Management", href: "https://onlinebrandgrowth.com/blog/amazon-channel-management/" },
  { title: "Improving Ecommerce Conversion Rates: An Amazon Founder's Playbook", href: "https://onlinebrandgrowth.com/blog/ecommerce-conversion-rates/" },
  { title: "Image Guidelines Amazon: The Authoritative Guide to Product Images that Drive Sales", href: "https://onlinebrandgrowth.com/blog/image-guidelines-amazon/" },
  { title: "Inventory Turnover Ratio Explained: The Ultimate Guide for Amazon Growth", href: "https://onlinebrandgrowth.com/blog/inventory-turnover-ratio-explained/" },
  { title: "Amazon Vendor vs. Seller: A Strategic Guide for Brands", href: "https://onlinebrandgrowth.com/blog/amazon-vendor-vs-seller/" },
  { title: "How Much Does Amazon Charge to Sell: An Expert's Guide to Protecting Your Profits", href: "https://onlinebrandgrowth.com/blog/how-much-does-amazon-charge-to-sell/" },
  { title: "Unlocking Sales with Expert Amazon Storefront Design", href: "https://onlinebrandgrowth.com/blog/amazon-storefront-design/" },
  { title: "Suspended From Amazon: A Seller's Guide To Reinstatement", href: "https://onlinebrandgrowth.com/blog/suspended-from-amazon/" },
  { title: "The Amazon Growth Playbook for Ecommerce Account Management", href: "https://onlinebrandgrowth.com/blog/ecommerce-account-management/" },
  { title: "What Is an Amazon Storefront and How Do You Build One?", href: "https://onlinebrandgrowth.com/blog/what-is-an-amazon-storefront/" },
  { title: "A Strategic Guide to Amazon Brand Protection Services", href: "https://onlinebrandgrowth.com/blog/amazon-brand-protection-services/" },
  { title: "Understanding Amazon PPC Agency Pricing Models", href: "https://onlinebrandgrowth.com/blog/amazon-ppc-agency-pricing/" },
  { title: "How to Calculate Contribution Margin: The Ultimate Guide for Amazon Sellers", href: "https://onlinebrandgrowth.com/blog/how-to-calculate-contribution-margin/" },
  { title: "The Ultimate Guide to Mastering Amazon FBA Fees", href: "https://onlinebrandgrowth.com/blog/amazon-fba-fees/" },
  { title: "Amazon Listing Optimisation: The Authoritative Guide to Boosting Sales", href: "https://onlinebrandgrowth.com/blog/amazon-listing-optimisation/" },
  { title: "Unlocking Your Potential: A Guide to Amazon Brand Registry for Serious Sellers", href: "https://onlinebrandgrowth.com/blog/brand-registry-amazon/" },
  { title: "Mastering Photography for Amazon: A Strategic Guide to Driving Sales Growth", href: "https://onlinebrandgrowth.com/blog/photography-for-amazon/" },
  { title: "What Does ACOS Stand For? A Definitive Guide to Amazon Profitability", href: "https://onlinebrandgrowth.com/blog/what-does-acos-stand-for/" },
  { title: "How to Create an Amazon Storefront That Converts", href: "https://onlinebrandgrowth.com/blog/create-an-amazon-storefront/" },
  { title: "Your Ultimate Guide to Scaling with a Prep Center FBA", href: "https://onlinebrandgrowth.com/blog/prep-center-fba/" },
  { title: "A Guide to Minimum Advertised Price Monitoring for Amazon Brands", href: "https://onlinebrandgrowth.com/blog/minimum-advertised-price-monitoring/" },
  { title: "How to Make an Amazon Storefront and Drive Brand Growth", href: "https://onlinebrandgrowth.com/blog/how-to-make-an-amazon-storefront/" },
  { title: "Mastering Amazon Product Photography: A Guide to Images That Drive Sales", href: "https://onlinebrandgrowth.com/blog/amazon-product-photography/" },
  { title: "Mastering ACoS in Amazon: A Definitive Guide for Sales Growth", href: "https://onlinebrandgrowth.com/blog/acos-in-amazon/" },
  { title: "What Does MAP Mean in Pricing for Amazon Brands?", href: "https://onlinebrandgrowth.com/blog/what-does-map-mean-in-pricing/" },
  { title: "Mastering Digital Shelf Analytics for Amazon Growth", href: "https://onlinebrandgrowth.com/blog/digital-shelf-analytics/" },
  { title: "Ecommerce Growth Strategies to Scale Your Brand on Amazon", href: "https://onlinebrandgrowth.com/blog/ecommerce-growth-strategies/" },
  { title: "The Authoritative Guide to Amazon FBA Freight Forwarders for 7-Figure Brands", href: "https://onlinebrandgrowth.com/blog/amazon-fba-freight-forwarders/" },
  { title: "Amazon Suspending Accounts: An Expert's Playbook to Diagnose, Correct, and Prevent", href: "https://onlinebrandgrowth.com/blog/amazon-suspending-accounts/" },
  { title: "Amazon Seller Central vs. Vendor Central: The Definitive Guide for Brands", href: "https://onlinebrandgrowth.com/blog/amazon-seller-central-vs-vendor-central/" },
  { title: "A Proven Amazon Advertising Strategy for Profitable Growth", href: "https://onlinebrandgrowth.com/blog/amazon-advertising-strategy/" },
  { title: "Master Amazon Brand Protection: The Ultimate Strategy for Sales Growth", href: "https://onlinebrandgrowth.com/blog/brand-protection-amazon/" },
  { title: "What is Frustration-Free Packaging on Amazon: A Complete Guide for Sellers", href: "https://onlinebrandgrowth.com/blog/what-is-frustration-free-packaging-on-amazon/" },
  { title: "Master Your Amazon Sales With Expert Product Photography", href: "https://onlinebrandgrowth.com/blog/product-photography-for-amazon/" },
  { title: "Amazon FBA vs. FBM: A Definitive Guide to Brand Profitability", href: "https://onlinebrandgrowth.com/blog/amazon-fba-vs-fbm/" },
  { title: "Find Amazon Keywords: Uncover Gaps Competitors Miss for Higher Sales", href: "https://onlinebrandgrowth.com/blog/find-amazon-keywords/" },
  { title: "Mastering Your Amazon Pricing Strategy: A Blueprint for Profitable Growth", href: "https://onlinebrandgrowth.com/blog/amazon-pricing-strategy/" },
  { title: "Leading FBA Freight Forwarder: A Proven Plan for Faster Shipments", href: "https://onlinebrandgrowth.com/blog/fba-freight-forwarder/" },
  { title: "Sell on Amazon Worldwide: A Strategic Blueprint for Global Expansion", href: "https://onlinebrandgrowth.com/blog/sell-on-amazon-worldwide/" },
  { title: "Choosing a Freight Forwarder for Amazon FBA That Drives Growth", href: "https://onlinebrandgrowth.com/blog/freight-forwarder-for-amazon-fba/" },
  { title: "Mastering the Amazon Account Suspension Process: An Expert's Guide", href: "https://onlinebrandgrowth.com/blog/account-suspension-amazon/" },
  { title: "MAP vs MSRP: A Strategic Guide for Dominating Amazon", href: "https://onlinebrandgrowth.com/blog/map-vs-msrp/" },
  { title: "Your Guide to Building a High-Growth Amazon Brand Store", href: "https://onlinebrandgrowth.com/blog/amazon-brand-store/" },
  { title: "10 Amazon Inventory Management Best Practices for Explosive Growth in 2026", href: "https://onlinebrandgrowth.com/blog/inventory-management-best-practices/" },
  { title: "Mastering Amazon Images Requirements for Maximum Conversion", href: "https://onlinebrandgrowth.com/blog/amazon-images-requirements/" },
  { title: "A Guide to Recovering Your Amazon Deactivated Seller Account", href: "https://onlinebrandgrowth.com/blog/amazon-deactivated-seller-account/" },
  { title: "MSRP vs MAP Pricing: The Definitive Guide for Amazon Brands", href: "https://onlinebrandgrowth.com/blog/msrp-vs-map/" },
  { title: "Amazon Account Suspended? A Strategic Guide to Fast Reinstatement", href: "https://onlinebrandgrowth.com/blog/amazon-account-suspended/" },
  { title: "A Guide to Product Photography Amazon Sellers Need", href: "https://onlinebrandgrowth.com/blog/product-photography-amazon/" },
  { title: "The 7 Best Amazon Storefronts of 2026: A Growth Agency's Breakdown", href: "https://onlinebrandgrowth.com/blog/best-amazon-storefronts/" },
  { title: "A Guide to Listing Optimization on Amazon for Higher Sales", href: "https://onlinebrandgrowth.com/blog/listing-optimization-on-amazon/" },
  { title: "Mastering Amazon Account Suspensions: A Growth-Focused Reinstatement Guide", href: "https://onlinebrandgrowth.com/blog/amazon-account-suspensions/" },
  { title: "Your Guide to Freight Forwarders for Amazon FBA", href: "https://onlinebrandgrowth.com/blog/freight-forwarders-for-amazon-fba/" },
  { title: "Master Amazon Brand Stores to Unlock Exponential Growth", href: "https://onlinebrandgrowth.com/blog/amazon-brand-stores/" },
  { title: "Mastering Amazon Listing Optimization: A Strategic Guide to Dominating Search and Driving Sales", href: "https://onlinebrandgrowth.com/blog/listing-optimization-amazon/" },
  { title: "Mastering Amazon Advertising Strategies for Unstoppable Growth", href: "https://onlinebrandgrowth.com/blog/amazon-advertising-strategies/" },
  { title: "MAP vs MSRP Price: A Brand's Guide to Protecting Profits on Amazon", href: "https://onlinebrandgrowth.com/blog/map-vs-msrp-price/" },
  { title: "How to Track Amazon Ranking: A Guide for Scalable Growth", href: "https://onlinebrandgrowth.com/blog/track-amazon-ranking/" },
  { title: "The Ultimate Guide to Amazon Brand Guidelines for Sellers", href: "https://onlinebrandgrowth.com/blog/amazon-brand-guidelines/" },
  { title: "Amazon PPC Management Services: Your Guide to Scalable Growth", href: "https://onlinebrandgrowth.com/blog/amazon-ppc-management-services/" },
  { title: "A Brand's Guide to Amazon Listing Optimization", href: "https://onlinebrandgrowth.com/blog/amazon-listing-optimization/" },
  { title: "Is Amazon FBA Worth It? A Data-Driven Guide for Brands", href: "https://onlinebrandgrowth.com/blog/amazon-fba-is-it-worth-it-2/" },
  { title: "Suspended Amazon Account: A Definitive Recovery Guide to Restore Your Amazon Business", href: "https://onlinebrandgrowth.com/blog/suspended-amazon-account/" },
  { title: "Mastering Amazon Ad Management for Unstoppable Growth", href: "https://onlinebrandgrowth.com/blog/amazon-ad-management/" },
  { title: "How to Increase Amazon Sales: A Proven Playbook to Grow Your Brand", href: "https://onlinebrandgrowth.com/blog/how-to-increase-amazon-sales/" },
  { title: "10 Proven Amazon Product Launch Strategies for 2025", href: "https://onlinebrandgrowth.com/blog/product-launch-strategies/" },
  { title: "Optimizing Amazon Listings For Maximum Sales Growth", href: "https://onlinebrandgrowth.com/blog/optimizing-amazon-listings/" },
  { title: "Global Selling With Amazon: A Modern Playbook For Brands", href: "https://onlinebrandgrowth.com/blog/global-selling-with-amazon/" },
  { title: "Account Suspended Amazon: The Definitive Reinstatement Guide", href: "https://onlinebrandgrowth.com/blog/account-suspended-amazon/" },
  { title: "Optimizing Amazon Product Listings for Maximum Sales", href: "https://onlinebrandgrowth.com/blog/optimizing-amazon-product-listings/" },
  { title: "Master the Algorithm: How to Optimize Amazon Product Listings for Dominant Growth", href: "https://onlinebrandgrowth.com/blog/optimize-amazon-product-listings/" },
  { title: "Improve Amazon Sales: Proven Strategies for Listings and PPC", href: "https://onlinebrandgrowth.com/blog/improve-amazon-sales/" },
  { title: "A Guide to Increase Amazon Sales and Dominate Your Niche", href: "https://onlinebrandgrowth.com/blog/increase-amazon-sales/" },
  { title: "How to Improve Amazon Sales: A Proven Seller's Playbook", href: "https://onlinebrandgrowth.com/blog/how-to-improve-amazon-sales/" },
  { title: "Finding Your Target Market for Amazon to Drive Real Growth", href: "https://onlinebrandgrowth.com/blog/target-market-for-amazon/" },
  { title: "How to Launch a Product on Amazon: A Modern Seller's Playbook", href: "https://onlinebrandgrowth.com/blog/how-to-launch-product-on-amazon/" },
  { title: "What Is Frustration Free Packaging at Amazon Explained", href: "https://onlinebrandgrowth.com/blog/what-is-frustration-free-packaging-at-amazon/" },
  { title: "Your Guide to Using a Freight Forwarder for Amazon FBA to Scale Your Business", href: "https://onlinebrandgrowth.com/blog/freight-forwarder-amazon-fba/" },
  { title: "Your Authoritative Guide to Ship from China to Amazon FBA", href: "https://onlinebrandgrowth.com/blog/ship-from-china-to-amazon-fba/" },
  { title: "Mastering the Marketplace: Why Amazon Brand Registry is Non-Negotiable for Growth", href: "https://onlinebrandgrowth.com/blog/amazon-brand-registry-benefits/" },
  { title: "What Is Amazon Brand Registry? The Ultimate Seller Guide", href: "https://onlinebrandgrowth.com/blog/what-is-amazon-brand-registry/" },
  { title: "Best Amazon Inventory Management Software Reviewed", href: "https://onlinebrandgrowth.com/blog/best-amazon-inventory-management-software/" },
  { title: "Your Guide to Amazon Account Suspension Recovery", href: "https://onlinebrandgrowth.com/blog/amazon-account-suspension/" },
  { title: "Stop Unauthorized Sellers on Amazon", href: "https://onlinebrandgrowth.com/blog/unauthorized-sellers-on-amazon/" },
  { title: "How to Win the Amazon Buy Box: A Definitive Guide for Sales Dominance", href: "https://onlinebrandgrowth.com/blog/how-to-win-amazon-buy-box/" },
  { title: "Amazon FBA Profit Margin Calculator and Guide", href: "https://onlinebrandgrowth.com/blog/amazon-fba-profit-margin-calculator/" },
  { title: "MAP Pricing vs MSRP: The Amazon Brand's Playbook for Price Control & Growth", href: "https://onlinebrandgrowth.com/blog/map-pricing-vs-msrp/" },
  { title: "Your Guide to a Minimum Advertised Price Policy", href: "https://onlinebrandgrowth.com/blog/minimum-advertised-price-policy/" },
  { title: "Mastering Amazon Pricing Changes to Win the Buy Box", href: "https://onlinebrandgrowth.com/blog/amazon-pricing-changes/" },
  { title: "The Real Cost of Selling on Amazon: A Complete Guide for Brands", href: "https://onlinebrandgrowth.com/blog/cost-of-selling-on-amazon/" },
  { title: "Amazon Pricing Strategies to Win the Buy Box", href: "https://onlinebrandgrowth.com/blog/amazon-pricing-strategies/" },
  { title: "Amazon DSP Advertising: Your Ultimate Growth Guide", href: "https://onlinebrandgrowth.com/blog/amazon-dsp-advertising/" },
  { title: "Your Guide to ACOS on Amazon", href: "https://onlinebrandgrowth.com/blog/acos-on-amazon/" },
  { title: "Mastering Amazon Ads Management for Scalable Growth", href: "https://onlinebrandgrowth.com/blog/amazon-ads-management/" },
  { title: "Amazon Image Requirements: The Definitive Guide for Sales Growth", href: "https://onlinebrandgrowth.com/blog/image-requirements-for-amazon/" },
]

const featuredPost = posts[0]
const remainingPosts = posts.slice(1)

export default function BlogPage() {
  return (
    <>
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
              <a
                href={featuredPost.href}
                target="_blank"
                rel="noopener noreferrer"
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
              </a>
            </AnimatedSection>

            {/* All remaining posts — compact 3-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {remainingPosts.map((post, i) => (
                <AnimatedSection key={post.href} delay={Math.min(i * 40, 400)}>
                  <a
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
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
                    <ExternalLink size={13} className="text-obg-gray/40 group-hover:text-obg-orange transition-colors duration-200 flex-shrink-0 mt-1" />
                  </a>
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
