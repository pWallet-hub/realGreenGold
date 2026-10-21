'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ChevronUp,
  Sprout,
  Wheat,
  ShieldCheck,
} from 'lucide-react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

// Load Poppins font with specified weights matching site-wide standards
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const quickLinks = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Our Team', href: '/our-team' },
  { label: 'Initiatives', href: '/initiatives' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Gallery', href: '/gallery' },
];

const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/realgreengold/',
    Icon: FaFacebookF,
    aria: 'Visit Real Green Gold on Facebook',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    Icon: FaInstagram,
    aria: 'Visit Real Green Gold on Instagram',
  },
];

/* ── Decorative background shapes ─────────────────────────────────────── */

// Pear-shaped avocado outline (viewBox 0 0 100 140)
const AVOCADO_PATH =
  'M50 4 C62 4 68 20 70 36 C72 50 92 62 92 90 C92 120 74 136 50 136 C26 136 8 120 8 90 C8 62 28 50 30 36 C32 20 38 4 50 4 Z';

/* Half avocado: dark skin, soft flesh, brown pit. Opacity is set by the caller. */
function AvocadoShape({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 140"
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none absolute select-none ${className}`}
    >
      {/* skin */}
      <path d={AVOCADO_PATH} fill="#6FB43F" />
      {/* flesh */}
      <path
        d={AVOCADO_PATH}
        fill="#D6EC9A"
        transform="translate(50 70) scale(0.84) translate(-50 -70)"
      />
      {/* darker flesh ring around the pit */}
      <circle cx="50" cy="96" r="27" fill="#B8D96B" />
      {/* pit */}
      <circle cx="50" cy="96" r="19" fill="#8B5A2B" />
      <ellipse
        cx="43"
        cy="89"
        rx="5"
        ry="8"
        fill="#FFFFFF"
        opacity="0.3"
        transform="rotate(-25 43 89)"
      />
    </svg>
  );
}

/* Whole avocado silhouette (no cut) for smaller accents */
function AvocadoSolid({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 140"
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none absolute select-none ${className}`}
    >
      <path d={AVOCADO_PATH} fill="#4E9A2F" />
      <path
        d="M34 56 C38 44 44 30 50 22"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.35"
        fill="none"
      />
    </svg>
  );
}

