'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import {
  Compass,
  ArrowUpRight,
  Calendar,
  Check,
  Camera,
  Filter,
  Quote,
  ChevronDown,
  Sprout,
  Droplets,
  Users,
  Layers,
  BookOpen,
  CheckCircle2,
  MapPin,
  Wheat,
  ChevronRight,
} from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ContactStrip from '../components/ContactStrip';

// Load Poppins font with specified weights
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

/* Tall grass blades + reed stalks along the bottom of the hero.
   The tile repeats horizontally; its fill matches the page background (#FAF9F6). */
const GRASS = (() => {
  const h = 60;
  const base = 50;
  const bladeW = 7;
  const tips = [
    22, 34, 12, 30, 18, 38, 10, 32, 20, 36, 14, 28, 24, 38, 8, 30, 18, 34,
    12, 32, 22, 36, 16, 28, 20, 34, 10, 30, 24, 38, 14, 32, 18, 36, 12, 28,
  ];
  const w = tips.length * bladeW;
  let d = `M0 ${h} V${base}`;
  tips.forEach((tip, i) => {
    const x = i * bladeW;
    d += ` L${x + bladeW / 2} ${tip} L${x + bladeW} ${base}`;
  });
  d += ` V${h} Z`;
  const stalks: [number, number][] = [[46, 6], [120, 2], [180, 8], [232, 4]];
  const reeds = stalks
    .map(
      ([x, top]) =>
        `<rect x='${x}' y='${top + 8}' width='1.8' height='${base - top - 8}' fill='#FAF9F6'/>` +
        `<ellipse cx='${x + 0.9}' cy='${top + 8}' rx='3' ry='8' fill='#FAF9F6'/>`
    )
    .join('');
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${w} ${h}'><path fill='#FAF9F6' d='${d}'/>${reeds}</svg>`;
  return { image: `url("data:image/svg+xml,${encodeURIComponent(svg)}")`, width: w, height: h };
})();

// ── 1. Accordion Data for Founder Leadership Essay ──────────────────────────
const essaySections = [
  {
    id: 'pillar-1',
    number: '01',
    subtitle: 'ENTREPRENEURIAL GROUNDING',
    title: 'Farming as Practical Enterprise',
    icon: Sprout,
    summary: 'On a farm, an idea has to meet the conditions of the land, the needs of the workforce, and customer expectations.',
    content:
      'Real Green Gold Ltd is my first business. It is also one of the places where I continue to learn what entrepreneurship means in practice. On a farm, an idea has to meet the conditions of the land, the needs of the people doing the work, and the expectations of a customer.',
  },
  {
    id: 'pillar-2',
    number: '02',
    subtitle: 'INTERCONNECTED AGRICULTURE',
    title: 'The Integrated Ecosystem',
    icon: Layers,
    summary: 'Connecting avocado, banana, and vegetables with small livestock, pollinator stewardship, and soil care.',
    content:
      'Our farming in Kirehe brings together avocado, banana, and fresh vegetables with small livestock activities, pollinator stewardship, and soil care. Each part asks something of us. Crops need attention through the season. Animals need dependable daily care. Soil needs thoughtful management. Customers need clear information and reliable communication.',
  },
  {
    id: 'pillar-3',
    number: '03',
    subtitle: 'LEADERSHIP DIRECTION',
    title: 'Opportunities Within Community Challenges',
    icon: Users,
    summary: 'Examining local agricultural obstacles to discover scalable products, services, and practical lessons.',
    content:
      'These responsibilities have shaped my leadership direction. When I encounter a community problem, I want to understand it closely enough to see whether there is a useful opportunity within it. That opportunity might be a product, a service, a better way of organizing work, or a practical lesson that others can use.',
  },
  {
    id: 'pillar-4',
    number: '04',
    subtitle: 'AGROECOLOGICAL INQUIRY',
    title: 'Testing Systems & Verifying Results',
    icon: Droplets,
    summary: 'Turning water, soil, and pollinator challenges into measurable, evidence-based farm initiatives.',
    content:
      'A challenge with water, for example, encourages us to examine irrigation and the decisions behind it. Questions about soil fertility lead us toward manure management and composting. An interest in bees opens conversations about habitat, pollination, and the skills involved in beekeeping. These connections help us think about the farm as a whole.\n\nAn opportunity also needs testing. A promising idea does not become a dependable business simply because we describe it well. We need to understand costs, responsibilities, and demand. We need to record what happened and be willing to adjust. Some of our initiatives are already part of daily farming; others remain in development. We want our website to make that distinction clear.',
  },
  {
    id: 'pillar-5',
    number: '05',
    subtitle: 'COLLECTIVE GOVERNANCE',
    title: 'Shared Growth & Open Documentation',
    icon: BookOpen,
    summary: 'Creating conditions where team skills lead the way and farm learning is transparently shared.',
    content:
      'The people around the farm are central to this journey. My role is to help set direction and create conditions in which others can contribute, learn, and take responsibility. As we document more of our work, I want the team’s skills and experiences to be visible alongside my own story.\n\nThis website is part of that commitment. It will bring together our initiatives, farm updates, and photographs so that customers, visitors, and collaborators can see what we do and how we are learning. I hope it becomes a useful record of a business growing through practical responses to real needs.',
  },
];

