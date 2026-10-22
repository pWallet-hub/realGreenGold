'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Poppins, Caveat } from 'next/font/google';
import { Sprout, Truck, Zap, ShieldCheck, Wheat, Check, ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

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

interface Pillar {
  icon: LucideIcon;
  title: string;
  text: string;
}

interface BottomItem {
  title: string;
  text?: string;
}

interface FeatureBlockProps {
  flip?: boolean;
  icon: LucideIcon;
  eyebrow: string;
  eyebrowNote: string;
  title: string;
  paragraph: string;
  mainImage: { alt: string; tag: string; position?: string };
  insetImage: { alt: string; tag: string; position?: string };
  pillars?: Pillar[];
  cta?: { href: string; label: string };
  bottomItems: BottomItem[];
}

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

/* One feature block: big photo + yellow icon card + inset photo, text column, brown overlap card */
function FeatureBlock({
  flip = false,
  icon: Icon,
  eyebrow,
  eyebrowNote,
  title,
  paragraph,
  mainImage,
  insetImage,
  pillars,
  cta,
  bottomItems,
}: FeatureBlockProps) {
  return (
    <div className="relative">
      <div className="grid items-stretch gap-6 lg:grid-cols-12 lg:gap-10">

        {/* ── Photo column ─────────────────────────────────────────── */}
        <Reveal className={`relative min-h-[280px] sm:min-h-[320px] lg:col-span-5 ${flip ? 'lg:order-2' : ''}`}>
          <div className="group absolute inset-0 overflow-hidden rounded-[2rem] bg-[#0C1E12] shadow-xl">
            <Image
              src="/assets/home.jpg"
              alt={mainImage.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: mainImage.position ?? 'center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <span
              className={`absolute bottom-5 ${flip ? 'right-5' : 'left-5'} rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#0F3D1E]`}
            >
              {mainImage.tag}
            </span>
          </div>

          {/* Yellow icon card (dashed inner border) */}
          <div
            className={`absolute top-5 z-20 flex h-28 w-28 items-center justify-center rounded-[1.75rem] bg-[#F9C22E] shadow-lg sm:h-32 sm:w-32 ${
              flip ? 'right-5' : 'left-5'
            }`}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-2.5 rounded-[1.25rem] border border-dashed border-[#3B1F06]/25"
            />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#4A2408] text-[#FBC02D] sm:h-16 sm:w-16">
              <Icon size={26} />
            </span>
          </div>

          {/* Inset photo (overlaps the photo edge on large screens) */}
          <div
            className={`absolute top-[34%] z-20 hidden h-36 w-36 overflow-hidden rounded-2xl border-4 border-[#FAF9F6] bg-[#0C1E12] shadow-xl sm:block lg:h-40 lg:w-40 ${
              flip ? '-left-6' : '-right-6'
            }`}
          >
            <Image
              src="/assets/home.jpg"
              alt={insetImage.alt}
              fill
              sizes="160px"
              className="object-cover"
              style={{ objectPosition: insetImage.position ?? 'center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <span className="absolute bottom-2 left-2 right-2 truncate text-center text-[9px] font-bold uppercase tracking-wider text-white">
              {insetImage.tag}
            </span>
          </div>
        </Reveal>

        {/* ── Text column ──────────────────────────────────────────── */}
        <Reveal delay={120} className={`flex flex-col justify-center space-y-3.5 lg:col-span-7 lg:pb-16 ${flip ? 'lg:order-1' : ''}`}>
          {/* Eyebrow */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className={`${caveat.className} flex items-center gap-3 text-2xl font-semibold text-[#1E8A3C] sm:text-[1.7rem]`}>
              <span className="flex items-center text-[#F9C22E]">
                <span className="h-[2px] w-7 rounded-full bg-[#F9C22E]" />
                <Wheat size={22} strokeWidth={2} className="-ml-0.5" />
              </span>
              {eyebrow}
            </p>
            <span className="inline-flex items-center rounded-full border border-[#0F3D1E]/15 bg-white px-3 py-1 text-[11px] font-semibold text-[#0F3D1E]">
              {eyebrowNote}
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-[#0F3D1E] sm:text-4xl lg:text-[2.9rem]">
            {title}
          </h2>

          {/* Copy */}
          <p className="max-w-3xl text-base leading-relaxed text-[#5A6259] lg:text-lg">{paragraph}</p>

          {/* Pillars */}
          {pillars && (
            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map(({ icon: PIcon, title: pTitle, text }) => (
                <div key={pTitle} className="flex items-start gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0F3D1E] text-[#FBC02D]">
                    <PIcon size={19} />
                  </span>
                  <div>
                    <p className="text-base font-bold text-[#0F3D1E]">{pTitle}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#5A6259]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pill button */}
          {cta && (
            <div>
              <Link
                href={cta.href}
                className="group inline-flex items-center gap-6 rounded-full bg-[#0F3D1E] py-2 pl-8 pr-2 text-base font-semibold text-white shadow-md transition-colors hover:bg-[#0B3017]"
              >
                <span>{cta.label}</span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FBC02D] text-[#0F3D1E] transition-transform duration-300 group-hover:translate-x-1">
                  <ChevronRight size={20} strokeWidth={2.5} />
                </span>
              </Link>
            </div>
          )}
        </Reveal>
      </div>

      {/* ── Brown card that overlaps the photo ─────────────────────── */}
      <Reveal
        delay={200}
        className={`relative z-10 mt-5 lg:-mt-14 ${flip ? 'lg:mr-[24%]' : 'lg:ml-[24%]'}`}
      >
        <div className="rounded-[2.25rem] bg-[#4A2A0A] p-5 text-white shadow-2xl sm:p-6">
          <ul className="grid gap-5 md:grid-cols-3 md:gap-0">
            {bottomItems.map((item, i) => (
              <li
                key={item.title}
                className={`${i > 0 ? 'md:border-l md:border-dashed md:border-white/25 md:pl-6' : ''} ${
                  i < bottomItems.length - 1 ? 'md:pr-6' : ''
                }`}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FBC02D] text-[#4A2A0A]">
                  <Check size={20} strokeWidth={3} />
                </span>
                <p className="mt-3 text-lg font-bold leading-snug sm:text-xl">{item.title}</p>
                {item.text && <p className="mt-1 text-sm leading-relaxed text-white/70">{item.text}</p>}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}

export default function AgriculturalInnovation() {
  return (
    <section
      className={`${poppins.className} relative overflow-hidden bg-[#FAF9F6] py-10 text-[#0C1E12] lg:py-12`}
    >
      {/* soft background glows */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-[#FBC02D]/15 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 bottom-24 h-80 w-80 rounded-full bg-[#00A859]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl space-y-10 px-4 md:px-8 lg:space-y-12">

        {/* ── Block 1: Agricultural Innovation Promotion ───────────── */}
        <FeatureBlock
          icon={Sprout}
          eyebrow="Demonstrations & Adoption"
          eyebrowNote="Agronomic Extension • Field Learning"
          title="Agricultural Innovation Promotion"
          paragraph="The company actively promotes the adoption of cutting-edge agricultural innovations. Through practical demonstrations and hands-on farm training, Real Green Gold Ltd equips farmers with advanced techniques and technologies that boost productivity, improve crop quality, and contribute to sustainable farming practices."
          mainImage={{ alt: 'Green plant innovation close-up', tag: 'Crop Tech', position: 'center' }}
          insetImage={{ alt: 'Assorted produce quality observation', tag: 'Quality Yield', position: '75% 60%' }}
          pillars={[
            {
              icon: Zap,
              title: 'Advanced Techniques',
              text: 'Practical, hands-on field demonstrations introducing modern cultivation methods.',
            },
            {
              icon: ShieldCheck,
              title: 'Sustainable Inputs',
              text: 'Promoting soil-friendly, bio-based inputs to protect long-term plot yield.',
            },
          ]}
          bottomItems={[
            { title: 'Field Demonstrations' },
            { title: 'Farmer Extension' },
            { title: 'Productivity Boost' },
          ]}
        />

        {/* ── Block 2: Fruits and Vegetables Logistics ─────────────── */}
        <FeatureBlock
          flip
          icon={Truck}
          eyebrow="Supply Chain & Cold Chain Management"
          eyebrowNote="Produce Aggregation • Value Chain Efficiency"
          title="Fruits and Vegetables Logistics"
          paragraph="Real Green Gold Ltd manages the efficient logistics and aggregation of farm inputs and produce, ensuring a seamless supply chain for a multi-level production value chain. Their expertise in logistics guarantees that fresh fruits and vegetables reach their destinations in optimal condition, maintaining quality and freshness."
          mainImage={{ alt: 'Assorted fresh fruits aggregation', tag: 'Aggregation', position: 'left center' }}
          insetImage={{ alt: 'Harvesting fresh vegetables in Kirehe', tag: 'Fresh Harvest', position: '20% 70%' }}
          cta={{ href: '/contact?topic=Supply%20Chain%20Enquiry', label: 'Enquire About Supply Logistics' }}
          bottomItems={[
            {
              title: 'Input & Produce Aggregation',
              text: 'Streamlining farm inputs and local harvests into structured delivery channels.',
            },
            {
              title: 'Quality & Freshness Guarantee',
              text: 'Optimized handling ensuring fresh produce arrives at buyers in peak condition.',
            },
            { title: 'Multi-Level Value Chain' },
          ]}
        />

      </div>
    </section>
  );
}