/* Leaf with a centre vein */
function LeafShape({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 70"
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none absolute select-none ${className}`}
    >
      <path d="M4 50 C14 6 80 -2 116 14 C108 52 52 76 4 50 Z" fill="#5FA83A" />
      <path
        d="M8 48 C40 36 76 24 108 16"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.45"
        fill="none"
      />
    </svg>
  );
}

/* Heading with the short yellow underline used in the reference */
function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h4 className="text-xl font-bold text-white">{children}</h4>
      <span className="mt-2 block h-[3px] w-10 rounded-full bg-[#FBC02D]" />
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${poppins.className} relative isolate overflow-hidden bg-[#0F4620] text-white selection:bg-[#FBC02D] selection:text-[#0F3D1E]`}
    >
      {/* ── Background decoration (behind all content) ─────────────── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        {/* soft glow */}
        <div className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-[#1D7A35]/30 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 h-[360px] w-[360px] rounded-full bg-[#FBC02D]/10 blur-3xl" />

        {/* large half avocado, bottom right (cropped by the footer edge) */}
        <AvocadoShape className="-bottom-20 -right-12 h-[440px] w-[314px] rotate-[18deg] opacity-[0.13]" />

        {/* large half avocado, top left (cropped) */}
        <AvocadoShape className="-left-16 -top-14 h-[320px] w-[229px] -rotate-[24deg] opacity-[0.09]" />

        {/* small accents */}
        <AvocadoSolid className="left-[44%] top-[46%] hidden h-[110px] w-[79px] rotate-[32deg] opacity-[0.10] md:block" />
        <AvocadoSolid className="right-[26%] top-10 hidden h-[84px] w-[60px] -rotate-[20deg] opacity-[0.10] lg:block" />
        <AvocadoShape className="bottom-24 left-[8%] hidden h-[130px] w-[93px] rotate-[-12deg] opacity-[0.10] md:block" />

        {/* leaves */}
        <LeafShape className="left-[30%] top-6 hidden h-[56px] w-[96px] -rotate-[18deg] opacity-[0.12] md:block" />
        <LeafShape className="bottom-10 right-[34%] hidden h-[64px] w-[110px] rotate-[200deg] opacity-[0.10] md:block" />
        <LeafShape className="right-6 top-[40%] h-[48px] w-[82px] rotate-[24deg] opacity-[0.10]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* ── 1. Enquiry strip ───────────────────────────────────────── */}
        <div className="flex flex-col gap-8 py-12 lg:flex-row lg:items-center lg:justify-between lg:py-14">
          <div className="flex items-center gap-5 sm:gap-6">
            <span className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-[#FBC02D] text-[#5B2A06] sm:h-[88px] sm:w-[88px]">
              <Sprout size={36} strokeWidth={2} />
            </span>

            <div className="max-w-xl">
              <p className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FBC02D]">
                <Wheat size={16} />
                Agricultural Enterprise Ledger
              </p>
              <h3 className="text-2xl font-extrabold leading-tight sm:text-3xl">
                Real Green Gold Ltd • Kirehe, Rwanda
              </h3>
              <p className="mt-2 text-justify text-sm leading-relaxed text-white/85 sm:text-[0.95rem]">
                Connecting crop production, outgrower networks, livestock husbandry, pollinator stewardship, and practical farm education.
              </p>
            </div>
          </div>

          <Link
            href="/initiatives#produce-enquiry"
            className="group inline-flex w-fit shrink-0 items-center gap-4 rounded-full bg-white py-2 pl-7 pr-2 text-sm font-bold text-[#0F3D1E] transition-colors hover:bg-[#F5F2E8]"
          >
            <span>Enquire About Produce</span>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FBC02D] text-[#0F3D1E] transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </span>
          </Link>
        </div>

        <div className="border-t border-dashed border-white/25" />

        {/* ── 2. Main columns ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-12 py-14 md:grid-cols-12 md:gap-10">

          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3.5">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-[#FBC02D] bg-white p-1 shadow-md">
                <Image
                  src="/assets/real.jpg"
                  alt="Real Green Gold Ltd Logo"
                  fill
                  sizes="56px"
                  className="rounded-full object-contain p-0.5"
                  priority
                />
              </div>
              <div>
                <span className="block text-xl font-bold leading-none">
                  Real Green Gold <span className="text-[#FBC02D]">Ltd</span>
                </span>
                <span className="mt-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                  Integrated Farming Enterprise
                </span>
              </div>
            </div>

            <p className="mt-5 max-w-md text-justify text-sm leading-relaxed text-white/85">
              An integrated farm in Kirehe, Rwanda, producing avocado, banana, and fresh vegetables while exploring practical ways to connect crops, livestock, pollinators, soil care, and agricultural technology.
            </p>

            {/* Social channels */}
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ label, href, Icon, aria }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={aria}
                  title={label}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FBC02D] text-[#0F3D1E] transition-all duration-300 hover:-translate-y-1 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F4620]"
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <ColumnHeading>Quick Navigation</ColumnHeading>
            <ul className="space-y-3 text-[0.95rem]">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-2 text-white/85 transition-colors hover:text-[#FBC02D]"
                  >
                    <span className="h-[2px] w-0 bg-[#FBC02D] transition-all duration-300 group-hover:w-3" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <ColumnHeading>Verified Contact &amp; Location</ColumnHeading>
            <ul className="space-y-4 text-[0.95rem] text-white/90">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#FBC02D]" />
                <span className="leading-relaxed">Kirehe District, Eastern Province, Rwanda</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-[#FBC02D]" />
                <a href="tel:+250788667469" className="transition-colors hover:text-[#FBC02D]">
                  +250 788 667 469
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-[#FBC02D]" />
                <a
                  href="mailto:info@realgreengoldltd.com"
                  className="break-all transition-colors hover:text-[#FBC02D]"
                >
                  info@realgreengoldltd.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dashed border-white/25" />

        {/* ── 3. Bottom bar ──────────────────────────────────────────── */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 text-sm text-white/80 sm:flex-row">
          <p>
            Copyright © {currentYear} <span className="text-[#FBC02D]">Real Green Gold Ltd</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2 text-center sm:text-right">
              <ShieldCheck size={16} className="shrink-0 text-[#FBC02D]" />
              Kirehe, Rwanda • Sustainable Agriculture &amp; Farm Learning
            </span>

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FBC02D] text-[#0F3D1E] shadow-md transition-transform duration-300 hover:-translate-y-1"
            >
              <ChevronUp size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}