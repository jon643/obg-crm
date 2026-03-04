import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import { Search, Megaphone, Package, LineChart } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'SEO & CRO',
    color: 'from-blue-500/10 to-blue-600/5',
    border: 'border-blue-500/20',
    items: [
      'Keyword & Market Research',
      'Product Listing Optimization',
      'Listing A/B Testing',
      'A+ Content Design',
      'Amazon Storefront Design',
    ],
  },
  {
    icon: Megaphone,
    title: 'Advertising',
    color: 'from-obg-orange/10 to-obg-orange/5',
    border: 'border-obg-orange/20',
    items: [
      'Amazon Pay Per Click Ads',
      'Product Launch Services',
      'Deals, Coupons & Promotions',
      'Amazon Prime Event Days',
      'Amazon Creator Connections',
    ],
  },
  {
    icon: Package,
    title: 'Logistics & Operations',
    color: 'from-emerald-500/10 to-emerald-600/5',
    border: 'border-emerald-500/20',
    items: [
      'Amazon Catalog Management',
      'FBA Inventory Management',
      'FBA Reimbursement Services',
      'Seller Support Case Management',
      'Account Health Management',
    ],
  },
  {
    icon: LineChart,
    title: 'Strategic Growth Consulting',
    color: 'from-violet-500/10 to-violet-600/5',
    border: 'border-violet-500/20',
    items: [
      'Product Launch Services',
      'Business Intelligence & Reporting',
      'Amazon Brand Registry Enforcement',
      'Amazon Browse Node Optimization',
      'Product Review Consulting',
    ],
  },
]

export default function Services() {
  return (
    <section className="section bg-obg-blue-darker" id="services">
      <div className="container-obg px-6 md:px-8 lg:px-12">

        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="text-white mb-4">Amazon Brand Management Services</h2>
            <p className="text-obg-gray">
              What sets us apart is our understanding that a successful Amazon business requires
              collaboration and execution across multiple areas: Logistics, Operations, SEO/CRO,
              and Advertising — all under one roof.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon
            return (
              <AnimatedSection key={svc.title} delay={i * 100}>
                <div className={`card-dark h-full bg-gradient-to-b ${svc.color} border ${svc.border} hover:border-obg-orange/30`}>
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-obg-orange" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-5">{svc.title}</h3>
                  <ul className="space-y-3">
                    {svc.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-obg-gray text-sm">
                        <span className="dot-orange mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

      </div>
    </section>
  )
}
