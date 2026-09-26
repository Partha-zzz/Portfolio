"use client";

import React from "react";
import BrutalButton from "./BrutalButton";

export default function ContactCTA() {
  return (
    <section id="contact" className="my-20 md:my-32 scroll-mt-24">
      <div className="bg-[#111111] text-white border-3 border-[#111111] rounded-3xl p-8 sm:p-12 md:p-16 brutal-shadow-lg relative overflow-hidden">
        {/* Background Accent Graphics */}
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#FFD600] rounded-full border-4 border-white opacity-20 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-[#635BFF] rounded-full border-4 border-white opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          <div className="inline-block bg-[#FFD600] text-[#111111] font-mono text-xs md:text-sm font-black px-3.5 py-1.5 border-2 border-white rounded-md brutal-shadow-sm mb-6 uppercase tracking-wider">
            GET IN TOUCH ⚡
          </div>

          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter uppercase leading-[0.88] text-white mb-6">
            LET&apos;S <br />
            <span className="text-[#FFD600]">BUILD</span> <br />
            SOMETHING.
          </h2>

          <p className="text-lg sm:text-2xl font-medium text-white/90 max-w-2xl mb-10 border-l-4 border-[#635BFF] pl-4 py-1">
            Have an idea, ML project or software collaboration? I&apos;m always
            open to discussing data challenges and intelligent software.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <BrutalButton
              href="mailto:atomic.here007@gmail.com"
              variant="yellow"
              size="lg"
              external
              icon
            >
              EMAIL ME
            </BrutalButton>

            <BrutalButton
              href="https://github.com/Partha-zzz"
              variant="purple"
              size="lg"
              external
              icon
            >
              GITHUB
            </BrutalButton>

            <BrutalButton
              href="https://www.linkedin.com/in/partha-sarathi-sarkar-7385a8367/"
              variant="white"
              size="lg"
              external
              icon
            >
              LINKEDIN
            </BrutalButton>
          </div>
        </div>
      </div>
    </section>
  );
}
