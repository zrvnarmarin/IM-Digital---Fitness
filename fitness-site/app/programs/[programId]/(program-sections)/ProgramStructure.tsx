import React from "react";
import Image from "next/image";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import { DumbellIcon } from "@/public/Icons";
import TestImage from "../../../../public/HeroTestTest.jpg";

export default function ProgramStructure() {
  return (
    <SectionWrapper>
      <h1 className="uppercase font-normal text-white text-2xl tracking-wider w-full">
        Structure
      </h1>
      <p className="normal-case tracking-wider text-md md:text-lg text-gray-300 leading-2 font-medium">
        Throughout the program, participants will track their progress using
        performance metrics such as strength gains, muscle measurements, and
        body composition changes
      </p>
      <p className="normal-case tracking-wider text-md md:text-lg text-gray-300 leading-2 font-medium">
        Regular assessments and check-ins with our trainers will ensure that
        participants stay on track, make necessary adjustments to their
        workouts, and continue progressing toward their goals
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
        {trainingPhases.map((trainingPhase) => (
          <TrainingPhaseCard
            key={trainingPhase.id}
            trainingPhase={trainingPhase}
          />
        ))}
      </ul>
    </SectionWrapper>
  );
}

// see here: https://www.slideteam.net/media/catalog/product/cache/1280x720/e/s/essential_phases_of_website_development_plan_process_slide01.jpg
export const TrainingPhaseCard = ({
  trainingPhase,
}: {
  trainingPhase: TrainingPhaseType;
}) => {
  const borderClassName =
    trainingPhase.phaseNumber === "01"
      ? `border-${phaseOneColor}`
      : trainingPhase.phaseNumber === "02"
        ? `border-${phaseTwoColor}`
        : `border-${phaseThreeColor}`;

  return (
    <li
      className={`relative flex flex-col justify-between gap-8 pt-10 bg-[#111111] border-[#1D7349] border-2 ${borderClassName}`}
    >
      <div className="flex flex-row md:flex-col gap-4 items-center md:items-start px-8">
        {/* Icon Container */}
        <div className="bg-[#1D7349] rounded-full p-2 w-fit absolute -top-12 left-1/2 transform -translate-x-1/2">
          <DumbellIcon width={70} height={70} />
        </div>

        {/* Phase Title */}
        <p className="w-full pt-8 text-xl md:text-xl lg:text-3xl tracking-normal text-center text-white leading-7 font-semibold">
          {trainingPhase.phase}
        </p>
      </div>

      {/* Phase Description */}
      <div className="flex flex-col gap-2 px-8">
        {trainingPhase.sentences.map((sentence) => (
          <p
            key={sentence}
            className="normal-case tracking-wider text-md md:text-lg text-gray-300 leading-2 font-medium"
          >
            &#x2022; {sentence}
          </p>
        ))}
      </div>

      {/* Phase Number */}
      <div className="flex flex-col gap-2 pt-8">
        <p className="w-full text-xl md:text-xl lg:text-3xl tracking-normal text-center text-white leading-7 font-semibold">
          <span className="text-[#1D7349]">Phase</span>{" "}
          {trainingPhase.phaseNumber}
        </p>
        <div className="h-4 w-full bg-[#1D7349]"></div>
      </div>
    </li>
  );
};

type TrainingPhaseType = {
  id: number;
  phaseNumber: string;
  phase: string;
  duration: string;
  sentences: string[];
};

type PhaseColors = "#9cd046" | "#43d2e8" | "#4682d9";
const phaseOneColor: PhaseColors = "#9cd046";
const phaseTwoColor: PhaseColors = "#43d2e8";
const phaseThreeColor: PhaseColors = "#4682d9";

const trainingPhases: TrainingPhaseType[] = [
  {
    id: 1,
    phaseNumber: "01",
    phase: "Foundation Building",
    duration: "Weeks 1-4",
    sentences: [
      "The first phase focuses on establishing a solid foundation of strength and movement proficiency.",
      "Workouts emphasize compound lifts such as squats, deadlifts, bench presses, and rows, along with foundational accessory exercises to address muscular imbalances and weak points.",
      "Participants will learn proper exercise technique, breathing mechanics, and lifting cues to ensure safety and effectiveness.",
    ],
  },
  {
    id: 2,
    phaseNumber: "02",
    phase: "Strength Development",
    duration: "Weeks 5-8",
    sentences: [
      "The second phase emphasizes progressive overload and increasing resistance to stimulate muscle growth and strength gains.",
      "Workouts include a combination of heavy lifting, hypertrophy-focused training, and strategic variation to keep the muscles challenged and promote continuous adaptation.",
      "Participants will track their progress and gradually increase the intensity, volume, and complexity of their workouts as they advance through the phase.",
    ],
  },
  {
    id: 3,
    phaseNumber: "03",
    phase: "Intensification and Specialization",
    duration: "Weeks 9-12",
    sentences: [
      "The final phase focuses on refining technique, intensifying training stimulus, and targeting specific areas for further development.",
      "Workouts incorporate advanced training techniques such as supersets, drop sets, and tempo training to maximize muscle recruitment.",
      "Participants will have the opportunity to specialize in specific areas of interest, such as powerlifting, bodybuilding, or functional strength, based on their preferences.",
    ],
  },
];