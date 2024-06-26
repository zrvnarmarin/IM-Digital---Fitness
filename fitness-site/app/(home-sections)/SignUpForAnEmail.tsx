import React from "react";
import Image from "next/image";
import ImageTest from "../../public/gymImage.jpg";
import SectionWrapper from "../components/wrappers/SectionWrapper";

const SignUpForAnEmail = () => {
  return (
    <SectionWrapper>
      <div className="relative flex items-center justify-center bg-gradient-to-r from-[#090a0c] to-[#161616] border-[0.5px] border-[#111316] p-5 rounded-lg overflow-hidden">
        {/* Image */}
        <div className="flex items-center justify-center absolute top-0 bottom-0 -right-12 z-0">
          <NewsletterSectionEmbelishment />
        </div>

        {/* Content */}
        <div className="flex flex-col z-20">
          <h2 className="w-full h2 text-center">Sign up to our newsletter</h2>
          <div>
            <h3 className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-center text-white leading-7 font-semibold">
              Get it all in the action
            </h3>
            <div className="w-full flex flex-col justify-center items-center gap-6 mt-4">
              <div className="flex items-center justify-center px-12 border-b border-white normal-case text-md text-gray-300 leading-2">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="w-full outline-none text-white text-center border-none bg-none bg-transparent"
                />
              </div>
              <div className="w-full flex items-center justify-center">
                <button className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-8 cursor-pointer text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SignUpForAnEmail;

export const NewsletterSectionEmbelishment = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      fill="none"
      viewBox="0 0 200 200"
      version="1.1"
    >
      <path
        fill='url("#SvgjsLinearGradient1860")'
        fillRule="evenodd"
        d="M0 0h50v50H0V0Zm100 50H50v50H0v50h50v50h50v-50h50v50h50v-50h-50v-50h50V50h-50V0h-50v50Zm0 50h50V50h-50v50Zm0 0v50H50v-50h50Z"
        clipRule="evenodd"
      ></path>
      <defs>
        <linearGradient
          gradientTransform="rotate(0 0.5 0.5)"
          id="SvgjsLinearGradient1860"
        >
          <stop
            stopOpacity="1"
            stopColor="rgba(62, 232, 148)"
            offset="0.036015625"
          ></stop>
          <stop stopOpacity="1" stopColor="rgba(0, 116, 60)" offset="1"></stop>
          <stop
            stopOpacity="1"
            stopColor="rgba(234, 204, 248)"
            offset="1"
          ></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