// ── 2. Filter Categories ─────────────────────────────────────────────────────
const categories = [
  'All',
  'Crops',
  'Animals',
  'Soil and Water',
  'People',
  'Technology',
  'Visits and Memories',
];

// ── 3. Field Notes Articles ──────────────────────────────────────────────────
const articlesList = [
  {
    id: 'article-1',
    title: 'Managing water and crop health in dry-period irrigation',
    author: 'RGG Field Team',
    role: 'Crops & Irrigation',
    date: '12 September 2026',
    category: 'Soil and Water',
    initiative: 'Irrigation',
    readTime: '3 min read',
    coverImage: '/assets/home.jpg',
    excerpt:
      'Connecting soil moisture observation, water cost tracking, and crop response across avocado and vegetable plots in Kirehe.',
  },
  {
    id: 'article-2',
    title: 'Integrating livestock manure into managed compost production',
    author: 'RGG Field Team',
    role: 'Livestock & Fertility',
    date: '28 August 2026',
    category: 'Animals',
    initiative: 'Regenerative Agriculture',
    readTime: '4 min read',
    coverImage: '/assets/home.jpg',
    excerpt:
      'Connecting zero-grazing cattle manure collection with structured composting to return organic matter safely to crop fields.',
  },
];

// ── 4. Photo Gallery Albums ──────────────────────────────────────────────────
const galleryAlbums = [
  {
    id: 'album-1',
    title: 'Avocado & Banana Harvest Operations',
    date: '05 September 2026',
    category: 'Crops',
    location: 'Kirehe Orchard Site',
    imageCount: 8,
    coverImage: '/assets/home.jpg',
    context: 'Seasonal crop harvesting, grading, and field preparation.',
  },
  {
    id: 'album-2',
    title: 'Bee Sanctuary & Flowering Habitat Stewardship',
    date: '18 August 2026',
    category: 'Soil and Water',
    location: 'Pollinator Plot, Kirehe',
    imageCount: 6,
    coverImage: '/assets/home.jpg',
    context: 'Observing pollinator habitats and flowering plant integration.',
  },
  {
    id: 'album-3',
    title: 'Agronomic Field Visit & Community Exchange',
    date: '22 July 2026',
    category: 'Visits and Memories',
    location: 'RGG Demonstration Farm',
    imageCount: 12,
    coverImage: '/assets/home.jpg',
    context: 'Hosting local agricultural students and community farm groups.',
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
      { threshold: 0.1 }
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

/* Handwritten eyebrow with the yellow wheat divider */
function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`font-[cursive] flex items-center gap-3 text-2xl font-semibold sm:text-[1.7rem] ${
        light ? 'text-[#FBC02D]' : 'text-[#1E8A3C]'
      }`}
    >
      <span className="flex items-center text-[#F9C22E]">
        <span className="h-[2px] w-7 rounded-full bg-[#F9C22E]" />
        <Wheat size={22} strokeWidth={2} className="-ml-0.5" />
      </span>
      {children}
    </p>
  );
}

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [openSection, setOpenSection] = useState<string>('pillar-1');

  const filteredArticles = activeCategory === 'All'
    ? articlesList
    : articlesList.filter((a) => a.category === activeCategory);

  const handleCopyLink = (id: string) => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(`${window.location.origin}/blogs#${id}`);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? '' : id);
  };

  return (
    <div className={`${poppins.className} min-h-screen flex flex-col bg-[#FAF9F6] text-[#0C1E12] selection:bg-[#E5B800] selection:text-[#0C1E12]`}>
      <style>{`
        @keyframes rgg-rise { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
        .rgg-rise { opacity: 0; animation: rgg-rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        @media (prefers-reduced-motion: reduce) {
          .rgg-rise { opacity: 1; animation: none; }
        }
      `}</style>

      <NavBar />

      <main className="flex-grow space-y-8">

        {/* ── 1. Hero Header Section (same format as the Initiatives hero) ── */}
        <section className="px-3 pt-3 sm:px-6 sm:pt-4">
          <div className="relative flex items-end overflow-hidden rounded-[2rem] bg-[#0C1E12] sm:rounded-[2.75rem]">
            {/* Background image */}
            <Image
              src="/assets/home.jpg"
              alt="Real Green Gold Ltd farm journal and gallery archives in Kirehe, Rwanda"
              fill
              priority
              quality={95}
              sizes="100vw"
              className="object-cover object-center brightness-60 contrast-[1.05] scale-105 transition-transform duration-1000"
            />

            {/* Gradient overlays */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0C1E12]/75 via-[#0C1E12]/35 to-transparent" />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0C1E12]/60 via-transparent to-black/25" />

            {/* Content — pt-24 clears the fixed NavBar */}
            <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pb-14 pt-24 sm:px-12 lg:px-20">
              <div className="max-w-4xl space-y-4">
                {/* Eyebrow */}
                <p
                  className="rgg-rise flex items-center gap-3 text-base font-semibold text-[#E5B800] sm:text-lg"
                  style={{ animationDelay: '0ms' }}
                >
                  <Compass size={22} strokeWidth={1.8} className="shrink-0" />
                  Farm Journal &amp; Documented Archives
                </p>

                {/* Headline */}
                <h1
                  className="rgg-rise text-5xl font-medium leading-[1.08] tracking-tight text-[#FAF9F6] drop-shadow-sm sm:text-5xl lg:text-6xl"
                  style={{ fontFamily: 'var(--font-display, Georgia, serif)', animationDelay: '100ms' }}
                >
                  Stories and <span className="italic text-[#A5D88F]">Moments</span> from the Farm
                </h1>

                {/* Accent underline */}
                <div className="rgg-rise h-1 w-24 rounded-full bg-[#E5B800]" style={{ animationDelay: '200ms' }} />

                {/* Lead paragraph */}
                <p
                  className="rgg-rise max-w-3xl text-justify text-base font-normal leading-relaxed text-[#FAF9F6]/90 sm:text-lg"
                  style={{ animationDelay: '300ms' }}
                >
                  Follow the work, people, and ideas shaping Real Green Gold Ltd. Our stories document everyday farming, practical learning, and community engagement.
                </p>

                {/* Actions */}
                <div className="rgg-rise flex flex-wrap items-center gap-3 pt-1" style={{ animationDelay: '400ms' }}>
                  <Link
                    href="/gallery"
                    className="inline-flex items-center gap-3 rounded-full bg-[#E5B800] px-7 py-3 text-base font-semibold text-[#0C1E12] shadow-md transition-colors hover:bg-[#F2C94C]"
                  >
                    View All Albums <ArrowUpRight size={18} />
                  </Link>
                  <Link
                    href="/initiatives#partnership"
                    className="inline-flex items-center gap-3 rounded-full border border-white/50 bg-white/10 px-7 py-3 text-base font-semibold text-white backdrop-blur-md transition-colors hover:bg-white hover:text-[#0C1E12]"
                  >
                    Discuss a Collaboration <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Grass + reed stalks along the bottom edge */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-px left-0 right-0 z-30"
              style={{
                height: GRASS.height,
                backgroundImage: GRASS.image,
                backgroundRepeat: 'repeat-x',
                backgroundSize: `${GRASS.width}px ${GRASS.height}px`,
                backgroundPosition: 'left bottom',
              }}
            />
          </div>
        </section>

        {/* ── 2. Topic Filter Bar ───────────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-col justify-between gap-3 rounded-[1.5rem] border border-[#0F3D1E]/10 bg-white p-3 shadow-sm sm:flex-row sm:items-center sm:pl-5">
            <div className="flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00A859]">
              <Filter size={14} />
              <span>Topic Filter:</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={activeCategory === cat}
                  className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                    activeCategory === cat
                      ? 'border border-[#0F3D1E] bg-[#0F3D1E] text-[#FBC02D] shadow-md'
                      : 'border border-[#0F3D1E]/10 bg-[#FAF9F6] text-[#5A6259] hover:border-[#00A859] hover:text-[#0F3D1E]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. Founder Leadership Essay Section ───────────────────────── */}
        <section className="mx-auto max-w-7xl space-y-6 px-4 md:px-8">

          {/* Header Block */}
          <Reveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="space-y-3">
              <Eyebrow>Founder Leadership Essay</Eyebrow>
              <h2 className="max-w-3xl text-3xl font-extrabold leading-[1.1] tracking-tight text-[#0F3D1E] sm:text-4xl lg:text-[2.6rem]">
                How Real Green Gold shaped my entrepreneurship
              </h2>
            </div>

            <div className="shrink-0 sm:text-right">
              <p className="text-base font-bold text-[#0F3D1E]">Pacifique Nshimiyimana</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-sm text-[#5A6259] sm:justify-end">
                <MapPin size={14} className="text-[#00A859]" /> Founder &amp; CEO • Kirehe, Rwanda
              </p>
            </div>
          </Reveal>

          {/* Pull-Quote Banner */}
          <Reveal delay={80}>
            <div className="relative overflow-hidden rounded-[2rem] bg-[#0F4620] p-6 text-white shadow-lg sm:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-3 rounded-[1.5rem] border border-dashed border-white/20"
              />
              <div className="relative flex items-start gap-4 sm:gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FBC02D] text-[#4A2408]">
                  <Quote size={20} />
                </span>
                <blockquote className="text-base font-normal italic leading-relaxed text-white sm:text-lg">
                  &ldquo;Real Green Gold Ltd began my entrepreneurial journey. The work of building an integrated farm in Kirehe continues to shape how I understand opportunity, responsibility, and leadership.&rdquo;
                </blockquote>
              </div>
            </div>
          </Reveal>

          {/* Sidebar + Accordion Grid */}
          <div className="grid items-start gap-6 lg:grid-cols-12">

            {/* Left Column: Image & Reflection Card */}
            <Reveal className="space-y-4 lg:sticky lg:top-24 lg:col-span-4">
              <div className="group relative aspect-square w-full overflow-hidden rounded-[2rem] bg-[#0C1E12] shadow-lg">
                <Image
                  src="/assets/home.jpg"
                  alt="Real Green Gold Ltd integrated farm landscape in Kirehe, Rwanda"
                  fill
                  priority
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover brightness-95 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#0F3D1E]">
                  Field Leadership
                </span>
              </div>

              {/* Yellow reflection card */}
              <div className="relative overflow-hidden rounded-[1.75rem] bg-[#F9C22E] p-6 text-[#3B1F06] shadow-lg">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-2.5 rounded-[1.3rem] border border-dashed border-[#3B1F06]/25"
                />
                <div className="relative flex items-center justify-between gap-3">
                  <p className="text-base font-semibold">Documented Reflection</p>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#4A2408] text-[#FBC02D]">
                    <BookOpen size={20} />
                  </span>
                </div>
                <p className="relative mt-3 text-sm leading-relaxed">
                  This memorandum outlines the foundational experiences, farm connections, and community leadership principles that continue to guide Real Green Gold Ltd.
                </p>
              </div>

              {/* Pill button */}
              <Link
                href="/initiatives#partnership"
                className="group flex items-center justify-between gap-4 rounded-full bg-[#0F3D1E] py-2 pl-7 pr-2 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#0B3017]"
              >
                <span>Discuss a Collaboration</span>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FBC02D] text-[#0F3D1E] transition-transform duration-300 group-hover:translate-x-1">
                  <ChevronRight size={20} strokeWidth={2.5} />
                </span>
              </Link>
            </Reveal>

            {/* Right Column: Accordion */}
            <div className="space-y-3 lg:col-span-8">
              {essaySections.map((pillar, i) => {
                const IconComponent = pillar.icon;
                const isOpen = openSection === pillar.id;

                return (
                  <Reveal key={pillar.id} delay={i * 60}>
                    <div
                      className={`overflow-hidden rounded-[1.5rem] border bg-white transition-all duration-300 ${
                        isOpen
                          ? 'border-[#00A859] shadow-lg'
                          : 'border-[#0F3D1E]/10 shadow-sm hover:border-[#00A859]/50 hover:shadow-md'
                      }`}
                    >
                      <button
                        onClick={() => toggleSection(pillar.id)}
                        aria-expanded={isOpen}
                        aria-controls={`${pillar.id}-panel`}
                        className="flex w-full cursor-pointer items-start justify-between gap-4 p-5 text-left"
                      >
                        <div className="flex items-start gap-4">
                          <span
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-300 ${
                              isOpen ? 'bg-[#0F3D1E] text-[#FBC02D]' : 'bg-[#FBC02D] text-[#0F3D1E]'
                            }`}
                          >
                            {pillar.number}
                          </span>

                          <div>
                            <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#00A859]">
                              {pillar.subtitle}
                            </span>
                            <h3 className="mt-1 text-lg font-bold leading-snug text-[#0F3D1E]">{pillar.title}</h3>
                          </div>
                        </div>

                        <div className="flex shrink-0 items-center gap-3">
                          <span className="hidden h-9 w-9 items-center justify-center rounded-full bg-[#0F3D1E]/5 text-[#0F3D1E] sm:flex">
                            <IconComponent size={17} />
                          </span>
                          <ChevronDown
                            size={20}
                            className={`text-[#0F3D1E] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </div>
                      </button>

                      {/* Summary (shown while closed) */}
                      {!isOpen && (
                        <p className="px-5 pb-5 text-sm leading-relaxed text-[#5A6259] sm:pl-[5.25rem]">
                          {pillar.summary}
                        </p>
                      )}

                      {/* Expandable content */}
                      <div
                        id={`${pillar.id}-panel`}
                        aria-hidden={!isOpen}
                        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="space-y-4 border-t border-[#0F3D1E]/10 px-5 pb-5 pt-4 sm:pl-[5.25rem]">
                            <div className="space-y-3 text-sm leading-relaxed text-[#3A4239] sm:text-base">
                              {pillar.content.split('\n\n').map((paragraph, pIdx) => (
                                <p key={pIdx}>{paragraph}</p>
                              ))}
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-dashed border-[#0F3D1E]/15 pt-3 text-xs font-bold uppercase tracking-wider text-[#00A859]">
                              <span className="flex items-center gap-1.5">
                                <CheckCircle2 size={14} /> Key Operational Pillar
                              </span>
                              <span>RGG Leadership Standard</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

          </div>
        </section>

        {/* ── 4. Additional Field Notes Grid ─────────────────────────────────── */}
        <section className="mx-auto max-w-7xl space-y-6 px-4 md:px-8">
          <Reveal className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div className="space-y-3">
              <Eyebrow>From the Farm</Eyebrow>
              <h3 className="text-2xl font-extrabold leading-tight tracking-tight text-[#0F3D1E] sm:text-3xl lg:text-4xl">
                Updates on Crops, Livestock, Soil, &amp; Water
              </h3>
            </div>
            <span className="inline-flex w-fit items-center rounded-full border border-[#0F3D1E]/15 bg-white px-3 py-1 text-xs font-semibold text-[#0F3D1E]">
              Field Notes Ledger
            </span>
          </Reveal>

          {filteredArticles.length === 0 ? (
            <p className="rounded-[1.5rem] border border-dashed border-[#0F3D1E]/20 bg-white py-10 text-center text-sm text-[#5A6259]">
              No field notes in this topic yet.
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {filteredArticles.map((article, i) => (
                <Reveal key={article.id} delay={i * 100}>
                  <article
                    id={article.id}
                    className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#0F3D1E]/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative h-52 w-full overflow-hidden bg-[#0C1E12]">
                      <Image
                        src={article.coverImage}
                        alt={article.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover brightness-95 transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                      <span className="absolute left-4 top-4 rounded-full bg-[#FBC02D] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0F3D1E]">
                        {article.initiative}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center justify-between gap-3 text-xs font-semibold text-[#00A859]">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          {article.date}
                        </span>
                        <span className="rounded-full bg-[#00A859]/10 px-2.5 py-0.5">{article.readTime}</span>
                      </div>

                      <h4 className="mt-4 text-xl font-bold leading-snug text-[#0F3D1E] transition-colors group-hover:text-[#00A859]">
                        {article.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-[#5A6259]">{article.excerpt}</p>

                      <div className="mt-auto flex items-center justify-between gap-3 border-t border-dashed border-[#0F3D1E]/15 pt-4 mt-5">
                        <span className="text-xs font-semibold text-[#5A6259]">By {article.author}</span>

                        <button
                          onClick={() => handleCopyLink(article.id)}
                          className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                            copiedId === article.id
                              ? 'border-[#00A859] bg-[#00A859] text-white'
                              : 'border-[#0F3D1E]/20 bg-[#FAF9F6] text-[#0F3D1E] hover:border-[#0F3D1E] hover:bg-[#0F3D1E] hover:text-[#FBC02D]'
                          }`}
                        >
                          {copiedId === article.id ? (
                            <>
                              <span>Copied</span>
                              <Check size={13} />
                            </>
                          ) : (
                            <>
                              <span>Share Note</span>
                              <ArrowUpRight size={13} />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </section>

        {/* ── 5. Photo Gallery Albums (green band) ──────────────────────────── */}
        <section className="bg-gradient-to-b from-[#1C6B35] to-[#0F4620] py-12 text-white lg:py-14">
          <div className="mx-auto max-w-7xl space-y-8 px-4 md:px-8">
            <Reveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div className="space-y-3">
                <Eyebrow light>Our Farm Memories</Eyebrow>
                <h3 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                  Documented Visual Records &amp; Albums
                </h3>
              </div>

              <Link
                href="/gallery"
                className="group inline-flex w-fit items-center gap-4 rounded-full bg-white py-1.5 pl-6 pr-1.5 text-sm font-bold text-[#0F3D1E] transition-colors hover:bg-[#F5F2E8]"
              >
                <span>View All Albums</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FBC02D] text-[#0F3D1E] transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowUpRight size={15} strokeWidth={2.5} />
                </span>
              </Link>
            </Reveal>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {galleryAlbums.map((album, i) => (
                <Reveal key={album.id} delay={i * 100}>
                  <div className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white p-3 text-[#0C1E12] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                    <div className="relative h-44 w-full overflow-hidden rounded-[1.25rem] bg-[#0C1E12]">
                      <Image
                        src={album.coverImage}
                        alt={album.title}
                        fill
                        sizes="(min-width: 640px) 33vw, 100vw"
                        className="object-cover brightness-95 transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                      <span className="absolute left-3 top-3 rounded-full bg-[#FBC02D] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0F3D1E]">
                        {album.imageCount} Photos
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col px-3 pb-2 pt-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#00A859]">
                        {album.location} • {album.date}
                      </span>
                      <h4 className="mt-2 text-lg font-bold leading-snug text-[#0F3D1E]">{album.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-[#5A6259]">{album.context}</p>

                      <div className="mt-auto flex items-center justify-between border-t border-dashed border-[#0F3D1E]/15 pt-4 mt-4">
                        <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00A859]">
                          <Camera size={14} />
                          Verified Archive
                        </span>
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FBC02D] text-[#0F3D1E] transition-transform duration-300 group-hover:translate-x-0.5">
                          <ArrowUpRight size={15} strokeWidth={2.5} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. Global Contact Strip ────────────────────────────────────────── */}
        <ContactStrip />

      </main>

      <Footer />
    </div>
  );
}