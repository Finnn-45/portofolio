"use client";

import { useState } from "react";
import { achievements, designWorks, professional } from "@/lib/data";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { DISCIPLINE_COLORS, MOSAIC_COLORS, withAlpha, type Discipline } from "@/lib/mosaic";
import { SectionLabel } from "./bits";

/* ============================================================
   SHOWCASE KARYA DESAIN — daftar statis.
   Dulu grid mozaik + kartu artboard; sekarang tiap karya = satu baris
   dengan garis bidang pekerjaan sebagai penanda. Filter tetap dipakai karena
   itu cara tercepat memindai isi, bukan hiasan.
============================================================ */

const COLLAB_DISCIPLINES: Discipline[] = ["branding", "content", "print", "media"];

export function DesignShowcase() {
  const t = useT();
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const disciplines = Array.from(new Set(designWorks.map((work) => work.discipline)));

  const filteredWorks =
    activeFilter === "all"
      ? designWorks
      : designWorks.filter((work) => work.discipline === activeFilter);

  const programColor = MOSAIC_COLORS[DISCIPLINE_COLORS.program];

  return (
    <section
      id="design-works"
      className="relative w-full border-t border-black/5 bg-mosaic-black px-6 py-16 md:px-12 md:py-24 lg:px-20"
    >
      <div className="mb-6 flex w-full flex-col gap-4">
        <SectionLabel className="font-mono tracking-[0.22em] text-neutral-400" />
      </div>

      {/* ── HEADER ── */}
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

        <div className="mt-2 grid w-full grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <h2 className="font-editorial text-4xl leading-[1.05] tracking-tight text-mosaic-cream sm:text-5xl md:text-6xl lg:col-span-7">
            {t(C.design.worksTitle)}
          </h2>
          <p className="max-w-md shrink-0 text-sm leading-relaxed text-neutral-600 md:text-base lg:col-span-5">
            {t(C.design.galleryIntro)}
          </p>
        </div>
      </div>

      {/* ── FILTER BIDANG ── */}
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

      {/* -- DAFTAR KARYA -- */}
      <ol className="mb-16 border-t border-black/5">
        {filteredWorks.map((work) => {
          const hex = MOSAIC_COLORS[DISCIPLINE_COLORS[work.discipline]];
          return (
            <li key={work.id} className="border-b border-black/5">
              <div
                className="grid grid-cols-1 gap-2 py-6 pl-4 md:grid-cols-12 md:gap-6"
                style={{ borderLeft: `3px solid ${hex}` }}
              >
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.22em] md:col-span-3"
                  style={{ color: hex }}
                >
                  /{work.id} · {t(C.design.disciplines[work.discipline])}
                </span>
                <div className="md:col-span-9">
                  <h3 className="font-editorial text-2xl leading-tight tracking-tight text-mosaic-cream sm:text-3xl">
                    {t(work.title)}
                  </h3>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-500">
                    {t(work.context)} · {t(work.year)}
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600">
                    {t(work.note)}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      {/* -- KOLABORASI DESAIN -- */}
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
            <div
              key={i}
              className="relative flex flex-col justify-between rounded-2xl bg-white p-5"
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
            </div>
          );
        })}
      </div>

      {/* -- PENCAPAIAN & SERTIFIKASI -- */}
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
          <div
            key={i}
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
          </div>
        ))}
      </div>
    </section>
  );
}
