import type { BlogPost } from '@/lib/blog'

const post: BlogPost = {
  title: 'Amazon FBA Fees: The Complete Breakdown (And Why Most Sellers Are Missing the Real Number)',
  description: 'Amazon FBA fees go far beyond the fulfillment fee. Storage, inbound placement, aged inventory, and returns all compound. Here is how OBG models the real cost.',
  publishDate: '2025-06-01',
  htmlContent: `
<p>Most sellers know their fulfillment fee. Almost none know their true FBA cost per unit — because fulfillment is just one line in a longer list that, when you add them all up, can quietly destroy a margin that looked healthy on a spreadsheet.</p>

<p>We have diagnosed this problem dozens of times with incoming clients. They come in thinking they are running a 30% margin. We build the full cost stack — fulfillment, storage allocation, inbound placement, returns, aged inventory risk — and suddenly that 30% looks like 18%. That is the difference between a business that scales and one that bleeds cash at volume.</p>

<p>This is the complete breakdown of Amazon FBA fees in 2026. Not just a list of numbers. A framework for building your actual cost per unit — so you can set a real breakeven ACoS and stop making PPC decisions based on a margin that does not exist.</p>

<h2>Why FBA Fee Modeling Is a Profitability Prerequisite</h2>

<p>We use Sellerise for profitability tracking across every brand we manage. The first thing we build for a new client is a per-ASIN breakeven ACoS. That number is not useful without an accurate FBA cost input. If you are plugging in just the fulfillment fee, your breakeven is wrong — which means your PPC targets are wrong, your pricing decisions are wrong, and your margin projections are wrong.</p>

<blockquote>
  <strong>What is your actual breakeven ACoS? That number drives every decision we make.</strong>
</blockquote>

<p>Get the fee math right first. Everything else follows from it.</p>

<h2>FBA Fulfillment Fees</h2>

<p>Fulfillment fees are the per-unit charge Amazon collects to pick, pack, and ship each order from their fulfillment center to the customer. They are calculated based on size tier — which Amazon determines using the greater of actual unit weight and dimensional weight (length × width × height ÷ 139 for standard-size items).</p>

<p>Key 2026 fulfillment fee benchmarks:</p>

<ul>
  <li><strong>Small standard, under 4 oz:</strong> approximately $3.06 per unit</li>
  <li><strong>Small standard, 4–8 oz:</strong> approximately $3.15 per unit</li>
  <li><strong>Small standard, 8–12 oz:</strong> approximately $3.24 per unit</li>
  <li><strong>Large standard, under 6 oz:</strong> approximately $3.68 per unit</li>
  <li><strong>Large standard, 6 oz–1 lb:</strong> approximately $3.90 per unit</li>
  <li><strong>Large standard, 1–2 lb:</strong> approximately $4.76 per unit</li>
  <li><strong>Large standard, 2–3 lb:</strong> approximately $5.53 per unit</li>
  <li><strong>Large bulky (formerly oversize):</strong> starting around $9.61, increasing per pound above base weight</li>
  <li><strong>Extra-large items:</strong> $26+ with significant per-pound surcharges</li>
</ul>

<p>Two things worth flagging. First: Amazon uses its own measurements of your products, not yours. If you designed your packaging to hit small standard and Amazon measured it as large standard, you are paying a meaningfully higher fee on every unit you have ever sold. Pull the FBA Fee Preview report in Seller Central and verify your actual size tier assignments. We catch tier misclassifications on a regular basis — sometimes worth thousands of dollars per year on high-volume ASINs.</p>

<p>Second: dimensional weight hits lightweight but bulky products hard. A foam product, a large pillow, or a pet bed that weighs almost nothing can still land in a large tier because of its dimensions. Calculate the dimensional weight for every product in your catalog.</p>

<h2>Monthly Storage Fees</h2>

<p>Amazon charges monthly storage fees based on the average daily cubic footage your inventory occupies across their fulfillment network. Standard 2026 rates:</p>

<ul>
  <li><strong>January through September:</strong> $0.78 per cubic foot (standard-size); $0.56 per cubic foot (oversize)</li>
  <li><strong>October through December:</strong> $2.40 per cubic foot (standard-size); $1.40 per cubic foot (oversize)</li>
</ul>

<p>That Q4 rate is a 207% increase over the off-peak rate. If you build a storage cost model using the January rate and apply it to Q4, you are dramatically underestimating your carrying cost during the most expensive storage period of the year — while also holding the most inventory. That is a compounding problem.</p>

<p>Storage fees are based on average daily volume throughout the month, not a snapshot at month end. Inventory that arrives on November 1st is more expensive to store in November than inventory that arrives November 25th — because it sat in the warehouse longer during the billing cycle. That matters for your inbound timing decisions.</p>

<h2>Aged Inventory Surcharges</h2>

<p>This is where slow-moving inventory gets expensive fast. Amazon charges an aged inventory surcharge on top of monthly storage for inventory sitting in their network past 180 days:</p>

<ul>
  <li><strong>181–270 days:</strong> $0.50 per cubic foot per month, added to standard storage</li>
  <li><strong>271–365 days:</strong> $1.00 per cubic foot per month, added to standard storage</li>
  <li><strong>366+ days:</strong> $6.90 per cubic foot per month, added to standard storage</li>
</ul>

<p>At 366+ days in standard storage during peak season, you are paying $6.90 + $2.40 = $9.30 per cubic foot per month. For a product that is not selling, that is not a fee problem. That is a capital destruction problem.</p>

<p>Here is the operational reality: a slow-turning ASIN in your catalog is not just not contributing to revenue. It is actively funding your competitor's ads. Every dollar tied up in dead inventory is a dollar that could be in PPC driving sales on your best performers. OBG reviews the Inventory Age report monthly for every brand we manage. When an ASIN approaches 150 days, we make a call: discount to move it, run a targeted promotion, or create a removal order at $0.97 per standard-size unit. Removal is almost always cheaper than the surcharge cliff.</p>

<h2>Inbound Placement Service Fees</h2>

<p>Introduced in 2024 and now fully baked into every brand's cost structure, inbound placement fees are Amazon's charge for distributing your inventory across their fulfillment network. Before 2024, Amazon absorbed this cost. Now you pay for it based on how many inbound locations your shipment goes to:</p>

<ul>
  <li><strong>Minimal split (one or two locations):</strong> Higher per-unit fee — roughly $0.27 to $1.58+ for standard-size items, $0.44 to $2.97+ for large bulky</li>
  <li><strong>Partial split (moderate distribution):</strong> Moderate per-unit fee</li>
  <li><strong>Amazon-optimized split (their specified locations):</strong> Lowest or zero per-unit fee — but requires routing shipments to multiple FCs, adding inbound freight complexity</li>
</ul>

<p>For most brands, the practical trade-off is between paying the minimal split fee and managing multi-FC routing logistics. At lower volumes, paying the minimal split fee is usually the right answer. At scale — where the per-unit savings across thousands of units adds up — optimizing your shipment splits can generate real margin improvement. We make this call per-brand based on volume and inbound logistics setup.</p>

<h2>Return Processing Fees</h2>

<p>Amazon handles returns on FBA orders and charges you for it. The return processing fee is roughly 20% of the applicable referral fee with a minimum of $1.00 per unit. That is just the processing charge.</p>

<p>On top of that, returned inventory is graded as sellable or unsellable. Unsellable units get disposed of ($0.97 per standard-size unit) or removed. If the unit was damaged by the customer, you have a reimbursement claim to file. If it was damaged by Amazon during fulfillment, same. OBG files reimbursements for every brand we manage — Amazon does not automatically reimburse you. You have to track the discrepancies and file the claims. Most brands leave money on the table here.</p>

<p>Return rates vary enormously by category. Electronics and apparel routinely run 15–25%. Consumables and specialty products often run under 5%. Model your actual category return rate into your unit economics — not a generic average that has nothing to do with your product.</p>

<h2>Low-Inventory-Level Fees</h2>

<p>Introduced in 2024, Amazon now charges a per-unit fee when your inventory levels are consistently low relative to your recent sales velocity. The fee applies to standard-size U.S. products and runs approximately $0.32 to $1.11 per unit depending on how far below the threshold your inventory has fallen.</p>

<p>This is a penalty for stock-out proximity. You are being charged for the risk Amazon takes on by not being able to fulfill fast Prime shipping when demand spikes. The operational takeaway: stockouts do not just cost you in lost sales and organic rank erosion anymore. They now cost you in per-unit penalties on the units you do sell during the low-inventory period.</p>

<h2>Building Your True Cost Per Unit</h2>

<p>Every ASIN needs a complete cost stack. Here is the per-unit calculation we build for every product:</p>

<ol>
  <li>Product cost (COGS including manufacturing, packaging, freight allocation)</li>
  <li>Referral fee (Amazon's category-based commission, typically 8–15%)</li>
  <li>FBA fulfillment fee (verified against actual size tier, not estimated)</li>
  <li>Storage fee allocation (monthly storage cost ÷ monthly units sold — use Q4 rates for Q4 products)</li>
  <li>Inbound placement fee (based on your shipment split strategy)</li>
  <li>Returns allocation (return rate × per-unit return cost including unsellable loss)</li>
  <li>Aged inventory risk allocation (if ASIN has seasonal or velocity risk)</li>
  <li>Low-inventory-level fee risk allocation (if ASIN has restock timing risk)</li>
</ol>

<p>That full cost stack, subtracted from your selling price, gives you your true contribution margin per unit before advertising. Your breakeven ACoS is then: (contribution margin ÷ selling price) × 100. That is the only number that should be anchoring your PPC targets.</p>

<p>If your margin does not support your fee load, no amount of PPC optimization will fix it. You either reprice, re-engineer your cost structure, or kill the ASIN. Those are the only options.</p>

<h2>Work With OBG</h2>

<p>We build this cost model for every brand we take on. We have found size tier misclassifications, untracked reimbursements, and storage fee compounding on slow-moving ASINs that were quietly destroying margin for brands that thought they had a PPC problem.</p>

<p>If you want to know what your real numbers look like, book a free strategy call. And if we do not increase your profitability within 30 days of working together, you get a full refund. That is how confident we are in what we find.</p>
`,
}

export default post
