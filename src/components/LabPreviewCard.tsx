"use client";

import React from "react";
import Link from "next/link";
import { LabItem } from "@/data/lab";
import { ArrowUpRight } from "lucide-react";

interface LabPreviewCardProps {
  item: LabItem;
}

export default function LabPreviewCard({ item }: LabPreviewCardProps) {
  const getStatusColor = (color: string) => {
    if (color === "#635BFF") return "#6259D6";
    if (color === "#FFD600") return "#E8C400";
    return color;
  };

  const isYellow = item.statusColor === "#FFD600";
  const isBlack = item.statusColor === "#111111";

  return (
    <div className="bg-white dark:bg-[#222222] border-3 border-[#111111] dark:border-[#77756F] rounded-2xl p-6 brutal-shadow-md hover:shadow-[10px_10px_0px_var(--shadow)] hover:-translate-y-1 transition-all flex flex-col justify-between h-full">
      <div>
        {/* Header: /EXP-01 & Status Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
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
        <span className="font-mono text-xs font-bold text-[#635BFF] dark:text-[#E8C400] block mb-1">
          [{item.category}]
        </span>
        <h3 className="font-black text-2xl text-[#111111] dark:text-[#E8E6DF] uppercase tracking-tight mb-3">
          {item.title}
        </h3>

        {/* 1-2 sentence summary */}
        <p className="text-sm font-medium text-[#111111]/80 dark:text-[#B8B6AE] leading-relaxed mb-6">
          {item.description}
        </p>
      </div>

      <div>
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {item.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] font-bold bg-[#F7F7F2] dark:bg-[#272727] text-[#111111] dark:text-[#E8E6DF] px-2.5 py-1 border border-[#111111] dark:border-[#77756F] rounded shadow-[1px_1px_0px_var(--shadow)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* VIEW EXPERIMENT → CTA */}
        <div className="pt-4 border-t-2 border-[#111111] dark:border-[#77756F] flex items-center justify-between">
          <Link
            href={`/lab/${item.slug || item.id}`}
            className="inline-flex items-center gap-1.5 font-mono text-xs font-black text-[#111111] dark:text-[#E8E6DF] hover:text-[#635BFF] dark:hover:text-[#E8C400] group transition-colors"
          >
            <span>VIEW EXPERIMENT</span>
            <ArrowUpRight className="w-4 h-4 stroke-[3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
