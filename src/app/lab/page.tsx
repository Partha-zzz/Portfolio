"use client";

import React, { useState } from "react";
import LabCard from "@/components/LabCard";
import { LAB_ITEMS } from "@/data/lab";
import { FlaskConical } from "lucide-react";

export default function LabPage() {
  const [filterStatus, setFilterStatus] = useState<string>("ALL");

  const statuses = ["ALL", "COMPLETED EXPERIMENT", "IN PROGRESS", "PROTOTYPE", "EXPERIMENT", "LEARNING", "COMPLETED"];

  const filteredItems = LAB_ITEMS.filter(
    (item) => filterStatus === "ALL" || item.status === filterStatus
  );

  return (
    <div className="space-y-12 py-6">
      {/* Hero Header */}
      <div>
        <div className="inline-block bg-[#FFD600] text-[#111111] font-mono text-xs md:text-sm font-black px-3.5 py-1.5 border-2 border-[#111111] dark:border-[#F7F7F2] rounded-md brutal-shadow-sm mb-4 uppercase tracking-widest">
          DEVELOPER WORKBENCH ⚡
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tighter leading-[0.88] mb-6">
          NOT EVERYTHING <br />
          <span className="bg-[#635BFF] text-white px-4 py-1 border-3 border-[#111111] dark:border-[#F7F7F2] inline-block my-1 rounded-2xl shadow-[8px_8px_0px_var(--shadow)]">
            NEEDS TO BE
          </span> <br />
          A PRODUCT.
        </h1>

        <p className="text-lg sm:text-2xl font-bold text-[#111111]/85 dark:text-[#F7F7F2]/85 max-w-2xl leading-relaxed border-l-4 border-[#FFD600] pl-4 py-1">
          Welcome to The Lab—a dedicated workspace for machine learning experiments, algorithms testing, SQL analytical queries, and exploratory prototypes.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 brutal-shadow-md flex flex-wrap items-center justify-between gap-4 transition-colors">
        <div className="flex items-center gap-2 font-mono text-xs font-black text-[#111111] dark:text-[#F7F7F2]">
          <FlaskConical className="w-5 h-5 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
          <span>FILTER LAB STATUS:</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {statuses.map((st) => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              className={`font-mono text-xs font-bold px-3 py-1.5 border-2 border-[#111111] dark:border-[#F7F7F2] rounded-lg brutal-shadow-sm transition-all ${
                filterStatus === st
                  ? "bg-[#FFD600] text-[#111111] translate-x-[1px] translate-y-[1px]"
                  : "bg-[#F7F7F2] dark:bg-[#242424] text-[#111111] dark:text-[#F7F7F2] hover:bg-white dark:hover:bg-[#303030]"
              }`}
            >
              {st === "ALL" ? "SHOW ALL" : st}
            </button>
          ))}
        </div>
      </div>

      {/* Lab Grid — 2 columns on desktop for clean 2x2 archive layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {filteredItems.map((item) => (
          <LabCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
