"use client";

import React from "react";
import Link from "next/link";
import { LabItem } from "@/data/lab";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface LabCardProps {
  item: LabItem;
}

function LabHighlight({ item }: { item: LabItem }) {
  if (item.id === "juniolang") {
    return (
      <div className="bg-[#F7F7F2] dark:bg-[#272727] border-2 border-[#111111] dark:border-[#77756F] p-3.5 rounded-xl font-mono text-xs">
        <span className="font-black text-[#635BFF] dark:text-[#E8C400] block mb-2 uppercase tracking-wider">
          PROTOTYPE FOCUS & HIGHLIGHT
        </span>
        <div className="flex flex-wrap gap-1.5 font-bold text-[#111111] dark:text-[#E8E6DF]">
          <span className="bg-white dark:bg-[#222222] px-2.5 py-1 rounded border border-[#111111] dark:border-[#77756F] shadow-[1px_1px_0px_var(--shadow)]">
            Story-Based Lessons
          </span>
          <span className="bg-white dark:bg-[#222222] px-2.5 py-1 rounded border border-[#111111] dark:border-[#77756F] shadow-[1px_1px_0px_var(--shadow)]">
            AI Roleplay Practice
          </span>
          <span className="bg-white dark:bg-[#222222] px-2.5 py-1 rounded border border-[#111111] dark:border-[#77756F] shadow-[1px_1px_0px_var(--shadow)]">
            Interactive Reader
          </span>
        </div>
      </div>
    );
  }

  if (item.id === "surakshaai") {
    return (
      <div className="bg-[#F7F7F2] dark:bg-[#272727] border-2 border-[#111111] dark:border-[#77756F] p-3.5 rounded-xl font-mono text-xs">
        <div className="flex items-center justify-between mb-2">
          <span className="font-black text-[#635BFF] dark:text-[#E8C400] uppercase tracking-wider">
            MODEL FLOW
          </span>
          <span className="font-extrabold text-[#111111] dark:text-[#181818] bg-[#FFD600] dark:bg-[#E8C400] px-2 py-0.5 rounded text-[11px] border border-[#111111]">
            ACCURACY: 67.44%
          </span>
        </div>
        <p className="font-bold text-[#111111]/85 dark:text-[#E8E6DF] leading-snug">
          LAT + LON + HOUR → Random Forest → Risk prediction
        </p>
      </div>
    );
  }

  if (item.id === "python-job-scraper") {
    return (
      <div className="bg-[#F7F7F2] dark:bg-[#272727] border-2 border-[#111111] dark:border-[#77756F] p-3.5 rounded-xl font-mono text-xs">
        <span className="font-black text-[#635BFF] dark:text-[#E8C400] block mb-2 uppercase tracking-wider">
          SCRAPING PIPELINE
        </span>
        <div className="flex flex-wrap items-center gap-1 font-bold text-[11px]">
          {["WEB PAGE", "REQUESTS", "BEAUTIFULSOUP", "EXTRACT", "CSV"].map((step, idx, arr) => (
            <React.Fragment key={step}>
              <span className="bg-white dark:bg-[#222222] text-[#111111] dark:text-[#E8E6DF] px-2 py-0.5 rounded border border-[#111111] dark:border-[#77756F] shadow-[1px_1px_0px_var(--shadow)]">
                {step}
              </span>
              {idx < arr.length - 1 && (
                <span className="text-[#635BFF] dark:text-[#E8C400] font-black">→</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  if (item.id === "mnist-neural-network-experiment") {
    return (
      <div className="bg-[#F7F7F2] dark:bg-[#272727] border-2 border-[#111111] dark:border-[#77756F] p-3.5 rounded-xl font-mono text-xs">
        <span className="font-black text-[#635BFF] dark:text-[#E8C400] block mb-2 uppercase tracking-wider">
          ARCHITECTURES & TEST ACCURACY
        </span>
        <div className="space-y-1.5 font-bold text-[11px] text-[#111111] dark:text-[#E8E6DF]">
          <div className="flex items-center justify-between border-b border-[#111111]/10 dark:border-white/10 pb-1">
            <span>M1: 784 → 128 → 10</span>
            <span className="text-[#635BFF] dark:text-[#E8C400] font-extrabold">97.58%</span>
          </div>
          <div className="flex items-center justify-between border-b border-[#111111]/10 dark:border-white/10 pb-1">
            <span>M2: 784 → 128 → 64 → 10</span>
            <span className="text-[#635BFF] dark:text-[#E8C400] font-extrabold">97.69%</span>
          </div>
          <div className="flex items-center justify-between">
            <span>M3: 784 → 128 → 64 → 32 → 10</span>
            <span className="text-[#635BFF] dark:text-[#E8C400] font-extrabold">97.68%</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default function LabCard({ item }: LabCardProps) {
  const getStatusColor = (color: string) => {
    if (color === "#635BFF") return "#6259D6";
    if (color === "#FFD600") return "#E8C400";
    return color;
  };

  const isYellow = item.statusColor === "#FFD600";
  const isBlack = item.statusColor === "#111111";

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="bg-white dark:bg-[#222222] border-3 border-[#111111] dark:border-[#77756F] rounded-2xl p-6 md:p-7 brutal-shadow-md hover:shadow-[12px_12px_0px_var(--shadow)] flex flex-col justify-between h-full transition-all group"
    >
      <div className="space-y-4">
        {/* Header: /EXP-XX & Status Badge */}
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-xs font-black text-[#111111]/60 dark:text-[#9F9D96]">
            /{item.number}
          </span>
          <span
            className="font-mono text-[11px] font-black px-2.5 py-1 border-2 border-[#111111] dark:border-[#77756F] rounded-md brutal-shadow-sm uppercase"
            style={{
              backgroundColor: getStatusColor(item.statusColor),
              color: isBlack ? "#E8C400" : isYellow ? "#111111" : "#FFFFFF",
            }}
          >
            {item.status}
          </span>
        </div>

        {/* Category & Title */}
        <div>
          <span className="font-mono text-xs font-bold text-[#635BFF] dark:text-[#E8C400] block mb-1">
            [{item.category}]
          </span>
          <h3 className="font-black text-2xl text-[#111111] dark:text-[#E8E6DF] uppercase tracking-tight leading-snug">
            {item.title}
          </h3>
        </div>

        {/* Short Summary */}
        <p className="text-sm font-medium text-[#111111]/80 dark:text-[#B8B6AE] leading-relaxed">
          {item.description}
        </p>

        {/* Project-Specific Highlight */}
        <LabHighlight item={item} />
      </div>

      <div className="space-y-5 pt-4">
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5">
          {item.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] font-bold bg-[#F7F7F2] dark:bg-[#272727] text-[#111111] dark:text-[#E8E6DF] px-2.5 py-1 border border-[#111111] dark:border-[#77756F] rounded shadow-[1px_1px_0px_var(--shadow)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* EXPLORE EXPERIMENT → CTA */}
        <div className="pt-4 border-t-2 border-[#111111] dark:border-[#77756F]">
          <Link
            href={`/lab/${item.slug || item.id}`}
            className="inline-flex items-center justify-between w-full font-mono text-xs font-black bg-[#111111] dark:bg-[#E8E6DF] text-white dark:text-[#181818] p-3 rounded-xl border-2 border-[#111111] dark:border-[#77756F] brutal-shadow-sm group-hover:bg-[#FFD600] group-hover:text-[#111111] dark:group-hover:bg-[#E8C400] dark:group-hover:text-[#181818] transition-all"
          >
            <span>EXPLORE EXPERIMENT</span>
            <ArrowRight className="w-4 h-4 stroke-[3] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
