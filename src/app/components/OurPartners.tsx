'use client';

import React from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

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
    <section
      className={`${poppins.className} border-t border-[#D8D2BE] bg-white py-7 text-[#203528] selection:bg-[#FBC02D] selection:text-[#203528] lg:py-9`}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">

        {/* Quiet heading line */}
        <div className="mb-5 flex flex-col items-center gap-0 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4F713C]">
            Institutional Partners
          </h2>
          <p className="text-sm text-[#8A8F82]">Collaborative Network</p>
        </div>

        {/* Logo strip: full colour, clear and visible */}
        <ul className="grid grid-cols-1 items-start gap-y-5 sm:grid-cols-3 sm:gap-x-6">
          {partnersList.map((partner) => (
            <li key={partner.id} className="group flex flex-col items-center text-center">
              <div className="relative h-16 w-full max-w-[200px]">
                {partner.logoUrl ? (
                  <Image
                    src={partner.logoUrl}
                    alt={`${partner.name} logo`}
                    fill
                    sizes="200px"
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <span className="flex h-full items-center justify-center text-4xl font-bold text-[#2E9444]">
                    {partner.abbr}
                  </span>
                )}
              </div>

              <p className="mt-2 text-sm font-semibold text-[#203528]">{partner.name}</p>
              <p className="text-xs text-[#8A8F82]">{partner.role}</p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}