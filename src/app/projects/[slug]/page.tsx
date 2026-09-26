import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import BrutalButton from "@/components/BrutalButton";
import {
  ArrowLeft,
  CheckCircle2,
  Lightbulb,
  AlertTriangle,
  Cpu,
  BookOpen,
  Zap,
  Globe,
  Users,
  Activity,
  Radio,
  Lock,
  Wrench,
  Eye,
  Network,
  MapPin,
  Flame,
  Layers,
  Sparkles,
  ShieldCheck,
  Database,
  BarChart2,
  Filter,
  FileSpreadsheet,
} from "lucide-react";
import InteractiveMLPipeline from "@/components/InteractiveMLPipeline";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Case Study | Partha`,
    description: project.description,
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const isBharatFarm = project.slug === "bharatfarm";
  const isResQAI = project.slug === "resqai";
  const isIPLMind = project.slug === "iplmind";
  const isDataAnalytics = project.slug === "data-analytics";
  const isCaliforniaHousing = project.slug === "california-housing-predictor";

  return (
    <article className="space-y-12 py-6">
      {/* Back Navigation */}
      <div>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-mono text-xs md:text-sm font-black bg-white dark:bg-[#1A1A1A] text-[#111111] dark:text-[#F7F7F2] px-4 py-2 border-2 border-[#111111] dark:border-[#F7F7F2] rounded-lg brutal-shadow-sm hover:bg-[#FFD600] hover:text-[#111111] dark:hover:bg-[#FFD600] dark:hover:text-[#111111] transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4 stroke-[3]" />
          BACK TO ALL PROJECTS
        </Link>
      </div>

      {/* Case Study Header */}
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-sm font-black bg-[#111111] dark:bg-[#F7F7F2] text-[#FFD600] dark:text-[#111111] px-3 py-1 rounded border border-[#111111] dark:border-[#F7F7F2]">
            PROJECT /{project.number}
          </span>
          <span className="font-mono text-xs md:text-sm font-black bg-[#FFD600] text-[#111111] px-3 py-1 border-2 border-[#111111] dark:border-[#F7F7F2] rounded uppercase">
            {project.category}
          </span>
          {isIPLMind && (
            <span className="font-mono text-xs font-black bg-[#635BFF] text-white px-3 py-1 border-2 border-[#111111] dark:border-[#F7F7F2] rounded uppercase">
              AI × CRICKET × INFERENCE
            </span>
          )}
          {isResQAI && (
            <span className="font-mono text-xs font-black bg-[#635BFF] text-white px-3 py-1 border-2 border-[#111111] dark:border-[#F7F7F2] rounded uppercase">
              AI × CRISIS RESPONSE
            </span>
          )}
          {isBharatFarm && (
            <span className="font-mono text-xs font-black bg-[#635BFF] text-white px-3 py-1 border-2 border-[#111111] dark:border-[#F7F7F2] rounded uppercase">
              AI × AGRICULTURE
            </span>
          )}
          {isCaliforniaHousing && (
            <span className="font-mono text-xs font-black bg-[#635BFF] text-white px-3 py-1 border-2 border-[#111111] dark:border-[#F7F7F2] rounded uppercase">
              MACHINE LEARNING × REGRESSION
            </span>
          )}
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tighter leading-[0.88]">
          {project.title}
        </h1>

        <p className="text-lg sm:text-2xl font-bold text-[#111111]/85 dark:text-[#F7F7F2]/85 max-w-4xl leading-relaxed border-l-4 border-[#635BFF] pl-4 py-1">
          {project.subheading || project.description}
        </p>

        {/* Project Metadata Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
          <div className="bg-white dark:bg-[#1A1A1A] border-2 border-[#111111] dark:border-[#F7F7F2] p-4 rounded-xl brutal-shadow-sm">
            <span className="block font-mono text-xs font-black text-[#635BFF] dark:text-[#FFD600] uppercase mb-1">
              TYPE
            </span>
            <span className="font-mono text-xs font-extrabold text-[#111111] dark:text-[#F7F7F2]">
              {project.type || "Software Project"}
            </span>
          </div>
          <div className="bg-white dark:bg-[#1A1A1A] border-2 border-[#111111] dark:border-[#F7F7F2] p-4 rounded-xl brutal-shadow-sm">
            <span className="block font-mono text-xs font-black text-[#635BFF] dark:text-[#FFD600] uppercase mb-1">
              DOMAIN
            </span>
            <span className="font-mono text-xs font-extrabold text-[#111111] dark:text-[#F7F7F2]">
              {project.domain || project.category}
            </span>
          </div>
          <div className="bg-white dark:bg-[#1A1A1A] border-2 border-[#111111] dark:border-[#F7F7F2] p-4 rounded-xl brutal-shadow-sm">
            <span className="block font-mono text-xs font-black text-[#635BFF] dark:text-[#FFD600] uppercase mb-1">
              ARCHITECTURE
            </span>
            <span className="font-mono text-xs font-extrabold text-[#111111] dark:text-[#F7F7F2]">
              {project.architecture || "Full-Stack"}
            </span>
          </div>
          <div className="bg-white dark:bg-[#1A1A1A] border-2 border-[#111111] dark:border-[#F7F7F2] p-4 rounded-xl brutal-shadow-sm">
            <span className="block font-mono text-xs font-black text-[#635BFF] dark:text-[#FFD600] uppercase mb-1">
              TEAM / ROLE
            </span>
            <span className="font-mono text-xs font-extrabold text-[#111111] dark:text-[#F7F7F2]">
              {project.role || "Lead Developer"}
            </span>
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <BrutalButton href={project.github} variant="purple" size="md" external icon>
            GITHUB ↗
          </BrutalButton>
          {project.demo && (
            <BrutalButton href={project.demo} variant="yellow" size="md" external icon>
              LIVE DEMO ↗
            </BrutalButton>
          )}
        </div>
      </header>

      {/* Hero Visual Container */}
      <div
        className="w-full border-3 border-[#111111] dark:border-[#F7F7F2] rounded-3xl p-8 md:p-14 brutal-shadow-lg relative overflow-hidden flex flex-col justify-between min-h-[280px]"
        style={{ backgroundColor: project.imageBg }}
      >
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#111111_3px,transparent_3px)] [background-size:24px_24px]" />

        <div className="relative z-10 flex justify-between items-start gap-4">
          <span className="font-mono text-xs font-black bg-white text-[#111111] px-3 py-1 border-2 border-[#111111] rounded brutal-shadow-sm">
            {isIPLMind
              ? "HYBRID REASONING & INFERENCE ENGINE"
              : isResQAI
              ? "CRISIS INTELLIGENCE PLATFORM"
              : isBharatFarm
              ? "SYSTEM ARCHITECTURE OVERVIEW"
              : isDataAnalytics
              ? "ANALYTICS PIPELINE VISUAL"
              : isCaliforniaHousing
              ? "MACHINE LEARNING PIPELINE"
              : "ARCHITECTURE VISUAL"}
          </span>
          <span className="font-mono text-xs font-black bg-[#111111] text-white px-3 py-1 rounded">
            CASE STUDY #{project.number}
          </span>
        </div>

        <div className="relative z-10 my-8 text-center space-y-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#111111] bg-white px-6 py-4 border-3 border-[#111111] rounded-2xl brutal-shadow-md inline-block uppercase tracking-tight">
            {isIPLMind
              ? '"THE IPLMIND THAT TRIES TO READ YOUR MIND."'
              : isDataAnalytics
              ? "DATA ANALYTICS PROJECTS"
              : project.title}
          </h2>
          <div>
            <p className="font-mono text-xs md:text-sm font-extrabold text-[#111111] bg-[#FFD600] inline-block px-4 py-1.5 border-2 border-[#111111] rounded-lg uppercase">
              {isIPLMind
                ? "DETERMINISTIC FILTERING × BAYESIAN PROBABILITY × GEMINI ADAPTIVE AI"
                : isResQAI
                ? "REAL-TIME CRISIS COORDINATION & AI MAP ANALYSIS"
                : isBharatFarm
                ? "MULTILINGUAL AGRITECH & CLIMATE INTELLIGENCE ECOSYSTEM"
                : isDataAnalytics
                ? "RAW DATA → CLEAN → EXPLORE → QUERY → VISUALIZE → INSIGHT"
                : isCaliforniaHousing
                ? "CENSUS DATA → STRATIFIED SPLIT → COLUMN TRANSFORMER → RANDOM FOREST → JOBLIB → RMSE"
                : project.category}
            </p>
          </div>
        </div>

        <div className="relative z-10 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="font-mono text-xs font-black bg-white text-[#111111] px-3 py-1 border-2 border-[#111111] rounded shadow-[2px_2px_0px_#111111]"
            >
              #{t}
            </span>
          ))}
        </div>
      </div>

      {/* Case Study Editorial Sections */}
      <div className="space-y-12 max-w-5xl mx-auto">
        {isCaliforniaHousing ? (
          <>
            {/* 01 — OVERVIEW */}
            <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
                <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                  01 — OVERVIEW
                </h2>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
                END-TO-END REGRESSION WORKFLOW & CENSUS DATASET
              </h3>
              <p className="text-base sm:text-lg font-medium text-[#111111]/85 dark:text-[#F7F7F2]/85 leading-relaxed mb-6">
                An end-to-end machine learning regression workflow predicting <code className="bg-[#FFD600] text-[#111111] px-1.5 py-0.5 rounded font-mono font-bold">median_house_value</code> using the California Housing Prices dataset derived from the 1990 California Census.
              </p>

              {/* Verified Metrics Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="bg-[#FFD600] text-[#111111] border-3 border-[#111111] rounded-xl p-5 brutal-shadow-sm text-center">
                  <div className="font-extrabold text-3xl sm:text-4xl mb-1">20,640</div>
                  <div className="font-mono text-xs font-black uppercase">DATA RECORDS</div>
                </div>
                <div className="bg-white dark:bg-[#242424] text-[#111111] dark:text-[#F7F7F2] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-xl p-5 brutal-shadow-sm text-center">
                  <div className="font-extrabold text-3xl sm:text-4xl mb-1 text-[#635BFF] dark:text-[#FFD600]">80 / 20</div>
                  <div className="font-mono text-xs font-black uppercase">TRAIN / TEST</div>
                </div>
                <div className="bg-[#635BFF] text-white border-3 border-[#111111] rounded-xl p-5 brutal-shadow-sm text-center">
                  <div className="font-extrabold text-2xl sm:text-3xl mb-1 text-[#FFD600]">$47,197.67</div>
                  <div className="font-mono text-xs font-black uppercase text-white">TEST RMSE</div>
                </div>
                <div className="bg-[#111111] text-white border-3 border-[#111111] dark:border-[#F7F7F2] rounded-xl p-5 brutal-shadow-sm text-center">
                  <div className="font-extrabold text-xl sm:text-2xl mb-1 text-[#FFD600]">RANDOM FOREST</div>
                  <div className="font-mono text-xs font-black uppercase text-[#F7F7F2]">PRIMARY MODEL</div>
                </div>
              </div>

              {/* Interactive ML Engine Visualization */}
              <InteractiveMLPipeline />

              {/* Workflow Flow Diagram */}
              <div className="bg-[#111111] text-[#F7F7F2] border-3 border-[#111111] p-6 rounded-xl brutal-shadow mb-4 font-mono text-xs text-center">
                <div className="text-xs font-black text-[#FFD600] mb-4 uppercase tracking-widest">
                  ENGINEERING WORKFLOW PIPELINE
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2 font-bold">
                  <span className="bg-[#242424] px-2.5 py-1 border border-[#F7F7F2] rounded">DATA</span>
                  <span className="text-[#FFD600]">→</span>
                  <span className="bg-[#635BFF] text-white px-2.5 py-1 rounded">PREPROCESSING</span>
                  <span className="text-[#FFD600]">→</span>
                  <span className="bg-[#242424] px-2.5 py-1 border border-[#F7F7F2] rounded">STRATIFIED SPLIT</span>
                  <span className="text-[#FFD600]">→</span>
                  <span className="bg-[#635BFF] text-white px-2.5 py-1 rounded">MODEL TRAINING</span>
                  <span className="text-[#FFD600]">→</span>
                  <span className="bg-[#242424] px-2.5 py-1 border border-[#F7F7F2] rounded">MODEL PERSISTENCE</span>
                  <span className="text-[#FFD600]">→</span>
                  <span className="bg-[#635BFF] text-white px-2.5 py-1 rounded">INFERENCE</span>
                  <span className="text-[#FFD600]">→</span>
                  <span className="bg-[#FFD600] text-[#111111] px-2.5 py-1 rounded font-black border border-black">EVALUATION</span>
                </div>
              </div>
            </section>

            {/* 02 — THE PROBLEM */}
            <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
                <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                  02 — THE PROBLEM
                </h2>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
                REPRODUCIBLE REGRESSION & FEATURE SPECIFICATION
              </h3>
              <p className="text-base sm:text-lg font-medium text-[#111111]/85 dark:text-[#F7F7F2]/85 leading-relaxed mb-6">
                The goal was to build a reproducible, leak-free regression pipeline capable of estimating median house values from geographic, demographic, and housing-related features.
              </p>

              <div className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-6 rounded-xl mb-6">
                <h4 className="font-mono text-xs font-black bg-[#635BFF] text-white px-3 py-1 rounded inline-block mb-4 uppercase">
                  RELEVANT INPUT FEATURES
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2]">
                  {["longitude", "latitude", "housing_median_age", "total_rooms", "total_bedrooms", "population", "households", "median_income", "ocean_proximity"].map((feat) => (
                    <div key={feat} className="bg-white dark:bg-[#111111] p-3 border border-[#111111] dark:border-[#F7F7F2] rounded flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#635BFF] dark:text-[#FFD600] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#FFD600] text-[#111111] p-4 border-2 border-[#111111] rounded-xl font-mono text-xs font-black flex items-center gap-3">
                <span className="bg-[#111111] text-[#FFD600] px-2.5 py-1 rounded uppercase">TARGET VARIABLE</span>
                <span>median_house_value (Continuous numeric target)</span>
              </div>
            </section>

            {/* 03 — DATA & SAMPLING */}
            <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
                <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                  03 — DATA & SAMPLING
                </h2>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
                STRATIFIED SAMPLING & INCOME DISTRIBUTION
              </h3>
              <p className="text-base sm:text-lg font-medium text-[#111111]/85 dark:text-[#F7F7F2]/85 leading-relaxed mb-6">
                The California Housing Prices dataset contains 20,640 records derived from the 1990 California Census. To prevent sampling bias, median income was identified as a critical feature, and stratified sampling was performed using temporary income categories (<code className="bg-[#F7F7F2] dark:bg-[#242424] px-1.5 py-0.5 border rounded">income_cat</code>) to ensure representative distribution across the 80% training and 20% test sets.
              </p>

              <div className="bg-[#111111] text-[#F7F7F2] p-5 rounded-xl border-3 border-[#111111] font-mono text-xs mb-4">
                <span className="font-black text-[#FFD600] uppercase block mb-1">
                  CRITICAL SAMPLING INTEGRITY NOTE
                </span>
                <p className="text-white/90 leading-relaxed font-bold">
                  <code className="text-[#FFD600]">income_cat</code> is strictly a sampling helper created for StratifiedShuffleSplit and is removed prior to model training to preserve exact feature alignment.
                </p>
              </div>
            </section>

            {/* 04 — DATA PREPROCESSING */}
            <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
                <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                  04 — DATA PREPROCESSING
                </h2>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
                COLUMN TRANSFORMER & PREVENTING PREPROCESSING LEAKAGE
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-5 rounded-xl">
                  <span className="font-mono text-xs font-black bg-[#FFD600] text-[#111111] px-2.5 py-1 border border-black rounded inline-block mb-3">
                    NUMERICAL FEATURES PIPELINE
                  </span>
                  <ul className="space-y-2 font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2]">
                    <li>• SimpleImputer(strategy=&quot;median&quot;)</li>
                    <li>• StandardScaler</li>
                  </ul>
                </div>

                <div className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-5 rounded-xl">
                  <span className="font-mono text-xs font-black bg-[#635BFF] text-white px-2.5 py-1 rounded inline-block mb-3">
                    CATEGORICAL FEATURE PIPELINE
                  </span>
                  <ul className="space-y-2 font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2]">
                    <li>• OneHotEncoder(handle_unknown=&quot;ignore&quot;)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#FFD600] text-[#111111] p-4 border-2 border-[#111111] rounded-xl font-mono text-xs font-bold leading-relaxed">
                <strong className="block font-black uppercase text-sm mb-1 text-[#111111]">LEAKAGE PREVENTION MEASURE</strong>
                The Scikit-learn preprocessing ColumnTransformer is fitted strictly on training data and reused during inference, guaranteeing that no statistical information from the test set leaks into feature transformations.
              </div>
            </section>

            {/* 05 — MODEL */}
            <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
                <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                  05 — MODEL
                </h2>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
                RANDOM FOREST REGRESSOR
              </h3>
              <p className="text-base sm:text-lg font-medium text-[#111111]/85 dark:text-[#F7F7F2]/85 leading-relaxed mb-6">
                The primary model configured for final evaluation is <code className="bg-[#F7F7F2] dark:bg-[#242424] px-1.5 py-0.5 border rounded font-mono text-sm font-bold">RandomForestRegressor(random_state=42)</code>.
              </p>
              <div className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-5 rounded-xl font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2] leading-relaxed">
                Random Forest combines multiple decision trees and averages their individual regression predictions. This ensemble strategy enables the model to capture complex nonlinear relationships and multi-feature interactions across spatial and demographic census attributes.
              </div>
            </section>

            {/* 06 — MODEL PIPELINE & PERSISTENCE */}
            <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Network className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
                <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                  06 — MODEL PIPELINE & PERSISTENCE
                </h2>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-6">
                ENGINEERING WORKFLOW & JOBLIB PERSISTENCE
              </h3>

              <div className="bg-[#111111] text-[#F7F7F2] border-3 border-[#111111] p-6 rounded-xl brutal-shadow mb-6 font-mono text-xs text-center space-y-3">
                <div className="text-xs font-black text-[#FFD600] uppercase tracking-widest mb-4">
                  JOBLIB ARTIFACT PERSISTENCE FLOW
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 font-bold items-center">
                  <div className="bg-[#242424] p-3 border border-[#F7F7F2] rounded">RAW DATA</div>
                  <div className="text-[#FFD600]">→</div>
                  <div className="bg-[#635BFF] text-white p-3 border border-white rounded">STRATIFIED SPLIT</div>
                  <div className="text-[#FFD600]">→</div>
                  <div className="bg-[#242424] p-3 border border-[#F7F7F2] rounded">FEATURE / TARGET</div>
                </div>
                <div className="text-[#FFD600] font-black text-sm">↓</div>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 font-bold items-center">
                  <div className="bg-[#635BFF] text-white p-3 border border-white rounded">PREPROCESSING PIPELINE</div>
                  <div className="text-[#FFD600]">→</div>
                  <div className="bg-[#FFD600] text-[#111111] p-3 border border-black rounded font-black">RANDOM FOREST</div>
                  <div className="text-[#FFD600]">→</div>
                  <div className="bg-[#242424] text-[#FFD600] p-3 border border-[#F7F7F2] rounded font-black">JOBLIB SAVED ARTIFACTS</div>
                </div>
                <div className="text-[#FFD600] font-black text-sm">↓</div>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 font-bold items-center">
                  <div className="bg-[#242424] p-3 border border-[#F7F7F2] rounded">LOAD ARTIFACTS</div>
                  <div className="text-[#FFD600]">→</div>
                  <div className="bg-[#635BFF] text-white p-3 border border-white rounded">INFERENCE</div>
                  <div className="text-[#FFD600]">→</div>
                  <div className="bg-[#FFD600] text-[#111111] p-3 border border-black rounded font-black">OUTPUT CSV</div>
                </div>
              </div>

              <p className="font-mono text-xs md:text-sm font-bold text-[#111111]/80 dark:text-[#F7F7F2]/80 bg-[#F7F7F2] dark:bg-[#242424] p-4 border-2 border-[#111111] dark:border-[#F7F7F2] rounded-xl leading-relaxed">
                Both the trained RandomForestRegressor model and the fitted Scikit-learn preprocessing ColumnTransformer are serialized and persisted using Joblib. This ensures exact, reproducible feature transformation during downstream inference without needing to refit scalers.
              </p>
            </section>

            {/* 07 — EVALUATION */}
            <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Activity className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
                <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                  07 — EVALUATION
                </h2>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
                VERIFIED REGRESSION EVALUATION METRIC
              </h3>

              <div className="bg-[#635BFF] text-white p-6 border-3 border-[#111111] rounded-2xl brutal-shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-xs font-black text-[#FFD600] uppercase tracking-widest block mb-1">
                    VERIFIED METRIC
                  </span>
                  <span className="font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
                    $47,197.67
                  </span>
                </div>
                <div className="bg-[#111111] text-[#FFD600] px-4 py-2 rounded-xl border border-white/30 font-mono text-sm font-black uppercase">
                  TEST RMSE
                </div>
              </div>

              <p className="font-mono text-xs md:text-sm font-bold text-[#111111]/85 dark:text-[#F7F7F2]/85 bg-[#F7F7F2] dark:bg-[#242424] p-4 border-2 border-[#111111] dark:border-[#F7F7F2] rounded-xl leading-relaxed">
                Root Mean Squared Error (RMSE) measures the typical magnitude of prediction error in the same units as the target variable ($), penalizing larger prediction discrepancies more heavily to evaluate overall regression performance.
              </p>
            </section>

            {/* 08 — OUTPUT & INFERENCE */}
            <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <FileSpreadsheet className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
                <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                  08 — OUTPUT & INFERENCE
                </h2>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
                STANDALONE INFERENCE WORKFLOW & OUTPUT CSV
              </h3>

              <div className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-6 rounded-xl mb-6">
                <h4 className="font-mono text-xs font-black bg-[#635BFF] text-white px-3 py-1 rounded inline-block mb-4 uppercase">
                  INFERENCE WORKFLOW STEPS
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2]">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#635BFF] shrink-0" /> Loads saved model artifact</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#635BFF] shrink-0" /> Loads saved preprocessing pipeline</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#635BFF] shrink-0" /> Reads held-out test dataset</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#635BFF] shrink-0" /> Transforms test features cleanly</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#635BFF] shrink-0" /> Generates median house predictions</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#635BFF] shrink-0" /> Calculates test set RMSE</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#635BFF] shrink-0" /> Exports actual vs predicted values to output.csv</div>
                </div>
              </div>

              {/* Conceptual Output Table Visual */}
              <div className="bg-[#111111] text-[#F7F7F2] p-4 rounded-xl border-2 border-[#111111] font-mono text-xs">
                <span className="font-black text-[#FFD600] uppercase block mb-2 text-[11px]">
                  CONCEPTUAL OUTPUT STRUCTURE (output.csv):
                </span>
                <div className="grid grid-cols-2 gap-2 text-center text-[11px] font-bold">
                  <div className="bg-[#242424] p-2 rounded border border-white/20 text-[#FFD600]">actual_median_house_value</div>
                  <div className="bg-[#242424] p-2 rounded border border-white/20 text-white">predicted_median_house_value</div>
                </div>
              </div>
            </section>

            {/* 09 — MODEL COMPARISON */}
            <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
                <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                  09 — MODEL COMPARISON
                </h2>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
                MODEL SELECTION & EXPERIMENTATION STAGE
              </h3>

              <div className="space-y-3 font-mono text-xs mb-6">
                {[
                  { name: "Linear Regression", desc: "Baseline parametric regression model evaluated during initial exploration." },
                  { name: "Decision Tree Regression", desc: "Nonlinear single decision tree model evaluated for split performance." },
                  { name: "Random Forest Regression", desc: "Primary selected ensemble regression model achieving best overall test performance." },
                ].map((m, idx) => (
                  <div key={m.name} className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-4 rounded-xl flex items-start gap-3">
                    <span className="font-black bg-[#FFD600] text-[#111111] px-2 py-0.5 border border-black rounded shrink-0">
                      0{idx + 1}
                    </span>
                    <div>
                      <strong className="text-sm font-extrabold text-[#111111] dark:text-[#F7F7F2] block">{m.name}</strong>
                      <span className="text-[#111111]/80 dark:text-[#F7F7F2]/80 font-bold">{m.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 10 — WHAT I LEARNED */}
            <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
                <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                  10 — WHAT I LEARNED
                </h2>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-6">
                PRACTICAL ML ENGINEERING LESSONS
              </h3>
              <div className="space-y-3">
                {[
                  "separating features and target correctly before preprocessing",
                  "stratified sampling on median_income to maintain representative train/test distribution",
                  "handling missing numerical values with SimpleImputer (median strategy)",
                  "numerical feature scaling with StandardScaler and categorical encoding with OneHotEncoder",
                  "building reproducible Scikit-learn Pipeline and ColumnTransformer pipelines",
                  "preventing preprocessing leakage between training and evaluation datasets",
                  "training and evaluating RandomForestRegressor for nonlinear feature interaction modeling",
                  "model persistence of transformers and estimators using Joblib",
                  "executing standalone inference on held-out test data using saved artifacts",
                  "evaluating regression performance strictly using Root Mean Squared Error (TEST RMSE: $47,197.67)",
                ].map((lesson, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] rounded-xl p-4 brutal-shadow-sm flex items-start gap-3 font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2]"
                  >
                    <span className="font-mono text-xs font-black bg-[#635BFF] text-white px-2 py-0.5 rounded shrink-0">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <span className="leading-relaxed">{lesson}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* REPOSITORY */}
            <section className="bg-[#FFD600] text-[#111111] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md text-center space-y-4">
              <div className="font-mono text-xs font-black bg-white inline-block px-3 py-1 border border-black rounded uppercase">
                REPOSITORIES & CODE
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase">
                EXPLORE THE CALIFORNIA HOUSING PREDICTOR CODEBASE
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <BrutalButton href={project.github} variant="black" size="lg" external icon>
                  VIEW REPOSITORY ↗
                </BrutalButton>
              </div>
            </section>
          </>
        ) : isDataAnalytics ? (
          <>
            {/* 01 — THE STORY */}
            <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
                <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                  01 — THE STORY
                </h2>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
                PROGRESSIVE DATA ANALYTICS WORKFLOW
              </h3>
              <p className="text-base sm:text-lg font-medium text-[#111111]/85 dark:text-[#F7F7F2]/85 leading-relaxed mb-8">
                This collection was built as a progressive hands-on exercise across multiple stages of data analytics. It demonstrates practical skill progression from inspecting and cleaning raw datasets to running SQL aggregations, performing exploratory analysis, domain analytics, and handling real-world messy data.
              </p>

              {/* Analytics Pipeline Visual Centerpiece */}
              <div className="bg-[#111111] text-[#F7F7F2] border-3 border-[#111111] p-6 rounded-xl brutal-shadow mb-8 font-mono">
                <div className="text-xs font-black text-[#FFD600] mb-4 uppercase tracking-widest text-center">
                  ANALYTICS PIPELINE VISUAL
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-7 gap-2 text-xs font-extrabold text-center items-center mb-6">
                  <div className="bg-[#242424] text-white p-3 border border-[#F7F7F2] rounded">RAW DATA</div>
                  <div className="text-[#FFD600] font-black hidden sm:block">↓</div>
                  <div className="bg-[#635BFF] text-white p-3 border border-white rounded">CLEAN</div>
                  <div className="text-[#FFD600] font-black hidden sm:block">↓</div>
                  <div className="bg-[#242424] text-white p-3 border border-[#F7F7F2] rounded">EXPLORE</div>
                  <div className="text-[#FFD600] font-black hidden sm:block">↓</div>
                  <div className="bg-[#635BFF] text-white p-3 border border-white rounded">QUERY</div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs font-extrabold text-center items-center">
                  <div className="bg-[#242424] text-white p-3 border border-[#F7F7F2] rounded">VISUALIZE</div>
                  <div className="text-[#FFD600] font-black hidden sm:block">↓</div>
                  <div className="bg-[#FFD600] text-[#111111] p-3 border border-black rounded font-black col-span-2 sm:col-span-3">INSIGHT</div>
                </div>

                {/* Connected Pipeline Examples */}
                <div className="mt-6 pt-6 border-t border-[#F7F7F2]/20 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-bold">
                  <div className="bg-[#242424] p-4 rounded border border-[#F7F7F2]/40">
                    <span className="text-[#FFD600] block mb-1 font-black">CLEANING</span>
                    <span className="text-white">→ Project 01 / Project 05</span>
                  </div>
                  <div className="bg-[#242424] p-4 rounded border border-[#F7F7F2]/40">
                    <span className="text-[#FFD600] block mb-1 font-black">EDA</span>
                    <span className="text-white">→ Project 02 / Project 04</span>
                  </div>
                  <div className="bg-[#242424] p-4 rounded border border-[#F7F7F2]/40">
                    <span className="text-[#FFD600] block mb-1 font-black">SQL</span>
                    <span className="text-white">→ Project 03</span>
                  </div>
                </div>
              </div>

              {/* Workflow Step Progression Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 font-mono text-xs text-center font-bold">
                <div className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-3 rounded-xl">
                  <span className="bg-[#FFD600] text-[#111111] px-2 py-0.5 rounded text-[10px] block mb-1 font-black">01</span>
                  <span>CLEAN THE DATA</span>
                </div>
                <div className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-3 rounded-xl">
                  <span className="bg-[#635BFF] text-white px-2 py-0.5 rounded text-[10px] block mb-1 font-black">02</span>
                  <span>UNDERSTAND THE DATA</span>
                </div>
                <div className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-3 rounded-xl">
                  <span className="bg-[#111111] dark:bg-[#F7F7F2] text-[#FFD600] dark:text-[#111111] px-2 py-0.5 rounded text-[10px] block mb-1 font-black">03</span>
                  <span>QUERY THE DATA</span>
                </div>
                <div className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-3 rounded-xl">
                  <span className="bg-[#FFD600] text-[#111111] px-2 py-0.5 rounded text-[10px] block mb-1 font-black">04</span>
                  <span>ANALYZE A DOMAIN DATASET</span>
                </div>
                <div className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-3 rounded-xl">
                  <span className="bg-[#635BFF] text-white px-2 py-0.5 rounded text-[10px] block mb-1 font-black">05</span>
                  <span>HANDLE REAL-WORLD MESSY DATA</span>
                </div>
              </div>
            </section>

            {/* 02 — PROJECT 01 DATA CLEANING & PREPARATION */}
            <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <FileSpreadsheet className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
                <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                  02 — PROJECT 01: DATA CLEANING & PREPARATION
                </h2>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-black bg-[#FFD600] text-[#111111] px-2.5 py-0.5 border border-black rounded uppercase">
                  DATASET 01
                </span>
                <span className="font-mono text-xs font-black bg-[#111111] text-white px-2.5 py-0.5 rounded uppercase">
                  CSV → CLEAN
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
                TRANSACTIONAL DATASET CLEANING (1,200 RECORDS)
              </h3>
              <p className="text-base sm:text-lg font-medium text-[#111111]/85 dark:text-[#F7F7F2]/85 leading-relaxed mb-6">
                A practical data-cleaning exercise using a transactional dataset containing 1,200 records.
              </p>

              <div className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-6 rounded-xl mb-6">
                <h4 className="font-mono text-xs font-black bg-[#635BFF] text-white px-3 py-1 rounded inline-block mb-4 uppercase">
                  VERIFIED CLEANING TASKS
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF] dark:text-[#FFD600] shrink-0" />
                    <span>Data inspection with Pandas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF] dark:text-[#FFD600] shrink-0" />
                    <span>Missing-value analysis and handling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF] dark:text-[#FFD600] shrink-0" />
                    <span>Duplicate detection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF] dark:text-[#FFD600] shrink-0" />
                    <span>Primary-key validation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF] dark:text-[#FFD600] shrink-0" />
                    <span>Date standardization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF] dark:text-[#FFD600] shrink-0" />
                    <span>Exporting cleaned data to Excel</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Python", "Pandas", "OpenPyXL", "Jupyter Notebook"].map((tool) => (
                  <span key={tool} className="font-mono text-xs font-black bg-white dark:bg-[#111111] text-[#111111] dark:text-[#F7F7F2] px-3 py-1 border-2 border-[#111111] dark:border-[#F7F7F2] rounded brutal-shadow-sm">
                    #{tool}
                  </span>
                ))}
              </div>
            </section>

            {/* 03 — PROJECT 02 EXPLORATORY DATA ANALYSIS */}
            <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <BarChart2 className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
                <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                  03 — PROJECT 02: EXPLORATORY DATA ANALYSIS
                </h2>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-black bg-[#635BFF] text-white px-2.5 py-0.5 border border-black rounded uppercase">
                  EDA 02
                </span>
                <span className="font-mono text-xs font-black bg-[#111111] text-white px-2.5 py-0.5 rounded uppercase">
                  EDA → EXPLORE
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
                TRANSACTIONAL SALES EDA & QUALITY ANALYSIS
              </h3>
              <p className="text-base sm:text-lg font-medium text-[#111111]/85 dark:text-[#F7F7F2]/85 leading-relaxed mb-6">
                An exploratory analysis of transactional sales data to understand sales, orders, product performance and data quality.
              </p>

              <div className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-6 rounded-xl mb-6">
                <h4 className="font-mono text-xs font-black bg-[#FFD600] text-[#111111] px-3 py-1 border border-black rounded inline-block mb-4 uppercase">
                  VERIFIED EXPLORATORY WORK
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF] dark:text-[#FFD600] shrink-0" />
                    <span>Descriptive statistics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF] dark:text-[#FFD600] shrink-0" />
                    <span>Sales and order trends</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF] dark:text-[#FFD600] shrink-0" />
                    <span>Missing values analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF] dark:text-[#FFD600] shrink-0" />
                    <span>Duplicate checks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF] dark:text-[#FFD600] shrink-0" />
                    <span>Outlier detection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF] dark:text-[#FFD600] shrink-0" />
                    <span>Data visualization</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"].map((tool) => (
                  <span key={tool} className="font-mono text-xs font-black bg-white dark:bg-[#111111] text-[#111111] dark:text-[#F7F7F2] px-3 py-1 border-2 border-[#111111] dark:border-[#F7F7F2] rounded brutal-shadow-sm">
                    #{tool}
                  </span>
                ))}
              </div>
            </section>

            {/* 04 — PROJECT 03 SQL DATA ANALYSIS */}
            <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
                <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                  04 — PROJECT 03: SQL DATA ANALYSIS
                </h2>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-black bg-[#111111] dark:bg-[#F7F7F2] text-[#FFD600] dark:text-[#111111] px-2.5 py-0.5 rounded uppercase">
                  SQL 03
                </span>
                <span className="font-mono text-xs font-black bg-[#635BFF] text-white px-2.5 py-0.5 rounded uppercase">
                  SQL → QUERY
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
                SQLITE TRANSACTIONAL DATA ANALYSIS
              </h3>
              <p className="text-base sm:text-lg font-medium text-[#111111]/85 dark:text-[#F7F7F2]/85 leading-relaxed mb-6">
                A beginner SQL analysis project using transactional data stored in SQLite.
              </p>

              {/* Simple SQL Flow Visual */}
              <div className="bg-[#111111] text-[#F7F7F2] border-2 border-[#111111] p-4 rounded-xl font-mono text-xs font-black mb-6 text-center">
                <div className="grid grid-cols-1 sm:grid-cols-7 gap-2 items-center">
                  <span className="bg-[#242424] p-2 border border-[#F7F7F2] rounded">DATA</span>
                  <span className="text-[#FFD600]">→</span>
                  <span className="bg-[#635BFF] text-white p-2 border border-white rounded">SQL</span>
                  <span className="text-[#FFD600]">→</span>
                  <span className="bg-[#242424] p-2 border border-[#F7F7F2] rounded">AGGREGATION</span>
                  <span className="text-[#FFD600]">→</span>
                  <span className="bg-[#FFD600] text-[#111111] p-2 border border-black rounded">RESULT</span>
                </div>
              </div>

              <div className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-6 rounded-xl mb-6">
                <h4 className="font-mono text-xs font-black bg-[#111111] text-[#FFD600] px-3 py-1 rounded inline-block mb-4 uppercase">
                  ACTUAL SQL CONCEPTS PRACTICED
                </h4>
                <div className="flex flex-wrap gap-3 font-mono text-xs font-black">
                  {["SELECT", "WHERE", "ORDER BY", "GROUP BY", "COUNT()", "SUM()", "AVG()"].map((sqlCmd) => (
                    <span key={sqlCmd} className="bg-white dark:bg-[#111111] text-[#635BFF] dark:text-[#FFD600] px-3 py-1.5 border-2 border-[#111111] dark:border-[#F7F7F2] rounded">
                      {sqlCmd}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Python", "SQLite", "SQL", "Pandas", "Jupyter Notebook"].map((tool) => (
                  <span key={tool} className="font-mono text-xs font-black bg-white dark:bg-[#111111] text-[#111111] dark:text-[#F7F7F2] px-3 py-1 border-2 border-[#111111] dark:border-[#F7F7F2] rounded brutal-shadow-sm">
                    #{tool}
                  </span>
                ))}
              </div>
            </section>

            {/* 05 — PROJECT 04 PHARMACEUTICAL SALES ANALYSIS */}
            <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Filter className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
                <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                  05 — PROJECT 04: PHARMACEUTICAL SALES ANALYSIS
                </h2>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-black bg-[#FFD600] text-[#111111] px-2.5 py-0.5 border border-black rounded uppercase">
                  DOMAIN 04
                </span>
                <span className="font-mono text-xs font-black bg-[#111111] text-white px-2.5 py-0.5 rounded uppercase">
                  CHART → INSIGHT
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
                ATC DRUG CATEGORY SALES ANALYSIS
              </h3>
              <p className="text-base sm:text-lg font-medium text-[#111111]/85 dark:text-[#F7F7F2]/85 leading-relaxed mb-6">
                Analysis of daily pharmaceutical sales data to identify patterns across ATC drug categories.
              </p>

              <div className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-6 rounded-xl mb-6">
                <h4 className="font-mono text-xs font-black bg-[#635BFF] text-white px-3 py-1 rounded inline-block mb-4 uppercase">
                  DOCUMENTED ANALYSIS
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF] dark:text-[#FFD600] shrink-0" />
                    <span>Total sales by ATC category</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF] dark:text-[#FFD600] shrink-0" />
                    <span>Top-selling categories during selected months</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF] dark:text-[#FFD600] shrink-0" />
                    <span>Total category sales in 2017</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF] dark:text-[#FFD600] shrink-0" />
                    <span>Average daily sales</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF] dark:text-[#FFD600] shrink-0" />
                    <span>Monthly analysis of respiratory drug category R03</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF] dark:text-[#FFD600] shrink-0" />
                    <span>Matplotlib visualizations</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Python", "Pandas", "Matplotlib", "Jupyter Notebook"].map((tool) => (
                  <span key={tool} className="font-mono text-xs font-black bg-white dark:bg-[#111111] text-[#111111] dark:text-[#F7F7F2] px-3 py-1 border-2 border-[#111111] dark:border-[#F7F7F2] rounded brutal-shadow-sm">
                    #{tool}
                  </span>
                ))}
              </div>
            </section>

            {/* 06 — PROJECT 05 NETFLIX DATA CLEANING */}
            <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <FileSpreadsheet className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
                <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                  06 — PROJECT 05: NETFLIX DATA CLEANING
                </h2>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-black bg-[#635BFF] text-white px-2.5 py-0.5 border border-black rounded uppercase">
                  CLEANING 05
                </span>
                <span className="font-mono text-xs font-black bg-[#111111] text-white px-2.5 py-0.5 rounded uppercase">
                  REAL-WORLD DATASET
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
                NETFLIX MOVIES & TV SHOWS DATASET CLEANING
              </h3>
              <p className="text-base sm:text-lg font-medium text-[#111111]/85 dark:text-[#F7F7F2]/85 leading-relaxed mb-6">
                A real-world dataset-cleaning exercise using the Netflix Movies and TV Shows dataset from Kaggle.
              </p>

              <div className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-6 rounded-xl mb-6">
                <h4 className="font-mono text-xs font-black bg-[#FFD600] text-[#111111] px-3 py-1 border border-black rounded inline-block mb-4 uppercase">
                  VERIFIED CLEANING TASKS
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF] dark:text-[#FFD600] shrink-0" />
                    <span>Dataset inspection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF] dark:text-[#FFD600] shrink-0" />
                    <span>Missing-value analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF] dark:text-[#FFD600] shrink-0" />
                    <span>Duplicate detection and removal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF] dark:text-[#FFD600] shrink-0" />
                    <span>Cleaning mixed-type columns</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF] dark:text-[#FFD600] shrink-0" />
                    <span>Extracting numerical values and units from duration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF] dark:text-[#FFD600] shrink-0" />
                    <span>Converting date_added into datetime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF] dark:text-[#FFD600] shrink-0" />
                    <span>Final data validation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF] dark:text-[#FFD600] shrink-0" />
                    <span>Exporting the cleaned dataset to CSV</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Python", "Pandas", "Regex", "Jupyter Notebook"].map((tool) => (
                  <span key={tool} className="font-mono text-xs font-black bg-white dark:bg-[#111111] text-[#111111] dark:text-[#F7F7F2] px-3 py-1 border-2 border-[#111111] dark:border-[#F7F7F2] rounded brutal-shadow-sm">
                    #{tool}
                  </span>
                ))}
              </div>
            </section>

            {/* 07 — SKILLS DEVELOPED */}
            <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
                <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                  07 — SKILLS DEVELOPED
                </h2>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-6">
                CORE TECHNICAL COMPETENCIES
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-5 rounded-xl">
                  <span className="font-mono text-xs font-black bg-[#FFD600] text-[#111111] px-2.5 py-1 border border-black rounded inline-block mb-3">
                    DATA CLEANING
                  </span>
                  <ul className="space-y-2 font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2]">
                    <li>• Missing values</li>
                    <li>• Duplicates</li>
                    <li>• Type consistency</li>
                    <li>• Date handling</li>
                  </ul>
                </div>

                <div className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-5 rounded-xl">
                  <span className="font-mono text-xs font-black bg-[#635BFF] text-white px-2.5 py-1 rounded inline-block mb-3">
                    EXPLORATORY ANALYSIS
                  </span>
                  <ul className="space-y-2 font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2]">
                    <li>• Descriptive statistics</li>
                    <li>• Outliers</li>
                    <li>• Trends</li>
                    <li>• Distributions</li>
                  </ul>
                </div>

                <div className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-5 rounded-xl">
                  <span className="font-mono text-xs font-black bg-[#111111] dark:bg-[#F7F7F2] text-[#FFD600] dark:text-[#111111] px-2.5 py-1 rounded inline-block mb-3">
                    SQL
                  </span>
                  <ul className="space-y-2 font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2]">
                    <li>• Filtering</li>
                    <li>• Sorting</li>
                    <li>• Grouping</li>
                    <li>• Aggregation</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-5 rounded-xl">
                  <span className="font-mono text-xs font-black bg-[#635BFF] text-white px-2.5 py-1 rounded inline-block mb-3">
                    VISUALIZATION
                  </span>
                  <ul className="space-y-2 font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2]">
                    <li>• Matplotlib</li>
                    <li>• Seaborn</li>
                  </ul>
                </div>

                <div className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-5 rounded-xl">
                  <span className="font-mono text-xs font-black bg-[#FFD600] text-[#111111] px-2.5 py-1 border border-black rounded inline-block mb-3">
                    DATA HANDLING
                  </span>
                  <ul className="space-y-2 font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2]">
                    <li>• CSV</li>
                    <li>• Excel</li>
                    <li>• SQLite</li>
                  </ul>
                </div>
              </div>

              {/* Technology Strip Centerpiece */}
              <div className="mt-8 pt-6 border-t-2 border-[#111111] dark:border-[#F7F7F2]">
                <span className="font-mono text-xs font-black text-[#635BFF] dark:text-[#FFD600] block mb-3 uppercase">
                  VERIFIED TOOLKIT STRIP
                </span>
                <div className="flex flex-wrap gap-2 font-mono text-xs font-black">
                  {["PYTHON", "PANDAS", "MATPLOTLIB", "SEABORN", "SQL", "SQLITE", "OPENPYXL", "REGEX", "JUPYTER NOTEBOOK", "GIT / GITHUB"].map((tech) => (
                    <span key={tech} className="bg-[#111111] dark:bg-[#F7F7F2] text-[#FFD600] dark:text-[#111111] px-3 py-1.5 rounded border border-black">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* 08 — WHAT I LEARNED */}
            <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
                <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                  08 — WHAT I LEARNED
                </h2>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-6">
                PRACTICAL ANALYTICS LESSONS
              </h3>
              <div className="space-y-4">
                {[
                  "real-world data is rarely analysis-ready",
                  "missing values and duplicates must be investigated before analysis",
                  "data types matter for reliable calculations",
                  "SQL provides another way to reason about structured data",
                  "visualization helps expose trends and anomalies",
                  "cleaning and validation are as important as analysis itself",
                ].map((lesson, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] rounded-xl p-5 brutal-shadow-sm flex items-start gap-3"
                  >
                    <span className="font-mono text-xs font-black bg-[#635BFF] text-white px-2 py-0.5 rounded shrink-0">
                      0{idx + 1}
                    </span>
                    <p className="text-base font-bold text-[#111111] dark:text-[#F7F7F2] leading-relaxed">
                      {lesson}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 09 — CURRENT SCOPE */}
            <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
                <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                  09 — CURRENT SCOPE
                </h2>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
                FOUNDATIONAL ANALYTICS FOCUS
              </h3>
              <p className="text-base sm:text-lg font-bold text-[#111111] dark:text-[#F7F7F2] leading-relaxed mb-6 bg-[#FFD600] text-[#111111] p-4 border-2 border-[#111111] rounded-xl">
                &quot;This collection focuses primarily on foundational analytics skills rather than advanced statistical modeling or production BI systems.&quot;
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-5 rounded-xl">
                  <span className="font-mono text-xs font-black bg-[#635BFF] text-white px-2.5 py-1 rounded inline-block mb-3">
                    WHAT THE REPOSITORY DEMONSTRATES
                  </span>
                  <ul className="space-y-2 font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2]">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#635BFF] shrink-0" /> Data cleaning</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#635BFF] shrink-0" /> Exploratory Data Analysis (EDA)</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#635BFF] shrink-0" /> SQL querying</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#635BFF] shrink-0" /> Matplotlib & Seaborn visualization</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#635BFF] shrink-0" /> Dataset preparation</li>
                  </ul>
                </div>

                <div className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-5 rounded-xl">
                  <span className="font-mono text-xs font-black bg-[#111111] dark:bg-[#F7F7F2] text-[#FFD600] dark:text-[#111111] px-2.5 py-1 rounded inline-block mb-3">
                    WHAT IS OUT OF SCOPE
                  </span>
                  <ul className="space-y-2 font-mono text-xs font-bold text-[#111111]/70 dark:text-[#F7F7F2]/70">
                    <li>• Production BI dashboards</li>
                    <li>• Automated data pipelines</li>
                    <li>• Predictive analytics</li>
                    <li>• Machine learning models</li>
                    <li>• Enterprise analytics systems</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 10 — REPOSITORY */}
            <section className="bg-[#FFD600] text-[#111111] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md text-center space-y-4">
              <div className="font-mono text-xs font-black bg-white inline-block px-3 py-1 border border-black rounded uppercase">
                10 — REPOSITORY
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase">
                EXPLORE THE DATA ANALYTICS PROJECTS CODEBASE
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <BrutalButton href={project.github} variant="black" size="lg" external icon>
                  VIEW REPOSITORY ↗
                </BrutalButton>
              </div>
            </section>
          </>
        ) : (
          <>
            {/* 01 THE PROBLEM */}
            <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
            <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
              01 — THE PROBLEM
            </h2>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
            {isIPLMind
              ? "OVERLAPPING CRICKET ATTRIBUTES & NAIVE QUESTION TREES"
              : isBharatFarm
              ? "FARMER FRAGMENTATION & DISCONNECTED TOOLS"
              : "EMERGENCY ONSET & DISCONNECTED COORDINATION"}
          </h3>
          <p className="text-base sm:text-lg font-medium text-[#111111]/85 dark:text-[#F7F7F2]/85 leading-relaxed">
            {project.problem}
          </p>
        </section>

        {/* 02 THE IDEA / SOLUTION */}
        <section className="bg-[#FFD600] text-[#111111] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-6 h-6 text-[#111111] stroke-[2.5]" />
            <h2 className="font-mono text-sm font-black text-[#111111] uppercase tracking-wider bg-white px-2.5 py-0.5 border border-[#111111] rounded">
              02 — THE IDEA
            </h2>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] uppercase tracking-tight mb-4">
            {isIPLMind
              ? "HYBRID PROBABILISTIC & DETERMINISTIC REASONING"
              : isBharatFarm
              ? "TWO-TIER AGRICULTURAL ECOSYSTEM"
              : isResQAI
              ? "CONTINUOUS CRISIS FEEDBACK LOOP"
              : "Proposed Solution & Strategy"}
          </h3>
          <p className="text-base sm:text-lg font-bold text-[#111111] leading-relaxed mb-8">
            {project.idea}
          </p>

          {isIPLMind && (
            <div className="bg-white border-3 border-[#111111] rounded-xl p-4 md:p-6 font-mono font-black text-xs md:text-sm text-center uppercase tracking-tight text-[#111111] brutal-shadow-sm flex flex-col md:flex-row items-center justify-center flex-wrap gap-2 md:gap-3">
              <span className="bg-[#111111] text-white px-3 py-1 rounded">PLAYER UNIVERSE</span>
              <span>→</span>
              <span className="bg-[#635BFF] text-white px-3 py-1 rounded">QUESTION</span>
              <span>→</span>
              <span className="bg-[#111111] text-[#FFD600] px-3 py-1 rounded">ANSWER</span>
              <span>→</span>
              <span className="bg-[#635BFF] text-white px-3 py-1 rounded">CANDIDATE FILTERING</span>
              <span>→</span>
              <span className="bg-[#111111] text-white px-3 py-1 rounded">PROBABILITY UPDATE</span>
              <span>→</span>
              <span className="bg-[#635BFF] text-white px-3 py-1 rounded">NEXT BEST QUESTION</span>
              <span>→</span>
              <span className="bg-[#111111] text-[#FFD600] px-3 py-1 rounded border border-black">GUESS</span>
            </div>
          )}

          {isBharatFarm && project.tier1Features && project.tier2Features && (
            <div className="space-y-6">
              {/* Architecture Flow Banner */}
              <div className="bg-white border-3 border-[#111111] rounded-xl p-4 font-mono font-black text-xs md:text-sm text-center uppercase tracking-tight text-[#111111] brutal-shadow-sm flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
                <span>EVERYDAY FARMER TOOLS</span>
                <span className="hidden md:inline">→</span>
                <span className="md:hidden">↓</span>
                <span className="bg-[#635BFF] text-white px-3 py-1 rounded">DATA + AI INTELLIGENCE</span>
                <span className="hidden md:inline">→</span>
                <span className="md:hidden">↓</span>
                <span>ACTIONABLE AGRICULTURAL DECISIONS</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Tier 1 Box */}
                <div className="bg-white border-3 border-[#111111] rounded-xl p-6 brutal-shadow-sm">
                  <div className="flex items-center justify-between border-b-2 border-[#111111] pb-3 mb-4">
                    <span className="font-mono text-xs font-black bg-[#111111] text-[#FFD600] px-2.5 py-1 rounded">
                      TIER 01
                    </span>
                    <h4 className="font-extrabold text-xl uppercase text-[#111111]">
                      BASIC FARMER NEEDS
                    </h4>
                  </div>
                  <ul className="space-y-3 font-mono text-xs">
                    {project.tier1Features.map((f) => (
                      <li key={f.title} className="border-b border-[#111111]/20 pb-2">
                        <strong className="text-[#111111] font-extrabold block text-sm">
                          • {f.title}
                        </strong>
                        <span className="text-[#111111]/80 font-bold">{f.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tier 2 Box */}
                <div className="bg-[#111111] text-[#F7F7F2] border-3 border-[#111111] rounded-xl p-6 brutal-shadow-sm">
                  <div className="flex items-center justify-between border-b-2 border-[#F7F7F2] pb-3 mb-4">
                    <span className="font-mono text-xs font-black bg-[#635BFF] text-white px-2.5 py-1 rounded">
                      TIER 02
                    </span>
                    <h4 className="font-extrabold text-xl uppercase text-[#FFD600]">
                      ADVANCED INTELLIGENCE
                    </h4>
                  </div>
                  <ul className="space-y-3 font-mono text-xs">
                    {project.tier2Features.map((f) => (
                      <li key={f.title} className="border-b border-[#F7F7F2]/20 pb-2">
                        <strong className="text-[#FFD600] font-extrabold block text-sm">
                          • {f.title}
                        </strong>
                        <span className="text-[#F7F7F2]/80 font-bold">{f.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {isResQAI && (
            <div className="bg-white border-3 border-[#111111] rounded-xl p-4 font-mono font-black text-xs md:text-sm text-center uppercase tracking-tight text-[#111111] brutal-shadow-sm flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3">
              <span className="bg-[#111111] text-[#FFD600] px-3 py-1 rounded">DETECT</span>
              <span className="hidden md:inline">→</span>
              <span className="md:hidden">↓</span>
              <span className="bg-[#635BFF] text-white px-3 py-1 rounded">UNDERSTAND</span>
              <span className="hidden md:inline">→</span>
              <span className="md:hidden">↓</span>
              <span className="bg-[#111111] text-white px-3 py-1 rounded">GUIDE</span>
              <span className="hidden md:inline">→</span>
              <span className="md:hidden">↓</span>
              <span className="bg-[#635BFF] text-white px-3 py-1 rounded">COORDINATE</span>
              <span className="hidden md:inline">→</span>
              <span className="md:hidden">↓</span>
              <span className="bg-[#FFD600] text-[#111111] px-3 py-1 rounded border border-black">RESPOND</span>
            </div>
          )}
        </section>

        {/* IPLMIND SECTION 03 — HYBRID REASONING ENGINE */}
        {isIPLMind && project.iplMindEngineFeatures && (
          <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
              <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                03 — HYBRID REASONING ENGINE
              </h2>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
              BAYESIAN PROBABILITY & INFORMATION GAIN
            </h3>
            <p className="text-base sm:text-lg font-medium text-[#111111]/85 dark:text-[#F7F7F2]/85 leading-relaxed mb-6">
              The engine begins with deterministic + probabilistic candidate reduction using Bayesian probability, information gain calculations, entropy evaluations, and candidate-pool filtering to select questions that maximize separation across remaining player profiles.
            </p>

            {/* Step Visual Funnel */}
            <div className="bg-[#111111] text-[#F7F7F2] border-3 border-[#111111] p-6 rounded-xl brutal-shadow mb-8 font-mono text-center">
              <div className="text-xs font-black text-[#FFD600] mb-4 uppercase tracking-widest">
                CANDIDATE SEPARATION FUNNEL
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-7 gap-2 text-xs font-extrabold items-center">
                <div className="bg-[#242424] p-3 border border-[#F7F7F2] rounded">CANDIDATE POOL</div>
                <div className="text-[#FFD600]">→ ATTRIBUTE FILTER</div>
                <div className="bg-[#635BFF] text-white p-3 border border-white rounded">REDUCED POOL</div>
                <div className="text-[#FFD600]">→ PROBABILITY UPDATE</div>
                <div className="bg-[#242424] text-white p-3 border border-[#F7F7F2] rounded">INFORMATION GAIN</div>
                <div className="text-[#FFD600]">→ ADAPTIVE QUESTION</div>
                <div className="bg-[#FFD600] text-[#111111] p-3 border border-black rounded">FINAL GUESS</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.iplMindEngineFeatures.map((feat) => (
                <div key={feat.title} className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-5 rounded-xl brutal-shadow-sm">
                  <span className="font-mono text-xs font-black bg-[#FFD600] text-[#111111] px-2.5 py-1 border border-black rounded inline-block mb-2 uppercase">
                    {feat.title}
                  </span>
                  <p className="text-sm font-bold text-[#111111] dark:text-[#F7F7F2] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* IPLMIND SECTION 04 — SEMANTIC CONSTRAINT ENGINE */}
        {isIPLMind && project.semanticConstraintPoints && (
          <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
              <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                04 — SEMANTIC CONSTRAINT ENGINE
              </h2>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
              CONTRADICTION PREVENTION & ATTRIBUTE SCOPING
            </h3>
            <p className="text-base sm:text-lg font-medium text-[#111111]/85 dark:text-[#F7F7F2]/85 leading-relaxed mb-6">
              The engine does not merely store static answers. It understands relationships and contradictions between player attributes. If a user confirms a player is Indian, the constraint engine automatically prunes questions assuming overseas nationality or incompatible team roles.
            </p>

            <div className="bg-[#FFD600] text-[#111111] p-4 border-2 border-[#111111] rounded-xl font-mono text-xs font-black mb-6 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center">
              <span>ANSWER RECEIVED</span>
              <span>→</span>
              <span className="bg-white px-2 py-1 rounded border border-black">SEMANTIC CONSTRAINT</span>
              <span>→</span>
              <span>INVALID QUESTIONS REMOVED</span>
              <span>→</span>
              <span className="bg-[#635BFF] text-white px-2 py-1 rounded">BETTER CANDIDATE QUESTIONS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2]">
              {project.semanticConstraintPoints.map((pt, idx) => (
                <div key={idx} className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-4 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#635BFF] dark:text-[#FFD600] shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* IPLMIND SECTION 05 — ADAPTIVE AI QUESTIONING */}
        {isIPLMind && project.adaptiveAiPoints && (
          <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
              <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                05 — ADAPTIVE AI QUESTIONING
              </h2>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
              DETERMINISTIC TO GEMINI HANDOFF
            </h3>
            <p className="text-base sm:text-lg font-medium text-[#111111]/85 dark:text-[#F7F7F2]/85 leading-relaxed mb-6">
              Gemini is not the entire reasoning engine — it acts as an adaptive question-generation layer when the candidate pool becomes small or difficult.
            </p>

            <div className="bg-[#111111] text-[#F7F7F2] p-6 rounded-xl border-3 border-[#111111] font-mono text-xs mb-6 text-center space-y-3">
              <div className="bg-[#242424] p-3 border border-[#F7F7F2] rounded font-black text-[#FFD600]">
                DETERMINISTIC ENGINE → Handles broad candidate reduction
              </div>
              <div className="text-sm font-black text-[#FFD600]">↓ WHEN CANDIDATE SET BECOMES SMALL / DIFFICULT</div>
              <div className="bg-[#635BFF] text-white p-3 border border-white rounded font-black">
                GEMINI → Generates hyper-specific adaptive question
              </div>
              <div className="text-sm font-black text-[#FFD600]">↓</div>
              <div className="bg-[#FFD600] text-[#111111] p-3 border border-black rounded font-black">
                QUESTION RETURNS TO GAME LOOP
              </div>
            </div>

            <div className="space-y-3 font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2]">
              {project.adaptiveAiPoints.map((pt, idx) => (
                <div key={idx} className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-4 rounded-xl flex items-start gap-3">
                  <span className="font-mono text-xs font-black bg-[#635BFF] text-white px-2 py-0.5 rounded shrink-0">
                    0{idx + 1}
                  </span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* IPLMIND SECTION 06 — CONFIDENCE ENGINE */}
        {isIPLMind && project.confidenceEnginePoints && (
          <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
              <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                06 — CONFIDENCE ENGINE
              </h2>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
              DYNAMIC PROBABILITY STATE & 3-GUESS FLOW
            </h3>

            <div className="bg-[#FFD600] text-[#111111] p-5 border-3 border-[#111111] rounded-xl brutal-shadow-sm mb-6 font-mono text-xs">
              <div className="font-black text-sm uppercase mb-1 bg-white inline-block px-2 py-0.5 border border-black">
                UI CONFIDENCE CEILING & RE-BALANCING
              </div>
              <p className="font-bold leading-relaxed">
                Display confidence uses probability smoothing capped at a maximum 97% UI display confidence. The system can make up to 3 guesses; if a guess is incorrect, the player is excluded, candidate probabilities re-balance, and questioning continues.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.confidenceEnginePoints.map((pt, idx) => (
                <div key={idx} className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-4 rounded-xl flex items-start gap-3 font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2]">
                  <CheckCircle2 className="w-5 h-5 text-[#635BFF] dark:text-[#FFD600] shrink-0 stroke-[2.5]" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* IPLMIND SECTION 07 — GLOBAL LEARNING */}
        {isIPLMind && project.globalLearningPoints && (
          <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
              <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                07 — GLOBAL LEARNING
              </h2>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
              GEMINI METADATA ENRICHMENT & FIRESTORE PERSISTENCE
            </h3>

            <div className="bg-[#111111] text-[#F7F7F2] p-6 rounded-xl border-3 border-[#111111] font-mono text-xs mb-6 text-center">
              <div className="flex flex-wrap items-center justify-center gap-2 font-bold">
                <span className="bg-[#242424] px-3 py-1 rounded text-white">GAME</span>
                <span className="text-[#FFD600]">→</span>
                <span className="bg-[#FFD600] text-[#111111] px-3 py-1 rounded font-black">SYSTEM STUMPED</span>
                <span className="text-[#FFD600]">→</span>
                <span className="bg-[#635BFF] text-white px-3 py-1 rounded">GEMINI METADATA ENRICHMENT</span>
                <span className="text-[#FFD600]">→</span>
                <span className="bg-[#242424] text-[#FFD600] px-3 py-1 rounded font-black">FIRESTORE</span>
                <span className="text-[#FFD600]">→</span>
                <span className="bg-[#FFD600] text-[#111111] px-3 py-1 rounded font-black">FUTURE GAMES BENEFIT</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2]">
              {project.globalLearningPoints.map((pt, idx) => (
                <div key={idx} className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-4 rounded-xl flex items-start gap-3">
                  <span className="font-mono text-xs font-black bg-[#FFD600] text-[#111111] px-2 py-0.5 border border-black rounded shrink-0">
                    0{idx + 1}
                  </span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* IPLMIND SECTION 08 — THE DATA LAYER */}
        {isIPLMind && project.iplDataPoints && (
          <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
              <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                08 — THE DATA LAYER
              </h2>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
              IPL PLAYER PROFILES & ATTRIBUTE SPACE
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2]">
              {project.iplDataPoints.map((pt, idx) => (
                <div key={idx} className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-4 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#635BFF] dark:text-[#FFD600] shrink-0 stroke-[2.5]" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* IPLMIND SECTION 09 — THE EXPERIENCE */}
        {isIPLMind && project.iplExperiencePoints && (
          <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
              <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                09 — THE EXPERIENCE
              </h2>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
              GAMEPLAY FLOW & DIFFICULTY-AWARE LEADERBOARD
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2]">
              {project.iplExperiencePoints.map((pt, idx) => (
                <div key={idx} className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-4 rounded-xl flex items-start gap-3">
                  <span className="font-mono text-xs font-black bg-[#111111] dark:bg-[#F7F7F2] text-[#FFD600] dark:text-[#111111] px-2 py-0.5 rounded shrink-0">
                    0{idx + 1}
                  </span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* IPLMIND SECTION 10 — BUILDING THE EXPERIENCE & VISUAL ENGINEERING */}
        {isIPLMind && project.iplVisualEngine && (
          <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
              <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                10 — BUILDING THE EXPERIENCE
              </h2>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
              VISUAL ENGINEERING & LIGHTWEIGHT CINEMATIC UI
            </h3>

            <div className="bg-[#FFD600] text-[#111111] p-4 border-2 border-[#111111] rounded-xl font-mono text-xs font-black mb-6">
              &quot;Designed to achieve a smooth cinematic visual experience without relying on a heavy 3D engine.&quot;
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2]">
              {project.iplVisualEngine.map((pt, idx) => (
                <div key={idx} className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-4 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#635BFF] dark:text-[#FFD600] shrink-0 stroke-[2.5]" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* IPLMIND SECTION 11 — AI STACK + ARCHITECTURE */}
        {isIPLMind && project.iplAiStack && (
          <section className="bg-[#635BFF] text-white border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Network className="w-6 h-6 text-[#FFD600] stroke-[2.5]" />
              <h2 className="font-mono text-sm font-black text-[#FFD600] uppercase tracking-wider">
                11 — AI STACK + ARCHITECTURE
              </h2>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight mb-6">
              AI PROVIDERS & SYSTEM ARCHITECTURE
            </h3>

            {/* Architecture Flow Card */}
            <div className="bg-[#111111] text-[#F7F7F2] p-6 rounded-xl border-3 border-white font-mono text-xs mb-8 text-center">
              <div className="text-sm font-black text-[#FFD600] uppercase mb-4 border-b border-white/20 pb-2">
                SYSTEM REASONING ARCHITECTURE
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 font-bold text-center">
                <div className="bg-[#242424] p-3 border border-[#F7F7F2] rounded">IPL PLAYER DATA</div>
                <div className="bg-[#635BFF] p-3 border border-white rounded">CANDIDATE ENGINE</div>
                <div className="bg-[#242424] p-3 border border-[#F7F7F2] rounded">BAYESIAN MODEL</div>
                <div className="bg-[#FFD600] text-[#111111] p-3 border border-black rounded">SEMANTIC CONSTRAINTS</div>
              </div>
              <div className="my-3 text-[#FFD600] font-black text-sm">↓ QUESTION SELECTION (HARD SET → GEMINI ADAPTIVE QUESTION)</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-bold">
                <div className="bg-[#635BFF] p-3 border border-white rounded">GAME STATE</div>
                <div className="bg-[#FFD600] text-[#111111] p-3 border border-black rounded">GUESS</div>
                <div className="bg-[#242424] text-[#FFD600] p-3 border border-[#F7F7F2] rounded">FIRESTORE LEARNING</div>
              </div>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {project.iplAiStack.map((st) => (
                <div key={st.name} className="bg-white text-[#111111] border-2 border-[#111111] p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="font-extrabold text-sm text-[#635BFF]">#{st.name}</span>
                  <span className="font-bold text-[#111111]/80">{st.role}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs font-black bg-white text-[#111111] px-3 py-1.5 border-2 border-[#111111] rounded shadow-[2px_2px_0px_#111111]"
                >
                  #{tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* BHARATFARM SECTION 03 — WHAT WE BUILT */}
        {isBharatFarm && project.whatWeBuilt && (
          <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
              <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                03 — WHAT WE BUILT
              </h2>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-8">
              CORE FEATURE MODULES
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.whatWeBuilt.map((feat) => (
                <div
                  key={feat.title}
                  className="bg-[#F7F7F2] dark:bg-[#242424] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-xl p-6 brutal-shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-xs font-black bg-[#FFD600] text-[#111111] px-2.5 py-1 border border-[#111111] rounded">
                        {feat.id}
                      </span>
                      <span className="font-mono text-[11px] font-bold text-[#111111]/60 dark:text-[#F7F7F2]/60 uppercase">
                        {feat.subtitle}
                      </span>
                    </div>
                    <h4 className="text-xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase mb-2">
                      {feat.title}
                    </h4>
                    <p className="text-sm font-medium text-[#111111]/85 dark:text-[#F7F7F2]/85 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* BHARATFARM SECTION 04 — TECHNOLOGY STACK */}
        {isBharatFarm && (
          <section className="bg-[#635BFF] text-white border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="w-6 h-6 text-[#FFD600] stroke-[2.5]" />
              <h2 className="font-mono text-sm font-black text-[#FFD600] uppercase tracking-wider">
                04 — TECHNOLOGY STACK
              </h2>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight mb-6">
              CORE LANGUAGES, LIBRARIES & SERVICES
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-sm font-black bg-white text-[#111111] px-4 py-2 border-2 border-[#111111] rounded-lg shadow-[3px_3px_0px_#111111]"
                >
                  #{tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* BHARATFARM SECTION 05 — INTELLIGENCE LAYER */}
        {isBharatFarm && project.intelligencePoints && (
          <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
              <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                05 — INTELLIGENCE LAYER
              </h2>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
              AI, ML & CONSULTATION ADVISORY
            </h3>

            <p className="text-sm md:text-base font-bold text-[#111111]/80 dark:text-[#F7F7F2]/80 mb-6 bg-[#F7F7F2] dark:bg-[#242424] p-4 border-2 border-[#111111] dark:border-[#F7F7F2] rounded-xl font-mono">
              Generative AI services (Gemini / OpenRouter) are integrated into the agricultural advisory layer to provide contextual farmer recommendations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.intelligencePoints.map((pt, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-4 rounded-xl brutal-shadow-sm flex items-start gap-3"
                >
                  <Zap className="w-5 h-5 text-[#635BFF] dark:text-[#FFD600] shrink-0 mt-0.5 stroke-[2.5]" />
                  <span className="font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2] leading-relaxed">
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* BHARATFARM SECTION 06 — SYSTEM ARCHITECTURE */}
        {isBharatFarm && project.architectureStack && (
          <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
              <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                06 — SYSTEM ARCHITECTURE
              </h2>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
              NPM WORKSPACES MONOREPO (CLIENT / SERVER / SHARED)
            </h3>

            <p className="font-mono text-xs md:text-sm text-[#111111]/90 dark:text-[#F7F7F2]/90 mb-8 bg-[#F7F7F2] dark:bg-[#242424] p-4 rounded-xl border-2 border-[#111111] dark:border-[#F7F7F2]">
              The project is structured as a modular npm monorepo separating front-end client components, backend RESTful endpoints, and shared TypeScript domain interfaces.
            </p>

            {/* Visual Architecture Diagram */}
            <div className="bg-white dark:bg-[#111111] text-[#111111] dark:text-[#F7F7F2] border-3 border-[#111111] dark:border-[#F7F7F2] p-6 rounded-xl brutal-shadow mb-8 font-mono">
              <div className="text-center font-extrabold text-base md:text-lg uppercase border-b-2 border-[#111111] dark:border-[#F7F7F2] pb-3 mb-6">
                BHARATFARM SYSTEM TOPOLOGY
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-center text-xs font-bold">
                <div className="bg-[#FFD600] text-[#111111] p-3 border-2 border-[#111111] rounded-lg">
                  <div className="font-black">CLIENT</div>
                  <div className="text-[10px] mt-1">React 18 + Vite</div>
                </div>
                <div className="hidden md:flex items-center justify-center font-black text-sm">→</div>
                <div className="bg-[#635BFF] text-white p-3 border-2 border-[#111111] rounded-lg">
                  <div className="font-black">SERVER</div>
                  <div className="text-[10px] mt-1">Node.js + Express</div>
                </div>
                <div className="hidden md:flex items-center justify-center font-black text-sm">→</div>
                <div className="bg-[#111111] text-[#FFD600] p-3 border-2 border-[#111111] rounded-lg">
                  <div className="font-black">SHARED & DB</div>
                  <div className="text-[10px] mt-1">Supabase + Models</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {project.architectureStack.map((st) => (
                <div key={st.layer} className="bg-[#F7F7F2] dark:bg-[#242424] text-[#111111] dark:text-[#F7F7F2] border-2 border-[#111111] dark:border-[#F7F7F2] rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <span className="font-mono text-xs font-black bg-[#FFD600] text-[#111111] px-3 py-1 border border-[#111111] rounded shrink-0 w-fit">
                    {st.layer}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {st.techs.map((t) => (
                      <span key={t} className="font-mono text-xs font-extrabold bg-white dark:bg-[#1A1A1A] px-2.5 py-1 border border-[#111111] dark:border-[#F7F7F2] rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* BHARATFARM SECTION 07 — BUILT FOR REAL USERS */}
        {isBharatFarm && project.builtForUsers && (
          <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
              <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                07 — BUILT FOR REAL USERS
              </h2>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-6">
              MULTILINGUAL & MOBILE-FIRST ACCESSIBILITY
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.builtForUsers.map((u) => (
                <div key={u.title} className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-5 rounded-xl brutal-shadow-sm">
                  <span className="font-mono text-xs font-black bg-[#FFD600] text-[#111111] px-2.5 py-1 border border-[#111111] rounded inline-block mb-3">
                    {u.title}
                  </span>
                  <ul className="space-y-2 font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2]">
                    {u.items.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* BHARATFARM SECTION 08 — PLATFORM ENGINEERING */}
        {isBharatFarm && project.platformEngineering && (
          <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
              <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                08 — PLATFORM ENGINEERING
              </h2>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
              AUTH, PWA & OFFLINE MOCK MODE
            </h3>

            <div className="bg-[#FFD600] text-[#111111] p-5 border-3 border-[#111111] rounded-xl brutal-shadow-sm mb-6">
              <div className="font-mono text-xs font-black uppercase mb-1 bg-white inline-block px-2 py-0.5 border border-[#111111] rounded">
                OFFLINE & TESTING RESILIENCE
              </div>
              <p className="font-mono text-xs md:text-sm font-bold leading-relaxed">
                &quot;The platform includes mock-data support (<code className="bg-white px-1 py-0.5 border border-black">USE_MOCK_DATA=true</code>) and PWA/offline caching mechanisms to reduce dependence on live external services during testing and offline-capable scenarios.&quot;
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.platformEngineering.map((eng, idx) => (
                <div key={idx} className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-4 rounded-xl brutal-shadow-sm flex items-start gap-3">
                  <span className="font-mono text-xs font-black bg-[#111111] dark:bg-[#F7F7F2] text-[#FFD600] dark:text-[#111111] px-2 py-0.5 rounded">
                    0{idx + 1}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2]">
                    {eng}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* BHARATFARM SECTION — WHAT THE SYSTEM ENABLES */}
        {isBharatFarm && project.enables && (
          <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
              <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                WHAT THE SYSTEM ENABLES
              </h2>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-6">
              SYSTEM CAPABILITIES & FUNCTIONAL OUTCOMES
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.enables.map((cap, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-[#FFD600] text-[#111111] p-4 border-2 border-[#111111] dark:border-[#F7F7F2] rounded-xl brutal-shadow-sm font-mono text-xs font-black"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#111111] shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* RESQAI SPECIFIC SECTIONS 03 TO 11 */}
        {isResQAI && project.crisisPortalFeatures && (
          <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
              <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                03 — CRISIS PORTAL
              </h2>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-6">
              PUBLIC EMERGENCY INTERACTION SYSTEM
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.crisisPortalFeatures.map((c) => (
                <div key={c.title} className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-5 rounded-xl brutal-shadow-sm">
                  <span className="font-mono text-xs font-black bg-[#FFD600] text-[#111111] px-2.5 py-1 border border-[#111111] rounded inline-block mb-3">
                    {c.title}
                  </span>
                  <p className="text-sm font-bold text-[#111111] dark:text-[#F7F7F2] leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {isResQAI && project.realTimeCoordination && (
          <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Radio className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
              <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                04 — REAL-TIME COORDINATION
              </h2>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-6">
              WEBSOCKET INCIDENT TELEMETRY
            </h3>

            <div className="bg-[#111111] text-[#F7F7F2] border-3 border-[#111111] p-6 rounded-xl brutal-shadow mb-6 font-mono text-center">
              <div className="text-xs font-black text-[#FFD600] mb-4 uppercase tracking-widest">
                EVENT TELEMETRY STREAM
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs font-extrabold items-center">
                <div className="bg-[#242424] p-3 border border-[#F7F7F2] rounded">USER</div>
                <div className="hidden sm:block text-[#FFD600] font-black">↓ SOS</div>
                <div className="bg-[#635BFF] text-white p-3 border border-white rounded">SOCKET.IO</div>
                <div className="hidden sm:block text-[#FFD600] font-black">↓ ROOM</div>
                <div className="bg-[#FFD600] text-[#111111] p-3 border border-black rounded">ADMIN</div>
              </div>
            </div>

            <div className="space-y-3 font-mono text-xs md:text-sm font-bold text-[#111111] dark:text-[#F7F7F2]">
              {project.realTimeCoordination.map((pt, idx) => (
                <div key={idx} className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-4 rounded-xl flex items-start gap-3">
                  <span className="font-mono text-xs font-black bg-[#635BFF] text-white px-2 py-0.5 rounded shrink-0">
                    0{idx + 1}
                  </span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {isResQAI && project.systemIsolationPoints && (
          <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
              <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                05 — SYSTEM ISOLATION
              </h2>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
              MULTI-TENANT BOUNDARY SCOPING
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 font-mono text-xs text-center">
              <div className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-4 rounded-xl">
                <div className="font-black text-sm bg-[#FFD600] text-[#111111] p-1.5 rounded border border-black mb-2">SYSTEM A</div>
                <div className="text-[#111111]/80 dark:text-[#F7F7F2]/80 font-bold">• system_id_A data</div>
                <div className="text-[#111111]/80 dark:text-[#F7F7F2]/80 font-bold">• Socket.IO Room A</div>
              </div>
              <div className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-4 rounded-xl">
                <div className="font-black text-sm bg-[#635BFF] text-white p-1.5 rounded border border-black mb-2">SYSTEM B</div>
                <div className="text-[#111111]/80 dark:text-[#F7F7F2]/80 font-bold">• system_id_B data</div>
                <div className="text-[#111111]/80 dark:text-[#F7F7F2]/80 font-bold">• Socket.IO Room B</div>
              </div>
              <div className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-4 rounded-xl">
                <div className="font-black text-sm bg-[#111111] dark:bg-[#F7F7F2] text-[#FFD600] dark:text-[#111111] p-1.5 rounded border border-black mb-2">SYSTEM C</div>
                <div className="text-[#111111]/80 dark:text-[#F7F7F2]/80 font-bold">• system_id_C data</div>
                <div className="text-[#111111]/80 dark:text-[#F7F7F2]/80 font-bold">• Socket.IO Room C</div>
              </div>
            </div>

            <div className="bg-[#FFD600] text-[#111111] p-4 border-2 border-[#111111] rounded-xl font-mono text-xs font-black mb-6">
              TEST SUITE REPORT: 16 automated isolation checks executed — 16 passed, 0 failed, 0 isolation breaches detected.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2]">
              {project.systemIsolationPoints.map((pt, idx) => (
                <div key={idx} className="bg-white dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-3.5 rounded-lg flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#635BFF] dark:text-[#FFD600] shrink-0 stroke-[3]" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {isResQAI && project.rescueBuilderFeatures && (
          <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
              <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                06 — RESCUE BUILDER
              </h2>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
              NO-CODE RESCUE SYSTEM GENERATOR
            </h3>

            <div className="bg-white border-3 border-[#111111] rounded-xl p-4 font-mono font-black text-xs md:text-sm text-center uppercase tracking-tight text-[#111111] brutal-shadow-sm flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 mb-6">
              <span>BUILD</span>
              <span className="hidden md:inline">→</span>
              <span className="md:hidden">↓</span>
              <span className="bg-[#FFD600] px-2 py-0.5 rounded border border-black">CONFIGURE</span>
              <span className="hidden md:inline">→</span>
              <span className="md:hidden">↓</span>
              <span>GENERATE QR</span>
              <span className="hidden md:inline">→</span>
              <span className="md:hidden">↓</span>
              <span className="bg-[#635BFF] text-white px-2 py-0.5 rounded">DEPLOY</span>
              <span className="hidden md:inline">→</span>
              <span className="md:hidden">↓</span>
              <span>RESPOND</span>
            </div>

            <div className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-5 rounded-xl mb-6">
              <span className="font-mono text-xs font-black bg-[#635BFF] text-white px-2.5 py-1 rounded inline-block mb-2">
                PUBLIC EMERGENCY ACCESS UX
              </span>
              <p className="font-mono text-xs md:text-sm font-bold text-[#111111] dark:text-[#F7F7F2] leading-relaxed">
                Admin creates system → Generates system QR → Public user scans → Instant emergency portal access (no credential login required for public emergency flows).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.rescueBuilderFeatures.map((f, idx) => (
                <div key={idx} className="bg-white dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-4 rounded-xl flex items-start gap-3">
                  <span className="font-mono text-xs font-black bg-[#FFD600] text-[#111111] px-2 py-0.5 border border-black rounded shrink-0">
                    0{idx + 1}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2]">
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {isResQAI && project.aiMapAnalysisPoints && (
          <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
              <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                07 — AI MAP ANALYSIS
              </h2>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
              VISION-BASED FLOOR PLAN INTELLIGENCE
            </h3>

            <div className="bg-[#111111] text-[#F7F7F2] p-4 border-2 border-[#111111] rounded-xl font-mono text-xs text-center mb-6">
              <div className="flex flex-wrap items-center justify-center gap-2 font-bold">
                <span>FLOOR PLAN</span>
                <span className="text-[#FFD600]">→</span>
                <span>VISION MODEL</span>
                <span className="text-[#FFD600]">→</span>
                <span>LAYOUT ANALYSIS</span>
                <span className="text-[#FFD600]">→</span>
                <span className="text-[#FFD600]">SAFETY SCORE</span>
                <span className="text-[#FFD600]">→</span>
                <span>EXITS + RISKS</span>
                <span className="text-[#FFD600]">→</span>
                <span className="bg-[#635BFF] px-2 py-0.5 rounded text-white">EVACUATION GUIDE</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.aiMapAnalysisPoints.map((pt, idx) => (
                <div key={idx} className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-4 rounded-xl font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2]">
                  • {pt}
                </div>
              ))}
            </div>
          </section>
        )}

        {isResQAI && project.aiRouterStack && (
          <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Network className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
              <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                08 — AI ROUTER
              </h2>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-4">
              MULTI-PROVIDER FALLBACK ROUTER
            </h3>

            <p className="font-mono text-xs md:text-sm font-bold text-[#111111]/80 dark:text-[#F7F7F2]/80 mb-6 bg-[#F7F7F2] dark:bg-[#242424] p-4 border-2 border-[#111111] dark:border-[#F7F7F2] rounded-xl">
              Routes emergency advisory and map analysis queries through multiple AI providers, automatically falling back when a provider encounters rate limits or errors.
            </p>

            <div className="space-y-3 font-mono text-xs">
              {project.aiRouterStack.map((prov, idx) => (
                <div key={prov.name} className="bg-white dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-3.5 rounded-xl flex items-center justify-between gap-4 brutal-shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="font-black bg-[#FFD600] text-[#111111] px-2.5 py-1 border border-black rounded">
                      STEP 0{idx + 1}
                    </span>
                    <span className="font-extrabold text-sm text-[#111111] dark:text-[#F7F7F2]">
                      {prov.name}
                    </span>
                  </div>
                  <span className="text-[#111111]/70 dark:text-[#F7F7F2]/70 font-bold">
                    {prov.type}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {isResQAI && project.locationStack && project.liveContextSources && (
          <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
              <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                09 — LOCATION INTELLIGENCE
              </h2>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-6">
              GEOSPATIAL STACK & LIVE CONTEXT SOURCES
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-5 rounded-xl">
                <span className="font-mono text-xs font-black bg-[#FFD600] text-[#111111] px-2.5 py-1 border border-black rounded inline-block mb-3">
                  LOCATION & MAPPING STACK
                </span>
                <ul className="space-y-2 font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2]">
                  {project.locationStack.map((st, idx) => (
                    <li key={idx}>• {st}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-5 rounded-xl">
                <span className="font-mono text-xs font-black bg-[#635BFF] text-white px-2.5 py-1 rounded inline-block mb-3">
                  LIVE CONTEXT FEEDS
                </span>
                <ul className="space-y-2 font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2]">
                  {project.liveContextSources.map((src, idx) => (
                    <li key={idx}>• {src}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {isResQAI && project.builtForUsers && (
          <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
              <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                10 — DESIGNED FOR ACCESS
              </h2>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-6">
              MULTILINGUAL & HIGH-STRESS ACCESSIBILITY
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.builtForUsers.map((u) => (
                <div key={u.title} className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] p-5 rounded-xl brutal-shadow-sm">
                  <span className="font-mono text-xs font-black bg-[#FFD600] text-[#111111] px-2.5 py-1 border border-[#111111] rounded inline-block mb-3">
                    {u.title}
                  </span>
                  <ul className="space-y-2 font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2]">
                    {u.items.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {isResQAI && project.engineeringHighlights && (
          <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
              <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                11 — ENGINEERING HIGHLIGHTS
              </h2>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-6">
              SYSTEM CAPABILITY BLOCKS
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.engineeringHighlights.map((h) => (
                <div key={h.title} className={`${h.bg} ${h.color} border-3 border-[#111111] dark:border-[#F7F7F2] rounded-xl p-5 brutal-shadow-sm text-center flex flex-col justify-center`}>
                  <div className="font-extrabold text-2xl uppercase mb-1">{h.title}</div>
                  <div className="font-mono text-xs font-bold opacity-90">{h.subtitle}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* RESQAI SECTION 12 — ARCHITECTURE & TECH STACK */}
        {isResQAI && (
          <section className="bg-[#635BFF] text-white border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="w-6 h-6 text-[#FFD600] stroke-[2.5]" />
              <h2 className="font-mono text-sm font-black text-[#FFD600] uppercase tracking-wider">
                12 — ARCHITECTURE & TECH STACK
              </h2>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight mb-6">
              CORE LANGUAGES, LIBRARIES & SERVICES
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-sm font-black bg-white text-[#111111] px-4 py-2 border-2 border-[#111111] rounded-lg shadow-[3px_3px_0px_#111111]"
                >
                  #{tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* GENERIC PROJECTS (NON-BHARATFARM, NON-RESQAI, NON-IPLMIND) TECH STACK */}
        {!isBharatFarm && !isResQAI && !isIPLMind && (
          <section className="bg-[#635BFF] text-white border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="w-6 h-6 text-[#FFD600] stroke-[2.5]" />
              <h2 className="font-mono text-sm font-black text-[#FFD600] uppercase tracking-wider">
                04 — TECHNOLOGY STACK
              </h2>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight mb-6">
              CORE LANGUAGES, LIBRARIES & SERVICES
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-sm font-black bg-white text-[#111111] px-4 py-2 border-2 border-[#111111] rounded-lg shadow-[3px_3px_0px_#111111]"
                >
                  #{tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* MY CONTRIBUTION */}
        <section className="bg-[#111111] text-[#F7F7F2] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-[#FFD600] stroke-[2.5]" />
            <h2 className="font-mono text-sm font-black text-[#FFD600] uppercase tracking-wider">
              {isIPLMind ? "12 — MY CONTRIBUTION" : isResQAI ? "13 — MY CONTRIBUTION" : "PROJECT CONTRIBUTION"}
            </h2>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-[#F7F7F2] uppercase tracking-tight mb-4">
            {isIPLMind ? "LEAD FRONTEND DEVELOPER" : "TEAM COLLABORATION & ROLE"}
          </h3>
          <div className="bg-[#242424] border-2 border-[#F7F7F2] p-6 rounded-xl font-mono text-xs md:text-sm space-y-3">
            <div>
              <strong className="text-[#FFD600]">TEAM PROJECT:</strong> {project.team || "Smart India Hackathon Team"}
            </div>
            <div>
              <strong className="text-[#FFD600]">ROLE:</strong> {project.role || "Full-Stack Developer"}
            </div>
            <div className="text-[#F7F7F2]/90 leading-relaxed pt-2 border-t border-[#F7F7F2]/20">
              {project.myContributionDetail ||
                "Developed as a collaborative team project combining real-time communication, responsive interfaces, and server components."}
            </div>
          </div>
        </section>

        {/* ENGINEERING CHALLENGES (13 FOR IPLMIND, 14 FOR RESQAI) */}
        {isIPLMind && project.iplChallenges && (
          <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Flame className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
              <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                13 — ENGINEERING CHALLENGES
              </h2>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-6">
              DOCUMENTED SYSTEM CHALLENGES
            </h3>
            <div className="space-y-4">
              {project.iplChallenges.map((c, idx) => (
                <div key={idx} className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] rounded-xl p-5 brutal-shadow-sm">
                  <span className="font-mono text-xs font-black text-[#635BFF] dark:text-[#FFD600] block mb-1 uppercase">
                    CHALLENGE 0{idx + 1}: {c.title}
                  </span>
                  <p className="text-sm font-bold text-[#111111] dark:text-[#F7F7F2] leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {isResQAI && project.whatMadeItHard && (
          <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Flame className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
              <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                14 — WHAT MADE IT HARD
              </h2>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-6">
              ENGINEERING CHALLENGES & COMPLEXITY
            </h3>
            <div className="space-y-4">
              {project.whatMadeItHard.map((c, idx) => (
                <div key={idx} className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] rounded-xl p-5 brutal-shadow-sm">
                  <span className="font-mono text-xs font-black text-[#635BFF] dark:text-[#FFD600] block mb-1">
                    CHALLENGE #{idx + 1}: {c.title}
                  </span>
                  <p className="text-sm font-bold text-[#111111] dark:text-[#F7F7F2] leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* RESQAI 15 — VERIFIED SYSTEM BEHAVIOR */}
        {isResQAI && project.verifiedBehavior && (
          <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
              <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
                15 — VERIFIED SYSTEM BEHAVIOR
              </h2>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-6">
              VERIFIED ARCHITECTURAL TELEMETRY
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.verifiedBehavior.map((res, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-[#FFD600] text-[#111111] p-4 border-2 border-[#111111] dark:border-[#F7F7F2] rounded-xl brutal-shadow-sm font-mono text-xs font-black"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#111111] shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>{res}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* WHAT WE LEARNED (SECTION 14 FOR IPLMIND, 09 FOR BHARATFARM, 16 FOR RESQAI, 07 FOR OTHERS) */}
        <section className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-[#635BFF] dark:text-[#FFD600] stroke-[2.5]" />
            <h2 className="font-mono text-sm font-black text-[#635BFF] dark:text-[#FFD600] uppercase tracking-wider">
              {isIPLMind ? "14 — WHAT I LEARNED" : isResQAI ? "16 — WHAT WE LEARNED" : isBharatFarm ? "09 — WHAT WE LEARNED" : "07 — WHAT I LEARNED"}
            </h2>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-6">
            TECHNICAL INSIGHTS & ENGINEERING LESSONS
          </h3>
          <div className="space-y-4">
            {project.lessons.map((lesson, idx) => (
              <div
                key={idx}
                className="bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] rounded-xl p-5 brutal-shadow-sm"
              >
                <span className="font-mono text-xs font-black text-[#635BFF] dark:text-[#FFD600] block mb-1">
                  LESSON #{idx + 1}
                </span>
                <p className="text-base font-bold text-[#111111] dark:text-[#F7F7F2] leading-relaxed">
                  {lesson}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* GITHUB / LIVE DEMO BOTTOM LINKS (SECTION 15 FOR IPLMIND) */}
        <section className="bg-[#FFD600] text-[#111111] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-md text-center space-y-4">
          <div className="font-mono text-xs font-black bg-white inline-block px-3 py-1 border border-black rounded uppercase">
            {isIPLMind ? "15 — GITHUB / LIVE PROJECT" : "EXPLORE PROJECT"}
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold uppercase">
            EXPLORE THE {project.title} CODEBASE & PLATFORM
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <BrutalButton href={project.github} variant="black" size="lg" external icon>
              GITHUB REPOSITORY ↗
            </BrutalButton>
            {project.demo && (
              <BrutalButton href={project.demo} variant="purple" size="lg" external icon>
                LIVE DEMO ↗
              </BrutalButton>
            )}
          </div>
        </section>
        </>
        )}
      </div>
    </article>
  );
}
