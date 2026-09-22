// app/components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E2620] text-[#FAF9F5] border-t border-[#D9D4C6] pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand & Context */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9 border border-[#D9D4C6] bg-white p-1">
                <Image
                  src="/assets/real.jpg"
                  alt="Real Green Gold Ltd Logo"
                  fill
                  sizes="36px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-lg italic font-bold leading-none block text-white" style={{ fontFamily: 'var(--font-display)' }}>
                  Real Green Gold <span className="text-[#3F6B4F]">Ltd</span>
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#A9812F]" style={{ fontFamily: 'var(--font-mono)' }}>
                  Integrated Farming Enterprise
                </span>
              </div>
            </div>

            <p className="text-xs text-[#D9D4C6] leading-relaxed max-w-md">
              An integrated farm in Kirehe, Rwanda, producing avocado, banana, and fresh vegetables while exploring practical ways to connect crops, livestock, pollinators, soil care, and agricultural technology[cite: 5].
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#D9D4C6] hover:text-white transition-colors inline-flex items-center gap-1"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Facebook <ArrowUpRight size={10} />
              </a>
              <span className="text-[#3F6B4F]">•</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#D9D4C6] hover:text-white transition-colors inline-flex items-center gap-1"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Instagram <ArrowUpRight size={10} />
              </a>
            </div>
          </div>

          {/* Core Navigation */}
          <div className="space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A9812F]" style={{ fontFamily: 'var(--font-mono)' }}>
              Navigation
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about-us" className="text-[#D9D4C6] hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="text-[#D9D4C6] hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/initiatives" className="text-[#D9D4C6] hover:text-white transition-colors">
                  Initiatives
                </Link>
              </li>
              <li>
                <Link href="/blogs-gallery" className="text-[#D9D4C6] hover:text-white transition-colors">
                  Blogs &amp; Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A9812F]" style={{ fontFamily: 'var(--font-mono)' }}>
              Verified Contact
            </p>
            <ul className="space-y-2.5 text-xs text-[#D9D4C6]">
              <li className="flex items-center gap-2">
                <MapPin size={13} className="text-[#3F6B4F] shrink-0" />
                <span>Kirehe District, Eastern Province, Rwanda</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={13} className="text-[#3F6B4F] shrink-0" />
                <a href="tel:+250788667469" className="hover:text-white transition-colors">
                  +250 788 667 469
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={13} className="text-[#3F6B4F] shrink-0" />
                <a href="mailto:info@realgreengoldltd.com" className="hover:text-white transition-colors">
                  info@realgreengoldltd.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#3F6B4F]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-[#D9D4C6]" style={{ fontFamily: 'var(--font-mono)' }}>
          <p>
            Copyright © {currentYear} Real Green Gold Ltd. All rights reserved[cite: 5].
          </p>
          <p className="text-[#8B9188]">
            Kirehe, Rwanda • Sustainable Agriculture &amp; Farm Learning[cite: 5]
          </p>
        </div>
      </div>
    </footer>
  );
}