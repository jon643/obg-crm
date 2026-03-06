import type { BlogPost } from '@/lib/blog'

const post: BlogPost = {
  title: 'Amazon Advertising Strategy: When to Be Aggressive and When to Pull Back',
  description: 'Most Amazon advertising advice tells you to spend more. Smart strategy tells you when to spend, when to cut, and how to build organic rank that compounds over time.',
  publishDate: '2026-01-08',
  htmlContent: `
    <p>Early aggression is not always smart aggression.</p>

    <p>That is the sentence most Amazon advertisers need to hear and most Amazon agencies will never say — because their business model rewards spend, not discipline. The reality is that the timing and intent behind your ad spend matters more than the volume of it. Spend the wrong dollars at the wrong stage, and you teach the algorithm that your listing does not convert. Spend the right dollars at the right stage, and you build an organic ranking engine that compounds for years.</p>

    <p>Amazon advertising strategy is not about how much you spend. It is about knowing exactly what you are buying with every dollar, at every phase of your product's life on the platform.</p>

    <h2>Strategy Means Knowing the Phase You Are In</h2>

    <p>The single most common advertising mistake we see in inherited accounts is this: brands running their business at the same strategic posture regardless of whether they are launching a product, scaling a winner, or defending a mature listing. Same campaign types. Same bid logic. Same ACoS targets. Different products, different competitive dynamics, different moments in the lifecycle — all managed with the same blunt instrument.</p>

    <p>That is not a strategy. That is a default setting.</p>

    <p>A real Amazon advertising strategy starts by knowing exactly where each product sits in its lifecycle — and managing it accordingly. At OBG, we run every product through our PPC Product Lifecycle Framework. Four phases, each with distinct objectives, different campaign structures, and different definitions of success.</p>

    <h2>Phase 1: Launch — Buy Rank, Not Efficiency</h2>

    <p>The launch phase covers roughly the first 60 days of a new product's life on Amazon. During this window, you have no organic rank, no review velocity, and no purchase history. The algorithm has no signal on your listing. Your conversion data is sparse. Your keyword rankings are effectively zero.</p>

    <p>The goal of advertising during this phase is not to be profitable. The goal is to build the sales velocity and keyword signal that earns organic rank — because organic rank is what generates sales without requiring ad spend to sustain them.</p>

    <p>We target up to 2x breakeven ACoS during launch. If breakeven is 40%, we will accept 80% ACoS intentionally. This is not a failure — it is a deliberate investment in rank acquisition. The ads are not expected to generate margin at this stage. They are expected to generate the conversion history that trains the algorithm to surface the listing for relevant searches.</p>

    <p>During launch, we run brand-only or tightly relevant keywords only. No broad match campaigns designed to "find new terms." No category targeting campaigns looking for discovery. Non-branded broad campaigns at this stage do not scale — they bleed money and teach the algorithm that you do not convert for relevant queries. Tight, relevant, exact match targeting only.</p>

    <p>KPIs in the launch phase: <strong>sales velocity and organic ranking movement.</strong> Not ACoS. Not ROAS. Not TACoS. Those numbers will be ugly and should be. Watch the rank, not the cost.</p>

    <h2>Phase 2: Trimming — Eliminate the Bleed</h2>

    <p>Around day 60 to 75, the trimming phase begins. By now, you have enough performance data to separate what is working from what is spending without converting. This is the phase most agencies skip — they let launch-phase logic run indefinitely, and the wasted spend compounds month over month.</p>

    <p>The rule is simple: cut any keyword running more than 20% above your breakeven ACoS. No exceptions, no second chances. These keywords are not converting at a rate that justifies the cost. Keeping them in the account sends negative conversion signals to the algorithm and drains budget from keywords that are actually working.</p>

    <p>The TACoS target we begin managing toward in this phase: 8–12%. If you are above that range, it means your ad spend is too high relative to your total business output — either organic rank has not built sufficiently or you are over-spending on non-converting terms.</p>

    <p>This is also the phase where we begin serious negative keyword work. Every irrelevant search term that triggered an ad gets negated. The account tightens. Spend concentrates on what converts.</p>

    <h2>Phase 3: Growth and Scaling — Expand With Precision</h2>

    <p>Once the core Sponsored Products campaigns are performing within target and TACoS is in range, we expand deliberately. This is the phase where Sponsored Brands and Sponsored Display earn their place in the account.</p>

    <p>The rule here: Sponsored Brands and SD campaigns get built exclusively on top-performing exact match keywords from Phases 1 and 2. You do not launch SB campaigns on untested terms. You take what is already converting in SP and amplify it with additional ad formats. The keywords have proven themselves. The creative layers on top of proven performance.</p>

    <p>We also open new research campaigns in the growth phase — broad match and phrase match with limited budgets targeting terms up to 50% above breakeven ACoS. This is controlled discovery. We are looking for new converting terms, but we are managing the cost of finding them.</p>

    <p>TACoS target expands slightly in this phase: 8–14%, to accommodate the new discovery spend without penalizing the core account for legitimate research investment.</p>

    <p>This is also where we activate AMC audiences. Testing Amazon Marketing Cloud's "High Interest Based on Shopping History" audience across our accounts has been one of the most consistent performance improvements we have found. In most cases, CVR goes significantly up and the impact versus the increase in CPC makes ACoS come way down. We set a 25% bid adjustment and optimize weekly — Campaign > Bid Adjustments > Audiences > High Interest Based on Shopping History.</p>

    <h2>Phase 4: Maturity — Protect and Compound</h2>

    <p>In the maturity phase, the advertising account reflects a business with established organic rank and proven conversion rates. The goal shifts from growth to efficiency and defense.</p>

    <p>We pause everything that never reached breakeven — permanently. These keywords have had their chance. Running them longer does not change the outcome; it just increases the cost. The account concentrates entirely on what has proven itself over time.</p>

    <p>TACoS target: <strong>8–12%, permanently.</strong> We monitor for drift upward — which typically signals either organic rank softening (requiring defensive response) or wasted spend compounding (requiring another trimming cycle).</p>

    <p>At maturity, we run the Re-Optimization Phase: pull SQP data alongside organic ranking data, find keywords where our conversion rate is above market average, push those harder in PPC and weave them back into the listing copy and backend. Keywords where CVR is below market get paused. This cycle repeats quarterly.</p>

    <p>The only rule for ongoing keyword decisions at maturity: only advertise a keyword if you are above market conversion rate and want to rank for it — or if it is profitable below your breakeven ACoS. Everything else is charity to Amazon's ad revenue.</p>

    <h2>The Competitor Intelligence Layer</h2>

    <p>No advertising strategy operates in isolation. Your competitors are leaving signals constantly — in their keyword focus, their pricing decisions, their creative angles, and the terms where they rank organically but you do not.</p>

    <p>Instead of asking "what should we do?", we ask "who is already winning — and why?" We use DataDive to map competitor keyword coverage, identify terms where dominant competitors rank that our clients do not, and find the positioning angles their listings emphasize that customers respond to. You do not need to copy. You need to understand.</p>

    <p>That competitor intelligence feeds directly into research campaign targeting in the growth phase and into listing optimization decisions during the re-optimization cycle. The market is always teaching you something. The question is whether you are paying attention.</p>

    <h2>TACoS Is the North Star</h2>

    <p>Every phase, every campaign decision, every bid adjustment ultimately serves one north star: a healthy and declining TACoS over a growing total revenue base.</p>

    <p>TACoS = Ad Spend ÷ Total Revenue (ad-attributed plus organic). When TACoS is declining while total revenue is growing, it means your advertising is building organic rank that is generating sales without requiring ongoing ad spend to sustain them. That is the compounding mechanism that turns a well-managed Amazon ad account into a durable business asset.</p>

    <p>When we took Neutralyze — OBG's own brand — from zero to 7 figures in the first year with zero dollars of outside traffic, the TACoS curve was the instrument we watched. Launch phase spend was aggressive and intentional. Trimming phase was disciplined and fast. Growth phase was controlled. By the time we hit maturity, organic rank was doing the heavy lifting and ad spend was the accelerant, not the engine.</p>

    <p>That is what a real Amazon advertising strategy looks like. Not a monthly ACoS report. A phased plan with clear objectives, specific targets, and a mechanism for compounding organic growth over time.</p>

    <h2>Work With OBG</h2>

    <p>Most Amazon advertising strategies are not strategies — they are default campaign settings with monthly reporting layered on top. We build phase-aware advertising systems that treat each product as a living business asset with a lifecycle, not a set of campaigns to manage indefinitely on autopilot.</p>

    <p>OBG offers a free strategy call and a 30-day profitability guarantee. If we cannot show you a clear path to better performance in the first 30 days, you do not owe us for that time. <a href="/contact">Schedule your free strategy call</a> and let us map out what phase your products are actually in — and what the right strategy is from here.</p>
  `,
}

export default post
