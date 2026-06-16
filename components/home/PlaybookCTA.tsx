import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import LeadForm from '@/app/unauthorized-seller-playbook/LeadForm'

export default function PlaybookCTA() {
  return (
    <section className="section bg-obg-blue-dark border-t border-obg-blue-light/10">
      <div className="container-obg px-6 md:px-8 lg:px-12 max-w-2xl mx-auto text-center">
        <AnimatedSection>
          <SectionLabel>Free Resource</SectionLabel>
          <h2 className="text-white mb-4">Not Ready to Book a Call? Grab the Free Playbook</h2>
          <p className="text-obg-gray text-lg mb-8">Get our step-by-step Unauthorized Seller Playbook — the exact moves we use to identify, document, and remove unauthorized resellers and MAP violators from your listings. Enter your email and we&apos;ll send it over.</p>
          <div className="flex justify-center"><LeadForm location="homepage-playbook" /></div>
        </AnimatedSection>
      </div>
    </section>
  )
}
