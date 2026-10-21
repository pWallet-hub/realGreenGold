'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Wheat, Sprout, Droplets, Users, Lightbulb } from 'lucide-react';

const SLIDE_INTERVAL_MS = 3000;

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

/* Long, thin arrow like the reference (line + open arrowhead) */
function LongArrow({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      width="60"
      height="16"
      viewBox="0 0 60 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ transform: direction === 'left' ? 'scaleX(-1)' : undefined }}
    >
      <path d="M2 9 C 20 7.5, 38 8.5, 57 8" />
      <path d="M50 2 L 57 8 L 50 14" />
    </svg>
  );
}

export default function FarmHighlights() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-card]');
    const amount = (card?.offsetWidth ?? 320) + 24;

    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    const atStart = el.scrollLeft <= 4;

    // Loop around at either end
    if (dir === 1 && atEnd) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (dir === -1 && atStart) {
      el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: dir * amount, behavior: 'smooth' });
    }
  };

  // Auto-slide every 3 seconds (pauses on hover/focus/touch, respects reduced motion)
  useEffect(() => {
    if (paused) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const id = window.setInterval(() => scrollByCard(1), SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section className="border-y border-[#D8D2BE] bg-[#F5F2E8] py-16 text-[#0F3D1E] selection:bg-[#FBC02D] selection:text-[#0F3D1E] lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,460px)_minmax(0,1fr)] lg:gap-12">

          {/* ── Left: heading column ───────────────────────────────────── */}
          <div className="flex flex-col">
            <div className="space-y-4">
              {/* Label with golden wheat accent */}
              <div className="flex items-center gap-3">
                <span className="flex items-center text-[#FBC02D]">
                  <span className="h-[2px] w-8 bg-[#FBC02D]" />
                  <Wheat size={22} strokeWidth={2} className="-ml-1" />
                </span>
                <span className="text-base font-semibold text-[#1F8A3B]">Core Focus Areas</span>
              </div>

              <h2
                className="text-3xl font-extrabold leading-[1.15] text-[#0F3D1E] sm:text-4xl lg:text-[2.6rem]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                What we are building on the farm
              </h2>

              <p className="max-w-md text-justify text-sm leading-relaxed text-[#6F7466]">
                Integrated Farm • Kirehe, Rwanda
              </p>

              <Link
                href="/initiatives"
                className="group inline-flex items-center gap-4 rounded-full bg-[#0F3D1E] py-2 pl-7 pr-2 text-sm font-bold text-white transition-colors hover:bg-[#0B2E16]"
              >
                <span>Explore details</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FBC02D] text-[#0F3D1E] transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight size={16} strokeWidth={2.5} />
                </span>
              </Link>
            </div>

            {/* Prev / next arrows (manual control still available) */}
            <div className="mt-10 flex items-center justify-start gap-10 text-[#0F3D1E] lg:mt-auto lg:justify-end lg:pt-10">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="Previous focus area"
                className="transition-transform duration-200 hover:-translate-x-1"
              >
                <LongArrow direction="left" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="Next focus area"
                className="transition-transform duration-200 hover:translate-x-1"
              >
                <LongArrow direction="right" />
              </button>
            </div>
          </div>

          {/* ── Right: auto-sliding cards ──────────────────────────────── */}
          <div
            ref={trackRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {highlights.map((item) => {
              const IconComponent = item.icon;
              return (
                <article
                  key={item.title}
                  data-card
                  className="group flex w-[82%] shrink-0 snap-start flex-col overflow-hidden rounded-[22px] bg-[#0F4620] shadow-[0_10px_30px_rgba(15,70,32,0.18)] sm:w-[300px] lg:w-[310px]"
                >
                  {/* Image + overlapping yellow icon */}
                  <div className="relative h-[250px] w-full overflow-hidden bg-[#0C1E12] sm:h-[270px]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 82vw, 310px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-[#0C1E12]/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                      {item.tag}
                    </div>
                    <div className="absolute bottom-7 left-6 flex h-[84px] w-[84px] items-center justify-center rounded-full bg-[#FBC02D] text-[#5B2A06] shadow-md">
                      <IconComponent size={36} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Green body */}
                  <div className="flex flex-1 flex-col p-7">
                    <h3
                      className="mb-3 text-xl font-bold leading-snug text-white"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {item.title}
                    </h3>
                    <p className="mb-5 flex-1 text-justify text-sm leading-relaxed text-white/90">
                      {item.description}
                    </p>
                    <Link
                      href={item.link}
                      className="inline-block self-start border-b-2 border-[#FBC02D] pb-0.5 text-sm font-bold text-white transition-colors hover:text-[#FBC02D]"
                    >
                      Explore details
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}