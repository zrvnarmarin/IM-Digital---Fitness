import HeroSection from "./(home-sections)/HeroSection";
import WhatMakesUsSpecialSection from "./(home-sections)/WhatMakesUsSpecialSection";
import Facilities from "./(home-sections)/Facilities";
import Programs from "./(home-sections)/Programs";
import FAQSection from "./(home-sections)/FAQSection";
import OurTeam from "./(home-sections)/OurTeam";
import Plans from "./(home-sections)/Plans";
import SignUpForAnEmail from "./(home-sections)/SignUpForAnEmail";
import SuccessStories from "./(home-sections)/SuccessStories";

export default function Home() {
  return (
    <main className="flex min-h-screen h-full flex-col items-center bg-[#000000]">
      <HeroSection />
      <WhatMakesUsSpecialSection />
      <Facilities />
      <Programs />
      <Plans />
      <OurTeam />
      <SuccessStories />
      <FAQSection />
      <SignUpForAnEmail />
    </main>
  );
}
