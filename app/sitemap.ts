import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.onlinebrandgrowth.com'

// Canonical blog post slugs only — duplicates removed and 301-redirected in next.config.js
const blogSlugs = [
  'what-is-fulfillment-by-amazon',
  'product-information-management',
  'sponsored-ad-amazon',
  'amazon-backend-keywords',
  'can-you-use-coupons-on-amazon',
  'what-is-frustration-free-packaging',          // canonical (duplicates → here)
  'seller-fulfilled-prime-fulfillment',
  'amazon-brand-guide',
  'amazon-channel-management',
  'ecommerce-conversion-rates',
  'image-guidelines-amazon',
  'inventory-turnover-ratio-explained',
  'amazon-vendor-vs-seller',
  'how-much-does-amazon-charge-to-sell',
  'amazon-storefront-design',
  'ecommerce-account-management',
  'what-is-an-amazon-storefront',
  'amazon-brand-protection-services',
  'amazon-ppc-agency-pricing',
  'how-to-calculate-contribution-margin',
  'amazon-fba-fees',
  'brand-registry-amazon',
  'what-does-acos-stand-for',                    // canonical (acos-in-amazon, acos-on-amazon → here)
  'create-an-amazon-storefront',
  'prep-center-fba',
  'minimum-advertised-price-monitoring',
  'how-to-make-an-amazon-storefront',
  'amazon-product-photography',                  // canonical (photography-for-amazon, product-photography-* → here)
  'what-does-map-mean-in-pricing',
  'digital-shelf-analytics',
  'ecommerce-growth-strategies',
  'amazon-fba-freight-forwarders',               // canonical (fba-freight-forwarder, freight-forwarder-* → here)
  'amazon-seller-central-vs-vendor-central',
  'amazon-advertising-strategy',                 // canonical (amazon-advertising-strategies → here)
  'brand-protection-amazon',
  'amazon-fba-vs-fbm',
  'find-amazon-keywords',
  'amazon-pricing-strategy',
  'sell-on-amazon-worldwide',
  'map-vs-msrp',                                 // canonical (msrp-vs-map, map-vs-msrp-price, map-pricing-vs-msrp → here)
  'amazon-brand-store',                          // canonical (amazon-brand-stores → here)
  'inventory-management-best-practices',
  'amazon-images-requirements',
  'best-amazon-storefronts',
  'track-amazon-ranking',
  'amazon-brand-guidelines',
  'amazon-ppc-management-services',
  'amazon-listing-optimization',                 // canonical (amazon-listing-optimisation, listing-optimization-* → here)
  'amazon-fba-is-it-worth-it-2',
  'amazon-ad-management',
  'how-to-increase-amazon-sales',                // canonical (improve-amazon-sales, increase-amazon-sales, how-to-improve-* → here)
  'product-launch-strategies',
  'global-selling-with-amazon',
  'target-market-for-amazon',
  'how-to-launch-product-on-amazon',
  'ship-from-china-to-amazon-fba',
  'amazon-brand-registry-benefits',
  'what-is-amazon-brand-registry',
  'best-amazon-inventory-management-software',
  'amazon-account-suspension',                   // canonical (suspended-from-amazon, amazon-account-suspended, etc. → here)
  'unauthorized-sellers-on-amazon',
  'how-to-win-amazon-buy-box',
  'amazon-fba-profit-margin-calculator',
  'minimum-advertised-price-policy',
  'amazon-pricing-changes',
  'cost-of-selling-on-amazon',
  'amazon-pricing-strategies',
  'amazon-dsp-advertising',
  'amazon-ads-management',
  'image-requirements-for-amazon',
]

export default function sitemap(): MetadataRoute.Sitemap {
  // Dates — differentiated per content type rather than all using build time
  const now = new Date()                        // homepage: always today
  const serviceDate  = new Date('2026-03-04')   // core service pages last updated
  const blogDate     = new Date('2026-03-04')   // blog index reflects recent posts
  const mediaDate    = new Date('2026-03-01')   // media / careers
  const legalDate    = new Date('2025-01-01')   // privacy / terms
  const blogPostDate = new Date('2025-06-01')   // individual posts fallback

  // Core static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,          // dynamic: always reflects today's date
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: serviceDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/case-studies`,
      lastModified: serviceDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/360-brand-protection`,
      lastModified: serviceDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: blogDate,     // dynamic: reflects most recent publish
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/media`,
      lastModified: mediaDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/careers`,
      lastModified: mediaDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: legalDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: legalDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Blog post pages — fallback date 2025-06-01; update individual slugs below
  // when a more precise publish date is known.
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}/`,
    lastModified: blogPostDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages]
}
