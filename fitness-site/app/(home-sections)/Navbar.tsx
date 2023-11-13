'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname()

  return (
    <header className='w-full'>
        <nav className='flex flex-row justify-between items-center py-6 bg-[#111317] lg:bg-inherit px-8'>
            <Link href={'/'}>
                <p className='text-3xl sm:text-4xl leading-10 font-black italic text-[#1D7349] md:text-6xl lg:text-[#1D7349]'>LOGO</p>
            </Link>
            <ul className='hidden lg:flex flex-row items-center justify-between gap-12'>
                <li className='text-white xs:text-md lg:text-lg xl:text-xl font-semibold leading-7'><Link href={'/'}>Home</Link></li>
                <li className='text-white xs:text-md lg:text-lg xl:text-xl font-semibold leading-7'><Link href={'/about-us'}>Program</Link></li>
                <li className='text-white xs:text-md lg:text-lg xl:text-xl font-semibold leading-7'><Link href={'/services'}>Service</Link></li>
                <li className='text-white xs:text-md lg:text-lg xl:text-xl font-semibold leading-7'><Link href={'/find-doctor'}>About</Link></li>
                <li className='text-white xs:text-md lg:text-lg xl:text-xl font-semibold leading-7'><Link href={'/contact'}>Community</Link></li>
            </ul>
            <div>
                <button className='hidden lg:block text-white lg:text-lg xl:text-xl font-semibold leading-7 bg-[#1D7349] px-8 py-4 rounded-md'>Join Now</button>
            </div>
            <div className='block lg:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-white w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </div>
        </nav>
    </header>
  )
}
