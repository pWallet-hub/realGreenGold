'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  Wheat,
  Sprout,
  Flower2,
  Beef,
  Leaf,
  Egg,
  Recycle,
  type LucideIcon,
} from 'lucide-react';
import FounderStory from './FounderStory';

// Load Poppins font with specified weights matching site-wide standards
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
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
  icon: LucideIcon;
};

const plotSystems: PlotSystem[] = [
  {
    id: 'plot-a',
    code: 'PLOT-01',
    title: 'Avocado, Banana & Fresh Vegetables',
    category: 'Core Crop Canopy',
    summary: 'Our primary crop production combines avocado orchards, banana groves, and fresh vegetable beds. We manage soil cover, organic matter, and canopy layering to maintain long-term farm productivity.',
    highlights: ['Multi-tier canopy integration', 'Organic mulch soil protection', 'Continuous harvest planning'],
    image: '/assets/green.jpg',
    acreage: 'Primary Field',
    status: 'Active Harvesting',
    icon: Sprout,
  },
  {
    id: 'plot-b',
    code: 'PLOT-02',
    title: 'Bee Sanctuary & Pollinator Stewardship',
    category: 'Habitat Reserve',
    summary: 'Dedicated flowering borders and undisturbed habitat tailored for local bees and pollinators. We treat pollinator stewardship as an essential part of responsible farm management.',
    highlights: ['Native flowering forage', 'Pesticide-free buffer zones', 'Natural crop pollination'],
    image: '/assets/habitat.jpg',
    acreage: 'Habitat Zone',
    status: 'Monitored Sanctuary',
    icon: Flower2,
  },
  {
    id: 'plot-c',
    code: 'PLOT-03',
    title: 'Cows & Zero-Grazing System',
    category: 'Cattle & Soil Fertility',
    summary: 'Our small cattle unit connects livestock care directly with crop nutrient needs. Zero-grazing allows structured feeding and manure collection for managed aerobic composting.',
    highlights: ['Controlled fodder feeding', 'Aerobic manure composting', 'Organic matter recycling'],
    image: '/assets/cattle.jpg',
    acreage: 'Livestock Unit',
    status: 'Zero-Grazing Active',
    icon: Beef,
  },
  {
    id: 'plot-d',
    code: 'PLOT-04',
    title: 'Goats & Local Feed Resources',
    category: 'Browse & Protein',
    summary: 'Exploring the responsible use of local shrubs and leguminous forage browse. Our goats contribute animal protein and organic matter while testing sustainable feeding under Kirehe conditions.',
    highlights: ['Local forage utilisation', 'Diversified farm income', 'Targeted animal health care'],
    image: '/assets/protein.jpg',
    acreage: 'Forage Plot',
    status: 'Managed Unit',
    icon: Leaf,
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
    icon: Egg,
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
    icon: Recycle,
  },
];

