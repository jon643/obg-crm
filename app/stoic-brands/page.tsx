import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, Check, TrendingDown, ImageOff, Droplets, Search, Megaphone, Images, LayoutGrid,
  LifeBuoy, Truck, Compass, ShieldCheck,
} from 'lucide-react'
import LandingHeader, { StoicLockup } from '@/components/landing/LandingHeader'
import LeadBookingForm from '@/components/landing/LeadBookingForm'
import MetaPixel from '@/components/landing/MetaPixel'
import { Paper, Redacted, MiniTable, StepList, StatBar, LandingFAQ } from '@/components/landing/Blocks'
import SectionLabel from '@/components/ui/SectionLabel'
import CaseStudies from '@/components/home/CaseStudies'
import Testimonials from '@/components/home/Testimonials'

export const metadata: Metadata = {
  title: 'Stoic Brands | Exclusive Amazon Distribution for Brands and Manufacturers',
  description:
    'Stoic Brands buys your product wholesale and sells it on Amazon as your one authorized seller. The Online Brand Growth team runs the whole channel at no fee. Apply to work with us and get a complimentary Amazon audit.',
  alternates: { canonical: 'https://www.onlinebrandgrowth.com/stoic-brands' },
}

const problems = [
  {
    icon: TrendingDown,
    title: 'Price erosion',
    body: 'Sellers you never authorized race each other to the bottom. Your MAP policy turns into a suggestion and your retail partners notice.',
  },
  {
    icon: ImageOff,
    title: 'Brand erosion',
    body: 'Shoppers judge your brand by whatever listing they land on. If a reseller built it, it looks like it.',
  },
  {
    icon: Droplets,
    title: 'Margin leakage',
    body: 'Nobody is running ads, inventory or Seller Support cases with your profit in mind, so the channel underperforms and you cannot see why.',
  },
]

const model = [
  {
    title: 'How we get paid',
    body: 'On the product. We earn the margin between your wholesale price and the Amazon sale price. No retainer, no percentage of sales, no invoice for services.',
  },
  {
    title: 'What you keep',
    body: 'Your brand, your trademark, your Brand Registry and your listings. We build and manage them on your behalf. They belong to you.',
  },
  {
    title: 'What exclusive means',
    body: 'Stoic Brands is the only authorized seller of your products on Amazon.com in the US. Anyone else is unauthorized, and we work to remove them.',
  },
  {
    title: 'What you stop doing',
    body: 'Listings, ads, FBA shipments, Seller Central cases, chasing resellers. You fill purchase orders. We run the channel.',
  },
]

const steps = [
  {
    title: 'Apply here',
    body: 'Tell us about your brand in the form below and pick a time for an intro call. It takes about two minutes.',
  },
  {
    title: 'We run your Amazon audit',
    body: 'We map the Amazon landscape around your brand: who is selling your products today and at what price, how much demand your category has, what comparable products sell for and how many units they move, and what the Amazon fee math leaves for everyone.',
    tag: 'Complimentary',
  },
  {
    title: 'Strategy call: we walk you through the findings',
    body: 'You see the audit with the co-founders. We tell you plainly whether the numbers work and at what price points. Then both sides decide whether to move forward.',
    tag: 'Complimentary',
  },
  {
    title: 'Pricing, terms and agreement',
    body: 'You send your wholesale price list, case packs, minimums and lead times. Our standard starting terms are 50% when the order is placed and 50% 30 days after the goods ship. We sign an Exclusive Distributor Agreement.',
  },
  {
    title: 'Brand Registry access',
    body: 'You enroll your trademark in Amazon Brand Registry and add us as a Brand Representative. You keep the Rights Owner and Administrator roles at all times. We walk you through every click.',
  },
  {
    title: 'We build your branded Amazon assets together',
    body: 'From your photography, logos and specs, our in-house team researches the keywords, writes the listings and designs the image stack, A+ Content and Storefront. You approve everything before it goes live, and you own all of it.',
  },
  {
    title: 'Opening order and launch',
    body: 'Stoic Brands places the opening purchase order. Inventory goes to our prep partner in North Carolina, we create the Amazon shipments and labels, and once stock checks in the listings go live and advertising starts.',
  },
  {
    title: 'We run the channel and reorder',
    body: 'Ongoing advertising, listing and inventory work, 360 Brand Protection against unauthorized sellers, performance reviews with the founders, and reorders as the product sells.',
  },
]

