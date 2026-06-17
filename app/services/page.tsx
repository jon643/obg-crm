import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import {
  BarChart2,
  Search,
  Package,
  TrendingUp,
  ShieldCheck,
  Users,
  Store,
  LayoutGrid,
  Rocket,
  Globe,
  RefreshCcw,
  GitCompare,
  ArrowRight,
} from 'lucide-react'
import {
  tier1Services,
  tier2Services,
  type ServiceIcon,
} from '@/lib/services-data'

const BOOKING_URL = 'https://app.usemotion.com/meet/dan-balda/obg-intro-45'

const iconMap: Record<ServiceIcon, typeof BarChart2> = {
  ppc: BarChart2,
  seo: Search,
  logistics: Package,
  consulting: TrendingUp,
  brand: ShieldCheck,
  account: Users,
  storefront: Store,
  aplus: LayoutGrid,
  launch: Rocket,
  global: Globe,
  reimbursement: RefreshCcw,
  compare: GitCompare,
}

export const metadata: Metadata = {
  title: 'Amazon Agency Services',
  description:
    'Full-service Amazon agency: PPC management, SEO & listing optimization, FBA logistics, strategic consulting, brand registry enforcement, and full account management for 7- and 8-figure brands.',
  alternates: {
    canonical: 'https://www.onlinebrandgrowth.com/services',
  },
  openGraph: {
    title: 'Amazon Agency Services',
    description:
      'Full-service Amazon brand management: PPC, SEO, logistics, and brand protection for 7- and 8-figure brands.',
    url: 'https://www.onlinebrandgrowth.com/services',
  },
}

function ServiceCard({
  slug,
  icon,
  title,
  summary,
}: {
  slug: string
  icon: ServiceIcon
  title: string
  summary: string
}) {
  const Icon = iconMap[icon]
  return (
    <Link
      href={`/services/${slug}`}
      className="card-dark p-6 flex flex-col h-full hover:border-obg-orange/40 transition-colors duration-200"
    >
      <div className="w-11 h-11 rounded-xl bg-obg-orange/10 border border-obg-orange/20 flex items-center justify-center mb-4">
        <Icon size={20} className="text-obg-orange" />
      </div>
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-obg-gray text-sm leading-relaxed flex-1">{summary}</p>
      <span className="text-obg-orange text-sm font-medium inline-flex items-center gap-1 mt-4">
        Learn more <ArrowRight size={14} />
      </span>
    </Link>
  )
}

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.onlinebrandgrowth.com' },
          { name: 'Services', url: 'https://www.onlinebrandgrowth.com/services' },
        ]}
      />
      <Header />
      <main>

        {/* ── Hero ── */}
        <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-gradient-hero pt-28 pb-20">
          <div
            aria-hidden
            className="absolute inset-0 opacity-10"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% 0%, #ff795e 0%, transparent 70%)',
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
                Every service is delivered in-house by our team of Amazon specialists — no outsourcing,
                no junior account managers, no black boxes. Just expert execution aligned with your
                profitability. Explore each service below.
              </p>
              <Link
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-9 py-4"
              >
                Get Your FREE OBG360 Audit
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Core services ── */}
        <section className="section bg-obg-blue-dark">
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-6xl mx-auto">
            <AnimatedSection>
              <SectionLabel>Core Services</SectionLabel>
              <h2 className="text-white mb-4">Full-Service Amazon Brand Management</h2>
              <p className="text-obg-gray text-lg leading-relaxed mb-12 max-w-3xl">
                Engage any service à la carte or combine them under full account management. Each links
                to a dedicated page with the full detail.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {tier1Services.map((s) => (
                <AnimatedSection key={s.slug}>
                  <ServiceCard
                    slug={s.slug}
                    icon={s.icon}
                    title={s.navLabel}
                    summary={s.hubSummary}
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Specialized services ── */}
        <section className="section bg-obg-blue">
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-6xl mx-auto">
            <AnimatedSection>
              <SectionLabel>Specialized Services</SectionLabel>
              <h2 className="text-white mb-4">Targeted Solutions for Specific Goals</h2>
              <p className="text-obg-gray text-lg leading-relaxed mb-12 max-w-3xl">
                Focused engagements for a specific need — a launch, a storefront, recovering money Amazon
                owes you, or choosing the right selling model.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {tier2Services.map((s) => (
                <AnimatedSection key={s.slug}>
                  <ServiceCard
                    slug={s.slug}
                    icon={s.icon}
                    title={s.navLabel}
                    summary={s.hubSummary}
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="section bg-obg-blue-darker">
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <SectionLabel>Get Started</SectionLabel>
              <h2 className="text-white mb-6">Not Sure Which Service Is Right for You?</h2>
              <p className="text-obg-gray text-lg mb-10">
                Book a free 45-minute strategy call with our team. We&apos;ll audit your Amazon presence,
                identify your biggest growth opportunities, and recommend the right approach — no pitch,
                no pressure.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-lg px-9 py-4"
                >
                  Get Your FREE OBG360 Audit
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
