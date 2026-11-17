import Link from 'next/link'
import {
  ArrowRight, Check, TrendingDown, ImageOff, Droplets, Search, Megaphone, Images, LayoutGrid,
  LifeBuoy, Truck, Compass, ShieldCheck,
} from 'lucide-react'
import LandingHeader from '@/components/landing/LandingHeader'
import StoicLogo from '@/components/landing/StoicLogo'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LeadBookingForm from '@/components/landing/LeadBookingForm'
import MetaPixel from '@/components/landing/MetaPixel'
import { StepList, StatBar, LandingFAQ, Founders } from '@/components/landing/Blocks'
import SectionLabel from '@/components/ui/SectionLabel'
import CaseStudies from '@/components/home/CaseStudies'
import Testimonials from '@/components/home/Testimonials'
import BrandPartners from '@/components/home/BrandPartners'
import AnalysisDeepDive from './AnalysisDeepDive'

/**
 * The Stoic Brands page. Rendered twice:
 * - variant="site": /exclusive-distribution, the normal indexable site page with the full menu
 * - variant="landing": /stoic-brands, the stripped ad landing page (noindex)
 */


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
    title: 'We build your Amazon Opportunity Analysis',
    body: 'We work out what your products can sell for on Amazon and what that is worth to you: who, if anyone, is selling your brand today, what very similar products sell for and how many units they move, the Amazon fee math at each price point, which size or pack pays best, and a directional 12-month forecast.',
    tag: 'Complimentary',
  },
  {
    title: 'Strategy call: we walk you through the findings',
    body: 'We go through the analysis with you. We tell you plainly whether the numbers work and at what price points. Then both sides decide whether to move forward.',
    tag: 'Complimentary',
  },
  {
    title: 'Pricing, terms and agreement',
    body: 'You send your wholesale price list, case packs, minimums, lead times and the payment terms you can offer. Once the numbers work for both sides, we sign an Exclusive Distributor Agreement.',
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
    q: 'What does the Amazon Opportunity Analysis cost?',
    a: 'Nothing. Every brand that applies and looks like a fit gets the analysis and a strategy call at no charge. It is yours to keep whether or not we end up working together.',
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
    a: 'It is month to month. There is no minimum term. If either side decides to end it, we stop reordering and sell through the inventory we already own. Your brand, trademark and listings stay with you.',
  },
  {
    q: 'What is the relationship between Stoic Brands and Online Brand Growth?',
    a: 'One team, two names. Online Brand Growth is the operating team that runs Amazon channels. Stoic Brands, LLC is our distribution company and the store name shoppers see on Amazon. Stoic signs the purchase orders. OBG does the work.',
  },
]

export default function StoicContent({ variant }: { variant: 'site' | 'landing' }) {
  const site = variant === 'site'
  return (
    <>
      <MetaPixel />
      {site ? (
        <Header />
      ) : (
        <LandingHeader
          ctaLabel="Apply to Work With Us"
          ctaHref="#apply"
          coBrand={<StoicLogo className="hidden sm:inline-flex border-l border-white/20 pl-4" />}
        />
      )}
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-hero pt-36 pb-20">
          <div className="container-obg px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {site && <StoicLogo className="mb-6" size="lg" />}
              <span className="block w-fit text-amber-400 font-semibold text-xs tracking-widest uppercase mb-6 border border-amber-400/30 rounded-full px-4 py-1.5">
                Exclusive Amazon Distribution
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
                  ['A complimentary Amazon Opportunity Analysis', 'Yours to keep, whether or not we partner.'],
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

        <AnalysisDeepDive />

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

        {/* AUTHORITY */}
        <section className="section bg-obg-blue" id="why-stoic">
          <div className="container-obg px-6 md:px-8 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <SectionLabel>Why Brands Trust Us With Their Product</SectionLabel>
              <h2 className="text-white mb-4">We Put Our Own Money Behind Your Brand</h2>
              <p className="text-obg-gray text-lg leading-relaxed">
                A service provider gets paid whether your products sell or not. We buy your inventory, so if
                it does not sell at a healthy price, we lose money before you do. The team running your
                channel is the same team brands pay a monthly fee for, and we operate our own brands on
                Amazon too.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                ['$450M+', 'Lifetime Amazon revenue managed'],
                ['500+', 'Brands managed'],
                ['25+ years', 'Combined Amazon operating experience'],
                ['$0', 'Fees charged to distribution partners'],
              ].map(([n, l]) => (
                <div key={l} className="card-dark text-center p-6">
                  <div className="text-3xl md:text-4xl font-bold text-gradient-orange mb-1 whitespace-nowrap">{n}</div>
                  <div className="text-obg-gray text-sm leading-snug">{l}</div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-white font-bold text-xl mb-5 text-center">The two people you will deal with</h3>
              <Founders />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {[
                ['One accountable seller', 'Pricing holds because the people running your advertising are the people who paid for the inventory. We honor your MAP policy and go after sellers who do not.'],
                ['You stay in control', 'You keep the Rights Owner and Administrator roles in Brand Registry, and you own every listing, image and piece of content we build. We never ask for shared logins.'],
                ['Founder-led, 100% in-house', 'You work with Jon and Dan directly. Every action on your listings is taken by an Online Brand Growth employee. Nothing is outsourced.'],
              ].map(([t, d]) => (
                <div key={t} className="card-glass">
                  <h3 className="text-white font-bold text-lg mb-2 leading-snug">{t}</h3>
                  <p className="text-obg-gray text-sm leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <BrandPartners />
        <CaseStudies />
        <Testimonials />

        {/* APPLY */}
        <section className="section bg-obg-blue-darker" id="apply">
          <div className="container-obg px-6 md:px-8 lg:px-12">
            <div className="max-w-5xl mx-auto card-dark p-0 overflow-hidden grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 p-8 lg:p-10 bg-gradient-to-br from-amber-400/10 to-transparent border-b lg:border-b-0 lg:border-r border-obg-blue-light/20">
                <StoicLogo className="mb-6" />
                <h2 className="text-white text-3xl mb-4">Apply to Work With Us</h2>
                <p className="text-obg-gray leading-relaxed mb-6">
                  Tell us about your brand, then pick a time for an intro call with Jon or Dan.
                </p>
                <ul className="space-y-3 text-sm text-obg-gray">
                  {[
                    'Complimentary Amazon Opportunity Analysis, yours to keep',
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
                  bookingBlurb="Choose a slot for your intro call. We start on your Amazon Opportunity Analysis as soon as we have talked."
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
              <Link href="/fractional-amazon-operator" className="text-obg-orange hover:underline">See the OBG fractional Amazon operator model</Link>.
            </p>
          </div>
        </section>
      </main>

{site ? (
        <Footer />
      ) : (
  <footer className="bg-obg-blue-darker border-t border-obg-blue-light/20 py-8 text-center text-obg-gray text-sm px-6">
        Stoic Brands, LLC · Powered by Online Brand Growth · Charlotte, NC · (516) 860-8488 ·{' '}
        <Link href="/privacy" className="hover:text-white">Privacy</Link> ·{' '}
        <Link href="/terms" className="hover:text-white">Terms</Link>
      </footer>
      )}
    </>
  )
}
