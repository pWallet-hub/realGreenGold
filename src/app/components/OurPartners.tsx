// components/OurPartners.tsx
import React from 'react';
import Image from 'next/image';

const verifiedCollaborators = [
  { name: 'Alliance for Science Rwanda', logo: '/assets/home.jpg' },
  { name: 'YPARD Rwanda', logo: '/assets/home.jpg' },
  { name: 'USAID Supported Projects', logo: '/assets/home.jpg' },
  { name: 'RYAF (Rwanda Youth in Agribusiness)', logo: '/assets/home.jpg' },
  { name: 'FAO Collaborations', logo: '/assets/home.jpg' },
  { name: 'Mastercard Foundation Networks', logo: '/assets/home.jpg' },
];

export default function OurPartners() {
  return (
    <section className="py-20 bg-[#F3F2ED] px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A9812F]" style={{ fontFamily: 'var(--font-mono)' }}>
            Collaborations &amp; Engagements
          </p>
          <h2 className="text-3xl font-bold italic text-[#1E2620]" style={{ fontFamily: 'var(--font-display)' }}>
            Working Relationships &amp; Networks
          </h2>
          <div className="w-16 h-0.5 bg-[#A9812F] mx-auto mt-2"></div>
          <p className="text-xs text-[#5A6259] max-w-xl mx-auto pt-1">
            Real Green Gold Ltd engages with institutions, youth networks, and agricultural initiatives to share field observations and explore practical value-chain solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center">
          {verifiedCollaborators.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 border border-[#D9D4C6] bg-white rounded-xs h-28 text-center space-y-2 group hover:border-[#1E2620] transition-colors"
            >
              <div className="relative w-12 h-12 grayscale group-hover:grayscale-0 transition-all">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <span className="text-[10px] font-semibold text-[#5A6259] line-clamp-2 leading-tight">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}