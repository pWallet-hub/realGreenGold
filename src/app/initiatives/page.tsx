'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import {
  Compass,
  ArrowUpRight,
  Sprout,
  Filter,
  Search,
  X,
  MessageSquare,
  Pause,
  Play,
} from 'lucide-react';
import type { IconType } from 'react-icons';
import {
  GiFarmTractor,
  GiPlantWatering,
  GiAvocado,
  GiBananaBunch,
  GiBeehive,
  GiPlantSeed,
  GiPlantRoots,
  GiTeapotLeaves,
  GiCow,
  GiSmartphone,
  GiSprout,
} from 'react-icons/gi';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CommunityProduction from '../components/CommunityProduction';
import AgriculturalInnovation from '../components/AgriculturalInnovation';
import ContactStrip from '../components/ContactStrip';

// Load Poppins font with specified weights
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

// Solid icon (Game Icons set via react-icons) shown in the yellow circle of each slide.
// Each one matches its topic; the set is consistent in style with the footer's react-icons.
const initiativeIcons: Record<string, IconType> = {
  'agro-tourism': GiFarmTractor,
  irrigation: GiPlantWatering,
  avocado: GiAvocado,
  banana: GiBananaBunch,
  'beekeeping-carpentry': GiBeehive,
  'tech-seed-plotting': GiPlantSeed,
  'regenerative-agriculture': GiPlantRoots,
  'traditional-beverages': GiTeapotLeaves,
  'animal-kingdom': GiCow,
  ict4ag: GiSmartphone,
};

// Carousel auto-advance interval (ms)
const SLIDE_INTERVAL_MS = 3000;

/* Tall grass blades + reed stalks along the bottom of the hero.
   The tile repeats horizontally; its fill matches the page background (#FAF9F6). */
const GRASS = (() => {
  const h = 60;
  const base = 50;
  const bladeW = 7;
  const tips = [
    22, 34, 12, 30, 18, 38, 10, 32, 20, 36, 14, 28, 24, 38, 8, 30, 18, 34,
    12, 32, 22, 36, 16, 28, 20, 34, 10, 30, 24, 38, 14, 32, 18, 36, 12, 28,
  ];
  const w = tips.length * bladeW;
  let d = `M0 ${h} V${base}`;
  tips.forEach((tip, i) => {
    const x = i * bladeW;
    d += ` L${x + bladeW / 2} ${tip} L${x + bladeW} ${base}`;
  });
  d += ` V${h} Z`;
  const stalks: [number, number][] = [[46, 6], [120, 2], [180, 8], [232, 4]];
  const reeds = stalks
    .map(
      ([x, top]) =>
        `<rect x='${x}' y='${top + 8}' width='1.8' height='${base - top - 8}' fill='#FAF9F6'/>` +
        `<ellipse cx='${x + 0.9}' cy='${top + 8}' rx='3' ry='8' fill='#FAF9F6'/>`
    )
    .join('');
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${w} ${h}'><path fill='#FAF9F6' d='${d}'/>${reeds}</svg>`;
  return { image: `url("data:image/svg+xml,${encodeURIComponent(svg)}")`, width: w, height: h };
})();

