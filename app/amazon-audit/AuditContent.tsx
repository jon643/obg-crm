import Link from 'next/link'
import { ArrowRight, Check, Eye, ShieldCheck, Users, Target, LineChart, Wrench } from 'lucide-react'
import LandingHeader from '@/components/landing/LandingHeader'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LeadBookingForm from '@/components/landing/LeadBookingForm'
import MetaPixel from '@/components/landing/MetaPixel'
import { Paper, Redacted, StepList, StatBar, LandingFAQ, Founders, OperatorSystem } from '@/components/landing/Blocks'
import SectionLabel from '@/components/ui/SectionLabel'
import BrandPartners from '@/components/home/BrandPartners'
import CaseStudies from '@/components/home/CaseStudies'
import Testimonials from '@/components/home/Testimonials'
import AuditDeepDive from './AuditDeepDive'


const operatorPoints = [
  {
    icon: Users,
    title: 'A senior team, not a hire',
    body: 'You get the co-founders plus specialists in ads, catalog and logistics for less than one experienced Amazon manager on payroll.',
  },
  {
    icon: Wrench,
    title: 'We do the work in your account',
    body: 'Listings, bids, shipments, cases. Every action in your Seller Central account is taken by an OBG employee. Nothing is outsourced.',
  },
  {
    icon: LineChart,
    title: 'Measured on contribution profit',
    body: 'We report on what you keep after fees, ads, refunds and product cost, ASIN by ASIN. Revenue alone is not the scoreboard.',
  },
  {
    icon: Target,
    title: 'Aligned with how you get paid',
    body: 'Our fees are built around contribution profit above the baseline set when we start, so we win when the channel earns more.',
  },
]

const sections = [
  ['The opportunity', 'Which products can realistically reach page 1, and which never will'],
  ['Market and customers', 'What shoppers search, who you are up against, your share of search'],
  ['Listing quality and visibility', 'Titles, images, keyword coverage and organic rank against the niche'],
  ['Conversion', 'Whether the page sells, and why it does not where it does not'],
  ['Advertising', 'Where ad spend earns its keep and where it loses money, by campaign'],
  ['Promotions and retention', 'Repeat purchase, Subscribe & Save, and which discounts pay for themselves'],
  ['Logistics and inventory', 'Days of cover, stockout risk, aged stock and storage fees'],
  ['Profitability', 'True contribution profit per ASIN after every Amazon fee'],
  ['Account health', 'Policy flags, return drivers and Voice of the Customer'],
  ['90-day roadmap', 'What we would fix first, in order of profit impact'],
]

const steps = [
  {
    title: 'Tell us about your brand and pick a time',
    body: 'Fill in the short form below and book an intro call with Jon or Dan. We learn what is bugging you most about Amazon so we know where to look first.',
  },
  {
    title: 'Grant us view access to Seller Central',
    body: 'You add OBG as a user through Amazon\'s own permissions screen. It takes about ten minutes, we send a click-by-click guide, and you never share a password. We can look. We cannot change anything.',
  },
  {
    title: 'We run the OBG360 audit',
    body: 'The co-founders pull your sales, search, advertising, inventory, returns and account health data and build the full audit. Every number is checked against your own reports. You have it in one to two weeks.',
    tag: 'Free',
  },
  {
    title: 'Strategy call: we walk you through the findings',
    body: 'A working session on what we found and the 90-day roadmap. If it is not a fit, the audit is yours to keep and you can remove our access the same day.',
    tag: 'Free',
  },
  {
    title: 'If it is a fit: a 90-day initial engagement',
    body: 'We take over the channel as your fractional Amazon operator and execute the roadmap from the audit, with twice-weekly reporting, daily Slack access and weekly calls.',
  },
  {
    title: 'After 90 days: month to month',
    body: 'No long contract. Once the first 90 days are done, we keep the channel only as long as we keep earning it.',
  },
]

const faqs = [
  {
    q: 'What does the audit cost?',
    a: 'Nothing. There is no fee for the audit or the strategy call, and no obligation to work with us afterward.',
  },
  {
    q: 'What is a fractional Amazon operator?',
    a: 'The team you would build in-house if Amazon were big enough to justify it: strategy, advertising, catalog and logistics under one accountable owner. You get that team for a monthly fee instead of several salaries, and it works inside your own Seller Central account.',
  },
  {
    q: 'Will anything change in our account during the audit?',
    a: 'No. Audit access is view-only, apart from the permission Amazon requires to download report files. We cannot change a bid, a price or a listing.',
  },
  {
    q: 'Will this link our Amazon account to yours?',
    a: 'No. Access runs through Amazon\'s user permissions process for service providers. It does not create a related-account association, and you can revoke it at any time.',
  },
  {
    q: 'Who is this for?',
    a: 'Brands and manufacturers that already sell on Amazon in their own Seller Central account, or established brands about to launch there. We do not work with resellers.',
  },
  {
    q: 'What if we would rather not run Amazon at all?',
    a: 'Then our sister company, Stoic Brands, may be the better fit. Stoic buys your product wholesale and sells it on Amazon as your one authorized seller, with our team running the channel at no fee.',
  },
]

