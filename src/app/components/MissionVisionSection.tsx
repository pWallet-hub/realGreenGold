// components/MissionVisionSection.tsx
import React from 'react';
import Image from 'next/image';
import { Target, Compass, CheckCircle2 } from 'lucide-react';

export default function MissionVisionSection() {
  const operatingValues = [
    {
      title: "Learn from real problems",
      description: "We start with a clear need and examine whether a proposed solution is practical and affordable."
    },
    {
      title: "Give people responsibility",
      description: "We value clear tasks, opportunities to learn, and contributions from people with different experiences."
    },
    {
      title: "Care for farm resources",
      description: "We consider soil, water, biodiversity, and animal welfare in our day-to-day decisions."
    },
    {
      title: "Show the evidence",
      description: "We aim to explain what is operating, what is being tested, and what remains an ambition."
    }
  ];

  return (
    <section className="py-20 bg-[#FAF9F5] border-y border-[#D9D4C6] px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Purpose & Direction Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Our Purpose (Mission) */}
          <div className="border border-[#D9D4C6] bg-white p-8 rounded-sm shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-[#3F6B4F]">
              <Target size={18} />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A9812F]" style={{ fontFamily: 'var(--font-mono)' }}>
                Our Purpose
              </span>
            </div>

            <h3 className="text-2xl font-bold italic text-[#1E2620]" style={{ fontFamily: 'var(--font-display)' }}>
              Creating Enterprise &amp; Shared Value
            </h3>
            
            <p className="text-xs md:text-sm text-[#5A6259] leading-relaxed">
              To produce food and develop practical agricultural approaches that create business value, support local livelihoods, and care for the resources on which farming depends.
            </p>

            <div className="relative h-48 w-full border border-[#EDEAE0] bg-[#1E2620] mt-4">
              <Image
                src="/assets/home.jpg"
                alt="Seedling care and soil management at Real Green Gold Ltd"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Our Direction (Vision) */}
          <div className="border border-[#D9D4C6] bg-white p-8 rounded-sm shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-[#3F6B4F]">
              <Compass size={18} />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A9812F]" style={{ fontFamily: 'var(--font-mono)' }}>
                Our Direction
              </span>
            </div>

            <h3 className="text-2xl font-bold italic text-[#1E2620]" style={{ fontFamily: 'var(--font-display)' }}>
              Integrated Learning &amp; Demonstration
            </h3>

            <p className="text-xs md:text-sm text-[#5A6259] leading-relaxed">
              We are building a farm where production, learning, and enterprise development reinforce one another. Our ambition is to document what works, improve what does not, and make useful learning accessible to customers, farmers, visitors, and collaborators.
            </p>

            <div className="relative h-48 w-full border border-[#EDEAE0] bg-[#1E2620] mt-4">
              <Image
                src="/assets/home.jpg"
                alt="Farmer observing crop production in Kirehe"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>

        {/* How We Work: Core Operational Values */}
        <div className="space-y-8 pt-4">
          <div className="text-center space-y-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A9812F]" style={{ fontFamily: 'var(--font-mono)' }}>
              Operating Values
            </p>
            <h3 className="text-3xl font-bold italic text-[#1E2620]" style={{ fontFamily: 'var(--font-display)' }}>
              How We Work
            </h3>
            <div className="w-16 h-0.5 bg-[#A9812F] mx-auto mt-2"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {operatingValues.map((val, idx) => (
              <div key={idx} className="border border-[#D9D4C6] bg-white p-5 rounded-xs space-y-2">
                <div className="flex items-center gap-2 text-[#3F6B4F]">
                  <CheckCircle2 size={15} />
                  <h4 className="text-xs font-bold text-[#1E2620]">{val.title}</h4>
                </div>
                <p className="text-[11px] text-[#5A6259] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}