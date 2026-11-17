import { ArrowRight, Table2, Scale, CalendarRange, ClipboardCheck } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { Paper, MiniTable, Blurred as B, DeepDiveRow } from '@/components/landing/Blocks'

/**
 * What a Stoic Brands applicant receives: the Amazon Opportunity Analysis.
 * Layout and findings come from a real workbook; the brand's figures are blurred
 * placeholders, so nothing confidential is sent to the browser.
 */

const facts = [
  { icon: Table2, big: '7 tabs', small: 'one working spreadsheet, yours to keep' },
  { icon: Scale, big: 'Every price point', small: 'fees and wholesale worked out for each' },
  { icon: CalendarRange, big: '12-month forecast', small: 'built from real competitor sales' },
  { icon: ClipboardCheck, big: 'Launch checklist', small: 'everything needed before a first order' },
]

const amber = 'text-amber-400'

export default function AnalysisDeepDive() {
  return (
    <section className="section-lg bg-obg-blue" id="the-audit">
      <div className="container-obg px-6 md:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <SectionLabel className={amber}>What You Get First</SectionLabel>
          <h2 className="text-white text-3xl md:text-5xl mb-5">
            Your Amazon Opportunity Analysis
          </h2>
          <p className="text-obg-gray text-lg leading-relaxed">
            Before anyone commits to anything, we build you a workbook that answers the questions every brand
            has about Amazon: what can my product sell for, how many will sell, and what does that leave me?
            It is yours to keep whether or not we end up working together. Below is each part, shown in the
            layout of a real analysis for a specialty food brand with the brand&apos;s names and figures hidden.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16">
          {facts.map(({ icon: Icon, big, small }) => (
            <div key={big} className="card-glass p-5 text-center">
              <Icon size={22} className="text-amber-400 mx-auto mb-2" />
              <div className="text-white font-bold text-lg">{big}</div>
              <div className="text-obg-gray text-xs leading-snug mt-1">{small}</div>
            </div>
          ))}
        </div>

        <div className="space-y-16 lg:space-y-24 max-w-6xl mx-auto">
          <DeepDiveRow
            accent={amber}
            n="Part 01 · Comparable listings"
            title="What products like yours really sell for on Amazon"
            question="Not the whole category. Only very similar products at your size and format, with the units each one moves in a month."
            points={[
              'Price, price per ounce or unit, rating and review count for each comparable',
              'Units sold last month, from Amazon itself',
              'Split by flavor, variant or size so the comparison is fair',
            ]}
          >
            <Paper kicker="Comparable listings" title="Very similar products, and how many units they move" footer="Live Amazon listings. Sold last month is Amazon's own badge.">
              <MiniTable
                head={['Listing', 'Price', '$/oz', 'Reviews', 'Sold / mo']}
                rows={['A', 'B', 'C', 'D', 'E'].map((c, i) => [
                  `Competitor ${c}`,
                  <B key={`p${i}`}>$88.88</B>,
                  <B key={`o${i}`}>$8.88</B>,
                  <B key={`r${i}`}>8,888</B>,
                  ['800+', '700+', '600+', '300+', '100+'][i],
                ])}
              />
              <p className="mt-3 !text-slate-500">One variant shown. The workbook covers every one.</p>
            </Paper>
          </DeepDiveRow>

          <DeepDiveRow
            flip
            accent={amber}
            n="Part 02 · Pricing scenarios"
            title="What we can pay you at every Amazon selling price"
            question="We run the full Amazon fee math at each price point and show the wholesale price that works, next to the volume that price is likely to sell."
            points={[
              'Referral fee, fulfillment fee, inbound freight, storage and returns at each price',
              'The wholesale price we can pay you at each one',
              'Estimated units per month at each price, from the comparable listings',
              'The price point we recommend, and why',
            ]}
          >
            <Paper kicker="Pricing scenarios" title="What we can pay you at each Amazon selling price" footer="2026 Amazon fees, inbound freight, storage and returns included.">
              <MiniTable
                head={['Amazon price', 'Amazon + logistics', 'We can pay you', 'Est. units / mo']}
                highlight={2}
                rows={['$12.99', '$13.99', '$14.99', '$15.99', '$16.99'].map((pr, i) => [
                  pr,
                  <B key={`f${i}`}>$8.88</B>,
                  <B key={`w${i}`}>$8.88</B>,
                  <B key={`u${i}`}>888 to 888</B>,
                ])}
              />
              <p className="mt-3 !text-slate-500">
                Amazon&apos;s referral fee steps from 8% to 15% above $14.99, which is why a higher price can
                pay you less.
              </p>
            </Paper>
          </DeepDiveRow>

          <DeepDiveRow
            accent={amber}
            n="Part 03 · Format check"
            title="Which size or pack makes you the most money"
            question="The size that sells best in stores is often the wrong one for Amazon. We compare every format you make at the same margin."
            points={[
              'Each size and pack compared on what it pays you per ounce or unit',
              'Which formats lose money at any price shoppers will pay',
              'Whether a multipack or bundle is worth the extra labor',
            ]}
          >
            <Paper kicker="Format check" title="Which size and pack pays you the most" footer="Every format compared at the same margin target">
              <MiniTable
                head={['Format', 'Verdict']}
                highlight={0}
                rows={[
                  ['Standard size, single', 'Best. Largest size still under the $15 fee threshold'],
                  ['Small retail size', 'Loses money at any price shoppers would pay'],
                  ['3-pack of the small size', 'Needs bundling labor, pays less per ounce'],
                  ['Large size', 'Pays less per ounce'],
                ]}
              />
            </Paper>
          </DeepDiveRow>

          <DeepDiveRow
            flip
            accent={amber}
            n="Part 04 · Directional forecast"
            title="What the first 12 months could look like"
            question="A month-by-month estimate of units and purchase orders, built from what comparable listings actually sell. We label it directional because it is."
            points={[
              'Opening order size and when the first reorder lands',
              'Monthly run rate by product once the listings are established',
              'Seasonality taken from the competitor listings',
            ]}
          >
            <Paper kicker="Directional forecast" title="Run rate by month six, by variant" footer="A directional estimate from competitor sales. Not a guarantee.">
              <p className="mb-3">
                At the recommended price, the opening order sells through in month one and a larger reorder
                lands in month two.
              </p>
              <MiniTable
                head={['Variant', 'Run rate by month 6']}
                rows={['A', 'B', 'C'].map((v) => [`Variant ${v}`, <B key={v}>888 units / mo</B>])}
              />
              <p className="mt-3 !text-slate-500">Then about 2% growth a month, following the seasonal pattern.</p>
            </Paper>
          </DeepDiveRow>

          <DeepDiveRow
            accent={amber}
            n="Part 05 · Your questions and the launch checklist"
            title="Every question you asked, answered. Every step before launch, listed."
            question="The workbook closes with the practical side: answers to what you raised on the call, and exactly what has to happen before a first purchase order ships."
            points={[
              'Each question from your call, with where the answer sits in the workbook',
              'Every assumption behind the numbers, so you can check or change them',
              'A step-by-step launch checklist with who owns each item',
            ]}
          >
            <Paper kicker="Launch checklist" title="What has to happen before the first order ships" footer="Each item has an owner: you or us">
              <MiniTable
                head={['Step', 'Owner']}
                rows={[
                  ['Wholesale pricing and terms confirmed', 'You'],
                  ['Exclusive Distributor Agreement signed', 'Both'],
                  ['Trademark in Amazon Brand Registry, access granted', 'You'],
                  ['Listings, images and A+ Content built and approved', 'Us, with your approval'],
                  ['Opening purchase order placed', 'Us'],
                  ['Amazon shipments and labels created', 'Us'],
                ]}
              />
            </Paper>
          </DeepDiveRow>
        </div>

        <div className="max-w-3xl mx-auto text-center mt-20">
          <h3 className="text-white font-bold text-2xl md:text-3xl mb-4">
            Useful even if the answer is no
          </h3>
          <p className="text-obg-gray leading-relaxed mb-8">
            If the numbers do not work, we say so and show the wholesale price or pack size that would make
            them work. Either way you leave knowing what Amazon is worth to your brand.
          </p>
          <a href="#apply" className="btn-primary text-lg px-9 py-4">
            Apply to Work With Us <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
