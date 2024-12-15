// components/EventsParticipation.tsx
import Image from 'next/image';

const EventsParticipation = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              CARRIED OUT EVENTS & PARTICIPATION
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mb-6"></div>
            <p className="text-lg mb-6">
              Real Green Gold Ltd. has actively participated in events and initiatives to enhance agricultural innovation. They&apos;ve worked with organizations like YPARD, FAO, and USAID to improve crop value chains and support small-scale producers, showcasing their commitment to sustainable agriculture and community development.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <Image src="/assets/home.jpg" alt="Vegetables in a box" width={300} height={200} className="rounded-lg" />
            <Image src="/assets/home.jpg" alt="Person on a hill" width={300} height={200} className="rounded-lg" />
            <Image src="/assets/home.jpg" alt="Bananas" width={300} height={200} className="rounded-lg" />
            <Image src="/assets/home.jpg" alt="Various vegetables" width={300} height={200} className="rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsParticipation;