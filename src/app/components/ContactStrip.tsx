'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  Mail,
  Phone,
  Sprout,
  Wheat,
  Building2,
  Calendar,
  MapPin,
} from 'lucide-react';

const intents = [
  {
    icon: Sprout,
    href: '/initiatives#produce-enquiry',
    label: 'Intent 01 / Commercial Supply',
    title: 'Enquire About Produce',
    description:
      'Source avocado, banana, and fresh vegetables directly from our Kirehe harvest operations and registered farm networks.',
  },
  {
    icon: Calendar,
    href: '/initiatives#visit-enquiry',
    label: 'Intent 02 / Agronomic Visits',
    title: 'Discuss a Farm Visit',
    description:
      'Schedule a field tour, agroecological exchange, or practical demonstration at our integrated farm in Kirehe.',
  },
  {
    icon: Building2,
    href: '/about-us#partnership',
    label: 'Intent 03 / Strategic Collaboration',
    title: 'Explore a Partnership',
    description:
      'Collaborate on agricultural extension, out-grower producer training, or youth-led agribusiness development initiatives.',
  },
];

const contactLines = [
  {
    icon: Mail,
    href: 'mailto:info@realgreengoldltd.com',
    text: 'info@realgreengoldltd.com',
  },
  {
    icon: Phone,
    href: 'tel:+250788667469',
    text: '+250 788 667 469',
  },
];

export default function ContactStrip() {
  return (
    <section className="bg-[#F5F2E8] px-3 py-10 text-[#FAF9F6] selection:bg-[#FBC02D] selection:text-[#0F3D1E] sm:px-5 lg:px-6 lg:py-14">
      {/* Inset green panel, echoing the hero frame at the top of the page */}
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#0F3D1E] p-3 shadow-[0_18px_44px_rgba(15,61,30,0.28)] sm:rounded-[36px] sm:p-4">
        {/* faint dotted texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '26px 26px',
          }}
        />

        {/* dashed inner frame, same detail as the gateway panel */}
        <div className="relative rounded-[22px] border border-dashed border-white/25 px-5 py-10 sm:rounded-[28px] sm:px-10 lg:px-14 lg:py-14">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">

            {/* ── Left: message + official contact ───────────────────── */}
            <div className="space-y-7 lg:col-span-5">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex items-center text-[#FBC02D]">
                    <span className="h-[2px] w-8 bg-[#FBC02D]" />
                    <Wheat size={22} strokeWidth={2} className="-ml-1" />
                  </span>
                  <span className="text-sm font-semibold text-[#FBC02D] sm:text-base">
                    Direct Inquiry Gateway • Real Green Gold Ltd
                  </span>
                </div>

                <h2
                  className="text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Interested in our produce, farm learning, or a collaboration?
                </h2>

                <p className="text-justify text-[0.95rem] leading-relaxed text-white/85">
                  Tell us what you need and our team will respond. We maintain direct channels for commercial buyers, research partners, and visiting delegations across Eastern Rwanda.
                </p>
              </div>

              {/* Contact card */}
              <div className="rounded-2xl bg-[#F5F2E8] p-5 text-[#0F3D1E] shadow-[0_10px_28px_rgba(0,0,0,0.18)]">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#8B7134]">
                  Official Inquiries &amp; Direct Verification
                </p>

                <div className="mt-4 space-y-2.5">
                  {contactLines.map(({ icon: Icon, href, text }) => (
                    <a
                      key={text}
                      href={href}
                      className="group flex items-center gap-3 rounded-xl bg-white px-3 py-2.5 transition-shadow hover:shadow-md"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FBC02D] text-[#5B2A06]">
                        <Icon size={18} />
                      </span>
                      <span className="flex-1 truncate text-sm font-semibold sm:text-[0.95rem]">{text}</span>
                      <ArrowUpRight
                        size={16}
                        className="text-[#0F3D1E]/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#1F8A3B]"
                      />
                    </a>
                  ))}
                </div>

                <p className="mt-4 flex items-center gap-2 text-xs font-medium text-[#62685B]">
                  <MapPin size={14} className="text-[#1F8A3B]" />
                  Office: Kirehe District, Rwanda
                </p>
              </div>
            </div>

            {/* ── Right: three ways to get in touch ───────────────────── */}
            <div className="space-y-4 lg:col-span-7">
              {intents.map(({ icon: Icon, href, label, title, description }) => (
                <Link
                  key={title}
                  href={href}
                  className="group flex items-start gap-4 rounded-2xl bg-white p-5 text-[#0F3D1E] shadow-[0_10px_28px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.24)] sm:gap-5 sm:p-6"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FBC02D] text-[#5B2A06] sm:h-16 sm:w-16">
                    <Icon size={26} strokeWidth={2} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8B7134]">{label}</p>
                    <h3
                      className="mt-1 text-lg font-bold leading-snug text-[#0A2410] sm:text-xl"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {title}
                    </h3>
                    <p className="mt-2 text-justify text-sm leading-relaxed text-[#5A6259]">{description}</p>
                  </div>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0F3D1E] text-white transition-colors duration-300 group-hover:bg-[#FBC02D] group-hover:text-[#0F3D1E]">
                    <ArrowUpRight size={16} strokeWidth={2.5} />
                  </span>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}