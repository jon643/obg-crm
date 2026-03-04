import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import {
  BarChart2,
  Search,
  Package,
  TrendingUp,
  ShieldCheck,
  Users,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Amazon Agency Services | Online Brand Growth',
  description:
    'Full-service Amazon agency services: PPC advertising management, SEO & listing optimization, FBA logistics, strategic consulting, brand registry enforcement, and 360 Brand Protection™. Serving 7- and 8-figure brands.',
}

const services = [
  {
    id: 'advertising',
    icon: BarChart2,
    label: 'PPC Advertising',
    title: 'Amazon PPC Advertising Management',
    headline: 'Stop Wasting Ad Spend. Start Driving Profitable Growth.',
    description:
      'Most Amazon brands are either under-investing in advertising or pouring money into campaigns that don\'t convert. Our team manages your Sponsored Products, Sponsored Brands, and Sponsored Display campaigns with a singular focus: maximizing your return on ad spend (ROAS) while growing top-line revenue.',
    bullets: [
      'Full-funnel PPC strategy across Sponsored Products, Brands, and Display',
      'ASIN-by-ASIN bid management and keyword harvesting',
      'Competitor conquest and defensive ad strategies',
      'Weekly performance reporting with clear KPIs',
      'Amazon DSP demand-side programmatic (select clients)',
      'Alignment with organic rank and conversion rate goals',
    ],
    cta: 'Talk to an Amazon Ads Expert',
  },
  {
    id: 'seo',
    icon: Search,
    label: 'SEO & Listings',
    title: 'Amazon SEO & Listing Optimization',
    headline: 'Your Listings Are Either Working For You or Against You.',
    description:
      'In Amazon\'s hyper-competitive search environment, organic visibility is one of your most valuable assets. We combine deep keyword research, conversion rate optimization (CRO), and A+ Content to ensure your listings rank high, convert effectively, and tell a compelling brand story.',
    bullets: [
      'Data-driven keyword research and search term optimization',
      'Title, bullet point, and backend search term copywriting',
      'A+ Content and Brand Story creation',
      'Amazon Storefront design and optimization',
      'Product photography and video recommendations',
      'Conversion rate analysis and iterative testing',
    ],
    cta: 'Optimize My Listings',
  },
  {
    id: 'logistics',
    icon: Package,
    label: 'Logistics & Operations',
    title: 'Amazon Logistics & FBA Operations',
    headline: 'Operational Excellence Is the Unfair Advantage Most Brands Overlook.',
    description:
      'Profitability on Amazon isn\'t just about selling more — it\'s about running tighter operations. Our logistics and operations team manages your FBA inventory, coordinates with your supply chain, and proactively prevents stockouts, overstock penalties, and costly account health issues.',
    bullets: [
      'FBA inventory planning and replenishment strategy',
      'Shipment creation, labeling, and inbound management',
      'Account health monitoring and case management',
      'Removal order and stranded inventory resolution',
      'Seller Central compliance and policy management',
      'Coordination with 3PLs and freight partners',
    ],
    cta: 'Fix My Operations',
  },
  {
    id: 'consulting',
    icon: TrendingUp,
    label: 'Strategic Consulting',
    title: 'Amazon Strategic Growth Consulting',
    headline: 'A Clear Strategy Is the Difference Between Scaling and Stalling.',
    description:
      'Whether you\'re launching a new product, expanding internationally, or trying to understand why your Amazon business isn\'t growing the way it should, our founders work directly with your leadership team to diagnose the real problems and build a roadmap for sustainable growth.',
    bullets: [
      'Amazon channel audit and performance assessment',
      'Contribution margin analysis and profitability optimization',
      'New product launch strategy and go-to-market planning',
      'International marketplace expansion (CA, UK, EU)',
      'Amazon vendor (1P) vs. seller (3P) hybrid strategy',
      'Quarterly business reviews with actionable insights',
    ],
    cta: 'Book a Strategy Session',
  },
  {
    id: 'brand-registry',
    icon: ShieldCheck,
    label: 'Brand Protection',
    title: 'Brand Registry & Enforcement',
    headline: 'Protect the Brand You\'ve Built — Before Someone Else Profits From It.',
    description:
      'Unauthorized resellers don\'t just steal revenue — they damage customer trust, violate MAP pricing, and undermine your retail relationships. Our brand protection team enforces your rights on Amazon using a proprietary escalation process built to remove violators fast.',
    bullets: [
      'Amazon Brand Registry enrollment and management',
      'Unauthorized reseller identification and monitoring',
      'Automated cease & desist generation and delivery',
      'Authenticity test buys and counterfeit investigation',
      'Amazon Transparency program enrollment',
      'MAP price violation reporting and enforcement',
    ],
    cta: 'Protect My Brand',
    link360: true,
  },
  {
    id: 'account-management',
    icon: Users,
    label: 'Full Account Management',
    title: 'Full Amazon Account Management',
    headline: 'Everything Your Amazon Channel Needs — Handled by Experts.',
    description:
      'Our full account management service is the most comprehensive offering we provide. We become your Amazon team, managing every aspect of your channel — from advertising and SEO to operations, brand protection, and executive reporting. This is the partnership model built for brands that want serious, sustained growth.',
    bullets: [
      'Dedicated account strategist and weekly check-ins',
      'All advertising, SEO, and operations services included',
      'Brand protection and account health management',
      'Monthly executive reporting with Contribution Margin focus',
      'Direct access to both co-founders throughout the engagement',
      'Compensation aligned to channel profitability — not just revenue',
    ],
    cta: 'Apply for Full Management',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>

        {/* ── Hero ── */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-hero pt-28 pb-20">
          <div
            aria-hidden
            className="absolute inset-0 opacity-10"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #ff795e 0%, transparent 70%)',
            }}
          />
          <div className="container-obg px-6 md:px-8 lg:px-12 relative z-10 max-w-3xl mx-auto text-center">
            <AnimatedSection direction="up">
              <SectionLabel>What We Do</SectionLabel>
              <h1 className="text-hero font-display font-bold text-white mb-6 text-balance">
                Amazon Services Built for{' '}
                <span className="text-gradient-orange">Serious Brands</span>
              </h1>
              <p className="text-obg-gray text-xl leading-relaxed mb-8">
                Every service we offer is delivered in-house by our team of Amazon specialists — no outsourcing,
                no junior account managers, no black boxes. Just expert execution aligned with your profitability.
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

        {/* ── Services Nav ── */}
        <section className="bg-obg-blue border-b border-obg-blue-light/20 sticky top-[64px] z-30">
          <div className="container-obg px-6 md:px-8 lg:px-12">
            <div className="flex items-center gap-6 overflow-x-auto py-4 scrollbar-none">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-center gap-2 text-sm text-obg-gray hover:text-obg-orange whitespace-nowrap transition-colors duration-200 font-medium"
                >
                  <s.icon size={14} />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Service Sections ── */}
        {services.map((service, i) => {
          const Icon = service.icon
          const isEven = i % 2 === 0
          return (
            <section
              key={service.id}
              id={service.id}
              className={`section ${isEven ? 'bg-obg-blue-dark' : 'bg-obg-blue'}`}
            >
              <div className="container-obg px-6 md:px-8 lg:px-12 max-w-5xl mx-auto">
                <AnimatedSection>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-obg-orange/10 border border-obg-orange/20 flex items-center justify-center">
                      <Icon size={20} className="text-obg-orange" />
                    </div>
                    <SectionLabel className="mb-0">{service.label}</SectionLabel>
                  </div>
                  <h2 className="text-white mb-3">{service.title}</h2>
                  <p className="text-obg-orange font-semibold text-lg mb-6">{service.headline}</p>
                  <p className="text-obg-gray leading-relaxed text-lg mb-10 max-w-3xl">
                    {service.description}
                  </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
                  {service.bullets.map((bullet, j) => (
                    <AnimatedSection key={j} delay={j * 60}>
                      <div className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-obg-orange flex-shrink-0 mt-1" />
                        <span className="text-obg-offwhite text-sm leading-relaxed">{bullet}</span>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>

                <AnimatedSection delay={300}>
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <Link
                      href="https://app.usemotion.com/meet/dan-balda/obg-intro-45"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      {service.cta}
                      <ArrowRight size={16} />
                    </Link>
                    {service.link360 && (
                      <Link href="/360-brand-protection" className="btn-secondary inline-flex items-center gap-2">
                        Learn About 360 Brand Protection™
                        <ArrowRight size={16} />
                      </Link>
                    )}
                  </div>
                </AnimatedSection>
              </div>
            </section>
          )
        })}

        {/* ── Bottom CTA ── */}
        <section className="section bg-obg-blue-darker">
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <SectionLabel>Get Started</SectionLabel>
              <h2 className="text-white mb-6">
                Not Sure Which Service Is Right for You?
              </h2>
              <p className="text-obg-gray text-lg mb-10">
                Book a free 45-minute strategy call with our team. We&apos;ll audit your Amazon presence, identify
                your biggest growth opportunities, and recommend the right approach — no pitch, no pressure.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://app.usemotion.com/meet/dan-balda/obg-intro-45"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-lg px-9 py-4"
                >
                  Book Your Free Strategy Call
                </Link>
                <Link href="/case-studies" className="btn-secondary text-lg px-9 py-4">
                  See Our Results
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
