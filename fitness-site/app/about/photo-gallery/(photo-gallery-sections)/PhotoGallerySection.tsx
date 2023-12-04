import React from "react";
import Image from "next/image";
import ExampleImage from "../../../../public/ServiceIlustration.png";

export default function PhotoGallerySection() {
  return (
    <section className="px-6 md:px-8 lg:px-24 pl-8 py-8 md:py-16 lg:py-24 grid gap-4 grid-cols-gallery bg-[#111317]">
      <ImgContainer />
      <ImgContainer />
      <ImgContainer />
      <ImgContainer />
      <ImgContainer />
      <ImgContainer />
    </section>
  );
}

export function ImgContainer() {
  return (
    <div className="relative group h-64 bg-black p-12 rounded-xl overflow-hidden cursor-pointer">
      <Image
        priority
        src={ExampleImage}
        alt="alt"
        fill={true}
        className="object-cover group-hover:opacity-90"
        sizes="(min-width: 2840px) calc(10vw - 34px), (min-width: 2580px) calc(11.25vw - 39px), (min-width: 2320px) calc(12.5vw - 38px), (min-width: 2040px) calc(14.23vw - 40px), (min-width: 1780px) calc(16.67vw - 46px), (min-width: 1520px) calc(20vw - 51px), (min-width: 1240px) calc(25vw - 60px), (min-width: 1040px) calc(33.33vw - 75px), (min-width: 860px) calc(33.13vw - 30px), (min-width: 580px) calc(48.46vw - 27px), calc(97.69vw - 43px)"
      />
    </div>
  );
}

// export function ImgContainerTwo() {
//   return (
//     <div className="relative group h-64 bg-black p-12 rounded-xl overflow-hidden">
//       <Image
//         priority
//         src={ExampleImageTwo}
//         alt="alt"
//         fill={true}
//         className="object-cover group-hover:opacity-60"
//         sizes="(min-width: 2840px) calc(10vw - 34px), (min-width: 2580px) calc(11.25vw - 39px), (min-width: 2320px) calc(12.5vw - 38px), (min-width: 2040px) calc(14.23vw - 40px), (min-width: 1780px) calc(16.67vw - 46px), (min-width: 1520px) calc(20vw - 51px), (min-width: 1240px) calc(25vw - 60px), (min-width: 1040px) calc(33.33vw - 75px), (min-width: 860px) calc(33.13vw - 30px), (min-width: 580px) calc(48.46vw - 27px), calc(97.69vw - 43px)"
//       />
//     </div>
//   );
// }
