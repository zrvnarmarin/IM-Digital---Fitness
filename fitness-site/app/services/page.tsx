"use client";

import React, { useState } from "react";
import Navbar from "../(home-sections)/Navbar";
import Image, { StaticImageData } from "next/image";
import ServiceImageOne from "../../public/ServiceImageOne.avif";
import ServicesIlustration from "../../public/ServiceIlustration.png";
import AboutImage from "../../public/AboutUsHeroImage.avif";
import { HeartIcon } from "@/public/Icons";

export default function Page() {
  const [isAccordionShown, setIsAccordionShown] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center lg:pt-4 bg-[#111317]">
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
          <ImgContainer src={ServicesIlustration} />
          <div className="flex flex-col gap-4">
            <h1 className="uppercase font-normal text-white text-2xl tracking-wider">
              Online Personal Training
            </h1>
            <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
              Forge fitness and nutrition coaching programs are based on your
              current condition and ultimate goal while considering your access
              to workout equipment, experience, and food preferences. Your
              program is conveniently delivered right to your mobile device.
              Track your stats, earn badges, and communicate with your coach
              with the in-app messenger. Select a plan below that meets your
              one-on-one coaching needs. Cancel anytime 10 days prior to your
              billing.
            </p>
          </div>
        </div>
      </section>

      {/* Make this better section - ovdje idu ikone  */}
      <section className="w-full">
        <div className="px-6 md:px-8 lg:px-24">
          <h2 className="uppercase text-start font-normal text-white text-2xl tracking-wider">
            We specialize in you
          </h2>
          <p className="uppercase font-normal text-start text-[#1D7349] text-xs tracking-wider">
            WORKOUTS FOR HOME, GYM OR PRETTY MUCH ANYWHERE!
          </p>
        </div>
        <section className="px-6 md:px-8 lg:px-24 py-8 gap-4 grid grid-cols-1 sm:grid-cols-3 justify-center">
          <ImgContainer src={ServiceImageOne} />
          <ImgContainer src={ServiceImageOne} />
          <ImgContainer src={ServiceImageOne} />
        </section>
      </section>

      {/* Sekcija za testimoniale. Mozda mogu ici neki videi ili jednostavno povucem testimonialse u obliku teksta */}
      <section className="w-full py-12">
        <div className="px-6 md:px-8 lg:px-24">
          <h2 className="uppercase text-start font-normal text-white text-2xl tracking-wider">
            Real Life. Real People. Real Results.
          </h2>
          <p className="uppercase font-normal text-start text-[#1D7349] text-xs tracking-wider">
            See what some of our clients have to say
          </p>
        </div>
        <section className="px-6 md:px-8 lg:px-24 py-8 gap-4 grid grid-cols-1 sm:grid-cols-3 justify-center">
          <ImgContainer src={ServiceImageOne} />
          <ImgContainer src={ServiceImageOne} />
          <ImgContainer src={ServiceImageOne} />
        </section>
      </section>

      {/* Sekcija za planove */}
      <section className="flex flex-col gap-2 text-white text-center w-full">
        <div className="px-6 md:px-8 lg:px-24">
          <h2 className="uppercase text-start font-normal text-white text-2xl tracking-wider">
            Forge Programs Include
          </h2>
          <p className="uppercase font-normal text-start text-[#1D7349] text-xs tracking-wider">
            WORKOUTS FOR HOME, GYM OR PRETTY MUCH ANYWHERE!
          </p>
        </div>
        <div className="px-6 pt-8 pb-24 md:py-16 lg:py-24 grid gap-16 grid-cols-1 bg-[#111317]S">
          {services.map((service) => (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <div className="mb-2 rounded-full w-fit cursor-pointer border-2 border-[#1D7349] p-1 hover:bg-white hover:scale-125 duration-200">
                  <HeartIcon />
                </div>
                <h2 className="uppercase text-start font-normal text-white text-3xl tracking-wider">
                  {service.type}
                </h2>
                <p className=" font-normal text-start text-[#1D7349] text-md tracking-wider">
                  {service.calls}
                </p>
                <p className="tracking-wider leading-2 text-start text-xl text-white py-4">
                  {service.cost}
                </p>
                <p className="text-start normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
                  {service.details}
                </p>
                <div
                  onClick={(e) => {
                    setIsAccordionShown((prev) => !prev);
                  }}
                  className="flex items-center justify-between gap-6 cursor-pointer my-2 cursor-pointe border-white border-b-[1px] py-2"
                >
                  <h3 className="tracking-wider leading-2 text-start text-xl text-white py-4">
                    View Program Details
                  </h3>
                  {isAccordionShown ? (
                    <p className="text-4xl font-medium md:font-semibold text-[#1D7349]">-</p>
                  ) : (
                    <p className="text-4xl font-medium md:font-semibold text-[#1D7349]">+</p>
                  )}
                </div>
                {isAccordionShown ? (
                  <div className="flex flex-col gap-4 pl-2 font-normal text-gray-400 text-md lg:text-lg py-2">
                    <h2 className="text-start text-lg text-white">
                      The program
                    </h2>
                    <p className="text-start normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
                      {service.program}
                    </p>
                    <h2 className="text-start text-lg text-white">Meal Plan</h2>
                    <p className="text-start normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
                      {service.mealPlan}
                    </p>
                  </div>
                ) : null}
                <div>
                  <button className="mt-8 uppercase text-white hover:scale-105 text-lg lg:text-xl xl:text-2xl font-normal leading-10 tracking-wider bg-[#1D7349] hover:bg-[#34a26d] px-10 py-2 rounded-full">
                    Join Now
                  </button>
                </div>
              </div>
              {/* <div className="flex items-center justify-center text-5xl bg-[#111317]">
                <p className="bg-[#1D7349] rounded-full font-bold p-24">
                  {service.id}
                </p>
              </div> */}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export function ImgContainer({ src }: { src: StaticImageData }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative group h-64 bg-black p-12 rounded-md overflow-hidden cursor-pointer">
        <Image
          priority
          src={src}
          alt="alt"
          fill={true}
          className="object-cover group-hover:opacity-90"
          sizes="(min-width: 2840px) calc(10vw - 34px), (min-width: 2580px) calc(11.25vw - 39px), (min-width: 2320px) calc(12.5vw - 38px), (min-width: 2040px) calc(14.23vw - 40px), (min-width: 1780px) calc(16.67vw - 46px), (min-width: 1520px) calc(20vw - 51px), (min-width: 1240px) calc(25vw - 60px), (min-width: 1040px) calc(33.33vw - 75px), (min-width: 860px) calc(33.13vw - 30px), (min-width: 580px) calc(48.46vw - 27px), calc(97.69vw - 43px)"
        />
      </div>
      <p className="font-normal text-center text-white text-xs tracking-wider">
        Strength Ipsum
      </p>
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
