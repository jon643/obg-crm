import { NextRequest, NextResponse } from 'next/server'

/**
 * POST /api/lead
 *
 * Lead capture endpoint for every lead-magnet page on the site
 * (Unauthorized Seller Playbook, Fee Changes Digest, Profit Calculator, ...).
 *
 * Validates input, syncs the contact into ActiveCampaign, subscribes them to
 * the master list, and applies the lead-magnet tag that matches the
 * submission's `source` (see TAG_BY_SOURCE) -- which triggers that magnet's
 * nurture automation. Unknown sources fall back to AC_TAG_ID.
 *
 * `firstName` is optional: some forms (e.g. the fee changes digest) collect
 * email only.
 *
 * Required env vars (Vercel -> Project -> Settings -> Environment Variables):
 *   AC_API_URL  default: https://onlinebrandgrowth.api-us1.com
 *   AC_API_KEY  (required) ActiveCampaign API key (AC -> Settings -> Developer)
 *   AC_LIST_ID  default: 3 (Master Contact List)
 *   AC_TAG_ID   default: 2 (Lead Magnet: Playbook) -- fallback tag
 *
 * The endpoint NEVER fails the submission solely because AC is unreachable --
 * we still log the lead to Vercel function logs and return 200.
 */

interface LeadPayload {
  firstName?: string
  email?: string
  source?: string
  location?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const AC_API_URL = process.env.AC_API_URL || 'https://onlinebrandgrowth.api-us1.com'
const AC_API_KEY = process.env.AC_API_KEY || ''
const AC_LIST_ID = process.env.AC_LIST_ID || '3'
const AC_TAG_ID = process.env.AC_TAG_ID || '2'

// Map a submission's `source` to the ActiveCampaign tag that triggers its
// nurture automation. Add a line here when you launch a new lead magnet.
const TAG_BY_SOURCE: Record<string, number> = {
  'unauthorized-seller-playbook': 2, // Lead Magnet: Playbook
  playbook: 2, // Lead Magnet: Playbook
  fees: 3, // Lead Magnet: Fees Digest
  'fees-hub': 3, // Lead Magnet: Fees Digest
  calculator: 1, // Lead Magnet: Calculator
}

async function syncToActiveCampaign(
  firstName: string,
  email: string,
  tagId: number,
): Promise<{ ok: boolean; contactId?: string; error?: string }> {
  if (!AC_API_KEY) {
    return { ok: false, error: 'AC_API_KEY not configured' }
  }

  const headers = {
    'Api-Token': AC_API_KEY,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  try {
    // 1) Create or update the contact (sync is idempotent on email)
    const syncRes = await fetch(`${AC_API_URL}/api/3/contact/sync`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ contact: { email, firstName } }),
    })

    if (!syncRes.ok) {
      const errText = await syncRes.text().catch(() => '')
      return { ok: false, error: `contact/sync ${syncRes.status}: ${errText.slice(0, 200)}` }
    }

    const syncData = (await syncRes.json()) as { contact?: { id: string } }
    const contactId = syncData.contact?.id
    if (!contactId) {
      return { ok: false, error: 'contact/sync returned no contact id' }
    }

    // 2) Subscribe them to the list (status: 1 = active subscriber).
    // AC returns 422 on duplicate subscriptions -- that's fine.
    const listRes = await fetch(`${AC_API_URL}/api/3/contactLists`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        contactList: { list: Number(AC_LIST_ID), contact: Number(contactId), status: 1 },
      }),
    })
    if (!listRes.ok && listRes.status !== 422) {
      const errText = await listRes.text().catch(() => '')
      console.warn('[lead] contactLists', listRes.status, errText.slice(0, 200))
    }

    // 3) Apply the trigger tag -- this is what fires the automation.
    const tagRes = await fetch(`${AC_API_URL}/api/3/contactTags`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        contactTag: { contact: Number(contactId), tag: tagId },
      }),
    })
    if (!tagRes.ok && tagRes.status !== 422) {
      const errText = await tagRes.text().catch(() => '')
      console.warn('[lead] contactTags', tagRes.status, errText.slice(0, 200))
    }

    return { ok: true, contactId }
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : 'unknown AC error',
    }
  }
}

export async function POST(req: NextRequest) {
  let body: LeadPayload
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
  }

  const firstName = (body.firstName ?? '').trim()
  const email = (body.email ?? '').trim().toLowerCase()
  const source = (body.source ?? 'unknown').trim()
  const location = (body.location ?? 'unknown').trim()

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: 'Please enter a valid email address.' },
      { status: 400 },
    )
  }

  const tagId = TAG_BY_SOURCE[source] ?? Number(AC_TAG_ID)

  // Always log so leads aren't lost even if AC integration breaks.
  console.log(
    '[lead]',
    JSON.stringify({ firstName, email, source, tagId, location, ts: new Date().toISOString() }),
  )

  const result = await syncToActiveCampaign(firstName, email, tagId)
  if (!result.ok) {
    // Soft-fail: don't block the user's thank-you redirect. Log loudly for ops.
    console.error('[lead] AC sync failed:', result.error)
  } else {
    console.log('[lead] AC contact created/updated:', result.contactId)
  }

  return NextResponse.json({ ok: true })
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. POST application/json with { email, source }.' },
    { status: 405 },
  )
}
