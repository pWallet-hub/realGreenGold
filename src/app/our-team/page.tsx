'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { 
  Compass, 
  ArrowUpRight, 
  User, 
  Sprout, 
  ShieldCheck, 
  BookOpen, 
  HeartHandshake, 
  CheckCircle2, 
  Layers, 
  MapPin, 
  Users 
} from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ContactStrip from '../components/ContactStrip';

// Load Poppins font with specified weights
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

// Operational Coverage Areas
const responsibilityPillars = [
  {
    title: 'Farm Operations & Harvest',
    subtitle: 'PLANNING & SUPERVISION',
    description: 'Actual planning, daily operational supervision, and crop harvest responsibilities across avocado, banana, and vegetable plots in Kirehe.',
    evidence: 'Field planning logs & harvest tally records',
    icon: Sprout,
  },
  {
    title: 'Crops & Water Management',
    subtitle: 'IRRIGATION STEWARDSHIP',
    description: 'Overseeing irrigation infrastructure, dry-period soil moisture monitoring, and maintaining practical water usage tools.',
    evidence: 'Moisture tracking & system maintenance',
    icon: Compass,
  },
  {
    title: 'Livestock & Soil Fertility',
    subtitle: 'REGENERATIVE INPUTS',
    description: 'Managing animal care for cattle, goats, poultry, and rabbits while coordinating zero-grazing manure collection for compost production.',
    evidence: 'Feeding routines & compost batch records',
    icon: ShieldCheck,
  },
  {
    title: 'Visitors & Community Learning',
    subtitle: 'KNOWLEDGE EXCHANGE',
    description: 'Coordinating guided farm visits, agronomic student interactions, and practical learning exchanges with local smallholder farmers.',
    evidence: 'Visitor logs & exchange notes',
    icon: BookOpen,
  },
  {
    title: 'Records & Communication',
    subtitle: 'DOCUMENTATION LEDGER',
    description: 'Maintaining accurate farm production records, photography archives, initiative documentation, and incoming enquiry channels.',
    evidence: 'Verified photo archives & enquiry logs',
    icon: Layers,
  },
];

// Team Members List
const verifiedTeam = [
  {
    id: 'team-1',
    name: 'Pacifique Nshimiyimana',
    role: 'Founder and CEO',
    location: 'Kirehe, Rwanda',
    image: '/assets/home.jpg',
    responsibility: 'Executive Strategy & Strategic Partnerships',
    bio: 'Pacifique founded Real Green Gold Ltd as his first business. His background in biotechnology, agricultural enterprise, and farmer engagement informs the farm’s direction. He connects the practical lessons of farming with a wider commitment to entrepreneurship and leadership that responds to community needs. At RGG, his role is to guide strategy, build relationships, and support the team in translating ideas into workable activities.',
    learningQuote: 'Farming teaches us that an idea must respect the reality of the land and the needs of the people doing the work.',
    tasks: ['Guiding RGG enterprise strategy and initiative development', 'Building relationships with produce buyers, institutions, and visitors'],
    improvement: 'Established connected crop-livestock composting protocols on the Kirehe site.',
  },
  {
    id: 'team-2',
    name: 'Verified Team Member',
    role: 'Operations & Agronomy Lead',
    location: 'Kirehe Site',
    image: '/assets/home.jpg',
    responsibility: 'Farm Operations & Field Oversight',
    bio: 'Responsible for daily field operations and crop management. Oversees seasonal planting, irrigation scheduling, and soil fertility management across our avocado, banana, and fresh vegetable fields. Works directly with local farm hands and community visitors.',
    learningQuote: 'Observing crop moisture daily prevents water waste and helps us understand exact soil needs.',
    tasks: ['Supervising daily field tasks and harvest grading', 'Maintaining zero-grazing manure collection for composting'],
    improvement: 'Improved compost turning schedules to reduce decomposition time.',
  },
];

