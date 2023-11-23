"use client";

import React, { useState } from "react";

export default function FAQSection() {
  return (
    <section className="w-full px-6 md:px-8 lg:px-24 pl-8 pb-24 pt-8 bg-[#111317]">
      <h1 className="uppercase font-bold pb-8 text-white text-3xl text-center">Frequently Asked Questions</h1>
      <div className="w-full ">
        <Accordion />
      </div>
    </section>
  );
}

export function Accordion() {
  const [activeIndex, setActiveIndex] = useState(-1); // Initialize with -1 to have no active accordion initially

  const handleShow = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="">
      {faq.map((accordion, index) => (
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
      className="cursor-pointer border-[#1F2125] border-b-2"
    >
      <div className="flex items-center justify-between gap-6 py-4">
        <h3 className="text-gray-300 font-semibold text-sm md:text-md lg:text-xl">
          {title}
        </h3>
        {isActive ? (
          <p className="text-4xl font-semibold text-[#1D7349]">-</p>
        ) : (
          <p className="text-4xl font-semibold text-[#1D7349]">+</p>
        )}
      </div>
      {isActive ? (
        <p className="pl-2 font-normal text-gray-400 text-md lg:text-lg py-2">
          {answer}
        </p>
      ) : null}
    </div>
  );
}

const faq = [
    {
      id: 1,
      title: "What is the duration of the Cardio Blast program?",
      answer: "The Cardio Blast program has a duration of 4 weeks."
    },
    {
      id: 2,
      title: "Which key exercises are included in the Strength Builder program?",
      answer: "The Strength Builder program includes key exercises like Squats, Deadlifts, and Bench Press."
    },
    {
      id: 3,
      title: "What is the intensity level of the CrossFit Challenge program?",
      answer: "The CrossFit Challenge program has a very high intensity level."
    },
    {
      id: 4,
      title: "Which yoga poses are part of the Yoga and Meditation program?",
      answer: "The Yoga and Meditation program includes key poses like Sun Salutations, Warrior Series, and Balancing Poses."
    },
    {
      id: 5,
      title: "Is World Gym open to beginners?",
      answer: "Yes, World Gym welcomes all individuals, including beginners, who are serious about improving their health and fitness."
    },
    {
      id: 6,
      title: "What amenities are offered at World Gym?",
      answer: "World Gym provides a variety of amenities, including a sprawling gym floor with free weights and cardio equipment, indoor turf training areas, group fitness classes, personal training, wellness and recovery options, and more. Please check your local World Gym for a complete list of amenities."
    },
  ];