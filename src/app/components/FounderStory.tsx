'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Compass, ShieldCheck, ArrowUpRight, BookOpen, Droplets, Sprout, TrendingUp } from 'lucide-react';

export default function FounderStory() {
  const timelineMilestones = [
    {
      year: 'Dec 2015',
      title: 'Foundation in Kirehe',
      caption: 'Real Green Gold Ltd established on family land in Kirehe, starting with half a hectare demonstration plot.',
    },
    {
      year: '2016–2018',
      title: 'Banana & Crop Integration',
      caption: 'Expanded to over 15 varieties of bananas, pairing fruit production with out-grower producer training.',
    },
    {
      year: '2019–Present',
      title: 'Multi-Crop & Soil Systems',
      caption: 'Incorporated avocados, fresh vegetables, zero-grazing livestock compost, and pollinator habitat stewardship.',
    },
  ];

  return (
    <section className="py-0 bg-[#FAF9F6] text-[#0C1E12] border-y border-[#00A859]/20 selection:bg-[#E5B800] selection:text-[#0C1E12]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-4">
        
        {/* ── 1. Section Header ───────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 border-b border-[#00A859]/20 pb-3">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 border border-[#E5B800]/50 bg-[#0C1E12]/5 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-[#00A859]">
              <Compass size={13} className="text-[#00A859]" />
              <span>About Us • Founder Reflection</span>
            </div>
            <h2 
              className="text-3xl sm:text-4xl font-normal text-[#0C1E12]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Where my entrepreneurship began
            </h2>
          </div>

          <p className="text-xs font-mono text-[#00A859] uppercase tracking-widest font-bold">
            Pacifique Nshimiyimana • Founder and CEO
          </p>
        </div>

        {/* ── 2. Founder Essay & Media Layout ────────────────────────────── */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Portrait & Timeline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="border border-[#00A859]/20 bg-white p-2 shadow-2xs">
              <div className="relative h-52 sm:h-60 w-full overflow-hidden border border-[#00A859]/15 bg-[#0C1E12]">
                <Image
                  src="/assets/Pacific.jpg"
                  alt="Pacifique Nshimiyimana, Founder and CEO at Real Green Gold Ltd farm in Kirehe"
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover object-top brightness-95"
                  priority
                />
              </div>

              <div className="p-3 bg-[#FAF9F6] border-t border-[#00A859]/15 mt-2 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#0C1E12]" style={{ fontFamily: 'var(--font-display)' }}>
                    Pacifique Nshimiyimana
                  </h4>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[#E5B800] font-semibold">
                    Founder and CEO, Real Green Gold Ltd
                  </p>
                </div>
                <ShieldCheck size={18} className="text-[#00A859]" />
              </div>
            </div>

            <div className="border border-[#00A859]/20 bg-white p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-[#00A859]/15 pb-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#E5B800]">
                  Verified Farm History
                </span>
                <BookOpen size={14} className="text-[#00A859]" />
              </div>

              <div className="space-y-2.5 pt-1">
                {timelineMilestones.map((milestone, idx) => (
                  <div key={idx} className="space-y-0.5 border-l-2 border-[#00A859] pl-3 py-0.5">
                    <span className="text-[10px] font-mono font-bold text-[#00A859] uppercase tracking-wider block">
                      {milestone.year}
                    </span>
                    <p className="text-xs font-bold text-[#0C1E12]">
                      {milestone.title}
                    </p>
                    <p className="text-[11px] text-[#5A6259] leading-relaxed">
                      {milestone.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#3A4239]">
              
              {/* Lead Paragraph with Elegant Green Drop-Cap */}
              <div className="relative pl-0">
                <p className="text-[#0C1E12] leading-[1.8] text-left">
                  <span 
                    className="float-left text-6xl font-normal leading-[0.8] mr-3.5 mt-1 text-[#00A859]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    R
                  </span>
                  eal Green Gold Ltd was my first business and the starting point of my entrepreneurial journey. Farming in Kirehe taught me to look closely at the challenges people face and to ask what useful enterprise could grow from a practical solution.
                </p>
              </div>

              {/* Callout Box for Core Agronomic Questions */}
              <div className="my-3 border border-[#00A859]/20 bg-white p-4 sm:p-5 shadow-2xs space-y-3">
                <div className="flex items-center gap-2 text-[#00A859] border-b border-[#00A859]/10 pb-2">
                  <Sprout size={16} />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E5B800]">
                    From Need to Practice
                  </span>
                </div>
                
                <p className="text-xs sm:text-sm text-[#0C1E12] leading-relaxed italic">
                  &ldquo;A concern about water becomes a reason to explore irrigation. Questions about soil fertility lead us to examine manure management and composting. The need for dependable food supplies encourages us to think about production, quality and markets together.&rdquo;
                </p>

                <div className="grid grid-cols-3 gap-2 pt-2 text-[10px] font-mono text-[#5A6259]">
                  <span className="flex items-center gap-1"><Droplets size={12} className="text-[#00A859]" /> Irrigation</span>
                  <span className="flex items-center gap-1"><Sprout size={12} className="text-[#00A859]" /> Fertility</span>
                  <span className="flex items-center gap-1"><TrendingUp size={12} className="text-[#00A859]" /> Markets</span>
                </div>
              </div>

              {/* Concluding Narrative Paragraphs */}
              <p className="leading-[1.8] text-left">
                These experiences shaped my direction as an entrepreneur and a leader. I want to recognize opportunities within community challenges, test ideas carefully and work with people who can help turn them into useful services and livelihoods.
              </p>

              <p className="leading-[1.8] text-left">
                RGG remains a place where that approach becomes practical. My responsibility is to give direction, listen, build a capable team and create room for others to lead. The story of the farm belongs to the people who work on it and to the relationships through which it continues to grow.
              </p>

            </div>

            {/* Bottom Sign-off Bar */}
            <div className="pt-4 border-t border-[#00A859]/20 flex items-center justify-between">
              <div>
                <p className="text-xs font-mono font-bold text-[#E5B800]">
                  Pacifique Nshimiyimana
                </p>
                <p className="text-[10px] font-mono text-[#5A6259] uppercase">
                  Founder and CEO, Real Green Gold Ltd
                </p>
              </div>

              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 border border-[#00A859] bg-[#00A859] text-white px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#008A47] transition-colors shadow-2xs"
              >
                Read Full Page <ArrowUpRight size={14} />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}