export default function OurTeamPage() {
  return (
    <div className={`${poppins.className} min-h-screen flex flex-col bg-[#FAF9F6] text-[#0C1E12] selection:bg-[#E5B800] selection:text-[#0C1E12]`}>
      <NavBar />

      <main className="flex-grow space-y-12">
        
        {/* ── 1. Hero Header Section ──────────────────────────────────────── */}
        <section className="relative h-[55vh] min-h-[480px] flex items-center justify-center overflow-hidden border-b border-[#00A859]/30 bg-[#0C1E12]">
          <Image
    src="/assets/home.jpg"
    alt="Real Green Gold Ltd Farm Team Working in Kirehe, Rwanda"
    fill
    priority
    quality={95}
    sizes="100vw"
    className="object-cover object-center brightness-60 contrast-[1.05] scale-105 transition-transform duration-1000"
  />

  {/* Transparent Gradient Overlays */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#0C1E12]/80 via-[#0C1E12]/50 to-transparent z-10" />
  <div className="absolute inset-0 bg-gradient-to-t from-[#0C1E12]/90 via-transparent to-black/30 z-10" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-5 pt-10">
            <div className="inline-flex items-center gap-2 border border-[#E5B800]/60 bg-[#0C1E12]/80 backdrop-blur-md px-3.5 py-1 text-xs font-mono uppercase tracking-[0.2em] text-[#E5B800]">
              <Users size={13} className="text-[#00A859]" />
              <span>Responsibility &amp; Livelihoods</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] text-[#FAF9F6] tracking-tight">
              The People Who Make the Farm Work
            </h1>

            <div className="w-16 h-0.5 bg-[#E5B800] mx-auto" />

            <p className="max-w-2xl mx-auto text-xs sm:text-sm font-normal text-[#FAF9F6]/85 leading-relaxed text-justify">
              Real Green Gold Ltd grows through the people who care for the farm, organize its work, and share what they learn. Our team approach brings practical experience together with curiosity about better ways of farming.
            </p>
          </div>
        </section>

        {/* ── 2. Culture & Values Context ──────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="border border-[#00A859]/20 bg-white p-6 sm:p-8 shadow-2xs grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 border border-[#E5B800]/50 bg-[#0C1E12]/5 px-2 py-0.5 text-[9px] font-mono uppercase tracking-[0.15em] text-[#00A859]">
                <Compass size={10} className="text-[#00A859]" />
                <span>WORKING CULTURE</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#0C1E12] leading-tight">
                Practical Experience &amp; Continuous Learning
              </h2>

              <div className="space-y-3 text-xs text-[#3A4239] leading-relaxed text-justify">
                <p>
                  Real Green Gold Ltd grows through the people who care for the farm, organize its work, and share what they learn. Our team approach brings practical experience together with curiosity about better ways of farming. We value technology when it helps people perform useful tasks and make informed decisions.
                </p>
                <p>
                  We are building a working culture that gives people clear responsibilities, supports learning, and welcomes contributions from the surrounding community. Our goal is to create room for women, young people, and people with different experiences to participate meaningfully in the farm’s development.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="#collaboration"
                  className="inline-flex items-center gap-1.5 border border-[#00A859] bg-[#00A859] text-white px-4 py-2 text-[10.5px] font-mono font-bold uppercase tracking-wider hover:bg-[#008A47] transition-colors shadow-2xs"
                >
                  <span>Discuss a Collaboration</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3">
              <div className="relative aspect-4/3 w-full overflow-hidden border border-[#00A859]/20 bg-[#0C1E12]">
                <Image
                  src="/assets/home.jpg"
                  alt="RGG Team Participation in Kirehe Farm Activities"
                  fill
                  priority
                  className="object-cover brightness-95"
                />
                <div className="absolute top-2 left-2 bg-[#0C1E12]/90 border border-white/20 px-2 py-0.5 text-[#E5B800] text-[8px] font-mono font-bold uppercase tracking-wider">
                  COMMUNITY &amp; TEAM
                </div>
              </div>

              <div className="border border-[#00A859]/15 bg-[#FAF9F6] p-3 space-y-1">
                <span className="text-[8.5px] font-mono font-bold uppercase tracking-[0.15em] text-[#E5B800] block">
                  SHARED RESPONSIBILITY
                </span>
                <p className="text-[10px] font-mono text-[#5A6259] leading-relaxed text-justify">
                  Building shared responsibility across crop care, irrigation observation, composting, and agronomic visitor interactions.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── 3. Operational Coverage Areas ────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-4 md:px-8 space-y-6">
          <div className="border-b border-[#00A859]/20 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 border border-[#E5B800]/50 bg-[#0C1E12]/5 px-2 py-0.5 text-[9px] font-mono uppercase tracking-[0.15em] text-[#00A859]">
                <Layers size={10} className="text-[#00A859]" />
                <span>ORGANIZATION LEDGER</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#0C1E12]">
                Operational Coverage Areas
              </h2>
            </div>
            <p className="text-[10px] font-mono text-[#5A6259] max-w-md text-justify sm:text-right">
              These are coverage areas, not claims that separate positions exist. One person may hold several responsibilities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {responsibilityPillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <div 
                  key={idx} 
                  className="border border-[#00A859]/20 bg-white p-4 shadow-2xs space-y-3 flex flex-col justify-between hover:border-[#00A859] transition-colors"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between border-b border-[#00A859]/10 pb-2">
                      <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-[#E5B800]">
                        {pillar.subtitle}
                      </span>
                      <IconComponent size={15} className="text-[#00A859]" />
                    </div>

                    <h3 className="text-sm font-semibold text-[#0C1E12]">
                      {pillar.title}
                    </h3>

                    <p className="text-[10.5px] text-[#5A6259] leading-relaxed text-justify font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#00A859]/10 flex items-center justify-between text-[8.5px] font-mono text-[#00A859] font-bold">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 size={10} /> Verified Domain
                    </span>
                    <span className="text-[#5A6259] font-normal">{pillar.evidence}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 4. Verified Team Profiles Ledger ─────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-4 md:px-8 space-y-6">
          <div className="border-b border-[#00A859]/20 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 border border-[#E5B800]/50 bg-[#0C1E12]/5 px-2 py-0.5 text-[9px] font-mono uppercase tracking-[0.15em] text-[#00A859]">
                <User size={10} className="text-[#00A859]" />
                <span>VERIFIED PROFILES</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#0C1E12]">
                Team Profiles &amp; Leadership
              </h2>
            </div>
            <span className="text-[10px] font-mono text-[#5A6259]">
              Credited Contributions Only
            </span>
          </div>

          <div className="space-y-6">
            {verifiedTeam.map((member) => (
              <div 
                key={member.id} 
                className="border border-[#00A859]/20 bg-white p-5 sm:p-6 shadow-2xs grid lg:grid-cols-12 gap-6 items-start"
              >
                {/* Photo & Basic Badge */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="relative aspect-square sm:aspect-4/3 lg:aspect-square w-full overflow-hidden border border-[#00A859]/20 bg-[#0C1E12]">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      className="object-cover object-top brightness-95"
                    />
                    <div className="absolute top-2 left-2 bg-[#0C1E12]/90 border border-white/20 px-2 py-0.5 text-[#E5B800] text-[8px] font-mono font-bold uppercase">
                      VERIFIED TEAM PROFILE
                    </div>
                  </div>

                  <div className="border border-[#00A859]/15 bg-[#FAF9F6] p-3 space-y-1 font-mono text-[9.5px]">
                    <div className="flex items-center justify-between text-[#00A859] font-bold">
                      <span>Responsibility:</span>
                    </div>
                    <p className="text-[#3A4239] text-justify">{member.responsibility}</p>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="border-b border-[#00A859]/10 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-[#0C1E12]">
                        {member.name}
                      </h3>
                      <p className="text-[11px] font-mono text-[#00A859] font-bold uppercase tracking-wider">
                        {member.role}
                      </p>
                    </div>

                    <span className="text-[9.5px] font-mono text-[#5A6259] flex items-center gap-1">
                      <MapPin size={10} className="text-[#00A859]" /> {member.location}
                    </span>
                  </div>

                  {/* Bio Paragraph */}
                  <p className="text-xs text-[#3A4239] leading-relaxed text-justify font-normal">
                    {member.bio}
                  </p>

                  {/* Tasks & Verified Improvement */}
                  <div className="grid sm:grid-cols-2 gap-3 pt-2">
                    <div className="border border-[#00A859]/15 bg-[#FAF9F6] p-3 space-y-1.5">
                      <span className="text-[8.5px] font-mono font-bold uppercase tracking-wider text-[#E5B800] block">
                        Concrete Tasks
                      </span>
                      <ul className="space-y-1 text-[10.5px] text-[#3A4239]">
                        {member.tasks.map((task, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-1.5 text-justify">
                            <span className="text-[#00A859] font-mono font-bold">•</span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border border-[#00A859]/15 bg-[#FAF9F6] p-3 space-y-1.5">
                      <span className="text-[8.5px] font-mono font-bold uppercase tracking-wider text-[#E5B800] block">
                        Verified Improvement
                      </span>
                      <p className="text-[10.5px] text-[#3A4239] leading-relaxed text-justify">
                        {member.improvement}
                      </p>
                    </div>
                  </div>

                  {/* Approved Quotation Callout */}
                  <div className="p-3 border-l-2 border-[#E5B800] bg-[#FAF9F6] space-y-1">
                    <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-[#00A859] block">
                      What I am learning:
                    </span>
                    <p className="text-[11px] italic text-[#0C1E12] text-justify font-normal">
                      &ldquo;{member.learningQuote}&rdquo;
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* ── 5. Community & Learning Collaboration Callout ───────────────── */}
        <section id="collaboration" className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="border border-[#00A859]/30 bg-[#0C1E12] text-[#FAF9F6] p-6 sm:p-8 shadow-2xs space-y-4 text-center">
            <div className="inline-flex items-center gap-1.5 border border-[#E5B800]/50 bg-white/5 px-2.5 py-0.5 text-[9px] font-mono uppercase tracking-[0.15em] text-[#E5B800]">
              <HeartHandshake size={11} />
              <span>Community &amp; Learning Invitation</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold leading-tight text-[#FAF9F6]">
              Learn with Us or Contribute a Practical Skill
            </h2>

            <p className="max-w-2xl mx-auto text-xs text-[#FAF9F6]/85 leading-relaxed text-justify sm:text-center font-normal">
              “Interested in learning with us or contributing a practical skill? Tell us about your experience and the kind of collaboration you have in mind.”
            </p>

            <div className="pt-2 flex justify-center">
              <Link
                href="/initiatives#visit-enquiry"
                className="inline-flex items-center gap-2 border border-[#E5B800] bg-[#E5B800] text-[#0C1E12] px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#c9a000] transition-colors shadow-2xs"
              >
                <span>Discuss a Collaboration</span>
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 6. Global Contact Strip ────────────────────────────────────────── */}
        <ContactStrip />

      </main>

      <Footer />
    </div>
  );
}