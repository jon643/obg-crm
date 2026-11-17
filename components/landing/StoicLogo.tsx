/**
 * Stoic Brands logo: a classical column (the "stoa" the Stoics were named for)
 * in a rounded square, with the wordmark. Inline SVG so it stays crisp anywhere.
 * Standalone files live in /public/logos/stoic-brands-*.svg.
 */
export function StoicMark({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Stoic Brands">
      <rect x="2" y="2" width="60" height="60" rx="14" fill="#13204A" stroke="#D4A937" strokeWidth="2.5" />
      <g fill="#D4A937">
        <rect x="14" y="13" width="36" height="5" rx="1.5" />
        <rect x="18" y="20" width="28" height="3.5" rx="1" />
        <rect x="21" y="25.5" width="4.5" height="19" rx="1" />
        <rect x="29.75" y="25.5" width="4.5" height="19" rx="1" />
        <rect x="38.5" y="25.5" width="4.5" height="19" rx="1" />
        <rect x="18" y="46.5" width="28" height="3.5" rx="1" />
        <rect x="14" y="52" width="36" height="5" rx="1.5" />
      </g>
    </svg>
  )
}

export default function StoicLogo({ className = '', size = 'md' }: { className?: string; size?: 'md' | 'lg' }) {
  const lg = size === 'lg'
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <StoicMark className={lg ? 'h-14 w-14' : 'h-10 w-10'} />
      <span className="flex flex-col leading-none">
        <span className={`font-display font-bold tracking-[0.18em] text-white ${lg ? 'text-2xl' : 'text-base'}`}>
          STOIC <span className="text-[#D4A937]">BRANDS</span>
        </span>
        <span className={`tracking-widest uppercase text-obg-gray mt-1.5 ${lg ? 'text-xs' : 'text-[10px]'}`}>
          Powered by Online Brand Growth
        </span>
      </span>
    </span>
  )
}
