'use client';

import React from 'react';
import Image from 'next/image';
import { Handshake } from 'lucide-react';

type Partner = {
  id: string;
  name: string;
  role: string;
  logoUrl?: string;
  abbr: string;
};

const partnersList: Partner[] = [
  {
    id: 'partner-1',
    name: 'Mastercard Foundation',
    abbr: 'MCF',
    role: 'Youth Agribusiness & Skills',
    logoUrl: '/assets/home.jpg', // Replace with /assets/partners/mastercard-foundation.svg or png
  },
  {
    id: 'partner-2',
    name: 'Access Agriculture',
    abbr: 'AA',
    role: 'Agroecology Learning & Media',
    logoUrl: '/assets/home.jpg', // Replace with /assets/partners/access-agriculture.svg or png
  },
  {
    id: 'partner-3',
    name: 'Rwanda Youth in Agribusiness Forum',
    abbr: 'RYAF',
    role: 'Producer & Youth Network',
    logoUrl: '/assets/home.jpg', // Replace with /assets/partners/ryaf.svg or png
  },
];

export default function OurPartners() {
  return (
    <section className="bg-[#FAF9F6] text-[#0C1E12] border-t border-[#00A859]/20 py-8 selection:bg-[#E5B800] selection:text-[#0C1E12]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-4">
        
        {/* Compact Eyebrow Header */}
        <div className="flex items-center justify-between border-b border-[#00A859]/15 pb-2">
          <div className="flex items-center gap-2 text-[#00A859]">
            <Handshake size={14} />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#E5B800]">
              Institutional Partners
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#5A6259] uppercase tracking-wider">
            Collaborative Network
          </span>
        </div>

        {/* Minimal Partner Logo & Name Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {partnersList.map((partner) => (
            <div
              key={partner.id}
              className="border border-[#00A859]/20 bg-white p-3.5 flex items-center gap-3.5 shadow-2xs hover:border-[#00A859] transition-colors"
            >
              {/* Partner Emblem / Logo Frame */}
              <div className="relative h-11 w-11 shrink-0 bg-[#0C1E12] border border-[#00A859]/20 flex items-center justify-center overflow-hidden">
                {partner.logoUrl ? (
                  <Image
                    src={partner.logoUrl}
                    alt={partner.name}
                    fill
                    sizes="44px"
                    className="object-cover object-center opacity-90"
                  />
                ) : (
                  <span className="text-xs font-mono font-bold text-[#E5B800]">
                    {partner.abbr}
                  </span>
                )}
              </div>

              {/* Partner Info */}
              <div className="space-y-0.5 min-w-0">
                <h4
                  className="text-xs font-bold text-[#0C1E12] truncate"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {partner.name}
                </h4>
                <p className="text-[10px] font-mono text-[#5A6259] truncate">
                  {partner.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}