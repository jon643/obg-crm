import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service | Online Brand Growth',
  description: 'Terms of Service for Online Brand Growth (Remus, LLC). Please read these terms carefully before using our services.',
}

const LAST_UPDATED = 'March 1, 2026'
const COMPANY = 'Remus, LLC'
const DBA = 'Online Brand Growth'
const EMAIL = 'growth@onlinebrandgrowth.com'
const WEBSITE = 'www.onlinebrandgrowth.com'

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-obg-blue-darker min-h-screen pt-28 pb-20">
        <div className="container-obg px-6 md:px-8 lg:px-12 max-w-4xl mx-auto">

          {/* Header */}
          <div className="mb-12">
            <p className="text-obg-orange text-xs font-semibold tracking-widest uppercase mb-3">Legal</p>
            <h1 className="text-white font-display font-bold text-4xl md:text-5xl mb-4">Terms of Service</h1>
            <p className="text-obg-gray text-sm">Last updated: {LAST_UPDATED}</p>
          </div>

          {/* Content */}
          <div className="prose-obg space-y-10 text-obg-gray leading-relaxed">

            <section>
              <p>
                These Terms of Service (&quot;Terms&quot;) govern your use of the website located at{' '}
                <a href={`https://${WEBSITE}`} className="text-obg-orange hover:underline">{WEBSITE}</a>{' '}
                and any related services provided by {COMPANY}, doing business as {DBA} (&quot;Company,&quot;
                &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing our website or engaging our services,
                you agree to be bound by these Terms. If you do not agree, please discontinue use immediately.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-bold mb-4">1. Services</h2>
              <p>
                {DBA} provides Amazon marketplace consulting, advertising management, SEO and listing optimization,
                logistics and operations support, brand protection services, and related e-commerce growth services
                (&quot;Services&quot;). The specific scope, deliverables, and fees for Services rendered to a client
                are governed by a separate written Service Agreement or Statement of Work (&quot;SOW&quot;) executed
                between the Company and the client. These Terms apply in addition to, and do not supersede, any such
                Service Agreement or SOW.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-bold mb-4">2. Website Use</h2>
              <p className="mb-4">
                You may use our website for lawful purposes only. You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use the site in any way that violates applicable local, national, or international law</li>
                <li>Transmit unsolicited or unauthorized advertising or promotional material</li>
                <li>Attempt to gain unauthorized access to any part of our website or systems</li>
                <li>Engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of the website</li>
                <li>Scrape, crawl, or harvest data from our website without prior written consent</li>
              </ul>
              <p className="mt-4">
                We reserve the right to terminate or restrict access to the website at our sole discretion, without
                notice, for any reason.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-bold mb-4">3. Intellectual Property</h2>
              <p>
                All content on this website — including but not limited to text, graphics, logos, images, and software
                — is the property of {COMPANY} or its content suppliers and is protected by applicable intellectual
                property laws. The {DBA} name, logo, and the &quot;360 Brand Protection™&quot; mark are proprietary to
                {COMPANY}. You may not reproduce, distribute, modify, or create derivative works of any content on
                this site without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-bold mb-4">4. Confidentiality</h2>
              <p>
                In the course of providing Services, each party may disclose confidential and proprietary information
                to the other. Each party agrees to keep the other party&apos;s confidential information strictly
                confidential and not to disclose it to any third party without prior written consent, except as
                required by law. This obligation survives the termination of any Service Agreement.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-bold mb-4">5. Disclaimer of Warranties</h2>
              <p>
                The website and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis
                without any warranties of any kind, either express or implied, including but not limited to warranties
                of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the
                website will be uninterrupted, error-free, or free of viruses or other harmful components.
              </p>
              <p className="mt-4">
                Results described in case studies and testimonials reflect individual client outcomes and are not
                guaranteed. Past performance is not indicative of future results.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-bold mb-4">6. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, {COMPANY} and its officers, directors, employees, and agents
                shall not be liable for any indirect, incidental, special, consequential, or punitive damages —
                including loss of profits, revenue, data, or business opportunities — arising from your use of the
                website or our Services, even if we have been advised of the possibility of such damages. Our total
                liability for any claim arising out of or related to these Terms or the Services shall not exceed the
                amount paid by you to us in the three (3) months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-bold mb-4">7. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless {COMPANY} and its affiliates, officers, directors,
                employees, and agents from and against any claims, liabilities, damages, losses, costs, and expenses
                (including reasonable attorneys&apos; fees) arising out of or related to your use of the website, your
                violation of these Terms, or your violation of any rights of a third party.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-bold mb-4">8. Third-Party Links and Services</h2>
              <p>
                Our website may contain links to third-party websites or services that are not owned or controlled by
                {COMPANY}. We have no control over and assume no responsibility for the content, privacy policies, or
                practices of any third-party websites. We encourage you to review the terms and privacy policies of any
                third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-bold mb-4">9. Governing Law and Dispute Resolution</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Michigan,
                without regard to its conflict of law provisions. Any dispute arising from these Terms or your use of
                our website shall first be attempted to be resolved through good-faith negotiation. If negotiation
                fails, the parties agree to submit to binding arbitration in accordance with the rules of the American
                Arbitration Association, with proceedings to be held in Michigan. Notwithstanding the foregoing, either
                party may seek injunctive or equitable relief in a court of competent jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-bold mb-4">10. Changes to These Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon
                posting to the website. Your continued use of the website after changes are posted constitutes your
                acceptance of the revised Terms. We encourage you to review these Terms periodically.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-bold mb-4">11. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-4 card-glass p-6 rounded-xl">
                <p className="text-white font-semibold mb-1">{COMPANY}</p>
                <p className="text-obg-gray text-sm">d/b/a {DBA}</p>
                <p className="mt-3">
                  <a href={`mailto:${EMAIL}`} className="text-obg-orange hover:underline">
                    {EMAIL}
                  </a>
                </p>
                <p className="mt-1">
                  <a href={`https://${WEBSITE}`} className="text-obg-orange hover:underline">
                    {WEBSITE}
                  </a>
                </p>
              </div>
            </section>

          </div>

          {/* Back link */}
          <div className="mt-14 pt-8 border-t border-obg-blue-light/20">
            <Link href="/" className="text-obg-orange hover:underline text-sm">
              ← Back to Home
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
