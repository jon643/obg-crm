'use client'

import { useRef, useCallback, useEffect, useState } from 'react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    quote:
      "OBG literally 30X'd our Amazon sales in less than 18 months — from $100K to $3M per year. This growth enabled us to scale into retail and ultimately exit the business. The team at Online Brand Growth are absolute wizards at Amazon & ecommerce.",
    name: 'Doug Gonterman',
    title: 'Founder',
    company: 'NumNum Baby',
    result: '30× Revenue Growth',
    initials: 'DG',
  },
  {
    quote:
      "We were leaving so much potential on the table. OBG reoptimized our listings, restructured PPC, and implemented strategies that increased our contribution margin. I can say with confidence that OBG's expertise and dedication are unmatched.",
    name: 'Lynn Cartwright',
    title: 'N.A. Business Director',
    company: 'Minerva Research Labs',
    result: '↑ Contribution Margin',
    initials: 'LC',
  },
  {
    quote:
      "Working with Jon, Dan and the team at Online Brand Growth has been a game changer. They take on all the headaches of dealing with Amazon, saving us significant time and stress. Since we started, our sales and profit are up over 50% YOY.",
    name: 'Lori Cortright',
    title: 'CFO',
    company: 'Streetwise Security',
    result: '+50% YOY Growth',
    initials: 'LC',
  },
]

/* ─── Individual card ─────────────────────────────── */
function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="testimonial-card h-full flex flex-col">
      {/* Result badge */}
      <span className="self-start text-sm font-bold text-obg-orange border border-obg-orange/40 bg-obg-orange/10 rounded-full px-4 py-1.5 mb-5 tracking-wide">
        {t.result}
      </span>

      {/* Large quote mark */}
      <Quote size={32} className="text-obg-orange/25 mb-4 flex-shrink-0" />

      {/* Quote text */}
      <p className="text-obg-offwhite leading-relaxed text-base flex-1">
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Attribution */}
      <div className="flex items-center gap-4 mt-6 pt-5 border-t border-obg-blue-light/25">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-obg-orange/30 to-obg-orange/10 border border-obg-orange/30 flex items-center justify-center font-bold text-obg-orange text-sm flex-shrink-0">
          {t.initials}
        </div>
        <div>
          <div className="text-white font-semibold text-base">{t.name}</div>
          <div className="text-obg-gray text-sm mt-0.5">
            {t.title} · {t.company}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Section ─────────────────────────────────────── */
export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const pauseRef = useRef(false)

  /* Scroll to a specific index */
  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[index] as HTMLElement
    if (!card) return
    track.scrollTo({ left: card.offsetLeft, behavior: 'smooth' })
    setCurrent(index)
  }, [])

  const prev = useCallback(() => {
    pauseRef.current = true
    scrollTo(Math.max(0, current - 1))
    setTimeout(() => { pauseRef.current = false }, 4000)
  }, [current, scrollTo])

  const next = useCallback(() => {
    pauseRef.current = true
    scrollTo((current + 1) % testimonials.length)
    setTimeout(() => { pauseRef.current = false }, 4000)
  }, [current, scrollTo])

  /* Sync dot indicator with scroll position */
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onScroll = () => {
      const idx = Math.round(track.scrollLeft / track.clientWidth)
      setCurrent(Math.max(0, Math.min(idx, testimonials.length - 1)))
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [])

  /* Autoplay */
  useEffect(() => {
    const id = setInterval(() => {
      if (!pauseRef.current) {
        const next = (current + 1) % testimonials.length
        scrollTo(next)
      }
    }, 7000)
    return () => clearInterval(id)
  }, [current, scrollTo])

  return (
    <section className="section bg-obg-blue-dark overflow-hidden" id="testimonials">
      <div className="container-obg px-6 md:px-8 lg:px-12">

        <AnimatedSection>
          <div className="text-center mb-14">
            <SectionLabel>Client Results</SectionLabel>
            <h2 className="text-white">Here&apos;s What Our Clients Are Saying</h2>
          </div>
        </AnimatedSection>

        {/* ── Desktop: all 3 cards side-by-side ── */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 120}>
              <TestimonialCard t={t} />
            </AnimatedSection>
          ))}
        </div>

        {/* ── Mobile/tablet: native scroll-snap carousel ── */}
        <div
          className="lg:hidden"
          onMouseEnter={() => { pauseRef.current = true }}
          onMouseLeave={() => { pauseRef.current = false }}
        >
          {/* Scroll track — CSS scroll-snap gives native touch swipe */}
          <div
            ref={trackRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex-none w-full snap-center px-1"
              >
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-5 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-obg-blue-light/40 flex items-center justify-center text-obg-gray hover:border-obg-orange hover:text-obg-orange transition-all duration-200 active:scale-95"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2.5 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { pauseRef.current = true; scrollTo(i); setTimeout(() => { pauseRef.current = false }, 4000) }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    'rounded-full transition-all duration-300',
                    i === current
                      ? 'bg-obg-orange w-7 h-2.5'
                      : 'bg-obg-blue-light/40 w-2.5 h-2.5 hover:bg-obg-blue-light/70'
                  )}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-obg-blue-light/40 flex items-center justify-center text-obg-gray hover:border-obg-orange hover:text-obg-orange transition-all duration-200 active:scale-95"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
