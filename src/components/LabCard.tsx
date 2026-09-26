"use client";

import React, { useState } from "react";
import { LabItem } from "@/data/lab";
import { Code2, ChevronDown, ChevronUp } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface LabCardProps {
  item: LabItem;
}

export default function LabCard({ item }: LabCardProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="bg-white dark:bg-[#222222] border-3 border-[#111111] dark:border-[#77756F] rounded-2xl p-6 md:p-8 brutal-shadow-md brutal-card-hover flex flex-col justify-between transition-colors">
      <div>
        {/* Header with status badge */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="font-mono text-xs font-black text-[#111111]/60 dark:text-[#9F9D96]">
            /{item.number}
          </span>
          <span
            className="font-mono text-xs font-black px-3 py-1 border-2 border-[#111111] dark:border-[#77756F] rounded-md brutal-shadow-sm uppercase"
            style={{
              backgroundColor: item.statusColor === "#635BFF" ? "#6259D6" : item.statusColor === "#FFD600" ? "#E8C400" : item.statusColor,
              color: item.statusColor === "#111111" ? "#E8C400" : "#111111",
            }}
          >
            {item.status}
          </span>
        </div>

        <span className="font-mono text-xs font-bold text-[#635BFF] dark:text-[#E8C400] block mb-1">
          [{item.category}]
        </span>
        <h3 className="font-black text-2xl text-[#111111] dark:text-[#E8E6DF] uppercase tracking-tight mb-3">
          {item.title}
        </h3>
        <p className="text-sm font-medium text-[#111111]/80 dark:text-[#B8B6AE] leading-relaxed mb-4">
          {item.description}
        </p>

        {/* ML Accuracy Badge */}
        {item.accuracyDisplay && (
          <div className="bg-[#635BFF] dark:bg-[#6259D6] text-white p-3.5 border-2 border-[#111111] dark:border-[#77756F] rounded-xl font-mono text-xs mb-4 brutal-shadow-sm flex items-center justify-between">
            <div>
              <span className="block font-mono text-[10px] font-black text-[#FFD600] dark:text-[#E8C400] uppercase tracking-wider">
                {item.accuracyLabel || "REPORTED TEST ACCURACY"}
              </span>
              <span className="font-extrabold text-2xl text-white">
                {item.accuracyDisplay}
              </span>
            </div>
            {item.rawAccuracy && (
              <span className="font-mono text-[10px] bg-[#111111] text-[#FFD600] dark:text-[#E8C400] px-2 py-1 rounded border border-white/30">
                RAW: {item.rawAccuracy}
              </span>
            )}
          </div>
        )}

        {/* Web Scraping Flow Diagram */}
        {item.scrapingFlow && item.scrapingFlow.length > 0 && (
          <div className="mb-4 bg-[#111111] text-[#E8E6DF] border-2 border-[#111111] dark:border-[#77756F] p-3 rounded-xl font-mono text-[11px] text-center">
            <span className="font-black text-[#FFD600] dark:text-[#E8C400] block mb-2 uppercase tracking-wider">
              01 — THE IDEA (SCRAPING FLOW)
            </span>
            <div className="flex flex-wrap items-center justify-center gap-1 font-bold">
              {item.scrapingFlow.map((step, idx) => (
                <React.Fragment key={idx}>
                  <span className="bg-[#272727] text-[#E8E6DF] px-2 py-0.5 rounded border border-white/20">
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

        {/* Explicit Section Rendering from item.sections */}
        {item.sections && item.sections.length > 0 ? (
          <div className="space-y-4 mb-4">
            {item.sections.map((sec) => (
              <div
                key={sec.id}
                className="bg-[#F7F7F2] dark:bg-[#272727] border-2 border-[#111111] dark:border-[#77756F] p-3.5 rounded-xl font-mono text-xs"
              >
                <span className="font-black text-[#635BFF] dark:text-[#E8C400] block mb-1.5 uppercase">
                  {sec.number} — {sec.title}:
                </span>

                {sec.type === "text" && sec.content && (
                  <p className="font-bold text-[#111111]/85 dark:text-[#B8B6AE] leading-relaxed">
                    {sec.content}
                  </p>
                )}

                {sec.type === "list" && sec.items && (
                  <ul className="space-y-1 font-bold text-[#111111]/80 dark:text-[#B8B6AE]">
                    {sec.items.map((it, idx) => (
                      <li key={idx}>• {it}</li>
                    ))}
                  </ul>
                )}

                {sec.type === "key-value" && sec.keyValueItems && (
                  <div className="grid grid-cols-1 gap-1.5">
                    {sec.keyValueItems.map((kv) => (
                      <div key={kv.title} className="text-[#111111] dark:text-[#E8E6DF]">
                        <strong className="font-extrabold text-[#111111] dark:text-[#E8C400]">
                          • {kv.title}:
                        </strong>{" "}
                        <span className="font-medium text-[#111111]/80 dark:text-[#B8B6AE]">
                          {kv.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {sec.type === "badge-flow" && sec.items && (
                  <div className="flex flex-wrap items-center justify-center gap-1 font-bold pt-1">
                    {sec.items.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <span className="bg-[#111111] text-[#E8E6DF] px-2 py-0.5 rounded border border-white/20 text-[11px]">
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
                  <div className="bg-[#635BFF] dark:bg-[#6259D6] text-white p-3 rounded-lg flex items-center justify-between mt-1">
                    <span className="font-extrabold text-2xl text-white">
                      {sec.content}
                    </span>
                    {sec.items && (
                      <div className="text-right">
                        {sec.items.map((it, idx) => (
                          <span
                            key={idx}
                            className="block font-mono text-[10px] font-black text-[#FFD600] dark:text-[#E8C400] uppercase"
                          >
                            {it}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {sec.type === "tags" && sec.items && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {sec.items.map((t) => (
                      <span
                        key={t}
                        className="bg-[#111111] text-[#FFD600] dark:text-[#E8C400] px-2.5 py-1 rounded border border-black font-mono text-[11px] font-bold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          /* Legacy fallback section rendering */
          <>
            {item.whatItIs && item.whatItIs.length > 0 && (
              <div className="mb-4 bg-[#F7F7F2] dark:bg-[#272727] border-2 border-[#111111] dark:border-[#77756F] p-3 rounded-xl font-mono text-xs">
                <span className="font-black text-[#635BFF] dark:text-[#E8C400] block mb-1.5 uppercase">
                  01 — WHAT IT IS:
                </span>
                <div className="space-y-1 font-bold text-[#111111]/80 dark:text-[#B8B6AE]">
                  {item.whatItIs.map((w, idx) => (
                    <div key={idx}>• {w}</div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* WHY IN LAB BADGE */}
        {item.whyInLab && (
          <div className="bg-[#FFD600] dark:bg-[#E8C400] text-[#111111] p-3 border-2 border-[#111111] rounded-xl font-mono text-xs mb-4 brutal-shadow-sm">
            <strong className="block font-black uppercase text-[11px] mb-1 text-[#111111]">
              WHY THIS IS IN THE LAB:
            </strong>
            <span className="font-bold leading-tight">{item.whyInLab}</span>
          </div>
        )}

        {/* Source Website Info */}
        {item.sourceWebsite && (
          <div className="mb-4 bg-[#F7F7F2] dark:bg-[#272727] border-2 border-[#111111] dark:border-[#77756F] p-3 rounded-xl font-mono text-xs">
            <span className="font-black text-[#635BFF] dark:text-[#E8C400] block mb-1 uppercase">
              VERIFIED TARGET WEBSITE:
            </span>
            <div className="font-bold text-[#111111] dark:text-[#E8E6DF]">
              <a href={item.sourceWebsite.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#635BFF] dark:hover:text-[#E8C400]">
                {item.sourceWebsite.name} ↗
              </a>
              <span className="block text-[11px] text-[#111111]/70 dark:text-[#9F9D96] font-normal mt-0.5">
                {item.sourceWebsite.note}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Code Snippet Accordion */}
      <div>
        {item.snippet && (
          <div className="mb-4">
            <button
              onClick={() => setShowCode(!showCode)}
              className="w-full flex items-center justify-between font-mono text-xs font-black bg-[#F7F7F2] dark:bg-[#272727] text-[#111111] dark:text-[#E8E6DF] p-2.5 border-2 border-[#111111] dark:border-[#77756F] rounded-lg brutal-shadow-sm hover:bg-[#FFD600] hover:text-[#111111] dark:hover:bg-[#E8C400] dark:hover:text-[#111111] transition-colors"
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
              <pre className="mt-2 bg-[#111111] text-[#FFD600] dark:text-[#E8C400] p-4 rounded-xl border-2 border-[#111111] dark:border-[#77756F] font-mono text-xs overflow-x-auto leading-relaxed animate-in fade-in duration-150">
                <code>{item.snippet}</code>
              </pre>
            )}
          </div>
        )}

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] font-bold bg-[#D9D9D4] dark:bg-[#272727] text-[#111111] dark:text-[#E8E6DF] px-2 py-0.5 border border-[#111111] dark:border-[#77756F] rounded shadow-[1px_1px_0px_var(--shadow)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t-2 border-[#111111] dark:border-[#77756F] flex items-center justify-between text-xs font-mono font-bold text-[#111111] dark:text-[#E8E6DF]">
          <span>UPDATED: {item.updatedAt}</span>
          {item.githubUrl && (
            <a
              href={item.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border-2 border-[#111111] dark:border-[#77756F] bg-[#FFD600] dark:bg-[#E8C400] text-[#111111] font-black rounded-lg brutal-shadow-sm hover:bg-[#111111] hover:text-[#FFD600] transition-colors uppercase text-xs"
              aria-label={`GitHub repo for ${item.title}`}
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>VIEW CODE ↗</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
