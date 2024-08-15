import Image from 'next/image';
import Link from 'next/link';

const GetToKnowUs = () => {
  return (
    <section className="relative min-h-screen">
      <Image
        src="/assets/home.jpg"
        alt="Agricultural field"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="brightness-50 absolute inset-0 z-0"
      />
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between h-full">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/assets/home.jpg"
            alt="Basket with apples"
            width={500}
            height={500}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get To Know Us</h2>
          <div className="w-24 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-lg mb-6">
            We are dedicated to transforming agriculture through cutting-edge innovations and sustainable practices. Our mission is to empower small producers and revolutionize the agricultural industry.
          </p>
          <Link href="/learn-more" className="bg-yellow-400 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-colors inline-block">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetToKnowUs;