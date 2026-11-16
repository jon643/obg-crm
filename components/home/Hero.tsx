import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import TrackedLink from '@/components/ui/TrackedLink'
import { ArrowRight, Check } from 'lucide-react'

const paths = [
  {
    key: 'obg',
    eyebrow: 'Online Brand Growth',
    title: 'Your Fractional Amazon Operator',
    blurb: 'Keep your own Seller Central account. Our senior team runs the channel for a monthly fee.',
    points: ['SEO, ads, logistics and operations', 'Founder-led and 100% in-house', '90-day start, then month to month'],
    cta: 'Get Your Free OBG360 Audit',
    href: '/amazon-audit',
    accent: 'border-obg-orange/40 hover:border-obg-orange',
    eyebrowCls: 'text-obg-orange',
    btn: 'btn-primary',
  },
  {
    key: 'stoic',
    eyebrow: 'Stoic Brands',
    title: 'Your Exclusive Amazon Distributor',
    blurb: 'We buy your product wholesale and sell it on Amazon. Our team runs the channel and charges no fees.',
    points: ['Purchase orders instead of invoices', 'One authorized seller, pricing protected', 'You never manage Amazon again'],
    cta: 'Apply to Work With Us',
    href: '/stoic-brands',
    accent: 'border-amber-400/40 hover:border-amber-400',
    eyebrowCls: 'text-amber-400',
    btn: 'btn-secondary',
  },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-36 pb-16">

      {/* Background glow blobs */}
      <div
        aria-hidden
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(ellipse, #ff795e 0%, transparent 70%)' }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5"
        style={{ background: 'radial-gradient(ellipse, #2c334e 0%, transparent 70%)' }}
      />

      <div className="container-obg px-6 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          <AnimatedSection direction="up" delay={0}>
            <span className="inline-block text-obg-orange font-semibold text-xs tracking-widest uppercase mb-6 border border-obg-orange/30 rounded-full px-4 py-1.5">
              Founder-Led Amazon Operators
            </span>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={100}>
            <h1 className="text-hero font-display font-bold text-white mb-6 text-balance">
              Turn Amazon Into Your Most{' '}
              <span className="text-gradient-orange">Profitable Channel</span>.{' '}
              Two Ways to Work With Us.
            </h1>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={200}>
            <p className="text-obg-gray text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              Hire us as your fractional Amazon operator, or sell to our sister company,
              Stoic Brands, and let us run the channel at no fee. Either way you start with a
              complimentary Amazon audit.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={300}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left max-w-4xl mx-auto">
              {paths.map((p) => (
                <div key={p.key} className={`card-dark flex flex-col border ${p.accent}`}>
                  <span className={`text-xs font-semibold tracking-widest uppercase mb-2 ${p.eyebrowCls}`}>
                    {p.eyebrow}
                  </span>
                  <h2 className="text-white font-bold text-xl md:text-2xl mb-2 leading-snug">{p.title}</h2>
                  <p className="text-obg-gray text-sm leading-relaxed mb-4">{p.blurb}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-2 text-sm text-obg-offwhite">
                        <Check size={16} className={`flex-shrink-0 mt-0.5 ${p.eyebrowCls}`} /> {pt}
                      </li>
                    ))}
                  </ul>
                  <TrackedLink
                    href={p.href}
                    className={`${p.btn} w-full text-center`}
                    eventName="path_cta_click"
                    eventParams={{ cta_location: 'hero', path: p.key }}
                  >
                    {p.cta} <ArrowRight size={16} />
                  </TrackedLink>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-obg-gray">
              Not sure which fits?{' '}
              <Link href="/#how-we-work" className="text-obg-orange hover:underline">Compare the two models</Link>{' '}
              or <Link href="/case-studies" className="text-obg-orange hover:underline">view case studies</Link>.
            </p>
          </AnimatedSection>

          {/* Social proof bar */}
          <AnimatedSection direction="up" delay={450}>
            <div className="mt-16 pt-10 border-t border-obg-blue-light/30 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { stat: '$450M+', label: 'Lifetime Amazon Revenue' },
                { stat: '500+', label: 'Brands Managed' },
                { stat: '25+ Yrs', label: 'E-commerce Operators' },
              ].map(({ stat, label }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient-orange mb-1">
                    {stat}
                  </div>
                  <div className="text-obg-gray text-sm md:text-base">{label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}
