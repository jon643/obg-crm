import type { BlogPost } from '@/lib/blog'

const post: BlogPost = {
  title: 'Amazon Ad Management: What It Actually Involves Day-to-Day',
  description: 'Real Amazon ad management is not bid changes. It is reading SQP data, managing TACoS across product lifecycle phases, and knowing exactly when not to spend.',
  publishDate: '2025-12-10',
  htmlContent: `
    <p>Most people think Amazon ad management means adjusting bids. Move a bid up, move a bid down, check ACoS, write a monthly report. That is not management. That is maintenance. And maintenance, alone, does not grow a business.</p>

    <p>Real Amazon ad management is a daily practice of interpreting data, making strategic decisions, catching problems before they compound, and knowing — with conviction — when the right move is to spend less, not more.</p>

    <p>Here is what it actually looks like inside an account managed the right way.</p>

    <h2>Daily Data Is Lying to You</h2>

    <p>The first thing to understand about Amazon advertising data: the daily view is almost always misleading. Attribution windows on Sponsored Products run 7 days. On Sponsored Brands, 14 days. That means today's ACoS includes revenue from clicks that happened last week. Yesterday's spend has not yet generated its full attributed revenue. The numbers are always in motion, always trailing, always incomplete in the short window.</p>

    <p>Brands that optimize based on single-day or even single-week ACoS snapshots make reactive decisions on incomplete information. They cut bids on keywords that look expensive today but are building organic rank that pays off over months. They increase budgets on days that look efficient purely due to attribution timing. The daily view, optimized in isolation, actively undermines the strategy.</p>

    <p>We look at daily data to catch anomalies — sudden spend spikes, budget depletions, impression drops that signal something structural has changed. We make strategic decisions on 14-day and 30-day windows minimum. Early phases are about growing topline. Optimization phases are about growing profit. Confusing the two leads to premature pullbacks and stalled momentum.</p>

    <h2>What Actually Gets Managed Week Over Week</h2>

    <p>Here is what real weekly Amazon ad management looks like in our accounts:</p>

    <h3>Search Query Performance Analysis</h3>
    <p>SQP data from Amazon Brand Analytics is the most underused resource in most accounts we inherit. It shows you what customers actually searched before purchasing your product — not just what triggered an ad click, but what drove a conversion. We pull SQP data weekly and compare it against our active keyword targeting. Are our highest-converting organic search terms covered in our SP campaigns? Are search terms that are driving sales but running in auto campaigns getting graduated to exact match? Are there terms in SQP that we are not targeting at all?</p>

    <p>SQP also reveals CVR by search term. If a term is driving impressions but not converting at or above market average, that is a signal — either the listing is not resonating for that query, or the intent behind the search does not match the product. Either way, it is information that should change what we do next.</p>

    <h3>Search Term Harvesting and Negative Keyword Work</h3>
    <p>Every broad match and auto campaign generates search term data. Weekly, we review what terms triggered ads, identify new converting terms that should be graduated to exact match campaigns, and negate terms that are irrelevant or non-converting. This is not setup work. It is ongoing account hygiene that compounds over time. Accounts that go three months without serious negative keyword work are wasting budget on increasingly irrelevant traffic.</p>

    <h3>Bid Optimization by Keyword and Placement</h3>
    <p>We use Scale Insights for bid automation — rule-based bid logic that adjusts automatically based on conversion rate thresholds, position targets, and spend caps. But automation handles execution, not judgment. Every week, we review the automated recommendations, override where the data does not tell the full story, and adjust bid rules as performance evolves.</p>

    <p>Placement bidding is frequently overlooked. Top-of-search placements almost always convert differently than rest-of-search and product page placements. We manage placement multipliers separately by keyword tier — aggressive multipliers on proven exact match terms at top-of-search, conservative on broader research terms. Blending placement performance into a single bid without adjustments leaves real efficiency on the table.</p>

    <h3>TACoS Tracking Across the Portfolio</h3>
    <p>TACoS — Total Advertising Cost of Sale — is the metric we manage toward at the account level. We track it weekly by ASIN: ad spend divided by total revenue (ad-attributed plus organic). A healthy, mature account should be trending toward 8–12% TACoS. We use Sellerise to pull profitability by ASIN, combined with Campaign Manager data, to calculate TACoS that reflects the real advertising load on each product's economics.</p>

    <p>When TACoS drifts above target, we diagnose before we react. Is organic rank softening, meaning we need more defensive spend on core terms? Is wasted spend compounding in research campaigns that have not been trimmed? Is a new campaign type pulling budget without producing TACoS-appropriate returns? The number tells you something is wrong. The diagnosis tells you what to do about it.</p>

    <h3>Budget Pacing and Daypart Management</h3>
    <p>Campaigns that run out of budget at 2 PM have zero impression share for the rest of the day — including evening hours that typically carry higher conversion rates for consumer goods. We monitor budget pacing daily and adjust to prevent mid-day depletions. We also watch daypart conversion data over time: if a product category consistently converts higher between 6 PM and midnight, bid adjustments by time of day improve efficiency without reducing coverage.</p>

    <h2>The Decisions That Matter Most Are Often "Do Not Spend"</h2>

    <p>Here is the decision that separates real ad management from mechanical bid adjustment: knowing when the right answer is to stop spending on something.</p>

    <p>Wasted spend does not announce itself. It accumulates gradually — a keyword that has 500 clicks and zero conversions over two months, a broad match campaign that keeps triggering on tangentially related terms, a Sponsored Display campaign targeting a product page audience that has never reached breakeven. Each one looks small in isolation. Together, they represent a meaningful share of budget that could be redirected to what is actually working.</p>

    <p>Our rule: if a keyword has run for the full trimming phase window and is more than 20% above breakeven ACoS, it gets cut. Not paused for review next quarter. Cut. The account tightens around what converts, and that concentration of spend on proven terms improves performance across the board.</p>

    <p>The most effective thing we did in the NumNum Baby account in the first 60 days was not adding campaigns — it was cutting the ones that were bleeding budget without building rank. Once the account was clean, the growth had room to happen. Eighteen months later, the brand went from $100K to $3M in annual revenue and ultimately to an 8-figure exit.</p>

    <h2>The Re-Optimization Cycle</h2>

    <p>Beyond ongoing weekly management, we run a deeper Re-Optimization Phase quarterly on every mature account. The process:</p>

    <ol>
      <li>Pull SQP data for the trailing 90 days.</li>
      <li>Pull organic ranking data for the same period using DataDive and Datarova.</li>
      <li>Identify keywords where our conversion rate is above the market average for the category — these get pushed harder in PPC and woven back into the listing copy and backend keywords.</li>
      <li>Identify keywords where our CVR is below market average — these get paused from PPC, and we investigate whether the listing needs optimization or the keyword is simply misaligned with our product's actual buyer.</li>
      <li>Review competitor keyword coverage to identify high-volume terms where they rank organically but we do not — these become the research campaign targets for the next 90 days.</li>
    </ol>

    <p>This cycle is what prevents a mature account from going stale. The market changes. Competitors adjust. Customer language for a category evolves. The re-optimization cycle keeps your account aligned with what is actually working in the market right now, not what was working when the campaigns were first built.</p>

    <h2>What Good Ad Management Reporting Looks Like</h2>

    <p>The reporting in most agency engagements tells clients what happened. It rarely explains why, or what the implication is for next month. Good reporting should cover:</p>

    <ul>
      <li>TACoS by ASIN and trend direction over the period</li>
      <li>Total revenue (ad-attributed plus organic) and the shifting ratio between them</li>
      <li>New-to-brand percentage from Sponsored Brands campaigns</li>
      <li>Organic ranking movement on primary keywords</li>
      <li>Search term efficiency report — top converting search terms, top wasted spend terms negated this period</li>
      <li>Phase status for each ASIN — are we in launch, trimming, growth, or maturity, and what changed this month</li>
    </ul>

    <p>If your monthly ad management report does not tell you the phase each product is in and what strategic decision was made because of it, you are getting maintenance reporting, not management reporting.</p>

    <h2>Work With OBG</h2>

    <p>Amazon ad management at OBG is a daily practice built on real data interpretation, phase-aware strategy, and the discipline to stop spending on what is not working. We have grown four brands to 7 figures since 2018 using the same framework we bring to every client account. Not by spending more — by spending right.</p>

    <p>OBG offers a free strategy call and a 30-day profitability guarantee. If we cannot show you a clear path to better outcomes within the first 30 days, you do not owe us for that time. <a href="/contact">Schedule your free strategy call</a> and let us walk through what is actually happening in your account right now.</p>
  `,
}

export default post
