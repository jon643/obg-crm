import type { BlogPost } from '@/lib/blog'

const post: BlogPost = {
  title: 'What Is Fulfillment by Amazon (FBA)? The Complete Guide',
  description: 'FBA is infrastructure, not strategy. Learn how Amazon FBA works, what it actually costs, and whether your margins support the full fee stack.',
  publishDate: '2025-06-01',
  htmlContent: `
    <h2>FBA Is Infrastructure. Treat It Like Infrastructure.</h2>
    <p>Most brands approach Fulfillment by Amazon the same way they approach setting up a bank account. You do it once, check the box, and move on. That is the wrong mental model. FBA is a cost structure decision that determines whether your Amazon business is profitable or merely busy.</p>
    <p>We have audited hundreds of Amazon accounts. One of the most common problems we find: brands running FBA on products with margins that were never built to support it. They are working hard, spending on ads, ranking on page one — and quietly losing money on every unit. The fee stack is the culprit. And most sellers never added it all up before they launched.</p>
    <p>This guide covers what FBA is, how it actually works, what it costs in full, and how to know whether it makes financial sense for your specific products.</p>

    <h2>What Is Fulfillment by Amazon?</h2>
    <p>Fulfillment by Amazon is Amazon's third-party logistics service. You send your inventory to Amazon's fulfillment centers. When a customer places an order, Amazon picks, packs, ships, and handles returns on your behalf. Your listings earn the Prime badge. Customers get two-day delivery. You get to focus on sourcing, marketing, and growth rather than warehouse operations.</p>
    <p>In exchange, Amazon charges you for every service they perform. The fees are not a flat percentage. They are a layered stack — and each layer takes a bite.</p>

    <h2>How FBA Works: The Step-by-Step Flow</h2>
    <ol>
      <li><strong>You create an FBA shipment in Seller Central.</strong> You print labels, box your products according to Amazon's prep requirements, and ship to one or more designated fulfillment centers.</li>
      <li><strong>Amazon receives and checks in your inventory.</strong> Units become available for sale once they are stowed. This process typically takes two to five business days, though it can run longer during peak seasons.</li>
      <li><strong>A customer orders your product.</strong> Amazon picks it from the shelf, packs it, and ships it. The customer gets tracking information automatically. Your listing shows Prime delivery.</li>
      <li><strong>Amazon handles customer service and returns.</strong> All standard return requests go through Amazon's process. Items may be returned to your inventory, marked unsellable, or disposed of depending on condition.</li>
      <li><strong>Amazon disburses your proceeds.</strong> Every two weeks, Amazon deposits your revenue minus all fees into your bank account. The settlement report shows the full breakdown.</li>
    </ol>

    <h2>The Full FBA Cost Stack</h2>
    <p>This is where most sellers go wrong. They calculate the FBA fulfillment fee and think that is the cost of using FBA. It is not. The real cost is the full stack.</p>

    <h3>Referral Fee</h3>
    <p>Amazon charges 8–15% of the selling price as a referral fee on every order, regardless of whether you use FBA or FBM. This is the cost of selling on the platform. For most categories it sits at 15%. For electronics and personal computers it can drop to 8%. Supplements, personal care, and household products are typically 15%.</p>

    <h3>FBA Fulfillment Fee</h3>
    <p>This is the per-unit fee Amazon charges for picking, packing, and shipping. In 2025, it ranges from roughly $3.06 for a small standard item under half a pound up to $9.00 or more for large standard items in the three-pound range. Oversized items can run $15 to $75+ per unit. The fee tiers are based on product dimensions and weight after packaging — meaning how Amazon measures it, not how you measure it.</p>

    <h3>Monthly Storage Fees</h3>
    <p>Amazon charges per cubic foot of storage space per month. Standard-size rates in 2025 are approximately $0.78/cubic foot from January through September, spiking to $2.40/cubic foot during October through December. Slow-moving inventory that sits for more than 365 days incurs long-term storage fees on top of standard rates.</p>

    <h3>Inbound Placement Fees</h3>
    <p>Amazon introduced inbound placement fees in 2024. These charges cover the cost of Amazon distributing your inventory across its fulfillment network after you send it in. If you ship to a single location rather than splitting your shipment to match Amazon's preferred distribution, you pay more. For many sellers this added $0.20 to $0.40 per unit in costs that did not exist the year before.</p>

    <h3>Returns</h3>
    <p>Amazon's return policy is generous for customers. Sellers absorb the cost. A returned unit may be resold as new, re-labeled at your expense, or become unsellable. In health, beauty, and personal care, most returns become unsellable. For products with a 5–10% return rate, this line item alone can represent 2–4% of revenue.</p>

    <h3>The Real All-In Number</h3>
    <p>Add it up for a $35 product: referral fee (15%) $5.25 + FBA fulfillment fee $4.50 + storage $0.30 + inbound placement $0.30 + returns allowance $1.75 = <strong>$12.10 before COGS or advertising</strong>. That is 34.6% of revenue gone before you spend a dollar on PPC or factor in what it cost you to make the product. We use Sellerise to calculate breakeven ACoS on every product we manage, and it bakes in this full cost stack — not just the referral fee and FBA fee. That number is the only honest starting point.</p>

    <h2>FBA vs FBM: When FBA Is and Is Not the Right Choice</h2>
    <p>FBA is the right choice for most standard-size products with healthy gross margins. The Prime badge, the customer trust signal, the logistics infrastructure, the Buy Box advantage — these are real and meaningful. We are not anti-FBA. We are anti-sloppy-math.</p>
    <p>FBA starts to become the wrong choice in specific circumstances:</p>
    <ul>
      <li><strong>Oversized or heavy products.</strong> When FBA fulfillment fees exceed $15–20 per unit, Seller Fulfilled Prime or FBM with a reliable 3PL often yields better margins.</li>
      <li><strong>Products with high return rates.</strong> Categories like apparel, shoes, and electronics can have return rates of 20–30%. The cost of processing and replacing unsellable returns compounds fast.</li>
      <li><strong>Low-margin products.</strong> If your gross margin before Amazon fees is below 40%, you need to run the numbers very carefully. Many low-margin products simply cannot absorb the full FBA cost stack and remain profitable.</li>
      <li><strong>Slow-moving products.</strong> If your sell-through rate is slow and inventory sits in Amazon's warehouses for months, storage fees accumulate and long-term storage fees can become a material cost.</li>
    </ul>

    <h2>The Margin Threshold OBG Uses</h2>
    <p>Before recommending FBA for any product, we calculate whether the gross margin — meaning revenue minus COGS, before Amazon fees — is sufficient to absorb the full cost stack and still leave a viable contribution margin. Our general threshold: <strong>you need 55–65%+ gross margin before Amazon fees</strong> to run FBA profitably alongside a meaningful PPC investment.</p>
    <p>Below that level, you are in a danger zone. Not necessarily unprofitable, but with very little room for error. A TACoS that runs three points higher than planned. A storage spike in Q4. A batch of returns. Any of those events can push a marginal product negative.</p>
    <p>We use Sellerise to build this calculation for every product in every account we manage. It outputs a breakeven ACoS — the maximum ACoS at which the product still breaks even after all fees. That number becomes the ceiling for every PPC campaign. If your campaigns run above it for extended periods, you are paying to sell your inventory at a loss.</p>

    <h2>How to Prepare Your Products for FBA</h2>
    <p>Getting accepted into FBA and ensuring smooth check-in at fulfillment centers requires following Amazon's prep and packaging requirements. The most common mistakes we see:</p>
    <ul>
      <li>Barcodes that do not scan correctly — either missing, covered by packaging seams, or in the wrong format</li>
      <li>Products that require poly bagging or bubble wrap but arrive unprepped — Amazon will either prep them for a per-unit fee or reject the shipment</li>
      <li>Expiration dates not visible on units and outer cartons for ingestibles and topicals</li>
      <li>Improper case pack configuration — Amazon expects consistent case quantities and becomes difficult when they vary</li>
      <li>Shipment dimensions and weights that do not match what was entered in the shipment plan, triggering manual audit holds</li>
    </ul>
    <p>These are operational issues, but they have financial consequences. Rejected shipments mean delayed inventory availability. Amazon prep fees add per-unit costs. Check-in holds during peak season can mean weeks of lost sales velocity.</p>

    <h2>FBA and Your PPC Strategy</h2>
    <p>FBA eligibility for Prime is a meaningful conversion driver in PPC. Sponsored Products ads for Prime-eligible listings typically convert at higher rates than FBM listings, which lowers your effective ACoS. This is one of the genuine competitive advantages FBA provides — not just in organic search, but in paid performance.</p>
    <p>However, this advantage only matters if your campaigns are structured intelligently. We run PPC through a five-phase lifecycle — Launch, Trimming, Re-optimization, Growth/Scaling, and Maturity — and the breakeven ACoS calculated from your FBA cost stack sets the operating ceiling for every phase. If you do not know your real breakeven, you cannot set intelligent PPC targets.</p>

    <h2>The Bottom Line on FBA</h2>
    <p>FBA is genuinely excellent infrastructure. Amazon has built one of the most capable consumer fulfillment networks in the world. Accessing it is a legitimate competitive advantage. But it is not free, and it is not one-size-fits-all. The brands that win on Amazon with FBA are the ones that did the math before they launched — who understood what the full cost stack would be and built products with margins that could support it.</p>
    <p>The brands that struggle are the ones that treated FBA as a given, never questioned the fee structure, and are now wondering why revenue is growing while profits are flat or declining.</p>
    <blockquote>Revenue is vanity. Contribution margin is sanity.</blockquote>
    <p>Know your numbers before you ship your first unit. If you do not, FBA will teach them to you the hard way.</p>

    <h2>Work With OBG</h2>
    <p>Online Brand Growth manages Amazon as a full-time operational discipline — not a side project. We audit your FBA cost stack, calculate real breakeven ACoS using Sellerise, and build PPC strategies grounded in your actual margins.</p>
    <p>Every new engagement comes with a <strong>30-day profitability guarantee</strong>. If we do not improve your contribution margin in the first 30 days, you do not pay. Book a free strategy call at <a href="https://onlinebrandgrowth.com">onlinebrandgrowth.com</a> and let us show you what your numbers actually look like.</p>
  `,
}

export default post
