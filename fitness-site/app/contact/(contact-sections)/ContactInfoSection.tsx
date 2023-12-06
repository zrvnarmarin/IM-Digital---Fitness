import React from "react";

export function ContactInfoSection() {
    return (
      <div className="flex flex-col gap-10 bg-[#1F2125] p-6 rounded-md shadow-md ">
        <h2 className="uppercase font-normal text-white text-2xl tracking-wider">
          Contact Information
        </h2>
        <div>
          <p className="mb-2 text-white">
            <span className="normal-case tracking-wider text-sm md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
              Address:
            </span>{" "}
            123 Main Street, Cityville, Country
          </p>
          <p className="mb-2 text-white">
            <span className="normal-case tracking-wider text-sm md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
              Phone:
            </span>{" "}
            +1 (123) 456-7890
          </p>
          <p className="mb-2 text-white">
            <span className="normal-case tracking-wider text-sm md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
              Email:
            </span>{" "}
            info@example.com
          </p>
          <p className="mb-2 text-white">
            <span className="normal-case tracking-wider text-sm md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
              Business Hours:
            </span>{" "}
            Monday - Friday, 9:00 AM - 5:00 PM
          </p>
        </div>
      </div>
    );
  }
  