export interface NavItem {
  label: string
  href: string
}

export interface Testimonial {
  quote: string
  name: string
  title: string
  company: string
}

export interface CaseStudy {
  stat: string
  statLabel: string
  description: string
  tag: string
}

export interface ServiceCategory {
  title: string
  icon: string
  items: string[]
}

export interface TeamMember {
  name: string
  role: string
  image?: string
}

export interface PainPoint {
  title: string
  description: string
  icon: string
}

export interface ProcessStep {
  step: string
  title: string
  description: string
}

export interface WhyCard {
  title: string
  description: string
  icon: string
}

export interface FAQItem {
  question: string
  answer: string
}
