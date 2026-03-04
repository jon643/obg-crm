import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import { ArrowRight } from 'lucide-react'

const cases = [
  {
    id: 'baby-brand',
    category: 'Baby & Kids',
    stat: '30X',
    statDetail: 'Amazon Revenue',
    timeframe: 'in 18 Months',
    description:
      'Single product baby brand scaled from $100K to $3M per year, enabling a successful retail expansion and business exit.',
    tags: ['SEO', 'PPC', 'Brand Growth'],
  },
  {
    id: 'self-defense-brand',
    category: 'Self Defense',
    stat: '3.4X',
    statDetail: 'Contribution Profit',
    timeframe: '$230K → $780K',
    description:
      'Self defense brand tripled contribution profit over 2.5 years by rebuilding PDP foundations, overhauling PPC, and launching 20+ new products.',
    tags: ['Profitability', 'Operations', 'PPC'],
  },
  {
    id: 'yoga-brand',
    category: 'Yoga & Fitness',
    stat: '$500K',
    statDetail: 'in Year 1',
    timeframe: 'From $0',
    description:
      'Yoga fitness brand launched on Amazon from zero, achieving half a million in annual revenue within the first 12 months.',
    tags: ['New Launch', 'SEO', 'Advertising'],
  },
]

export default function CaseStudies() {
  return (
    <section className="section bg-obg-blue-darker" id="case-studies">
      <div className="container-obg px-6 md:px-8 lg:px-12">

        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>Proven Results</SectionLabel>
              <h2 className="text-white">Case Studies</h2>
            </div>
            <Link
              href="/case-studies"
              className="flex items-center gap-2 text-obg-orange hover:text-obg-orange-light font-semibold text-sm transition-colors group"
            >
              View all case studies
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <AnimatedSection key={c.stat} delay={i * 100}>
              <Link href={`/case-studies#${c.id}`} className="block h-full">
              <div className="card-dark h-full flex flex-col group cursor-pointer hover:border-obg-orange/40">
                {/* Category tag */}
                <span className="text-xs font-semibold text-obg-orange tracking-widest uppercase mb-6">
                  {c.category}
                </span>

                {/* Stat */}
                <div className="mb-2">
                  <span className="text-5xl md:text-6xl font-bold text-gradient-orange">
                    {c.stat}
                  </span>
                </div>
                <div className="text-white font-semibold text-lg mb-0.5">{c.statDetail}</div>
                <div className="text-obg-gray text-sm mb-6">{c.timeframe}</div>

                <p className="text-obg-gray text-sm leading-relaxed flex-1">
                  {c.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-obg-blue-light/20">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm text-obg-gray border border-obg-blue-light/30 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-obg-orange text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                  Read case study <ArrowRight size={13} />
                </div>
              </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  )
}
