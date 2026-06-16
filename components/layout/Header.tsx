'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: '360 Brand Protection™', href: '/360-brand-protection', highlight: true },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Media', href: '/media' },
  { label: 'Careers', href: '/careers' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const drawer = (
    <>
      {/* Mobile nav — backdrop */}
      <div
        aria-hidden
        onClick={() => setMenuOpen(false)}
        className={cn(
          'lg:hidden fixed inset-0 z-[44] bg-black/60 backdrop-blur-sm',
          'transition-opacity duration-300',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      />

      {/* Mobile nav — slide-in drawer from right */}
      <div
        className={cn(
          'lg:hidden fixed top-0 right-0 bottom-0 w-[min(320px,85vw)] z-[45]',
          'bg-obg-blue-darker border-l border-obg-blue-light/20',
          'flex flex-col overflow-y-auto',
          'transition-transform duration-300 ease-in-out',
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-obg-blue-light/20 min-h-[64px]">
          <Image
            src="/logos/obg-logo-white.png"
            alt="Online Brand Growth"
            width={400}
            height={401}
            className="h-9 w-auto object-contain"
          />
          <button
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="p-2 text-obg-gray hover:text-white transition-colors rounded-lg hover:bg-obg-blue-light/10"
          >
            <X size={22} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-6 py-6 gap-1 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                'text-lg font-semibold py-3 px-3 rounded-lg transition-colors duration-200',
                (link as { highlight?: boolean }).highlight
                  ? 'text-obg-orange hover:bg-obg-orange/10'
                  : 'text-obg-gray hover:text-white hover:bg-obg-blue-light/10'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA at bottom */}
        <div className="px-6 pb-8 pt-4 border-t border-obg-blue-light/20">
          <Link
            href="/#book-call"
            onClick={() => setMenuOpen(false)}
            className="btn-primary w-full text-center block"
          >
            Get Your FREE OBG360 Audit
          </Link>
        </div>
      </div>
    </>
  )

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-obg-blue-darker/95 backdrop-blur-md border-b border-obg-blue-light/20 py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="container-obg flex items-center justify-between px-6 md:px-8 lg:px-12">

          {/* Logo */}
          <Link href="/" className="flex items-center group" onClick={() => setMenuOpen(false)}>
            <Image
              src="/logos/obg-logo-white.png"
              alt="Online Brand Growth"
              width={400}
              height={401}
              className="h-24 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'nav-link underline-orange text-sm',
                  (link as { highlight?: boolean }).highlight &&
                    'text-obg-orange hover:text-obg-orange-light font-semibold'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/#book-call"
              className="btn-primary text-sm px-5 py-3"
            >
              Get Your Free Audit
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="lg:hidden p-2 text-white hover:text-obg-orange transition-colors rounded-lg"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {mounted && createPortal(drawer, document.body)}
    </>
  )
}
