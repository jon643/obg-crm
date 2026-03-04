'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'How can your Amazon services fit within my brand strategy?',
    answer:
      'We understand how to operate within the confines of your overarching brand strategy, and will always honor that. If that means pricing higher on Amazon than your DTC, we can do that. If that means limiting one-time sales and promotions, we can do that.',
  },
  {
    question: 'Can you train our employees how to manage Amazon?',
    answer:
      'Yes. We are transparent with all our processes and will train your internal employees on any Amazon-related tasks you wish to take in-house. This is often ideal with operational roles and responsibilities.',
  },
  {
    question: 'Does Online Brand Growth outsource any client services to 3rd parties?',
    answer:
      'No. Our in-house team of Amazon-focused experts handles all client services. We do utilize 3rd party software, however any action performed by a human being in your Amazon account will be by an OBG employee.',
  },
  {
    question: 'Does OBG partner with any Amazon seller?',
    answer:
      'No. We partner exclusively with brands and manufacturers who have existing Amazon businesses, brands new to Amazon with a proven track record in other channels, and well-funded startups committed to building on Amazon. We do not work with resellers.',
  },
  {
    question: 'Can OBG connect me with an Amazon category manager for my new account?',
    answer:
      'Yes! Online Brand Growth has relationships with Amazon business development executives and category managers to get your brand access to additional growth services. This is applicable only to new brands starting new Amazon accounts.',
  },
  {
    question: 'How long will it take to see results?',
    answer:
      'Often with existing Amazon businesses, we can identify and execute on ways to increase profit immediately — within the first 30 days. With a new Amazon business, it will typically take 3–6 months to achieve profitability.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'If you are ever unsatisfied with our partnership, you can terminate immediately without any advanced notice or waiting period. We believe that service providers who force their clients into unnecessary contracts do so because they are not confident in their ability to deliver results.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-obg-blue-light/30 last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-start justify-between gap-4 py-6 text-left group"
        aria-expanded={open}
      >
        <span className={cn(
          'font-semibold text-sm md:text-base transition-colors duration-200',
          open ? 'text-obg-orange' : 'text-white group-hover:text-obg-orange'
        )}>
          {question}
        </span>
        <ChevronDown
          size={20}
          className={cn(
            'flex-shrink-0 text-obg-gray transition-transform duration-300 mt-0.5',
            open && 'rotate-180 text-obg-orange'
          )}
        />
      </button>

      <div className={cn(
        'overflow-hidden transition-all duration-300 ease-in-out',
        open ? 'max-h-96 mb-6' : 'max-h-0'
      )}>
        <p className="text-obg-gray text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="section bg-obg-blue" id="faq">
      <div className="container-obg px-6 md:px-8 lg:px-12">

        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Got Questions?</SectionLabel>
            <h2 className="text-white">Frequently Asked Questions</h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="max-w-3xl mx-auto card-dark p-0 divide-y-0">
            <div className="px-8 py-2">
              {faqs.map((faq) => (
                <FAQItem key={faq.question} {...faq} />
              ))}
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}
