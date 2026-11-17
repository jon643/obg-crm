import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import { Phone, Search, Rocket } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: Phone,
    title: 'Tell Us About Your Brand',
    description:
      'Request your audit or apply to Stoic Brands, then book an intro call with Jon or Dan. No obligation, no pressure.',
  },
  {
    step: '02',
    icon: Search,
    title: 'Complimentary Amazon Audit & Strategy Call',
    description:
      'For Seller Central accounts, a full OBG360 account audit. For Stoic Brands applicants, an Amazon Opportunity Analysis showing what your products can sell for and what that is worth to you. We walk you through the findings either way.',
  },
  {
    step: '03',
    icon: Rocket,
    title: 'Choose Your Path',
    description:
      'A 90-day initial engagement with OBG as your fractional Amazon operator, then month to month. Or an exclusive distribution partnership where Stoic Brands buys your product and we run the channel at no fee.',
  },
]

export default function ProcessSteps() {
  return (
    <section className="section bg-obg-blue" id="process">
      <div className="container-obg px-6 md:px-8 lg:px-12">

        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="text-white mb-4">Both Paths Start the Same Way</h2>
            <p className="text-obg-gray">
              Getting started is simple. Here&apos;s exactly what happens after you reach out.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line (desktop) */}
          <div
            aria-hidden
            className="hidden md:block absolute top-10 left-[calc(16.67%+1px)] right-[calc(16.67%+1px)] h-px bg-gradient-to-r from-transparent via-obg-orange/40 to-transparent"
          />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <AnimatedSection key={step.step} delay={i * 150}>
                <div className="card-dark text-center flex flex-col items-center relative">
                  {/* Step number badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-obg-orange text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-glow-orange">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="mt-4 mb-5 w-14 h-14 rounded-2xl bg-obg-orange/10 border border-obg-orange/20 flex items-center justify-center">
                    <Icon size={24} className="text-obg-orange" />
                  </div>

                  <h3 className="text-white font-bold text-base mb-3">
                    {step.title}
                  </h3>
                  <p className="text-obg-gray text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        <AnimatedSection delay={500}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Link href="/amazon-audit" className="btn-primary text-base px-8 py-4">
              Get Your OBG360 Audit
            </Link>
            <Link href="/exclusive-distribution" className="btn-primary text-base px-8 py-4">
              Apply to Work With Us
            </Link>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}
