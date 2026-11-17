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
      <table className="w-full text-[11px] sm:text-xs border-collapse">
        <thead>
          <tr>
            {head.map((h, i) => (
              <th key={i} className={cn('px-1 sm:px-2 py-1.5 font-semibold text-slate-500 border-b border-slate-200', i === 0 ? 'text-left' : 'text-right')}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri} className={cn(ri === highlight && 'bg-orange-50 font-semibold')}>
              {r.map((c, ci) => (
                <td key={ci} className={cn('px-1 sm:px-2 py-1.5 border-b border-slate-100', ci === 0 ? 'text-left' : 'text-right')}>
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

/** One deep-dive row: explanation on one side, a sample report page on the other. */
export function DeepDiveRow({
  n,
  title,
  question,
  points,
  flip,
  accent = 'text-obg-orange',
  children,
}: {
  n: string
  title: string
  question: string
  points: string[]
  flip?: boolean
  accent?: string
  children: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
      <div className={cn('min-w-0', flip && 'lg:order-2')}>
        <div className={cn('text-sm font-bold tracking-widest uppercase mb-2', accent)}>{n}</div>
        <h3 className="text-white font-bold text-2xl md:text-3xl leading-tight mb-3">{title}</h3>
        <p className="text-obg-offwhite text-lg leading-relaxed mb-5">{question}</p>
        <ul className="space-y-2.5">
          {points.map((p) => (
            <li key={p} className="flex gap-3 text-obg-gray text-sm leading-relaxed">
              <span className={cn('mt-2 h-1.5 w-1.5 rounded-full flex-shrink-0 bg-current', accent)} />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={cn('min-w-0', flip && 'lg:order-1')}>{children}</div>
    </div>
  )
}

/** Founder credibility block shared by both landing pages. */
export function Founders() {
  const people = [
    {
      name: 'Jon Klein',
      role: 'Co-Founder & Lead Amazon Strategist',
      photo: '/team/Jon.png',
      line: 'Leads strategy on every account and personally builds every audit.',
    },
    {
      name: 'Dan Balda',
      role: 'Co-Founder & Operations Manager',
      photo: '/team/Dan.png',
      line: 'Runs operations, logistics and reporting, and reviews every plan before it reaches you.',
    },
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {people.map((p) => (
        <div key={p.name} className="card-dark flex items-center gap-5">
          <div className="w-24 h-24 rounded-2xl overflow-hidden bg-obg-blue-dark border border-obg-blue-light/20 flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.photo} alt={p.name} className="w-full h-full object-contain invert opacity-90" loading="lazy" />
          </div>
          <div className="min-w-0">
            <div className="text-white font-bold text-lg">{p.name}</div>
            <div className="text-obg-orange text-sm font-semibold mb-2">{p.role}</div>
            <p className="text-obg-gray text-sm leading-relaxed">{p.line}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

/** "Owner, not vendor": the four things an operator has to run at once. */
export function OperatorSystem() {
  const pillars = [
    ['Traffic quality', 'SEO and advertising aimed at searches you can win'],
    ['Conversion', 'Product pages, images and A+ Content that sell'],
    ['Economics', 'Pricing, fees and promotions built around profit'],
    ['Availability and control', 'Inventory, listing stability and reseller mitigation'],
  ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {pillars.map(([t, d], i) => (
        <div key={t} className="card-glass p-6">
          <div className="text-obg-orange font-bold text-sm mb-2">0{i + 1}</div>
          <div className="text-white font-bold mb-1.5">{t}</div>
          <p className="text-obg-gray text-sm leading-relaxed">{d}</p>
        </div>
      ))}
    </div>
  )
}
