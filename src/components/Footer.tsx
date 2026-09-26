"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 pt-6">
      <div className="bg-white dark:bg-[#222222] border-3 border-[#111111] dark:border-[#77756F] rounded-2xl p-6 md:p-8 brutal-shadow-md flex flex-col md:flex-row items-center justify-between gap-6 transition-colors">
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <Link
            href="/"
            className="font-black text-2xl tracking-tighter text-[#111111] bg-[#FFD600] dark:bg-[#E8C400] px-3 py-1 border-2 border-[#111111] dark:border-[#77756F] rounded shadow-[2px_2px_0px_var(--shadow)]"
          >
            PARTHA
          </Link>
          <span className="hidden md:inline font-mono text-xs font-bold text-[#111111]/40 dark:text-[#9F9D96]">
            /
          </span>
          <span className="font-mono text-xs font-black tracking-wider text-[#111111]/80 dark:text-[#B8B6AE] uppercase">
            BUILT WITH CODE + CURIOSITY ⚡
          </span>
        </div>

        <div className="flex items-center gap-6 font-mono text-xs font-bold">
          <a
            href="https://github.com/Partha-zzz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111111] dark:text-[#E8E6DF] hover:text-[#635BFF] dark:hover:text-[#E8C400] underline decoration-2 underline-offset-4"
          >
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/partha-sarathi-sarkar-7385a8367/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111111] dark:text-[#E8E6DF] hover:text-[#635BFF] dark:hover:text-[#E8C400] underline decoration-2 underline-offset-4"
          >
            LINKEDIN
          </a>
          <a
            href="mailto:atomic.here007@gmail.com"
            className="text-[#111111] dark:text-[#E8E6DF] hover:text-[#635BFF] dark:hover:text-[#E8C400] underline decoration-2 underline-offset-4"
          >
            EMAIL
          </a>
        </div>

        <div className="font-mono text-xs font-bold text-[#111111]/60 dark:text-[#9F9D96]">
          © 2026 PARTHA. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
