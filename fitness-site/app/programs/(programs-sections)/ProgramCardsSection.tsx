import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ProgramType } from "@/app/types";
import { programs } from "@/app/data";
import TestImage from "../../../public/CardioBlastImage.jpg";
import { DumbellIcon } from "@/public/Icons";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import { ProgramCard } from "@/app/(home-sections)/Programs";

export function ProgramCardsSection() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program, index) => (
          <ProgramCard key={program.title} program={program} />
        ))}
      </div>
    </SectionWrapper>
  );
}

// export function ProgramCard({ program }: { program: ProgramType }) {
//   return (
//     <Link href={`${program.href}`} className={`bg-[#111111]`}>
//       <div className="w-full flex rounded-t-md">
//         <Image
//           src={TestImage}
//           alt="program_image"
//           width={0}
//           height={0}
//           className="rounded-t-md h-64 object-cover"
//         />
//       </div>

//       <div className="px-8 py-6 bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929] rounded-b-lg">
//         <div className="flex flex-col gap-3 items-start justify-start rounded-lg">
//           <p className="w-full  text-gray-200 text-2xl tracking-normal text-start font-semibold">
//             {program.title}
//           </p>
//         </div>
//         <div className="flex flex-col pt-8">
//           <p className="normal-case text-md md:text-md text-gray-300 leading-2">
//             {program.description} - stavi još teksta da bude četiri linije{" "}
//           </p>
//         </div>
//         <div className="w-full flex flex-row items-center justify-between rounded-lg pt-8">
//           <div className="w-full flex flex-row items-center justify-between">
//             <span className="normal-case text-sm text-white leading-2 font-semibold">
//               Intensity:
//             </span>
//             <div className="flex flex-row items-center justify-end w-1/3 gap-2">
//               <span className="bg-[#31C57D] w-1/3 rounded-lg h-2 border border-[#292929]"></span>
//               <span className="bg-[#31C57D] w-1/3 rounded-lg h-2 border border-[#292929]"></span>
//               <span className="w-1/3 rounded-lg h-2 border border-[#292929]"></span>
//             </div>
//           </div>
//           {/* <span><Image src={ShareIcon} width={20} height={20} alt="share_icon" /></span> */}
//         </div>

//         <div className="border-b border-gray-600 flex items-center justify-between pt-4 pb-2 normal-case tracking-normal text-2xs md:text-sm lg:text-lg text-gray-100 leading-2 font-normal">
//           <span className="flex flex-row items-center gap-2 normal-case text-xs text-white leading-2 font-normal">
//             <DumbellIcon /> 24 Number Of
//           </span>
//           <span className="flex flex-row items-center gap-2 normal-case text-xs text-white leading-2 font-normal">
//             <DumbellIcon />7 Ways for
//           </span>
//         </div>

//         {/* Rasmiliti da li ovdje staviti gumb, da li se uklapa u dizajn */}
//         <div className="flex flex-row justify-between items-center pt-6">
//           <p className="text-[#31C57D] text-2xl tracking-normal text-start font-semibold">
//             {program.price}
//           </p>
//           <button className="bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
//             Buy Now
//           </button>
//         </div>
//       </div>
//     </Link>
//   );
// }
