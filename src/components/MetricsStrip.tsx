"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { METRICS, MetricItem } from "@/data/metrics";

function AnimatedMetricCard({ metric, index }: { metric: MetricItem; index: number }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayValue, setDisplayValue] = useState<string>(
    metric.numericValue !== undefined ? "0" : metric.value
  );

  useEffect(() => {
    // Check reduced motion preference
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isReducedMotion) {
      setDisplayValue(metric.value);
      return;
    }

    if (isInView && metric.numericValue !== undefined) {
      let start = 0;
      const end = metric.numericValue;
      const duration = 400; // ms
      const stepTime = Math.max(Math.floor(duration / (end || 1)), 30);

      const timer = setInterval(() => {
        start += 1;
        if (start >= end) {
          setDisplayValue(String(end));
          clearInterval(timer);
        } else {
          setDisplayValue(String(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, metric]);

  const bgStyles = {
    white: "bg-white dark:bg-[#1A1A1A] text-[#111111] dark:text-[#F7F7F2]",
    yellow: "bg-[#FFD600] text-[#111111] dark:border-[#F7F7F2]",
    purple: "bg-[#635BFF] text-white dark:border-[#F7F7F2]",
  };

  const currentBg = bgStyles[metric.colorVariant || "white"];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -3, transition: { duration: 0.15 } }}
      className={`group relative border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-5 md:p-6 brutal-shadow-md hover:shadow-[8px_8px_0px_var(--shadow)] flex flex-col justify-between overflow-hidden transition-all ${currentBg}`}
    >
      {/* Top Accent / Metric Label */}
      <div>
        <div className="flex items-center justify-between mb-3 border-b-2 border-[#111111]/20 dark:border-white/20 pb-2">
          <span className="font-mono text-[11px] font-black uppercase tracking-wider opacity-70">
            {metric.metricNumber}
          </span>
          {metric.accentCorner && (
            <motion.span
              whileHover={{ scale: 1.25 }}
              className="w-2.5 h-2.5 bg-[#FFD600] border border-[#111111] dark:border-[#F7F7F2] rounded-xs shadow-[1px_1px_0px_#111111] group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] transition-transform"
            />
          )}
        </div>

        {/* Value Display */}
        <div className="my-2">
          <span className="font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tighter leading-none block font-mono">
            {displayValue}
          </span>
        </div>
      </div>

      {/* Descriptor */}
      <div className="mt-4 pt-2">
        <span className="font-mono text-xs sm:text-sm font-black uppercase tracking-tight block leading-snug">
          {metric.label}
        </span>
      </div>
    </motion.div>
  );
}

export default function MetricsStrip() {
  return (
    <section className="my-10 md:my-16 scroll-mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {METRICS.map((metric, idx) => (
          <AnimatedMetricCard key={metric.id} metric={metric} index={idx} />
        ))}
      </div>
    </section>
  );
}
