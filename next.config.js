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
    ]
  },
}

module.exports = nextConfig
