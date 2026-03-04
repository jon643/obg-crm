import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedSection from '@/components/ui/AnimatedSection'
import {
  ShieldCheck,
  Bot,
  FileText,
  ShoppingCart,
  Lock,
  XCircle,
  AlertTriangle,
  ThumbsDown,
} from 'lucide-react'

export const metadata: Metadata = {
  title: '360 Brand Protection™ | Stop Unauthorized Amazon Resellers',
  description:
    'OBG\'s proprietary 360 Brand Protection™ service uses 24/7 AI monitoring, automated cease & desist enforcement, and Amazon Transparency enrollment to stop unauthorized resellers fast.',
  alternates: {
    canonical: 'https://www.onlinebrandgrowth.com/360-brand-protection',
  },
  openGraph: {
    title: '360 Brand Protection™ | Stop Unauthorized Amazon Resellers',
    description: '24/7 AI monitoring, automated cease & desist enforcement, and Amazon Transparency enrollment to stop unauthorized resellers.',
    url: 'https://www.onlinebrandgrowth.com/360-brand-protection',
  },
}

const problems = [
  { icon: XCircle, text: 'Hijacking your Buy Box' },
  { icon: XCircle, text: 'Undercutting your MAP price' },
  { icon: XCircle, text: 'Creating duplicate listings with poor content' },
  { icon: XCircle, text: 'Shipping expired, damaged, or counterfeit goods to your customers' },
]

const consequences = [
  { icon: ThumbsDown, text: 'Brand trust erodes' },
  { icon: AlertTriangle, text: 'Your retail partners get angry' },
  { icon: ThumbsDown, text: 'Bad reviews pile up — damaging your reputation everywhere' },
]

const features = [
  {
    icon: Bot,
    title: '24/7 AI Buy Box Monitoring',
    description:
      'Our AI tech scans your listings every minute of every day. The moment an unauthorized seller jumps on, we know.',
  },
  {
    icon: FileText,
    title: 'Automated Cease & Desist Enforcement',
    description:
      'Our system instantly generates and sends cease and desist notices — removing most violators before you even know they were there.',
  },
  {
    icon: ShoppingCart,
    title: 'Authenticity Test Buys',
    description:
      'If they don\'t back down, we perform controlled test buys to verify whether their inventory is authentic or counterfeit.',
  },
  {
    icon: Lock,
    title: 'Amazon Transparency Enrollment',
    description:
      'If the problem persists, we fast-track you into Amazon\'s Transparency program — giving you total control over your listings once and for all.',
  },
]

export default function BrandProtectionPage() {
  return (
    <>
      <Header />
      <main>

        {/* ── Hero ── */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-hero pt-28 pb-20">
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
              <SectionLabel>Proprietary Service</SectionLabel>
              <h1 className="text-hero font-display font-bold text-white mb-6 text-balance">
                360 Brand Protection™
              </h1>
              <p className="text-obg-gray text-xl leading-relaxed mb-8">
                Right now, your products are being sold on Amazon by people you&apos;ve never met.
              </p>
              <p className="text-2xl md:text-3xl font-bold text-white mb-10">
                Unauthorized resellers.
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

        {/* ── What They're Doing ── */}
        <section className="section bg-obg-blue-dark">
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <SectionLabel>The Problem</SectionLabel>
                <h2 className="text-white mb-4">They&apos;re Hijacking Your Brand</h2>
                <p className="text-obg-gray">
                  Unauthorized resellers are actively undermining your brand on Amazon — right now.
                  Here&apos;s what they&apos;re doing:
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
              {problems.map((p, i) => {
                const Icon = p.icon
                return (
                  <AnimatedSection key={p.text} delay={i * 80}>
                    <div className="card-glass flex items-start gap-4 p-5">
                      <Icon size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-obg-offwhite text-sm">{p.text}</span>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>

            <AnimatedSection delay={200}>
              <div className="card-dark border-red-500/20 bg-gradient-to-b from-red-500/5 to-transparent mb-6">
                <p className="text-white font-bold text-lg mb-6">The result?</p>
                <div className="space-y-4">
                  {consequences.map((c) => {
                    const Icon = c.icon
                    return (
                      <div key={c.text} className="flex items-start gap-3">
                        <Icon size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
                        <span className="text-obg-gray text-sm">{c.text}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <p className="text-center text-obg-gray text-lg">
                If you feel like you&apos;ve lost control of your brand on Amazon,{' '}
                <span className="text-white font-semibold">you&apos;re not alone.</span>
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ── The Reveal ── */}
        <section className="section bg-obg-blue">
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <p className="text-obg-gray text-lg mb-4">But here&apos;s what you might not know:</p>
              <h2 className="text-white mb-6">
                There Is a New Way to Monitor and Shut Down Unauthorized Sellers —{' '}
                <span className="text-gradient-orange">Fast.</span>
              </h2>
              <p className="text-obg-gray text-lg leading-relaxed">
                At Online Brand Growth (OBG), we&apos;ve developed a proprietary process we call{' '}
                <span className="text-white font-bold">360 Brand Protection™</span>.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="section bg-obg-blue-darker" id="how-it-works">
          <div className="container-obg px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <SectionLabel>The System</SectionLabel>
                <h2 className="text-white mb-4">Here&apos;s How It Works</h2>
                <p className="text-obg-gray">
                  Four automated, escalating steps — built to win.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
              {features.map((feature, i) => {
                const Icon = feature.icon
                return (
                  <AnimatedSection key={feature.title} delay={i * 100}>
                    <div className="card-dark h-full flex gap-5 border-obg-orange/20 hover:border-obg-orange/40">
                      {/* Step number + icon */}
                      <div className="flex-shrink-0 flex flex-col items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-obg-orange/10 border border-obg-orange/20 flex items-center justify-center">
                          <Icon size={20} className="text-obg-orange" />
                        </div>
                        <span className="text-obg-orange/60 font-bold text-xs">0{i + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-base mb-2 leading-snug">
                          ✅ {feature.title}
                        </h3>
                        <p className="text-obg-gray text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>

            <AnimatedSection delay={450}>
              <div className="max-w-4xl mx-auto card-dark border-obg-orange/30 bg-gradient-to-r from-obg-orange/5 to-transparent text-center">
                <ShieldCheck size={36} className="text-obg-orange mx-auto mb-4" />
                <p className="text-white font-semibold text-lg mb-2">
                  This is not the slow, manual process most agencies use.
                </p>
                <p className="text-obg-gray text-sm max-w-xl mx-auto">
                  This is automated, relentless enforcement backed by Amazon-compliant escalation
                  steps — designed to protect your brand at every level.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section bg-obg-blue-dark">
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <SectionLabel>Take Back Control</SectionLabel>
              <h2 className="text-white mb-6">
                Ready to Finally Own Your Amazon Channel?
              </h2>
              <p className="text-obg-gray text-lg mb-10">
                If you want to take down unauthorized resellers and gain full control of your
                Amazon channel, book your Free Strategy Call with Online Brand Growth today.
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
