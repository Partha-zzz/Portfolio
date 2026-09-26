"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { Project } from "@/data/projects";
import BrutalButton from "./BrutalButton";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group relative bg-white dark:bg-[#222222] border-3 border-[#111111] dark:border-[#77756F] rounded-2xl p-6 md:p-8 brutal-shadow-md hover:shadow-[10px_10px_0px_var(--shadow)] flex flex-col justify-between overflow-hidden transition-all duration-200 w-full"
    >
      {/* Top Banner & Number */}
      <div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="font-mono text-xs md:text-sm font-black uppercase tracking-widest px-3 py-1 border-2 border-[#111111] dark:border-[#77756F] rounded-md bg-[#FFD600] dark:bg-[#E8C400] text-[#111111] brutal-shadow-sm">
            {project.category}
          </span>
          <span className="font-mono text-xl md:text-2xl font-black text-[#111111]/40 dark:text-[#E8E6DF]/40 group-hover:text-[#635BFF] dark:group-hover:text-[#E8C400] transition-colors">
            /{project.number}
          </span>
        </div>

        {/* Thumbnail Visual Container */}
        <div
          className="w-full aspect-[16/9] mb-6 border-3 border-[#111111] dark:border-[#77756F] rounded-xl relative overflow-hidden flex items-center justify-center p-6 transition-transform duration-300 group-hover:scale-[1.01]"
          style={{ backgroundColor: project.imageBg }}
        >
          {/* Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#111111_2px,transparent_2px)] [background-size:16px_16px]" />

          <div className="relative z-10 text-center">
            <span className="font-black text-2xl sm:text-3xl md:text-4xl tracking-tighter text-[#111111] bg-white px-4 py-2 border-3 border-[#111111] rounded-lg brutal-shadow-sm inline-block uppercase">
              {project.title}
            </span>
          </div>

          <div className="absolute bottom-3 right-3 z-10 font-mono text-xs font-bold bg-[#111111] text-white px-2.5 py-1 rounded border border-[#111111]">
            CASE STUDY ➔
          </div>
        </div>

        {/* Title & Short Description */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111111] dark:text-[#E8E6DF] uppercase tracking-tight mb-3 group-hover:text-[#635BFF] dark:group-hover:text-[#E8C400] transition-colors">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base font-medium text-[#111111]/80 dark:text-[#B8B6AE] leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      {/* Tech Tags & Links */}
      <div>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs font-bold bg-[#F7F7F2] dark:bg-[#272727] text-[#111111] dark:text-[#E8E6DF] px-2.5 py-1 border border-[#111111] dark:border-[#77756F] rounded shadow-[2px_2px_0px_var(--shadow-color)]"
            >
              #{tech}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t-2 border-[#111111] dark:border-[#77756F] flex flex-wrap items-center justify-between gap-3">
          <BrutalButton
            href={`/projects/${project.slug}`}
            variant="yellow"
            size="sm"
            icon
          >
            VIEW CASE STUDY
          </BrutalButton>

          <div className="flex items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-[#111111] dark:border-[#77756F] bg-white dark:bg-[#272727] text-[#111111] dark:text-[#E8E6DF] hover:bg-[#635BFF] hover:text-white dark:hover:bg-[#E8C400] dark:hover:text-[#111111] rounded-lg brutal-shadow-sm transition-colors"
              aria-label={`GitHub Repository for ${project.title}`}
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border-2 border-[#111111] dark:border-[#F7F7F2] bg-[#FFD600] hover:bg-[#ffe033] text-[#111111] rounded-lg brutal-shadow-sm transition-colors"
                aria-label={`Live Demo for ${project.title}`}
              >
                <ExternalLink className="w-5 h-5 stroke-[2.5]" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
