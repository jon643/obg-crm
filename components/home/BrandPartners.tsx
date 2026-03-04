import Image from 'next/image'

const brands = [
  { name: 'Cajun Two Step',  src: '/logos/clients/cajun2steps.png' },
  { name: 'Core Fiber',      src: '/logos/clients/core-fiber.png' },
  { name: 'Gold Collagen',   src: '/logos/clients/gold-collagen.png' },
  { name: 'Irn Bru',         src: '/logos/clients/irn-bru.png' },
  { name: 'Neutralyze',      src: '/logos/clients/neutralyze.png' },
  { name: 'Num Num',         src: '/logos/clients/num-num.png' },
  { name: 'Original Grain',  src: '/logos/clients/original-grain.png' },
  { name: 'PopFlex',         src: '/logos/clients/popflex.png' },
  { name: 'SGT Knots',       src: '/logos/clients/sgt-knots.png' },
  { name: 'Streetwise',      src: '/logos/clients/streetwise.png' },
  { name: 'Wavian',          src: '/logos/clients/wavian.png' },
]

export default function BrandPartners() {
  return (
    <section className="py-12 bg-obg-blue border-y border-obg-blue-light/20 overflow-hidden">
      <div className="container-obg px-6 mb-8 text-center">
        <p className="text-obg-gray text-sm tracking-widest uppercase font-semibold">
          Our Valued Brand Partners
        </p>
      </div>

      {/* Infinite marquee */}
      <div className="relative flex overflow-hidden">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #2c334e, transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #2c334e, transparent)' }}
        />

        {/* Scrolling track — duplicated for seamless loop */}
        <div className="flex gap-14 animate-marquee whitespace-nowrap items-center">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex items-center justify-center h-28 flex-shrink-0"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={240}
                height={240}
                className="h-24 w-auto max-w-[260px] object-contain opacity-75 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
