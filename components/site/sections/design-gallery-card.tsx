"use client";

import type { DesignWork } from "@/lib/data";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { DISCIPLINE_COLORS, MOSAIC_COLORS } from "@/lib/mosaic";
import { DesignArtboardPreview } from "./design-artboard-preview";

export function GalleryCard({ work }: { work: DesignWork }) {
  const t = useT();
  const color = MOSAIC_COLORS[DISCIPLINE_COLORS[work.discipline]];

  return (
    <article className="relative overflow-hidden rounded-2xl bg-[#141520] border border-white/10 shadow-2xl p-6 md:p-8 lg:p-10 group hover:border-[#ffe846]/40 transition-colors">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Artboard Preview */}
        <div className="lg:col-span-6 w-full">
          <div className="rounded-xl overflow-hidden shadow-xl border border-white/10">
            <DesignArtboardPreview work={work} />
          </div>
        </div>

        {/* Right: Project Information & Specs */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full">
          <div>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-[0.24em] mb-2">
              <span style={{ color }} className="font-bold">/{work.id}</span>
              <span style={{ color }}>{t(C.design.disciplines[work.discipline])}</span>
              <span className="text-white/40">· {t(work.year)}</span>
            </div>

            <h3 className="font-editorial text-2xl md:text-3xl lg:text-4xl leading-tight font-bold text-white group-hover:text-[#ffe846] transition-colors">
              {t(work.title)}
            </h3>

            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#ffe846]/80">
              {t(work.context)}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {t(work.note)}
            </p>

            {/* Problem & Solution Accordion */}
            <div className="mt-6 space-y-4 pt-4 border-t border-white/10">
              <div>
                <span className="block font-mono text-[9px] uppercase tracking-widest text-[#ffe846] mb-1">
                  [ TANTANGAN ]
                </span>
                <p className="text-xs leading-relaxed text-white/80">
                  {t(work.problem)}
                </p>
              </div>

              <div>
                <span className="block font-mono text-[9px] uppercase tracking-widest text-emerald-400 mb-1">
                  [ SOLUSI & EKSEKUSI ]
                </span>
                <p className="text-xs leading-relaxed text-white/80">
                  {t(work.solution)}
                </p>
              </div>
            </div>
          </div>

          {/* Footer Metadata */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px]">
            {/* Palette */}
            <div className="flex items-center gap-1.5">
              <span className="text-white/40 mr-1">PALETTE:</span>
              {work.palette.map((c, i) => (
                <span
                  key={i}
                  className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-sm"
                  style={{ backgroundColor: c }}
                  title={c}
                />
              ))}
            </div>

            {/* Tools */}
            <div className="flex items-center gap-1.5 text-white/50">
              <span>{work.tools.join(" · ")}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
