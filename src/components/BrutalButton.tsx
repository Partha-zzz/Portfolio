"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface BrutalButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "yellow" | "purple" | "white" | "black" | "gray";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
  icon?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function BrutalButton({
  children,
  href,
  onClick,
  variant = "yellow",
  size = "md",
  className = "",
  external = false,
  icon = false,
  type = "button",
  disabled = false,
}: BrutalButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || disabled) return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isFinePointer || isReduced) return;

    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = ((e.clientX - (left + width / 2)) / width) * 8; // 3-5px max displacement
    const y = ((e.clientY - (top + height / 2)) / height) * 8;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    yellow: "bg-[#FFD600] text-[#111111] hover:bg-[#ffe033]",
    purple: "bg-[#635BFF] text-white hover:bg-[#746dff]",
    white: "bg-white text-[#111111] dark:bg-[#272727] dark:text-[#E8E6DF] hover:bg-[#f0f0eb] dark:hover:bg-[#323232]",
    black: "bg-[#111111] text-white dark:bg-[#E8E6DF] dark:text-[#181818] hover:bg-[#252525] dark:hover:bg-white",
    gray: "bg-[#D9D9D4] text-[#111111] dark:bg-[#222222] dark:text-[#E8E6DF] hover:bg-[#c9c9c4] dark:hover:bg-[#2A2A2A]",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs font-mono tracking-wider",
    md: "px-5 py-2.5 text-sm md:text-base font-bold tracking-wide",
    lg: "px-7 py-3.5 text-base md:text-lg font-extrabold tracking-wide",
  };

  const baseClasses = `inline-flex items-center justify-center gap-2 brutal-btn rounded-md select-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 stroke-[2.5]" />}
    </>
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
      className="inline-block"
    >
      {href ? (
        external ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={baseClasses}
          >
            {content}
          </a>
        ) : (
          <Link href={href} className={baseClasses}>
            {content}
          </Link>
        )
      ) : (
        <button type={type} onClick={onClick} disabled={disabled} className={baseClasses}>
          {content}
        </button>
      )}
    </motion.div>
  );
}

