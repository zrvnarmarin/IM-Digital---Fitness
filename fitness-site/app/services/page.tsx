"use client";

import React, { useState } from "react";
import Navbar from "../(home-sections)/Navbar";
import Image from "next/image";
import ServiceImageOne from "../../public/ServiceImageOne.avif";
import AboutImage from "../../public/AboutUsHeroImage.avif";
import { HeartIcon } from "@/public/Icons";

export default function Page() {
  const [isAccordionShown, setIsAccordionShown] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center lg:pt-4 bg-[#111317]">
      <Navbar />
      <>
        <div className="relative text-white min-h-64 flex items-center justify-center">
          <div className="relative brightness-50 max-h-1/2 w-screen">
            <Image
              src={ServiceImageOne}
              alt="Image"
              className="z-10 w-full object-cover h-[24rem] brightness-70"
              height={0}
              width={0}
            />
          </div>
          <p className="text-[#FFFFFF] opacity-100 text-6xl md:text-8xl lg:text-9xl uppercase font-semibold absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            Services
          </p>
        </div>
      </>

      <section className="px-6 md:px-8 lg:px-24 pl-8 py-24 gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-[#FFFFFF] border-2 text-white flex justify-center items-center">
            image
          </div>
          <p className="text-[#FFFFFF]">
            We have various programs to choose from. So choose health and do
            best for you
          </p>
        </div>
      </section>
      <div className="px-6 md:px-8 lg:px-24 pl-8 py-24 flex flex-col gap-2 text-white text-center w-full">
        <h2>We specialize in you</h2>
        <p>WORKOUTS FOR HOME, GYM OR PRETTY MUCH ANYWHERE!</p>
        <section className="px-6 md:px-8 lg:px-24 pl-8 py-8 md:py-16 lg:py-24 grid gap-16 grid-cols-3 bg-[#111317]">
          <ImgContainer />
          <ImgContainer />
          <ImgContainer />
        </section>
      </div>
      <section className=" text-white bg-[#111317] w-full">
        <h2 className="text-center">
          REAL PEOPLE. REAL LiFE-CHANGiNG RESULTS.
        </h2>
        <section className="px-6 md:px-8 lg:px-24 pl-8 py-8 grid gap-4 grid-cols-3">
          <ImgContainer />
          <ImgContainer />
          <ImgContainer />
        </section>
      </section>
      <div className="px-6 md:px-8 lg:px-24 pl-8 py-24 flex flex-col gap-2 text-white text-center w-full">
        <h2>FORGE progrAms include</h2>
        <p>FITNESS, NUTRITION AND MINDSET COACHING</p>
        <section className="px-6 md:px-8 lg:px-24 pl-8 py-8 md:py-16 lg:py-24 grid gap-16 grid-cols-3 bg-[#111317]">
          <ImgContainer />
          <ImgContainer />
          <ImgContainer />
          <ImgContainer />
          <ImgContainer />
          <ImgContainer />
        </section>
      </div>
      <div className="pl-8 flex flex-col gap-2 text-white text-center w-full">
        <h2>FORGE progrAms include</h2>
        <p>FITNESS, NUTRITION AND MINDSET COACHING</p>
        <section className=" pl-8 py-8 md:py-16 lg:py-24 grid gap-16 grid-cols-1 bg-[#111317]S">
          {services.map((service) => (
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <div className="rounded-full w-fit cursor-pointer border-2 border-[#1D7349] p-1 hover:bg-white hover:scale-125 duration-200">
                  <HeartIcon />
                </div>
                <h2 className="text-start text-3xl text-white">
                  {service.type}
                </h2>
                <p className="text-start">{service.calls}</p>
                <p className="text-start text-xl text-white py-4">{service.cost}</p>
                <p className="text-start">{service.details}</p>
                <div
                  onClick={(e) => {
                    setIsAccordionShown((prev) => !prev);
                  }}
                  className="flex items-center justify-between gap-6 cursor-pointer my-6 cursor-pointe border-white border-[1px] p-4"
                >
                  <h3 className="text-gray-300 font-semibold text-sm md:text-md lg:text-xl">
                    View Program Details
                  </h3>
                  {isAccordionShown ? (
                    <p className="text-4xl font-semibold text-[#1D7349]">-</p>
                  ) : (
                    <p className="text-4xl font-semibold text-[#1D7349]">+</p>
                  )}
                </div>
                {isAccordionShown ? (
                  <div className="flex flex-col gap-4 pl-2 font-normal text-gray-400 text-md lg:text-lg py-2">
                    <h2 className="text-start text-lg text-white">The program</h2>
                    <p className="text-start text-md">{service.program}</p>
                    <h2 className="text-start text-lg text-white">Meal Plan</h2>
                    <p className="text-start text-md">{service.mealPlan}</p>
                  </div>
                ) : null}
              </div>
              <div className="flex items-center justify-center text-5xl bg-[#111317]">
                <p className="bg-[#1D7349] rounded-full font-bold p-24">
                  {service.id}
                </p>
              </div>
              <div>
                <button className='hidden lg:block text-white lg:text-lg xl:text-xl font-semibold leading-7 bg-[#1D7349]  hover:bg-[#34a26d] hover:scale-105  px-8 py-4 rounded-md'>Join Now</button>
            </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

export function ImgContainer() {
  return (
    <div className="object-cover">
      <div className="relative group h-64 bg-black p-12 rounded-full rounded-full overflow-hidden cursor-pointer">
        <Image
          priority
          src={AboutImage}
          alt="alt"
          fill={true}
          className="object-cover group-hover:opacity-90"
          sizes="(min-width: 2840px) calc(10vw - 34px), (min-width: 2580px) calc(11.25vw - 39px), (min-width: 2320px) calc(12.5vw - 38px), (min-width: 2040px) calc(14.23vw - 40px), (min-width: 1780px) calc(16.67vw - 46px), (min-width: 1520px) calc(20vw - 51px), (min-width: 1240px) calc(25vw - 60px), (min-width: 1040px) calc(33.33vw - 75px), (min-width: 860px) calc(33.13vw - 30px), (min-width: 580px) calc(48.46vw - 27px), calc(97.69vw - 43px)"
        />
      </div>
      <p>Strength Ipsum</p>
    </div>
  );
}

const services = [
  {
    id: 1,
    type: "Standard Plan",
    calls: "Calls Once a month",
    cost: "$125/month",
    details:
      "The Standard plan includes one (1) live video chat or phone call each month to review your next workout plan and answer any questions.",
    program:
      "Includes highly custom workouts, nutrition coaching, and direct connection with your personal coach with unlimited text messaging right through the Forge mobile app. The only difference between each program is the number of private coaching sessions with your personal trainer.",
    mealPlan:
      "After you enroll, you will choose between one of four meal plan paths: Balanced, lactose-free, gluten-free, or vegetarian. Your coach will teach you how to best integrate them into your lifestyle and add variety as you go. Meal plans are calorie-appropriate and based on a macro ratio of 40% carbohydrates, 30% protein, and 30% fat with a variance of 15-20%.",
    joinNow: "JOIN NOW",
  },
  {
    id: 2,
    type: "Complete Plan",
    calls: "Calls Twice a month",
    cost: "$175/month",
    details:
      "The Complete plan includes two (2) live video or phone coaching calls each month for even more support and inspiration.",
    program:
      "The Complete plan is ideal for individuals seeking more coaching and accountability than in the Standard Plan with double the video or phone chat sessions each month plus unlimited in-app messaging.",
    mealPlan:
      "After you enroll, you will choose between one of four meal plan paths: Balanced, lactose-free, gluten-free, or vegetarian. Your coach will teach you how to best integrate them into your lifestyle and add variety as you go. Meal plans are calorie-appropriate and based on a macro ratio of 40% carbohydrates, 30% protein, and 30% fat with a variance of 15-20%.",
    joinNow: "JOIN NOW",
  },
  {
    id: 3,
    type: "Premium Plan",
    calls: "Calls Once a week",
    cost: "$225/month",
    details:
      "With Premium, you get one (1) live video or phone coaching session each week with your trainer to keep you on track and help you make a sustainable lifestyle improvement.",
    program:
      "With the Premium plan, get the optimal level of personal coaching and accountability from your online personal trainer. Learn to build better habits and improve food relationships with weekly check-in calls and unlimited in-app messaging.",
    mealPlan:
      "After you enroll, you will choose between one of four meal plan paths: Balanced, lactose-free, gluten-free, or vegetarian. Your coach will teach you how to best integrate them into your lifestyle and add variety as you go. Meal plans are calorie appropriate and based on a macro ratio of 40% carbohydrates, 30% protein, and 30% fat with a variance of 15-20%.",
    joinNow: "JOIN NOW",
  },
];
