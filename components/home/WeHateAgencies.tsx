import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import { Ban, Target, Trophy, TrendingUp } from 'lucide-react'

const differentiators = [
  { icon: Ban, text: 'Not Another Black Box Agency' },
  { icon: Target, text: 'Real ASIN-by-ASIN Strategy + Execution' },
  { icon: Trophy, text: 'A+ Players Without the Agency Cost' },
  { icon: TrendingUp, text: 'Focus on the Metrics That Matter' },
]

export default function WeHateAgencies() {
  return (
    <section className="section bg-obg-blue-darker" id="about">
      <div className="container-obg px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <AnimatedSection direction="left">
            <SectionLabel>Our Philosophy</SectionLabel>
            <h2 className="text-white mb-6">We Hate Agencies.<br />That&apos;s Why We Built This One.</h2>
            <p className="text-obg-gray leading-relaxed mb-8">
              We&apos;re not just another Amazon marketing agency — we&apos;re your trusted growth partner
              who will always do what&apos;s right for your business. As brand owners ourselves,
              we leverage our experience and network to serve our partner brands at the highest level.
            </p>
            <Link href="/#book-call" className="btn-primary">
              Partner With Us
            </Link>
          </AnimatedSection>

          {/* Right — differentiator grid */}
          <AnimatedSection direction="right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {differentiators.map((d, i) => {
                const Icon = d.icon
                return (
                  <div
                    key={d.text}
                    className="card-glass flex items-start gap-4 p-6"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-obg-orange/10 border border-obg-orange/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-obg-orange" />
                    </div>
                    <span className="text-white font-semibold text-sm leading-snug">{d.text}</span>
                  </div>
                )
              })}
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}
