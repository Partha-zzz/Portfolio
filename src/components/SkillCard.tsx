"use client";

import React from "react";
import { SkillGroup } from "@/data/skills";

interface SkillCardProps {
  group: SkillGroup;
}

export default function SkillCard({ group }: SkillCardProps) {
  return (
    <div className="bg-white dark:bg-[#222222] border-3 border-[#111111] dark:border-[#77756F] rounded-2xl p-5 sm:p-6 md:p-8 brutal-shadow-md brutal-card-hover flex flex-col justify-between transition-colors">
      <div>
        {/* Header container with flex-wrap and gap protection */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 border-b-2 border-[#111111] dark:border-[#77756F] pb-4">
          <h3 className="font-black text-lg sm:text-xl md:text-2xl text-[#111111] dark:text-[#E8E6DF] uppercase tracking-tight break-words">
            {group.category}
          </h3>
          <span
            className="font-mono text-xs font-black uppercase px-2.5 py-1 border-2 border-[#111111] dark:border-[#77756F] rounded-md brutal-shadow-sm shrink-0 whitespace-nowrap"
            style={{
              backgroundColor: group.badgeBg,
              color: group.badgeText,
            }}
          >
            {group.skills.length} SKILLS
          </span>
        </div>

        {/* Skill list */}
        <div className="space-y-4">
          {group.skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-[#F7F7F2] dark:bg-[#272727] border-2 border-[#111111] dark:border-[#77756F] rounded-xl p-3.5 brutal-shadow-sm transition-all hover:-translate-y-0.5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <span className="font-extrabold text-base md:text-lg text-[#111111] dark:text-[#E8E6DF]">
                  {skill.name}
                </span>
                <div className="flex flex-wrap items-center gap-1.5 shrink-0">
                  {skill.tag && (
                    <span className="font-mono text-[10px] font-black bg-[#FFD600] text-[#111111] px-2 py-0.5 border border-[#111111] rounded">
                      {skill.tag}
                    </span>
                  )}
                  {skill.secondaryTag && (
                    <span className="font-mono text-[10px] font-black bg-[#FFD600] text-[#111111] px-2 py-0.5 border border-[#111111] rounded">
                      {skill.secondaryTag}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-xs md:text-sm font-medium text-[#111111]/80 dark:text-[#B8B6AE] leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