const services = [
  [Search, 'Keyword research and listing optimization'],
  [Megaphone, 'Amazon PPC advertising, planned and funded by us'],
  [Images, 'Images, A+ Content and Storefront'],
  [LayoutGrid, 'Catalog management and variations'],
  [LifeBuoy, 'Seller Central cases and issue resolution'],
  [Truck, 'FBA shipments, inventory and reorder timing'],
  [Compass, 'Strategic growth consulting with the founders'],
  [ShieldCheck, '360 Brand Protection and MAP enforcement'],
] as const

const faqs = [
  {
    q: 'How do you make money if the services are free?',
    a: 'We make our margin on the products we buy from you and sell on Amazon. That is the whole model. If your products do not sell at a healthy price, we lose money before you do.',
  },
  {
    q: 'What does the Amazon audit cost?',
    a: 'Nothing. Every brand that applies and looks like a fit gets the audit and a strategy call at no charge, whether or not we end up working together.',
  },
  {
    q: 'Who is a good fit?',
    a: 'Brands and manufacturers with real demand already: retail or e-commerce presence, advertising, or shoppers searching for you by name. We resell demand that exists. We are not the right partner for a brand that needs its demand created from zero.',
  },
  {
    q: 'We already sell on Amazon. Do we have to stop?',
    a: 'Yes, exclusive means Stoic Brands is the only seller. We plan the handoff so there is no gap: we help sell through the stock you already have at Amazon, then take over as that inventory runs down.',
  },
  {
    q: 'Who controls pricing?',
    a: 'You set the MAP policy and we honor it. Sellers who undercut it are the ones we go after.',
  },
  {
    q: 'We already have unauthorized sellers. Does this help?',
    a: 'This is the problem the model is built to solve. Once we hold the Brand Representative role we monitor the marketplace, report unauthorized and counterfeit listings, and work to remove sellers who should not be there.',
  },
  {
    q: 'How long is the commitment?',
    a: 'The agreement runs for an initial six months and renews automatically. Either side can end it with 30 days written notice. If we part ways, your brand, trademark and listings stay with you.',
  },
  {
    q: 'What is the relationship between Stoic Brands and Online Brand Growth?',
    a: 'One team, two names. Online Brand Growth is the operating team that runs Amazon channels. Stoic Brands, LLC is our distribution company and the store name shoppers see on Amazon. Stoic signs the purchase orders. OBG does the work.',
  },
]

