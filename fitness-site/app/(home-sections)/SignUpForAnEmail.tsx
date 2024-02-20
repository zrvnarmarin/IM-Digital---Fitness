import React from "react";
import Image from "next/image";
import ImageTest from "../../public/gymImage.jpg";

const SignUpForAnEmail = () => {
  return (
    <div className="relative w-full h-[450px] mt-10 sm:mt-12 md:mt-16 lg:mt-28">
      {/* Image */}
      <div className="absolute inset-0">
        <Image
          src={ImageTest}
          layout="fill"
          objectFit="cover"
          alt="image"
        />
      </div>
      
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-[#1D7349] opacity-40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <p className="font-medium text-lg md:text-xl lg:text-3xl tracking-wide">
          Sign up for an email
        </p>
        <p className="pt-4 text-xl md:text-xl lg:text-6xl tracking-normal leading-7 font-black">
          Get it all in the action
        </p>
        <div className="flex flex-col items-center gap-4 mt-4">
          <input
            type="text"
            className="border outline-none border-b-white text-white text-3xl w-32 md:w-64 lg:w-96 bg-transparent px-4 py-2"
          />
          <button className="border-2 border-white rounded-3xl py-2 px-4 cursor-pointer text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForAnEmail;
