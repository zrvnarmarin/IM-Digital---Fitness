import React from 'react'
import Navbar from '../(home-sections)/Navbar'
import Image from 'next/image'
import AboutUSImage from '../../public/AboutUsHeroImage.avif'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:pt-4 bg-[#111317]">
      <Navbar />
      <>
      <div className="relative text-white min-h-64 flex items-center justify-center">
        <div className="relative brightness-50 max-h-1/2 w-screen">
          <Image
            src={AboutUSImage}
            alt="Image"
            className="z-10 w-full object-cover h-[24rem] brightness-50"
            height={0}
            width={0}
          />
        </div>
        <p className="text-[#FFFFFF] opacity-100 text-6xl md:text-8xl lg:text-9xl uppercase font-black absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          Services
        </p>
      </div>
    </>
      <section className='className="px-6 md:px-8 lg:px-24 pl-8 py-24 grid grid-cols-3  gap-12"'>
        
      </section>
    </main>
  )
}
