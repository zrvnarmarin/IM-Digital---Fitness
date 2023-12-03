import React from "react";
import Link from "next/link";
import { DotsImage } from "@/public/Icons";
import Image from "next/image";
import ExampleImage from "../../public/AboutUsGridImageOne.avif";

export default function TheClassYouWillGetThereSection() {
  return (
    <section className="px-6 md:px-8 lg:px-24 pl-8 pt-24 pb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="text-white flex items-center justify-center">
        <div className="relative group h-full w-full bg-black p-12 rounded-xl overflow-hidden cursor-pointer">
          <Image
            priority
            src={ExampleImage}
            alt="alt"
            fill={true}
            className="object-cover rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6 py-8 relative">
        <div className="absolute right-0 top-0 z-30 hidden md:block">
          <DotsImage />
        </div>
        <h1 className="uppercase font-normal text-white text-2xl text-start tracking-wider">
          The Class You Will Get There
        </h1>
        <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
          We consistently improving our offering, service and pride orselves on
          creating connections with our members addelivering the most
          personalized fitness experience possible.
        </p>
        <div className="pt-8 md:pt-32 flex justify-center">
          <Link
            href="/programs"
            className="text-white uppercase hover:scale-105 text-lg lg:text-xl xl:text-2xl font-normal leading-10 tracking-wider bg-[#1D7349] hover:bg-[#34a26d] px-10 py-1 rounded-full"
          >
            Join Now
          </Link>
        </div>
      </div>
    </section>
  );
}
