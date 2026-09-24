'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  Mail, 
  Phone, 
  Sprout, 
  Compass, 
  Building2, 
  Calendar 
} from 'lucide-react';

export default function ContactStrip() {
  return (
    <section className="bg-[#0a4b2c] text-[#FAF9F6] border-t border-[#00A859]/30 py-16 px-6 md:px-12 selection:bg-[#E5B800] selection:text-[#0C1E12]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* ── 1. Section Eyebrow & Location Tag ─────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="inline-flex items-center gap-2 border border-[#E5B800]/40 bg-white/5 px-3.5 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-[#E5B800]">
            <Compass size={13} className="text-[#00A859]" />
            <span>Direct Inquiry Gateway • Real Green Gold Ltd</span>
          </div>

          <div className="text-[10px] font-mono text-[#FAF9F6]/50 uppercase tracking-widest">
            [OFFICE: KIREHE DISTRICT, RWANDA]
          </div>
        </div>

        {/* ── 2. Editorial Grid with Justified Body Copy ────────────────── */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: Direct Narrative & Official Verification Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <h3 
                className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-[1.15] text-[#FAF9F6]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Interested in our produce, farm learning, or a collaboration?
              </h3>
              
              <p className="text-xs sm:text-sm text-[#FAF9F6]/80 leading-relaxed text-justify">
                Tell us what you need and our team will respond. We maintain direct channels for commercial buyers, research partners, and visiting delegations across Eastern Rwanda.
              </p>
            </div>

            {/* Official Contact Ledger Box */}
            <div className="border border-[#00A859]/30 bg-white/5 p-5 space-y-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#E5B800] block border-b border-white/10 pb-2">
                Official Inquiries &amp; Direct Verification
              </span>

              <div className="space-y-2 pt-1 text-xs font-mono">
                <a 
                  href="mailto:info@realgreengoldltd.com"
                  className="flex items-center justify-between p-2.5 border border-white/10 bg-[#0C1E12] hover:border-[#00A859] hover:text-[#E5B800] transition-colors group"
                >
                  <span className="flex items-center gap-2 text-[#FAF9F6]/90">
                    <Mail size={14} className="text-[#00A859]" />
                    <span>info@realgreengoldltd.com</span>
                  </span>
                  <ArrowUpRight size={13} className="text-white/40 group-hover:text-[#E5B800] transition-colors" />
                </a>

                <a 
                  href="tel:+250788667469"
                  className="flex items-center justify-between p-2.5 border border-white/10 bg-[#0C1E12] hover:border-[#00A859] hover:text-[#E5B800] transition-colors group"
                >
                  <span className="flex items-center gap-2 text-[#FAF9F6]/90">
                    <Phone size={14} className="text-[#00A859]" />
                    <span>+250 788 667 469</span>
                  </span>
                  <ArrowUpRight size={13} className="text-white/40 group-hover:text-[#E5B800] transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Intent Gateway Cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-1 gap-4">
            
            {/* Intent Option 1: Commercial Produce */}
            <Link
              href="/initiatives#produce-enquiry"
              className="group border border-white/15 bg-white/5 p-6 hover:border-[#00A859] hover:bg-[#00A859]/10 transition-all duration-200 flex flex-col justify-between space-y-3"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 border border-[#00A859]/40 bg-[#0a4b2c] text-[#00A859]">
                    <Sprout size={18} />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-[#E5B800] font-bold uppercase tracking-wider block">
                      Intent 01 / Commercial Supply
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-[#FAF9F6]" style={{ fontFamily: 'var(--font-display)' }}>
                      Enquire About Produce
                    </h4>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-white/40 group-hover:text-[#E5B800] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <p className="text-xs text-[#FAF9F6]/75 leading-relaxed text-justify">
                Source avocado, banana, and fresh vegetables directly from our Kirehe harvest operations and registered farm networks.
              </p>
            </Link>

            {/* Intent Option 2: Farm Visits */}
            <Link
              href="/initiatives#visit-enquiry"
              className="group border border-white/15 bg-white/5 p-6 hover:border-[#00A859] hover:bg-[#00A859]/10 transition-all duration-200 flex flex-col justify-between space-y-3"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 border border-[#00A859]/40 bg-[#0a4b2c] text-[#00A859]">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-[#E5B800] font-bold uppercase tracking-wider block">
                      Intent 02 / Agronomic Visits
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-[#FAF9F6]" style={{ fontFamily: 'var(--font-display)' }}>
                      Discuss a Farm Visit
                    </h4>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-white/40 group-hover:text-[#E5B800] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <p className="text-xs text-[#FAF9F6]/75 leading-relaxed text-justify">
                Schedule a field tour, agroecological exchange, or practical demonstration at our integrated farm in Kirehe.
              </p>
            </Link>

            {/* Intent Option 3: Partnerships */}
            <Link
              href="/about-us#partnership"
              className="group border border-white/15 bg-white/5 p-6 hover:border-[#E5B800] hover:bg-[#E5B800]/10 transition-all duration-200 flex flex-col justify-between space-y-3"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 border border-[#E5B800]/40 bg-[#0a4b2c] text-[#E5B800]">
                    <Building2 size={18} />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-[#E5B800] font-bold uppercase tracking-wider block">
                      Intent 03 / Strategic Collaboration
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-[#FAF9F6]" style={{ fontFamily: 'var(--font-display)' }}>
                      Explore a Partnership
                    </h4>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-[#E5B800]/60 group-hover:text-[#E5B800] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <p className="text-xs text-[#FAF9F6]/75 leading-relaxed text-justify">
                Collaborate on agricultural extension, out-grower producer training, or youth-led agribusiness development initiatives.
              </p>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}