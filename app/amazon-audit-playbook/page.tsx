import type { Metadata } from 'next'
import Image from 'next/image'
import Footer from '@/components/layout/Footer'
import LandingHeader from '@/components/landing/LandingHeader'
import MetaPixel from '@/components/landing/MetaPixel'
import { LandingFAQ } from '@/components/landing/Blocks'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedSection from '@/components/ui/AnimatedSection'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import LeadForm from './LeadForm'
import { Mail, CheckCircle2, Quote, Check } from 'lucide-react'

const PAGE_URL = 'https://www.onlinebrandgrowth.com/amazon-audit-playbook'

export const metadata: Metadata = {
  title: 'Free DIY Playbook: The OBG360 Amazon Audit (Updated Nov 2026) | OBG',
  description:
    'The exact ten-section Amazon audit Online Brand Growth runs on every brand, written so you can run it on your own account. Break-even ACOS by product, the search term rules, the 75-character title format, 2027 fees and a 90-day plan. Free, 31 pages.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'The OBG360 Amazon Audit - DIY Playbook (Free, Updated Nov 2026)',
    description:
      'Run the exact ten-section Amazon audit we run for brands, on your own account. Updated for the 2026 rule changes and the 2027 fees.',
    url: PAGE_URL,
    type: 'article',
    images: [{ url: '/playbook/cover.jpg', width: 900, height: 1165 }],
  },
  robots: { index: true, follow: true },
}

const heroPoints = [
  'A break-even ACOS for every product, and the exact rules for what to cut, keep and scale',
  'Which of your products can actually win page 1, and which never will',
  'What changed on Amazon in 2026, and what the 2027 fees do to your profit per unit',
]

const sections = [
  { n: '01', title: 'The Opportunity', get: 'The review wall test and a verdict for every product: winnable, anchor, test or walled.' },
  { n: '02', title: 'Market & Customer Intelligence', get: 'Four numbers from Search Query Performance that show whether you lose at findability, the click, the page or the offer.' },
  { n: '03', title: 'Listing Quality & Visibility', get: 'The 2026 format field by field: 75-character title, Item Highlights, attributes, and how to prove you are indexed.' },
  { n: '04', title: 'Conversion', get: 'The traffic and conversion matrix, the five reasons a page loses the sale, and two AI prompts that do the review reading for you.' },
  { n: '05', title: 'Advertising', get: 'Break-even ACOS per product, the four tiers, the rank check before any cut, and the search term rules with exact thresholds.' },
  { n: '06', title: 'Promotions & Retention', get: 'Return on every promotion, the 45-day rule that removes your strike-through price, and a straight call on each lever.' },
  { n: '07', title: 'Logistics & Inventory', get: 'Days of cover bands, the reorder formula, and the 2027 storage and low-inventory fees.' },
  { n: '08', title: 'Profitability', get: 'Contribution profit per SKU, the January 2027 fee impact by size, and how to collect what Amazon owes you.' },
  { n: '09', title: 'Account Health & Compliance', get: 'The one-time check plus the daily, weekly and monthly routine our own team runs.' },
  { n: '10', title: '90-Day Roadmap', get: 'How to turn findings into recommendations ranked by monthly profit, with a 30, 60 and 90 day plan.' },
]

const changes = [
  { when: 'July 2026', what: 'Titles capped at 75 characters. A new searchable field, Item Highlights, stays locked until yours fits.' },
  { when: 'May 2026', what: 'Alexa for Shopping replaced Rufus and now sits in the main search bar. Blank attributes are a visibility problem.' },
  { when: 'May 2026', what: 'Discount more than half of any 90 days and your strike-through price can disappear.' },
  { when: 'March 2026', what: 'AI prompts were attached to your ad campaigns automatically and are billed per click.' },
  { when: 'March 2026', what: 'Commingling ended. Barcode and labeling rules changed for every FBA shipment.' },
  { when: 'January 2027', what: 'FBA fees rise again, storage becomes age-based, and the low-inventory fee changes.' },
]

const previews = [
  { src: '/playbook/review-wall.jpg', alt: 'Sample page: the review wall example', caption: 'The review wall, worked through' },
  { src: '/playbook/search-terms.jpg', alt: 'Sample page: the rank check and search term rules', caption: 'The search term rules, with thresholds' },
  { src: '/playbook/profit.jpg', alt: 'Sample page: profit per product and 2027 fee impact', caption: 'Profit per product and the 2027 fee hit' },
]

const stats = [
  { value: '$450M+', label: 'Lifetime Amazon revenue managed by our team' },
  { value: '500+', label: 'Brands managed' },
  { value: '25+ Yrs', label: 'Operating e-commerce brands, our own included' },
]

