import type { BlogPost } from '@/lib/blog'

const post: BlogPost = {
  title: 'What Does ACoS Stand For? Why It\'s the Wrong Number to Optimize',
  description: 'ACoS is the most-watched Amazon ad metric — and the most misused. Learn what it really means, how to calculate your breakeven, and why TACoS is the number that actually matters.',
  publishDate: '2025-06-01',
  htmlContent: `
    <p>ACoS stands for Advertising Cost of Sale. It is the ratio of what you spent on ads to what those ads generated in attributed revenue. Simple formula. Wildly misunderstood metric.</p>

    <p>Here is the problem: most Amazon sellers optimize for ACoS like it is the finish line. It is not. It is a speed gauge with no map. You can have a beautiful 18% ACoS while your business quietly bleeds money — or you can have a 60% ACoS that is the smartest investment you are making this quarter. The number alone tells you almost nothing without context.</p>

    <p>At Online Brand Growth, we do not optimize for ACoS. We optimize for TACoS — Total Advertising Cost of Sale — and we target 8–12% across mature accounts. That shift in focus changes everything about how you run Amazon advertising.</p>

    <h2>The ACoS Formula (And What It Actually Measures)</h2>

    <p>The math is straightforward:</p>

    <blockquote>
      <strong>ACoS = Ad Spend ÷ Ad-Attributed Revenue × 100</strong>
    </blockquote>

    <p>Spend $1,000 on ads. Amazon credits $5,000 in revenue to those ads. ACoS = 20%.</p>

    <p>But notice what that formula does <em>not</em> include: your organic sales. If you are doing $15,000 in total monthly revenue and only $5,000 is ad-attributed, your ACoS looks like 20% — but your advertising is only touching one-third of your business. The other $10,000 in organic sales is invisible in the ACoS calculation.</p>

    <p>That is not a minor nuance. That is a structural blind spot that causes brands to make bad decisions daily.</p>

    <h2>Breakeven ACoS: The Only ACoS Target That Actually Means Something</h2>

    <p>Before you set an ACoS target, you need to calculate your breakeven ACoS. This is the ACoS at which an ad-attributed sale produces exactly zero contribution margin — not a profit, not a loss, just neutral.</p>

    <p>Here is how to calculate it:</p>

    <ol>
      <li>Start with your selling price.</li>
      <li>Subtract your COGS (landed cost per unit).</li>
      <li>Subtract Amazon referral fees (typically 8–15% depending on category).</li>
      <li>Subtract FBA fulfillment and storage fees.</li>
      <li>Subtract any other variable costs per unit.</li>
      <li>What remains is your maximum allowable ad spend per unit before the sale becomes margin-neutral.</li>
      <li>Divide that number by your selling price. That percentage is your breakeven ACoS.</li>
    </ol>

    <p>Example: You sell a product at $40. COGS is $8. Referral fee is $6. FBA fee is $5. Other costs total $1. Non-ad costs = $20. Maximum ad spend per unit = $20. Breakeven ACoS = $20 ÷ $40 = <strong>50%</strong>.</p>

    <p>We use Sellerise to pull this automatically across every ASIN we manage. It feeds directly into our campaign targets by product. Not by category, not by a gut feeling — by the actual unit economics of each SKU.</p>

    <p>Now here is where it gets important. A 30% ACoS on a product with 50% breakeven is excellent. A 30% ACoS on a product with 25% breakeven is losing money on every ad click. The same number. Completely opposite outcomes. This is why universal ACoS targets are useless.</p>

    <h2>High ACoS Isn't Automatically Bad. Unclear Intent Is.</h2>

    <p>There are phases of your Amazon business where running above your breakeven ACoS is the correct decision. Not a compromise — the correct decision.</p>

    <p>During the launch phase of a new product, you have no organic rank, no purchase history, and no review velocity. Amazon's algorithm has no signal on your listing. The only way to build that signal fast is to drive sales volume through advertising — even at a loss per unit in the short term.</p>

    <p>Our PPC Product Lifecycle Framework accounts for this directly. In the <strong>Launch Phase</strong> (first 60 days), we target up to 2x breakeven ACoS. If breakeven is 40%, we will run ads at up to 80% ACoS intentionally. Why? Because we are not trying to make money on those ads — we are trying to buy rank. Organic rank that will eventually generate sales without any ad spend at all.</p>

    <blockquote>
      "Non-branded ads at launch don't 'scale.' They bleed money and teach the algorithm that you don't convert for relevant queries."
    </blockquote>

    <p>High ACoS during launch is a feature, not a bug — as long as you know why it is high, how long it will last, and what you are buying with it.</p>

    <h2>TACoS: The Number OBG Actually Optimizes For</h2>

    <p>TACoS is the metric that tells the real story:</p>

    <blockquote>
      <strong>TACoS = Ad Spend ÷ Total Revenue (ad-attributed + organic) × 100</strong>
    </blockquote>

    <p>Same example. You spend $1,000 on ads. Ad-attributed revenue is $5,000. But total revenue — including organic sales — is $15,000. Your TACoS is $1,000 ÷ $15,000 = 6.7%.</p>

    <p>Now watch what happens over time. In month one of a launch, TACoS might be 40%. Every sale is ad-driven. But as you build rank and organic velocity, more sales come in without ads. Month three, TACoS drops to 20%. Month six, it is 10%. Your ad spend barely changed — but your organic engine is growing underneath it.</p>

    <p>That declining TACoS over rising total revenue is the signal we are watching. It means your advertising investment is compounding. Every dollar spent on ads is building something permanent.</p>

    <p>High TACoS is not automatically bad. Unclear intent is. If TACoS is high because you are in launch phase and building rank, that is a plan. If TACoS is high because you are running the same campaigns you ran 18 months ago with no strategic adjustment, that is waste.</p>

    <p>Our target for mature accounts: <strong>8–12% TACoS.</strong> Some accounts get below 8%. Some categories demand 14%. But that range is the north star we manage toward.</p>

    <h2>The PPC Product Lifecycle Framework: ACoS Targets by Phase</h2>

    <p>At OBG, we do not apply the same ACoS logic to every product at every stage. We manage through four phases, each with different targets and different rules:</p>

    <h3>Phase 1: Launch (Days 1–60)</h3>
    <p>Target up to 2x breakeven ACoS. Brand-only or tightly relevant keywords only. KPIs are sales velocity and organic ranking — not ACoS efficiency. This is not the time to optimize for profit. It is the time to buy the organic position that makes future profit possible.</p>

    <h3>Phase 2: Trimming (Around Day 60–75)</h3>
    <p>Cut any keyword running more than 20% above breakeven ACoS. No exceptions. Begin targeting 8–12% TACoS. This phase is about eliminating the bleed while protecting the rank you have built.</p>

    <h3>Phase 3: Growth and Scaling</h3>
    <p>Add Sponsored Brands and Sponsored Display campaigns built on your best-performing exact match keywords. Open new research campaigns with limited budgets — up to 50% above breakeven ACoS — to find new converting terms. TACoS target expands slightly to 8–14% to accommodate the new discovery spend.</p>

    <h3>Phase 4: Maturity</h3>
    <p>Pause everything that never reached breakeven. Scale what works. TACoS target: 8–12% permanently. Only advertise a keyword if you are above market conversion rate and want to rank for it — or if it is profitable below your breakeven ACoS.</p>

    <h2>The Branded vs. Non-Branded ACoS Trap</h2>

    <p>One of the most common mistakes we see in inherited accounts: blending branded and non-branded ACoS into a single account-level number.</p>

    <p>Your branded keyword campaigns — ads that trigger on your own brand name — almost always have dramatically lower ACoS. These customers are already looking for you. They would likely buy regardless of whether the ad appeared. Including those conversions in your aggregate ACoS makes your non-branded campaigns look far more efficient than they are.</p>

    <p>Separate them. Always. Your non-branded ACoS tells you what you are actually paying to compete. Your branded ACoS tells you what you are paying to defend territory you already own. Both matter. Mixed together, neither is meaningful.</p>

    <h2>What We Actually Track (And Why)</h2>

    <p>When we took on NumNum Baby, their ad account was optimized for ACoS. Campaigns looked clean. Numbers looked acceptable. But TACoS was sitting at 28% and organic rank on their core keywords was drifting. The ACoS metric was hiding a structural problem.</p>

    <p>We restructured through our Lifecycle Framework, rebuilt the campaign architecture, and shifted the optimization target to TACoS. Eighteen months later: $100K to $3M in annual revenue — a 30x increase. Organic rank became the growth engine, ads became the accelerant, and TACoS dropped into our target range as the organic base compounded.</p>

    <p>That is what happens when you stop optimizing for the easy metric and start optimizing for the one that reflects the actual health of your business.</p>

    <h2>Work With OBG</h2>

    <p>If your current Amazon PPC strategy is built around ACoS targets with no connection to your actual unit economics or TACoS trajectory, you are flying without instruments. We have grown brands from six figures to eight figures using a framework built on real margin math, TACoS as the north star, and phase-appropriate aggression — not arbitrary efficiency targets.</p>

    <p>OBG offers a free strategy call and backs every engagement with a 30-day profitability guarantee. If we cannot show you a clear path to better outcomes in the first 30 days, you do not owe us for that time. <a href="/contact">Schedule your free strategy call</a> and let us look at your numbers together.</p>
  `,
}

export default post
