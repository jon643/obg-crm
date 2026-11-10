import type { BlogPost } from '@/lib/blog'

// Auto-generated from Outrank webhook (article id: cc4b15ad-48fe-408c-bf2b-ab32a656fe3c).
// Do not hand-edit; re-publish in Outrank to update.

const post: BlogPost = {
  title: `Labels for FBA: How to Print and Apply Them Correctly`,
  description: `Labels for FBA explained: which barcode your SKU needs, exact size and placement rules, and how to print, apply and fix them.`,
  publishDate: '2026-11-10',
  htmlContent: `<p>You have a shipment sitting in the prep area, a PDF of barcodes open on the laptop, and two kinds of product in the same aisle. One line is your brand. The other is wholesale you resell. The cartons look identical, the UPCs look official, and someone on the team is about to stick the same label on both. That is how receiving exceptions start. <strong>Labels for FBA</strong> are an inventory-control decision, not a packaging chore. Pick the barcode type for each SKU first, then decide who applies it and what it costs. Print only after both gates are closed.</p>
<h2>Which Barcode Each SKU Needs Before You Print</h2>
<p>Start with seller role, because it changes the answer for most catalogs. <a href="https://sellercentral.amazon.com/gp/help/external/G200141490">Amazon&#39;s FBA product-label guidance</a> states that every item sent to a fulfillment center needs a barcode. Eligible products may use a manufacturer barcode such as a <strong>UPC, EAN, JAN, or ISBN</strong>. Products that aren&#39;t eligible need an <strong>Amazon barcode</strong>, generally an <strong>FNSKU</strong> that begins with the letter <strong>X</strong>. You can print and apply those labels yourself, or you could pay Amazon to do it per item while that option still existed.</p>
<p>The split is now explicit. <a href="https://sellercentral.amazon.com/help/hub/reference/external/G200141490?locale=en-US">Amazon Seller Central</a> states that, beginning <strong>March 31, 2026</strong>, brand owners may keep using eligible manufacturer barcodes without stickers, while resellers, including authorized resellers, must use Amazon barcodes even when a manufacturer barcode is already on the unit. A reseller carrying a UPC-marked kitchen gadget still applies an FNSKU to every unit. The printed UPC does not get that unit through receiving.</p>
<p><img src="https://cdnimg.co/13b9acdf-56f8-4f76-98b5-6695e45942c4/8de25f80-a5a1-45f4-bb9c-6d2a32bbcd2c/labels-for-fba-barcode-guide.jpg" alt="An infographic titled Which Barcode Each SKU Needs Before You Print, explaining Amazon FBA barcode requirements."></p>
<table>
<thead>
<tr>
<th>Seller or product case</th>
<th>Barcode to use</th>
<th>Sticker required</th>
<th>Notes</th>
</tr>
</thead>
<tbody><tr>
<td>Brand owner, eligible UPC, EAN, JAN or ISBN</td>
<td>Manufacturer barcode</td>
<td>No</td>
<td>Confirm Brand Registry status for the ASIN</td>
</tr>
<tr>
<td>Reseller or authorized reseller, any product</td>
<td>Amazon barcode (FNSKU)</td>
<td>Yes</td>
<td>Required from March 31, 2026, even when a manufacturer barcode exists</td>
</tr>
<tr>
<td>No eligible manufacturer barcode</td>
<td>Amazon barcode (FNSKU)</td>
<td>Yes</td>
<td>Check Brand Registry and GTIN exemption first</td>
</tr>
<tr>
<td>Brand owner with GTIN exemption</td>
<td>Amazon barcode (FNSKU)</td>
<td>Yes</td>
<td>The exemption does not remove labeling</td>
</tr>
<tr>
<td>Codabar or Vendor_barcode format</td>
<td>Amazon barcode (FNSKU)</td>
<td>Yes</td>
<td>Not accepted for inventory tracking</td>
</tr>
<tr>
<td>Case-packed item</td>
<td>Unit barcode on every unit</td>
<td>Per unit</td>
<td>The case label does not replace unit labels</td>
</tr>
</tbody></table>
<p>Walk the rows before anyone opens a label file.</p>
<p><strong>Brand owner with an eligible code.</strong> No sticker, but only if you are the brand representative on a Brand Registry brand and the code maps to one ASIN. Confirm that status in Seller Central before you skip stickers.</p>
<p><strong>Reseller on any product.</strong> FNSKU on every unit. Authorized does not change the rule.</p>
<p><strong>No eligible manufacturer barcode, or a GTIN exemption.</strong> Still an FNSKU. An exemption gets the listing live. It does not remove the sticker.</p>
<p><strong>Codabar or Vendor_barcode.</strong> Not accepted for inventory tracking, so print an FNSKU.</p>
<p><strong>Case packs.</strong> The carton gets a case label, and every unit inside still gets its own barcode.</p>
<p>Stickerless commingling applies only to brand-owner units with an eligible manufacturer barcode. Confirm current eligibility in Seller Central Help before you rely on it. Never drop reseller units into a brand-owner commingled pool. If unauthorized sellers are already on the listing, our <strong>360 Brand Protection</strong> program handles unauthorized seller removal and MAP enforcement so the barcode decision and the Buy Box stay aligned.</p>
<p>Before anything is printed, run three checks on each ASIN. Confirm the seller role in Seller Central. Confirm the ASIN and item condition. Settle the barcode type.</p>
<blockquote>
<p><strong>Practical rule:</strong> A visually correct UPC on a reseller unit is still the wrong barcode.</p>
</blockquote>
<h2>Choosing Who Labels and What It Costs After 2026</h2>
<p>The cost decision comes second, and it decides who touches the unit. <a href="https://sellercentral.amazon.com/gp/help/external/G201023020">Amazon&#39;s FBA Label Service documentation</a> schedules the end of the US FBA prep and item-labeling service for <strong>January 1, 2026</strong>. For shipments created before that date, eligible products could continue to be labeled at <strong>$0.55 per unit</strong> when you requested the service. After that date, you or your 3PL complete required prep and labels before the freight leaves. The service is no longer offered.</p>
<p>Do not import a labeling rate from another marketplace and treat it as your US cost. Build the comparison from the option you will use.</p>
<table>
<thead>
<tr>
<th>Option</th>
<th>Cost per unit</th>
<th>What to check</th>
</tr>
</thead>
<tbody><tr>
<td>FBA Label Service, US, shipments created before January 1, 2026</td>
<td>$0.55</td>
<td>Only for eligible products on shipments created before the deadline</td>
</tr>
<tr>
<td>FBA Label Service, US, after January 1, 2026</td>
<td>Not offered</td>
<td>Seller or 3PL must complete labels before shipping</td>
</tr>
<tr>
<td>Seller-applied FNSKU labels</td>
<td>Label stock, printer ink, and labor per unit</td>
<td>Track labor per unit and scan rate</td>
</tr>
<tr>
<td>Third-party prep or labeling provider</td>
<td>Quoted per SKU</td>
<td>Get a per-SKU quote and written scan records</td>
</tr>
<tr>
<td>Brand owner with eligible manufacturer barcode</td>
<td>No sticker cost</td>
<td>Unit barcode must still be scannable</td>
</tr>
</tbody></table>
<h3>What each option actually buys</h3>
<p><strong>Label service on a pre-deadline shipment.</strong> You paid <strong>$0.55</strong> only if the shipment was created before the cutoff and the product was eligible. That fee bought Amazon&#39;s labor, not a free pass on the wrong FNSKU file.</p>
<p><strong>Seller-applied labels.</strong> Your cost is stock, ink, and minutes. Time a lot of 50 units, divide by 50, and write down the scan pass rate. A cheap label that fails one in twenty scans is more expensive than a slower, clean apply. If in-house labor is the constraint, a <a href="https://www.onlinebrandgrowth.com/blog/prep-center-fba/">prep center for FBA</a> is the comparison, not a guess.</p>
<p><strong>A 3PL.</strong> Take a written per-SKU quote and a barcode map before the first carton ships. &quot;We label Amazon&quot; is not a spec. Ask who chooses FNSKU versus manufacturer barcode, and who keeps the scan log.</p>
<p><strong>Eligible brand-owner units.</strong> No sticker cost. The unit barcode still has to scan. A faded factory UPC is not a savings.</p>
<p>Load the per-unit label cost into the Amazon profit calculator, then add the carrying cost of extra labeled stock with the FBA storage fee calculator. I would start with seller-applied labels on the SKUs you already prep in-house, and move only the high-SKU-count lines to a provider once you have a scan record from one clean shipment.</p>
<p>Before you close <strong>Send to Amazon</strong>, map each SKU&#39;s requirement, confirm every unit&#39;s barcode before cartonization, and keep a scan or inspection record.</p>
<h2>Label Size, Layout and Print Settings</h2>
<p>Hold a printed sample against the spec before you run a roll. <a href="https://sellercentral.amazon.com/help/hub/reference/external/200141490">Amazon&#39;s label requirements</a> say each unit needs a scannable barcode, the label includes the <strong>ASIN or FNSKU</strong>, product name, and item condition, and nonstandard formats such as <strong>Codabar</strong> and <strong>Vendor_barcode</strong> are not accepted. White space is at least <strong>0.25 inch</strong> on the left and right and <strong>0.125 inch</strong> on the top and bottom. The barcode stays off curves and corners and sits at least <strong>0.25 inch</strong> from the package edge. <a href="https://sellercentral.amazon.com/help/hub/reference/external/201100910">Seller Central&#39;s barcode guidance</a> also states labels must remain readable and scannable for <strong>24 months</strong>, using black ink and a laser printer at approximately <strong>300 DPI</strong>.</p>
<table>
<thead>
<tr>
<th>Specification</th>
<th>Amazon requirement</th>
<th>Practical check</th>
</tr>
</thead>
<tbody><tr>
<td>Label size</td>
<td>1 x 2 in to 2 x 3 in</td>
<td>Measure a printed sample with a ruler</td>
</tr>
<tr>
<td>Lateral white space</td>
<td>At least 0.25 in left and right</td>
<td>Keep text and barcode clear of the edge</td>
</tr>
<tr>
<td>Top and bottom white space</td>
<td>At least 0.125 in</td>
<td>Check the barcode is not pushed into the margin</td>
</tr>
<tr>
<td>Distance from package edge</td>
<td>At least 0.25 in</td>
<td>Keep the label off corners and curves</td>
</tr>
<tr>
<td>Ink and stock</td>
<td>Black ink on white, non-reflective, removable adhesive</td>
<td>Reject glossy or metallic stock</td>
</tr>
<tr>
<td>Printer setting</td>
<td>Laser at about 300 DPI</td>
<td>Scan a sample; the PDF preview is not proof</td>
</tr>
<tr>
<td>Label content</td>
<td>ASIN or FNSKU, product name, item condition</td>
<td>Name and condition match the unit</td>
</tr>
<tr>
<td>Scannable life</td>
<td>Readable and scannable for 24 months</td>
<td>Plan extra labels for slow-moving stock</td>
</tr>
</tbody></table>
<h3>What fails on the bench</h3>
<p>Glossy and metallic stock reflect the scanner. Removable adhesive on matte white stock is the combination that survives a rework without tearing the retail pack. A PDF that looks sharp on screen proves nothing. Scan the physical sample with the same gun the line will use.</p>
<p>Name and condition have to match the unit in your hand. A &quot;New&quot; label on an open-box unit is a receiving problem even when the barcode scans.</p>
<p>Slow movers sit long enough for ink to fade and adhesive to lift. Flag them with the sales rank checker and print a spare set with the batch. If you also need campaign stickers that are not FBA barcodes, <a href="https://theprintwarehouse.uk/printshop/sticker-and-labels">find stickers for promotional campaigns</a> from The Print Warehouse Ltd rather than stretching an FNSKU layout into a marketing sticker.</p>
<p>Keep a barcode master file with SKU, ASIN, FNSKU, GTIN, marketplace, condition, and packaging version. A label can look perfect and still belong to last year&#39;s variation.</p>
<h2>How to Print and Apply FNSKU Labels Step by Step</h2>
<p>A navy unit wearing the black SKU&#39;s FNSKU is already a reject, and the shipment is not even closed. Decide the barcode type first, then whether you or your 3PL will apply it, and only then print.</p>
<p><img src="https://cdnimg.co/13b9acdf-56f8-4f76-98b5-6695e45942c4/8e1c9f65-07b3-4729-96d0-a11c166ec65f/labels-for-fba-fnsku-labeling.jpg" alt="A four-step infographic showing how to print and apply Amazon FNSKU labels for FBA shipments."></p>
<p><a href="https://sellercentral.amazon.com/gp/help/external/G201100910?locale=en-GB">Amazon&#39;s labeling help</a> distinguishes manufacturer barcodes from Amazon barcodes by seller and product eligibility. Resellers use Amazon barcodes even when a manufacturer barcode exists. Brand owners may keep an eligible manufacturer barcode. A Brand Registry brand without a UPC, EAN, JAN, ISBN, or other eligible code can apply for a <strong>GTIN exemption</strong>, and products covered by that exemption still require Amazon barcode stickers. Cover other visible product barcodes unless they are serial-number or Transparency codes.</p>
<p>In <strong>Send to Amazon</strong>, choose whether you or your 3PL will apply the labels for each SKU before you export. That is the cost call: your labor and label stock, or the 3PL&#39;s per-unit charge. Pull the FNSKU file from that same shipment plan so the sheet count matches what you send.</p>
<ol>
<li><strong>Lock the barcode type.</strong> Check Brand Registry, reseller status, and any GTIN exemption for that ASIN before a single sheet prints. Skipping this on a &quot;we always use UPCs&quot; account is the slip that strands a wholesale line.</li>
<li><strong>Name who applies them.</strong> Set you or your 3PL on every SKU in the plan. Do not export until that owner is filled in.</li>
<li><strong>Lock the shipment quantities.</strong> Export labels only after final SKU quantities are approved. Printing for units you will not send is how leftover sheets get applied to the next ASIN.</li>
<li><strong>Print the file you just exported.</strong> Run the batch on the stock and printer setting already chosen for that SKU. A thermal shortcut on the wrong stock is the usual quality miss, so scan one physical label before the rest of the roll.</li>
<li><strong>Match the unit.</strong> ASIN or FNSKU, size, color, and condition have to match the unit in hand. Physically separate look-alike variants before the first sticker goes down, or a navy unit gets the black label.</li>
<li><strong>Cover the other codes.</strong> Opaque-cover legacy UPC, EAN, and ISBN barcodes. Leave serial-number and Transparency codes visible. A half-covered UPC still scans.</li>
<li><strong>Place it on a flat face.</strong> Keep it off edges, curves, seams, and shrink-wrap folds. A curved bottle neck is the classic reject. If you add bubble wrap or another overpack, put the label on the exterior so it scans without opening the prep.</li>
<li><strong>Scan twice, then keep the log.</strong> Scan one unit per production lot and one unit after prep. Prep tape is what covers a barcode that scanned fine on the bare unit. Save that scan log before you close the shipment. A closed plan with no scan file leaves you arguing from memory.</li>
</ol>
<blockquote>
<p>The single rule most likely to get a unit rejected is a second scannable barcode left visible beside the FNSKU.</p>
</blockquote>
<p>I recommend treating a clean scan of the right product and condition, on the finished prep, as the only pass. Receiving exceptions start from the ones you skipped.</p>
<p>This walkthrough shows the same receive-ready sequence on camera.</p>
<iframe width="100%" style="aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/RqguD0PX0zo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<h2>Carton and Pallet Labels Amazon Checks Separately</h2>
<p>A common carton reject is a box ID stuck across a flap fold. Every unit inside scans, but the dock still refuses the box because the shipment barcode is creased.</p>
<p><a href="https://sellercentral.amazon.com/help/hub/reference/external/G200178470?ie=UTF8&locale=en-US">Amazon&#39;s shipment-label requirements</a> treat carton and pallet labels as separate from the unit FNSKU or manufacturer barcode. Every box and pallet needs its own shipment identification. Each box needs a unique <strong>FBA box ID</strong> from the shipment workflow. Do not photocopy it, reuse it, or edit it for another box.</p>
<p>Standard size is <strong>3 1/3 by 4 inches</strong> (<strong>8.47 by 10.16 cm</strong>). You can print on <strong>4 by 6 inch</strong> thermal paper (<strong>10 by 15 cm</strong>). The carrier label, UPS or FedEx, goes on the same box, on a flat uncovered face, away from folds, corners, edges, and tape seams, so both barcodes scan. Each pallet needs <strong>four pallet labels</strong>, one at the top center of each side.</p>
<table>
<thead>
<tr>
<th>Label</th>
<th>Size</th>
<th>Placement</th>
</tr>
</thead>
<tbody><tr>
<td>FBA box ID</td>
<td>3 1/3 by 4 in, or 4 by 6 in thermal</td>
<td>Flat face, unique to that box, never reused</td>
</tr>
<tr>
<td>Carrier label</td>
<td>Carrier format</td>
<td>Same box, uncovered, clear of the box ID</td>
</tr>
<tr>
<td>Pallet label</td>
<td>From the shipment workflow</td>
<td>Four labels, top center of each side</td>
</tr>
<tr>
<td>Unit barcode</td>
<td>Per the unit spec</td>
<td>On every unit, including units inside a case pack</td>
</tr>
</tbody></table>
<p>A carton label never replaces the product barcode on case-packed units. Receiving can scan the box and still fail the contents.</p>
<p>Carton strength matters once labels have to stay flat through a sort center. <a href="https://www.storageremovalboxes.co.uk/removal-boxes-medium-double-walled-18x18x12">Buy Cheap Double Wall Boxes Online</a> from Storage &amp; Removal Boxes Ltd if single-wall cartons are crushing under your case weight and folding the label with the flap. Pair that with a <a href="https://www.onlinebrandgrowth.com/blog/packaging-for-e-commerce/">packaging setup built for ecommerce</a> so the outer pack and the label survive the same trip.</p>
<p>Bench-check every carton before it leaves the table. The box is sealed. The label is flat. Both barcodes are visible. The box ID matches the line on the shipment plan.</p>
<h2>Fixing Labels That Receiving Rejects</h2>
<p>Most rejects come from a short list. Fix them on the next shipment cycle, and relabel before cartonization whenever you can. Relabeling after receipt costs more and holds the units out of available inventory.</p>
<table>
<thead>
<tr>
<th>Symptom</th>
<th>Likely cause</th>
<th>Fix</th>
</tr>
</thead>
<tbody><tr>
<td>Barcode will not scan</td>
<td>Smudged ink, glossy stock, or printer below 300 DPI</td>
<td>Reprint on matte stock at 300 DPI and scan a sample</td>
</tr>
<tr>
<td>Two barcodes scan on one unit</td>
<td>Legacy UPC, EAN, or ISBN still visible</td>
<td>Cover it with an opaque label, keeping only the permitted codes</td>
</tr>
<tr>
<td>Wrong variation received</td>
<td>Labels from an old ASIN or mixed variant sheets</td>
<td>Match ASIN, size, color, and condition; separate look-alikes</td>
</tr>
<tr>
<td>Label curls or peels</td>
<td>Applied on a curve, seam, or shrink-wrap fold</td>
<td>Reapply on a flat area at least 0.25 in from the edge</td>
</tr>
<tr>
<td>Box ID or carrier label unreadable</td>
<td>Label across a fold, tape, or corner</td>
<td>Relabel on a flat, uncovered surface</td>
</tr>
<tr>
<td>Units stay unreceived after labeling</td>
<td>Wrong barcode type for the seller role</td>
<td>Recheck seller role and barcode type, then open a case</td>
</tr>
</tbody></table>
<h3>Work the row that matches the photo</h3>
<p><strong>Won&#39;t scan.</strong> Reprint. Do not press harder on a glossy label and hope the gun catches it. Scan the new sample before you touch the rest of the lot.</p>
<p><strong>Two codes.</strong> Cover the legacy barcode fully. A transparent overlay is not a cover. Leave Transparency and serial codes alone.</p>
<p><strong>Wrong variation.</strong> Stop the line, split the sheets, and match ASIN, size, color, and condition to the physical unit. Mixed navy and black sheets are how the wrong variation gets received.</p>
<p><strong>Curl or peel.</strong> Peel it off and reapply on a flat panel, clear of the edge. Do not smooth a label over a shrink-wrap fold.</p>
<p><strong>Dead box ID.</strong> Print a new box ID for that box only. Never copy the neighbor&#39;s label.</p>
<p><strong>Still unreceived.</strong> The barcode type may not match the seller role on that ASIN. Correct the labels, then open a case with the scan record attached. Our FBA logistics work includes account health monitoring, case management, and stranded-inventory resolution when a receiving hold needs a documented case rather than another sticker.</p>
<h2>Pre-Send Gate Before Each Shipment</h2>
<p>The cartons are taped, the FNSKU sheets are printed, and the carrier pickup is already on the calendar. Hold the send. Three records still have to agree before a single carton leaves.</p>
<p>The barcode master file shows the current packaging version for every SKU. Every saved scan record matches its shipment-plan line. Any labeling provider has delivered its per-SKU barcode map in writing.</p>
<p>Recheck seller role on any ASIN whose supply chain changed, a new distributor or a wholesale partner included. If a check fails, hold the shipment and fix the cause from the symptom table. A rejected carton costs more to recover than a delayed send.</p>
<p>Shipment creation, labeling, and inbound management sit inside the same FBA inventory and replenishment workflow, with coordination finished before freight is booked. If the cartons are ready and the forwarder is next, review <a href="https://www.onlinebrandgrowth.com/blog/amazon-fba-freight-forwarders/">Amazon FBA freight forwarders</a> only after this gate is clean.</p>
<p>Book a call with Online Brand Growth to review your label process before the next shipment.</p>
<p><a href="https://onlinebrandgrowth.com">Online Brand Growth</a> handles FBA shipment creation, labeling, and inbound management for brands that need inventory received cleanly, plus account health monitoring and stranded-inventory resolution when a label problem turns into a case. If the next send still mixes reseller units and brand-owner barcodes, use that call to work the SKUs already on the plan, before anyone prints.</p>
`,
}

export default post
