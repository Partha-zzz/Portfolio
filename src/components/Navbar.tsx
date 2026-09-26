"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import BrutalButton from "./BrutalButton";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "SUMMARY", href: "/" },
    { name: "WORK", href: "/work" },
    { name: "ABOUT", href: "/about" },
    { name: "LAB", href: "/lab" },
    { name: "CERTIFICATIONS", href: "/certifications" },
    { name: "CONTACT", href: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-4 z-50 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
      <nav className="bg-white dark:bg-[#1D1D1D] border-3 border-[#111111] dark:border-[#77756F] rounded-xl px-4 sm:px-6 py-3 flex items-center justify-between brutal-shadow-md transition-colors">
        {/* Brand Logo: [P] ARTHA */}
        <Link
          href="/"
          className="group flex items-center font-black text-xl sm:text-2xl tracking-tighter text-[#111111] dark:text-[#E8E6DF]"
        >
          <span className="bg-[#FFD600] dark:bg-[#E8C400] text-[#111111] px-2 py-0.5 border-2 border-[#111111] dark:border-[#77756F] rounded shadow-[2px_2px_0px_var(--shadow)] group-hover:bg-[#635BFF] group-hover:text-white transition-colors mr-0.5">
            P
          </span>
          <span className="font-extrabold tracking-widest">
            ARTHA
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 font-extrabold text-sm tracking-wider">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-1 transition-colors ${
                  active
                    ? "text-[#111111] dark:text-[#E8E6DF] underline decoration-[#FFD600] dark:decoration-[#E8C400] decoration-4 underline-offset-8"
                    : "text-[#111111]/80 dark:text-[#B8B6AE] hover:text-[#111111] dark:hover:text-[#E8E6DF] hover:underline decoration-[#635BFF] dark:decoration-[#6259D6] decoration-2 underline-offset-4"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Action & Theme Toggle & Mobile Menu Trigger */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <div className="hidden md:block">
            <BrutalButton
              href="/resume.pdf"
              variant="yellow"
              size="sm"
              external
              icon
            >
              RESUME
            </BrutalButton>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 border-2 border-[#111111] dark:border-[#77756F] bg-[#FFD600] dark:bg-[#E8C400] text-[#111111] rounded-lg brutal-shadow-sm focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[3]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[3]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-white dark:bg-[#1D1D1D] border-3 border-[#111111] dark:border-[#77756F] rounded-xl p-6 brutal-shadow-lg flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200 transition-colors">
          <div className="flex flex-col gap-3 font-black text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 border-2 border-[#111111] dark:border-[#77756F] rounded-lg brutal-shadow-sm flex items-center justify-between ${
                  isActive(link.href)
                    ? "bg-[#FFD600] text-[#111111]"
                    : "bg-[#F7F7F2] dark:bg-[#242424] text-[#111111] dark:text-[#F7F7F2] hover:bg-[#635BFF] hover:text-white"
                }`}
              >
                <span>{link.name}</span>
                <span className="font-mono text-xs text-current font-bold">
                  →
                </span>
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t-2 border-[#111111] dark:border-[#F7F7F2] flex items-center justify-between gap-3">
            <BrutalButton
              href="/resume.pdf"
              variant="yellow"
              size="md"
              external
              icon
              className="w-full"
            >
              DOWNLOAD RESUME
            </BrutalButton>
          </div>
        </div>
      )}
    </header>
  );
}
