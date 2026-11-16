import Link from 'next/link'
import Image from 'next/image'

interface Props {
  ctaLabel: string
  ctaHref: string
  /** Optional second line shown next to the OBG logo (e.g. the Stoic Brands lockup). */
  coBrand?: React.ReactNode
}

/** Stripped-down header for ad landing pages: logo + one CTA, no site nav. */
export default function LandingHeader({ ctaLabel, ctaHref, coBrand }: Props) {
  return (
    <header className="absolute top-0 left-0 right-0 z-40 py-4">
      <div className="container-obg flex items-center justify-between px-6 md:px-8 lg:px-12">
        <div className="flex items-center gap-4">
          <Link href="/" aria-label="Online Brand Growth home">
            <Image
              src="/logos/obg-logo-white.png"
              alt="Online Brand Growth"
              width={400}
              height={401}
              className="h-16 md:h-20 w-auto object-contain"
              priority
            />
          </Link>
          {coBrand}
        </div>
        <a href={ctaHref} className="btn-primary text-sm px-5 py-3">
          {ctaLabel}
        </a>
      </div>
    </header>
  )
}

/** Text lockup for Stoic Brands. Swap for the logo file once it is in /public/logos. */
export function StoicLockup({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <span className="font-display font-bold tracking-[0.2em] text-white text-sm md:text-base">
        STOIC BRANDS
      </span>
      <span className="text-[10px] md:text-xs tracking-widest uppercase text-amber-400 mt-1">
        Powered by Online Brand Growth
      </span>
    </span>
  )
}
