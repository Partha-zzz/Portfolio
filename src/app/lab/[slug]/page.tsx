"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { LAB_ITEMS } from "@/data/lab";
import { ArrowLeft, Code2, ChevronDown, ChevronUp } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";

export default function LabDetailPage() {
  const params = useParams();
  const slugParam = params?.slug as string;

  const item = LAB_ITEMS.find(
    (l) => l.slug === slugParam || l.id === slugParam
  );

  const [showCode, setShowCode] = useState(false);

  if (!item) {
    return (
      <div className="py-16 text-center space-y-6">
        <h1 className="text-4xl font-extrabold text-[#111111] dark:text-[#E8E6DF]">
          EXPERIMENT NOT FOUND
        </h1>
        <p className="text-sm font-mono text-[#111111]/70 dark:text-[#B8B6AE]">
          The requested lab experiment record could not be found.
        </p>
        <Link
          href="/lab"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FFD600] text-[#111111] font-mono text-xs font-black rounded-lg border-2 border-[#111111] brutal-shadow-sm"
        >
          <ArrowLeft className="w-4 h-4 stroke-[3]" />
          RETURN TO THE LAB ARCHIVE
        </Link>
      </div>
    );
  }

  const getStatusColor = (color: string) => {
    if (color === "#635BFF") return "#6259D6";
    if (color === "#FFD600") return "#E8C400";
    return color;
  };

  const isYellow = item.statusColor === "#FFD600";
  const isBlack = item.statusColor === "#111111";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="space-y-10 py-6 max-w-5xl mx-auto"
    >
      {/* Back button */}
      <div>
        <Link
          href="/lab"
          className="inline-flex items-center gap-2 font-mono text-xs font-black px-4 py-2 bg-white dark:bg-[#222222] text-[#111111] dark:text-[#E8E6DF] border-2 border-[#111111] dark:border-[#77756F] rounded-xl brutal-shadow-sm hover:bg-[#FFD600] hover:text-[#111111] dark:hover:bg-[#E8C400] dark:hover:text-[#181818] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 stroke-[3]" />
          <span>← BACK TO THE LAB ARCHIVE</span>
        </Link>
      </div>

      {/* Header Info */}
      <div className="bg-white dark:bg-[#222222] border-3 border-[#111111] dark:border-[#77756F] rounded-2xl p-6 md:p-10 brutal-shadow-lg space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="font-mono text-sm font-black text-[#111111]/60 dark:text-[#9F9D96]">
            /{item.number}
          </span>
          <span
            className="font-mono text-xs font-black px-3.5 py-1.5 border-2 border-[#111111] dark:border-[#77756F] rounded-md brutal-shadow-sm uppercase"
            style={{
              backgroundColor: getStatusColor(item.statusColor),
              color: isBlack ? "#E8C400" : isYellow ? "#111111" : "#FFFFFF",
            }}
          >
            {item.status}
          </span>
        </div>

        <div>
          <span className="font-mono text-xs font-bold text-[#635BFF] dark:text-[#E8C400] block mb-2">
            [{item.category}]
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-[#111111] dark:text-[#E8E6DF] uppercase tracking-tight mb-4">
            {item.title}
          </h1>
          <p className="text-base md:text-xl font-medium text-[#111111]/85 dark:text-[#B8B6AE] leading-relaxed border-l-4 border-[#FFD600] pl-4 py-1">
            {item.description}
          </p>
        </div>

        {/* Reported Test Accuracy Stat if present */}
        {item.accuracyDisplay && (
          <div className="bg-[#635BFF] dark:bg-[#6259D6] text-white p-4 border-2 border-[#111111] dark:border-[#77756F] rounded-xl font-mono text-xs brutal-shadow-sm flex items-center justify-between">
            <div>
              <span className="block font-mono text-[10px] font-black text-[#FFD600] dark:text-[#E8C400] uppercase tracking-wider">
                {item.accuracyLabel || "REPORTED TEST ACCURACY"}
              </span>
              <span className="font-extrabold text-3xl text-white">
                {item.accuracyDisplay}
              </span>
            </div>
            {item.rawAccuracy && (
              <span className="font-mono text-[11px] bg-[#111111] text-[#FFD600] dark:text-[#E8C400] px-3 py-1.5 rounded border border-white/30 font-bold">
                RAW: {item.rawAccuracy}
              </span>
            )}
          </div>
        )}

        {/* Scraping Flow if present */}
        {item.scrapingFlow && item.scrapingFlow.length > 0 && (
          <div className="bg-[#111111] text-[#E8E6DF] border-2 border-[#111111] dark:border-[#77756F] p-4 rounded-xl font-mono text-xs text-center">
            <span className="font-black text-[#FFD600] dark:text-[#E8C400] block mb-3 uppercase tracking-wider">
              01 — THE IDEA (SCRAPING FLOW)
            </span>
            <div className="flex flex-wrap items-center justify-center gap-1.5 font-bold">
              {item.scrapingFlow.map((step, idx) => (
                <React.Fragment key={idx}>
                  <span className="bg-[#272727] text-[#E8E6DF] px-2.5 py-1 rounded border border-white/20">
                    {step}
                  </span>
                  {idx < item.scrapingFlow!.length - 1 && (
                    <span className="text-[#FFD600] dark:text-[#E8C400] font-black">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* Detailed Sections List */}
        {item.sections && item.sections.length > 0 && (
          <div className="space-y-6 pt-4">
            {item.sections.map((sec) => (
              <div
                key={sec.id}
                className="bg-[#F7F7F2] dark:bg-[#272727] border-2 border-[#111111] dark:border-[#77756F] p-5 rounded-2xl font-mono text-xs space-y-3"
              >
                <span className="font-black text-[#635BFF] dark:text-[#E8C400] text-sm block uppercase tracking-wide">
                  {sec.number} — {sec.title}
                </span>

                {sec.type === "text" && sec.content && (
                  <p className="font-bold text-sm text-[#111111]/85 dark:text-[#B8B6AE] leading-relaxed">
                    {sec.content}
                  </p>
                )}

                {sec.type === "list" && sec.items && (
                  <ul className="space-y-2 text-sm font-bold text-[#111111]/85 dark:text-[#B8B6AE]">
                    {sec.items.map((it, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#635BFF] dark:text-[#E8C400] font-black">•</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {sec.type === "key-value" && sec.keyValueItems && (
                  <div className="grid grid-cols-1 gap-2.5 pt-1">
                    {sec.keyValueItems.map((kv) => (
                      <div
                        key={kv.title}
                        className="bg-white dark:bg-[#222222] p-3 rounded-xl border border-[#111111]/20 dark:border-[#77756F]"
                      >
                        <strong className="font-extrabold text-xs text-[#111111] dark:text-[#E8C400] block mb-0.5">
                          {kv.title}:
                        </strong>
                        <span className="font-medium text-xs text-[#111111]/80 dark:text-[#B8B6AE]">
                          {kv.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {sec.type === "badge-flow" && sec.items && (
                  <div className="flex flex-wrap items-center justify-center gap-1.5 font-bold pt-2">
                    {sec.items.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <span className="bg-[#111111] text-[#E8E6DF] px-2.5 py-1 rounded border border-white/20 text-xs">
                          {step}
                        </span>
                        {idx < sec.items!.length - 1 && (
                          <span className="text-[#635BFF] dark:text-[#E8C400] font-black">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}

                {sec.type === "stat" && (
                  <div className="bg-[#635BFF] dark:bg-[#6259D6] text-white p-4 rounded-xl flex items-center justify-between">
                    <span className="font-extrabold text-3xl text-white">
                      {sec.content}
                    </span>
                    {sec.items && (
                      <div className="text-right">
                        {sec.items.map((it, idx) => (
                          <span
                            key={idx}
                            className="block font-mono text-xs font-black text-[#FFD600] dark:text-[#E8C400] uppercase"
                          >
                            {it}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {sec.type === "tags" && sec.items && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {sec.items.map((t) => (
                      <span
                        key={t}
                        className="bg-[#111111] text-[#FFD600] dark:text-[#E8C400] px-3 py-1.5 rounded-lg border border-black font-mono text-xs font-bold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Why In Lab Box */}
        {item.whyInLab && (
          <div className="bg-[#FFD600] dark:bg-[#E8C400] text-[#111111] p-4 border-2 border-[#111111] rounded-2xl font-mono text-xs brutal-shadow-sm">
            <strong className="block font-black uppercase text-xs mb-1 text-[#111111]">
              WHY THIS IS IN THE LAB:
            </strong>
            <span className="font-bold leading-relaxed">{item.whyInLab}</span>
          </div>
        )}

        {/* Verified Target Website */}
        {item.sourceWebsite && (
          <div className="bg-[#F7F7F2] dark:bg-[#272727] border-2 border-[#111111] dark:border-[#77756F] p-4 rounded-xl font-mono text-xs space-y-1">
            <span className="font-black text-[#635BFF] dark:text-[#E8C400] block uppercase">
              VERIFIED TARGET WEBSITE:
            </span>
            <div className="font-bold text-[#111111] dark:text-[#E8E6DF]">
              <a
                href={item.sourceWebsite.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#635BFF] dark:hover:text-[#E8C400]"
              >
                {item.sourceWebsite.name} ↗
              </a>
              <span className="block text-xs text-[#111111]/70 dark:text-[#9F9D96] font-normal mt-0.5">
                {item.sourceWebsite.note}
              </span>
            </div>
          </div>
        )}

        {/* Code Snippet Accordion */}
        {item.snippet && (
          <div>
            <button
              onClick={() => setShowCode(!showCode)}
              className="w-full flex items-center justify-between font-mono text-xs font-black bg-[#F7F7F2] dark:bg-[#272727] text-[#111111] dark:text-[#E8E6DF] p-3 border-2 border-[#111111] dark:border-[#77756F] rounded-xl brutal-shadow-sm hover:bg-[#FFD600] hover:text-[#111111] dark:hover:bg-[#E8C400] dark:hover:text-[#181818] transition-colors"
            >
              <span className="flex items-center gap-2">
                <Code2 className="w-4 h-4 stroke-[2.5]" />
                {showCode ? "HIDE CODE EXPLORATION" : "VIEW CODE EXPLORATION"}
              </span>
              {showCode ? (
                <ChevronUp className="w-4 h-4 stroke-[2.5]" />
              ) : (
                <ChevronDown className="w-4 h-4 stroke-[2.5]" />
              )}
            </button>

            {showCode && (
              <pre className="mt-3 bg-[#111111] text-[#FFD600] dark:text-[#E8C400] p-5 rounded-2xl border-2 border-[#111111] dark:border-[#77756F] font-mono text-xs overflow-x-auto leading-relaxed">
                <code>{item.snippet}</code>
              </pre>
            )}
          </div>
        )}

        {/* Technology Badges */}
        <div>
          <span className="font-mono text-xs font-black text-[#111111]/60 dark:text-[#9F9D96] uppercase tracking-wider block mb-2">
            TECHNOLOGIES USED
          </span>
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs font-bold bg-[#D9D9D4] dark:bg-[#272727] text-[#111111] dark:text-[#E8E6DF] px-3 py-1 border border-[#111111] dark:border-[#77756F] rounded-lg shadow-[1px_1px_0px_var(--shadow)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer info & GitHub repo link */}
        <div className="pt-4 border-t-2 border-[#111111] dark:border-[#77756F] flex items-center justify-between text-xs font-mono font-bold text-[#111111] dark:text-[#E8E6DF]">
          <span>LAST UPDATED: {item.updatedAt}</span>
          {item.githubUrl && (
            <a
              href={item.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#111111] dark:border-[#77756F] bg-[#FFD600] dark:bg-[#E8C400] text-[#111111] font-black rounded-xl brutal-shadow-sm hover:bg-[#111111] hover:text-[#FFD600] dark:hover:bg-[#E8E6DF] dark:hover:text-[#181818] transition-colors uppercase text-xs"
            >
              <GithubIcon className="w-4 h-4" />
              <span>VIEW CODE ↗</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
