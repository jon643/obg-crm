import type { BlogPost } from '@/lib/blog'

const post: BlogPost = {
  title: 'Amazon Sponsored Ads: SP, SB, and SD Explained — And How to Use Each One Right',
  description: 'Sponsored Products are the foundation. Sponsored Brands and Display amplify what is already working. Here is how to build a sponsored ad strategy that compounds over time.',
  publishDate: '2026-03-03',
  htmlContent: `
    <p>There are three types of Amazon sponsored ads. Most brands use all three. Most brands are not using two of them correctly.</p>

    <p>Sponsored Products — the search-result ad that triggers when a customer searches a keyword — is where the real work happens on Amazon. It is the closest mechanism to intent-based buying that exists on the platform, and it is the foundation that every other ad type depends on. Sponsored Brands and Sponsored Display are amplifiers. They take what is already working in your Sponsored Products campaigns and extend it into new placements and new audience contexts.</p>

    <p>The mistake most brands make: they treat all three ad types as interchangeable inventory — more places to spend budget — rather than as a sequential, structured system where each type has a specific job at a specific phase.</p>

    <h2>Sponsored Products: The Foundation</h2>

    <p>Sponsored Products (SP) are keyword-triggered ads that appear in Amazon search results and on product detail pages. A customer searches "stainless steel water bottle," your ad appears, they click, they land on your listing. Intent is explicit. The customer told you exactly what they are looking for.</p>

    <p>That is the highest-value moment in Amazon advertising. A customer with declared intent, actively searching in a buying context, meeting your product at the point of decision. No other ad format on Amazon delivers that combination as efficiently.</p>

    <p>SP campaigns are the first thing we build in any new account and the last thing we reduce in a mature one. Everything else gets layered on top of SP performance — never before it.</p>

    <h3>Campaign Types Within Sponsored Products</h3>

    <p>SP campaigns run as either automatic or manual targeting:</p>

    <p><strong>Automatic targeting</strong> lets Amazon's algorithm decide which searches to show your ad for, based on your listing content and category. Auto campaigns are excellent for discovery — finding search terms that convert that you would not have thought to target manually. We run auto campaigns with limited budgets during the research phases of our PPC Product Lifecycle Framework, then harvest the converting terms into manual campaigns as exact match targets.</p>

    <p><strong>Manual targeting</strong> gives you control over exactly which keywords trigger your ads. Within manual campaigns, the three match types serve different purposes:</p>

    <ul>
      <li><strong>Exact match</strong> — your ad only triggers when a customer searches your precise keyword. Highest relevance, highest conversion rate, most control. This is where we concentrate budget on proven terms.</li>
      <li><strong>Phrase match</strong> — your ad triggers for searches that contain your keyword phrase in order, with other words around it. Broader than exact, more controlled than broad. Good for capturing keyword variations without fully opening to discovery.</li>
      <li><strong>Broad match</strong> — your ad triggers for searches containing the individual words in your keyword, in any order, including related terms. Highest discovery potential, highest irrelevance risk. We use broad match with limited budgets for research, with aggressive negative keyword management to contain waste.</li>
    </ul>

    <h3>How SP Drives Organic Rank</h3>

    <p>Sponsored Products are not just an advertising mechanism — they are an organic ranking tool. Amazon's algorithm uses sales velocity and keyword-specific conversion history as primary ranking signals. When your SP campaign drives sales attributed to a specific keyword, that keyword's conversion signal strengthens in the algorithm's view of your listing. Enough consistent signal, and organic rank for that keyword climbs.</p>

    <p>This is why we manage SP campaigns with organic ranking as an explicit KPI alongside advertising metrics. An SP campaign that looks expensive by ACoS standards may be building organic rank that will eventually generate sales at zero ad cost. Evaluating it purely on advertising efficiency misses the organic return entirely.</p>

    <p>TACoS — Total Advertising Cost of Sale — captures this relationship. When SP campaigns are successfully building organic rank, total revenue grows while ad spend stays flat or declines as a percentage. TACoS falls. That declining TACoS over growing total revenue is the signal that SP is doing its real job.</p>

    <h2>Sponsored Brands: Amplifying What Already Works</h2>

    <p>Sponsored Brands (SB) are banner ads that appear at the top of search results, featuring your brand logo, a headline, and multiple products or a link to your Store. They drive brand visibility at the category level and are among the most effective tools for capturing new-to-brand customers who are browsing but have not yet committed to a specific product.</p>

    <p>The activation rule at OBG: Sponsored Brands campaigns get built on top-performing keywords from Sponsored Products — exact match terms that have already proven they convert in SP campaigns. We do not launch SB campaigns on untested terms. We take what is already working in SP and extend it upward into the search results banner position.</p>

    <p>Why the sequencing matters: SB campaigns cost more per click than SP campaigns in most categories. If you have not validated keyword performance in SP first, you are paying a premium to discover which terms convert — work you could have done more cheaply in an SP broad or auto campaign. Do the discovery in SP. Do the amplification in SB.</p>

    <h3>Sponsored Brands Video</h3>
    <p>SB video ads appear in search results and autoplay without sound. They are among the highest-converting ad formats on Amazon — particularly for products where the mechanism or use case benefits from demonstration. A 15–30 second product video that shows what the product does and who it is for can dramatically outperform static image ads for the right product categories.</p>

    <p>We layer SB video in after standard SB campaigns are performing. Same keyword restriction: only top-performing exact match terms from SP, validated for conversion before scaling budget in video format.</p>

    <h2>Sponsored Display: Retargeting and Audience Amplification</h2>

    <p>Sponsored Display (SD) ads are Amazon's self-serve display advertising format. Unlike SP and SB — which are keyword-triggered — SD operates on audience and product targeting. You can target shoppers who viewed your listing but did not purchase, shoppers who viewed competitor listings, or Amazon-defined audience segments based on purchase behavior and category interest.</p>

    <p>SD is the bridge between keyword-intent advertising and audience-intent advertising. It is also significantly more accessible than full Amazon DSP — no managed service required, no $10,000/month minimums, available directly through Seller Central and Vendor Central.</p>

    <h3>Retargeting: The Highest-Return SD Use Case</h3>
    <p>Retargeting shoppers who viewed your product detail page but did not purchase is consistently the highest-performing SD tactic we run. These audiences have already shown explicit interest in your specific product. They visited. They considered. They left without buying. Retargeting ads bring your product back in front of them as they browse across Amazon and partner sites.</p>

    <p>The conversion rate on view retargeting audiences is dramatically higher than cold audience targeting. The cost per click is often lower than SP campaigns because the inventory is less competed for. This is the first SD tactic we activate, before any broader audience targeting.</p>

    <h3>AMC Audiences: The Most Underused SD Upgrade</h3>
    <p>Within Sponsored Display, Amazon Marketing Cloud audience layering is one of the most consistently effective improvements we have found across accounts. We have tested AMC's "High Interest Based on Shopping History" audience across our client portfolio and the pattern is clear: CVR goes significantly up and ACoS comes down. The increase in CPC is more than offset by the improvement in conversion quality.</p>

    <p>Setup: Campaign > Bid Adjustments > Audiences > High Interest Based on Shopping History. Set a 25% bid adjustment. Optimize weekly. This takes ten minutes to activate and has measurably improved performance in nearly every account we have tested it in. Most brands running SD campaigns without AMC audience layering are leaving a meaningful efficiency improvement on the table.</p>

    <h2>The Sequencing That Makes All Three Work Together</h2>

    <p>The structure that produces compounding results over time:</p>

    <ol>
      <li><strong>SP foundation first.</strong> Build auto and manual SP campaigns. Harvest converting terms. Build exact match campaigns around proven performers. Manage TACoS toward target. This is the only focus during the Launch and Trimming phases of the product lifecycle.</li>
      <li><strong>SB layers on SP winners.</strong> Once SP core campaigns are hitting breakeven and TACoS is in range, activate Sponsored Brands on your top exact match keywords. Not new terms — the ones SP already validated. Add SB video if your product benefits from demonstration.</li>
      <li><strong>SD retargeting on proven traffic.</strong> Activate view retargeting on audiences who have visited your listing. Add AMC "High Interest" audience layering. These campaigns benefit from the traffic SP and SB are already driving — the more visits your listing gets, the larger and more qualified the retargeting pool becomes.</li>
      <li><strong>Re-optimize and expand.</strong> Open new SP research campaigns on DataDive-identified keyword gaps. Graduate new converting terms into SB. Expand SD to competitor product targeting on categories where your CVR data is strong.</li>
    </ol>

    <p>The system is sequential and self-reinforcing. SP builds the traffic and the conversion signal. SB extends reach at the top of the funnel. SD captures shoppers who left. AMC audiences make SD more efficient. Each layer makes the others more effective.</p>

    <h2>What Not to Do With Sponsored Ads</h2>

    <p>Three things we cut immediately when we take over an account:</p>

    <ul>
      <li><strong>SB campaigns on untested keywords.</strong> If a term has not proven it converts in SP, it has no business in SB at premium CPC rates. Always validate in SP before amplifying in SB.</li>
      <li><strong>Broad match campaigns with no negative keywords.</strong> A broad match campaign with no negation is a budget leak. Irrelevant terms compound over time. Negative keyword management is not optional — it is ongoing.</li>
      <li><strong>SD campaigns without a retargeting-first strategy.</strong> SD on cold audiences before retargeting audiences are active is paying for awareness before capturing the interest that already exists. Start with retargeting. Add cold audiences later, if performance supports it.</li>
    </ul>

    <h2>Work With OBG</h2>

    <p>We have built Sponsored Ads systems that took NumNum Baby from $100K to $3M in 18 months and helped Blue Forest Holdings double revenue and triple profit in 12 months. The framework is not complicated. It is sequential, disciplined, and built around what the data actually says — not what any single ad type promises in a pitch deck.</p>

    <p>OBG offers a free strategy call and a 30-day profitability guarantee. If we cannot show you a clear path to better results in the first 30 days, you do not owe us for that time. <a href="/contact">Book your free strategy call</a> and let us look at how your current SP, SB, and SD campaigns are working together — or not.</p>
  `,
}

export default post
