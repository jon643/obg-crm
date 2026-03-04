import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://www.onlinebrandgrowth.com/sitemap.xml',
    host: 'https://www.onlinebrandgrowth.com',
  }
}
