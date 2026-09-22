// components/AboutUsSection.tsx
import React from 'react';
import Image from 'next/image';
import { Sprout, ShieldCheck, Handshake, Compass } from 'lucide-react';

export default function AboutUsSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto space-y-20">
      
      {/* Integrated Farm Overview */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A9812F]" style={{ fontFamily: 'var(--font-mono)' }}>
              Real Green Gold Ltd
            </p>
            <h2 className="text-3xl md:text-4xl font-bold italic text-[#1E2620]" style={{ fontFamily: 'var(--font-display)' }}>
              Integrated Farming in Kirehe, Rwanda
            </h2>
            <div className="w-16 h-0.5 bg-[#A9812F] mt-2"></div>
          </div>

          <p className="text-xs md:text-sm text-[#5A6259] leading-relaxed">
            At Real Green Gold Ltd, we grow avocado, banana, and fresh vegetables in Kirehe, Rwanda. Our farm brings crop production together with livestock, pollinator stewardship, soil care, and practical agricultural learning. We work to understand how the different parts of a farm can support one another and create value for the people around it.
          </p>

          <p className="text-xs md:text-sm text-[#5A6259] leading-relaxed">
            For us, farming is a place to produce food, test ideas, and learn from everyday challenges. Questions about water, soil fertility, crop health, and market access guide the technologies and practices we explore. We seek approaches that make sense for our land, our team, and the communities we work with.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="border border-[#D9D4C6] bg-white p-3.5 rounded-xs flex items-start gap-3">
              <Sprout size={18} className="text-[#3F6B4F] shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] font-bold uppercase text-[#3F6B4F]" style={{ fontFamily: 'var(--font-mono)' }}>Core Crops</p>
                <p className="text-xs text-[#1E2620] mt-0.5">Avocado, Banana &amp; Fresh Produce</p>
              </div>
            </div>

            <div className="border border-[#D9D4C6] bg-white p-3.5 rounded-xs flex items-start gap-3">
              <ShieldCheck size={18} className="text-[#3F6B4F] shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] font-bold uppercase text-[#3F6B4F]" style={{ fontFamily: 'var(--font-mono)' }}>Integrated Livestock</p>
                <p className="text-xs text-[#1E2620] mt-0.5">Cows, Goats, Poultry &amp; Rabbits</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[460px] w-full border border-[#D9D4C6] bg-[#1E2620] shadow-sm">
          <Image
            src="/assets/home.jpg"
            alt="Real Green Gold Ltd Integrated Farm Layout in Kirehe"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute bottom-3 left-3 border border-white/20 bg-[#1E2620]/85 p-3 text-white backdrop-blur-xs max-w-xs">
            <p className="text-[9px] font-bold uppercase tracking-wider text-[#A9812F]" style={{ fontFamily: 'var(--font-mono)' }}>
              Farm Ecosystem
            </p>
            <p className="text-xs italic mt-0.5">
              Connecting crop care, zero-grazing compost, and beneficial pollinators.
            </p>
          </div>
        </div>
      </div>

      {/* Founder Message Section */}
      <div className="border border-[#D9D4C6] bg-[#F3F2ED] p-8 md:p-12 rounded-sm shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#E2DDCF] pb-6">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 rounded-full overflow-hidden border border-[#D9D4C6] bg-[#1E2620] shrink-0">
              <Image
                src="/assets/home.jpg"
                alt="Pacifique Nshimiyimana - Founder and CEO"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold italic text-[#1E2620]" style={{ fontFamily: 'var(--font-display)' }}>
                Pacifique Nshimiyimana
              </h3>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#A9812F]" style={{ fontFamily: 'var(--font-mono)' }}>
                Founder &amp; CEO, Real Green Gold Ltd
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 border border-[#3F6B4F]/30 bg-[#3F6B4F]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#3F6B4F]" style={{ fontFamily: 'var(--font-mono)' }}>
            <Handshake size={14} /> Where My Entrepreneurship Began
          </div>
        </div>

        <blockquote className="space-y-4 text-xs md:text-sm text-[#3A4239] leading-relaxed italic">
          <p>
            &ldquo;Real Green Gold Ltd was my first business and the starting point of my entrepreneurial journey. Farming in Kirehe taught me to look closely at the challenges people face and to ask what useful enterprise could grow from a practical solution.&rdquo;
          </p>
          <p>
            &ldquo;A concern about water becomes a reason to explore irrigation. Questions about soil fertility lead us to examine manure management and composting. The need for dependable food supplies encourages us to think about production, quality, and markets together.&rdquo;
          </p>
          <p>
            &ldquo;RGG remains a place where that approach becomes practical. My responsibility is to give direction, listen, build a capable team, and create room for others to lead. The story of the farm belongs to the people who work on it and to the relationships through which it continues to grow.&rdquo;
          </p>
        </blockquote>
      </div>

    </section>
  );
}