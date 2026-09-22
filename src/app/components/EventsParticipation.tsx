// app/components/EventsParticipation.tsx
import Image from 'next/image';
import Link from 'next/link';

const EventsParticipation = () => {
  return (
    <section className="py-20 bg-[#FAF9F5] px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A9812F]">
            Collaborations &amp; Milestones
          </span>
          <h2 className="text-3xl md:text-4xl font-bold italic text-[#1E2620]" style={{ fontFamily: 'var(--font-display)' }}>
            Carried Out Events &amp; Participation
          </h2>
          <div className="w-16 h-0.5 bg-[#A9812F]"></div>
          
          <p className="text-xs md:text-sm text-[#5A6259] leading-relaxed">
            Real Green Gold Ltd actively participates in regional initiatives to enhance agricultural innovation[cite: 5]. Working alongside community stakeholders and partners, we aim to improve crop value chains and support small-scale producers[cite: 5].
          </p>

          <div className="pt-2">
            <Link
              href="/blogs-gallery"
              className="inline-flex items-center gap-2 border border-[#1E2620] bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#1E2620] hover:bg-[#1E2620] hover:text-white transition-colors"
            >
              View Documented Archives
            </Link>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="relative h-40 border border-[#D9D4C6] bg-[#1E2620]">
              <Image
                src="/assets/home.jpg"
                alt={`RGG Activity Photo ${item}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover hover:opacity-90 transition-opacity"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EventsParticipation;