import React from "react";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";

export default function HeroSection() {
  return (
    <SectionWrapper>
      <div className="flex flex-row gap-4 items-center">
        
        <div className="flex flex-col gap-2">
          <p className=" italic uppercase text-xs tracking-wide font-medium w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-5 cursor-pointer text-white">
            They will test your limits
          </p>
          <h1 className="text-white text-7xl tracking-tight text-start font-bold">
            Instructors
          </h1>
          <p className="normal-case text-start text-md md:text-md text-gray-300 leading-2 pr-48">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus velit harum hic sed et facilis ratione, 
            aspernatur unde ea neque, nesciunt consequuntur consequatur. Eaque pariatur officia autem necessitatibus,
            maxime ipsum animi iste amet provident recusandae eum consectetur error molestiae dignissimos nisi! Nam
            cupiditate iusto neque?
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}