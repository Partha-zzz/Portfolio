"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { ArrowRight, ArrowDown, Database, Cpu, Layout } from "lucide-react";

export default function WorkflowSection() {
  const stages = [
    {
      step: "01",
      name: "DATA",
      icon: Database,
      accentBg: "bg-[#FFD600]",
      accentText: "text-[#111111]",
      description: "Extracting, cleaning, and exploring complex datasets to uncover patterns.",
      tools: ["Python", "Pandas", "NumPy", "SQL", "Matplotlib"],
    },
    {
      step: "02",
      name: "MODEL",
      icon: Cpu,
      accentBg: "bg-[#635BFF]",
      accentText: "text-white",
      description: "Architecting, training, and evaluating predictive intelligent models.",
      tools: ["Scikit-learn", "TensorFlow", "Computer Vision", "Deep Learning"],
    },
    {
      step: "03",
      name: "PRODUCT",
      icon: Layout,
      accentBg: "bg-[#111111] dark:bg-[#E8E6DF]",
      accentText: "text-[#FFD600] dark:text-[#181818]",
      description: "Building production web interfaces and deploying functional user products.",
      tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Git & GitHub"],
    },
  ];

  return (
    <section id="workflow" className="my-16 md:my-24 scroll-mt-24">
      <SectionHeading
        number="02"
        title="FROM DATA → TO PRODUCT."
        subtitle="Visualizing my technical workflow and areas of focus as an aspiring Data Scientist & ML Engineer."
        badge="WORKFLOW"
        badgeColor="purple"
      />

      <div className="bg-white dark:bg-[#222222] border-3 border-[#111111] dark:border-[#77756F] rounded-2xl p-6 md:p-10 brutal-shadow-lg transition-colors">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch relative">
          {stages.map((stage, idx) => {
            const IconComponent = stage.icon;
            return (
              <React.Fragment key={stage.step}>
                {/* Stage Card */}
                <div className="flex flex-col justify-between bg-[#F7F7F2] dark:bg-[#272727] border-3 border-[#111111] dark:border-[#77756F] rounded-xl p-6 brutal-shadow transition-transform hover:-translate-y-1">
                  <div>
                    {/* Header: Number Badge & Name */}
                    <div className="flex items-center justify-between gap-4 mb-4 border-b-2 border-[#111111] dark:border-[#77756F] pb-4">
                      <div className="flex items-center gap-3">
                        <span className={`font-mono text-sm font-black px-3 py-1 border-2 border-[#111111] dark:border-[#77756F] rounded-md ${stage.accentBg} ${stage.accentText}`}>
                          {stage.step}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-[#111111] dark:text-[#E8E6DF] uppercase tracking-tight">
                          {stage.name}
                        </h3>
                      </div>
                      <IconComponent className="w-6 h-6 text-[#111111] dark:text-[#E8E6DF] stroke-[2.5]" />
                    </div>

                    <p className="text-sm font-medium text-[#111111]/80 dark:text-[#B8B6AE] mb-6 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  {/* Tools / Tech Stack List */}
                  <div>
                    <span className="block font-mono text-xs font-black text-[#111111]/60 dark:text-[#9F9D96] uppercase tracking-widest mb-3">
                      KEY TOOLING & STACK
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {stage.tools.map((tool) => (
                        <span
                          key={tool}
                          className="font-mono text-xs font-extrabold px-3 py-1.5 bg-white dark:bg-[#222222] text-[#111111] dark:text-[#E8E6DF] border-2 border-[#111111] dark:border-[#77756F] rounded-md brutal-shadow-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Flow Connector Arrow between stages */}
                {idx < stages.length - 1 && (
                  <div className="flex lg:hidden items-center justify-center py-2">
                    <div className="bg-[#FFD600] text-[#111111] p-3 border-3 border-[#111111] dark:border-[#77756F] rounded-full brutal-shadow-sm">
                      <ArrowDown className="w-6 h-6 stroke-[3]" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Bottom Editorial Banner summarizing the flow */}
        <div className="mt-8 pt-6 border-t-3 border-[#111111] dark:border-[#77756F] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#FFD600] text-[#111111] p-4 md:p-6 rounded-xl border-3 border-[#111111] dark:border-[#77756F] brutal-shadow-sm">
          <p className="font-mono font-black text-sm md:text-base uppercase tracking-tight text-center sm:text-left">
            I work with data, turn data into models, and turn models into usable software.
          </p>
          <div className="hidden lg:flex items-center gap-2 font-mono font-black text-xs bg-white text-[#111111] px-4 py-2 border-2 border-[#111111] rounded-lg shrink-0">
            <span>DATA</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
            <span>MODEL</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
            <span>PRODUCT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
