import type { Metadata } from 'next'
import AuditContent from './AuditContent'

// Ad landing page for paid traffic: no site menu, hidden from search engines.
export const metadata: Metadata = {
  title: 'Free OBG360 Amazon Audit | Your Fractional Amazon Operator',
  description:
    'Online Brand Growth is a fractional Amazon operator for established brands. Start with a free OBG360 audit of your Seller Central account and get a prioritized list of recommendations to grow sales and profit.',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
}

export default function AmazonAuditLanding() {
  return <AuditContent variant="landing" />
}
