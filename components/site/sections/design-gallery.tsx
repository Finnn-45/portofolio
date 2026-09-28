"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { designWorks } from "@/lib/data";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { MOSAIC_COLORS, tone } from "@/lib/mosaic";
import { SectionLabel } from "./bits";
import { GalleryCard } from "./design-gallery-card";

/* ============================================================
   GALERI ALA BEHANCE — feed vertikal 1 kolom untuk track /design.
   Tiap karya tampil penuh satu layar: judul besar, konteks, tahun,
   spesifikasi artboard, lalu kartu catatan kasus. Tanpa gambar baru —
   visualnya datang dari sistem warna bidang + nomor artboard besar.
============================================================ */

export function DesignGallery() {
  const t = useT();
  const [openNote, setOpenNote] = useState<string | null>(null);

  return (
    <section
      id="design-gallery"
      className="relative w-full border-t border-black/5 bg-mosaic-black px-6 py-16 md:px-12 md:py-24 lg:px-20"
    >
      <div className="mb-6 flex w-full flex-col gap-4">
        <SectionLabel className="font-mono tracking-[0.22em] text-neutral-400" />
      </div>

      <div className="mb-12 flex flex-col gap-4 md:mb-16">
        <div className="flex flex-wrap items-center gap-3">
          <span className="h-px w-8 bg-mosaic-lemon" />
          <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-mosaic-lemon">
            gallery
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-400">
            {designWorks.length} {t(C.design.galleryCount)}
          </span>
        </div>

        <div className="mt-2 flex w-full flex-col gap-6 md:flex-row md:items-end md:justify-between">
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
            className="max-w-md shrink-0 text-sm leading-relaxed text-neutral-600 md:text-base"
          >
            {t(C.design.galleryIntro)}
          </motion.p>
        </div>
      </div>

      <div className="flex w-full flex-col gap-10 md:gap-14">
        {designWorks.map((work) => (
          <GalleryCard
            key={work.id}
            work={work}
            openNote={openNote}
            setOpenNote={setOpenNote}
          />
        ))}
      </div>

      <div className="mt-14 border-t border-black/10 pt-6 md:mt-20 md:pt-8">
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mosaic-lemon">
            [{t(C.design.galleryIndex).toLowerCase()}]
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
            {designWorks.length} {t(C.design.galleryCount)}
          </p>
        </div>

        <ol className="divide-y divide-black/5">
          {designWorks.map((work, i) => {
            const hex = MOSAIC_COLORS[tone(i)];
            return (
              <li
                key={work.id}
                className="group flex items-center gap-4 py-3"
              >
                <span
                  className="font-mono text-xs font-black tabular-nums tracking-[0.2em]"
                  style={{ color: hex }}
                >
                  [{work.id}]
                </span>
                <span className="min-w-0 flex-1 truncate font-editorial text-lg text-mosaic-ink md:text-xl">
                  {t(work.title)}
                </span>
                <span className="hidden shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-400 sm:inline">
                  {t(C.design.disciplines[work.discipline])} · {t(work.year)}
                </span>
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ background: hex }}
                />
              </li>
            );
          })}
        </ol>

        <p className="mt-6 border-t border-black/5 pt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
          {t(C.design.galleryEnd)}
        </p>
      </div>
    </section>
  );
}
