import React from 'react'
import { HumanIcon } from '@/public/Icons'
import { HeartIcon } from '@/public/Icons'
import { WeightGainIcon } from '@/public/Icons'
import { DumbellIcon } from '@/public/Icons'
import { RightIcon } from '@/public/Icons'
import Link from 'next/link'

export default function ExploreOurProgram() {
  return (
    <section className='px-8 py-24'>
      <h1 className='uppercase font-bold text-white text-3xl'>
        Explore Our Program
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-8 md:pt-12'>
          {programCards.map(programCard =>
                <ProgramCard
                    key={programCard.title}
                    title={programCard.title}
                    description={programCard.description}
                    icon={programCard.icon}
                />    
            )}
      </div>
    </section>
  )
}

export function ProgramCard({ title, description, icon }: { title: string, description: string, icon:() => JSX.Element }) {
    return (
        <div className='flex flex-col gap-8 rounded-xl p-6 bg-[#1F2125]'>
            <div className='flex gap-4 items-center'>
                <div className='bg-[#1D7349] rounded-xl p-2 w-fit'>{icon()}</div>
                <p className='text-xl text-white leading-2 font-medium'>{title}</p>
            </div>
            <p className='text-md text-gray-300 leading-2 font-normal'>{description}</p>
            <Link href={'/join-now'} className='flex gap-4 items-center'>
                <p className='text-lg text-white leading-2 font-medium'>Join Now</p>
                {<RightIcon />}
            </Link>
        </div>
    )
}

const programCards = [
    {
        title: 'Strenght',
        description: 'Increasing physical strenght is the goal of strenght training',
        icon: DumbellIcon
    },
    {
        title: 'Physical Fitness',
        description: 'Maintain body fitness by doing physical exercise at least 2-3 time a week',
        icon: HeartIcon
    },
    {
        title: 'Fat Lose',
        description: 'Aim to reduce fat as much as possible from the body to about 2-4%',
        icon: HumanIcon
    },
    {
        title: 'Weight Train',
        description: 'Focus on increasing the number of reps or increasing the load',
        icon: WeightGainIcon
    }
]

