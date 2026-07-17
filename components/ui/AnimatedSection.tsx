'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // If already in viewport on mount, reveal immediately
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setTimeout(() => setVisible(true), delay)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const initialTransform = {
    up: 'translateY(28px)',
    left: 'translateX(-28px)',
    right: 'translateX(28px)',
    none: 'none',
  }[direction]

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : initialTransform,
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      {children}
    </div>
  )
}
