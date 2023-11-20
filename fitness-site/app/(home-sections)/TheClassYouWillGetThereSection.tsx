import React from 'react'
import { DotsImage } from '@/public/Icons'
import Image from 'next/image'

export default function TheClassYouWillGetThereSection() { 
  return (
    <section className='px-6 md:px-8 lg:px-24 pl-8 py-24 grid grid-cols-1 md:grid-cols-2 gap-12'>
        <div className='border border-white text-white min-h-64 flex items-center justify-center'>
            {/* <Image src={Igor} alt='Image' className='w-full object-cover h-full' /> */}
            Insert Image Here
        </div>
        <div className='flex flex-col gap-12 py-8 relative'>
            <div className='absolute right-0 top-0 z-30 hidden md:block'>
                <DotsImage />
            </div>
            <h1 className='uppercase font-bold text-white text-3xl'>
                The Class You Will Get There
            </h1>
            <p className='text-md text-gray-300 leading-2 font-normal'>
                We consistently improving our offering, service and pride orselves on creating connections with our members
                addelivering the most personalized fitness experience possible.
            </p>
            <div className='flex justify-center'>
                <button className='text-white lg:text-lg xl:text-xl font-semibold leading-7 hover:scale-105 bg-[#1D7349] hover:bg-[#34a26d] px-8 py-4 rounded-md'>
                    Explore More
                </button>
            </div>
        </div>
    </section>
  )
}

