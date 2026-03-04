import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import {
  MapPin,
  DollarSign,
  ArrowRight,
  Target,
  Shield,
  Flame,
  Users,
  BarChart2,
  Search,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers at Online Brand Growth | Join Our Amazon Team',
  description:
    'Join the Online Brand Growth team. We\'re hiring Amazon specialists, account managers, data analysts, and catalog experts. Remote-first, performance-driven, founder-led.',
}

const values = [
  {
    icon: Target,
    title: 'Mission Over Ego',
    description:
      'We leave our egos at the door. Every decision, every strategy, every action is in service of the mission — helping our clients build extraordinary businesses on Amazon.',
  },
  {
    icon: Shield,
    title: 'Impeccable Character',
    description:
      'We do what we say we\'re going to do. We\'re honest with our clients, honest with each other, and honest with ourselves. Integrity isn\'t a value we talk about — it\'s how we operate.',
  },
  {
    icon: Flame,
    title: 'Hunger for Excellence',
    description:
      'Good enough isn\'t good enough. We\'re relentlessly curious, constantly learning, and always pushing to deliver results that exceed expectations for every brand we serve.',
  },
]

const openings = [
  {
    id: 'catalog-listing',
    icon: Search,
    title: 'Catalog Specialist',
    subtitle: 'Listing Optimization',
    location: 'Latin America / Philippines',
    compensation: '$1,000 – $1,800 / month',
    type: 'Remote · Full-Time',
    description:
      'We\'re looking for a detail-obsessed Catalog Specialist to help our brand partners dominate Amazon search. You\'ll be responsible for researching keywords, writing optimized listings, and building A+ Content that converts browsers into buyers.',
    responsibilities: [
      'Conduct keyword research using Helium 10, Data Dive, and Brand Analytics',
      'Write and optimize product titles, bullet points, and backend search terms',
      'Build A+ Content and Brand Story modules in Seller Central',
      'Audit existing listings and identify conversion rate opportunities',
      'Manage Amazon Storefront updates and content refreshes',
      'Track organic ranking changes and report on SEO performance',
    ],
    requirements: [
      '2+ years of Amazon listing optimization experience',
      'Proficiency with Helium 10, Data Dive, or similar keyword tools',
      'Strong English writing and copywriting skills',
      'Experience with A+ Content and Seller Central',
      'Detail-oriented with the ability to manage multiple brand accounts',
      'Self-motivated and able to work independently in a remote environment',
    ],
  },
  {
    id: 'account-manager',
    icon: Users,
    title: 'Account Manager',
    subtitle: 'Full-Service Amazon Management',
    location: 'US / Canada / Latin America',
    compensation: '$4,000 – $6,500+ / month',
    type: 'Remote · Full-Time',
    description:
      'OBG Account Managers are the strategic leads for our client brands. You\'ll own the relationship, coordinate across our specialist team (ads, catalog, logistics), and ensure every brand you manage is growing profitably. This role is for experienced Amazon operators who thrive under ownership and accountability.',
    responsibilities: [
      'Serve as the primary point of contact for 4–6 brand accounts',
      'Lead weekly client calls and deliver clear, actionable strategy',
      'Coordinate with PPC, catalog, and logistics specialists on execution',
      'Build and present monthly performance reports with Contribution Margin focus',
      'Identify growth opportunities and proactively bring recommendations to clients',
      'Manage account health, escalations, and Seller Central issues',
    ],
    requirements: [
      '3+ years of Amazon account management experience (agency or brand-side)',
      'Deep familiarity with Seller Central, advertising console, and Brand Analytics',
      'Strong analytical skills and comfort working with financial data',
      'Excellent written and verbal communication in English',
      'Experience managing 7-figure+ Amazon brands preferred',
      'Ability to work US business hours (CST or EST)',
    ],
  },
  {
    id: 'data-analyst',
    icon: BarChart2,
    title: 'Data Analyst',
    subtitle: 'Amazon Performance & Reporting',
    location: 'Latin America / Philippines',
    compensation: '$1,200 – $1,800 / month',
    type: 'Remote · Full-Time',
    description:
      'We\'re building out our data infrastructure and need a sharp analyst to help us turn Amazon data into actionable insights. You\'ll work across client accounts to build dashboards, automate reporting, and surface the metrics that matter most.',
    responsibilities: [
      'Build and maintain client performance dashboards using Looker Studio or similar tools',
      'Pull and synthesize data from Seller Central, advertising console, and third-party tools',
      'Automate weekly and monthly reporting workflows',
      'Analyze PPC performance data to identify bid optimization opportunities',
      'Track inventory velocity and flag replenishment needs',
      'Support Account Managers with data requests and ad-hoc analysis',
    ],
    requirements: [
      '2+ years of data analysis experience (Amazon or e-commerce preferred)',
      'Proficiency in Excel/Google Sheets and at least one BI tool (Looker Studio, Tableau, etc.)',
      'Familiarity with Amazon Seller Central reporting and Brand Analytics',
      'Basic SQL or Python knowledge a strong plus',
      'Strong attention to detail and ability to work with large data sets',
      'Clear communicator who can translate data into plain-language insights',
    ],
  },
]

