"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroIllustration() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isFine || isReduced) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full aspect-[4/3.2] sm:aspect-[4/3] max-w-xl mx-auto flex items-center justify-center p-2">
      {/* Background Tactile Canvas Box */}
      <motion.div
        style={{
          x: mousePos.x * -6,
          y: mousePos.y * -6,
        }}
        className="absolute inset-0 bg-white dark:bg-[#222222] border-3 border-[#111111] dark:border-[#77756F] rounded-2xl brutal-shadow-lg transition-colors"
      />

      {/* Floating Decorative Badges */}
      {/* Badge 1: AI/ML */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        style={{ x: mousePos.x * 14, y: mousePos.y * 14 }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-4 left-4 z-20 bg-[#FFD600] dark:bg-[#E8C400] text-[#111111] font-mono text-xs md:text-sm font-extrabold px-3 py-1.5 border-2 border-[#111111] dark:border-[#77756F] rounded-lg brutal-shadow-sm rotate-[-4deg]"
      >
        AI/ML ⚡
      </motion.div>

      {/* Badge 2: DATA */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-6 right-6 z-20 bg-[#635BFF] dark:bg-[#6259D6] text-white font-mono text-xs md:text-sm font-extrabold px-3 py-1 border-2 border-[#111111] dark:border-[#77756F] rounded-lg brutal-shadow-sm rotate-[6deg]"
      >
        DATA [0101]
      </motion.div>

      {/* Badge 3: MODEL */}
      <motion.div
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-6 right-20 z-20 bg-white dark:bg-[#272727] text-[#111111] dark:text-[#E8E6DF] font-mono text-xs md:text-sm font-extrabold px-3 py-1 border-2 border-[#111111] dark:border-[#77756F] rounded-lg brutal-shadow-sm rotate-[3deg]"
      >
        MODEL ➔ PREDICT
      </motion.div>

      {/* Badge 4: BUILD */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute bottom-10 right-4 z-20 bg-[#FFD600] dark:bg-[#E8C400] text-[#111111] font-mono text-xs font-black px-2.5 py-1 border-2 border-[#111111] dark:border-[#77756F] rounded brutal-shadow-sm rotate-[-6deg]"
      >
        BUILD 01
      </motion.div>

      {/* Neo-Brutalist Isometric Developer Illustration SVG */}
      <svg
        viewBox="0 0 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 p-4"
      >
        {/* Desk Platform Base */}
        <path
          d="M 60 280 L 250 360 L 440 280 L 250 200 Z"
          fill="#FFD600"
          stroke="#111111"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M 60 280 L 60 300 L 250 380 L 440 300 L 440 280 L 250 360 Z"
          fill="#111111"
        />

        {/* Floating Monitor / Data Terminal Screen */}
        <g transform="translate(140, 90)">
          {/* Shadow */}
          <rect
            x="8"
            y="8"
            width="220"
            height="140"
            rx="10"
            fill="#111111"
          />
          {/* Frame */}
          <rect
            x="0"
            y="0"
            width="220"
            height="140"
            rx="10"
            fill="#FFFFFF"
            stroke="#111111"
            strokeWidth="4"
          />
          {/* Header Bar */}
          <rect
            x="0"
            y="0"
            width="220"
            height="28"
            rx="10"
            fill="#635BFF"
            stroke="#111111"
            strokeWidth="4"
          />
          <circle cx="16" cy="14" r="5" fill="#FFD600" stroke="#111111" strokeWidth="2" />
          <circle cx="32" cy="14" r="5" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
          <circle cx="48" cy="14" r="5" fill="#111111" />

          {/* Terminal Code lines */}
          <rect x="16" y="44" width="100" height="8" rx="2" fill="#111111" />
          <rect x="124" y="44" width="40" height="8" rx="2" fill="#FFD600" />

          <rect x="16" y="60" width="150" height="8" rx="2" fill="#635BFF" />
          <rect x="16" y="76" width="80" height="8" rx="2" fill="#111111" />

          {/* Neural Net Graph Graphic in Terminal */}
          <circle cx="170" cy="95" r="8" fill="#FFD600" stroke="#111111" strokeWidth="3" />
          <circle cx="195" cy="75" r="8" fill="#635BFF" stroke="#111111" strokeWidth="3" />
          <circle cx="195" cy="115" r="8" fill="#FFFFFF" stroke="#111111" strokeWidth="3" />
          <line x1="170" y1="95" x2="195" y2="75" stroke="#111111" strokeWidth="3" />
          <line x1="170" y1="95" x2="195" y2="115" stroke="#111111" strokeWidth="3" />

          {/* Status Bar */}
          <rect x="16" y="104" width="120" height="18" rx="4" fill="#FFD600" stroke="#111111" strokeWidth="2" />
          <text x="24" y="117" fontFamily="monospace" fontSize="10" fontWeight="bold" fill="#111111">
            ACCURACY: 98.4%
          </text>
        </g>

        {/* Character Figure (Developer sitting at desk) */}
        <g transform="translate(260, 140)">
          {/* Body / Hoodie (Purple) */}
          <path
            d="M 50 120 C 30 120, 20 150, 10 180 L 110 180 C 100 150, 90 120, 70 120 Z"
            fill="#635BFF"
            stroke="#111111"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          {/* Hoodie zipper line */}
          <line x1="60" y1="130" x2="60" y2="180" stroke="#111111" strokeWidth="3" />

          {/* Arms holding laptop */}
          <path
            d="M 20 160 Q 40 170 55 160"
            stroke="#111111"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 100 160 Q 80 170 65 160"
            stroke="#111111"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />

          {/* Head */}
          <circle
            cx="60"
            cy="90"
            r="28"
            fill="#FFFFFF"
            stroke="#111111"
            strokeWidth="4"
          />
          {/* Hair (Black cap / hair block) */}
          <path
            d="M 34 85 C 34 60, 86 60, 86 85 C 80 75, 40 75, 34 85 Z"
            fill="#111111"
          />
          {/* Glasses */}
          <rect x="42" y="86" width="16" height="12" rx="2" fill="#FFD600" stroke="#111111" strokeWidth="3" />
          <rect x="62" y="86" width="16" height="12" rx="2" fill="#FFD600" stroke="#111111" strokeWidth="3" />
          <line x1="58" y1="92" x2="62" y2="92" stroke="#111111" strokeWidth="3" />

          {/* Smile */}
          <path
            d="M 52 106 Q 60 112 68 106"
            stroke="#111111"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* Laptop on desk */}
        <g transform="translate(230, 260)">
          <rect x="0" y="0" width="80" height="40" rx="4" fill="#FFFFFF" stroke="#111111" strokeWidth="4" />
          <path d="M -10 40 L 90 40 L 80 50 L -20 50 Z" fill="#111111" />
          <rect x="25" y="10" width="30" height="20" fill="#FFD600" stroke="#111111" strokeWidth="2" />
        </g>

        {/* Geometric Sparkles & Elements */}
        <polygon points="90,70 100,50 110,70 130,80 110,90 100,110 90,90 70,80" fill="#FFD600" stroke="#111111" strokeWidth="3" />
        <polygon points="400,120 408,105 416,120 431,128 416,136 408,151 400,136 385,128" fill="#635BFF" stroke="#111111" strokeWidth="3" />
      </svg>

      {/* Profile Photo Circular Sticker (Lower-Left Edge Overlapping) */}
      <motion.div
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-5 -left-3 sm:-bottom-7 sm:-left-5 z-30 flex flex-col items-center group select-none"
      >
        <div className="relative">
          {/* Yellow Outer Offset Accent Ring */}
          <div className="absolute inset-0 bg-[#FFD600] dark:bg-[#E8C400] rounded-full translate-x-1.5 translate-y-1.5 border-2 border-[#111111] dark:border-[#77756F]" />

          {/* Circular Neo-Brutalist Avatar */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full border-3 border-[#111111] dark:border-[#77756F] overflow-hidden shadow-[6px_6px_0px_var(--shadow)] bg-white dark:bg-[#222222]">
            <Image
              src="/partha.jpg"
              alt="Partha Profile Photo"
              fill
              sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 144px"
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>

          {/* Small Brutalist Sticker Label */}
          <div className="absolute -bottom-2 -right-3 z-10 bg-[#FFD600] dark:bg-[#E8C400] text-[#111111] font-mono text-[10px] sm:text-xs font-black px-2.5 py-1 border-2 border-[#111111] dark:border-[#77756F] rounded-md shadow-[2px_2px_0px_var(--shadow)] rotate-[-3deg] whitespace-nowrap">
            HI, I&apos;M PARTHA ➔
          </div>
        </div>
      </motion.div>
    </div>
  );
}
