import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Image from 'next/image';
import ContactStrip from '../components/ContactStrip';

export const metadata = {
  title: 'Blogs | Real Green Gold Ltd',
  description: 'Read updates, field notes, and stories from Real Green Gold Ltd.',
};

export default function BlogsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#1E2620]">
      <NavBar />
      <main className="flex-grow">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/assets/home.jpg"
            alt="Real Green Gold Ltd farm story and blog content"
            fill
            priority
            className="brightness-50 object-cover"
          />
          <div className="absolute inset-0 bg-[#1E2620]/45" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 text-center">
            <span className="inline-block border border-[#A9812F]/60 bg-[#1E2620]/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A9812F] backdrop-blur-md">
              Farm Journal
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold italic" style={{ fontFamily: 'var(--font-display)' }}>
              Blogs
            </h1>
            <div className="w-20 h-0.5 bg-[#A9812F] mt-4"></div>
            <p className="mt-4 max-w-2xl text-xs sm:text-sm text-[#D9D4C6]">
              Dated updates, field reflections, and practical learning from the farm and its wider network.
            </p>
          </div>
        </section>

        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="space-y-6">
            {[1, 2, 3].map((item) => (
              <article key={item} className="border border-[#D9D4C6] bg-white p-6 md:p-8 shadow-xs">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A9812F]" style={{ fontFamily: 'var(--font-mono)' }}>
                  12 Jan 2026
                </p>
                <h2 className="mt-3 text-2xl md:text-3xl font-bold italic text-[#1E2620]" style={{ fontFamily: 'var(--font-display)' }}>
                  Field note {item}: learning from the farm in real time
                </h2>
                <p className="mt-4 text-xs md:text-sm text-[#5A6259] leading-relaxed">
                  This page is prepared for blog articles, operational reflections, and updates that document what the farm is testing, observing, and improving.
                </p>
              </article>
            ))}
          </div>
        </section>

        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
}
