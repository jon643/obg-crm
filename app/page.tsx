import dynamic from 'next/dynamic'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
// Above-fold: loaded immediately for fast first paint
import Hero from '@/components/home/Hero'
import BrandPartners from '@/components/home/BrandPartners'

// Below-fold: split into separate chunks, loaded after initial paint
const PainPoints      = dynamic(() => import('@/components/home/PainPoints'))
const CaseStudies     = dynamic(() => import('@/components/home/CaseStudies'))
const HowWeWork       = dynamic(() => import('@/components/home/HowWeWork'))
const ProcessSteps    = dynamic(() => import('@/components/home/ProcessSteps'))
const Testimonials    = dynamic(() => import('@/components/home/Testimonials'))
const Services        = dynamic(() => import('@/components/home/Services'))
const Team            = dynamic(() => import('@/components/home/Team'))
const WhyChooseUs     = dynamic(() => import('@/components/home/WhyChooseUs'))
const WeHateAgencies  = dynamic(() => import('@/components/home/WeHateAgencies'))
const BookCall        = dynamic(() => import('@/components/home/BookCall'))
const FAQ             = dynamic(() => import('@/components/home/FAQ'))

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How can your Amazon services fit within my brand strategy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We understand how to operate within the confines of your overarching brand strategy, and will always honor that. If that means pricing higher on Amazon than your DTC, we can do that. If that means limiting one-time sales and promotions, we can do that.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you train our employees how to manage Amazon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We are transparent with all our processes and will train your internal employees on any Amazon-related tasks you wish to take in-house. This is often ideal with operational roles and responsibilities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Online Brand Growth outsource any client services to 3rd parties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Our in-house team of Amazon-focused experts handles all client services. We do utilize 3rd party software, however any action performed by a human being in your Amazon account will be by an OBG employee.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does OBG partner with any Amazon seller?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. We partner exclusively with brands and manufacturers who have existing Amazon presence or are looking to establish one. We do not work with third-party resellers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can OBG connect me with an Amazon category manager for my new account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Through our network and relationships, we can facilitate introductions to Amazon category managers where appropriate for your brand's situation.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long will it take to see results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Results vary by brand and starting point, but most clients begin seeing meaningful improvements within 60–90 days. Significant revenue growth typically becomes clear within 6–12 months of a fully optimized Amazon presence.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is your cancellation policy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We believe in earning your business every month. Our agreements are structured to be flexible — please contact us directly to discuss terms specific to your engagement.',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        <Hero />
        <BrandPartners />
        <PainPoints />
        <CaseStudies />
        <HowWeWork />
        <ProcessSteps />
        <Testimonials />
        <Services />
        <Team />
        <WhyChooseUs />
        <WeHateAgencies />
        <BookCall />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
