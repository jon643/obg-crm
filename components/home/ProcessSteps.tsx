import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import { Phone, Search, Rocket } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: Phone,
    title: 'Book an Intro Call',
    description:
      'Free consultation from Jon or Dan to understand your brand\'s needs and determine if OBG can add value. No obligation, no pressure.',
  },
  {
    step: '02',
    icon: Search,
    title: 'Complimentary Brand Audit & Strategic Roadmap',
    description:
      'Our team performs a deep dive on your Amazon account and makes specific recommendations to improve sales and profitability.',
  },
  {
    step: '03',
    icon: Rocket,
    title: 'Ongoing Brand Growth & Consulting Services',
    description:
      'Take action and execute together on the most compelling business initiatives. Daily Slack communication and weekly calls to align on activities and results.',
  },
]

export default function ProcessSteps() {
  return (
    <section className="section bg-obg-blue" id="process">
      <div className="container-obg px-6 md:px-8 lg:px-12">

        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="text-white mb-4">Next Steps</h2>
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
          <div className="text-center mt-12">
            <Link href="/#book-call" className="btn-primary text-base px-8 py-4">
              Get Your FREE OBG360 Audit
            </Link>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}
