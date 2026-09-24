'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { 
  Camera, 
  Compass, 
  Filter, 
  MapPin, 
  Calendar, 
  User, 
  ArrowUpRight, 
  Copy, 
  Check, 
  X, 
  Share2, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  Layers,
  Grid,
  Search,
  CheckCircle2
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

// ── Verified Gallery Albums Ledger ──────────────────────────────────────────
const galleryAlbumsData = [
  {
    id: 'album-1',
    title: 'Avocado & Banana Harvest Operations',
    subtitle: 'Seasonal crop harvesting, grading, and field logistics',
    date: '05 September 2026',
    category: 'Crops',
    location: 'Kirehe Orchard Site',
    photographer: 'RGG Field Media Team',
    context: 'Documenting the practical work behind picking, sorting, and grading Hass avocados and commercial banana bunches for regional distribution.',
    coverImage: '/assets/home.jpg',
    featured: true,
    images: [
      {
        src: '/assets/home.jpg',
        caption: 'Field team grading harvested Hass avocados by weight and surface quality.',
        date: '05 September 2026',
      },
      {
        src: '/assets/home.jpg',
        caption: 'Careful handling and crates staging at the Kirehe orchard collection point.',
        date: '05 September 2026',
      },
      {
        src: '/assets/home.jpg',
        caption: 'Banana bunch harvesting using targeted field tools to preserve fruit integrity.',
        date: '04 September 2026',
      },
      {
        src: '/assets/home.jpg',
        caption: 'Transport prep for regional fruit buyers and distribution aggregation.',
        date: '04 September 2026',
      },
    ],
  },
  {
    id: 'album-2',
    title: 'Bee Sanctuary & Pollinator Stewardship',
    subtitle: 'Observing pollinator habitats and flowering crop integration',
    date: '18 August 2026',
    category: 'Soil and Water',
    location: 'Pollinator Plot, Kirehe',
    photographer: 'RGG Agroecology Team',
    context: 'Visual record of dedicated bee habitats, flowering flora borders, and hive craftsmanship integrated alongside avocado orchards.',
    coverImage: '/assets/home.jpg',
    featured: false,
    images: [
      {
        src: '/assets/home.jpg',
        caption: 'Apis mellifera foraging on border cover crops near the primary avocado plot.',
        date: '18 August 2026',
      },
      {
        src: '/assets/home.jpg',
        caption: 'Handcrafted timber hives assembled using locally sourced farm carpentry.',
        date: '17 August 2026',
      },
      {
        src: '/assets/home.jpg',
        caption: 'Morning inspection of apiary flight paths and habitat flowering density.',
        date: '17 August 2026',
      },
      {
        src: '/assets/home.jpg',
        caption: 'Field team recording seasonal flowering times across pollinator strips.',
        date: '16 August 2026',
      },
    ],
  },
  {
    id: 'album-3',
    title: 'Agronomic Field Visit & Student Exchange',
    subtitle: 'Hosting student groups and smallholder producer learning visits',
    date: '22 July 2026',
    category: 'Visits and Memories',
    location: 'RGG Demonstration Farm',
    photographer: 'Pacifique Nshimiyimana',
    context: 'Preserving memories from interactive farm walks, zero-grazing manure compost demonstrations, and agronomic knowledge sharing.',
    coverImage: '/assets/home.jpg',
    featured: true,
    images: [
      {
        src: '/assets/home.jpg',
        caption: 'Demonstrating aerobic compost pile turning and temperature logging.',
        date: '22 July 2026',
      },
      {
        src: '/assets/home.jpg',
        caption: 'Interactive Q&A with agricultural university students in the demonstration orchard.',
        date: '22 July 2026',
      },
      {
        src: '/assets/home.jpg',
        caption: 'Guided tour of dry-season drip irrigation controls and moisture monitoring.',
        date: '22 July 2026',
      },
      {
        src: '/assets/home.jpg',
        caption: 'Group reflection on practical farm enterprise and community outgrower links.',
        date: '22 July 2026',
      },
    ],
  },
  {
    id: 'album-4',
    title: 'Zero-Grazing Livestock & Compost Production',
    subtitle: 'Animal husbandry and nutrient cycling in practice',
    date: '10 June 2026',
    category: 'Animals',
    location: 'Livestock Unit, Kirehe',
    photographer: 'RGG Field Team',
    context: 'Documenting daily livestock care, manure collection, and its conversion into rich organic fertilizer for vegetable plots.',
    coverImage: '/assets/home.jpg',
    featured: false,
    images: [
      {
        src: '/assets/home.jpg',
        caption: 'Daily feeding routine for cattle in the zero-grazing shelter.',
        date: '10 June 2026',
      },
      {
        src: '/assets/home.jpg',
        caption: 'Collection of livestock manure for aerobic compost batch mixing.',
        date: '10 June 2026',
      },
      {
        src: '/assets/home.jpg',
        caption: 'Application of cured organic compost to fresh vegetable beds.',
        date: '09 June 2026',
      },
    ],
  },
  {
    id: 'album-5',
    title: 'Drip Irrigation & Soil Care Operations',
    subtitle: 'Water conservation technology and dry-period monitoring',
    date: '14 May 2026',
    category: 'Soil and Water',
    location: 'Irrigation Plot 2, Kirehe',
    photographer: 'RGG Technical Lead',
    context: 'Practical record of water line installation, soil moisture probe testing, and dry-season irrigation management.',
    coverImage: '/assets/home.jpg',
    featured: false,
    images: [
      {
        src: '/assets/home.jpg',
        caption: 'Checking emitter flow rates along vegetable bed drip lines.',
        date: '14 May 2026',
      },
      {
        src: '/assets/home.jpg',
        caption: 'Soil moisture testing prior to scheduled morning irrigation.',
        date: '14 May 2026',
      },
    ],
  },
  {
    id: 'album-6',
    title: 'Community Producer Workshop & Training',
    subtitle: 'Outgrower network meetings and skill sharing in Kirehe',
    date: '03 April 2026',
    category: 'People',
    location: 'Kirehe Community Center',
    photographer: 'RGG Outreach Coordinator',
    context: 'Photographs from outgrower training sessions on post-harvest handling, quality standards, and sustainable crop protection.',
    coverImage: '/assets/home.jpg',
    featured: false,
    images: [
      {
        src: '/assets/home.jpg',
        caption: 'Smallholder farmers reviewing produce quality guidelines for regional buyers.',
        date: '03 April 2026',
      },
      {
        src: '/assets/home.jpg',
        caption: 'Seedling selection guidance during community outgrower exchange.',
        date: '03 April 2026',
      },
    ],
  },
];

