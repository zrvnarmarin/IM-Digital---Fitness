import React, { ReactNode } from 'react';

type FooterWrapperProps = {
  children: ReactNode;
};

export default function FooterWrapper({ children }: FooterWrapperProps) {
  return (
    <section className="w-full flex flex-col gap-6 pt-10 sm:pt-8 md:pt-12 lg:pt-20 px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-36 bg-[#111111]">
      {children}
    </section>
  );
}