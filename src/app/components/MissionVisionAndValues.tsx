'use client';

import React from 'react';
import { Target, Compass, Droplets, Users, Sprout, ClipboardCheck } from 'lucide-react';

const operatingValues = [
  {
    icon: Droplets,
    title: 'Learn from real problems',
    description:
      'We start with a clear need and examine whether a proposed solution is practical and affordable.',
  },
  {
    icon: Users,
    title: 'Give people responsibility',
    description:
      'We value clear tasks, opportunities to learn, and contributions from people with different experiences.',
  },
  {
    icon: Sprout,
    title: 'Care for farm resources',
    description:
      'We consider soil, water, biodiversity, and animal welfare in our day-to-day decisions.',
  },
  {
    icon: ClipboardCheck,
    title: 'Show the evidence',
    description:
      'We aim to explain what is operating, what is being tested, and what remains an ambition.',
  },
];

export default function MissionVisionSection() {
  return (
    <section className="bg-[#FAF9F6] text-[#0C1E12] border-y border-[#00A859]/20 selection:bg-[#E5B800] selection:text-[#0C1E12]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 space-y-20">

        {/* ── 1. Purpose & Direction (High-Grade Print Journal Layout) ─────── */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-stretch">
          
          {/* Our Purpose */}
          <div className="md:col-span-6 border border-[#00A859]/20 bg-white p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-2xs">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#00A859]">
                <Target size={18} />
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#00A859]">
                  Our Purpose
                </span>
              </div>

              <h3
                className="text-2xl sm:text-3xl font-normal leading-tight text-[#0C1E12]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Creating enterprise &amp; shared value
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-[#3A4239] text-justify">
                To produce food and develop practical agricultural approaches that create business value, support local livelihoods, and care for the resources on which farming depends.
              </p>
            </div>

            <div className="pt-6 border-t border-[#00A859]/15 flex items-center justify-between text-[10px] font-mono text-[#00A859] font-bold uppercase tracking-wider">
              <span>Core Mandate</span>
              <span>Livelihood Care</span>
            </div>
          </div>

          {/* Our Direction */}
          <div className="md:col-span-6 border border-[#00A859]/20 bg-white p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-2xs">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#E5B800]">
                <Compass size={18} className="text-[#00A859]" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#E5B800]">
                  Our Direction
                </span>
              </div>

              <h3
                className="text-2xl sm:text-3xl font-normal leading-tight text-[#0C1E12]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Integrated learning &amp; demonstration
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-[#3A4239] text-justify">
                We are building a farm where production, learning, and enterprise development reinforce one another — documenting what works, improving what doesn&rsquo;t, and making useful learning accessible to customers, farmers, visitors, and collaborators.
              </p>
            </div>

            <div className="pt-6 border-t border-[#00A859]/15 flex items-center justify-between text-[10px] font-mono text-[#00A859] font-bold uppercase tracking-wider">
              <span>Open Learning</span>
              <span>Verified Practice</span>
            </div>
          </div>

        </div>

        {/* ── 3. Operating Principles / How We Work ─────────────────────────── */}
        <div className="space-y-8 pt-4 border-t border-[#00A859]/20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#00A859]/20 pb-4">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#E5B800]">
                Operating Principles
              </span>
              <h3
                className="text-2xl sm:text-3xl font-normal text-[#0C1E12] mt-0.5"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                How we work
              </h3>
            </div>
            <p className="text-xs font-mono text-[#5A6259]">
              Practical • Accountable • Evidence-Based
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {operatingValues.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <div 
                  key={val.title} 
                  className="border border-[#00A859]/20 bg-white p-6 space-y-4 shadow-2xs flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="p-2 border border-[#00A859]/30 bg-[#FAF9F6] text-[#00A859] w-fit rounded-xs">
                      <IconComponent size={18} strokeWidth={1.8} />
                    </div>
                    
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-[#0C1E12]" style={{ fontFamily: 'var(--font-display)' }}>
                        {val.title}
                      </h4>
                    </div>

                    <p className="text-xs leading-relaxed text-[#5A6259] text-justify">
                      {val.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#00A859]/10 text-[9px] font-mono text-[#E5B800] font-bold uppercase">
                    0{idx + 1} / Principle
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}