import type { BlogPost } from '@/lib/blog'

const post: BlogPost = {
  title: 'Amazon Inventory Management Best Practices: How to Stop Running Out and Stop Overstocking',
  description: 'Stockouts destroy organic rank. Overstocking destroys margins. OBG uses 90-day rolling forecasts and ASIN-level turnover analysis to solve both problems at once.',
  publishDate: '2025-12-25',
  htmlContent: `
<p>Most brands treat inventory management like a logistics problem. It is not. It is a profitability lever — and most brands ignore it until it becomes a crisis.</p>

<p>The crisis comes in one of two forms. You run out of stock on a best-seller and watch your organic rank collapse over two to three weeks while your competitor takes the sales you would have had. Or you overstock going into a slow period and spend the next quarter paying storage fees on inventory that is not moving while your capital is locked up and unavailable for things that would actually grow the business.</p>

<p>Both failures are preventable. We solve them the same way for every brand we manage: 90-day rolling forecasts tied to actual sell-through rates, ASIN-level turnover monitoring, and reorder triggers that account for real lead times — not optimistic ones.</p>

<h2>Why Stockouts Are Worse Than You Think</h2>

<p>The direct cost of a stockout is obvious — you miss revenue on days when your ASIN has no inventory. What most brands underestimate is the recovery cost.</p>

<p>Amazon's A9 algorithm factors sales velocity into organic rank. When you stock out, your sales velocity drops to zero. Your rank falls. When inventory comes back in, you are not where you were — you are starting the climb back from wherever the algorithm has repositioned you, which is typically meaningfully lower than your pre-stockout position.</p>

<p>That recovery takes time. In competitive categories, rebuilding from a significant stockout can take two to four weeks of elevated PPC spend to get back to prior ranking. During that recovery period, you are paying more per click for lower organic support while your conversion metrics catch up. The cost of a 10-day stockout is not 10 days of lost revenue. It is 10 days of lost revenue plus three to four weeks of suppressed performance plus elevated ad spend during recovery. The fully loaded cost is typically 3x to 5x the direct revenue loss.</p>

<p>Amazon also introduced low-inventory-level fees in 2024, which charge you per unit when inventory falls below a threshold relative to recent sales velocity. You now pay a penalty during the final days before a stockout — not just lose revenue, but actively incur fees. Stockout proximity has a new dollar cost that did not exist two years ago.</p>

<h2>Why Overstocking Is Equally Dangerous</h2>

<p>Overstocking gets rationalized as conservative planning — safety stock, insurance against demand spikes. Up to a point, that is correct. Beyond that point, it is capital destruction.</p>

<p>FBA storage fees compound. During peak Q4 season, standard storage costs $2.40 per cubic foot per month versus $0.78 off-peak — a 207% increase. Brands that send large inbound shipments in September to prepare for holiday demand and then miss their volume projections spend Q4 paying elevated storage fees on inventory they cannot sell fast enough. Then January arrives and the inventory that did not sell starts aging toward the 181-day surcharge threshold.</p>

<p>Beyond the storage fees, overstocking ties up working capital that has an opportunity cost. Capital locked in slow-turning inventory cannot fund PPC on high-velocity ASINs. It cannot fund a new product launch. It cannot fund the marketing investment that would actually grow the brand. Dead inventory does not just cost money in fees — it costs money in foregone growth.</p>

<p>Amazon's IPI score penalizes excess inventory directly. The excess inventory percentage is one of the key inputs to IPI calculation. Brands that chronically overstock see IPI scores that restrict their FBA storage limits — which creates a constraint on their ability to grow exactly when they want to add capacity.</p>

<h2>The 90-Day Rolling Forecast</h2>

<p>We run 90-day rolling forecasts for every brand in our portfolio. Here is the structure:</p>

<h3>The inputs</h3>

<p>Your forecast is only as accurate as its inputs. The key inputs are: trailing 30-day sell-through rate per ASIN (from Seller Central Business Reports or your inventory software), seasonality adjustments based on prior year or category data, planned promotional activity that will change velocity (Prime Day, Lightning Deals, coupon campaigns), and your realistic supply chain lead time including buffer for customs delays and Amazon receiving time.</p>

<p>Lead time is where most brands are systematically wrong. They use the best-case lead time — the fastest their supplier has ever delivered — rather than the average or the P80 lead time (the time within which 80% of shipments have arrived). When the forecast uses a 35-day lead time and reality is 50 days, you are going to stock out. Build a lead time model from your actual historical data.</p>

<h3>The reorder point calculation</h3>

<p>Your reorder point is the inventory level at which you need to place a new purchase order to receive inventory before you stock out. The formula:</p>

<blockquote>
  <strong>Reorder Point = (Daily Sales Velocity × Lead Time in Days) + Safety Stock</strong>
</blockquote>

<p>Safety stock is the buffer inventory that protects you against demand spikes and supply chain variability. Calculate it based on your demand variability and lead time variability — not a flat rule of thumb like "two weeks of safety stock." A product with highly predictable demand and a reliable supplier needs less safety stock than a product with volatile demand or an inconsistent manufacturing lead time.</p>

<h3>The rolling update process</h3>

<p>The forecast is not a document you produce once. It is a living model that updates weekly as sell-through data comes in. When actual sales differ from projected sales — a positive viral moment, a listing suppression, a competitor stockout that sent traffic to you — the forecast updates and reorder triggers adjust accordingly. Managing inventory on a monthly review cycle is how brands stockout or overstock. Weekly review is the minimum cadence for active management.</p>

<h2>ASIN-Level Inventory Health Monitoring</h2>

<p>Catalog-level metrics hide ASIN-level problems. A brand with 50 SKUs can have a perfectly reasonable aggregate inventory position while three specific ASINs are approaching the aged inventory surcharge threshold and two others are 10 days from a stockout. You need ASIN-level visibility to manage this correctly.</p>

<p>We track the following per ASIN on a weekly basis:</p>

<ul>
  <li><strong>Days of supply remaining:</strong> Current FBA inventory ÷ daily sales velocity. If this drops below your lead time plus buffer, it triggers a reorder alert.</li>
  <li><strong>Inventory age:</strong> How many days has the oldest inventory been in FBA? When any units cross 150 days, we make an active decision about whether to discount, promote, or remove.</li>
  <li><strong>Sell-through rate trend:</strong> Is velocity accelerating, stable, or decelerating? Decelerating velocity on an ASIN with significant incoming inventory is an early warning signal that needs attention before the inventory arrives.</li>
  <li><strong>Inbound inventory status:</strong> What is in transit and when does it arrive? This is especially important during peak season when receiving times at Amazon FCs extend significantly.</li>
</ul>

<p>Sellerise is the tool we use for this monitoring across our client portfolio. It surfaces the ASIN-level signals that would otherwise require manual spreadsheet work to catch. The tool matters less than the process — weekly review, active response to warning signals, and decision-making based on actual data rather than gut feel.</p>

<h2>Seasonal Inventory Planning</h2>

<p>Seasonal demand requires a different approach than evergreen inventory planning. A few principles that apply across categories:</p>

<h3>Front-load inbound shipments</h3>

<p>Amazon FC receiving times extend significantly in October and November as they process the volume of Q4 inbound inventory from all sellers simultaneously. Brands that send Q4 inventory in late October often see it sitting in "receiving" status for two to three weeks — which means it is not available for sale during the early November ramp-up. Get Q4 inventory into FBA by early October at the latest.</p>

<h3>Model the Q4 storage fee cost explicitly</h3>

<p>Q4 inventory that does not sell costs $2.40 per cubic foot per month instead of $0.78. If you have a product where you are uncertain whether demand will materialize at your projected level, the asymmetric risk is real — upside is incremental revenue, downside is elevated storage fees plus capital tied up. Build the Q4 storage cost explicitly into your inbound quantity decision.</p>

<h3>Plan the January clearance</h3>

<p>Whatever does not sell in Q4 needs a January plan. Waiting until February to deal with Q4 remnants means you are paying elevated storage in January unnecessarily and approaching the aged inventory threshold faster. Decide in December what your January price and promotion strategy is for products with significant remaining inventory after peak season.</p>

<h2>The NumNum Baby Lesson</h2>

<p>When we grew NumNum Baby from $100,000 to $3 million in 18 months — ultimately achieving an 8-figure exit — inventory management was a foundational component of that growth. Sustaining that velocity without stockouts required a real forecasting process, not ad hoc reorders. When demand is growing 30x, your inventory model has to scale with it or your best month becomes your worst month because you did not have product in stock when momentum peaked.</p>

<p>That kind of growth does not survive inventory management failures. It requires systems.</p>

<h2>Work With OBG</h2>

<p>Inventory management is part of our Growth Team OS — the full Amazon department we operate for every brand we manage. We build the forecasting process, manage the reorder triggers, monitor ASIN-level health weekly, and handle the Seller Support escalations when FBA creates receiving or storage issues.</p>

<p>If stockouts are killing your rank or storage fees are compressing your margin, book a free strategy call. If we do not improve your profitability within 30 days, you get a full refund. That is not a pitch — it is a guarantee we put in writing.</p>
`,
}

export default post
