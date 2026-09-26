"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { CREDENTIALS, Credential } from "@/data/credentials";
import { Search, Filter, CheckCircle2, X, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = [
  {
    id: "01",
    badge: "01 / FEATURED",
    title: "FEATURED CREDENTIALS",
    subtitle: "Core verified credentials and foundational achievements.",
  },
  {
    id: "02",
    badge: "02 / COMPETITIONS",
    title: "HACKATHONS & COMPETITIONS",
    subtitle: "Hackathon wins, finalist qualifications, and competitive engineering awards.",
  },
  {
    id: "03",
    badge: "03 / PROFESSIONAL",
    title: "PROFESSIONAL & TECHNICAL",
    subtitle: "Substantive technical specializations, industry certifications, and analytics simulations.",
  },
  {
    id: "04",
    badge: "04 / PARTICIPATION",
    title: "PARTICIPATION RECORDS",
    subtitle: "Verified workshop track participation, speaker sessions, and event records.",
  },
];

export default function CertificationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [selectedType, setSelectedType] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCredential, setActiveCredential] = useState<Credential | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveCredential(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const categories = ["ALL", "AI / ML", "DEVELOPMENT", "DATA", "GENERAL"];
  const typeFilters = ["ALL", "COMPLETION", "AWARD", "WINNER", "FINALIST", "PARTICIPATION", "JOB SIMULATION"];

  const filteredCredentials = CREDENTIALS.filter((item) => {
    const matchesCategory = selectedCategory === "ALL" || item.category === selectedCategory;
    const matchesType = selectedType === "ALL" || item.type === selectedType;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(q) ||
      item.organization.toLowerCase().includes(q) ||
      item.type.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      (item.badge && item.badge.toLowerCase().includes(q));

    return matchesCategory && matchesType && matchesSearch;
  });

  return (
    <div className="space-y-12 py-6">
      {/* Header */}
      <SectionHeading
        number="06"
        title="CERTIFICATE WALL."
        subtitle="A visual archive of verified certifications, courses, participation records, and achievements."
        badge="14 / VERIFIED CREDENTIALS"
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
              placeholder="SEARCH CREDENTIALS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] rounded-lg pl-10 pr-4 py-2.5 font-mono text-xs font-bold text-[#111111] dark:text-[#F7F7F2] placeholder:text-[#111111]/50 dark:placeholder:text-[#F7F7F2]/50 focus:outline-none focus:ring-2 focus:ring-[#635BFF]"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#111111]/70 dark:text-[#F7F7F2]/70 mr-2">
              <Filter className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>CATEGORY:</span>
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

        {/* Credential Type Secondary Filters */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t-2 border-[#111111]/10 dark:border-[#F7F7F2]/10">
          <span className="font-mono text-[11px] font-bold text-[#111111]/60 dark:text-[#F7F7F2]/60 mr-2 uppercase">
            TYPE:
          </span>
          {typeFilters.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedType(t)}
              className={`font-mono text-[11px] font-black px-2.5 py-1 border border-[#111111] dark:border-[#F7F7F2] rounded transition-all ${
                selectedType === t
                  ? "bg-[#635BFF] text-white"
                  : "bg-white dark:bg-[#242424] text-[#111111] dark:text-[#F7F7F2] hover:bg-[#FFD600] hover:text-[#111111]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Wall Display Grouped By Section Hierarchy */}
      {filteredCredentials.length > 0 ? (
        <div className="space-y-12">
          {SECTIONS.map((sec) => {
            const sectionItems = filteredCredentials.filter(
              (c) => c.sectionId === sec.id
            );
            if (sectionItems.length === 0) return null;

            return (
              <div key={sec.id} className="space-y-6">
                {/* Section Divider Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-3 border-[#111111] dark:border-[#F7F7F2] pb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-black px-3 py-1 bg-[#FFD600] text-[#111111] border-2 border-[#111111] rounded-md brutal-shadow-sm uppercase">
                      {sec.badge}
                    </span>
                    <h2 className="font-extrabold text-xl sm:text-2xl text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight">
                      {sec.title}
                    </h2>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#111111]/60 dark:text-[#F7F7F2]/60">
                    {sectionItems.length} {sectionItems.length === 1 ? "RECORD" : "RECORDS"}
                  </span>
                </div>

                {/* Section Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {sectionItems.map((cred, index) => {
                    const isAward = cred.type === "AWARD" || cred.type === "WINNER" || cred.type === "FINALIST";
                    return (
                      <motion.div
                        key={cred.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                        whileHover={{ y: -4 }}
                        className={`group relative bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 brutal-shadow-md hover:shadow-[10px_10px_0px_var(--shadow)] flex flex-col justify-between overflow-hidden transition-all ${
                          cred.rotation
                        } ${isAward ? "ring-2 ring-[#FFD600]" : ""}`}
                      >
                        {/* Decorative Tape Pin on Top */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#FFD600]/80 dark:bg-[#FFD600]/60 border border-[#111111] dark:border-[#F7F7F2] rounded-sm brutal-shadow-sm rotate-[-2deg] z-20" />

                        <div>
                          {/* Category & Credential Type Header */}
                          <div className="flex items-center justify-between gap-2 mb-4 pt-2">
                            <span className="font-mono text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 border border-[#111111] dark:border-[#F7F7F2] rounded bg-[#F7F7F2] dark:bg-[#242424] text-[#111111] dark:text-[#F7F7F2]">
                              {cred.category}
                            </span>
                            <span
                              className={`font-mono text-[10px] font-black px-2.5 py-0.5 border border-[#111111] dark:border-[#F7F7F2] rounded uppercase ${
                                isAward
                                  ? "bg-[#FFD600] text-[#111111] font-extrabold"
                                  : "bg-[#635BFF] text-white"
                              }`}
                            >
                              {cred.type}
                            </span>
                          </div>

                          {/* Certificate Image Frame Container */}
                          <div
                            onClick={() => setActiveCredential(cred)}
                            className="w-full aspect-[16/10] mb-5 border-3 border-[#111111] dark:border-[#F7F7F2] rounded-xl relative overflow-hidden bg-white dark:bg-[#1A1A1A] transition-transform duration-300 group-hover:scale-[1.01] cursor-pointer"
                          >
                            {/* Actual Certificate JPG Image */}
                            {cred.image ? (
                              <Image
                                src={cred.image}
                                alt={`${cred.title} certificate`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-contain object-center rounded-lg"
                              />
                            ) : (
                              <div className="relative z-10 text-center px-2 flex flex-col items-center justify-center h-full">
                                <div className="inline-flex items-center gap-1 bg-white text-[#111111] px-2.5 py-1 border-2 border-[#111111] rounded font-mono text-[10px] font-black mb-2 uppercase brutal-shadow-sm">
                                  <ShieldCheck className="w-3.5 h-3.5 text-[#635BFF]" />
                                  <span>VERIFIED RECORD</span>
                                </div>
                                <h4 className="font-extrabold text-lg sm:text-xl text-[#111111] bg-white px-3 py-1.5 border-2 border-[#111111] rounded-lg brutal-shadow-sm uppercase leading-tight">
                                  {cred.title}
                                </h4>
                              </div>
                            )}

                            {cred.badge && (
                              <div className="absolute bottom-2 right-2 z-10 font-mono text-[10px] font-black bg-[#FFD600] text-[#111111] px-2 py-0.5 border border-[#111111] rounded shadow-[1px_1px_0px_#111111]">
                                {cred.badge}
                              </div>
                            )}
                          </div>

                          {/* Title & Organization */}
                          <div className="space-y-1 mb-3">
                            <span className="font-mono text-xs font-bold text-[#635BFF] dark:text-[#FFD600] block uppercase">
                              {cred.organization} • [{cred.date}]
                            </span>
                            <h3 className="text-xl font-extrabold text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight group-hover:text-[#635BFF] dark:group-hover:text-[#FFD600] transition-colors leading-snug">
                              {cred.title}
                            </h3>
                          </div>

                          {/* Description */}
                          <p className="text-xs font-medium text-[#111111]/80 dark:text-[#F7F7F2]/80 leading-relaxed mb-4">
                            {cred.description}
                          </p>
                        </div>

                        {/* Footer Action */}
                        <div className="pt-3 border-t-2 border-[#111111] dark:border-[#F7F7F2] flex items-center justify-between text-xs font-mono font-bold text-[#111111] dark:text-[#F7F7F2]">
                          <span className="flex items-center gap-1 text-[11px] text-[#635BFF] dark:text-[#FFD600] font-black">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            VERIFIED
                          </span>
                          <button
                            onClick={() => setActiveCredential(cred)}
                            className="inline-flex items-center gap-1 font-mono text-xs font-black bg-[#FFD600] text-[#111111] px-3 py-1 border-2 border-[#111111] rounded brutal-shadow-sm hover:bg-[#111111] hover:text-[#FFD600] transition-colors uppercase"
                          >
                            <span>VIEW DETAILS →</span>
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-12 text-center brutal-shadow-md text-[#111111] dark:text-[#F7F7F2]">
          <h3 className="font-extrabold text-2xl uppercase mb-2">No matching credentials found</h3>
          <p className="font-mono text-xs text-[#111111]/70 dark:text-[#F7F7F2]/70 font-bold">
            Try adjusting your search query or selecting &quot;SHOW ALL&quot;.
          </p>
        </div>
      )}

      {/* Lightbox / Modal Viewer */}
      <AnimatePresence>
        {activeCredential && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCredential(null)}
              className="absolute inset-0 bg-[#111111]/80 backdrop-blur-xs"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white dark:bg-[#1A1A1A] border-4 border-[#111111] dark:border-[#F7F7F2] rounded-3xl p-6 sm:p-8 brutal-shadow-lg z-10 space-y-6 text-[#111111] dark:text-[#F7F7F2]"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveCredential(null)}
                className="absolute top-4 right-4 p-2 bg-[#FFD600] text-[#111111] border-2 border-[#111111] rounded-lg brutal-shadow-sm hover:bg-[#111111] hover:text-[#FFD600] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 stroke-[3]" />
              </button>

              {/* Modal Graphic Display Header */}
              <div className="w-full aspect-[16/10] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl relative overflow-hidden bg-white dark:bg-[#1A1A1A]">
                {activeCredential.image ? (
                  <Image
                    src={activeCredential.image}
                    alt={`${activeCredential.title} full certificate`}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-contain object-center rounded-xl"
                  />
                ) : (
                  <div className="relative z-10 space-y-3 p-4 text-center flex flex-col items-center justify-center h-full">
                    <span className="inline-flex items-center gap-1.5 bg-[#FFD600] text-[#111111] px-3 py-1 border-2 border-[#111111] rounded-md font-mono text-xs font-black uppercase brutal-shadow-sm">
                      <ShieldCheck className="w-4 h-4 text-[#111111]" />
                      OFFICIAL VERIFIED CREDENTIAL RECORD
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] bg-white px-4 py-2 border-3 border-[#111111] rounded-xl brutal-shadow-md uppercase">
                      {activeCredential.title}
                    </h3>
                  </div>
                )}
              </div>

              {/* Details Body */}
              <div className="space-y-4 font-mono text-sm">
                <div className="grid grid-cols-2 gap-3 bg-[#F7F7F2] dark:bg-[#242424] p-4 border-2 border-[#111111] dark:border-[#F7F7F2] rounded-xl">
                  <div>
                    <span className="text-[10px] text-[#111111]/60 dark:text-[#F7F7F2]/60 font-black block uppercase">
                      ORGANIZATION
                    </span>
                    <strong className="text-sm font-extrabold text-[#635BFF] dark:text-[#FFD600]">
                      {activeCredential.organization}
                    </strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#111111]/60 dark:text-[#F7F7F2]/60 font-black block uppercase">
                      ISSUED DATE
                    </span>
                    <strong className="text-sm font-extrabold text-[#111111] dark:text-[#F7F7F2]">
                      [{activeCredential.date}]
                    </strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#111111]/60 dark:text-[#F7F7F2]/60 font-black block uppercase">
                      CREDENTIAL TYPE
                    </span>
                    <strong className="text-sm font-extrabold text-[#111111] dark:text-[#F7F7F2]">
                      {activeCredential.type}
                    </strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#111111]/60 dark:text-[#F7F7F2]/60 font-black block uppercase">
                      CATEGORY
                    </span>
                    <strong className="text-sm font-extrabold text-[#111111] dark:text-[#F7F7F2]">
                      {activeCredential.category}
                    </strong>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs text-[#111111]/70 dark:text-[#F7F7F2]/70 font-black block uppercase">
                    RECORD SUMMARY
                  </span>
                  <p className="font-sans text-base font-medium leading-relaxed bg-white dark:bg-[#1A1A1A] p-4 border-2 border-[#111111] dark:border-[#F7F7F2] rounded-xl">
                    {activeCredential.description}
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t-2 border-[#111111] dark:border-[#F7F7F2] flex items-center justify-between">
                <span className="font-mono text-xs font-black text-[#635BFF] dark:text-[#FFD600] flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" />
                  AUTHENTICITY VERIFIED
                </span>
                <button
                  onClick={() => setActiveCredential(null)}
                  className="px-5 py-2 font-mono text-xs font-black bg-[#111111] dark:bg-[#F7F7F2] text-white dark:text-[#111111] border-2 border-[#111111] rounded-lg brutal-shadow-sm hover:bg-[#FFD600] hover:text-[#111111] transition-colors uppercase"
                >
                  CLOSE [ESC]
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
