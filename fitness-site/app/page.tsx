import HeroSection from "./(home-sections)/HeroSection";
import WhatMakesUsSpecialSection from "./(home-sections)/WhatMakesUsSpecialSection";
import TheClassYouWillGetThereSection from "./(home-sections)/TheClassYouWillGetThereSection";
import WhyJoinUs from "./(home-sections)/WhyJoinUs";
import FAQSection from "./(home-sections)/FAQSection";
import OurTeam from "./(home-sections)/OurTeam";
import Plans from "./(home-sections)/Plans";
import SignUpForAnEmail from "./(home-sections)/SignUpForAnEmail";
import SuccessStories from "./(home-sections)/SuccessStories";

export default function Home() {
  return (
    <main className="flex min-h-screen h-full flex-col items-center bg-[#000000]">
      {/* <Navbar /> */}
      <HeroSection />
      <WhatMakesUsSpecialSection />
      <TheClassYouWillGetThereSection />
      <WhyJoinUs />
      <Plans />
      <OurTeam />
      <SuccessStories />
      <FAQSection />
      <SignUpForAnEmail />
    </main>
  );
}
