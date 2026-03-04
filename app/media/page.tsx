import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import { ExternalLink, Mic, Linkedin, Youtube, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Media & Thought Leadership | Online Brand Growth',
  description:
    'Watch Jon Klein and Dan Balda share their Amazon expertise. Podcast appearances, speaking engagements, and industry insights from the founders of Online Brand Growth.',
  alternates: {
    canonical: 'https://www.onlinebrandgrowth.com/media',
  },
  openGraph: {
    title: 'Media & Thought Leadership | Online Brand Growth',
    description: 'Podcast appearances, speaking engagements, and Amazon industry insights from OBG founders Jon Klein and Dan Balda.',
    url: 'https://www.onlinebrandgrowth.com/media',
  },
}

const featuredVideos = [
  {
    id: '5Mm-HOvxQgg',
    title: '5 Key Roles Every Amazon Growth Team Needs (Scale Faster on Amazon)',
    description:
      'Jon Klein breaks down the exact roles every Amazon brand needs to build a high-performing team — and the hiring order that drives the fastest, most profitable growth.',
    tag: 'Team Building',
  },
  {
    id: 'Wj26fSa1wyM',
    title: 'Secret Tactics for Your Amazon Selling Journey',
    description:
      'Jon Klein joins Sebastian Joseph to share the tactical playbook OBG uses to grow and protect brands on Amazon — from PPC frameworks to brand protection to contribution margin.',
    tag: 'Podcast Feature',
  },
]

const podcastAppearances = [
  {
    show: 'SellerMate Podcast',
    episode: 'How to Grow Sales on Amazon: Proven Systems from Jon Klein',
    description:
      'Jon shares the proven systems OBG uses to drive profitable growth for Amazon brands — covering PPC frameworks, brand protection, and the metrics that actually matter.',
    link: 'https://www.youtube.com/watch?v=ZyoxkzZVUOw',
    platform: 'SellerMate AI · YouTube',
  },
  {
    show: 'Retail-Outsource Podcast',
    episode: 'How to Succeed on Amazon in 2025: Unit Economics, PPC, AI & Brand Growth Insights',
    description:
      'Jon Klein joins the Retail-Outsource podcast to discuss Amazon growth in 2025 — unit economics, AI tools, PPC strategy, and what it really takes to build a sustainable brand.',
    link: 'https://www.youtube.com/watch?v=Z9N6uGjp5tM',
    platform: 'Retail Outsource · YouTube',
  },
  {
    show: 'Corey Ganim Podcast',
    episode: 'How to Grow and Manage Brands on Amazon with Jon Klein',
    description:
      'Jon Klein joins Corey Ganim to discuss building and managing Amazon brands — from choosing the right agency to the systems OBG uses to drive and protect client revenue.',
    link: 'https://open.spotify.com/episode/0INjFMOZuQ38tom1EEHEIB',
    platform: 'Corey Ganim · Spotify',
  },
]

const speakingEvents = [
  {
    event: 'Million Dollar Sellers (MDS) Inspire',
    location: 'Miami, FL',
    description:
      'Jon Klein was invited to speak at MDS Inspire 2025 — one of the most exclusive Amazon seller mastermind communities in the world — sharing strategies for brand protection, profitability, and sustainable Amazon growth.',
  },
  {
    event: 'Wholesale Network Group',
    location: 'Virtual',
    description:
      'OBG presented to the Wholesale Network Group on Amazon wholesale strategy, operational excellence, and the contribution margin framework that drives long-term profitability for brands at every stage.',
  },
  {
    event: 'Corey Ganim Podcast',
    location: 'Podcast',
    description:
      'Featured guest sharing insights on the evolution of the Amazon agency model, brand growth strategy, and how OBG delivers founder-level attention and results to every client account.',
  },
]

const socialLinks = [
  {
    platform: 'LinkedIn – Jon Klein',
    handle: 'linkedin.com/in/jon-klein',
    description:
      'Amazon strategy, brand protection insights, real client results, and founder perspectives on building and scaling brands on the platform.',
    href: 'https://www.linkedin.com/in/jon-klein-5489724b/',
    icon: Linkedin,
    color: '#0077B5',
  },
  {
    platform: 'LinkedIn – Dan Balda',
    handle: 'linkedin.com/in/daniel-balda',
    description:
      'Operations, logistics, wholesale strategy, and the business side of building profitable Amazon brands at scale.',
    href: 'https://www.linkedin.com/in/daniel-balda/',
    icon: Linkedin,
    color: '#0077B5',
  },
]

