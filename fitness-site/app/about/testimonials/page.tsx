import React from "react";
import Navbar from "@/app/(home-sections)/Navbar";
import { QuotationMark } from "@/public/Icons";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:pt-4 bg-[#111317]">
      <Navbar />
      <p className="text-[#FFFFFF] opacity-100 text-6xl md:text-8xl lg:text-9xl uppercase font-black px-6 md:px-8 lg:px-24 pt-24 pb-8 text-center">
        Testimonials
      </p>
      <section className="px-6 md:px-8 lg:px-24 pl-8 py-8 md:py-16 lg:py-24 grid gap-4 grid-cols-gallery bg-[#111317]">
        <div className="grid grid-cols-1  gap-6 pt-8 md:pt-12">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              testimonial={testimonial.testimonial}
              date={testimonial.date}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export function TestimonialCard({
  name,
  testimonial,
  date
}: {
  name: string;
  testimonial: string;
  date: string
}) {
  return (
    <div className="flex flex-col gap-8 p-6 border-l-4 border-white">
      <div className="flex gap-4 items-center">
        <div className="bg-[#1D7349] rounded-xl p-2 w-fit">nesto</div>
        <p className="flex-1 text-md md:text-lg lg:text-xl text-white leading-7 font-semibold">
          {name}
        </p>
      </div>
      <p className="flex-1 text-sm md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
        <QuotationMark />{testimonial}
      </p>
      <p className="flex-1 text-sm md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
        {date}
      </p>
    </div>
  );
}

const testimonials = [
  {
    id: 1,
    testimonial:
      "I can't believe how much (ime firme) has transformed my fitness journey. The personalized approach made all the difference. The meal plans and workouts are fantastic!",
    name: "Marin Z.",
    date: "August 2023",
  },
  {
    id: 2,
    testimonial:
      "Starting with (ime firme) was the best decision I made for my health. The flexibility of the programs and the expert guidance kept me motivated. Highly recommended!",
    name: "Ana M.",
    date: "August 2023",
  },
  {
    id: 3,
    testimonial:
      "As a beginner, I was unsure where to start, but (ime firme) made it easy. The team's support and the customizable plans ensured a positive and enjoyable fitness experience.",
    name: "Ivan K.",
    date: "August 2023",
  },
  {
    id: 4,
    testimonial:
      "Communicating with the nutritionists and trainers at (ime firme) was a game-changer. Their personalized advice helped me overcome challenges and stay on track.",
    name: "Elena S.",
    date: "August 2023",
  },
  {
    id: 5,
    testimonial:
      "I appreciate how (ime firme) considers dietary restrictions. My meal plan is not only effective but also delicious. Thank you for making fitness enjoyable!",
    name: "Marko P.",
    date: "August 2023",
  },
  {
    id: 6,
    testimonial:
      "(ime firme) provides outstanding support. The community forums and regular updates kept me engaged. I achieved my goals with the help of their dedicated team.",
    name: "Sara D.",
    date: "August 2023",
  },
  {
    id: 7,
    testimonial:
      "With a busy schedule, I needed a flexible fitness program. (ime firme) tailored a plan that fits seamlessly into my life. The results speak for themselves!",
    name: "Luka B.",
    date: "August 2023",
  },
  {
    id: 8,
    testimonial:
      "I've tried many programs, but (ime firme) stands out. The holistic approach and expert guidance set it apart. I'm grateful for the positive impact on my well-being.",
    name: "Katarina R.",
    date: "August 2023",
  },
  {
    id: 9,
    testimonial:
      "Thank you, (ime firme), for the affordable and quality fitness experience. The modern equipment and reasonable prices made it easy for me to stay committed.",
    name: "Nikola J.",
    date: "August 2023",
  },
  {
    id: 10,
    testimonial:
      "(ime firme) is a game-changer! The personalized solutions and commitment to success make it the go-to fitness program. I'm thrilled with the results.",
    name: "Tamara S.",
    date: "August 2023",
  },
];
