"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { BUILD_LOGS } from "@/data/buildLogs";
import { Terminal, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function BuildLog() {
  return (
    <section id="timeline" className="my-16 md:my-24 scroll-mt-24">
      <SectionHeading
        number="05"
        title="BUILD LOG."
        subtitle="Receipt & logbook records of real code milestones, ML pipelines, and project releases."
        badge="05 TIMELINE"
        badgeColor="yellow"
      />

      <div className="relative pl-6 md:pl-8 border-l-4 border-[#111111] dark:border-[#77756F] space-y-8">
        {/* Animated timeline bar progress */}
        <motion.div
          className="absolute left-[-4px] top-0 w-1 bg-[#FFD600]"
          initial={{ height: "0%" }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {BUILD_LOGS.map((log, index) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0, x: -16, y: 16 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.12, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="relative bg-white dark:bg-[#222222] border-3 border-[#111111] dark:border-[#77756F] rounded-2xl p-6 md:p-8 brutal-shadow-md hover:shadow-[10px_10px_0px_var(--shadow)] flex flex-col justify-between transition-colors"
            >
              {/* Timeline Node Point */}
              <div className="absolute -left-[35px] md:-left-[43px] top-8 w-4 h-4 bg-[#FFD600] border-3 border-[#111111] rounded-full brutal-shadow-sm" />

              {/* Receipt Header Bar */}
              <div>
                <div className="flex items-center justify-between border-b-2 border-dashed border-[#111111] dark:border-[#77756F] pb-4 mb-4">
                  <div className="flex items-center gap-2 font-mono text-sm font-black text-[#111111] dark:text-[#E8E6DF]">
                    <Terminal className="w-4 h-4 text-[#635BFF] dark:text-[#E8C400] stroke-[2.5]" />
                    <span>{log.logNumber}</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#111111]/60 dark:text-[#9F9D96]">
                    [{log.date}]
                  </span>
                </div>

                {/* Log Details */}
                <div className="space-y-3 mb-6">
                  <div>
                    <span className="font-mono text-xs text-[#111111]/60 dark:text-[#9F9D96] font-bold block uppercase">
                      PROJECT
                    </span>
                    <h4 className="text-2xl font-black text-[#111111] dark:text-[#E8E6DF] uppercase">
                      {log.project}
                    </h4>
                  </div>

                  <div>
                    <span className="font-mono text-xs text-[#635BFF] dark:text-[#E8C400] font-bold block uppercase">
                      ROLE
                    </span>
                    <p className="font-bold text-sm text-[#111111] dark:text-[#E8E6DF]">
                      {log.role}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-xs text-[#111111]/60 dark:text-[#9F9D96] font-bold block uppercase">
                      SUMMARY
                    </span>
                    <p className="text-sm font-medium text-[#111111]/90 dark:text-[#B8B6AE] leading-relaxed">
                      {log.summary}
                    </p>
                  </div>
                </div>
              </div>

              {/* Stack Badges & Status */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {log.stack.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-[11px] font-bold bg-[#FFD600] text-[#111111] px-2 py-0.5 border border-[#111111] rounded shadow-[1px_1px_0px_#111111]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t-2 border-[#111111] dark:border-[#77756F] flex items-center justify-between text-xs font-mono font-bold text-[#111111] dark:text-[#E8E6DF]">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF] dark:text-[#E8C400] stroke-[2.5]" />
                    LOGGED & VERIFIED
                  </span>
                  <span>ID: {log.id}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
