'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Sprout, Users, Layers, Camera } from 'lucide-react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import FarmHighlights from './components/FarmHighlights';
import FounderStory from './components/FounderStory';
import FarmMoments from './components/FarmMoments';
import OurPartners from './components/OurPartners';
import ContactStrip from './components/ContactStrip';

const navigationGateways = [
  {
    title: 'About Us',
    href: '/about-us',
    icon: Sprout,
    description: 'Farm origin, integrated crop and livestock systems, founder journey, purpose, and values.',
  },
  {
    title: 'Our Team',
    href: '/our-team',
    icon: Users,
    description: 'Responsibilities, farm leadership, verified profile templates, and community participation.',
  },
  {
    title: 'Initiatives',
    href: '/initiatives',
    icon: Layers,
    description: 'Ten business and learning directions spanning agro-tourism, irrigation, crops, and ICT4Ag.',
  },
  {
    title: 'Blogs',
    href: '/blogs',
    icon: Camera,
    description: 'Dated field updates, founder reflections, and verified photo albums documenting farm growth.',
  },
];

/* Page background colour (also used to "cut" the grass silhouette out of the hero image) */
const PAGE_BG = '#F5F2E8';

/* Tileable grass + cattail silhouette for the bottom edge of the hero */
const GRASS_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='240' height='44' viewBox='0 0 240 44' fill='${PAGE_BG}'>
<rect y='38' width='240' height='6'/>
<path d='M2 44 Q4 24 9 12 Q8 28 9 44Z'/>
<path d='M12 44 Q14 30 20 22 Q18 34 18 44Z'/>
<path d='M22 44 Q22 20 26 6 Q29 24 28 44Z'/>
<path d='M32 44 Q36 32 42 26 Q39 36 38 44Z'/>
<path d='M44 44 Q44 28 49 16 Q50 30 50 44Z'/>
<rect x='60' y='12' width='1.6' height='32'/><ellipse cx='60.8' cy='10' rx='2.3' ry='7'/>
<path d='M68 44 Q70 30 75 20 Q75 34 74 44Z'/>
<path d='M78 44 Q80 26 86 14 Q85 30 85 44Z'/>
<path d='M90 44 Q92 34 98 30 Q95 38 95 44Z'/>
<path d='M100 44 Q100 24 105 10 Q108 28 107 44Z'/>
<path d='M112 44 Q116 30 122 24 Q119 36 118 44Z'/>
<path d='M124 44 Q125 28 130 18 Q130 32 130 44Z'/>
<rect x='138' y='10' width='1.6' height='34'/><ellipse cx='138.8' cy='8' rx='2.3' ry='7'/>
<path d='M146 44 Q148 30 154 22 Q152 36 152 44Z'/>
<path d='M156 44 Q157 22 162 8 Q164 28 163 44Z'/>
<path d='M168 44 Q172 32 178 28 Q175 38 174 44Z'/>
<path d='M180 44 Q181 26 186 16 Q187 32 186 44Z'/>
<path d='M190 44 Q192 34 198 26 Q196 38 195 44Z'/>
<path d='M200 44 Q200 22 205 12 Q208 28 207 44Z'/>
<rect x='214' y='14' width='1.6' height='30'/><ellipse cx='214.8' cy='12' rx='2.3' ry='7'/>
<path d='M222 44 Q224 30 230 20 Q229 34 228 44Z'/>
<path d='M232 44 Q233 32 238 24 Q238 36 238 44Z'/>
</svg>`;
const GRASS_URL = `url("data:image/svg+xml,${encodeURIComponent(GRASS_SVG)}")`;

export default function Home() {
  return (
    <>
      {/* ── 1. Main Navigation ─────────────────────────────────────────── */}
      <NavBar />

      <main className="min-h-screen bg-[#F5F2E8] text-[#203528] selection:bg-[#D8A82E] selection:text-[#203528]">

        {/* ── 2. Hero: image lives inside a rounded frame; page bg around it ── */}
        <div className="bg-[#F5F2E8] px-3 pt-3 sm:px-5 lg:px-6">
          <section className="relative z-0 flex min-h-[440px] items-center overflow-hidden rounded-[28px] bg-[#173A2B] pt-14 pb-24 sm:rounded-[40px] lg:pb-32">

            {/* Authentic Farm Background Image */}
            <Image
              src="/assets/home.jpg"
              alt="Real Green Gold Ltd integrated farm landscape in Kirehe, Rwanda"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="hero-background object-cover object-center brightness-[0.9]"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#10291F]/70 via-[#10291F]/35 to-[#10291F]/5" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10291F]/35 via-transparent to-[#10291F]/10" aria-hidden="true" />

            <div className="hero-content relative z-10 mx-auto w-full max-w-7xl px-6 py-8 sm:px-10 lg:px-16">
              <div className="max-w-3xl space-y-3.5">

              {/* Location Tag */}
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#F1CA66]">
                <Sprout size={18} className="text-[#A9D18E]" />
                <span>Rooted in Kirehe, Rwanda</span>
              </div>

              {/* Main Headline */}
              <h1
                className="max-w-3xl font-serif text-3xl font-medium leading-[1.08] text-white sm:text-4xl lg:text-5xl"
              >
                Growing a greener future, one harvest at a time.
              </h1>

              <div className="h-1 w-16 bg-[#D8A82E]" />

              <p className="max-w-2xl text-justify text-sm leading-relaxed text-white/90 sm:text-base">
                An integrated farming enterprise in Kirehe, Rwanda. We produce avocado, banana, and fresh vegetables while exploring practical ways to connect crops, livestock, pollinators, soil care, and agricultural technology.
              </p>

              <p className="text-sm font-semibold text-[#E8D8B0]">Avocado · Banana · Fresh vegetables</p>

              {/* Primary Hero CTAs */}
              <div className="flex flex-col items-start gap-2.5 sm:flex-row sm:items-center">
                <Link
                  href="/about-us"
                  className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-full border border-[#E8BD4C] bg-[#E8BD4C] px-6 text-sm font-semibold text-[#203528] shadow-md transition-colors hover:bg-[#F1CC68] sm:w-auto"
                >
                  <span>About Us</span>
                  <ArrowUpRight size={14} />
                </Link>

                <Link
                  href="/initiatives"
                  className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-full border border-white/65 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#203528] sm:w-auto"
                >
                  <span>Explore Initiatives</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>

              </div>
            </div>

            {/* Grass & cattail silhouette along the bottom edge */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[-1px] left-0 z-[5] h-[44px] w-full"
              style={{
                backgroundImage: GRASS_URL,
                backgroundRepeat: 'repeat-x',
                backgroundSize: '240px 44px',
                backgroundPosition: 'bottom left',
              }}
            />
          </section>
        </div>

        {/* ── 3. Four Core Visitor Journey Gateways (green feature panel) ─── */}
        {/* No background on this section: the hero image must stay visible behind the panel's overlap */}
        <section className="gw-section">
          <style>{`
            .gw-section {
              position: relative;
              z-index: 10;
              margin-top: -3.5rem;
              padding: 0 1.25rem 2.5rem;
              border-bottom: 1px solid #D8D2BE;
            }
            @media (min-width: 640px)  { .gw-section { margin-top: -4.5rem; padding: 0 2.5rem 3rem; } }
            @media (min-width: 1024px) { .gw-section { margin-top: -5.5rem; padding: 0 4rem 3.25rem; } }

            .gw-wrap {
              max-width: 1100px;
              margin: 0 auto;
            }

            /* Green rounded panel that straddles the hero */
            .gw-panel {
              position: relative;
              border-radius: 14px;
              background: linear-gradient(180deg, #1c6c37 0%, #165f2d 50%, #0f4a22 100%);
              padding: 0.9rem;
              box-shadow: 0 14px 32px rgba(10, 40, 20, 0.32);
            }

            /* Dashed inner frame */
            .gw-frame {
              border: 1px dashed rgba(255, 255, 255, 0.25);
              border-radius: 10px;
              padding: 1.6rem 0.5rem 1.75rem;
            }

            .gw-grid {
              display: grid;
              grid-template-columns: 1fr;
              row-gap: 1.5rem;
            }
            @media (min-width: 640px)  { .gw-grid { grid-template-columns: repeat(2, 1fr); } }
            @media (min-width: 1024px) { .gw-grid { grid-template-columns: repeat(4, 1fr); row-gap: 0; } }

            .gw-item {
              position: relative;
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
              padding: 0 1.1rem;
              text-decoration: none;
              color: #ffffff;
            }

            /* Dashed vertical dividers: span only the content height */
            @media (min-width: 1024px) {
              .gw-item:not(:last-child)::after {
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                height: 100%;
                border-right: 1px dashed rgba(255, 255, 255, 0.25);
              }
            }
            @media (min-width: 640px) and (max-width: 1023px) {
              .gw-item:nth-child(odd)::after {
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                height: 100%;
                border-right: 1px dashed rgba(255, 255, 255, 0.25);
              }
            }

            /* Round yellow icon */
            .gw-icon {
              width: 54px;
              height: 54px;
              border-radius: 50%;
              background: #fbc02d;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #5b2a06;
              margin-bottom: 0.7rem;
              transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s;
            }
            .gw-item:hover .gw-icon {
              transform: translateY(-4px) scale(1.05);
              box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
            }

            .gw-title {
              font-size: 0.88rem;
              font-weight: 700;
              line-height: 1.25;
              color: #ffffff;
              margin: 0 0 0.45rem;
            }

            .gw-desc {
              font-size: 0.8rem;
              line-height: 1.6;
              color: rgba(255, 255, 255, 0.92);
              margin: 0;
              max-width: 240px;
              text-align: justify;
              text-justify: inter-word;
              hyphens: auto;
            }

            .gw-item:focus-visible {
              outline: 2px solid #fbc02d;
              outline-offset: 6px;
              border-radius: 12px;
            }

            /* Sub-header under the panel */
            .gw-sub {
              display: flex;
              flex-direction: column;
              gap: 0.5rem;
              margin-top: 1.5rem;
              padding-bottom: 0.9rem;
              border-bottom: 1px solid #CFC7AE;
            }
            @media (min-width: 640px) {
              .gw-sub { flex-direction: row; align-items: flex-end; justify-content: space-between; }
            }
          `}</style>

          <div className="gw-wrap">
            <div className="gw-panel">
              <div className="gw-frame">
                <div className="gw-grid">
                  {navigationGateways.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <Link key={item.title} href={item.href} className="gw-item">
                        <div className="gw-icon">
                          <IconComponent size={22} strokeWidth={2.2} />
                        </div>
                        <h2 className="gw-title">{item.title}</h2>
                        <p className="gw-desc">{item.description}</p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Sub-header */}
            <div className="gw-sub">
              <span className="text-sm font-semibold text-[#68814A]">
                A working farm, growing every season
              </span>
              <span className="text-sm text-[#6F7466]">
                Get to know our land, people and practice
              </span>
            </div>
          </div>
        </section>

        <FarmHighlights />

        <FounderStory />

        <FarmMoments />

        <OurPartners />

        <ContactStrip />

      </main>

      <Footer />
    </>
  );
}