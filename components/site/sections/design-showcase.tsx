"use client";

import { useState } from "react";
import { achievements, designWorks, professional } from "@/lib/data";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { motion, AnimatePresence } from "framer-motion";
import {
  DISCIPLINE_COLORS,
  MOSAIC_COLORS,
  withAlpha,
  type Discipline,
} from "@/lib/mosaic";
import { SectionLabel } from "./bits";
import { MosaicLegend, WorkMosaic, type LegendItem, type WorkTile } from "./mosaic";

/* ============================================================
   SHOWCASE KARYA DESAIN — Editorial Framer Style ala Jenul
   Dengan sentuhan:
     • Tag bracket teknis [selected] [works]
     • Filter mozaik bidang pekerjaan interaktif
     • Kartu Artboard bergaya Adobe Illustrator
     • Kunci baca mozaik (legend) terhitung otomatis
============================================================ */

const COLLAB_DISCIPLINES: Discipline[] = ["branding", "content", "print", "media"];

export function DesignShowcase() {
  const t = useT();
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const disciplines = Array.from(new Set(designWorks.map((work) => work.discipline)));

  const filteredWorks = activeFilter === "all"
    ? designWorks
    : designWorks.filter((w) => w.discipline === activeFilter);

  const tiles: WorkTile[] = filteredWorks.map((work) => ({
    id: work.id,
    label: t(work.title),
    context: t(work.context),
    year: t(work.year),
    note: t(work.note),
    color: DISCIPLINE_COLORS[work.discipline],
    weight: work.weight,
  }));

  const legend: LegendItem[] = disciplines.map((discipline) => ({
    color: DISCIPLINE_COLORS[discipline],
    label: t(C.design.disciplines[discipline]),
    count: designWorks.filter((work) => work.discipline === discipline).length,
  }));

  const programColor = MOSAIC_COLORS[DISCIPLINE_COLORS.program];

  return (
    <section
      id="design-works"
      className="relative w-full border-t border-black/5 bg-mosaic-black px-6 py-16 md:px-12 md:py-24 lg:px-20"
    >
      <div className="mb-6 flex w-full flex-col gap-4">
        <SectionLabel className="font-mono tracking-[0.22em] text-neutral-400" />
      </div>

      {/* ── HEADER EDITORIAL ALA JENUL ── */}
      <div className="mb-10 flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <span className="h-px w-8 bg-mosaic-lemon" />
          <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-mosaic-lemon">
            works
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-400">
            {designWorks.length} documented artboards
          </span>
        </div>

        <div className="grid w-full grid-cols-1 items-end gap-8 lg:grid-cols-12 mt-2">
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-editorial text-4xl leading-[1.05] tracking-tight text-mosaic-cream sm:text-5xl md:text-6xl"
            >
              {t(C.design.worksTitle)}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600"
            >
              {t(C.design.worksNote)}
            </motion.p>
          </div>

          <MosaicLegend
            className="lg:col-span-5"
            items={legend}
            title={t(C.design.legendTitle)}
            hint={t(C.design.legendHint)}
            countLabel={t(C.design.legendCount)}
          />
        </div>
      </div>

      {/* ── FILTER TABS BIDANG MOZAIK ── */}
      <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-black/5 pb-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-400">
          filter
        </span>
        <button
          type="button"
          onClick={() => setActiveFilter("all")}
          className={`font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${
            activeFilter === "all"
              ? "text-mosaic-lemon"
              : "text-neutral-500 hover:text-mosaic-cream"
          }`}
        >
          {t({ id: "Semua Bidang", en: "All Disciplines" })}
        </button>

        {disciplines.map((d) => {
          const hex = MOSAIC_COLORS[DISCIPLINE_COLORS[d]];
          const isActive = activeFilter === d;
          return (
            <button
              key={d}
              type="button"
              onClick={() => setActiveFilter(d)}
              className="font-mono text-[10px] uppercase tracking-[0.2em] transition-colors"
              style={{ color: isActive ? hex : withAlpha(hex, 0.5) }}
            >
              {t(C.design.disciplines[d])}
            </button>
          );
        })}
      </div>

      {/* ── GRID MOZAIK KARYA ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.35 }}
          className="mb-16"
        >
          <WorkMosaic tiles={tiles} />
        </motion.div>
      </AnimatePresence>

      {/* ── KOLABORASI DESAIN ── */}
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-8 bg-mosaic-crimson" />
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mosaic-crimson">
          {t(C.design.collab)}
        </p>
      </div>

      <div className="mb-16 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {professional.map((item, i) => {
          const discipline = COLLAB_DISCIPLINES[i % COLLAB_DISCIPLINES.length];
          const color = MOSAIC_COLORS[DISCIPLINE_COLORS[discipline]];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-5"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{ background: color }}
              />

              <div>
                <span
                  className="mb-3 block font-mono text-[9px] uppercase tracking-[0.22em]"
                  style={{ color }}
                >
                  {t(C.design.disciplines[discipline])}
                </span>

                <h3 className="mb-2 font-editorial text-lg leading-snug tracking-tight text-mosaic-ink">
                  {t(item.role)}
                </h3>
                <p className="mb-4 text-xs leading-relaxed text-neutral-600">
                  {t(item.desc)}
                </p>
              </div>

              {item.year.id !== "" ? (
                <span className="border-t border-black/5 pt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                  {t(item.year)}
                </span>
              ) : null}
            </motion.div>
          );
        })}
      </div>

      {/* ── PENCAPAIAN & SERTIFIKASI ── */}
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-8" style={{ background: programColor }} />
        <p
          className="font-mono text-[10px] uppercase tracking-[0.3em]"
          style={{ color: programColor }}
        >
          {t(C.design.achievements)}
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex items-center justify-between gap-4 rounded-2xl border border-black/10 bg-white p-5"
          >
            <div className="flex items-start gap-3">
              <span
                className="mt-1.5 block h-2.5 w-2.5 shrink-0 rounded-[3px]"
                style={{ background: programColor }}
              />
              <div>
                <h3 className="text-base font-extrabold tracking-tight text-mosaic-ink md:text-lg">
                  {t(item.title)}
                </h3>
                <p className="mt-0.5 text-sm text-neutral-600">{t(item.desc)}</p>
              </div>
            </div>
            <span className="shrink-0 font-mono text-xs text-neutral-400">[{item.year}]</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
