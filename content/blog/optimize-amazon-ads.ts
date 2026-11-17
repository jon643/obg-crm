import type { BlogPost } from '@/lib/blog'

// Auto-generated from Outrank webhook (article id: 9a359cc7-c068-454e-9e23-525e6ae68388).
// Do not hand-edit; re-publish in Outrank to update.

const post: BlogPost = {
  title: `Optimize Amazon Ads: Bids, Budgets and Targeting for 2026`,
  description: `Learn how to optimize Amazon ads with a step-by-step plan for bids, budgets, campaign structure and break-even ACoS, plus benchmarks to check.`,
  publishDate: '2026-11-17',
  htmlContent: `<p>The campaign with the best ACoS in your account is often the one doing the least work. Branded search sits at a low ACoS, looks superb in a monthly report, and gets praised in the meeting, while the non-branded campaign that finds new buyers runs higher and gets trimmed every time someone needs to hit a number. One of those two makes money. It&#39;s rarely the one the dashboard praises.</p>
<p>Amazon keeps raising the stakes on that mistake. The company reported about <strong>$56.2 billion</strong> in advertising-services net sales for 2024, up from $46.9 billion in 2023, a rise of roughly <strong>19.8%</strong>, with fourth-quarter ad sales of <strong>$17.3 billion</strong>, up 18% year over year, according to <a href="https://advertising.amazon.com/resources/faq">Amazon&#39;s advertising FAQ</a>. Total net sales grew 11% over the same period. Advertising is expanding faster than the store around it, so bid pressure on the terms you want won&#39;t ease.</p>
<p>The fix isn&#39;t a cleverer bidding trick. It&#39;s deciding what a conversion is worth before you touch a bid, then refusing to pay above that number, and diagnosing why a term is losing before you change anything at all.</p>
<h2>Set Break-Even ACoS Before You Change Any Bid</h2>
<p>Every bid in the account answers to one number, and it isn&#39;t the ACoS target you inherited from a template. It&#39;s <strong>pre-ad contribution margin</strong>. Take the selling price, subtract COGS, the referral fee, FBA fulfillment, storage, inbound placement and an allowance for returns, then divide what survives by the price.</p>
<p>That percentage is your ceiling. A product at 35% pre-ad contribution margin cannot carry a 40% ACoS and stay profitable, however healthy the campaign report looks. Amazon&#39;s own documentation frames it the same way, defining break-even ACoS as contribution margin before advertising divided by attributed sales and noting that a 35% margin product can&#39;t sustainably tolerate 40% ACoS. Because Amazon reports ROAS as attributed sales divided by ad cost, break-even ROAS is the inverse of that percentage (<a href="https://advertising.amazon.com/help/G7FMJZAJLTR3DKK2">Amazon Ads help</a>).</p>
<p>Take a $30 unit with $9 in COGS, a $4.50 referral fee and $6 of FBA fulfillment. That leaves $10.50, or <strong>35% margin</strong>, so the account can absorb <strong>35% ACoS</strong> and needs <strong>2.86x ROAS</strong> to break even. Storage, inbound placement and returns come out of the same $10.50, which is why the number you calculate on a napkin is always kinder than the one in your P&amp;L.</p>
<table>
<thead>
<tr>
<th>Pre-ad contribution margin</th>
<th>Break-even ROAS</th>
</tr>
</thead>
<tbody><tr>
<td>20%</td>
<td>5.00x</td>
</tr>
<tr>
<td>25%</td>
<td>4.00x</td>
</tr>
<tr>
<td>35%</td>
<td>2.86x</td>
</tr>
<tr>
<td>40%</td>
<td>2.50x</td>
</tr>
<tr>
<td>50%</td>
<td>2.00x</td>
</tr>
</tbody></table>
<h3>Read the table, don&#39;t recompute it</h3>
<p>Find your margin, read across, and you have the ROAS floor for every campaign on that SKU. A 20% margin product needs 5.00x. A 50% margin product gets by on 2.00x. Same ad spend, completely different tolerance, which is why a portfolio-wide ACoS target is a fiction.</p>
<p>If you want the arithmetic laid out step by step with a calculator, the <a href="https://datahuntersagency.com/break-even-roas-calculator/">break even ROAS formula explained</a> walks through the same conversion from margin to ROAS floor. And if the fee stack in the example above felt unfamiliar, our breakdown of <a href="https://www.onlinebrandgrowth.com/blog/how-to-calculate-contribution-margin/">how to calculate contribution margin</a> pulls each line apart, returns included.</p>
<p>Run your own SKUs through the Amazon profit calculator to model 2026 referral, fulfillment, storage and inbound fees before you commit a target, and use the FBA storage fee calculator when Q4 storage rates change the answer.</p>
<blockquote>
<p><strong>Working rule:</strong> campaigns running above their break-even ACoS get bids cut this week. Campaigns below it with a stable conversion rate are scaling candidates, not problems to solve.</p>
</blockquote>
<p>That single rule eliminates most of the arguments that stall an account. No one has to defend an ACoS number when the margin sets it.</p>
<h2>Structure Campaigns Around Shopper Intent</h2>
<p>Rewrite the structure before you optimize a bid. One campaign holding branded queries, category queries and competitor queries produces a blended ACoS that tells you nothing about which intent paid for itself, and the branded terms will flatter the average every single month.</p>
<p><img src="https://cdnimg.co/13b9acdf-56f8-4f76-98b5-6695e45942c4/b3004486-ffc7-421c-b697-3de0e6bfe9aa/optimize-amazon-ads-shopper-intent.jpg" alt="A diagram illustrating a campaign structure based on shopper intent, categorized by branded, non-branded, competitor, and discovery terms."></p>
<h3>The four buckets and what each must never contain</h3>
<ul>
<li><strong>Branded.</strong> Your brand and product names plus common misspellings. Its job is defense: capture the shopper who already wants you at the lowest cost per sale in the account. It must never share a campaign with category terms, because a strong branded ACoS hides a losing non-branded campaign behind a good average.</li>
<li><strong>Non-branded category.</strong> What the product is, not who makes it. Exact match carries proven terms; phrase and broad carry controlled expansion. Build the seed list from our guide to <a href="https://www.onlinebrandgrowth.com/blog/find-amazon-keywords/">finding Amazon keywords</a> and let the search term report refine it.</li>
<li><strong>Competitor conquest.</strong> Product targeting against rival ASINs, plus categories, brands and product features. Judge it on new-to-brand purchases rather than a blended ACoS target, since its job is stealing share, not harvesting demand you already own.</li>
<li><strong>Discovery.</strong> Automatic campaigns whose only purpose is surfacing queries you hadn&#39;t considered. Cap the budget deliberately instead of letting it drift.</li>
</ul>
<p>Amazon separates automatic targeting into <strong>close match, loose match, substitutes and complements</strong>, so you can bid each group differently rather than forcing one bid onto every query type, and manual coverage runs broad, phrase and exact while product targeting hits specific products, categories, brands or features (<a href="https://advertising.amazon.com/library/guides/targeting-with-sponsored-products">Sponsored Products targeting guide</a>).</p>
<p>The structure is a loop, not a chart. Discovery surfaces terms, exact campaigns scale the winners, negatives remove the waste, and only converting queries graduate. Keep each winning term in exactly one campaign, or your own campaigns bid against each other and push your CPC up for no extra impression. We structure PPC campaigns to validate winners, isolate waste, and scale what performed, which is only possible when each bucket reports separately.</p>
<h2>How to Run a Weekly Search Term Review</h2>
<p>Run this review every week on a rolling 7 to 14 day window. Yesterday&#39;s numbers are noise, and a Sunday panic bid cut is usually a Monday regret.</p>
<p><img src="https://cdnimg.co/13b9acdf-56f8-4f76-98b5-6695e45942c4/0aa1873e-e0ed-45d2-9057-03f82d214e12/optimize-amazon-ads-search-review.jpg" alt="A five step infographic illustrating the weekly workflow process for reviewing and optimizing amazon search terms."></p>
<ol>
<li><strong>Download the search term report</strong> from Campaign Manager, one export per campaign type. The common mistake is exporting Sponsored Products only and never checking what automatic campaigns are buying.</li>
<li><strong>Sort by spend and flag dead weight.</strong> Any term that has spent at least 1.5 times your average order value with no sale is a candidate for a negative. Using AOV instead of a fixed dollar figure keeps the threshold honest as prices change.</li>
<li><strong>Promote winners into exact match.</strong> Terms at or above break-even ROAS move into a manual exact campaign, and you add them as negative exact in the automatic campaign so the same query isn&#39;t paid for twice. Skipping the negative is the mistake that doubles your cost on your best term.</li>
<li><strong>Cut bids in 10 to 20 percent steps</strong> on terms that still sell but convert below break-even. Large jumps destroy the read, because you can&#39;t tell whether the change or the week caused the swing.</li>
<li><strong>Block irrelevant queries as negatives.</strong> A stainless steel bottle listing collecting clicks for &quot;baby bottle&quot; is funding someone else&#39;s customer. If you want a repeatable process for building those lists, this guide to <a href="https://www.thewojomedia.com/post/google-ads-negative-keywords">how to build negative keyword lists</a> covers the structure, and the logic transfers directly to Amazon.</li>
<li><strong>Check impression share before raising any bid.</strong> Without it you don&#39;t know whether a term is capped by bid or by budget, and raising the wrong one just moves the ceiling.</li>
<li><strong>Log every change with the date and the expected result</strong>, then revert anything that worsens ACoS after 14 days. An unlogged change is a change you&#39;ll argue about later.</li>
</ol>
<p>A healthy account shows exact-match ACoS under break-even, automatic campaign spend rotating into new terms each week, and a shrinking list of wasted queries. If all three aren&#39;t true, the structure needs work before the bids do. Pulling these numbers alongside the rest of your <a href="https://www.onlinebrandgrowth.com/blog/amazon-seller-central-reports-to-check-weekly/">Seller Central reports to check weekly</a> keeps ad performance tied to inventory and listing health rather than floating on its own.</p>
<h2>Choose the Right Bid Strategy and Placement Multipliers</h2>
<p>Start every new campaign on <strong>dynamic bids down only</strong>. Amazon can lower your bid when conversion looks unlikely but never raises it, so a campaign with no conversion history can&#39;t run away from you while it learns.</p>
<p><img src="https://cdnimg.co/13b9acdf-56f8-4f76-98b5-6695e45942c4/9b1f6f2a-6496-44ed-828f-37d9d7dd39e6/optimize-amazon-ads-bid-strategy.jpg" alt="A close-up of a laptop screen displaying Amazon Ads bid strategy settings in a workspace."></p>
<p>The three Sponsored Products strategies behave very differently. With <strong>dynamic bids up and down</strong>, Amazon can raise or lower a bid by as much as <strong>100% in real time</strong>, so a $1.00 bid can become $2.00 for a stronger opportunity, or drop when conversion likelihood weakens. That&#39;s a volume lever for an established campaign with solid conversion data, not a default for a launch. Fixed bids remove algorithmic movement entirely and suit proven targets where you want total control (<a href="https://advertising.amazon.com/library/guides/sponsored-products-best-practices">Sponsored Products best practices</a>).</p>
<table>
<thead>
<tr>
<th>Strategy</th>
<th>How Amazon moves the bid</th>
<th>Start here when</th>
</tr>
</thead>
<tbody><tr>
<td>Dynamic bids down only</td>
<td>Lowers the bid when conversion is unlikely, never raises it</td>
<td>New campaigns and efficiency-focused accounts</td>
</tr>
<tr>
<td>Dynamic bids up and down</td>
<td>Raises the bid by up to 100% or lowers it based on conversion likelihood</td>
<td>Established campaigns with conversion history that need extra volume</td>
</tr>
<tr>
<td>Fixed bids</td>
<td>Stays at the bid you set</td>
<td>Proven targets where you want no algorithmic movement</td>
</tr>
</tbody></table>
<p>Placement multipliers for top of search, rest of search and product pages can be adjusted by up to <strong>900%</strong>, which is a ceiling, not a strategy. Check conversion rate and margin by placement first, because a placement that converts better at a worse margin adds volume without adding profit. I&#39;d start at 20% to 50% on top of search only where that placement already runs under break-even ACoS, then hold.</p>
<p>If you&#39;d rather see the controls in context than read about them, this walkthrough covers the same settings inside the console.</p>
<iframe width="100%" style="aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/sfTCtJca6_g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<h2>Find Lost Visibility With Impression Share and Benchmarks</h2>
<p>A bid change is the wrong first move when the term is already winning the auction, or when the listing is what kills the sale. Start from pre-ad contribution margin and the break-even ROAS that margin supports. Then read impression share. Only then decide whether a bid is the constraint.</p>
<p>The <strong>Search term impression share report</strong> in the advertising console&#39;s Report Center shows each term&#39;s percentage share of total impressions against competing advertisers and assigns a numeric impression-share rank. A profitable exact term with strong conversion and low share points to a bid or budget limit. A term with high share and poor sales points to a bid that&#39;s too high for the intent, or a relevance problem, so you lower the bid or negate it (<a href="https://advertising.amazon.com/resources/whats-new/search-term-impression-report-sponsored-products">Search term impression share report</a>).</p>
<p><img src="https://cdnimg.co/13b9acdf-56f8-4f76-98b5-6695e45942c4/31dca8de-56cf-49ea-b222-cfb8c39854d0/optimize-amazon-ads-impression-share.jpg" alt="A professional analyzing a table of search term impression share data to optimize advertising campaign performance."></p>
<p>Pair it with the <strong>budget report</strong>, which shows how performance is affected when campaigns run out of budget. Read together, those two reports separate a bid constraint from a budget constraint. Raising a bid when the campaign already hits its cap just burns the same dollars faster. Getting that backwards wastes weeks.</p>
<h3>Use benchmarks as a diagnostic, not a target</h3>
<p>Export weekly CTR, CPC, conversion rate, new-to-brand purchase rate and ROAS by campaign type. Compare each against closely matched peers in the same category and period. Benchmark comparisons are directional because peer samples vary, so a gap versus the category is a clue, not a number to chase. Nobody&#39;s category average is your break-even. If your ROAS sits under the break-even line your contribution margin set, a &quot;healthy&quot; category ROAS is still a loss.</p>
<table>
<thead>
<tr>
<th>Symptom</th>
<th>Likely bottleneck</th>
<th>First action</th>
</tr>
</thead>
<tbody><tr>
<td>Low CTR</td>
<td>Main image, title, price or targeting relevance</td>
<td>Test main image and title first</td>
</tr>
<tr>
<td>CTR fine, conversion weak</td>
<td>Detail page, reviews, price or stock</td>
<td>Fix the listing and check in-stock rate</td>
</tr>
<tr>
<td>Conversion strong, ROAS weak</td>
<td>CPC too high or margin too thin</td>
<td>Lower bids or cap placement multipliers</td>
</tr>
<tr>
<td>High impression share, poor sales</td>
<td>Bid too high for the intent</td>
<td>Lower the bid or add a negative</td>
</tr>
<tr>
<td>Profitable term, low impression share</td>
<td>Bid or budget too low</td>
<td>Raise the bid or budget in steps</td>
</tr>
</tbody></table>
<p>Fix one bottleneck at a time. I&#39;d hold account-wide bid cuts after a bad day. Auction conditions and seasonal demand move daily, and a single Monday tells you nothing. Cut the wrong terms and you lose the conversion history you need to judge the next bid.</p>
<h2>Set Daily Budgets From Orders, Not Guesses</h2>
<p>Set each campaign&#39;s cap from the orders you need, not from a round number that feels safe. The formula is simple. <strong>Daily budget equals target orders per day multiplied by average CPC, divided by conversion rate.</strong></p>
<p>Say a campaign needs 8 orders a day, pays an average CPC of $0.80 and converts at 10%. That&#39;s 80 clicks a day, so the cap is about <strong>$64</strong>. Run the math per campaign rather than per account, then compare every result against the budget report to see which campaigns hit their ceiling.</p>
<p>Amazon&#39;s own help example shows how fast a cap turns into an ACoS number: a $2.00 maximum CPC with 1,000 clicks a day over a month produces about <strong>$2,000</strong> in advertising cost, and 200 units at $25 generates $5,000, which is a <strong>40% advertising cost of sales</strong> before product costs, fulfillment, fees and returns (<a href="https://advertising.amazon.com/help/GDS2E64R9GQ35768">Sponsored Products help</a>). If 40% sits above your break-even line, that cap is buying you a loss.</p>
<h3>Where the budget goes first</h3>
<p>Give exact-match campaigns budget priority over discovery, because they hold terms that already convert. Set discovery spend as a fixed share of total budget that you choose in advance, and cap it so one unproven query can&#39;t eat the day. Review caps every 7 to 14 days on the same window as the search term review, and change budgets only after bids have stabilized so each result traces back to one lever.</p>
<h2>Mistakes That Quietly Drain Ad Budgets</h2>
<p>A campaign can clear a generic ACoS target and still lose money. I start every bid decision from pre-ad contribution margin and the break-even ROAS that margin implies. Last-click ROAS is the metric to ignore until that line is set. Four habits spend past it anyway.</p>
<ol>
<li><p><strong>Judging on last-click ROAS alone.</strong> Single-day and last-click ROAS miss new-to-brand and repeat purchases, so a prospecting campaign can look inefficient while it acquires first-time customers worth keeping. Amazon expanded Amazon Marketing Cloud purchase-signal lookback from 13 months to five years in 2025 specifically to make lifetime-value and replenishment analysis possible, which shows how much of that judgment was blind before (<a href="https://advertising.amazon.com/library/news/amc-measurement-expansion">AMC measurement expansion</a>). Use the longer window to price the customer, then bid only if the click still clears break-even after fees and COGS.</p>
</li>
<li><p><strong>Changing several variables in one week.</strong> When bid, budget, placement, and targeting all move together, no result traces to one lever. Change one variable per campaign per week. If the listing, the Buy Box, or inventory is the bottleneck, a bid change will not fix the loss.</p>
</li>
<li><p><strong>Sending paid traffic to a weak listing.</strong> A stockout, a weak main image, or an unstable Buy Box turns every click into a lost sale. The right bid can be lower for a product with constrained FBA inventory or high stockout risk even when attributed ROAS looks excellent. Amazon is pushing measurement toward total retail impact rather than isolated clicks (<a href="https://advertising.amazon.com/en-ca/resources/whats-new/measure-advertising-impact-with-omnichannel-metrics">Omnichannel Metrics</a>). Pause or cut bids until the page can convert the traffic you are already paying for.</p>
</li>
<li><p><strong>Ignoring unauthorized sellers and MAP violations.</strong> Resellers undercut price, take the Buy Box, and pull conversion down on your own ASIN while you fund the traffic. Brand Registry enforcement can handle unauthorized seller removal and MAP enforcement, so you&#39;re not bidding to advertise a price someone else controls.</p>
</li>
</ol>
<p>The same discipline applies off Amazon. If you&#39;re managing <a href="https://exerta.ai/blog/negative-comments-on-facebook-ads">hiding negative comments on Meta ads</a>, the principle is familiar: contain the damage to the impression before you spend a dollar more buying it.</p>
<h2>Confirm Your Break-Even Before the Next Budget Cycle</h2>
<p>One action this week. Pull the last 14 days of search term data from Campaign Manager, split the terms by the four campaign buckets, and mark every term sitting above your break-even ACoS. Refresh the 2026 fee inputs, storage included, before you trust a margin you calculated last quarter.</p>
<p>Then take the marked terms into the next weekly review. Negate anything with no sale past 1.5 times average order value, cut bids in 10 to 20 percent steps on the terms still selling below break-even, and log the date and expected result for each change so the first read in 14 days is clean.</p>
<p>If Amazon ads already cost you a few thousand dollars a month, this is the conversation worth having. After the intro call, a complimentary brand audit and strategic roadmap digs into the account and returns specific recommendations. Book a free strategy call at /#book-call.</p>
<hr>
<p>Online Brand Growth runs Amazon PPC across Sponsored Products, Sponsored Brands and Sponsored Display, rebuilding campaign structure around contribution margin instead of an inherited ACoS target, and pairing that with the listing, inventory and Brand Registry work that decides whether paid traffic converts at all. The team manages more than $30M in annual revenue and owns its own Amazon brands, so the margin conversation comes before the media plan. Visit <a href="https://onlinebrandgrowth.com">Online Brand Growth</a> to see how an engagement works.</p>
`,
}

export default post
