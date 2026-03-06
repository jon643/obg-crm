import type { BlogPost } from '@/lib/blog'

const post: BlogPost = {
  title: 'Amazon PPC Bid Strategy: How OBG Sets and Adjusts Bids',
  description: 'Learn the Amazon PPC bid strategy OBG uses to scale brands profitably. Start at breakeven CPC, wait for real data, then adjust based on CVR.',
  publishDate: '2025-11-02',
  htmlContent: `
    <p>Daily data is lying to you.</p>
    <p>Every day, sellers log into their ad console, see a keyword at 45% ACoS, and slash the bid. Two days later, they wonder why impressions tanked and sales followed. The keyword wasn't broken. Their patience was.</p>
    <p>Amazon PPC bid strategy isn't about reacting fast. It's about reacting right. And that requires understanding something most sellers miss: bidding is a feedback loop, not a set-and-forget number.</p>
    <p>Here's exactly how we set and adjust bids at OBG—the same methodology that helped Streetwise Security achieve 50%+ sales and profit growth year over year.</p>

    <h2>Why Most Amazon PPC Bid Strategies Fail</h2>
    <p>The typical approach looks like this:</p>
    <ul>
      <li>Launch campaign with "competitive" bids based on suggested ranges</li>
      <li>Check performance daily</li>
      <li>Panic when ACoS spikes</li>
      <li>Cut bids aggressively</li>
      <li>Watch impressions disappear</li>
      <li>Raise bids again</li>
      <li>Repeat forever</li>
    </ul>
    <p>This isn't strategy. It's whack-a-mole with your ad budget.</p>
    <p>The fundamental problem: you're making decisions without enough data to make them correctly. Amazon's attribution window is 7 days. A click today might convert next Tuesday. That keyword you killed on Monday? It was about to deliver three sales.</p>
    <p>Early aggression is not always smart aggression.</p>

    <h2>The OBG Approach to Amazon PPC Bid Strategy</h2>
    <p>Our bid methodology has three phases. No shortcuts. No exceptions.</p>

    <h3>Phase 1: Start at Breakeven CPC</h3>
    <p>Before we touch a bid, we calculate the breakeven CPC for every product. Here's the formula:</p>
    <p><strong>Breakeven CPC = Product Price × Target ACoS × Expected CVR</strong></p>
    <p>Let's say you're selling a $30 product. Your target ACoS is 25%. Historical CVR on similar keywords is 12%.</p>
    <p>Breakeven CPC = $30 × 0.25 × 0.12 = $0.90</p>
    <p>That's your starting bid. Not Amazon's suggestion. Not what competitors are paying. Your number, based on your economics.</p>
    <p>For new products without historical data, we use category benchmarks from DataDive and adjust conservatively. We'd rather start lower and scale up than burn budget discovering we were too aggressive.</p>

    <h3>Phase 2: Let Data Accumulate (2-3 Weeks Minimum)</h3>
    <p>This is where discipline separates professionals from amateurs.</p>
    <p>After launching, we don't touch bids for 2-3 weeks. Period. The only exceptions:</p>
    <ul>
      <li>Runaway spend on a single keyword (more than 20% of daily budget)</li>
      <li>Zero impressions after 7 days (bid floor too low)</li>
      <li>Obvious irrelevant traffic (wrong match type catching garbage)</li>
    </ul>
    <p>Everything else stays. Even if a keyword looks terrible on day 4. Even if ACoS is at 80%. The data isn't real yet.</p>
    <p>We need statistical significance. For most keywords, that means at least 20-30 clicks before we trust the conversion rate. At a 10% CVR, that's 2-3 orders. At 5% CVR, it's 1-2 orders. Small sample sizes lie constantly.</p>
    <p>Our PPC Lifecycle Framework maps this explicitly. During the Launch phase, we accept up to 2x breakeven ACoS for approximately 60 days. We focus only on branded and exact match keywords. The goal isn't profitability—it's data collection and rank building.</p>

    <h3>Phase 3: Adjust Based on CVR vs Target ACoS</h3>
    <p>After sufficient data accumulates, we enter the adjustment phase. Here's our decision tree:</p>
    <p><strong>If CVR is above target and ACoS is below target:</strong> Raise bids 10-15%. This keyword is performing. Get more of it.</p>
    <p><strong>If CVR is above target but ACoS is above target:</strong> Hold steady. Strong conversion rate means the keyword is relevant. High ACoS often means we're winning competitive placements. Monitor for another week.</p>
    <p><strong>If CVR is below target and ACoS is above target:</strong> Reduce bids 10-20%. The keyword is converting, just not efficiently at this price point.</p>
    <p><strong>If CVR is significantly below target and ACoS is way above target:</strong> Pause the keyword. It's either irrelevant or the competition has structural advantages we can't overcome with bids alone.</p>
    <p>Notice what's missing? We never make bid decisions based on ACoS alone. ACoS without context is meaningless. A 50% ACoS keyword converting at 25% might be your best performer. A 15% ACoS keyword converting at 3% might be eating budget that should go elsewhere.</p>

    <h2>The TACoS Reality Check</h2>
    <p>Revenue is vanity. Contribution margin is sanity.</p>
    <p>Individual keyword ACoS matters for optimization. But the metric that actually determines profitability is TACoS—total ad spend divided by total revenue.</p>
    <p>Here's why this matters for bid strategy: aggressive bids on high-converting keywords often improve TACoS even when they increase ACoS. The extra sales velocity boosts organic rank, which drives more organic sales, which dilutes your advertising cost across more revenue.</p>
    <p>When we scaled NumNum Baby from $100K to $3M in 18 months, we weren't optimizing for the lowest possible ACoS. We were optimizing for the best TACoS trajectory while maintaining contribution margin targets. Doug Gonterman walked away with an 8-figure exit because we focused on the right number.</p>

    <h2>Bid Adjustments by Placement</h2>
    <p>Amazon gives you placement modifiers: Top of Search, Rest of Search, and Product Pages. Most sellers ignore these or set them randomly.</p>
    <p>Our approach:</p>
    <p><strong>Top of Search:</strong> Start with a 20-30% increase for proven exact match keywords with strong CVR. This placement converts best for purchase-intent searches. If you're winning, win bigger.</p>
    <p><strong>Product Pages:</strong> Usually leave at 0% or slightly negative. These are browsing placements where users are comparing options. CVR is typically lower. Unless you have a significant price or review advantage over competitors, don't overpay here.</p>
    <p><strong>Rest of Search:</strong> Default placement. Your base bid applies here. No modifier needed.</p>
    <p>We track placement performance separately using Scale Insights. After 3-4 weeks of data, we adjust modifiers based on actual CVR by placement, not assumptions.</p>

    <h2>When to Use Dynamic Bidding</h2>
    <p>Amazon offers three dynamic bidding options:</p>
    <ul>
      <li><strong>Down Only:</strong> Amazon reduces your bid when a conversion is unlikely</li>
      <li><strong>Up and Down:</strong> Amazon adjusts both directions based on conversion likelihood</li>
      <li><strong>Fixed:</strong> Your bid stays exactly as set</li>
    </ul>
    <p>Our recommendation: Down Only for most campaigns.</p>
    <p>Up and Down sounds smart in theory. In practice, Amazon's algorithm optimizes for Amazon's goals, not yours. They're happy to bid you up 100% for a "high-converting" opportunity that still doesn't meet your profitability targets.</p>
    <p>Fixed bids make sense only for defensive campaigns—branded terms where you need to hold position regardless of Amazon's conversion predictions.</p>
    <p>Down Only gives you control while still benefiting from Amazon's ability to recognize low-quality traffic.</p>

    <h2>The Weekly Bid Review Cadence</h2>
    <p>After the initial 2-3 week learning period, we move to weekly bid reviews. Not daily. Weekly.</p>
    <p>Every Friday, we run through this checklist using Datarova for competitive context and Scale Insights for performance data:</p>
    <ol>
      <li>Identify keywords with 30+ clicks that haven't converted in 7+ days—candidates for bid reduction or pause</li>
      <li>Identify keywords with CVR above category average—candidates for bid increase</li>
      <li>Check Search Query Performance reports for CVR vs market benchmark—if we're converting below market, it's a listing problem, not a bid problem</li>
      <li>Review TACoS trend—if it's creeping up while revenue is flat, we're losing efficiency somewhere</li>
      <li>Adjust bids in 10-20% increments maximum—no dramatic swings</li>
    </ol>
    <p>High TACoS isn't automatically bad. Unclear intent is. If TACoS is rising but so is total profit, the strategy is working. If TACoS is rising and profit is flat, something is broken.</p>

    <h2>The Bid Strategy Mistake That Costs Six Figures</h2>
    <p>The most expensive mistake we see: treating bid optimization as the solution to conversion problems.</p>
    <p>If your CVR is 5% and category average is 12%, no bid strategy will save you. You'll either pay too much for conversions or get too few of them. The problem isn't your Amazon PPC bid strategy. It's your listing, your price, your reviews, or your product-market fit.</p>
    <p>We use our Revenue Rescue Decision Tree to diagnose this. Traffic vs conversion split tells you where to focus. If traffic is strong but conversion is weak, bids aren't the lever—listing optimization is.</p>
    <p>Fix the conversion problem first. Then bid optimization becomes a multiplier instead of a band-aid.</p>

    <h2>Work With OBG</h2>
    <p>If you want to see how this would work for your brand, <a href="/#book-call">book a free strategy session</a>. We'll audit your account, identify the fastest wins, and map out exactly how we'll execute. And if we don't increase your profitability in the first 30 days, you don't pay. Zero risk.</p>
  `,
}

export default post