// ── 10 Anchor Initiatives Data Ledger ──────────────────────────────────────────
const initiativesData = [
  {
    id: 'agro-tourism',
    title: 'Agro Tourism',
    subtitle: 'Guided Visits & Experiential Learning',
    stage: 'Developing Offer',
    stageColor: 'bg-[#E5B800]/15 text-[#0C1E12] border-[#E5B800]/40',
    revenueValue: 'Guided visits and learning experiences',
    summary: 'A working farm can also be a place to learn. RGG is developing farm experiences that introduce visitors to crop production, livestock care, pollinator stewardship, and the ideas behind integrated farming.',
    body: 'Our proposed experiences bring together guided walks, conversations with the team, and suitable seasonal activities. They are intended for curious residents, visiting travellers, student groups, and organizations interested in practical agriculture. Activities will depend on the season, farm conditions, and the readiness of our team.',
    visitorAction: 'Tell us about your group and interests.',
    ctaButton: 'Enquire About a Farm Visit',
    lastReviewed: 'September 2026',
    prefilledTopic: 'Agro Tourism Enquiry',
    image: '/assets/home.jpg',
    category: 'Agro-Tourism & Education',
  },
  {
    id: 'irrigation',
    title: 'Irrigation & Water Care',
    subtitle: 'Precision Water Management & Observation',
    stage: 'Active Farm Practice',
    stageColor: 'bg-[#00A859]/15 text-[#00A859] border-[#00A859]/40',
    revenueValue: 'Production reliability; future demonstrations',
    summary: 'Water management is central to dependable farming. At RGG, irrigation is part of our effort to respond to dry periods, understand crop needs, and use available water thoughtfully.',
    body: 'This initiative documents the equipment and approaches we use, the maintenance they require, and the lessons they offer. As we improve our records, we want to compare the effort and resources involved with the results observed in the field.',
    visitorAction: 'Explore our approach to water management or discuss a learning collaboration.',
    ctaButton: 'Discuss Irrigation Learning',
    lastReviewed: 'September 2026',
    prefilledTopic: 'Irrigation & Water Care Enquiry',
    image: '/assets/home.jpg',
    category: 'Soil & Water',
  },
  {
    id: 'avocado',
    title: 'Avocado Value Chain',
    subtitle: 'Orchard Care, Harvesting & Buyer Standards',
    stage: 'Producing & Harvesting',
    stageColor: 'bg-[#00A859]/15 text-[#00A859] border-[#00A859]/40',
    revenueValue: 'Fresh fruit and prospective learning services',
    summary: 'Avocado is one of RGG’s core crops. Our work connects tree care and orchard observation with harvesting, handling, and understanding buyer requirements.',
    body: 'This initiative follows the crop from the field to the customer. We share seasonal updates, explain the work behind a harvest, and document lessons about quality and handling. Customers can contact us to discuss availability, intended use, and delivery arrangements.',
    visitorAction: 'Tell us the quantity, delivery location, and date you need.',
    ctaButton: 'Enquire About Avocado Supply',
    lastReviewed: 'September 2026',
    prefilledTopic: 'Avocado Produce Enquiry',
    image: '/assets/home.jpg',
    category: 'Crops & Orchards',
  },
  {
    id: 'banana',
    title: 'Banana Value Chain',
    subtitle: 'Commercial Cultivation & Processing Inquiry',
    stage: 'Producing / Processing Exploratory',
    stageColor: 'bg-[#E5B800]/15 text-[#0C1E12] border-[#E5B800]/40',
    revenueValue: 'Fresh bananas; future value addition',
    summary: 'Banana production connects the everyday work of the farm with household food needs and commercial opportunities.',
    body: 'Our banana initiative looks beyond the field to the uses, markets, and learning opportunities connected to the crop. Fresh banana sales are the starting point. Any future processing or cultural product will be introduced with clear information about its development stage and availability.',
    visitorAction: 'Contact us about fresh bananas or a banana value-chain collaboration.',
    ctaButton: 'Discuss Banana Supply',
    lastReviewed: 'September 2026',
    prefilledTopic: 'Banana Supply Enquiry',
    image: '/assets/home.jpg',
    category: 'Crops & Orchards',
  },
  {
    id: 'beekeeping-carpentry',
    title: 'Beekeeping & Hive Carpentry',
    subtitle: 'Pollinator Stewardship & Local Craftsmanship',
    stage: 'Habitat Managed / Craftsmanship Exploratory',
    stageColor: 'bg-[#0C1E12]/10 text-[#0C1E12] border-[#0C1E12]/30',
    revenueValue: 'Potential honey & hive-related carpentry',
    summary: 'This initiative brings together our interest in pollinators and the practical skills that support beekeeping.',
    body: 'Our starting point is the farm habitat: making space for bees and observing how they use it. We also see opportunities to connect hive-related carpentry, maintenance, and practical learning with local skills. As the initiative develops, we will document verified apiary activities, hive construction or repair, and any honey production that becomes available.',
    visitorAction: 'Discuss pollinator learning or a beekeeping and carpentry collaboration.',
    ctaButton: 'Explore Beekeeping & Carpentry',
    lastReviewed: 'August 2026',
    prefilledTopic: 'Beekeeping & Carpentry Enquiry',
    image: '/assets/home.jpg',
    category: 'Stewardship & Craft',
  },
  {
    id: 'tech-seed-plotting',
    title: 'Tech & Seed Plotting',
    subtitle: 'Demonstration Plots & Practical Technology',
    stage: 'Learning & Trial Direction',
    stageColor: 'bg-[#0C1E12]/10 text-[#0C1E12] border-[#0C1E12]/30',
    revenueValue: 'Potential demonstrations and technical collaboration',
    summary: 'Good agricultural decisions begin with useful questions and careful observation. Through Tech and Seed Plotting, RGG aims to create space for small, clearly documented demonstrations.',
    body: 'The purpose is to learn how an approach performs under our farm conditions before making wider claims. Each documented plot should explain what is being examined, how it is managed, and what was observed. We welcome discussion with collaborators who value practical learning, clear records, and honest reporting of results.',
    visitorAction: 'Tell us about a practical demonstration or learning partnership.',
    ctaButton: 'Discuss a Demonstration Plot',
    lastReviewed: 'August 2026',
    prefilledTopic: 'Tech & Seed Trial Partnership',
    image: '/assets/home.jpg',
    category: 'Agtech & Trials',
  },
  {
    id: 'regenerative-agriculture',
    title: 'Regenerative Agriculture',
    subtitle: 'Soil Health, Organic Matter & Nutrient Cycling',
    stage: 'Active Practice & System Measurement',
    stageColor: 'bg-[#00A859]/15 text-[#00A859] border-[#00A859]/40',
    revenueValue: 'Resource efficiency; future training or compost sales',
    summary: 'Our regenerative agriculture direction focuses on caring for the resources that support the farm. We connect organic matter management, soil cover, crop care, and biodiversity with production needs.',
    body: 'Livestock manure and suitable crop residues are resources we manage through composting and thoughtful use. We see this as a process of improvement that needs observation and records. Through farm stories and demonstrations, we explain the practices we use and the changes we can substantiate.',
    visitorAction: 'Learn about our soil-care practices or discuss a practical collaboration.',
    ctaButton: 'Explore Soil & Compost Learning',
    lastReviewed: 'September 2026',
    prefilledTopic: 'Regenerative Farming Enquiry',
    image: '/assets/home.jpg',
    category: 'Soil & Water',
  },
  {
    id: 'traditional-beverages',
    title: 'Traditional Beverages',
    subtitle: 'Cultural Heritage & Indigenous Recipe Exploration',
    stage: 'Concept Development',
    stageColor: 'bg-[#E5B800]/15 text-[#0C1E12] border-[#E5B800]/40',
    revenueValue: 'Potential cultural experiences & beverage products',
    summary: 'Traditional beverages connect agriculture with culture, hospitality, and local knowledge.',
    body: 'RGG is exploring how farm products and community knowledge could support carefully developed beverage experiences and products. This initiative begins with learning, documenting traditions respectfully, and understanding what customers would value. As concepts are developed, we will share their ingredients, the contributors, and production steps.',
    visitorAction: 'Discuss a cultural learning or product-development collaboration.',
    ctaButton: 'Express Interest in Beverages',
    lastReviewed: 'July 2026',
    prefilledTopic: 'Traditional Beverage Inquiry',
    image: '/assets/home.jpg',
    category: 'Culture & Enterprise',
  },
  {
    id: 'animal-kingdom',
    title: 'Animal Kingdom',
    subtitle: 'Small Livestock Husbandry & Integrated Recycling',
    stage: 'Integrated Production Units',
    stageColor: 'bg-[#00A859]/15 text-[#00A859] border-[#00A859]/40',
    revenueValue: 'Milk, eggs, meat or live animals as available',
    summary: 'Our small livestock units connect animal care, food production, and the recycling of farm resources.',
    body: 'Cows, goats, improved local chickens, and rabbits each have a place in the integrated farm we are developing. Their needs and contributions differ, so feeding, housing, cleanliness, and daily observation matter in every unit. Through Animal Kingdom, we share responsible management practices and provide availability updates for produce.',
    visitorAction: 'Ask about current availability or discuss livestock learning.',
    ctaButton: 'Contact the Livestock Team',
    lastReviewed: 'September 2026',
    prefilledTopic: 'Livestock & Animal Produce Enquiry',
    image: '/assets/home.jpg',
    category: 'Livestock & Soil',
  },
  {
    id: 'ict4ag',
    title: 'ICT4Ag (Digital Agriculture)',
    subtitle: 'Practical Information Systems & Record Keeping',
    stage: 'Internal Development Direction',
    stageColor: 'bg-[#0C1E12]/10 text-[#0C1E12] border-[#0C1E12]/30',
    revenueValue: 'Potential advisory and digital learning services',
    summary: 'ICT4Ag is our direction for making useful agricultural information easier to record, understand, and share.',
    body: 'The starting point is a real task: recording a harvest, organizing a photograph, following an enquiry, or sharing a lesson. We aim to choose tools that our team can use consistently and that help people make better decisions. As applications are tested, we explain what is working and what remains in development.',
    visitorAction: 'Tell us about an agricultural information challenge.',
    ctaButton: 'Discuss ICT4Ag Collaboration',
    lastReviewed: 'August 2026',
    prefilledTopic: 'ICT4Ag Collaboration Enquiry',
    image: '/assets/home.jpg',
    category: 'Agtech & Trials',
  },
];

