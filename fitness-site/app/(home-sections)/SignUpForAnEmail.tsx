import React from "react";
import SectionWrapper from "../components/wrappers/SectionWrapper";
import { RightArrow } from "./OurTeam";

const SignUpForAnEmail = () => {
  return (
    <SectionWrapper>
      <div className="relative py-16 px-24 flex items-center justify-between gap-16 bg-gradient-to-r from-[#000000] to-[#161616] border-[0.5px] border-[#111316] p-5 rounded-lg overflow-hidden">
        {/* Image */}

        <div className="flex items-center justify-center absolute top-0 bottom-0 -left-12 z-0">
          <NewsletterSectionEmbelishment />
        </div>

        {/* Content */}
        <div className="flex flex-col z-20">
          <h2 className=" h2 text-start">Sign up to our newsletter</h2>
          <div>
            <h3 className="w-fit h3 text-start pt-4">
              Get it all in the action
            </h3>
            <p className="text-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              beatae <br /> itaque voluptas voluptates distinctio at aliquam
              nihil quidem tempora magni?
            </p>
          </div>
        </div>

        <div className="z-0 flex flex-col justify-center items-center gap-6 mt-4">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="w-full px-6 py-3 outline-none bg-gradient-to-r from-[#000000] to-[#070707] border-[0.5px] border-[#1D7349] text-normal rounded-lg"
          />
          <div className="w-full flex items-center justify-center">
            <button className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-8 cursor-pointer text-white">
              Submit
            </button>
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
      width="350"
      height="350"
      fill="none"
      viewBox="0 0 200 200"
      version="1.1"
    >
      <g clip-path="url(#clip0_105_351)">
        <path
          fill='url("#SvgjsLinearGradient1451")'
          d="M156.064 143.936 112.127 100l43.937-43.936L200 100l-43.936 43.936Zm-112.128 0L0 100l43.936-43.936L87.873 100l-43.937 43.936ZM100 200l-43.936-43.936L100 112.127l43.936 43.937L100 200Zm0-112.127L56.064 43.936 100 0l43.936 43.936L100 87.873Z"
        ></path>
      </g>
      <defs>
        <linearGradient
          gradientTransform="rotate(0 0.5 0.5)"
          id="SvgjsLinearGradient1451"
        >
          <stop
            stop-opacity=" 1"
            stop-color="rgba(9, 10, 12)"
            offset="0"
          ></stop>
          <stop
            stop-opacity=" 1"
            stop-color="rgba(18, 18, 18)"
            offset="0.48"
          ></stop>
          <stop
            stop-opacity=" 1"
            stop-color="rgba(35, 35, 35)"
            offset="1"
          ></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
