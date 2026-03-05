import type { BlogPost } from '@/lib/blog'

const post: BlogPost = {
  title: 'Seller Fulfilled Prime: When FBA Isn\'t the Right Answer',
  description: 'Seller Fulfilled Prime gives you the Prime badge without FBA fees — essential for heavy or bulky products. Here\'s what SFP requires and when OBG recommends it.',
  publishDate: '2025-06-02',
  htmlContent: `
    <h2>The Prime Badge Does Not Require Amazon's Warehouse</h2>
    <p>Most sellers assume that if they want Prime, they need FBA. That assumption costs them margin every month. Seller Fulfilled Prime — SFP — lets you ship Prime orders directly from your own warehouse or a third-party logistics provider. The customer sees the Prime badge. The customer gets two-day delivery. You never pay Amazon's fulfillment fees.</p>
    <p>For the right product in the right situation, SFP is not a compromise. It is the smarter financial decision. The question is whether your operation can meet Amazon's requirements. Those requirements are strict, and Amazon enforces them without mercy.</p>

    <h2>What Is Seller Fulfilled Prime?</h2>
    <p>SFP is a fulfillment program that allows third-party sellers to display the Prime badge on listings while fulfilling orders themselves. Instead of sending inventory to Amazon's fulfillment centers, you maintain control of your stock — at your facility or a 3PL — and ship directly to customers via Amazon-approved premium carriers.</p>
    <p>Amazon launched SFP because large and heavy items are expensive for their fulfillment network to handle. A 60-pound piece of exercise equipment, a bed frame, or a commercial-grade air purifier can cost Amazon more to fulfill than it charges sellers in FBA fees. SFP shifts that logistics burden back to sellers who are often better positioned to handle bulky freight efficiently.</p>

    <h2>SFP Eligibility Requirements</h2>
    <p>Amazon does not let every seller into SFP. There is a trial period, and you must demonstrate operational capability before the Prime badge is granted. The requirements in 2025:</p>
    <ul>
      <li><strong>On-time delivery rate of 93.5% or higher.</strong> This is measured on Premium Shipping orders only during the trial. It must be sustained at 99% or higher once SFP is active on your account.</li>
      <li><strong>Same-day handling for orders placed before your designated cutoff time.</strong> Amazon sets strict cutoff windows. Orders placed before your cutoff must be shipped the same day. No exceptions.</li>
      <li><strong>Premium shipping carriers only.</strong> You must use Amazon Buy Shipping for SFP orders, which routes orders through Amazon-approved carriers including UPS, FedEx, and USPS Priority. This ensures tracking compliance.</li>
      <li><strong>Valid tracking rate of 99% or higher.</strong> Every Prime order must have a valid tracking number uploaded before the ship-by date.</li>
      <li><strong>Order defect rate below 1%.</strong> Standard Seller Central account health metric, but SFP amplifies the stakes. A spike in your ODR can result in SFP suspension.</li>
      <li><strong>Free returns on items priced over $25.</strong> If you sell on SFP and your product costs more than $25, you are required to offer free returns. You pay the return shipping costs.</li>
    </ul>
    <p>The trial period is typically 30 days. Amazon monitors every order. If you fail to meet the metrics during trial, you do not get SFP. If you earn it and then slip below the thresholds, Amazon removes the Prime badge from your listings — sometimes overnight.</p>

    <h2>The Financial Case for SFP</h2>
    <p>The math is straightforward for large or heavy products. Take a 40-pound piece of furniture priced at $150. The FBA fulfillment fee for an oversized item of that weight would likely run $25–35 per unit. That is 17–23% of revenue in fulfillment fees alone, before the referral fee, before storage, before PPC.</p>
    <p>If you can ship that same item via a freight carrier or standard UPS ground for $12–15 from your own 3PL, you have recovered 10+ points of margin per unit. On a product doing $50K per month in revenue, that is $5,000 or more in monthly margin recaptured.</p>
    <p>Beyond the fee savings, SFP gives you control over your inventory that FBA does not. You are not dependent on Amazon receiving your shipments. You are not subject to inbound placement fees. You are not vulnerable to Amazon losing or damaging your units during check-in. You can also bundle, kitting, and custom-pack in ways that FBA prep requirements make difficult or expensive.</p>

    <h2>The Operational Reality of SFP</h2>
    <p>Here is what most SFP guides leave out: the operational demands are genuinely difficult to sustain. A 99%+ on-time shipping rate sounds achievable until your shipping manager calls in sick on a Monday, your carrier misses a pickup, or a snowstorm delays your regional UPS hub. Any of those events can trigger a metric drop that puts your Prime badge at risk.</p>
    <p>Before recommending SFP to a client, we ask three questions:</p>
    <ol>
      <li><strong>Do you have a dedicated fulfillment team or a reliable 3PL?</strong> SFP is not compatible with part-time or casual fulfillment operations. The cutoff windows are real. The same-day handling requirement is absolute. If you miss it, Amazon knows.</li>
      <li><strong>Do you have redundant carrier relationships?</strong> If your primary carrier has a service failure, you need a backup that can absorb same-day volume. Buy Shipping through Seller Central gives you access to multiple carriers, but you need to have tested the backup option before you need it.</li>
      <li><strong>Can you afford to offer free returns?</strong> For high-ticket heavy items, a return is an expensive event. The customer gets free return shipping. You absorb that cost. For items with even a 3–5% return rate, this is a real line item in your margin calculation.</li>
    </ol>
    <p>If the answer to any of these is uncertain, SFP introduces operational risk that can damage your account health. A suspended Prime badge hurts your organic rank, your conversion rate, and your PPC performance simultaneously. The recovery takes weeks.</p>

    <h2>SFP vs FBA vs Standard FBM</h2>
    <p>There are three options for fulfillment on Amazon, and each has its place:</p>
    <ul>
      <li><strong>FBA</strong> is best for standard-size, high-margin products where the cost stack is sustainable and you want to minimize operational complexity. The Prime badge, Buy Box advantage, and customer trust are genuine assets.</li>
      <li><strong>SFP</strong> is best for heavy, bulky, or high-value products where FBA fees are disproportionate to the selling price, and where you have the fulfillment infrastructure to meet Amazon's strict performance requirements.</li>
      <li><strong>Standard FBM (Merchant Fulfilled)</strong> is an option for low-volume, specialty, or one-of-a-kind items where Prime eligibility is less critical. You lose the Prime badge but retain full control. This is often appropriate for made-to-order, handcrafted, or vintage items.</li>
    </ul>
    <p>For most of the brands we work with in the $500K–$5M range, the answer is FBA for the core SKU lineup and SFP or FBM for outliers in the catalog — the heavy bundles, the large-format versions, the items where FBA fee math simply does not work.</p>

    <h2>How to Set Up Seller Fulfilled Prime</h2>
    <p>The enrollment process starts in Seller Central under the Shipping Settings tab. You create a Premium Shipping template that meets Amazon's delivery speed requirements for your region. You then opt into the SFP trial. During the trial, Amazon evaluates your performance on a designated subset of orders before granting full SFP status.</p>
    <p>Key setup decisions during enrollment:</p>
    <ul>
      <li><strong>Order cutoff time.</strong> Set this to a time you can actually commit to, not the latest possible window. Missing your cutoff is a metric event every time it happens.</li>
      <li><strong>Weekend handling.</strong> Amazon requires weekend shipping for SFP orders unless you explicitly configure otherwise. If your warehouse is closed on weekends, you need to set your templates to reflect that — but doing so reduces your delivery speed scores and can impact Buy Box eligibility.</li>
      <li><strong>Carrier setup in Buy Shipping.</strong> Configure your preferred carriers and test label generation before you go live. SFP orders must be fulfilled through Amazon Buy Shipping to receive the tracking guarantee protection.</li>
    </ul>

    <h2>When OBG Recommends SFP</h2>
    <p>We make a SFP recommendation when three conditions are true simultaneously: the product is heavy or oversized enough that FBA fees represent more than 12–15% of revenue, the brand has or can build the operational infrastructure to meet SFP's performance requirements, and the return rate on the product is manageable enough that free returns do not invert the financial benefit.</p>
    <p>We have seen brands recover six figures annually in margin by switching heavy SKUs from FBA to SFP. We have also seen brands attempt SFP prematurely, fail the trial, and spend months recovering their account health metrics. The decision depends entirely on operational readiness — not just the fee math.</p>
    <blockquote>Early aggression is not always smart aggression.</blockquote>
    <p>SFP is worth pursuing — when you are ready for it. Not before.</p>

    <h2>Work With OBG</h2>
    <p>Online Brand Growth evaluates fulfillment strategy as part of every engagement. We calculate the full cost stack for FBA, SFP, and FBM across every SKU in your catalog and recommend the structure that maximizes contribution margin without introducing operational risk you cannot absorb.</p>
    <p>Every new engagement comes with a <strong>30-day profitability guarantee</strong>. If we do not improve your contribution margin in the first 30 days, you do not pay. Book a free strategy call at <a href="https://onlinebrandgrowth.com">onlinebrandgrowth.com</a> to find out which fulfillment model is right for your products.</p>
  `,
}

export default post
