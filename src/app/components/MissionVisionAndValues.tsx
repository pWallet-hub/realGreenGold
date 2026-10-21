'use client';

import React, { useRef, useState } from 'react';
import { Poppins } from 'next/font/google';
import {
  Target,
  Compass,
  ClipboardCheck,
  Droplets,
  Users,
  Sprout,
  ChevronDown,
  Check,
  type LucideIcon,
} from 'lucide-react';

// Same font and palette as the rest of the site
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

/* ── Content ─────────────────────────────────────────────────────────── */

type Pillar = {
  icon: LucideIcon;
  title: string;
  summary: string;
  points: string[];
};

const pillars: Pillar[] = [
  {
    icon: Target,
    title: 'Our purpose',
    summary:
      'To produce food and develop practical agricultural approaches that create business value, support local livelihoods, and care for the resources on which farming depends.',
    points: ['Enterprise value', 'Local livelihoods', 'Resource care'],
  },
  {
    icon: Compass,
    title: 'Our direction',
    summary:
      'We are building a farm where production, learning, and enterprise development reinforce one another, making useful learning accessible to customers, farmers, visitors, and collaborators.',
    points: ['Document what works', 'Improve what doesn’t', 'Share the learning'],
  },
  {
    icon: ClipboardCheck,
    title: 'Our approach',
    summary:
      'We aim to be practical, accountable, and evidence-based, explaining what is operating, what is being tested, and what remains an ambition.',
    points: ['Practical', 'Accountable', 'Evidence-based'],
  },
];

