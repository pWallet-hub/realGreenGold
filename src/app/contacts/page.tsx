import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Image from 'next/image'
import AboutUsSection from '../components/AboutUsSection'

export default function Contacts() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <section className="relative h-screen">
          <Image
            src="/assets/home.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h1 className="text-6xl font-bold mb-4">Contact us </h1>
          </div>
        </section>
        <AboutUsSection/>
        </main>
      <Footer />
      </div>
  )
}
