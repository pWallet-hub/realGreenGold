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
  Compass, 
  ShieldCheck, 
} from 'lucide-react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

// Load Poppins font with specified weights matching site-wide standards
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${poppins.className} bg-[#0C1E12] text-[#FAF9F6] border-t border-[#00A859]/30 pt-16 pb-8 selection:bg-[#E5B800] selection:text-[#0C1E12]`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-12">
        
        {/* ── 1. Top Institutional Banner Ledger ───────────────────────────── */}
        <div className="border border-[#00A859]/20 bg-white/5 p-6 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-6 backdrop-blur-xs">
          <div className="space-y-1.5 max-w-xl">
            <div className="inline-flex items-center gap-2 border border-[#E5B800]/50 bg-white/5 px-2.5 py-0.5 text-[9px] font-mono uppercase tracking-[0.15em] text-[#E5B800]">
              <Compass size={11} className="text-[#00A859]" />
              <span>AGRICULTURAL ENTERPRISE LEDGER</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#FAF9F6] tracking-tight">
              Real Green Gold Ltd • Kirehe, Rwanda
            </h3>
            <p className="text-xs text-[#FAF9F6]/80 leading-relaxed text-justify font-normal">
              Connecting crop production, outgrower networks, livestock husbandry, pollinator stewardship, and practical farm education.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/initiatives#produce-enquiry"
              className="inline-flex items-center gap-1.5 border border-[#E5B800] bg-[#E5B800] text-[#0C1E12] px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#c9a000] transition-colors shadow-2xs"
            >
              <span>Enquire About Produce</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>

        {/* ── 2. Primary Navigation & Contact Grid ────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-2">
          
          {/* Brand Identity & Context */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              {/* Circular Enlarged Logo Container */}
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-[#E5B800] bg-white p-1 shadow-md shrink-0">
                <Image
                  src="/assets/real.jpg"
                  alt="Real Green Gold Ltd Logo"
                  fill
                  sizes="48px"
                  className="object-contain rounded-full p-0.5"
                  priority
                />
              </div>

              <div>
                <span className="text-lg font-semibold leading-none block text-[#FAF9F6]">
                  Real Green Gold <span className="text-[#00A859]">Ltd</span>
                </span>
                <span className="text-[9px] font-mono font-bold uppercase tracking-[0.18em] text-[#E5B800] mt-1 block">
                  Integrated Farming Enterprise
                </span>
              </div>
            </div>

            <p className="text-xs text-[#FAF9F6]/80 leading-relaxed text-justify font-normal max-w-md">
              An integrated farm in Kirehe, Rwanda, producing avocado, banana, and fresh vegetables while exploring practical ways to connect crops, livestock, pollinators, soil care, and agricultural technology.
            </p>

            {/* Verified Social Media Channels */}
            <div className="pt-3 flex items-center gap-4">
              <a
                href="https://www.facebook.com/realgreengold/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Real Green Gold on Facebook"
                title="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center border border-[#E5B800]/70 bg-[#FAF9F6]/10 text-[#E5B800] transition-colors hover:border-[#E5B800] hover:bg-[#E5B800] hover:text-[#0C1E12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5B800] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C1E12]"
              >
                <FaFacebookF size={17} aria-hidden="true" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Real Green Gold on Instagram"
                title="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center border border-[#E5B800]/70 bg-[#FAF9F6]/10 text-[#E5B800] transition-colors hover:border-[#E5B800] hover:bg-[#E5B800] hover:text-[#0C1E12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5B800] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C1E12]"
              >
                <FaInstagram size={17} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links Navigation */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-[#E5B800] block border-b border-[#00A859]/20 pb-2">
              QUICK NAVIGATION
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link href="/about-us" className="text-[#FAF9F6]/80 hover:text-[#E5B800] transition-colors flex items-center gap-1">
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="text-[#FAF9F6]/80 hover:text-[#E5B800] transition-colors flex items-center gap-1">
                  <span>Our Team</span>
                </Link>
              </li>
              <li>
                <Link href="/initiatives" className="text-[#FAF9F6]/80 hover:text-[#E5B800] transition-colors flex items-center gap-1">
                  <span>Initiatives</span>
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-[#FAF9F6]/80 hover:text-[#E5B800] transition-colors flex items-center gap-1">
                  <span>Blogs</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-[#FAF9F6]/80 hover:text-[#E5B800] transition-colors flex items-center gap-1">
                  <span>Gallery</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-[#E5B800] block border-b border-[#00A859]/20 pb-2">
              VERIFIED CONTACT &amp; LOCATION
            </span>
            <ul className="space-y-3 text-xs text-[#FAF9F6]/85 font-normal">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[#00A859] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Kirehe District, Eastern Province, Rwanda
                </span>
              </li>
              <li className="flex items-center gap-2.5 font-mono">
                <Phone size={14} className="text-[#00A859] shrink-0" />
                <a href="tel:+250788667469" className="hover:text-[#E5B800] transition-colors">
                  +250 788 667 469
                </a>
              </li>
              <li className="flex items-center gap-2.5 font-mono">
                <Mail size={14} className="text-[#00A859] shrink-0" />
                <a href="mailto:info@realgreengoldltd.com" className="hover:text-[#E5B800] transition-colors">
                  info@realgreengoldltd.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ── 3. Bottom Legal & Copyright Bar ─────────────────────────────── */}
        <div className="pt-8 border-t border-[#00A859]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-[9.5px] font-mono text-[#FAF9F6]/70">
          <p>
            Copyright © {currentYear} Real Green Gold Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-[#00A859] font-bold">
            <ShieldCheck size={12} />
            <span>Kirehe, Rwanda • Sustainable Agriculture &amp; Farm Learning</span>
          </div>
        </div>

      </div>
    </footer>
  );
}