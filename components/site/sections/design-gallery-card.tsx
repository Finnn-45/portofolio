"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { DesignWork } from "@/lib/data";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { DISCIPLINE_COLORS, MOSAIC_COLORS } from "@/lib/mosaic";

export function GalleryCard({
  work,
  openNote,
  setOpenNote,
}: {
  work: DesignWork;
  openNote: string | null;
  setOpenNote: (id: string | null) => void;
}) {
  const t = useT();
  const color = MOSAIC_COLORS[DISCIPLINE_COLORS[work.discipline]];
  const noteOpen = openNote === work.id;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl bg-white"
    >
      <div className="grid w-full grid-cols-1 gap-8 p-6 md:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12">
        <div className="lg:col-span-7">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-[0.24em]">
            <span style={{ color }}>/{work.id}</span>
            <span style={{ color }}>{t(C.design.disciplines[work.discipline])}</span>
            <span className="text-neutral-400">{t(work.year)}</span>
          </div>

          <h3 className="mt-4 font-editorial text-2xl leading-tight tracking-tight text-mosaic-cream sm:text-3xl md:text-4xl">
            {t(work.title)}
          </h3>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-500">
            {t(work.context)}
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-5">
          <button
            type="button"
            onClick={() => setOpenNote(noteOpen ? null : work.id)}
            aria-expanded={noteOpen}
            className="group flex items-center justify-between gap-3 border-t border-black/10 pt-4 text-left transition-colors"
            style={{ borderLeft: `4px solid ${color}` }}
          >
            <span>
              <span className="block font-mono text-[9px] uppercase tracking-[0.24em] text-neutral-400">
                [{t(C.design.galleryCaseNote).toLowerCase()}]
              </span>
              <span className="mt-1 block text-sm font-extrabold tracking-tight text-mosaic-ink">
                {t(C.design.galleryCta)}
              </span>
            </span>
            <span className="pl-3 font-mono text-lg leading-none" style={{ color }}>
              {noteOpen ? "–" : "+"}
            </span>
          </button>

          <AnimatePresence initial={false}>
            {noteOpen ? (
              <motion.div
                key="note"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p
                  className="p-5 text-sm leading-relaxed text-neutral-700"
                  style={{ borderLeft: `4px solid ${color}` }}
                >
                  {t(work.note)}
                </p>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  );
}
