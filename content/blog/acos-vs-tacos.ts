import type { BlogPost } from '@/lib/blog'

// Auto-generated from Outrank webhook (article id: e9614376-bc8e-44bd-94b9-d4557bf89214).
// Do not hand-edit; re-publish in Outrank to update.

const post: BlogPost = {
  title: `ACoS vs TACoS: Which Amazon Metric to Trust`,
  description: `ACoS vs TACoS compared with formulas, 2026 benchmarks, break-even math, and when Amazon brands should trust each metric.`,
  publishDate: '2026-11-16',
  htmlContent: `<p>The popular advice to lower ACoS and watch TACoS fall can leave you with a smaller, less profitable Amazon business. Cutting discovery spend can make a campaign look better while reducing demand, and a rising TACoS can be a deliberate investment rather than evidence of waste. <strong>Trust ACoS to guide paid-traffic decisions, and use TACoS to diagnose the business, but only after the reporting window has closed.</strong></p>
<h2>What ACoS and TACoS Each Measure</h2>
<p>Start with the same account and the same spend. In the <a href="https://adtestbench.com/guides/amazon-tacos/">AdTestBench TACoS guide</a>, <strong>$1,000 in advertising spend</strong> against <strong>$4,000 in ad-attributed sales</strong> produces <strong>25% ACoS</strong>; against <strong>$10,000 in total sales</strong>, including organic purchases, that spend produces <strong>10% TACoS</strong>.</p>
<p><strong>ACoS versus TACoS at a glance</strong></p>
<table>
<thead>
<tr>
<th>Criterion</th>
<th>ACoS</th>
<th>TACoS</th>
</tr>
</thead>
<tbody><tr>
<td>Formula</td>
<td>Ad spend divided by ad-attributed sales</td>
<td>Ad spend divided by total sales</td>
</tr>
<tr>
<td>Worked example</td>
<td>$1,000 / $4,000 = 25%</td>
<td>$1,000 / $10,000 = 10%</td>
</tr>
<tr>
<td>Level</td>
<td>Campaign, ad group, target, or advertised ASIN</td>
<td>Account, brand, or ASIN total business</td>
</tr>
<tr>
<td>What improves it</td>
<td>Less spend or more attributed sales</td>
<td>Less spend or more total sales, including organic</td>
</tr>
<tr>
<td>Blind spot</td>
<td>Ignores organic sales and ad dependence</td>
<td>Cannot prove ads caused the organic orders</td>
</tr>
</tbody></table>
<p>The formula changes only at the denominator. <strong>ACoS</strong>, advertising cost of sales, measures spend against revenue Amazon attributes to advertising. <strong>TACoS</strong>, total advertising cost of sales, compares advertising spend with the entire sales base.</p>
<p>That denominator determines where each metric belongs. Use ACoS in Sponsored Products, Sponsored Brands, and Sponsored Display reporting to evaluate campaigns, ad groups, and targets, where those reporting dimensions are available. Use TACoS at account, brand, or ASIN level to judge the advertising burden on total ordered product sales.</p>
<p>The visual distinction is straightforward:</p>
<p><img src="https://cdnimg.co/13b9acdf-56f8-4f76-98b5-6695e45942c4/bcde5fb1-7962-43d2-a56e-8ecb1345283c/acos-vs-tacos-metrics-comparison.jpg" alt="An infographic explaining and comparing advertising cost of sales (ACoS) and total advertising cost of sales (TACoS) metrics."></p>
<h3>What changes the ratios</h3>
<p>Say the example account keeps ad spend at $1,000 and attributed sales at $4,000, but total sales rise to about $14,000. ACoS remains 25%, while TACoS falls to approximately 7%. <strong>No campaign became more efficient in that scenario.</strong> The business generated more revenue outside the attributed-sales denominator.</p>
<p>The reverse matters just as much. If total revenue stays flat while you spend more to maintain it, TACoS rises, even when campaign ACoS remains within your target. You&#39;re buying a larger share of an unchanged business, which deserves investigation before anyone celebrates the campaign dashboard.</p>
<blockquote>
<p><strong>Practical rule:</strong> A lower ratio is useful only when you understand what changed in its numerator and denominator.</p>
</blockquote>
<p>For brands running paid media beyond Amazon, NotFair&#39;s resource on <a href="https://notfair.co/use-cases/google-ads-cross-platform-roas">blended ROAS reporting for paid media</a> provides useful context for separating platform-attributed performance from broader business performance. Keep the scope explicit, though: Amazon TACoS should use Amazon sales, not unrelated DTC revenue.</p>
<p>Neither percentage tells you what remains after product cost, FBA fulfillment, referral fees, storage, returns, and coupons. A campaign can meet its ACoS target while the ASIN loses contribution dollars, and a low TACoS can sit on top of deteriorating sales.</p>
<p><strong>ACoS sets the bid on each campaign and target, while TACoS shows whether the whole ASIN can carry that spend.</strong> Neither replaces a margin calculation.</p>
<h2>How to Calculate Both on Closed Dates</h2>
<p>A ratio pulled on an open window measures missing data, not performance. Attributed sales keep landing for days after the spend, so ACoS calculated this morning on last week&#39;s clicks reads worse than the campaign will eventually settle at, and TACoS reads worse still. Run both numbers only on dates where the attribution window has closed.</p>
<h3>Build a repeatable reporting routine</h3>
<ol>
<li><p><strong>Choose a sufficiently closed date range.</strong> For Sponsored Products seller campaigns, start with a range that ended at least <strong>14 days ago</strong>, consistent with <a href="https://advertising.amazon.com/help/GYNVHW8R4QPYUS9H">Amazon&#39;s Sponsored Products report definitions</a>. A click on October 3 can receive credit for an order on October 17, while an October 18 order falls outside that stated window. Amazon attributes campaign sales to the ad-interaction date rather than the order date, and says conversions can take up to <strong>12 hours</strong> to appear. Recent ACoS therefore looks worse before delayed sales arrive.</p>
</li>
<li><p><strong>Export total sales from Seller Central.</strong> Open <strong>Reports &gt; Business Reports &gt; By Date or By ASIN</strong> and export ordered product sales for the selected range. Keep the marketplace, currency, and product scope consistent with the advertising export you pull next.</p>
</li>
<li><p><strong>Export advertising results for identical dates.</strong> In Amazon Ads, download the relevant campaign or advertised-product report with spend and attributed sales. Include the advertising programs your TACoS definition covers, and hold that definition steady between reviews. DSP or another spend source still belongs in the numerator if your definition counts it, even when it sits outside the familiar campaign view.</p>
</li>
<li><p><strong>Calculate both ratios at matching levels.</strong> Divide spend by attributed sales for ACoS, and divide spend by Business Reports sales for TACoS, expressing each as a percentage. Run the account figure and the figure for each hero ASIN. If a denominator is zero, flag it for review instead of presenting a misleading percentage.</p>
</li>
<li><p><strong>Check the operating conditions before judging performance.</strong> Review units, returns, price changes, promotions, and stock availability. Verify that the advertised ASIN mapping matches the sales export, especially where variations or cross-catalog purchases complicate attribution.</p>
</li>
</ol>
<p>Use this workflow to keep the inputs aligned:</p>
<p><img src="https://cdnimg.co/13b9acdf-56f8-4f76-98b5-6695e45942c4/ceca9967-0e5f-4d9e-8ae8-508154676569/acos-vs-tacos-calculation-process.jpg" alt="An infographic showing a five-step process for calculating financial amounts on closed dates with examples."></p>
<h3>Keep date alignment separate from attribution</h3>
<p>Matching date filters never makes click-date advertising sales identical to order-date Business Reports sales. What it gives you is a consistent operating comparison; a perfectly reconciled order ledger would take different data.</p>
<p>Don&#39;t pair a finished sales month with an immature ad week, particularly around a launch, coupon, or high-consideration purchase. Keep a reporting cut-off in the workbook so everyone knows which periods are ready for decisions. Treat Fee and Economics Preview as a forecast, with the historical exports above as the reconciliation source.</p>
<p>A rising TACoS on properly closed dates is a diagnosis, not proof of waste. Split the change by product life cycle and by branded versus non-branded traffic before you treat it as overspend, and confirm the ASIN&#39;s contribution margin can carry the spend at all.</p>
<p>The walkthrough below shows the calculation end to end:</p>
<iframe width="100%" style="aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/JqsH4ltvwVs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<p>A lower TACoS calculated from mismatched dates isn&#39;t evidence of an organic halo. It reflects a reporting problem until the periods and product scope agree.</p>
<h2>2026 ACoS and TACoS Benchmark Ranges</h2>
<table>
<thead>
<tr>
<th>Sample</th>
<th>Median ACoS</th>
<th>Median TACoS</th>
<th>Middle or full range</th>
</tr>
</thead>
<tbody><tr>
<td>14 accounts, Nov 2024 to Apr 2026, reported in <a href="https://mrprime.com/insights/amazon-tacos-benchmarks/">MrPrime&#39;s benchmark review</a></td>
<td>Not reported</td>
<td><strong>9.8%</strong></td>
<td>Middle 50%: 7.4% to 17.7%; full: 2.6% to 43.1%</td>
</tr>
<tr>
<td>150 U.S. brands, 90 days in 2026, in the same review</td>
<td><strong>28.4%</strong></td>
<td><strong>10.6%</strong></td>
<td>Middle 50% of TACoS: 8.1% to 12.8%</td>
</tr>
</tbody></table>
<p><strong>2026 published ACoS and TACoS benchmarks</strong> are reference points, not operating targets. The smaller longitudinal sample covers <strong>156 account-months</strong>, while the larger brand sample covers a shorter observation window. A separate account-level review covering the first half of 2026 reported higher medians on both measures, which fits a book of accounts weighted toward growth-stage spending. Those samples aren&#39;t interchangeable views of the same population.</p>
<p>The gap between samples is more useful than any single average. Account selection, category, product maturity, and growth objectives move the result substantially. A catalog harvesting established demand carries a different advertising burden than a brand pushing into unfamiliar search terms, and holding both to one midpoint tells you nothing.</p>
<h3>Use the spread to ask better questions</h3>
<p>A TACoS below the lower part of a benchmark band may reflect strong organic demand, but it may also reflect underinvestment. A result above the upper part may be a controlled launch or a deliberate market-share purchase, or it may mean paid traffic is replacing lost organic orders. Treat a rising TACoS as a diagnosis to run down before you treat it as waste.</p>
<p>You can&#39;t tell which explanation applies from the percentage alone. Pair the ratio with the following:</p>
<ul>
<li><strong>Organic-sales direction:</strong> Is revenue outside advertising attribution growing, shrinking, or merely changing classification?</li>
<li><strong>Life-cycle stage:</strong> Is the spend supporting an established hero, a new ASIN, or a category expansion?</li>
<li><strong>Branded versus non-branded traffic:</strong> Is TACoS climbing because defense spend on your own name increased, or because discovery terms got more expensive?</li>
<li><strong>Conversion conditions:</strong> Have price, availability, reviews, or listing content changed?</li>
<li><strong>Contribution dollars:</strong> Is the business retaining more money after advertising and variable costs?</li>
</ul>
<p>Category context helps narrow the comparison. Use our <a href="https://www.onlinebrandgrowth.com/blog/amazon-tacos-benchmarks-by-category/">Amazon TACoS benchmarks by category</a> as a starting point, then favor your own product economics over a published midpoint.</p>
<h3>Compare against your own baseline</h3>
<p>Mark your trailing closed reporting period against the relevant middle band, and annotate launches, promotions, stockouts, and changes in spend coverage. Hold the ACoS side to a closed window too, because a settled TACoS month stacked against an immature ad week measures attribution lag, not decline. Keep the benchmark itself consistent rather than switching samples whenever a different one makes the account look healthier.</p>
<p>The operating decision isn&#39;t whether your TACoS beats someone else&#39;s median. It&#39;s whether the next dollar of spend produces enough contribution, discovery, and durable demand to justify itself. Don&#39;t cut a productive segment to reach a benchmark, and don&#39;t scale an unprofitable segment because its ratio looks ordinary.</p>
<h2>Break-Even ACoS From Contribution Margin</h2>
<p>A <strong>30% gross margin doesn&#39;t automatically support 30% ACoS</strong>. Revenue isn&#39;t the same as the cash available to buy an order, and a gross-margin figure that excludes fulfillment, referral fees, storage, returns, or coupons overstates your advertising capacity.</p>
<h3>Build the ceiling from the ASIN&#39;s cost stack</h3>
<p>Take a hypothetical <strong>$40 ASIN</strong> that leaves <strong>$12 before advertising</strong>, after product cost, Amazon fees, fulfillment, a returns allowance, and promotions. Its break-even ACoS is <strong>$12 divided by $40, or 30%</strong>. Use the cost categories supported by <a href="https://sellercentral.amazon.com/help/hub/reference/external/GQNVDV46U9JQ25HY?locale=en-US">Amazon&#39;s Fee and Economics Preview documentation</a> to validate the inputs rather than borrowing a category margin.</p>
<table>
<thead>
<tr>
<th>Paid-order scenario</th>
<th align="right">Advertising cost</th>
<th align="right">Contribution after advertising</th>
</tr>
</thead>
<tbody><tr>
<td>20% ACoS</td>
<td align="right">$8</td>
<td align="right">$4 before fixed overhead</td>
</tr>
<tr>
<td>30% ACoS</td>
<td align="right">$12</td>
<td align="right">Break-even before fixed overhead</td>
</tr>
<tr>
<td>35% ACoS</td>
<td align="right">$14</td>
<td align="right">Loss of $2 before fixed overhead</td>
</tr>
</tbody></table>
<p>The calculation isn&#39;t complicated. The difficult part is making the cost stack honest, especially when discounts and return allowances sit in different reports.</p>
<p>Rebuild it with the costs that apply to your offer:</p>
<ul>
<li><strong>Product cost:</strong> Use the appropriate landed cost, not just the factory invoice.</li>
<li><strong>Amazon selling and fulfillment costs:</strong> Include referral fees and the relevant fulfillment charges.</li>
<li><strong>Returns and promotions:</strong> Allow for return economics, coupons, and other offer funding.</li>
<li><strong>Storage:</strong> Include inventory-related costs when they materially affect the product&#39;s contribution.</li>
</ul>
<p>Our <a href="https://www.onlinebrandgrowth.com/blog/how-to-calculate-contribution-margin/">contribution-margin calculation guide</a> explains how to keep that boundary consistent. The free Amazon profit calculator helps organize price, fees, and margin, while the FBA storage fee calculator shows monthly storage cost by dimensions when inventory size or age is consuming the same contribution.</p>
<h3>Add the whole-product view</h3>
<p>In the same hypothetical product model, <strong>$2,000 of advertising against $25,000 of total sales produces 8% TACoS</strong>. That can coexist with a campaign ACoS near break-even because total product revenue includes a substantial sales base outside advertising attribution.</p>
<p>Don&#39;t interpret that as permission for unlimited campaign losses. Check whether the ASIN&#39;s total contribution after advertising is improving, and whether the paid segment is serving a clear purpose. A strong organic base can subsidize waste just as easily as it can fund useful discovery.</p>
<p>Amazon&#39;s Fee and Economics Preview provides a forward view of estimated sales, supported advertising costs, per-unit costs, and net proceeds by MSKU, with forecasts extending <strong>up to 120 days</strong>. Those estimates help planning; they aren&#39;t historical TACoS.</p>
<blockquote>
<p>Set the ACoS ceiling from contribution dollars, then use TACoS to see whether that ceiling is funding the whole ASIN or only the paid slice.</p>
</blockquote>
<h2>When a Higher TACoS Is Still Rational</h2>
<table>
<thead>
<tr>
<th>Pattern</th>
<th>Plausible cause</th>
<th>Check before cutting</th>
</tr>
</thead>
<tbody><tr>
<td>TACoS up, total sales up</td>
<td>Launch, expansion, or share push</td>
<td>Margin versus break-even and rank gains</td>
</tr>
<tr>
<td>TACoS up, total sales flat</td>
<td>Organic weakness or heavier paid dependence</td>
<td>Brand versus non-brand split</td>
</tr>
<tr>
<td>TACoS down, total sales up</td>
<td>Organic growing faster than spend</td>
<td>Whether the growth is incremental</td>
</tr>
<tr>
<td>TACoS flat, sales held by brand terms</td>
<td>Defense hiding weaker discovery</td>
<td>New-to-brand share and organic rank</td>
</tr>
</tbody></table>
<p><strong>How to read a TACoS move</strong> starts with a distinction: a higher ratio doesn&#39;t, by itself, prove that advertising became less efficient. Your team may have deliberately bought access to new customers, launched another product, or defended demand while organic visibility weakened.</p>
<p><a href="https://sellerplex.com/amazon-ppc-benchmarks-2026/">SellerPlex&#39;s benchmark discussion</a> reports <strong>15% median TACoS and 38% median ACoS across 38 U.S. accounts in the first half of 2026</strong>, compared with <strong>10.6% and 28.4% across another sample of 150 U.S. brands</strong>. Neither TACoS median can be a universal ceiling when the account mix and objectives differ.</p>
<h3>Diagnose the segment before changing the budget</h3>
<p>Separate launch, mature-product, and defense spend before interpreting the blended move. Then split branded from non-branded traffic within those groups. A profitable mature ASIN and a deliberately loss-making launch shouldn&#39;t receive the same instruction because they share an account.</p>
<p>For rising TACoS with rising sales, check contribution after advertising, organic-rank movement, and conversion rate. You&#39;re looking for evidence that expansion is creating a commercially useful result, not adding expensive orders.</p>
<p>For rising TACoS with flat sales, inspect the hero ASINs and branded terms first. A weak offer, lost availability, or declining discovery may be forcing the team to spend more to preserve revenue. Cutting everything proportionally won&#39;t fix the underlying problem.</p>
<blockquote>
<p>TACoS mixes advertising spend with total Amazon sales. It cannot distinguish an organic order caused by advertising from one that would&#39;ve happened anyway, or from credit shifted among Sponsored Products, Sponsored Brands, Sponsored Display, and Amazon DSP.</p>
</blockquote>
<h3>Stable ratios can hide deterioration</h3>
<p>Flat TACoS isn&#39;t reassuring if branded queries account for more of the revenue while non-branded discovery weakens. The business may be maintaining current demand without replenishing it.</p>
<p>A useful evidence set includes the branded versus non-branded split, new-to-brand share where available, rank movement, conversion rate, and contribution outcomes on a closed date range. Repeat-purchase value can inform the investment decision, but don&#39;t use an assumed lifetime value to excuse losses you haven&#39;t bounded.</p>
<p>The operator&#39;s question is <strong>which segment&#39;s incremental margin changed</strong>, not whether the blended percentage moved.</p>
<h2>Match Spend to Launch, Hero and Defense Weekly</h2>
<p>Your weekly budget decision should name the situation, the expected outcome, and the condition that would make you change course. An account-wide ACoS target skips those decisions and gives the team an incentive to favor easy attributed revenue.</p>
<h3>Launch spend needs a defined loss budget</h3>
<p>For a hypothetical launch, a brand could choose an initial <strong>60 to 90-day investment period</strong>. That&#39;s a planning choice, not a universal Amazon ramp-up rule. The important requirement is to agree on the affordable loss before increasing spend.</p>
<p>A launch may run above its contribution-based ACoS ceiling while the team develops keyword relevance and reaches new customers. Accept that only while the intended signals are moving: relevant search visibility, new-to-brand orders where measurable, conversion quality, and total contribution relative to the approved investment. A rising TACoS during this window is a diagnosis to read, not proof of waste.</p>
<p>Write down what would stop the test. That might be persistent poor conversion after fixing the offer, no useful rank movement, or insufficient contribution potential at the attainable selling price. Don&#39;t keep extending the launch budget because the ASIN hasn&#39;t reached an arbitrary age.</p>
<p>Once the product holds useful organic visibility with less paid support, change the target. Continuing to buy launch-level exposure after the product matures can turn a deliberate investment into an unexamined subsidy.</p>
<h3>Mature heroes should earn their budget</h3>
<p>For an established hero, compare campaign and target ACoS with the ASIN&#39;s contribution ceiling. Then inspect product-level TACoS alongside total sales and the organic-sales share. The account average shouldn&#39;t excuse a hero that consumes disproportionate spend without retaining enough contribution.</p>
<p>Use the free sales rank checker to examine rank movement alongside the sales trend. A falling ratio after a budget cut isn&#39;t a win if demand and visibility also weakened.</p>
<p>Before changing bids, inspect the retail conditions:</p>
<ul>
<li><strong>Offer quality:</strong> Check price, coupon changes, and the Featured Offer, often called the Buy Box.</li>
<li><strong>Availability:</strong> Confirm the ASIN stayed purchasable and that inventory constraints didn&#39;t distort conversion.</li>
<li><strong>Listing performance:</strong> Inspect sessions, conversion, images, and the relevance of the traffic being purchased.</li>
<li><strong>Spend concentration:</strong> Identify targets taking budget without producing the intended contribution or discovery outcome.</li>
</ul>
<p>These checks belong inside an <a href="https://www.onlinebrandgrowth.com/blog/amazon-advertising-strategy/">Amazon advertising strategy</a> that connects media decisions with catalog and inventory operations. Bids can&#39;t compensate indefinitely for an offer customers don&#39;t want or can&#39;t buy.</p>
<h3>Branded defense needs restraint and evidence</h3>
<p>Low ACoS on brand terms can flatter the account because those shoppers already know what they want. Keep a deliberate defense budget, but don&#39;t let that performance conceal weak non-branded acquisition.</p>
<p>To assess incrementality, change one clearly defined segment while holding the rest of the operating conditions as stable as practical. A time-based holdout can help compare reduced branded support with normal support; geographic holdouts may be useful where the advertising setup supports them. Monitor total sales and contribution, not just the campaign&#39;s attributed revenue.</p>
<p>The <a href="https://www.amazongrowthlab.com/blogs/blog-amazon-tacos-metric-explained">Amazon Growth Lab discussion of TACoS measurement</a> emphasizes the need to distinguish correlation from incrementality using controls, branded splits, new-to-brand measurement, and profit outcomes. Promotions, external traffic, and overlapping advertising formats can otherwise change who receives credit without changing customer demand.</p>
<p>Unauthorized sellers require a different response. If reseller activity disrupts pricing or the Buy Box, investigate that before raising bids to compensate. Online Brand Growth handles enforcement against unauthorized resellers to protect MAP and the Buy Box, and an enforcement problem shouldn&#39;t automatically become a larger advertising budget.</p>
<h3>Set targets together and report the exceptions</h3>
<p>At Online Brand Growth, we optimize PPC toward each client&#39;s profitability goals rather than a one-size-fits-all ACoS target. We set targets together with the client and report against them every week.</p>
<p>The weekly report should show campaign and target ACoS against the relevant ASIN contribution ceiling, plus TACoS on matching closed dates. Split the view by launch, hero, and branded versus non-branded traffic, then attach margin, rank, and organic-share context. Comparing a fresh TACoS reading against an ACoS window that hasn&#39;t closed yet will mislead the decision.</p>
<p>Name the decision beside each exception: hold, reduce, test, fix the offer, or fund further discovery. <strong>Never publish one account-wide ACoS target as though every product and search term has the same job.</strong></p>
<hr>
<p><a href="https://onlinebrandgrowth.com">Online Brand Growth</a> connects Amazon PPC management with contribution-margin targets, catalog performance, and weekly reporting. Book a free strategy call and bring the last closed 90 days of spend, attributed sales, total sales, and contribution remaining on your top ASINs.</p>
`,
}

export default post
