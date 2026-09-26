"use client";

import React from "react";
import { BookOpen, Target, Cpu } from "lucide-react";

export default function HeroInfoCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mt-16">
      {/* CARD 1: CURRENTLY */}
      <div className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-xl p-6 brutal-shadow-md brutal-card-hover flex flex-col justify-between transition-colors">
        <div>
          <div className="flex items-center justify-between mb-4 border-b-2 border-[#111111] dark:border-[#F7F7F2] pb-3">
            <span className="font-mono text-xs font-black uppercase tracking-wider bg-[#FFD600] text-[#111111] px-2.5 py-1 border border-[#111111] rounded shadow-[2px_2px_0px_var(--shadow-color)]">
              STATUS
            </span>
            <BookOpen className="w-5 h-5 text-[#111111] dark:text-[#F7F7F2] stroke-[2.5]" />
          </div>
          <h3 className="font-extrabold text-2xl text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
            CURRENTLY
          </h3>
          <div className="space-y-3 font-medium text-sm sm:text-base">
            <div>
              <span className="font-mono text-xs text-[#635BFF] dark:text-[#FFD600] font-bold block uppercase">
                {"// LEARNING"}
              </span>
              <p className="font-bold text-[#111111] dark:text-[#F7F7F2]">Machine Learning & Deep Neural Nets</p>
            </div>
            <div>
              <span className="font-mono text-xs text-[#111111]/70 dark:text-[#F7F7F2]/70 font-bold block uppercase">
                {"// BUILDING"}
              </span>
              <p className="font-bold text-[#111111] dark:text-[#F7F7F2]">AI + Data Science Real-World Projects</p>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-3 border-t border-[#111111]/20 dark:border-[#F7F7F2]/20 flex items-center justify-between text-xs font-mono font-bold text-[#111111]/70 dark:text-[#F7F7F2]/70">
          <span>UPDATED: 2026</span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFD600] border border-[#111111] dark:border-[#F7F7F2] animate-pulse" />
        </div>
      </div>

      {/* CARD 2: FOCUS */}
      <div className="bg-[#635BFF] text-white border-3 border-[#111111] dark:border-[#F7F7F2] rounded-xl p-6 brutal-shadow-md brutal-card-hover flex flex-col justify-between transition-colors">
        <div>
          <div className="flex items-center justify-between mb-4 border-b-2 border-white/30 pb-3">
            <span className="font-mono text-xs font-black uppercase tracking-wider bg-[#FFD600] text-[#111111] px-2.5 py-1 border border-[#111111] rounded shadow-[2px_2px_0px_var(--shadow-color)]">
              DOMAINS
            </span>
            <Target className="w-5 h-5 text-white stroke-[2.5]" />
          </div>
          <h3 className="font-extrabold text-2xl text-white uppercase tracking-tight mb-4">
            CORE FOCUS
          </h3>
          <ul className="space-y-2 font-extrabold text-sm sm:text-base">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FFD600] border border-black" />
              Machine Learning
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white border border-black" />
              Data Science & Analytics
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FFD600] border border-black" />
              Computer Vision
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white border border-black" />
              Software Engineering
            </li>
          </ul>
        </div>
        <div className="mt-6 pt-3 border-t border-white/20 font-mono text-xs font-bold text-white/80">
          CSE × SPECIFICATION
        </div>
      </div>

      {/* CARD 3: STACK */}
      <div className="bg-[#FFD600] text-[#111111] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-xl p-6 brutal-shadow-md brutal-card-hover flex flex-col justify-between transition-colors">
        <div>
          <div className="flex items-center justify-between mb-4 border-b-2 border-[#111111] pb-3">
            <span className="font-mono text-xs font-black uppercase tracking-wider bg-white text-[#111111] px-2.5 py-1 border border-[#111111] rounded shadow-[2px_2px_0px_#111111]">
              TOOLING
            </span>
            <Cpu className="w-5 h-5 text-[#111111] stroke-[2.5]" />
          </div>
          <h3 className="font-extrabold text-2xl text-[#111111] uppercase tracking-tight mb-4">
            TECH STACK
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Python",
              "Java",
              "C",
              "SQL",
              "TensorFlow",
              "Scikit-learn",
              "Pandas",
              "Next.js",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-white text-[#111111] font-mono text-xs font-black px-2.5 py-1 border-2 border-[#111111] rounded shadow-[2px_2px_0px_#111111]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-6 pt-3 border-t border-[#111111]/30 font-mono text-xs font-bold text-[#111111]/80">
          PRODUCTION READY TOOLS
        </div>
      </div>
    </div>
  );
}
