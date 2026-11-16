"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface ScreenshotItem {
  src: string;
  title: string;
  caption: string;
}

interface ProjectScreenshotGalleryProps {
  screenshots: ScreenshotItem[];
}

export default function ProjectScreenshotGallery({ screenshots }: ProjectScreenshotGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === "Escape") {
        setActiveIndex(null);
      } else if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev !== null ? (prev + 1) % screenshots.length : 0));
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev !== null ? (prev - 1 + screenshots.length) % screenshots.length : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, screenshots.length]);

  return (
    <div className="space-y-6">
      {/* Screenshot Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {screenshots.map((shot, idx) => (
          <motion.div
            key={shot.src}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            whileHover={{ y: -4 }}
            onClick={() => setActiveIndex(idx)}
            className="group cursor-pointer bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-4 sm:p-5 brutal-shadow-md hover:shadow-[8px_8px_0px_var(--shadow)] transition-all flex flex-col justify-between"
          >
            {/* Header info */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="font-mono text-xs font-black px-2.5 py-0.5 bg-[#FFD600] text-[#111111] border border-[#111111] rounded">
                0{idx + 1} // VIEW
              </span>
              <span className="font-mono text-[11px] font-bold text-[#111111]/70 dark:text-[#F7F7F2]/70 flex items-center gap-1">
                <Maximize2 className="w-3.5 h-3.5" />
                CLICK TO ENLARGE
              </span>
            </div>

            {/* Image Preview Frame */}
            <div className="w-full aspect-[16/9] border-2 border-[#111111] dark:border-[#F7F7F2] rounded-xl relative overflow-hidden bg-[#0A0A0E] mb-3">
              <Image
                src={shot.src}
                alt={shot.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/30 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#FFD600] text-[#111111] border-2 border-[#111111] rounded-lg px-3 py-1 font-mono text-xs font-black brutal-shadow-sm flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>VIEW FULLSCREEN</span>
                </div>
              </div>
            </div>

            {/* Title & Caption */}
            <div className="space-y-1">
              <h4 className="font-extrabold text-lg text-[#111111] dark:text-[#F7F7F2] uppercase group-hover:text-[#635BFF] dark:group-hover:text-[#FFD600] transition-colors">
                {shot.title}
              </h4>
              <p className="text-xs font-medium text-[#111111]/80 dark:text-[#F7F7F2]/80 leading-relaxed">
                {shot.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveIndex(null)}
              className="absolute inset-0 bg-[#111111]/85 backdrop-blur-xs"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-white dark:bg-[#1A1A1A] border-4 border-[#111111] dark:border-[#F7F7F2] rounded-3xl p-5 sm:p-7 brutal-shadow-lg z-10 space-y-4 text-[#111111] dark:text-[#F7F7F2]"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between gap-4 border-b-2 border-[#111111]/15 dark:border-[#F7F7F2]/20 pb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-black px-3 py-1 bg-[#FFD600] text-[#111111] border border-[#111111] rounded uppercase">
                    SCREENSHOT {activeIndex + 1} / {screenshots.length}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#111111]/60 dark:text-[#F7F7F2]/60 hidden sm:inline">
                    [ USE ← → ARROWS TO NAVIGATE ]
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  className="px-3 py-1.5 bg-[#111111] dark:bg-[#F7F7F2] text-white dark:text-[#111111] hover:bg-[#FFD600] hover:text-[#111111] dark:hover:bg-[#FFD600] font-mono text-xs font-black rounded-lg border-2 border-[#111111] transition-colors flex items-center gap-1"
                  aria-label="Close lightbox"
                >
                  <X className="w-4 h-4 stroke-[3]" />
                  <span>CLOSE [ESC]</span>
                </button>
              </div>

              {/* Main Image Container */}
              <div className="relative w-full h-[50vh] sm:h-[62vh] max-h-[580px] bg-[#0A0A0E] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl overflow-hidden flex items-center justify-center p-2">
                <Image
                  src={screenshots[activeIndex].src}
                  alt={screenshots[activeIndex].title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-contain object-center"
                  priority
                />

                {/* Left / Prev Navigation Arrow */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex((activeIndex - 1 + screenshots.length) % screenshots.length);
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 bg-[#FFD600] text-[#111111] border-2 border-[#111111] rounded-xl brutal-shadow-sm hover:scale-105 active:scale-95 transition-transform"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="w-6 h-6 stroke-[3]" />
                </button>

                {/* Right / Next Navigation Arrow */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex((activeIndex + 1) % screenshots.length);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 bg-[#FFD600] text-[#111111] border-2 border-[#111111] rounded-xl brutal-shadow-sm hover:scale-105 active:scale-95 transition-transform"
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="w-6 h-6 stroke-[3]" />
                </button>
              </div>

              {/* Bottom Details & Thumbnail Selector */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1">
                <div className="space-y-1 max-w-2xl">
                  <h3 className="font-extrabold text-xl sm:text-2xl uppercase tracking-tight">
                    {screenshots[activeIndex].title}
                  </h3>
                  <p className="text-sm font-medium text-[#111111]/80 dark:text-[#F7F7F2]/80 leading-relaxed">
                    {screenshots[activeIndex].caption}
                  </p>
                </div>

                {/* Thumbnail Strip */}
                <div className="flex items-center gap-2 shrink-0">
                  {screenshots.map((s, i) => (
                    <button
                      key={s.src}
                      type="button"
                      onClick={() => setActiveIndex(i)}
                      className={`relative w-12 h-8 rounded-md border-2 overflow-hidden transition-all ${
                        activeIndex === i
                          ? "border-[#FFD600] ring-2 ring-[#FFD600] scale-105"
                          : "border-[#111111] opacity-60 hover:opacity-100"
                      }`}
                      aria-label={`Go to screenshot ${i + 1}`}
                    >
                      <Image src={s.src} alt={s.title} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
