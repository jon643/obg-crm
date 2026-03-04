/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'onlinebrandgrowth.com',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
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
    ]
  },
}

module.exports = nextConfig
