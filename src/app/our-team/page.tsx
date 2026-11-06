'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import {
  Compass,
  ArrowUpRight,
  Sprout,
  ShieldCheck,
  BookOpen,
  HeartHandshake,
  CheckCircle2,
  Layers,
  MapPin,
  Users,
  ChevronDown,
  Quote,
  type LucideIcon,
} from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ContactStrip from '../components/ContactStrip';

// Load Poppins font with specified weights
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

/* ── Content ─────────────────────────────────────────────────────────── */

type Pillar = {
  title: string;
  subtitle: string;
  description: string;
  evidence: string;
  icon: LucideIcon;
};

const responsibilityPillars: Pillar[] = [
  {
    title: 'Farm operations & harvest',
    subtitle: 'Planning & supervision',
    description:
      'Actual planning, daily operational supervision, and crop harvest responsibilities across avocado, banana, and vegetable plots in Kirehe.',
    evidence: 'Field planning logs & harvest tally records',
    icon: Sprout,
  },
  {
    title: 'Crops & water management',
    subtitle: 'Irrigation stewardship',
    description:
      'Overseeing irrigation infrastructure, dry-period soil moisture monitoring, and maintaining practical water usage tools.',
    evidence: 'Moisture tracking & system maintenance',
    icon: Compass,
  },
  {
    title: 'Livestock & soil fertility',
    subtitle: 'Regenerative inputs',
    description:
      'Managing animal care for cattle, goats, poultry, and rabbits while coordinating zero-grazing manure collection for compost production.',
    evidence: 'Feeding routines & compost batch records',
    icon: ShieldCheck,
  },
  {
    title: 'Visitors & community learning',
    subtitle: 'Knowledge exchange',
    description:
      'Coordinating guided farm visits, agronomic student interactions, and practical learning exchanges with local smallholder farmers.',
    evidence: 'Visitor logs & exchange notes',
    icon: BookOpen,
  },
  {
    title: 'Records & communication',
    subtitle: 'Documentation ledger',
    description:
      'Maintaining accurate farm production records, photography archives, initiative documentation, and incoming enquiry channels.',
    evidence: 'Verified photo archives & enquiry logs',
    icon: Layers,
  },
];

const verifiedTeam = [
  {
    id: 'team-1',
    name: 'Pacifique Nshimiyimana',
    role: 'Founder and CEO',
    location: 'Kirehe, Rwanda',
    image: '/assets/Pacific.jpg',
    responsibility: 'Executive Strategy & Strategic Partnerships',
    bio: 'Pacifique founded Real Green Gold Ltd as his first business. His background in biotechnology, agricultural enterprise, and farmer engagement informs the farm’s direction. He connects the practical lessons of farming with a wider commitment to entrepreneurship and leadership that responds to community needs. At RGG, his role is to guide strategy, build relationships, and support the team in translating ideas into workable activities.',
    learningQuote:
      'Farming teaches us that an idea must respect the reality of the land and the needs of the people doing the work.',
    tasks: [
      'Guiding RGG enterprise strategy and initiative development',
      'Building relationships with produce buyers, institutions, and visitors',
    ],
    improvement: 'Established connected crop-livestock composting protocols on the Kirehe site.',
  },
  {
    id: 'team-2',
    name: 'Verified Team Member',
    role: 'Operations & Agronomy Lead',
    location: 'Kirehe Site',
    image: '/assets/home.jpg',
    responsibility: 'Farm Operations & Field Oversight',
    bio: 'Responsible for daily field operations and crop management. Oversees seasonal planting, irrigation scheduling, and soil fertility management across our avocado, banana, and fresh vegetable fields. Works directly with local farm hands and community visitors.',
    learningQuote:
      'Observing crop moisture daily prevents water waste and helps us understand exact soil needs.',
    tasks: [
      'Supervising daily field tasks and harvest grading',
      'Maintaining zero-grazing manure collection for composting',
    ],
    improvement: 'Improved compost turning schedules to reduce decomposition time.',
  },
];

const cultureNotes = [
  'Clear responsibilities',
  'Support for learning',
  'Contributions from the community',
];

/* Page background colour (also used to "cut" the grass silhouette out of the hero image) */
const PAGE_BG = '#FAF9F6';