// Topic Filter Categories
const categories = [
  'All',
  'Crops',
  'Animals',
  'Soil and Water',
  'People',
  'Technology',
  'Visits and Memories',
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedAlbum, setSelectedAlbum] = useState<typeof galleryAlbumsData[0] | null>(null);
  const [currentImageIdx, setCurrentImageIdx] = useState<number>(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredAlbums = galleryAlbumsData.filter((album) => {
    const matchesCategory = activeCategory === 'All' || album.category === activeCategory;
    const matchesSearch = album.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          album.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          album.context.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredAlbum = galleryAlbumsData.find((a) => a.featured) || galleryAlbumsData[0];

  const handleOpenModal = (album: typeof galleryAlbumsData[0]) => {
    setSelectedAlbum(album);
    setCurrentImageIdx(0);
  };

  const handleCopyLink = (id: string) => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(`${window.location.origin}/gallery#${id}`);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <div className={`${poppins.className} min-h-screen flex flex-col bg-[#FAF9F6] text-[#0C1E12] selection:bg-[#E5B800] selection:text-[#0C1E12]`}>
      <NavBar />

      <main className="flex-grow space-y-12">
        
        {/* ── 1. Hero Header Section ──────────────────────────────────────── */}
        <section className="relative h-[55vh] min-h-[480px] flex items-center justify-center overflow-hidden border-b border-[#00A859]/30 bg-[#0C1E12]">
          <Image
    src="/assets/home.jpg"
    alt="Real Green Gold Ltd farm photo gallery in Kirehe, Rwanda"
    fill
    priority
    quality={95}
    sizes="100vw"
    className="object-cover object-center brightness-60 contrast-[1.05] scale-105 transition-transform duration-1000"
  />

  {/* Transparent Gradient Overlays */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#0C1E12]/80 via-[#0C1E12]/50 to-transparent z-10" />
  <div className="absolute inset-0 bg-gradient-to-t from-[#0C1E12]/90 via-transparent to-black/30 z-10" />

          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center space-y-6 pt-12">
            <div className="inline-flex items-center gap-2 border border-[#E5B800]/60 bg-[#0C1E12]/80 backdrop-blur-md px-3.5 py-1 text-xs font-mono uppercase tracking-[0.2em] text-[#E5B800]">
              <Camera size={13} className="text-[#00A859]" />
              <span>Verified Photo Record &amp; Archives</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] text-[#FAF9F6] tracking-tight">
              Our Farm Memories
            </h1>

            <div className="w-16 h-0.5 bg-[#E5B800] mx-auto" />

            <p className="max-w-2xl mx-auto text-xs sm:text-sm font-normal text-[#FAF9F6]/85 leading-relaxed text-justify">
              Explore photographs from crop care and harvesting, team activities, learning visits, and important moments in the life of the business. We preserve these memories to show how the farm and its relationships develop over time.
            </p>
          </div>
        </section>

        {/* ── 2. Featured Album Spotlight Panel ───────────────────────────── */}
        <section className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="border border-[#00A859]/30 bg-white shadow-2xs grid lg:grid-cols-12 gap-0 overflow-hidden">
            
            <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[400px] bg-[#0C1E12]">
              <Image
                src={featuredAlbum.coverImage}
                alt={featuredAlbum.title}
                fill
                priority
                className="object-cover brightness-95"
              />
              <div className="absolute top-3 left-3 bg-[#0C1E12] border border-white/20 px-2.5 py-0.5 text-[#E5B800] text-[8px] font-mono font-bold uppercase tracking-wider">
                SPOTLIGHT ALBUM
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[9px] font-mono text-[#00A859] font-bold uppercase">
                  <span>{featuredAlbum.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-[#5A6259]">
                    <MapPin size={10} /> {featuredAlbum.location}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-semibold text-[#0C1E12] leading-tight">
                  {featuredAlbum.title}
                </h2>

                <p className="text-xs text-[#3A4239] leading-relaxed text-justify font-normal">
                  {featuredAlbum.context}
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-[#00A859]/15">
                <div className="flex items-center justify-between text-[9px] font-mono text-[#5A6259]">
                  <span>{featuredAlbum.images.length} Verified Photos</span>
                  <span>Captured: {featuredAlbum.date}</span>
                </div>

                <button
                  onClick={() => handleOpenModal(featuredAlbum)}
                  className="w-full inline-flex items-center justify-center gap-1.5 border border-[#00A859] bg-[#00A859] text-white py-2.5 px-4 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#008A47] transition-colors shadow-2xs cursor-pointer"
                >
                  <span>Inspect Spotlight Album</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* ── 3. Topic Filter & Search Bar ───────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="border border-[#00A859]/20 bg-white p-3.5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 shadow-2xs">
            
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00A859] shrink-0 pr-1 flex items-center gap-1">
                <Filter size={12} /> Category:
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

            <div className="relative shrink-0 md:w-56">
              <input
                type="text"
                placeholder="Search gallery..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#FAF9F6] border border-[#00A859]/20 px-3 py-1.5 text-xs font-mono placeholder:text-[#5A6259]/60 focus:outline-none focus:border-[#00A859]"
              />
              <Search size={13} className="absolute right-2.5 top-2.5 text-[#5A6259]" />
            </div>

          </div>
        </section>

        {/* ── 4. Main Gallery Grid ────────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-4 md:px-8 space-y-6">
          <div className="border-b border-[#00A859]/20 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 border border-[#E5B800]/50 bg-[#0C1E12]/5 px-2 py-0.5 text-[9px] font-mono uppercase tracking-[0.15em] text-[#00A859]">
                <Layers size={10} className="text-[#00A859]" />
                <span>ARCHIVE LEDGER</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#0C1E12]">
                All Photo Albums
              </h2>
            </div>
            <span className="text-[10px] font-mono text-[#5A6259]">
              Showing {filteredAlbums.length} of {galleryAlbumsData.length} Albums
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredAlbums.map((album) => (
              <div
                key={album.id}
                id={album.id}
                onClick={() => handleOpenModal(album)}
                className="group border border-[#00A859]/20 bg-white p-4 shadow-2xs flex flex-col justify-between space-y-3 hover:border-[#00A859] transition-all cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="relative h-48 w-full overflow-hidden border border-[#00A859]/15 bg-[#0C1E12]">
                    <Image
                      src={album.coverImage}
                      alt={album.title}
                      fill
                      className="object-cover brightness-95 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-[#0C1E12]/90 border border-white/20 px-2 py-0.5 text-[#E5B800] text-[8px] font-mono font-bold uppercase tracking-wider">
                      {album.images.length} PHOTOS
                    </div>
                    <div className="absolute top-2 right-2 bg-[#00A859] border border-white/20 px-1.5 py-0.5 text-white text-[8px] font-mono font-bold uppercase">
                      {album.category}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[9px] font-mono text-[#00A859] font-bold border-b border-[#00A859]/10 pb-1.5">
                      <span className="flex items-center gap-1">
                        <MapPin size={10} /> {album.location}
                      </span>
                      <span className="flex items-center gap-1 text-[#5A6259]">
                        <Calendar size={10} /> {album.date}
                      </span>
                    </div>

                    <h3 className="text-base font-semibold text-[#0C1E12] group-hover:text-[#00A859] transition-colors pt-1">
                      {album.title}
                    </h3>

                    <p className="text-[10.5px] text-[#5A6259] leading-relaxed text-justify font-normal">
                      {album.context}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#00A859]/10 flex items-center justify-between text-[8.5px] font-mono">
                  <span className="text-[#5A6259] flex items-center gap-1">
                    <User size={10} className="text-[#00A859]" /> Credit: {album.photographer}
                  </span>
                  <span className="text-[#00A859] font-bold inline-flex items-center gap-0.5 group-hover:underline">
                    View Album <ArrowUpRight size={10} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. Detailed Album Modal Drawer with Image Carousel ──────────── */}
        {selectedAlbum && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0C1E12]/80 backdrop-blur-xs">
            <div className="border border-[#00A859]/30 bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-xl space-y-6 relative">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedAlbum(null)}
                className="absolute top-4 right-4 p-1.5 border border-[#00A859]/20 bg-[#FAF9F6] text-[#0C1E12] hover:bg-[#00A859] hover:text-white transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 border-b border-[#00A859]/20 pb-4 pr-8">
                <div className="flex flex-wrap items-center gap-2 text-[9px] font-mono">
                  <span className="bg-[#0C1E12] text-[#E5B800] px-2 py-0.5 font-bold uppercase">
                    {selectedAlbum.category}
                  </span>
                  <span className="text-[#00A859] font-bold flex items-center gap-1">
                    <MapPin size={10} /> {selectedAlbum.location}
                  </span>
                  <span className="text-[#5A6259] flex items-center gap-1">
                    <Calendar size={10} /> {selectedAlbum.date}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-[#0C1E12]">
                  {selectedAlbum.title}
                </h3>
                <p className="text-xs font-mono text-[#5A6259]">
                  {selectedAlbum.subtitle} • Photographer Credit: {selectedAlbum.photographer}
                </p>
              </div>

              {/* Interactive Stage Carousel */}
              <div className="space-y-3">
                <div className="relative h-72 sm:h-96 w-full border border-[#00A859]/20 bg-[#0C1E12] overflow-hidden">
                  <Image
                    src={selectedAlbum.images[currentImageIdx].src}
                    alt={selectedAlbum.images[currentImageIdx].caption}
                    fill
                    className="object-contain"
                  />

                  {/* Navigation Arrows */}
                  <button
                    onClick={() => setCurrentImageIdx((prev) => (prev - 1 + selectedAlbum.images.length) % selectedAlbum.images.length)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-[#0C1E12]/80 border border-white/20 text-white hover:bg-[#00A859] transition-colors cursor-pointer"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  <button
                    onClick={() => setCurrentImageIdx((prev) => (prev + 1) % selectedAlbum.images.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#0C1E12]/80 border border-white/20 text-white hover:bg-[#00A859] transition-colors cursor-pointer"
                  >
                    <ChevronRight size={16} />
                  </button>

                  <div className="absolute bottom-2 right-2 bg-[#0C1E12]/90 border border-white/20 px-2 py-0.5 text-[#E5B800] text-[8px] font-mono font-bold">
                    PHOTO {currentImageIdx + 1} OF {selectedAlbum.images.length}
                  </div>
                </div>

                {/* Photo Caption Card */}
                <div className="p-3 border border-[#00A859]/20 bg-[#FAF9F6] space-y-1">
                  <span className="text-[8.5px] font-mono font-bold uppercase tracking-wider text-[#00A859] block">
                    CAPTION RECORD
                  </span>
                  <p className="text-xs text-[#3A4239] leading-relaxed text-justify font-normal">
                    {selectedAlbum.images[currentImageIdx].caption}
                  </p>
                  <span className="text-[8.5px] font-mono text-[#5A6259] block pt-0.5">
                    Date Captured: {selectedAlbum.images[currentImageIdx].date}
                  </span>
                </div>
              </div>

              {/* Thumbnails Row */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {selectedAlbum.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIdx(idx)}
                    className={`relative h-14 w-20 shrink-0 border transition-all cursor-pointer ${
                      currentImageIdx === idx ? 'border-[#00A859] ring-2 ring-[#00A859]/20' : 'border-[#00A859]/20 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Share & Modal Footer */}
              <div className="pt-4 border-t border-[#00A859]/15 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopyLink(selectedAlbum.id)}
                    className="p-2 border border-[#00A859]/20 bg-[#FAF9F6] hover:bg-[#00A859] hover:text-white transition-colors flex items-center gap-1.5 text-[9.5px] font-mono font-bold cursor-pointer"
                  >
                    {copiedId === selectedAlbum.id ? <Check size={12} className="text-green-600" /> : <Copy size={12} />}
                    <span>{copiedId === selectedAlbum.id ? 'Copied' : 'Copy Album Link'}</span>
                  </button>

                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${selectedAlbum.title} - Real Green Gold Ltd Farm Gallery`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-[#00A859]/20 bg-[#FAF9F6] hover:bg-[#00A859] hover:text-white transition-colors text-[9.5px] font-mono font-bold flex items-center gap-1"
                  >
                    <Share2 size={12} />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <button
                  onClick={() => setSelectedAlbum(null)}
                  className="text-xs font-mono text-[#5A6259] hover:text-[#0C1E12] underline"
                >
                  Close Album Drawer
                </button>
              </div>

            </div>
          </div>
        )}

        {/* ── 6. Follow & Share Banner ────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="border border-[#00A859]/30 bg-[#0C1E12] text-[#FAF9F6] p-6 sm:p-8 shadow-2xs space-y-4 text-center">
            <div className="inline-flex items-center gap-1.5 border border-[#E5B800]/50 bg-white/5 px-2.5 py-0.5 text-[9px] font-mono uppercase tracking-[0.15em] text-[#E5B800]">
              <Sparkles size={11} />
              <span>Follow &amp; Share Our Journey</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold leading-tight text-[#FAF9F6]">
              Found a Moment Worth Sharing?
            </h2>

            <p className="max-w-2xl mx-auto text-xs text-[#FAF9F6]/85 leading-relaxed text-justify sm:text-center font-normal">
              “Found a story or album worth sharing? Send its link to someone who would enjoy learning about the farm. Follow our verified social accounts for short updates and return here for the complete story.”
            </p>

            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-1.5 border border-[#E5B800] bg-[#E5B800] text-[#0C1E12] px-5 py-2 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#c9a000] transition-colors shadow-2xs"
              >
                <span>Read Farm Journal Stories</span>
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 7. Global Contact Strip Component ────────────────────────────── */}
        <ContactStrip />

      </main>

      <Footer />
    </div>
  );
}