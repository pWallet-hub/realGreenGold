// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import FarmHighlights from './components/FarmHighlights';
import FounderStory from './components/FounderStory';
import FarmMoments from './components/FarmMoments';
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
              Real Green Gold Ltd
            </h1>

            <div className="w-20 h-0.5 bg-[#A9812F] mx-auto"></div>

            <p className="text-sm md:text-lg text-[#D9D4C6] max-w-2xl mx-auto leading-relaxed">
              An integrated farm and learning site exploring avocado, banana, vegetables, livestock, soil health, and practical agricultural innovation.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/about-us"
                className="border border-[#3F6B4F] bg-[#3F6B4F] text-white px-7 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-[#345A42] transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/initiatives"
                className="border border-[#D9D4C6] bg-white/10 text-[#FAF9F5] px-7 py-3 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm hover:bg-white hover:text-[#1E2620] transition-colors"
              >
                Initiatives
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              { title: 'About Us', href: '/about-us', text: 'Farm origin, founder journey, values and enquiry path.' },
              { title: 'Our Team', href: '/our-team', text: 'Responsibility, community work and practical leadership.' },
              { title: 'Initiatives', href: '/initiatives', text: 'Ten business and learning directions with enquiry flow.' },
              { title: 'Blog', href: '/blogs', text: 'Featured stories, updates and field reflections.' },
              { title: 'Gallery', href: '/gallery', text: 'Photo records from the farm, team and learning work.' },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group border border-[#D9D4C6] bg-white p-6 shadow-xs transition-transform hover:-translate-y-1 hover:border-[#3F6B4F]"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A9812F]" style={{ fontFamily: 'var(--font-mono)' }}>
                  Explore
                </p>
                <h2 className="mt-3 text-2xl font-bold italic text-[#1E2620]" style={{ fontFamily: 'var(--font-display)' }}>
                  {item.title}
                </h2>
                <p className="mt-3 text-xs leading-relaxed text-[#5A6259]">{item.text}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Home Sections */}
        <FarmHighlights />
        <FounderStory />
        <FarmMoments />

        {/* Global Contact Strip */}
        <ContactStrip />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}