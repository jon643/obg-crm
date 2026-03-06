import type { BlogPost } from '@/lib/blog'

const post: BlogPost = {
  title: 'How to Ship From China to Amazon FBA: The Step-by-Step Process OBG Uses',
  description: 'A practical guide to shipping from China to Amazon FBA — from manufacturer handoff to FBA receiving. Covers FNSKU labeling, carton marks, customs, and compliance checkpoints.',
  publishDate: '2025-11-30',
  htmlContent: `
<p>Shipping from China to Amazon FBA sounds straightforward until the first time a shipment gets refused at an Amazon fulfillment center, sits in customs for two weeks, or arrives with labeling that triggers a discrepancy investigation. Then it stops being straightforward and starts being expensive.</p>

<p>We manage this process regularly for brands in our portfolio. We coordinate FCA shipments directly from manufacturer warehouses to Amazon FBA — cutting prep center costs and reducing lead time. Here is the step-by-step process we use, including the compliance checkpoints that most guides skip.</p>

<h2>Start With the Right Inbound Shipment Plan</h2>

<p>Before a single box leaves the factory, you need an approved shipment plan in Amazon Seller Central. This is not optional — Amazon will not accept inventory at an FBA fulfillment center without a corresponding inbound shipment in the system. The shipment plan determines which fulfillment centers receive your inventory, how many units are expected in each box, and what FNSKU labels are required.</p>

<p>Create the shipment plan in Seller Central before your production run is complete so you have FNSKU labels ready to send to your manufacturer for application at the factory. The alternative — applying FNSKU labels yourself or at a prep center — adds cost and time. Get this right upfront.</p>

<p>When building your shipment plan, pay attention to Amazon's inbound placement fee structure. Sending inventory to a minimal number of fulfillment center locations triggers the highest per-unit inbound placement fee. Routing to Amazon's specified split locations reduces or eliminates that fee, but adds inbound freight complexity. At lower volumes, pay the fee and keep it simple. At higher volumes, evaluate the math.</p>

<h2>Step 1: Manufacturer Coordination and Pre-Production</h2>

<p>The compliance work starts here — not at the port, not at customs, not at the fulfillment center. Here is what needs to be confirmed with your manufacturer before production begins:</p>

<ul>
  <li><strong>FNSKU labeling:</strong> Confirm that your manufacturer will apply FNSKU barcodes to each unit at the factory. Provide the correct label file (printable PDF from Seller Central) and specify the exact placement location. Misplaced, crooked, or obscured FNSKU labels cause fulfillment center receiving errors.</li>
  <li><strong>Packaging compliance:</strong> Amazon has specific requirements for how products must be packaged — poly bagging requirements for loose items, suffocation warning labels on poly bags of certain sizes, bundling requirements for multi-pack products. Confirm your packaging meets these requirements before the production run.</li>
  <li><strong>Carton marking:</strong> Each carton must be labeled with the Amazon FBA shipment ID, the shipment plan carton number, and your seller ID. Amazon-required carton marks must be on two sides of each box. Provide your manufacturer with the carton label template from Seller Central.</li>
  <li><strong>Case pack configuration:</strong> The number of units per case in your Seller Central shipment plan must match the physical configuration in the cartons. Discrepancies between what Seller Central expects and what Amazon receives create shipment problems that take time and Seller Support escalation to resolve.</li>
</ul>

<p>Request factory photos before the shipment is sealed. Specifically: a photo of the FNSKU label on product, a photo of the carton label, and a photo of the packed pallet if palletizing at origin. Catching a label error before the container doors close is worth far more than catching it after the shipment has left China.</p>

<h2>Step 2: Freight Forwarder Booking and Export from China</h2>

<p>With production confirmed and packaging compliance verified, book your freight with a forwarder who has specific Amazon FBA experience. We use an FCA (Free Carrier) shipping term for most manufacturer-to-FBA shipments. Under FCA, risk and cost transfer to you when the goods are loaded at the manufacturer's facility. This is typically cleaner than FOB (Free On Board) for Amazon brands because it avoids ambiguity at the port.</p>

<p>What your forwarder needs from you at booking:</p>

<ul>
  <li>Commercial invoice: description of goods, HTS code, declared value (this must be accurate — customs fraud has serious consequences), country of origin, seller and buyer information</li>
  <li>Packing list: number of cartons, units per carton, dimensions and weight per carton, total shipment weight and volume</li>
  <li>Amazon shipment IDs for all shipments included in the container</li>
  <li>Delivery addresses for each Amazon fulfillment center in your shipment plan</li>
</ul>

<p>Your forwarder files the Importer Security Filing (ISF) with U.S. Customs and Border Protection — required at least 24 hours before vessel departure for ocean shipments. Late or inaccurate ISF filing creates customs holds and potential fines. This is a forwarder responsibility, but confirm it is being handled before the vessel departs.</p>

<h2>Step 3: Ocean Transit and In-Transit Monitoring</h2>

<p>Ocean transit from major Chinese ports to the U.S. West Coast runs 15–22 days on the vessel itself, plus time for port loading and unloading. Total door-to-door lead time including customs and last-mile delivery typically runs 35–50 days from factory departure under normal port conditions. Plan your reorder points accordingly.</p>

<p>During transit, you want active monitoring of:</p>

<ul>
  <li>Vessel tracking — confirm your cargo is on the booked vessel and on schedule</li>
  <li>Port congestion at the destination port — West Coast ports experience regular congestion events that add days to transit time</li>
  <li>Any customs flags or holds that require documentation response</li>
</ul>

<p>A quality freight forwarder provides proactive updates on all of these. If you are not hearing from your forwarder regularly during a shipment, that is a sign you need a different forwarder — not a sign that everything is fine.</p>

<h2>Step 4: U.S. Customs Clearance</h2>

<p>Your goods cannot move from the port to Amazon without clearing U.S. Customs. Your freight forwarder handles this through their licensed customs broker. What happens during customs clearance:</p>

<ul>
  <li>The customs broker submits your entry documents: commercial invoice, packing list, bill of lading, and your ISF filing</li>
  <li>Customs reviews the entry and either clears it or places it on hold for examination</li>
  <li>Duties and fees are paid — typically on your behalf by the customs broker, then billed back to you. Know your duty rate for your HTS code before your shipment arrives so there are no surprises</li>
  <li>Customs releases the cargo for pickup</li>
</ul>

<p>Customs holds for physical examination can add 5–10 days to your lead time. You cannot predict or prevent them. You can only plan buffer time for them. Build this into every ocean freight lead time calculation.</p>

<p>On duty calculation: your HTS code determines your duty rate. Many brands are using the wrong HTS code — either because they inherited it from a manufacturer or because they assigned it without verification. A customs broker can verify your classification. Section 301 tariffs on Chinese goods add significant duty on certain product categories. Know your landed cost including duties before you finalize your pricing and margin model.</p>

<h2>Step 5: Last-Mile Delivery to Amazon Fulfillment Centers</h2>

<p>After customs clearance, your freight moves from the port to Amazon fulfillment centers via drayage (port-to-warehouse trucking) and final mile delivery. This is where Amazon's appointment-based delivery system comes in.</p>

<p>Amazon fulfillment centers require scheduled delivery appointments — carriers cannot show up unannounced. Your forwarder or final-mile carrier must book an appointment through Amazon's carrier portal and deliver within the scheduled window. Missed appointments get rescheduled, adding days. Non-compliant delivery (wrong pallet height, wrong truck type, missing appointment) can result in refused delivery.</p>

<p>Pallet requirements for floor-loaded containers: if your shipment is in a floor-loaded container (boxes stacked in the container without pallets), Amazon may require palletization at a transload facility before delivery. Confirm with your forwarder whether your shipment will arrive palletized or floor-loaded and plan the last-mile logistics accordingly.</p>

<h2>Step 6: FBA Receiving and Reconciliation</h2>

<p>Once your shipment is delivered, Amazon receives and scans inventory into the FBA system. This process takes anywhere from a few days to several weeks depending on fulfillment center capacity. You can monitor receiving progress in Seller Central under your shipment plan.</p>

<p>When receiving is complete, reconcile what Amazon received against what you shipped. Amazon should receive exactly the number of units on your shipment plan. When they receive fewer, you have two possibilities: damaged or lost inventory, or a receiving error. File reimbursement claims for units lost in transit or damaged during Amazon's receiving process. These claims are not filed automatically — you file them, and Amazon either approves them or requests additional documentation.</p>

<p>OBG files reimbursements for every brand we manage. Most brands leave this money uncollected because they do not have a systematic process for identifying discrepancies and filing claims. Over the course of a year, unrecovered FBA reimbursements on a high-volume brand can total thousands of dollars.</p>

<h2>The Compliance Checkpoints That Matter</h2>

<p>Here is the checklist we run on every inbound shipment before it leaves China:</p>

<ol>
  <li>FNSKU labels verified correct, properly placed, and scannable</li>
  <li>Carton labels on two sides of each box with correct shipment ID and carton numbers</li>
  <li>Case pack configuration matches Seller Central shipment plan exactly</li>
  <li>Commercial invoice HTS code verified and value accurate</li>
  <li>ISF filing confirmed by forwarder before vessel departure</li>
  <li>Delivery appointments booked with each Amazon fulfillment center</li>
  <li>Factory photos reviewed for label compliance before container sealed</li>
</ol>

<p>Every item on that list is a potential failure point. Every failure point is a cost — either in time, in fees, or in inventory that is not available for sale while the problem is resolved. The goal is to catch every issue before it leaves the factory.</p>

<h2>Work With OBG</h2>

<p>Managing the China-to-FBA supply chain is part of what we do for every brand in our Growth Team OS. We coordinate with freight forwarders, manage compliance checkpoints, and handle FBA receiving reconciliation and reimbursements. If your inbound shipments are a source of recurring delays, unexpected costs, or receiving discrepancies, that is a solvable problem.</p>

<p>Book a free strategy call. If we do not improve your profitability within 30 days of working together, you get a full refund. That is the guarantee.</p>
`,
}

export default post
