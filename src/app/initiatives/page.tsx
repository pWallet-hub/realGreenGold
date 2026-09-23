import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Image from 'next/image';
import CommunityProduction from '../components/CommunityProduction';
import AgriculturalInnovation from '../components/AgriculturalInnovation';
import ContactStrip from '../components/ContactStrip';

export const metadata = {
  title: 'Initiatives | Real Green Gold Ltd',
  description: 'Explore the ten business and learning directions behind Real Green Gold Ltd, from production and agro-tourism to community enterprise and farm education.',
};

export default function InitiativesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#1E2620]">
      <NavBar />
      <main className="flex-grow">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/assets/home.jpg"
            alt="Real Green Gold Ltd farm initiative landscape"
            fill
            priority
            className="brightness-50 object-cover"
          />
          <div className="absolute inset-0 bg-[#1E2620]/45" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 text-center">
            <span className="inline-block border border-[#A9812F]/60 bg-[#1E2620]/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A9812F] backdrop-blur-md">
              Farm Business &amp; Learning
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold italic" style={{ fontFamily: 'var(--font-display)' }}>
              Initiatives
            </h1>
            <div className="w-20 h-0.5 bg-[#A9812F] mt-4"></div>
            <p className="mt-4 max-w-2xl text-xs sm:text-sm text-[#D9D4C6]">
              Ten anchor directions combining production, enterprise, agro-tourism, community learning, and practical innovation.
            </p>
          </div>
        </section>

        <CommunityProduction />
        <AgriculturalInnovation />
        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
}
