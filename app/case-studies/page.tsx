import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { Quote, ArrowRight, CheckCircle2 } from 'lucide-react'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Case Studies | Real Amazon Growth Results',
  description:
    'Real outcomes. Repeatable systems. Profitable Amazon growth. See how Online Brand Growth helped brands 30X revenue, triple contribution margins, and launch from $0 to $500K.',
  alternates: {
    canonical: 'https://www.onlinebrandgrowth.com/case-studies',
  },
  openGraph: {
    title: 'Amazon Growth Case Studies | Online Brand Growth',
    description: 'See how OBG helped brands 30X revenue, triple contribution margins, and launch from $0 to $500K on Amazon.',
    url: 'https://www.onlinebrandgrowth.com/case-studies',
  },
}

const caseStudies = [
  {
    id: 'baby-brand',
    tag: 'Baby / Feeding',
    model: 'Managed Services',
    headline: "Single-Product Baby Brand 30X'd Amazon Revenue in 18 Months",
    summary:
      "This baby brand had one hero product with strong customer love — but growth was capped by limited keyword coverage, under-optimized conversion assets, and a need to scale without turning the business into a \"spend more on ads\" treadmill. We treated the hero SKU like a business unit, rebuilt the PDP foundation for SEO + conversion, structured PPC for profitable scaling, and created a system that allowed revenue to expand while maintaining efficiency.",
    metrics: [
      { stat: '30X', label: 'Amazon revenue', detail: 'in 18 months' },
      { stat: '$300K+', label: 'monthly revenue', detail: 'at peak run-rate' },
      { stat: '4.2 ROAS', label: 'at scale', detail: 'investing ~$33K/month in ads' },
      { stat: '550+', label: 'reviews', detail: 'on the hero product' },
      { stat: '1 hero SKU', label: 'scaled', detail: '3 color variations' },
    ],
    quickFacts: [
      { label: 'Category', value: 'Baby / Feeding' },
      { label: 'Starting point', value: 'Strong product-market fit, but growth ceiling from weak Amazon fundamentals' },
      { label: 'Primary constraint', value: 'Single-product model (one hero SKU)' },
      { label: 'Timeline', value: '18 months' },
      { label: 'Catalog scope', value: '1 hero SKU + color variants' },
    ],
    situation: [
      "The brand had a product customers liked, but Amazon performance wasn't compounding.",
      "Keyword coverage and indexing weren't maximizing discoverability in a competitive category.",
      "The PDP wasn't doing enough selling compared to competitors (message hierarchy, imagery, and objections).",
      "The brand needed to scale responsibly — without sacrificing margin or becoming overly dependent on ads.",
    ],
    whatWeDid: [
      {
        title: 'Rebuilt the PDP to win both SEO and conversion (CRO)',
        bullets: [
          "Tightened the \"why buy\" message sequence: what it is → why it's different → why it matters for parents.",
          "Re-structured titles, bullets, and backend keyword strategy to strengthen indexing and relevancy.",
          "Upgraded the decision flow on the page (visual hierarchy, benefit framing, objections, and FAQs).",
        ],
      },
      {
        title: 'Built a keyword and category capture plan (not just "more keywords")',
        bullets: [
          "Mapped priority terms around real purchase intent (not just high search volume).",
          "Expanded coverage across top converting terms, long-tail intent, and competitor adjacency.",
        ],
      },
      {
        title: 'Re-architected PPC for controlled scaling',
        bullets: [
          "Built campaigns to validate winners, isolate waste, and scale what performed.",
          "Used structured testing to move from \"ad growth\" to \"system growth\" (ads supporting rank, not replacing it).",
        ],
      },
      {
        title: 'Added a scaling cadence that kept efficiency intact',
        bullets: [
          "Monthly iteration cycles: listing performance → keyword coverage → PPC efficiency → conversion lift.",
          "Budget expansion tied to conversion improvements and profitability guardrails.",
        ],
      },
    ],
    results: [
      "Achieved 30X revenue growth in 18 months, reaching $300K+ monthly revenue at peak run-rate.",
      "Scaled ad investment to ~$33K/month while maintaining 4.2 ROAS — growth without destroying efficiency.",
      "Built durable momentum around a single hero SKU — proof that single-SKU brands can scale when fundamentals are right.",
    ],
    pullQuote: {
      text: "OBG built the system behind our hero product. Growth stopped feeling like guesswork — and started feeling repeatable.",
      attribution: 'Founder, Baby Brand',
    },
    takeaway:
      "Single-product brands win when the PDP becomes a \"sales machine,\" keyword strategy is mapped to real intent, and PPC is structured to scale profitably — not just spend.",
  },
  {
    id: 'yoga-brand',
    tag: 'Yoga / Fitness',
    model: 'Managed Services',
    headline: 'Yoga & Fitness Brand Grew from $0 to $500,000 in Amazon Revenue in 12 Months',
    summary:
      "This brand had traction outside of Amazon, but the Amazon channel started at $0 — meaning no rank history, no conversion data, and no marketplace momentum. We built an Amazon-ready foundation (positioning + PDP conversion system), launched with a structured PPC plan to discover converting demand, then transitioned the channel toward organic growth by compounding relevance and conversion.",
    metrics: [
      { stat: '$0 → $500K', label: 'Amazon revenue', detail: 'in 12 months' },
      { stat: 'From scratch', label: 'Amazon channel', detail: 'to repeatable system' },
      { stat: 'Expanded', label: 'keyword coverage', detail: 'across high-intent search terms' },
      { stat: 'Optimized', label: 'conversion system', detail: 'PDP built for Amazon shoppers' },
      { stat: 'Scalable', label: 'campaign structure', detail: 'built to grow beyond launch' },
    ],
    quickFacts: [
      { label: 'Category', value: 'Yoga / Fitness' },
      { label: 'Starting point', value: '$0 Amazon revenue; brand was established outside Amazon' },
      { label: 'Primary challenge', value: 'Launching without becoming PPC-dependent' },
      { label: 'Timeline', value: '12 months' },
      { label: 'Catalog scope', value: 'Fitness assortment (multi-SKU)' },
    ],
    situation: [
      "No existing Amazon sales history or keyword rank — everything needed to be built from zero.",
      "DTC success didn't automatically translate to Amazon conversion (different shopper behavior, different objections).",
      "Early Amazon growth often becomes ad-only; the goal was to build a channel that could compound organically.",
      "The brand needed a roadmap that balanced speed, efficiency, and long-term durability.",
    ],
    whatWeDid: [
      {
        title: 'Repositioned the products for Amazon purchase intent',
        bullets: [
          "Built a clearer \"Amazon-style\" value proposition (fast clarity, strong differentiation, fewer assumptions).",
          "Structured page content to answer the top buying objections quickly (use-cases, quality, durability, fit/specs).",
        ],
      },
      {
        title: 'Built a conversion-first PDP system (SEO + CRO)',
        bullets: [
          "Optimized the on-page information hierarchy so shoppers could decide faster.",
          "Strengthened indexing by aligning copy with real search intent and category language.",
          "Improved creative and page structure to boost conversion rate and support organic momentum.",
        ],
      },
      {
        title: 'Launched PPC as a discovery and scaling engine (not a crutch)',
        bullets: [
          "Used PPC to quickly identify converting search terms and isolate what wasn't working.",
          "Scaled winners while tightening spend control, so growth wasn't fueled by waste.",
          "Expanded campaigns based on performance — so the catalog gained search footprint over time.",
        ],
      },
      {
        title: 'Established a repeatable operating cadence',
        bullets: [
          "Weekly: search term mining + campaign optimization + offer checks.",
          "Monthly: conversion and listing improvements + keyword map refinement.",
          "Quarterly: expansion strategy for new opportunities (new content, new SKUs, new term clusters).",
        ],
      },
    ],
    results: [
      "Grew from $0 to $500,000 in Amazon revenue in 12 months.",
      "Built a real Amazon channel — not a short-lived launch spike — by focusing on conversion and compounding relevance.",
      "Created a scalable structure the brand could keep building on as they expanded their catalog.",
    ],
    pullQuote: {
      text: "OBG gave us a real Amazon launch system. We didn't just get sales — we built a channel.",
      attribution: 'Founder, Fitness Brand',
    },
    takeaway:
      "The fastest sustainable growth happens when you treat Amazon like a system: market-ready positioning, conversion-first pages, and PPC designed to feed organic momentum — not replace it.",
  },
  {
    id: 'self-defense-brand',
    tag: 'Self Defense / Personal Safety',
    model: 'Managed Services',
    headline: 'Self Defense Brand Grew Contribution Profit Over 3X in 2.5 Years',
    summary:
      "When we took over this self-defense brand's Amazon channel, performance was being held back by weak PDP foundations, recurring product takedowns, inefficient PPC, and fragile profitability concentrated in one product family. We rebuilt the fundamentals (SEO + CRO + compliance + PPC), restored suppressed listings, reduced reseller disruption, and supported the launch of 20+ new products. Over time, the channel shifted from PPC-heavy revenue to primarily organic sales — driving a major profitability increase.",
    metrics: [
      { stat: '3.4X', label: 'contribution profit', detail: '$230K → $780K' },
      { stat: '+$550K', label: 'profit increase', detail: 'over 2.5 years' },
      { stat: '~80%', label: 'organic sales mix', detail: 'up from ~30–35%' },
      { stat: '~20%', label: 'PPC dependence', detail: 'down from ~70%' },
      { stat: '20+', label: 'new products launched', detail: 'to diversify profit' },
    ],
    quickFacts: [
      { label: 'Category', value: 'Self Defense / Personal Safety' },
      { label: 'Starting point', value: 'In-house team without deep channel expertise' },
      { label: 'Primary issues', value: 'Suppressed listings, PPC inefficiency, profit concentration, reseller disruption' },
      { label: 'Timeline', value: '2.5 years' },
      { label: 'Catalog scope', value: 'Multiple product families + 20+ launches' },
    ],
    situation: [
      "Product detail pages were not optimized for search and conversion.",
      "Amazon repeatedly took listings down; the team struggled to get them restored.",
      "PPC was overspending in the wrong places and missing profitable opportunities.",
      "Channel profit was dangerously concentrated: 90%+ from one product family, while others lost money.",
      "Unauthorized resellers repeatedly appeared, disrupting offer integrity and channel control.",
    ],
    whatWeDid: [
      {
        title: 'Rebuilt the foundation (SEO + CRO)',
        bullets: [
          "Reworked PDPs to improve indexing, relevancy, and conversion flow across the catalog.",
          "Standardized how each product communicates \"why buy\" so more SKUs contribute profit.",
        ],
      },
      {
        title: 'Fixed compliance and restored suppressed/taken-down pages',
        bullets: [
          "Built a repeatable system to resolve takedowns and stabilize the catalog.",
          "Reduced disruption to sales velocity by restoring pages faster and preventing repeat issues where possible.",
        ],
      },
      {
        title: 'Overhauled PPC to eliminate leakage and scale what worked',
        bullets: [
          "Rebuilt campaign structure around intent and profitability — less waste, more control.",
          "Protected winners, tightened targeting, and expanded converting keyword coverage.",
        ],
      },
      {
        title: 'Diversified the channel with 20+ new product launches',
        bullets: [
          "Collaborated on the launch of 20+ new products using a consistent Amazon launch playbook.",
          "Reduced dependency on one product family and improved catalog health and resilience.",
        ],
      },
      {
        title: 'Reduced reseller disruption',
        bullets: [
          "Tightened monitoring and control systems to limit repeated unauthorized reseller interference.",
        ],
      },
    ],
    results: [
      "Contribution profit grew from $230K to $780K over 2.5 years (3.4X increase, +$550K).",
      "Sales mix shifted from PPC-heavy (~70%) to primarily organic (~80%), improving durability and efficiency.",
      "The channel moved from fragile profitability to healthier, diversified contribution across more of the catalog.",
    ],
    pullQuote: {
      text: "OBG didn't just optimize ads — they rebuilt our Amazon business from the ground up. Profitability finally scaled once the foundations were fixed.",
      attribution: 'Director of Ecommerce, Self Defense Brand',
    },
    takeaway:
      "Profit growth at this level is rarely one tactic. It's the compounding effect of stable listings, conversion-first pages, accountable PPC, and a catalog strategy that diversifies profit.",
  },
]

