import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import { Store, Truck, Handshake, Check, ArrowRight } from 'lucide-react'

const models = [
  {
    icon: Store,
    brand: 'Online Brand Growth',
    title: 'Fractional Amazon Operator',
    tagline: 'You keep the account. We run it.',
    description:
      'Our team works inside your Seller Central account and owns SEO, advertising, logistics and operations alongside your in-house team, for a monthly fee tied to your contribution profit.',
    rows: [
      ['Who sells on Amazon', 'You, in your own account'],
      ['How we get paid', 'Monthly fee'],
      ['Commitment', '90 days, then month to month'],
      ['Best for', 'Brands that want to own the channel and its margin'],
    ],
    cta: 'Get Your Free OBG360 Audit',
    href: '/amazon-audit',
    border: 'border-obg-orange/30 hover:border-obg-orange/60',
    accent: 'text-obg-orange',
    btn: 'btn-primary',
  },
  {
    icon: Truck,
    brand: 'Stoic Brands',
    title: 'Exclusive Amazon Distribution',
    tagline: 'We buy from you. We run it.',
    description:
      'Stoic Brands, our sister company, purchases your product wholesale and sells it on Amazon as your one authorized seller. You get the same team and the same services, with no fees.',
    rows: [
      ['Who sells on Amazon', 'Stoic Brands, exclusively'],
      ['How we get paid', 'Margin on the product. No fees'],
      ['Commitment', 'Month to month'],
      ['Best for', 'Brands that want Amazon handled and off their plate'],
    ],
    cta: 'Apply to Work With Us',
    href: '/stoic-brands',
    border: 'border-amber-400/30 hover:border-amber-400/60',
    accent: 'text-amber-400',
    btn: 'btn-secondary',
  },
]

export default function HowWeWork() {
  return (
    <section className="section bg-obg-blue-dark" id="how-we-work">
      <div className="container-obg px-6 md:px-8 lg:px-12">

        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Two Ways to Work With Us</SectionLabel>
            <h2 className="text-white mb-4">One Team. Two Models. Pick the One That Fits.</h2>
            <p className="text-obg-gray">
              Some brands want to own their Amazon channel with an expert operator running it. Others
              would rather sell to one accountable buyer and never think about Amazon again. We do both,
              and both start with a complimentary Amazon audit.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {models.map((model, i) => {
            const Icon = model.icon
            return (
              <AnimatedSection key={model.title} delay={i * 120}>
                <div className={`card-dark h-full flex flex-col border ${model.border}`}>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon size={22} className={model.accent} />
                    </div>
                    <div>
                      <div className={`text-xs font-semibold tracking-widest uppercase ${model.accent}`}>{model.brand}</div>
                      <h3 className="text-white font-bold text-xl leading-snug">{model.title}</h3>
                    </div>
                  </div>
                  <p className="text-white font-semibold mb-2">{model.tagline}</p>
                  <p className="text-obg-gray text-sm leading-relaxed mb-6">{model.description}</p>
                  <dl className="space-y-3 mb-8 flex-1">
                    {model.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-3 text-sm border-t border-obg-blue-light/20 pt-3">
                        <Check size={16} className={`flex-shrink-0 mt-0.5 ${model.accent}`} />
                        <dt className="text-obg-gray w-36 flex-shrink-0">{k}</dt>
                        <dd className="text-white">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <Link href={model.href} className={`${model.btn} w-full text-center`}>
                    {model.cta} <ArrowRight size={16} />
                  </Link>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        <AnimatedSection delay={300}>
          <div className="mt-6 card-glass p-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <Handshake size={18} className="text-emerald-400" />
            </div>
            <p className="text-obg-gray text-sm leading-relaxed">
              <span className="text-white font-semibold">Equity partnerships.</span>{' '}
              For select growing brands we also invest as a minority partner, bringing our Amazon and
              e-commerce capabilities with sights set on a successful exit. Ask us about it on your call.
            </p>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}
