"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Disable on touch devices or fine pointer unavailable
    const hasPointer = window.matchMedia("(pointer: fine)").matches;
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasPointer || isReducedMotion) {
      setIsTouch(true);
      return;
    }

    setIsTouch(false);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      const linkTarget = target.closest("a, button, [role='button']") as HTMLElement | null;
      const imgTarget = target.closest("img, svg, [data-cursor-img]") as HTMLElement | null;

      if (cursorTarget?.dataset?.cursor) {
        setCursorText(cursorTarget.dataset.cursor);
        setIsHovered(true);
      } else if (linkTarget) {
        const text = linkTarget.textContent?.toUpperCase() || "";
        if (text.includes("CASE STUDY")) {
          setCursorText("EXPLORE →");
        } else if (text.includes("PROJECT")) {
          setCursorText("VIEW PROJECT");
        } else {
          setCursorText("OPEN →");
        }
        setIsHovered(true);
      } else if (imgTarget) {
        setCursorText("VIEW");
        setIsHovered(true);
      } else {
        setCursorText("");
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
      }}
    >
      <div
        className={`flex items-center justify-center rounded-full font-mono text-[10px] font-black uppercase tracking-wider transition-all duration-200 border-2 border-[#111111] dark:border-[#F7F7F2] ${
          isHovered
            ? "bg-[#FFD600] text-[#111111] px-3 py-1.5 min-w-[70px] min-h-[32px] brutal-shadow-sm scale-110"
            : "w-4 h-4 bg-[#111111] dark:bg-[#F7F7F2] shadow-sm"
        }`}
      >
        {isHovered && <span>{cursorText}</span>}
      </div>
    </div>
  );
}
