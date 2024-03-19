import React from "react";
import { formatString } from "@/app/utils/helpers";
import HeroSection from "./(program-sections)/HeroSection";
import ProgramOverviewSection from "./(program-sections)/ProgramOverviewSection";
import ProgramStructure from "./(program-sections)/ProgramStructure";
import ProgramBenefits from "./(program-sections)/ProgramBenefits";
import ProgramFeatures from "./(program-sections)/ProgramFeatures";
import MoreProgramInfoSection from "./(program-sections)/MoreProgramInfoSection";
import ProgramBuyAndDiscoundSection from "./(program-sections)/ProgramBuyAndDiscoundSection";
import SuccessStoriesSection from "./(program-sections)/SuccessStoriesSection";
import OtherProgramsSection from "./(program-sections)/OtherProgramsSection";

export default function Page({ params }: { params: { programId: string } }) {
  return (
    <main className="flex flex-col items-center bg-[#111317]">
      <HeroSection programId={formatString(params.programId)} />
      <ProgramOverviewSection />
      <ProgramFeatures />
      <ProgramStructure />
      <MoreProgramInfoSection />
      <ProgramBuyAndDiscoundSection programId={formatString(params.programId)} />
      <ProgramBenefits />
      <SuccessStoriesSection />
      <OtherProgramsSection />
    </main>
  );
}