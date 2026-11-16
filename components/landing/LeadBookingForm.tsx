'use client'

import { useState, FormEvent } from 'react'
import { AlertCircle, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'

const BOOKING_URL = 'https://app.usemotion.com/meet/dan-balda/obg-intro-45'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

interface Props {
  /** Lead source sent to /api/lead: 'obg-audit-lp' or 'stoic-apply-lp'. */
  source: string
  submitLabel: string
  bookingHeading: string
  bookingBlurb: string
}

type Status = 'idle' | 'submitting' | 'booked-step' | 'error'

const AMAZON_STATUS = [
  'Selling on Amazon in our own Seller Central account',
  'On Amazon through other sellers or distributors only',
  'On Amazon through Vendor Central (1P)',
  'Not on Amazon yet',
]
const REVENUE = [
  'Under $250K',
  '$250K to $1M',
  '$1M to $5M',
  '$5M to $20M',
  'Over $20M',
]
const SKUS = ['1 to 5', '6 to 20', '21 to 50', '51 to 200', 'Over 200']

const inputCls =
  'w-full rounded-xl bg-obg-blue-darker/80 border border-obg-blue-light/40 text-white placeholder-obg-gray px-4 py-3 text-base focus:outline-none focus:border-obg-orange focus:ring-2 focus:ring-obg-orange/30 transition-colors disabled:opacity-50'
const labelCls = 'block text-sm font-semibold text-white mb-1.5'

export default function LeadBookingForm({ source, submitLabel, bookingHeading, bookingBlurb }: Props) {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [f, setF] = useState({
    firstName: '',
    email: '',
    brand: '',
    website: '',
    amazonStatus: '',
    revenue: '',
    skus: '',
  })
  const set = (k: keyof typeof f) => (e: { target: { value: string } }) =>
    setF((prev) => ({ ...prev, [k]: e.target.value }))

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg(null)
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...f, source, location: 'landing-form' }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || 'Something went wrong. Please try again.')
      }
      trackEvent('generate_lead', { source, form_location: 'landing-form' })
      if (typeof window.fbq === 'function') window.fbq('track', 'Lead', { content_name: source })
      setStatus('booked-step')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  if (status === 'booked-step') {
    return (
      <div>
        <div className="flex items-start gap-3 mb-5">
          <CheckCircle2 className="text-emerald-400 flex-shrink-0 mt-1" size={22} />
          <div>
            <h3 className="text-white font-bold text-xl mb-1">{bookingHeading}</h3>
            <p className="text-obg-gray text-sm leading-relaxed">{bookingBlurb}</p>
          </div>
        </div>
        <iframe
          src={BOOKING_URL}
          title="Pick a time for your call"
          width="100%"
          height="640"
          frameBorder="0"
          className="w-full rounded-xl min-h-[560px] bg-white"
          style={{ border: 'none' }}
        />
        <p className="text-obg-gray text-sm mt-4">
          Calendar not loading?{' '}
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-obg-orange hover:underline">
            Open it in a new tab
          </a>{' '}
          or email{' '}
          <a href="mailto:growth@onlinebrandgrowth.com" className="text-obg-orange hover:underline">
            growth@onlinebrandgrowth.com
          </a>
          .
        </p>
      </div>
    )
  }

  const busy = status === 'submitting'
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className={labelCls} htmlFor="lf-first">First name</label>
        <input id="lf-first" className={inputCls} required autoComplete="given-name" value={f.firstName} onChange={set('firstName')} disabled={busy} />
      </div>
      <div>
        <label className={labelCls} htmlFor="lf-email">Work email</label>
        <input id="lf-email" type="email" className={inputCls} required autoComplete="email" placeholder="you@yourbrand.com" value={f.email} onChange={set('email')} disabled={busy} />
      </div>
      <div>
        <label className={labelCls} htmlFor="lf-brand">Brand name</label>
        <input id="lf-brand" className={inputCls} required autoComplete="organization" value={f.brand} onChange={set('brand')} disabled={busy} />
      </div>
      <div>
        <label className={labelCls} htmlFor="lf-site">Brand website</label>
        <input id="lf-site" className={inputCls} required placeholder="yourbrand.com" value={f.website} onChange={set('website')} disabled={busy} />
      </div>
      <div className="sm:col-span-2">
        <label className={labelCls} htmlFor="lf-amz">Where are you with Amazon today?</label>
        <select id="lf-amz" className={inputCls} required value={f.amazonStatus} onChange={set('amazonStatus')} disabled={busy}>
          <option value="" disabled>Select one</option>
          {AMAZON_STATUS.map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>
      <div>
        <label className={labelCls} htmlFor="lf-rev">Annual revenue, all channels</label>
        <select id="lf-rev" className={inputCls} required value={f.revenue} onChange={set('revenue')} disabled={busy}>
          <option value="" disabled>Select one</option>
          {REVENUE.map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>
      <div>
        <label className={labelCls} htmlFor="lf-skus">Number of SKUs</label>
        <select id="lf-skus" className={inputCls} required value={f.skus} onChange={set('skus')} disabled={busy}>
          <option value="" disabled>Select one</option>
          {SKUS.map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>

      <div className="sm:col-span-2">
        <button type="submit" disabled={busy} className="btn-primary w-full justify-center text-base px-7 py-4 disabled:opacity-60">
          {busy ? (<><Loader2 size={18} className="animate-spin" /> Sending</>) : (<>{submitLabel} <ArrowRight size={18} /></>)}
        </button>
        <p className="text-obg-gray text-xs mt-3 text-center">
          Next step: pick a time on our calendar. No fee and no obligation.
        </p>
        {status === 'error' && (
          <div className="flex items-start gap-2 text-red-400 text-sm pt-3">
            <AlertCircle size={14} className="mt-0.5 flex-shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}
      </div>
    </form>
  )
}
