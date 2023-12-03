'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MenuIcon } from '@/public/Icons'

export default function Navbar() {
    const pathname = usePathname()

  return (
    <header className='w-full'>
        <nav className='flex flex-row justify-between items-center py-6 bg-[#111317] lg:bg-inherit px-8'>
            <Link href={'/'}>
                <p className='text-3xl sm:text-4xl leading-10 font-black italic text-[#1D7349] md:text-6xl lg:text-[#1D7349]'>LOGO</p>
            </Link>
            <ul className='hidden lg:flex flex-row items-center justify-between gap-12'>
                <li className='text-[#F3F4F6] xs:text-md lg:text-lg xl:text-xl font-normal hover:underline hover:underline-offset-8 hover:decoration-[#1D7349] leading-7'><Link href={'/'}>Home</Link></li>
                <li className='text-[#F3F4F6] xs:text-md lg:text-lg xl:text-xl font-normal hover:underline hover:underline-offset-8 hover:decoration-[#1D7349] leading-7'><Link href={'/programs'}>Programs</Link></li>
                <li className='text-[#F3F4F6] xs:text-md lg:text-lg xl:text-xl font-normal hover:underline hover:underline-offset-8 hover:decoration-[#1D7349] leading-7'><Link href={'/service'}>Service</Link></li>
                <li className='text-[#F3F4F6] xs:text-md lg:text-lg xl:text-xl font-normal hover:underline hover:underline-offset-8 hover:decoration-[#1D7349] leading-7'><Link href={'/about'}>About</Link></li>
                <li className='text-[#F3F4F6] xs:text-md lg:text-lg xl:text-xl font-normal hover:underline hover:underline-offset-8 hover:decoration-[#1D7349] leading-7'><Link href={'/contact'}>Contact</Link></li>
            </ul>
            <div>
                <button className='hidden lg:block text-white lg:text-lg xl:text-xl font-semibold leading-7 bg-[#1D7349]  hover:bg-[#34a26d] hover:scale-105  px-8 py-4 rounded-md'>Join Now</button>
            </div>
            {/* <div className='block lg:hidden rounded-xl p-1 border-2 border-white cursor-pointer'>
                <MenuIcon />
            </div> */}
        </nav>
    </header>
  )
}
