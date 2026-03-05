import type { BlogPost } from '@/lib/blog'

const post: BlogPost = {
  title: 'Amazon Image Requirements: The Specs, the Rules, and the Strategy to Win',
  description: 'Meeting Amazon image requirements keeps your listing live. A real image strategy makes it convert. Here are the specs and the conversion framework serious brands use.',
  publishDate: '2025-06-01',
  htmlContent: `
    <p>Requirements are the floor, not the ceiling. You can meet every Amazon image specification and still lose the click to a competitor with a better visual strategy. Most brands treat compliance as the goal. The goal is conversion.</p>

    <p>This post covers both. The technical requirements you must know to keep your listing live and unsuppressed — and the creative standards that separate listings converting at 8% from listings converting at 22% on the same traffic. One without the other is half a strategy.</p>

    <h2>Amazon's Technical Image Requirements</h2>

    <p>These are non-negotiable. Violations result in image rejection, listing suppression, or — worst case — your main image being replaced by Amazon's placeholder, which is catastrophic for conversion in search results.</p>

    <h3>File Specifications</h3>

    <ul>
      <li><strong>Minimum dimensions:</strong> 1,000 pixels on the longest side. This is the absolute floor. Below this, Amazon disables the zoom feature — and zoom measurably increases conversion for products where visual detail matters to the buying decision.</li>
      <li><strong>Recommended dimensions:</strong> 2,000 pixels or more on the longest side. This enables full zoom quality and future-proofs your images as Amazon's display standards evolve.</li>
      <li><strong>Maximum dimensions:</strong> 10,000 pixels on the longest side. Files larger than this will be rejected.</li>
      <li><strong>Accepted formats:</strong> JPEG (preferred), TIFF, PNG, GIF. JPEG is the standard. It processes efficiently and is universally supported across Amazon's systems.</li>
      <li><strong>Color mode:</strong> sRGB. CMYK files will not display correctly. Submit in sRGB exclusively.</li>
      <li><strong>Maximum file size:</strong> 10MB per image.</li>
      <li><strong>Slots available:</strong> Up to 9 images per ASIN (1 main plus up to 8 secondary), with one video slot. Slot availability varies by category.</li>
    </ul>

    <h3>Main Image Requirements</h3>

    <p>The main image — the one that appears in search results and at the top of your product detail page — carries the strictest requirements:</p>

    <ul>
      <li><strong>Pure white background only:</strong> RGB 255, 255, 255. Not off-white. Not light gray. Not a subtle gradient. Amazon's automated image quality systems flag non-compliant backgrounds and suppress listings that do not correct them.</li>
      <li><strong>Product fills 85% of the frame:</strong> The product — not the packaging, not props, not a lifestyle setting — must occupy at least 85% of the image area. In practice, the highest-performing images push 90 to 95%.</li>
      <li><strong>No text, graphics, or overlays:</strong> No watermarks, promotional badges, "Best Seller" callouts, website URLs, or any graphic elements on the main image. Product and white background only.</li>
      <li><strong>No props or accessories unless included:</strong> Nothing in the main image that the buyer will not receive. If the listing is for the product alone, the product alone appears.</li>
      <li><strong>Product must be in focus, professionally lit:</strong> Amazon's requirements specify this. More importantly, your conversion rate requires it. An amateur main image signals low quality before the buyer reads a word.</li>
      <li><strong>Apparel and footwear rules:</strong> Adult apparel must generally be shown on a human model for the main image, not flat-lay or mannequin, in most subcategories. Footwear has specific angle requirements. Check category-specific style guides for your exact product type.</li>
    </ul>

    <h3>Secondary Image Requirements</h3>

    <p>Secondary images (positions 2 through 9) have more creative latitude but are not restriction-free:</p>

    <ul>
      <li>Must meet minimum size requirements (1,000 pixels minimum; 2,000+ recommended).</li>
      <li>Cannot include Amazon logos, trademarks, or any content implying Amazon endorsement.</li>
      <li>Cannot include customer reviews, star ratings, or "Amazon's Choice" references in image content.</li>
      <li>Cannot include competitor brand names in ways that disparage competitors.</li>
      <li>Cannot include time-sensitive information — no sale prices, countdown timers, or availability dates in images.</li>
      <li>Cannot include contact information — no website URLs, phone numbers, or email addresses.</li>
      <li>Certification logos are allowed if the certification is legitimate and currently valid. Expired or unsubstantiated certifications create both compliance and legal risk.</li>
    </ul>

    <h2>Category-Specific Requirements That Override General Rules</h2>

    <p>Several categories carry additional requirements that take precedence over the general image guidelines. Not knowing these is how brands get suppressed in categories where they expect no issues.</p>

    <h3>Grocery and Food</h3>

    <p>Labels must be clearly legible. Nutrition facts, ingredients, and allergen information shown in images must match what is on the actual product. FDA-regulated label claims shown in images must be substantiated. Brands frequently run into compliance issues when their image callouts include health benefit language that goes beyond what their FDA-approved labeling supports.</p>

    <h3>Health, Beauty, and Personal Care</h3>

    <p>Any claim that suggests medical treatment, disease cure, or drug-like effect in images is restricted. Before-and-after imagery requires disclosure and compliance with Amazon's specific policies on those images. Terms like "anti-aging" occupy a gray zone that depends on category and context — err toward specificity and avoid anything that could be read as a drug claim.</p>

    <h3>Supplements</h3>

    <p>This category has the heaviest scrutiny. Structure-function claims in images must match the actual product label. Certification badges must reflect current, valid certification — Amazon has increasingly enforced against brands displaying certifications that have lapsed or were never properly obtained.</p>

    <h3>Electronics</h3>

    <p>All included accessories must be visible in the main image or clearly represented. Screens shown on devices should display realistic on-screen content without displaying other brands' logos or interfaces without authorization.</p>

    <h3>Jewelry</h3>

    <p>Most jewelry subcategories require the main image to show the piece worn by a human model, not on a mannequin or as a flat-lay. This is one of the most frequently violated category-specific requirements.</p>

    <h2>Common Compliance Failures That Suppress Listings</h2>

    <p>We see these consistently when auditing brands that are experiencing listing issues:</p>

    <ul>
      <li><strong>Off-white backgrounds:</strong> Photographed on what looks white but is actually a slightly warm or cool-toned backdrop. Amazon's automated detection catches these. The fix is a proper white background, not post-production brightness adjustment.</li>
      <li><strong>Product too small in the frame:</strong> A product floating in a large white space occupying 60% of the frame violates the 85% requirement and performs poorly in search results thumbnails.</li>
      <li><strong>Lifestyle main image:</strong> Common for brands that want to lead with an emotional image. It violates the main image requirement and will get the listing suppressed in many categories.</li>
      <li><strong>Lapsed certifications in images:</strong> A brand that obtained organic certification three years ago, let it lapse, and still has the certification logo in their images is creating legal exposure and compliance risk simultaneously.</li>
      <li><strong>Prohibited claims in secondary images:</strong> "#1 Brand in Category" without substantiation. "FDA Approved" when the product is only FDA registered. These surface Amazon compliance flags and can trigger review of other content on the listing.</li>
    </ul>

    <h2>Beyond Compliance: The Creative Strategy That Drives Conversion</h2>

    <p>Every Amazon brand in your category meets the technical requirements. Some of them convert at twice your rate on the same traffic. The difference is creative strategy, not compliance.</p>

    <h3>The Main Image Is a Click Driver, Not a Product Photograph</h3>

    <p>Its job is to win the click in a search results grid where every product is on a white background, competing for the same buyer's attention, at thumbnail size. The question to ask about your main image is not "does this look professional?" The question is "does this win the click at thumbnail size against my specific competitors?"</p>

    <p>At OBG, we drive the main image headline from SQP data. We identify the keyword where our client converts at the highest rate above the market average — and that keyword becomes the image headline. A buyer searching that term arrives at a listing whose visual message is aligned with what they searched for. Click-through rate improves. Conversion improves. Ranking improves. This is data-to-creative integration that most brands never attempt.</p>

    <h3>The Secondary Image Sequence Is a Sales Conversation</h3>

    <p>By the time a buyer has scrolled through your full image gallery, every question they had before clicking should be answered, and every objection should be addressed. Each image has a role in that sequence.</p>

    <p>The sequence we use: lifestyle image to drive purchase visualization, feature callout to communicate key differentiation, scale reference to eliminate size ambiguity, quality proof for credibility, and a comparison or differentiation image to make superiority concrete and visual. The sequence is not random. It maps to the buyer's mental journey from consideration to decision.</p>

    <h3>Test Your Images. Every Brand Skips This.</h3>

    <p>We build three image sets for every listing we manage — each reflecting a different angle derived from customer avatar data — and run them against each other in Jungle Ace. The split test measures click-through rate and conversion rate on real traffic. The winning set becomes the canonical listing. The rest inform our creative direction going forward.</p>

    <p>Most brands launch one set of images, assume they are fine, and never revisit the question. That is a permanent, invisible conversion rate penalty paid on every impression the listing receives. Testing is not optional for brands that want to maximize return from their traffic. It is the only way to know what is actually converting buyers versus what looks good in a brand review meeting.</p>

    <h2>Audit Your Image Stack Right Now</h2>

    <p>Pull up your top 10 ASINs by revenue and run through this checklist:</p>

    <ul>
      <li>Does the main image meet the 85% frame requirement and have a pure white background with no overlays?</li>
      <li>Are all images at 2,000 pixels minimum on the longest side to enable full zoom?</li>
      <li>Are all 8 secondary image slots used? Empty slots are missed conversion opportunities.</li>
      <li>Does the image sequence tell a complete sales story, or is it a collection of product angles that do not build toward a decision?</li>
      <li>Are any certification badges in your images for certifications that are current and valid?</li>
      <li>Do your secondary images address the objections that appear most frequently in your negative reviews?</li>
      <li>When was the last time you tested your main image against an alternative? If the answer is "never," that is your answer.</li>
    </ul>

    <h2>Work With OBG</h2>

    <p>We have grown 4 brands to 7 figures since 2018. We built our own brand, Neutralyze, from $0 to 7 figures in year one with zero outside traffic. Image strategy — built on SQP data, customer avatar research, and Jungle Ace split testing — was a core part of how we did it. We apply the same system to every brand we manage.</p>

    <p>If your images are compliant but not converting, or if you have never run a structured image test, book a free strategy call. We will review your current image stack, benchmark your conversion rate against market averages in your category, and give you a specific roadmap for improving the creative. We back our work with a 30-day profitability guarantee.</p>
  `,
}

export default post
