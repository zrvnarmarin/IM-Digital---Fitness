import React from 'react'
import Navbar from './../../(home-sections)/Navbar';
import Footer from '@/app/Footer';
import Image from 'next/image';
import GymImage from '../../../public/gym.avif'
import { formatString } from '@/app/utils/helpers';

export default function Page({ params }: { params: { programId: string}}) {
  return (
    <main className="flex min-h-screen flex-col items-center lg:py-8 bg-[#111317]">
      <Navbar />
      <section className='py-2 grid grid-cols-1 gap-12'>
        <div className='relative text-white min-h-64 flex items-center justify-center'>
          <div className='relative brightness-50 max-h-1/2'>
            <Image src={GymImage} alt='Image' className='z-10 w-full object-cover h-full' height={0} width={0} />
          </div>
          <p className='text-md md:text-lg lg:text-4xl font-semibold absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
            {formatString(params.programId)}
          </p>
        </div>
    </section>
      <Footer />
    </main>
  )
}
