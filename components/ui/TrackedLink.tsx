'use client'

import Link from 'next/link'
import type { ComponentProps, MouseEvent } from 'react'
import { trackEvent } from '@/lib/analytics'

type TrackedLinkProps = ComponentProps<typeof Link> & {
  eventName: string
  eventParams?: Record<string, string | number | boolean>
}

/**
 * Drop-in replacement for next/link that fires a GA4 / GTM event on click.
 * Use for primary conversion CTAs (e.g. "Book a Free Strategy Call").
 */
export default function TrackedLink({
  eventName,
  eventParams,
  onClick,
  ...props
}: TrackedLinkProps) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    trackEvent(eventName, eventParams)
    onClick?.(e)
  }
  return <Link {...props} onClick={handleClick} />
}
