'use client'

import { cn } from '@/lib/utils'
import { type ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-obg-orange disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary:
        'bg-obg-orange hover:bg-obg-orange-dark text-white shadow-glow-orange hover:shadow-none hover:scale-[1.02] active:scale-[0.98]',
      secondary:
        'border-2 border-obg-orange text-obg-orange hover:bg-obg-orange hover:text-white',
      ghost:
        'text-obg-gray hover:text-white rounded-lg',
    }

    const sizes = {
      sm: 'px-5 py-2.5 text-sm',
      md: 'px-7 py-3.5 text-base',
      lg: 'px-9 py-4 text-lg',
    }

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
