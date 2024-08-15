import React from 'react';
import Image from 'next/image';

const AgriculturalInnovationAndLogistics = () => {
  return (
    <section className="py-16 bg-green-100">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-8">
            Agricultural Innovation Promotion
          </h2>
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-2/3">
              <p className="text-lg leading-relaxed">
                The company actively promotes the adoption of cutting-edge agricultural innovations.
                Through practical demonstrations and hands-on farm training, Real Green Gold Ltd. equips
                farmers with advanced techniques and technologies that boost productivity, improve
                crop quality, and contribute to sustainable farming practices.
              </p>
            </div>
            <div className="w-full md:w-1/3 space-y-4">
              <div className="w-full h-48 relative">
                <Image
                  src="/assets/home.jpg"
                  alt="Green plant close-up"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="w-full h-48 relative">
                <Image
                  src="/assets/home.jpg"
                  alt="Assorted vegetables"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-8">
            Fruits and Vegetables Logistics
          </h2>
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/3 space-y-4">
              <div className="w-full h-48 relative">
                <Image
                  src="/assets/home.jpg"
                  alt="Assorted fruits"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="w-full h-48 relative">
                <Image
                  src="/assets/home.jpg"
                  alt="Harvesting vegetables"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-lg leading-relaxed">
                Real Green Gold Ltd. manages the efficient logistics and aggregation of farm inputs and
                produce, ensuring a seamless supply chain for a multi-level production value chain. Their
                expertise in logistics guarantees that fresh fruits and vegetables reach their destinations
                in optimal condition, maintaining quality and freshness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgriculturalInnovationAndLogistics;