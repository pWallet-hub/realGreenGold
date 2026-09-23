'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Compass, ArrowUpRight, Check, ChevronRight } from 'lucide-react';
import FounderStory from './FounderStory';

type PlotSystem = {
  id: string;
  code: string;
  title: string;
  category: string;
  summary: string;
  highlights: string[];
  image: string;
  acreage: string;
  status: string;
};

const plotSystems: PlotSystem[] = [
  {
    id: 'plot-a',
    code: 'PLOT-01',
    title: 'Avocado, Banana & Fresh Vegetables',
    category: 'Core Crop Canopy',
    summary: 'Our primary crop production combines avocado orchards, banana groves, and fresh vegetable beds. We manage soil cover, organic matter, and canopy layering to maintain long-term farm productivity.',
    highlights: ['Multi-tier canopy integration', 'Organic mulch soil protection', 'Continuous harvest planning'],
    image: '/assets/home.jpg',
    acreage: 'Primary Field',
    status: 'Active Harvesting',
  },
  {
    id: 'plot-b',
    code: 'PLOT-02',
    title: 'Bee Sanctuary & Pollinator Stewardship',
    category: 'Habitat Reserve',
    summary: 'Dedicated flowering borders and undisturbed habitat tailored for local bees and pollinators. We treat pollinator stewardship as an essential part of responsible farm management.',
    highlights: ['Native flowering forage', 'Pesticide-free buffer zones', 'Natural crop pollination'],
    image: '/assets/home.jpg',
    acreage: 'Habitat Zone',
    status: 'Monitored Sanctuary',
  },
  {
    id: 'plot-c',
    code: 'PLOT-03',
    title: 'Cows & Zero-Grazing System',
    category: 'Cattle & Soil Fertility',
    summary: 'Our small cattle unit connects livestock care directly with crop nutrient needs. Zero-grazing allows structured feeding and manure collection for managed aerobic composting.',
    highlights: ['Controlled fodder feeding', 'Aerobic manure composting', 'Organic matter recycling'],
    image: '/assets/home.jpg',
    acreage: 'Livestock Unit',
    status: 'Zero-Grazing Active',
  },
  {
    id: 'plot-d',
    code: 'PLOT-04',
    title: 'Goats & Local Feed Resources',
    category: 'Browse & Protein',
    summary: 'Exploring the responsible use of local shrubs and leguminous forage browse. Our goats contribute animal protein and organic matter while testing sustainable feeding under Kirehe conditions.',
    highlights: ['Local forage utilisation', 'Diversified farm income', 'Targeted animal health care'],
    image: '/assets/home.jpg',
    acreage: 'Forage Plot',
    status: 'Managed Unit',
  },
  {
    id: 'plot-e',
    code: 'PLOT-05',
    title: 'Improved Local Chickens',
    category: 'Poultry Subsystem',
    summary: 'Improved local chickens provide eggs and meat while contributing to soil management. In designated zones, their foraging helps break up organic material and control insect larvae.',
    highlights: ['Rotational plot scratching', 'Natural insect larvae control', 'High-quality organic manure'],
    image: '/assets/home.jpg',
    acreage: 'Designated Zones',
    status: 'Rotational Access',
  },
  {
    id: 'plot-f',
    code: 'PLOT-06',
    title: 'Rabbits & Nutrient Cycling',
    category: 'Organic Inputs',
    summary: 'Rabbits provide a concentrated source of high-nitrogen manure and animal protein. Housing is managed with clean feeding routines and direct compost integration for vegetable beds.',
    highlights: ['High-nitrogen compost input', 'Hygiene & housing standards', 'Nutrient-rich soil beds'],
    image: '/assets/home.jpg',
    acreage: 'Small Livestock',
    status: 'Continuous Cycling',
  },
];

