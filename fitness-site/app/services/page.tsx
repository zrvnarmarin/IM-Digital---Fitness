import React from "react";
import Navbar from "../(home-sections)/Navbar";
import Image from "next/image";
import ExampleImage from "../../public/testimage.svg";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:pt-4 bg-[#111317]">
      <Navbar />
      <>
        <div className="relative text-white min-h-64 flex items-center justify-center">
          <div className="relative brightness-50 max-h-1/2 w-screen">
            <Image
              src={ExampleImage}
              alt="Image"
              className="z-10 w-full object-cover h-[24rem] brightness-50"
              height={0}
              width={0}
            />
          </div>
          <p className="text-[#FFFFFF] opacity-100 text-6xl md:text-8xl lg:text-9xl uppercase font-black absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
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
        <div className="px-6 md:px-8 lg:px-24 pl-8 py-24 flex flex-col gap-2 text-white text-center">
          <h2>We specialize in you</h2>
          <p>WORKOUTS FOR HOME, GYM OR PRETTY MUCH ANYWHERE!</p>
          <section className="px-6 md:px-8 lg:px-24 pl-8 py-8 md:py-16 lg:py-24 grid gap-16 grid-cols-3 bg-[#111317]">
            <ImgContainer />
            <ImgContainer />
            <ImgContainer />
          </section>
        </div>
      <section className=" text-white bg-[#111317] w-full">
        <h2 className="text-center">REAL PEOPLE. REAL LiFE-CHANGiNG RESULTS.</h2>
        <section className="px-6 md:px-8 lg:px-24 pl-8 py-8 grid gap-4 grid-cols-3 bg-[#8b919d]">
            <ImgContainer />
            <ImgContainer />
            <ImgContainer />
          </section>
      </section>
    </main>
  );
}

export function ImgContainer() {
  return (
    <div>
      <div className="relative group h-64 bg-black p-12 rounded-xl overflow-hidden cursor-pointer">
        <Image
          priority
          src={ExampleImage}
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