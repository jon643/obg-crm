import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import RankEstimator from './RankEstimator'

const BASE_URL = 'https://www.onlinebrandgrowth.com'
const PAGE_URL = BASE_URL + '/amazon-sales-rank-checker'

export const metadata: Metadata = {
  title: 'Amazon Sales Rank Checker | BSR to Sales Estimator',
  description:
    'Free Amazon sales rank checker: convert any Best Sellers Rank (BSR) into estimated monthly sales by category, and learn how to track Amazon ranking over time.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Amazon Sales Rank Checker | BSR to Sales Estimator',
    description:
      'Convert any Amazon BSR into estimated monthly sales by category - free, no signup.',
    url: PAGE_URL,
  },
}

const faqs = [
  {
    q: 'What is Amazon sales rank (BSR)?',
    a: 'Amazon sales rank, also called Best Sellers Rank or BSR, is a number Amazon assigns to every product in a category based on recent sales, updated roughly hourly. A lower number means more sales: #1 is the best-selling product in its category. BSR reflects recent sales velocity more than all-time totals.',
  },
  {
    q: 'How do I track my Amazon ranking over time?',
    a: 'Check the Best Sellers Rank shown on your product detail page, or use this checker to convert it into estimated monthly sales. For keyword ranking - where your product appears in search results - track your position for target search terms weekly. Watching both BSR and keyword rank tells you whether sales and visibility are moving together.',
  },
  {
    q: 'How accurate are BSR sales estimates?',
    a: 'They are directional, not exact. This model is built from public BSR-to-sales curves and is most reliable between roughly BSR 100 and 200,000. Seasonality, deals, price changes, and category size all shift the real numbers - treat the estimate as a research range, not accounting.',
  },
  {
    q: 'What is a good sales rank on Amazon?',
    a: 'It depends on category size. In huge categories like Home & Kitchen, a BSR under 10,000 usually means consistent daily sales and under 1,000 is strong. In smaller categories, a BSR of 5,000 can already be near the top. Compare against competitors in your own category rather than an absolute number.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Amazon Sales Rank Checker (BSR to Sales Estimator)',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: PAGE_URL,
  description:
    'Free tool that converts an Amazon Best Sellers Rank (BSR) into estimated monthly sales by category.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@type': 'Organization', name: 'Online Brand Growth', url: BASE_URL },
}

export default function SalesRankCheckerPage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: BASE_URL },
          { name: 'Amazon Sales Rank Checker', url: PAGE_URL },
        ]}
      />
      <main className="min-h-screen bg-obg-blue-darker">
        <section className="relative overflow-hidden bg-gradient-hero pt-28 pb-14">
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-4xl mx-auto text-center">
            <span className="inline-block text-obg-orange font-semibold text-sm tracking-widest uppercase mb-3">
              Free Tool
            </span>
            <h1 className="text-white mb-4">Amazon Sales Rank Checker</h1>
            <p className="text-obg-gray text-lg max-w-2xl mx-auto">
              Convert any Best Sellers Rank (BSR) into estimated monthly sales - and learn how to track your Amazon ranking the right way. Updated for 2026. No signup required.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-3xl mx-auto">
            <RankEstimator />
            <p className="text-obg-gray text-sm text-center mt-4">
              Want the full P&L, not just sales volume?{' '}
              <Link href="/calculator" className="text-obg-orange hover:underline">
                Run your numbers in our Amazon Profit Calculator
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="section bg-obg-blue border-y border-obg-blue-light/10">
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-3xl mx-auto">
            <h2 className="text-white mb-4">What Is Amazon Sales Rank?</h2>
            <p className="text-obg-gray mb-4">
              Amazon sales rank - Best Sellers Rank, or BSR - is Amazon&apos;s running scoreboard of how well a product is selling inside its category. It updates roughly every hour and weights recent sales most heavily, which makes it the fastest public signal of a product&apos;s sales velocity. A product ranked #500 in Home & Kitchen is selling many times more units than one ranked #50,000.
            </p>
            <p className="text-obg-gray mb-8">
              Tracking Amazon sales rank over time tells you whether your listing changes, advertising, and pricing are actually converting into sales - and watching competitors&apos; BSR tells you how much volume you&apos;re fighting for. Pair it with keyword rank tracking (where you appear in search results for your target terms) to see the full picture of visibility and velocity.
            </p>
            <h2 className="text-white mb-4">From Sales Rank to Real Profit</h2>
            <p className="text-obg-gray">
              Sales volume is only half the story - fees decide what you keep. Once you&apos;ve estimated units per month here, run them through our{' '}
              <Link href="/calculator" className="text-obg-orange hover:underline">
                Amazon profit calculator
              </Link>{' '}
              to model referral fees, FBA fulfillment, storage, and returns on 2026 rates. And if your rank is stuck while competitors climb, that&apos;s usually a{' '}
              <Link href="/services/amazon-seo-listing-optimization" className="text-obg-orange hover:underline">
                listing optimization
              </Link>{' '}
              or{' '}
              <Link href="/services/amazon-ppc-management" className="text-obg-orange hover:underline">
                PPC management
              </Link>{' '}
              problem - both fixable.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-3xl mx-auto">
            <h2 className="text-white mb-8">Sales Rank FAQ</h2>
            <div className="space-y-6">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-xl bg-obg-blue border border-obg-blue-light/15 p-6">
                  <h3 className="text-white font-semibold mb-2">{f.q}</h3>
                  <p className="text-obg-gray">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-obg-blue border-t border-obg-blue-light/20">
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-3xl mx-auto text-center">
            <span className="inline-block text-obg-orange font-semibold text-sm tracking-widest uppercase mb-3">
              Ready to Grow?
            </span>
            <h2 className="text-white mb-6">Turn Your Sales Rank Into a Growth Plan</h2>
            <p className="text-obg-gray text-lg mb-10">
              Our founders will audit your account, benchmark your rank against competitors, and show you exactly where the growth is hiding.
            </p>
            <Link href="/#book-call" className="btn-primary text-lg px-9 py-4 inline-block">
              Get Your FREE OBG360 Audit
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
undefined
