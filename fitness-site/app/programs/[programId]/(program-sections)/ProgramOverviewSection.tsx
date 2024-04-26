import React from "react";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import Image from "next/image";
import TestImage from "../../../../public/HeroTestTest.jpg";
import TimeImage from "../../../../public/time-svgrepo-com (1).png";
import "../../../../public/styles/paralelogram.css";

// za ikone:
//see this: https://preview.themeforest.net/item/motivemuscle-fitness-gym-elementor-template-kit/full_screen_preview/49981420?_ga=2.131681423.102389569.1713875904-1433920345.1700008565&_gac=1.88464745.1713436734.Cj0KCQjwiYOxBhC5ARIsAIvdH52T1HqFDV9iTGGrL0CH9TVAifjo5w73Ne4-b3xAHCCMeBKENghB1TAaAm7pEALw_wcB
export default function ProgramOverviewSection() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-12 rounded-lg">
          <div className="flex flex-col gap-6">
            <div className="flex flex-row items-center gap-4">
              <div className="w-full flex flex-col items-start justify-between gap-3">
                <p className=" italic uppercase text-xs tracking-wide font-medium w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-5 cursor-pointer text-white">
                  Assets
                </p>
                <h1 className="w-full h2">Feel your strength</h1>
                <div className="w-full flex flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <p className="normal-case text-md md:text-md text-white leading-2 font-semibold">
                      Intensity:
                    </p>
                  </div>
                  <div className="flex flex-row items-center justify-end w-1/3 gap-2">
                    <span className="w-1/3 rounded-lg h-2 border border-[#292929]"></span>
                    <span className="bg-[#31C57D] w-1/3 rounded-lg h-2 border border-[#292929]"></span>
                    <span className="bg-[#31C57D] w-1/3 rounded-lg h-2 border border-[#292929]"></span>
                  </div>
                </div>
                <p className="text-normal">{description}</p>
              </div>
            </div>
            <div className="flex flex-row justify-start gap-3">
              <div className="parallelogram"></div>
              <div className="parallelogram"></div>
              <div className="parallelogram"></div>
              <div className="parallelogram"></div>
              <div className="parallelogram"></div>
              <div className="parallelogram"></div>
            </div>

            <div className="flex flex-col xl:flex-row justify-between w-full gap-2">
              <div className="w-full flex flex-row items-center justify-between gap-6 normal-case text-md md:text-md text-white leading-2">
                <div className="flex items-center gap-2 ">
                  <div className="flex items-center justify-center italic uppercase text-xs tracking-wide font-medium w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-full p-2 cursor-pointer text-white">
                    <Image
                      src={TimeImage}
                      height={20}
                      width={20}
                      alt="time_icon"
                    />
                  </div>
                  <span className="font-semibold">Duration:</span>
                </div>
                <div className="text-normal font-semibold">6 Weeks</div>
              </div>
            </div>
          </div>

          {/* <div className="w-full flex justify-start">
            <button className="bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
              Lorem Ipsum
            </button>
          </div> */}
        </div>

        <div>
          <Image
            src={TestImage}
            width={0}
            height={0}
            alt="jkbj"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}

const description = `Our Strength Training Program is a comprehensive and results-driven
fitness program designed to help individuals of all fitness levels build
muscle, increase strength, and improve overall physical performance.
Whether you're a beginner looking to develop a solid foundation of
strength or an experienced lifter aiming to break through plateaus, our
program provides expert guidance and support to help you reach your
goals`;

const intensity = "High";
