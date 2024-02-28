import React, { useState } from "react"
import Image from "next/image";
import { InstructorType } from '@/app/types';
import TestImage from '../../../../public/gymImage.jpg'

export const AvailabilitySlot = ({ isFullyBooked = true, training, instructor, availabilityDate, availableTime } : { isFullyBooked: boolean, training: {
    id: number;
    hours: string;
    trainingType: string;
}, instructor: InstructorType, availabilityDate: string | undefined, availableTime: any }) => {
    const [isOpenTrainingDescriptionSection, setIsOpenTrainingDescription] = useState(false)

    const toggleTrainingDescriptionSection = () => {
        setIsOpenTrainingDescription(prev => !prev)
        console.log(isOpenTrainingDescriptionSection)
    }
    
    return (
            <li
                key={training.id} 
                className="w-full flex flex-col gap-2"
            >
                <div className="w-full flex flex-col items-center justify-between md:flex-row border-l-2 border-[#1D7349]">
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
                        onClick={() => toggleTrainingDescriptionSection()}
                        className="normal-case tracking-wider text-xs md:text-sm decoration underline-offset-2 decoration-[#1D7349] underline text-gray-300 leading-2 font-medium"
                    >
                        {isOpenTrainingDescriptionSection ? 'See Less' : 'See More'}
                    </button>
                    </div>
                    <p className="normal-case tracking-wider text-md md:text-lg text-gray-300 leading-2 font-medium">
                        KVaternik Plaza
                    </p>
                    <div className="normal-case tracking-wider text-md md:text-lg text-gray-300 leading-2 font-medium">
                        <p>Fully Booked</p>
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
                </div>
                
                { 
                    isOpenTrainingDescriptionSection 
                    ? 
                        <div className="flex flex-col md:flex-row gap-6 px-2">
                            <div className="flex w-1/3">
                                <Image 
                                    src={TestImage} 
                                    alt='instructor_image' 
                                    height={0} 
                                    width={0} 
                                    className="w-full"
                                />
                            </div>

                            <div className="w-2/3 flex flex-col gap-12">
                                <p className="uppercase font-semibold text-[#1D7349] text-lg">
                                    Calisthenics Training
                                </p>
                                <div className="flex flex-col gap-4">
                                    <p className="uppercase tracking-wider text-md md:text-lg text-gray-300 leading-2 font-medium">
                                        About The Class
                                    </p>
                                    <p className="normal-case tracking-wider text-md md:text-lg text-gray-300 leading-2 font-medium">
                                        30-minutni express format kružnog treninga za cijelo tijelo, srednjeg intenziteta. 
                                        Kombinacija vježbi snage i kardio vježbi koje se izvode s vlastitom  težinom ili u
                                        kombinaciji s različitim rekvizitima.
                                    </p>
                                </div>
                            </div>
                        </div> 
                    : null
                }
            </li>    
    )
  }