import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedSection from '@/components/ui/AnimatedSection'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import LeadForm from './LeadForm'
import {
  Search,
  BarChart3,
  Eye,
  MousePointerClick,
  Megaphone,
  Boxes,
  DollarSign,
  Mail,
  CheckCircle2,
  Quote,
} from 'lucide-react'

const PAGE_URL = 'https://www.onlinebrandgrowth.com/amazon-audit-playbook'

export const metadata: Metadata = {
  title: 'Free DIY Playbook: The OBG360 Amazon Audit | OBG',
  description:
    'Run a full audit on your own Amazon account with the exact seven-part system behind 500+ OBG audits: SEO, conversion, PPC, logistics, SKU profitability, fee recovery, and account health — step by step, free.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'The OBG360 Amazon Audit — DIY Playbook (Free)',
    description:
      'The exact seven-part audit system behind 500+ Amazon account audits, laid out so you can run it yourself. No fluff.',
    url: PAGE_URL,
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const insideThePlaybook = [
  {
    icon: BarChart3,
    title: 'Market & customer intelligence',
    description:
      'How big your category really is, who’s winning it, and your actual share of demand — pulled from SQP.',
  },
  {
    icon: Eye,
    title: 'Listing visibility (SEO)',
    description:
      'The reverse-ASIN keyword gap, the “review wall” test for winnable niches, and where every keyword belongs.',
  },
  {
    icon: MousePointerClick,
    title: 'Conversion rate diagnosis',
    description:
      'The Starved / Strong / Foundational / Leaky matrix, plus the exact listing standard OBG builds to.',
  },
  {
    icon: Megaphone,
    title: 'Advertising structure & waste',
    description:
      'Real TACOS per product and the wasted spend to cut — where ad money works and where it leaks.',
  },
  {
    icon: Boxes,
    title: 'Logistics & SKU profitability',
    description:
      'Inventory age, stock-out risk, and true contribution profit per SKU — is every product actually profitable?',
  },
  {
    icon: DollarSign,
    title: 'Fees, reimbursements & account health',
    description:
      'The money Amazon owes you, the fees you’re overpaying, and the monitoring that keeps the account safe.',
  },
]

const stats = [
  { value: '500+', label: 'Audits run with this exact system in the last 12 months' },
  { value: '30×', label: 'One client’s growth: $100K → $3M in 18 months — and an exit' },
  { value: '$0→$500K', label: 'Another brand’s first-year revenue using this diagnostic' },
]

const testimonials = [
  {
    quote:
      'OBG literally 30X’d our Amazon sales in less than 18 months, from $100K to $3M per year — which enabled us to scale into retail and ultimately exit.',
    name: 'Doug Gonterman',
    company: 'NumNum Baby',
  },
  {
    quote:
      'Our sales and profit are up over 50% year over year. They take on all the headaches of Amazon — a game changer.',
    name: 'Lori Cortright',
    company: 'CFO, Streetwise Security',
  },
  {
    quote:
      'We’ve worked with many agencies — OBG’s expertise and dedication are unmatched.',
    name: 'Lynn Cartwright',
    company: 'Minerva Research Labs NA',
  },
]

export default function AmazonAuditPlaybookPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.onlinebrandgrowth.com' },
          { name: 'The OBG360 Amazon Audit — DIY Playbook', url: PAGE_URL },
        ]}
      />
      <Header />
      <main>

        {/* ── Hero with form ── */}
        <section className="relative overflow-hidden bg-gradient-hero pt-28 pb-20 md:pb-28">
          <div
            aria-hidden
            className="absolute inset-0 opacity-15"
            style={{
              background:
                'radial-gradient(ellipse 70% 60% at 30% 20%, #ff795e 0%, transparent 60%)',
            }}
          />
          <div className="container-obg px-6 md:px-8 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Left — Copy + form */}
              <div className="lg:col-span-7">
                <AnimatedSection direction="up">
                  <SectionLabel>Free DIY Playbook · Issue 02</SectionLabel>
                  <h1 className="text-hero font-display font-bold text-white mb-6 text-balance">
                    The OBG360 Amazon Audit
                  </h1>
                  <p className="text-obg-offwhite text-xl leading-relaxed mb-4 text-balance">
                    How to run a full audit on your own account — the exact
                    seven-part system, step by step.
                  </p>
                  <p className="text-obg-gray text-base leading-relaxed mb-8 max-w-xl">
                    The same diagnostic OBG has run on 500+ Amazon accounts in the
                    last 12 months, adapted so you can run it yourself. Each step
                    tells you the exact report to open, what to record, and what it
                    means. No fluff.
                  </p>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={120}>
                  <LeadForm location="hero" />
                </AnimatedSection>
              </div>

              {/* Right — Playbook visual */}
              <div className="lg:col-span-5">
                <AnimatedSection direction="right" delay={200}>
                  <div className="relative max-w-md mx-auto lg:max-w-none">
                    <div
                      aria-hidden
                      className="absolute -inset-4 bg-obg-orange/20 rounded-3xl blur-2xl"
                    />
                    <div className="relative aspect-[3/4] rounded-2xl border border-obg-blue-light/40 shadow-card overflow-hidden bg-gradient-to-br from-obg-blue-darker via-obg-blue-dark to-obg-blue p-8 flex flex-col">
                      <div className="text-obg-orange text-xs tracking-widest uppercase font-bold mb-1">
                        The OBG Playbook Series
                      </div>
                      <div className="text-obg-gray text-xs uppercase tracking-wider mb-10">
                        Issue 02 · For Amazon brand owners
                      </div>

                      <div className="text-[11px] text-obg-gray uppercase tracking-widest mb-3">
                        The DIY Audit Playbook
                      </div>
                      <div className="font-display font-bold text-white text-3xl md:text-4xl leading-tight mb-6">
                        The OBG360 Amazon Audit
                      </div>
                      <div className="text-obg-offwhite text-sm md:text-base leading-snug mb-auto">
                        How to run a full audit on your own account —<br />
                        the exact seven-part system, step by step.
                      </div>

                      <div className="mt-6 pt-6 border-t border-obg-blue-light/30">
                        <div className="text-[10px] text-obg-gray/80 uppercase tracking-widest mb-2">
                          Published by
                        </div>
                        <div className="text-white font-display font-bold text-sm">
                          Online Brand Growth
                        </div>
                        <div className="text-obg-gray text-xs">
                          onlinebrandgrowth.com · Charlotte, NC
                        </div>
                      </div>

                      <div
                        aria-hidden
                        className="absolute top-0 right-0 w-24 h-24 bg-gradient-orange opacity-20 rounded-bl-[5rem]"
                      />
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* ── What's inside ── */}
        <section className="section bg-obg-blue-dark">
          <div className="container-obg px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <SectionLabel>What&apos;s Inside</SectionLabel>
                <h2 className="text-white mb-4">
                  18 pages. Eleven steps. One full diagnosis.
                </h2>
                <p className="text-obg-gray">
                  Budget 6–7 hours for a proper pass. Each step names the exact
                  report to open, what to record, and how to read it for your
                  business.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {insideThePlaybook.map((item, i) => {
                const Icon = item.icon
                return (
                  <AnimatedSection key={item.title} delay={i * 80}>
                    <div className="card-dark h-full">
                      <div className="w-12 h-12 rounded-xl bg-obg-orange/10 border border-obg-orange/20 flex items-center justify-center mb-5">
                        <Icon size={22} className="text-obg-orange" />
                      </div>
                      <h3 className="text-white font-bold text-lg mb-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-obg-gray text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>

            <AnimatedSection delay={500}>
              <div className="max-w-3xl mx-auto mt-12 card-dark border-obg-orange/30 bg-gradient-to-r from-obg-orange/5 to-transparent text-center">
                <Search size={32} className="text-obg-orange mx-auto mb-4" />
                <p className="text-white font-semibold text-lg mb-2">
                  Plus: the one-page audit checklist.
                </p>
                <p className="text-obg-gray text-sm max-w-xl mx-auto">
                  Every step condensed to the one thing to walk away with. Pin it
                  above your desk and re-run it monthly — weekly when you&apos;re
                  under pressure.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Why this matters / stats ── */}
        <section className="section bg-obg-blue-darker">
          <div className="container-obg px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto mb-14">
                <SectionLabel>Why This System</SectionLabel>
                <h2 className="text-white mb-4">
                  Most brands never actually audit their account.
                </h2>
                <p className="text-obg-gray text-lg">
                  They toggle tactics — new images one week, a bid tweak the next —
                  and hope. A real audit swaps the guessing for a diagnosis: what&apos;s
                  actually holding growth back, and what to fix first.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="section bg-obg-blue">
          <div className="container-obg px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <SectionLabel>Real Results From Real Brands</SectionLabel>
                <h2 className="text-white mb-4">
                  The system behind the results.
                </h2>
              </div>
            </AnimatedSection>

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

        {/* ── Final CTA / form repeat ── */}
        <section className="section-lg bg-obg-blue-darker" id="get-the-playbook">
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-10">
                <SectionLabel>Send Me the Playbook</SectionLabel>
                <h2 className="text-white mb-4">
                  Ready to find out what&apos;s actually holding you back?
                </h2>
                <p className="text-obg-gray text-lg">
                  Drop your name and email below. We&apos;ll send the DIY Audit
                  Playbook straight to your inbox — free, no upsell, no obligation.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="card-dark border-obg-orange/30 bg-gradient-to-b from-obg-orange/5 to-transparent">
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
