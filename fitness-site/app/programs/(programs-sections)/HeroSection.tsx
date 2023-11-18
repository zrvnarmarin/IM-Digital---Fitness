import React from 'react'
import Navbar from '@/app/(home-sections)/Navbar';
import { RightIcon } from '@/public/Icons';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className='px-6 md:px-8 lg:px-24 pl-8 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
        {fitnessPrograms.map(program =>
        <ProgramCard
         key={program.title} 
         title={program.title} 
         description={program.description} 
         keyExercises={program.keyExercises} 
         duration={program.duration}
         intensity={program.intensity}
        />
      )}
    </section>
  )
}

const fitnessPrograms = [
    {
      title: "Cardio Blast",
      description: "This high-intensity cardio program is designed to improve cardiovascular fitness and burn calories. Get your heart pumping with a mix of running, cycling, and jump rope exercises. Perfect for those looking to boost endurance and shed extra pounds.",
      keyExercises: ["Running", "Cycling", "Jump Rope"],
      buttonText: "Start Program",
      duration: "4 weeks",
      intensity: "High",
    },
    {
      title: "Strength Builder",
      description: "Embark on a journey to build robust strength and lean muscle with our Strength Builder program. Centered around the principles of weightlifting and targeted resistance training, this program introduces you to transformative exercises such as squats, deadlifts, and bench press. Whether you're a novice or a seasoned lifter, Strength Builder is designed to guide you towards achieving your unique strength and physique goals.",
      keyExercises: ["Squats", "Deadlifts", "Bench Press"],
      buttonText: "Start Program",
      duration: "6 weeks",
      intensity: "Moderate",
    },
    {
      title: "Yoga and Meditation",
      description: "Discover harmony and flexibility through our Yoga and Meditation program. This holistic approach seamlessly integrates yoga poses to improve both strength and flexibility with meditation techniques to promote mental well-being. Perfect for those desiring a deeper mind-body connection, this program offers a sanctuary for relaxation, stress relief, and an escape from the stresses of everyday life.",
      keyPoses: ["Sun Salutations", "Warrior Series", "Balancing Poses"],
      buttonText: "Start Program",
      duration: "8 weeks",
      intensity: "Low",
    },
    {
      title: "CrossFit Challenge",
      description: "Engage in the ultimate fitness adventure with our CrossFit Challenge program. Drawing inspiration from high-intensity functional movements, this dynamic regimen aims to elevate overall fitness, agility, and strength. Brace yourself for an eclectic mix of exercises, including box jumps, kettlebell swings, and rope climbs. Whether you're a CrossFit enthusiast or a newcomer, the CrossFit Challenge provides a demanding yet rewarding experience for individuals seeking a comprehensive and challenging workout.",
      keyExercises: ["Box Jumps", "Kettlebell Swings", "Rope Climbs"],
      buttonText: "Start Program",
      duration: "10 weeks",
      intensity: "Very High",
    },
  ];
  


export function ProgramCard({ title, description, keyExercises, duration, intensity }: { title: string, description: string, keyExercises?: string[], keyPoses?: string[], duration?: string, intensity?: string, buttonText: string, icon: () => JSX.Element }) {
  return (
    <div className='flex flex-col gap-8 rounded-xl p-6 bg-[#1F2125] hover:scale-105 hover:bg-[#35373B] hover:outline-2 focus:outline-2 outline-[#1D7349] cursor-pointer'>
      <div className='flex gap-4 items-center'>
        <div className='bg-[#1D7349] rounded-xl p-2 w-fit'></div>
        <p className='text-md md:text-md text-white leading-2 font-medium'>{title}</p>
      </div>
      <p className='text-sm md:text-md text-gray-300 leading-2 font-normal'>{description}</p>

      {/* Display additional properties if available */}
      {keyExercises && (
        <p className='text-sm md:text-md text-gray-300 leading-2 font-normal'>Key Exercises: {keyExercises.join(', ')}</p>
      )}
      {duration && (
        <p className='text-sm md:text-md text-gray-300 leading-2 font-normal'>Duration: {duration}</p>
      )}
      {intensity && (
        <p className='text-sm md:text-md text-gray-300 leading-2 font-normal'>Intensity: {intensity}</p>
      )}

      <Link href='/join-now' passHref>
        <p className='flex gap-4 items-center text-md lg:text-lg text-white leading-2 font-medium'>
          PRess me
          <RightIcon />
        </p>
      </Link>
    </div>
  );
}