export default function StoicBrandsLanding() {
  return (
    <>
      <MetaPixel />
      <LandingHeader
        ctaLabel="Apply to Work With Us"
        ctaHref="#apply"
        coBrand={<StoicLockup className="hidden sm:inline-flex border-l border-white/20 pl-4" />}
      />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-hero pt-36 pb-20">
          <div className="container-obg px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-amber-400 font-semibold text-xs tracking-widest uppercase mb-6 border border-amber-400/30 rounded-full px-4 py-1.5">
                Stoic Brands · Exclusive Amazon Distribution
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                Turn Amazon From a Frustration Into a{' '}
                <span className="text-gradient-orange">Profit Center</span>
              </h1>
              <p className="text-obg-gray text-lg leading-relaxed mb-8">
                We buy your product wholesale and sell it on Amazon as your one authorized seller. Our
                operators run the entire channel and charge you nothing for it. You fill purchase orders
                and stop worrying about Amazon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="#apply" className="btn-primary text-lg px-9 py-4">
                  Apply to Work With Us <ArrowRight size={18} />
                </a>
                <a href="#how-it-works" className="btn-secondary text-lg px-9 py-4">
                  How It Works
                </a>
              </div>
              <StatBar />
            </div>

            <div className="card-dark">
              <h2 className="text-white font-bold text-xl mb-5">What changes when we are your Amazon buyer</h2>
              <ul className="space-y-4">
                {[
                  ['Amazon becomes a wholesale account', 'We send purchase orders. You ship product.'],
                  ['One accountable seller', 'Pricing holds because the people running your ads paid for the inventory.'],
                  ['No fees, ever', 'No retainer, no commission, no service invoice.'],
                  ['A complimentary Amazon audit', 'Every applicant that fits gets one before any decision.'],
                ].map(([t, d]) => (
                  <li key={t} className="flex gap-3">
                    <Check size={20} className="text-obg-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white font-semibold">{t}</div>
                      <div className="text-obg-gray text-sm">{d}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="section bg-obg-blue-dark">
          <div className="container-obg px-6 md:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <SectionLabel>The Problem</SectionLabel>
              <h2 className="text-white mb-4">Amazon Is Your Biggest Shelf and the One You Control the Least</h2>
              <p className="text-obg-gray">
                Resellers nobody authorized. Prices that undercut the retailers who support you. Listings
                with the wrong photos. And no single person accountable for any of it.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {problems.map(({ icon: Icon, title, body }) => (
                <div key={title} className="card-dark">
                  <div className="w-11 h-11 rounded-xl bg-obg-orange/10 border border-obg-orange/20 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-obg-orange" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                  <p className="text-obg-gray text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MODEL */}
        <section className="section bg-obg-blue-darker">
          <div className="container-obg px-6 md:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <SectionLabel>The Model</SectionLabel>
              <h2 className="text-white mb-4">One Accountable Partner With Skin in the Game</h2>
              <p className="text-obg-gray">
                Stoic Brands becomes your exclusive Amazon distributor. The Online Brand Growth team, the
                same operators brands pay a monthly fee for, runs your channel as a value add.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {model.map((m) => (
                <div key={m.title} className="card-glass">
                  <h3 className="text-white font-bold text-lg mb-2">{m.title}</h3>
                  <p className="text-obg-gray text-sm leading-relaxed">{m.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE AUDIT */}
        <section className="section bg-obg-blue" id="the-audit">
          <div className="container-obg px-6 md:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <SectionLabel>What You Get First</SectionLabel>
              <h2 className="text-white mb-4">A Complimentary Audit of Your Brand&apos;s Amazon Landscape</h2>
              <p className="text-obg-gray">
                Before anyone commits, we show you what Amazon looks like for your brand today and what it
                could be worth. The first three excerpts are from a real audit for a specialty food brand,
                with names redacted.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Paper kicker="Category demand" title="Where your format actually sells, and how many units" footer="Live Amazon listings. Sold last month is Amazon's own badge.">
                <MiniTable
                  head={['Comparable listing', 'Price', 'Reviews', 'Sold last month']}
                  rows={[
                    [<span key="a">Competitor A, single</span>, '$5.99', '114', '800+'],
                    [<span key="b">Competitor B, single</span>, '$7.72', '1,000', '2,000+'],
                    [<span key="c">Competitor C, single</span>, '$6.59', '195', '7,000+'],
                    [<span key="d">Competitor D, 3-pack</span>, '$19.99', '55', 'Under 50'],
                  ]}
                />
                <p className="mt-3 text-slate-500">Only very similar products at the same size and format are compared.</p>
              </Paper>

              <Paper kicker="Amazon fee math" title="What a $24.99 4-pack leaves for the product" footer="2026 Amazon fee schedule, per unit sold">
                <MiniTable
                  head={['', 'Per 4-pack']}
                  highlight={6}
                  rows={[
                    ['Amazon price', '$24.99'],
                    ['Referral fee', '-$3.75'],
                    ['FBA fulfillment fee', '-$5.61'],
                    ['Storage', '-$0.26'],
                    ['Returns', '-$0.50'],
                    ['Our margin (20%)', '-$5.00'],
                    ['Left for product', '$9.87 ($2.47 each)'],
                  ]}
                />
              </Paper>

              <Paper kicker="Pricing reality check" title="The Amazon price your wholesale needs vs. where the market is" footer="Shown for every product and pack size">
                <MiniTable
                  head={['Format', 'Price needed', 'Where it sells today']}
                  rows={[
                    ['Single', '$12.71', '$5.99 to $7.72'],
                    ['4-pack', '$39.48', '$26.95 to $29.99'],
                    ['12-pack', '$103.78', '$51.48 to $79.99'],
                  ]}
                />
                <p className="mt-3 text-slate-500">
                  When the numbers do not work we say so, and show the wholesale price or pack size that
                  would make them work.
                </p>
              </Paper>

              <Paper kicker="Seller landscape · sample layout" title="Who is selling your brand on Amazon right now" footer="Sample layout. Your audit lists every seller found on your listings.">
                <MiniTable
                  head={['Seller', 'Buy Box share', 'Price vs MAP', 'Authorized']}
                  rows={[
                    [<Redacted key="1" w="w-20" />, <Redacted key="1b" w="w-8" />, <Redacted key="1c" w="w-10" />, 'No'],
                    [<Redacted key="2" w="w-24" />, <Redacted key="2b" w="w-8" />, <Redacted key="2c" w="w-10" />, 'No'],
                    [<Redacted key="3" w="w-16" />, <Redacted key="3b" w="w-8" />, <Redacted key="3c" w="w-10" />, 'No'],
                    [<Redacted key="4" w="w-20" />, <Redacted key="4b" w="w-8" />, <Redacted key="4c" w="w-10" />, 'Yes'],
                  ]}
                />
                <p className="mt-3 text-slate-500">
                  Plus how your listings look today and how much branded search your name already gets.
                </p>
              </Paper>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section bg-obg-blue-dark" id="how-it-works">
          <div className="container-obg px-6 md:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <SectionLabel>How It Works</SectionLabel>
              <h2 className="text-white mb-4">From Application to Live on Amazon</h2>
              <p className="text-obg-gray">
                A brand already in Brand Registry is usually live four to six weeks after the agreement is
                signed. Nothing here needs a new hire or a new system on your side.
              </p>
            </div>
            <StepList steps={steps} />
            <div className="text-center mt-10">
              <a href="#apply" className="btn-primary text-base px-8 py-4">Apply to Work With Us <ArrowRight size={18} /></a>
            </div>
          </div>
        </section>

        {/* INCLUDED */}
        <section className="section bg-obg-blue-darker">
          <div className="container-obg px-6 md:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <SectionLabel>What Is Included</SectionLabel>
              <h2 className="text-white mb-4">A Full Amazon Operating Team, at No Cost to You</h2>
              <p className="text-obg-gray">
                Everything below is done in-house by Online Brand Growth employees. We do not outsource any
                of it, and we do not bill for any of it.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map(([Icon, text]) => (
                <div key={text} className="card-glass p-5 flex items-start gap-3">
                  <Icon size={20} className="text-obg-orange flex-shrink-0 mt-0.5" />
                  <span className="text-white text-sm font-medium leading-snug">{text}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-dark">
                <h3 className="text-white font-bold text-lg mb-4">You own</h3>
                <ul className="space-y-2 text-obg-gray text-sm">
                  {['Wholesale pricing and payment terms', 'Your trademark and Brand Registry', 'Brand assets and final approval on content', 'Your MAP policy', 'Every channel outside Amazon.com'].map((t) => (
                    <li key={t} className="flex gap-2"><Check size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />{t}</li>
                  ))}
                </ul>
              </div>
              <div className="card-dark">
                <h3 className="text-white font-bold text-lg mb-4">We own</h3>
                <ul className="space-y-2 text-obg-gray text-sm">
                  {['Purchase orders, paid on the agreed terms', 'The inventory risk', 'Listings, images, A+ Content and Storefront work', 'Advertising spend and management', 'Shipments, Seller Central and seller enforcement'].map((t) => (
                    <li key={t} className="flex gap-2"><Check size={16} className="text-obg-orange flex-shrink-0 mt-0.5" />{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CaseStudies />
        <Testimonials />

        {/* APPLY */}
        <section className="section bg-obg-blue-darker" id="apply">
          <div className="container-obg px-6 md:px-8 lg:px-12">
            <div className="max-w-5xl mx-auto card-dark p-0 overflow-hidden grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 p-8 lg:p-10 bg-gradient-to-br from-amber-400/10 to-transparent border-b lg:border-b-0 lg:border-r border-obg-blue-light/20">
                <StoicLockup className="mb-6" />
                <h2 className="text-white text-3xl mb-4">Apply to Work With Us</h2>
                <p className="text-obg-gray leading-relaxed mb-6">
                  Tell us about your brand, then pick a time for an intro call with Jon or Dan.
                </p>
                <ul className="space-y-3 text-sm text-obg-gray">
                  {[
                    'Complimentary audit of your Amazon landscape',
                    'Strategy call to walk through the findings',
                    'A straight answer on whether the numbers work',
                    'No fee, no obligation',
                  ].map((t) => (
                    <li key={t} className="flex gap-2">
                      <Check size={16} className="text-amber-400 flex-shrink-0 mt-0.5" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-3 p-8 lg:p-10">
                <LeadBookingForm
                  source="stoic-apply-lp"
                  submitLabel="Submit Application and Pick a Time"
                  bookingHeading="Application received. Now pick a time."
                  bookingBlurb="Choose a slot for your intro call. We start on your Amazon audit as soon as we have talked."
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section bg-obg-blue-dark">
          <div className="container-obg px-6 md:px-8 lg:px-12">
            <div className="text-center mb-10">
              <SectionLabel>Questions</SectionLabel>
              <h2 className="text-white">What Brand Owners Ask Us</h2>
            </div>
            <LandingFAQ items={faqs} />
            <p className="text-center text-obg-gray text-sm mt-8">
              Want to keep your own Seller Central account and have us run it?{' '}
              <Link href="/amazon-audit" className="text-obg-orange hover:underline">See the OBG fractional Amazon operator model</Link>.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-obg-blue-darker border-t border-obg-blue-light/20 py-8 text-center text-obg-gray text-sm px-6">
        Stoic Brands, LLC · Powered by Online Brand Growth · Charlotte, NC · (516) 860-8488 ·{' '}
        <Link href="/privacy" className="hover:text-white">Privacy</Link> ·{' '}
        <Link href="/terms" className="hover:text-white">Terms</Link>
      </footer>
    </>
  )
}
