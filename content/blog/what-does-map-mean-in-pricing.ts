import type { BlogPost } from '@/lib/blog'

const post: BlogPost = {
  title: 'What Does MAP Mean in Pricing? A Plain-English Explanation',
  description: 'MAP means Minimum Advertised Price — not minimum selling price. The legal difference is significant, and Amazon will never enforce it for you.',
  publishDate: '2025-06-02',
  htmlContent: `
<p>Brands use the term MAP constantly and correctly about half the time. The other half of the time they are describing a legal concept that does not exist, or confusing MAP with something that would actually expose them to antitrust liability if they tried to enforce it the way they intend.</p>

<p>Here is the plain-English version.</p>

<h2>MAP Stands for Minimum Advertised Price</h2>

<p>That is the floor price at which an authorized reseller may <em>advertise</em> your product. The key word is advertised. MAP governs what appears on Amazon's product listing, on Google Shopping, in a retailer's email campaign, on their website. It is a price presentation rule, not a transaction price rule.</p>

<p>This distinction carries legal weight. A manufacturer cannot legally dictate the final selling price of a product after it changes hands — that is resale price maintenance, and it runs into antitrust problems under the Sherman Act. But a manufacturer can unilaterally establish conditions under which they will continue to supply a reseller, including the condition that the reseller not advertise below a specified price. That is MAP. The difference between legal and illegal is often exactly this: unilateral policy versus bilateral agreement on resale prices.</p>

<p>Have your attorney look at your MAP policy language. This is not a place for self-drafted boilerplate.</p>

<h2>MAP vs MSRP vs Floor Price</h2>

<p>These three terms are used interchangeably by people who should know better. They mean different things.</p>

<ul>
  <li><strong>MAP (Minimum Advertised Price)</strong> — The lowest price a reseller may advertise. A reseller could in theory sell at MAP or above. They are not allowed to list it lower.</li>
  <li><strong>MSRP (Manufacturer's Suggested Retail Price)</strong> — What you suggest the product sell for. Emphasis on suggested. Sellers are not required to honor it. It is a marketing signal, not a binding number. Amazon does not enforce MSRP.</li>
  <li><strong>Floor Price / Minimum Selling Price</strong> — The lowest price at which a product can actually transact. This is the territory where legal exposure lives if you try to enforce it contractually. Handle with care.</li>
</ul>

<p>Brands confuse MAP with MSRP constantly. They set an MSRP, call it their MAP, and then wonder why sellers are ignoring it. MSRP has no enforcement mechanism. MAP does — but only if you build one yourself.</p>

<h2>Why Amazon Will Not Enforce MAP for You</h2>

<p>This is the most common misconception we encounter. Brands register with Amazon Brand Registry, file MAP violation reports, and wait for Amazon to take action. Amazon does not take action on MAP violations. They are legally prohibited from doing so.</p>

<p>Amazon is a retailer and a marketplace operator. For Amazon to enforce MAP on behalf of a manufacturer would require Amazon to coordinate pricing among competing sellers — a form of horizontal price fixing. The antitrust exposure is obvious. Amazon's legal team has made the decision, correctly, that enforcing third-party MAP policies is not a business Amazon should be in.</p>

<blockquote>
  <p>Amazon's terms of service prohibit sellers from colluding on pricing. But Amazon itself enforcing a minimum price floor set by a manufacturer would be a form of the same coordination. Amazon will not do it. Plan accordingly.</p>
</blockquote>

<p>What Amazon will do: enforce intellectual property rights, remove counterfeit listings, remove sellers making false claims, and respond to legitimate trademark infringement reports. None of those are MAP enforcement. They are separate tools with separate triggers.</p>

<h2>Why Amazon Is the Hardest MAP Enforcement Environment</h2>

<p>MAP violations happen everywhere, but Amazon concentrates the problem in ways other channels do not.</p>

<p>First, the marketplace structure means anyone with your product in hand can list on your ASIN. Unauthorized sellers — gray market buyers, liquidation purchasers, retail arbitrage operators — have no relationship with your brand and no reason to honor a MAP policy they never agreed to.</p>

<p>Second, Amazon's repricing ecosystem is highly automated. Most professional sellers use repricing software that monitors competitors and adjusts prices in near real-time. When one seller drops below MAP, every other seller's repricing tool sees it and starts the countdown to the next price cut. The cascade can compress a $35 MAP product to $22 in 48 hours without any seller making a deliberate choice to violate your policy — they are all just following their algorithms.</p>

<p>Third, Amazon's Buy Box algorithm rewards the lowest competitive price. This creates structural pressure toward the bottom. A seller at MAP will lose the Buy Box to a seller below MAP, which means the legitimate seller loses sales, which means they start questioning whether they should honor MAP at all.</p>

<h2>What Brands Can Do — and What They Cannot</h2>

<p>You can:</p>

<ul>
  <li>Set a unilateral MAP policy and communicate it to all resellers as a condition of your supply relationship.</li>
  <li>Terminate supply to resellers who violate MAP, without explanation required.</li>
  <li>Use Brand Registry tools to remove counterfeit listings and unauthorized use of your trademark.</li>
  <li>Issue cease-and-desist notices to unauthorized sellers.</li>
  <li>Use Amazon's Project Zero or Transparency programs to prevent counterfeits at the unit level.</li>
  <li>Monitor advertised prices 24/7 through automated tools and flag violations the same day they appear.</li>
</ul>

<p>You cannot:</p>

<ul>
  <li>Require resellers to sign a contract agreeing to a minimum resale price (resale price maintenance).</li>
  <li>Coordinate with other sellers or manufacturers to set price floors across a category.</li>
  <li>Ask Amazon to pull a listing solely because the price is below your MAP.</li>
  <li>Prevent gray-market sales of legitimately purchased product in most cases (first sale doctrine).</li>
</ul>

<h2>Building the Monitoring System You Actually Need</h2>

<p>The brands that maintain price integrity on Amazon share one trait: they treat MAP enforcement as an operational function, not an occasional complaint. Monitoring happens daily, automatically. Violations are flagged within hours. Responses go out the same day.</p>

<p>We built our <strong>360 Brand Protection™</strong> system to do exactly this. It monitors MAP compliance across your entire ASIN catalog, detects unauthorized sellers the moment they appear, and triggers automated responses — cease-and-desist notices, Brand Registry reports, escalation protocols — without waiting for someone to notice a problem manually.</p>

<p>Neutralyze launched with us and went from zero to seven figures in year one. A major reason that trajectory was possible: price integrity held from the beginning. They never experienced the MAP collapse that kills margins in the first 18 months for brands that are not watching.</p>

<p>MAP enforcement is not glamorous. It is not the kind of work that gets talked about in case studies. But it is the unglamorous work that protects the margins that make everything else possible.</p>

<h2>Work With OBG</h2>

<p>360 Brand Protection™ is included at no additional charge for OBG brand partners. MAP monitoring, unauthorized seller removal, and automated enforcement — running 24/7 without your team having to manage it.</p>

<p>If your prices are not where you set them, that is a solvable problem. We have solved it for brands from $100K to $3M and beyond.</p>

<p>Our <strong>30-day profitability guarantee</strong> applies to every engagement. In the first 30 days, we identify high-impact improvements to your Amazon contribution margin or you do not continue paying. Simple.</p>

<p><strong>Start with a free brand audit at onlinebrandgrowth.com.</strong></p>
`,
}

export default post
