import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import { Star, AlignCenter, Grid2x2, BarChart } from 'lucide-react'

const reasons = [
  {
    icon: Star,
    title: 'Founder-Led Agency',
    description:
      'Co-founders Jon Klein and Dan Balda bring 25+ years of combined Amazon operations experience and have managed 500+ brands. In addition to serving our partner brands, we own and operate our own brands on Amazon. We\'ll both be directly involved in your account\'s strategy and execution. We do not outsource any services to 3rd parties.',
  },
  {
    icon: AlignCenter,
    title: 'Full Alignment',
    description:
      'We partner with brands based on a percentage of your channel Contribution Margin. You can trust that our recommendations are aligned with your goal of maximizing profitability — not just revenue or ad spend.',
  },
  {
    icon: Grid2x2,
    title: 'Wholistic Approach',
    description:
      'A successful Amazon business requires seamless collaboration across Logistics, Operations, SEO/CRO, and Advertising. OBG\'s specialists either directly manage or support your team in each area. When your right hand can talk to your left hand, results improve.',
  },
  {
    icon: BarChart,
    title: 'Data-Driven Culture',
    description:
      'OBG obsesses over client performance and takes an extremely proactive approach to account management. We provide robust business intelligence and reporting to help you understand your Amazon business and make informed decisions.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section bg-obg-blue-dark" id="why-choose-us">
      <div className="container-obg px-6 md:px-8 lg:px-12">

        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Why OBG</SectionLabel>
            <h2 className="text-white mb-4">Why Choose Online Brand Growth?</h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <AnimatedSection key={reason.title} delay={i * 100}>
                <div className="card-dark h-full flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-obg-orange/10 border border-obg-orange/20 flex items-center justify-center">
                    <Icon size={22} className="text-obg-orange" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">{reason.title}</h3>
                    <p className="text-obg-gray text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

      </div>
    </section>
  )
}