const testimonials = [
  {
    quote:
      'OBG literally 30X’d our Amazon sales in less than 18 months, from $100K to $3M per year - which enabled us to scale into retail and ultimately exit.',
    name: 'Doug Gonterman',
    company: 'NumNum Baby',
  },
  {
    quote:
      'Our sales and profit are up over 50% year over year. They take on all the headaches of Amazon - a game changer.',
    name: 'Lori Cortright',
    company: 'CFO, Streetwise Security',
  },
  {
    quote: 'We’ve worked with many agencies - OBG’s expertise and dedication are unmatched.',
    name: 'Lynn Cartwright',
    company: 'Minerva Research Labs NA',
  },
]

const faqs = [
  {
    q: 'Is this really the audit you run for brands?',
    a: 'Yes. It follows the same ten sections, in the same order, as the OBG360 Audit we deliver. The thresholds for cutting, keeping and scaling ad spend are the ones our own team works from. The only thing missing is your data.',
  },
  {
    q: 'Who is it for?',
    a: 'Brand owners and in-house teams already selling on Amazon through Seller Central, with Brand Registry. If you have products with steady sales and an ad budget, you will find money in it. It is not a guide to launching your first product.',
  },
  {
    q: 'How long does it take?',
    a: 'A proper first pass is 8 to 10 hours. Each section lists its own time, so you can do the advertising section alone in about 2 hours if that is where the money is.',
  },
  {
    q: 'What tools do I need?',
    a: 'Seller Central, the Amazon Ads console, a profit tool such as Sellerise or Sellerboard, and a keyword tool such as DataDive or Helium 10. The playbook names the exact report for every step.',
  },
  {
    q: 'What is the catch?',
    a: 'There is none. You get the PDF and a few follow-up emails from us. If you would rather have us run the audit on your account, that is free too, and the last page explains how.',
  },
]

