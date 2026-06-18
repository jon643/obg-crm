import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  Company: [
    { label: 'About', href: '/#why-choose-us' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Media', href: '/media' },
    { label: 'Careers', href: '/careers' },
  ],
  Services: [
    { label: 'Amazon PPC Management', href: '/services/amazon-ppc-management' },
    { label: 'SEO & Listing Optimization', href: '/services/amazon-seo-listing-optimization' },
    { label: 'FBA Logistics & Operations', href: '/services/fba-logistics-operations' },
    { label: 'Strategic Growth Consulting', href: '/services/amazon-strategic-consulting' },
    { label: 'Brand Registry & Enforcement', href: '/services/brand-registry-enforcement' },
    { label: 'Full Account Management', href: '/services/full-account-management' },
  ],
  'Free Tools': [
    { label: 'Amazon Profit Calculator', href: '/calculator' },
    { label: '2026 Fee Guide', href: '/fees' },
    { label: 'FBA vs FBM Comparison', href: '/vs/fba-vs-fbm' },
    { label: 'Breakeven Calculator', href: '/tools/breakeven-calculator' },
    { label: 'Storage Fee Calculator', href: '/tools/storage-fee-calculator' },
    { label: 'Category Margin Guides', href: '/category' },
  ],
}

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/onlinebrandgrowth/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/jonmidas1',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/people/Online-Brand-Growth/61579553361931/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/online-brand-growth/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@onlinebrandgrowthYT',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-obg-blue-darker border-t border-obg-blue-light/20">
      <div className="container-obg px-6 md:px-8 lg:px-12 py-16">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/logos/obg-logo-horizontal.png"
                alt="Online Brand Growth"
                width={377}
                height={140}
                className="h-16 w-auto object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <p className="text-obg-gray text-sm leading-relaxed max-w-xs">
              Founder-led Amazon growth agency helping brands maximize revenue
              and profitability. 100% in-house. Fully aligned.
            </p>

            {/* Contact info */}
            <div className="mt-5 space-y-2">
              <a
                href="tel:+15168608488"
                className="flex items-center gap-2 text-obg-gray hover:text-obg-orange text-sm transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                (516) 860-8488
              </a>
              <address className="not-italic flex items-start gap-2 text-obg-gray text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0 mt-0.5">
                  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-2.003 3.5-4.697 3.5-8.627a8.25 8.25 0 0 0-16.5 0c0 3.93 1.556 6.624 3.5 8.627a19.58 19.58 0 0 0 2.683 2.282 16.975 16.975 0 0 0 1.144.742zM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" clipRule="evenodd" />
                </svg>
                <span>4909 Linden Forest Lane<br />Charlotte, NC 28270</span>
              </address>
            </div>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-obg-gray hover:text-obg-orange transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <div className="mt-6">
              <Link href="/#book-call" className="btn-primary text-sm px-5 py-3">
                Get Your Free Audit
              </Link>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-obg-gray hover:text-obg-orange text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-obg-blue-light/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-obg-gray text-sm">
            © {new Date().getFullYear()} Remus, LLC. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-obg-gray hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-obg-gray hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
