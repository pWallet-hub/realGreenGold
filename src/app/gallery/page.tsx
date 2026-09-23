import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Image from 'next/image';
import ContactStrip from '../components/ContactStrip';

export const metadata = {
  title: 'Gallery | Real Green Gold Ltd',
  description: 'View photographs from the farm, team work, field activity, and learning moments at Real Green Gold Ltd.',
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#1E2620]">
      <NavBar />
      <main className="flex-grow">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/assets/home.jpg"
            alt="Real Green Gold Ltd gallery content"
            fill
            priority
            className="brightness-50 object-cover"
          />
          <div className="absolute inset-0 bg-[#1E2620]/45" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 text-center">
            <span className="inline-block border border-[#A9812F]/60 bg-[#1E2620]/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A9812F] backdrop-blur-md">
              Photo Record
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold italic" style={{ fontFamily: 'var(--font-display)' }}>
              Gallery
            </h1>
            <div className="w-20 h-0.5 bg-[#A9812F] mt-4"></div>
            <p className="mt-4 max-w-2xl text-xs sm:text-sm text-[#D9D4C6]">
              Authentic farm imagery showing crop work, team participation, learning visits, and the natural environment of the farm.
            </p>
          </div>
        </section>

        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative h-72 border border-[#D9D4C6] bg-[#1E2620] overflow-hidden group">
                <Image
                  src="/assets/home.jpg"
                  alt={`Real Green Gold gallery image ${item}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1E2620]/80 to-transparent p-4 text-white">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#A9812F]" style={{ fontFamily: 'var(--font-mono)' }}>
                    Farm view
                  </p>
                  <p className="mt-1 text-xs italic">Caption for image {item}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
}
