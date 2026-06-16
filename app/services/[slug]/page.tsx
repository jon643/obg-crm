import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import LeadForm from '@/app/unauthorized-seller-playbook/LeadForm'
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
  CheckCircle,
  ArrowRight,
} from 'lucide-react'
import {
  servicePages,
  getServiceBySlug,
  type ServiceIcon,
} from '@/lib/services-data'

const BASE_URL = 'https://www.onlinebrandgrowth.com'
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

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const service = getServiceBySlug(params.slug)
  if (!service) return {}
  const url = `${BASE_URL}/services/${service.slug}`
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
    },
  }
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  const Icon = iconMap[service.icon]
  const url = `${BASE_URL}/services/${service.slug}`

  const related = service.relatedServices
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))

  // ── Structured data ──────────────────────────────────────
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.h1,
    description: service.metaDescription,
    serviceType: service.navLabel,
    url,
    areaServed: 'Worldwide',
    provider: {
      '@type': 'Organization',
      name: 'Online Brand Growth',
      url: BASE_URL,
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: BASE_URL },
          { name: 'Services', url: `${BASE_URL}/services` },
          { name: service.navLabel, url },
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
              {/* Breadcrumb trail */}
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center justify-center gap-2 text-sm text-obg-gray">
                  <li>
                    <Link href="/services" className="hover:text-obg-orange transition-colors">
                      Services
                    </Link>
                  </li>
                  <li aria-hidden>/</li>
                  <li className="text-obg-offwhite">{service.navLabel}</li>
                </ol>
              </nav>

              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-obg-orange/10 border border-obg-orange/20 flex items-center justify-center">
                  <Icon size={22} className="text-obg-orange" />
                </div>
                <SectionLabel className="mb-0">{service.eyebrow}</SectionLabel>
              </div>

              <h1 className="text-hero font-display font-bold text-white mb-5 text-balance">
                {service.h1}
              </h1>
              <p className="text-obg-orange font-semibold text-lg md:text-xl mb-6">
                {service.headline}
              </p>
              <p className="text-obg-gray text-lg leading-relaxed mb-8">
                {service.intro}
              </p>
              <Link
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-9 py-4 inline-flex items-center gap-2"
              >
                {service.ctaLabel}
                <ArrowRight size={18} />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* ── What's included ── */}
        <section className="section bg-obg-blue-dark">
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-5xl mx-auto">
            <AnimatedSection>
              <SectionLabel>What&apos;s Included</SectionLabel>
              <h2 className="text-white mb-10">What This Service Covers</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.features.map((feature, j) => (
                <AnimatedSection key={j} delay={j * 60}>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-obg-orange flex-shrink-0 mt-1" />
                    <span className="text-obg-offwhite text-sm leading-relaxed">{feature}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our approach ── */}
        <section className="section bg-obg-blue">
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-3xl mx-auto">
            <AnimatedSection>
              <SectionLabel>Our Approach</SectionLabel>
              <h2 className="text-white mb-6">{service.approachTitle}</h2>
              <p className="text-obg-gray text-lg leading-relaxed">{service.approach}</p>
            </AnimatedSection>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section bg-obg-blue-dark">
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-3xl mx-auto">
            <AnimatedSection>
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="text-white mb-10">Frequently Asked Questions</h2>
            </AnimatedSection>
            <div className="space-y-4">
              {service.faqs.map((faq, j) => (
                <AnimatedSection key={j} delay={j * 80}>
                  <details className="group card-dark p-6">
                    <summary className="flex items-center justify-between cursor-pointer list-none text-white font-semibold">
                      <span>{faq.q}</span>
                      <ArrowRight
                        size={18}
                        className="text-obg-orange flex-shrink-0 ml-4 transition-transform duration-200 group-open:rotate-90"
                      />
                    </summary>
                    <p className="text-obg-gray leading-relaxed mt-4">{faq.a}</p>
                  </details>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related / cross-links ── */}
        {(related.length > 0 || service.relatedCaseStudy || service.link360) && (
          <section className="section bg-obg-blue">
            <div className="container-obg px-6 md:px-8 lg:px-12 max-w-5xl mx-auto">
              <AnimatedSection>
                <SectionLabel>Keep Exploring</SectionLabel>
                <h2 className="text-white mb-10">Related Services &amp; Results</h2>
              </AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {related.map((r) => {
                  const RIcon = iconMap[r.icon]
                  return (
                    <AnimatedSection key={r.slug}>
                      <Link
                        href={`/services/${r.slug}`}
                        className="card-dark p-6 flex flex-col h-full hover:border-obg-orange/40 transition-colors duration-200"
                      >
                        <div className="w-10 h-10 rounded-xl bg-obg-orange/10 border border-obg-orange/20 flex items-center justify-center mb-4">
                          <RIcon size={18} className="text-obg-orange" />
                        </div>
                        <h3 className="text-white font-semibold mb-2">{r.navLabel}</h3>
                        <p className="text-obg-gray text-sm leading-relaxed flex-1">{r.hubSummary}</p>
                        <span className="text-obg-orange text-sm font-medium inline-flex items-center gap-1 mt-4">
                          Learn more <ArrowRight size={14} />
                        </span>
                      </Link>
                    </AnimatedSection>
                  )
                })}

                {service.link360 && (
                  <AnimatedSection>
                    <Link
                      href="/360-brand-protection"
                      className="card-dark p-6 flex flex-col h-full hover:border-obg-orange/40 transition-colors duration-200"
                    >
                      <div className="w-10 h-10 rounded-xl bg-obg-orange/10 border border-obg-orange/20 flex items-center justify-center mb-4">
                        <ShieldCheck size={18} className="text-obg-orange" />
                      </div>
                      <h3 className="text-white font-semibold mb-2">360 Brand Protection&trade;</h3>
                      <p className="text-obg-gray text-sm leading-relaxed flex-1">
                        Our overarching brand-protection methodology and program.
                      </p>
                      <span className="text-obg-orange text-sm font-medium inline-flex items-center gap-1 mt-4">
                        Learn more <ArrowRight size={14} />
                      </span>
                    </Link>
                  </AnimatedSection>
                )}

                {service.relatedCaseStudy && (
                  <AnimatedSection>
                    <Link
                      href={service.relatedCaseStudy.href}
                      className="card-dark p-6 flex flex-col h-full hover:border-obg-orange/40 transition-colors duration-200"
                    >
                      <div className="w-10 h-10 rounded-xl bg-obg-orange/10 border border-obg-orange/20 flex items-center justify-center mb-4">
                        <TrendingUp size={18} className="text-obg-orange" />
                      </div>
                      <h3 className="text-white font-semibold mb-2">Case Study</h3>
                      <p className="text-obg-gray text-sm leading-relaxed flex-1">
                        {service.relatedCaseStudy.label}
                      </p>
                      <span className="text-obg-orange text-sm font-medium inline-flex items-center gap-1 mt-4">
                        Read it <ArrowRight size={14} />
                      </span>
                    </Link>
                  </AnimatedSection>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ── Lead magnet (e.g. unauthorized-seller playbook) ── */}
        {service.leadMagnet && (
          <section className="section bg-obg-blue-darker border-t border-obg-blue-light/10">
            <div className="container-obg px-6 md:px-8 lg:px-12 max-w-2xl mx-auto text-center">
              <AnimatedSection>
                <SectionLabel>{service.leadMagnet.eyebrow}</SectionLabel>
                <h2 className="text-white mb-4">{service.leadMagnet.heading}</h2>
                <p className="text-obg-gray text-lg mb-8">{service.leadMagnet.blurb}</p>
                <div className="flex justify-center">
                  <LeadForm location="brand-registry-page" />
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* ── Bottom CTA ── */}
        <section className="section bg-obg-blue-darker">
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <SectionLabel>Get Started</SectionLabel>
              <h2 className="text-white mb-6">Ready to Talk Through Your Amazon Channel?</h2>
              <p className="text-obg-gray text-lg mb-10">
                Book a free 45-minute strategy call. We&apos;ll audit your Amazon presence, pinpoint your
                biggest growth opportunities, and recommend the right approach — no pitch, no pressure.
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
                <Link href="/services" className="btn-secondary text-lg px-9 py-4">
                  View All Services
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
