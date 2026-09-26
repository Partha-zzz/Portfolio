"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  number?: string;
  title: string;
  subtitle?: string;
  badge?: string;
  badgeColor?: "yellow" | "purple" | "black" | "white";
  className?: string;
}

export default function SectionHeading({
  number,
  title,
  subtitle,
  badge,
  badgeColor = "yellow",
  className = "",
}: SectionHeadingProps) {
  const badgeBg = {
    yellow: "bg-[#FFD600] dark:bg-[#E8C400] text-[#111111]",
    purple: "bg-[#635BFF] dark:bg-[#6259D6] text-white",
    black: "bg-[#111111] dark:bg-[#E8E6DF] text-[#FFD600] dark:text-[#181818]",
    white: "bg-white dark:bg-[#222222] text-[#111111] dark:text-[#E8E6DF]",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const stampVariants = {
    hidden: { opacity: 0, scale: 0.85, x: -16 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { type: "spring" as const, stiffness: 450, damping: 25 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 32, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={containerVariants}
      className={`mb-10 md:mb-14 ${className}`}
    >
      <div className="flex flex-wrap items-center gap-3 mb-3">
        {number && (
          <motion.span
            variants={stampVariants}
            className="font-mono text-sm md:text-base font-bold bg-[#111111] dark:bg-[#E8E6DF] text-white dark:text-[#181818] px-2.5 py-1 rounded brutal-shadow-sm border border-[#111111] dark:border-[#77756F]"
          >
            {number}
          </motion.span>
        )}
        {badge && (
          <motion.span
            variants={stampVariants}
            className={`font-mono text-xs md:text-sm font-bold uppercase tracking-wider px-3 py-1 border-2 border-[#111111] dark:border-[#77756F] rounded brutal-shadow-sm ${badgeBg[badgeColor]}`}
          >
            {badge}
          </motion.span>
        )}
      </div>

      <div className="overflow-hidden py-1">
        <motion.h2
          variants={textVariants}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#111111] dark:text-[#E8E6DF] uppercase tracking-tight leading-[0.95]"
        >
          {title}
        </motion.h2>
      </div>

      {subtitle && (
        <motion.p
          variants={textVariants}
          className="mt-4 text-base sm:text-lg md:text-xl font-medium text-[#111111]/85 dark:text-[#B8B6AE] max-w-2xl border-l-4 border-[#FFD600] dark:border-[#E8C400] pl-4 py-1"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

