import type { Metadata } from 'next'
import StoicContent from './StoicContent'

// Ad landing page for paid traffic: no site menu, hidden from search engines.
export const metadata: Metadata = {
  title: 'Stoic Brands | Exclusive Amazon Distribution for Brands and Manufacturers',
  description:
    'Stoic Brands buys your product wholesale and sells it on Amazon as your one authorized seller. The Online Brand Growth team runs the whole channel at no fee.',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
}

export default function StoicBrandsLanding() {
  return <StoicContent variant="landing" />
}
