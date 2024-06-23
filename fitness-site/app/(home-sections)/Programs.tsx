import React from "react";
import Image from "next/image";
import TestImage from "../../public/CardioBlastImage.jpg";
import Link from "next/link";
import SectionWrapper from "../components/wrappers/SectionWrapper";
import { programs } from "../data/programs";

export default function Programs() {
  return (
    <SectionWrapper>
      <div className="flex items-center justify-between">
        <h2 className="h2">Programs</h2>
        <div className="hidden w-full md:flex items-center justify-end">
          <Link
            href="/programs"
            className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-3 px-6 cursor-pointer text-white"
          >
            Discover More Programs
          </Link>
        </div>
      </div>
      <p className="text-subheading">
        We have experience serving members in helping body fitness, and under
        the guidance of a professional trainer
      </p>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-lg gap-6">
          {programs.map((programCard) => (
            <ProgramCard key={programCard.description} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export function ProgramCard() {
  return (
    <div
      className={`bg-gradient-to-r from-[#090a0c] to-[#161616] border-[0.5px] border-[#111316] p-5 rounded-lg`}
    >
      {/* Image on top */}
      <div className="w-full flex rounded-t-md">
        <Image
          src={TestImage}
          alt="program_image"
          width={0}
          height={0}
          className="rounded-lg h-96 object-cover"
        />
      </div>

      <div className="pt-4 xs:pt-6 md:pt-6">
        {/* Title */}
        <div className="flex flex-col gap-3 items-start justify-start rounded-lg">
          <h3 className="w-full text-start h3">Cardiovascular Strength</h3>
        </div>

        {/* Description - mozda staviti pt-1 umjesto pt-2? */}
        <div className="flex flex-col pt-2">
          <p className="text-normal text-start">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            beatae obcaecati eius illo, sunt beatae sunt beatate sun beatate
            beatae obcaecati eius illo, sunt beatae sunt beatate sun beatate
          </p>
        </div>

        {/* Intensity and time */}
        <div className=" w-full gap-2 flex flex-col xs:flex-row sm:flex-row items-center justify-between rounded-lg pt-4 md:pt-8 ">
          <div className="w-full flex flex-col xs:flex-col sm:flex-col items-start  gap-2">
            <span className="text-normal font-semibold">Intensity:</span>
            <div className="flex flex-row items-center justify-start w-full gap-1">
              <span className="bg-[#24D17C] w-12 rounded-lg h-2 border border-[#292929]"></span>
              <span className=" w-12 rounded-lg h-2 border border-[#393939]"></span>
              <span className=" w-12 rounded-lg h-2 border border-[#393939]"></span>
            </div>
          </div>
          <div className="flex items-center justify-start xs:justify-end sm:justify-end gap-2 w-full">
            <div className="p-2 rounded-full bg-gradient-to-r from-[#1D7349] to-[#31C57D]">
              <ProgramSmallIconWhite />
            </div>
            <p className="text-normal">
              <span className="font-semibold">50 </span>
              min
            </p>
          </div>
        </div>

        {/* Other characteristics */}
        <div className="flex gap-2 xs:gap-4 md:gap-6 flex-row xs:flex-row items-center xs:justify-between justify-between pt-8 pb-4 normal-case tracking-normal text-2xs md:text-sm lg:text-lg text-gray-100 leading-2 font-normal">
          <div className="flex flex-col xs:flex-row sm:flex-col md:flex-row gap-2 items-center md:items-center">
            <ProgramSmallIcon />
            <p className="xs:pl-2 sm:pl-0 text-start sm:text-center text-normal">
              <span className="font-semibold">24</span> number of spams
            </p>
          </div>
          {/* <div className="w-0.5 h-full bg-gray-800">|</div> */}
          <div className="flex flex-col xs:flex-row sm:flex-col md:flex-row gap-2 items-center md:items-center">
            <ProgramSmallIcon />
            <p className="xs:pl-2 sm:pl-0 text-start sm:text-center text-normal">
              <span className="font-semibold">7</span> ways of spams
            </p>
          </div>
        </div>

        {/* Rasmiliti da li ovdje staviti gumb, da li se uklapa u dizajn */}
        <div className="flex xs:flex-row sm:flex-col md:flex-row lg:flex-col 2xl:flex-row justify-between xs:items-center sm:gap-2 md:gap-3 pt-6 border-t border-[#292929]">
          <p className="text-[#31C57D] text-2xl tracking-normal text-start font-semibold">
            $130.00
          </p>
          <button className="w-fit sm:w-full md:w-fit lg:w-full 2xl:w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-3 px-6 cursor-pointer text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export const ProgramSmallIcon = () => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0191 34.615C11.8055 35.613 12.3141 36.8391 12.4842 38.1465C12.6542 39.454 12.4785 40.7877 11.978 41.9883C11.4774 43.1889 10.6733 44.2056 9.66162 44.917C8.64993 45.6283 7.47345 46.0043 6.27273 46C2.80182 46 0 42.918 0 39.1C0 35.282 2.80182 32.2 6.27273 32.2C6.64909 32.2 7.02545 32.2 7.38091 32.315L13.8 19.987L10.1618 17.71L18.7136 15.134L21.0555 24.541L17.4173 22.264L11.0191 34.615ZM39.7273 32.2C37.0091 32.2 34.7091 34.132 33.8309 36.8H20.9091V32.2L14.6364 39.1L20.9091 46V41.4H33.8309C34.7091 44.068 37.0091 46 39.7273 46C43.1982 46 46 42.918 46 39.1C46 35.282 43.1982 32.2 39.7273 32.2ZM23 13.8C23.3764 13.8 23.7527 13.8 24.1082 13.685L30.5273 26.013L26.8891 28.29L35.4409 30.866L37.7827 21.459L34.1445 23.736L27.7464 11.385C28.5328 10.387 29.0414 9.16094 29.2115 7.85346C29.3815 6.54597 29.2057 5.21227 28.7052 4.0117C28.2047 2.81112 27.4006 1.79442 26.3889 1.08304C25.3772 0.371666 24.2007 -0.00430673 23 3.72206e-05C19.5291 3.72206e-05 16.7273 3.08203 16.7273 6.90003C16.7273 10.718 19.5291 13.8 23 13.8Z"
        fill="#24D17C"
      />
    </svg>
  );
};

export const ProgramSmallIconWhite = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0191 34.615C11.8055 35.613 12.3141 36.8391 12.4842 38.1465C12.6542 39.454 12.4785 40.7877 11.978 41.9883C11.4774 43.1889 10.6733 44.2056 9.66162 44.917C8.64993 45.6283 7.47345 46.0043 6.27273 46C2.80182 46 0 42.918 0 39.1C0 35.282 2.80182 32.2 6.27273 32.2C6.64909 32.2 7.02545 32.2 7.38091 32.315L13.8 19.987L10.1618 17.71L18.7136 15.134L21.0555 24.541L17.4173 22.264L11.0191 34.615ZM39.7273 32.2C37.0091 32.2 34.7091 34.132 33.8309 36.8H20.9091V32.2L14.6364 39.1L20.9091 46V41.4H33.8309C34.7091 44.068 37.0091 46 39.7273 46C43.1982 46 46 42.918 46 39.1C46 35.282 43.1982 32.2 39.7273 32.2ZM23 13.8C23.3764 13.8 23.7527 13.8 24.1082 13.685L30.5273 26.013L26.8891 28.29L35.4409 30.866L37.7827 21.459L34.1445 23.736L27.7464 11.385C28.5328 10.387 29.0414 9.16094 29.2115 7.85346C29.3815 6.54597 29.2057 5.21227 28.7052 4.0117C28.2047 2.81112 27.4006 1.79442 26.3889 1.08304C25.3772 0.371666 24.2007 -0.00430673 23 3.72206e-05C19.5291 3.72206e-05 16.7273 3.08203 16.7273 6.90003C16.7273 10.718 19.5291 13.8 23 13.8Z"
        fill="#ffffff"
      />
    </svg>
  );
};

export const IconGradientWrapper = (children: React.JSX.Element) => {
  return (
    <div className="p-2 rounded-full bg-gradient-to-r from-[#1D7349] to-[#31C57D]">
      {children}
    </div>
  );
};

export const TimeIcon = () => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 2H18V8L14 12L18 16V22H6V16L10 12L6 8V2ZM16 16.5L12 12.5L8 16.5V20H16V16.5ZM12 11.5L16 7.5V4H8V7.5L12 11.5ZM10 6H14V6.75L12 8.75L10 6.75V6Z"
        fill="#24D17C"
      />
    </svg>
  );
};
