'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { 
  Compass, 
  ArrowUpRight, 
  Calendar, 
  Copy, 
  Check, 
  Camera, 
  Filter, 
  Quote, 
  ChevronDown, 
  Sprout, 
  Droplets, 
  Users, 
  Layers, 
  BookOpen, 
  CheckCircle2,
  MapPin
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

// ── 1. Accordion Data for Founder Leadership Essay ──────────────────────────
const essaySections = [
  {
    id: 'pillar-1',
    number: '01',
    subtitle: 'ENTREPRENEURIAL GROUNDING',
    title: 'Farming as Practical Enterprise',
    icon: Sprout,
    summary: 'On a farm, an idea has to meet the conditions of the land, the needs of the workforce, and customer expectations.',
    content:
      'Real Green Gold Ltd is my first business. It is also one of the places where I continue to learn what entrepreneurship means in practice. On a farm, an idea has to meet the conditions of the land, the needs of the people doing the work, and the expectations of a customer.',
  },
  {
    id: 'pillar-2',
    number: '02',
    subtitle: 'INTERCONNECTED AGRICULTURE',
    title: 'The Integrated Ecosystem',
    icon: Layers,
    summary: 'Connecting avocado, banana, and vegetables with small livestock, pollinator stewardship, and soil care.',
    content:
      'Our farming in Kirehe brings together avocado, banana, and fresh vegetables with small livestock activities, pollinator stewardship, and soil care. Each part asks something of us. Crops need attention through the season. Animals need dependable daily care. Soil needs thoughtful management. Customers need clear information and reliable communication.',
  },
  {
    id: 'pillar-3',
    number: '03',
    subtitle: 'LEADERSHIP DIRECTION',
    title: 'Opportunities Within Community Challenges',
    icon: Users,
    summary: 'Examining local agricultural obstacles to discover scalable products, services, and practical lessons.',
    content:
      'These responsibilities have shaped my leadership direction. When I encounter a community problem, I want to understand it closely enough to see whether there is a useful opportunity within it. That opportunity might be a product, a service, a better way of organizing work, or a practical lesson that others can use.',
  },
  {
    id: 'pillar-4',
    number: '04',
    subtitle: 'AGROECOLOGICAL INQUIRY',
    title: 'Testing Systems & Verifying Results',
    icon: Droplets,
    summary: 'Turning water, soil, and pollinator challenges into measurable, evidence-based farm initiatives.',
    content:
      'A challenge with water, for example, encourages us to examine irrigation and the decisions behind it. Questions about soil fertility lead us toward manure management and composting. An interest in bees opens conversations about habitat, pollination, and the skills involved in beekeeping. These connections help us think about the farm as a whole.\n\nAn opportunity also needs testing. A promising idea does not become a dependable business simply because we describe it well. We need to understand costs, responsibilities, and demand. We need to record what happened and be willing to adjust. Some of our initiatives are already part of daily farming; others remain in development. We want our website to make that distinction clear.',
  },
  {
    id: 'pillar-5',
    number: '05',
    subtitle: 'COLLECTIVE GOVERNANCE',
    title: 'Shared Growth & Open Documentation',
    icon: BookOpen,
    summary: 'Creating conditions where team skills lead the way and farm learning is transparently shared.',
    content:
      'The people around the farm are central to this journey. My role is to help set direction and create conditions in which others can contribute, learn, and take responsibility. As we document more of our work, I want the team’s skills and experiences to be visible alongside my own story.\n\nThis website is part of that commitment. It will bring together our initiatives, farm updates, and photographs so that customers, visitors, and collaborators can see what we do and how we are learning. I hope it becomes a useful record of a business growing through practical responses to real needs.',
  },
];

// ── 2. Filter Categories ─────────────────────────────────────────────────────
const categories = [
  'All',
  'Crops',
  'Animals',
  'Soil and Water',
  'People',
  'Technology',
  'Visits and Memories',
];

