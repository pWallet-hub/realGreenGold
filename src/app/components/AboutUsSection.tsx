'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { Compass, ArrowUpRight, Check, ChevronRight } from 'lucide-react';
import FounderStory from './FounderStory';

// Load Poppins font with specified weights matching site-wide standards
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

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
    <section className={`${poppins.className} bg-[#FAF9F6] text-[#0C1E12] selection:bg-[#E5B800] selection:text-[#0C1E12]`}>
      
      {/* ── 1. Executive Introduction ────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 sm:py-16 border-b border-[#00A859]/20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 border border-[#E5B800]/50 bg-[#0C1E12]/5 px-2.5 py-0.5 text-[9px] font-mono uppercase tracking-[0.15em] text-[#00A859]">
              <Compass size={11} className="text-[#00A859]" />
              <span>SPATIAL FIELD LAYOUT • KIREHE DISTRICT</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0C1E12] leading-tight tracking-tight">
              An integrated farm where crops, livestock, and soil care support one another.
            </h2>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs sm:text-sm text-[#3A4239] leading-relaxed text-justify font-normal">
              At Real Green Gold Ltd, we produce avocado, banana, and fresh vegetables while building an integrated system where livestock, pollinators, and soil care work in balance.
            </p>
            <div className="pt-1">
              <Link
                href="/initiatives"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#00A859] hover:text-[#0C1E12] transition-colors"
              >
                <span>Explore Ten Core Initiatives</span>
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. Architectural Interactive Plot Selector ───────────────────── */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 sm:py-16 border-b border-[#00A859]/20">
        
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#00A859]/20 pb-3">
          <div className="space-y-1">
            <span className="text-[8.5px] font-mono font-bold uppercase tracking-[0.15em] text-[#E5B800] block">
              FIELD MANAGEMENT
            </span>
            <h3 className="text-lg sm:text-xl font-semibold text-[#0C1E12]">
              What&rsquo;s growing, plot by plot
            </h3>
          </div>
          <span className="text-[10px] text-[#5A6259] font-mono">
            Select a plot system to inspect field details
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Interactive Plot Selection List */}
          <div className="lg:col-span-5 space-y-2">
            {plotSystems.map((plot) => {
              const isSelected = activePlot.id === plot.id;
              return (
                <button
                  key={plot.id}
                  type="button"
                  onClick={() => setActivePlot(plot)}
                  className={`w-full text-left p-3.5 sm:p-4 border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'border-[#0C1E12] bg-[#0C1E12] text-[#FAF9F6] shadow-2xs'
                      : 'border-[#00A859]/20 bg-white text-[#0C1E12] hover:border-[#00A859] hover:bg-[#FAF9F6]'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[9px] font-mono font-bold tracking-widest px-2 py-0.5 border ${
                          isSelected
                            ? 'border-[#E5B800] text-[#E5B800] bg-white/5'
                            : 'border-[#00A859]/30 text-[#00A859] bg-[#FAF9F6]'
                        }`}
                      >
                        {plot.code}
                      </span>
                      <span
                        className={`text-[9px] font-mono uppercase tracking-wider ${
                          isSelected ? 'text-[#FAF9F6]/70' : 'text-[#5A6259]'
                        }`}
                      >
                        {plot.category}
                      </span>
                    </div>
                    <h4 className={`text-xs sm:text-sm font-semibold ${
                      isSelected ? 'text-[#FAF9F6]' : 'text-[#0C1E12]'
                    }`}>
                      {plot.title}
                    </h4>
                  </div>

                  <ChevronRight
                    size={15}
                    className={`transition-transform shrink-0 ml-2 ${
                      isSelected ? 'text-[#E5B800] translate-x-1' : 'text-[#5A6259]'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Plot Showcase */}
          <div className="lg:col-span-7 border border-[#00A859]/20 bg-white p-5 sm:p-6 flex flex-col justify-between shadow-2xs space-y-6">
            <div className="space-y-4">
              
              {/* Image Frame */}
              <div className="relative h-56 sm:h-64 w-full border border-[#00A859]/20 bg-[#0C1E12] overflow-hidden">
                <Image
                  src={activePlot.image}
                  alt={activePlot.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover brightness-95"
                  priority
                />
                <div className="absolute top-2 left-2 bg-[#0C1E12]/90 border border-white/20 px-2 py-0.5 text-[#FAF9F6] text-[8px] font-mono uppercase tracking-widest font-bold">
                  {activePlot.acreage}
                </div>
                <div className="absolute bottom-2 right-2 bg-[#E5B800] text-[#0C1E12] px-2 py-0.5 text-[8px] font-mono uppercase tracking-widest font-bold">
                  {activePlot.status}
                </div>
              </div>

              {/* Title & Narrative */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[9px] font-mono font-bold uppercase tracking-wider text-[#00A859]">
                  <span>{activePlot.code}</span>
                  <span>•</span>
                  <span>{activePlot.category}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#0C1E12]">
                  {activePlot.title}
                </h3>
                <p className="text-xs text-[#3A4239] leading-relaxed text-justify font-normal">
                  {activePlot.summary}
                </p>
              </div>

              {/* Integration Features */}
              <div className="space-y-2 pt-2 border-t border-[#00A859]/15">
                <span className="text-[8.5px] font-mono font-bold uppercase tracking-wider text-[#0C1E12] block">
                  KEY SYSTEM INTEGRATIONS
                </span>
                <div className="grid sm:grid-cols-3 gap-2">
                  {activePlot.highlights.map((point, idx) => (
                    <div key={idx} className="border border-[#00A859]/20 bg-[#FAF9F6] p-2 text-[10.5px] text-[#3A4239] font-normal flex items-center gap-1.5 leading-tight">
                      <Check size={12} className="text-[#00A859] shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-[#00A859]/15 flex items-center justify-between text-[10px] font-mono font-bold text-[#00A859]">
              <span>Real Green Gold Ltd • Kirehe Farm</span>
              <Link href="/initiatives" className="hover:text-[#0C1E12] inline-flex items-center gap-1">
                <span>View All Initiatives</span>
                <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>

        </div>

      </div>

      {/* Integrated Founder Story Component */}
      <FounderStory />

    </section>
  );
}