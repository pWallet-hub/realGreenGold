import Image from 'next/image';
import Link from 'next/link';
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ServiceSection from './components/ServisSection';
import GetToKnowUs from './components/GetToKnowUs';
import EventsParticipation from './components/EventsParticipation';

export default function Home() {
  return (
    <>
     <section className="flex flex-col items-center justify-center">
      <NavBar />
      </section>
      <main>
        <section className="relative h-screen">
          <Image src="/assets/home.jpg" alt="Forest landscape" layout="fill" objectFit="cover" quality={100} className="brightness-50 absolute inset-0 z-0" />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto flex flex-col justify-center h-full">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Empowering Small Producers with Innovation
            </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl mb-8">
            We are dedicated to transforming agriculture through cutting-edge innovations and sustainable practices.
          </p>
        <Link href="/learn-more" className="bg-yellow-400 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-colors">
        Learn More
        </Link>
        </div>
        </section>
        <ServiceSection />
        <GetToKnowUs />
        <EventsParticipation />
      </main>
      <Footer />
    </>
  );
}
