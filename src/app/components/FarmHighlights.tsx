'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Compass, Sprout, Droplets, Users, Lightbulb } from 'lucide-react';

const highlights = [
  {
    icon: Sprout,
    title: 'Avocado and banana value chain',
    description: 'Producing quality crops with attention to farm planning, soil care and dependable supply for market demand.',
    image: '/assets/home.jpg',
    alt: 'Real Green Gold avocado and banana crop production in Kirehe',
    link: '/initiatives#avocado',
    tag: 'Core Value Chain',
  },
  {
    icon: Droplets,
    title: 'Soil, compost and biodiversity',
    description: 'Combining composting, livestock integration and pollinator stewardship to strengthen long-term productivity.',
    image: '/assets/home.jpg',
    alt: 'Pollinator and soil care activity at Real Green Gold Ltd',
    link: '/initiatives#soil-care',
    tag: 'Resource Care',
  },
  {
    icon: Users,
    title: 'Farm learning and agro-tourism',
    description: 'Opening the farm as a practical learning space for visitors, students and community groups.',
    image: '/assets/home.jpg',
    alt: 'Farm learning and community engagement at the RGG field site',
    link: '/initiatives#agro-tourism',
    tag: 'Visitor Learning',
  },
  {
    icon: Lightbulb,
    title: 'Innovation and enterprise',
    description: 'Experimenting with useful agricultural systems that combine productivity, evidence and local opportunity.',
    image: '/assets/home.jpg',
    alt: 'Innovation and enterprise on the integrated RGG farm',
    link: '/initiatives#innovation',
    tag: 'System Testing',
  },
];

export default function FarmHighlights() {
  return (
    <section className="py-20 bg-[#FAF9F6] text-[#0C1E12] border-y border-[#00A859]/20 selection:bg-[#E5B800] selection:text-[#0C1E12]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-12">
        
        {/* ── 1. Section Header ───────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#00A859]/20 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 border border-[#E5B800]/50 bg-[#0C1E12]/5 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-[#00A859]">
              <Compass size={13} className="text-[#00A859]" />
              <span>Core Focus Areas</span>
            </div>
            <h2 
              className="text-3xl sm:text-4xl font-normal text-[#0C1E12]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              What we are building on the farm
            </h2>
          </div>

          <p className="text-xs font-mono text-[#5A6259]">
            Integrated Farm • Kirehe, Rwanda
          </p>
        </div>

        {/* ── 2. Editorial Grid ────────────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-8">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index} 
                className="group border border-[#00A859]/20 bg-white p-6 sm:p-8 shadow-2xs flex flex-col justify-between space-y-6 hover:border-[#00A859] transition-all duration-200"
              >
                <div className="space-y-5">
                  {/* Image Frame with Clean Overlay Tag */}
                  <div className="relative w-full h-60 overflow-hidden bg-[#0C1E12] border border-[#00A859]/15">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover brightness-95 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#0C1E12]/85 backdrop-blur-xs border border-white/20 px-2.5 py-1 text-white text-[9px] font-mono uppercase tracking-widest font-bold">
                      {item.tag}
                    </div>
                  </div>

                  {/* Title & Justified Description */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[#00A859]">
                      <IconComponent size={16} />
                      <h3 
                        className="text-xl font-bold text-[#0C1E12]" 
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs text-[#5A6259] leading-relaxed text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-4 border-t border-[#00A859]/10">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2 border border-[#00A859] bg-[#00A859] text-white px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#008A47] transition-colors shadow-2xs"
                  >
                    <span>Explore details</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}