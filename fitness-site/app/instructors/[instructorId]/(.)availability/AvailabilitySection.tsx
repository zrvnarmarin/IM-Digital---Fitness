'use client'

import { InstructorType } from "@/app/types"; // Assuming you have a type for availability
import React, { useState } from "react";
import { AvailabilitySlot } from './AvailabilitySlot';

export default function AvailabilitySection({ instructor }: { instructor: InstructorType | undefined }) {
    const [availabilityDate, setAvailabilityDate] = useState<string | undefined>(instructor?.availability[0].date);

    const availabilityDateHandler = (selectedDate: string) => {
        setAvailabilityDate(selectedDate);
    };

    const availableTimesByDate = instructor?.availability.filter((availableTime) => availableTime.date === availabilityDate);

    return (
        <div className='flex flex-col items-start gap-2 bg-red-700'>
            <div className='flex flex-row gap-2'>
                {instructor?.availability.map((availableTime, key) =>
                    <AvailabilityChangeButton
                        key={availableTime.date}
                        availabilityDate={availableTime.date}
                        selectedDate={availabilityDate}
                        setAvailabilityDate={availabilityDateHandler}
                    />
                )}
            </div>
            <ul className='w-full flex flex-col items-center gap-4 bg-blue-300'>
                {instructor && availableTimesByDate?.map((availableTime, key) =>
                    <AvailabilitySlot
                        key={key} 
                        availabilityDate={availabilityDate}
                        instructor={instructor} 
                        isFullyBooked 
                        availableTime={availableTime}
                    />
                )}
            </ul>
        </div>
    );
}

export const AvailabilityChangeButton = ({ availabilityDate, selectedDate, setAvailabilityDate }: { availabilityDate: string, selectedDate: string | undefined, setAvailabilityDate: (selectedDate: string) => void }) => {
    const isButtonSelected = availabilityDate === selectedDate;

    return (
        <button
            className={`border-2 border-white rounded p-8 ${isButtonSelected ? 'bg-blue-500' : ''}`}
            onClick={() => setAvailabilityDate(availabilityDate)}
        >
            {availabilityDate}
        </button>
    );
};
