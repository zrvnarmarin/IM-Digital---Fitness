import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { testimonials } from "../data";
import { TestimonialCard } from "../about/page";
import { OtherProgramCard } from "../programs/[programId]/(program-sections)/OtherProgramsSection";
import { otherPrograms } from "../programs/[programId]/(program-sections)/OtherProgramsSection";

export function CarouselSectionHomePage() {
  return (
    <div className="relative pb-9">
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass=""
        customDot={<button className="w-2.5 h-2.5 rounded-full bg-[#31C57D]" />}
        // customButtonGroup={<ButtonGroup />}
        dotListClass="gap-2"
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
              min: 1024,
            },
            items: 2,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
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
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </Carousel>
    </div>
  );
}
