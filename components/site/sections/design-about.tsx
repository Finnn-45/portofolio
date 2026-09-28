"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { profile, stats, education } from "@/lib/data";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { MOSAIC_COLORS, tone } from "@/lib/mosaic";
import { SectionLabel } from "./bits";

const IdCard3D = dynamic(
  () => import("@/components/site/id-card").then((m) => ({ default: m.IdCard3D })),
  { ssr: false }
);

/* ============================================================
   TENTANG — Desainer di Balik Karya (Editorial Framer Style)
   Menggabungkan:
     • Kartu Identitas 3D dengan panel inspektor layer Adobe Illustrator
     • Cerita edukasi SMK TI BAZMA Boarding School
     • 3 Aturan Desain (Ground Rules)
     • Data statistik dampak & pencapaian
============================================================ */

export function DesignAbout() {
  const t = useT();
  const [cardFull, setCardFull] = useState(false);

  return (
    <section
      id="design-about"
      className="relative w-full overflow-hidden border-t border-black/5 bg-mosaic-black px-6 py-16 md:px-12 md:py-24 lg:px-20"
    >
      <div className="mb-8 flex w-full flex-col gap-4 md:mb-12">
        <SectionLabel className="font-mono tracking-[0.22em] text-neutral-400" />
      </div>

      <div className="grid w-full grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
        {/* ── KOLOM KIRI: KARTU IDENTITAS 3D ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col gap-3"
        >
          {/* Kartu identitas 3D */}
          <div className="relative mx-auto w-full max-w-[400px] rounded-3xl bg-white p-4">
            <div className="relative h-[460px] sm:h-[520px] lg:h-[560px]">
              <IdCard3D />
              <button
                type="button"
                aria-label={t(C.about.fullscreen)}
                title={t(C.about.fullscreenShort)}
                onClick={() => setCardFull(true)}
                className="absolute right-3 top-3 z-10 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 transition-colors hover:text-mosaic-lemon"
              >
                [3D ⛶]
              </button>
            </div>
          </div>
        </motion.div>

        {/* ── KOLOM KANAN: NARASI PERSONAL & EDUKASI ── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="h-px w-8 bg-mosaic-lemon" />
            <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-mosaic-lemon">
              about
            </span>
          </div>

          <h2 className="font-editorial text-4xl leading-[1.05] tracking-tight text-mosaic-cream sm:text-5xl md:text-6xl">
            {profile.name}
          </h2>

          <div className="space-y-4 text-base leading-relaxed text-neutral-700">
            <p>{t(C.about.p1)}</p>
            <p>{t(C.about.p2)}</p>
          </div>

          {/* Latar Belakang Pendidikan */}
          <div className="mt-2 border-t border-black/10 pt-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-mosaic-lemon">
              education
            </span>
            <h4 className="mt-3 font-editorial text-xl text-mosaic-ink">
              {education.school}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              {t(education.desc)}
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── TIGA ATURAN MAIN (GROUND RULES) ── */}
      <div className="mt-20 md:mt-24">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-mosaic-lemon" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-mosaic-lemon">
            {t(C.design.principlesTitle)}
          </span>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {C.design.principles.map((principle, i) => {
            const hex = MOSAIC_COLORS[tone(i)];
            return (
              <motion.div
                key={principle.title.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col gap-3 border-t border-black/10 pt-5"
              >
                <span
                  className="font-mono text-[10px] font-bold tabular-nums tracking-[0.2em]"
                  style={{ color: hex }}
                >
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-editorial text-xl leading-snug tracking-tight text-mosaic-ink">
                  {t(principle.title)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {t(principle.desc)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── ANGKA STATISTIK (DATA PROVEN IMPACT) ── */}
      <div className="mt-16 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => {
          const hex = MOSAIC_COLORS[tone(i + 2)];
          return (
            <motion.div
              key={stat.value + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex flex-col gap-2 border-t border-black/10 pt-5"
            >
              <span
                className="font-editorial text-4xl font-medium tabular-nums leading-none tracking-tight md:text-5xl"
                style={{ color: hex }}
              >
                {stat.value}
              </span>
              <span className="text-xs leading-relaxed text-neutral-600">
                {t(stat.label)}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Fullscreen 3D modal */}
      <AnimatePresence>
        {cardFull && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-black/85 p-6 backdrop-blur-md"
            onClick={() => setCardFull(false)}
          >
            <div
              className="aspect-[330/560] h-[82vh] w-auto max-w-[92vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <IdCard3D />
            </div>
            <button
              type="button"
              onClick={() => setCardFull(false)}
              className="mt-5 rounded-full border border-white/25 bg-white/10 px-6 py-2 font-mono text-[11px] uppercase tracking-[0.25em] text-white/80 transition hover:bg-white/20"
            >
              {t(C.modal.closeShort)}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
