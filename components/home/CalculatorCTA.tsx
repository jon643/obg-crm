import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'

const tools = [
  { label: 'Full P&L Calculator', href: '/calculator', desc: 'Revenue, all fees, COGS, ads — true Amazon profit' },
  { label: 'FBA vs FBM', href: '/vs/fba-vs-fbm', desc: 'Compare fulfillment methods side by side' },
  { label: 'Breakeven Calculator', href: '/tools/breakeven-calculator', desc: 'Min price & break-even ACoS for any SKU' },
  { label: 'Storage Fee Calculator', href: '/tools/storage-fee-calculator', desc: 'Monthly FBA storage cost by dimensions' },
]

export default function CalculatorCTA() {
  return (
    <section className="section bg-obg-blue-dark" id="free-tools">
      <div className="container-obg px-6 md:px-8 lg:px-12">
        <AnimatedSection>
          <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-10 items-center">

              {/* Left: copy */}
              <div>
                <span className="inline-block text-emerald-400 font-semibold text-xs tracking-widest uppercase mb-4 border border-emerald-500/30 rounded-full px-4 py-1.5">
                  Free Amazon Tools
                </span>
                <h2 className="text-white mb-4">
                  Know Your True Amazon Profit Before You Price
                </h2>
                <p className="text-obg-gray text-lg leading-relaxed mb-6">
                  Amazon&apos;s 2026 fee structure has 20+ line items that erode margin invisibly.
                  Our free profit calculator models every fee — referral, FBA fulfillment,
                  storage, inbound placement, ads, COGS — so you see real net profit, not
                  just revenue.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/calculator"
                    className="btn-primary"
                  >
                    Run the Free Calculator →
                  </Link>
                  <Link
                    href="/fees"
                    className="btn-secondary"
                  >
                    2026 Fee Guide
                  </Link>
                </div>
              </div>

              {/* Right: tool grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tools.map((t) => (
                  <Link
                    key={t.href}
                    href={t.href}
                    className="group bg-obg-blue-darker border border-obg-blue-light/20 hover:border-emerald-500/40 rounded-xl p-4 transition-colors duration-200"
                  >
                    <p className="text-white font-semibold text-sm mb-1 group-hover:text-emerald-400 transition-colors">
                      {t.label}
                    </p>
                    <p className="text-obg-gray text-xs leading-relaxed">{t.desc}</p>
                  </Link>
                ))}
              </div>

            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
