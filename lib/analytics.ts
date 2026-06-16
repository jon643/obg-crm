// Lightweight analytics helper for GA4 + Google Tag Manager.
// Pushes a custom event to the GTM dataLayer AND sends it straight to GA4
// via gtag (both are loaded in app/layout.tsx), so conversions are captured
// whether you build triggers in GTM or read events directly in GA4.

type EventParams = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(eventName: string, params: EventParams = {}): void {
  if (typeof window === 'undefined') return

  // 1) GTM dataLayer (lets you attach tags/triggers in the GTM UI)
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: eventName, ...params })

  // 2) Direct GA4 event (shows up under Reports → Engagement → Events)
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }
}
