"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";

const SECTIONS = [
  { id: "work", label: "01 WORK", number: "01" },
  { id: "workflow", label: "02 WORKFLOW", number: "02" },
  { id: "skills", label: "03 SKILLS", number: "03" },
  { id: "lab", label: "04 THE LAB", number: "04" },
  { id: "timeline", label: "05 BUILD LOG", number: "05" },
  { id: "contact", label: "06 CONTACT", number: "06" },
];

export default function ScrollProgress() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState("");
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1280px) and (pointer: fine)");
    setIsDesktop(media.matches);

    const handleResize = () => setIsDesktop(media.matches);
    media.addEventListener("change", handleResize);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "-10% 0px -35% 0px",
      }
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => {
      media.removeEventListener("change", handleResize);
      observer.disconnect();
    };
  }, []);

  if (pathname !== "/" || !isDesktop) return null;

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      aria-label="Section navigation indicator"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-2 font-mono text-[11px] font-bold"
    >
      {/* Scroll Bar Line */}
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#111111]/20 dark:bg-[#F7F7F2]/20 rounded-full overflow-hidden">
        <motion.div
          className="w-full bg-[#FFD600]"
          style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
        />
      </div>

      <div className="flex flex-col gap-2 pr-4">
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className={`text-right transition-all px-2 py-1 rounded border-2 ${
                isActive
                  ? "bg-[#FFD600] text-[#111111] border-[#111111] brutal-shadow-sm font-black translate-x-[-2px]"
                  : "bg-white/80 dark:bg-[#1A1A1A]/80 text-[#111111]/70 dark:text-[#F7F7F2]/70 border-transparent hover:border-[#111111] dark:hover:border-[#F7F7F2]"
              }`}
            >
              {sec.label} {isActive ? "←" : ""}
            </button>
          );
        })}
      </div>
    </div>
  );
}
