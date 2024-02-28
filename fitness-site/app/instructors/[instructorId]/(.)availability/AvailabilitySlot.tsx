import React, { useState } from "react"
import Image from "next/image"
import { InstructorType } from '@/app/types';

export const AvailabilitySlot = ({ isFullyBooked = true, instructor, availabilityDate, availableTime } : { isFullyBooked: boolean, instructor: InstructorType, availabilityDate: string | undefined, availableTime: any }) => {
    const [isOpenTrainingDescriptionSection, setIsOpenTrainingDescription] = useState(false)

    const toggleTrainingDescriptionSection = () => {
        setIsOpenTrainingDescription(prev => !prev)
        console.log(isOpenTrainingDescriptionSection)
    }
    
    return (
      <>
        {availableTime.training.map(training =>
            <li
                key={training.id} 
                className="w-full flex flex-col items-center justify-between md:flex-row border-l-2 border-[#1D7349]"
            >
                { isFullyBooked ? <p 
                    className="transform rotate-180 p-1 tracking-wider text-xs md:text-sm uppercase bg-[#1D7349] text-gray-300 leading-2 font-medium" 
                    style={{ writingMode: 'vertical-rl' }}
                >
                    Waiting List
                </p> : null}
                <div className='flex flex-col items-center'>
                    <p className="normal-case tracking-wider text-md md:text-lg text-gray-300 leading-2 font-medium">
                        {training.hours}
                    </p>
                    <p className="normal-case tracking-wider text-md md:text-lg text-gray-300 leading-2 font-medium">
                        50 min
                    </p>
                </div>
                <div className='flex flex-col items-center'>
                <p className="normal-case tracking-wider text-md md:text-lg text-gray-300 leading-2 font-medium">
                    {training.trainingType}
                </p>
                <button
                    onClick={() => toggleTrainingDescriptionSection}
                    className="normal-case tracking-wider text-md md:text-lg text-gray-300 leading-2 font-medium"
                >
                    {isOpenTrainingDescriptionSection ? 'See Less' : 'See More'}
                </button>
                </div>
                <p className="normal-case tracking-wider text-md md:text-lg text-gray-300 leading-2 font-medium">
                    KVaternik Plaza
                </p>
                <div className="normal-case tracking-wider text-md md:text-lg text-gray-300 leading-2 font-medium">
                    <p>Full Booked</p>
                    <p>
                        <span>0</span>
                        {" "} on waiting list
                    </p>
                </div>
                <div>
                <button className="border-2 border-[#1D7349] rounded-3xl py-2 px-4 cursor-pointer text-white">
                    {isFullyBooked ? 'Join Waiting List' : 'Join Class'}
                </button>
                </div>
            </li>    
        )}
        </>
    )
  }