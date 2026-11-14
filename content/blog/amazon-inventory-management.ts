import type { BlogPost } from '@/lib/blog'

// Auto-generated from Outrank webhook (article id: d54fe25b-ed92-45ba-9154-da2a439d9182).
// Do not hand-edit; re-publish in Outrank to update.

const post: BlogPost = {
  title: `Amazon Inventory Management: A Practical Playbook for 2026`,
  description: `Learn Amazon inventory management step by step: reorder points, safety stock, FBA restock reports and the thresholds that prevent stockouts and aged stock.`,
  publishDate: '2026-11-14',
  htmlContent: `<p>Your dashboard says 1,200 units available. The container you booked three weeks ago is still sitting in receiving, the reorder point you set last quarter came from a lead time your supplier quoted two seasons back, and your hero SKU has 11 days of cover left. Nothing on that page is technically wrong. That&#39;s the problem.</p>
<p>Amazon inventory management isn&#39;t a stock-counting exercise. It&#39;s a decision system that has to reconcile demand, inbound timing, storage capacity and fees at once. Judge it by unit count alone and it fails, usually the week before your biggest sales period.</p>
<h2>What Amazon Inventory Numbers Actually Tell You</h2>
<p>A SKU shows <strong>900 units available</strong>, but current demand is <strong>30 units a day</strong> and the next inbound shipment could take <strong>35 days</strong> to become buyable. The available count covers only 30 days of sales. It does not account for the time needed to replenish.</p>
<h3>Four states hidden inside one number</h3>
<p>Amazon&#39;s FBA inventory reporting counts available, inbound, reserved and unfulfillable units together as total inventory supply, which is why a single unit count hides so much.</p>
<p>The buckets have different operational value. <strong>Available</strong> units can ship now. <strong>Inbound</strong> units are on their way but may not be checked in. <strong>Reserved</strong> units are committed to customer orders or internal processing. <strong>Unfulfillable</strong> units cannot be sold until the issue is resolved. A SKU with 900 available units and 600 inbound is in a different position from one with 900 available and no shipment in transit.</p>
<p>Sell-through adds context to the count: it shows how quickly inventory moves relative to the stock held in Amazon&#39;s fulfillment centers. A large unit balance can still be a concern if sales are slow, because units sitting in storage continue to incur costs.</p>
<p>Costs matter alongside demand. Fulfillment includes receiving, warehousing, picking, packing and preparing orders for shipment. Slow-moving stock can also occupy capacity that a faster-selling SKU needs. Reorder decisions should account for Amazon&#39;s capacity rules, storage fees and aged-inventory surcharges, not demand alone.</p>
<blockquote>
<p><strong>Two rules to buy by:</strong> judge stock against sales velocity, not unit count. Treat idle units as a cost, especially as they age or use capacity needed by faster sellers.</p>
</blockquote>
<p>The <strong>Inventory Performance Index</strong> combines signals including sell-through, excess and aged inventory, stranded inventory, and in-stock performance. Read it alongside the SKU-level inventory states: the score gives a broader view, while the buckets show where units are and whether they can fulfill demand.</p>
<h2>Using Restock Tools and Reports for Inbound Planning</h2>
<p>The Restock Inventory tool returns two outputs per SKU: a <strong>Recommended replenishment QTY</strong> and a <strong>Recommended ship date</strong>. Amazon builds both from sales history, demand forecasts, seasonality and the SKU&#39;s replenishment settings, as set out in its <a href="https://sellercentral.amazon.com/help/hub/reference/external/G201634550">Restock Inventory guide</a>.</p>
<p>Treat that output as a model, not a purchase order. It&#39;s only as accurate as the settings behind it, and the settings are where most brands are sloppy.</p>
<h3>Fix the settings before you trust the recommendation</h3>
<p>Enter the supplier lead time, case-pack quantity and replenishment frequency. To update a catalog rather than one SKU, go to <strong>Inventory</strong>, then <strong>FBA Inventory</strong>, then <strong>Restock Inventory</strong>, select <strong>Customize SKU settings</strong>, generate the <strong>Inventory product settings report</strong>, edit the downloaded text file in a spreadsheet and upload it. The lead time Amazon assumes by default is rarely the lead time you get.</p>
<h3>Replenishment limits and storage limits are different controls</h3>
<p>Replenishment limits govern how many units you can send and are calculated by storage type from historical and forecasted sales. They&#39;re independent of the Inventory Performance Index. Storage limits measure cubic-meter capacity and can draw on sales volume, seasonality, historical IPI, weeks of cover and excess inventory (<a href="https://globalselling.amazon.com/en/news/news-notices-220408?mons_sel_locale=en_US">Amazon Global Selling capacity notice</a>). A strong IPI does not buy you unlimited inbound.</p>
<p>Capacity isn&#39;t fixed either. Amazon says monthly limits are influenced by historical sales, seasonality, forecasts, scheduled deals, fulfillment-center capacity, shipment lead time, new selection and IPI, and Multi-Channel Fulfillment orders count toward the sales data behind them (<a href="https://sellercentral.amazon.com/gp/help/external/GAFNWEYTJUV2GBFC">Seller Central capacity guidance</a>). Selling more can raise your ceiling. Dead stock can lower it.</p>
<p>The working sequence is: pull the FBA Inventory report for available, reserved and unfulfillable units by SKU, then the Restock report, which lists recommended products, quantities, ship dates and whether a minimum inventory level was published for the FNSKU (<a href="https://sellercentral.amazon.com/help/hub/reference/external/G202105670">Amazon&#39;s FBA reporting documentation</a>). Validate lead time and case pack, check both limit types, then approve a quantity that holds coverage without breaching capacity.</p>
<table>
<thead>
<tr>
<th>Report or tool</th>
<th>Where to find it</th>
<th>What to check</th>
</tr>
</thead>
<tbody><tr>
<td>FBA Inventory report</td>
<td>Reports menu on the FBA Inventory page</td>
<td>Available, reserved and unfulfillable units by SKU</td>
</tr>
<tr>
<td>Restock report</td>
<td>Reports menu on the FBA Inventory page</td>
<td>Recommended quantity, ship date and whether a minimum inventory level is published</td>
</tr>
<tr>
<td>Inventory product settings report</td>
<td>Restock Inventory, then Customize SKU settings</td>
<td>Supplier lead time, case-pack size and replenishment frequency</td>
</tr>
<tr>
<td>Inventory Age report</td>
<td>Seller Central reports</td>
<td>Units by age, to catch stock nearing 181 days</td>
</tr>
<tr>
<td>Minimum Inventory Level</td>
<td>FBA Inventory page, Inventory health status and recommendation column</td>
<td>Recommended sellable units to keep before the next shipment arrives</td>
</tr>
</tbody></table>
<p>Inbound to a fulfillment center is only half the journey. The middle mile between your 3PL and Amazon&#39;s network is where most timing assumptions break, and these <a href="https://www.peaktransport.co/blog/supply-chain-planning">Peak Transport middle-mile planning tips</a> cover the handoffs worth building into your ship dates. If shipments keep getting squeezed on space rather than demand, work through <a href="https://www.onlinebrandgrowth.com/blog/amazon-fba-capacity-limits-explained/">Amazon FBA capacity limits explained</a> before you book freight.</p>
<h2>How to Calculate Your Reorder Point Step by Step</h2>
<p>Reorder point is the sellable stock level at which the next shipment must already be in motion. Miss it in one direction and you stock out. Miss it in the other and you pay storage on units nobody needed.</p>
<p>Here&#39;s the shape of the calculation before the detail.</p>
<p><img src="https://cdnimg.co/13b9acdf-56f8-4f76-98b5-6695e45942c4/5d9b35fa-ad78-40d7-85bc-cfa08bdf803a/amazon-inventory-management-reorder-point.jpg" alt="A three-step infographic explaining the process for calculating reorder points for Amazon inventory management systems."></p>
<ol>
<li><p><strong>Measure real lead time from your last three shipments.</strong> Use actual dates for supplier production, transit to the Amazon warehouse and Amazon receiving. The common slip is quoting production time and forgetting receiving, which removes five to ten days from your window.</p>
</li>
<li><p><strong>Forecast daily units per SKU and marketplace across that window.</strong> Use trailing velocity and adjust only for promotions you&#39;ve already planned. Dropping unplanned deal spikes stops one good week from doubling your buy.</p>
</li>
<li><p><strong>Multiply daily forecast by lead-time days.</strong> That gives expected demand during lead time, the amount you&#39;ll sell while the next order is in transit and being received. Nothing more belongs in this figure.</p>
</li>
<li><p><strong>Add safety stock.</strong> Roughly 7 days of cover suits steady sellers, 14 to 21 days suits volatile or seasonal SKUs, and launches with no history need more. Buffering a launch with a mature SKU&#39;s numbers is how new products arrive late and over-ordered at the same time.</p>
</li>
<li><p><strong>Add the two together.</strong> Demand during lead time plus safety stock is your reorder point. When sellable stock hits that number, the purchase order goes out that week, not when someone notices the listing looks thin.</p>
</li>
<li><p><strong>Round up to case packs, then test the shipment against both limits.</strong> Rounding up to a full case is fine. Rounding past your storage limit isn&#39;t, so compare the inbound against replenishment and storage capacity before approval.</p>
</li>
</ol>
<h3>A worked reorder point</h3>
<p>Take a SKU selling <strong>40 units a day</strong> with a <strong>35-day lead time</strong> and a <strong>14-day buffer</strong>. Demand during lead time is 1,400 units. Safety stock adds 560. The reorder point is <strong>1,960 units</strong>, and the purchase order goes out the day sellable stock touches that level rather than after a stockout email lands in your inbox.</p>
<p>Cross-check the result against the <strong>Minimum Inventory Level</strong> shown in the Inventory health status and recommendation column on the FBA Inventory page. Where your figure sits higher, the gap is usually lead-time optimism, and your number should win.</p>
<p>In our own FBA logistics work, the forecast runs by ASIN with lead-time and safety-stock buffers built in, and reorders trigger early for top products rather than at the point of scarcity. If you&#39;d rather watch the whole loop worked end to end, this walkthrough covers it.</p>
<iframe width="100%" style="aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/2kKRgtzcses" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<h2>Weekly Stock Health Checks and the Thresholds Behind Them</h2>
<p>Three checks help separate inventory that needs action now from stock that can wait.</p>
<p>Amazon defines excess FBA inventory as units with <strong>more than 90 days of supply</strong> based on forecasted demand, a threshold published in August 2024 (<a href="https://sell.amazon.com/zh/blog/inventory-to-sales-ratio">Amazon&#39;s seller blog on inventory-to-sales ratio</a>).</p>
<p>Age creates a separate cost trigger. Amazon applies an <strong>aged inventory surcharge</strong> to FBA units stored for <strong>181 days or longer</strong>. The Inventory Age report shows storage volume for available inventory. Capacity Monitor&#39;s storage-type usage includes available, unfulfillable and reserved units, less inventory pending removal or liquidation (<a href="https://sellercentral.amazon.com/gp/help/external/GTMXYZN64UJL7TT6">Amazon&#39;s aged inventory guidance</a>).</p>
<p>When Amazon does not provide a minimum inventory recommendation, plan cover from the sales forecast. Review stranded inventory and SKU settings as part of that check.</p>
<table>
<thead>
<tr>
<th>Condition</th>
<th>Threshold</th>
<th>First action</th>
</tr>
</thead>
<tbody><tr>
<td>No Amazon minimum inventory recommendation</td>
<td>Set cover from the sales forecast</td>
<td>Fix stranded inventory and update SKU settings</td>
</tr>
<tr>
<td>Excess inventory</td>
<td>More than 90 days of supply</td>
<td>Reprice, promote or pause purchasing for the SKU</td>
</tr>
<tr>
<td>Aged inventory surcharge</td>
<td>181 days or longer in the fulfillment network</td>
<td>Plan sell-through, removal or liquidation before more fees accrue</td>
</tr>
</tbody></table>
<p><img src="https://cdnimg.co/13b9acdf-56f8-4f76-98b5-6695e45942c4/2e999704-f50e-49b7-8fd5-9c58d13b90fa/amazon-inventory-management-stock-checks.jpg" alt="A checklist titled Weekly Stock Health Checks for monitoring Amazon inventory, stockout risks, and sell-through rates."></p>
<h3>The weekly loop</h3>
<ul>
<li><strong>Classify by velocity, margin, seasonality and lead time.</strong> A slow, bulky SKU and a fast, compact one consume capacity differently. Apply separate purchasing rules rather than letting both compete for the same storage allocation.</li>
<li><strong>Flag projected stockouts before the next feasible receiving date.</strong> If forecasted cover runs out before inbound stock can realistically arrive, review available options against the cost of holding more inventory and the capacity available.</li>
<li><strong>Flag excess units separately.</strong> When supply moves beyond 90 days, consider repricing, promotions or a purchasing pause before approving another inbound shipment.</li>
<li><strong>Sort by age and fee exposure.</strong> Review units approaching 181 days first. Choose a sell-through plan, removal or liquidation based on the SKU&#39;s margin and storage cost.</li>
<li><strong>Reset safety stock after reviewing forecast error.</strong> Forecast performance varies by SKU and demand pattern. Use the SKU&#39;s own history to adjust buffers, especially when a product has limited sales data.</li>
</ul>
<p>Put a dollar figure on each flagged SKU by entering its dimensions in the FBA storage fee calculator. That turns a storage concern into a cost you can weigh against the expected margin and available capacity.</p>
<p>When replenishment decisions span FBA, a 3PL and DTC orders, <a href="https://platformdtc.com/blog/what-is-an-order-management-system">order management software basics</a> explains the systems layer to consider before automating the workflow. For the report-by-report routine, <a href="https://www.onlinebrandgrowth.com/blog/amazon-seller-central-reports-to-check-weekly/">Amazon Seller Central reports to check weekly</a> maps the relevant pages.</p>
<h2>Fixing Stockouts and Overstock Without Losing Margin</h2>
<p>Every operator gets told to protect the in-stock rate. That&#39;s an incomplete target. The number that funds the business is contribution margin per SKU after storage, and availability bought with slow-moving units can cost more than the stockout it prevents.</p>
<p>Storage economics make that concrete. Amazon&#39;s unified monthly storage fee is calculated from daily average cubic-foot usage, applies at the FNSKU level, and increases for inventory stored longer than six months (<a href="https://sellercentral.amazon.com/help/hub/reference/external/GVZX6EAEL2KZ3SGA?locale=en-US">Amazon&#39;s storage fee guidance</a>). Volume is what you pay for, so a bulky low-price item can cost more to park than it earns.</p>
<p><img src="https://cdnimg.co/13b9acdf-56f8-4f76-98b5-6695e45942c4/9b29e121-f4a0-4a0a-8119-7ccb5878e6aa/amazon-inventory-management-skus-decision-matrix.jpg" alt="A warehouse worker checking off items on an Amazon SKU decision matrix clipboard in a distribution center."></p>
<table>
<thead>
<tr>
<th>Outcome</th>
<th>Choose when</th>
<th>Main cost to weigh</th>
</tr>
</thead>
<tbody><tr>
<td>Hold</td>
<td>Margin per unit covers storage and sell-through is steady</td>
<td>Monthly storage fee and the aged surcharge</td>
</tr>
<tr>
<td>Replenish</td>
<td>Lost margin from a stockout exceeds the cost of holding extra units</td>
<td>Working capital and safety stock carrying cost</td>
</tr>
<tr>
<td>Transfer</td>
<td>Storage volume is too high for FBA economics but the SKU is still profitable</td>
<td>External warehousing or multi-channel fulfillment fees</td>
</tr>
<tr>
<td>Liquidate</td>
<td>Units are aged or excess and margin will not recover</td>
<td>Removal fees, markdown and liquidation loss</td>
</tr>
<tr>
<td>Accept stockout</td>
<td>Lost margin is smaller than the storage and markdown cost of keeping units, for a short window</td>
<td>Lost sales and possible rank decline</td>
</tr>
</tbody></table>
<p>Two SKUs make the matrix real. A furniture accessory at 18% contribution margin sitting in oversize storage can hand its entire margin to fees before it sells, so holding it is a slow loss. A compact high-margin SKU with the same demand volatility can carry three weeks of safety stock profitably, because its storage cost is a rounding error against the margin it protects.</p>
<h3>Where the stock sits matters as much as how much</h3>
<p>Alternatives to FBA space exist and each has a condition. <strong>Amazon Warehousing and Distribution</strong> suits bulk inventory that needs cheap upstream storage with automatic replenishment into fulfillment centers. External warehousing works when cubic volume is the binding constraint and you can replenish in smaller, more frequent sends. Multi-channel fulfillment earns its place when the same stock has to serve non-Amazon orders without a second buy.</p>
<p>Run the hold-versus-liquidate comparison through the Amazon profit calculator before committing units to a promotion or a removal. Put the removal fee and the expected markdown per unit into every scenario, because those two numbers set the break-even point.</p>
<blockquote>
<p>A deliberate stockout is a legitimate decision when it&#39;s short, planned and cheaper than the storage and markdown cost of keeping the units.</p>
</blockquote>
<p>The trade-off is real in both directions. Inventory turnover is the metric that tells you whether you&#39;re funding growth or warehousing it, and <a href="https://www.onlinebrandgrowth.com/blog/inventory-turnover-ratio-explained/">inventory turnover ratio explained</a> covers how to read it against margin by SKU.</p>
<h2>Confirm Your Reorder Dates Before the Next Inbound Window</h2>
<p>Before the next inbound window, check that your reorder dates account for both demand and Amazon&#39;s capacity and storage constraints. Work through these five actions this week:</p>
<ol>
<li><strong>Rank your ten most important SKUs</strong> by sales or storage exposure using the FBA Inventory report. Prioritize the products where a stockout or excess inventory would have the greatest impact.</li>
<li><strong>Recalculate each reorder point</strong> using measured lead times from your last three shipments rather than quoted timelines.</li>
<li><strong>Compare your calculation with the Restock report row</strong> and the published minimum inventory level for each FNSKU. Investigate any gap larger than one case pack.</li>
<li><strong>Set a plan for flagged SKUs before approving more units.</strong> If a product is past the 90-day supply line or approaching the aged-inventory surcharge, weigh its storage costs against expected sales before sending more stock.</li>
<li><strong>Lock peak purchase orders before the inbound window closes.</strong> Amazon communicates capacity ahead of each allocation period, so order timing needs to account for available space as well as supplier lead time.</li>
</ol>
<p>Shipment creation, labeling, and inbound management belong in the same planning workflow. When one owner can see the forecast alongside freight coordination, reorder timing can reflect both demand and inbound constraints.</p>
<p>Online Brand Growth manages FBA inventory planning and replenishment as part of its Amazon channel services, including demand forecasting by ASIN and inbound management. Its team works through planning, Seller Central workflows, and coordination with a brand&#39;s 3PL and freight partners; it does not physically handle client inventory. Contact Online Brand Growth to discuss how its FBA planning team can assess reorder points and an inbound plan against your reports.</p>
`,
}

export default post
