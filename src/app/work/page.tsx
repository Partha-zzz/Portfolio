"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/data/projects";
import { Filter, Search } from "lucide-react";

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "ALL",
    ...Array.from(new Set(PROJECTS.map((p) => p.category))),
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory =
      selectedCategory === "ALL" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const individualProjects = filteredProjects.filter(
    (p) => p.classification === "INDIVIDUAL PROJECT"
  );
  const collaborativeProjects = filteredProjects.filter(
    (p) => p.classification !== "INDIVIDUAL PROJECT"
  );

  return (
    <div className="space-y-12 py-6">
      {/* Header */}
      <SectionHeading
        number="01"
        title="ALL WORK."
        subtitle="Explore my complete portfolio of Machine Learning, AI platforms, and Data Science software projects."
        badge="PROJECT ARCHIVE"
        badgeColor="yellow"
      />

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 brutal-shadow-md space-y-4 transition-colors">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#111111]/60 dark:text-[#F7F7F2]/60 stroke-[3]" />
            <input
              type="text"
              placeholder="Search by keyword or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] rounded-lg pl-10 pr-4 py-2.5 font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2] placeholder:text-[#111111]/50 dark:placeholder:text-[#F7F7F2]/50 focus:outline-none focus:ring-2 focus:ring-[#635BFF]"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#111111]/70 dark:text-[#F7F7F2]/70 mr-2">
              <Filter className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>FILTER:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-mono text-xs font-bold px-3 py-1.5 border-2 border-[#111111] dark:border-[#F7F7F2] rounded-lg brutal-shadow-sm transition-all ${
                  selectedCategory === cat
                    ? "bg-[#FFD600] text-[#111111] translate-x-[1px] translate-y-[1px]"
                    : "bg-[#F7F7F2] dark:bg-[#242424] text-[#111111] dark:text-[#F7F7F2] hover:bg-white dark:hover:bg-[#303030]"
                }`}
              >
                {cat === "ALL" ? "SHOW ALL" : cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Display */}
      {filteredProjects.length > 0 ? (
        <div className="space-y-14">
          {/* INDIVIDUAL WORK SECTION */}
          {individualProjects.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b-3 border-[#111111] dark:border-[#F7F7F2] pb-3">
                <span className="font-mono text-xs font-black uppercase tracking-widest px-3 py-1 border-2 border-[#111111] dark:border-[#F7F7F2] rounded bg-[#FFD600] text-[#111111] brutal-shadow-sm">
                  SECTION 01
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight">
                  MY WORK
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {individualProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          )}

          {/* COLLABORATIVE WORK SECTION */}
          {collaborativeProjects.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b-3 border-[#111111] dark:border-[#F7F7F2] pb-3">
                <span className="font-mono text-xs font-black uppercase tracking-widest px-3 py-1 border-2 border-[#111111] dark:border-[#F7F7F2] rounded bg-[#635BFF] text-white brutal-shadow-sm">
                  SECTION 02
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight">
                  COLLABORATIVE WORK
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {collaborativeProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-12 text-center brutal-shadow-md text-[#111111] dark:text-[#F7F7F2]">
          <h3 className="font-extrabold text-2xl uppercase mb-2">
            No projects found
          </h3>
          <p className="font-mono text-xs text-[#111111]/70 dark:text-[#F7F7F2]/70 font-bold">
            Try adjusting your search filter or selecting &quot;SHOW ALL&quot;.
          </p>
        </div>
      )}
    </div>
  );
}

