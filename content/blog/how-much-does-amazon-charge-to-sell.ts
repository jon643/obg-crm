import type { BlogPost } from '@/lib/blog'

const post: BlogPost = {
  title: 'How Much Does Amazon Charge to Sell? A Complete Breakdown of Fees',
  description: 'A complete breakdown of Amazon seller fees in 2026 — referral fees, FBA fees, storage, and the hidden costs most brands underestimate.',
  publishDate: '2026-03-04',
  htmlContent: `
<p>One of the most common mistakes we see with brands that come to us after struggling on Amazon is that they've fundamentally misunderstood their cost structure. They modeled a product at 30% margin, launched it, and discovered their actual take-home was closer to 8% — or they were losing money outright. Amazon's fee structure is not complicated once you understand it, but it has more layers than most sellers account for upfront.</p>

<p>This breakdown covers every material fee you'll encounter as an FBA seller on Seller Central. We've organized it the way your P&L should be organized, starting from gross revenue and working down to what actually hits your bank account.</p>

<h2>The Seller Account Fee</h2>

<p>Before you sell a single unit, you're paying Amazon for the privilege of having a professional seller account. The Professional Selling Plan costs $39.99 per month and is essentially non-negotiable if you're doing any meaningful volume. The Individual plan (no monthly fee, but $0.99 per item sold) is not a viable option for a real brand — it doesn't give you access to bulk listing, advertising, or most analytics tools.</p>

<p>At significant volume, $39.99 is noise. But it's worth accounting for in your unit economics model, particularly when you're calculating the profitability of new SKUs at low projected volume during launch.</p>

<h2>Referral Fees: The First and Largest Deduction</h2>

<p>For every item sold, Amazon takes a referral fee — a percentage of the total sales price including any shipping charges you collect. The percentage varies by category and is the most significant fee in most sellers' cost structures.</p>

<p>Key referral fee rates as of 2026:</p>

<ul>
  <li><strong>Apparel:</strong> 17% (for items over $15); 5% for items $15 and under</li>
  <li><strong>Beauty, Health &amp; Personal Care:</strong> 8% for items under $10; 15% for items $10 and over</li>
  <li><strong>Electronics:</strong> 8%</li>
  <li><strong>Home &amp; Kitchen:</strong> 15%</li>
  <li><strong>Kitchen &amp; Dining:</strong> 15%</li>
  <li><strong>Grocery &amp; Gourmet Food:</strong> 8% for items $15 and under; 15% over $15</li>
  <li><strong>Toys &amp; Games:</strong> 15%</li>
  <li><strong>Sports &amp; Outdoors:</strong> 15%</li>
  <li><strong>Pet Supplies:</strong> 15%</li>
  <li><strong>Office Products:</strong> 15%</li>
  <li><strong>Tools &amp; Home Improvement:</strong> 15%</li>
  <li><strong>Automotive:</strong> 12%</li>
  <li><strong>Jewelry:</strong> 20% for the portion of total sales price up to $250; 5% for any portion above $250</li>
</ul>

<p>Most categories sit at 15%. That's your baseline assumption unless you've confirmed your specific category rate in Amazon's fee schedule, which is updated periodically.</p>

<p>One thing sellers frequently miss: referral fees are calculated on the total amount the buyer pays, including any shipping charges. If your listing has a shipping component, you're paying referral fees on that too.</p>

<h2>FBA Fulfillment Fees: Per-Unit Costs Based on Size and Weight</h2>

<p>If you're using Fulfillment by Amazon — and almost every serious seller should be — you pay FBA fulfillment fees for each unit shipped. These fees cover picking, packing, and shipping to the customer. They are determined by the product's size tier and shipping weight.</p>

<p>Amazon uses its own size tiers, which are calculated based on unit weight, dimensions, and dimensional weight. The tiers as of 2026 are:</p>

<ul>
  <li><strong>Small standard:</strong> Up to 4 oz, under 15" × 12" × 0.75" — fees starting around $3.06</li>
  <li><strong>Large standard (under 1 lb):</strong> Fees starting around $3.68</li>
  <li><strong>Large standard (1–2 lb):</strong> Fees starting around $4.76</li>
  <li><strong>Large standard (2–3 lb):</strong> Fees starting around $5.53</li>
  <li><strong>Large bulky / oversize:</strong> Starts at $9.61 and increases significantly with weight and dimensions</li>
  <li><strong>Extra-large / special oversize:</strong> $26+ and up, often with per-pound surcharges</li>
</ul>

<p>These numbers shift with annual fee updates, and Amazon has added surcharges in recent years for fuel, peak season, and inbound placement. Always verify current rates in Seller Central's FBA Revenue Calculator before finalizing unit economics on a new product.</p>

<h2>FBA Storage Fees: Monthly and Long-Term</h2>

<p>Amazon charges monthly storage fees for inventory held at their fulfillment centers. These are calculated per cubic foot of storage space used.</p>

<ul>
  <li><strong>Standard-size storage:</strong> $0.78 per cubic foot (January–September); $2.40 per cubic foot (October–December)</li>
  <li><strong>Oversize storage:</strong> $0.56 per cubic foot (January–September); $1.40 per cubic foot (October–December)</li>
</ul>

<p>The Q4 surge is substantial. Brands that plan their inventory timing without accounting for peak-season storage fees end up with a nasty surprise when November and December statements arrive.</p>

<p>Beyond monthly storage, Amazon also charges <strong>aged inventory surcharges</strong> (formerly called long-term storage fees) for inventory that has been in FBA warehouses for 181 days or more. These fees escalate the longer inventory sits and are designed to pressure sellers into moving slow-moving stock. If you have ASINs with poor sell-through, this cost compounds over time.</p>

<h2>Inbound Placement Service Fees</h2>

<p>Amazon restructured inbound shipping in 2024 with a new Inbound Placement Service fee. Unless you ship inventory to multiple fulfillment centers as Amazon directs (which most small and mid-size brands find operationally impractical), you now pay a fee for Amazon to redistribute your inventory across its network.</p>

<p>This fee varies by product size and the number of inbound locations you ship to. For a standard-size product where you send everything to a single location, it can add $0.27–$1.58+ per unit. For large bulky items, it's higher. This fee blindsided a lot of sellers when it rolled out and remains a meaningful line item in 2026.</p>

<h2>Advertising Costs: Not a Platform Fee, But Non-Negotiable</h2>

<p>Amazon doesn't formally charge a mandatory advertising fee, but for most competitive categories, advertising spend is effectively required to maintain visibility and drive velocity. Your PPC costs — Sponsored Products, Sponsored Brands, Sponsored Display — come directly out of your revenue before you see it.</p>

<p>ACoS (Advertising Cost of Sale) benchmarks vary by category, product lifecycle stage, and competition level. Early-stage launches often run 30–50%+ ACoS. Mature, well-optimized accounts in competitive categories typically target 15–25%. Some lower-competition niches can run efficiently at 10% or below.</p>

<p>The key point: advertising is a real cost that belongs in your unit economics model. Brands that exclude it from their margin math are lying to themselves about profitability.</p>

<h2>Returns, Refunds, and Return Processing Fees</h2>

<p>Amazon's return policy is customer-friendly by design, and sellers bear most of the cost. When a customer returns an item, Amazon refunds the customer and charges you a return processing fee (equal to 20% of the referral fee, up to a cap). If the returned item can be resold as new, it goes back into your inventory. If it's deemed unsellable, you either pay disposal fees or request it be returned to you at your cost.</p>

<p>Return rates vary significantly by category. Apparel, electronics, and consumables can have return rates of 10–30%+. Factor category-specific return rates into your margin model, not just an average.</p>

<h2>Putting It All Together: A Simple Model</h2>

<p>For a $40 product in the Home &amp; Kitchen category, a realistic fee stack looks something like this:</p>

<ul>
  <li>Retail price: $40.00</li>
  <li>Referral fee (15%): -$6.00</li>
  <li>FBA fulfillment fee (large standard, ~1 lb): -$4.76</li>
  <li>Monthly storage allocation (estimated): -$0.15</li>
  <li>Inbound placement (estimated): -$0.50</li>
  <li>Advertising (20% ACoS, $8 ad spend per unit sold): -$8.00</li>
  <li>COGS (landed, assumed $10): -$10.00</li>
  <li><strong>Net profit: ~$10.59 (26% margin)</strong></li>
</ul>

<p>That's a healthy unit, but notice how quickly the math changes if your COGS rises by $2, your ACoS climbs to 25%, or you have a 15% return rate. Understanding this math at a granular level is the difference between building a sustainable Amazon business and slowly bleeding out while your gross revenue grows.</p>

<h2>Ready to Grow Your Amazon Business?</h2>

<p>Online Brand Growth works with 7- and 8-figure Amazon brands to model true unit economics, identify hidden margin leaks, and build profitability-first growth strategies. Our founders have 25+ years of combined Amazon experience and have managed $450M+ in lifetime revenue across 500+ brands. If you want a clear-eyed look at your actual cost structure and where the opportunities are, book a free strategy call today.</p>
`
}

export default post
