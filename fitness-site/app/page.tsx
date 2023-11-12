import Image from 'next/image'
import Navbar from './(home-sections)/Navbar'
import HeroSection from './(home-sections)/HeroSection'
import ExploreOurProgram from './(home-sections)/ExploreOurProgram'
import TheClassYouWillGetThereSection from './(home-sections)/TheClassYouWillGetThereSection'
import WhyJoinUs from './(home-sections)/WhyJoinUs'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:py-8 bg-[#111317]">
      <Navbar />
      <HeroSection />
      <ExploreOurProgram />
      <TheClassYouWillGetThereSection />
      <WhyJoinUs />
    </main>
  )
}
