import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
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

export const metadata: Metadata = {
  title: {
    default: 'Online Brand Growth | Amazon Advertising Agency — PPC, SEO & Brand Growth',
    template: '%s | Online Brand Growth',
  },
  description:
    'We relentlessly optimize your Amazon SEO, Advertising, Logistics and Operations while you focus on your core business. Schedule your zero-obligation Amazon strategy call today.',
  keywords: [
    'Amazon advertising agency',
    'Amazon PPC management',
    'Amazon SEO',
    'Amazon brand management',
    'FBA consulting',
    'Amazon seller consulting',
    'ecommerce growth agency',
  ],
  authors: [{ name: 'Online Brand Growth' }],
  creator: 'Online Brand Growth',
  metadataBase: new URL('https://www.onlinebrandgrowth.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.onlinebrandgrowth.com',
    siteName: 'Online Brand Growth',
    title: 'Online Brand Growth | Amazon Advertising Agency',
    description:
      'Maximize your brand\'s revenue and profitability on Amazon. Expert PPC, SEO, logistics, and operations management.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Online Brand Growth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Brand Growth | Amazon Advertising Agency',
    description: 'Maximize your brand\'s revenue and profitability on Amazon.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
