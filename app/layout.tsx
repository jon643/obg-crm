import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const BASE_URL = 'https://www.onlinebrandgrowth.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Online Brand Growth | Amazon Brand Management Agency',
    template: '%s | Online Brand Growth',
  },
  description:
    'Founder-led Amazon brand management agency. We maximize your brand\'s revenue and profitability on Amazon through expert PPC, SEO, logistics, and operations. Schedule a free strategy call.',
  keywords: [
    'Amazon brand management agency',
    'Amazon advertising agency',
    'Amazon PPC management',
    'Amazon SEO optimization',
    'FBA consulting',
    'Amazon seller consulting',
    'ecommerce growth agency',
    'Amazon agency for brands',
    'Amazon listing optimization',
    'Amazon account management',
  ],
  authors: [
    { name: 'Jon Klein', url: 'https://www.linkedin.com/in/jon-klein-5489724b/' },
    { name: 'Dan Balda', url: 'https://www.linkedin.com/in/daniel-balda/' },
  ],
  creator: 'Online Brand Growth',
  publisher: 'Online Brand Growth',
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Online Brand Growth',
    title: 'Online Brand Growth | Amazon Brand Management Agency',
    description:
      'Founder-led Amazon brand management agency. Maximize your revenue and profitability with expert PPC, SEO, logistics, and operations management.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Online Brand Growth — Amazon Brand Management Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Brand Growth | Amazon Brand Management Agency',
    description:
      'Founder-led Amazon brand management agency. Maximize your revenue and profitability on Amazon.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification token here once you set it up:
    // google: 'YOUR_GOOGLE_VERIFICATION_TOKEN',
  },
}

// JSON-LD structured data for the organization
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Online Brand Growth',
  url: BASE_URL,
  logo: `${BASE_URL}/logos/obg-logo-white.png`,
  description:
    'Founder-led Amazon brand management agency specializing in PPC advertising, SEO, logistics, and operations for brands and manufacturers.',
  foundingDate: '2018',
  founders: [
    {
      '@type': 'Person',
      name: 'Jon Klein',
      jobTitle: 'Co-Founder & Lead Amazon Strategist',
      sameAs: 'https://www.linkedin.com/in/jon-klein-5489724b/',
    },
    {
      '@type': 'Person',
      name: 'Dan Balda',
      jobTitle: 'Co-Founder & Operations Manager',
      sameAs: 'https://www.linkedin.com/in/daniel-balda/',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    telephone: '+1-516-860-8488',
    email: 'growth@onlinebrandgrowth.com',
    url: `${BASE_URL}/#book-call`,
  },
  telephone: '+1-516-860-8488',
  sameAs: [
    'https://www.linkedin.com/company/online-brand-growth/',
    'https://www.youtube.com/@onlinebrandgrowthYT',
    'https://www.instagram.com/onlinebrandgrowth/',
    'https://x.com/jonmidas1',
    'https://www.facebook.com/people/Online-Brand-Growth/61579553361931/',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4909 Linden Forest Lane',
    addressLocality: 'Charlotte',
    addressRegion: 'NC',
    postalCode: '28270',
    addressCountry: 'US',
  },
  areaServed: 'Worldwide',
  serviceType: [
    'Amazon PPC Management',
    'Amazon SEO & Listing Optimization',
    'Amazon FBA Logistics',
    'Amazon Brand Management',
    'Amazon Strategic Growth Consulting',
  ],
}

// JSON-LD for the website (enables sitelinks searchbox signal)
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Online Brand Growth',
  url: BASE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

// JSON-LD for the professional service
const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Online Brand Growth',
  url: BASE_URL,
  description:
    'Founder-led Amazon brand management agency helping brands maximize revenue and profitability on Amazon.',
  telephone: '+1-516-860-8488',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4909 Linden Forest Lane',
    addressLocality: 'Charlotte',
    addressRegion: 'NC',
    postalCode: '28270',
    addressCountry: 'US',
  },
  priceRange: '$$$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '3',
    bestRating: '5',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E2P4SNJWFB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E2P4SNJWFB');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
