import React from 'react'
import Navbar from './../../(home-sections)/Navbar';
import Image from 'next/image';
import GymImage from '../../../public/gym.avif'
import { formatString } from '@/app/utils/helpers';

export default function Page({ params }: { params: { programId: string}}) {
  return (
    //ovdje ispod u main tag stavi min-h-screen ako zelis veliki razmak izmedju ovog i footera
    <main className="flex flex-col items-center lg:py-8 bg-[#111317]">
      <Navbar />
      <div className='relative text-white min-h-64 flex flex-col items-center justify-center'>
        <div className='relative brightness-50 max-h-1/2 w-screen'>
          <Image
            src={GymImage}
            alt='Image'
            className='z-10 w-full object-cover h-[24rem] brightness-50'
            height={0}
            width={0}
          />
        </div>
        <p className='text-[#FFFFFF] opacity-100 text-6xl md:text-8xl lg:text-9xl uppercase font-black absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
          {formatString(params.programId)} 
        </p>
      </div>
    </main>
  )
}
