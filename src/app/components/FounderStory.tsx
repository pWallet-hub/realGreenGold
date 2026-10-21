'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { Wheat, ShieldCheck, ArrowUpRight, BookOpen, Droplets, Sprout, TrendingUp, Quote } from 'lucide-react';

// Load Poppins font with specified weights matching site-wide standards
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

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

const needsToPractice = [
  { icon: Droplets, label: 'Irrigation' },
  { icon: Sprout, label: 'Fertility' },
  { icon: TrendingUp, label: 'Markets' },
];

/* ── Decorative avocado leaves ────────────────────────────────────────── */

// Pointed, elongated avocado leaf. Base sits at (0,0), tip at (0,-150).
const LEAF_PATH = 'M0 0 C26 -34 30 -92 0 -150 C-30 -92 -26 -34 0 0 Z';

// Centre vein + side veins
const LEAF_VEINS =
  'M0 -2 L0 -140 M0 -30 L15 -50 M0 -30 L-15 -50 M0 -58 L18 -80 M0 -58 L-18 -80 M0 -88 L14 -108 M0 -88 L-14 -108';

/* One leaf drawn inside an <svg>, positioned with transform values */
function LeafG({
  x = 0,
  y = 0,
  rotate = 0,
  scale = 1,
  fill = '#5FA83A',
}: {
  x?: number;
  y?: number;
  rotate?: number;
  scale?: number;
  fill?: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <path d={LEAF_PATH} fill={fill} />
      <path
        d={LEAF_VEINS}
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
    </g>
  );
}

/* A single leaf on its own */
function AvocadoLeaf({ className = '', fill = '#5FA83A' }: { className?: string; fill?: string }) {
  return (
    <svg
      viewBox="-40 -156 80 162"
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none absolute select-none ${className}`}
    >
      <LeafG fill={fill} />
    </svg>
  );
}

/* A curved branch carrying a cluster of leaves (base bottom-left, tip top-right) */
const SPRIG_LEAVES: [number, number, number, number, string][] = [
  [70, 250, -5, 0.62, '#4E9A2F'],
  [70, 250, 100, 0.58, '#5FA83A'],
  [120, 200, -8, 0.6, '#5FA83A'],
  [120, 200, 98, 0.56, '#4E9A2F'],
  [170, 150, -5, 0.55, '#4E9A2F'],
  [170, 150, 98, 0.5, '#5FA83A'],
  [215, 105, -2, 0.48, '#5FA83A'],
  [215, 105, 96, 0.44, '#4E9A2F'],
  [260, 60, 45, 0.5, '#6FB43F'],
];

function AvocadoSprig({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 320"
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none absolute select-none ${className}`}
    >
      <path
        d="M20 304 C80 240 150 170 262 58"
        stroke="#3B7A26"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      {SPRIG_LEAVES.map(([x, y, rotate, scale, fill], i) => (
        <LeafG key={i} x={x} y={y} rotate={rotate} scale={scale} fill={fill} />
      ))}
    </svg>
  );
}