export default function CareersPage() {
  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-hero pt-28 pb-20">
          <div
            aria-hidden
            className="absolute inset-0 opacity-10"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #ff795e 0%, transparent 70%)',
            }}
          />
          <div className="container-obg px-6 md:px-8 lg:px-12 relative z-10 max-w-3xl mx-auto text-center">
            <AnimatedSection direction="up">
              <SectionLabel>Join Our Team</SectionLabel>
              <h1 className="text-hero font-display font-bold text-white mb-6 text-balance">
                Build Something That{' '}
                <span className="text-gradient-orange">Actually Matters</span>
              </h1>
              <p className="text-obg-gray text-xl leading-relaxed mb-8">
                Online Brand Growth is a founder-led Amazon agency that manages $30M+ in annual
                revenue for some of the most ambitious brands on the platform. We&apos;re looking
                for operators who take ownership, move fast, and care deeply about results.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd87XzL_63D84wEwKJPQISd_n_C4CIsQcxEC3zzTDMf5HRQsw/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-9 py-4 inline-flex items-center gap-2"
              >
                Apply Now
                <ArrowRight size={18} />
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* About OBG */}
        <section className="section bg-obg-blue-dark">
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <SectionLabel>About OBG</SectionLabel>
                <h2 className="text-white mb-6">Why Work at Online Brand Growth?</h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection>
                <div className="card-dark h-full">
                  <h3 className="text-white font-bold text-lg mb-4">Founder-Led, Not Corporate</h3>
                  <p className="text-obg-gray leading-relaxed">
                    Co-founders Jon Klein and Dan Balda are in the business every day — not managing
                    from a corner office. When you join OBG, you&apos;re working directly alongside
                    people who have built, managed, and scaled brands on Amazon for 25+ years. You
                    won&apos;t get lost in layers of middle management.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <div className="card-dark h-full">
                  <h3 className="text-white font-bold text-lg mb-4">Performance-Driven Compensation</h3>
                  <p className="text-obg-gray leading-relaxed">
                    We believe people should be paid for results, not time served. Our compensation
                    structure rewards accountability and excellence. As the agency grows and as
                    you grow, your earnings grow with it. We have no interest in hiring people
                    who want to coast.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={150}>
                <div className="card-dark h-full">
                  <h3 className="text-white font-bold text-lg mb-4">Remote-First, Async-Friendly</h3>
                  <p className="text-obg-gray leading-relaxed">
                    Our team works across time zones — the US, Latin America, and the Philippines.
                    We communicate asynchronously, document well, and trust our people to manage
                    their own time. If you thrive with autonomy, you&apos;ll love working here.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="card-dark h-full">
                  <h3 className="text-white font-bold text-lg mb-4">Real Work, Real Impact</h3>
                  <p className="text-obg-gray leading-relaxed">
                    We work with real brands doing real revenue on Amazon. Our clients trust us with
                    their most important sales channel. The work you do here will have a measurable
                    impact — on their businesses, and on your career.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section bg-obg-blue">
          <div className="container-obg px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <SectionLabel>Our Values</SectionLabel>
                <h2 className="text-white mb-4">What We Believe</h2>
                <p className="text-obg-gray">
                  These aren&apos;t words on a wall. They&apos;re how we hire, how we operate,
                  and how we hold each other accountable.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {values.map((value, i) => {
                const Icon = value.icon
                return (
                  <AnimatedSection key={value.title} delay={i * 100}>
                    <div className="card-dark h-full text-center">
                      <div className="w-14 h-14 rounded-2xl bg-obg-orange/10 border border-obg-orange/20 flex items-center justify-center mx-auto mb-5">
                        <Icon size={26} className="text-obg-orange" />
                      </div>
                      <h3 className="text-white font-bold text-lg mb-3">{value.title}</h3>
                      <p className="text-obg-gray text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="section bg-obg-blue-darker" id="open-positions">
          <div className="container-obg px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <SectionLabel>Open Positions</SectionLabel>
                <h2 className="text-white mb-4">Current Openings</h2>
                <p className="text-obg-gray">
                  All roles are fully remote. We hire for attitude and character first, skill second.
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-8 max-w-4xl mx-auto">
              {openings.map((job, i) => {
                const Icon = job.icon
                return (
                  <AnimatedSection key={job.id} delay={i * 80}>
                    <div className="card-dark border-obg-blue-light/20 hover:border-obg-orange/30 transition-colors duration-300">

                      {/* Job header */}
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-obg-orange/10 border border-obg-orange/20 flex items-center justify-center flex-shrink-0">
                          <Icon size={22} className="text-obg-orange" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="text-white font-bold text-xl">{job.title}</h3>
                            <span className="text-xs font-semibold text-obg-orange border border-obg-orange/30 rounded-full px-2.5 py-0.5">
                              {job.subtitle}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-obg-gray">
                            <span className="flex items-center gap-1.5">
                              <MapPin size={13} className="text-obg-orange" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <DollarSign size={13} className="text-obg-orange" />
                              {job.compensation}
                            </span>
                            <span className="text-obg-gray/60">{job.type}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-obg-gray leading-relaxed mb-8">{job.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {/* Responsibilities */}
                        <div>
                          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                            What You&apos;ll Do
                          </h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((r) => (
                              <li key={r} className="flex items-start gap-2.5 text-obg-gray text-sm">
                                <span className="text-obg-orange mt-1 flex-shrink-0">›</span>
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Requirements */}
                        <div>
                          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                            What We&apos;re Looking For
                          </h4>
                          <ul className="space-y-2">
                            {job.requirements.map((r) => (
                              <li key={r} className="flex items-start gap-2.5 text-obg-gray text-sm">
                                <span className="text-obg-orange mt-1 flex-shrink-0">›</span>
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-5 border-t border-obg-blue-light/20">
                        <a
                          href="https://docs.google.com/forms/d/e/1FAIpQLSd87XzL_63D84wEwKJPQISd_n_C4CIsQcxEC3zzTDMf5HRQsw/viewform?usp=dialog"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary inline-flex items-center gap-2"
                        >
                          Apply for This Role
                          <ArrowRight size={15} />
                        </a>
                      </div>

                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </section>

        {/* Don't see a fit CTA */}
        <section className="section bg-obg-blue-dark">
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <SectionLabel>Stay in Touch</SectionLabel>
              <h2 className="text-white mb-6">
                Don&apos;t See the Right Role?
              </h2>
              <p className="text-obg-gray text-lg mb-10">
                We&apos;re always looking for exceptional Amazon operators. If you&apos;re passionate
                about Amazon and think you&apos;d be a great fit for the OBG team, send us a note —
                we&apos;d love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd87XzL_63D84wEwKJPQISd_n_C4CIsQcxEC3zzTDMf5HRQsw/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-lg px-9 py-4 inline-flex items-center gap-2"
                >
                  Apply Now
                  <ArrowRight size={18} />
                </a>
                <a
                  href="mailto:growth@onlinebrandgrowth.com?subject=General%20Application"
                  className="btn-secondary text-lg px-9 py-4"
                >
                  Email Us Directly
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
