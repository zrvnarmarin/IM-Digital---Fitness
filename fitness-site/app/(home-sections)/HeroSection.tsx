import React from 'react'

export default function HeroSection() {
  return (
    <section className='px-6 md:px-8 lg:px-24 py-24 relative w-full'>
      {/* <div className='absolute top-5 left-0 w-96 h-96 bg-[rgba(5,30,18,0.7)] blur-3xl'></div> */}
      {/* <div className='hidden lg:block absolute bottom-5 right-0 w-96 h-96 bg-[rgba(5,30,18,0.7)] blur-3xl'></div> */}
      <h1 className='flex flex-col gap-4 justify-center items-center relative'>
        <span className='relative flex justify-center w-full'>
            <span className='z-10 text-white opacity-30 text-6xl md:text-8xl lg:text-9xl text-center uppercase font-black'>Aeon Olympia</span>
        </span>
        {/* <p className='absolute top-0 left-0 z-20 text-[#DCEAE3] text-lg font-semibold'>Experience</p> */}
        <span className='z-10 text-[#FFFFFF] opacity-100 text-6xl md:text-8xl lg:text-9xl uppercase font-black'>Strenght</span>
      </h1>
      <p className='text-[#DCEAE3] text-md md:text-xl lg:text-2xl text-end font-semibold z-20'>Unlock Your Strongest Version</p>
      <div className='pt-32 flex justify-center'>
        <button className='text-white hover:scale-105 lg:text-lg xl:text-xl font-semibold leading-7 bg-[#1D7349] hover:bg-[#34a26d] px-8 py-4 rounded-md'>
          Get Started
        </button>
      </div>
    </section>
  )
}
