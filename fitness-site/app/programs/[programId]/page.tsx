import React from "react";
import { formatString } from "@/app/utils/helpers";
import { programs } from "@/app/data";
import HeroSection from "./(program-sections)/HeroSection";
import ProgramOverviewSection from "./(program-sections)/ProgramOverviewSection";
import ProgramObjectives from "./(program-sections)/ProgramObjectives";
import ProgramStructure from "./(program-sections)/ProgramStructure";
import ProgramBenefits from "./(program-sections)/ProgramBenefits";

export default function Page({ params }: { params: { programId: string } }) {
  // TO DO: fix the bug of pulling info for each individual program
  const program = programs.find(
    (program) => program.title === params.programId
  );

  return (
    <main className="flex flex-col items-center lg:py-4 bg-[#111317]">
      <HeroSection programId={formatString(params.programId)} />
      <ProgramOverviewSection />
      <ProgramObjectives />
      <ProgramStructure />
      <ProgramBenefits />
    </main>
  );
}