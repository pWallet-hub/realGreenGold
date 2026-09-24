'use client';

import React, { useState } from 'react';
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
  MessageSquare 
} from 'lucide-react';
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

  return (
    <div className={`${poppins.className} min-h-screen flex flex-col bg-[#FAF9F6] text-[#0C1E12] selection:bg-[#E5B800] selection:text-[#0C1E12]`}>
      {/* Global Navigation Component */}
      <NavBar />

      <main className="flex-grow space-y-12">
        
        {/* ── 1. Hero Header Section ──────────────────────────────────────── */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b border-[#00A859]/30 bg-[#0C1E12]">
          <Image
            src="/assets/home.jpg"
            alt="Real Green Gold Ltd farm initiative landscape in Kirehe, Rwanda"
            fill
            priority
            quality={95}
            className="object-cover object-center opacity-35 brightness-90 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1E12] via-[#0C1E12]/50 to-transparent z-10" />

          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center space-y-6 pt-12">
            <div className="inline-flex items-center gap-2 border border-[#E5B800]/60 bg-[#0C1E12]/80 backdrop-blur-md px-3.5 py-1 text-xs font-mono uppercase tracking-[0.2em] text-[#E5B800]">
              <Compass size={13} className="text-[#00A859]" />
              <span>Ten Anchor Business &amp; Learning Directions</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] text-[#FAF9F6] tracking-tight">
              Practical Farm Initiatives
            </h1>

            <div className="w-16 h-0.5 bg-[#E5B800] mx-auto" />

            <p className="max-w-2xl mx-auto text-xs sm:text-sm font-normal text-[#FAF9F6]/85 leading-relaxed text-justify">
              Our initiatives connect food production, resource stewardship, learning, and enterprise. Each begins with a practical question: what challenge are we addressing, who could benefit, and how can the activity support itself?
            </p>
          </div>
        </section>

        {/* ── 2. Filter & Live Search Toolbar ─────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-4 md:px-8 space-y-3">
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

        {/* ── 3. Initiatives Card Deck Section ────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-4 md:px-8 space-y-6">
          <div className="border-b border-[#00A859]/20 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 border border-[#E5B800]/50 bg-[#0C1E12]/5 px-2 py-0.5 text-[9px] font-mono uppercase tracking-[0.15em] text-[#00A859]">
                <Sprout size={10} className="text-[#00A859]" />
                <span>INTEGRATED SYSTEM LEDGER</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#0C1E12]">
                Our Ten Anchor Directions
              </h2>
            </div>
            <span className="text-[10px] font-mono text-[#5A6259]">
              Showing {filteredInitiatives.length} of {initiativesData.length} Anchor Initiatives
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredInitiatives.map((init) => (
              <div
                key={init.id}
                id={init.id}
                onClick={() => setSelectedInitiative(init)}
                className="group border border-[#00A859]/20 bg-white p-4 shadow-2xs flex flex-col justify-between space-y-3 hover:border-[#00A859] transition-all cursor-pointer"
              >
                <div className="space-y-2.5">
                  <div className="relative h-36 w-full overflow-hidden border border-[#00A859]/15 bg-[#0C1E12]">
                    <Image
                      src={init.image}
                      alt={init.title}
                      fill
                      className="object-cover brightness-95 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-[#0C1E12]/90 border border-white/20 px-1.5 py-0.5 text-white text-[7.5px] font-mono font-bold uppercase">
                      {init.category}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[8.5px] font-mono border-b border-[#00A859]/10 pb-1.5">
                    <span className={`px-2 py-0.5 border font-bold uppercase ${init.stageColor}`}>
                      {init.stage}
                    </span>
                    <span className="text-[#5A6259]">RGG Kirehe</span>
                  </div>

                  <div className="space-y-0.5">
                    <h3 className="text-base font-semibold text-[#0C1E12] group-hover:text-[#00A859] transition-colors">
                      {init.title}
                    </h3>
                    <p className="text-[10px] text-[#5A6259] font-mono">
                      {init.subtitle}
                    </p>
                    <p className="text-[10px] text-[#3A4239] leading-relaxed text-justify font-normal pt-1">
                      {init.summary}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#00A859]/10 flex items-center justify-between text-[8.5px] font-mono">
                  <span className="text-[#5A6259] truncate max-w-[170px]">
                    Value: {init.revenueValue}
                  </span>
                  <span className="text-[#00A859] font-bold inline-flex items-center gap-0.5 group-hover:underline">
                    Inspect Details <ArrowUpRight size={10} />
                  </span>
                </div>
              </div>
            ))}
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

        {/* ── 5. Imported Community Production Section ──────────────────── */}
        <CommunityProduction />

        {/* ── 6. Imported Agricultural Innovation Section ───────────────── */}
        <AgriculturalInnovation />

        {/* ── 7. Imported Global Contact Strip ───────────────────────────── */}
        <ContactStrip />

      </main>

      {/* Global Footer Component */}
      <Footer />
    </div>
  );
}