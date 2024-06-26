"use client";

import React, { useState } from "react";
import SectionWrapper from "../components/wrappers/SectionWrapper";
import { ArrowRight } from "./Facilities";

export default function FAQSection() {
  return (
    <SectionWrapper>
      <h2 className="w-full h2">Frequently Asked Questions</h2>
      <Accordion faqArray={homePageFAQ} />
    </SectionWrapper>
  );
}

export function Accordion({ faqArray }: { faqArray: FAQType[] }) {
  const [activeIndex, setActiveIndex] = useState(-1); // Initialize with -1 to have no active accordion initially

  const handleShow = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="w-full flex flex-col gap-2">
      {faqArray.map((accordion, index) => (
        <Panel
          key={accordion.id}
          index={index}
          title={accordion.title}
          answer={accordion.answer}
          isActive={activeIndex === index}
          onShow={() => handleShow(index)}
        />
      ))}
    </div>
  );
}

function Panel({
  title,
  answer,
  isActive,
  onShow,
}: {
  title: string;
  answer: string;
  isActive: boolean;
  onShow: () => void;
  index: number;
}) {
  return (
    <div
      onClick={onShow}
      className="cursor-pointer bg-gradient-to-r from-[#090a0c] to-[#212121] border-[0.5px] border-[#111316] rounded-lg pl-6 pr-4 py-1"
    >
      <div className="flex items-center justify-between gap-6 py-2">
        <h3 className="normal-case md:text-lg text-gray-200 leading-2 font-semibold">
          {title}
        </h3>
        {isActive ? (
          <span className="rotate-90 duration-300">
            <ArrowRight width="40px" height="40px" />
          </span>
        ) : (
          <span className="rotate-0 duration-300">
            <ArrowRight width="40px" height="40px" />
          </span>
        )}
      </div>
      {isActive ? <p className="pl-2 pb-4 text-normal">{answer}</p> : null}
    </div>
  );
}

export type FAQType = {
  id: number;
  title: string;
  answer: string;
};

const homePageFAQ = [
  {
    id: 1,
    title: "What is the duration of the Cardio Blast program?",
    answer: "The Cardio Blast program has a duration of 4 weeks.",
  },
  {
    id: 2,
    title: "Which key exercises are included in the Strength Builder program?",
    answer:
      "The Strength Builder program includes key exercises like Squats, Deadlifts, and Bench Press.",
  },
  {
    id: 3,
    title: "What is the intensity level of the CrossFit Challenge program?",
    answer: "The CrossFit Challenge program has a very high intensity level.",
  },
  {
    id: 4,
    title: "Which yoga poses are part of the Yoga and Meditation program?",
    answer:
      "The Yoga and Meditation program includes key poses like Sun Salutations, Warrior Series, and Balancing Poses.",
  },
  {
    id: 5,
    title: "Is World Gym open to beginners?",
    answer:
      "Yes, World Gym welcomes all individuals, including beginners, who are serious about improving their health and fitness.",
  },
  {
    id: 6,
    title: "What amenities are offered at World Gym?",
    answer:
      "World Gym provides a variety of amenities, including a sprawling gym floor with free weights and cardio equipment, indoor turf training areas, group fitness classes, personal training, wellness and recovery options, and more. Please check your local World Gym for a complete list of amenities.",
  },
];
