'use client'

import React from "react";
import Image from "next/image";
import { testimonials } from "../data";
import { QuotationMark } from "@/public/Icons";
import SectionWrapper from "../components/wrappers/SectionWrapper";
import TestImage from '../../public/gymImage.jpg'
import { TestimonialCard, TestimonialCardsSection } from "../about/page";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function SuccessStories() {
  return (
    <SectionWrapper>
      <div className="flex items-center justify-between">
        <h1 className="uppercase italic text-gray-200 text-3xl tracking-normal text-start font-bold w-full">
          Success Stories
        </h1>
        <div className="w-full flex items-center justify-end">
          <button className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
            Read More Stories
          </button>
        </div>
      </div>

      <div className="relative pb-9">
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass=""
          customDot={<button className="w-8 h-2 rounded-md bg-[#31C57D]" />}
          // customButtonGroup={<ButtonGroup />}
          dotListClass="gap-4"
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass="px-3"
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside
          renderDotsOutside={true}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 2,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 2,
              partialVisibilityGutter: 30
            }
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={true}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {testimonials.map(testimonial =>
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          )}
          

        </Carousel>
      </div>
    </SectionWrapper>
  );
}

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className="absolute right-0 bg-red-400 p-2"> 
      {/* <button className={currentSlide === 0 ? 'bg-green-400' : ''} onClick={() => previous()} /> */}
      <button onClick={() => goToSlide(currentSlide - 1)}> Go to left </button>
      <button onClick={() => goToSlide(currentSlide + 1)}> Go to right </button>
    </div>
  );
};
