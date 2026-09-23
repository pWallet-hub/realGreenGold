// components/SSPCommunityProduction.tsx
import React from 'react';
import Image from 'next/image';

const SSPCommunityProduction = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-12">
          Small Scale Producer (SSP) Community Production
        </h2>
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-full md:w-1/2 flex flex-col space-y-4">
            <div className="w-full h-48 relative">
              <Image
                src="/assets/home.jpg"
                alt="Agricultural work"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="w-full h-48 relative md:ml-12">
              <Image
                src="/assets/home.jpg"
                alt="Planting seeds"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg leading-relaxed">
              Real Green Gold Ltd. is dedicated to empowering small-scale producers by
              providing comprehensive training and support. They help SSPs enhance their agricultural
              practices, optimize production capabilities, and increase their market competitiveness,
              fostering sustainable development in local communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SSPCommunityProduction;