export default function AmazonAuditPlaybookPage() {
  return (
    <>
      <MetaPixel />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.onlinebrandgrowth.com' },
          { name: 'The OBG360 Amazon Audit - DIY Playbook', url: PAGE_URL },
        ]}
      />
      <LandingHeader ctaLabel="Get the Playbook" ctaHref="#get-the-playbook" />
      <main>
        {/* ── Hero with form ── */}
        <section className="relative overflow-hidden bg-gradient-hero pt-32 md:pt-36 pb-20 md:pb-24">
          <div
            aria-hidden
            className="absolute inset-0 opacity-15"
            style={{
              background: 'radial-gradient(ellipse 70% 60% at 30% 20%, #ff795e 0%, transparent 60%)',
            }}
          />
          <div className="container-obg px-6 md:px-8 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7">
                <AnimatedSection direction="up">
                  <SectionLabel>Free DIY Playbook · Updated November 2026</SectionLabel>
                  <h1 className="text-h1 font-display font-bold text-white mb-6 text-balance">
                    Run the Exact Amazon Audit We Run for Brands. On Your Own Account.
                  </h1>
                  <p className="text-obg-offwhite text-xl leading-relaxed mb-6 text-balance">
                    31 pages. Ten sections. Every report to open, every number to write down, and the rule
                    we use to judge it. Nothing held back.
                  </p>
                  <ul className="space-y-3 mb-8 max-w-xl">
                    {heroPoints.map((p) => (
                      <li key={p} className="flex gap-3 text-obg-offwhite text-base leading-relaxed">
                        <Check size={20} className="text-obg-orange flex-shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={120}>
                  <LeadForm location="hero" />
                  <p className="text-obg-gray text-xs mt-3">
                    Free. Sent to your inbox right away. Unsubscribe any time.
                  </p>
                </AnimatedSection>
              </div>

              <div className="lg:col-span-5">
                <AnimatedSection direction="right" delay={200}>
                  <div className="relative max-w-sm mx-auto lg:max-w-md">
                    <div aria-hidden className="absolute -inset-4 bg-obg-orange/20 rounded-3xl blur-2xl" />
                    <Image
                      src="/playbook/cover.jpg"
                      alt="Cover of The OBG360 Amazon Audit DIY Playbook"
                      width={900}
                      height={1165}
                      priority
                      className="relative rounded-xl border border-obg-blue-light/40 shadow-card w-full h-auto"
                    />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* ── What changed ── */}
        <section className="section bg-obg-blue-darker">
          <div className="container-obg px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
              <AnimatedSection>
                <SectionLabel>Why Now</SectionLabel>
                <h2 className="text-white mb-4">
                  If you last looked hard at your account a year ago, the rules have changed.
                </h2>
                <p className="text-obg-gray text-lg mb-6">
                  Amazon rewrote the listing format, the discount rules, the ad formats and the fee schedule
                  in 2026. The playbook opens with a one-page brief on every change and builds each one into
                  the section it affects.
                </p>
                <ul className="space-y-4">
                  {changes.map((c) => (
                    <li key={c.what} className="flex gap-4">
                      <span className="text-obg-orange text-xs font-bold tracking-widest uppercase w-28 flex-shrink-0 pt-1">
                        {c.when}
                      </span>
                      <span className="text-obg-offwhite text-sm leading-relaxed">{c.what}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
              <AnimatedSection delay={150}>
                <Image
                  src="/playbook/changed.jpg"
                  alt="Sample page: what changed on Amazon in 2026"
                  width={900}
                  height={1165}
                  className="rounded-xl shadow-card w-full max-w-md mx-auto h-auto"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── What's inside ── */}
        <section className="section bg-obg-blue-dark">
          <div className="container-obg px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto mb-14">
                <SectionLabel>What&apos;s Inside</SectionLabel>
                <h2 className="text-white mb-4">Ten sections. Each one ends in a number you can act on.</h2>
                <p className="text-obg-gray text-lg">
                  The same sections, in the same order, as the audit we deliver. One example brand runs
                  through all ten so you can see what a finished section looks like.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
              {sections.map((s, i) => (
                <AnimatedSection key={s.n} delay={(i % 2) * 80}>
                  <div className="card-dark h-full flex gap-5">
                    <div className="font-display font-bold text-3xl text-gradient-orange leading-none pt-1">
                      {s.n}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1.5 leading-snug">{s.title}</h3>
                      <p className="text-obg-gray text-sm leading-relaxed">{s.get}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={200}>
              <p className="text-center text-obg-offwhite text-base max-w-2xl mx-auto mt-10">
                Plus the eight data pulls to start with, a one-page checklist, and every formula on a single
                page.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Sample pages ── */}
        <section className="section bg-obg-blue-darker">
          <div className="container-obg px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <SectionLabel>A Look Inside</SectionLabel>
                <h2 className="text-white mb-4">Working pages, not a teaser.</h2>
                <p className="text-obg-gray text-lg">
                  Every section has the steps, the thresholds and a worked example with real math.
                </p>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {previews.map((p, i) => (
                <AnimatedSection key={p.src} delay={i * 100}>
                  <figure>
                    <Image
                      src={p.src}
                      alt={p.alt}
                      width={900}
                      height={1165}
                      className="rounded-lg shadow-card w-full h-auto"
                    />
                    <figcaption className="text-obg-gray text-sm text-center mt-3">{p.caption}</figcaption>
                  </figure>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection delay={300}>
              <div className="flex justify-center mt-12">
                <a href="#get-the-playbook" className="btn-primary text-base px-8 py-4">
                  Send Me the Playbook
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Who wrote it ── */}
        <section className="section bg-obg-blue">
          <div className="container-obg px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <SectionLabel>Who Wrote It</SectionLabel>
                <h2 className="text-white mb-4">Operators, not marketers.</h2>
                <p className="text-obg-gray text-lg">
                  Online Brand Growth is a fractional Amazon operator for established brands. Jon Klein and
                  Dan Balda run Amazon accounts every day, including brands we own. This is the diagnostic we
                  start every engagement with.
                </p>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              {stats.map((stat, i) => (
                <AnimatedSection key={stat.label} delay={i * 100}>
                  <div className="card-dark text-center h-full flex flex-col items-center justify-center">
                    <div className="text-4xl md:text-5xl font-display font-bold text-gradient-orange mb-3">
                      {stat.value}
                    </div>
                    <p className="text-obg-offwhite text-sm leading-relaxed">{stat.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((t, i) => (
                <AnimatedSection key={t.name} delay={i * 100}>
                  <div className="card-dark h-full flex flex-col">
                    <Quote size={24} className="text-obg-orange/60 mb-4" />
                    <p className="text-obg-offwhite text-sm leading-relaxed mb-6 flex-1">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div>
                      <div className="text-white font-semibold text-sm">{t.name}</div>
                      <div className="text-obg-gray text-xs">{t.company}</div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section bg-obg-blue-dark">
          <div className="container-obg px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <div className="text-center max-w-2xl mx-auto mb-10">
                <SectionLabel>Questions</SectionLabel>
                <h2 className="text-white">Before you download</h2>
              </div>
            </AnimatedSection>
            <LandingFAQ items={faqs} />
          </div>
        </section>

        {/* ── Final CTA / form repeat ── */}
        <section className="section-lg bg-obg-blue-darker" id="get-the-playbook">
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-10">
                <SectionLabel>Send Me the Playbook</SectionLabel>
                <h2 className="text-white mb-4">Find out what your account is really keeping.</h2>
                <p className="text-obg-gray text-lg">
                  Enter your name and email. The playbook arrives in your inbox right away.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="card-dark border-obg-orange/30 bg-gradient-to-b from-obg-orange/5 to-transparent flex justify-center">
                <LeadForm location="footer" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={250}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-obg-gray text-sm">
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-obg-orange" />
                  Delivered instantly to your inbox
                </div>
                <span className="hidden sm:inline text-obg-blue-light">·</span>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-obg-orange" />
                  No spam. Unsubscribe any time.
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
