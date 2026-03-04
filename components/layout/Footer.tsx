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
    { label: 'Amazon PPC Advertising', href: '/services#advertising' },
    { label: 'SEO & Listing Optimization', href: '/services#seo' },
    { label: 'Logistics & Operations', href: '/services#logistics' },
    { label: 'Strategic Growth Consulting', href: '/services#consulting' },
    { label: 'Brand Registry Enforcement', href: '/services#brand-registry' },
  ],
}

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

            <div className="mt-6">
              <Link href="/#book-call" className="btn-primary text-sm px-5 py-3">
                Book a Free Call
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