/* Tileable grass + cattail silhouette for the bottom edge of the hero (same as home page) */
const GRASS_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='240' height='44' viewBox='0 0 240 44' fill='${PAGE_BG}'>
<rect y='38' width='240' height='6'/>
<path d='M2 44 Q4 24 9 12 Q8 28 9 44Z'/>
<path d='M12 44 Q14 30 20 22 Q18 34 18 44Z'/>
<path d='M22 44 Q22 20 26 6 Q29 24 28 44Z'/>
<path d='M32 44 Q36 32 42 26 Q39 36 38 44Z'/>
<path d='M44 44 Q44 28 49 16 Q50 30 50 44Z'/>
<rect x='60' y='12' width='1.6' height='32'/><ellipse cx='60.8' cy='10' rx='2.3' ry='7'/>
<path d='M68 44 Q70 30 75 20 Q75 34 74 44Z'/>
<path d='M78 44 Q80 26 86 14 Q85 30 85 44Z'/>
<path d='M90 44 Q92 34 98 30 Q95 38 95 44Z'/>
<path d='M100 44 Q100 24 105 10 Q108 28 107 44Z'/>
<path d='M112 44 Q116 30 122 24 Q119 36 118 44Z'/>
<path d='M124 44 Q125 28 130 18 Q130 32 130 44Z'/>
<rect x='138' y='10' width='1.6' height='34'/><ellipse cx='138.8' cy='8' rx='2.3' ry='7'/>
<path d='M146 44 Q148 30 154 22 Q152 36 152 44Z'/>
<path d='M156 44 Q157 22 162 8 Q164 28 163 44Z'/>
<path d='M168 44 Q172 32 178 28 Q175 38 174 44Z'/>
<path d='M180 44 Q181 26 186 16 Q187 32 186 44Z'/>
<path d='M190 44 Q192 34 198 26 Q196 38 195 44Z'/>
<path d='M200 44 Q200 22 205 12 Q208 28 207 44Z'/>
<rect x='214' y='14' width='1.6' height='30'/><ellipse cx='214.8' cy='12' rx='2.3' ry='7'/>
<path d='M222 44 Q224 30 230 20 Q229 34 228 44Z'/>
<path d='M232 44 Q233 32 238 24 Q238 36 238 44Z'/>
</svg>`;
const GRASS_URL = `url("data:image/svg+xml,${encodeURIComponent(GRASS_SVG)}")`;

/* ── Helpers ─────────────────────────────────────────────────────────── */

/* Centered section heading with green + gold underline (same as Mission section) */
function SectionHeading({
  title,
  intro,
}: {
  title: string;
  intro?: string;
}) {
  return (
    <header className="mx-auto max-w-2xl text-center">
      <h2 className="text-2xl font-bold tracking-wide text-[#0C1E12] sm:text-3xl">{title}</h2>
      <div className="mx-auto mt-3 flex items-center justify-center gap-1.5" aria-hidden>
        <span className="h-[3px] w-10 rounded-full bg-[#00A859]" />
        <span className="h-[3px] w-3 rounded-full bg-[#E5B800]" />
      </div>
      {intro && <p className="mt-3 text-sm leading-relaxed text-[#3A4239] sm:text-base">{intro}</p>}
    </header>
  );
}

/* Coverage card: cursor spotlight + expandable evidence (same pattern as Mission cards) */
function CoverageCard({ pillar }: { pillar: Pillar }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const Icon = pillar.icon;
  const panelId = `coverage-${pillar.title.replace(/[^a-z]+/gi, '-').toLowerCase()}`;

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
      className={`group relative overflow-hidden rounded-lg border bg-white px-5 pb-5 pt-6 text-center shadow-[0_8px_30px_rgba(12,30,18,0.06)] transition-all duration-300 motion-reduce:transition-none hover:-translate-y-1 motion-reduce:hover:translate-y-0 hover:border-[#00A859]/50 hover:shadow-[0_16px_40px_rgba(0,168,89,0.16)] ${
        open ? 'border-[#00A859]/50' : 'border-[#00A859]/15'
      }`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(260px circle at var(--x, 50%) var(--y, 0%), rgba(0,168,89,0.10), transparent 70%)',
        }}
      />
      <span
        aria-hidden
        className={`absolute left-1/2 top-0 h-[3px] -translate-x-1/2 bg-[#E5B800] transition-all duration-500 motion-reduce:transition-none group-hover:w-full ${
          open ? 'w-full' : 'w-0'
        }`}
      />

      <div className="relative">
        <div className="relative mx-auto h-16 w-16">
          <span
            aria-hidden
            className="absolute inset-0 scale-90 rounded-full border border-dashed border-[#E5B800] opacity-0 transition-all duration-500 motion-reduce:transition-none group-hover:rotate-45 group-hover:scale-110 group-hover:opacity-100"
          />
          <div className="relative flex h-full w-full items-center justify-center rounded-full bg-[#00A859] text-white transition-colors duration-300 group-hover:bg-[#0C1E12]">
            <Icon
              size={26}
              strokeWidth={1.6}
              className="transition-transform duration-300 group-hover:scale-110 group-hover:text-[#E5B800] motion-reduce:transition-none"
            />
          </div>
        </div>

        <p className="mt-3 text-xs font-medium text-[#5A6259]">{pillar.subtitle}</p>
        <h3 className="mt-0.5 text-lg font-semibold text-[#0C1E12]">{pillar.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-[#3A4239]">{pillar.description}</p>

        <div
          id={panelId}
          className={`grid transition-[grid-template-rows,opacity] duration-300 motion-reduce:transition-none ${
            open ? 'mt-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="mx-auto flex max-w-[16rem] items-start gap-2 rounded-md bg-[#E5B800]/15 px-3 py-2 text-left text-sm text-[#0C1E12]">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#00A859]" />
              <span>
                <span className="block font-semibold">Verified domain</span>
                {pillar.evidence}
              </span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="mt-3 inline-flex items-center gap-1 rounded text-xs font-semibold uppercase tracking-wide text-[#00A859] transition-colors hover:text-[#0C1E12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A859] focus-visible:ring-offset-2"
        >
          {open ? 'Show less' : 'Read more'}
          <ChevronDown
            size={14}
            strokeWidth={2.5}
            className={`transition-transform duration-300 motion-reduce:transition-none ${open ? 'rotate-180' : ''}`}
          />
        </button>
      </div>
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────────────── */

export default function OurTeamPage() {
  const [active, setActive] = useState(0);
  const member = verifiedTeam[active];

  return (
    <div
      className={`${poppins.className} flex min-h-screen flex-col bg-[#FAF9F6] text-[#0C1E12] selection:bg-[#E5B800] selection:text-[#0C1E12]`}
    >
      <style>{`
        @keyframes team-fade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .team-fade { animation: team-fade 0.35s ease-out; }
        @media (prefers-reduced-motion: reduce) { .team-fade { animation: none; } }
      `}</style>

      <NavBar />

      <main className="flex-grow">
        {/* ── 1. Hero: rounded frame with grass edge (same as home / about) ── */}
        <div className="bg-[#FAF9F6] px-3 pt-3 sm:px-5 lg:px-6">
          <section className="relative z-0 flex min-h-[380px] items-center overflow-hidden rounded-[28px] bg-[#173A2B] pb-12 pt-12 sm:rounded-[40px] lg:pb-14">
            <Image
              src="/assets/home.jpg"
              alt="Real Green Gold Ltd farm team working in Kirehe, Rwanda"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="hero-background object-cover object-center brightness-[0.9]"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#10291F]/70 via-[#10291F]/35 to-[#10291F]/5" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10291F]/35 via-transparent to-[#10291F]/10" aria-hidden="true" />

            <div className="hero-content relative z-10 mx-auto w-full max-w-7xl px-6 py-4 sm:px-10 lg:px-16">
              <div className="max-w-3xl space-y-2.5">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#F1CA66]">
                  <Users size={18} className="text-[#A9D18E]" />
                  <span>Responsibility &amp; livelihoods</span>
                </div>

                <h1 className="max-w-3xl font-serif text-3xl font-medium leading-[1.08] text-white sm:text-4xl lg:text-5xl">
                  The people who make the <span className="italic text-[#A9D18E]">farm work</span>.
                </h1>

                <div className="h-1 w-16 bg-[#D8A82E]" />

                <p className="max-w-2xl text-justify text-sm leading-relaxed text-white/90 sm:text-base">
                  Real Green Gold Ltd grows through the people who care for the farm, organize its work, and share what they learn. Our team approach brings practical experience together with curiosity about better ways of farming.
                </p>

                <div className="flex flex-col items-start gap-2.5 pt-1 sm:flex-row sm:items-center">
                  <a
                    href="#team-profiles"
                    className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-full border border-[#E8BD4C] bg-[#E8BD4C] px-6 text-sm font-semibold text-[#203528] shadow-md transition-colors hover:bg-[#F1CC68] sm:w-auto"
                  >
                    <span>Meet the team</span>
                    <ArrowUpRight size={14} />
                  </a>
                  <a
                    href="#collaboration"
                    className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-full border border-white/65 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#203528] sm:w-auto"
                  >
                    <span>Discuss a collaboration</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[-1px] left-0 z-[5] h-[44px] w-full"
              style={{
                backgroundImage: GRASS_URL,
                backgroundRepeat: 'repeat-x',
                backgroundSize: '240px 44px',
                backgroundPosition: 'bottom left',
              }}
            />
          </section>
        </div>

        {/* ── 2. Working culture ───────────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-4 py-10 md:px-8">
          <div className="grid items-center gap-6 overflow-hidden rounded-lg border border-[#00A859]/15 bg-white p-5 shadow-[0_8px_30px_rgba(12,30,18,0.06)] sm:p-6 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#00A859]">
                <Compass size={16} />
                Working culture
              </span>
              <h2 className="mt-1 text-xl font-semibold leading-tight text-[#0C1E12] sm:text-2xl">
                Practical experience &amp; continuous learning
              </h2>

              <div className="mt-3 space-y-2.5 text-sm leading-relaxed text-[#3A4239]">
                <p>
                  Real Green Gold Ltd grows through the people who care for the farm, organize its work, and share what they learn. We value technology when it helps people perform useful tasks and make informed decisions.
                </p>
                <p>
                  We are building a working culture that gives people clear responsibilities, supports learning, and welcomes contributions from the surrounding community. Our goal is to create room for women, young people, and people with different experiences to participate meaningfully in the farm’s development.
                </p>
              </div>

              <ul className="mt-4 flex flex-wrap gap-2">
                {cultureNotes.map((n) => (
                  <li
                    key={n}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#00A859]/25 bg-[#FAF9F6] px-3 py-1 text-xs font-medium text-[#0C1E12] transition-colors hover:border-[#00A859] hover:bg-[#00A859]/10"
                  >
                    <CheckCircle2 size={13} className="text-[#00A859]" />
                    {n}
                  </li>
                ))}
              </ul>

              <a
                href="#collaboration"
                className="group mt-5 inline-flex items-center gap-2 rounded-lg bg-[#00A859] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#008A47] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A859] focus-visible:ring-offset-2"
              >
                Discuss a collaboration
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            <div className="space-y-3 lg:col-span-5">
              <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#0C1E12]">
                <Image
                  src="/assets/home.jpg"
                  alt="RGG team participation in Kirehe farm activities"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover brightness-95 transition-transform duration-700 motion-reduce:transition-none group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-[#0C1E12]/85 px-3 py-1 text-xs font-medium text-[#E5B800] backdrop-blur-sm">
                  Community &amp; team
                </span>
              </div>
              <div className="border-l-[3px] border-[#E5B800] bg-[#FAF9F6] px-3 py-2">
                <p className="text-sm font-semibold text-[#0C1E12]">Shared responsibility</p>
                <p className="text-sm leading-relaxed text-[#5A6259]">
                  Building shared responsibility across crop care, irrigation observation, composting, and agronomic visitor interactions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Operational coverage ──────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-4 py-10 md:px-8">
          <SectionHeading
            title="Operational coverage"
            intro="These are coverage areas, not claims that separate positions exist. One person may hold several responsibilities."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {responsibilityPillars.map((p) => (
              <CoverageCard key={p.title} pillar={p} />
            ))}
          </div>
        </section>

        {/* ── 4. Team profiles ─────────────────────────────────────────── */}
        <section id="team-profiles" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-10 md:px-8">
          <SectionHeading
            title="Team profiles & leadership"
            intro="Credited contributions only. Choose a person to see what they do."
          />

          {/* Member selector */}
          <div role="tablist" aria-label="Team members" className="mt-8 flex flex-wrap justify-center gap-2">
            {verifiedTeam.map((m, i) => {
              const on = i === active;
              return (
                <button
                  key={m.id}
                  role="tab"
                  type="button"
                  id={`member-tab-${i}`}
                  aria-selected={on}
                  aria-controls="member-panel"
                  tabIndex={on ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => {
                    const n = verifiedTeam.length;
                    let next = -1;
                    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (i + 1) % n;
                    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (i - 1 + n) % n;
                    if (next >= 0) {
                      e.preventDefault();
                      setActive(next);
                      document.getElementById(`member-tab-${next}`)?.focus();
                    }
                  }}
                  className={`flex items-center gap-3 rounded-full border py-1.5 pl-1.5 pr-5 text-left transition-all duration-300 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A859] focus-visible:ring-offset-2 ${
                    on
                      ? 'border-[#00A859] bg-[#00A859] text-white shadow-[0_10px_24px_rgba(0,168,89,0.25)]'
                      : 'border-[#00A859]/25 bg-white text-[#0C1E12] hover:border-[#00A859] hover:bg-[#00A859]/5'
                  }`}
                >
                  <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[#0C1E12]">
                    <Image src={m.image} alt="" fill sizes="40px" className="object-cover object-top" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold leading-tight">{m.name}</span>
                    <span className={`block text-xs ${on ? 'text-white/85' : 'text-[#5A6259]'}`}>{m.role}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Member panel */}
          <div
            id="member-panel"
            role="tabpanel"
            aria-labelledby={`member-tab-${active}`}
            className="relative mt-5 overflow-hidden rounded-lg border border-[#00A859]/15 bg-white p-5 shadow-[0_8px_30px_rgba(12,30,18,0.06)] sm:p-6"
          >
            <span aria-hidden className="absolute left-0 top-0 h-full w-1 bg-[#E5B800]" />

            <div key={member.id} className="team-fade grid items-start gap-6 lg:grid-cols-12">
              <div className="space-y-3 lg:col-span-4">
                <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-[#0C1E12] sm:aspect-[4/3] lg:aspect-square">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover object-top brightness-95"
                  />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-[#0C1E12]/85 px-3 py-1 text-xs font-medium text-[#E5B800] backdrop-blur-sm">
                    <CheckCircle2 size={12} /> Verified profile
                  </span>
                </div>
                <div className="border-l-[3px] border-[#E5B800] bg-[#FAF9F6] px-3 py-2">
                  <p className="text-xs font-semibold text-[#00A859]">Responsibility</p>
                  <p className="text-sm text-[#0C1E12]">{member.responsibility}</p>
                </div>
              </div>

              <div className="space-y-4 lg:col-span-8">
                <div className="flex flex-col justify-between gap-2 border-b border-[#00A859]/15 pb-3 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-[#0C1E12]">{member.name}</h3>
                    <p className="text-sm font-medium text-[#00A859]">{member.role}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm text-[#5A6259]">
                    <MapPin size={14} className="text-[#00A859]" /> {member.location}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-[#3A4239]">{member.bio}</p>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-[#00A859]/15 bg-[#FAF9F6] p-4">
                    <p className="text-sm font-semibold text-[#0C1E12]">Concrete tasks</p>
                    <ul className="mt-2 space-y-1.5">
                      {member.tasks.map((t) => (
                        <li key={t} className="flex items-start gap-2 text-sm text-[#3A4239]">
                          <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[#00A859]" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg border border-[#00A859]/15 bg-[#FAF9F6] p-4">
                    <p className="text-sm font-semibold text-[#0C1E12]">Verified improvement</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#3A4239]">{member.improvement}</p>
                  </div>
                </div>

                <figure className="flex gap-3 rounded-lg bg-[#0C1E12] p-4 text-[#FAF9F6]">
                  <Quote size={22} className="mt-0.5 shrink-0 text-[#E5B800]" />
                  <div>
                    <figcaption className="text-xs font-semibold text-[#E5B800]">What I am learning</figcaption>
                    <blockquote className="mt-1 text-sm italic leading-relaxed text-[#FAF9F6]/90">
                      &ldquo;{member.learningQuote}&rdquo;
                    </blockquote>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. Collaboration invitation ──────────────────────────────── */}
        <section id="collaboration" className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-10 pt-4 md:px-8">
          <div
            className="rounded-[14px] p-3 shadow-[0_14px_32px_rgba(10,40,20,0.28)]"
            style={{ background: 'linear-gradient(180deg, #1c6c37 0%, #165f2d 50%, #0f4a22 100%)' }}
          >
            <div className="rounded-[10px] border border-dashed border-white/25 px-5 py-8 text-center text-white sm:px-10">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FBC02D] text-[#5b2a06]">
                <HeartHandshake size={24} strokeWidth={2.2} />
              </span>
              <h2 className="mt-3 text-xl font-semibold sm:text-2xl">
                Learn with us or contribute a practical skill
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-white/90">
                Interested in learning with us or contributing a practical skill? Tell us about your experience and the kind of collaboration you have in mind.
              </p>
              <Link
                href="/initiatives#visit-enquiry"
                className="group mt-5 inline-flex items-center gap-2 rounded-full bg-[#E8BD4C] px-6 py-2.5 text-sm font-semibold text-[#0C1E12] shadow-md transition-colors hover:bg-[#F1CC68] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#165f2d]"
              >
                Discuss a collaboration
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </section>
        <ContactStrip />
      </main>

      <Footer />
    </div>
  );
}