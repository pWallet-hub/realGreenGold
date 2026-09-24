'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Compass, ArrowUpRight, Sprout, Users, Layers, Camera } from 'lucide-react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import FarmHighlights from './components/FarmHighlights';
import FounderStory from './components/FounderStory';
import FarmMoments from './components/FarmMoments';
import OurPartners from './components/OurPartners';
import ContactStrip from './components/ContactStrip';

const navigationGateways = [
  {
    title: 'About Us',
    href: '/about-us',
    tag: '01 / FOUNDATION',
    icon: Sprout,
    description: 'Farm origin, integrated crop and livestock systems, founder journey, purpose, and values.',
  },
  {
    title: 'Our Team',
    href: '/our-team',
    tag: '02 / PEOPLE',
    icon: Users,
    description: 'Responsibilities, farm leadership, verified profile templates, and community participation.',
  },
  {
    title: 'Initiatives',
    href: '/initiatives',
    tag: '03 / PRACTICE',
    icon: Layers,
    description: 'Ten business and learning directions spanning agro-tourism, irrigation, crops, and ICT4Ag.',
  },
  {
    title: 'Blogs',
    href: '/blogs',
    tag: '04 / ARCHIVES',
    icon: Camera,
    description: 'Dated field updates, founder reflections, and verified photo albums documenting farm growth.',
  },
];

export default function Home() {
  return (
    <>
      {/* ── 1. Main Navigation ─────────────────────────────────────────── */}
      <NavBar />

      <main className="min-h-screen bg-[#FAF9F6] text-[#0C1E12] selection:bg-[#E5B800] selection:text-[#0C1E12]">
        
        {/* ── 2. Editorial Hero Section ───────────────────────────────────── */}
        <section className="relative h-[55vh] min-h-[480px] flex items-center justify-center overflow-hidden border-b border-[#00A859]/30 bg-[#0C1E12]">
          
          {/* Authentic Farm Background Image */}
          <Image
            src="/assets/home.jpg"
            alt="Real Green Gold Ltd integrated farm landscape in Kirehe, Rwanda"
            fill
            priority
            quality={90}
            className="object-cover object-center opacity-30 brightness-90"
          />

          <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-20 text-center space-y-8">
            
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2 border border-[#E5B800]/50 bg-[#0C1E12]/80 backdrop-blur-xs px-3.5 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-[#E5B800]">
              <Compass size={13} className="text-[#00A859]" />
              <span>Integrated Farm • Kirehe District, Rwanda</span>
            </div>

            {/* Main Headline */}
            <h1 
              className="text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.1] text-[#FAF9F6]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Real Green Gold Ltd
            </h1>

            {/* Gold Divider Line */}
            <div className="w-16 h-0.5 bg-[#E5B800] mx-auto" />

            {/* Core Message Text (Justified) */}
            <p className="text-sm sm:text-base md:text-lg text-[#FAF9F6]/85 max-w-2xl mx-auto leading-relaxed text-justify">
              An integrated farming enterprise in Kirehe, Rwanda. We produce avocado, banana, and fresh vegetables while exploring practical ways to connect crops, livestock, pollinators, soil care, and agricultural technology.
            </p>

            {/* Primary Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/about-us"
                className="w-full sm:w-auto border border-[#00A859] bg-[#00A859] text-white px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#008A47] transition-colors shadow-2xs inline-flex items-center justify-center gap-2"
              >
                <span>About Us</span>
                <ArrowUpRight size={14} />
              </Link>

              <Link
                href="/initiatives"
                className="w-full sm:w-auto border border-white/30 bg-white/5 text-[#FAF9F6] backdrop-blur-xs px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-wider hover:bg-white hover:text-[#0C1E12] transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>Explore Initiatives</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>

          </div>
        </section>

        {/* ── 3. Four Core Visitor Journey Gateways ───────────────────────── */}
        <section className="py-16 bg-[#FAF9F6] border-b border-[#00A859]/20">
          <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-8">
            
            {/* Sub-header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#00A859]/20 pb-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#E5B800]">
                Website Navigation Gateway
              </span>
              <span className="text-xs font-mono text-[#5A6259]">
                Four Primary Visitor Pathways
              </span>
            </div>

            {/* Gateway Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {navigationGateways.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group border border-[#00A859]/20 bg-white p-6 shadow-2xs flex flex-col justify-between space-y-4 hover:border-[#00A859] transition-all duration-200"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b border-[#00A859]/10 pb-2">
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#E5B800]">
                          {item.tag}
                        </span>
                        <IconComponent size={15} className="text-[#00A859]" />
                      </div>

                      <h2 
                        className="text-2xl font-normal text-[#0C1E12]" 
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {item.title}
                      </h2>

                      {/* Card Description (Justified) */}
                      <p className="text-xs text-[#5A6259] leading-relaxed text-justify">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#00A859]/10 flex items-center justify-between text-[10px] font-mono text-[#00A859] font-bold uppercase tracking-wider">
                      <span>Explore Route</span>
                      <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>

          </div>
        </section>

        <FarmHighlights />

        <FounderStory />

        <FarmMoments />

        <OurPartners />

        <ContactStrip />

      </main>

      <Footer />
    </>
  );
}