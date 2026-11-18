import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedSection from '@/components/ui/AnimatedSection'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import {
  Download,
  CheckCircle2,
  Calendar,
  ArrowRight,
  CalendarClock,
  Crosshair,
  ClipboardList,
  ListChecks,
} from 'lucide-react'

const PAGE_URL =
  'https://www.onlinebrandgrowth.com/amazon-audit-playbook/thank-you'
const PDF_URL = '/downloads/obg360-amazon-audit-diy-playbook.pdf'

export const metadata: Metadata = {
  title: 'Your Audit Playbook is Ready - Download Inside | OBG',
  description:
    'Download the OBG360 Amazon Audit DIY Playbook and get four rules for running your first audit this week.',
  alternates: { canonical: PAGE_URL },
  // Post-conversion page - keep out of organic search.
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Your OBG360 Audit Playbook is Ready',
    description:
      'Download the DIY Audit Playbook and the four moves to run your first audit right.',
    url: PAGE_URL,
  },
}

const bestPractices = [
  {
    icon: CalendarClock,
    title: 'Block the time like it’s a client meeting.',
    body:
      'A proper first pass takes 8 to 10 hours. Book two half-days, work the sections in order, and save all eight data pulls for the same dates before you start so every number is comparable.',
  },
  {
    icon: Crosshair,
    title: 'Load your product costs before anything else.',
    body:
      'Every section leans on profit per product. If landed cost is missing in your profit tool, break-even ACOS, the ad tiers and the roadmap are all wrong. It is the most common gap we find.',
  },
  {
    icon: ClipboardList,
    title: 'Write down the output at the end of each section.',
    body:
      'Each section ends with the numbers to record. Do it before moving on. By Section 10 you have a diagnosis on paper, not a feeling that "ads could be better."',
  },
  {
    icon: ListChecks,
    title: 'Run the rank check before you cut any ad spend.',
    body:
      'Section 05 will show you waste. Cut the zero-order search terms right away, but check whether a product’s ads are holding its organic rank before you pause anything. It is on page 16.',
  },
]

export default function AuditThankYouPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.onlinebrandgrowth.com' },
          {
            name: 'The OBG360 Amazon Audit - DIY Playbook',
            url: 'https://www.onlinebrandgrowth.com/amazon-audit-playbook',
          },
          { name: 'Thank You', url: PAGE_URL },
        ]}
      />
      <Header />
      <main>

        {/* ── Hero / Download ── */}
        <section className="relative overflow-hidden bg-gradient-hero pt-28 pb-16 md:pb-20">
          <div
            aria-hidden
            className="absolute inset-0 opacity-15"
            style={{
              background:
                'radial-gradient(ellipse 70% 60% at 50% 0%, #ff795e 0%, transparent 60%)',
            }}
          />
          <div className="container-obg px-6 md:px-8 lg:px-12 relative z-10 max-w-3xl mx-auto text-center">
            <AnimatedSection direction="up">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-obg-orange/15 border border-obg-orange/30 flex items-center justify-center">
                <CheckCircle2 size={32} className="text-obg-orange" />
              </div>
              <SectionLabel>You&apos;re in</SectionLabel>
              <h1 className="text-hero font-display font-bold text-white mb-6 text-balance">
                Your audit playbook is ready.
              </h1>
              <p className="text-obg-offwhite text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                Download it below. We&apos;ve also sent a copy to your inbox so you
                can find it later.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <a
                  href={PDF_URL}
                  download="OBG360-Amazon-Audit-DIY-Playbook.pdf"
                  className="btn-primary text-lg px-9 py-4"
                >
                  <Download size={20} />
                  Download the Playbook (PDF)
                </a>
                <a
                  href={PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-obg-gray hover:text-obg-orange text-sm transition-colors underline-orange"
                >
                  or open it in a new tab
                </a>
              </div>

              <p className="text-obg-gray text-xs">
                31 pages · 2.7 MB · PDF · Updated November 2026
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Best practices ── */}
        <section className="section bg-obg-blue-dark">
          <div className="container-obg px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <SectionLabel>How to run it right</SectionLabel>
                <h2 className="text-white mb-4">
                  Four rules for your first audit.
                </h2>
                <p className="text-obg-gray">
                  This playbook is a working diagnostic, not weekend reading.
                  Here&apos;s how to make sure it produces a real plan.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {bestPractices.map((p, i) => {
                const Icon = p.icon
                return (
                  <AnimatedSection key={p.title} delay={i * 90}>
                    <div className="card-dark h-full">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-11 h-11 rounded-xl bg-obg-orange/10 border border-obg-orange/20 flex items-center justify-center flex-shrink-0">
                          <Icon size={20} className="text-obg-orange" />
                        </div>
                        <div className="flex-1">
                          <div className="text-obg-orange/70 font-bold text-xs tracking-widest mb-1">
                            RULE {i + 1}
                          </div>
                          <h3 className="text-white font-bold text-lg leading-snug">
                            {p.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-obg-gray text-sm leading-relaxed">
                        {p.body}
                      </p>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Strategy call CTA ── */}
        <section className="section-lg bg-obg-blue-darker">
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="card-dark border-obg-orange/30 bg-gradient-to-br from-obg-orange/10 to-transparent p-8 md:p-12 text-center">
                <SectionLabel>Prefer we just do it for you?</SectionLabel>
                <h2 className="text-white mb-5">
                  We&apos;ll run the whole audit - and hand you the plan.
                </h2>
                <p className="text-obg-gray leading-relaxed mb-3 max-w-2xl mx-auto">
                  A proper pass is a full day of work. The OBG360 Amazon Audit is
                  the same ten sections, run on your data by Jon and Dan, and
                  delivered as a finished document with every recommendation
                  ranked by monthly profit. It is free, and it is yours to keep.
                </p>
                <p className="text-obg-gray text-sm leading-relaxed mb-8 max-w-2xl mx-auto">
                  Online Brand Growth is a fractional Amazon operator for
                  established brands: in-house, founder-led, and paid on your
                  contribution profit, not your ad spend.
                </p>

                <div className="flex flex-col items-center gap-3">
                  <Link
                    href="/fractional-amazon-operator"
                    className="btn-primary text-base px-8 py-4"
                  >
                    <Calendar size={18} />
                    Get Your Free OBG360 Audit
                  </Link>
                  <span className="text-obg-gray text-xs">
                    Free · No obligation · Yours to keep
                  </span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="mt-10 text-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-obg-gray hover:text-obg-orange transition-colors text-sm"
                >
                  Back to onlinebrandgrowth.com
                  <ArrowRight size={14} />
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
