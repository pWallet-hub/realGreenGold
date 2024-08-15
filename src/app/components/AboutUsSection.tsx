import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">About US</h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
        <p className="text-lg text-center max-w-4xl mx-auto">
          Real Green Gold Ltd. is a company based in Kirehe, Rwanda, specializing in agricultural production
          and innovation. The company operates a 3-hectare demonstration farm and a value chain addition
          facility for exportable fruits and vegetables. Their core competencies include supporting small-scale
          producers (SSP) through community production, promoting cutting-edge agricultural innovations via
          demonstration and farm training, managing logistics and aggregation for a multi-level production
          value chain, and developing global market strategies for high-value farm products. Real Green Gold
          Ltd. stands out for its focus on social causes, particularly by transferring skills and technology to
          vulnerable groups like youth and women. They also work with international certifiers to ensure quality
          and authenticity in their produce.
        </p>
      </div>
    </section>
  );
};

export default AboutUsSection;