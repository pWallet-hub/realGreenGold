'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sprout, 
  Truck, 
  ArrowUpRight, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Layers, 
  PackageCheck 
} from 'lucide-react';

export default function AgriculturalInnovation() {
  return (
    <section className="py-16 bg-[#FAF9F6] text-[#00A859]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-12">
        
        {/* ── Block 1: Agricultural Innovation Promotion ──────────────────── */}
        <div className="border border-[#00A859]/25 bg-white shadow-xs overflow-hidden transition-all duration-300 hover:border-[#00A859]/60">
          
          {/* Top Status Bar */}
          <div className="bg-[#00A859] text-[#FAF9F6] px-6 py-3 flex flex-wrap items-center justify-between gap-3 border-b border-[#00A859]/20">
            <div className="flex items-center gap-2">
              <span className="p-1 border border-[#E5B800]/50 bg-white/5 text-[#E5B800]">
                <Sprout size={13} />
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#E5B800]">
                DEMONSTRATIONS &amp; ADOPTION
              </span>
            </div>
            <span className="text-[9.5px] font-mono text-[#FAF9F6]/70 uppercase tracking-wider">
              Agronomic Extension • Field Learning
            </span>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Core Narrative */}
              <div className="lg:col-span-7 space-y-4">
                <h2 
                  className="text-2xl sm:text-3xl font-semibold text-[#00A859] leading-tight"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Agricultural Innovation Promotion
                </h2>

                <p className="text-xs sm:text-sm text-[#3A4239] leading-relaxed text-justify font-normal">
                  The company actively promotes the adoption of cutting-edge agricultural innovations. Through practical demonstrations and hands-on farm training, Real Green Gold Ltd equips farmers with advanced techniques and technologies that boost productivity, improve crop quality, and contribute to sustainable farming practices.
                </p>

                {/* Sub-Pillars Grid */}
                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  <div className="border border-[#00A859]/15 bg-[#FAF9F6] p-3 space-y-1">
                    <div className="flex items-center gap-1.5 text-[9px] font-mono font-bold uppercase text-[#00A859]">
                      <Zap size={11} />
                      <span>Advanced Techniques</span>
                    </div>
                    <p className="text-[10.5px] text-[#5A6259] leading-relaxed text-justify">
                      Practical, hands-on field demonstrations introducing modern cultivation methods.
                    </p>
                  </div>

                  <div className="border border-[#00A859]/15 bg-[#FAF9F6] p-3 space-y-1">
                    <div className="flex items-center gap-1.5 text-[9px] font-mono font-bold uppercase text-[#00A859]">
                      <ShieldCheck size={11} />
                      <span>Sustainable Inputs</span>
                    </div>
                    <p className="text-[10.5px] text-[#5A6259] leading-relaxed text-justify">
                      Promoting soil-friendly, bio-based inputs to protect long-term plot yield.
                    </p>
                  </div>
                </div>

                {/* Badge Strip */}
                <div className="pt-2 flex flex-wrap items-center gap-3 text-[9.5px] font-mono text-[#00A859] font-bold">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 size={12} /> Field Demonstrations
                  </span>
                  <span className="text-[#00A859]/30">•</span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 size={12} /> Farmer Extension
                  </span>
                  <span className="text-[#00A859]/30">•</span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 size={12} /> Productivity Boost
                  </span>
                </div>
              </div>

              {/* Right Column: Visual Feature Grid */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                <div className="relative h-44 sm:h-48 w-full border border-[#00A859]/20 bg-[#00A859] overflow-hidden group">
                  <Image
                    src="/assets/home.jpg"
                    alt="Green plant innovation close-up"
                    fill
                    className="object-cover brightness-95 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-[#00A859]/90 border border-white/20 px-2 py-0.5 text-[#E5B800] text-[8px] font-mono font-bold uppercase tracking-wider">
                    CROP TECH
                  </div>
                </div>

                <div className="relative h-44 sm:h-48 w-full border border-[#00A859]/20 bg-[#00A859] overflow-hidden group">
                  <Image
                    src="/assets/home.jpg"
                    alt="Assorted produce quality observation"
                    fill
                    className="object-cover brightness-95 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-[#00A859]/90 border border-white/20 px-2 py-0.5 text-[#E5B800] text-[8px] font-mono font-bold uppercase tracking-wider">
                    QUALITY YIELD
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── Block 2: Fruits and Vegetables Logistics ───────────────────── */}
        <div className="border border-[#00A859]/25 bg-white shadow-xs overflow-hidden transition-all duration-300 hover:border-[#00A859]/60">
          
          {/* Top Status Bar */}
          <div className="bg-[#00A859] text-[#FAF9F6] px-6 py-3 flex flex-wrap items-center justify-between gap-3 border-b border-[#00A859]/20">
            <div className="flex items-center gap-2">
              <span className="p-1 border border-[#E5B800]/50 bg-white/5 text-[#E5B800]">
                <Truck size={13} />
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#E5B800]">
                SUPPLY CHAIN &amp; COLD CHAIN MANAGEMENT
              </span>
            </div>
            <span className="text-[9.5px] font-mono text-[#FAF9F6]/70 uppercase tracking-wider">
              Produce Aggregation • Value Chain Efficiency
            </span>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Visual Feature Grid */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-3 order-2 lg:order-1">
                <div className="relative h-44 sm:h-48 w-full border border-[#00A859]/20 bg-[#00A859] overflow-hidden group">
                  <Image
                    src="/assets/home.jpg"
                    alt="Assorted fresh fruits aggregation"
                    fill
                    className="object-cover brightness-95 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-[#00A859]/90 border border-white/20 px-2 py-0.5 text-[#E5B800] text-[8px] font-mono font-bold uppercase tracking-wider">
                    AGGREGATION
                  </div>
                </div>

                <div className="relative h-44 sm:h-48 w-full border border-[#00A859]/20 bg-[#0C1E12] overflow-hidden group">
                  <Image
                    src="/assets/home.jpg"
                    alt="Harvesting fresh vegetables in Kirehe"
                    fill
                    className="object-cover brightness-95 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-[#00A859]/90 border border-white/20 px-2 py-0.5 text-[#E5B800] text-[8px] font-mono font-bold uppercase tracking-wider">
                    FRESH HARVEST
                  </div>
                </div>
              </div>

              {/* Right Column: Core Narrative */}
              <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
                <h2 
                  className="text-2xl sm:text-3xl font-semibold text-[#00A859] leading-tight"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Fruits and Vegetables Logistics
                </h2>

                <p className="text-xs sm:text-sm text-[#3A4239] leading-relaxed text-justify font-normal">
                  Real Green Gold Ltd manages the efficient logistics and aggregation of farm inputs and produce, ensuring a seamless supply chain for a multi-level production value chain. Their expertise in logistics guarantees that fresh fruits and vegetables reach their destinations in optimal condition, maintaining quality and freshness.
                </p>

                {/* Sub-Pillars Grid */}
                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  <div className="border border-[#00A859]/15 bg-[#FAF9F6] p-3 space-y-1">
                    <div className="flex items-center gap-1.5 text-[9px] font-mono font-bold uppercase text-[#00A859]">
                      <Layers size={11} />
                      <span>Input &amp; Produce Aggregation</span>
                    </div>
                    <p className="text-[10.5px] text-[#5A6259] leading-relaxed text-justify">
                      Streamlining farm inputs and local harvests into structured delivery channels.
                    </p>
                  </div>

                  <div className="border border-[#00A859]/15 bg-[#FAF9F6] p-3 space-y-1">
                    <div className="flex items-center gap-1.5 text-[9px] font-mono font-bold uppercase text-[#00A859]">
                      <PackageCheck size={11} />
                      <span>Quality &amp; Freshness Guarantee</span>
                    </div>
                    <p className="text-[10.5px] text-[#5A6259] leading-relaxed text-justify">
                      Optimized handling ensuring fresh produce arrives at buyers in peak condition.
                    </p>
                  </div>
                </div>

                {/* Call To Action */}
                <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <Link
                    href="/contact?topic=Supply%20Chain%20Enquiry"
                    className="inline-flex items-center justify-center gap-2 border border-[#00A859] bg-[#00A859] text-white px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#008A47] transition-colors shadow-2xs"
                  >
                    <span>Enquire About Supply Logistics</span>
                    <ArrowUpRight size={13} />
                  </Link>

                  <span className="text-[9.5px] font-mono text-[#5A6259] uppercase tracking-wider">
                    Multi-Level Value Chain
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}