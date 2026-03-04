import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const team = [
  { name: 'Jon', role: 'Co-Founder & Lead Amazon Strategist', photo: '/team/Jon.png' },
  { name: 'Dan', role: 'Co-Founder & Ops Manager', photo: '/team/Dan.png' },
  { name: 'Juan', role: 'Advertising Specialist', photo: '/team/Juan.png' },
  { name: 'Theresa', role: 'Catalog Specialist', photo: '/team/Theresa.png' },
  { name: 'Czharina', role: 'Logistics Specialist', photo: '/team/Cha.png' },
  { name: 'Paulene', role: 'Brand Experience Specialist', photo: '/team/Paulene.png' },
]

export default function Team() {
  return (
    <section className="section bg-obg-blue" id="team">
      <div className="container-obg px-6 md:px-8 lg:px-12">

        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>The People Behind the Results</SectionLabel>
            <h2 className="text-white mb-4">Meet the Team</h2>
            <p className="text-obg-gray">
              Every brand partner gets direct access to our co-founders. No account managers,
              no hand-offs. Just experts who care.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {team.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 80}>
              <div className="card-dark text-center p-5 group">
                <div className="w-28 h-28 rounded-2xl overflow-hidden mx-auto mb-4 bg-obg-blue-dark border border-obg-blue-light/20 group-hover:border-obg-orange/40 transition-all duration-300 flex items-end justify-center">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={112}
                    height={112}
                    className="w-full h-full object-contain invert opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="text-white font-semibold text-sm mb-1">{member.name}</div>
                <div className="text-obg-gray text-sm leading-snug">{member.role}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  )
}
