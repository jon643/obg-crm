import type { BlogPost } from '@/lib/blog'

// Auto-generated from Outrank webhook (article id: 7555ce61-e0da-4767-9629-ad61c3447e69).
// Do not hand-edit; re-publish in Outrank to update.

const post: BlogPost = {
  title: `FBA Inventory Management: Weekly Playbook to Cut Stockouts`,
  description: `Set reorder points, control aged stock and storage costs, and run a weekly FBA inventory management review that protects Buy Box stock and cash flow.`,
  publishDate: '2026-11-06',
  htmlContent: `<p>A SKU can sell every day and still lose you money in FBA. If it occupies too much <strong>cubic space</strong> relative to how fast it ships, storage and utilization charges eat the margin you think you&#39;re making on the sale. That&#39;s why good <strong>FBA inventory management</strong> isn&#39;t a unit count. It&#39;s a weekly judgment about days of cover, lead time, cube and contribution, made ASIN by ASIN before Amazon makes the expensive version of that judgment for you.</p>
<h2>Stock Targets for Each SKU Segment</h2>
<p>Start where Amazon starts, then stop treating its band as a target. Amazon&#39;s own guidance puts a starting range at roughly <strong>30 to 60 days of expected sales</strong>, and that range is useful only if you move each SKU inside it based on how it behaves. Apply one number to the whole catalog and you&#39;ll overstock the slow tail while starving the hero that pays for everything else.</p>
<p>Here&#39;s the one-line test to run today: <strong>if a SKU&#39;s cover falls below its band before its inbound units land, the reorder is already late.</strong> That sounds obvious. In practice, most stockouts I would audit first trace back to someone checking on-hand units, seeing a comfortable number, and missing that inbound was still in transit and reserved units weren&#39;t sellable.</p>
<h3>How to calculate days of supply properly</h3>
<p><strong>Days of supply</strong> is sellable plus inbound units divided by expected daily sales. It is not on-hand units alone. Reserved inventory is tied to customer orders, transfers or processing, so it doesn&#39;t protect tomorrow&#39;s sales. Inbound counts toward cover, but only from the date it becomes sellable, not the date you printed the label.</p>
<p>Segment first, then set cover. A steady seller with a short, predictable domestic lead time can run lean because you can correct a miss quickly. An overseas SKU can&#39;t. If a container slips, you don&#39;t have a two-day fix, you have an empty listing and a rank rebuild.</p>
<table>
<thead>
<tr>
<th>SKU segment</th>
<th>Starting cover (days)</th>
<th>Move the target when</th>
<th>Review cadence</th>
</tr>
</thead>
<tbody><tr>
<td>Steady seller, short lead time</td>
<td>30-45</td>
<td>Demand flat for eight weeks</td>
<td>Weekly</td>
</tr>
<tr>
<td>Long or volatile supply chain</td>
<td>60 or more</td>
<td>Lead time varies by more than a week</td>
<td>Weekly</td>
</tr>
<tr>
<td>Seasonal product</td>
<td>Set per season</td>
<td>Sales curve peaks or falls</td>
<td>Every two weeks before peak</td>
</tr>
<tr>
<td>Expiry-sensitive or fast-depreciating</td>
<td>Under 30</td>
<td>Shelf life or price drop ahead</td>
<td>Weekly</td>
</tr>
</tbody></table>
<h3>Moving within the band</h3>
<p><strong>Steady sellers, short lead time:</strong> Run near the lower end. Cash sits in the bin for less time, aged exposure stays low, and a weekly review catches drift before it becomes a stockout. If demand has been flat for eight weeks, don&#39;t carry launch-level insurance out of habit.</p>
<p><strong>Long or volatile supply chain:</strong> Ocean freight, a single overseas factory, or a supplier whose ship dates move by more than a week justifies 60 days or more. You&#39;re not buying excess, you&#39;re buying time. The trade-off is real, though. More cover means more cube and more cash locked up, so reserve this treatment for SKUs where a stockout costs more than the storage.</p>
<p><strong>Seasonal products:</strong> Size to the build-up and sell-off curve, never to average monthly sales. Averaging is how brands carry peak stock into January and then pay to clear it. Build before the peak, stop replenishing while sales still look strong, and plan the exit quantity in advance.</p>
<p><strong>Expiry-sensitive or fast-depreciating products:</strong> Stay at the bottom of the band or below it. Supplements, food, cosmetics and trend-driven goods lose value while they wait. A stockout hurts, but expired or obsolete stock hurts and charges you storage on the way down.</p>
<blockquote>
<p><strong>Practical rule:</strong> Set the band by segment, then let lead time and cube move the SKU inside it. Never let last month&#39;s order quantity set this month&#39;s target.</p>
</blockquote>
<p>Review cadence matters as much as the number. Weekly is the default for anything material. Seasonal SKUs need a check every two weeks before peak because the decision window closes early. Once the peak order is placed, you&#39;re managing the landing, not the forecast.</p>
<h2>How to Set Reorder Points and Safety Stock</h2>
<p>Forecast at the ASIN level, convert it to days of cover, and reconcile it against lead time and receiving variability. That&#39;s the method in <a href="https://sellercentral.amazon.com/help/hub/reference/external/GTMXYZN64UJL7TT6?locale=en-US">Amazon&#39;s Seller Central inventory guidance</a>, which calculates a reorder point as <strong>expected daily demand multiplied by total replenishment lead time, plus a safety-stock buffer</strong> based on demand and lead-time variability. We forecast demand by ASIN, build in lead-time and safety-stock buffers, and trigger reorders early to keep top products in stock. The steps below make that concrete.</p>
<p><img src="https://cdnimg.co/13b9acdf-56f8-4f76-98b5-6695e45942c4/a6f31fc4-5b4b-4a94-a5a3-dcafc9994451/fba-inventory-management-reorder-points.jpg" alt="A five-step infographic showing how to calculate reorder points and safety stock for FBA inventory management."></p>
<h3>The reorder math, step by step</h3>
<ol>
<li><p><strong>Pull average daily sales:</strong> Use the last four to eight weeks, then adjust for known events such as a promotion, a price change or a competitor going out of stock. For a new SKU with no history, borrow the daily rate of a comparable ASIN and correct it after four weeks of real data. The usual slip is using a promo week as your baseline and ordering to a spike.</p>
</li>
<li><p><strong>Add total lead time:</strong> Count from purchase order to sellable at FBA. That means supplier production, transit, Amazon receiving and check-in. Most brands stop at transit and then wonder why they&#39;re short. Check-in time is lead time whether you like it or not.</p>
</li>
<li><p><strong>Calculate lead-time demand:</strong> Multiply daily demand by total lead time. This is what you&#39;ll sell while you wait. If that number is larger than your current sellable stock, you&#39;re already inside the danger zone.</p>
</li>
<li><p><strong>Add safety stock:</strong> Size the buffer to variability, not to anxiety. A supplier who ships on the promised date needs a thin buffer. A supplier whose dates slip by a week needs a larger one, roughly a week of sales or more. Skipping this buffer on a long supply chain is the most expensive shortcut in the whole process.</p>
</li>
<li><p><strong>Set and compare the reorder point:</strong> Reorder point equals lead-time demand plus safety stock. Compare it against sellable, inbound and reserved units together, tracked separately. Don&#39;t count inbound as available today, and don&#39;t ignore it either, because double-ordering creates the excess problem you&#39;ll pay for later.</p>
</li>
<li><p><strong>Order before you hit the point:</strong> Place the purchase order before projected available inventory reaches the reorder point, not when the bin looks empty. By the time stock looks low in Seller Central, you&#39;ve usually been late for two weeks.</p>
</li>
</ol>
<h3>A worked example</h3>
<p>Say an ASIN sells <strong>20 units a day</strong> with a <strong>45-day total lead time</strong>. Lead-time demand is 900 units. Add a 150-unit safety buffer for a supplier with moderate variability and your <strong>reorder point is 1,050 units</strong>. When sellable plus confirmed inbound projects down to 1,050, the PO goes out that week.</p>
<p>Segment your review the same way Amazon does, into sellable, inbound, reserved, excess, aged and unfulfillable, so each bucket gets its own decision. For the forecasting layer underneath this math, our guide to <a href="https://www.onlinebrandgrowth.com/blog/amazon-inventory-forecasting/">Amazon inventory forecasting</a> covers how to build the demand input. You&#39;ll know the math works when the next order lands and becomes sellable before the reorder point is breached, with no air-freight rescue in between.</p>
<h2>Clearing Excess and Aged Units Before Surcharges</h2>
<p>Treat day 181 as a deadline, not a milestone. Once units cross into aged territory, the surcharge is assessed monthly, so age becomes a recurring carrying cost that compounds while you decide. The brands that avoid it aren&#39;t better at negotiating with Amazon. They&#39;re earlier.</p>
<p>Amazon&#39;s excess definition is specific. According to <a href="https://sell.amazon.com/learn/inventory-management">Amazon&#39;s inventory management guidance</a>, a product qualifies as excess when it has <strong>more than 90 days of supply and at least one unit aged over 90 days</strong>, and Amazon recommends targeting roughly <strong>two months of supply</strong>. Cross that threshold and the correct first move is to pause replenishment, even if the sales chart still looks healthy.</p>
<p>The warehouse view below is where this work starts, with age checked at the ASIN level rather than assumed from your last shipment date.</p>
<p><img src="https://cdnimg.co/13b9acdf-56f8-4f76-98b5-6695e45942c4/896db4af-2194-4c58-b525-9792f74a2b88/fba-inventory-management-warehouse-manager.jpg" alt="A warehouse manager checking inventory levels on a tablet while standing near stacks of cardboard boxes."></p>
<table>
<thead>
<tr>
<th>Inventory age</th>
<th>What Amazon charges or flags</th>
<th>Your move</th>
</tr>
</thead>
<tbody><tr>
<td>0-90 days</td>
<td>Standard monthly storage only</td>
<td>Watch sell-through in the FBA Inventory tool</td>
</tr>
<tr>
<td>91-180 days</td>
<td>Excess flag only if supply is over 90 days and a unit is over 90 days old</td>
<td>Pause replenishment and test a promotion</td>
</tr>
<tr>
<td>181 days and older</td>
<td>Aged-inventory surcharge on the 15th of each month</td>
<td>Pick removal, disposal or a promotion before the charge</td>
</tr>
</tbody></table>
<h3>The clearing routine</h3>
<ol>
<li><p><strong>Filter by age:</strong> Open the <strong>FBA Inventory tool</strong> and filter by inventory age. Don&#39;t start from the restock view, because it hides aging units behind healthy headline stock.</p>
</li>
<li><p><strong>List what&#39;s approaching the surcharge:</strong> Pull every ASIN with units moving toward the aged threshold and note the unit count and cube. Bulky and slow is the expensive combination, so sort by that first.</p>
</li>
<li><p><strong>Pause replenishment on flagged ASINs:</strong> If it&#39;s excess, no new PO and no new inbound shipment. Adding fresh units to an excess position doesn&#39;t fix sell-through, it extends the problem.</p>
</li>
<li><p><strong>Pick a path per aged group:</strong> Promotion, coupon, removal order or disposal. Price the promotion against the removal fee and the next surcharge, then choose. Set the decision date before the next monthly assessment, not after it posts.</p>
</li>
<li><p><strong>Check the oldest shipments, not the newest:</strong> Amazon applies first-in, first-out treatment across its network, so the units you sent most recently aren&#39;t necessarily the units sold first. Assuming your stock is fresh because your last shipment was recent is how aged units surprise you.</p>
</li>
</ol>
<blockquote>
<p>Don&#39;t replenish a flagged SKU because velocity looks fine. Velocity against too much stock is still excess, and Amazon charges you for the stock, not the sales rate.</p>
</blockquote>
<p>Set a calendar reminder around <strong>day 150</strong> for every slow ASIN. That gives you a full promotion cycle and a removal window before the surcharge starts, instead of a rushed disposal decision at day 179.</p>
<h2>Storage Cube, Capacity Reservations and Profit per Cubic Foot</h2>
<p>The 30 to 60 day rule answers the wrong question on its own. Amazon doesn&#39;t charge you for units. It charges you for <strong>cube multiplied by time</strong>, and capacity is allocated in cubic feet too. Two SKUs with identical days of cover can have completely different economics.</p>
<p>Storage charges run off daily average cubic feet, and utilization compares how much volume you hold against how much you ship. A bulky SKU that ships slowly gets penalized even when unit sales look steady. That&#39;s the counterintuitive trap for brands coming from retail, where shelf packaging was designed to look big, not to ship efficiently.</p>
<p><img src="https://cdnimg.co/13b9acdf-56f8-4f76-98b5-6695e45942c4/f9f62115-596b-4553-ac4a-f99cc31fc70f/fba-inventory-management-storage-metrics.jpg" alt="A four-part infographic illustrating Amazon FBA inventory metrics including storage volume, costs, surcharges, and profit per cubic foot."></p>
<h3>Should you reserve more capacity</h3>
<p>Capacity adds a second decision on top of the reorder point. Per <a href="https://sellercentral.amazon.com/help/hub/reference/external/G201074400">Amazon&#39;s capacity documentation</a>, <strong>Capacity Manager</strong> lets sellers bid for additional capacity through a reservation fee, inventory above the assigned limit can incur overage fees, and capacity limits are <strong>generally announced during the fourth week of each month</strong>. That short window means you decide your bid logic in advance, not when the limit posts.</p>
<p>Use this test. Compare the <strong>contribution margin from avoiding a stockout</strong> against the reservation fee, carrying cost, expected markdown or removal cost, and the probability the demand shows up. If a seasonal SKU has a coin-flip forecast, reserving peak capacity to protect it can worsen your utilization while the stock sits. Our breakdown of <a href="https://www.onlinebrandgrowth.com/blog/amazon-fba-capacity-limits-explained/">Amazon FBA capacity limits</a> walks through how those limits are set.</p>
<h3>Judge every SKU by profit per cubic foot per week</h3>
<p>Define it plainly: contribution after FBA fees, storage, returns, ads and aged surcharges, divided by cubic feet occupied and weeks of supply. Run your dimensions through the FBA storage fee calculator for monthly cost by size, and pull margin inputs from the Amazon profit calculator. Then rank the catalog.</p>
<table>
<thead>
<tr>
<th>Pack</th>
<th>Units per week</th>
<th>Illustrative contribution per unit</th>
<th>Weekly contribution per cubic foot</th>
</tr>
</thead>
<tbody><tr>
<td>Large carton, 2 cubic feet</td>
<td>10</td>
<td>$6</td>
<td>$30 per cubic foot</td>
</tr>
<tr>
<td>Smaller pack, 0.5 cubic feet</td>
<td>8</td>
<td>$5</td>
<td>$80 per cubic foot</td>
</tr>
</tbody></table>
<p>The large carton sells more units and more dollars. The smaller pack earns far more from the space it occupies. When capacity is tight, the smaller pack gets the allocation, and the large carton gets a packaging review. That&#39;s the point most guides miss. <strong>Packaging redesign often beats more advertising</strong> when carton dimensions waste cube, because ads push more units through bad economics while a smaller carton fixes the economics on every unit. I would check dimensions before raising bids on any bulky, slow-turning ASIN.</p>
<h2>Recovering Stranded and Unfulfillable Inventory</h2>
<p>Stranded inventory isn&#39;t a counting problem. It&#39;s usually a listing or offer problem wearing an inventory costume, and treating it as a warehouse issue wastes weeks. Units sit in a fulfillment center, earn nothing, accrue storage, and age toward surcharges while everyone waits for a fix nobody owns.</p>
<h3>The five recovery steps</h3>
<ol>
<li><p><strong>Open the stranded inventory report:</strong> Find it under <strong>Inventory in Seller Central</strong> and note the affected ASINs, unit counts and reason codes. Fix the listing or offer issue first, whether that&#39;s a suppressed detail page, a missing attribute or a closed listing, then request a review. Relisting before fixing the root cause just strands the units again.</p>
</li>
<li><p><strong>Create removal orders for what you can&#39;t sell:</strong> From the <strong>Manage Inventory page</strong>, choose return or disposal. Weigh the removal fee against unit value and remaining shelf life. Returning low-value bulky stock to sit in your own warehouse isn&#39;t a recovery, it&#39;s a relocation of the same cost.</p>
</li>
<li><p><strong>Check unfulfillable inventory weekly:</strong> Damaged and defective units land here before they show up clearly in the restock view. If you only look monthly, you&#39;ll reorder against stock that can never sell and misread your true cover.</p>
</li>
<li><p><strong>Review the Reimbursements report monthly:</strong> Look for lost or damaged stock and inbound discrepancies, then file claims for units Amazon has lost with documentation attached. This is recoverable money, but only if someone checks on a schedule. Our guide on <a href="https://www.onlinebrandgrowth.com/blog/amazon-stranded-inventory/">Amazon stranded inventory</a> covers the common reason codes and fixes in detail.</p>
</li>
<li><p><strong>Reconcile inbound discrepancies promptly:</strong> Compare received counts against your <strong>Send to Amazon</strong> shipment plan as soon as a shipment closes. Short receipts and wrong quantities get harder to resolve the longer they sit, and they distort your reorder math in the meantime.</p>
</li>
</ol>
<h3>The mistakes that keep units stuck</h3>
<p>Two patterns repeat. First, teams chase a stranded SKU as if units were miscounted, opening inventory cases when the listing itself is broken. Second, they let removal decisions drift while waiting for a fix that may never come, paying storage on dead units the whole time.</p>
<blockquote>
<p><strong>Guardrail:</strong> No unfulfillable unit sits more than a week without a decision, an owner and a date.</p>
</blockquote>
<p>Unauthorized sellers complicate this picture too, because stray offers and listing interference can strand or suppress your own stock. That&#39;s where our <strong>360 Brand Protection</strong> program for unauthorized seller removal and MAP enforcement connects to operations. A clean listing isn&#39;t just a brand issue. It&#39;s what keeps your inventory sellable.</p>
<h2>Weekly IPI and Dashboard Review</h2>
<p>Your weekly review should start with one number and branch outward. The <strong>Inventory Performance Index</strong> runs from 0 to 1,000 and reflects whether inventory held is balanced against inventory sold, whether excess and aged units stay low, whether listing problems get resolved, and whether popular products stay available. Those signals move together. A falling score usually traces back to excess or aged stock building up gradually, not to one bad week.</p>
<p>The review works best as a team habit with a shared log, like the session pictured here, rather than a solo glance at a dashboard.</p>
<p><img src="https://cdnimg.co/13b9acdf-56f8-4f76-98b5-6695e45942c4/468fc2e5-5ab4-4849-a545-fc89ba201499/fba-inventory-management-team-analysis.jpg" alt="A diverse team of professionals analyzing FBA inventory performance metrics together on a laptop in an office."></p>
<table>
<thead>
<tr>
<th>Metric</th>
<th>Where to find it</th>
<th>What to do with it</th>
</tr>
</thead>
<tbody><tr>
<td>Inventory Performance Index (0-1,000)</td>
<td>FBA Inventory dashboard</td>
<td>Log the weekly trend and act on any drop, threshold two consecutive weekly declines</td>
</tr>
<tr>
<td>Days of supply</td>
<td>Restock report</td>
<td>Compare with the segment band from section one</td>
</tr>
<tr>
<td>Aged inventory units</td>
<td>Aged inventory filter in FBA Inventory tool</td>
<td>Decide on promotion or removal before 181 days</td>
</tr>
<tr>
<td>Estimated storage cost</td>
<td>Inventory dashboard storage estimate</td>
<td>Compare with the storage fee calculator result</td>
</tr>
<tr>
<td>Unfulfillable units</td>
<td>FBA Inventory tool</td>
<td>Remove or fix within one week</td>
</tr>
<tr>
<td>Sales rank after a stockout</td>
<td>Sales rank checker</td>
<td>Confirm recovery within two weeks, target return to pre-stockout rank range</td>
</tr>
</tbody></table>
<h3>The weekly routine</h3>
<ol>
<li><p><strong>Log the IPI trend:</strong> Open the <strong>FBA Inventory dashboard</strong> and record the score. One dip is noise. Two consecutive declines mean excess, aged stock or listing problems need action that week.</p>
</li>
<li><p><strong>Check days of supply against segment bands:</strong> Flag every ASIN outside its band in either direction. Below band means reorder risk. Above band means pause and clear.</p>
</li>
<li><p><strong>Filter aged units:</strong> Note anything approaching the surcharge threshold and assign each ASIN a promotion, removal or disposal decision with a date.</p>
</li>
<li><p><strong>Review storage volume and estimated cost:</strong> Compare the dashboard estimate against your own calculation so a dimension error doesn&#39;t inflate fees unnoticed for months.</p>
</li>
<li><p><strong>Log unfulfillable units and open listing issues:</strong> Every stranded or damaged unit gets an owner. Unassigned problems don&#39;t get fixed.</p>
</li>
<li><p><strong>Check rank recovery after any stockout:</strong> Note sales rank movement for SKUs that went out of stock and confirm recovery with the sales rank checker. If rank hasn&#39;t recovered within two weeks, the listing needs velocity support, not patience.</p>
</li>
</ol>
<p>The short video below walks through how these dashboard signals connect in practice.</p>
<iframe width="100%" style="aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/0aNj_JniCQ4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<p>Finish the review with money, not just units. According to <a href="https://sell.amazon.com/blog/amazon-fba-for-beginners">Amazon&#39;s FBA guidance on fees and the Revenue Calculator</a>, the calculator includes referral fees, fulfillment costs, monthly storage and variable closing fees, but <strong>does not automatically include removal-order costs, long-term storage costs or return-processing costs</strong>, which must be added through the <strong>Miscellaneous cost field</strong>. Run it alongside your weekly log before approving any large replenishment, or your margin per ASIN is overstated by exactly the costs this article is about avoiding.</p>
<h2>Run the Replenishment Review Before Your Next PO</h2>
<p>Every purchase order above a set value should pass a go or no-go check before it goes out. Not a long meeting. Six questions, answered in writing, in the weekly log. If your wider purchasing workflow needs tightening alongside this, the <a href="https://jumpstartpartners.finance/blog/what-is-purchase-order-process">steps from requisition to payment</a> from Jumpstart Partners are a useful reference for the approval side.</p>
<h3>The pre-PO checklist</h3>
<ol>
<li><p><strong>Confirm cover after inbound lands:</strong> Days of supply once the new units become sellable must stay inside the segment band. Current stock looking low isn&#39;t a justification by itself.</p>
</li>
<li><p><strong>Check aged and excess flags on the same ASIN:</strong> If it&#39;s flagged, cut the quantity or pause the order. Replenishing into an excess flag is how a manageable problem becomes a surcharge.</p>
</li>
<li><p><strong>Estimate storage cost for the new quantity:</strong> Run it through the storage fee calculator and compare the result with the margin from stockouts avoided. If storage eats the margin, order less and order more often.</p>
</li>
<li><p><strong>Check capacity for the next cycle:</strong> Limits land late in the month, so decide now whether a reservation is worth the fee using the contribution test, not optimism about the forecast.</p>
</li>
<li><p><strong>Confirm lead time in writing:</strong> Get real transit and check-in days from your 3PL and freight partner before the PO, so the reorder point uses actual numbers. We don&#39;t physically handle client inventory. Our <strong>FBA Logistics and Operations</strong> work covers inventory planning, replenishment strategy, shipment creation, labeling and inbound management through Seller Central workflows and coordination with your 3PL and freight partners.</p>
</li>
<li><p><strong>Record the decision and trigger date:</strong> Log the quantity, the reasoning and the date. The next weekly review should be able to judge whether the call was right.</p>
</li>
</ol>
<p>Run this before the PO, not after the container ships. If you want a second set of eyes on your numbers, book a free strategy call and we&#39;ll review your cover, cube and reorder points with you.</p>
<hr>
<p>If your FBA inventory management is tying up cash in the wrong SKUs or letting heroes stock out, Online Brand Growth can run the planning, replenishment and Seller Central workflows with your 3PL and freight partners so every PO is judged on margin and cube, not habit. Visit <a href="https://onlinebrandgrowth.com">Online Brand Growth</a> to see how we&#39;d rebuild your weekly inventory review.</p>
`,
}

export default post
