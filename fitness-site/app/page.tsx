import Navbar from './(home-sections)/Navbar'
import HeroSection from './(home-sections)/HeroSection'
import ExploreOurProgram from './(home-sections)/ExploreOurProgram'
import TheClassYouWillGetThereSection from './(home-sections)/TheClassYouWillGetThereSection'
import WhyJoinUs from './(home-sections)/WhyJoinUs'
import FAQSection from './(home-sections)/FAQSection'

export default function Home() {
  return (
    <main className="flex min-h-screen h-full flex-col items-center bg-[#1F2125]">
      {/* <Navbar /> */}
      <HeroSection />
      <ExploreOurProgram />
      <TheClassYouWillGetThereSection />
      <WhyJoinUs />
      <FAQSection />
    </main>
  )
}
