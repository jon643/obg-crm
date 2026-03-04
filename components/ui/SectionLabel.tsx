import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        'inline-block text-obg-orange font-semibold text-sm tracking-widest uppercase mb-3',
        className
      )}
    >
      {children}
    </span>
  )
}
