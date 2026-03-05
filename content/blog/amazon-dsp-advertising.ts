import type { BlogPost } from '@/lib/blog'

const post: BlogPost = {
  title: 'Amazon DSP Advertising: Why Most Brands Use It Too Early',
  description: 'Amazon DSP is powerful — but only for brands that have already built a profitable organic and Sponsored Products foundation. Here is when DSP actually makes sense.',
  publishDate: '2025-06-01',
  htmlContent: `
    <p>Amazon DSP is one of the most oversold tools in the Amazon advertising ecosystem. Agencies pitch it as a growth lever. Brands buy it expecting scale. Then they look at the numbers three months in and realize they have been paying for programmatic impressions on a listing that has not yet proven it can convert.</p>

    <p>DSP — Amazon's Demand Side Platform — is a powerful advertising tool. It is also a tool that destroys budget when deployed before the underlying business is ready for it. The question is not whether to use DSP. The question is when.</p>

    <p>At OBG, the answer is clear: DSP belongs in the Growth and Maturity phases of a product's lifecycle. Not before. And even then, it is an amplifier — not a foundation.</p>

    <h2>What Amazon DSP Actually Is</h2>

    <p>Amazon DSP is a programmatic advertising platform that lets you buy display and video ad placements across Amazon's owned properties and the broader internet — including Amazon.com, IMDb, Twitch, Fire TV, and millions of third-party publisher sites. Unlike Sponsored Products, Sponsored Brands, and Sponsored Display (which are self-serve and keyword-triggered), DSP uses Amazon's first-party shopper data to target audiences based on behavior, purchase history, category interest, and demographics.</p>

    <p>The key distinction: Sponsored Ads are intent-based. A customer searches for something, sees your ad. DSP is audience-based. You reach a defined segment of Amazon shoppers wherever they are — whether or not they are currently searching for your product category.</p>

    <p>That is a fundamentally different advertising mechanism. It requires a fundamentally different strategy.</p>

    <h2>Why DSP Fails When Deployed Too Early</h2>

    <p>DSP surfaces your product to people who are not currently searching for it. That means the burden of converting an impression into a sale falls entirely on the strength of your listing — your images, title, reviews, price, and conversion history.</p>

    <p>If your listing does not yet convert well, DSP traffic makes the problem worse. You pay for the impression. The shopper lands on a listing with 12 reviews, a mediocre conversion rate, and limited purchase history. They do not buy. The platform records a non-converting interaction. Your advertising efficiency craters.</p>

    <p>This is the trap: brands see DSP as a way to drive more traffic to a listing that is underperforming. More traffic is not the fix for a conversion problem. More traffic to a listing that does not convert just costs more money and generates more data that confirms the listing is not working.</p>

    <p>The prerequisite for DSP is a listing that converts. Before running any DSP, we need to see that the organic and Sponsored Products foundation is solid — which means:</p>

    <ul>
      <li>Sponsored Products campaigns at or below breakeven ACoS on core keywords</li>
      <li>TACoS trending toward the 8–12% target range</li>
      <li>Organic rank on primary keywords improving or stable</li>
      <li>Conversion rate at or above the category market average</li>
      <li>Sufficient review count and rating to compete in the category</li>
    </ul>

    <p>If those conditions are not met, DSP budget is better spent fixing the listing and tightening the SP campaign structure. Full stop.</p>

    <h2>AMC Audiences: The Bridge Between SP and DSP</h2>

    <p>Before moving to full DSP, there is a middle step that most brands skip: Amazon Marketing Cloud audiences within Sponsored Display campaigns.</p>

    <p>AMC gives you access to audience targeting layers — including one we have tested extensively across our accounts: "High Interest Based on Shopping History." The results are consistent. In nearly every account where we have activated this audience, CVR goes significantly up and ACoS comes down. The increase in CPC is more than offset by the improvement in conversion rate.</p>

    <p>The setup is straightforward: Campaign > Bid Adjustments > Audiences > High Interest Based on Shopping History. Set a 25% bid adjustment. Optimize weekly. Do this before spending a dollar on full DSP managed service.</p>

    <p>AMC audience targeting gives you a significant portion of DSP's power — better audience qualification, higher CVR — within the self-serve Sponsored Display interface. It is lower cost, faster to activate, and does not require a managed service minimum spend. For most brands in the growth phase, AMC audiences on SD campaigns are the right next step, not a full DSP engagement.</p>

    <h2>When DSP Actually Makes Sense</h2>

    <p>DSP earns its place in accounts that have established organic traction and proven SP efficiency. Specifically, we begin evaluating DSP when a brand enters the Growth or Maturity phase and meets the conversion prerequisites above. The use cases where DSP delivers real return:</p>

    <h3>Retargeting Warm Audiences</h3>
    <p>Amazon's DSP retargeting audiences — shoppers who viewed your product detail page but did not purchase, or who purchased once and have not returned — are among the highest-intent audiences in digital advertising. These are people who have already shown interest in your specific product. Retargeting them with display ads is a high-probability investment, not a speculative one. This is typically the first DSP tactic we layer in.</p>

    <h3>Conquesting Competitor Categories</h3>
    <p>DSP allows you to target audiences who have viewed or purchased competitor products in your category. For brands in the Growth phase with proven conversion rates, category conquest campaigns can accelerate new customer acquisition efficiently — you are reaching people who buy in your category, from brands they already know, with a proposition to switch.</p>

    <h3>Lifestyle and Interest Audiences at Scale</h3>
    <p>For brands with strong organic rank, healthy TACoS, and an established new-to-brand acquisition rate, DSP's lifestyle and interest audiences can extend reach beyond active shoppers. This is the most speculative of the DSP use cases and the last one we activate — only when the retargeting and conquest layers are performing.</p>

    <h3>Video Ads on Amazon and Connected TV</h3>
    <p>Amazon's video DSP placements — including streaming TV and online video — are best suited for brands in the Maturity phase looking to build brand awareness at scale. The conversion path is longer and the attribution is less direct. Budget here requires confidence that the downstream organic and SP performance is strong enough to capture the demand that video generates over time.</p>

    <h2>DSP vs. Sponsored Display: Knowing Which One You Need</h2>

    <p>A common source of confusion: Amazon's Sponsored Display (SD) ads are not DSP. They are self-serve display ads available through Seller Central and Vendor Central. DSP is a managed or API-accessed platform with programmatic reach across Amazon and third-party inventory.</p>

    <p>Sponsored Display is where most brands should start with display advertising. It is lower cost, faster to activate, does not require agency minimums, and delivers strong results when built on top of performing SP campaigns. AMC audience layering on SD campaigns is the most cost-effective display advertising upgrade available to most Amazon sellers right now.</p>

    <p>Full DSP — with managed service minimums typically starting at $10,000/month or more — is for brands that have fully leveraged SD, AMC audiences, and their SP foundation, and are ready to extend reach programmatically. If you have not maxed out SD performance first, you are paying DSP prices for things you could get at SD prices.</p>

    <h2>What We See in DSP-Heavy Accounts</h2>

    <p>When we inherit accounts that have been running DSP without the prerequisites in place, the pattern is consistent: high impressions, poor CVR, high effective CPM, and a TACoS that does not reflect the total ad investment because DSP spend is often reported separately. The DSP impressions look impressive in a report. The business outcomes do not match the spend.</p>

    <p>Blue Forest Holdings came to us with a similar situation — significant ad spend across multiple channels including display, and a revenue and profit profile that did not reflect the investment. We restructured through the Lifecycle Framework, cut DSP until SP performance was solid, and rebuilt from the ground up. Revenue doubled. Profit tripled. In 12 months.</p>

    <p>DSP did eventually have a role in that account. But not until the foundation was right.</p>

    <h2>Work With OBG</h2>

    <p>If you are spending on DSP without a proven SP foundation, you are paying premium prices for traffic your listing is not ready to convert. We will tell you honestly where you actually are in the lifecycle — and whether DSP should be in your plan right now or six months from now.</p>

    <p>OBG offers a free strategy call and a 30-day profitability guarantee. If we cannot show you a clear path to better outcomes in the first 30 days, you do not owe us for that time. <a href="/contact">Book your free strategy call</a> and let us audit what you are actually getting from your current advertising spend.</p>
  `,
}

export default post
