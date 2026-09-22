// app/components/ContactStrip.tsx
import React from 'react';
import Link from 'next/link';

export default function ContactStrip() {
  return (
    <section className="bg-[#1E2620] text-[#FAF9F5] border-t border-[#D9D4C6] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A9812F]">
            Direct Engagement
          </p>
          <h3 className="text-lg md:text-xl italic font-bold" style={{ fontFamily: 'var(--font-display)' }}>
            Interested in our produce, farm learning, or a collaboration?
          </h3>
          <p className="text-xs text-[#D9D4C6]">
            Tell us what you need and our team will respond.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
          <Link
            href="/initiatives#produce-enquiry"
            className="border border-[#A9812F] bg-[#A9812F] text-white px-4 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-[#8C6721] transition-colors"
          >
            Enquire About Produce
          </Link>
          <Link
            href="/initiatives#visit-enquiry"
            className="border border-[#D9D4C6] bg-transparent text-[#FAF9F5] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-[#1E2620] transition-colors"
          >
            Discuss a Visit
          </Link>
        </div>
      </div>
    </section>
  );
}