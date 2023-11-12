import React from 'react'

export default function HeroSection() {
  return (
    <section className='px-8 py-24'>
      <h1 className='flex flex-col gap-4 justify-center items-center relative'>
        <span className='relative flex w-full'>
            <span className='z-10 text-white opacity-30 text-6xl text-center uppercase font-black'>Body</span>
        </span>
        {/* <p className='absolute top-0 left-0 z-20 text-[#DCEAE3] text-lg font-semibold'>Experience</p> */}
        <span className='z-10 text-[#DCEAE3] opacity-100 text-6xl uppercase font-black'>Fitness</span>
      </h1>
      <p className='text-[#DCEAE3] text-lg text-end font-semibold'>Grow Body</p>
      <div className='pt-32 flex justify-center'>
        <button className='text-white lg:text-lg xl:text-xl font-semibold leading-7 bg-[#1D7349] px-8 py-4 rounded-md'>Get Started</button>
      </div>
    </section>
  )
}
