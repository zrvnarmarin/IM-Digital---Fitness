import React, { ReactNode } from 'react';

type SectionWrapperProps = {
  children: ReactNode;
};

export default function SectionWrapper({ children }: SectionWrapperProps) {
  return (
    <section className="w-full flex flex-col gap-6 pt-10 sm:pt-12 md:pt-16 lg:pt-28 px-8 md:px-14 lg:px-28 xl:px-36 2xl:px-42 3xl:px-80 bg-[#000000]">
      {children}
    </section>
  );
}