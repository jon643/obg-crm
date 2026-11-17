import { ArrowRight, FileText, Database, UserCheck, Clock } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { Paper, MiniTable, Blurred as B, Redacted, DeepDiveRow } from '@/components/landing/Blocks'

/**
 * The centerpiece of the landing page: every section of the OBG360 audit,
 * what it answers, and a page from a real audit. Findings and percentages are
 * real; the brand, its products, search terms and dollar figures are hidden.
 */

const facts = [
  { icon: FileText, big: '24 pages', small: 'in the audit shown here' },
  { icon: Database, big: '7 data sources', small: 'your reports plus live Amazon pages' },
  { icon: UserCheck, big: 'Founder-built', small: 'Jon and Dan do the work themselves' },
  { icon: Clock, big: '1 to 2 weeks', small: 'from access to finished audit' },
]

export default function AuditDeepDive() {
  return (
    <section className="section-lg bg-obg-blue-darker" id="the-audit">
      <div className="container-obg px-6 md:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <SectionLabel>Inside Your OBG360 Audit</SectionLabel>
          <h2 className="text-white text-3xl md:text-5xl mb-5">
            Ten Sections. Every One Ends in Something You Can Act On.
          </h2>
          <p className="text-obg-gray text-lg leading-relaxed">
            This is not a scorecard or a sales deck. It is a working document about your account, written by
            operators, with the numbers behind every recommendation. Below is each section and a page from a
            real audit we delivered in October 2026. The findings are real. The brand, its products, its
            search terms and its dollar figures are hidden.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16">
          {facts.map(({ icon: Icon, big, small }) => (
            <div key={big} className="card-glass p-5 text-center">
              <Icon size={22} className="text-obg-orange mx-auto mb-2" />
              <div className="text-white font-bold text-lg">{big}</div>
              <div className="text-obg-gray text-xs leading-snug mt-1">{small}</div>
            </div>
          ))}
        </div>

        <div className="space-y-16 lg:space-y-24 max-w-6xl mx-auto">
          <DeepDiveRow
            n="Section 01 · The Opportunity"
            title="Which products can actually win page 1"
            question="Your best seller is often the hardest product to rank. We show where you can win organically and where you are only renting a slot with ads."
            points={[
              'The review wall on page 1 for every search that matters, against your own listing',
              'A verdict per search: walled, winnable or anchor',
              'The two or three focus products for the next 90 days',
            ]}
          >
            <Paper kicker="The Opportunity" title="Where this brand can win, and where it cannot" footer="Live page-1 results and Brand Analytics search volume">
              <MiniTable
                head={['Search (monthly volume)', 'Page-1 reviews', 'Verdict']}
                rows={[
                  [<span key="a">Head term (243K)</span>, '~2,100', 'Walled. Paid only'],
                  [<span key="b"><Redacted w="w-16" /> (4.9K)</span>, '~320', 'Winnable, top 5 in reach'],
                  [<span key="c"><Redacted w="w-14" /> (1.6K)</span>, '~96', 'Anchor: hold top 3'],
                  [<span key="d"><Redacted w="w-20" /></span>, '~40', 'Winnable, lowest wall'],
                ]}
              />
              <p className="mt-3">
                The hero listing has 987 reviews. The listings that own the head term have thousands. No bid
                changes that.
              </p>
            </Paper>
          </DeepDiveRow>

          <DeepDiveRow
            flip
            n="Section 02 · Market & Customer Intelligence"
            title="What shoppers search, and how you convert against the market"
            question="Are you losing because shoppers do not find you, or because they find you and do not buy? The answer changes everything you do next."
            points={[
              'Your share of impressions and purchases on your top search queries',
              'Your conversion rate next to the market conversion rate, query by query',
              'Category growth, who the customer is, and how often they buy again',
            ]}
          >
            <Paper kicker="Section 1 · Search Query Performance" title="Where the brand out-converts the market, and where it does not" footer="Brand Analytics, brand view">
              <MiniTable
                head={['Query', 'Impr. share', 'Market CVR', 'Our CVR']}
                rows={[
                  [<Redacted key="1" w="w-20" />, '0.66%', '32.5%', '29.7%'],
                  [<Redacted key="2" w="w-24" />, '2.06%', '26.6%', '32.4%'],
                  [<Redacted key="3" w="w-16" />, '0.25%', '26.6%', '40.7%'],
                  [<Redacted key="4" w="w-24" />, '1.23%', '37.4%', '15.6%'],
                ]}
              />
              <p className="mt-3">
                Shoppers who reach the main product buy it. The constraint is visibility and price per piece,
                not the product. One product line is the exception, and Section 3 shows why.
              </p>
            </Paper>
          </DeepDiveRow>

          <DeepDiveRow
            n="Section 03 · Listing Quality & Visibility"
            title="Whether shoppers can find you"
            question="We check every key listing against Amazon's current format and against the competitors that outrank you."
            points={[
              'Titles, bullets, backend keywords, attributes and images, checked field by field',
              'Your organic rank against named competitors on every important search',
              'Duplicate, suppressed and inactive listings that are splitting your reviews and rank',
            ]}
          >
            <Paper kicker="Section 2 · Listing check" title="No listing is in Amazon's current format" footer="Live pages checked against the OBG360 listing standard">
              <MiniTable
                head={['Check', 'Hero SKU', 'SKU B', 'SKU C']}
                rows={[
                  ['Title length (standard: 75)', '152', '190', '192'],
                  ['Item Highlights field', 'Not used', 'Not used', 'Not used'],
                  ['Organic rank, main niche term', '#14', '#22', '#30'],
                  ['Top competitor on that term', '#1', '#1', '#1'],
                ]}
              />
              <p className="mt-3">
                Cutting each title to its purchase phrase and moving keywords into the right fields is the
                cheapest organic lift in the account.
              </p>
            </Paper>
          </DeepDiveRow>

          <DeepDiveRow
            flip
            n="Section 04 · Conversion"
            title="Whether the page sells"
            question="Traffic is expensive. We show which pages turn it into orders, which do not, and the specific reasons."
            points={[
              'Sessions and conversion by product, with a plain read on each',
              'Price per unit against the rest of the page',
              'What is in the images, reviews and returns that is costing you the sale',
            ]}
          >
            <Paper kicker="Section 3 · Conversion" title="The main line converts. One product line does not." footer="Business Reports, 30 and 90 days">
              <MiniTable
                head={['Listing', 'Unit-session %', 'Read']}
                rows={[
                  ['Hero SKU, 100 ct', '62.5%', 'Excellent. Has room for price'],
                  ['Hero SKU, 300 ct', '88.2%', 'Excellent. Starved of traffic'],
                  ['SKU B, 100 ct', '29.0%', 'Below market on its terms'],
                  ['Set, 300 pc', '18.8%', 'Weak. Priced 60% above the page'],
                ]}
              />
            </Paper>
          </DeepDiveRow>

          <DeepDiveRow
            n="Section 05 · Advertising"
            title="Where ad spend earns its keep, and where it loses money"
            question="An acceptable account ACOS can hide campaigns that lose money on every click. We set a breakeven for each product and hold every campaign to it."
            points={[
              'Breakeven ACOS per product, from your real margins',
              'Spend, sales and ACOS by product family against that breakeven',
              'The campaigns to fix first, with the dollar cost of leaving them alone',
            ]}
          >
            <Paper kicker="Section 4 · Advertising" title="One campaign is 41% of ad spend and loses money every month" footer="Amazon Ads console, 30 days">
              <MiniTable
                head={['Product family', 'ACOS', 'Breakeven ACOS']}
                rows={[
                  ['Family A', '54.4%', '22.8%'],
                  ['Family B', '22.7%', '12.4%'],
                  ['Family C', '27.6%', '11.2%'],
                  ['Family D', '30.1%', '30.8%'],
                ]}
              />
              <p className="mt-3">
                The head-term campaign pays <B>$8.88</B> a click. At breakeven a click is worth at most{' '}
                <B>$8.88</B>. It lost more than half of the account&apos;s monthly profit.
              </p>
            </Paper>
          </DeepDiveRow>

          <DeepDiveRow
            flip
            n="Section 06 · Promotions, Retention & Creator Programs"
            title="Which discounts pay for themselves"
            question="Deals feel like growth. We show which promotions return real sales, which products have repeat buyers worth discounting for, and which to skip."
            points={[
              'Repeat purchase rate and repeat sales by product',
              'Return on every promotion you ran, by audience',
              'A straight call on coupons, deals, Subscribe & Save and creator programs',
            ]}
          >
            <Paper kicker="Section 5 · Retention" title="One customer in four buys again. Not on every product." footer="Brand Analytics, Repeat Purchase Behavior">
              <MiniTable
                head={['Product', 'Repeat customers', 'Sales from repeat buyers']}
                rows={[
                  ['Whole brand', '25.9%', '40.3%'],
                  ['Hero SKU, 100 ct', '28.3%', '43.2%'],
                  ['Hero SKU, 300 ct', '26.4%', '51.7%'],
                  ['SKU B, 100 ct', '10.9%', '19.6%'],
                ]}
              />
              <p className="mt-3">
                A first-order discount on the hero buys a customer who comes back. The same discount on SKU B
                buys one sale at a loss.
              </p>
            </Paper>
          </DeepDiveRow>

          <DeepDiveRow
            n="Section 07 · Logistics & Inventory"
            title="Whether your inventory is protecting your rank"
            question="Thin inventory loses search placement even when it never stocks out. We size the cover each product needs and flag what to order now."
            points={[
              'Days of cover per product against the target for its size',
              'Units to order, by product',
              'Aged and overstocked SKUs to liquidate',
            ]}
          >
            <Paper kicker="Section 6 · Logistics" title="Inventory is at a third of the level that protects rank" footer="FBA inventory report">
              <MiniTable
                head={['Listing', 'Days of cover', 'Units needed', 'Status']}
                rows={[
                  ['Hero SKU, 100 ct', '31', <B key="1">8,888 to 88,888</B>, 'Order now'],
                  ['SKU B, 100 ct', '33', <B key="2">8,888 to 8,888</B>, 'Order now'],
                  ['SKU C, 100 ct', '42', <B key="3">888 to 8,888</B>, 'Order now'],
                  ['Master case', '12 months+', 'None', 'Liquidate'],
                ]}
              />
              <p className="mt-3">At the current pace the hero was three weeks from empty, before Black Friday.</p>
            </Paper>
          </DeepDiveRow>

          <DeepDiveRow
            flip
            n="Section 08 · Profitability"
            title="What you really keep, product by product"
            question="Revenue is on your dashboard. Profit is not. We rebuild contribution profit after every Amazon fee, ads, refunds and product cost."
            points={[
              'A full P&L for the account, as dollars and as a share of sales',
              'Profit per unit and breakeven ACOS for each product',
              'A scenario showing what each fix is worth per month',
            ]}
          >
            <Paper kicker="Section 7 · Profitability" title="Where every dollar of sales goes" footer="13 months, product cost loaded">
              <MiniTable
                head={['', '13 months', '% of sales']}
                highlight={6}
                rows={[
                  ['Sales', <B key="1">$888,888</B>, '100%'],
                  ['Amazon fees (all)', <B key="2">-$888,888</B>, '49.9%'],
                  ['Cost of goods', <B key="3">-$888,888</B>, '25.4%'],
                  ['Advertising', <B key="4">-$888,888</B>, '12.4%'],
                  ['Refund cost', <B key="5">-$88,888</B>, '1.9%'],
                  ['Promotions', <B key="6">-$88,888</B>, '1.4%'],
                  ['Net profit', <B key="7">$88,888</B>, '9.0%'],
                ]}
              />
              <p className="mt-3">
                Three best-selling packs were 61% of sales, took 90% of ad spend, and lost money. The quieter
                packs made the profit.
              </p>
            </Paper>
          </DeepDiveRow>

          <DeepDiveRow
            n="Section 09 · Account Health & Compliance"
            title="Whether anything is putting the account at risk"
            question="A clean bill of health, or a short list of what to fix before it becomes a suspension, a suppressed listing or a wave of returns."
            points={[
              'Account Health Rating, order defect rate and policy violations',
              'Return rates and top return reasons by product',
              'Voice of the Customer flags worth acting on',
            ]}
          >
            <Paper kicker="Section 8 · Account Health" title="Healthy, with returns climbing on one line" footer="Account Health and Voice of the Customer">
              <MiniTable
                head={['Check', 'Status']}
                rows={[
                  ['Account health', 'Healthy'],
                  ['Order defect rate, 60 days', '0%'],
                  ['Policy violations, all categories', '0'],
                  ['Return rate, hero', '0.87%'],
                  ['Return rate, worst listing', '5.75%'],
                ]}
              />
              <p className="mt-3">Top return reason on the weak line: &ldquo;performance or quality not adequate.&rdquo;</p>
            </Paper>
          </DeepDiveRow>

          <DeepDiveRow
            flip
            n="Section 10 · Strategic Recommendations & 90-Day Roadmap"
            title="What to do first, and what it is worth"
            question="Every finding becomes a ranked recommendation with the number behind it, then a 90-day plan. You can hand it to your own team and run it without us."
            points={[
              'Recommendations in order of profit impact',
              'A 30, 60 and 90 day plan',
              'The monthly profit effect of each lever, with every assumption stated',
            ]}
          >
            <Paper kicker="Section 10 · Roadmap" title="Profit roughly doubles on flat revenue" footer="Applied to the most recent month's actuals">
              <MiniTable
                head={['Lever', 'Monthly profit']}
                highlight={4}
                rows={[
                  ['Head-term campaign to breakeven bids', <B key="1">+$8,888</B>],
                  ['$1 price step across the catalog', <B key="2">+$8,888 to +$8,888</B>],
                  ['SKU B ads to breakeven', <B key="3">+$888</B>],
                  ['Advertise the larger packs', <B key="4">+$888</B>],
                  ['Monthly profit, before and after', 'About 2x'],
                ]}
              />
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                {[
                  ['Days 1 to 30', 'Stop the losses'],
                  ['Days 31 to 60', 'Win the niche terms'],
                  ['Days 61 to 90', 'Consolidate and lock in'],
                ].map(([d, t]) => (
                  <div key={d} className="rounded-lg bg-slate-50 border border-slate-200 py-2 px-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-obg-orange">{d}</div>
                    <div className="text-xs text-slate-800 font-semibold leading-tight mt-0.5">{t}</div>
                  </div>
                ))}
              </div>
            </Paper>
          </DeepDiveRow>
        </div>

        <div className="max-w-3xl mx-auto text-center mt-20">
          <h3 className="text-white font-bold text-2xl md:text-3xl mb-4">
            Yours to keep, whether or not we ever work together
          </h3>
          <p className="text-obg-gray leading-relaxed mb-8">
            Many of the recommendations are things your own team can do the week you get the audit. If you
            want us to run the plan, that conversation happens after you have seen the work.
          </p>
          <a href="#get-audit" className="btn-primary text-lg px-9 py-4">
            Get My Free OBG360 Audit <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
