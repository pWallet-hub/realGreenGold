import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const highlights = [
  {
    title: 'Avocado and banana value chain',
    description: 'Producing quality crops with attention to farm planning, soil care and dependable supply for market demand.',
    image: '/assets/home.jpg',
    alt: 'Real Green Gold avocado and banana crop production',
    link: '/initiatives#avocado'
  },
  {
    title: 'Soil, compost and biodiversity',
    description: 'Combining composting, livestock integration and pollinator stewardship to strengthen long-term productivity.',
    image: '/assets/home.jpg',
    alt: 'Pollinator and soil care activity at Real Green Gold Ltd',
    link: '/initiatives#soil-care'
  },
  {
    title: 'Farm learning and agro-tourism',
    description: 'Opening the farm as a practical learning space for visitors, students and community groups.',
    image: '/assets/home.jpg',
    alt: 'Farm learning and community engagement at the RGG field site',
    link: '/initiatives#agro-tourism'
  },
  {
    title: 'Innovation and enterprise',
    description: 'Experimenting with useful agricultural systems that combine productivity, evidence and local opportunity.',
    image: '/assets/home.jpg',
    alt: 'Innovation and enterprise on the integrated RGG farm',
    link: '/initiatives#innovation'
  }
];

export default function FarmHighlights() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center space-y-2 mb-12">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A9812F]">
          Core focus areas
        </p>
        <h2 className="text-3xl md:text-4xl font-bold italic text-[#1E2620]" style={{ fontFamily: 'var(--font-display)' }}>
          What we are building on the farm
        </h2>
        <div className="w-16 h-0.5 bg-[#A9812F] mx-auto mt-3" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {highlights.map((item, index) => (
          <div key={index} className="group border border-[#D9D4C6] bg-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="relative w-full h-64 mb-6 overflow-hidden bg-[#1E2620] border border-[#D9D4C6]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold italic text-[#1E2620] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                {item.title}
              </h3>
              <p className="text-xs text-[#5A6259] leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            <Link
              href={item.link}
              className="inline-flex items-center gap-2 border border-[#1E2620] bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1E2620] hover:bg-[#1E2620] hover:text-white transition-colors self-start"
            >
              Explore details <ArrowRight size={13} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}