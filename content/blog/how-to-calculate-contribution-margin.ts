import type { BlogPost } from '@/lib/blog'

const post: BlogPost = {
  title: 'How to Calculate Contribution Margin on Amazon (The Number That Actually Matters)',
  description: 'Revenue is vanity. Contribution margin is sanity. Here is the exact formula Amazon sellers need, why gross margin gets you in trouble, and how TACoS ties it all together.',
  publishDate: '2026-02-02',
  htmlContent: `
<p>Revenue is vanity. Contribution margin is sanity. Most Amazon brands track revenue obsessively and have a vague sense of their margins. Almost none of them track contribution margin correctly — and that gap is why brands can show impressive top-line growth while the bank account barely moves.</p>

<p>We have seen this pattern repeatedly. A brand hits $2M in annual Amazon revenue. The founder is excited. We run the contribution margin analysis and find that after COGS, FBA fees, advertising spend, returns, and storage, the actual take-home is 8 cents on the dollar. That is not a business. That is a very expensive exercise in funding Amazon's growth instead of your own.</p>

<p>Contribution margin is the number that should drive every significant decision you make on Amazon: pricing, launch strategy, advertising budget, which products to scale and which to cut. Here is how to calculate it correctly.</p>

<h2>What Contribution Margin Is — and What It Is Not</h2>

<p>Contribution margin is not gross margin. Gross margin subtracts only COGS from revenue. On Amazon, that calculation ignores a massive and multi-layered cost stack that sits between your gross margin and your actual take-home. A product with a healthy gross margin can have a deeply negative contribution margin once the full Amazon cost structure is applied.</p>

<p>Contribution margin is also not net profit. Net profit subtracts fixed costs — salaries, overhead, software subscriptions — from the contribution margin. For product-level decision-making on Amazon, you want to evaluate each SKU on its variable cost performance before fixed costs enter the picture. Contribution margin gives you that view.</p>

<p>The simple definition: contribution margin is what each unit sold actually contributes to your business after every variable cost has been paid. It is the per-unit or per-SKU number that tells you whether a product is worth scaling.</p>

<h2>The Formula</h2>

<p>Contribution Margin = Revenue − COGS − FBA Fees − Advertising Spend − Returns and Refunds − Other Variable Costs</p>

<p>Let us walk through each component.</p>

<h3>Revenue</h3>

<p>Your gross revenue — the amount customers pay for your product. Start here. Everything else is subtracted from this number.</p>

<h3>Cost of Goods Sold (COGS)</h3>

<p>Your landed cost per unit. This includes manufacturing, packaging, and freight to Amazon's fulfillment centers. Use your true landed cost — not just your factory price. Include your freight cost per unit, which fluctuates and should be updated regularly. Brands that use an outdated COGS figure are calculating contribution margin on bad inputs and making bad decisions based on it.</p>

<h3>FBA Fees</h3>

<p>Amazon's fulfillment fee per unit, which varies by product size and weight tier. Check your current fee schedule in Seller Central under the FBA Revenue Calculator — Amazon adjusts fees periodically, and many brands are still calculating with fee rates from a year or more ago. Also include monthly storage fees, especially if you carry significant inventory or have seasonal velocity fluctuations that create storage buildups.</p>

<p>For most standard-size products, the combined FBA fulfillment fee runs $3 to $6 per unit. For oversized products, it can be $10 to $20 or more. That range matters enormously for contribution margin at scale.</p>

<h3>Amazon Referral Fee</h3>

<p>Amazon charges a referral fee as a percentage of the selling price. Most categories are 8 to 15%. Electronics run 8%. Apparel and accessories run 17%. Beauty and personal care is typically 8%. Check your specific category — then subtract this from revenue before calculating. If you are selling a $30 product in a 15% referral fee category, you are starting with $4.50 gone before any other costs apply.</p>

<h3>Advertising Spend</h3>

<p>Your total PPC spend allocated to the ASIN — Sponsored Products, Sponsored Brands, Sponsored Display. This is where TACoS becomes the critical metric. TACoS (Total Advertising Cost of Sale) is your ad spend divided by total revenue, not just ad-attributed revenue. It measures the true advertising burden on your business.</p>

<p>A TACoS of 20% means you are spending 20 cents in advertising for every dollar of revenue. That is often unsustainable, depending on your other costs. A TACoS of 8 to 12% is where mature, well-run Amazon businesses typically land. At that range, advertising is building organic rank without consuming your margin. Below 8%, you may be under-investing in growth. Above 14 to 15% on a mature product, your contribution margin is under serious pressure.</p>

<h3>Returns and Refunds</h3>

<p>Amazon's return rate varies widely by category. Apparel and electronics see high return rates — 15 to 30% is not unusual. Grocery and consumables are much lower. Whatever your category average is, it belongs in your contribution margin calculation as a per-unit cost. Factor in both the refund itself and the cost of the returned unit — which in many cases is not resellable and must be liquidated or disposed of.</p>

<h3>Other Variable Costs</h3>

<p>These vary by business but commonly include: Amazon's closing fees (in certain categories), Vine enrollment costs, coupon costs (Amazon charges a redemption fee per coupon used), co-op fees for vendors, and any third-party logistics or prep costs if you are not shipping direct to FBA.</p>

<h2>A Worked Example</h2>

<p>Let us put numbers to the formula. A $35 product in a beauty category:</p>

<ul>
  <li>Revenue: $35.00</li>
  <li>Amazon Referral Fee (8%): −$2.80</li>
  <li>COGS (landed): −$8.00</li>
  <li>FBA Fulfillment Fee: −$4.25</li>
  <li>Advertising Spend (11% TACoS): −$3.85</li>
  <li>Returns (4% of revenue): −$1.40</li>
  <li>Storage and other variable costs: −$0.75</li>
  <li><strong>Contribution Margin: $13.95 (39.9%)</strong></li>
</ul>

<p>That is a healthy contribution margin. Now change one number — say the brand is running 22% TACoS because it has not optimized its campaigns — and the advertising line becomes $7.70. Contribution margin drops to $10.10, or 28.9%. Still positive, but now the business is far more fragile. A fee increase, a shipping cost spike, or a category return rate that runs higher than expected could push this into negative territory.</p>

<p>Now change the scenario to a lower-margin product — say 40% gross margin instead of the 77% implied above. At 15% TACoS and a 15% referral fee category, you can be at negative contribution margin before you account for storage or returns. This is how Amazon sellers unknowingly build businesses that lose money on every unit shipped.</p>

<h2>How TACoS Targets Map to Healthy Contribution Margins</h2>

<p>TACoS is the most important single metric for evaluating your Amazon advertising program's health. Not ACoS. ACoS only measures ad-attributed revenue — it ignores the organic revenue your advertising is also driving. TACoS measures the true cost of advertising as a proportion of your entire business, which is the only honest accounting of what you are spending.</p>

<p>Here is how TACoS targets relate to contribution margin health:</p>

<ul>
  <li><strong>TACoS below 8%:</strong> Strong organic rank. Advertising is efficient. High probability of healthy contribution margin assuming COGS and fees are in order.</li>
  <li><strong>TACoS 8 to 12%:</strong> The long-term target zone for most mature Amazon products. Advertising is contributing to growth without consuming margin.</li>
  <li><strong>TACoS 12 to 14%:</strong> Acceptable during re-optimization phases or for aggressively scaling a high-margin product. Watch it closely.</li>
  <li><strong>TACoS above 15%:</strong> Warning zone. Either your category is hyper-competitive, your organic rank is weak, your listing has a conversion rate problem, or your campaigns are structurally inefficient. This TACoS level eats contribution margin fast on most products.</li>
</ul>

<blockquote>
  <p>"Daily data is lying to you. Early phases are about growing topline. Optimization phases are about growing profit. Confusing the two leads to premature pullbacks — or worse, scaling a product that is losing money on every unit."</p>
</blockquote>

<p>This is why we distinguish between phases in our <strong>PPC Lifecycle framework</strong>. During launch, you accept a higher TACoS to build velocity and rank. During the trimming phase (targeting 8 to 12% TACoS), you pull back inefficient spend. During re-optimization, you use Search Query Performance data to improve conversion rate so your TACoS drops naturally without sacrificing rank. During growth and scaling, you have the contribution margin headroom to invest in expansion.</p>

<p>The brands that get this wrong conflate phases. They see a high TACoS during launch and panic-cut spend, killing their rank momentum. Or they see growing revenue and do not notice that their contribution margin per unit is shrinking as fees increase and they add inefficient keywords. Revenue is not the signal. Contribution margin is the signal.</p>

<h2>Your Breakeven ACoS Is Your Margin Percentage</h2>

<p>There is a useful shortcut for advertising decisions: your breakeven ACoS equals your contribution margin percentage before advertising. If your contribution margin before ad spend is 40%, then an ACoS of 40% means you break even on that advertising investment. Below 40% ACoS, you are profitable on ad-driven sales. Above 40%, you are paying to acquire customers at a loss.</p>

<p>This is why high-COGS, low-margin products have almost no room for paid advertising. If your contribution margin before ads is 15%, your breakeven ACoS is 15%. There is no realistic way to advertise profitably in a competitive category with a 15% ACoS ceiling — especially during launch, when ACoS is structurally higher. That product needs either a price increase, a COGS reduction, or a category with no meaningful paid competition. It probably should not be on Amazon at all.</p>

<h2>Building a Contribution Margin Tracker</h2>

<p>We build a monthly contribution margin tracker for every brand we work with. The inputs: revenue by ASIN, COGS by ASIN, FBA fees pulled from Seller Central, advertising spend by ASIN (from campaign reports), return data, and storage costs. The output: contribution margin per unit, contribution margin percentage, and TACoS, tracked over time.</p>

<p>Watching these numbers move over time is how you know if your business is improving. Revenue going up while contribution margin percentage is flat or declining means you are scaling a problem, not a business. Contribution margin percentage expanding alongside revenue means you are building something that compounds.</p>

<h2>Work With OBG</h2>

<p>We run contribution margin analysis as a core component of every brand we manage — not as a one-time exercise, but as a standing monthly metric. When we brought on Streetwise Security, contribution margin analysis revealed where the advertising program was consuming margin that should have been profit. After restructuring, they grew sales and profit by over 50% year over year.</p>

<p>Our <strong>Growth Team OS™</strong> runs every Amazon department your brand needs: catalog, creative, PPC, and operations. We back every engagement with a 30-day profitability guarantee: if we do not increase your profitability in the first 30 days, you get a full refund. No questions asked.</p>

<p>If you want to know your actual contribution margin — not your revenue, not your gross margin, but the number that tells you what your Amazon business is actually worth — <a href="/contact">book a free strategy call</a>. We will run the analysis with you.</p>
  `,
}

export default post
