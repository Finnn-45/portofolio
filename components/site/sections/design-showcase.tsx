"use client";

import { professional, achievements } from "@/lib/data";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { motion } from "framer-motion";
import { SectionLabel } from "./bits";

/* Showcase karya desain: kolaborasi (MENTION, dll) + pencapaian */
export function DesignShowcase() {
  const t = useT();

  return (
    <section
      id="design-works"
      className="relative w-full bg-white px-8 md:px-16 lg:px-24 py-16 md:py-20 border-t border-neutral-100"
    >
      <div className="w-full flex flex-col gap-4 mb-8 md:mb-10">
        <SectionLabel />
      </div>

      <div className="w-full flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.92] text-[#1a1a1a] uppercase"
        >
          {t(C.design.titleLines[0])}{" "}
          {t(C.design.titleLines[1])}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm md:text-base text-gray-600 leading-relaxed max-w-md shrink-0"
        >
          {t(C.design.lede)}
        </motion.p>
      </div>

      {/* Kolaborasi desain */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#831514] mb-4"
      >
        {t(C.design.collab)}
      </motion.p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {professional.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="group flex flex-col p-6 rounded-2xl border border-neutral-200 bg-[#fafafa] transition-all duration-300 hover:-translate-y-1 hover:border-[#1a1a1a]"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="text-base md:text-lg font-extrabold tracking-tight text-[#1a1a1a] leading-snug">
                {t(item.role)}
              </h3>
              {item.year.id !== "" && (
                <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-neutral-500 bg-[#f4f1ea] px-2 py-0.5 rounded">
                  {t(item.year)}
                </span>
              )}
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {t(item.desc)}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Pencapaian */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#831514] mb-4"
      >
        {t(C.design.achievements)}
      </motion.p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex items-center justify-between gap-4 p-5 rounded-2xl border-2 border-[#1a1a1a] bg-white"
          >
            <div>
              <h3 className="text-base md:text-lg font-extrabold tracking-tight text-[#1a1a1a]">
                {t(item.title)}
              </h3>
              <p className="text-sm text-neutral-600 mt-0.5">{t(item.desc)}</p>
            </div>
            <span className="shrink-0 font-mono text-xs text-neutral-400">
              {item.year}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
