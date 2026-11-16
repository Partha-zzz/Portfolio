"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import BrutalButton from "./BrutalButton";
import { CREDENTIALS, Credential } from "@/data/credentials";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturedCredentials() {
  const featuredIds = [
    "nasa-space-apps-2026",
    "ai-skills-house",
    "ai-fluency-anthropic",
    "ultimate-job-ready-data-science-course",
  ];
  const featuredCredentials = featuredIds
    .map((id) => CREDENTIALS.find((c) => c.id === id))
    .filter((c): c is Credential => Boolean(c));

  const [activeCredential, setActiveCredential] = React.useState<Credential | null>(null);

  // Close modal on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveCredential(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="credentials" className="scroll-mt-24">
      <SectionHeading
        number="04"
        title="FEATURED CREDENTIALS."
        subtitle="A compact preview of verified credentials from the full Certifications archive."
        badge="CERTIFICATE PREVIEW"
        badgeColor="purple"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredCredentials.map((cred, index) => {
          const isAward = cred.type === "AWARD" || cred.type === "WINNER" || cred.type === "FINALIST";
          const isNasa = cred.id === "nasa-space-apps-2026";
          const altText =
            cred.id === "ultimate-job-ready-data-science-course"
              ? "Certificate of completion for The Ultimate Job Ready Data Science Course by CodeWithHarry, awarded to Partha Sarathi Sarkar"
              : isNasa
              ? "NASA Space Apps Challenge 2026 2nd Runner-Up trophy and official certificate"
              : `${cred.title} certificate`;

          return (
            <motion.div
              key={cred.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className={`group relative bg-white dark:bg-[#222222] border-3 border-[#111111] dark:border-[#77756F] rounded-2xl p-5 md:p-6 brutal-shadow-md hover:shadow-[10px_10px_0px_var(--shadow)] flex flex-col justify-between overflow-hidden transition-all ${
                cred.rotation
              } ${isNasa ? "ring-3 ring-[#FFD600] dark:ring-[#E8C400]" : ""}`}
            >
              {/* Top Tape Pin */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#FFD600]/80 dark:bg-[#E8C400]/60 border border-[#111111] dark:border-[#77756F] rounded-sm brutal-shadow-sm rotate-[-2deg] z-20" />

              <div>
                {/* Category & Type Header */}
                <div className="flex items-center justify-between gap-2 mb-4 pt-2">
                  <span className="font-mono text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 border border-[#111111] dark:border-[#77756F] rounded bg-[#F7F7F2] dark:bg-[#272727] text-[#111111] dark:text-[#E8E6DF] truncate">
                    {cred.organization}
                  </span>
                  <span
                    className={`font-mono text-[10px] font-black px-2.5 py-0.5 border border-[#111111] dark:border-[#77756F] rounded uppercase shrink-0 ${
                      isAward
                        ? "bg-[#FFD600] dark:bg-[#E8C400] text-[#111111]"
                        : "bg-[#635BFF] dark:bg-[#6259D6] text-white"
                    }`}
                  >
                    {cred.type}
                  </span>
                </div>

                {/* Certificate Image Frame */}
                <div
                  onClick={() => setActiveCredential(cred)}
                  className="w-full aspect-[4/3] sm:aspect-[16/10] mb-4 border-3 border-[#111111] dark:border-[#77756F] rounded-xl relative overflow-hidden bg-[#0F0F12] dark:bg-[#1A1A1A] transition-transform duration-300 group-hover:scale-[1.01] cursor-pointer flex items-center justify-center p-1"
                >
                  <Image
                    src={cred.image}
                    alt={altText}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain object-center rounded-lg"
                  />
                  {cred.badge && (
                    <div className="absolute bottom-2 right-2 z-10 font-mono text-[9px] sm:text-[10px] font-black bg-[#FFD600] dark:bg-[#E8C400] text-[#111111] px-2 py-0.5 border border-[#111111] rounded shadow-[1px_1px_0px_#111111] max-w-[85%] truncate">
                      {cred.badge}
                    </div>
                  )}
                </div>

                {/* Title & Description */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#635BFF] dark:text-[#E8C400]">
                    <ShieldCheck className="w-4 h-4 text-[#FFD600] dark:text-[#E8C400] fill-[#111111] shrink-0" />
                    <span>{isAward ? "VERIFIED ACHIEVEMENT" : "VERIFIED CREDENTIAL"}</span>
                  </div>

                  <h3 className="font-extrabold text-lg sm:text-xl text-[#111111] dark:text-[#E8E6DF] leading-tight uppercase group-hover:text-[#635BFF] dark:group-hover:text-[#E8C400] transition-colors line-clamp-2">
                    {cred.title}
                  </h3>

                  <p className="text-xs font-medium text-[#111111]/80 dark:text-[#B8B6AE] line-clamp-3 leading-relaxed">
                    {cred.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="pt-3 border-t-2 border-[#111111]/10 dark:border-[#45443F] flex items-center justify-between mt-2">
                <span className="font-mono text-[11px] font-bold text-[#111111]/60 dark:text-[#9F9D96]">
                  {cred.date}
                </span>

                <button
                  type="button"
                  onClick={() => setActiveCredential(cred)}
                  className="inline-flex items-center gap-1 font-mono text-xs font-black uppercase text-[#111111] dark:text-[#E8E6DF] group-hover:text-[#635BFF] dark:group-hover:text-[#E8C400] transition-colors"
                >
                  <span>VIEW</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox / Modal for Full Certificate View */}
      {activeCredential && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            onClick={() => setActiveCredential(null)}
            className="absolute inset-0 bg-[#111111]/80 backdrop-blur-xs"
          />
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#222222] border-4 border-[#111111] dark:border-[#77756F] rounded-3xl p-6 sm:p-8 brutal-shadow-lg z-10 space-y-6 text-[#111111] dark:text-[#E8E6DF]">
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-xs font-black px-3 py-1 bg-[#FFD600] dark:bg-[#E8C400] text-[#111111] border-2 border-[#111111] rounded-md uppercase">
                {activeCredential.organization} • {activeCredential.date}
              </span>
              <button
                type="button"
                onClick={() => setActiveCredential(null)}
                className="px-3 py-1 bg-[#111111] text-white dark:bg-[#E8E6DF] dark:text-[#111111] font-mono text-xs font-black rounded-lg border-2 border-[#111111] hover:bg-[#FFD600] hover:text-[#111111] transition-colors"
              >
                CLOSE [ESC]
              </button>
            </div>

            <div className="w-full h-[55vh] sm:h-[65vh] max-h-[520px] border-3 border-[#111111] dark:border-[#77756F] rounded-2xl relative overflow-hidden bg-[#0D0D11] dark:bg-[#111111] flex items-center justify-center p-2">
              <Image
                src={activeCredential.image}
                alt={
                  activeCredential.id === "ultimate-job-ready-data-science-course"
                    ? "Certificate of completion for The Ultimate Job Ready Data Science Course by CodeWithHarry, awarded to Partha Sarathi Sarkar"
                    : activeCredential.id === "nasa-space-apps-2026"
                    ? "NASA Space Apps Challenge 2026 2nd Runner-Up trophy and official certificate"
                    : `${activeCredential.title} certificate`
                }
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-contain object-center rounded-xl"
                priority
              />
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-black px-2.5 py-0.5 bg-[#635BFF] text-white rounded uppercase">
                  {activeCredential.type}
                </span>
                {activeCredential.badge && (
                  <span className="font-mono text-xs font-black px-2.5 py-0.5 bg-[#FFD600] text-[#111111] border border-[#111111] rounded uppercase">
                    {activeCredential.badge}
                  </span>
                )}
              </div>
              <h3 className="font-extrabold text-2xl uppercase">
                {activeCredential.title}
              </h3>
              <p className="text-sm font-medium text-[#111111]/80 dark:text-[#B8B6AE] leading-relaxed">
                {activeCredential.description}
              </p>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t-2 border-[#111111]/10 dark:border-[#45443F] flex flex-wrap items-center justify-between gap-3">
              <Link
                href="/certifications"
                className="font-mono text-xs font-black uppercase text-[#635BFF] dark:text-[#E8C400] hover:underline"
              >
                VIEW FULL CERTIFICATIONS ARCHIVE ➔
              </Link>
              {activeCredential.id === "nasa-space-apps-2026" && (
                <Link
                  href="/projects/nasas-forgotten-legacy"
                  className="font-mono text-xs font-black uppercase px-3 py-1.5 bg-[#FFD600] text-[#111111] border-2 border-[#111111] rounded-lg brutal-shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-transform"
                >
                  VIEW PROJECT CASE STUDY ➔
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="mt-10 text-center">
        <BrutalButton href="/certifications" variant="yellow" size="lg" icon>
          VIEW ALL CERTIFICATIONS ARCHIVE ➔
        </BrutalButton>
      </div>
    </section>
  );
}
