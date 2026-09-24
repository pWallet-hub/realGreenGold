'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { Compass, ShieldCheck, ArrowUpRight, BookOpen, Droplets, Sprout, TrendingUp } from 'lucide-react';

// Load Poppins font with specified weights matching site-wide standards
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

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
    <section className={`${poppins.className} py-12 sm:py-16 bg-[#FAF9F6] text-[#0C1E12] border-y border-[#00A859]/20 selection:bg-[#E5B800] selection:text-[#0C1E12]`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-8">
        
        {/* ── 1. Section Header ───────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-[#00A859]/20 pb-3">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 border border-[#E5B800]/50 bg-[#0C1E12]/5 px-2.5 py-0.5 text-[9px] font-mono uppercase tracking-[0.15em] text-[#00A859]">
              <Compass size={11} className="text-[#00A859]" />
              <span>ABOUT US • FOUNDER REFLECTION</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0C1E12] tracking-tight">
              Where my entrepreneurship began
            </h2>
          </div>

          <p className="text-[10px] font-mono text-[#00A859] uppercase tracking-wider font-bold">
            Pacifique Nshimiyimana • Founder and CEO
          </p>
        </div>

        {/* ── 2. Founder Essay & Media Layout ────────────────────────────── */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Portrait & Timeline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="border border-[#00A859]/20 bg-white p-2.5 shadow-2xs">
              <div className="relative h-56 sm:h-64 w-full overflow-hidden border border-[#00A859]/15 bg-[#0C1E12]">
                <Image
                  src="/assets/Pacific.jpg"
                  alt="Pacifique Nshimiyimana, Founder and CEO at Real Green Gold Ltd farm in Kirehe"
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover object-top brightness-95"
                  priority
                />
                <div className="absolute top-2 left-2 bg-[#0C1E12]/90 border border-white/20 px-2 py-0.5 text-[#E5B800] text-[8px] font-mono font-bold uppercase tracking-wider">
                  FOUNDER PROFILE
                </div>
              </div>

              <div className="p-3 bg-[#FAF9F6] border-t border-[#00A859]/15 mt-2 flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#0C1E12]">
                    Pacifique Nshimiyimana
                  </h4>
                  <p className="text-[9px] font-mono uppercase tracking-wider text-[#00A859] font-bold">
                    Founder and CEO, Real Green Gold Ltd
                  </p>
                </div>
                <ShieldCheck size={16} className="text-[#00A859]" />
              </div>
            </div>

            <div className="border border-[#00A859]/20 bg-white p-4 space-y-3.5 shadow-2xs">
              <div className="flex items-center justify-between border-b border-[#00A859]/15 pb-2">
                <span className="text-[8.5px] font-mono font-bold uppercase tracking-[0.15em] text-[#E5B800]">
                  VERIFIED FARM HISTORY
                </span>
                <BookOpen size={13} className="text-[#00A859]" />
              </div>

              <div className="space-y-3 pt-0.5">
                {timelineMilestones.map((milestone, idx) => (
                  <div key={idx} className="space-y-0.5 border-l-2 border-[#00A859] pl-3 py-0.5">
                    <span className="text-[9px] font-mono font-bold text-[#00A859] uppercase tracking-wider block">
                      {milestone.year}
                    </span>
                    <p className="text-xs font-semibold text-[#0C1E12]">
                      {milestone.title}
                    </p>
                    <p className="text-[10.5px] text-[#5A6259] leading-relaxed text-justify font-normal">
                      {milestone.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            
            <div className="space-y-3.5 text-xs sm:text-sm leading-relaxed text-[#3A4239] font-normal">
              
              {/* Lead Paragraph with Elegant Green Drop-Cap */}
              <div className="relative">
                <p className="text-[#0C1E12] leading-relaxed text-justify">
                  <span className="float-left text-5xl font-semibold leading-none mr-2.5 mt-1 text-[#00A859]">
                    R
                  </span>
                  eal Green Gold Ltd was my first business and the starting point of my entrepreneurial journey. Farming in Kirehe taught me to look closely at the challenges people face and to ask what useful enterprise could grow from a practical solution.
                </p>
              </div>

              {/* Callout Box for Core Agronomic Questions */}
              <div className="my-3 border border-[#00A859]/20 bg-white p-4 shadow-2xs space-y-2.5">
                <div className="flex items-center gap-1.5 text-[#00A859] border-b border-[#00A859]/10 pb-1.5">
                  <Sprout size={14} />
                  <span className="text-[8.5px] font-mono font-bold uppercase tracking-wider text-[#E5B800]">
                    From Need to Practice
                  </span>
                </div>
                
                <p className="text-xs text-[#0C1E12] leading-relaxed text-justify italic font-normal">
                  &ldquo;A concern about water becomes a reason to explore irrigation. Questions about soil fertility lead us to examine manure management and composting. The need for dependable food supplies encourages us to think about production, quality, and markets together.&rdquo;
                </p>

                <div className="grid grid-cols-3 gap-2 pt-1 text-[9px] font-mono text-[#5A6259]">
                  <span className="flex items-center gap-1"><Droplets size={11} className="text-[#00A859]" /> Irrigation</span>
                  <span className="flex items-center gap-1"><Sprout size={11} className="text-[#00A859]" /> Fertility</span>
                  <span className="flex items-center gap-1"><TrendingUp size={11} className="text-[#00A859]" /> Markets</span>
                </div>
              </div>

              {/* Concluding Narrative Paragraphs */}
              <p className="leading-relaxed text-justify font-normal">
                These experiences shaped my direction as an entrepreneur and a leader. I want to recognize opportunities within community challenges, test ideas carefully, and work with people who can help turn them into useful services and livelihoods.
              </p>

              <p className="leading-relaxed text-justify font-normal">
                RGG remains a place where that approach becomes practical. My responsibility is to give direction, listen, build a capable team, and create room for others to lead. The story of the farm belongs to the people who work on it and to the relationships through which it continues to grow.
              </p>

            </div>

            {/* Bottom Sign-off Bar */}
            <div className="pt-4 border-t border-[#00A859]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-mono font-bold text-[#E5B800]">
                  Pacifique Nshimiyimana
                </p>
                <p className="text-[9.5px] font-mono text-[#5A6259] uppercase">
                  Founder and CEO, Real Green Gold Ltd
                </p>
              </div>

              <Link
                href="/about-us"
                className="inline-flex items-center justify-center gap-1.5 border border-[#00A859] bg-[#00A859] text-white px-5 py-2.5 text-[10.5px] font-mono font-bold uppercase tracking-wider hover:bg-[#008A47] transition-colors shadow-2xs"
              >
                <span>Read Full Story</span>
                <ArrowUpRight size={13} />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}