import { NextRequest, NextResponse } from 'next/server'

/**
 * POST /api/lead
 *
 * Lead capture endpoint for the Unauthorized Seller Playbook landing page
 * (and any future lead-magnet pages on the site).
 *
 * Currently this is a stub: it validates input, logs the lead to the Vercel
 * function logs, and returns success. Hook this up to ActiveCampaign by
 * filling in the TODO block below.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * To wire up ActiveCampaign:
 *   1. In Vercel → Project Settings → Environment Variables, add:
 *        AC_API_URL    = https://YOUR-ACCOUNT.api-us1.com
 *        AC_API_KEY    = <your ActiveCampaign API key>
 *        AC_LIST_ID    = <numeric ID of the playbook list>
 *        AC_TAG_ID     = <numeric ID of an "unauthorized-seller-playbook" tag>
 *        AC_AUTOMATION = (optional) automation ID that fires the welcome email
 *   2. Replace the TODO block with the AC API calls (see comments).
 * ─────────────────────────────────────────────────────────────────────────
 */

interface LeadPayload {
  firstName?: string
  email?: string
  source?: string
  location?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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

  if (!firstName) {
    return NextResponse.json({ error: 'First name is required.' }, { status: 400 })
  }

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: 'Please enter a valid email address.' },
      { status: 400 },
    )
  }

  // Log to Vercel function logs so leads aren't lost while AC integration is pending.
  console.log('[lead]', JSON.stringify({ firstName, email, source, location, ts: new Date().toISOString() }))

  // ──────────────────────────────────────────────────────────────────────
  // TODO — ActiveCampaign integration
  //
  //   const acUrl = process.env.AC_API_URL
  //   const acKey = process.env.AC_API_KEY
  //   const listId = process.env.AC_LIST_ID
  //   const tagId = process.env.AC_TAG_ID
  //
  //   if (acUrl && acKey && listId) {
  //     // 1) Create or update the contact
  //     const contactRes = await fetch(`${acUrl}/api/3/contact/sync`, {
  //       method: 'POST',
  //       headers: { 'Api-Token': acKey, 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ contact: { email, firstName } }),
  //     })
  //     const { contact } = await contactRes.json()
  //
  //     // 2) Subscribe them to the list (status: 1 = active)
  //     await fetch(`${acUrl}/api/3/contactLists`, {
  //       method: 'POST',
  //       headers: { 'Api-Token': acKey, 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ contactList: { list: listId, contact: contact.id, status: 1 } }),
  //     })
  //
  //     // 3) Tag them so the welcome automation fires
  //     if (tagId) {
  //       await fetch(`${acUrl}/api/3/contactTags`, {
  //         method: 'POST',
  //         headers: { 'Api-Token': acKey, 'Content-Type': 'application/json' },
  //         body: JSON.stringify({ contactTag: { contact: contact.id, tag: tagId } }),
  //       })
  //     }
  //   }
  // ──────────────────────────────────────────────────────────────────────

  return NextResponse.json({ ok: true })
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. POST application/json with { firstName, email }.' },
    { status: 405 },
  )
}
