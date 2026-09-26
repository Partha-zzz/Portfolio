"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";
import BrutalButton from "@/components/BrutalButton";
import { SKILL_GROUPS } from "@/data/skills";
import {
  GraduationCap,
  Sparkles,
  Rocket,
  Brain,
  Tv,
  BookOpen,
  Film,
  Search,
  Compass,
} from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="space-y-16 md:space-y-24 py-6">
      {/* ================= HERO SECTION WITH PHOTO ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Typography & Introduction */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-block bg-[#635BFF] text-white font-mono text-xs md:text-sm font-black px-3.5 py-1.5 border-2 border-[#111111] dark:border-[#F7F7F2] rounded-md brutal-shadow-sm uppercase tracking-widest">
            DEVELOPER PROFILE ⚡
          </div>

          <h1 className="text-6xl sm:text-8xl md:text-9xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tighter leading-[0.88]">
            WHO <br />
            <span className="bg-[#FFD600] text-[#111111] px-4 py-1 border-3 border-[#111111] dark:border-[#F7F7F2] inline-block my-1 rounded-2xl shadow-[8px_8px_0px_var(--shadow)]">
              AM I?
            </span>
          </h1>

          <p className="text-xl sm:text-2xl font-bold text-[#111111] dark:text-[#F7F7F2] leading-relaxed border-l-4 border-[#635BFF] pl-4 py-2 bg-white dark:bg-[#1A1A1A] border-2 border-[#111111] dark:border-[#F7F7F2] rounded-xl brutal-shadow-sm p-6">
            &quot;I&apos;m a Computer Science & Engineering student interested in
            machine learning, data science and building useful software
            systems.&quot;
          </p>
        </div>

        {/* Right Column: Profile Photo Card */}
        <div className="lg:col-span-5 max-w-md mx-auto lg:max-w-none w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -3, rotate: 0 }}
            className="relative bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-4 sm:p-5 brutal-shadow-lg rotate-[-1deg] transition-all"
          >
            {/* Top Tape Pin */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#FFD600]/80 dark:bg-[#FFD600]/60 border border-[#111111] dark:border-[#F7F7F2] rounded-sm brutal-shadow-sm rotate-[-2deg] z-20" />

            {/* Photo Container */}
            <div className="w-full aspect-[4/5] border-2 border-[#111111] dark:border-[#F7F7F2] rounded-xl relative overflow-hidden bg-[#F7F7F2] dark:bg-[#242424] mb-3">
              <Image
                src="/partha.jpg"
                alt="Partha Sarathi Sarkar"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-center rounded-lg"
              />
            </div>

            {/* Photo Footer Label */}
            <div className="flex items-center justify-between pt-1">
              <span className="font-mono text-xs font-black uppercase text-[#111111] dark:text-[#F7F7F2] tracking-wider">
                PARTHA S. SARKAR
              </span>
              <span className="font-mono text-[10px] font-black bg-[#FFD600] text-[#111111] px-2.5 py-0.5 border border-[#111111] rounded shadow-[1px_1px_0px_#111111] uppercase">
                THAT&apos;S ME ➔
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= VISUAL INFORMATION GRID CARDS ================= */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* CARD 1: EDUCATION */}
        <div className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-8 brutal-shadow-md brutal-card-hover flex flex-col justify-between transition-colors">
          <div>
            <div className="flex items-center justify-between border-b-2 border-[#111111] dark:border-[#F7F7F2] pb-4 mb-4">
              <span className="font-mono text-xs font-black uppercase bg-[#FFD600] text-[#111111] px-3 py-1 border border-[#111111] rounded shadow-[2px_2px_0px_var(--shadow)]">
                BACKGROUND
              </span>
              <GraduationCap className="w-6 h-6 text-[#111111] dark:text-[#F7F7F2] stroke-[2.5]" />
            </div>

            <h3 className="font-black text-2xl md:text-3xl text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
              EDUCATION & CORE
            </h3>
            <div className="space-y-3 font-medium text-base text-[#111111]/90 dark:text-[#F7F7F2]/90">
              <p>
                <strong className="font-bold text-[#111111] dark:text-[#F7F7F2]">Degree:</strong> Computer
                Science & Engineering Student
              </p>
              <p>
                <strong className="font-bold text-[#111111] dark:text-[#F7F7F2]">Specialization:</strong> Artificial
                Intelligence, Machine Learning & Software Engineering
              </p>
              <p className="text-sm text-[#111111]/75 dark:text-[#F7F7F2]/75 leading-relaxed pt-2 border-t border-[#111111]/20 dark:border-[#F7F7F2]/20">
                Focusing on core computer science foundations, algorithm design, data structures, linear algebra, probability, and modern software development pipelines.
              </p>
            </div>
          </div>
          <div className="mt-6 font-mono text-xs font-bold text-[#635BFF] dark:text-[#FFD600]">
            STATUS: ACTIVE ENROLLMENT
          </div>
        </div>

        {/* CARD 2: FOCUS AREAS */}
        <div className="bg-[#635BFF] text-white border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-8 brutal-shadow-md brutal-card-hover flex flex-col justify-between transition-colors">
          <div>
            <div className="flex items-center justify-between border-b-2 border-white/30 pb-4 mb-4">
              <span className="font-mono text-xs font-black uppercase bg-[#FFD600] text-[#111111] px-3 py-1 border border-[#111111] rounded shadow-[2px_2px_0px_var(--shadow)]">
                SPEC
              </span>
              <Brain className="w-6 h-6 text-white stroke-[2.5]" />
            </div>

            <h3 className="font-black text-2xl md:text-3xl text-white uppercase tracking-tight mb-4">
              AREAS EXPLORED
            </h3>
            <ul className="space-y-3 font-bold text-base">
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[#FFD600] border border-black rounded-sm" />
                Supervised & Unsupervised Machine Learning
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-white border border-black rounded-sm" />
                Computer Vision & Image Processing
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[#FFD600] border border-black rounded-sm" />
                Exploratory Data Analysis & Relational SQL
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-white border border-black rounded-sm" />
                Full-Stack Web Application Architecture
              </li>
            </ul>
          </div>
          <div className="mt-6 font-mono text-xs font-bold text-white/80">
            PRACTICAL APPLIED WORK
          </div>
        </div>

        {/* CARD 3: CURRENTLY LEARNING */}
        <div className="bg-[#FFD600] text-[#111111] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-8 brutal-shadow-md brutal-card-hover flex flex-col justify-between transition-colors">
          <div>
            <div className="flex items-center justify-between border-b-2 border-[#111111] pb-4 mb-4">
              <span className="font-mono text-xs font-black uppercase bg-white text-[#111111] px-3 py-1 border border-[#111111] rounded shadow-[2px_2px_0px_#111111]">
                ROADMAP
              </span>
              <Sparkles className="w-6 h-6 text-[#111111] stroke-[2.5]" />
            </div>

            <h3 className="font-black text-2xl md:text-3xl text-[#111111] uppercase tracking-tight mb-4">
              CURRENTLY LEARNING
            </h3>
            <div className="space-y-3 font-bold text-base text-[#111111]">
              <p className="flex items-start gap-2">
                <span className="font-mono text-xs text-[#635BFF] font-black uppercase mt-1">
                  01/
                </span>
                Deep Learning Architectures (CNNs, Transformers & Model Tuning)
              </p>
              <p className="flex items-start gap-2">
                <span className="font-mono text-xs text-[#635BFF] font-black uppercase mt-1">
                  02/
                </span>
                Optimized Inference API Deployment & Serverless Integration
              </p>
              <p className="flex items-start gap-2">
                <span className="font-mono text-xs text-[#635BFF] font-black uppercase mt-1">
                  03/
                </span>
                Advanced Data Analytics Pipelines & SQL Optimization
              </p>
            </div>
          </div>
          <div className="mt-6 font-mono text-xs font-bold text-[#111111]/80">
            CONTINUOUS GROWTH
          </div>
        </div>

        {/* CARD 4: WHAT I LIKE BUILDING */}
        <div className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-8 brutal-shadow-md brutal-card-hover flex flex-col justify-between transition-colors">
          <div>
            <div className="flex items-center justify-between border-b-2 border-[#111111] dark:border-[#F7F7F2] pb-4 mb-4">
              <span className="font-mono text-xs font-black uppercase bg-[#635BFF] text-white px-3 py-1 border border-[#111111] rounded shadow-[2px_2px_0px_var(--shadow)]">
                VISION
              </span>
              <Rocket className="w-6 h-6 text-[#111111] dark:text-[#F7F7F2] stroke-[2.5]" />
            </div>

            <h3 className="font-black text-2xl md:text-3xl text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
              WHAT I LIKE BUILDING
            </h3>
            <p className="text-base font-medium text-[#111111]/85 dark:text-[#F7F7F2]/85 leading-relaxed mb-4">
              Software where intelligent algorithms meet intuitive user interfaces. I enjoy converting complex mathematical models into practical tools that solve real-world problems in agriculture, education, and analytical decision-making.
            </p>
          </div>
          <div className="mt-4 pt-4 border-t-2 border-[#111111] dark:border-[#F7F7F2]">
            <BrutalButton href="/work" variant="yellow" size="sm" icon>
              CHECK MY PROJECTS
            </BrutalButton>
          </div>
        </div>
      </section>

      {/* ================= SKILLS SHOWCASE ================= */}
      <section>
        <SectionHeading
          number="02"
          title="COMPLETE SKILLS ARCHITECTURE."
          subtitle="A breakdown of my technical stack across software development, data science, and AI."
          badge="CAPABILITIES"
          badgeColor="yellow"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_GROUPS.map((group) => (
            <SkillCard key={group.category} group={group} />
          ))}
        </div>
      </section>

      {/* ================= BEYOND THE CODE (PERSONAL INTERESTS) ================= */}
      <section>
        <SectionHeading
          number="03"
          title="BEYOND THE CODE."
          subtitle="Outside of building things, I'm usually reading, watching something, or falling down a rabbit hole researching a completely random topic."
          badge="PERSONAL INTERESTS"
          badgeColor="purple"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* HOBBY 01: WATCHING ANIME */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-8 brutal-shadow-md flex flex-col justify-between transition-all"
          >
            <div>
              <div className="flex items-center justify-between border-b-2 border-[#111111] dark:border-[#F7F7F2] pb-4 mb-4">
                <span className="font-mono text-xs font-black uppercase bg-[#FFD600] text-[#111111] px-3 py-1 border border-[#111111] rounded shadow-[2px_2px_0px_var(--shadow)]">
                  ANIME
                </span>
                <Tv className="w-6 h-6 text-[#111111] dark:text-[#F7F7F2] stroke-[2.5]" />
              </div>

              <div className="font-mono text-xs font-bold text-[#635BFF] dark:text-[#FFD600] uppercase mb-1">
                01 / MEDIA & ART
              </div>
              <h3 className="font-black text-2xl md:text-3xl text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-3">
                WATCHING ANIME
              </h3>
              <p className="text-sm md:text-base font-medium text-[#111111]/80 dark:text-[#F7F7F2]/80 leading-relaxed">
                I enjoy watching anime and exploring different genres, stories, characters and visual storytelling.
              </p>
            </div>
          </motion.div>

          {/* HOBBY 02: READING NOVELS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-8 brutal-shadow-md flex flex-col justify-between transition-all"
          >
            <div>
              <div className="flex items-center justify-between border-b-2 border-[#111111] dark:border-[#F7F7F2] pb-4 mb-4">
                <span className="font-mono text-xs font-black uppercase bg-[#FFD600] text-[#111111] px-3 py-1 border border-[#111111] rounded shadow-[2px_2px_0px_var(--shadow)]">
                  READING
                </span>
                <BookOpen className="w-6 h-6 text-[#111111] dark:text-[#F7F7F2] stroke-[2.5]" />
              </div>

              <div className="font-mono text-xs font-bold text-[#635BFF] dark:text-[#FFD600] uppercase mb-1">
                02 / LITERATURE & FICTION
              </div>
              <h3 className="font-black text-2xl md:text-3xl text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-3">
                READING NOVELS
              </h3>
              <p className="text-sm md:text-base font-medium text-[#111111]/80 dark:text-[#F7F7F2]/80 leading-relaxed mb-4">
                I enjoy reading novels and fiction.
              </p>
            </div>

            {/* Visual Metric Badge inside Card */}
            <div className="bg-[#FFD600] text-[#111111] border-2 border-[#111111] rounded-xl p-3.5 brutal-shadow-sm flex items-center gap-3">
              <span className="font-extrabold text-3xl sm:text-4xl font-mono leading-none">
                15+
              </span>
              <span className="font-mono text-xs font-black uppercase leading-tight">
                NOVELS READ <br /> THIS YEAR
              </span>
            </div>
          </motion.div>

          {/* HOBBY 03: WATCHING SERIES & MOVIES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-8 brutal-shadow-md flex flex-col justify-between transition-all"
          >
            <div>
              <div className="flex items-center justify-between border-b-2 border-[#111111] dark:border-[#F7F7F2] pb-4 mb-4">
                <span className="font-mono text-xs font-black uppercase bg-[#635BFF] text-white px-3 py-1 border border-[#111111] rounded shadow-[2px_2px_0px_var(--shadow)]">
                  SCREEN
                </span>
                <Film className="w-6 h-6 text-[#111111] dark:text-[#F7F7F2] stroke-[2.5]" />
              </div>

              <div className="font-mono text-xs font-bold text-[#635BFF] dark:text-[#FFD600] uppercase mb-1">
                03 / CINEMA & DRAMA
              </div>
              <h3 className="font-black text-2xl md:text-3xl text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-3">
                WATCHING SERIES & MOVIES
              </h3>
              <p className="text-sm md:text-base font-medium text-[#111111]/80 dark:text-[#F7F7F2]/80 leading-relaxed">
                I enjoy watching series and movies, especially when the storytelling, characters or ideas give me something interesting to think about.
              </p>
            </div>
          </motion.div>

          {/* HOBBY 04: RESEARCHING RANDOM THINGS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-8 brutal-shadow-md flex flex-col justify-between transition-all"
          >
            <div>
              <div className="flex items-center justify-between border-b-2 border-[#111111] dark:border-[#F7F7F2] pb-4 mb-4">
                <span className="font-mono text-xs font-black uppercase bg-[#FFD600] text-[#111111] px-3 py-1 border border-[#111111] rounded shadow-[2px_2px_0px_var(--shadow)]">
                  CURIOSITY
                </span>
                <Search className="w-6 h-6 text-[#111111] dark:text-[#F7F7F2] stroke-[2.5]" />
              </div>

              <div className="font-mono text-xs font-bold text-[#635BFF] dark:text-[#FFD600] uppercase mb-1">
                04 / DEEP DIVES
              </div>
              <h3 className="font-black text-2xl md:text-3xl text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-3">
                RESEARCHING RANDOM THINGS
              </h3>
              <p className="text-sm md:text-base font-medium text-[#111111]/80 dark:text-[#F7F7F2]/80 leading-relaxed mb-3">
                I have a habit of researching things that catch my attention — driven by curiosity and continuous learning across diverse domains.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 font-mono text-xs font-black bg-[#F7F7F2] dark:bg-[#242424] text-[#111111] dark:text-[#F7F7F2] px-3 py-1.5 border border-[#111111] dark:border-[#F7F7F2] rounded-lg w-fit">
              <span className="text-[#635BFF] dark:text-[#FFD600]">TOPICS:</span>
              <span>TECH + NON-TECH</span>
            </div>
          </motion.div>

          {/* HOBBY 05: PHILOSOPHY & PSYCHOLOGY (FULL WIDTH FEATURE CARD) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="md:col-span-2 bg-[#635BFF] text-white border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-8 brutal-shadow-md flex flex-col justify-between transition-all"
          >
            <div>
              <div className="flex items-center justify-between border-b-2 border-white/30 pb-4 mb-4">
                <span className="font-mono text-xs font-black uppercase bg-[#FFD600] text-[#111111] px-3 py-1 border border-[#111111] rounded shadow-[2px_2px_0px_var(--shadow)]">
                  MIND / MEANING
                </span>
                <Compass className="w-6 h-6 text-white stroke-[2.5]" />
              </div>

              <div className="font-mono text-xs font-bold text-[#FFD600] uppercase mb-1">
                05 / HUMAN BEHAVIOR & THOUGHT
              </div>
              <h3 className="font-black text-2xl md:text-3xl text-white uppercase tracking-tight mb-3">
                PHILOSOPHY & PSYCHOLOGY
              </h3>
              <p className="text-sm md:text-base font-bold text-white/95 leading-relaxed max-w-3xl mb-4">
                I have a strong interest in philosophy and psychology. I enjoy exploring fundamental questions around human behavior, thought, consciousness, relationships, meaning, and how people perceive the world.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/20 font-mono text-xs font-extrabold text-white/90">
              <span className="px-2.5 py-1 bg-white/10 rounded border border-white/20">HUMAN BEHAVIOR</span>
              <span className="px-2.5 py-1 bg-white/10 rounded border border-white/20">CONSCIOUSNESS</span>
              <span className="px-2.5 py-1 bg-white/10 rounded border border-white/20">RELATIONSHIPS</span>
              <span className="px-2.5 py-1 bg-white/10 rounded border border-white/20">PERCEPTION</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
