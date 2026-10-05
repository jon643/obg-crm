/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'onlinebrandgrowth.com',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  async redirects() {
    return [
      // ---- Old WordPress URL slugs that differ from new site ----
      {
        source: '/online-brand-growth-careers',
        destination: '/careers',
        permanent: true,
      },
      {
        source: '/online-brand-growth-careers/',
        destination: '/careers',
        permanent: true,
      },
      {
        source: '/privacy-policy',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/privacy-policy/',
        destination: '/privacy',
        permanent: true,
      },
      // ---- Terms (in case old slug differs) ----
      {
        source: '/terms-of-service',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/terms-of-service/',
        destination: '/terms',
        permanent: true,
      },
      // ---- Blog trailing slash normalisation ----
      // Next.js handles /blog/slug → /blog/slug fine,
      // but old WordPress used trailing slashes on all posts.
      // The catch-all below forwards /blog/slug/ → /blog/slug.
      {
        source: '/blog/:slug/',
        destination: '/blog/:slug',
        permanent: true,
      },

      // ---- Duplicate blog post consolidation (301s to canonical URLs) ----

      // Amazon Listing Optimization → /blog/amazon-listing-optimization
      { source: '/blog/amazon-listing-optimisation',        destination: '/blog/amazon-listing-optimization', permanent: true },
      { source: '/blog/listing-optimization-amazon',        destination: '/blog/amazon-listing-optimization', permanent: true },
      { source: '/blog/listing-optimization-on-amazon',     destination: '/blog/amazon-listing-optimization', permanent: true },
      { source: '/blog/optimizing-amazon-listings',         destination: '/blog/amazon-listing-optimization', permanent: true },
      { source: '/blog/optimizing-amazon-product-listings', destination: '/blog/amazon-listing-optimization', permanent: true },
      { source: '/blog/optimize-amazon-product-listings',   destination: '/blog/amazon-listing-optimization', permanent: true },

      // Account Suspension → /blog/amazon-account-suspension
      { source: '/blog/suspended-from-amazon',              destination: '/blog/amazon-account-suspension', permanent: true },
      { source: '/blog/amazon-suspending-accounts',         destination: '/blog/amazon-account-suspension', permanent: true },
      { source: '/blog/amazon-account-suspended',           destination: '/blog/amazon-account-suspension', permanent: true },
      { source: '/blog/amazon-account-suspensions',         destination: '/blog/amazon-account-suspension', permanent: true },
      { source: '/blog/suspended-amazon-account',           destination: '/blog/amazon-account-suspension', permanent: true },
      { source: '/blog/account-suspended-amazon',           destination: '/blog/amazon-account-suspension', permanent: true },
      { source: '/blog/account-suspension-amazon',          destination: '/blog/amazon-account-suspension', permanent: true },
      { source: '/blog/amazon-deactivated-seller-account',  destination: '/blog/amazon-account-suspension', permanent: true },

      // Product Photography → /blog/amazon-product-photography
      { source: '/blog/photography-for-amazon',             destination: '/blog/amazon-product-photography', permanent: true },
      { source: '/blog/product-photography-for-amazon',     destination: '/blog/amazon-product-photography', permanent: true },
      { source: '/blog/product-photography-amazon',         destination: '/blog/amazon-product-photography', permanent: true },

      // Frustration-Free Packaging → /blog/what-is-frustration-free-packaging
      { source: '/blog/what-is-frustration-free-packaging-on-amazon', destination: '/blog/what-is-frustration-free-packaging', permanent: true },
      { source: '/blog/what-is-frustration-free-packaging-at-amazon', destination: '/blog/what-is-frustration-free-packaging', permanent: true },

      // Freight Forwarders → /blog/amazon-fba-freight-forwarders
      { source: '/blog/fba-freight-forwarder',              destination: '/blog/amazon-fba-freight-forwarders', permanent: true },
      { source: '/blog/freight-forwarder-for-amazon-fba',   destination: '/blog/amazon-fba-freight-forwarders', permanent: true },
      { source: '/blog/freight-forwarders-for-amazon-fba',  destination: '/blog/amazon-fba-freight-forwarders', permanent: true },
      { source: '/blog/freight-forwarder-amazon-fba',       destination: '/blog/amazon-fba-freight-forwarders', permanent: true },

      // MAP vs MSRP → /blog/map-vs-msrp
      { source: '/blog/msrp-vs-map',                        destination: '/blog/map-vs-msrp', permanent: true },
      { source: '/blog/map-vs-msrp-price',                  destination: '/blog/map-vs-msrp', permanent: true },
      { source: '/blog/map-pricing-vs-msrp',                destination: '/blog/map-vs-msrp', permanent: true },

      // ACoS → /blog/what-does-acos-stand-for
      { source: '/blog/acos-in-amazon',                     destination: '/blog/what-does-acos-stand-for', permanent: true },
      { source: '/blog/acos-on-amazon',                     destination: '/blog/what-does-acos-stand-for', permanent: true },

      // Increase Amazon Sales → /blog/how-to-increase-amazon-sales
      { source: '/blog/improve-amazon-sales',               destination: '/blog/how-to-increase-amazon-sales', permanent: true },
      { source: '/blog/increase-amazon-sales',              destination: '/blog/how-to-increase-amazon-sales', permanent: true },
      { source: '/blog/how-to-improve-amazon-sales',        destination: '/blog/how-to-increase-amazon-sales', permanent: true },

      // Amazon Brand Store → /blog/amazon-brand-store
      { source: '/blog/amazon-brand-stores',                destination: '/blog/amazon-brand-store', permanent: true },

      // Amazon Advertising Strategy → /blog/amazon-advertising-strategy
      { source: '/blog/amazon-advertising-strategies',      destination: '/blog/amazon-advertising-strategy', permanent: true },

      // ---- Oct 2026 consolidation (GSC-driven): commercial blog posts → service pages ----
      // Rationale: these posts targeted the same buyer-intent queries as the service pages
      // and were out-ranking them (e.g. /blog/amazon-channel-management at pos 12.5 vs the
      // service page at 34.9). One page per intent; signals consolidate into the page that converts.

      // PPC / advertising → /services/amazon-ppc-management
      { source: '/blog/amazon-ppc-management-services', destination: '/services/amazon-ppc-management', permanent: true },
      { source: '/blog/amazon-ppc-services', destination: '/services/amazon-ppc-management', permanent: true },
      { source: '/blog/amazon-sponsored-ads-management', destination: '/services/amazon-ppc-management', permanent: true },
      { source: '/blog/amazon-ad-management', destination: '/services/amazon-ppc-management', permanent: true },
      { source: '/blog/amazon-ads-management', destination: '/services/amazon-ppc-management', permanent: true },
      { source: '/blog/amazon-advertising-services', destination: '/services/amazon-ppc-management', permanent: true },
      { source: '/blog/amazon-advertising-agency', destination: '/services/amazon-ppc-management', permanent: true },
      { source: '/blog/amazon-advertising-consultant', destination: '/services/amazon-ppc-management', permanent: true },

      // Channel / account management → /services/full-account-management
      { source: '/blog/amazon-channel-management', destination: '/services/full-account-management', permanent: true },
      { source: '/blog/amazon-account-management-services', destination: '/services/full-account-management', permanent: true },
      { source: '/blog/amazon-seller-account-management', destination: '/services/full-account-management', permanent: true },
      { source: '/blog/amazon-marketplace-management', destination: '/services/full-account-management', permanent: true },
      { source: '/blog/amazon-management-agency', destination: '/services/full-account-management', permanent: true },
      { source: '/blog/amazon-brand-management-agency', destination: '/services/full-account-management', permanent: true },
      { source: '/blog/ecommerce-account-management', destination: '/services/full-account-management', permanent: true },

      // Consulting → /services/amazon-strategic-consulting
      { source: '/blog/amazon-seller-consulting', destination: '/services/amazon-strategic-consulting', permanent: true },
      { source: '/blog/amazon-seller-consulting-services', destination: '/services/amazon-strategic-consulting', permanent: true },
      { source: '/blog/amazon-consulting-agency', destination: '/services/amazon-strategic-consulting', permanent: true },
      { source: '/blog/amazon-fba-consulting', destination: '/services/amazon-strategic-consulting', permanent: true },

      // SEO / listing → /services/amazon-seo-listing-optimization
      { source: '/blog/amazon-seo-agency', destination: '/services/amazon-seo-listing-optimization', permanent: true },
      { source: '/blog/amazon-seo-consulting', destination: '/services/amazon-seo-listing-optimization', permanent: true },
      { source: '/blog/amazon-listing-services', destination: '/services/amazon-seo-listing-optimization', permanent: true },
      { source: '/blog/amazon-optimization-services', destination: '/services/amazon-seo-listing-optimization', permanent: true },

      // Brand protection → /360-brand-protection and /services/brand-registry-enforcement
      { source: '/blog/amazon-brand-protection-services', destination: '/360-brand-protection', permanent: true },
      { source: '/blog/amazon-map-policy-enforcement-service', destination: '/360-brand-protection', permanent: true },
      { source: '/blog/amazon-hijacker-removal-service', destination: '/360-brand-protection', permanent: true },
      { source: '/blog/unauthorized-reseller-removal', destination: '/360-brand-protection', permanent: true },
      { source: '/blog/amazon-brand-registry-services', destination: '/services/brand-registry-enforcement', permanent: true },

      // Storefront / A+ / Vendor-vs-Seller → service pages
      { source: '/blog/amazon-storefront-design', destination: '/services/amazon-storefront-design', permanent: true },
      { source: '/blog/amazon-a-plus-content-management', destination: '/services/aplus-content-design', permanent: true },
      { source: '/blog/amazon-vendor-vs-seller', destination: '/services/vendor-vs-seller-central', permanent: true },
      { source: '/blog/amazon-seller-central-vs-vendor-central', destination: '/services/vendor-vs-seller-central', permanent: true },

      // ---- Oct 2026 consolidation: duplicate informational posts → the stronger post ----
      { source: '/blog/amazon-product-listing-optimization', destination: '/blog/amazon-listing-optimization', permanent: true },
      { source: '/blog/amazon-catalog-management-agency', destination: '/blog/amazon-catalog-management-service', permanent: true },
      { source: '/blog/amazon-catalogue-management', destination: '/blog/amazon-catalog-management-service', permanent: true },
      { source: '/blog/outsource-amazon-catalog-management', destination: '/blog/amazon-catalog-management-service', permanent: true },
      { source: '/blog/how-much-does-amazon-charge-to-sell', destination: '/blog/cost-of-selling-on-amazon', permanent: true },
      { source: '/blog/amazon-seller-fees-explained', destination: '/blog/cost-of-selling-on-amazon', permanent: true },
      { source: '/blog/fulfillment-by-amazon-cost', destination: '/blog/amazon-fba-fees', permanent: true },
      { source: '/blog/amazon-fulfillment-pricing', destination: '/blog/amazon-fba-fees', permanent: true },
      { source: '/blog/amazon-fba-storage-fees', destination: '/fees/monthly-storage-fee', permanent: true },
      { source: '/blog/amazon-pricing-strategy', destination: '/blog/amazon-pricing-strategies', permanent: true },
      { source: '/blog/amazon-fba-is-it-worth-it-2', destination: '/blog/is-it-worth-selling-on-amazon', permanent: true },
      { source: '/blog/selling-on-amazon-is-it-worth-it', destination: '/blog/is-it-worth-selling-on-amazon', permanent: true },
      { source: '/blog/improving-inventory-turnover', destination: '/blog/how-to-improve-inventory-turnover', permanent: true },
      { source: '/blog/kitting-in-warehouse', destination: '/blog/what-is-kitting', permanent: true },
      { source: '/blog/packaging-e-commerce', destination: '/blog/packaging-for-e-commerce', permanent: true },
      { source: '/blog/amazon-brand-guidelines', destination: '/blog/amazon-brand-guide', permanent: true },
      { source: '/blog/global-selling-with-amazon', destination: '/blog/sell-on-amazon-worldwide', permanent: true },
      { source: '/blog/image-guidelines-amazon', destination: '/blog/amazon-images-requirements', permanent: true },
      { source: '/blog/image-requirements-for-amazon', destination: '/blog/amazon-images-requirements', permanent: true },
      { source: '/blog/brand-registry-amazon', destination: '/blog/what-is-amazon-brand-registry', permanent: true },
      { source: '/blog/how-to-make-an-amazon-storefront', destination: '/blog/create-an-amazon-storefront', permanent: true },
      { source: '/blog/unauthorized-sellers-on-amazon', destination: '/blog/how-to-remove-unauthorized-amazon-sellers', permanent: true },
      { source: '/blog/what-is-bsr', destination: '/blog/bsr-on-amazon', permanent: true },
      { source: '/blog/amazon-brand-registry-takedown', destination: '/blog/amazon-brand-abuse-takedown', permanent: true },

      // ---- Oct 2026: test posts removed ----
      { source: '/blog/outrank-webhook-smoke-test', destination: '/blog', permanent: true },
      { source: '/blog/sample-article-title-for-testing', destination: '/blog', permanent: true },

      // ---- Oct 2026: reclaim backlinks pointing at dead WordPress-era URLs ----
      // Outrank's exchange placed DR 52-72 links at these paths (they 404 today).
      { source: '/wordpress/plugins/seo', destination: '/blog/amazon-product-seo', permanent: true },
      { source: '/wordpress/plugins/:path*', destination: '/blog', permanent: true },
      { source: '/product/yoast-seo-wordpress', destination: '/blog/amazon-product-seo', permanent: true },
      { source: '/product/:path*', destination: '/services', permanent: true },
      { source: '/wp-content/:path*', destination: '/', permanent: true },
    ]
  },
}

module.exports = nextConfig
