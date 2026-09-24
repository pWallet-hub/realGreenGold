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
  Compass,
  Building2
} from 'lucide-react';

export default function CommunityProduction() {
  return (
    <section className="py-16 bg-[#FAF9F6] text-[#0C1E12]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-10">
        
        {/* ── Main Panel Frame ────────────────────────────────────────────── */}
        <div className="border border-[#00A859]/25 bg-white shadow-2xs overflow-hidden relative">
          
          {/* Panel Top Status Header — Leaf Green Background */}
          <div className="bg-[#00A859] text-white px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono border-b border-[#00A859]">
            <div className="flex items-center gap-2">
              <span className="p-1 border border-white/40 bg-white/10 text-[#E5B800]">
                <Users size={12} />
              </span>
              <span className="font-bold uppercase tracking-[0.2em] text-[#E5B800]">
                OUTGROWER &amp; COMMUNITY NETWORK
              </span>
            </div>
            <span className="text-white/90 uppercase tracking-wider flex items-center gap-1.5 font-semibold">
              <Building2 size={11} className="text-[#E5B800]" />
              Kirehe Smallholder Producer Program
            </span>
          </div>

          <div className="p-6 sm:p-10 space-y-8">
            
            {/* Headline & Abstract Grid */}
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-1.5 border border-[#E5B800]/60 bg-[#E5B800]/10 px-2.5 py-0.5 text-[9px] font-mono uppercase tracking-[0.15em] text-[#0C1E12] font-bold">
                  <Compass size={10} className="text-[#00A859]" />
                  <span>GRASSROOTS INCLUSION LEDGER</span>
                </div>

                <h2 
                  className="text-2xl sm:text-4xl font-semibold text-[#0C1E12] leading-tight"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Small Scale Producer (SSP) Community Production
                </h2>

                <p className="text-xs sm:text-sm text-[#3A4239] leading-relaxed text-justify font-normal">
                  Real Green Gold Ltd is dedicated to empowering small-scale producers by providing comprehensive training and support. They help SSPs enhance their agricultural practices, optimize production capabilities, and increase their market competitiveness, fostering sustainable development in local communities.
                </p>
              </div>

              {/* Program Metrics Light Box */}
              <div className="lg:col-span-5 border border-[#00A859]/20 bg-[#FAF9F6] p-5 space-y-4">
                <span className="text-[8.5px] font-mono font-bold uppercase tracking-[0.2em] text-[#00A859] block border-b border-[#00A859]/15 pb-2">
                  PROGRAM FOCUS &amp; TARGETS
                </span>

                <div className="grid grid-cols-2 gap-4 font-mono text-[10px]">
                  <div className="space-y-1">
                    <span className="text-[#00A859] font-bold block text-sm">LOCAL IMPACT</span>
                    <span className="text-[#5A6259] text-[9px] block">Agronomic extension &amp; seed guidance</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[#0C1E12] font-bold block text-sm">VALUE CHAIN</span>
                    <span className="text-[#5A6259] text-[9px] block">Quality grading &amp; market aggregation</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Split Visual & Feature Block */}
            <div className="grid lg:grid-cols-12 gap-8 items-center pt-2 border-t border-[#00A859]/15">
              
              {/* Feature Cards Grid */}
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                <div className="border border-[#00A859]/15 bg-[#FAF9F6] p-4 space-y-2 hover:border-[#00A859] transition-colors">
                  <div className="flex items-center gap-2 text-[#00A859]">
                    <Award size={14} />
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#0C1E12]">
                      Capacity Building
                    </span>
                  </div>
                  <p className="text-[10.5px] text-[#5A6259] leading-relaxed text-justify font-normal">
                    Hands-on agronomic support, proper harvesting techniques, soil fertility management, and seed selection guidance.
                  </p>
                </div>

                <div className="border border-[#00A859]/15 bg-[#FAF9F6] p-4 space-y-2 hover:border-[#00A859] transition-colors">
                  <div className="flex items-center gap-2 text-[#00A859]">
                    <TrendingUp size={14} />
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#0C1E12]">
                      Market Access
                    </span>
                  </div>
                  <p className="text-[10.5px] text-[#5A6259] leading-relaxed text-justify font-normal">
                    Aggregation of local produce to meet commercial buyer standards and guarantee fair value returns for smallholders.
                  </p>
                </div>
              </div>

              {/* Light Panoramic Photo Frame */}
              <div className="lg:col-span-5 relative h-48 sm:h-52 w-full border border-[#00A859]/20 bg-[#FAF9F6] overflow-hidden group">
                <Image
                  src="/assets/home.jpg"
                  alt="Small Scale Producer agricultural work in Kirehe"
                  fill
                  className="object-cover brightness-95 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[8px] font-mono font-bold text-white uppercase">
                  <span className="bg-white/90 border border-[#00A859]/30 px-2 py-0.5 text-[#0C1E12]">
                    VERIFIED FIELD WORK
                  </span>
                  <span className="drop-shadow-xs">KIREHE SITE</span>
                </div>
              </div>

            </div>

            {/* Bottom Action Footer */}
            <div className="pt-4 border-t border-[#00A859]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <Link
                href="/about-us#community"
                className="inline-flex items-center justify-center gap-2 border border-[#00A859] bg-[#00A859] text-white px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#008A47] transition-colors shadow-2xs"
              >
                <span>Partner with SSP Network</span>
                <ArrowUpRight size={13} />
              </Link>

              <div className="flex items-center gap-2 text-[9.5px] font-mono text-[#00A859] font-bold uppercase tracking-wider">
                <ShieldCheck size={12} />
                <span>Verified Outgrower Community Initiative</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}