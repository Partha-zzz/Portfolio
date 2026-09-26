"use client";

import React from "react";
import HeroIllustration from "@/components/HeroIllustration";
import HeroInfoCards from "@/components/HeroInfoCards";
import SectionHeading from "@/components/SectionHeading";
import ProjectGrid from "@/components/ProjectGrid";
import WorkflowSection from "@/components/WorkflowSection";
import BuildLog from "@/components/BuildLog";
import SkillCard from "@/components/SkillCard";
import LabPreviewCard from "@/components/LabPreviewCard";
import ContactCTA from "@/components/ContactCTA";
import BrutalButton from "@/components/BrutalButton";
import FeaturedCredentials from "@/components/FeaturedCredentials";

import { PROJECTS } from "@/data/projects";
import { SKILL_GROUPS } from "@/data/skills";
import { LAB_ITEMS } from "@/data/lab";

import MetricsStrip from "@/components/MetricsStrip";

import { useScroll, useTransform, motion } from "framer-motion";

function HeroSectionContent() {
  const { scrollY } = useScroll();

  // Subtle scroll parallax deconstruction for hero typography lines
  const buildY = useTransform(scrollY, [0, 400], [0, -18]);
  const intelligentY = useTransform(scrollY, [0, 400], [0, -8]);
  const systemsY = useTransform(scrollY, [0, 400], [0, 10]);
  const illustrationY = useTransform(scrollY, [0, 400], [0, 24]);

  return (
    <section className="pt-4 md:pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column Text Content */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-block bg-[#FFD600] text-[#111111] font-mono text-xs md:text-sm font-black px-3.5 py-1.5 border-2 border-[#111111] dark:border-[#77756F] rounded-md brutal-shadow-sm uppercase tracking-widest">
            CSE × AI/ML
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-[#111111] dark:text-[#E8E6DF] uppercase tracking-tighter leading-[0.88]">
            <motion.span style={{ y: buildY }} className="inline-block">
              I BUILD
            </motion.span>{" "}
            <br />
            <motion.span
              style={{ y: intelligentY }}
              className="bg-[#635BFF] text-white px-3 py-1 border-3 border-[#111111] dark:border-[#77756F] inline-block my-1 rounded-xl shadow-[6px_6px_0px_var(--shadow)]"
            >
              INTELLIGENT
            </motion.span>{" "}
            <br />
            <motion.span style={{ y: systemsY }} className="inline-block">
              SYSTEMS.
            </motion.span>
          </h1>

          <p className="text-base sm:text-xl font-medium text-[#111111]/85 dark:text-[#B8B6AE] max-w-2xl leading-relaxed border-l-4 border-[#FFD600] pl-4 py-1">
            Computer Science & Engineering student exploring machine learning,
            data science and software engineering through real-world projects.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <BrutalButton href="/work" variant="yellow" size="lg">
              VIEW MY WORK
            </BrutalButton>

            <BrutalButton
              href="https://github.com/Partha-zzz"
              variant="white"
              size="lg"
              external
              icon
            >
              GITHUB
            </BrutalButton>
          </div>
        </div>

        {/* Right Column Custom Neo-Brutalist Illustration */}
        <motion.div style={{ y: illustrationY }} className="lg:col-span-5">
          <HeroIllustration />
        </motion.div>
      </div>

      {/* Hero Information Cards */}
      <HeroInfoCards />
    </section>
  );
}

export default function Home() {
  // Summary page displays exactly TWO selected projects as preview
  const selectedProjects = PROJECTS.filter((p) => p.featured).slice(0, 2);
  const featuredLabItems = LAB_ITEMS.slice(0, 3);

  return (
    <div className="space-y-16 md:space-y-28">
      {/* ================= HERO SECTION ================= */}
      <HeroSectionContent />

      {/* ================= METRICS STRIP ================= */}
      <MetricsStrip />

      {/* ================= SELECTED WORK (EXACTLY 2 PROJECTS) ================= */}
      <section id="work" className="scroll-mt-24">
        <SectionHeading
          number="01"
          title="SELECTED WORK."
          subtitle="Featured projects where data, code and ideas turn into something usable."
          badge="FEATURED PREVIEW"
          badgeColor="yellow"
        />

        <ProjectGrid projects={selectedProjects} />

        <div className="mt-12 text-center">
          <BrutalButton href="/work" variant="purple" size="lg" icon>
            VIEW ALL PROJECTS →
          </BrutalButton>
        </div>
      </section>

      {/* ================= WORKFLOW SECTION ================= */}
      <WorkflowSection />

      {/* ================= SKILLS SECTION ================= */}
      <section id="skills" className="scroll-mt-24">
        <SectionHeading
          number="03"
          title="SKILLS & TOOLING."
          subtitle="Core programming languages, machine learning frameworks, and software development technologies."
          badge="TECHNICAL CAPABILITIES"
          badgeColor="white"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_GROUPS.map((group) => (
            <SkillCard key={group.category} group={group} />
          ))}
        </div>
      </section>

      {/* ================= FEATURED CREDENTIALS PREVIEW ================= */}
      <FeaturedCredentials />

      {/* ================= THE LAB PREVIEW ================= */}
      <section id="lab" className="scroll-mt-24">
        <SectionHeading
          number="04"
          title="THE LAB."
          subtitle="NOT EVERYTHING NEEDS TO BE A PRODUCT. Experiments, learning projects, and active prototypes."
          badge="EXPERIMENTS"
          badgeColor="yellow"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredLabItems.map((item) => (
            <LabPreviewCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <BrutalButton href="/lab" variant="black" size="lg">
            EXPLORE THE FULL LAB →
          </BrutalButton>
        </div>
      </section>

      {/* ================= BUILD LOG ================= */}
      <BuildLog />

      {/* ================= CONTACT CTA (SUMMARY PAGE ONLY) ================= */}
      <ContactCTA />
    </div>
  );
}
