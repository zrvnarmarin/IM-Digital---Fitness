import React from "react";
import { instructors } from "@/app/data/instructors";

export default function Page({ params }: { params: { instructorId: string }}) {

const instructor = instructors.find(instructor => String(instructor.id) === params.instructorId)

  return (
    <main className="flex flex-col items-center lg:py-4 bg-[#111317] text-white">
      {params.instructorId}
      <p>{instructor?.name}</p>
    </main>
  );
}