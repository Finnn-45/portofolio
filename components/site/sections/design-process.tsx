"use client";

import { designToolkit } from "@/lib/data";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { MOSAIC_COLORS, tone } from "@/lib/mosaic";
import { SectionLabel } from "./bits";

/* ============================================================
   PROSES & PERKAKAS — Creative Vector & Multimedia Pipeline
   Menggabungkan estetika Adobe Illustrator:
     • Alur berurutan dengan nomor langkah [01 - 05]
     • Bingkai Artboard dengan corner anchor points
     • Kartu perkakas kerja dengan swatch warna mozaik
============================================================ */

const STEP_TECH_TAGS = [
  "Brief & Vector Outline",
  "Palette & CMYK Moodboard",
  "12-Col Grid & Bezier Curve",
  "Proofing & Scale Legibility",
  ".ai / .svg / @2x Handover",
];

export function DesignProcess() {
  const t = useT();

  return (
    <section
      id="design-process"
      className="relative w-full border-t border-black/5 bg-mosaic-black px-6 py-16 md:px-12 md:py-24 lg:px-20"
    >
      <div className="mb-6 flex w-full flex-col gap-4">
        <SectionLabel className="font-mono tracking-[0.22em] text-neutral-400" />
      </div>

      <div className="mb-12 flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="h-px w-8 bg-mosaic-lemon" />
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-mosaic-lemon">
            workflow
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-400">
            5 milestones
          </span>
        </div>

        <div className="flex w-full flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-editorial text-4xl leading-[1.05] tracking-tight text-mosaic-cream sm:text-5xl md:text-6xl">
            {t(C.design.processTitle)}
          </h2>
          <p className="max-w-md shrink-0 text-sm leading-relaxed text-neutral-600 md:text-base">
            {t(C.design.processNote)}
          </p>
        </div>
      </div>

      {/* ── ALUR KERJA: 5 LANGKAH ILLUSTRATOR ARTBOARD ── */}
      <ol className="mb-16 grid w-full grid-cols-1 gap-5 md:grid-cols-5">
        {C.design.steps.map((step, i) => {
          const hex = MOSAIC_COLORS[tone(i)];
          const techTag = STEP_TECH_TAGS[i];
          return (
            <li
              key={step.title.id}
              className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-5"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{ background: hex }}
              />

              <div>
                <span
                  className="font-mono text-xs font-black tabular-nums tracking-[0.25em]"
                  style={{ color: hex }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-4 font-editorial text-lg leading-snug tracking-tight text-mosaic-ink md:text-xl">
                  {t(step.title)}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                  {t(step.desc)}
                </p>
              </div>

              <div className="mt-6 border-t border-black/5 pt-3">
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-400">
                  {techTag}
                </span>
              </div>
            </li>
          );
        })}
      </ol>

      {/* ── PERKAKAS & BAHAN (DESIGN TOOLKIT) ── */}
      <div className="mb-6 flex items-center gap-3">
        <span className="h-px w-8 bg-mosaic-lemon" />
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-mosaic-lemon">
          {t(C.design.toolkitTitle)}
        </span>
      </div>

      <div className="grid w-full grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-5">
        {designToolkit.map((tool) => (
          <div
            key={tool.name}
            className="flex flex-col gap-1 border-t border-black/10 pt-4"
          >
            <span className="text-sm font-medium tracking-tight text-mosaic-ink">
              {tool.name}
            </span>
            <span className="text-xs leading-snug text-neutral-500">
              {t(tool.use)}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-8 max-w-xl text-xs leading-relaxed text-neutral-500 font-mono">
        {t(C.design.toolkitNote)}
      </p>
    </section>
  );
}