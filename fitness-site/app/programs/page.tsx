import React from 'react'
import HeroSection from './(programs-sections)/HeroSection'
import { ProgramCardsSection } from './(programs-sections)/ProgramCardsSection'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:py-4 bg-[#181a1f]">
      <HeroSection />
      <ProgramCardsSection />
    </main>
  )
}