export default function FounderStory() {
  return (
    <section
      className={`${poppins.className} relative isolate overflow-hidden bg-[#0F3D1E] py-16 text-white selection:bg-[#FBC02D] selection:text-[#0F3D1E] lg:py-24`}
    >
      {/* Subtle dotted texture + glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#FBC02D]/10 blur-3xl"
      />

      {/* Avocado leaf decoration (behind the content) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* big leafy branch, bottom left (cropped) */}
        <AvocadoSprig className="-bottom-12 -left-20 h-[380px] w-[380px] opacity-[0.15]" />

        {/* big leafy branch, top right (cropped, hangs down-left) */}
        <AvocadoSprig className="-right-20 -top-12 h-[340px] w-[340px] rotate-180 opacity-[0.12]" />

        {/* branch, lower right */}
        <AvocadoSprig className="-bottom-20 right-[10%] hidden h-[260px] w-[260px] -rotate-[35deg] opacity-[0.10] md:block" />

        {/* branch, upper middle-left */}
        <AvocadoSprig className="left-[38%] top-[2%] hidden h-[200px] w-[200px] rotate-[100deg] opacity-[0.08] lg:block" />

        {/* single leaves scattered around */}
        <AvocadoLeaf className="left-[2%] top-[34%] hidden h-[120px] w-[60px] rotate-[28deg] opacity-[0.12] md:block" />
        <AvocadoLeaf
          fill="#4E9A2F"
          className="right-[3%] top-[44%] hidden h-[150px] w-[75px] -rotate-[32deg] opacity-[0.12] md:block"
        />
        <AvocadoLeaf className="left-[48%] top-[56%] hidden h-[90px] w-[45px] rotate-[62deg] opacity-[0.09] lg:block" />
        <AvocadoLeaf
          fill="#6FB43F"
          className="right-[30%] top-[6%] h-[80px] w-[40px] -rotate-[20deg] opacity-[0.10]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl space-y-16 px-6 sm:px-10 lg:px-16">

        {/* ═══ Row 1: arch portrait + essay ═════════════════════════════ */}
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">

          {/* ── Left: arch-shaped portrait ───────────────────────────── */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[420px]">
              {/* offset outline for depth */}
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-[999px] rounded-b-[28px] border-2 border-[#FBC02D]/70"
              />

              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[999px] rounded-b-[28px] bg-[#0C2A16] shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
                <Image
                  src="/assets/Pacific.jpg"
                  alt="Pacifique Nshimiyimana, Founder and CEO at Real Green Gold Ltd farm in Kirehe"
                  fill
                  sizes="(max-width: 1024px) 420px, 40vw"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2410]/90 via-transparent to-transparent" />

                {/* Name plate */}
                <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FBC02D] text-[#5B2A06]">
                    <ShieldCheck size={22} />
                  </span>
                  <div>
                    <p className="text-base font-bold leading-tight">Pacifique Nshimiyimana</p>
                    <p className="text-xs font-medium text-white/80">Founder and CEO, Real Green Gold Ltd</p>
                  </div>
                </div>
              </div>

              {/* Founded pill */}
              <div className="absolute -right-2 top-[18%] rotate-[6deg] rounded-full bg-[#FBC02D] px-4 py-2 text-center shadow-lg sm:-right-6">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#5B2A06]">Founded</p>
                <p className="text-lg font-extrabold leading-none text-[#0F3D1E]">2015</p>
              </div>
            </div>
          </div>

          {/* ── Right: essay ─────────────────────────────────────────── */}
          <div className="space-y-6 lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="flex items-center text-[#FBC02D]">
                <span className="h-[2px] w-8 bg-[#FBC02D]" />
                <Wheat size={22} strokeWidth={2} className="-ml-1" />
              </span>
              <span className="text-base font-semibold text-[#FBC02D]">About Us • Founder Reflection</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
                Where my entrepreneurship began
              </h2>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/70">
                Pacifique Nshimiyimana • Founder and CEO
              </p>
            </div>

            {/* Lead paragraph (larger) */}
            <p className="text-justify text-lg leading-relaxed text-white/95">
              Real Green Gold Ltd was my first business and the starting point of my entrepreneurial journey. Farming in Kirehe taught me to look closely at the challenges people face and to ask what useful enterprise could grow from a practical solution.
            </p>

            {/* Pull quote */}
            <figure className="relative rounded-3xl border border-white/15 bg-white/[0.07] p-6 backdrop-blur-sm sm:p-7">
              <span className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#FBC02D] text-[#5B2A06] shadow-md">
                <Quote size={18} />
              </span>
              <figcaption className="mb-2 mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#FBC02D]">
                From Need to Practice
              </figcaption>
              <blockquote className="text-justify text-base italic leading-relaxed text-white">
                &ldquo;A concern about water becomes a reason to explore irrigation. Questions about soil fertility lead us to examine manure management and composting. The need for dependable food supplies encourages us to think about production, quality, and markets together.&rdquo;
              </blockquote>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {needsToPractice.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-2 rounded-2xl bg-white/10 py-3 text-center"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FBC02D] text-[#5B2A06]">
                      <Icon size={17} strokeWidth={2.2} />
                    </span>
                    <span className="text-xs font-semibold">{label}</span>
                  </div>
                ))}
              </div>
            </figure>

            {/* Closing paragraphs in two justified columns on wide screens */}
            <div className="gap-8 text-justify text-sm leading-relaxed text-white/85 md:columns-2">
              <p className="mb-4 break-inside-avoid md:mb-0">
                These experiences shaped my direction as an entrepreneur and a leader. I want to recognize opportunities within community challenges, test ideas carefully, and work with people who can help turn them into useful services and livelihoods.
              </p>
              <p className="break-inside-avoid md:mt-0">
                RGG remains a place where that approach becomes practical. My responsibility is to give direction, listen, build a capable team, and create room for others to lead. The story of the farm belongs to the people who work on it and to the relationships through which it continues to grow.
              </p>
            </div>

            {/* Sign-off + CTA */}
            <div className="flex flex-col gap-4 border-t border-white/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-base font-bold">Pacifique Nshimiyimana</p>
                <p className="text-xs font-medium uppercase tracking-wider text-white/70">
                  Founder and CEO, Real Green Gold Ltd
                </p>
              </div>

              <Link
                href="/about-us"
                className="group inline-flex w-fit items-center gap-4 rounded-full bg-white py-2 pl-7 pr-2 text-sm font-bold text-[#0F3D1E] transition-colors hover:bg-[#F5F2E8]"
              >
                <span>Read Full Story</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FBC02D] text-[#0F3D1E] transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* ═══ Row 2: connected timeline ════════════════════════════════ */}
        <div>
          <div className="mb-10 flex items-center justify-center gap-3 text-center">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FBC02D] text-[#5B2A06]">
              <BookOpen size={18} />
            </span>
            <div className="text-left">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FBC02D]">Verified Farm History</p>
              <p className="text-sm text-white/70">How the farm has grown, stage by stage</p>
            </div>
          </div>

          <div className="relative grid gap-10 md:grid-cols-3 md:gap-8">
            {/* horizontal connector (desktop) */}
            <div
              aria-hidden="true"
              className="absolute left-[16.66%] right-[16.66%] top-[21px] hidden border-t-2 border-dashed border-[#FBC02D]/50 md:block"
            />

            {timelineMilestones.map((m, i) => (
              <div key={m.title} className="relative pl-16 md:pl-0 md:pt-16">
                {/* vertical connector (mobile) */}
                {i < timelineMilestones.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute bottom-[-2.5rem] left-[21px] top-11 w-px bg-[#FBC02D]/40 md:hidden"
                  />
                )}

                {/* node */}
                <div className="absolute left-0 top-0 flex h-[44px] w-[44px] items-center justify-center rounded-full border-4 border-[#0F3D1E] bg-[#FBC02D] text-base font-extrabold text-[#0F3D1E] shadow-md md:left-1/2 md:-translate-x-1/2">
                  {i + 1}
                </div>

                <div className="h-full rounded-2xl border border-white/15 bg-white/[0.07] p-5 backdrop-blur-sm transition-colors duration-300 hover:border-[#FBC02D]/60">
                  <span className="inline-block rounded-full bg-[#FBC02D] px-3 py-1 text-xs font-bold text-[#0F3D1E]">
                    {m.year}
                  </span>
                  <h3 className="mt-3 text-lg font-bold leading-snug">{m.title}</h3>
                  <p className="mt-2 text-justify text-sm leading-relaxed text-white/80">{m.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}