function MetricTile({ stat, label, detail }: { stat: string; label: string; detail: string }) {
  return (
    <div className="bg-obg-blue-dark border border-obg-blue-light/30 rounded-xl p-4 text-center">
      <div className="text-2xl md:text-3xl font-bold text-gradient-orange mb-1 leading-none">{stat}</div>
      <div className="text-white text-xs font-semibold mb-1">{label}</div>
      <div className="text-obg-gray text-xs leading-snug">{detail}</div>
    </div>
  )
}

function CaseStudyBlock({ cs, index }: { cs: typeof caseStudies[0]; index: number }) {
  return (
    <article id={cs.id} className={`py-20 md:py-28 ${index % 2 === 0 ? 'bg-obg-blue-darker' : 'bg-obg-blue-dark'}`}>
      <div className="container-obg px-6 md:px-8 lg:px-12 max-w-5xl mx-auto">

        <AnimatedSection>
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-obg-orange border border-obg-orange/30 rounded-full px-3 py-1">{cs.tag}</span>
              <span className="text-xs font-semibold text-obg-gray border border-obg-blue-light/30 rounded-full px-3 py-1">{cs.model}</span>
            </div>
            <h2 className="text-white text-balance">{cs.headline}</h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={80}>
          <p className="text-obg-gray text-base leading-relaxed mb-12 max-w-3xl">{cs.summary}</p>
        </AnimatedSection>

        <AnimatedSection delay={120}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-14">
            {cs.metrics.map((m) => <MetricTile key={m.label} {...m} />)}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <AnimatedSection direction="left" delay={160}>
            <div className="card-dark h-full">
              <h3 className="text-white font-bold text-base mb-6">Quick Facts</h3>
              <dl className="space-y-4">
                {cs.quickFacts.map((f) => (
                  <div key={f.label}>
                    <dt className="text-obg-orange text-xs font-semibold uppercase tracking-wider mb-0.5">{f.label}</dt>
                    <dd className="text-obg-gray text-sm">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={200}>
            <div className="card-dark h-full">
              <h3 className="text-white font-bold text-base mb-6">The Situation</h3>
              <ul className="space-y-3">
                {cs.situation.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-obg-gray text-sm">
                    <span className="dot-orange mt-1.5 flex-shrink-0" />{s}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={240}>
          <div className="mb-12">
            <h3 className="text-white font-bold text-xl mb-6">What We Did</h3>
            <div className="space-y-5">
              {cs.whatWeDid.map((step, i) => (
                <div key={step.title} className="card-dark">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-obg-orange/15 border border-obg-orange/30 flex items-center justify-center text-obg-orange text-xs font-bold">{i + 1}</span>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-3">{step.title}</h4>
                      <ul className="space-y-2">
                        {step.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2.5 text-obg-gray text-sm">
                            <span className="dot-orange mt-1.5 flex-shrink-0" />{b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={280}>
          <div className="mb-10">
            <h3 className="text-white font-bold text-xl mb-5">Results</h3>
            <div className="card-dark border-obg-orange/20 bg-gradient-to-b from-obg-orange/5 to-transparent">
              <ul className="space-y-4">
                {cs.results.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-obg-offwhite text-sm">
                    <CheckCircle2 size={18} className="text-obg-orange flex-shrink-0 mt-0.5" />{r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={320}>
          <div className="mb-10 pl-6 border-l-4 border-obg-orange">
            <Quote size={20} className="text-obg-orange/40 mb-2" />
            <p className="text-obg-offwhite text-lg italic leading-relaxed mb-3">&ldquo;{cs.pullQuote.text}&rdquo;</p>
            <p className="text-obg-gray text-sm">— {cs.pullQuote.attribution}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={360}>
          <div className="card-glass border-obg-blue-light/20 p-6">
            <p className="text-obg-orange text-xs font-semibold uppercase tracking-widest mb-2">Key Takeaway</p>
            <p className="text-white text-sm leading-relaxed font-medium">{cs.takeaway}</p>
          </div>
        </AnimatedSection>

      </div>
    </article>
  )
}

export default function CaseStudiesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.onlinebrandgrowth.com' },
          { name: 'Case Studies', url: 'https://www.onlinebrandgrowth.com/case-studies' },
        ]}
      />
      <Header />
      <main>
        <section className="relative bg-gradient-hero pt-32 pb-20 overflow-hidden">
          <div aria-hidden className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, #ff795e 0%, transparent 70%)' }} />
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-4xl mx-auto text-center relative z-10">
            <AnimatedSection>
              <SectionLabel>Proven Results</SectionLabel>
              <h1 className="text-white mb-6">Case Studies</h1>
              <p className="text-obg-gray text-xl leading-relaxed mb-4 max-w-2xl mx-auto">Real outcomes. Repeatable systems. Profitable Amazon growth.</p>
              <p className="text-obg-gray/80 text-base leading-relaxed max-w-3xl mx-auto">At Online Brand Growth, we operate Amazon as a business system — improving traffic quality, conversion, profitability, and operational stability. Below are three examples of what that looks like in practice (Managed Services model).</p>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
                {caseStudies.map((cs) => (
                  <a key={cs.id} href={`#${cs.id}`} className="text-sm text-obg-gray border border-obg-blue-light/40 hover:border-obg-orange hover:text-obg-orange rounded-full px-4 py-2 transition-all duration-200 flex items-center gap-2">
                    {cs.tag} <ArrowRight size={14} />
                  </a>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {caseStudies.map((cs, i) => <CaseStudyBlock key={cs.id} cs={cs} index={i} />)}

        <section className="section bg-obg-blue border-t border-obg-blue-light/20">
          <div className="container-obg px-6 md:px-8 lg:px-12 max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <SectionLabel>Ready to Scale?</SectionLabel>
              <h2 className="text-white mb-4">Want Results Like This?</h2>
              <p className="text-obg-gray text-lg leading-relaxed mb-10">If you&apos;re looking for a team that can operate your Amazon channel like a business system — not a collection of tactics — let&apos;s talk.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="https://app.usemotion.com/meet/dan-balda/obg-intro-45" target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">Book a Strategy Call</Link>
                <Link href="/#book-call" className="btn-secondary text-base px-8 py-4">Request an Amazon Growth Audit</Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
