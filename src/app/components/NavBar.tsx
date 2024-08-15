"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NavBar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contacts' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/">
            <Image src="/assets/log.png" alt="Real Green Gold" width={150} height={50} />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-white hover:text-yellow-400 transition-colors ${
                  pathname === item.path ? 'border-b-2 border-yellow-400' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-yellow-400 text-white px-4 py-2 rounded-full hover:bg-yellow-500 transition-colors">
              Contact Us
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
{isMenuOpen && (
  <div className="md:hidden fixed inset-0 z-50 overflow-y-auto bg-yellow-400 bg-opacity-95">
    <div className="flex items-center justify-end p-4">
      <button onClick={toggleMenu} className="text-green-800 hover:text-green-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div className="px-2 pt-2 pb-3 space-y-4 sm:px-3">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.path}
          className={`block px-3 py-2 rounded-md text-green-800 text-center text-lg font-medium transition-colors ${
            pathname === item.path ? 'bg-yellow-500 shadow-md' : 'hover:bg-yellow-500'
          }`}
          onClick={toggleMenu}
        >
          {item.name}
        </Link>
      ))}
      <button 
        className="w-full mt-4 px-3 py-2 bg-green-800 text-yellow-400 rounded-md text-lg font-medium hover:bg-green-700 transition-colors"
        onClick={toggleMenu}
      >
        Contact Us
      </button>
    </div>
  </div>
)}
    </nav>
  );
};

export default NavBar;