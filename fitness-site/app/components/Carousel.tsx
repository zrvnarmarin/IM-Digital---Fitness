import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { testimonials } from '../data';
import { TestimonialCard } from '../about/page';

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
    )
}

export type CarouselPropsType = {
    additionalTransfrom?: number;
    arrows?: boolean;
    autoPlay?: boolean;
    autoPlaySpeed?: number;
    centerMode?: boolean;
    className?: string;
    containerClass?: string;
    customDot?: JSX.Element;
    customButtonGroup?: JSX.Element;
    dotListClass?: string;
    draggable?: boolean;
    focusOnSelect?: boolean;
    infinite?: boolean;
    itemClass?: string;
    keyBoardControl?: boolean;
    minimumTouchDrag?: number;
    pauseOnHover?: boolean;
    renderArrowsWhenDisabled?: boolean;
    renderButtonGroupOutside?: boolean;
    renderDotsOutside?: boolean;
    responsive?: {
      desktop: {
        breakpoint: {
          max: number;
          min: number;
        };
        items: number;
        partialVisibilityGutter: number;
      };
      mobile: {
        breakpoint: {
          max: number;
          min: number;
        };
        items: number;
        partialVisibilityGutter: number;
      };
      tablet: {
        breakpoint: {
          max: number;
          min: number;
        };
        items: number;
        partialVisibilityGutter: number;
      };
    };
    rewind?: boolean;
    rewindWithAnimation?: boolean;
    rtl?: boolean;
    shouldResetAutoplay?: boolean;
    showDots?: boolean;
    sliderClass?: string;
    slidesToSlide?: number;
    swipeable?: boolean;
};
  
// add foe the separate buttons which slides carousel to left or right
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