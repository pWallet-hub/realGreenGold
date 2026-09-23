'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Compass, ArrowUpRight, Camera } from 'lucide-react';

const farmMomentsData = [
  {
    id: 1,
    title: 'Crop & Irrigation Observation',
    caption: 'Field monitoring across avocado, banana, and vegetable plots in Kirehe.',
    src: '/assets/home.jpg',
  },
  {
    id: 2,
    title: 'Soil & Compost Stewardship',
    caption: 'Organic matter management connecting livestock care with soil fertility.',
    src: '/assets/home.jpg',
  },
  {
    id: 3,
    title: 'Pollinator Habitat Care',
    caption: 'Flowering spaces and bee sanctuary management integrated with crop areas.',
    src: '/assets/home.jpg',
  },
  {
    id: 4,
    title: 'Community & Agronomic Learning',
    caption: 'Practical exchange and field visits with local farmers and collaborators.',
    src: '/assets/home.jpg',
  },
];

export default function FarmMoments() {
  return (
    <section className="py-16 bg-[#FAF9F6] text-[#0C1E12] border-y border-[#00A859]/20 selection:bg-[#E5B800] selection:text-[#0C1E12]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-12">
        
        {/* ── 1. Section Header Ledger ────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#00A859]/20 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 border border-[#E5B800]/50 bg-[#0C1E12]/5 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-[#00A859]">
              <Compass size={13} className="text-[#00A859]" />
              <span>Work, Participation &amp; Learning</span>
            </div>
            <h2 
              className="text-3xl sm:text-4xl font-normal text-[#0C1E12]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Farm moments that show the work behind the farm
            </h2>
          </div>

          <p className="text-xs font-mono text-[#00A859] uppercase tracking-widest font-bold">
            Documented Archives • Kirehe
          </p>
        </div>

        {/* ── 2. Editorial Split Layout ────────────────────────────────────── */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Justified Narrative & Direct Archive Action */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4 text-xs sm:text-sm text-[#3A4239] leading-relaxed text-justify">
              <p>
                Real Green Gold Ltd builds its work through visible practice: crop management, livestock care, irrigation observation, composting, environmental stewardship, and community learning. We document these moments so visitors, partners, and producers can see how the farm is evolving.
              </p>

              <p>
                The farm is not only a production site; it is also a working learning space where practical knowledge is shared with care and transparency.
              </p>
            </div>

            {/* Field Records Note */}
            <div className="border border-[#00A859]/20 bg-white p-4 space-y-1.5 shadow-2xs">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#E5B800] block">
                Field Practice Record
              </span>
              <p className="text-[11px] font-mono text-[#5A6259]">
                Photographs document daily activities, crop integration, and team practice on our Kirehe farm site.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 border border-[#00A859] bg-[#00A859] text-white px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#008A47] transition-colors shadow-2xs"
              >
                <span>View documented archives</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right Column: 2x2 Photo Grid with Monospaced Captions */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {farmMomentsData.map((moment) => (
              <div 
                key={moment.id}
                className="group border border-[#00A859]/20 bg-white p-2.5 shadow-2xs flex flex-col justify-between space-y-3 hover:border-[#00A859] transition-all duration-200"
              >
                <div className="relative h-44 sm:h-48 w-full overflow-hidden border border-[#00A859]/15 bg-[#0C1E12]">
                  <Image
                    src={moment.src}
                    alt={moment.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover brightness-95 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-[#0C1E12]/85 backdrop-blur-xs border border-white/20 px-2 py-0.5 text-white text-[9px] font-mono font-bold">
                    0{moment.id} / ARCHIVE
                  </div>
                </div>

                <div className="space-y-1 p-1">
                  <h3 
                    className="text-xs font-bold text-[#0C1E12] flex items-center justify-between"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    <span>{moment.title}</span>
                    <Camera size={12} className="text-[#00A859]" />
                  </h3>
                  <p className="text-[10px] font-mono text-[#5A6259] leading-tight">
                    {moment.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}