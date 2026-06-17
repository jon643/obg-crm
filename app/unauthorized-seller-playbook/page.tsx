import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedSection from '@/components/ui/AnimatedSection'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import LeadForm from './LeadForm'
import {
  Search,
  ShieldCheck,
  FileText,
  AlertTriangle,
  Mail,
  CheckCircle2,
  TrendingUp,
  Lock,
} from 'lucide-react'

const PAGE_URL = 'https://www.onlinebrandgrowth.com/unauthorized-seller-playbook'

export const metadata: Metadata = {
  title: 'Free Playbook: The Unauthorized Seller Playbook | OBG',
  description:
    "Get OBG's internal Amazon brand-protection system: how to find unauthorized sellers, remove them, and keep them off your listings. The exact 7-step removal sequence, C&D templates, and Phase A/B/C plan — free.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'The Unauthorized Seller Playbook — Free from Online Brand Growth',
    description:
      'How to find unauthorized Amazon resellers, remove them, and keep them off your listings. The exact system OBG runs internally — laid out step by step.',
    url: PAGE_URL,
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const insideThePlaybook = [
  {
    icon: Search,
    title: 'Diagnose your seller landscape',
    description:
      'The 5-step audit every brand owner should run monthly — weekly under attack.',
  },
  {
    icon: ShieldCheck,
    title: 'Build the foundation',
    description:
      'Operating model, Brand Registry, MAP policy, and reseller agreements that actually have teeth.',
  },
  {
    icon: TrendingUp,
    title: 'The 7-step removal playbook',
    description:
      'From first detection to delisted — the exact sequence we use internally on every rogue seller.',
  },
  {
    icon: FileText,
    title: 'Cease & desist templates',
    description:
      'Three escalation tiers. Copy, adapt, send. The same letters we use to clear non-counterfeit sellers fast.',
  },
  {
    icon: Lock,
    title: 'Test buy SOP',
    description:
      'Run buys from the Brand Registered Owner account — the order ID Amazon will actually enforce on.',
  },
  {
    icon: AlertTriangle,
    title: 'Phase A / B / C plan',
    description:
      'How OBG sequences the work — Foundation → Build → Scale. A real plan, not a 90-day sprint.',
  },
]

const stats = [
  { value: '$467B', label: 'Global counterfeit trade per year', source: 'OECD/EUIPO' },
  { value: '15M+', label: 'Counterfeit units seized by Amazon in 2024' },
  { value: '24,000+', label: "Bad actors pursued by Amazon's CCU since 2020" },
]

const credibility = [
  { value: '$450M+', label: 'Lifetime Amazon revenue managed' },
  { value: '500+', label: 'Brands managed' },
  { value: '25+ yrs', label: 'E-commerce operator experience' },
  { value: '100%', label: "Amazon — that's all we do" },
]

export default function UnauthorizedSellerPlaybookPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.onlinebrandgrowth.com' },
          { name: 'The Unauthorized Seller Playbook', url: PAGE_URL },
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
                  <SectionLabel>Free Playbook · Issue 01</SectionLabel>
                  <h1 className="text-hero font-display font-bold text-white mb-6 text-balance">
                    The Unauthorized Seller Playbook
                  </h1>
                  <p className="text-obg-offwhite text-xl leading-relaxed mb-4 text-balance">
                    How to find them, remove them, and keep them off your listings.
                  </p>
                  <p className="text-obg-gray text-base leading-relaxed mb-8 max-w-xl">
                    The exact step-by-step system Online Brand Growth runs internally for the
                    Amazon brands we partner with. The audit, the 7-step removal sequence, the
                    C&amp;D templates, the test-buy SOP — no fluff, no theory.
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
                        Issue 01 · For Amazon brand owners
                      </div>

                      <div className="text-[11px] text-obg-gray uppercase tracking-widest mb-3">
                        Amazon Brand Protection
                      </div>
                      <div className="font-display font-bold text-white text-3xl md:text-4xl leading-tight mb-6">
                        The Unauthorized Seller Playbook
                      </div>
                      <div className="text-obg-offwhite text-sm md:text-base leading-snug mb-auto">
                        How to find them, remove them,<br />
                        and keep them off your listings.
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

                      {/* Decorative orange corner */}
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

        {/* ── What is inside ── */}
        <section className="section bg-obg-blue-dark">
          <div className="container-obg px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <SectionLabel>What&apos;s Inside</SectionLabel>
                <h2 className="text-white mb-4">
                  23 pages. The full system, end&#8209;to&#8209;end.
                </h2>
                <p className="text-obg-gray">
                  Audit → Foundation → Removal → Prevention. Work it section by section.
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
          </div>
        </section>

        {/* ── Why this matters / stats ── */}
        <section className="section bg-obg-blue-darker">
          <div className="container-obg px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto mb-14">
                <SectionLabel>Why This Matters</SectionLabel>
                <h2 className="text-white mb-4">
                  Counterfeits and unauthorized resale aren&apos;t an edge case.
                </h2>
                <p className="text-obg-gray text-lg">
                  They&apos;re a structural feature of global commerce. The question isn&apos;t whether
                  your brand will be hit — it&apos;s how prepared you are when it happens.
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
                    {stat.source && (
                      <p className="text-obg-gray/70 text-xs mt-2 uppercase tracking-wider">
                        {stat.source}
                      </p>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={350}>
              <div className="max-w-3xl mx-auto mt-14 card-dark border-obg-orange/30 bg-gradient-to-r from-obg-orange/5 to-transparent">
                <p className="text-white font-semibold text-lg mb-3">
                  Buy Box loss is just the headline number.
                </p>
                <p className="text-obg-gray text-sm leading-relaxed">
                  Layer in returns and A&#8209;to&#8209;Z claims absorbed on units they fulfilled,
                  ad spend wasted on a hijacked Buy Box, and authorized retailers who churn once
                  channel pricing collapses. The actual hit to net profit is materially larger.
                  The playbook shows you how to run the math on your own numbers — and stop the
                  bleed.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── About OBG / Authority ── */}
        <section className="section bg-obg-blue">
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <AnimatedSection direction="left">
                <SectionLabel>From the desk of OBG</SectionLabel>
                <h2 className="text-white mb-5">
                  Founder-led Amazon brand management.
                </h2>
                <p className="text-obg-gray leading-relaxed mb-4">
                  Online Brand Growth is a founder-led agency for serious Amazon operators.
                  Across our team&apos;s careers we&apos;ve built and scaled hundreds of brands on Amazon.
                </p>
                <p className="text-obg-gray leading-relaxed">
                  This playbook is the same system we run internally for the operators we partner
                  with today. No fluff. Just the exact moves, in the exact order, that get
                  unauthorized sellers off your listings — and keep them off.
                </p>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={120}>
                <div className="grid grid-cols-2 gap-4">
                  {credibility.map((c) => (
                    <div
                      key={c.label}
                      className="card-dark text-center p-6"
                    >
                      <div className="text-2xl md:text-3xl font-display font-bold text-white mb-1">
                        {c.value}
                      </div>
                      <p className="text-obg-gray text-xs leading-snug">{c.label}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── Final CTA / form repeat ── */}
        <section className="section-lg bg-obg-blue-darker" id="get-the-playbook">
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-10">
                <SectionLabel>Send Me the Playbook</SectionLabel>
                <h2 className="text-white mb-4">Ready to take your channel back?</h2>
                <p className="text-obg-gray text-lg">
                  Drop your name and email below. We&apos;ll send the playbook straight to your inbox —
                  free, no upsell, no obligation.
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
