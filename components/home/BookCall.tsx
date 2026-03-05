'use client'

import { useRef, useEffect, useState } from 'react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import { Clock, Video, Calendar } from 'lucide-react'

export default function BookCall() {
  const iframeContainerRef = useRef<HTMLDivElement>(null)
  const [iframeVisible, setIframeVisible] = useState(false)

  // Only load the Motion iframe once the section scrolls into view
  useEffect(() => {
    const el = iframeContainerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIframeVisible(true); observer.disconnect() } },
      { rootMargin: '200px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return (
    <section className="section bg-obg-blue-darker" id="book-call">
      <div className="container-obg px-6 md:px-8 lg:px-12">

        <div className="max-w-5xl mx-auto">
          <div className="card-dark p-0 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Left panel — info */}
              <div className="p-10 lg:p-14 bg-gradient-to-br from-obg-orange/10 to-transparent border-r border-obg-blue-light/20">
                <AnimatedSection direction="left">
                  <SectionLabel>Free Consultation</SectionLabel>
                  <h2 className="text-white mb-4">Book a Free Strategy Call</h2>
                  <p className="text-obg-gray leading-relaxed mb-8">
                    In this call via Google Meet, we&apos;ll simply see if we&apos;re a good fit to work together.
                    No pressure, no pitch deck — just an honest conversation about your Amazon business.
                  </p>

                  <div className="space-y-4">
                    {[
                      { icon: Clock, text: '45 minutes' },
                      { icon: Video, text: 'Google Meet video call' },
                      { icon: Calendar, text: 'Pick a time that works for you' },
                    ].map(({ icon: Icon, text }) => (
                      <div key={text} className="flex items-center gap-3 text-obg-gray text-sm">
                        <div className="w-8 h-8 rounded-lg bg-obg-orange/10 flex items-center justify-center flex-shrink-0">
                          <Icon size={16} className="text-obg-orange" />
                        </div>
                        {text}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-obg-blue-light/20">
                    <p className="text-obg-gray text-sm">
                      Having trouble scheduling?{' '}
                      <a
                        href="mailto:growth@onlinebrandgrowth.com"
                        className="text-obg-orange hover:underline"
                      >
                        Email us directly
                      </a>
                    </p>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right panel — Motion calendar embed (lazy: loads when scrolled into view) */}
              <div className="p-6 lg:p-8 flex flex-col" ref={iframeContainerRef}>
                <AnimatedSection direction="right" className="flex-1">
                  {iframeVisible ? (
                    <iframe
                      src="https://app.usemotion.com/meet/dan-balda/obg-intro-45"
                      title="Book a Strategy Call with OBG"
                      width="100%"
                      height="600"
                      frameBorder="0"
                      className="w-full rounded-xl min-h-[480px] lg:min-h-[600px]"
                      style={{ border: 'none' }}
                    />
                  ) : (
                    <div className="w-full rounded-xl min-h-[480px] lg:min-h-[600px] bg-obg-blue-light/10 animate-pulse" />
                  )}
                </AnimatedSection>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
