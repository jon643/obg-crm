import { cn } from '@/lib/utils'

/* Shared presentational blocks for the two ad landing pages. */

/** A white "report page" card used to show redacted audit excerpts. */
export function Paper({
  title,
  kicker,
  footer,
  children,
  className,
}: {
  title: string
  kicker: string
  footer?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('rounded-xl bg-white text-slate-800 shadow-2xl overflow-hidden flex flex-col', className)}>
      <div className="px-5 pt-5 pb-3 border-b border-slate-200">
        <div className="text-[11px] font-bold tracking-widest uppercase text-obg-orange">{kicker}</div>
        <div className="font-display font-bold text-slate-900 text-lg leading-snug mt-1">{title}</div>
      </div>
      <div className="px-5 py-4 text-sm leading-relaxed flex-1 text-slate-700 [&_p]:text-slate-700 [&_b]:text-slate-900">{children}</div>
      {footer && (
        <div className="px-5 py-2.5 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500">{footer}</div>
      )}
    </div>
  )
}

/** Blacked-out text, for brand names and other identifying details. */
export function Redacted({ w = 'w-24' }: { w?: string }) {
  return (
    <span
      className={cn('inline-block h-[0.9em] rounded-sm bg-slate-800 align-middle', w)}
      aria-label="redacted"
      role="img"
    />
  )
}

/**
 * A blurred stand-in for a confidential figure. The real value is never sent to
 * the browser: `children` is placeholder text, blurred so the shape of the data
 * shows without the detail.
 */
export function Blurred({ children = '$0.00' }: { children?: string }) {
  return (
    <span className="inline-block blur-[5px] select-none text-slate-900" aria-label="hidden in this sample" role="img">
      <span aria-hidden>{children}</span>
    </span>
  )
}

export function MiniTable({ head, rows, highlight }: { head: string[]; rows: (string | React.ReactNode)[][]; highlight?: number }) {
  return (
    <div className="overflow-x-auto -mx-1">
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr>
            {head.map((h, i) => (
              <th key={i} className={cn('px-2 py-1.5 font-semibold text-slate-500 border-b border-slate-200', i === 0 ? 'text-left' : 'text-right')}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri} className={cn(ri === highlight && 'bg-orange-50 font-semibold')}>
              {r.map((c, ci) => (
                <td key={ci} className={cn('px-2 py-1.5 border-b border-slate-100', ci === 0 ? 'text-left' : 'text-right')}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export interface Step {
  title: string
  body: string
  tag?: string
}

/** Vertical numbered timeline. */
export function StepList({ steps }: { steps: Step[] }) {
  return (
    <ol className="relative max-w-3xl mx-auto">
      <div aria-hidden className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-obg-orange/60 via-obg-orange/20 to-transparent" />
      {steps.map((s, i) => (
        <li key={s.title} className="relative pl-16 pb-8 last:pb-0">
          <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-obg-orange text-white font-bold text-sm flex items-center justify-center shadow-glow-orange">
            {String(i + 1).padStart(2, '0')}
          </div>
          <div className="card-dark p-6">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h3 className="text-white font-bold text-lg leading-snug">{s.title}</h3>
              {s.tag && (
                <span className="text-xs font-semibold text-emerald-400 border border-emerald-400/30 bg-emerald-400/10 rounded-full px-2.5 py-0.5">
                  {s.tag}
                </span>
              )}
            </div>
            <p className="text-obg-gray text-sm leading-relaxed">{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export function StatBar() {
  const stats = [
    { stat: '$450M+', label: 'Lifetime Amazon Revenue' },
    { stat: '500+', label: 'Brands Managed' },
    { stat: '25+ Yrs', label: 'E-commerce Operators' },
  ]
  return (
    <div className="grid grid-cols-3 gap-6 max-w-2xl">
      {stats.map(({ stat, label }) => (
        <div key={label}>
          <div className="text-2xl md:text-3xl font-bold text-gradient-orange mb-1">{stat}</div>
          <div className="text-obg-gray text-xs md:text-sm">{label}</div>
        </div>
      ))}
    </div>
  )
}

export function LandingFAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {items.map((f) => (
        <details key={f.q} className="card-dark p-0 group">
          <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between gap-4 text-white font-semibold">
            {f.q}
            <span className="text-obg-orange text-xl leading-none group-open:rotate-45 transition-transform">+</span>
          </summary>
          <p className="px-6 pb-5 text-obg-gray text-sm leading-relaxed">{f.a}</p>
        </details>
      ))}
    </div>
  )
}
