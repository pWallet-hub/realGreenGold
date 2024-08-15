// components/OurPartners.tsx
import React from 'react';
import Image from 'next/image';

const partners = [
  { name: 'Alliance for Science Rwanda', logo: '/path-to-alliance-for-science-rwanda-logo.png' },
  { name: 'Ingolstadt School of Management', logo: '/path-to-ingolstadt-school-of-management-logo.png' },
  { name: 'FICCI', logo: '/assets/home.jpgg' },
  { name: 'USAID', logo: '/assets/home.jpg' },
  { name: 'RYAF', logo: '/assets/home.jpg' },
  { name: 'YPARD', logo: '/assets/home.jpg' },
  { name: 'Mastercard Foundation', logo: '/assets/home.jpg' },
  { name: 'Young Africa Works', logo: '/assets/home.jpg' },
  { name: 'UNCAP', logo: '/assets/home.jpg' },
  { name: 'GAIN', logo: '/assets/home.jpg' },
  { name: 'Swasti', logo: '/assets/home.jpg' },
];

const OurPartners = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">Our Partners</h2>
        <div className="w-32 h-1 bg-yellow-400 mx-auto mb-12"></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center h-24">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={80}
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;