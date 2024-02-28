import React from "react"
import Image from "next/image"
import { InstructorType } from '@/app/types';

export const AvailabilitySlot = ({ isFullyBooked = true, instructor, availabilityDate, availableTime } : { isFullyBooked: boolean, instructor: InstructorType, availabilityDate: string | undefined, availableTime: any }) => {

    return (
      <>
        {availableTime.training.map(training =>
            <li key={training.id} className="w-full flex flex-col items-center md:flex-row">
                <span>Waiting list</span>
                <div className='flex flex-col items-center'>
                    <p>
                        {training.hours}
                    </p>
                    <p>
                        50 min
                    </p>
                </div>
                <div className='flex flex-col items-center'>
                <p>Cardiovascular strength program</p>
                <button>See More/See Less</button>
                </div>
                <p>KVaternik Plaza</p>
                <div>
                <div>Full Booked</div>
                <div>0 on waiting list</div>
                </div>
                <div>
                <button>
                    {isFullyBooked ? 'Join Waiting List' : 'Join Class'}
                </button>
                </div>
            </li>    
        )}
        </>
    )
  }