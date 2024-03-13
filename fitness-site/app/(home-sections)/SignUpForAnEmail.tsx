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
      <div className="absolute inset-0 bg-gradient-to-r from-[#101010] hover:from-[#101010] hover:to-[#292929] to-[#161616] opacity-95"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center gap-12 text-white">
        <p className="text-center uppercase font-semibold text-white text-2xl tracking-wider w-full">
          Sign up to our newsletter
        </p>
        <div>
          <p className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-center text-white leading-7 font-semibold">
            Get it all in the action
          </p>
          <div className="w-full flex flex-col justify-center items-center gap-6 mt-4">
            <div className="flex items-center justify-center px-12 border-b border-white">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="w-full outline-none text-white text-center border-none bg-none bg-transparent"
              />
            </div>
            <div className="w-full flex items-center justify-center">
              <button className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForAnEmail;
