import type { BlogPost } from '@/lib/blog'

const post: BlogPost = {
  title: 'Amazon Inventory Planning: How to Never Run Out of Stock (or Drown in It)',
  description: 'Master Amazon inventory planning with the OBG reorder formula. Avoid stockouts that kill rank and overstock that kills cash flow.',
  publishDate: '2026-03-26',
  htmlContent: `
    <p>You spent six months building organic rank. Reviews are stacking. PPC efficiency is finally where you want it. Then you stock out for 12 days.</p>

    <p>When you come back? Page two. Sometimes page three. All that momentum—gone.</p>

    <p>We've seen brands lose $200K in annual revenue from a single stockout. Not because they couldn't sell. Because they couldn't plan.</p>

    <p>On the flip side, we've inherited accounts sitting on 18 months of inventory. Cash tied up. Storage fees bleeding margin. FBA long-term storage penalties stacking up like parking tickets.</p>

    <p>Amazon inventory planning isn't sexy. But it's the difference between scaling profitably and slowly suffocating your own business.</p>

    <h2>Why Amazon Inventory Planning Is Different</h2>

    <p>If you're coming from DTC or retail, forget what you know about inventory management. Amazon has its own physics.</p>

    <p>First: organic rank is directly tied to sales velocity. Stock out, and you don't just lose sales during the outage. You lose the algorithmic momentum you built. Amazon's A9 doesn't care about your supply chain problems. It sees zero sales and demotes you accordingly.</p>

    <p>Second: FBA storage limits and fees create artificial constraints. Amazon penalizes you for holding too much inventory, especially during Q4 when they need warehouse space. So you can't just overstock as insurance.</p>

    <p>Third: lead times are unpredictable. Your supplier says 30 days. Freight forwarding adds 21. Amazon receiving takes another 14. That "30-day lead time" is actually 65 days—and that's when nothing goes wrong.</p>

    <p>This is why generic inventory management advice fails on Amazon. You need a system built for this specific reality.</p>

    <h2>The OBG Inventory Formula</h2>

    <p>We use a straightforward formula across every brand we manage:</p>

    <p><strong>Reorder Point = (Daily Sell-Through Rate × Total Lead Time) + Safety Stock Buffer</strong></p>

    <p>Let's break each component down.</p>

    <h3>Daily Sell-Through Rate</h3>

    <p>This is your average daily units sold for a specific ASIN. Not your catalog average. Each product gets its own calculation.</p>

    <p>Pull the last 30, 60, and 90-day averages. Weight them based on trend direction. If you're growing, lean toward recent data. If you're stable, use the longer window for accuracy.</p>

    <p>Critical: adjust for any artificial suppression. Were you out of stock for 10 of those 30 days? Your "average" is artificially low. Normalize for actual in-stock days.</p>

    <h3>Total Lead Time</h3>

    <p>Add up every step from purchase order to "available for sale" in FBA:</p>

    <ul>
      <li>Manufacturing time</li>
      <li>Quality inspection (if applicable)</li>
      <li>Domestic freight to port</li>
      <li>Ocean/air freight</li>
      <li>Customs clearance</li>
      <li>Last-mile to Amazon warehouse</li>
      <li>Amazon receiving and processing</li>
    </ul>

    <p>Most brands underestimate this by 20-40%. Amazon receiving alone can take 7-21 days depending on the season. During Q4, double your receiving estimate.</p>

    <p>We track actual lead times for every shipment and update our planning model quarterly. Your supplier's quote is a starting point, not gospel.</p>

    <h3>Safety Stock Buffer</h3>

    <p>This is your insurance policy. It accounts for demand spikes, shipping delays, and Amazon receiving backlogs.</p>

    <p>Our baseline: 14-21 days of additional stock beyond your calculated need.</p>

    <p>Increase this buffer for:</p>

    <ul>
      <li>Top 20% revenue ASINs (higher risk, higher reward)</li>
      <li>Single-supplier products (no backup option)</li>
      <li>Long lead time items (less room for error)</li>
      <li>Seasonal peaks approaching</li>
    </ul>

    <p>Decrease this buffer for:</p>

    <ul>
      <li>Slow-moving SKUs (cash flow matters more)</li>
      <li>Products with reliable domestic suppliers</li>
      <li>Items approaching end-of-life</li>
    </ul>

    <h2>Seasonality Will Wreck Your Formula</h2>

    <p>The formula above assumes steady demand. Reality is messier.</p>

    <p>Every product has seasonality. Baby products spike in spring (birth season). Fitness equipment peaks in January. Outdoor gear sells in summer. Gift-friendly items explode in Q4.</p>

    <p>You need to apply seasonality multipliers to your daily sell-through rate. Pull year-over-year data and calculate monthly indices. If December typically does 2.3x your annual average, your December reorder point calculation uses 2.3x the daily rate.</p>

    <p>This is where we've seen the biggest planning failures. Brands order inventory based on October velocity, then watch December demand outstrip supply by week two. Or they over-order for Q4 and spend January drowning in storage fees.</p>

    <p>When we took over inventory planning for Blue Forest Holdings, this was the first fix. They were planning on trailing 90-day averages with no seasonality adjustment. Within 12 months, their revenue doubled and profit tripled—partly because they stopped the stockout-overstock cycle that was eating margin.</p>

    <h2>The Real Cost of Stockouts</h2>

    <p>Let's quantify what a stockout actually costs you:</p>

    <p><strong>Direct revenue loss:</strong> Daily sales × days out of stock. Obvious.</p>

    <p><strong>Organic rank decay:</strong> Depending on category competitiveness, you can drop 10-50 positions during a 14-day stockout. Recovering that rank costs PPC dollars. Lots of them.</p>

    <p><strong>PPC efficiency collapse:</strong> When you come back in stock, your campaigns need to rebuild relevancy. Expect 20-40% higher ACoS for 2-4 weeks post-stockout.</p>

    <p><strong>Review velocity interruption:</strong> No sales means no reviews. Your competitors keep stacking while you're dark.</p>

    <p><strong>Buy Box complications:</strong> If you have multiple seller accounts or use FBM backup, stockouts create Buy Box instability that lingers.</p>

    <p>We've modeled this across dozens of accounts. A 14-day stockout on a $50K/month ASIN typically costs $25K in direct revenue plus $15-30K in recovery costs over the following 60 days. That's $40-55K total impact from two weeks without inventory.</p>

    <h2>The Real Cost of Overstock</h2>

    <p>Overstock is slower poison, but poison nonetheless.</p>

    <p><strong>Cash flow suffocation:</strong> Every dollar sitting in Amazon's warehouse is a dollar you can't use for PPC, new product development, or inventory for products that actually sell.</p>

    <p><strong>FBA storage fees:</strong> Monthly storage fees seem small until you're holding 6 months of slow-moving inventory. Then it adds up fast.</p>

    <p><strong>Long-term storage fees:</strong> Inventory sitting 181+ days gets hit with additional fees. At 365+ days, it gets brutal. We've seen brands paying more in storage than the products are worth.</p>

    <p><strong>IPI score damage:</strong> Amazon's Inventory Performance Index penalizes excess inventory. Low IPI scores mean storage limits that restrict your ability to send in fast-moving products.</p>

    <p><strong>Aged inventory markdown:</strong> Eventually, you have to liquidate. That 60% margin product becomes a 10% margin clearance item just to free up cash and space.</p>

    <h2>Implementation: Per-ASIN Tracking</h2>

    <p>The formula only works if you apply it individually to every ASIN. Catalog-level averages hide the details that matter.</p>

    <p>Build a spreadsheet (or use inventory management software) that tracks for each SKU:</p>

    <ul>
      <li>Current FBA inventory</li>
      <li>Inbound shipment quantities and ETAs</li>
      <li>30/60/90-day sell-through rates</li>
      <li>Seasonality multiplier for current month</li>
      <li>Total lead time (updated based on actual shipment history)</li>
      <li>Safety stock buffer (based on SKU importance)</li>
      <li>Calculated reorder point</li>
      <li>Days of inventory remaining</li>
    </ul>

    <p>Review this weekly. Create alerts for when any SKU drops below its reorder point. By the time you notice a stockout coming, it's usually too late to prevent it.</p>

    <h2>How This Connects to Our Revenue Rescue Decision Tree</h2>

    <p>Inventory issues show up constantly in our Revenue Rescue Decision Tree diagnostics. When a brand comes to us with declining sales or profits, inventory mismanagement is often a root cause—even when they think the problem is PPC or competition.</p>

    <p>Stockouts crater organic rank, which increases PPC dependency, which tanks contribution margin. Overstock ties up cash that could fund growth, which stalls momentum, which makes competition look more aggressive than they are.</p>

    <p>Fix inventory planning, and half your other problems get easier to solve.</p>

    <h2>Work With OBG</h2>

    <p>If you want to see how this would work for your brand, <a href="/#book-call">book a free strategy session</a>. We'll audit your account, identify the fastest wins, and map out exactly how we'll execute. And if we don't increase your profitability in the first 30 days, you don't pay. Zero risk.</p>
  `,
}

export default post