"use client";

import { socials } from "@/lib/data";
import { useLang, useT } from "@/lib/i18n";
import { C, caseStudies } from "@/lib/content";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { GithubGrid } from "@/components/site/github-grid";
import { SectionLabel, ArrowUpRight } from "./bits";
import type { CaseStudyContent } from "@/lib/content";

export function Works() {
  const [activeCase, setActiveCase] = useState<CaseStudyContent | null>(null);
  const t = useT();
  const { tl } = useLang();

  return (
    <section id="works" className="relative w-full bg-white px-8 md:px-16 lg:px-24 py-16 md:py-24">
      <div className="w-full flex flex-col gap-4 mb-12 md:mb-16">
        <SectionLabel />
      </div>

      <div className="w-full mb-10 md:mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.88] text-[#1a1a1a] uppercase mb-6"
        >
          {t(C.works.titleLines[0])}
          <br />
          {t(C.works.titleLines[1])}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl"
        >
          {t(C.works.lede)}
        </motion.p>
      </div>

      <div className="w-full flex flex-col">
        {caseStudies.map((work, i) => (
          <motion.button
            key={work.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            onClick={() => setActiveCase(work)}
            className="group flex items-center justify-between gap-6 py-6 md:py-8 text-left border-b-2 border-[#1a1a1a] transition-all duration-300 hover:pl-2"
          >
            <div className="flex items-baseline gap-4 md:gap-8 min-w-0">
              <span className="font-mono text-xs md:text-sm text-neutral-400 font-medium shrink-0">
                /{work.id}
              </span>
              <div className="min-w-0">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] uppercase tracking-tight leading-tight transition-colors duration-300 group-hover:text-[#831514]">
                  {t(work.title)}
                </h3>
                <p className="mt-1 text-xs md:text-sm text-neutral-500 font-mono uppercase tracking-wider">
                  {t(work.category)} — {work.year}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {work.tools.slice(0, 4).map((tool) => (
                    <span
                      key={tool}
                      className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 bg-[#f4f1ea] px-2 py-0.5 rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <span className="shrink-0 text-[#1a1a1a] transition-all duration-300 group-hover:text-[#831514] group-hover:scale-110">
              <ArrowUpRight />
            </span>
          </motion.button>
        ))}
      </div>

      {/* ===== GitHub: repo asli akun Finnn-45 ===== */}
      <div className="w-full mt-14 md:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-end justify-between gap-4 mb-8"
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#831514] mb-2">
              {t(C.works.githubKicker)}
            </p>
            <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight text-[#1a1a1a] uppercase">
              {t(C.works.githubTitle)}
            </h3>
          </div>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-[#1a1a1a] hover:text-[#831514] transition-colors"
          >
            {t(C.works.githubCta)}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRight />
            </span>
          </a>
        </motion.div>
        <GithubGrid />
        <p className="mt-6 font-mono text-[11px] text-neutral-400 uppercase tracking-widest">
          {t(C.works.githubNote)}
        </p>
      </div>

      <AnimatePresence>
        {activeCase && <CaseStudyModal caseStudy={activeCase} onClose={() => setActiveCase(null)} />}
      </AnimatePresence>
    </section>
  );
}

export function CaseStudyModal({ caseStudy, onClose }: { caseStudy: CaseStudyContent; onClose: () => void }) {
  const t = useT();
  const { tl } = useLang();
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const labels = tl(C.modal.sections);
  const sections = [
    { label: labels[0], body: t(caseStudy.overview) },
    { label: labels[1], body: t(caseStudy.challenge) },
    { label: labels[2], body: t(caseStudy.process) },
    { label: labels[3], body: t(caseStudy.solution) },
    { label: labels[4], body: t(caseStudy.result) },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[9998] bg-[#f4f1ea] overflow-y-auto"
    >
      <div className="sticky top-0 z-10 bg-[#f4f1ea] border-b border-neutral-200 px-8 md:px-16 py-5 flex items-center justify-between">
        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-neutral-500">
          {t(caseStudy.category)}
        </span>
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 font-mono text-xs md:text-sm font-semibold uppercase tracking-widest text-[#1a1a1a] hover:text-[#831514] transition-colors"
        >
          {t(C.modal.close)} <span className="text-lg leading-none">×</span>
        </button>
      </div>

      <div className="px-8 md:px-16 lg:px-24 py-12 md:py-20 max-w-[1400px]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] text-[#831514] font-semibold mb-4"
        >
          {caseStudy.year} — {t(caseStudy.subtitle)}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.88] text-[#1a1a1a] uppercase mb-8"
        >
          {t(caseStudy.title)}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mb-10"
        >
          {t(caseStudy.description)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          {caseStudy.tools.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] uppercase tracking-wider text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded border border-neutral-200"
            >
              {t}
            </span>
          ))}
        </motion.div>

        {caseStudy.repo && (
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            href={caseStudy.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 mb-16 font-mono text-xs md:text-sm font-semibold uppercase tracking-widest text-[#1a1a1a] hover:text-[#831514] transition-colors"
          >
            <span className="inline-flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
              </svg>
              {t(C.modal.repoLink)}
            </span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRight />
            </span>
          </motion.a>
        )}

        <div className="flex flex-col gap-16 md:gap-20">
          {sections.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10"
            >
              <h3 className="md:col-span-4 font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-neutral-500 font-semibold">
                {s.label}
              </h3>
              <p className="md:col-span-8 text-base md:text-lg text-[#1a1a1a] leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-neutral-200">
          <button
            onClick={onClose}
            className="group inline-flex items-center gap-2 font-mono text-xs md:text-sm font-semibold uppercase tracking-widest text-[#1a1a1a] hover:text-[#831514] transition-colors"
          >
            {t(C.modal.back)}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
