import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import TrackedLink from '@/components/ui/TrackedLink'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-24 pb-16">

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
        <div className="max-w-4xl mx-auto text-center">

          <AnimatedSection direction="up" delay={0}>
            <span className="inline-block text-obg-orange font-semibold text-xs tracking-widest uppercase mb-6 border border-obg-orange/30 rounded-full px-4 py-1.5">
              Founder-Led Amazon Growth Agency
            </span>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={100}>
            <h1 className="text-hero font-display font-bold text-white mb-6 text-balance">
              Maximize Your Brand&apos;s{' '}
              <span className="text-gradient-orange">Revenue &amp; Profitability</span>{' '}
              on Amazon
            </h1>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={200}>
            <p className="text-obg-gray text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              We relentlessly optimize your Amazon SEO, Advertising, Logistics and Operations
              while you focus on your core business. Schedule your zero-obligation strategy
              call with us today.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <TrackedLink
                href="/#book-call"
                className="btn-primary text-lg px-9 py-4"
                eventName="book_call_click"
                eventParams={{ cta_location: 'hero' }}
              >
                Get Your FREE OBG360 Audit
              </TrackedLink>
              <Link href="/case-studies" className="btn-secondary text-lg px-9 py-4">
                View Case Studies
              </Link>
            </div>
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
