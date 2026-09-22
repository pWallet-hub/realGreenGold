// app/about-us/page.tsx
import React from 'react';
import Image from 'next/image';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import AboutUsSection from '../components/AboutUsSection';
import MissionVisionSection from '../components/MissionVisionSection';
import OurPartners from '../components/OurPartners';
import ContactStrip from '../components/ContactStrip';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#1E2620]">
      <NavBar />
      
      <main className="flex-grow">
        {/* Editorial Hero Header */}
        <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/assets/home.jpg"
            alt="Real Green Gold Ltd Farm in Kirehe, Rwanda"
            fill
            priority
            quality={100}
            className="brightness-40 object-cover absolute inset-0 z-0"
          />
          <div className="absolute inset-0 bg-[#1E2620]/30 backdrop-blur-[1px] z-0"></div>
          
          <div className="relative z-10 text-center text-[#FAF9F5] max-w-4xl mx-auto px-6 space-y-4">
            <span 
              className="inline-block border border-[#A9812F]/60 bg-[#1E2620]/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A9812F] backdrop-blur-md"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Kirehe, Eastern Rwanda
            </span>
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold italic leading-tight" 
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Integrated Farming &amp; Enterprise
            </h1>
            <div className="w-20 h-0.5 bg-[#A9812F] mx-auto"></div>
            <p className="text-xs sm:text-sm text-[#D9D4C6] max-w-2xl mx-auto leading-relaxed">
              We grow avocado, banana, and fresh vegetables while exploring practical ways to connect crops, livestock, pollinators, soil care, and agricultural technology.
            </p>
          </div>
        </section>

        {/* Core Narrative & Founder Journey */}
        <AboutUsSection />

        {/* Purpose, Direction & Operating Values */}
        <MissionVisionSection />

        {/* Verified Collaborators & Networks */}
        <OurPartners />

        {/* Global Action Strip */}
        <ContactStrip />
      </main>

      <Footer />
    </div>
  );
}