export default function MediaPage() {
  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-gradient-hero pt-28 pb-20">
          <div
            aria-hidden
            className="absolute inset-0 opacity-10"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #ff795e 0%, transparent 70%)',
            }}
          />
          <div className="container-obg px-6 md:px-8 lg:px-12 relative z-10 max-w-3xl mx-auto text-center">
            <AnimatedSection direction="up">
              <SectionLabel>Thought Leadership</SectionLabel>
              <h1 className="text-hero font-display font-bold text-white mb-6 text-balance">
                Media &amp; Industry{' '}
                <span className="text-gradient-orange">Insights</span>
              </h1>
              <p className="text-obg-gray text-xl leading-relaxed">
                Jon Klein and Dan Balda share their Amazon expertise through podcasts, videos, and
                speaking events. Straight talk from founders who have built, managed, and scaled
                hundreds of brands on Amazon.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Featured Videos */}
        <section className="section bg-obg-blue-dark">
          <div className="container-obg px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <SectionLabel>Video Content</SectionLabel>
                <h2 className="text-white mb-4">Watch &amp; Learn</h2>
                <p className="text-obg-gray">
                  In-depth content on Amazon strategy, team building, advertising, and brand
                  protection — straight from the OBG founders.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {featuredVideos.map((video, i) => (
                <AnimatedSection key={video.id} delay={i * 100}>
                  <div className="card-dark h-full flex flex-col">
                    {/* Real YouTube embed */}
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-5">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                    <span className="text-xs font-bold text-obg-orange border border-obg-orange/30 rounded-full px-2.5 py-1 bg-obg-blue-darker/80 self-start mb-3">
                      {video.tag}
                    </span>
                    <h3 className="text-white font-bold text-base leading-snug mb-3">{video.title}</h3>
                    <p className="text-obg-gray text-sm leading-relaxed flex-1">{video.description}</p>
                    <div className="mt-5 pt-4 border-t border-obg-blue-light/20">
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-obg-orange text-sm font-semibold flex items-center gap-1.5 hover:underline"
                      >
                        <Youtube size={14} /> Watch on YouTube
                      </a>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={300}>
              <div className="text-center mt-10">
                <a
                  href="https://www.youtube.com/@onlinebrandgrowthYT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <Youtube size={16} />
                  View All Videos on YouTube
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Podcast Appearances */}
        <section className="section bg-obg-blue">
          <div className="container-obg px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <SectionLabel>Podcast Appearances</SectionLabel>
                <h2 className="text-white mb-4">Heard On</h2>
                <p className="text-obg-gray">
                  Jon and Dan have been featured on leading Amazon and e-commerce podcasts.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {podcastAppearances.map((p, i) => (
                <AnimatedSection key={p.show} delay={i * 100}>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-glass h-full flex flex-col p-6 hover:border-obg-orange/40 transition-colors duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-obg-orange/10 border border-obg-orange/20 flex items-center justify-center flex-shrink-0">
                        <Mic size={18} className="text-obg-orange" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">{p.show}</div>
                        <div className="text-obg-gray text-xs">{p.platform}</div>
                      </div>
                    </div>
                    <h3 className="text-white text-sm font-bold leading-snug mb-3">{p.episode}</h3>
                    <p className="text-obg-gray text-xs leading-relaxed flex-1">{p.description}</p>
                    <div className="mt-4 pt-3 border-t border-obg-blue-light/20">
                      <span className="text-obg-orange text-xs font-semibold flex items-center gap-1 group-hover:underline">
                        Listen Now <ExternalLink size={11} />
                      </span>
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Speaking Events */}
        <section className="section bg-obg-blue-darker">
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <SectionLabel>Speaking</SectionLabel>
                <h2 className="text-white">Speaking Engagements</h2>
              </div>
            </AnimatedSection>

            <div className="space-y-4">
              {speakingEvents.map((item, i) => (
                <AnimatedSection key={item.event} delay={i * 80}>
                  <div className="card-glass flex items-start gap-5 p-6">
                    <div className="w-10 h-10 rounded-xl bg-obg-orange/10 border border-obg-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin size={18} className="text-obg-orange" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <div className="text-white font-bold text-sm">{item.event}</div>
                        <span className="text-obg-orange text-xs font-semibold border border-obg-orange/30 rounded-full px-2 py-0.5">
                          {item.location}
                        </span>
                      </div>
                      <p className="text-obg-gray text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Social / LinkedIn */}
        <section className="section bg-obg-blue-dark">
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <SectionLabel>Follow Along</SectionLabel>
                <h2 className="text-white mb-4">Connect on LinkedIn</h2>
                <p className="text-obg-gray">
                  Get weekly Amazon strategy content from the founders of OBG.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {socialLinks.map((s, i) => {
                const Icon = s.icon
                return (
                  <AnimatedSection key={s.platform} delay={i * 100}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-dark flex items-start gap-5 hover:border-obg-orange/40 transition-colors duration-300 group"
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${s.color}20`, border: `1px solid ${s.color}30` }}
                      >
                        <Icon size={22} style={{ color: s.color }} />
                      </div>
                      <div>
                        <div className="text-white font-bold mb-1 group-hover:text-obg-orange transition-colors duration-200">
                          {s.platform}
                        </div>
                        <div className="text-obg-orange text-xs mb-2">{s.handle}</div>
                        <p className="text-obg-gray text-sm leading-relaxed">{s.description}</p>
                        <div className="mt-3 text-obg-orange text-xs font-semibold flex items-center gap-1">
                          Follow <ExternalLink size={10} />
                        </div>
                      </div>
                    </a>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </section>

        {/* Speaking CTA */}
        <section className="section bg-obg-blue">
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <SectionLabel>Speaking &amp; Media</SectionLabel>
              <h2 className="text-white mb-6">
                Want Jon or Dan on Your Podcast or Event?
              </h2>
              <p className="text-obg-gray text-lg mb-10">
                We love sharing what we&apos;ve learned building and scaling brands on Amazon. If
                you&apos;re looking for a knowledgeable, no-fluff guest for your podcast or event,
                reach out.
              </p>
              <a
                href="mailto:pr@onlinebrandgrowth.com?subject=Speaking%20%2F%20Media%20Inquiry"
                className="btn-primary text-lg px-9 py-4 inline-block"
              >
                Send a Media Inquiry
              </a>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
