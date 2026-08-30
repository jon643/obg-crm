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
  title: 'Your Audit Playbook is Ready — Download Inside | OBG',
  description:
    'Download the OBG360 Amazon Audit DIY Playbook and get the four best practices for running your first audit this week.',
  alternates: { canonical: PAGE_URL },
  // Post-conversion page — keep out of organic search.
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
      'A proper pass takes 6–7 hours. Don’t squeeze it between Slack pings — book one deep-work day (or two half-days), work the steps in order, and note your 30- and 90-day data windows before you start so every number is comparable.',
  },
  {
    icon: Crosshair,
    title: 'Pick your 3 focus ASINs first — and resist auditing everything.',
    body:
      'The system works because it goes deep on three representative products: a top performer, a middle one, and a weak-but-strategic one. Auditing every SKU is how audits die at step 4. Three deep beats thirty shallow.',
  },
  {
    icon: ClipboardList,
    title: 'Record as you go — the checklist is the deliverable.',
    body:
      'Each step ends with one thing to walk away with. Write it down before moving on. By step 11 you’ll have a full diagnosis on paper — not a vague feeling that "ads could be better."',
  },
  {
    icon: ListChecks,
    title: 'End with the plan, not the findings.',
    body:
      'Step 11 turns everything into High / Medium / Low recommendations per ASIN and names your #1 constraint. Stabilize the economics first, fix the biggest constraint next, then compound what works. Re-run the one-pager monthly.',
  },
]

export default function AuditThankYouPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.onlinebrandgrowth.com' },
          {
            name: 'The OBG360 Amazon Audit — DIY Playbook',
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
                18 pages · 0.3 MB · PDF · No password
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
                  We&apos;ll run the whole audit — and hand you the plan.
                </h2>
                <p className="text-obg-gray leading-relaxed mb-3 max-w-2xl mx-auto">
                  A proper pass is a real day of work — and it&apos;s exactly what
                  we do, 500+ times over. The OBG360 Amazon Audit is the
                  done-for-you version of this playbook: run by the founders,
                  delivered as a clear, sequenced plan tailored to your brand, with
                  the numbers pulled and interpreted for you.
                </p>
                <p className="text-obg-gray text-sm leading-relaxed mb-8 max-w-2xl mx-auto">
                  Founder-led, 100% in-house, paid on your contribution profit —
                  not your ad spend. Start with a free strategy call.
                </p>

                <div className="flex flex-col items-center gap-3">
                  <Link
                    href="https://www.onlinebrandgrowth.com/#book-call"
                    className="btn-primary text-base px-8 py-4"
                  >
                    <Calendar size={18} />
                    Schedule Your Free Call
                  </Link>
                  <span className="text-obg-gray text-xs">
                    45 min · Google Meet · You pick the time
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
