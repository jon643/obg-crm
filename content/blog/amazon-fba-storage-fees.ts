import type { BlogPost } from '@/lib/blog'

const post: BlogPost = {
  title: 'Amazon FBA Storage Fees: How to Avoid Paying Amazon to Hold Your Excess Inventory',
  description: 'Amazon FBA storage fees can exceed your product value after 365 days. Learn inventory velocity management and IPI optimization to protect your margins.',
  publishDate: '2026-03-19',
  htmlContent: `
    <p>You're paying Amazon to babysit products that aren't selling. Every month. Sometimes more than the products are worth.</p>

    <p>Amazon FBA storage fees feel manageable at first. A few cents per cubic foot. Nothing dramatic. Then 181 days pass. Then 365 days. Suddenly you're writing checks to Amazon just to store inventory that might never move.</p>

    <p>We've seen brands pay $40,000+ annually in avoidable storage fees. That's not a typo. Forty thousand dollars — gone — because nobody was watching inventory velocity.</p>

    <h2>How Amazon FBA Storage Fees Actually Work</h2>

    <p>Amazon's storage fee structure is designed to punish slow-moving inventory. They want their warehouses functioning as fulfillment centers, not long-term storage facilities.</p>

    <p>Here's the breakdown:</p>

    <ul>
      <li><strong>Monthly storage fees:</strong> $0.87 per cubic foot (standard-size, non-peak) to $2.40 per cubic foot (standard-size, peak October–December)</li>
      <li><strong>Aged inventory surcharge (181–270 days):</strong> $1.50 per cubic foot</li>
      <li><strong>Aged inventory surcharge (271–365 days):</strong> $3.00 per cubic foot</li>
      <li><strong>Aged inventory surcharge (365+ days):</strong> $6.90 per cubic foot OR $0.15 per unit — whichever is greater</li>
    </ul>

    <p>That last line is where brands get murdered. Once inventory crosses 365 days, you're paying $6.90 per cubic foot minimum. For bulky products, this can exceed the product's landed cost within months.</p>

    <p>A brand we audited last quarter had 2,400 units sitting for 400+ days. Their aged inventory surcharge alone was $3,200 monthly — for product they'd eventually liquidate at a loss anyway.</p>

    <h2>The Real Problem: Nobody's Watching Inventory Velocity</h2>

    <p>Most brands treat inventory like a set-it-and-forget-it operation. Order a bunch of units. Ship them to FBA. Hope they sell.</p>

    <p>Hope is not an inventory strategy.</p>

    <p>The metric that matters is sell-through rate: units sold and shipped over the last 90 days divided by average available inventory during that period. Amazon calculates this weekly. You should too.</p>

    <p>A healthy sell-through rate depends on your category, but generally:</p>

    <ul>
      <li><strong>Below 1:</strong> You're accumulating aged inventory. Problems incoming.</li>
      <li><strong>1–3:</strong> Stable, but watch closely.</li>
      <li><strong>3–5:</strong> Healthy velocity.</li>
      <li><strong>5+:</strong> You might be running out of stock. Different problem, but still a problem.</li>
    </ul>

    <p>When we partnered with Blue Forest Holdings, inventory management was a mess. Product was aging. Storage fees were climbing. Within 12 months, we doubled their revenue and tripled their profit — and a significant piece of that profit came from eliminating wasted storage spend.</p>

    <h2>IPI Score: Amazon's Report Card on Your Inventory Health</h2>

    <p>Amazon's Inventory Performance Index (IPI) is their way of grading your inventory management. Score ranges from 0 to 1,000. Fall below 400, and Amazon limits how much inventory you can send in.</p>

    <p>Four factors determine your IPI:</p>

    <ol>
      <li><strong>Excess inventory percentage:</strong> Units that have more than 90 days of supply based on forecasted demand.</li>
      <li><strong>Sell-through rate:</strong> How fast your inventory moves over 90 days.</li>
      <li><strong>Stranded inventory percentage:</strong> Inventory in FBA that's not linked to an active listing.</li>
      <li><strong>In-stock rate:</strong> How often your replenishable FBA ASINs are in stock.</li>
    </ol>

    <p>Most brands obsess over the first three while ignoring the fourth. But here's the tension: reducing excess inventory often increases stockout risk. You need both metrics moving in the right direction simultaneously.</p>

    <p>Our IPI optimization process within the Growth Team OS™ framework addresses this directly. We're not just running your PPC and creative — we're monitoring inventory velocity weekly, setting dynamic reorder points, and flagging aging SKUs before they cross the 181-day threshold.</p>

    <h2>The Inventory Velocity Management System</h2>

    <p>Here's how to stop paying Amazon to hold your excess inventory:</p>

    <h3>Step 1: Audit Your Current Aged Inventory</h3>

    <p>In Seller Central, go to Inventory → Inventory Planning → Manage Excess Inventory. This report shows exactly which SKUs are approaching or exceeding age thresholds.</p>

    <p>Sort by "Estimated aged inventory surcharge" to see your biggest offenders. These are your immediate priorities.</p>

    <h3>Step 2: Calculate True Carrying Cost Per SKU</h3>

    <p>For each slow-moving SKU, calculate:</p>

    <ul>
      <li>Monthly storage fees (current and projected)</li>
      <li>Aged inventory surcharges (current and projected)</li>
      <li>Landed cost per unit</li>
      <li>Expected sale price minus fees</li>
    </ul>

    <p>If your carrying cost will exceed your margin before the product sells, you have a liquidation candidate. Better to take a controlled loss now than an uncontrolled loss later.</p>

    <h3>Step 3: Set Reorder Points Based on Velocity, Not Gut Feel</h3>

    <p>Your reorder point should be: (average daily sales × lead time in days) + safety stock.</p>

    <p>Safety stock varies by product reliability and demand volatility, but a common starting point is 2 weeks of average sales.</p>

    <p>If your average daily sales are 10 units and your lead time (manufacturing + shipping + Amazon receiving) is 45 days, your reorder point is: (10 × 45) + 140 = 590 units.</p>

    <p>When inventory hits 590 units, you reorder. Not before. Not based on what you ordered last time.</p>

    <h3>Step 4: Implement SKU-Level Velocity Monitoring</h3>

    <p>Daily data is lying to you. Weekly trends are where velocity changes become visible.</p>

    <p>Every Monday, review:</p>

    <ul>
      <li>Weeks of cover remaining per SKU</li>
      <li>Any SKUs crossing 90 days of inventory</li>
      <li>Any SKUs approaching age thresholds (150, 250, 350 days)</li>
    </ul>

    <p>Build a simple traffic light system. Green (under 60 days of cover), yellow (60–90 days), red (90+ days). Address reds immediately. Yellows get flagged for next week.</p>

    <h3>Step 5: Have a Liquidation Playbook Ready</h3>

    <p>When inventory ages past your acceptable threshold, you need pre-defined exit strategies:</p>

    <ul>
      <li><strong>Lightning deals:</strong> Can move volume but compress margin.</li>
      <li><strong>FBA Liquidations program:</strong> Amazon finds wholesale buyers. You recover maybe 5–10% of retail price.</li>
      <li><strong>Removal orders:</strong> Pull inventory back to your 3PL, sell through other channels.</li>
      <li><strong>Outlet deals:</strong> Discounted exposure to deal-seekers.</li>
      <li><strong>Donations:</strong> Tax write-off, no storage fees.</li>
    </ul>

    <p>The best time to make these decisions is before you need them. Set triggers: "Any SKU hitting 270 days with less than 0.5 sell-through rate goes to Liquidations."</p>

    <h2>Amazon FBA Storage Fees Are a Symptom, Not the Disease</h2>

    <p>High storage fees usually indicate one of three root causes:</p>

    <p><strong>Over-ordering on launches:</strong> Brands get excited about a new product, order 6 months of inventory before validating demand, then watch it age. Start with 8–12 weeks of projected inventory maximum. Validate velocity before scaling orders.</p>

    <p><strong>Demand forecasting based on hope:</strong> "We sold 500 units last Q4 during a promotion, so we'll sell 500 units this quarter too." No. You won't. Build forecasts on trailing 90-day velocity with seasonal adjustments, not peak performance outliers.</p>

    <p><strong>No early warning system:</strong> By the time brands notice aging inventory, it's already at 200+ days. Weekly velocity monitoring catches problems at 60–90 days, when you still have options.</p>

    <p>Within our Growth Team OS™, inventory health is part of the operational layer. We're not just optimizing listings and ads — we're tracking velocity weekly, coordinating with your supply chain team on reorder timing, and flagging aging SKUs before they become expensive.</p>

    <h2>The Compound Effect of Inventory Discipline</h2>

    <p>Revenue is vanity. Contribution margin is sanity.</p>

    <p>Every dollar not spent on storage fees is a dollar that flows directly to your bottom line. Over 12 months, the brands we work with typically reduce storage-related costs by 15–30% while improving in-stock rates.</p>

    <p>That's not magic. That's systematic velocity management.</p>

    <p>When David Cook at Blue Forest Holdings saw his profit triple, it wasn't just from sales growth. It was from eliminating the leaks — storage fees, aged inventory write-offs, rushed air freight when something went out of stock. The operational discipline compounds.</p>

    <h2>Work With OBG</h2>

    <p>If you want to see how this would work for your brand, <a href="/#book-call">book a free strategy session</a>. We'll audit your account, identify the fastest wins, and map out exactly how we'll execute. And if we don't increase your profitability in the first 30 days, you don't pay. Zero risk.</p>
  `,
}

export default post