const principles = [
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

/* ── Pillar card: spotlight follows cursor, "Read more" expands ──────── */

function PillarCard({ pillar }: { pillar: Pillar }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const Icon = pillar.icon;
  const panelId = `panel-${pillar.title.replace(/\s+/g, '-').toLowerCase()}`;

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--x', `${e.clientX - r.left}px`);
    el.style.setProperty('--y', `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`group relative overflow-hidden rounded-lg bg-white border border-[#00A859]/15 px-5 pt-6 pb-5 text-center shadow-[0_8px_30px_rgba(12,30,18,0.06)] transition-all duration-300 motion-reduce:transition-none hover:-translate-y-1 motion-reduce:hover:translate-y-0 hover:shadow-[0_16px_40px_rgba(0,168,89,0.16)] hover:border-[#00A859]/50 ${
        open ? 'border-[#00A859]/50' : ''
      }`}
    >
      {/* Cursor spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(260px circle at var(--x, 50%) var(--y, 0%), rgba(0,168,89,0.10), transparent 70%)',
        }}
      />

      {/* Gold bar grows from the centre on hover or when open */}
      <span
        aria-hidden
        className={`absolute top-0 left-1/2 h-[3px] -translate-x-1/2 bg-[#E5B800] transition-all duration-500 motion-reduce:transition-none group-hover:w-full ${
          open ? 'w-full' : 'w-0'
        }`}
      />

      <div className="relative">
        {/* Icon circle */}
        <div className="relative mx-auto h-16 w-16">
          <span
            aria-hidden
            className="absolute inset-0 rounded-full border border-dashed border-[#E5B800] opacity-0 scale-90 transition-all duration-500 motion-reduce:transition-none group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-45"
          />
          <div className="relative flex h-full w-full items-center justify-center rounded-full bg-[#00A859] text-white transition-colors duration-300 group-hover:bg-[#0C1E12]">
            <Icon
              size={26}
              strokeWidth={1.6}
              className="transition-transform duration-300 motion-reduce:transition-none group-hover:scale-110 group-hover:text-[#E5B800]"
            />
          </div>
        </div>

        <h3 className="mt-3 text-lg font-semibold text-[#0C1E12]">{pillar.title}</h3>

        <p className="mt-1.5 text-sm leading-relaxed text-[#3A4239] font-normal">
          {pillar.summary}
        </p>

        {/* Expandable detail */}
        <div
          id={panelId}
          className={`grid transition-[grid-template-rows,opacity] duration-300 motion-reduce:transition-none ${
            open ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <ul className="overflow-hidden space-y-1.5 text-left max-w-[15rem] mx-auto">
            {pillar.points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-[#0C1E12]">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E5B800]/25 text-[#0C1E12]">
                  <Check size={12} strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="mt-3 inline-flex items-center gap-1 rounded text-xs font-semibold uppercase tracking-wide text-[#00A859] hover:text-[#0C1E12] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A859] focus-visible:ring-offset-2"
        >
          {open ? 'Show less' : 'Read more'}
          <ChevronDown
            size={14}
            strokeWidth={2.5}
            className={`transition-transform duration-300 motion-reduce:transition-none ${
              open ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>
    </div>
  );
}

/* ── Section ─────────────────────────────────────────────────────────── */

export default function MissionVisionSection() {
  const [active, setActive] = useState(0);
  const current = principles[active];
  const CurrentIcon = current.icon;

  return (
    <section
      className={`${poppins.className} bg-[#FAF9F6] text-[#0C1E12] border-y border-[#00A859]/20 selection:bg-[#E5B800] selection:text-[#0C1E12]`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 sm:py-12">
        {/* Heading */}
        <header className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-wide uppercase text-[#0C1E12]">
            Our Mission
          </h2>
          <div className="mt-3 mx-auto flex items-center justify-center gap-1.5" aria-hidden>
            <span className="h-[3px] w-10 bg-[#00A859] rounded-full" />
            <span className="h-[3px] w-3 bg-[#E5B800] rounded-full" />
          </div>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#3A4239]">
            We grow food and develop practical farming approaches that create business value,
            support local livelihoods, and look after the land, water, and animals we depend on.
          </p>
        </header>

        {/* Three pillars */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {pillars.map((p) => (
            <PillarCard key={p.title} pillar={p} />
          ))}
        </div>

        {/* How we work: interactive explorer */}
        <div className="mt-10">
          <h3 className="text-center text-xl sm:text-2xl font-semibold text-[#0C1E12]">
            How we work
          </h3>
          <p className="mt-1 text-center text-sm text-[#5A6259]">
            Choose a principle to see what it means in practice.
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-5 items-stretch">
            {/* Tabs */}
            <div
              role="tablist"
              aria-orientation="vertical"
              className="md:col-span-2 flex flex-col gap-1.5"
            >
              {principles.map((p, i) => {
                const Icon = p.icon;
                const selected = i === active;
                return (
                  <button
                    key={p.title}
                    role="tab"
                    type="button"
                    id={`tab-${i}`}
                    aria-selected={selected}
                    aria-controls="principle-panel"
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(i)}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                        e.preventDefault();
                        setActive((i + 1) % principles.length);
                        document.getElementById(`tab-${(i + 1) % principles.length}`)?.focus();
                      }
                      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                        e.preventDefault();
                        const prev = (i - 1 + principles.length) % principles.length;
                        setActive(prev);
                        document.getElementById(`tab-${prev}`)?.focus();
                      }
                    }}
                    className={`flex items-center gap-3 rounded-lg border px-3 py-2 text-left transition-all duration-300 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A859] focus-visible:ring-offset-2 ${
                      selected
                        ? 'bg-[#00A859] border-[#00A859] text-white shadow-[0_10px_24px_rgba(0,168,89,0.25)] md:translate-x-2'
                        : 'bg-white border-[#00A859]/20 text-[#0C1E12] hover:border-[#00A859] hover:bg-[#00A859]/5'
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                        selected ? 'bg-white/20 text-[#E5B800]' : 'bg-[#00A859]/10 text-[#00A859]'
                      }`}
                    >
                      <Icon size={18} strokeWidth={1.8} />
                    </span>
                    <span className="text-sm font-medium">{p.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Detail panel */}
            <div
              id="principle-panel"
              role="tabpanel"
              aria-labelledby={`tab-${active}`}
              className="md:col-span-3 relative overflow-hidden rounded-lg border border-[#00A859]/20 bg-white p-5 flex flex-col justify-center shadow-[0_8px_30px_rgba(12,30,18,0.06)]"
            >
              <span aria-hidden className="absolute left-0 top-0 h-full w-1 bg-[#E5B800]" />
              {/* key re-mounts on change so the fade replays */}
              <div key={active} className="animate-[fadeIn_0.35s_ease-out] motion-reduce:animate-none">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#00A859] text-white">
                  <CurrentIcon size={26} strokeWidth={1.6} />
                </div>
                <h4 className="mt-3 text-xl font-semibold text-[#0C1E12]">{current.title}</h4>
                <p className="mt-1.5 text-sm sm:text-base leading-relaxed text-[#3A4239] max-w-md">
                  {current.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Local keyframes (works without editing tailwind.config) */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}