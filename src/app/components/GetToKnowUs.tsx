// app/components/GetToKnowUs.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Quote } from 'lucide-react';

const GetToKnowUs = () => {
  return (
    <section className="py-20 bg-[#F3F2ED] border-y border-[#D9D4C6]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Visual Canvas */}
          <div className="relative h-[420px] w-full border border-[#D9D4C6] bg-[#1E2620] shadow-md">
            <Image
              src="/assets/home.jpg"
              alt="Pacifique Nshimiyimana at Real Green Gold Ltd Farm"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 border border-white/20 bg-[#1E2620]/90 p-3 backdrop-blur-xs text-white max-w-xs">
              <p className="text-[9px] uppercase tracking-widest text-[#A9812F]">Founder Reflection</p>
              <p className="text-xs italic mt-1 font-serif">&quot;Farming in Kirehe taught me to look closely at the challenges people face.&quot;</p>
            </div>
          </div>

          {/* Copy Context */}
          <div className="space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A9812F]">
              Founder &amp; Integrated Enterprise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold italic text-[#1E2620]" style={{ fontFamily: 'var(--font-display)' }}>
              Where Entrepreneurship Began
            </h2>
            <div className="w-16 h-0.5 bg-[#A9812F]"></div>

            <p className="text-xs md:text-sm text-[#5A6259] leading-relaxed">
              Real Green Gold Ltd was founded by Pacifique Nshimiyimana in Kirehe, Rwanda[cite: 5]. Our farm brings crop production together with livestock, pollinator stewardship, soil care, and practical agricultural learning[cite: 5].
            </p>

            <blockquote className="border-l-2 border-[#3F6B4F] pl-4 italic text-xs text-[#1E2620] bg-white p-3 border border-r-0 border-y-0">
              &quot;A concern about water becomes a reason to explore irrigation[cite: 5]. Questions about soil fertility lead us to examine manure management and composting[cite: 5].&quot;
            </blockquote>

            <div>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 border border-[#3F6B4F] bg-[#3F6B4F] text-white px-6 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-[#345A42] transition-colors"
              >
                Read Full Story
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GetToKnowUs;