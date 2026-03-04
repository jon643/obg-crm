import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import BrandPartners from '@/components/home/BrandPartners'
import PainPoints from '@/components/home/PainPoints'
import CaseStudies from '@/components/home/CaseStudies'
import HowWeWork from '@/components/home/HowWeWork'
import ProcessSteps from '@/components/home/ProcessSteps'
import Testimonials from '@/components/home/Testimonials'
import Services from '@/components/home/Services'
import Team from '@/components/home/Team'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import WeHateAgencies from '@/components/home/WeHateAgencies'
import BookCall from '@/components/home/BookCall'
import FAQ from '@/components/home/FAQ'

export default function HomePage() {
  return (
    <>
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