/**
 * The OBG360 audit page. Rendered twice:
 *  - variant="site": /fractional-amazon-operator, the normal indexable site page with the full menu
 *  - variant="landing": /amazon-audit, the stripped ad landing page (noindex)
 */
export default function AuditContent({ variant }: { variant: 'site' | 'landing' }) {
  const site = variant === 'site'
  return (
    <>
      <MetaPixel />
      {site ? <Header /> : <LandingHeader ctaLabel="Get My Free Audit" ctaHref="#get-audit" />}
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-hero pt-36 pb-20">
          <div className="container-obg px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-obg-orange font-semibold text-xs tracking-widest uppercase mb-6 border border-obg-orange/30 rounded-full px-4 py-1.5">
                Your Fractional Amazon Operator
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                We&apos;ll Show You <span className="text-gradient-orange">Exactly How</span> to Grow Your
                Amazon Profit. Then You Decide Who Does It.
              </h1>
              <p className="text-obg-gray text-lg leading-relaxed mb-8">
                A free OBG360 audit of your Seller Central account, built by the founders of your future
                fractional Amazon operator. You get a prioritized list of recommendations from your own
                data, specific enough for your team to implement without us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="#get-audit" className="btn-primary text-lg px-9 py-4">
                  Get My Free OBG360 Audit <ArrowRight size={18} />
                </a>
                <a href="#the-audit" className="btn-secondary text-lg px-9 py-4">
                  See a Real Audit
                </a>
              </div>
              <StatBar />
            </div>

            <div className="relative">
              <Paper
                kicker="OBG360 Amazon Audit · Confidential"
                title="Where the profit goes, where the demand is, and what to fix first"
                footer="Real audit, October 2026. Brand and product names redacted. 24 pages."
              >
                <p className="mb-3">
                  Prepared for <Redacted w="w-28" /> by Online Brand Growth · Jon Klein &amp; Dan Balda
                </p>
                <p className="font-semibold text-slate-900 mb-2">
                  &ldquo;A healthy, well-converting brand that keeps almost none of what it sells.&rdquo;
                </p>
                <p className="mb-3">
                  $835K in sales over 13 months. Amazon fees take 50 cents of every dollar, product cost 25,
                  ads 12. The business nets about 9%.
                </p>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {[
                    ['$4,199', 'Monthly profit today'],
                    ['$8,700+', 'Projected after first fixes'],
                    ['Flat', 'Revenue needed'],
                  ].map(([n, l]) => (
                    <div key={l} className="rounded-lg bg-slate-50 border border-slate-200 py-2">
                      <div className="font-bold text-slate-900">{n}</div>
                      <div className="text-[10px] text-slate-500 leading-tight px-1">{l}</div>
                    </div>
                  ))}
                </div>
              </Paper>
            </div>
          </div>
        </section>

        <BrandPartners />

        {/* FRACTIONAL OPERATOR */}
        <section className="section bg-obg-blue-dark">
          <div className="container-obg px-6 md:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <SectionLabel>Fractional Amazon Operator</SectionLabel>
              <h2 className="text-white mb-4">The Amazon Team You Would Hire, Without the Hires</h2>
              <p className="text-obg-gray">
                Most brands are too big to leave Amazon to a generalist and not ready to staff a full
                Amazon department. We sit in that gap and own the channel like it is ours.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {operatorPoints.map(({ icon: Icon, title, body }) => (
                <div key={title} className="card-dark">
                  <div className="w-11 h-11 rounded-xl bg-obg-orange/10 border border-obg-orange/20 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-obg-orange" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                  <p className="text-obg-gray text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <AuditDeepDive />

        {/* HOW IT WORKS */}
        <section className="section bg-obg-blue" id="how-it-works">
          <div className="container-obg px-6 md:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <SectionLabel>How It Works</SectionLabel>
              <h2 className="text-white mb-4">From Form to Findings, With No Fee</h2>
              <p className="text-obg-gray">
                The audit and the strategy call cost nothing. You only decide about working together once
                you have seen the work.
              </p>
            </div>
            <StepList steps={steps} />
          </div>
        </section>

        {/* ACCESS */}
        <section className="section bg-obg-blue-dark">
          <div className="container-obg px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionLabel>Your Access, Your Control</SectionLabel>
              <h2 className="text-white mb-4">We Can Look. We Cannot Touch.</h2>
              <p className="text-obg-gray leading-relaxed">
                Access runs through Amazon&apos;s own user permissions screen, the method Amazon requires
                for outside service providers. You see exactly what we can open, and you can remove us in
                one click.
              </p>
            </div>
            <ul className="space-y-4">
              {[
                [Eye, 'View only on campaigns, inventory, pricing and account health'],
                [ShieldCheck, 'No access to bank, tax or user settings. We never ask for it'],
                [Check, 'No shared logins or passwords, ever'],
                [Check, 'Revoke access at any time and it takes effect immediately'],
              ].map(([Icon, text]) => {
                const I = Icon as typeof Eye
                return (
                  <li key={text as string} className="card-glass p-5 flex items-center gap-4">
                    <I size={20} className="text-obg-orange flex-shrink-0" />
                    <span className="text-white text-sm font-medium">{text as string}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        {/* AUTHORITY */}
        <section className="section bg-obg-blue" id="why-obg">
          <div className="container-obg px-6 md:px-8 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <SectionLabel>Why Brands Trust Us With Their Account</SectionLabel>
              <h2 className="text-white mb-4">We Operate Amazon Like an Owner, Not a Vendor</h2>
              <p className="text-obg-gray text-lg leading-relaxed">
                Most teams get stuck toggling tactics: ads one week, images the next. We run the whole
                system at once, because that is how profit grows and not just revenue. We know it works
                because we own and operate our own brands on Amazon, with our own money on the line.
              </p>
            </div>

            <OperatorSystem />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
              {[
                ['$450M+', 'Lifetime Amazon revenue managed'],
                ['500+', 'Brands managed'],
                ['25+ years', 'Combined Amazon operating experience'],
                ['100%', 'In-house. Nothing outsourced'],
              ].map(([n, l]) => (
                <div key={l} className="card-dark text-center p-6">
                  <div className="text-3xl md:text-4xl font-bold text-gradient-orange mb-1 whitespace-nowrap">{n}</div>
                  <div className="text-obg-gray text-sm leading-snug">{l}</div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-white font-bold text-xl mb-5 text-center">The two people who will run your audit</h3>
              <Founders />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {[
                ['We build the foundation first, then scale', 'Most Amazon problems are structural: weak product pages, wasted spend, fragile profitability and no process. We fix those first so growth compounds.'],
                ['We build channels that lean less on ads', 'Our goal is not to spend more. It is a healthier mix where advertising supports discovery and rank, and the channel grows on organic momentum.'],
                ['You see everything we see', 'A live scorecard updated every Monday and Thursday, daily Slack access and a weekly call. Contribution profit is the primary number we report.'],
              ].map(([t, d]) => (
                <div key={t} className="card-glass">
                  <h3 className="text-white font-bold text-lg mb-2 leading-snug">{t}</h3>
                  <p className="text-obg-gray text-sm leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CaseStudies />
        <Testimonials />

        {/* FORM */}
        <section className="section bg-obg-blue-darker" id="get-audit">
          <div className="container-obg px-6 md:px-8 lg:px-12">
            <div className="max-w-5xl mx-auto card-dark p-0 overflow-hidden grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 p-8 lg:p-10 bg-gradient-to-br from-obg-orange/10 to-transparent border-b lg:border-b-0 lg:border-r border-obg-blue-light/20">
                <SectionLabel>Free OBG360 Audit</SectionLabel>
                <h2 className="text-white text-3xl mb-4">Get Your Audit Started</h2>
                <p className="text-obg-gray leading-relaxed mb-6">
                  Tell us a little about your brand, then pick a time for a 45-minute intro call with Jon
                  or Dan.
                </p>
                <ul className="space-y-3 text-sm text-obg-gray">
                  {[
                    'Full audit of your Seller Central account',
                    'A prioritized list of recommendations you can implement yourself',
                    'Strategy call to walk through the findings',
                    'No fee, no obligation',
                  ].map((t) => (
                    <li key={t} className="flex gap-2">
                      <Check size={16} className="text-obg-orange flex-shrink-0 mt-0.5" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-3 p-8 lg:p-10">
                <LeadBookingForm
                  source="obg-audit-lp"
                  submitLabel="Continue to Pick a Time"
                  bookingHeading="Got it. Now pick a time."
                  bookingBlurb="Choose a slot for your intro call. We will send the access guide before we talk so the audit can start right away."
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
              <h2 className="text-white">Before You Book</h2>
            </div>
            <LandingFAQ items={faqs} />
            <p className="text-center text-obg-gray text-sm mt-8">
              Would you rather sell to us than manage the channel?{' '}
              <Link href="/exclusive-distribution" className="text-obg-orange hover:underline">See how Stoic Brands works</Link>.
            </p>
          </div>
        </section>
      </main>

      {site ? (
        <Footer />
      ) : (
        <footer className="bg-obg-blue-darker border-t border-obg-blue-light/20 py-8 text-center text-obg-gray text-sm px-6">
        Online Brand Growth · Charlotte, NC · (516) 860-8488 ·{' '}
        <Link href="/privacy" className="hover:text-white">Privacy</Link> ·{' '}
        <Link href="/terms" className="hover:text-white">Terms</Link>
      </footer>
      )}
    </>
  )
}