export default function InitiativesPage() {
  const [selectedInitiative, setSelectedInitiative] = useState<typeof initiativesData[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Crops & Orchards',
    'Soil & Water',
    'Livestock & Soil',
    'Stewardship & Craft',
    'Agro-Tourism & Education',
    'Agtech & Trials',
    'Culture & Enterprise'
  ];

  const filteredInitiatives = initiativesData.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // ── Carousel: 4 cards on desktop, 2 on tablet, 1 on phones; slides every 3 seconds ──
  const [perView, setPerView] = useState(4);
  const [slideIndex, setSlideIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const prevFilterKey = useRef(`${activeCategory}|${searchQuery}`);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 4 : w >= 640 ? 2 : 1);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const total = filteredInitiatives.length;
  const maxIndex = Math.max(0, total - perView);
  const currentIndex = Math.min(slideIndex, maxIndex);

  // Jump to a card when the page is opened with /initiatives#avocado etc.
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const i = initiativesData.findIndex((x) => x.id === hash);
    if (i >= 0) {
      setSlideIndex(i);
      setPlaying(false);
    }
  }, []);

  // Start again from the first card when the filter or search changes
  useEffect(() => {
    const key = `${activeCategory}|${searchQuery}`;
    if (prevFilterKey.current !== key) {
      prevFilterKey.current = key;
      setSlideIndex(0);
    }
  }, [activeCategory, searchQuery]);

  // Auto-advance (pauses on hover/focus, while the modal is open, or when paused)
  const paused = hovered || !playing || selectedInitiative !== null;
  useEffect(() => {
    if (paused || maxIndex === 0) return;
    const timer = setInterval(() => {
      setSlideIndex((prev) => {
        const cur = Math.min(prev, maxIndex);
        return cur >= maxIndex ? 0 : cur + 1;
      });
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [paused, maxIndex]);

  return (
    <div className={`${poppins.className} min-h-screen flex flex-col bg-[#FAF9F6] text-[#0C1E12] selection:bg-[#E5B800] selection:text-[#0C1E12]`}>
      <style>{`
        @keyframes rgg-rise { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
        .rgg-rise { opacity: 0; animation: rgg-rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        @media (prefers-reduced-motion: reduce) {
          .rgg-rise { opacity: 1; animation: none; }
        }
      `}</style>

      {/* Global Navigation Component */}
      <NavBar />

      <main className="flex-grow space-y-8">

        {/* ── 1. Hero Header Section (rounded inset hero, same format as the Our Team hero) ── */}
        <section className="px-3 pt-3 sm:px-6 sm:pt-4">
          <div className="relative flex items-end overflow-hidden rounded-[2rem] bg-[#0C1E12] sm:rounded-[2.75rem]">
            {/* Background image */}
            <Image
              src="/assets/home.jpg"
              alt="Real Green Gold Ltd farm initiative landscape in Kirehe, Rwanda"
              fill
              priority
              quality={95}
              sizes="100vw"
              className="object-cover object-center brightness-60 contrast-[1.05] scale-105 transition-transform duration-1000"
            />

            {/* Gradient overlays */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0C1E12]/75 via-[#0C1E12]/35 to-transparent" />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0C1E12]/60 via-transparent to-black/25" />

            {/* Content — pt-36 clears the fixed NavBar */}
            <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pb-14 pt-24 sm:px-12 lg:px-20">
              <div className="max-w-4xl space-y-4">
                {/* Eyebrow */}
                <p
                  className="rgg-rise flex items-center gap-3 text-base font-semibold text-[#E5B800] sm:text-lg"
                  style={{ animationDelay: '0ms' }}
                >
                  <Compass size={22} strokeWidth={1.8} className="shrink-0" />
                  Ten Anchor Business &amp; Learning Directions
                </p>

                {/* Headline */}
                <h1
                  className="rgg-rise text-5xl font-medium leading-[1.08] tracking-tight text-[#FAF9F6] drop-shadow-sm sm:text-5xl lg:text-6xl"
                  style={{ fontFamily: 'var(--font-display, Georgia, serif)', animationDelay: '100ms' }}
                >
                  Practical Farm <span className="italic text-[#A5D88F]">Initiatives</span>
                </h1>

                {/* Accent underline */}
                <div className="rgg-rise h-1 w-24 rounded-full bg-[#E5B800]" style={{ animationDelay: '200ms' }} />

                {/* Lead paragraph */}
                <p
                  className="rgg-rise max-w-3xl text-justify text-base font-normal leading-relaxed text-[#FAF9F6]/90 sm:text-lg"
                  style={{ animationDelay: '300ms' }}
                >
                  Our initiatives connect food production, resource stewardship, learning, and enterprise. Each begins with a practical question: what challenge are we addressing, who could benefit, and how can the activity support itself?
                </p>

                {/* Actions */}
                <div className="rgg-rise flex flex-wrap items-center gap-3 pt-1" style={{ animationDelay: '400ms' }}>
                  <a
                    href="#initiatives-list"
                    className="inline-flex items-center gap-3 rounded-full bg-[#E5B800] px-7 py-3 text-base font-semibold text-[#0C1E12] shadow-md transition-colors hover:bg-[#F2C94C]"
                  >
                    Browse Initiatives <ArrowUpRight size={18} />
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 rounded-full border border-white/50 bg-white/10 px-7 py-3 text-base font-semibold text-white backdrop-blur-md transition-colors hover:bg-white hover:text-[#0C1E12]"
                  >
                    Contact Us <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Grass + reed stalks along the bottom edge */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-px left-0 right-0 z-30"
              style={{
                height: GRASS.height,
                backgroundImage: GRASS.image,
                backgroundRepeat: 'repeat-x',
                backgroundSize: `${GRASS.width}px ${GRASS.height}px`,
                backgroundPosition: 'left bottom',
              }}
            />
          </div>
        </section>

        {/* ── 2. Filter & Live Search Toolbar ─────────────────────────────── */}
        <section id="initiatives-list" className="max-w-6xl mx-auto px-4 md:px-8 space-y-3 scroll-mt-24">
          <div className="border border-[#00A859]/20 bg-white p-3.5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 shadow-2xs">

            {/* Category Filter Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00A859] shrink-0 pr-1 flex items-center gap-1">
                <Filter size={12} /> Domain:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-2.5 py-1 text-[9.5px] font-mono transition-all cursor-pointer whitespace-nowrap ${
                    activeCategory === cat
                      ? 'bg-[#0C1E12] text-[#FAF9F6] border border-[#0C1E12] font-bold'
                      : 'bg-[#FAF9F6] text-[#5A6259] border border-[#00A859]/15 hover:border-[#00A859] hover:text-[#0C1E12]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input Box */}
            <div className="relative shrink-0 md:w-64">
              <input
                type="text"
                placeholder="Search initiative..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#FAF9F6] border border-[#00A859]/20 px-3 py-1.5 text-xs font-mono placeholder:text-[#5A6259]/60 focus:outline-none focus:border-[#00A859]"
              />
              <Search size={13} className="absolute right-2.5 top-2.5 text-[#5A6259]" />
            </div>

          </div>
        </section>

        {/* ── 3. Initiatives Slider (4 per view, slides every 3 seconds) ───── */}
        <section className="bg-gradient-to-b from-[#1C6B35] to-[#0F4620] py-12 text-white lg:py-14">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="mb-10 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 border border-[#FBC02D]/50 bg-white/5 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.15em] text-[#FBC02D]">
                  <Sprout size={10} />
                  <span>INTEGRATED SYSTEM LEDGER</span>
                </div>
                <h2 className="text-xl font-semibold text-white sm:text-2xl">Our Ten Anchor Directions</h2>
              </div>
              <span className="font-mono text-[10px] text-white/70">
                Showing {filteredInitiatives.length} of {initiativesData.length} Anchor Initiatives
              </span>
            </div>

            {total === 0 ? (
              <p className="py-10 text-center font-mono text-xs text-white/70">
                No initiatives match your search.
              </p>
            ) : (
              <>
                <div
                  className="overflow-hidden"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  onFocusCapture={() => setHovered(true)}
                  onBlurCapture={() => setHovered(false)}
                >
                  <div
                    className={`flex transition-transform duration-700 ease-in-out motion-reduce:transition-none ${
                      maxIndex === 0 ? 'justify-center' : ''
                    }`}
                    style={{ transform: `translateX(-${currentIndex * (100 / perView)}%)` }}
                  >
                    {filteredInitiatives.map((init, i) => {
                      const Icon = initiativeIcons[init.id] || GiSprout;
                      const visible = i >= currentIndex && i < currentIndex + perView;
                      return (
                        <div
                          key={init.id}
                          id={init.id}
                          role="button"
                          tabIndex={visible ? 0 : -1}
                          aria-hidden={!visible}
                          aria-label={`Open ${init.title}`}
                          onClick={() => setSelectedInitiative(init)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setSelectedInitiative(init);
                            }
                          }}
                          style={{ flex: `0 0 ${100 / perView}%` }}
                          className="group relative flex cursor-pointer flex-col items-center px-5 text-center outline-none focus-visible:ring-2 focus-visible:ring-[#FBC02D]"
                        >
                          {/* dashed divider between columns (clipped at the left edge) */}
                          <span
                            aria-hidden="true"
                            className="absolute -left-px bottom-2 top-2 border-l border-dashed border-white/25"
                          />

                          <span className="flex h-[88px] w-[88px] shrink-0 items-center justify-center rounded-full bg-[#FBC02D] text-[#5B2A06] shadow-md transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                            <Icon size={42} aria-hidden="true" />
                          </span>

                          <p className="mt-5 font-mono text-[9.5px] font-bold uppercase tracking-[0.14em] text-[#FBC02D]">
                            {init.category}
                          </p>
                          <h3 className="mt-1.5 text-lg font-bold leading-snug text-white transition-colors group-hover:text-[#FBC02D]">
                            {init.title}
                          </h3>
                          <p className="mt-1 font-mono text-[10.5px] leading-snug text-white/60">{init.subtitle}</p>
                          <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-white/85">{init.summary}</p>

                          <div className="mt-auto flex flex-col items-center gap-2 pt-4">
                            <span className="border border-white/25 bg-white/10 px-2 py-0.5 font-mono text-[8.5px] font-bold uppercase text-[#FBC02D]">
                              {init.stage}
                            </span>
                            <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-[#FBC02D] group-hover:underline">
                              Inspect Details <ArrowUpRight size={11} />
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Dots + play/pause */}
                {maxIndex > 0 && (
                  <div className="mt-10 flex items-center justify-center gap-4">
                    <div className="flex items-center gap-3" role="tablist" aria-label="Initiative slides">
                      {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          role="tab"
                          aria-selected={i === currentIndex}
                          aria-label={`Go to slide ${i + 1}`}
                          onClick={() => setSlideIndex(i)}
                          className={`rounded-full bg-white transition-all duration-300 ${
                            i === currentIndex ? 'h-3.5 w-3.5' : 'h-2 w-2 opacity-70 hover:opacity-100'
                          }`}
                        />
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => setPlaying((v) => !v)}
                      aria-label={playing ? 'Pause automatic sliding' : 'Resume automatic sliding'}
                      title={playing ? 'Pause' : 'Play'}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/15"
                    >
                      {playing ? <Pause size={13} /> : <Play size={13} />}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* ── 4. Reusable Initiative Detail Modal ─────────────────────────── */}
        {selectedInitiative && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0C1E12]/80 backdrop-blur-xs">
            <div className="border border-[#00A859]/30 bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-xl space-y-5 relative">

              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedInitiative(null)}
                className="absolute top-4 right-4 p-1.5 border border-[#00A859]/20 bg-[#FAF9F6] text-[#0C1E12] hover:bg-[#00A859] hover:text-white transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 border-b border-[#00A859]/20 pb-3 pr-8">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 border text-[8.5px] font-mono font-bold uppercase ${selectedInitiative.stageColor}`}>
                    {selectedInitiative.stage}
                  </span>
                  <span className="text-[9px] font-mono text-[#5A6259]">
                    Reviewed: {selectedInitiative.lastReviewed}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-[#0C1E12]">
                  {selectedInitiative.title}
                </h3>
                <p className="text-xs font-mono text-[#00A859]">
                  {selectedInitiative.subtitle}
                </p>
              </div>

              {/* Image & System Overview */}
              <div className="grid sm:grid-cols-12 gap-4 items-start">
                <div className="sm:col-span-5 relative h-40 w-full border border-[#00A859]/20 bg-[#0C1E12]">
                  <Image
                    src={selectedInitiative.image}
                    alt={selectedInitiative.title}
                    fill
                    className="object-cover brightness-95"
                  />
                </div>

                <div className="sm:col-span-7 space-y-2">
                  <span className="text-[8.5px] font-mono font-bold uppercase tracking-wider text-[#E5B800]">
                    System Overview
                  </span>
                  <p className="text-xs text-[#3A4239] leading-relaxed text-justify font-normal">
                    {selectedInitiative.summary}
                  </p>
                </div>
              </div>

              {/* Extended Content */}
              <div className="space-y-2 border-t border-[#00A859]/10 pt-3">
                <span className="text-[8.5px] font-mono font-bold uppercase tracking-wider text-[#00A859]">
                  Documented Activity &amp; Implementation
                </span>
                <p className="text-xs text-[#3A4239] leading-relaxed text-justify font-normal whitespace-pre-line">
                  {selectedInitiative.body}
                </p>
              </div>

              {/* Action Prompt */}
              <div className="p-3 border border-[#00A859]/20 bg-[#FAF9F6] space-y-2">
                <div className="flex items-center gap-1.5 text-[9px] font-mono font-bold uppercase text-[#E5B800]">
                  <MessageSquare size={12} />
                  <span>Visitor Action Prompt</span>
                </div>
                <p className="text-xs italic text-[#0C1E12] font-normal">
                  &ldquo;{selectedInitiative.visitorAction}&rdquo;
                </p>
              </div>

              {/* Modal CTAs */}
              <div className="pt-2 border-t border-[#00A859]/15 flex flex-col sm:flex-row items-center justify-between gap-3">
                <Link
                  href={`/contact?topic=${encodeURIComponent(selectedInitiative.prefilledTopic)}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 border border-[#00A859] bg-[#00A859] text-white px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#008A47] transition-colors"
                >
                  <span>{selectedInitiative.ctaButton}</span>
                  <ArrowUpRight size={13} />
                </Link>

                <button
                  onClick={() => setSelectedInitiative(null)}
                  className="text-xs font-mono text-[#5A6259] hover:text-[#0C1E12] underline"
                >
                  Close Modal
                </button>
              </div>

            </div>
          </div>
        )}
        <CommunityProduction />
        <AgriculturalInnovation />
        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
}