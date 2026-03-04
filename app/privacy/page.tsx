import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Online Brand Growth',
  description: 'Privacy Policy for Online Brand Growth (Remus, LLC). Learn how we collect, use, and protect your personal information.',
}

const LAST_UPDATED = 'March 1, 2026'
const COMPANY = 'Remus, LLC'
const DBA = 'Online Brand Growth'
const EMAIL = 'growth@onlinebrandgrowth.com'
const WEBSITE = 'www.onlinebrandgrowth.com'

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-obg-blue-darker min-h-screen pt-28 pb-20">
        <div className="container-obg px-6 md:px-8 lg:px-12 max-w-4xl mx-auto">

          {/* Header */}
          <div className="mb-12">
            <p className="text-obg-orange text-xs font-semibold tracking-widest uppercase mb-3">Legal</p>
            <h1 className="text-white font-display font-bold text-4xl md:text-5xl mb-4">Privacy Policy</h1>
            <p className="text-obg-gray text-sm">Last updated: {LAST_UPDATED}</p>
          </div>

          {/* Content */}
          <div className="prose-obg space-y-10 text-obg-gray leading-relaxed">

            <section>
              <p>
                {COMPANY}, doing business as {DBA} (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;), is committed to protecting your privacy. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you visit our website at{' '}
                <a href={`https://${WEBSITE}`} className="text-obg-orange hover:underline">{WEBSITE}</a>{' '}
                or engage our services. Please read this policy carefully. If you disagree with its terms, please
                discontinue use of the site.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-bold mb-4">1. Information We Collect</h2>

              <h3 className="text-white text-lg font-semibold mb-2">Information You Provide Directly</h3>
              <p className="mb-4">
                We collect information you voluntarily provide when you:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li>Fill out a contact form or book a strategy call</li>
                <li>Send us an email or otherwise communicate with us</li>
                <li>Enter into a service agreement with us</li>
                <li>Subscribe to our newsletter or marketing communications</li>
              </ul>
              <p className="mb-4">
                This information may include your name, email address, phone number, company name, and any other
                details you choose to share.
              </p>

              <h3 className="text-white text-lg font-semibold mb-2">Information Collected Automatically</h3>
              <p className="mb-4">
                When you visit our website, we may automatically collect certain information about your device and
                usage, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>IP address and approximate geographic location</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on those pages</li>
                <li>Referring URL</li>
                <li>Device type and operating system</li>
              </ul>
              <p className="mt-4">
                This data is collected through cookies and similar tracking technologies (see Section 5 below).
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Respond to your inquiries and fulfill service requests</li>
                <li>Schedule and manage strategy calls and client onboarding</li>
                <li>Deliver the services outlined in your Service Agreement</li>
                <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
                <li>Analyze website usage to improve performance and user experience</li>
                <li>Comply with legal obligations and enforce our Terms of Service</li>
                <li>Protect against fraud, unauthorized access, and other illegal activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white text-2xl font-bold mb-4">3. How We Share Your Information</h2>
              <p className="mb-4">
                We do not sell, rent, or trade your personal information to third parties. We may share your
                information in the following limited circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong className="text-white">Service Providers:</strong> We may share data with trusted
                  third-party vendors who assist us in operating our website and delivering services (e.g., calendar
                  scheduling tools, email platforms, analytics providers). These providers are contractually obligated
                  to keep your information confidential.
                </li>
                <li>
                  <strong className="text-white">Legal Requirements:</strong> We may disclose your information if
                  required to do so by law, regulation, or legal process, or if we believe disclosure is necessary to
                  protect our rights or the safety of others.
                </li>
                <li>
                  <strong className="text-white">Business Transfers:</strong> In the event of a merger, acquisition,
                  or sale of all or part of our assets, your information may be transferred as part of that
                  transaction.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-white text-2xl font-bold mb-4">4. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this
                Privacy Policy, or as required by law. When we no longer need your information, we will securely delete
                or anonymize it. Client data related to active or recently terminated service agreements may be retained
                for up to five (5) years for business and legal compliance purposes.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-bold mb-4">5. Cookies and Tracking Technologies</h2>
              <p className="mb-4">
                Our website may use cookies and similar technologies to enhance your experience, analyze traffic, and
                personalize content. Cookies are small data files stored on your device. We may use:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Essential cookies:</strong> Required for basic website functionality</li>
                <li><strong className="text-white">Analytics cookies:</strong> Help us understand how visitors interact with our site (e.g., Google Analytics)</li>
                <li><strong className="text-white">Marketing cookies:</strong> Used to deliver relevant advertisements and track campaign effectiveness</li>
              </ul>
              <p className="mt-4">
                You can control cookie settings through your browser preferences. Note that disabling certain cookies
                may affect the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-bold mb-4">6. Third-Party Services</h2>
              <p>
                Our website integrates third-party services such as calendar scheduling tools (Motion), analytics
                platforms, and email providers. These services have their own privacy policies governing how they
                collect and use data. We encourage you to review the privacy policies of any third-party services you
                interact with through our website.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-bold mb-4">7. Data Security</h2>
              <p>
                We implement reasonable administrative, technical, and physical safeguards to protect your personal
                information from unauthorized access, disclosure, alteration, or destruction. However, no method of
                transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute
                security and encourage you to take precautions when sharing information online.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-bold mb-4">8. Your Rights and Choices</h2>
              <p className="mb-4">Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong className="text-white">Correction:</strong> Request that we correct inaccurate or incomplete information</li>
                <li><strong className="text-white">Deletion:</strong> Request that we delete your personal information, subject to legal retention requirements</li>
                <li><strong className="text-white">Opt-Out:</strong> Unsubscribe from marketing emails at any time by clicking the unsubscribe link in any email or contacting us directly</li>
                <li><strong className="text-white">Portability:</strong> Request a portable copy of your data in a machine-readable format</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at{' '}
                <a href={`mailto:${EMAIL}`} className="text-obg-orange hover:underline">{EMAIL}</a>.
                We will respond to your request within a reasonable timeframe.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-bold mb-4">9. Children&apos;s Privacy</h2>
              <p>
                Our website and services are not directed to individuals under the age of 18. We do not knowingly
                collect personal information from children. If you believe we have inadvertently collected information
                from a minor, please contact us immediately and we will take steps to delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-bold mb-4">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable
                law. When we make material changes, we will update the &quot;Last updated&quot; date at the top of this
                page. We encourage you to review this policy periodically. Your continued use of the website after any
                changes constitutes acceptance of the revised policy.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-bold mb-4">11. Contact Us</h2>
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices,
                please contact us:
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
