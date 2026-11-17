import type { Metadata } from 'next'
import StoicContent from '../stoic-brands/StoicContent'

const URL = 'https://www.onlinebrandgrowth.com/exclusive-distribution'

export const metadata: Metadata = {
  title: 'Exclusive Amazon Distribution | Stoic Brands',
  description:
    'Stoic Brands, the sister company of Online Brand Growth, buys your product wholesale and sells it on Amazon as your one authorized seller. Our team runs the entire channel at no fee. Apply for a complimentary Amazon Opportunity Analysis.',
  alternates: { canonical: URL },
  openGraph: {
    title: 'Exclusive Amazon Distribution | Stoic Brands',
    description:
      'We buy your product wholesale, sell it on Amazon as your one authorized seller, and run the channel at no fee.',
    url: URL,
  },
}

export default function ExclusiveDistributionPage() {
  return <StoicContent variant="site" />
}
