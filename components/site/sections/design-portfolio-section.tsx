"use client";

import React, { useState } from "react";
import Link from "next/link";
import { designWorks, type DesignWork } from "@/lib/data";
import { useT } from "@/lib/i18n";
import { DesignArtboardPreview } from "./design-artboard-preview";
import { DesignCaseModal } from "./design-case-modal";

const FILTER_ITEMS = [
  { key: "all", labelId: "Semua Karya", labelEn: "All Artboards" },
  { key: "branding", labelId: "Branding & Identitas", labelEn: "Branding & Identity" },
  { key: "content", labelId: "Konten Sosial", labelEn: "Social Content" },
  { key: "print", labelId: "Event & Cetak", labelEn: "Event & Print" },
  { key: "ui", labelId: "UI/UX Mockup", labelEn: "UI/UX Mockup" },
  { key: "illustration", labelId: "Ilustrasi & Vektor", labelEn: "Illustration & Vector" },
] as const;

export function DesignPortfolioSection() {
  const t = useT();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedWork, setSelectedWork] = useState<DesignWork | null>(null);

  const filteredWorks =
    activeCategory === "all"
      ? designWorks
      : designWorks.filter((w) => w.discipline === activeCategory);

  return (
    <section
      id="porto-desain"
      className="relative w-full bg-[#0c0d13] text-[#f4f1ea] px-6 py-20 md:px-12 md:py-28 lg:px-16 border-t border-white/10"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ffe846]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#831514]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto w-full max-w-[1240px] relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffe846] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ffe846]" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#ffe846] font-semibold">
              BAGIAN KHUSUS // SPECIAL ARCHIVE
            </span>
            <span className="text-white/20">|</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
              PORTO DESAIN & VISUAL STUDIO
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mt-2">
            <div className="lg:col-span-8">
              <h2 className="font-editorial text-[clamp(34px,5.5vw,76px)] leading-[0.98] tracking-[-0.02em] text-white">
                Portofolio <span className="italic text-[#ffe846]">Desain Grafis</span> & Visual.
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-sm md:text-base leading-relaxed text-white/70">
                Karya branding, kampanye media sosial, materi cetak skala besar, dan rancangan UI/UX yang dikerjakan dengan disiplin grid, tipografi presisi, dan hierarki visual yang kuat.
              </p>
            </div>
          </div>
        </div>

        {/* Studio Discipline Filter Tabs */}
        <div className="mt-12 flex flex-wrap items-center gap-2 border-b border-white/10 pb-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mr-2">
            KATEGORI:
          </span>
          {FILTER_ITEMS.map((filter) => {
            const isActive = activeCategory === filter.key;
            return (
              <button
                key={filter.key}
                type="button"
                onClick={() => setActiveCategory(filter.key)}
                className={`px-4 py-2 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#ffe846] text-black font-bold shadow-lg shadow-[#ffe846]/20 scale-105"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/5"
                }`}
              >
                {t({ id: filter.labelId, en: filter.labelEn })}
              </button>
            );
          })}
        </div>

        {/* Gallery Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredWorks.map((work) => (
            <article
              key={work.id}
              onClick={() => setSelectedWork(work)}
              className="group relative rounded-2xl bg-[#13141c] border border-white/10 p-5 md:p-6 flex flex-col justify-between hover:border-[#ffe846]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#ffe846]/5 cursor-pointer"
            >
              <div>
                {/* Artboard Preview Graphic */}
                <div className="relative mb-5 overflow-hidden rounded-xl">
                  <DesignArtboardPreview work={work} />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full bg-[#ffe846] text-black font-mono text-xs font-bold uppercase tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      Buka Studi Kasus ↗
                    </span>
                  </div>
                </div>

                {/* Metadata & Tags */}
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/50 mb-2">
                  <span className="text-[#ffe846]">/{work.id} · {t(work.categoryLabel)}</span>
                  <span>{t(work.year)}</span>
                </div>

                <h3 className="font-editorial text-2xl font-bold leading-snug text-white group-hover:text-[#ffe846] transition-colors">
                  {t(work.title)}
                </h3>

                <p className="mt-1 font-mono text-[11px] text-white/50 uppercase tracking-wider">
                  {t(work.context)}
                </p>

                <p className="mt-3 text-xs leading-relaxed text-white/70 line-clamp-2">
                  {t(work.note)}
                </p>
              </div>

              {/* Card Footer: Palette + Tools */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                {/* Color swatches */}
                <div className="flex items-center gap-1.5" title="Color Palette">
                  {work.palette.map((c, i) => (
                    <span
                      key={i}
                      className="w-3.5 h-3.5 rounded-full border border-white/20"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>

                {/* Tools */}
                <div className="flex items-center gap-1 font-mono text-[10px] text-white/50">
                  <span>{work.tools.slice(0, 2).join(" · ")}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Studio Highlights Bar */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-[#171824] via-[#141520] to-[#171824] border border-white/10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-6 md:gap-12">
            <div>
              <p className="font-editorial text-3xl font-bold text-[#ffe846]">1.000+</p>
              <p className="font-mono text-[10px] uppercase text-white/60 tracking-wider">Aset & Desain Diproduksi</p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-white/10" />
            <div>
              <p className="font-editorial text-3xl font-bold text-white">100%</p>
              <p className="font-mono text-[10px] uppercase text-white/60 tracking-wider">Presisi Vektor & Grid</p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-white/10" />
            <div>
              <p className="font-editorial text-3xl font-bold text-white">Figma & AI</p>
              <p className="font-mono text-[10px] uppercase text-white/60 tracking-wider">Alur Kerja Industri</p>
            </div>
          </div>

          <Link
            href="/design"
            className="w-full md:w-auto px-6 py-3.5 rounded-full bg-white text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#ffe846] transition-colors text-center shadow-lg"
          >
            Buka Studio Desain Lengkap →
          </Link>
        </div>
      </div>

      {/* Interactive Modal */}
      <DesignCaseModal work={selectedWork} onClose={() => setSelectedWork(null)} />
    </section>
  );
}
