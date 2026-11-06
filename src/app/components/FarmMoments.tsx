'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Wheat, ArrowUpRight, Camera, Droplets, Leaf, Flower2, Users } from 'lucide-react';

const farmMomentsData = [
  {
    id: 1,
    icon: Droplets,
    title: 'Crop & Irrigation Observation',
    caption: 'Field monitoring across avocado, banana, and vegetable plots in Kirehe.',
    src: '/assets/avocado.jpg',
  },
  {
    id: 2,
    icon: Leaf,
    title: 'Soil & Compost Stewardship',
    caption: 'Organic matter management connecting livestock care with soil fertility.',
    src: '/assets/soil.jpg',
  },
  {
    id: 3,
    icon: Flower2,
    title: 'Pollinator Habitat Care',
    caption: 'Flowering spaces and bee sanctuary management integrated with crop areas.',
    src: '/assets/pollinator.jpg',
  },
  {
    id: 4,
    icon: Users,
    title: 'Community & Agronomic Learning',
    caption: 'Practical exchange and field visits with local farmers and collaborators.',
    src: '/assets/community.jpg',
  },
];

/* Long, thin arrow like the reference */
function LongArrow() {
  return (
    <svg
      width="60"
      height="16"
      viewBox="0 0 60 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 9 C 20 7.5, 38 8.5, 57 8" />
      <path d="M50 2 L 57 8 L 50 14" />
    </svg>
  );
}

export default function FarmMoments() {
  return (
    <section className="border-y border-[#D8D2BE] bg-[#F5F2E8] py-16 text-[#0F3D1E] selection:bg-[#FBC02D] selection:text-[#0F3D1E] lg:py-20">
      <div className="mx-auto max-w-7xl space-y-14 px-6 sm:px-10 lg:px-16">

        {/* ═══ Top: heading + narrative ═══════════════════════════════════ */}
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">

          {/* Left: label, heading, narrative */}
          <div className="space-y-5 lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="flex items-center text-[#FBC02D]">
                <span className="h-[2px] w-8 bg-[#FBC02D]" />
                <Wheat size={22} strokeWidth={2} className="-ml-1" />
              </span>
              <span className="text-base font-semibold text-[#1F8A3B]">Work, Participation &amp; Learning</span>
            </div>

            <h2 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-[#0A2410] sm:text-4xl lg:text-[2.6rem]">
              Farm moments that show the work behind the farm
            </h2>

            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#8B7134]">
              Documented Archives • Kirehe
            </p>

            <div className="space-y-4 text-justify text-[0.95rem] leading-relaxed text-[#4E594A]">
              <p>
                Real Green Gold Ltd builds its work through visible practice: crop management, livestock care, irrigation observation, composting, environmental stewardship, and community learning. We document these moments so visitors, partners, and producers can see how the farm is evolving.
              </p>
              <p>
                The farm is not only a production site; it is also a working learning space where practical knowledge is shared with care and transparency.
              </p>
            </div>
          </div>

          {/* Right: record note + archive action */}
          <div className="space-y-5 lg:col-span-5 lg:pt-[3.25rem]">
            <div className="relative rounded-2xl border-l-4 border-[#FBC02D] bg-white p-6 shadow-[0_8px_24px_rgba(15,61,30,0.08)]">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FBC02D] text-[#5B2A06]">
                  <Camera size={18} />
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#8B7134]">
                  Field Practice Record
                </span>
              </div>
              <p className="text-justify text-sm leading-relaxed text-[#62685B]">
                Photographs document daily activities, crop integration, and team practice on our Kirehe farm site.
              </p>
            </div>

            <Link
              href="/gallery"
              className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#0F3D1E] py-2 pl-7 pr-2 text-sm font-bold text-white transition-colors hover:bg-[#0B2E16]"
            >
              <span>View documented archives</span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FBC02D] text-[#0F3D1E] transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </div>

        {/* ═══ Bottom: four moment cards ═════════════════════════════════ */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {farmMomentsData.map((moment) => {
            const IconComponent = moment.icon;
            return (
              <article
                key={moment.id}
                className="group flex flex-col rounded-[22px] bg-[#0F4620] shadow-[0_10px_30px_rgba(15,70,32,0.2)] transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Photo */}
                <div className="relative h-44 w-full overflow-hidden rounded-t-[22px] bg-[#0C1E12]">
                  <Image
                    src={moment.src}
                    alt={moment.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 rounded-full bg-[#0C1E12]/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                    Field note 0{moment.id}
                  </div>
                </div>

                {/* Yellow icon circle straddling photo and body */}
                <div className="relative z-10 -mt-9 mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full border-4 border-[#0F4620] bg-[#FBC02D] text-[#5B2A06] shadow-md">
                  <IconComponent size={30} strokeWidth={2} />
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col items-center px-6 pb-6 pt-4 text-center">
                  <h3 className="text-lg font-bold leading-snug text-white">{moment.title}</h3>
                  <span className="my-3 h-[3px] w-14 rounded-full bg-[#FBC02D]" />
                  <p className="flex-1 text-justify text-sm leading-relaxed text-white/90">{moment.caption}</p>
                  <Link
                    href="/gallery"
                    aria-label={`View ${moment.title} in the gallery`}
                    className="mt-5 text-white transition-transform duration-200 hover:translate-x-1 hover:text-[#FBC02D]"
                  >
                    <LongArrow />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}