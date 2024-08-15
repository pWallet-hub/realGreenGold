// components/MissionVisionSection.tsx
import React from 'react';
import Image from 'next/image';

const MissionVisionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Our Mission */}
          <div>
            <h2 className="text-4xl font-bold mb-2">Our Mission</h2>
            <div className="w-24 h-1 bg-yellow-400 mb-6"></div>
            <p className="text-lg mb-6">
              Real Green Gold Ltd. aims to empower small-scale producers (SSP) by promoting agricultural
              innovation, ensuring sustainable practices, and enhancing the value chain of exportable fruits and
              vegetables. The company strives to uplift vulnerable groups, particularly youth and women,
              through skill transfer and technology.
            </p>
            <Image
              src="/assets/home.jpg"
              alt="Hands planting a seedling"
              width={500}
              height={300}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Our Vision */}
          <div className="flex flex-col justify-between">
            <Image
              src="/assets/home.jpg"
              alt="Farmer looking at the horizon"
              width={500}
              height={300}
              objectFit="cover"
              className="rounded-lg mb-6"
            />
            <div>
              <h2 className="text-4xl font-bold mb-2">Our Vision</h2>
              <div className="w-24 h-1 bg-yellow-400 mb-6"></div>
              <p className="text-lg">
                To become a leading provider of high-quality, globally certified fruits and vegetables from
                Africa, fostering a resilient agricultural community by supporting and integrating
                small-scale producers into the global market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;