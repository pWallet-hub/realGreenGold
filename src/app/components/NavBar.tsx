'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight, ArrowUpRight } from 'lucide-react';

export default function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Five primary navigation items as defined in the RGG content structure
  const navItems = [
    { name: 'About Us', path: '/about-us' },
    { name: 'Our Team', path: '/our-team' },
    { name: 'Initiatives', path: '/initiatives' },
    { name: 'Blog', path: '/blogs' },
    { name: 'Gallery', path: '/gallery' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1E2620]/95 backdrop-blur-md border-b border-[#D9D4C6]/20 py-3 shadow-md'
            : 'bg-gradient-to-b from-[#1E2620]/80 via-[#1E2620]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Title */}
            <Link href="/" className="flex items-center gap-3.5 group">
              {/* Circular, enlarged logo container */}
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#D9D4C6] bg-white p-1 shadow-sm transition-transform duration-300 group-hover:scale-105 shrink-0">
                <Image
                  src="/assets/real.jpg"
                  alt="Real Green Gold Ltd Logo"
                  fill
                  sizes="48px"
                  className="object-contain rounded-full p-0.5"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span
                  className="text-base italic font-bold leading-none text-[#FAF9F5] transition-colors group-hover:text-[#A9812F]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Real Green Gold <span className="text-[#3F6B4F]">Ltd</span>
                </span>
                <span
                  className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#A9812F] mt-1"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  Kirehe, Rwanda
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`relative py-1 text-xs uppercase tracking-[0.14em] font-semibold transition-colors ${
                      isActive
                        ? 'text-[#FAF9F5]'
                        : 'text-[#D9D4C6] hover:text-[#FAF9F5]'
                    }`}
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#A9812F] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Direct Enquiry Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/initiatives#produce-enquiry"
                className="inline-flex items-center gap-1.5 border border-[#A9812F] bg-[#A9812F] text-[#FAF9F5] px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-[#8C6721] transition-colors rounded-xs shadow-xs"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Enquire <ArrowUpRight size={12} />
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="lg:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className="border border-[#D9D4C6]/40 bg-[#1E2620]/80 p-2 text-[#FAF9F5] hover:border-[#FAF9F5] transition-colors rounded-xs cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#1E2620] text-[#FAF9F5] flex flex-col justify-between p-6 animate-in fade-in duration-200">
          
          {/* Drawer Top Header */}
          <div className="flex items-center justify-between border-b border-[#D9D4C6]/20 pb-4">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full border border-[#D9D4C6] bg-white p-1 shrink-0">
                <Image
                  src="/assets/real.jpg"
                  alt="Real Green Gold Ltd Logo"
                  fill
                  sizes="44px"
                  className="object-contain rounded-full"
                />
              </div>
              <span
                className="text-base italic font-bold text-[#FAF9F5]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Real Green Gold <span className="text-[#3F6B4F]">Ltd</span>
              </span>
            </div>

            <button
              type="button"
              onClick={toggleMenu}
              className="border border-[#D9D4C6]/40 p-2 text-[#FAF9F5] hover:bg-white/10 rounded-xs cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <div className="py-8 space-y-3 flex-grow overflow-y-auto">
            <p
              className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#A9812F] mb-4"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Navigation Menu
            </p>
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={toggleMenu}
                  className={`flex items-center justify-between p-3.5 border transition-colors ${
                    isActive
                      ? 'border-[#3F6B4F] bg-[#3F6B4F]/20 text-[#FAF9F5] font-bold'
                      : 'border-[#D9D4C6]/20 bg-transparent text-[#D9D4C6] hover:border-[#D9D4C6]'
                  }`}
                >
                  <span
                    className="text-sm uppercase tracking-widest"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {item.name}
                  </span>
                  <ChevronRight size={14} className="text-[#A9812F]" />
                </Link>
              );
            })}
          </div>

          {/* Drawer Footer Actions */}
          <div className="border-t border-[#D9D4C6]/20 pt-6 space-y-3">
            <Link
              href="/initiatives#produce-enquiry"
              onClick={toggleMenu}
              className="block w-full text-center border border-[#A9812F] bg-[#A9812F] text-white py-3 text-xs font-semibold uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Enquire About Produce
            </Link>
            <p className="text-[10px] text-center text-[#8B9188]">
              Kirehe, Rwanda • info@realgreengoldltd.com
            </p>
          </div>

        </div>
      )}
    </>
  );
}