import type { BlogPost } from '@/lib/blog'

const post: BlogPost = {
  title: 'Amazon FBA vs FBM: How to Make the Right Call (Not the Reflex One)',
  description: 'FBA vs FBM is a math decision, not a default. OBG breaks down when each model wins, when to run both, and what the Buy Box implications actually cost you.',
  publishDate: '2025-06-01',
  htmlContent: `
<p>Most sellers default to FBA without running the math. That is usually fine — but it is not always right, and when it is wrong, you are paying for it on every unit shipped.</p>

<p>FBA is not automatically better. FBM is not automatically worse. The right answer depends on your product dimensions, your margin, your sales velocity, your category, and your operational infrastructure. This is a math decision. Make it like one.</p>

<h2>What You Are Actually Paying for With FBA</h2>

<p>FBA is Amazon's logistics infrastructure on demand. You send inventory to their fulfillment centers, and they handle storage, pick and pack, shipping, customer service, and returns. You pay for each piece of that — fulfillment fees, storage fees, inbound placement fees, return processing fees, and the aged inventory surcharges that hit when units stop moving.</p>

<p>The thing most brands underweight is the conversion rate advantage that comes with the Prime badge. Prime-eligible FBA listings convert at a meaningfully higher rate than non-Prime FBM listings in most categories. That conversion rate premium is real, quantifiable revenue — and it has to be part of the comparison. If you switch a product from FBA to FBM and your conversion rate drops 20%, you need your fulfillment savings to outrun that lost revenue. Often, they do not.</p>

<p>The other thing brands underweight is Buy Box positioning. Amazon's algorithm favors FBA offers structurally. When third-party sellers compete on your ASINs, your FBA listing has a structural Buy Box advantage over most of their FBM offers at equivalent prices. That is brand protection with an economic component.</p>

<h2>What FBM Actually Requires</h2>

<p>FBM means you or your 3PL picks, packs, and ships every order that comes in. You upload tracking information to Amazon. You handle customer service inquiries. You manage returns. Amazon collects its referral fee either way — you just do not pay Amazon fulfillment fees on top of it.</p>

<p>The cost advantage of FBM depends entirely on what your own fulfillment costs. If you have a 3PL relationship with good per-unit rates, FBM can work. If you are picking and packing yourself at low volume, the labor cost alone may exceed what FBA would have charged you.</p>

<p>Seller Fulfilled Prime (SFP) is the exception that changes the calculus. SFP lets you display the Prime badge on FBM listings if you meet Amazon's strict performance thresholds — same-day or next-day ship times, high on-time delivery, approved carriers. For brands with sophisticated fulfillment infrastructure, SFP gives you Prime visibility without Amazon controlling your inventory. It is demanding to maintain, but it is the right answer for a specific segment of sellers.</p>

<h2>When FBA Wins</h2>

<p>FBA is the right default for most OBG clients. Specifically, it is the clear winner when:</p>

<h3>Your product is standard-size with healthy margins</h3>

<p>Small, light, high-margin products are the ideal FBA profile. The fulfillment fee is low, the storage cost per unit is minimal, and the Prime conversion rate advantage more than pays for both. A $40 product that is 10 oz and fits in a small standard box is almost certainly more profitable on FBA — not just simpler to run, but more profitable.</p>

<h3>You do not have established fulfillment infrastructure</h3>

<p>Building warehouse capability or finding a quality 3PL takes time, capital, and operational attention. FBA gives you Prime-eligible fulfillment without building anything. For lean, founder-led brands where leadership time is the binding constraint, that is not just convenient — it is strategically correct.</p>

<h3>Your demand is variable</h3>

<p>Prime Day, holiday peak, a viral moment, a TV placement. FBA absorbs demand spikes without your operation breaking. For brands with significant volume variability, FBA's flexibility has real dollar value. The cost of a fulfillment failure during peak demand — negative reviews, order cancellations, account health flags — can far exceed the FBA fee premium.</p>

<h3>You are launching a new product</h3>

<p>During launch, every conversion matters. The Prime badge and FBA's conversion rate advantage are most valuable during the critical window when you are trying to build velocity, review count, and organic rank simultaneously. We use FBA for every launch we manage through the OBG PPC Lifecycle — the math during launch phase does not favor FBM for most products.</p>

<h2>When FBM Makes Sense</h2>

<p>FBM is not a fallback. There are specific product and business situations where it is the right answer.</p>

<h3>Oversized or heavy products with punishing FBA economics</h3>

<p>Furniture, large sporting goods, equipment — products where the FBA fulfillment fee is $20, $30, $40+ per unit on a product with limited margin. When we build the full cost stack and FBA fees consume 25–30% of the selling price, the math often favors a 3PL or direct fulfillment. Large, heavy products are the most common case where FBM wins on unit economics.</p>

<h3>Slow movers during Q4 long-term storage risk</h3>

<p>Q4 storage fees jump from $0.78 to $2.40 per cubic foot — a 207% increase. If you have a product that moves slowly and you are going into Q4 with significant inventory, the storage cost math can flip against FBA. Some brands strategically pull slow movers out of FBA before Q4 storage rates kick in and fulfill them FBM until January. That is not a workaround — that is smart inventory management.</p>

<h3>Hazmat or regulated products</h3>

<p>Amazon has specific and evolving rules around hazmat, dangerous goods, and regulated products in FBA. Some products simply cannot go FBA under Amazon's current policies, or face significant restrictions. FBM is not a choice in those cases — it is the only option.</p>

<h3>As a backup for your FBA ASINs</h3>

<p>This is where most brands leave value on the table. Running an FBM listing alongside your primary FBA ASIN means you have a live listing and an active Cart button even when FBA inventory runs out. Stock-outs kill organic rank — and recovery takes weeks, not days. A standing FBM backup listing limits the damage. We set this up for every high-volume ASIN we manage.</p>

<h2>The Hybrid Strategy: Running Both</h2>

<p>The most sophisticated brands do not choose one or the other. They use FBA as their default and build FBM capability for specific situations. A working hybrid setup looks like this:</p>

<ul>
  <li>High-velocity, standard-size SKUs on FBA — Prime badge, Buy Box protection, operational simplicity</li>
  <li>Slow movers and large-format products on FBM — lower carrying cost, more storage flexibility</li>
  <li>Active FBM backup listings for every major FBA ASIN — insurance against stock-outs and FBA disruptions</li>
  <li>FBM as the launch vehicle for new products at very low initial quantities before committing to a full FBA inbound shipment</li>
</ul>

<p>Running this well requires operational discipline. Two fulfillment channels means two sets of inventory tracking, two sets of shipping workflows, and two sets of performance metrics to manage. But at scale, the profitability and risk management benefits justify the complexity.</p>

<h2>The Decision Framework</h2>

<p>Here is how we make this call at OBG. For every ASIN, we run the unit economics in both scenarios:</p>

<ol>
  <li>Calculate total FBA cost per unit: fulfillment fee + storage allocation based on sell-through rate + inbound placement + returns + aged inventory risk</li>
  <li>Calculate total FBM cost per unit: 3PL or own fulfillment cost + packaging + shipping + returns handling</li>
  <li>Estimate conversion rate impact of losing the Prime badge — use category data or test if you have volume to support a test</li>
  <li>Factor in Buy Box implications if you have third-party seller competition on the ASIN</li>
  <li>Add operational complexity as a qualitative consideration</li>
</ol>

<p>The math usually gives you a clear answer. When it does not — when the difference is small — default to FBA and protect the conversion rate. The Prime badge is worth more than most models give it credit for.</p>

<p>What it should never be is a reflex. We have seen brands lose real margin on oversize products they put on FBA out of habit, and brands struggle to scale because they are trying to fulfill high-velocity products manually out of stubbornness. The decision should be deliberate, per-ASIN, and revisited as your volume changes.</p>

<h2>Work With OBG</h2>

<p>We run this analysis for every brand we take on. We have helped brands move products off FBA that were silently bleeding margin, and we have helped brands switch to FBA on products they were under-converting on because they were missing the Prime badge. When we model it correctly, we find the answer.</p>

<p>Book a free strategy call and we will look at your catalog together. If we do not improve your profitability within 30 days, you get a full refund. That is the OBG guarantee.</p>
`,
}

export default post
