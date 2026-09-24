'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Users, 
  Sprout, 
  CheckCircle2, 
  ArrowUpRight, 
  Award, 
  TrendingUp, 
  ShieldCheck,
  Layers
} from 'lucide-react';

export default function CommunityProduction() {
  return (
    <section className="py-16 bg-white text-[#0C1E12] border-y border-[#00A859]/20">
      <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-10">
        
        {/* ── 1. Executive Top Header Ledger ──────────────────────────────── */}
        <div className="border border-[#00A859]/25 bg-[#FAF9F6] shadow-2xs overflow-hidden">
          <div className="bg-[#0C1E12] text-[#FAF9F6] px-6 py-3 flex flex-wrap items-center justify-between gap-3 border-b border-[#00A859]/20">
            <div className="flex items-center gap-2">
              <span className="p-1 border border-[#E5B800]/50 bg-white/5 text-[#E5B800]">
                <Users size={13} />
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#E5B800]">
                OUTGROWER &amp; COMMUNITY NETWORK
              </span>
            </div>
            <span className="text-[9.5px] font-mono text-[#FAF9F6]/70 uppercase tracking-wider">
              Kirehe District Producer Network • Rwanda
            </span>
          </div>

          <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1.5 max-w-2xl">
              <span className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-[#00A859] block">
                INCLUSIVE AGRICULTURAL DEVELOPMENT
              </span>
              <h2 
                className="text-2xl sm:text-3xl font-semibold text-[#0C1E12] leading-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Small Scale Producer (SSP) Community Production
              </h2>
            </div>

            <div className="text-left sm:text-right shrink-0">
              <span className="text-[10px] font-mono text-[#00A859] font-bold uppercase tracking-wider block">
                Grassroots Capacity Building
              </span>
              <span className="text-[9px] font-mono text-[#5A6259]">
                Verified Smallholder Outreach
              </span>
            </div>
          </div>
        </div>

        {/* ── 2. Staggered Visual Grid & Narrative Focus ───────────────────── */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Visual Showcase Grid with Staggered Frame */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            <div className="relative h-52 sm:h-56 w-full border border-[#00A859]/20 bg-[#0C1E12] shadow-2xs overflow-hidden group">
              <Image
                src="/assets/home.jpg"
                alt="Small Scale Producer agricultural work in Kirehe"
                fill
                className="object-cover brightness-95 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 left-2 bg-[#0C1E12]/90 border border-white/20 px-2 py-0.5 text-[#E5B800] text-[8px] font-mono font-bold uppercase tracking-wider">
                SSP FIELD WORK
              </div>
            </div>

            <div className="relative h-52 sm:h-56 w-full border border-[#00A859]/20 bg-[#0C1E12] shadow-2xs overflow-hidden group sm:translate-y-4">
              <Image
                src="/assets/home.jpg"
                alt="Planting seeds and soil preparation"
                fill
                className="object-cover brightness-95 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 left-2 bg-[#0C1E12]/90 border border-white/20 px-2 py-0.5 text-[#E5B800] text-[8px] font-mono font-bold uppercase tracking-wider">
                CROP TRIAL PLOTS
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative & Sub-System Cards */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs sm:text-sm text-[#3A4239] leading-relaxed text-justify font-normal">
              Real Green Gold Ltd is dedicated to empowering small-scale producers by providing comprehensive training and support. They help SSPs enhance their agricultural practices, optimize production capabilities, and increase their market competitiveness, fostering sustainable development in local communities.
            </p>

            {/* Sub-System Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-1">
              <div className="border border-[#00A859]/20 bg-[#FAF9F6] p-4 space-y-2 shadow-2xs hover:border-[#00A859] transition-colors">
                <div className="flex items-center gap-2 border-b border-[#00A859]/10 pb-1.5">
                  <span className="p-1 bg-[#00A859]/10 text-[#00A859]">
                    <Award size={13} />
                  </span>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#00A859]">
                    Capacity Building &amp; Extension
                  </span>
                </div>
                <p className="text-[10.5px] text-[#5A6259] leading-relaxed text-justify font-normal">
                  Hands-on agronomic support, proper harvesting techniques, soil fertility care, and seed selection guidance.
                </p>
              </div>

              <div className="border border-[#00A859]/20 bg-[#FAF9F6] p-4 space-y-2 shadow-2xs hover:border-[#00A859] transition-colors">
                <div className="flex items-center gap-2 border-b border-[#00A859]/10 pb-1.5">
                  <span className="p-1 bg-[#00A859]/10 text-[#00A859]">
                    <TrendingUp size={13} />
                  </span>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#00A859]">
                    Market Access &amp; Aggregation
                  </span>
                </div>
                <p className="text-[10.5px] text-[#5A6259] leading-relaxed text-justify font-normal">
                  Aggregation of local produce to meet commercial buyer standards and guarantee fair value returns for farmers.
                </p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#00A859]/15">
              <Link
                href="/about-us#community"
                className="inline-flex items-center justify-center gap-2 border border-[#00A859] bg-[#00A859] text-white px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#008A47] transition-colors shadow-2xs"
              >
                <span>Partner with SSP Network</span>
                <ArrowUpRight size={13} />
              </Link>

              <div className="flex items-center gap-1.5 text-[9.5px] font-mono text-[#00A859] font-bold uppercase tracking-wider">
                <ShieldCheck size={12} />
                <span>Verified Community Initiative</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}