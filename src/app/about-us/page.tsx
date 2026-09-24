'use client';

import React from 'react';
import Image from 'next/image';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import AboutUsSection from '../components/AboutUsSection';
import MissionVisionSection from '../components/MissionVisionAndValues';
import OurPartners from '../components/OurPartners';
import ContactStrip from '../components/ContactStrip';
import { Sprout, MapPin, ArrowUpRight } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#0C1E12] selection:bg-[#E5B800] selection:text-[#0C1E12]">
      {/* Primary Global Navigation (Transparent Fixed Header) */}
      <NavBar />

      <main className="flex-grow">
        {/* ── Editorial Hero Header with Transparent Fixed Navigation Integration ── */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-[#00A859]/10 bg-[#0C1E12]">
          
          {/* Background Image Layer — Full Bleed Under Nav */}
          <Image
            src="/assets/home.jpg"
            alt="Real Green Gold Ltd integrated farm in Kirehe, Rwanda"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center brightness-60 contrast-[1.05] scale-105 transition-transform duration-1000"
          />

          {/* Transparent Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C1E12]/80 via-[#0C1E12]/50 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1E12]/90 via-transparent to-black/30 z-10" />

          {/* Content Container — pt-32 ensures content clears the fixed transparent NavBar */}
          <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-24 w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Main Typography Focus */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Location Badge */}
                <div className="inline-flex items-center gap-2 border border-[#E5B800]/50 bg-[#0C1E12]/60 backdrop-blur-md px-3.5 py-1.5 text-xs font-mono uppercase tracking-[0.22em] text-[#E5B800]">
                  <MapPin size={13} className="text-[#00A859]" />
                  <span>Kirehe District • Eastern Province, Rwanda</span>
                </div>

                {/* Main Headline */}
                <h1
                  className="text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.05] font-normal text-[#FAF9F6] drop-shadow-sm"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  A farm built from <span className="text-[#00A859] italic font-medium">questions</span>, not a business plan.
                </h1>

                {/* Lead Paragraph */}
                <p className="text-base sm:text-lg leading-relaxed text-[#E6EBE2] max-w-2xl font-normal drop-shadow-xs">
                  We grow avocado, banana, and fresh vegetables while working out, plot by plot, how crops, livestock, pollinators, and soil care support each other in practice.
                </p>

                {/* Direct Action Bar */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href="#farm-system"
                    className="inline-flex items-center gap-2 border border-[#00A859]/80 bg-[#00A859]/90 text-white px-7 py-3.5 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#008A47] transition-colors shadow-sm"
                  >
                    Explore Farm Plots <ArrowUpRight size={14} />
                  </a>
                  <a
                    href="/initiatives"
                    className="inline-flex items-center gap-2 border border-white/40 bg-black/20 backdrop-blur-md text-[#FAF9F6] px-7 py-3.5 text-xs font-mono font-bold uppercase tracking-wider hover:bg-white hover:text-[#0C1E12] transition-colors"
                  >
                    View Initiatives
                  </a>
                </div>

              </div>

              {/* Spatial Metadata Card — Glassmorphism Effect */}
              <div className="lg:col-span-4 border border-white/20 bg-[#0C1E12]/55 backdrop-blur-md p-6 sm:p-8 space-y-5 text-[#FAF9F6] shadow-lg">
                <div className="flex items-center justify-between border-b border-white/15 pb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E5B800]">
                    System Architecture
                  </span>
                  <Sprout size={16} className="text-[#00A859]" />
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-[10px] font-mono uppercase text-[#E6EBE2]/80">Integrated Crops</p>
                    <p className="text-sm font-semibold text-[#FAF9F6]">Avocado, Banana &amp; Fresh Produce</p>
                  </div>
                  <div className="border-t border-white/15 pt-2">
                    <p className="text-[10px] font-mono uppercase text-[#E6EBE2]/80">Soil &amp; Nutrient Cycling</p>
                    <p className="text-sm font-semibold text-[#FAF9F6]">Zero-Grazing Aerobic Composting</p>
                  </div>
                  <div className="border-t border-white/15 pt-2">
                    <p className="text-[10px] font-mono uppercase text-[#E6EBE2]/80">Stewardship</p>
                    <p className="text-sm font-semibold text-[#FAF9F6]">Bee Sanctuary &amp; Biodiversity</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/15 flex items-center justify-between text-[11px] font-mono text-[#E5B800]">
                  <span>Organic Focus</span>
                  <span>Est. Kirehe</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Section Components ───────────────────────────────────────── */}
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