import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Image from 'next/image'
import SSPCommunityProduction from '../components/SSPCommunityProduction'
import AgriculturalInnovationAndLogistics from '../components/AgriculturalInnovationAndLogistics'

export default function Service() {
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
            <h1 className="text-6xl font-bold mb-4">Services</h1>
          </div>
        </section>
        <SSPCommunityProduction/>
        <AgriculturalInnovationAndLogistics/>
      </main>
      <Footer/>
      </div>
  )
}
