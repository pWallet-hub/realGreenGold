'use client';

import React from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { Handshake } from 'lucide-react';

// Load Poppins font matching site-wide standards
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

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
    logoUrl: '/assets/home.jpg',
  },
  {
    id: 'partner-2',
    name: 'Access Agriculture',
    abbr: 'AA',
    role: 'Agroecology Learning & Media',
    logoUrl: '/assets/home.jpg',
  },
  {
    id: 'partner-3',
    name: 'Rwanda Youth in Agribusiness Forum',
    abbr: 'RYAF',
    role: 'Producer & Youth Network',
    logoUrl: '/assets/home.jpg',
  },
];

export default function OurPartners() {
  return (
    <section className={`${poppins.className} bg-[#FAF9F6] text-[#0C1E12] border-t border-[#00A859]/20 py-8 sm:py-10 selection:bg-[#E5B800] selection:text-[#0C1E12]`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-4">
        
        {/* Compact Eyebrow Header */}
        <div className="flex items-center justify-between border-b border-[#00A859]/15 pb-2">
          <div className="flex items-center gap-1.5 text-[#00A859]">
            <Handshake size={14} />
            <span className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-[#E5B800]">
              INSTITUTIONAL PARTNERS
            </span>
          </div>
          <span className="text-[9px] font-mono text-[#5A6259] uppercase tracking-wider">
            Collaborative Network
          </span>
        </div>

        {/* Partner Logo & Name Grid */}
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
                <h4 className="text-xs font-semibold text-[#0C1E12] truncate">
                  {partner.name}
                </h4>
                <p className="text-[10px] font-mono text-[#5A6259] truncate text-justify font-normal">
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