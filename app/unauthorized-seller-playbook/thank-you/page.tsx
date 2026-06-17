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
  ListChecks,
  Compass,
  Target,
  AlertOctagon,
} from 'lucide-react'

const PAGE_URL =
  'https://www.onlinebrandgrowth.com/unauthorized-seller-playbook/thank-you'
const PDF_URL = '/downloads/obg-unauthorized-seller-playbook.pdf'

export const metadata: Metadata = {
  title: 'Your Playbook is Ready — Download Inside | OBG',
  description:
    "Download the Unauthorized Seller Playbook and get the four best practices for putting it to work on your Amazon channel this week.",
  alternates: { canonical: PAGE_URL },
  // Keep this page out of organic search — it's the post-conversion thank-you page.
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Your OBG Playbook is Ready',
    description:
      'Download the Unauthorized Seller Playbook and the four moves to run this week.',
    url: PAGE_URL,
  },
}

const bestPractices = [
  {
    icon: ListChecks,
    title: 'Read it once. Run the audit.',
    body:
      "Don't skim — read sections 1–3 end to end. Then sit down with Seller Central and run the 5-step audit on your top 5 ASINs. You're looking for the gap between what you think is on your listings and what's actually there.",
  },
  {
    icon: Compass,
    title: 'Stand up the foundation before chasing sellers.',
    body:
      "Sections 4–6 are the unsexy part most brands skip — Brand Registry, MAP policy, reseller agreements. If you go straight to removal without the foundation, the same sellers re-list under a new account next week. Do the boring work first.",
  },
  {
    icon: Target,
    title: 'Work the 7-step sequence in order.',
    body:
      "It's an escalation ladder. Don't jump to test buys before you've sent the tiered C&D letters — most non-counterfeit sellers fold at the first or second letter. Save Amazon Transparency enrollment for the genuinely persistent ones.",
  },
  {
    icon: AlertOctagon,
    title: 'Treat this as a recurring cadence, not a one-off.',
    body:
      "New sellers appear constantly. Re-run the audit monthly under normal conditions, weekly when you're being actively hijacked. Tracking the same 5 metrics each cycle is what tells you whether the system is actually working.",
  },
]

export default function ThankYouPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.onlinebrandgrowth.com' },
          {
            name: 'The Unauthorized Seller Playbook',
            url: 'https://www.onlinebrandgrowth.com/unauthorized-seller-playbook',
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
                Your seller playbook is ready.
              </h1>
              <p className="text-obg-offwhite text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                Download it below. We&apos;ve also sent a copy to your inbox so you
                can find it later.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <a
                  href={PDF_URL}
                  download="OBG-Unauthorized-Seller-Playbook.pdf"
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
                23 pages · 0.2 MB · PDF · No password
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Best practices ── */}
        <section className="section bg-obg-blue-dark">
          <div className="container-obg px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <SectionLabel>How to actually use this</SectionLabel>
                <h2 className="text-white mb-4">
                  Four moves to run this week.
                </h2>
                <p className="text-obg-gray">
                  Most brand owners read a playbook, nod, and file it away.
                  Here&apos;s how to make sure you actually get value out of this
                  one.
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
                            STEP {i + 1}
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
                <SectionLabel>Want help running it?</SectionLabel>
                <h2 className="text-white mb-5">
                  Book a free strategy call.
                </h2>
                <p className="text-obg-gray leading-relaxed mb-3 max-w-2xl mx-auto">
                  The playbook is the system. If you&apos;d rather have our team
                  run it on your Amazon channel — or you want to walk through
                  what we&apos;d do for your specific situation — grab a
                  45-minute strategy call.
                </p>
                <p className="text-obg-gray text-sm leading-relaxed mb-8 max-w-2xl mx-auto">
                  No pitch deck, no pressure. Just an honest look at your seller
                  landscape and what the realistic next move is.
                </p>

                <div className="flex flex-col items-center gap-3">
                  <Link
                    href="https://www.onlinebrandgrowth.com/#book-call"
                    className="btn-primary text-base px-8 py-4"
                  >
                    <Calendar size={18} />
                    Get Your FREE OBG360 Audit
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
