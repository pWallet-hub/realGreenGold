'use client';

import React, {
  memo,
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import {
  Camera,
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
  Search,
  Images,
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

/* ── Data ────────────────────────────────────────────────────────────── */

type GalleryImage = { src: string; caption: string; date: string };
type Album = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  category: string;
  location: string;
  photographer: string;
  context: string;
  coverImage: string;
  featured: boolean;
  images: GalleryImage[];
};

const galleryAlbumsData: Album[] = [
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
      { src: '/assets/home.jpg', caption: 'Field team grading harvested Hass avocados by weight and surface quality.', date: '05 September 2026' },
      { src: '/assets/home.jpg', caption: 'Careful handling and crates staging at the Kirehe orchard collection point.', date: '05 September 2026' },
      { src: '/assets/home.jpg', caption: 'Banana bunch harvesting using targeted field tools to preserve fruit integrity.', date: '04 September 2026' },
      { src: '/assets/home.jpg', caption: 'Transport prep for regional fruit buyers and distribution aggregation.', date: '04 September 2026' },
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
      { src: '/assets/home.jpg', caption: 'Apis mellifera foraging on border cover crops near the primary avocado plot.', date: '18 August 2026' },
      { src: '/assets/home.jpg', caption: 'Handcrafted timber hives assembled using locally sourced farm carpentry.', date: '17 August 2026' },
      { src: '/assets/home.jpg', caption: 'Morning inspection of apiary flight paths and habitat flowering density.', date: '17 August 2026' },
      { src: '/assets/home.jpg', caption: 'Field team recording seasonal flowering times across pollinator strips.', date: '16 August 2026' },
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
      { src: '/assets/home.jpg', caption: 'Demonstrating aerobic compost pile turning and temperature logging.', date: '22 July 2026' },
      { src: '/assets/home.jpg', caption: 'Interactive Q&A with agricultural university students in the demonstration orchard.', date: '22 July 2026' },
      { src: '/assets/home.jpg', caption: 'Guided tour of dry-season drip irrigation controls and moisture monitoring.', date: '22 July 2026' },
      { src: '/assets/home.jpg', caption: 'Group reflection on practical farm enterprise and community outgrower links.', date: '22 July 2026' },
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
      { src: '/assets/home.jpg', caption: 'Daily feeding routine for cattle in the zero-grazing shelter.', date: '10 June 2026' },
      { src: '/assets/home.jpg', caption: 'Collection of livestock manure for aerobic compost batch mixing.', date: '10 June 2026' },
      { src: '/assets/home.jpg', caption: 'Application of cured organic compost to fresh vegetable beds.', date: '09 June 2026' },
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
      { src: '/assets/home.jpg', caption: 'Checking emitter flow rates along vegetable bed drip lines.', date: '14 May 2026' },
      { src: '/assets/home.jpg', caption: 'Soil moisture testing prior to scheduled morning irrigation.', date: '14 May 2026' },
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
      { src: '/assets/home.jpg', caption: 'Smallholder farmers reviewing produce quality guidelines for regional buyers.', date: '03 April 2026' },
      { src: '/assets/home.jpg', caption: 'Seedling selection guidance during community outgrower exchange.', date: '03 April 2026' },
    ],
  },
];

// Topic filter categories (only those with at least one album are shown)
const categories = ['All', 'Crops', 'Animals', 'Soil and Water', 'People', 'Technology', 'Visits and Memories'];

const totalPhotos = galleryAlbumsData.reduce((n, a) => n + a.images.length, 0);

// Varied tile shapes give the grid a masonry rhythm
const tileShapes = ['aspect-[4/5]', 'aspect-[4/3]', 'aspect-square', 'aspect-[3/4]', 'aspect-[5/4]'];

/* Page background colour (also used to "cut" the grass silhouette out of the hero image) */
const PAGE_BG = '#FAF9F6';

/* Tileable grass + cattail silhouette for the bottom edge of the hero (same as home page) */
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

/* ── Helpers ─────────────────────────────────────────────────────────── */

function SectionHeading({ title, intro }: { title: string; intro?: string }) {
  return (
    <header className="mx-auto max-w-2xl text-center">
      <h2 className="text-2xl font-bold tracking-wide text-[#0C1E12] sm:text-3xl">{title}</h2>
      <div className="mx-auto mt-3 flex items-center justify-center gap-1.5" aria-hidden>
        <span className="h-[3px] w-10 rounded-full bg-[#00A859]" />
        <span className="h-[3px] w-3 rounded-full bg-[#E5B800]" />
      </div>
      {intro && <p className="mt-3 text-sm leading-relaxed text-[#3A4239] sm:text-base">{intro}</p>}
    </header>
  );
}

