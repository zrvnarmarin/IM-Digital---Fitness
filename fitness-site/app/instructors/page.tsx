import React from 'react'
import HeroSection from './(instructors-sections)/HeroSection'
import { InstructorCardsSection } from './(instructors-sections)/InstructorCardsSection'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#181a1f]">
      <HeroSection />
      <InstructorCardsSection />
    </main>
  )
}