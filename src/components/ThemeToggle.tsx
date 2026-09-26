"use client";

import React, { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const emptySubscribe = () => () => {};

function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isMounted = useIsMounted();

  if (!isMounted) {
    return (
      <button
        type="button"
        className="w-9 h-9 border-2 border-[#111111] dark:border-[#77756F] bg-[#FFD600] rounded-lg brutal-shadow-sm flex items-center justify-center select-none"
        aria-label="Toggle Dark/Light Mode"
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="p-2 border-2 border-[#111111] dark:border-[#77756F] bg-[#FFD600] dark:bg-[#6259D6] text-[#111111] dark:text-[#E8E6DF] rounded-lg brutal-shadow-sm hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center justify-center"
      aria-label="Toggle Dark/Light Mode"
      title={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 stroke-[2.5]" />
      ) : (
        <Moon className="w-5 h-5 stroke-[2.5]" />
      )}
    </button>
  );
}