export default function AboutUsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activePlot = plotSystems[activeIndex];
  const ActiveIcon = activePlot.icon;
  const total = plotSystems.length;
  const pad = (n: number) => String(n).padStart(2, '0');

  const goTo = (index: number, focus = false) => {
    const next = (index + total) % total;
    setActiveIndex(next);
    if (focus) tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      goTo(activeIndex + 1, true);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      goTo(activeIndex - 1, true);
    } else if (e.key === 'Home') {
      e.preventDefault();
      goTo(0, true);
    } else if (e.key === 'End') {
      e.preventDefault();
      goTo(total - 1, true);
    }
  };

  return (
    <section
      className={`${poppins.className} bg-[#F5F2E8] text-[#0F3D1E] selection:bg-[#FBC02D] selection:text-[#0F3D1E]`}
    >
      <style>{`
        @keyframes plotIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .plot-in { animation: plotIn 0.45s ease both; }
        @media (prefers-reduced-motion: reduce) { .plot-in { animation: none; } }
        .plot-scroll { scrollbar-width: none; }
        .plot-scroll::-webkit-scrollbar { display: none; }
      `}</style>

      {/* ═══ 1. Executive introduction ═══════════════════════════════════ */}
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="space-y-5 lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="flex items-center text-[#FBC02D]">
                <span className="h-[2px] w-8 bg-[#FBC02D]" />
                <Wheat size={22} strokeWidth={2} className="-ml-1" />
              </span>
              <span className="text-sm font-semibold text-[#1F8A3B] sm:text-base">
                Spatial Field Layout • Kirehe District
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-[1.12] tracking-tight text-[#0A2410] sm:text-4xl lg:text-5xl">
              An integrated farm where crops, livestock, and soil care support one another.
            </h2>
          </div>

          <div className="space-y-5 lg:col-span-5">
            <p className="text-justify text-[0.95rem] leading-relaxed text-[#4E594A]">
              At Real Green Gold Ltd, we produce avocado, banana, and fresh vegetables while building an integrated system where livestock, pollinators, and soil care work in balance.
            </p>

            <Link
              href="/initiatives"
              className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#0F3D1E] py-2 pl-7 pr-2 text-sm font-bold text-white transition-colors hover:bg-[#0B2E16]"
            >
              <span>Explore Ten Core Initiatives</span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FBC02D] text-[#0F3D1E] transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* ═══ 2. Plot selector (green inset panel) ════════════════════════ */}
      <div className="px-3 pb-14 sm:px-5 lg:px-6 lg:pb-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#0F3D1E] p-3 shadow-[0_18px_44px_rgba(15,61,30,0.28)] sm:rounded-[36px] sm:p-4">
          {/* faint dotted texture */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '26px 26px',
            }}
          />

          {/* dashed inner frame */}
          <div className="relative rounded-[22px] border border-dashed border-white/25 px-5 py-10 text-white sm:rounded-[28px] sm:px-10 lg:px-12 lg:py-12">

            {/* Panel header */}
            <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="flex items-center text-[#FBC02D]">
                    <span className="h-[2px] w-8 bg-[#FBC02D]" />
                    <Wheat size={22} strokeWidth={2} className="-ml-1" />
                  </span>
                  <span className="text-sm font-semibold text-[#FBC02D] sm:text-base">Field Management</span>
                </div>
                <h3 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                  What&rsquo;s growing, plot by plot
                </h3>
                <p className="text-sm text-white/75">Select a plot system to inspect field details</p>
              </div>

              {/* Counter + prev/next */}
              <div className="flex items-center gap-4">
                <p className="text-sm font-bold tabular-nums text-white/80">
                  <span className="text-2xl text-[#FBC02D]">{pad(activeIndex + 1)}</span> / {pad(total)}
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => goTo(activeIndex - 1)}
                    aria-label="Previous plot system"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-[#FBC02D] hover:bg-[#FBC02D] hover:text-[#0F3D1E]"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => goTo(activeIndex + 1)}
                    aria-label="Next plot system"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-[#FBC02D] hover:bg-[#FBC02D] hover:text-[#0F3D1E]"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-8">

              {/* ── Left: plot list ─────────────────────────────────── */}
              <div
                role="tablist"
                aria-label="Plot systems"
                aria-orientation="vertical"
                onKeyDown={onKeyDown}
                className="plot-scroll -mx-1 flex snap-x gap-3 overflow-x-auto px-1 pb-2 lg:col-span-5 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
              >
                {plotSystems.map((plot, i) => {
                  const isSelected = i === activeIndex;
                  const Icon = plot.icon;
                  return (
                    <button
                      key={plot.id}
                      ref={(el) => {
                        tabRefs.current[i] = el;
                      }}
                      id={`tab-${plot.id}`}
                      role="tab"
                      type="button"
                      aria-selected={isSelected}
                      aria-controls="plot-panel"
                      tabIndex={isSelected ? 0 : -1}
                      onClick={() => setActiveIndex(i)}
                      className={`group flex w-[270px] shrink-0 snap-start items-center gap-4 rounded-2xl p-4 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white lg:w-full ${
                        isSelected
                          ? 'bg-[#FBC02D] text-[#0F3D1E] shadow-lg'
                          : 'bg-white/[0.07] text-white hover:bg-white/[0.14]'
                      }`}
                    >
                      <span
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                          isSelected ? 'bg-[#0F3D1E] text-[#FBC02D]' : 'bg-[#FBC02D] text-[#5B2A06]'
                        }`}
                      >
                        <Icon size={22} strokeWidth={2} />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span
                          className={`block text-[11px] font-bold uppercase tracking-[0.14em] ${
                            isSelected ? 'text-[#0F3D1E]/70' : 'text-[#FBC02D]'
                          }`}
                        >
                          {plot.code} • {plot.category}
                        </span>
                        <span className="mt-0.5 block text-sm font-bold leading-snug sm:text-[0.95rem]">
                          {plot.title}
                        </span>
                      </span>

                      <ChevronRight
                        size={18}
                        className={`shrink-0 transition-transform duration-300 ${
                          isSelected ? 'translate-x-1 text-[#0F3D1E]' : 'text-white/50 group-hover:translate-x-1'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* ── Right: active plot showcase ─────────────────────── */}
              <div
                id="plot-panel"
                role="tabpanel"
                aria-labelledby={`tab-${activePlot.id}`}
                className="lg:col-span-7"
              >
                <article
                  key={activePlot.id}
                  className="plot-in rounded-[22px] bg-white p-4 text-[#0F3D1E] shadow-[0_14px_36px_rgba(0,0,0,0.22)] sm:p-5"
                >
                  {/* Image with overlapping icon */}
                  <div className="relative">
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#0C1E12]">
                      <Image
                        src={activePlot.image}
                        alt={activePlot.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A2410]/45 via-transparent to-transparent" />
                      <span className="absolute left-3 top-3 rounded-full bg-[#0C1E12]/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                        {activePlot.acreage}
                      </span>
                      <span className="absolute bottom-3 right-3 rounded-full bg-[#FBC02D] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#0F3D1E]">
                        {activePlot.status}
                      </span>
                    </div>

                    <span className="absolute -bottom-7 left-6 flex h-[68px] w-[68px] items-center justify-center rounded-full border-4 border-white bg-[#FBC02D] text-[#5B2A06] shadow-md">
                      <ActiveIcon size={28} strokeWidth={2} />
                    </span>
                  </div>

                  {/* Title & narrative */}
                  <div className="space-y-3 px-1 pt-11">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#8B7134]">
                      {activePlot.code} • {activePlot.category}
                    </p>
                    <h4 className="text-xl font-extrabold leading-snug text-[#0A2410] sm:text-2xl">
                      {activePlot.title}
                    </h4>
                    <p className="text-justify text-sm leading-relaxed text-[#4E594A] sm:text-[0.95rem]">
                      {activePlot.summary}
                    </p>
                  </div>

                  {/* Key integrations */}
                  <div className="mt-5 border-t border-dashed border-[#D8D2BE] px-1 pt-5">
                    <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0F3D1E]">
                      Key System Integrations
                    </p>
                    <div className="grid gap-2.5 sm:grid-cols-3">
                      {activePlot.highlights.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-2.5 rounded-xl bg-[#F5F2E8] p-3 text-xs font-medium leading-snug text-[#3A4239]"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1F8A3B] text-white">
                            <Check size={12} strokeWidth={3} />
                          </span>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer row */}
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-dashed border-[#D8D2BE] px-1 pt-4 text-sm">
                    <span className="font-semibold text-[#1F8A3B]">Real Green Gold Ltd • Kirehe Farm</span>
                    <Link
                      href="/initiatives"
                      className="group inline-flex items-center gap-2 font-bold text-[#0F3D1E] transition-colors hover:text-[#1F8A3B]"
                    >
                      <span className="border-b-2 border-[#FBC02D] pb-0.5">View All Initiatives</span>
                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integrated Founder Story Component */}
      <FounderStory />
    </section>
  );
}