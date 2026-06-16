// Central content config for dedicated Amazon service pages.
// Rendered by app/services/[slug]/page.tsx and surfaced on the /services hub,
// footer, and sitemap. Expanded from the original /services anchor sections.

export interface ServiceFAQ {
  q: string
  a: string
}

export interface RelatedLink {
  label: string
  href: string
}

export type ServiceIcon =
  | 'ppc'
  | 'seo'
  | 'logistics'
  | 'consulting'
  | 'brand'
  | 'account'
  | 'storefront'
  | 'aplus'
  | 'launch'
  | 'global'
  | 'reimbursement'
  | 'compare'

export interface ServicePage {
  slug: string
  tier: 1 | 2
  icon: ServiceIcon
  navLabel: string // short label for hub / footer
  metaTitle: string
  metaDescription: string
  eyebrow: string
  h1: string
  headline: string // orange sub-headline
  intro: string
  features: string[]
  approachTitle: string
  approach: string // unique prose block (depth beyond bullets)
  faqs: ServiceFAQ[]
  ctaLabel: string
  hubSummary: string
  relatedCaseStudy?: RelatedLink
  relatedServices: string[] // slugs
  link360?: boolean
  leadMagnet?: { eyebrow: string; heading: string; blurb: string }
}

export const servicePages: ServicePage[] = [
  // ── Tier 1 ───────────────────────────────────────────────
  {
    slug: 'amazon-ppc-management',
    tier: 1,
    icon: 'ppc',
    navLabel: 'Amazon PPC Management',
    metaTitle: 'Amazon PPC Management Agency | Online Brand Growth',
    metaDescription:
      'Profit-focused Amazon PPC management. We run Sponsored Products, Brands, Display, and DSP campaigns with ASIN-by-ASIN bid management to grow revenue and ROAS.',
    eyebrow: 'PPC Advertising',
    h1: 'Amazon PPC Advertising Management',
    headline: 'Stop Wasting Ad Spend. Start Driving Profitable Growth.',
    intro:
      "Most Amazon brands are either under-investing in advertising or pouring money into campaigns that don't convert. Our team manages your Sponsored Products, Sponsored Brands, and Sponsored Display campaigns with a single focus: maximizing return on ad spend while growing top-line revenue.",
    features: [
      'Full-funnel PPC strategy across Sponsored Products, Brands, and Display',
      'ASIN-by-ASIN bid management and keyword harvesting',
      'Competitor conquest and defensive ad strategies',
      'Amazon DSP demand-side programmatic (select clients)',
      'Weekly performance reporting with clear KPIs',
      'Advertising aligned with organic rank and conversion goals',
    ],
    approachTitle: 'How We Structure Your Campaigns',
    approach:
      "We start with a full account audit to map wasted spend, harvest converting search terms, and rebuild your campaign architecture around your real profit drivers. Bids are managed ASIN-by-ASIN against contribution margin targets — not vanity ACoS numbers — and we coordinate ad strategy with your organic ranking so paid and organic reinforce each other instead of cannibalizing. You get transparent weekly reporting tied to the KPIs that actually move the business.",
    faqs: [
      {
        q: 'How much ad spend do I need before PPC management makes sense?',
        a: 'We typically work with brands spending at least a few thousand dollars per month on Amazon ads, but the more important factor is your catalog and margin. On your free strategy call we will tell you honestly whether managed PPC is the right lever right now.',
      },
      {
        q: 'Do you guarantee a specific ACoS or ROAS?',
        a: 'We optimize toward your profitability goals rather than a one-size-fits-all ACoS target, because the right number depends on your margins, launch stage, and growth objectives. We set targets together and report against them every week.',
      },
      {
        q: 'How does PPC work alongside our SEO and listings?',
        a: 'Closely. Advertising data tells us which keywords convert, which feeds your listing and SEO strategy, while strong organic rank lowers the ad spend needed to defend it. We manage both so they compound.',
      },
    ],
    ctaLabel: 'Talk to an Amazon Ads Expert',
    hubSummary:
      'Profit-focused management of Sponsored Products, Brands, Display, and DSP — with ASIN-by-ASIN bid control.',
    relatedCaseStudy: {
      label: 'See how we 3.4x’d a brand’s contribution profit',
      href: '/case-studies#self-defense-brand',
    },
    relatedServices: ['amazon-seo-listing-optimization', 'amazon-strategic-consulting'],
  },
  {
    slug: 'amazon-seo-listing-optimization',
    tier: 1,
    icon: 'seo',
    navLabel: 'SEO & Listing Optimization',
    metaTitle: 'Amazon SEO & Listing Optimization Agency | OBG',
    metaDescription:
      'Amazon SEO and listing optimization that ranks and converts: keyword research, copywriting, A+ Content, Brand Story, and storefront design from a founder-led team.',
    eyebrow: 'SEO & Listings',
    h1: 'Amazon SEO & Listing Optimization',
    headline: 'Your Listings Are Either Working For You or Against You.',
    intro:
      "In Amazon's hyper-competitive search environment, organic visibility is one of your most valuable assets. We combine deep keyword research, conversion rate optimization, and A+ Content to ensure your listings rank high, convert effectively, and tell a compelling brand story.",
    features: [
      'Data-driven keyword research and search-term optimization',
      'Title, bullet, and backend search-term copywriting',
      'A+ Content and Brand Story creation',
      'Amazon Storefront design and optimization',
      'Product photography and video direction',
      'Conversion rate analysis and iterative A/B testing',
    ],
    approachTitle: 'How We Approach Listing Optimization',
    approach:
      "We reverse-engineer the keywords your best-converting competitors rank for, then rebuild your title, bullets, images, and backend terms around the highest-intent, highest-volume opportunities. Every change is measured: we watch indexing, organic rank, and conversion rate, then iterate. Because we also run PPC, we feed real conversion data from advertising directly into your organic strategy — so your listings are optimized on evidence, not guesswork.",
    faqs: [
      {
        q: 'How do you decide which keywords to target?',
        a: 'We blend Amazon search-volume data, competitor rank analysis, and your own advertising conversion data to prioritize terms by intent and revenue potential — not just search volume.',
      },
      {
        q: 'What is the difference between standard A+ Content and Brand Story?',
        a: 'Standard A+ Content enhances individual product detail pages with richer modules; Brand Story is a brand-level module that appears across your catalog. We design both to lift conversion and reinforce your brand.',
      },
      {
        q: 'Will updating my listing hurt my current ranking?',
        a: 'Done correctly, optimization improves rank and conversion. We make changes deliberately and monitor indexing and performance so we can course-correct quickly if needed.',
      },
    ],
    ctaLabel: 'Optimize My Listings',
    hubSummary:
      'Keyword research, conversion copywriting, A+ Content, and storefront design that ranks and converts.',
    relatedCaseStudy: {
      label: 'How a brand scaled 30x with SEO + PPC',
      href: '/case-studies#baby-brand',
    },
    relatedServices: ['amazon-ppc-management', 'amazon-storefront-design', 'aplus-content-design'],
  },
  {
    slug: 'fba-logistics-operations',
    tier: 1,
    icon: 'logistics',
    navLabel: 'FBA Logistics & Operations',
    metaTitle: 'Amazon FBA Logistics & Operations Management | OBG',
    metaDescription:
      'Amazon FBA inventory management, account health monitoring, and operations. We prevent stockouts, overstock fees, and account issues that quietly erode profit.',
    eyebrow: 'Logistics & Operations',
    h1: 'Amazon FBA Logistics & Operations',
    headline: 'Operational Excellence Is the Unfair Advantage Most Brands Overlook.',
    intro:
      "Profitability on Amazon isn't just about selling more — it's about running tighter operations. Our team manages your FBA inventory, coordinates with your supply chain, and proactively prevents stockouts, overstock penalties, and costly account health issues.",
    features: [
      'FBA inventory planning and replenishment strategy',
      'Shipment creation, labeling, and inbound management',
      'Account health monitoring and case management',
      'Removal-order and stranded-inventory resolution',
      'Seller Central compliance and policy management',
      'Coordination with 3PLs and freight partners',
    ],
    approachTitle: 'The Inventory Planning Cycle We Run',
    approach:
      'Stockouts kill ranking and momentum; overstock racks up long-term storage fees. We manage the full replenishment cycle — demand forecasting, reorder timing, inbound shipment creation, and removal of stranded or aged inventory — to keep you in stock on your hero ASINs without over-committing cash to storage. Alongside that, we monitor account health daily and handle Seller Support cases so small issues never become suspensions.',
    faqs: [
      {
        q: 'Can you recover money Amazon owes us for lost or damaged inventory?',
        a: 'Yes. FBA reimbursement recovery is part of our operations work and is also available as a standalone service. We audit your account for lost, damaged, and over-charged units and file the claims.',
      },
      {
        q: 'Do you physically handle our inventory?',
        a: 'We manage the planning, Seller Central workflows, and coordination with your 3PL and freight partners. We can recommend prep and 3PL partners, but we are your strategic and operational team rather than a warehouse.',
      },
      {
        q: 'How do you prevent stockouts on best-sellers?',
        a: 'We forecast demand by ASIN, build in lead-time and safety-stock buffers, and trigger reorders early so your top products stay in stock and hold their rank.',
      },
    ],
    ctaLabel: 'Fix My Operations',
    hubSummary:
      'Inventory planning, account health, and FBA operations that protect rank and margin.',
    relatedServices: ['fba-reimbursement', 'amazon-strategic-consulting'],
  },
  {
    slug: 'amazon-strategic-consulting',
    tier: 1,
    icon: 'consulting',
    navLabel: 'Strategic Growth Consulting',
    metaTitle: 'Amazon Strategic Growth Consulting | Online Brand Growth',
    metaDescription:
      'Amazon channel audits, contribution-margin analysis, launch strategy, 1P/3P hybrid guidance, and international expansion — direct from founders with 25+ years of experience.',
    eyebrow: 'Strategic Consulting',
    h1: 'Amazon Strategic Growth Consulting',
    headline: 'A Clear Strategy Is the Difference Between Scaling and Stalling.',
    intro:
      "Whether you're launching a new product, expanding internationally, or trying to understand why your Amazon business isn't growing the way it should, our founders work directly with your leadership team to diagnose the real problems and build a roadmap for sustainable, profitable growth.",
    features: [
      'Amazon channel audit and performance assessment',
      'Contribution-margin analysis and profitability optimization',
      'New product launch strategy and go-to-market planning',
      'International marketplace expansion (CA, UK, EU)',
      'Vendor (1P) vs. seller (3P) hybrid strategy',
      'Quarterly business reviews with actionable insights',
    ],
    approachTitle: 'What You Get in a Brand Audit',
    approach:
      'Every engagement starts with a deep channel audit: a P&L-level view of contribution margin by ASIN, an advertising and organic-rank diagnosis, an operations and account-health review, and a prioritized roadmap of the highest-leverage moves. You leave with a clear picture of where profit is leaking and exactly what to do first — whether you work with us or not.',
    faqs: [
      {
        q: 'How long until we see results?',
        a: 'With an established Amazon business we can often identify and execute profit improvements within the first 30 days. For a brand new to Amazon, reaching healthy profitability typically takes three to six months.',
      },
      {
        q: 'Do you work with both Vendor Central (1P) and Seller Central (3P)?',
        a: 'Yes. We advise on pure 3P, pure 1P, and hybrid models, and help you choose the structure that maximizes control and margin for your brand.',
      },
      {
        q: 'Is consulting available without full account management?',
        a: 'Absolutely. Many brands start with a strategic audit and roadmap, then decide which pieces to execute in-house versus hand to our team.',
      },
    ],
    ctaLabel: 'Book a Strategy Session',
    hubSummary:
      'Channel audits, margin analysis, launch and expansion strategy direct from the founders.',
    relatedServices: ['full-account-management', 'international-amazon-expansion', 'vendor-vs-seller-central'],
  },
  {
    slug: 'brand-registry-enforcement',
    tier: 1,
    icon: 'brand',
    navLabel: 'Brand Registry & Enforcement',
    metaTitle: 'Amazon Brand Registry & Reseller Enforcement | OBG',
    metaDescription:
      'Stop unauthorized Amazon resellers and MAP violations. Brand Registry enrollment, reseller monitoring, cease & desist, test buys, and Transparency enrollment.',
    eyebrow: 'Brand Protection',
    h1: 'Amazon Brand Registry & Enforcement',
    headline: "Protect the Brand You've Built — Before Someone Else Profits From It.",
    intro:
      "Unauthorized resellers don't just steal revenue — they damage customer trust, violate MAP pricing, and undermine your retail relationships. Our brand protection team enforces your rights on Amazon using a proprietary escalation process built to remove violators fast.",
    features: [
      'Amazon Brand Registry enrollment and management',
      'Unauthorized reseller identification and monitoring',
      'Automated cease & desist generation and delivery',
      'Authenticity test buys and counterfeit investigation',
      'Amazon Transparency program enrollment',
      'MAP price-violation reporting and enforcement',
    ],
    approachTitle: 'Our Enforcement Process',
    approach:
      'We enroll and lock down your Brand Registry, then continuously monitor your listings for unauthorized sellers and MAP violations. When a violator appears, we run a documented escalation: cease & desist, authenticity test buys to build a counterfeit case, and Transparency or other Amazon-program leverage to remove them. This is the tactical, service-level execution that powers our branded 360 Brand Protection™ methodology.',
    faqs: [
      {
        q: 'How is this different from your 360 Brand Protection™ page?',
        a: 'This page covers the tactical enforcement services; 360 Brand Protection™ is our overarching methodology and program. Most brands engage the services here as part of that broader framework.',
      },
      {
        q: 'Can you actually get unauthorized sellers removed?',
        a: 'In many cases, yes — through a documented process of cease & desist, test buys, and Amazon program enforcement. Outcomes depend on your brand registration, IP, and the specifics of each violator, which we assess up front.',
      },
      {
        q: 'Do we need a registered trademark?',
        a: 'A registered trademark unlocks Amazon Brand Registry and dramatically strengthens enforcement. If you do not have one yet, we will tell you where you stand and what is possible in the meantime.',
      },
    ],
    ctaLabel: 'Protect My Brand',
    hubSummary:
      'Brand Registry, reseller monitoring, and an enforcement process built to remove violators fast.',
    relatedServices: ['amazon-strategic-consulting'],
    link360: true,
    leadMagnet: {
      eyebrow: 'Free Resource',
      heading: 'Free Playbook: Remove Unauthorized Amazon Sellers',
      blurb:
        'Get our step-by-step Unauthorized Seller Playbook — the exact moves we use to identify, document, and remove unauthorized resellers and MAP violators. Enter your email and we will send it over.',
    },
  },
  {
    slug: 'full-account-management',
    tier: 1,
    icon: 'account',
    navLabel: 'Full Account Management',
    metaTitle: 'Full-Service Amazon Account Management Agency | OBG',
    metaDescription:
      'Full-service Amazon account management: a dedicated strategist running advertising, SEO, operations, and brand protection, with compensation aligned to your profit.',
    eyebrow: 'Full Account Management',
    h1: 'Full Amazon Account Management',
    headline: 'Everything Your Amazon Channel Needs — Handled by Experts.',
    intro:
      'Our full account management service is the most comprehensive offering we provide. We become your Amazon team — managing advertising, SEO, operations, brand protection, and executive reporting — for brands that want serious, sustained growth.',
    features: [
      'Dedicated account strategist and weekly check-ins',
      'All advertising, SEO, and operations services included',
      'Brand protection and account-health management',
      'Monthly executive reporting with a contribution-margin focus',
      'Direct access to both co-founders throughout the engagement',
      'Compensation aligned to channel profitability — not just revenue',
    ],
    approachTitle: 'Full Management vs. À La Carte',
    approach:
      'À la carte services are ideal when you have a strong in-house team and need a specific gap filled. Full management is for brands that want a single accountable partner owning the entire channel: strategy, advertising, SEO, operations, and protection under one roof, with a compensation model tied to your contribution margin so our incentives match yours. It pairs naturally with our 3P, Distribution Partnership, and Equity Partnership engagement models.',
    faqs: [
      {
        q: 'How is full management priced?',
        a: 'We partner based on a percentage of your channel contribution margin, so we win when you become more profitable — not just when you spend more on ads. Exact terms depend on your size and scope.',
      },
      {
        q: 'Do we keep control of our Amazon account?',
        a: 'Yes. It remains your account and your brand. We operate inside it as your dedicated team, with full transparency and regular executive reporting.',
      },
      {
        q: 'Can we start with a few services and expand?',
        a: 'Many brands do exactly that — beginning with PPC or a strategic audit, then moving to full management once they see results.',
      },
    ],
    ctaLabel: 'Apply for Full Management',
    hubSummary:
      'We become your Amazon team — advertising, SEO, ops, and protection, with profit-aligned pricing.',
    relatedServices: ['amazon-strategic-consulting', 'amazon-ppc-management'],
  },

  // ── Tier 2 ───────────────────────────────────────────────
  {
    slug: 'amazon-storefront-design',
    tier: 2,
    icon: 'storefront',
    navLabel: 'Storefront Design',
    metaTitle: 'Amazon Storefront Design Services | Online Brand Growth',
    metaDescription:
      'Custom Amazon Storefront design that turns browsers into buyers: multi-page brand stores, mobile-first layouts, and shoppable design built to convert and retain.',
    eyebrow: 'Storefront Design',
    h1: 'Amazon Storefront Design',
    headline: 'Give Your Brand a Home on Amazon — Not Just a Product Page.',
    intro:
      'Your Amazon Storefront is the one place on Amazon where your brand controls the experience. We design multi-page, mobile-first storefronts that showcase your full catalog, tell your brand story, and turn ad clicks and brand searches into repeat customers.',
    features: [
      'Custom multi-page storefront architecture',
      'Mobile-first, conversion-focused layout design',
      'Shoppable category and best-seller pages',
      'Brand story and lifestyle content integration',
      'Storefront optimized for Sponsored Brands traffic',
      'Ongoing refresh for launches and seasonal campaigns',
    ],
    approachTitle: 'How We Design Storefronts',
    approach:
      'We plan your storefront like a mini-website: a clear homepage, logical category navigation, and dedicated pages for hero products and new launches. Because most Amazon traffic is mobile, we design mobile-first and make every section shoppable. A strong storefront also gives your Sponsored Brands ads a high-converting destination, lifting the efficiency of your whole ad program.',
    faqs: [
      {
        q: 'Do we need a storefront if we already have good product pages?',
        a: 'A storefront captures brand-search and Sponsored Brands traffic, encourages cross-selling across your catalog, and gives you a branded destination product pages cannot. For most multi-product brands it is well worth it.',
      },
      {
        q: 'Can you show examples of storefronts you have built?',
        a: 'Yes — we can walk through relevant examples on a call. Some are under NDA, in which case we will share anonymized mockups that demonstrate the approach.',
      },
    ],
    ctaLabel: 'Design My Storefront',
    hubSummary: 'Multi-page, mobile-first Amazon storefronts built to convert and cross-sell.',
    relatedServices: ['amazon-seo-listing-optimization', 'aplus-content-design'],
  },
  {
    slug: 'aplus-content-design',
    tier: 2,
    icon: 'aplus',
    navLabel: 'A+ Content & Brand Story',
    metaTitle: 'Amazon A+ Content & Brand Story Design | OBG',
    metaDescription:
      'Amazon A+ Content and Brand Story design that lifts conversion: premium modules, comparison charts, and brand storytelling that reduce returns and build trust.',
    eyebrow: 'A+ Content',
    h1: 'A+ Content & Brand Story Design',
    headline: 'Turn Detail Pages Into Conversion Machines.',
    intro:
      'A+ Content is one of the highest-leverage conversion tools on Amazon. We design A+ modules and Brand Story content that answer buyer questions visually, differentiate you from competitors, and reduce returns by setting accurate expectations.',
    features: [
      'Standard and Premium A+ Content module design',
      'Brand Story module across your full catalog',
      'Comparison charts to cross-sell your range',
      'Benefit-led visual storytelling and infographics',
      'Mobile-optimized module layouts',
      'Copy and design aligned to your SEO keywords',
    ],
    approachTitle: 'Standard vs. Premium A+ — and When to Use Each',
    approach:
      'Standard A+ Content enriches the description area of a product page with image-and-text modules and comparison charts. Premium A+ (Brand Story) unlocks larger, more interactive modules and richer storytelling for eligible brands. We design both to do real work: answer objections, showcase use cases, cross-sell your catalog, and set accurate expectations so customers buy with confidence and return less.',
    faqs: [
      {
        q: 'Does A+ Content actually increase sales?',
        a: 'A+ Content commonly lifts conversion rate and can reduce returns by clarifying what the customer is buying. The exact impact varies by category and creative, which is why we design around your specific buyer objections.',
      },
      {
        q: 'Do we qualify for Premium A+ (Brand Story)?',
        a: 'Premium A+ eligibility depends on your Brand Registry status and Amazon criteria, which we will confirm before recommending it. Brand Story modules are available to most Brand Registered sellers.',
      },
    ],
    ctaLabel: 'Upgrade My A+ Content',
    hubSummary: 'Standard and Premium A+ Content and Brand Story design that lifts conversion.',
    relatedServices: ['amazon-seo-listing-optimization', 'amazon-storefront-design'],
  },
  {
    slug: 'amazon-product-launch',
    tier: 2,
    icon: 'launch',
    navLabel: 'New Product Launch',
    metaTitle: 'Amazon Product Launch Services | Online Brand Growth',
    metaDescription:
      'Launch new products on Amazon the right way: launch playbook, review acquisition, honeymoon-period PPC, and ranking strategy. One brand went $0 to $500K in year one.',
    eyebrow: 'Product Launch',
    h1: 'Amazon New Product Launch Services',
    headline: 'Launch With Momentum — Not Crickets.',
    intro:
      "A product launch on Amazon is won or lost in the first weeks. We run a structured launch playbook that builds early velocity, reviews, and ranking so your new product gains traction during Amazon's critical honeymoon window instead of stalling on page five.",
    features: [
      'Pre-launch listing, keyword, and inventory readiness',
      'Launch-phase PPC structure to build velocity',
      'Compliant review-acquisition strategy (Vine and more)',
      'Ranking strategy for priority keywords',
      'Pricing and promotion plan for the launch window',
      'Post-launch transition to steady-state growth',
    ],
    approachTitle: 'Our Launch Playbook',
    approach:
      "We make sure the listing, images, A+ Content, and inventory are fully ready before launch, then drive early sales velocity and reviews during Amazon's honeymoon period to establish rank on your priority keywords. Amazon Vine and compliant review programs build social proof, while a dedicated launch PPC structure concentrates spend where it earns rank fastest. Once momentum is established, we transition you into a sustainable growth program.",
    faqs: [
      {
        q: 'How long does an Amazon launch take to gain traction?',
        a: 'The most important window is the first few weeks, where velocity and reviews establish your rank. Reaching steady, profitable performance for a new product typically takes three to six months.',
      },
      {
        q: 'How do you get reviews without violating Amazon policy?',
        a: 'We use Amazon-sanctioned programs like Vine plus compliant follow-up, never incentivized or fake reviews. Protecting your account is always the priority.',
      },
    ],
    ctaLabel: 'Plan My Launch',
    hubSummary: 'A structured launch playbook for velocity, reviews, and ranking in the critical first weeks.',
    relatedCaseStudy: {
      label: 'How a brand went $0 to $500K in year one',
      href: '/case-studies#yoga-brand',
    },
    relatedServices: ['amazon-ppc-management', 'amazon-seo-listing-optimization'],
  },
  {
    slug: 'international-amazon-expansion',
    tier: 2,
    icon: 'global',
    navLabel: 'International Expansion',
    metaTitle: 'International Amazon Expansion (UK, EU, CA) | OBG',
    metaDescription:
      'Expand your brand to Amazon UK, EU, and Canada. Marketplace-by-marketplace strategy, logistics, compliance, and localized SEO for profitable international growth.',
    eyebrow: 'International Expansion',
    h1: 'International Amazon Marketplace Expansion',
    headline: 'Your Next Growth Curve Might Be in Another Marketplace.',
    intro:
      'Expanding to Amazon Canada, the UK, and the EU can unlock a whole new revenue base — but it comes with logistics, compliance, currency, and marketplace-specific SEO challenges. We help you sequence expansion so each marketplace launches profitably instead of becoming a costly distraction.',
    features: [
      'Marketplace-by-marketplace opportunity assessment',
      'Phased expansion roadmap (CA, UK, EU)',
      'International logistics and inventory strategy',
      'Localized listing and keyword optimization',
      'High-level VAT and compliance guidance',
      'Marketplace-specific advertising setup',
    ],
    approachTitle: 'Our Phased Expansion Approach',
    approach:
      'We start by sizing the opportunity per marketplace, then sequence your expansion so you prove the model in one region before scaling to the next. Each launch gets localized listings and keywords (not just translated copy), a logistics plan, and a marketplace-specific ad strategy. We flag VAT, compliance, and regulatory considerations at a high level and coordinate with your tax and legal advisors on the specifics.',
    faqs: [
      {
        q: 'Which marketplace should we expand to first?',
        a: 'It depends on your category, margins, and logistics. Canada is often the easiest first step for US brands, while the UK and EU can be larger but more complex. We size each on your strategy call.',
      },
      {
        q: 'Do you handle VAT and tax registration?',
        a: 'We provide high-level guidance and coordinate with your tax and legal advisors, but VAT registration and filings should be handled by qualified tax professionals. We are not a tax or legal advisor.',
      },
    ],
    ctaLabel: 'Explore International Expansion',
    hubSummary: 'A phased roadmap to launch profitably on Amazon Canada, the UK, and the EU.',
    relatedServices: ['amazon-strategic-consulting', 'fba-logistics-operations'],
  },
  {
    slug: 'fba-reimbursement',
    tier: 2,
    icon: 'reimbursement',
    navLabel: 'FBA Reimbursement',
    metaTitle: 'Amazon FBA Reimbursement Recovery Service | OBG',
    metaDescription:
      'Recover money Amazon owes you. We audit your FBA account for lost and damaged inventory and overcharged fees, then file the reimbursement claims on your behalf.',
    eyebrow: 'FBA Reimbursement',
    h1: 'Amazon FBA Reimbursement Services',
    headline: 'Amazon Probably Owes You Money. Let’s Get It Back.',
    intro:
      'Across lost and damaged inventory, incorrect fees, and customer-return discrepancies, Amazon owes many FBA sellers more than they realize. We audit your account, identify what you are owed, and file the reimbursement claims — turning operational leakage back into recovered cash.',
    features: [
      'Full FBA account reimbursement audit',
      'Lost and damaged inventory claim recovery',
      'Overcharged FBA fee identification',
      'Customer-return and refund discrepancy claims',
      'Documented, policy-compliant claim filing',
      'Ongoing monitoring to catch future discrepancies',
    ],
    approachTitle: 'How Reimbursement Recovery Works',
    approach:
      "We audit months of your transaction, inventory, and fee data to find units Amazon lost or damaged, fees you were over-charged, and returns that were never reconciled. We then file documented, policy-compliant claims and track them to resolution. It is one of the fastest ways to recover real cash from your existing Amazon business, and it folds neatly into our broader logistics and operations work.",
    faqs: [
      {
        q: 'What does Amazon typically owe sellers?',
        a: 'Common categories include inventory lost or damaged in fulfillment centers, incorrect dimensional or weight fees, and customer returns that were refunded but never returned to your inventory.',
      },
      {
        q: 'Is this compliant with Amazon policy?',
        a: 'Yes. We only file legitimate, well-documented claims through Amazon’s standard processes — never automated mass-filing that can put your account at risk.',
      },
    ],
    ctaLabel: 'Audit My Reimbursements',
    hubSummary: 'We audit your FBA account and file claims to recover money Amazon owes you.',
    relatedServices: ['fba-logistics-operations'],
  },
  {
    slug: 'vendor-vs-seller-central',
    tier: 2,
    icon: 'compare',
    navLabel: 'Vendor vs. Seller Central',
    metaTitle: 'Amazon Vendor Central vs. Seller Central Consulting | OBG',
    metaDescription:
      'Vendor Central (1P) or Seller Central (3P)? We help brands choose the right model — or run a hybrid — to maximize control, margin, and growth on Amazon.',
    eyebrow: 'Vendor vs. Seller',
    h1: 'Amazon Vendor Central vs. Seller Central Consulting',
    headline: 'Choose the Model That Maximizes Control and Margin.',
    intro:
      'Vendor Central (1P) and Seller Central (3P) lead to very different businesses — in pricing control, margin, advertising, and operations. We help brands understand the trade-offs, choose the right model, or run a deliberate hybrid that captures the best of both.',
    features: [
      'Clear 1P vs. 3P trade-off analysis for your brand',
      'Margin and pricing-control comparison',
      'Hybrid (1P + 3P) model design',
      'Transition planning between models',
      'Advertising implications of each model',
      'Decision framework tailored to your goals',
    ],
    approachTitle: 'Which Model Is Right for Your Brand?',
    approach:
      'Seller Central (3P) gives you control over pricing, inventory, and customer relationship at the cost of running operations yourself. Vendor Central (1P) hands wholesale to Amazon for reach and simplicity but surrenders pricing control and margin. We map your priorities — control, margin, ad strategy, operational capacity — to the right model, and for many brands design a hybrid that uses each where it wins.',
    faqs: [
      {
        q: 'Is Vendor Central better than Seller Central?',
        a: 'Neither is universally better. 3P offers control and margin; 1P offers reach and simplicity. The right answer depends on your category, capacity, and goals — which is exactly what this consulting engagement clarifies.',
      },
      {
        q: 'Can we run both 1P and 3P at the same time?',
        a: 'Yes, and many established brands do. A well-designed hybrid lets you use 1P and 3P where each performs best. We help you structure it so the two do not undercut each other.',
      },
    ],
    ctaLabel: 'Get Model Guidance',
    hubSummary: 'Choose 1P, 3P, or a deliberate hybrid to maximize control and margin.',
    relatedServices: ['amazon-strategic-consulting'],
  },
]

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return servicePages.find((s) => s.slug === slug)
}

export const tier1Services = servicePages.filter((s) => s.tier === 1)
export const tier2Services = servicePages.filter((s) => s.tier === 2)
