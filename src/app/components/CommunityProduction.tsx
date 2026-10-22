'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Poppins, Caveat } from 'next/font/google';
import { Users, Wheat, Check, ChevronRight, ShieldCheck, Building2 } from 'lucide-react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

// Handwritten accent for the small eyebrow line
const caveat = Caveat({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
});

const checklist = [
  {
    title: 'Capacity Building',
    text: 'Hands-on agronomic support, proper harvesting techniques, soil fertility management, and seed selection guidance.',
  },
  {
    title: 'Market Access',
    text: 'Aggregation of local produce to meet commercial buyer standards and guarantee fair value returns for smallholders.',
  },
  {
    title: 'Value Chain',
    text: 'Quality grading & market aggregation',
  },
];

/* Fades + slides content in when it scrolls into view */
function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        shown
          ? 'translate-y-0 opacity-100'
          : 'translate-y-6 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100'
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function CommunityProduction() {
  return (
    <section
      className={`${poppins.className} relative overflow-hidden bg-[#FAF9F6] py-14 text-[#0C1E12] lg:py-16`}
    >
      {/* soft background glows */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-[#00A859]/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#FBC02D]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[1.85fr_1fr] lg:gap-10">

          {/* ═══ Left: heading, copy, button, photo ═══════════════════ */}
          <div className="space-y-6">
            <Reveal className="space-y-5">
              {/* Eyebrow row */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <p className={`${caveat.className} flex items-center gap-2 text-2xl font-semibold text-[#1E8A3C] sm:text-[1.7rem]`}>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0F3D1E] text-[#FBC02D]">
                    <Users size={15} />
                  </span>
                  Outgrower &amp; Community Network
                </p>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0F3D1E]/15 bg-white px-3 py-1 text-[11px] font-semibold text-[#0F3D1E]">
                  <Building2 size={12} className="text-[#00A859]" />
                  Kirehe Smallholder Producer Program
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-[#0F3D1E] sm:text-4xl lg:text-[2.9rem]">
                Small Scale Producer (SSP) Community Production
              </h2>

              {/* Copy */}
              <p className="max-w-3xl text-base leading-relaxed text-[#5A6259] lg:text-lg">
                Real Green Gold Ltd is dedicated to empowering small-scale producers by providing comprehensive training and support. They help SSPs enhance their agricultural practices, optimize production capabilities, and increase their market competitiveness, fostering sustainable development in local communities.
              </p>

              {/* Pill button */}
              <Link
                href="/about-us#community"
                className="group inline-flex items-center gap-6 rounded-full bg-[#0F3D1E] py-2 pl-8 pr-2 text-base font-semibold text-white shadow-md transition-colors hover:bg-[#0B3017]"
              >
                <span>Partner with SSP Network</span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FBC02D] text-[#0F3D1E] transition-transform duration-300 group-hover:translate-x-1">
                  <ChevronRight size={20} strokeWidth={2.5} />
                </span>
              </Link>
            </Reveal>

            {/* Photo */}
            <Reveal delay={120}>
              <div className="group relative h-56 w-full overflow-hidden rounded-[2rem] bg-[#0C1E12] shadow-lg sm:h-64 lg:h-72">
                <Image
                  src="/assets/home.jpg"
                  alt="Small Scale Producer agricultural work in Kirehe"
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover brightness-95 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 text-[11px] font-semibold text-white">
                  <span className="rounded-full bg-white/90 px-3 py-1 uppercase tracking-wider text-[#0F3D1E]">
                    Verified Field Work
                  </span>
                  <span className="uppercase tracking-wider drop-shadow">Kirehe Site</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ═══ Right: yellow stat card + dark checklist card ════════ */}
          <div className="space-y-6">
            {/* Yellow card */}
            <Reveal delay={80}>
              <div className="relative overflow-hidden rounded-[2rem] bg-[#F9C22E] p-8 text-[#3B1F06] shadow-lg transition-transform duration-300 hover:-translate-y-1">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-3 rounded-[1.5rem] border border-dashed border-[#3B1F06]/25"
                />
                <div className="relative flex items-start justify-between gap-4">
                  <p className="pt-1 text-lg font-medium">Program Focus &amp; Targets</p>
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#4A2408] text-[#FBC02D]">
                    <Wheat size={26} />
                  </span>
                </div>
                <p className="relative mt-3 text-4xl font-extrabold leading-tight tracking-tight text-[#4A2408] xl:text-[2.6rem]">
                  Local Impact
                </p>
                <p className="relative mt-3 text-base leading-relaxed">
                  Agronomic extension &amp; seed guidance
                </p>
              </div>
            </Reveal>

            {/* Dark green card */}
            <Reveal delay={200}>
              <div className="relative overflow-hidden rounded-[2rem] bg-[#0F4620] p-8 text-white shadow-lg">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-3 rounded-[1.5rem] border border-dashed border-white/20"
                />

                <p className="relative mb-6 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#FBC02D]">
                  Grassroots Inclusion Ledger
                </p>

                <ul className="relative space-y-5">
                  {checklist.map((item) => (
                    <li key={item.title} className="flex items-start gap-3.5">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FBC02D] text-[#0F3D1E]">
                        <Check size={15} strokeWidth={3} />
                      </span>
                      <div>
                        <p className="text-base font-semibold leading-snug">{item.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-white/70">{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="relative mt-6 flex items-center gap-3 border-t border-white/20 pt-5 text-sm font-semibold">
                  <ShieldCheck size={20} className="shrink-0 text-[#FBC02D]" />
                  <span>Verified Outgrower Community Initiative</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}