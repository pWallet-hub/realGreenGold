'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import AboutUsSection from '../components/AboutUsSection';
import MissionVisionSection from '../components/MissionVisionAndValues';
import OurPartners from '../components/OurPartners';
import ContactStrip from '../components/ContactStrip';
import {
  Sprout,
  MapPin,
  ArrowUpRight,
  Recycle,
  Flower2,
  Users,
  GraduationCap,
  Wheat,
} from 'lucide-react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

/* ── Content ─────────────────────────────────────────────────────────── */

const principles = [
  { icon: Sprout, top: 'Avocado, Banana', bottom: '& Fresh Vegetables' },
  { icon: Recycle, top: 'Zero-Grazing', bottom: 'Aerobic Composting' },
  { icon: Flower2, top: 'Bee Sanctuary', bottom: '& Biodiversity' },
  { icon: Users, top: 'Outgrower', bottom: 'Networks' },
  { icon: GraduationCap, top: 'Practical', bottom: 'Farm Education' },
];

const stats = [
  { from: 1990, to: 2015, suffix: '', decimals: 0, label: 'Founded in Kirehe' },
  { from: 0, to: 15, suffix: '+', decimals: 0, label: 'Banana varieties grown' },
  { from: 0, to: 0.5, suffix: ' ha', decimals: 1, label: 'Starting demonstration plot' },
  { from: 0, to: 3, suffix: '', decimals: 0, label: 'Connected farm systems' },
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

/* ── Small helpers ───────────────────────────────────────────────────── */

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
      { threshold: 0.15 }
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

/* Number that counts up once it scrolls into view */
function Stat({
  from,
  to,
  suffix,
  decimals,
  label,
}: {
  from: number;
  to: number;
  suffix: string;
  decimals: number;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(from);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || typeof IntersectionObserver === 'undefined') {
      setValue(to);
      return;
    }
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const duration = 1400;
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setValue(from + (to - from) * eased);
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [from, to]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-extrabold tracking-tight text-[#FBC02D] sm:text-5xl">
        {value.toFixed(decimals)}
        {suffix}
      </p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/75">{label}</p>
    </div>
  );
}

/* Yellow line + wheat divider used under section headings */
function WheatDivider() {
  return (
    <div className="my-3 flex items-center justify-center gap-2 text-[#FBC02D]" aria-hidden="true">
      <span className="h-[2px] w-10 rounded-full bg-[#FBC02D]" />
      <Wheat size={24} strokeWidth={2} />
      <span className="h-[2px] w-10 rounded-full bg-[#FBC02D]" />
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────────────── */

export default function AboutUsPage() {
  const progressRef = useRef<HTMLDivElement>(null);

  // Reading-progress bar
  useEffect(() => {
    const onScroll = () => {
      const el = progressRef.current;
      if (!el) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      el.style.transform = `scaleX(${ratio})`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`${poppins.variable} min-h-screen flex flex-col bg-[#FAF9F6] text-[#0C1E12] selection:bg-[#E5B800] selection:text-[#0C1E12]`}
    >
      {/* Reading progress */}
      <div className="fixed left-0 right-0 top-0 z-[70] h-[3px] bg-transparent">
        <div
          ref={progressRef}
          className="h-full origin-left bg-gradient-to-r from-[#00A859] to-[#FBC02D]"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>

      {/* Primary Global Navigation (Transparent Fixed Header) */}
      <NavBar />

      <main className="flex-grow">
        {/* ── Hero: image lives inside a rounded frame; page bg around it (same as home) ── */}
        <div className="bg-[#FAF9F6] px-3 pt-3 sm:px-5 lg:px-6">
          <section className="relative z-0 flex min-h-[380px] items-center overflow-hidden rounded-[28px] bg-[#173A2B] pt-12 pb-12 sm:rounded-[40px] lg:pb-14">
            {/* Authentic Farm Background Image */}
            <Image
              src="/assets/home.jpg"
              alt="Real Green Gold Ltd integrated farm in Kirehe, Rwanda"
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
                {/* Location Tag */}
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#F1CA66]">
                  <MapPin size={18} className="text-[#A9D18E]" />
                  <span>Kirehe District, Eastern Province, Rwanda</span>
                </div>

                {/* Main Headline */}
                <h1 className="max-w-3xl font-serif text-3xl font-medium leading-[1.08] text-white sm:text-4xl lg:text-5xl">
                  A farm built from <span className="italic text-[#A9D18E]">questions</span>, not a business plan.
                </h1>

                <div className="h-1 w-16 bg-[#D8A82E]" />

                <p className="max-w-2xl text-justify text-sm leading-relaxed text-white/90 sm:text-base">
                  We grow avocado, banana, and fresh vegetables while working out, plot by plot, how crops, livestock, pollinators, and soil care support each other in practice.
                </p>

                <p className="text-sm font-semibold text-[#E8D8B0]">Avocado · Banana · Fresh vegetables</p>

                {/* Primary Hero CTAs */}
                <div className="flex flex-col items-start gap-2.5 sm:flex-row sm:items-center">
                  <a
                    href="#farm-system"
                    className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-full border border-[#E8BD4C] bg-[#E8BD4C] px-6 text-sm font-semibold text-[#203528] shadow-md transition-colors hover:bg-[#F1CC68] sm:w-auto"
                  >
                    <span>Explore Farm Plots</span>
                    <ArrowUpRight size={14} />
                  </a>

                  <Link
                    href="/initiatives"
                    className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-full border border-white/65 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#203528] sm:w-auto"
                  >
                    <span>View Initiatives</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Grass & cattail silhouette along the bottom edge */}
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

        {/* ── Commitment section (shared reference design) ─────────── */}
        <section className={`${poppins.className} relative overflow-hidden bg-[#FAF9F6] py-10 lg:py-12`}>
          {/* soft glows */}
          <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#00A859]/10 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#FBC02D]/15 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-6">
            <Reveal className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#0F3D1E]/15 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#0F3D1E]">
                <span className="h-2 w-2 rounded-full bg-[#00A859]" />
                Our Commitment
              </span>

              <h2 className="mt-2 text-1xl font-extrabold leading-tight tracking-tight text-[#0F3D1E] sm:text-2xl lg:text-[1.5rem]">
                Real Green Gold Integrated Farming
                Commitment to Practice
              </h2>

              <WheatDivider />

              <p className="text-base leading-relaxed text-[#0C1E12]/80 sm:text-lg">
                We grow avocado, banana, and fresh vegetables while working out, plot by plot, how crops, livestock, pollinators, and soil care support each other in practice.
              </p>
            </Reveal>

            <div className="relative mt-8 lg:mt-10">
              <ul className="mx-auto grid max-w-4xl grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3 lg:grid-cols-5">
                {principles.map(({ icon: Icon, top, bottom }, i) => (
                  <li key={top} className={i === principles.length - 1 ? 'col-span-2 sm:col-span-1' : ''}>
                    <Reveal delay={i * 90}>
                      <div className="group flex cursor-default flex-col items-center text-center">
                        <span className="relative flex h-[84px] w-[84px] items-center justify-center rounded-full border-2 border-[#0F3D1E] bg-white text-[#0F3D1E] shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-[#0F3D1E] group-hover:text-[#FBC02D] group-hover:shadow-xl">
                          <Icon size={34} strokeWidth={1.6} />
                          <span
                            aria-hidden="true"
                            className="absolute -inset-2 rounded-full border border-dashed border-[#FBC02D] opacity-0 transition-opacity duration-300 group-hover:animate-[spin_10s_linear_infinite] group-hover:opacity-100"
                          />
                        </span>
                        <p className="mt-3 text-sm font-semibold leading-snug text-[#0F3D1E]">
                          {top}
                          <br />
                          {bottom}
                        </p>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Stats band ───────────────────────────────────────────── */}
        <section className={`${poppins.className} relative overflow-hidden bg-[#0F3D1E] py-8 text-white lg:py-10`}>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
              backgroundSize: '26px 26px',
            }}
          />
          <div className="relative mx-auto max-w-6xl px-6">
            <Reveal className="grid grid-cols-2 gap-y-6 lg:grid-cols-4 lg:divide-x lg:divide-white/15">
              {stats.map((s) => (
                <Stat key={s.label} {...s} />
              ))}
            </Reveal>
          </div>
        </section>

        {/* ── Section Components ───────────────────────────────────── */}
        <div id="farm-system">
          <AboutUsSection />
        </div>
        <MissionVisionSection />
        <OurPartners />
        <ContactStrip />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}