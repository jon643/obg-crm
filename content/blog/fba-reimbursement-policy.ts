import type { BlogPost } from '@/lib/blog'

// Auto-generated from Outrank webhook (article id: 3dd1c188-0c78-403e-a5f0-ee6a1ba8be11).
// Do not hand-edit; re-publish in Outrank to update.

const post: BlogPost = {
  title: `FBA Reimbursement Policy: How to Claim Lost Inventory`,
  description: `Learn how the fba reimbursement policy works, which claims qualify, filing deadlines, the documents that win, and how to recover lost stock.`,
  publishDate: '2026-11-23',
  htmlContent: `<p>“Find missing units and file a claim” is incomplete advice. Under the <strong>FBA reimbursement policy</strong>, identifying a shortage doesn&#39;t establish eligibility, prove ownership, or preserve your filing window. A perfectly real loss can remain unpaid because the shipment paperwork doesn&#39;t reconcile or the wrong event date starts your deadline.</p>
<p>Treat reimbursement as a <strong>documentation and deadline control process</strong>. Your team needs to connect shipment records, Inventory Ledger events, refunds, case IDs, and actual credits, not just produce a list of negative inventory adjustments.</p>
<h2>What the Policy Covers and Excludes</h2>
<p>Start with a short eligibility check: <strong>Was the SKU registered in FBA when the loss occurred? Did the shipping plan match the items and quantities shipped? Was the product compliant with FBA requirements? Is the selling account in normal status?</strong> These questions determine whether you have a claim worth investigating.</p>
<p><a href="https://sellercentral.amazon.com/gp/help/external/200213130">Amazon&#39;s FBA inventory reimbursement policy</a> allows replacement units or monetary reimbursement for eligible inventory lost or damaged at an Amazon fulfillment center, or by a carrier operated by or on behalf of Amazon. Its conditions include FBA registration, product and inventory compliance, exact shipment-plan quantities, no seller-requested disposal, and normal account status during filing and review.</p>
<p>That isn&#39;t a blanket promise to pay whenever your stock count falls. It works like insurance: the coverage conditions matter before the loss, not just when you submit paperwork.</p>
<h3>Separate an eligible loss from an inventory problem</h3>
<p>The same policy excludes <strong>defective products and customer-damaged items</strong>. Don&#39;t group every unsellable unit into a warehouse-damage claim because Amazon holds the inventory.</p>
<p>Consider a manufacturer shipping a multipack. If the shipment plan identifies individual units but the cartons contain bundled packs, your receiving discrepancy may involve a shipment-definition problem rather than a straightforward missing-unit claim. Resolve the unit-of-measure mismatch before calculating a reimbursement request.</p>
<p>Use these distinctions when triaging exceptions:</p>
<ul>
<li><strong>Amazon handling loss:</strong> Investigate the fulfillment-center event and whether Amazon already replaced or reimbursed the unit.</li>
<li><strong>Product defect:</strong> Route the issue to quality control rather than assuming warehouse responsibility.</li>
<li><strong>Customer damage:</strong> Review the return disposition without relabeling it as fulfillment-center damage.</li>
<li><strong>Requested disposal:</strong> Retain the disposal instruction so your team doesn&#39;t later claim inventory it deliberately removed from circulation.</li>
</ul>
<h3>Account health belongs in the workflow</h3>
<p>Don&#39;t assign reimbursement ownership entirely to finance while another team manages account health. A suspended account can stall an otherwise valid claim because normal account status remains an eligibility condition during review.</p>
<blockquote>
<p><strong>Practical rule:</strong> Establish eligibility before estimating recovery. A missing unit isn&#39;t automatically a receivable.</p>
</blockquote>
<p>Your operations team should maintain shipment accuracy, your compliance owner should preserve product records, and your finance team should verify credits. <strong>Reimbursement is an operational-control issue</strong>, because the records and account conditions already in place determine what you can substantiate.</p>
<h2>Claim Windows for Every FBA Loss Type</h2>
<table>
<thead>
<tr>
<th>Claim type</th>
<th>Filing window</th>
<th>Clock starts at</th>
<th>Identifier to keep</th>
</tr>
</thead>
<tbody><tr>
<td>Missing units on an inbound shipment</td>
<td>15 to 60 days</td>
<td>Shipment delivery date</td>
<td>Shipment ID and FNSKU</td>
</tr>
<tr>
<td>Inbound shipment outer limit</td>
<td>Up to nine months under the applicable policy pathway</td>
<td>Verified delivery date</td>
<td>Shipment ID and carrier proof of delivery</td>
</tr>
<tr>
<td>Damaged or misplaced inventory in a fulfillment center</td>
<td>60 days</td>
<td>Inventory Ledger event</td>
<td>Transaction item ID and adjustment date</td>
</tr>
<tr>
<td>Customer return not received</td>
<td>60 to 120 days under the customer-return policy discussed below</td>
<td>Customer refund or replacement date</td>
<td>Order ID, FNSKU and refund date</td>
</tr>
<tr>
<td>Removal shipment lost in transit</td>
<td>15 to 75 days</td>
<td>Removal shipment creation date</td>
<td>Removal order ID</td>
</tr>
<tr>
<td>Other removal-related losses</td>
<td>60 days</td>
<td>Delivery back to seller</td>
<td>Removal order ID and delivery date</td>
</tr>
<tr>
<td>Valuation dispute</td>
<td>60 days</td>
<td>Reimbursement issued by Amazon</td>
<td>Reimbursement case ID</td>
</tr>
</tbody></table>
<p><strong>FBA reimbursement filing windows by claim type.</strong> A missed filing window can make an otherwise eligible loss unrecoverable.</p>
<p><a href="https://sellercentral.amazon.ae/gp/help/external/GVTRADRKAA3XXUJ3">Amazon&#39;s reimbursement-window guidance</a> states the inbound, fulfillment-center, and removal deadlines shown in the table, but specifies <strong>45 to 105 days</strong> for customer returns, rather than the separate customer-return policy&#39;s window. These aren&#39;t interchangeable schedules, so confirm the policy displayed for your marketplace and claim workflow before configuring alerts.</p>
<p><a href="https://sellercentral.amazon.com/help/hub/reference/external/GEYPWTSQRTXXXMVB?locale=en-US">Amazon&#39;s shipment-claim policy summary</a> also describes a <strong>nine-month outer limit</strong> after verified delivery under an applicable shipment-to-Amazon pathway. Don&#39;t interpret that outer limit as permission to ignore a shorter filing deadline.</p>
<h3>Store the event date, not just the discovery date</h3>
<p>For inbound shortages, preserve delivery confirmation alongside the shipment ID. For fulfillment-center damage, capture the Inventory Ledger event and transaction item ID. Neither deadline should start when someone finally notices the discrepancy in a spreadsheet.</p>
<p>Removal claims need a separate distinction: shipment creation starts the lost-in-transit clock, while delivery back to your business starts the clock for other removal-related losses. Putting both into a generic “removal date” field invites mistakes.</p>
<p>Your exception register should contain:</p>
<ul>
<li><strong>Applicable policy:</strong> Marketplace, claim category, and the help page your operator checked.</li>
<li><strong>Opening and closing dates:</strong> When filing becomes permissible and when eligibility expires.</li>
<li><strong>Evidence status:</strong> What&#39;s missing and who must supply it.</li>
<li><strong>Claim status:</strong> Unfiled, submitted, under review, reimbursed, or disputed.</li>
</ul>
<p>Set alerts against the <strong>shortest applicable deadline</strong>, with enough time to obtain missing documents. Monthly reconciliation is useful, but a monthly meeting isn&#39;t a substitute for deadline-driven action.</p>
<h2>Documentation That Wins Reimbursement Claims</h2>
<p>A supplier invoice is the straightforward case. It helps establish ownership and quantities, while shipment records connect those goods to the inventory Amazon received or failed to receive.</p>
<p><a href="https://sellercentral.amazon.com/help/hub/reference/external/G200213130">Amazon&#39;s inventory reimbursement documentation policy</a> recognizes supplier invoices, receipts, manufacturer packing slips, and carrier proof of delivery, including box counts and weight where relevant. For manufacturers, it specifically recognizes a <strong>signed packing slip</strong>, which matters when no conventional supplier invoice exists.</p>
<p>Keep the ownership and shipment records together before a discrepancy appears.</p>
<p><img src="https://cdnimg.co/13b9acdf-56f8-4f76-98b5-6695e45942c4/a9e22f52-b4a7-4f2d-a2aa-df9725645031/fba-reimbursement-policy-documentation-checklist.jpg" alt="A list of four essential documents required for winning Amazon inventory reimbursement claims for lost items."></p>
<h3>Build an evidence trail that matches the shipment</h3>
<p>A signed manufacturer packing slip should identify the shipping entity, shipment reference, product identifiers, quantities, and the person signing it. Reconcile those fields against the actual shipment plan rather than preparing a generic document after the shortage appears.</p>
<p>For in-house production, preserve bills of materials and production records. For imported or intercompany inventory, connect freight paperwork, customs records, and transfer records to the same shipment. These are supporting audit records, not a promise that every document substitutes for Amazon&#39;s requested ownership evidence.</p>
<p><strong>Evidence to keep by loss event</strong></p>
<table>
<thead>
<tr>
<th>Loss event</th>
<th>Evidence to keep</th>
<th>Identifier to tie it to</th>
</tr>
</thead>
<tbody><tr>
<td>Inbound shipment shortage</td>
<td>Supplier invoice, receipt, signed packing slip, carrier proof of delivery with box count and weight</td>
<td>Shipment ID and FNSKU</td>
</tr>
<tr>
<td>Fulfillment-center damage or misplaced stock</td>
<td>Shipment record, product compliance proof, proof of ownership</td>
<td>Transaction item ID and inventory adjustment date</td>
</tr>
<tr>
<td>Customer return not received</td>
<td>Order or customer-return record, refund or replacement date, missing return status</td>
<td>Order ID and FNSKU</td>
</tr>
<tr>
<td>Removal shipment loss</td>
<td>Removal order record and carrier delivery proof</td>
<td>Removal order ID</td>
</tr>
</tbody></table>
<p>Add <strong>seller type and marketplace</strong> to that matrix in your working file:</p>
<table>
<thead>
<tr>
<th>Seller type</th>
<th>Inbound shortage</th>
<th>Fulfillment-center damage</th>
<th>Removal loss</th>
<th>Marketplace control</th>
</tr>
</thead>
<tbody><tr>
<td>Brand purchasing finished goods</td>
<td>Invoice and shipment match</td>
<td>Ownership and adjustment record</td>
<td>Removal record and delivery evidence</td>
<td>Retain the local policy requirements</td>
</tr>
<tr>
<td>Manufacturer</td>
<td>Signed packing slip and production trail</td>
<td>Production ownership and event record</td>
<td>Removal record linked to manufactured goods</td>
<td>Check accepted manufacturer documentation</td>
</tr>
<tr>
<td>Importer</td>
<td>Purchase evidence plus freight and customs trail</td>
<td>Ownership chain and event record</td>
<td>Removal and carrier records</td>
<td>Keep destination-market records together</td>
</tr>
</tbody></table>
<h3>Preserve records before you need them</h3>
<ol>
<li><strong>Store the signed packing slip</strong> against each shipment ID.</li>
<li><strong>Keep carrier delivery proof</strong> with box count and weight.</li>
<li><strong>File the bill of materials</strong> against each relevant FNSKU for manufactured goods.</li>
<li><strong>Archive freight and customs paperwork</strong> per shipment.</li>
<li><strong>Link intercompany transfers</strong> to the shipment plan.</li>
</ol>
<p>We file only legitimate, well-documented claims through Amazon&#39;s standard processes, and never use automated mass-filing. Weak or padded paperwork creates rejection risk, not stronger evidence.</p>
<p>Design inventory documentation as an <strong>audit trail</strong>. The useful records are the ones your team already holds when the discrepancy occurs.</p>
<h2>How to File a Claim in Seller Central</h2>
<p>A claim should let the reviewer identify the event, verify the quantity, and inspect the supporting documents without reconstructing your operation. Keep the explanation short and the attachments complete.</p>
<h3>Submit a reviewable case</h3>
<ol>
<li><p><strong>Confirm the claim category and open window.</strong> Classify the discrepancy as inbound, fulfillment-center, customer-return, removal, or valuation-related. Check the live Seller Central policy for that marketplace before proceeding.</p>
</li>
<li><p>Review eligibility against the original event. Confirm FBA registration, shipment-plan accuracy, product compliance, and normal account status. Don&#39;t let a valid-looking ledger adjustment bypass this check.</p>
</li>
<li><p><strong>Assemble the evidence package.</strong> Use ownership and delivery documents for inbound shortages, or order and refund records for customer-return discrepancies. Give files descriptive names so the reviewer can distinguish the invoice from the packing slip.</p>
</li>
<li><p>Open the relevant shipment investigation or support workflow in <strong>Seller Central</strong>. Select the loss type involved, then identify the shipment ID, FNSKU, transaction item ID, or order ID, together with the disputed quantity and supported reimbursement expectation.</p>
</li>
<li><p><strong>Attach the complete evidence set.</strong> Explain any entity-name or product-code mismatch directly. If your factory&#39;s item code differs from the FNSKU, include a clear mapping rather than expecting the reviewer to infer it.</p>
</li>
<li><p>Record the <strong>case ID, submission date, attachments, and next follow-up</strong>. Assign an owner who will respond to requests for additional information and verify the outcome.</p>
</li>
</ol>
<h3>Keep fee disputes separate from inventory losses</h3>
<p>If the discrepancy is an overcharged FBA fee, use the fee-dispute workflow rather than describing it as a missing unit. Cite the original order&#39;s fee line and identify the charge you&#39;re challenging.</p>
<p>Your underlying report routine matters here. Build the case file from the <a href="https://www.onlinebrandgrowth.com/blog/amazon-seller-central-reports-to-check-weekly/">Seller Central reports to check weekly</a>, so the operator filing the claim works from the same records finance uses.</p>
<blockquote>
<p>A concise claim with matching identifiers is more useful than a long explanation with unresolved quantity differences.</p>
</blockquote>
<p>Keep account-health monitoring active throughout review. Filing the case doesn&#39;t remove the need to maintain the account conditions that support eligibility.</p>
<h2>Customer Return Claims and the 60-Day Wait</h2>
<p>Don&#39;t claim every refund immediately. A refund records a financial event, not proof that Amazon has lost the associated unit.</p>
<p><a href="https://sellercentral.amazon.com/help/hub/reference/external/G9N934L7Y4SFWPJ4">Amazon&#39;s customer-return reimbursement policy</a> states that claims must be submitted <strong>no sooner than 60 days and no later than 120 days</strong> after the customer refund or replacement date. Use that schedule only where this policy applies, and verify the live marketplace workflow before filing.</p>
<p>The delay gives the customer time to send the product back and Amazon time to process it. Your operator needs to distinguish a unit that&#39;s received, damaged, still moving through returns, or not returned at all.</p>
<h3>A worked month of return exceptions</h3>
<p>Consider a hypothetical month with <strong>200 refunded units</strong>. Your team matches <strong>170</strong> to returned-unit activity in the Inventory Ledger, leaving <strong>30</strong> without a corresponding return status.</p>
<p>Of those unmatched units, suppose <strong>12</strong> have passed the waiting period and remain within the applicable filing window. The other <strong>18</strong> are too recent to claim. These are illustrative quantities, not a recovery benchmark.</p>
<table>
<thead>
<tr>
<th>Illustrative group</th>
<th>Operator action</th>
</tr>
</thead>
<tbody><tr>
<td>Refunded units matched to received returns</td>
<td>Close the missing-return exception, then inspect disposition separately if needed</td>
</tr>
<tr>
<td>Unmatched refunds eligible for filing</td>
<td>Check for existing credits and assemble the claim</td>
</tr>
<tr>
<td>Unmatched refunds still in the waiting period</td>
<td>Keep monitoring without filing prematurely</td>
</tr>
</tbody></table>
<p>A returned unit doesn&#39;t have to become sellable stock to count as received. Don&#39;t confuse a damaged return disposition with proof that the return never arrived.</p>
<h3>Build a focused exception report</h3>
<p>Keep these fields together:</p>
<ul>
<li><strong>Order evidence:</strong> Order ID or customer-return record.</li>
<li><strong>Product identity:</strong> ASIN or FNSKU.</li>
<li><strong>Financial trigger:</strong> Refund or replacement date.</li>
<li><strong>Return evidence:</strong> Missing return status, matched receipt activity, and any reimbursement already posted.</li>
<li><strong>Deadline priority:</strong> Time remaining before the applicable filing window closes.</li>
</ul>
<p>Reconcile recent refunds for visibility, but keep them out of the claim-ready queue until eligible. Sort that queue by the nearest closing date, not by refund value alone.</p>
<p>Your team should also understand <a href="https://www.onlinebrandgrowth.com/blog/amazons-return-policy/">Amazon&#39;s return policy</a>, because return eligibility, refund processing, and seller reimbursement are different operational questions. A buyer receiving a refund doesn&#39;t, by itself, establish a reimbursement entitlement for your brand.</p>
<h2>Why Reimbursement Credits Fall Short of Sale Price</h2>
<p><strong>A reimbursement isn&#39;t automatically a full-price sale.</strong> Don&#39;t forecast recovery by multiplying missing units by your current listing price.</p>
<p><a href="https://sellercentral.amazon.com.br/help/hub/reference/external/G200213130">Amazon&#39;s Brazil reimbursement policy</a> describes a calculation of product value minus applicable selling and FBA fees, with a maximum of <strong>R$19,250 per item</strong>. That example is marketplace-specific, not a global valuation rule or a guarantee that every loss category uses the same basis.</p>
<p><strong>What each reimbursement credit is built from</strong></p>
<table>
<thead>
<tr>
<th>Component</th>
<th>Where to verify it</th>
<th>What to compare it against</th>
</tr>
</thead>
<tbody><tr>
<td>Product value used in the calculation</td>
<td>Case record and product-value evidence</td>
<td>Historical sale price or documented cost</td>
</tr>
<tr>
<td>Selling fees deducted</td>
<td>Original order fee detail</td>
<td>Referral fee on the same SKU and order</td>
</tr>
<tr>
<td>FBA fees deducted</td>
<td>Original order fee detail</td>
<td>Fulfillment fee for the same size tier and marketplace</td>
</tr>
<tr>
<td>Marketplace per-item maximum</td>
<td>Amazon policy for the loss marketplace</td>
<td>Brazil example above; elsewhere, the applicable local policy cap</td>
</tr>
<tr>
<td>Net credit posted</td>
<td>Reimbursements report and Payments transaction view</td>
<td>Expected credit calculated from the applicable lines above</td>
</tr>
</tbody></table>
<h3>Reconstruct the credit before disputing it</h3>
<p>Start with the valuation basis Amazon applied. Compare it with the evidence relevant to that loss type, rather than assuming historical sale price always controls.</p>
<p>Next, inspect selling-fee and fulfillment-fee deductions where applicable. If a warehouse loss has no original customer order, don&#39;t manufacture an order-level comparison. Use the calculation and supporting records applicable to that inventory event.</p>
<p>Export reimbursement transactions by SKU and marketplace, then add the valuation basis, relevant fees, quantity, and expected net credit. A single blended recovery figure can conceal an underpayment on one SKU behind a correct payment on another.</p>
<h3>Challenge the disputed component</h3>
<p>If the amount looks low, identify the specific issue: unsupported product value, incorrect quantity, questionable deduction, or an incorrectly applied marketplace limit. Submit evidence addressing that issue rather than asking Amazon to pay the retail price without explaining why.</p>
<p>Log the valuation-review deadline when the reimbursement is issued. Don&#39;t assume an open support conversation preserves your ability to challenge the amount.</p>
<blockquote>
<p><strong>Finance check:</strong> Report the net reimbursement against contribution margin, not as the equivalent of a new customer sale.</p>
</blockquote>
<p>Model that distinction with Online Brand Growth&#39;s free Amazon profit calculator, and use the FBA storage fee calculator when assessing the broader cost of holding or removing inventory. Keep demand analysis through the sales rank checker separate from reimbursement valuation, because sales potential isn&#39;t proof of the amount Amazon owes.</p>
<h2>Verify Each Reimbursement and Run the Monthly Routine</h2>
<p>Approval isn&#39;t the final control. Close a discrepancy only after you can connect the inventory event, the reimbursement record, and the actual account credit.</p>
<p>Use this flow as a review checklist, then retain the underlying transaction evidence.</p>
<p><img src="https://cdnimg.co/13b9acdf-56f8-4f76-98b5-6695e45942c4/92048b74-1a8e-4461-be88-31e671cddd1c/fba-reimbursement-policy-reimbursement-flowchart.jpg" alt="A five-step flowchart illustrating how to verify Amazon FBA reimbursements and establish a monthly review process."></p>
<h3>Verify the payment trail</h3>
<ol>
<li><p><strong>Open the Reimbursements report</strong> in Seller Central and filter to the relevant claim and posting dates. Inspect reimbursement type, product information, amount, and seller-submitted case details, including automatically generated credits in your reconciliation.</p>
</li>
<li><p>Match each reimbursement line to its original claim and <strong>Inventory Ledger</strong> adjustment. Compare FNSKU, quantity, event type, case ID, and credited amount, allowing for credits that don&#39;t map neatly to a single case.</p>
</li>
<li><p>Go to <strong>Payments</strong>, open <strong>Transaction view</strong>, and choose <strong>Other</strong> in the filter. Search the Product Details column for “Balance Adjustment” or “FBA Inventory Reimbursement” so an unfamiliar posting description doesn&#39;t look like a missing payment.</p>
</li>
<li><p>Flag delayed credits. <a href="https://sellercentral.amazon.com/gp/help/external/200732720">Amazon&#39;s Reimbursements report guidance</a> states that approved reimbursements generally appear in the account <strong>4 to 5 business days after approval</strong>, which gives your team a concrete payment-check trigger.</p>
</li>
<li><p>Use the <strong>Inventory Ledger reconciliation link</strong>, where available. Follow it to the detailed reconciliation or reimbursement transaction to establish what Amazon resolved.</p>
</li>
<li><p><strong>Log every mismatch</strong> with the case ID, expected amount, actual amount, and follow-up owner. Preserve the report exports supporting your conclusion and act before the applicable review deadline closes.</p>
</li>
</ol>
<h3>Keep the monthly review deadline-driven</h3>
<p>Maintain a single register joining shipment IDs, FNSKUs, transaction item IDs, adjustment dates, refund dates, case IDs, and reimbursement records. Review open claims by closing deadline, unmatched credits, and eligible refunds without received returns.</p>
<p>Treat the inbound waiting period as an <strong>earliest filing trigger</strong>, not a filing deadline. Distinguishing those fields prevents your team from submitting too early or mistakenly waiting until the last permissible day.</p>
<p>Integrate this register with your <a href="https://www.onlinebrandgrowth.com/blog/fba-inventory-management/">FBA inventory management routine</a>. Receiving, removals, returns, and finance shouldn&#39;t maintain disconnected versions of the same exception.</p>
<p>Use the walkthrough alongside your own Seller Central records when setting up the review.</p>
<iframe width="100%" style="aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/G0JpcABswxA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<p>Assign a named owner to each unresolved item and close it only with a documented outcome: inventory found, replacement received, credit verified, or a supported determination that it isn&#39;t eligible. That keeps next month&#39;s review focused on genuine exceptions rather than reopening the same unexplained adjustments.</p>
<hr>
<p><a href="https://onlinebrandgrowth.com">Online Brand Growth</a> offers standalone FBA reimbursement recovery for lost and damaged inventory, overcharged FBA fees, and customer-return or refund discrepancies, with documented claim filing and ongoing monitoring. Book a free strategy call to review your reimbursement controls and identify gaps in the evidence-to-payment process.</p>
`,
}

export default post