/* Album tile: image-first, text sits on a gradient, details lift on hover */
const AlbumCard = memo(function AlbumCard({
  album,
  index,
  onOpen,
}: {
  album: Album;
  index: number;
  onOpen: (album: Album, startIndex?: number) => void;
}) {
  return (
    <article className="mb-4 break-inside-avoid">
      <button
        type="button"
        onClick={() => onOpen(album)}
        aria-label={`Open album: ${album.title}, ${album.images.length} photos`}
        className={`group relative block w-full overflow-hidden rounded-lg bg-[#0C1E12] text-left shadow-[0_8px_30px_rgba(12,30,18,0.10)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(0,168,89,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A859] focus-visible:ring-offset-2 ${tileShapes[index % tileShapes.length]}`}
      >
        <Image
          src={album.coverImage}
          alt=""
          fill
          quality={80}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0C1E12]/90 via-[#0C1E12]/25 to-transparent" />

        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#0C1E12] backdrop-blur-sm">
          {album.category}
        </span>
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-[#0C1E12]/80 px-2.5 py-1 text-xs font-semibold text-[#E5B800] backdrop-blur-sm">
          <Images size={12} /> {album.images.length}
        </span>

        <span className="absolute inset-x-0 bottom-0 block p-4 text-white">
          <span className="block text-base font-semibold leading-snug">{album.title}</span>
          <span className="mt-1 flex items-center gap-3 text-xs text-white/80">
            <span className="inline-flex items-center gap-1">
              <MapPin size={12} /> {album.location}
            </span>
          </span>
          {/* Details revealed on hover / focus */}
          <span className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-visible:grid-rows-[1fr] group-focus-visible:opacity-100 motion-reduce:transition-none">
            <span className="overflow-hidden">
              <span className="mt-2 flex items-center justify-between border-t border-white/20 pt-2 text-xs text-white/85">
                <span className="inline-flex items-center gap-1">
                  <Calendar size={12} /> {album.date}
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-[#E5B800]">
                  View album <ArrowUpRight size={13} />
                </span>
              </span>
            </span>
          </span>
        </span>
      </button>
    </article>
  );
});

/* ── Lightbox ────────────────────────────────────────────────────────── */

function Lightbox({
  album,
  startIndex,
  onClose,
}: {
  album: Album;
  startIndex: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(startIndex);
  const [copied, setCopied] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const count = album.images.length;
  const photo = album.images[idx];

  const go = useCallback((d: number) => setIdx((i) => (i + d + count) % count), [count]);

  // Keyboard, scroll lock, focus management
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'Tab' && dialogRef.current) {
        const f = dialogRef.current.querySelectorAll<HTMLElement>('button, a[href]');
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, [go, onClose]);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}/gallery#${album.id}`);
      setCopied(true);
    } catch {
      /* clipboard unavailable: ignore */
    }
  };

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-[#0C1E12]/90 p-3 backdrop-blur-sm sm:p-6"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={album.title}
        className="grid max-h-[94vh] w-full max-w-6xl overflow-y-auto rounded-lg bg-white shadow-2xl lg:h-[86vh] lg:grid-cols-12 lg:overflow-hidden"
      >
        {/* Stage */}
        <div className="flex flex-col bg-[#0C1E12] lg:col-span-8 lg:h-full lg:min-h-0">
          <div
            className="relative h-[46vh] min-h-[260px] lg:h-auto lg:flex-1"
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
              touchX.current = null;
            }}
          >
            <Image
              key={idx}
              src={photo.src}
              alt={photo.caption}
              fill
              quality={85}
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="gal-fade object-contain"
            />
            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#0C1E12]/70 text-white backdrop-blur-sm transition-colors hover:bg-[#00A859] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5B800]"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#0C1E12]/70 text-white backdrop-blur-sm transition-colors hover:bg-[#00A859] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5B800]"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
            <span className="absolute bottom-3 left-3 rounded-full bg-[#0C1E12]/80 px-3 py-1 text-xs font-semibold text-[#E5B800] backdrop-blur-sm">
              {idx + 1} / {count}
            </span>
          </div>

          {count > 1 && (
            <div className="flex gap-2 overflow-x-auto p-3">
              {album.images.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIdx(i)}
                  aria-label={`Show photo ${i + 1}`}
                  aria-current={i === idx}
                  className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5B800] ${
                    i === idx ? 'ring-2 ring-[#E5B800]' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image src={img.src} alt="" fill sizes="80px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="relative flex flex-col gap-4 p-5 sm:p-6 lg:col-span-4 lg:h-full lg:overflow-y-auto">
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close album"
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-[#00A859]/25 bg-[#FAF9F6] text-[#0C1E12] transition-colors hover:bg-[#00A859] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A859]"
          >
            <X size={16} />
          </button>

          <div className="pr-10">
            <span className="inline-block rounded-full bg-[#00A859]/10 px-3 py-1 text-xs font-semibold text-[#008A47]">
              {album.category}
            </span>
            <h3 className="mt-2 text-xl font-semibold leading-snug text-[#0C1E12]">{album.title}</h3>
            <p className="mt-1 text-sm text-[#5A6259]">{album.subtitle}</p>
          </div>

          <ul className="space-y-1.5 text-sm text-[#3A4239]">
            <li className="flex items-center gap-2"><MapPin size={14} className="text-[#00A859]" /> {album.location}</li>
            <li className="flex items-center gap-2"><Calendar size={14} className="text-[#00A859]" /> {album.date}</li>
            <li className="flex items-center gap-2"><User size={14} className="text-[#00A859]" /> {album.photographer}</li>
          </ul>

          <p className="text-sm leading-relaxed text-[#3A4239]">{album.context}</p>

          <div key={idx} className="gal-fade border-l-[3px] border-[#E5B800] bg-[#FAF9F6] px-3 py-2">
            <p className="text-xs font-semibold text-[#00A859]">Photo {idx + 1}</p>
            <p className="text-sm leading-relaxed text-[#0C1E12]">{photo.caption}</p>
            <p className="mt-1 text-xs text-[#5A6259]">Captured {photo.date}</p>
          </div>

          <div className="mt-auto flex flex-wrap gap-2 border-t border-[#00A859]/15 pt-4">
            <button
              type="button"
              onClick={copyLink}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#00A859]/30 bg-white px-4 py-2 text-xs font-semibold text-[#0C1E12] transition-colors hover:bg-[#00A859] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A859]"
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
              {copied ? 'Link copied' : 'Copy album link'}
            </button>
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${album.title} - Real Green Gold Ltd Farm Gallery`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#00A859]/30 bg-white px-4 py-2 text-xs font-semibold text-[#0C1E12] transition-colors hover:bg-[#00A859] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A859]"
            >
              <Share2 size={13} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────────────── */

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const deferredQuery = useDeferredValue(searchQuery);
  const [open, setOpen] = useState<{ album: Album; start: number } | null>(null);

  const featuredAlbum = useMemo(
    () => galleryAlbumsData.find((a) => a.featured) || galleryAlbumsData[0],
    []
  );

  // Category chips with counts (empty categories are hidden)
  const categoryChips = useMemo(
    () =>
      categories
        .map((c) => ({
          name: c,
          count: c === 'All' ? galleryAlbumsData.length : galleryAlbumsData.filter((a) => a.category === c).length,
        }))
        .filter((c) => c.count > 0),
    []
  );

  const filteredAlbums = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    return galleryAlbumsData.filter((a) => {
      const okCat = activeCategory === 'All' || a.category === activeCategory;
      const okSearch =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.location.toLowerCase().includes(q) ||
        a.context.toLowerCase().includes(q);
      return okCat && okSearch;
    });
  }, [activeCategory, deferredQuery]);

  const openAlbum = useCallback((album: Album, start = 0) => {
    setOpen({ album, start });
    window.history.replaceState(null, '', `#${album.id}`);
  }, []);

  const closeAlbum = useCallback(() => {
    setOpen(null);
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  }, []);

  // Deep link: /gallery#album-3 opens that album
  useEffect(() => {
    const id = window.location.hash.slice(1);
    const match = galleryAlbumsData.find((a) => a.id === id);
    if (match) setOpen({ album: match, start: 0 });
  }, []);

  const resetFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
  };

  return (
    <div
      className={`${poppins.className} flex min-h-screen flex-col bg-[#FAF9F6] text-[#0C1E12] selection:bg-[#E5B800] selection:text-[#0C1E12]`}
    >
      <style>{`
        @keyframes gal-fade { from { opacity: 0; } to { opacity: 1; } }
        .gal-fade { animation: gal-fade 0.35s ease-out; }
        @media (prefers-reduced-motion: reduce) { .gal-fade { animation: none; } }
      `}</style>

      <NavBar />

      <main className="flex-grow">
        {/* ── 1. Hero: rounded frame with grass edge (same as home / about / team) ── */}
        <div className="bg-[#FAF9F6] px-3 pt-3 sm:px-5 lg:px-6">
          <section className="relative z-0 flex min-h-[380px] items-center overflow-hidden rounded-[28px] bg-[#173A2B] pb-12 pt-12 sm:rounded-[40px] lg:pb-14">
            <Image
              src="/assets/home.jpg"
              alt="Real Green Gold Ltd farm photo gallery in Kirehe, Rwanda"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="hero-background object-cover object-center brightness-[0.9]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#10291F]/70 via-[#10291F]/35 to-[#10291F]/5" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10291F]/35 via-transparent to-[#10291F]/10" aria-hidden="true" />

            <div className="hero-content relative z-10 mx-auto w-full max-w-7xl px-6 py-4 sm:px-10 lg:px-16">
              <div className="max-w-3xl space-y-2.5">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#F1CA66]">
                  <Camera size={18} className="text-[#A9D18E]" />
                  <span>Verified photo record &amp; archives</span>
                </div>

                <h1 className="max-w-3xl font-serif text-3xl font-medium leading-[1.08] text-white sm:text-4xl lg:text-5xl">
                  Our farm <span className="italic text-[#A9D18E]">memories</span>.
                </h1>

                <div className="h-1 w-16 bg-[#D8A82E]" />

                <p className="max-w-2xl text-justify text-sm leading-relaxed text-white/90 sm:text-base">
                  Explore photographs from crop care and harvesting, team activities, learning visits, and important moments in the life of the business. We preserve these memories to show how the farm and its relationships develop over time.
                </p>

                <p className="text-sm font-semibold text-[#E8D8B0]">
                  {galleryAlbumsData.length} albums · {totalPhotos} photos
                </p>

                <div className="flex flex-col items-start gap-2.5 pt-1 sm:flex-row sm:items-center">
                  <a
                    href="#albums"
                    className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-full border border-[#E8BD4C] bg-[#E8BD4C] px-6 text-sm font-semibold text-[#203528] shadow-md transition-colors hover:bg-[#F1CC68] sm:w-auto"
                  >
                    <span>Browse albums</span>
                    <ArrowUpRight size={14} />
                  </a>
                  <Link
                    href="/blogs"
                    className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-full border border-white/65 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#203528] sm:w-auto"
                  >
                    <span>Read farm stories</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

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

        {/* ── 2. Spotlight album ───────────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-4 py-10 md:px-8">
          <div className="group relative flex min-h-[380px] items-end overflow-hidden rounded-lg bg-[#0C1E12] shadow-[0_14px_40px_rgba(12,30,18,0.18)] lg:min-h-[440px]">
            <Image
              src={featuredAlbum.coverImage}
              alt=""
              fill
              quality={80}
              sizes="(min-width: 1152px) 1100px, 100vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-[#0C1E12]/90 via-[#0C1E12]/55 to-transparent" />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0C1E12]/70 via-transparent to-transparent" />

            <div className="relative grid w-full items-end gap-6 p-6 sm:p-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E5B800] px-3 py-1 text-xs font-semibold text-[#0C1E12]">
                  <Sparkles size={12} /> Spotlight album
                </span>
                <p className="mt-3 flex flex-wrap items-center gap-x-3 text-sm text-white/80">
                  <span className="font-semibold text-[#A9D18E]">{featuredAlbum.category}</span>
                  <span className="inline-flex items-center gap-1"><MapPin size={13} /> {featuredAlbum.location}</span>
                  <span className="inline-flex items-center gap-1"><Calendar size={13} /> {featuredAlbum.date}</span>
                </p>
                <h2 className="mt-1 font-serif text-2xl font-medium leading-tight text-white sm:text-3xl">
                  {featuredAlbum.title}
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/85">{featuredAlbum.context}</p>
                <button
                  type="button"
                  onClick={() => openAlbum(featuredAlbum)}
                  className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-full bg-[#E8BD4C] px-6 text-sm font-semibold text-[#203528] shadow-md transition-colors hover:bg-[#F1CC68] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C1E12]"
                >
                  View {featuredAlbum.images.length} photos <ArrowUpRight size={14} />
                </button>
              </div>

              {/* Quick-jump previews */}
              <div className="hidden justify-end gap-2 lg:col-span-5 lg:flex">
                {featuredAlbum.images.slice(0, 3).map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => openAlbum(featuredAlbum, i)}
                    aria-label={`Open photo ${i + 1} of ${featuredAlbum.title}`}
                    className="relative h-24 w-24 overflow-hidden rounded-lg border-2 border-white/30 transition-all duration-300 hover:-translate-y-1 hover:border-[#E5B800] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5B800] motion-reduce:hover:translate-y-0"
                  >
                    <Image src={img.src} alt="" fill sizes="96px" className="object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Albums: filter + masonry grid ─────────────────────────── */}
        <section id="albums" className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-10 md:px-8">
          <SectionHeading
            title="All photo albums"
            intro="Filter by topic or search by place to find a moment."
          />

          <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div role="group" aria-label="Filter by category" className="flex gap-2 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible md:pb-0">
              {categoryChips.map(({ name, count }) => {
                const on = activeCategory === name;
                return (
                  <button
                    key={name}
                    type="button"
                    onClick={() => setActiveCategory(name)}
                    aria-pressed={on}
                    className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-300 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A859] focus-visible:ring-offset-2 ${
                      on
                        ? 'border-[#00A859] bg-[#00A859] text-white shadow-[0_8px_20px_rgba(0,168,89,0.25)]'
                        : 'border-[#00A859]/25 bg-white text-[#0C1E12] hover:border-[#00A859] hover:bg-[#00A859]/5'
                    }`}
                  >
                    {name}
                    <span className={`rounded-full px-1.5 text-xs ${on ? 'bg-white/20' : 'bg-[#00A859]/10 text-[#008A47]'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="relative md:w-64">
              <Search size={15} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5A6259]" />
              <input
                type="search"
                aria-label="Search gallery"
                placeholder="Search albums or places"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-[#00A859]/25 bg-white py-2 pl-10 pr-9 text-sm placeholder:text-[#5A6259]/70 focus:border-[#00A859] focus:outline-none focus:ring-2 focus:ring-[#00A859]/20"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-[#5A6259] hover:bg-[#00A859]/10"
                >
                  <X size={13} />
                </button>
              )}
            </div>
          </div>

          <p className="mt-3 text-sm text-[#5A6259]" aria-live="polite">
            Showing {filteredAlbums.length} of {galleryAlbumsData.length} albums
          </p>

          {filteredAlbums.length > 0 ? (
            <div className="mt-4 columns-1 gap-4 sm:columns-2 lg:columns-3">
              {filteredAlbums.map((album, i) => (
                <AlbumCard key={album.id} album={album} index={i} onOpen={openAlbum} />
              ))}
            </div>
          ) : (
            <div className="mt-4 flex flex-col items-center rounded-lg border border-dashed border-[#00A859]/30 bg-white px-6 py-12 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#00A859]/10 text-[#00A859]">
                <Search size={22} />
              </span>
              <h3 className="mt-3 text-lg font-semibold">No albums match your search</h3>
              <p className="mt-1 max-w-sm text-sm text-[#5A6259]">
                Try a different word or show every topic again.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-4 rounded-full bg-[#00A859] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#008A47] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A859] focus-visible:ring-offset-2"
              >
                Show all albums
              </button>
            </div>
          )}
        </section>

        {/* ── 4. Follow & share ────────────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-4 pb-10 pt-2 md:px-8">
          <div
            className="rounded-[14px] p-3 shadow-[0_14px_32px_rgba(10,40,20,0.28)]"
            style={{ background: 'linear-gradient(180deg, #1c6c37 0%, #165f2d 50%, #0f4a22 100%)' }}
          >
            <div className="rounded-[10px] border border-dashed border-white/25 px-5 py-8 text-center text-white sm:px-10">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FBC02D] text-[#5b2a06]">
                <Sparkles size={24} strokeWidth={2.2} />
              </span>
              <h2 className="mt-3 text-xl font-semibold sm:text-2xl">Found a moment worth sharing?</h2>
              <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-white/90">
                Found a story or album worth sharing? Send its link to someone who would enjoy learning about the farm. Follow our verified social accounts for short updates and return here for the complete story.
              </p>
              <Link
                href="/blogs"
                className="group mt-5 inline-flex items-center gap-2 rounded-full bg-[#E8BD4C] px-6 py-2.5 text-sm font-semibold text-[#0C1E12] shadow-md transition-colors hover:bg-[#F1CC68] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#165f2d]"
              >
                Read farm journal stories
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 5. Global contact strip ──────────────────────────────────── */}
        <ContactStrip />
      </main>

      <Footer />

      {open && <Lightbox key={open.album.id} album={open.album} startIndex={open.start} onClose={closeAlbum} />}
    </div>
  );
}