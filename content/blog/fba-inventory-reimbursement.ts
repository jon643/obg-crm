import type { BlogPost } from '@/lib/blog'

// Auto-generated from Outrank webhook (article id: 9319cee7-182c-4398-8b5e-1f6c674fc0a3).
// Do not hand-edit; re-publish in Outrank to update.

const post: BlogPost = {
  title: `FBA Inventory Reimbursement: Deadlines and How to Claim`,
  description: `Learn FBA inventory reimbursement rules, claim deadlines, valuation basics and a step-by-step filing process to recover lost and damaged stock on Amazon.`,
  publishDate: '2026-11-18',
  htmlContent: `<p>A credit that lands in your payments report can still be the wrong amount. In 2024, Amazon&#39;s FBA reimbursement pilot covered <strong>6,204</strong> eligible lost-inventory items valued at <strong>$110,372.46</strong>, according to <a href="https://www.threecolts.com/blog/amazons-fba-reimbursements-pilot-data/">Threecolts&#39; analysis of 152 sellers</a>. Finding the units was only half the job. After the shift to sourcing-cost valuation, <strong>FBA inventory reimbursement</strong> is a check on whether Amazon&#39;s figure matches what you paid to make or buy the unit.</p>
<p>I would not book a reimbursement as recovered margin until the case type, the unit count, and the cost file agree. A fast credit on the wrong basis is a quiet margin leak.</p>
<h2>Reimbursement Deadlines and Payouts at a Glance</h2>
<p>Every claim lives or dies on its clock and its valuation basis. Treat the rows below as the working map, then confirm any cell that Seller Central still leaves to the live Reimbursements page.</p>
<table>
<thead>
<tr>
<th>Case</th>
<th>Trigger</th>
<th>Filing window</th>
<th>Valuation basis</th>
</tr>
</thead>
<tbody><tr>
<td>Warehouse loss or damage at a fulfillment center</td>
<td>Amazon reports the event in Inventory Ledger or Inventory Defect and Reimbursement</td>
<td>Within 60 days of the report</td>
<td>Sourcing cost for pre-fulfillment losses since March 31, 2025</td>
</tr>
<tr>
<td>Customer return not sent back after refund</td>
<td>Refund or replacement date</td>
<td>45 to 105 days after the refund or replacement, confirm the live closing date on the Reimbursements page</td>
<td>Original selling price less applicable fees</td>
</tr>
<tr>
<td>Lost removal shipment</td>
<td>Last confirmed movement</td>
<td>Wait at least 15 days after the last movement, file within 75 days of shipment creation</td>
<td>Not stated for removals, confirm on the Reimbursements page</td>
</tr>
<tr>
<td>Damaged removal shipment</td>
<td>Delivery date</td>
<td>Within 60 days of delivery</td>
<td>Not stated for removals, confirm on the Reimbursements page</td>
</tr>
<tr>
<td>Inbound shipment missing units</td>
<td>Shipment delivery</td>
<td>Defined post-delivery window, confirm in Seller Central</td>
<td>Not stated for inbound shortages, confirm on the Reimbursements page</td>
</tr>
<tr>
<td>Warehouse adjustment</td>
<td>Inventory adjustment date</td>
<td>Tied to the adjustment date, confirm in Seller Central</td>
<td>Sourcing cost where the pre-fulfillment policy applies</td>
</tr>
</tbody></table>
<p>Three rows cause frequent confusion. Warehouse losses look automatic, yet you still verify the event in the <strong>Inventory Ledger</strong> or the <strong>Inventory Defect and Reimbursement</strong> report and file inside <strong>60 days</strong> of Amazon&#39;s report date. Customer returns are not the same case. <a href="https://sellercentral.amazon.com/help/hub/reference/external/200213130?locale=en-US">Amazon Seller Central</a> still calculates those from the original order&#39;s selling price, less applicable fees, and it tells you to separate warehouse, inbound, removal, customer-return, and post-order events.</p>
<p>The return window is the one I would not memorize from an old screenshot. <a href="https://sellercentral.amazon.com/help/hub/reference/external/GQHQGBTD7XB7EECN?locale=en-GB">Amazon&#39;s 2025 reimbursement update</a> cites a <strong>45 to 105 day</strong> window after the refund or replacement, and the same update sets pre-fulfillment reimbursement at <strong>sourcing cost</strong> from <strong>March 31, 2025</strong>, excluding shipping, handling, and customs duties. Removal and inbound valuation is not pinned down the same way, so mark those cells unconfirmed until you read the live page.</p>
<blockquote>
<p><strong>Practical rule:</strong> Pull the last 60 days of loss events this week and highlight every deadline that falls in the next two weeks. A monthly close is already late for a 60 day warehouse clock.</p>
</blockquote>
<h2>Customer Returns and Valuation Disputes Explained</h2>
<p>A received payment is not proof the payment is right. Since the pre-fulfillment change, Amazon&#39;s standard amount is <strong>sourcing cost</strong>: what you paid a manufacturer, wholesaler, or reseller, or what it cost you to produce the item if you manufacture it. Freight, handling, and duties stay out. If that field is blank, Amazon estimates, and the estimate is often the number you should challenge.</p>
<h3>What belongs in the cost file</h3>
<p>Build the file before a unit goes missing.</p>
<ul>
<li><strong>Supplier invoices:</strong> Unit cost, supplier name, SKU or FNSKU, and the date the cost was in force.</li>
<li><strong>Landed-cost split:</strong> A line that pulls freight and duties out, so you don&#39;t submit a blended cost Amazon will reject.</li>
<li><strong>Currency and date history:</strong> The conversion rate and the cost that applied on the loss date when the buy price moves.</li>
<li><strong>Hard SKUs:</strong> Several suppliers on one private-label item, a bundle, an internal transfer price, or a bill of materials. Pick one documented method and keep it stable.</li>
</ul>
<p>Customer-return credits follow the order, not that cost file. Match each credit to the refund date and the replacement date, then compare the net to the original selling price less fees. The fee stack on <a href="https://www.onlinebrandgrowth.com/blog/amazon-fba-fees">Amazon FBA fees</a> is what I check before I accept that net.</p>
<p><a href="https://sellercentral.amazon.com/gp/help/external/G200213130">Amazon Seller Central</a> caps reimbursement for a single FBA-eligible unit at <strong>$5,000</strong>. On a high-value SKU, a bad estimate is not a rounding error.</p>
<h3>A ten unit shortfall</h3>
<p>Say ten units have a documented sourcing cost of $42 and Amazon pays $38 each. That&#39;s $40 left on the table. Attach the invoices and dispute the valuation. Don&#39;t quote a fixed dispute deadline from memory. Confirm the live window on the Reimbursements page before you file, and run this cost check before the original claim so the file is ready on day one.</p>
<blockquote>
<p>If the invoice, the exclusion of freight, and the payment don&#39;t match, the credit is a draft, not a close.</p>
</blockquote>
<h2>Confirm Eligibility and File a Warehouse Loss Claim</h2>
<p>Amazon reviews eligibility before it reviews your story. Work the gate in that order, because a clean narrative on a failed condition still dies.</p>
<p><img src="https://cdnimg.co/13b9acdf-56f8-4f76-98b5-6695e45942c4/ce70348e-5f86-4e82-a030-2551be160f11/fba-inventory-reimbursement-warehouse-claim.jpg" alt="A checklist infographic outlining the five steps to confirm eligibility and file an Amazon FBA warehouse loss claim."></p>
<ol>
<li>Confirm the units were registered in FBA when the loss or damage happened, because Amazon only covers inventory it had in the program.</li>
<li>Confirm the SKU met FBA product and inventory requirements, including labeling and prep. Carton and unit prep is where a lot of &quot;damage&quot; claims start, and the <a href="https://www.packagingpanda.co.uk/blog/amazon-fba-packaging">Amazon FBA packaging requirements UK</a> notes from Packaging Panda are a useful check against your own pack-out.</li>
<li>Match quantities and products to the shipping plan, so you don&#39;t claim units the inbound record never showed.</li>
<li>Confirm the units were not pending disposal and were not disposed of at your request.</li>
<li>Check Account Health for normal status. A non-normal account can block the claim while it is filed, reviewed, or appealed.</li>
<li>Open the <strong>Inventory Ledger</strong>, filter by adjustment reason, and find the lost or damaged rows.</li>
<li>Cross-check each event in <strong>Inventory Defect and Reimbursement</strong>. Record FNSKU, quantity, fulfillment center, event date, and disposition.</li>
<li>Confirm sourcing cost is on file. Without it, Amazon applies its own estimate.</li>
<li>Submit before the deadline with proof of shipment, delivery, invoice cost, and condition where the case asks for it. Log the reimbursement ID on the same row and watch the ledger until the unit shows resolved.</li>
</ol>
<p><a href="https://sellercentral.amazon.com/gp/help/external/GGEV4254LJJ9BAEG">Seller Central guidance on fulfillment-center loss</a> sets that claim deadline at <strong>60 days</strong> after Amazon reports the loss or damage in the Inventory Defect and Reimbursement portal or the Inventory Ledger. A claim after that window is not eligible. The policy also requires the item to have been in FBA, to have met product and inventory requirements, to have matched the shipping plan, and not to have been disposed of at your request.</p>
<p>Coverage sits on losses inside fulfillment centers, on Amazon-operated or Amazon-contracted carriers, in storage, and on delivery to the buyer. The slips I see most are waiting for month-end, filing with no invoice, and noticing the event on day 61.</p>
<h2>Customer Return Timing and Unsellable Returns</h2>
<p>Returns run on a different clock from warehouse losses, so they need their own rows in the ledger. When Amazon refunds a buyer, it waits up to <strong>60 days</strong> for the item to reach a fulfillment center, per <a href="https://sellercentral.amazon.com/gp/help/external/G9N934L7Y4SFWPJ4">Seller Central&#39;s customer-return reimbursement rules</a>.</p>
<p><strong>Sellable return:</strong> Amazon restocks the unit and does not reimburse you. Filing this as a loss creates a denial and wastes the case.</p>
<p><strong>Unsellable, and Amazon is responsible:</strong> Amazon reimburses you and does not add the unit back. Check condition notes so a buyer-caused return doesn&#39;t get filed as Amazon damage.</p>
<p><strong>Nothing back within 60 days:</strong> Amazon charges the customer and, in most cases, reimburses you. Don&#39;t open a seller-initiated claim on day one.</p>
<p>Record the refund date and the replacement date on every order, then calendar the day the window opens. Confirm the closing date on the Reimbursements page before you rely on a saved note, because published updates and older help pages don&#39;t always match. Use the Inventory Ledger to see whether the unit was restocked. A sellable return is inventory, not a claim. How those returns interact with your own stated policy is covered in <a href="https://www.onlinebrandgrowth.com/blog/amazons-return-policy">Amazon&#39;s return policy</a>.</p>
<h2>When a Claim Is Denied or Stalls</h2>
<p>Denials are a queue, not a write-off. Open the case thread and name the failed condition: registration date, shipping-plan match, a disposal you requested, or a product-requirement miss.</p>
<p>Check Account Health before you argue the facts. A non-normal status can stall a valid loss through filing, review, and appeal.</p>
<p>If the gap is a document, reply in the same case. A missing invoice or a unit count that doesn&#39;t match the shipping plan is fixed with the file, not with a second ticket. Refiling the same units as a new claim, with no new evidence, usually burns the thread.</p>
<p>When the denial fights your ledger, answer in that case with the Inventory Ledger rows, the Inventory Defect and Reimbursement entry, and the invoice. Then log the outcome by SKU and fulfillment center. A lane that denies the same way twice is usually a prep or paperwork gap, not a one-off agent. Anything filed after the warehouse window has closed is not eligible, so a late appeal can&#39;t revive it.</p>
<h2>Run the Backfill Sweep and Daily Exception Ledger</h2>
<p>Memory is a bad control. One sweep this week, then a daily exception ledger, is the system that holds the clocks.</p>
<p><img src="https://cdnimg.co/13b9acdf-56f8-4f76-98b5-6695e45942c4/8fb66cd9-2047-4664-9ea2-875e10cd8d0b/fba-inventory-reimbursement-financial-report.jpg" alt="A laptop displaying financial records on a table in a warehouse alongside a coffee mug and report."></p>
<h3>The one week sweep</h3>
<p>Export the Inventory Ledger and the Reimbursements report for the last 60 days. Sort by event date and stamp each row with the filing deadline from your case table. Match events to credits and list the unmatched units. File every case still inside its window, with invoices attached. Dispute any payout below the documented sourcing cost, after you confirm the dispute close on the Reimbursements page.</p>
<p><a href="https://sellercentral.amazon.com/help/hub/reference/external/9ZB3H4DP4H72U6R">Seller Central&#39;s reimbursement guidance</a> is why the ledger beats a periodic review: fulfillment-center claims generally must be in within <strong>60 days</strong> of the report, lost removals wait at least <strong>15 days</strong> after the last confirmed movement and must be filed within <strong>75 days</strong> of shipment creation, and damaged-removal claims generally must be filed within <strong>60 days</strong> of delivery. Inbound shortages use a defined post-delivery window, and warehouse-loss claims tie to the adjustment date.</p>
<h3>Daily ledger cadence</h3>
<p>Ingest shipment IDs, FNSKUs, quantities, adjustment dates, tracking events, and reimbursement IDs into one sheet. Flag the eligibility start, calculate the final deadline, and alert at 14 days and 3 days out. Run fulfillment-center adjustments and removals daily, customer returns weekly, and valuation monthly. Track filed, approved, denied, paid, and recovered dollars by SKU.</p>
<p>Proactive reimbursement, which <a href="https://sellercentral.amazon.com/seller-forums/discussions/t/d0fc997e-de50-4100-9803-76b7993b66df?mons_sel_locale=pt_BR">Amazon&#39;s seller update</a> dates to <strong>January 15, 2025</strong>, pays many warehouse losses without a ticket. Removals and missed events stay manual, so reconcile every payout to unit counts. We only file legitimate, well-documented claims through Amazon&#39;s standard processes, and we never use automated mass-filing. The same recovery work covers lost and damaged inventory, overcharged FBA fees, and customer-return or refund discrepancies.</p>
<p>Pair the unrecovered units with contribution margin. The Amazon profit calculator shows how a short credit shrinks margin per unit, the FBA storage fee calculator shows what unsellable units still cost you to hold, and the sales rank checker tells you which SKUs are worth the dispute time. Inventory discipline around those same units is the point of <a href="https://www.onlinebrandgrowth.com/blog/amazon-inventory-management">Amazon inventory management</a>. If your team can&#39;t run the sweep and the ledger in-house, book a free strategy call at /#book-call. When the brand is a fit, that call includes the complimentary OBG360 Amazon Account Audit.</p>
<hr>
<p>Online Brand Growth audits FBA inventory, fee, and return records, then files documented reimbursement claims and tracks them to resolution, with ongoing monitoring so the next discrepancy doesn&#39;t wait for a quarterly cleanup. If unauthorized sellers are also cutting your price, our 360 Brand Protection program covers unauthorized seller removal and MAP enforcement alongside that operations work. Book a free strategy call with <a href="https://onlinebrandgrowth.com">Online Brand Growth</a> and we&#39;ll tell you which open units are still inside a live window.</p>
`,
}

export default post
