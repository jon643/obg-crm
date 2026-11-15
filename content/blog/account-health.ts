import type { BlogPost } from '@/lib/blog'

// Auto-generated from Outrank webhook (article id: 9fde5150-285e-42c9-9662-821f20a1ad88).
// Do not hand-edit; re-publish in Outrank to update.

const post: BlogPost = {
  title: `Account Health on Amazon: Metrics, Flags and Fixes`,
  description: `Amazon account health explained: AHR bands, ODR and VTR thresholds, what triggers suspensions, and how brands monitor, appeal and prevent them.`,
  publishDate: '2026-11-15',
  htmlContent: `<p>You open Seller Central on a Monday and the Account Health page reads 428. Nothing looks broken. The listing that drew an authenticity complaint in March is gone, orders are shipping, and the dashboard is a comfortable green. Then a second notice lands on a sister ASIN, the rating collapses, and a deactivation clock starts on an account that looked healthy the day before.</p>
<p>That gap between the number on the dashboard and what Amazon can do is the whole problem. Account health is two jobs wearing one name: a visible score you can manage with a weekly routine, and an enforcement layer that a green score doesn&#39;t cover. Independent sellers accounted for more than <strong>60% of sales</strong> in Amazon&#39;s store in 2025, according to <a href="https://www.aboutamazon.com/news/small-business/amazon-2025-small-business-empowerment-report">Amazon&#39;s 2025 small business empowerment report</a>, so a lot of brands carry that enforcement risk with no system behind it.</p>
<p>Run both layers and the Monday surprises get rarer.</p>
<h2>What Your Account Health Score Actually Measures</h2>
<p>The <strong>Account Health Rating</strong> is Amazon&#39;s estimate, on a scale of <strong>0 to 1,000</strong>, of how likely your account is to be deactivated for policy noncompliance. Amazon frames it as near-real-time visibility into that risk. A new seller starts at <strong>200 points</strong>, and from there the score reflects policy adherence and selling activity across the previous <strong>180 days</strong>, per the <a href="https://sellercentral.amazon.com/help/hub/reference/external/G200205250">Amazon Seller Central account health reference</a>. It isn&#39;t a pass or fail badge. It&#39;s an operating number that moves whether you touch it or not.</p>
<p>The bands are simple enough to hold in your head once you&#39;ve seen them laid out.</p>
<p><img src="https://cdnimg.co/13b9acdf-56f8-4f76-98b5-6695e45942c4/ef086639-30fb-420c-aa03-a0566a252bd3/account-health-rating-system.jpg" alt="A flowchart explaining Amazon&#39;s account health rating system for sellers, showing score ranges and risk levels."></p>
<p>One structural detail catches international brands: the rating is calculated separately for each store or marketplace. A brand at 780 in the US can sit at 130 in Germany on the same morning, and strength in one country tells you nothing about the other.</p>
<h3>How the Rating Behaves Over Time</h3>
<p>Treat the score like a bank balance. Open violations are withdrawals. Successful appeals and clean selling weeks are deposits. The balance carries history, which cuts both ways.</p>
<p>A brand reading <strong>640 on Monday</strong> can be dragging a restricted-products warning from two months back that keeps drawing the number down while nothing new happens. The same mechanic works in your favour: address the violation, get it removed, and points come back without starting from scratch.</p>
<h3>Where Your Score Sits Right Now</h3>
<table>
<thead>
<tr>
<th>Score range</th>
<th>Amazon band</th>
<th>What it means</th>
<th>What to do</th>
</tr>
</thead>
<tbody><tr>
<td>200 to 1,000</td>
<td>Healthy</td>
<td>Full selling eligibility, but the score can still drift</td>
<td>Review open violations monthly</td>
</tr>
<tr>
<td>100 to 199</td>
<td>At Risk</td>
<td>Open violations are pulling the score down</td>
<td>Resolve and appeal open violations this week</td>
</tr>
<tr>
<td>0 to 99</td>
<td>Unhealthy</td>
<td>Deactivation risk is live and the score needs immediate recovery</td>
<td>Treat as an incident and appeal immediately</td>
</tr>
</tbody></table>
<p>Your band sets the urgency, not the cause. A score of 180 tells you something open is pulling the number down; it doesn&#39;t tell you which marketplace, which SKU or which policy. Only the violation list does that.</p>
<p>If a notice arrives and you can&#39;t tell whether it&#39;s routine housekeeping or a first strike, this walkthrough on how to <a href="https://www.amazonsellers.attorney/blog/managing-amazon-account-health-ratings-and-avoiding-suspension">respond to Amazon policy violation warnings</a> is worth reading before you type anything into a case log.</p>
<p>Record three figures for every marketplace today: current score, band, and open violation count. Everything else here measures movement against those three.</p>
<h2>The Four Metrics That Put Selling Privileges at Risk</h2>
<p>Four numbers carry most of the enforcement weight on seller-fulfilled orders. Exceed any of them and Amazon can restrict or remove selling privileges.</p>
<table>
<thead>
<tr>
<th>Metric</th>
<th>Threshold</th>
<th>Measurement window</th>
<th>What counts against you</th>
</tr>
</thead>
<tbody><tr>
<td>Order Defect Rate</td>
<td>Below 1%</td>
<td>Rolling 60 days</td>
<td>Negative feedback, A-to-z Guarantee claims, chargebacks</td>
</tr>
<tr>
<td>Seller-fulfilled cancellation rate</td>
<td>Below 2.5%</td>
<td>7 days</td>
<td>Orders cancelled by the seller</td>
</tr>
<tr>
<td>Late shipment rate</td>
<td>Below 4%</td>
<td>10 and 30 days</td>
<td>Orders shipped after the promised handling time</td>
</tr>
<tr>
<td>Valid Tracking Rate</td>
<td>At least 95% per category</td>
<td>Rolling 30 days</td>
<td>Packages without a valid tracking number and carrier scan</td>
</tr>
</tbody></table>
<p>Order Defect Rate is the one that punishes small catalogs, because the denominator is your order count. Amazon measures it across a rolling <strong>60-day</strong> window and sets the ceiling below <strong>1%</strong> (<a href="https://sellercentral.amazon.com/help/hub/reference/external/GGJVNFDXQT8C3RA8?locale=en-US">order performance guidance</a>).</p>
<h3>The Arithmetic That Catches Small Catalogs</h3>
<p>Say a brand ships 150 seller-fulfilled orders this month. One arrives damaged and earns a one-star. One becomes an A-to-z Guarantee claim. That&#39;s two defects out of 150, or <strong>1.33%</strong>, already over the line.</p>
<p>A catalog doing 4,000 orders a month can absorb the same fortnight without noticing. A catalog doing 150 can&#39;t. This is the most common reason a well-run small brand gets a restriction notice it never saw coming.</p>
<p>The other three metrics work the same way. Cancellation rate is measured over seven days and must stay below <strong>2.5%</strong>, so three cancellations in a week where you shipped 110 orders puts you at 2.7%. Late shipment rate runs below <strong>4%</strong> across 10-day and 30-day windows, which means a carrier delay in one lane can breach it before your warehouse knows there&#39;s a problem.</p>
<p>Valid Tracking Rate needs at least <strong>95% per product category</strong> over a rolling 30 days, and it counts a valid tracking number plus a carrier scan (<a href="https://sellercentral.amazon.com.au/help/hub/reference/external/G201817070">Amazon Seller Central tracking guidance</a>). At 200 seller-fulfilled packages, that leaves room for <strong>10</strong> without a valid tracking number and scan. At 1,000 packages, <strong>50</strong>. Typing a number into the field isn&#39;t enough; the carrier has to scan it and Amazon has to recognise the carrier code. FBA orders don&#39;t count against VTR at all, so keep the two fulfilment methods apart when you read the number.</p>
<blockquote>
<p><strong>Practical rule:</strong> ODR has the longest memory of the four. A defect logged today keeps counting for about two months, so a fix made this week still shows in the number six weeks from now.</p>
</blockquote>
<p>You&#39;ll find all four in the Account Health and Performance areas of Seller Central. The useful view isn&#39;t the account average. It&#39;s the breakdown by SKU, fulfillment method and category.</p>
<h2>Repeat Violations and Hidden Risks That Trigger Deactivation</h2>
<p>A supplement brand gets a restricted-products violation on ASIN A in January. The team pulls the listing, the score barely moves, everyone moves on. Ninety days later the same violation lands on a sister ASIN with the same ingredient disclosure problem. That second notice is where accounts die.</p>
<p>Amazon&#39;s published thresholds put the danger closer than most sellers assume: as few as <strong>two repeat violations</strong> for restricted-products policies and <strong>five</strong> for infringement-related policies inside a <strong>180-day period</strong>. The point penalty rises each time the same policy is broken, higher-severity repeats degrade the rating faster, and reaching the maximum for one policy puts immediate deactivation on the table. Amazon also states an account can turn red at <strong>zero</strong> and receive a <strong>three-day grace period</strong> to address the violation (<a href="https://sellercentral.amazon.com/help/hub/reference/external/GR786P4BPEVKTBAG?locale=en-US">Amazon Account Health Rating policy</a>).</p>
<p><img src="https://cdnimg.co/13b9acdf-56f8-4f76-98b5-6695e45942c4/4c5ff03a-d6b4-41e2-ac37-be29c77c1ee5/account-health-violation-timeline.jpg" alt="A timeline graphic showing an Amazon seller&#39;s account progress toward deactivation due to repeat policy violations."></p>
<p>The mistake in that case wasn&#39;t the first notice. It was treating a catalog-wide ingredient problem as one bad listing. Severity sets the clock: the same pattern under an infringement policy would need five strikes, which buys time, and the same pattern under restricted products needs two, which doesn&#39;t.</p>
<h3>Risks a Green Score Does Not Show</h3>
<p>Amazon can deactivate an account immediately for suspected fraudulent, deceptive, illegal or otherwise harmful activity regardless of its score (<a href="https://sellercentral.amazon.com/gp/help/external/G200205250">Amazon account health policy</a>). That single sentence is why optimising the number is not a protection strategy.</p>
<p>Track these separately from the AHR:</p>
<ul>
<li><strong>Identity verification status:</strong> a lapsed or mismatched business document can block an appeal before anyone reads your evidence.</li>
<li><strong>Customer data handling:</strong> how order data moves through your support tools and any third-party app.</li>
<li><strong>Related accounts:</strong> shared bank details, addresses or login patterns that link your stores.</li>
<li><strong>Intellectual property complaints:</strong> brand-level complaints that never appear as a metric movement.</li>
</ul>
<blockquote>
<p>The test I use: if the problem moves with orders, it&#39;s a metric and the weekly routine will recover it. If a notice names fraud, identity or a linked account, it&#39;s enforcement, and you stop optimising and start assembling evidence.</p>
</blockquote>
<p>Keep a dated line for each serious event: first notice, root cause identified, containment date, appeal submitted, and the date the 180-day window closes. That line tells you when the repeat risk expires.</p>
<h2>A Weekly Routine to Catch Drift Early</h2>
<p>Forty minutes a week, one shared sheet, same day each week. Rolling windows hide spikes, so a skipped review is how a fixable defect becomes a restriction.</p>
<ol>
<li><strong>Log the score and band per marketplace.</strong> Open the Account Health dashboard and write the AHR score and band for every marketplace into a dated row, because a per-marketplace history shows drift before the band changes.</li>
<li><strong>Sort open violations by age.</strong> Product Policy Compliance lists them; work the oldest first, since the oldest open case is closest to becoming the repeat violation with the bigger penalty.</li>
<li><strong>Pull order performance by SKU.</strong> Read ODR, cancellation rate and late shipment rate by SKU and fulfillment method rather than as account averages, because one SKU usually produces most of the defects.</li>
<li><strong>Check Valid Tracking Rate by category.</strong> Flag any category within two points of the 95% floor, because category-level failure restricts listings even when the account average looks healthy.</li>
<li><strong>Calculate headroom.</strong> Convert each metric into the number of extra defects, cancellations or late orders it can absorb before breaching, because a percentage tells you where you are and headroom tells you how close the edge is.</li>
<li><strong>Log a root cause with an owner and a date.</strong> One tracker, one line per issue, because an unassigned cause returns as the same violation inside the same window.</li>
<li><strong>Set an escalation alert at 25% of headroom.</strong> When a metric has used three quarters of its allowance, the operations lead gets a message, because the last quarter disappears faster than the next review.</li>
</ol>
<p><img src="https://cdnimg.co/13b9acdf-56f8-4f76-98b5-6695e45942c4/9342f306-503c-42f0-924a-4343bc287e52/account-health-routine.jpg" alt="A four-step infographic illustrating a weekly account health routine for business compliance and performance monitoring."></p>
<p>Stable merchant-fulfilled catalogs can run this weekly. Stockout-prone or high-volume catalogs need the order metrics checked daily, because a week of cancellations breaches the rate before the next review arrives.</p>
<p>If you want more reports folded into the same sitting, this list of <a href="https://www.onlinebrandgrowth.com/blog/amazon-seller-central-reports-to-check-weekly/">Seller Central reports to check weekly</a> covers the rest of the set.</p>
<p>You finish with one row per marketplace: score, band, open violations, and headroom on each metric.</p>
<h2>How to Appeal a Violation Without Losing the Account</h2>
<p>Start with the clock. If Amazon&#39;s requested information isn&#39;t received within <strong>90 days</strong> of the original notification, the account can remain deactivated, so track that deadline from the day the notice arrives. A green health score does not pause it, and an appeal in progress does not extend it.</p>
<p>The enforcement layer bites here. A catalog can sit inside every metric threshold and still lose the account over a single open violation that nobody tracked to its deadline.</p>
<p>The working order:</p>
<ol>
<li><strong>Open the enforcement notice and the View Appeal option.</strong> The notice specifies what evidence Amazon wants; writing before you&#39;ve read it produces a generic appeal that gets declined.</li>
<li><strong>Name the root cause in one sentence.</strong> A supplier change, a listing error, a carrier switch. If that sentence doesn&#39;t exist yet, neither does the appeal.</li>
<li><strong>Contain the issue before you write.</strong> Remove the offending listings or inventory. An appeal that shows a fix already made outperforms one that promises a fix later.</li>
<li><strong>Gather evidence tied to this violation.</strong> Invoices, authenticity records, business documentation, or a Plan of Action when the notice asks for one.</li>
<li><strong>Write one appeal per violation.</strong> Reference the exact notice and list the attachments, because a merged appeal for three notices answers none of them.</li>
<li><strong>Track every case against the 90-day deadline.</strong> Notice date, response date, days remaining. A slow supplier or a missed follow-up is how a recoverable violation becomes a permanent one.</li>
</ol>
<h3>Two Traps That Cost Accounts</h3>
<p>Deleting a listing does not resolve the violation. The enforcement stays on the record until it&#39;s successfully appealed or disputed, which means the clock keeps running and the repeat count keeps building.</p>
<p>Creating a new account to work around a deactivation is prohibited, and it puts both accounts at risk.</p>
<h3>The One-Page Template</h3>
<p>Every submission gets the same sheet: notice number, date received, root cause, containment date, evidence attached, submission date, days left on the clock. A coordinator can fill it in fifteen minutes, and a manager can audit ten of them in the time it takes to read one long email.</p>
<p>For the written plan itself, this guide to building an <a href="https://www.onlinebrandgrowth.com/blog/amazon-appeal-plan-of-action/">Amazon appeal plan of action</a> walks through the format Amazon expects: the root cause, the corrective action already taken, and the controls that prevent a repeat.</p>
<h2>Symptom, Cause and Fix Reference</h2>
<p>Use this as a lookup, not a read-through. Find the symptom on your dashboard and start there.</p>
<table>
<thead>
<tr>
<th>Symptom</th>
<th>Likely cause</th>
<th>Fix</th>
</tr>
</thead>
<tbody><tr>
<td>ODR climbing after a clean month</td>
<td>One SKU or carrier still producing defects inside the 60-day window</td>
<td>Isolate the SKU, fix the source, expect about two months to clear</td>
</tr>
<tr>
<td>Cancellation rate spike</td>
<td>Listing quantity out of sync with the warehouse count</td>
<td>Sync inventory, set a stock buffer, pause listings before stockouts</td>
</tr>
<tr>
<td>Late shipment rate spike</td>
<td>Handling time set longer than real dispatch, or carrier delays</td>
<td>Correct the handling time, switch the slow carrier for the affected lanes</td>
</tr>
<tr>
<td>VTR below 95% in one category</td>
<td>Labels with no carrier scan or unrecognized carrier codes</td>
<td>Map carrier codes correctly and transmit tracking at confirmation</td>
</tr>
<tr>
<td>Score drop with no open violations</td>
<td>Closed violation recurring inside the 180-day window</td>
<td>Review closed cases for recurrence and fix the root cause</td>
</tr>
<tr>
<td>New violation notice on a listing</td>
<td>Missing documentation or an intellectual-property complaint</td>
<td>Remove the listing and submit a documented appeal within 90 days</td>
</tr>
</tbody></table>
<p>A rising ODR after a clean month almost always traces to one SKU or one carrier whose defects are still working through the window, not to a sudden collapse in service quality. Pull the defect list, sort by ASIN, and the culprit shows up in the first five rows.</p>
<h3>Recovery Times by Metric</h3>
<p>Cancellation and late shipment rates can recover within weeks once the cause is fixed, because their windows are short and the denominator refreshes quickly. ODR needs roughly two months of clean orders, so a fix made today still leaves the metric fragile through the next quarter.</p>
<p>Every fix starts the same way: isolate the affected SKU, fulfillment method and category before changing anything account-wide.</p>
<h2>Prevention Controls for Large Catalogs and Multi-Brand Teams</h2>
<p>A green score still leaves the enforcement layer exposed. It shows violations Amazon has already chosen to record, while the next allegation can move faster than the score updates. The controls below are ordered by how quickly they contain risk, because containment is what buys time when a notice lands.</p>
<p>Amazon&#39;s FBM update says that, beginning <strong>August 31, 2026</strong>, an offer that puts Account Health at risk can be temporarily deactivated while other active listings and the overall account remain unaffected (<a href="https://sellercentral.amazon.com/seller-forums/discussions/t/7d5f264e-d83e-4557-9557-3999722b7e23">Amazon Seller Forums announcement</a>). For a large catalog, that changes the unit of work: rank exposure by ASIN, marketplace and fulfillment channel, then decide in advance which offers pause first.</p>
<p>Containment is a catalog decision before it becomes a compliance one.</p>
<p><img src="https://cdnimg.co/13b9acdf-56f8-4f76-98b5-6695e45942c4/78a251c4-3f3a-45de-96fb-58fa0d07d392/account-health-inventory-management.jpg" alt="A warehouse worker reviewing product inventory and listing status on a laptop computer in a storage facility."></p>
<h3>Set Pause Triggers Per SKU</h3>
<p>Use the same threshold as the weekly alert. When a seller-fulfilled SKU&#39;s ODR headroom falls below 25% of its allowance, or when that SKU carries two open violations, pause fulfillment-by-merchant on it or move it to FBA. Write the rule down so nobody is debating a listing at midnight.</p>
<p>Before firing the trigger, price the decision. Run the SKU through the Amazon profit calculator to see what pausing that offer costs in contribution margin, then compare it with the cost of an account-level restriction. Catalog errors are also a routine source of listing takedowns, so run new imagery through an <a href="https://pumo.app/tools/amazon-image-requirements">image compliance checker for sellers</a> before publishing.</p>
<h3>The Evidence Pack Every SKU Needs</h3>
<p>Keep invoices, authenticity records, supplier agreements and business documents filed per SKU, with the marketplace and ASIN in the folder name. An allegation against one ASIN needs that ASIN&#39;s paperwork in hours. Hunting through a shared drive is how a two-day response becomes a two-week one.</p>
<p>Related-account risk belongs on the same control list. Give each marketplace one accountable owner, keep access rules clean, and remove shared logins or recycled addresses that can link stores nobody meant to connect. Multi-brand teams should separate permissions by brand so one operator&#39;s mistake does not spread across the whole portfolio.</p>
<p>If the control set has gaps, work through this <a href="https://www.onlinebrandgrowth.com/blog/amazon-account-audit-checklist/">Amazon account audit checklist</a> once, then close them in the order above: pause rules first, evidence second, access hygiene third.</p>
<p>Unauthorized resellers are a catalog control problem too. Their listings create defects, complaints and pricing damage on your brand, so Brand Registry enforcement and MAP enforcement belong inside the prevention set. During an incident, four roles need to be reachable in the same channel: catalog, logistics, customer service and finance.</p>
<h2>Book a Free Account Health Review</h2>
<p>Bring three things: the current AHR score and band for each marketplace, the last 90 days of violation notices, and the headroom sheet from your weekly routine. That&#39;s enough to see where the exposure sits.</p>
<p>You leave with a score per marketplace, a ranked list of at-risk SKUs and fulfillment methods, and a review of the evidence stored against each open case. Most brands find one SKU and one category doing 80% of the damage.</p>
<p>This is the routine we run with brand teams. We monitor client account health daily and handle Seller Support cases so small issues don&#39;t become suspensions, and the same work covers appeals, containment calls and evidence packs. Brands dealing with unauthorized sellers or MAP violations can also review the 360 Brand Protection program.</p>
<p>When you book the free consultation and you&#39;re a fit, the complimentary <strong>OBG360 Amazon Account Audit</strong> runs as part of the call. Book a free strategy call at /#book-call and bring the sheet.</p>
<hr>
<p>Account health is manageable when you treat the score and the enforcement layer as separate jobs. Online Brand Growth does both inside your Seller Central account: daily monitoring, Seller Support case work, appeal preparation and containment decisions, so a notice on one ASIN doesn&#39;t turn into a suspended account. If you want the audit run on your own numbers first, visit <a href="https://onlinebrandgrowth.com">Online Brand Growth</a> and start with the free OBG360 review.</p>
`,
}

export default post
