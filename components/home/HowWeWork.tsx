import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import { Store, Truck, Handshake } from 'lucide-react'

const models = [
  {
    icon: Store,
    tag: 'Most Popular',
    title: 'Seller Central Account Growth (3P)',
    description:
      'Our team of experts collaborate with your in-house team to continually increase sales and profit of your Amazon Seller Central account. We help transform Amazon from a frustration to your most profitable distribution channel.',
    accentColor: 'from-obg-orange/10 to-transparent',
    borderColor: 'border-obg-orange/25 hover:border-obg-orange/50',
    tagColor: 'bg-obg-orange/15 text-obg-orange border-obg-orange/30',
  },
  {
    icon: Truck,
    tag: 'Lower Overhead',
    title: 'Amazon Distribution Partnership',
    description:
      'Online Brand Growth purchases inventory from your company and sells through our own Amazon store, leveraging our agency services to increase purchase order quantities. This model provides less operational burden, allowing you to focus on your core business.',
    accentColor: 'from-blue-500/10 to-transparent',
    borderColor: 'border-blue-500/20 hover:border-blue-400/40',
    tagColor: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  },
  {
    icon: Handshake,
    tag: 'Long-Term Partnership',
    title: 'Equity Partnership',
    description:
      'We invest in your growing ecommerce business as a minority partner with significant Amazon and ecommerce capabilities. This allows us to provide discounted services, leverage deep industry connections, and forge a long-term partnership with sights set on a successful brand exit.',
    accentColor: 'from-emerald-500/10 to-transparent',
    borderColor: 'border-emerald-500/20 hover:border-emerald-400/40',
    tagColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  },
]

export default function HowWeWork() {
  return (
    <section className="section bg-obg-blue-dark" id="how-we-work">
      <div className="container-obg px-6 md:px-8 lg:px-12">

        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Partnership Models</SectionLabel>
            <h2 className="text-white mb-4">How We Work With Brands</h2>
            <p className="text-obg-gray">
              Every brand is different. We offer three partnership structures so you can choose
              the model that fits your goals, resources, and growth stage.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((model, i) => {
            const Icon = model.icon
            return (
              <AnimatedSection key={model.title} delay={i * 120}>
                <div
                  className={`card-dark h-full flex flex-col bg-gradient-to-b ${model.accentColor} border ${model.borderColor} transition-all duration-300`}
                >
                  {/* Tag */}
                  <span
                    className={`self-start text-xs font-semibold border rounded-full px-3 py-1 mb-6 ${model.tagColor}`}
                  >
                    {model.tag}
                  </span>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-obg-orange" />
                  </div>

                  {/* Content */}
                  <h3 className="text-white font-bold text-lg mb-3 leading-snug">
                    {model.title}
                  </h3>
                  <p className="text-obg-gray text-sm leading-relaxed flex-1">
                    {model.description}
                  </p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

      </div>
    </section>
  )
}