export default function AboutUsSection() {
  const [activePlot, setActivePlot] = useState<PlotSystem>(plotSystems[0]);

  return (
    <section className="bg-[#FAF9F6] text-[#0C1E12] selection:bg-[#E5B800] selection:text-[#0C1E12]">
      
      {/* ── 1. Executive Introduction ────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-20 pb-16 border-b border-[#00A859]/20">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 border border-[#E5B800]/50 bg-[#0C1E12]/5 backdrop-blur-xs px-3.5 py-1 text-xs font-mono uppercase tracking-[0.2em] text-[#00A859]">
              <Compass size={13} className="text-[#00A859]" />
              <span>Spatial Field Layout • Kirehe District</span>
            </div>
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.08] text-[#0C1E12]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              An integrated farm where crops, livestock, and soil care support one another.
            </h2>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <p className="text-sm leading-relaxed text-[#3A4239]">
              At Real Green Gold Ltd, we produce avocado, banana, and fresh vegetables while building an integrated system where livestock, pollinators, and soil care work in balance.
            </p>
            <div className="pt-2">
              <Link
                href="/initiatives"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#00A859] hover:text-[#0C1E12] transition-colors"
              >
                Explore Ten Core Initiatives <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. Architectural Interactive Plot Selector ───────────────────── */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 border-b border-[#00A859]/20">
        
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#00A859]/20 pb-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#E5B800]">
              Field Management
            </p>
            <h3 
              className="text-2xl sm:text-3xl text-[#0C1E12] mt-1"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              What&rsquo;s growing, plot by plot
            </h3>
          </div>
          <p className="text-xs text-[#5A6259] font-mono">
            Select a plot system to inspect field details
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Plot Selection List */}
          <div className="lg:col-span-5 space-y-2">
            {plotSystems.map((plot) => {
              const isSelected = activePlot.id === plot.id;
              return (
                <button
                  key={plot.id}
                  type="button"
                  onClick={() => setActivePlot(plot)}
                  className={`w-full text-left p-4 sm:p-5 border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'border-[#0C1E12] bg-[#0C1E12] text-[#FAF9F6] shadow-sm'
                      : 'border-[#00A859]/20 bg-white text-[#0C1E12] hover:border-[#00A859] hover:bg-[#FAF9F6]'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-mono font-bold tracking-widest px-2 py-0.5 border ${
                          isSelected
                            ? 'border-[#E5B800] text-[#E5B800] bg-black/20'
                            : 'border-[#00A859]/30 text-[#00A859] bg-[#FAF9F6]'
                        }`}
                      >
                        {plot.code}
                      </span>
                      <span
                        className={`text-[10px] font-mono uppercase tracking-wider ${
                          isSelected ? 'text-[#D2DACB]' : 'text-[#5A6259]'
                        }`}
                      >
                        {plot.category}
                      </span>
                    </div>
                    <h4
                      className={`text-base font-normal ${
                        isSelected ? 'text-[#FAF9F6]' : 'text-[#0C1E12]'
                      }`}
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {plot.title}
                    </h4>
                  </div>

                  <ChevronRight
                    size={16}
                    className={`transition-transform shrink-0 ml-2 ${
                      isSelected ? 'text-[#E5B800] translate-x-1' : 'text-[#5A6259]'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Plot Showcase */}
          <div className="lg:col-span-7 border border-[#00A859]/20 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div className="space-y-6">
              
              {/* Image Frame */}
              <div className="relative h-64 sm:h-72 w-full border border-[#00A859]/20 bg-[#0C1E12] overflow-hidden">
                <Image
                  src={activePlot.image}
                  alt={activePlot.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute top-3 left-3 bg-[#0C1E12]/90 border border-white/20 px-3 py-1 text-[#FAF9F6] text-[10px] font-mono uppercase tracking-widest font-bold">
                  {activePlot.acreage}
                </div>
                <div className="absolute bottom-3 right-3 bg-[#E5B800] text-[#0C1E12] px-3 py-1 text-[10px] font-mono uppercase tracking-widest font-bold">
                  {activePlot.status}
                </div>
              </div>

              {/* Title & Narrative */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-wider text-[#00A859]">
                  <span>{activePlot.code}</span>
                  <span>•</span>
                  <span>{activePlot.category}</span>
                </div>
                <h3 className="text-2xl font-normal text-[#0C1E12]" style={{ fontFamily: 'var(--font-display)' }}>
                  {activePlot.title}
                </h3>
                <p className="text-sm text-[#3A4239] leading-relaxed">
                  {activePlot.summary}
                </p>
              </div>

              {/* Integration Features */}
              <div className="space-y-2 pt-3 border-t border-[#00A859]/15">
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0C1E12]">
                  Key System Integrations
                </p>
                <div className="grid sm:grid-cols-3 gap-2">
                  {activePlot.highlights.map((point, idx) => (
                    <div key={idx} className="border border-[#00A859]/20 bg-[#FAF9F6] p-2.5 text-xs text-[#3A4239] font-medium flex items-center gap-1.5">
                      <Check size={13} className="text-[#00A859] shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="pt-6 mt-6 border-t border-[#00A859]/15 flex items-center justify-between text-xs font-mono font-bold text-[#00A859]">
              <span>Real Green Gold Ltd • Kirehe Farm</span>
              <Link href="/initiatives" className="hover:text-[#0C1E12] inline-flex items-center gap-1">
                View All Initiatives <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>

        </div>

      </div>

      <FounderStory />

    </section>
  );
}