import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import { TrendingDown, AlertTriangle, BarChart2, Users } from 'lucide-react'

const painPoints = [
  {
    icon: TrendingDown,
    title: 'Failing to Reach Sales Growth Potential?',
    description:
      'Are weaker brands dominating your niche on Amazon? Grow your revenue exponentially by utilizing our proven processes to increase your visibility and conversion rate.',
  },
  {
    icon: AlertTriangle,
    title: 'Unauthorized Resellers Wreaking Havoc?',
    description:
      'Is your Amazon buy box being stolen by unauthorized 3rd party sellers who are undercutting your MAP prices, causing issues with other retailers? We can help fix it.',
  },
  {
    icon: BarChart2,
    title: 'Erosion of Contribution Margin Over Time?',
    description:
      'Has your Amazon profitability gone down to low single digits? Let us advise on what levers to pull to regain a more healthy channel contribution margin.',
  },
  {
    icon: Users,
    title: 'Lack of Internal Resources and Channel Expertise?',
    description:
      'Our dedicated North American account strategists are 100% focused on growing your sales and profitability on Amazon. With 25+ years of Amazon operations experience and 500+ brands managed, we bring the expertise your business needs.',
  },
]

export default function PainPoints() {
  return (
    <section className="section bg-obg-blue-dark">
      <div className="container-obg px-6 md:px-8 lg:px-12">

        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Pain Points</SectionLabel>
            <h2 className="text-white mb-4">
              What&apos;s Your Biggest Amazon Pain Point?
            </h2>
            <p className="text-obg-gray">
              Most brands face one or more of these challenges. We&apos;ve seen it all — and solved it.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((point, i) => {
            const Icon = point.icon
            return (
              <AnimatedSection key={point.title} delay={i * 100}>
                <div className="card-dark h-full flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-obg-orange/10 border border-obg-orange/20 flex items-center justify-center">
                    <Icon size={22} className="text-obg-orange" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      {point.title}
                    </h3>
                    <p className="text-obg-gray text-base leading-relaxed">
                      {point.description}
                    </p>
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
