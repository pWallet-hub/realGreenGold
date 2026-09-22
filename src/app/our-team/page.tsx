// src/app/our-team/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ContactStrip from '../components/ContactStrip';
import { User, Sprout, HeartHandshake, ShieldCheck, ArrowUpRight, Award, Compass, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Our Team | Real Green Gold Ltd',
  description: 'Meet the people behind Real Green Gold Ltd and learn how responsibility, practical skills, and community engagement shape our farm in Kirehe, Rwanda.',
};

export default function OurTeamPage() {
  // Coverage areas and responsibilities across the integrated farm
  const responsibilityPillars = [
    {
      title: "Farm Operations & Production",
      description: "Managing daily planning, crop observation, and harvest schedules across avocado, banana, and fresh vegetable production plots.",
      icon: Sprout,
    },
    {
      title: "Crops & Water Management",
      description: "Overseeing irrigation systems, monitoring dry-season soil moisture, and maintaining farm water infrastructure.",
      icon: Compass,
    },
    {
      title: "Livestock & Soil Fertility",
      description: "Managing animal care for cows, goats, poultry, and rabbits, while coordinating zero-grazing manure collection for composting.",
      icon: ShieldCheck,
    },
    {
      title: "Community & Farm Learning",
      description: "Coordinating guided farm visits, student learning interactions, and local producer knowledge sharing.",
      icon: BookOpen,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#1E2620]">
      <NavBar />

      <main className="flex-grow">
        {/* Editorial Hero Header */}
        <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/assets/home.jpg"
            alt="Real Green Gold Ltd Farm Team Working in Kirehe"
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
              Responsibility &amp; Livelihoods
            </span>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold italic leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              The People Behind the Farm
            </h1>
            <div className="w-20 h-0.5 bg-[#A9812F] mx-auto"></div>
            <p className="text-xs sm:text-sm text-[#D9D4C6] max-w-2xl mx-auto leading-relaxed">
              Real Green Gold Ltd grows through the people who care for the farm, organize its work, and share what they learn.
            </p>
          </div>
        </section>

        {/* Culture & People Introduction */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A9812F]" style={{ fontFamily: 'var(--font-mono)' }}>
                  Working Culture
                </p>
                <h2 className="text-3xl md:text-4xl font-bold italic text-[#1E2620]" style={{ fontFamily: 'var(--font-display)' }}>
                  Practical Experience &amp; Continuous Learning
                </h2>
                <div className="w-16 h-0.5 bg-[#A9812F] mt-2"></div>
              </div>

              <p className="text-xs md:text-sm text-[#5A6259] leading-relaxed">
                Real Green Gold Ltd grows through the people who care for the farm, organize its work, and share what they learn. Our team approach brings practical experience together with curiosity about better ways of farming. We value technology when it helps people perform useful tasks and make informed decisions.
              </p>

              <p className="text-xs md:text-sm text-[#5A6259] leading-relaxed">
                We are building a working culture that gives people clear responsibilities, supports learning, and welcomes contributions from the surrounding community. Our goal is to create room for women, young people, and people with different experiences to participate meaningfully in the farm’s development.
              </p>

              <div className="pt-2">
                <a
                  href="#collaborate"
                  className="inline-flex items-center gap-2 border border-[#3F6B4F] bg-[#3F6B4F] text-white px-6 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-[#345A42] transition-colors"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  Discuss a Collaboration
                </a>
              </div>
            </div>

            <div className="relative h-[400px] w-full border border-[#D9D4C6] bg-[#1E2620] shadow-sm">
              <Image
                src="/assets/home.jpg"
                alt="RGG Team Participation in Kirehe Farm Activities"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 border border-white/20 bg-[#1E2620]/85 p-3 text-white backdrop-blur-xs max-w-xs">
                <p className="text-[9px] font-bold uppercase tracking-wider text-[#A9812F]" style={{ fontFamily: 'var(--font-mono)' }}>
                  Community &amp; Team
                </p>
                <p className="text-xs italic mt-0.5">
                  Building shared responsibility across crop care, irrigation, and learning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Verified Founder Profile */}
        <section className="py-16 bg-[#F3F2ED] border-y border-[#D9D4C6] px-6">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A9812F]" style={{ fontFamily: 'var(--font-mono)' }}>
                Leadership
              </p>
              <h2 className="text-3xl font-bold italic text-[#1E2620]" style={{ fontFamily: 'var(--font-display)' }}>
                Founder &amp; Executive Leadership
              </h2>
              <div className="w-16 h-0.5 bg-[#A9812F] mt-2"></div>
            </div>

            <div className="border border-[#D9D4C6] bg-white p-8 md:p-10 rounded-sm shadow-xs grid md:grid-cols-3 gap-8 items-start">
              <div className="relative h-64 md:h-full w-full border border-[#D9D4C6] bg-[#1E2620]">
                <Image
                  src="/assets/home.jpg"
                  alt="Pacifique Nshimiyimana - Founder and CEO"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="md:col-span-2 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold italic text-[#1E2620]" style={{ fontFamily: 'var(--font-display)' }}>
                    Pacifique Nshimiyimana
                  </h3>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#A9812F] mt-0.5" style={{ fontFamily: 'var(--font-mono)' }}>
                    Founder and CEO
                  </p>
                </div>

                <p className="text-xs md:text-sm text-[#5A6259] leading-relaxed">
                  Pacifique founded Real Green Gold Ltd as his first business. His background in biotechnology, agricultural enterprise, and farmer engagement informs the farm’s direction. He connects the practical lessons of farming with a wider commitment to entrepreneurship and leadership that responds to community needs. At RGG, his role is to guide strategy, build relationships, and support the team in translating ideas into workable activities.
                </p>

                <div className="pt-2 border-t border-[#EDEAE0] flex flex-wrap gap-4">
                  <Link
                    href="/about-us"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3F6B4F] hover:text-[#1E2620] transition-colors"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    Read Founder Story &amp; Values <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Operational Coverage Areas */}
        <section className="py-20 px-6 max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A9812F]" style={{ fontFamily: 'var(--font-mono)' }}>
              Organization
            </p>
            <h2 className="text-3xl font-bold italic text-[#1E2620]" style={{ fontFamily: 'var(--font-display)' }}>
              Farm Responsibilities &amp; Roles
            </h2>
            <div className="w-16 h-0.5 bg-[#A9812F] mx-auto mt-2"></div>
            <p className="text-xs text-[#5A6259] pt-1">
              Work on the farm is structured around clear operational coverage areas. Team members hold specific responsibilities to ensure reliable production, animal husbandry, and visitor engagement.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {responsibilityPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="border border-[#D9D4C6] bg-white p-6 rounded-xs space-y-3 shadow-xs">
                  <div className="w-9 h-9 border border-[#3F6B4F]/30 bg-[#F1F5F1] flex items-center justify-center text-[#3F6B4F]">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-sm font-bold text-[#1E2620]">{pillar.title}</h3>
                  <p className="text-xs text-[#5A6259] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Community & Learning Invitation */}
        <section id="collaborate" className="py-16 bg-[#1E2620] text-[#FAF9F5] px-6 border-t border-[#D9D4C6]">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A9812F]" style={{ fontFamily: 'var(--font-mono)' }}>
              Collaboration &amp; Exchange
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold italic" style={{ fontFamily: 'var(--font-display)' }}>
              Learn with Us or Contribute a Skill
            </h2>
            <p className="text-xs sm:text-sm text-[#D9D4C6] max-w-2xl mx-auto leading-relaxed">
              Interested in learning with us or contributing a practical skill? Tell us about your experience and the kind of collaboration you have in mind.
            </p>

            <div className="pt-4 flex justify-center">
              <Link
                href="/initiatives#visit-enquiry"
                className="inline-flex items-center gap-2 border border-[#A9812F] bg-[#A9812F] text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-wider hover:bg-[#8C6721] transition-colors"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                <HeartHandshake size={15} /> Discuss a Collaboration
              </Link>
            </div>
          </div>
        </section>

        {/* Global Contact Strip */}
        <ContactStrip />
      </main>

      <Footer />
    </div>
  );
}