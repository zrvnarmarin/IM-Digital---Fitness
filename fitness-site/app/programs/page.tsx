import React from 'react'
import Navbar from '../(home-sections)/Navbar'
import HeroSection from './(programs-sections)/HeroSection'
import { RightIcon } from '@/public/Icons';
import Link from 'next/link';
import Footer from '../Footer';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:py-4 bg-[#111317]">
      <Navbar />
      <HeroSection />
    </main>
  )
}
