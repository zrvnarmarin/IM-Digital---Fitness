import React from "react";
import Image from "next/image";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import { DumbellIcon } from "@/public/Icons";
import TestImage from "../../../../public/HeroTestTest.jpg";

export default function ProgramStructure() {
  return (
    <SectionWrapper>
      <h1 className="uppercase italic text-white text-2xl tracking-normal font-semibold">
        Structure
      </h1>
      <p className="normal-case text-sm text-gray-300 leading-2 font-normal">
        Throughout the program, participants will track their progress using
        performance metrics such as strength gains, muscle measurements, and
        body composition changes <br /> <br />
        Regular assessments and check-ins with our trainers will ensure that
        participants stay on track, make necessary adjustments to their
        workouts, and continue progressing toward their goals
      </p>
      <ul className="grid grid-cols-1 lg:grid-cols-1 gap-12 pt-12">
        {trainingPhases.map((trainingPhase, index) => (
          <TrainingPhaseCard
            key={trainingPhase.id}
            trainingPhase={trainingPhase}
            index={index}
          />
        ))}
      </ul>
    </SectionWrapper>
  );
}

export const TrainingPhaseCard = ({
  trainingPhase,
  index,
}: {
  trainingPhase: TrainingPhaseType;
  index: number;
}) => {
  const isEven = index % 2 === 0; // Check if the index is even

  return (
    <li className={`grid grid-cols-1 md:grid-cols-2 gap-6`}>

      <div className="relative flex flex-col justify-center gap-12">

        {/* This is the code for the image in the background - TEST IT! */}
        {/* Image spans across the width and height of the screen
        <div className="absolute inset-0">
          <Image
            priority
            src={TestImage}
            alt="alt"
            layout="fill"
            objectPosition="center"
            className="rounded-md object-cover"
          />
        </div>
        {/* Overlaying color */}
        {/* <div className="absolute inset-0 bg-black opacity-70"></div>  */}

        <div className="z-40">
          <p className="w-full text-xl md:text-xl lg:text-3xl tracking-normal text-center text-white leading-7 pb-1 font-semibold">
            <span className="text-[#31C57D]">Phase</span>{" "}
            {trainingPhase.phaseNumber}
          </p>
          <div className="h-4 w-full bg-[#31C57D]"></div>
          <div className="flex flex-row md:flex-col items-center md:items-start">
            <p className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-center text-white leading-7 pt-4 font-semibold">
              {trainingPhase.phase}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-[#31C57D] rounded-lg p-2 flex items-center w-fit justify-center relative">
            <div className="absolute inset-0 bg-black opacity-10 rounded-lg"></div>
            <DumbellIcon width={70} height={70} />
          </div>
        </div>
      </div>

      <div className="relative group flex flex-col gap-4 rounded-lg p-6 bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929]">
        <div className="flex flex-col gap-6">
          <h1 className="uppercase italic text-[#31C57D] text-2xl tracking-normal font-semibold">
            Feel your strength
          </h1>
          <div className="flex flex-col gap-4 px-6">
            {trainingPhase.sentences.map((sentence) => (
              <p
                key={sentence}
                className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal"
              >
                &#x2022; {sentence}
              </p>
            ))}
          </div>
        </div>
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
