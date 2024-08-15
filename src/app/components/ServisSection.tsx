import Image from 'next/image';
import Link from 'next/link';

const ServiceSection = () => {
  const services = [
    {
      title: "Small Scale Producer Community Production",
      description: "Supporting and training SSPs to enhance their production capabilities.",
      image: "/assets/home.jpg",
      alt: "Aerial view of agricultural landscape"
    },
    {
      title: "Agricultural Innovation Promotion",
      description: "Demonstrating and training on advanced farming techniques and technologies.",
      image: "/assets/home.jpg",
      alt: "Close-up of plantain leaves"
    }
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-2">Our Service</h2>
      <div className="w-24 h-1 bg-yellow-400 mx-auto mb-12"></div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-full h-64 mb-6">
              <Image
                src={service.image}
                alt={service.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 rounded-lg"></div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
            <p className="text-center mb-4">{service.description}</p>
            <Link href="/learn-more" className="bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 transition-colors flex items-center">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;