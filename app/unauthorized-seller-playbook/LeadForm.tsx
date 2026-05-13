'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { AlertCircle, ArrowRight, Loader2 } from 'lucide-react'

const THANK_YOU_PATH = '/unauthorized-seller-playbook/thank-you'

interface LeadFormProps {
  /**
   * Used to attribute which form on the page submitted the lead.
   * Forwarded to /api/lead so you can segment in ActiveCampaign later.
   */
  location?: string
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function LeadForm({ location = 'hero' }: LeadFormProps) {
  const router = useRouter()
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg(null)

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          email,
          source: 'unauthorized-seller-playbook',
          location,
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || 'Something went wrong. Please try again.')
      }

      // Mark success briefly (button morphs) and then redirect to the
      // thank-you page where the user can download the playbook.
      setStatus('success')
      router.push(THANK_YOU_PATH)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row sm:items-stretch w-full max-w-xl"
      noValidate
    >
      <label className="sr-only" htmlFor={`firstName-${location}`}>First name</label>
      <input
        id={`firstName-${location}`}
        type="text"
        name="firstName"
        autoComplete="given-name"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First name"
        disabled={status === 'submitting'}
        className="flex-1 min-w-0 rounded-full bg-obg-blue-darker/80 border border-obg-blue-light/40 text-white placeholder-obg-gray px-5 py-3.5 text-base focus:outline-none focus:border-obg-orange focus:ring-2 focus:ring-obg-orange/30 transition-colors disabled:opacity-50"
      />

      <label className="sr-only" htmlFor={`email-${location}`}>Work email</label>
      <input
        id={`email-${location}`}
        type="email"
        name="email"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@yourbrand.com"
        disabled={status === 'submitting'}
        className="flex-1 min-w-0 rounded-full bg-obg-blue-darker/80 border border-obg-blue-light/40 text-white placeholder-obg-gray px-5 py-3.5 text-base focus:outline-none focus:border-obg-orange focus:ring-2 focus:ring-obg-orange/30 transition-colors disabled:opacity-50"
      />

      <button
        type="submit"
        disabled={status === 'submitting' || status === 'success'}
        className="inline-flex items-center justify-center gap-2 font-semibold rounded-full bg-obg-orange hover:bg-obg-orange-dark text-white shadow-glow-orange hover:shadow-none hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 px-7 py-3.5 text-base whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {status === 'submitting' || status === 'success' ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            {status === 'success' ? 'Redirecting…' : 'Sending…'}
          </>
        ) : (
          <>
            Send me the playbook
            <ArrowRight size={18} />
          </>
        )}
      </button>

      {status === 'error' && (
        <div className="sm:col-span-3 sm:basis-full flex items-start gap-2 text-red-400 text-sm pt-1 px-1">
          <AlertCircle size={14} className="mt-0.5 flex-shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}
    </form>
  )
}
