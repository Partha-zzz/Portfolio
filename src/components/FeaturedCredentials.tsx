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
  const featuredIds = ["ai-fluency-anthropic", "ai-skills-house"];
  const featuredCredentials = featuredIds
    .map((id) => CREDENTIALS.find((c) => c.id === id))
    .filter((c): c is Credential => Boolean(c));

  return (
    <section id="featured-credentials" className="scroll-mt-24">
      <SectionHeading
        number="03"
        title="FEATURED CREDENTIALS."
        subtitle="A compact preview of two verified credentials from the full Certifications archive."
        badge="CERTIFICATE PREVIEW"
        badgeColor="purple"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {featuredCredentials.map((cred, index) => (
          <motion.div
            key={cred.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className={`group relative bg-white dark:bg-[#222222] border-3 border-[#111111] dark:border-[#77756F] rounded-2xl p-6 brutal-shadow-md hover:shadow-[10px_10px_0px_var(--shadow)] flex flex-col justify-between overflow-hidden transition-all ${cred.rotation}`}
          >
            {/* Top Tape Pin */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#FFD600]/80 dark:bg-[#E8C400]/60 border border-[#111111] dark:border-[#77756F] rounded-sm brutal-shadow-sm rotate-[-2deg] z-20" />

            <div>
              {/* Category & Type Header */}
              <div className="flex items-center justify-between gap-2 mb-4 pt-2">
                <span className="font-mono text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 border border-[#111111] dark:border-[#77756F] rounded bg-[#F7F7F2] dark:bg-[#272727] text-[#111111] dark:text-[#E8E6DF]">
                  {cred.organization}
                </span>
                <span className="font-mono text-[10px] font-black px-2.5 py-0.5 border border-[#111111] dark:border-[#77756F] rounded uppercase bg-[#635BFF] dark:bg-[#6259D6] text-white">
                  {cred.type}
                </span>
              </div>

              {/* Certificate Image Frame */}
              <Link href="/certifications" className="block">
                <div className="w-full aspect-[16/10] mb-5 border-3 border-[#111111] dark:border-[#77756F] rounded-xl relative overflow-hidden bg-white dark:bg-[#222222] transition-transform duration-300 group-hover:scale-[1.01] cursor-pointer">
                  <Image
                    src={cred.image}
                    alt={`${cred.title} certificate`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain object-center rounded-lg"
                  />
                  {cred.badge && (
                    <div className="absolute bottom-2 right-2 z-10 font-mono text-[10px] font-black bg-[#FFD600] dark:bg-[#E8C400] text-[#111111] px-2 py-0.5 border border-[#111111] rounded shadow-[1px_1px_0px_#111111]">
                      {cred.badge}
                    </div>
                  )}
                </div>
              </Link>

              {/* Title & Description */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#635BFF] dark:text-[#E8C400]">
                  <ShieldCheck className="w-4 h-4 text-[#FFD600] dark:text-[#E8C400] fill-[#111111]" />
                  <span>VERIFIED CREDENTIAL</span>
                </div>

                <h3 className="font-extrabold text-xl md:text-2xl text-[#111111] dark:text-[#E8E6DF] leading-tight uppercase group-hover:text-[#635BFF] dark:group-hover:text-[#E8C400] transition-colors">
                  {cred.title}
                </h3>

                <p className="text-xs sm:text-sm font-medium text-[#111111]/80 dark:text-[#B8B6AE] line-clamp-2">
                  {cred.description}
                </p>
              </div>
            </div>

            {/* Card Footer Link */}
            <div className="pt-4 border-t-2 border-[#111111]/10 dark:border-[#45443F] flex items-center justify-between mt-2">
              <span className="font-mono text-xs font-bold text-[#111111]/60 dark:text-[#9F9D96]">
                ISSUED {cred.date}
              </span>

              <Link
                href="/certifications"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-black uppercase text-[#111111] dark:text-[#E8E6DF] group-hover:text-[#635BFF] dark:group-hover:text-[#E8C400] transition-colors"
              >
                <span>VIEW CERTIFICATION</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <BrutalButton href="/certifications" variant="yellow" size="lg" icon>
          VIEW ALL CERTIFICATIONS ARCHIVE ➔
        </BrutalButton>
      </div>
    </section>
  );
}
