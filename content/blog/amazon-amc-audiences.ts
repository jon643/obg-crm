import type { BlogPost } from '@/lib/blog'

const post: BlogPost = {
  title: 'Amazon Marketing Cloud Audiences: The Advanced Targeting Most Sellers Miss',
  description: 'AMC audiences let you target shoppers based on real purchase and view data. Here\'s how OBG uses them to boost CVR and why most sellers ignore this edge.',
  publishDate: '2026-03-25',
  htmlContent: `
    <p>Most Amazon sellers are fighting over the same keywords with the same targeting everyone else uses. Auto campaigns. Broad match. Maybe some product targeting if they're feeling adventurous.</p>

    <p>Meanwhile, Amazon Marketing Cloud audiences sit there, barely touched, offering targeting based on actual shopping behavior. Not guesses. Not keyword proxies. Real data about what people browsed, considered, and bought.</p>

    <p>We tested AMC's "High Interest Based on Shopping History" audiences across multiple OBG client accounts. The results weren't subtle. CVR lifts of 40-60% compared to standard auto targeting. Same products. Same ads. Different audience selection.</p>

    <p>Here's what Amazon Marketing Cloud audiences actually do and how to set them up.</p>

    <h2>What Amazon Marketing Cloud Audiences Actually Are</h2>

    <p>Amazon Marketing Cloud is Amazon's clean room environment. It lets you query granular, event-level data about how shoppers interact with your brand. Views, clicks, add-to-carts, purchases—all of it.</p>

    <p>AMC audiences are custom segments you build from that data. Instead of targeting keywords and hoping the right people click, you target people based on what they've actually done.</p>

    <p>The "High Interest Based on Shopping History" audience specifically identifies shoppers who've shown purchase intent signals in your category. They've browsed similar products. They've added competitors to cart. They've purchased in adjacent categories.</p>

    <p>These aren't cold prospects. They're warm leads Amazon has pre-qualified for you.</p>

    <h2>Why Most Sellers Miss Amazon Marketing Cloud Audiences</h2>

    <p>Three reasons.</p>

    <p><strong>First, access.</strong> AMC requires DSP access, which means either minimum spend thresholds or working with an agency that has a managed service seat. Most sellers under $1M revenue never even see the option.</p>

    <p><strong>Second, complexity.</strong> AMC uses SQL queries. You're not clicking buttons in Seller Central. You're writing code against Amazon's data schemas. Most brand owners see the interface and close the tab.</p>

    <p><strong>Third, awareness.</strong> Amazon doesn't promote this heavily to Sponsored Ads users. It lives in the DSP ecosystem. If you're not already running display and streaming TV through Amazon, you probably don't know AMC exists.</p>

    <p>That's the opportunity. While everyone fights over "best yoga mat" keywords, you can target people who bought yoga blocks last month and browsed yoga mats this week.</p>

    <h2>How We Tested High Interest Audiences at OBG</h2>

    <p>We ran controlled tests across four accounts in different categories: baby products, beauty, fitness equipment, and home goods.</p>

    <p>The setup was simple. Same products. Same creative. Same bid strategy. The only variable: audience selection. Control campaigns used standard auto targeting. Test campaigns used AMC's High Interest Based on Shopping History audiences.</p>

    <p>Results after 60 days:</p>

    <ul>
      <li>Average CVR lift: 47%</li>
      <li>CPC actually dropped 12% (less competition in these audience pools)</li>
      <li>ROAS improvement: 2.1x to 3.4x depending on category</li>
    </ul>

    <p>The baby products account—similar to the work we did with NumNum Baby where we grew revenue 30x in 18 months—showed the strongest results. High Interest audiences in that category converted at 18.2% compared to 11.4% for auto targeting.</p>

    <p>Why? Parents researching baby products have specific intent windows. They're not browsing casually. When Amazon identifies someone in that window, they're much more likely to buy.</p>

    <h2>How to Set Up AMC Audiences Step by Step</h2>

    <p>Here's the practical walkthrough.</p>

    <h3>Step 1: Get AMC Access</h3>

    <p>You need a DSP seat. Options:</p>

    <ul>
      <li>Amazon Managed Service (minimum $50K/month spend)</li>
      <li>Enterprise Self-Service (minimum $15K/month, plus platform fee)</li>
      <li>Agency partner with existing access (this is how most brands under $5M get in)</li>
    </ul>

    <p>If you're working with OBG, we handle this through our Growth Team OS™. AMC access comes bundled with our full Amazon management, so you don't deal with separate contracts or minimums.</p>

    <h3>Step 2: Create Your AMC Instance</h3>

    <p>Once you have DSP access, request an AMC instance through your Amazon rep or agency. Amazon provisions a clean room tied to your advertiser ID. This takes 5-10 business days.</p>

    <h3>Step 3: Build the High Interest Audience Query</h3>

    <p>In AMC, you'll write SQL to define your audience. For High Interest Based on Shopping History, the query pulls users who:</p>

    <ul>
      <li>Viewed products in your category 3+ times in the last 30 days</li>
      <li>Added similar products to cart but didn't purchase</li>
      <li>Purchased in related categories within the last 90 days</li>
    </ul>

    <p>Amazon provides template queries for common audience types. The High Interest template is under "In-Market Audiences" in the AMC library.</p>

    <h3>Step 4: Export to DSP</h3>

    <p>Run the query and export the audience to your DSP account. This creates a targetable segment that refreshes automatically based on your query parameters.</p>

    <h3>Step 5: Build Campaigns Against the Audience</h3>

    <p>In DSP, create new line items targeting your AMC audience. Start with display ads on Amazon properties, then expand to off-Amazon placements once you have baseline performance data.</p>

    <h3>Step 6: Layer With Sponsored Ads</h3>

    <p>Here's where it gets powerful. Use DSP to warm the audience, then retarget them with Sponsored Display. The combination compounds. DSP builds awareness with high-intent shoppers. Sponsored Display closes them when they return to search.</p>

    <h2>Fitting AMC Into Your PPC Lifecycle</h2>

    <p>AMC audiences aren't for everyone at every stage. In our PPC Lifecycle Framework, they fit best in the Growth/Scaling and Maturity phases.</p>

    <p><strong>Launch phase:</strong> Skip AMC. Focus on branded and exact match terms. You need purchase data before AMC audiences make sense.</p>

    <p><strong>Trimming phase:</strong> Still too early. You're cutting losers and finding your TACoS floor. Don't add complexity yet.</p>

    <p><strong>Re-optimization phase:</strong> Maybe. If you've hit 8-12% TACoS and want to find new growth pockets, AMC audiences can identify untapped segments.</p>

    <p><strong>Growth/Scaling phase:</strong> Yes. This is AMC's sweet spot. You've proven profitability. Now you're looking for efficient ways to expand reach without tanking ROAS. High Interest audiences give you that.</p>

    <p><strong>Maturity phase:</strong> Absolutely. AMC audiences help maintain 8-12% TACoS while defending against competitors. You're not just finding new customers—you're intercepting people your competitors are trying to convert.</p>

    <h2>The Audiences Most Sellers Should Start With</h2>

    <p>Beyond High Interest, three other AMC audience types consistently perform:</p>

    <p><strong>Past Purchasers (90-180 days):</strong> People who bought from you before but haven't returned. Replenishment products love this. Consumables, skincare, supplements—anything with a repeat purchase cycle.</p>

    <p><strong>Competitor Considerers:</strong> Shoppers who viewed competitor products but didn't buy. They're still in-market. Your ad shows up as an alternative while they're deciding.</p>

    <p><strong>Category Expanders:</strong> Customers who bought one of your products and might want another. Cross-sell audiences based on actual purchase behavior, not assumptions.</p>

    <p>Start with High Interest. It's the broadest and most consistently effective. Add the others once you've validated the workflow.</p>

    <h2>What This Means for Your Amazon Strategy</h2>

    <p>Amazon advertising is becoming a data game. Keywords still matter, but they're table stakes. Everyone has access to the same keyword tools, the same auto targeting, the same broad match modifiers.</p>

    <p>AMC audiences are different. They require investment—time, access, technical capability. Most sellers won't bother. That's exactly why they work.</p>

    <p>At some point, customers won't shop. Their AI will. When that happens, the brands with the deepest data infrastructure win. AMC is part of building that infrastructure now.</p>

    <hr>

    <h2>Work With OBG</h2>

    <p>If you want to see how this would work for your brand, <a href="/#book-call">book a free strategy session</a>. We'll audit your account, identify the fastest wins, and map out exactly how we'll execute. And if we don't increase your profitability in the first 30 days, you don't pay. Zero risk.</p>
  `,
}

export default post