// ── 3. Field Notes Articles ──────────────────────────────────────────────────
const articlesList = [
  {
    id: 'article-1',
    title: 'Managing water and crop health in dry-period irrigation',
    author: 'RGG Field Team',
    role: 'Crops & Irrigation',
    date: '12 September 2026',
    category: 'Soil and Water',
    initiative: 'Irrigation',
    readTime: '3 min read',
    coverImage: '/assets/home.jpg',
    excerpt:
      'Connecting soil moisture observation, water cost tracking, and crop response across avocado and vegetable plots in Kirehe.',
  },
  {
    id: 'article-2',
    title: 'Integrating livestock manure into managed compost production',
    author: 'RGG Field Team',
    role: 'Livestock & Fertility',
    date: '28 August 2026',
    category: 'Animals',
    initiative: 'Regenerative Agriculture',
    readTime: '4 min read',
    coverImage: '/assets/home.jpg',
    excerpt:
      'Connecting zero-grazing cattle manure collection with structured composting to return organic matter safely to crop fields.',
  },
];

// ── 4. Photo Gallery Albums ──────────────────────────────────────────────────
const galleryAlbums = [
  {
    id: 'album-1',
    title: 'Avocado & Banana Harvest Operations',
    date: '05 September 2026',
    category: 'Crops',
    location: 'Kirehe Orchard Site',
    imageCount: 8,
    coverImage: '/assets/home.jpg',
    context: 'Seasonal crop harvesting, grading, and field preparation.',
  },
  {
    id: 'album-2',
    title: 'Bee Sanctuary & Flowering Habitat Stewardship',
    date: '18 August 2026',
    category: 'Soil and Water',
    location: 'Pollinator Plot, Kirehe',
    imageCount: 6,
    coverImage: '/assets/home.jpg',
    context: 'Observing pollinator habitats and flowering plant integration.',
  },
  {
    id: 'album-3',
    title: 'Agronomic Field Visit & Community Exchange',
    date: '22 July 2026',
    category: 'Visits and Memories',
    location: 'RGG Demonstration Farm',
    imageCount: 12,
    coverImage: '/assets/home.jpg',
    context: 'Hosting local agricultural students and community farm groups.',
  },
];

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [openSection, setOpenSection] = useState<string>('pillar-1');

  const filteredArticles = activeCategory === 'All'
    ? articlesList
    : articlesList.filter((a) => a.category === activeCategory);

  const handleCopyLink = (id: string) => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(`${window.location.origin}/blogs#${id}`);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? '' : id);
  };

  return (
    <div className={`${poppins.className} min-h-screen flex flex-col bg-[#FAF9F6] text-[#0C1E12] selection:bg-[#E5B800] selection:text-[#0C1E12]`}>
      <NavBar />

      <main className="flex-grow space-y-12">
        
        {/* ── 1. Expanded Hero Header Section ───────────────────────────── */}
        <section className="relative h-[55vh] min-h-[480px] flex items-center justify-center overflow-hidden border-b border-[#00A859]/30 bg-[#0C1E12]">
          <Image
    src="/assets/home.jpg"
    alt="Real Green Gold Ltd farm journal and gallery archives in Kirehe, Rwanda"
    fill
    priority
    quality={95}
    sizes="100vw"
    className="object-cover object-center brightness-60 contrast-[1.05] scale-105 transition-transform duration-1000"
  />

  {/* Transparent Gradient Overlays */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#0C1E12]/80 via-[#0C1E12]/50 to-transparent z-10" />
  <div className="absolute inset-0 bg-gradient-to-t from-[#0C1E12]/90 via-transparent to-black/30 z-10" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6 pt-12">
            <div className="inline-flex items-center gap-2 border border-[#E5B800]/60 bg-[#0C1E12]/80 backdrop-blur-md px-3.5 py-1 text-xs font-mono uppercase tracking-[0.2em] text-[#E5B800]">
              <Compass size={13} className="text-[#00A859]" />
              <span>Farm Journal &amp; Documented Archives</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] text-[#FAF9F6] tracking-tight">
              Stories and Moments from the Farm
            </h1>

            <div className="w-16 h-0.5 bg-[#E5B800] mx-auto" />

            <p className="max-w-2xl mx-auto text-xs sm:text-sm font-normal text-[#FAF9F6]/85 leading-relaxed text-justify">
              Follow the work, people, and ideas shaping Real Green Gold Ltd. Our stories document everyday farming, practical learning, and community engagement.
            </p>
          </div>
        </section>

        {/* ── 2. Topic Filter Bar ───────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="border border-[#00A859]/20 bg-white p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-[#00A859]">
              <Filter size={13} />
              <span>Topic Filter:</span>
            </div>

            <div className="flex flex-wrap items-center gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-2.5 py-1 text-[10px] font-mono transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#0C1E12] text-[#FAF9F6] border border-[#0C1E12] font-bold'
                      : 'bg-[#FAF9F6] text-[#5A6259] border border-[#00A859]/15 hover:border-[#00A859] hover:text-[#0C1E12]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. Founder Leadership Essay Section ───────────────────────── */}
        <section className="max-w-6xl mx-auto px-4 md:px-8 space-y-6">
          
          {/* Header Block */}
          <div className="border-b border-[#00A859]/20 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 border border-[#E5B800]/50 bg-[#0C1E12]/5 px-2 py-0.5 text-[9px] font-mono uppercase tracking-[0.15em] text-[#00A859]">
                <Compass size={10} className="text-[#00A859]" />
                <span>FOUNDER LEADERSHIP ESSAY</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#0C1E12] leading-tight">
                How Real Green Gold shaped my entrepreneurship
              </h2>
            </div>

            <div className="sm:text-right flex sm:block items-center justify-between gap-2">
              <p className="text-[10px] font-mono text-[#00A859] uppercase tracking-wider font-bold">
                Pacifique Nshimiyimana
              </p>
              <p className="text-[9px] font-mono text-[#5A6259] flex items-center sm:justify-end gap-1">
                <MapPin size={9} className="text-[#00A859]" /> Founder &amp; CEO • Kirehe, Rwanda
              </p>
            </div>
          </div>

          {/* Pull-Quote Banner */}
          <div className="relative border border-[#00A859]/30 bg-[#0C1E12] text-[#FAF9F6] p-4 sm:p-5 shadow-2xs overflow-hidden">
            <div className="relative z-10 flex items-start gap-3">
              <div className="p-1.5 border border-[#E5B800]/50 bg-white/5 text-[#E5B800] shrink-0 mt-0.5">
                <Quote size={14} />
              </div>

              <blockquote className="text-sm sm:text-base font-normal italic leading-relaxed text-[#FAF9F6] border-l-2 border-[#E5B800] pl-3 text-justify">
                &ldquo;Real Green Gold Ltd began my entrepreneurial journey. The work of building an integrated farm in Kirehe continues to shape how I understand opportunity, responsibility, and leadership.&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Accordion & Sidebar Grid */}
          <div className="grid lg:grid-cols-12 gap-5 items-start">
            
            {/* Left Column: Image & Reflection Card */}
            <div className="lg:col-span-4 space-y-3 lg:sticky lg:top-20">
              <div className="relative aspect-square w-full overflow-hidden border border-[#00A859]/20 bg-[#0C1E12]">
                <Image
                  src="/assets/home.jpg"
                  alt="Real Green Gold Ltd integrated farm landscape in Kirehe, Rwanda"
                  fill
                  priority
                  className="object-cover brightness-95"
                />
                <div className="absolute top-2 left-2 bg-[#0C1E12] border border-white/20 px-2 py-0.5 text-[#E5B800] text-[8px] font-mono font-bold uppercase tracking-wider">
                  FIELD LEADERSHIP
                </div>
              </div>

              <div className="border border-[#00A859]/20 bg-white p-3 space-y-1.5 shadow-2xs">
                <span className="text-[8.5px] font-mono font-bold uppercase tracking-[0.15em] text-[#E5B800] block">
                  DOCUMENTED REFLECTION
                </span>
                <p className="text-[10px] font-mono text-[#5A6259] leading-relaxed text-justify">
                  This memorandum outlines the foundational experiences, farm connections, and community leadership principles that continue to guide Real Green Gold Ltd.
                </p>
              </div>

              <Link
                href="/initiatives#partnership"
                className="w-full inline-flex items-center justify-center gap-1.5 border border-[#00A859] bg-[#00A859] text-white py-2 px-3 text-[9.5px] font-mono font-bold uppercase tracking-wider hover:bg-[#008A47] transition-colors shadow-2xs"
              >
                <span>Discuss a Collaboration</span>
                <ArrowUpRight size={11} />
              </Link>
            </div>

            {/* Right Column: Interactive Accordion Cards */}
            <div className="lg:col-span-8 space-y-2.5">
              {essaySections.map((pillar) => {
                const IconComponent = pillar.icon;
                const isOpen = openSection === pillar.id;

                return (
                  <div 
                    key={pillar.id}
                    className={`border transition-all duration-200 bg-white shadow-2xs ${
                      isOpen ? 'border-[#00A859] ring-1 ring-[#00A859]/20' : 'border-[#00A859]/20 hover:border-[#00A859]/60'
                    }`}
                  >
                    <button
                      onClick={() => toggleSection(pillar.id)}
                      className="w-full text-left p-3.5 sm:p-4 flex items-start justify-between gap-3 cursor-pointer"
                    >
                      <div className="flex items-start gap-2.5">
                        <span className="text-[9px] font-mono font-bold text-[#E5B800] bg-[#0C1E12] px-1.5 py-0.5 shrink-0 mt-0.5">
                          {pillar.number}
                        </span>

                        <div className="space-y-0.5">
                          <span className="text-[8px] font-mono font-bold uppercase tracking-[0.15em] text-[#00A859] block">
                            {pillar.subtitle}
                          </span>
                          <h3 className="text-sm sm:text-base font-medium text-[#0C1E12]">
                            {pillar.title}
                          </h3>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <IconComponent size={14} className="text-[#00A859] hidden sm:block" />
                        <ChevronDown 
                          size={14} 
                          className={`text-[#0C1E12] transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`} 
                        />
                      </div>
                    </button>

                    {!isOpen && (
                      <div className="px-3.5 sm:px-4 pb-3 pt-0 border-t border-[#00A859]/10">
                        <p className="text-[10px] font-mono text-[#5A6259] text-justify pt-1">
                          → {pillar.summary}
                        </p>
                      </div>
                    )}

                    {isOpen && (
                      <div className="px-3.5 sm:px-4 pb-3.5 pt-1 border-t border-[#00A859]/15 space-y-2.5">
                        <div className="space-y-2 text-[10.5px] sm:text-[11px] text-[#3A4239] leading-relaxed text-justify pt-1.5 font-normal">
                          {pillar.content.split('\n\n').map((paragraph, pIdx) => (
                            <p key={pIdx}>{paragraph}</p>
                          ))}
                        </div>

                        <div className="pt-2 border-t border-[#00A859]/10 flex items-center justify-between text-[8.5px] font-mono text-[#00A859] font-bold uppercase tracking-wider">
                          <span className="flex items-center gap-1">
                            <CheckCircle2 size={10} /> Key Operational Pillar
                          </span>
                          <span>RGG Leadership Standard</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </section>

        {/* ── 4. Additional Field Notes Grid ─────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-4 md:px-8 space-y-4">
          <div className="flex items-center justify-between border-b border-[#00A859]/20 pb-2">
            <div className="space-y-0.5">
              <span className="text-[8.5px] font-mono font-bold uppercase tracking-[0.15em] text-[#E5B800]">
                From the Farm
              </span>
              <h3 className="text-lg sm:text-xl font-semibold text-[#0C1E12]">
                Updates on Crops, Livestock, Soil, &amp; Water
              </h3>
            </div>
            <span className="text-[10px] font-mono text-[#5A6259]">
              Field Notes Ledger
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {filteredArticles.map((article) => (
              <article 
                key={article.id}
                className="group border border-[#00A859]/20 bg-white p-4 shadow-2xs flex flex-col justify-between space-y-3 hover:border-[#00A859] transition-all"
              >
                <div className="space-y-2.5">
                  <div className="relative h-36 w-full overflow-hidden border border-[#00A859]/15 bg-[#0C1E12]">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover brightness-95 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-[#0C1E12]/90 border border-white/20 px-1.5 py-0.5 text-white text-[7.5px] font-mono font-bold uppercase">
                      {article.initiative}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[9px] font-mono text-[#00A859] border-b border-[#00A859]/10 pb-1">
                    <span className="flex items-center gap-1">
                      <Calendar size={10} />
                      {article.date}
                    </span>
                    <span>{article.readTime}</span>
                  </div>

                  <div className="space-y-0.5">
                    <h4 className="text-base font-semibold text-[#0C1E12]">
                      {article.title}
                    </h4>

                    <p className="text-[10px] text-[#5A6259] leading-relaxed text-justify font-normal">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#00A859]/10 flex items-center justify-between">
                  <span className="text-[8.5px] font-mono text-[#5A6259]">
                    By {article.author}
                  </span>

                  <button
                    onClick={() => handleCopyLink(article.id)}
                    className="inline-flex items-center gap-1 border border-[#00A859]/30 bg-[#FAF9F6] px-2 py-0.5 text-[8.5px] font-mono font-bold uppercase tracking-wider hover:bg-[#00A859] hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Share Note</span>
                    <ArrowUpRight size={10} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── 5. Photo Gallery Albums ─────────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-4 md:px-8 space-y-4">
          <div className="flex items-center justify-between border-b border-[#00A859]/20 pb-2">
            <div className="space-y-0.5">
              <span className="text-[8.5px] font-mono font-bold uppercase tracking-[0.15em] text-[#E5B800]">
                Our Farm Memories
              </span>
              <h3 className="text-lg sm:text-xl font-semibold text-[#0C1E12]">
                Documented Visual Records &amp; Albums
              </h3>
            </div>

            <Link
              href="/gallery"
              className="inline-flex items-center gap-1 text-[10px] font-mono text-[#00A859] font-bold uppercase tracking-wider hover:underline"
            >
              <span>View All Albums</span>
              <ArrowUpRight size={11} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {galleryAlbums.map((album) => (
              <div 
                key={album.id}
                className="group border border-[#00A859]/20 bg-white p-3 shadow-2xs flex flex-col justify-between space-y-2.5 hover:border-[#00A859] transition-all"
              >
                <div className="space-y-2">
                  <div className="relative h-32 w-full overflow-hidden border border-[#00A859]/15 bg-[#0C1E12]">
                    <Image
                      src={album.coverImage}
                      alt={album.title}
                      fill
                      className="object-cover brightness-95 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-1.5 left-1.5 bg-[#0C1E12]/90 border border-white/20 px-1 py-0.5 text-[#E5B800] text-[7.5px] font-mono font-bold">
                      {album.imageCount} PHOTOS
                    </div>
                  </div>

                  <div className="space-y-0.5">
                    <span className="text-[8px] font-mono text-[#00A859] font-bold uppercase tracking-wider">
                      {album.location} • {album.date}
                    </span>
                    <h4 className="text-xs font-semibold text-[#0C1E12]">
                      {album.title}
                    </h4>
                    <p className="text-[9.5px] text-[#5A6259] leading-relaxed text-justify font-normal">
                      {album.context}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#00A859]/10 flex items-center justify-between text-[8.5px] font-mono text-[#00A859] font-bold">
                  <span className="flex items-center gap-1">
                    <Camera size={10} />
                    Verified Archive
                  </span>
                  <ArrowUpRight size={10} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. Global Contact Strip ────────────────────────────────────────── */}
        <ContactStrip />

      </main>

      <Footer />
    </div>
  );
}