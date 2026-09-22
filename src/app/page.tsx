// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ServiceSection from './components/ServisSection';
import GetToKnowUs from './components/GetToKnowUs';
import EventsParticipation from './components/EventsParticipation';
import ContactStrip from './components/ContactStrip';

export default function Home() {
  return (
    <>
      {/* Navigation Header */}
      <NavBar />

      <main className="min-h-screen bg-[#FAF9F5] text-[#1E2620]">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <Image
            src="/assets/home.jpg"
            alt="Real Green Gold Ltd Kirehe Farm Landscape"
            fill
            priority
            quality={100}
            className="brightness-40 object-cover absolute inset-0 z-0"
          />
          
          <div className="relative z-10 text-center text-[#FAF9F5] max-w-4xl mx-auto px-6 space-y-6">
            <span className="inline-block border border-[#A9812F]/60 bg-[#1E2620]/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A9812F] backdrop-blur-md">
              Kirehe, Rwanda
            </span>

            <h1 className="text-3xl md:text-6xl font-bold italic leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Empowering Small Producers with Innovation
            </h1>

            <div className="w-20 h-0.5 bg-[#A9812F] mx-auto"></div>

            <p className="text-sm md:text-lg text-[#D9D4C6] max-w-2xl mx-auto leading-relaxed">
              We produce avocado, banana, and fresh vegetables while exploring practical ways to connect crops, livestock, pollinators, soil care, and agricultural technology.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/about-us"
                className="border border-[#3F6B4F] bg-[#3F6B4F] text-white px-7 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-[#345A42] transition-colors"
              >
                About Our Farm
              </Link>
              <Link
                href="/initiatives"
                className="border border-[#D9D4C6] bg-white/10 text-[#FAF9F5] px-7 py-3 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm hover:bg-white hover:text-[#1E2620] transition-colors"
              >
                Explore Initiatives
              </Link>
            </div>
          </div>
        </section>

        {/* Home Sections */}
        <ServiceSection />
        <GetToKnowUs />
        <EventsParticipation />

        {/* Global Contact Strip */}
        <ContactStrip />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}