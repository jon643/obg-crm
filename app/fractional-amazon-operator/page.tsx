import type { Metadata } from 'next'
import AuditContent from '../amazon-audit/AuditContent'

const URL = 'https://www.onlinebrandgrowth.com/fractional-amazon-operator'

export const metadata: Metadata = {
  title: 'Fractional Amazon Operator | Free OBG360 Amazon Audit',
  description:
    'Online Brand Growth is a founder-led fractional Amazon operator for established brands. Start with a free OBG360 audit of your Seller Central account: ten sections, a prioritized list of recommendations, yours to keep.',
  alternates: { canonical: URL },
  openGraph: {
    title: 'Fractional Amazon Operator | Free OBG360 Amazon Audit',
    description:
      'We show you exactly how to grow your Amazon profit, then you decide who does it. Start with a free OBG360 audit.',
    url: URL,
  },
}

export default function FractionalAmazonOperatorPage() {
  return <AuditContent variant="site" />
}
