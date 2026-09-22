// app/components/ServisSection.tsx
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Leaf, Sprout } from 'lucide-react';

const ServiceSection = () => {
  const services = [
    {
      title: "Avocado & Crop Value Chain",
      description: "Cultivating quality avocados, bananas, and fresh vegetables connected directly with market access and soil health.",
      image: "/assets/home.jpg",
      alt: "RGG Ltd Avocado and Crop Production in Kirehe",
      link: "/initiatives#avocado"
    },
    {
      title: "Agricultural Innovation & Learning",
      description: "Demonstrating irrigation, zero-grazing composting, and pollinator stewardship for small-scale producer communities.",
      image: "/assets/home.jpg",
      alt: "Agricultural Demonstration Plot at Real Green Gold Ltd",
      link: "/initiatives#tech-seed-plotting"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center space-y-2 mb-12">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A9812F]">
          Core Pillars
        </p>
        <h2 className="text-3xl md:text-4xl font-bold italic text-[#1E2620]" style={{ fontFamily: 'var(--font-display)' }}>
          Our Agricultural Services
        </h2>
        <div className="w-16 h-0.5 bg-[#A9812F] mx-auto mt-3"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="group border border-[#D9D4C6] bg-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="relative w-full h-64 mb-6 overflow-hidden bg-[#1E2620] border border-[#D9D4C6]">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold italic text-[#1E2620] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                {service.title}
              </h3>
              <p className="text-xs text-[#5A6259] leading-relaxed mb-6">
                {service.description}
              </p>
            </div>

            <Link
              href={service.link}
              className="inline-flex items-center gap-2 border border-[#1E2620] bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1E2620] hover:bg-[#1E2620] hover:text-white transition-colors self-start"
            >
              Explore Details <ArrowRight size={13} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;