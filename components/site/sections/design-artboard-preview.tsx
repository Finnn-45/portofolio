"use client";

import React from "react";
import type { DesignWork } from "@/lib/data";

interface ArtboardProps {
  work: DesignWork;
  interactive?: boolean;
}

export function DesignArtboardPreview({ work }: ArtboardProps) {
  switch (work.visualType) {
    case "branding":
      return (
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-[#12131a] via-[#191a24] to-[#0c0d12] p-5 md:p-7 border border-white/10 flex flex-col justify-between select-none shadow-2xl group-hover:border-[#ffe846]/40 transition-colors">
          {/* Subtle grid lines background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          
          {/* Artboard Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#831514] ring-2 ring-[#ffe846]/40" />
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/90 font-semibold">
                MENTION · BRAND SYSTEM
              </span>
            </div>
            <span className="font-mono text-[9px] tracking-widest text-[#ffe846] bg-[#ffe846]/10 px-2 py-0.5 rounded border border-[#ffe846]/20">
              FIGMA SPEC 1.2
            </span>
          </div>

          {/* Visual Showcase Center */}
          <div className="relative z-10 grid grid-cols-12 gap-3 my-auto py-2 items-center">
            {/* Left: Card Mockup */}
            <div className="col-span-7 bg-[#1c1d29] rounded-lg p-3.5 border border-white/10 shadow-lg transform -rotate-1 group-hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center justify-between text-[8px] font-mono text-white/50 mb-2">
                <span>POST 01/05</span>
                <span className="text-[#ffe846]">4:5 RATIO</span>
              </div>
              <h4 className="font-editorial text-lg md:text-xl font-bold leading-tight text-white mb-1.5">
                Kreasi Tanpa <span className="italic text-[#ffe846]">Batas</span>.
              </h4>
              <p className="text-[10px] text-white/60 leading-relaxed line-clamp-2">
                Eksplorasi media visual, tipografi editorial, dan identitas digital SMK TI BAZMA.
              </p>
              <div className="mt-3 flex items-center gap-2 pt-2 border-t border-white/5">
                <span className="w-4 h-4 rounded-full bg-[#831514] flex items-center justify-center text-[7px] text-white font-mono">M</span>
                <span className="text-[8px] font-mono text-white/40">@mention.bazma</span>
              </div>
            </div>

            {/* Right: Typography Spec & Palette */}
            <div className="col-span-5 space-y-2">
              <div className="bg-black/40 rounded-lg p-2.5 border border-white/5">
                <span className="block font-mono text-[8px] text-white/40 uppercase mb-1">Type Pairing</span>
                <p className="font-editorial text-sm italic text-white/90">Bodoni Moda</p>
                <p className="font-mono text-[9px] text-[#ffe846]">Geist Mono 400</p>
              </div>
              <div className="bg-black/40 rounded-lg p-2.5 border border-white/5">
                <span className="block font-mono text-[8px] text-white/40 uppercase mb-1.5">Swatches</span>
                <div className="flex items-center gap-1.5">
                  {work.palette.map((hex, i) => (
                    <span
                      key={i}
                      className="w-4 h-4 rounded-full border border-white/20 shadow-sm"
                      style={{ backgroundColor: hex }}
                      title={hex}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Metadata */}
          <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10 font-mono text-[9px] text-white/40">
            <span>GRID: 12-COL MODULAR</span>
            <span className="text-white/70">EXPORT: SVG + PDF</span>
          </div>
        </div>
      );

    case "banner":
      return (
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-[#121624] via-[#10131f] to-[#0a0c14] p-5 md:p-7 border border-white/10 flex flex-col justify-between select-none shadow-2xl group-hover:border-[#e8a33d]/40 transition-colors">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#e8a33d]/10 via-transparent to-transparent pointer-events-none" />

          {/* Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e8a33d]" />
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/90 font-semibold">
                HIMPANA · EVENT STAGE SYSTEM
              </span>
            </div>
            <span className="font-mono text-[9px] text-[#e8a33d] bg-[#e8a33d]/10 px-2 py-0.5 rounded border border-[#e8a33d]/20">
              6000×3000 MM
            </span>
          </div>

          {/* Backdrop Graphic Simulation */}
          <div className="relative z-10 my-auto py-2">
            <div className="relative rounded-lg bg-gradient-to-r from-[#171c2f] to-[#121420] border border-white/15 p-4 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#e8a33d]/15 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[9px] text-[#e8a33d] tracking-widest uppercase">
                  NATIONAL GATHERING 2025
                </span>
                <span className="font-mono text-[8px] text-white/40">CMYK · 300DPI</span>
              </div>
              <h3 className="font-editorial text-xl md:text-2xl font-black text-white tracking-wide uppercase leading-none">
                SINERGI & INOVASI
              </h3>
              <p className="font-sans text-[11px] text-white/70 mt-1 max-w-[280px]">
                Membangun Jejaring Alumni Kuat Menuju Masa Depan Digital Indonesia
              </p>
              
              <div className="mt-3 flex items-center gap-3">
                <div className="h-6 px-2.5 rounded bg-[#e8a33d] text-black font-mono text-[9px] font-bold flex items-center">
                  MAIN STAGE BACKDROP
                </div>
                <div className="h-6 px-2.5 rounded bg-white/10 text-white font-mono text-[9px] flex items-center border border-white/10">
                  X-BANNER SET
                </div>
              </div>
            </div>
          </div>

          {/* Footer specs */}
          <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10 font-mono text-[9px] text-white/40">
            <span>BLEED: 50MM SAFE ZONE</span>
            <span className="text-[#e8a33d]">SCALE: 1:1 VECTOR</span>
          </div>
        </div>
      );

    case "editorial":
      return (
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-[#0c1220] via-[#0f172a] to-[#070b14] p-5 md:p-7 border border-white/10 flex flex-col justify-between select-none shadow-2xl group-hover:border-[#2f9cf0]/40 transition-colors">
          {/* Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1f3be0]" />
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/90 font-semibold">
                BAZMA PERTAMINA · EDITORIAL
              </span>
            </div>
            <span className="font-mono text-[9px] text-[#2f9cf0] bg-[#2f9cf0]/10 px-2 py-0.5 rounded border border-[#2f9cf0]/20">
              SOCIAL CAROUSEL
            </span>
          </div>

          {/* 3-Card Carousel Simulation */}
          <div className="relative z-10 grid grid-cols-3 gap-2.5 my-auto py-2">
            {/* Card 1: Hook */}
            <div className="bg-[#1e293b]/80 rounded-lg p-2.5 border border-white/10 flex flex-col justify-between h-36">
              <span className="font-mono text-[8px] text-[#2f9cf0]">01 // IMPACT</span>
              <p className="font-editorial text-xs md:text-sm text-white font-bold leading-snug">
                Penyaluran Zakat Berkelanjutan
              </p>
              <div className="w-full h-1 bg-[#2f9cf0]/30 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-[#2f9cf0]" />
              </div>
            </div>

            {/* Card 2: Metric */}
            <div className="bg-[#1e293b]/80 rounded-lg p-2.5 border border-white/10 flex flex-col justify-between h-36">
              <span className="font-mono text-[8px] text-white/40">02 // DATA</span>
              <div>
                <p className="font-editorial text-lg md:text-xl text-[#ffe846] font-bold">
                  1.200+
                </p>
                <p className="text-[9px] text-white/70 leading-tight">
                  Penerima Manfaat Pendidikan
                </p>
              </div>
              <span className="font-mono text-[7px] text-white/30">AUDITED 2025</span>
            </div>

            {/* Card 3: Action */}
            <div className="bg-[#1e293b]/80 rounded-lg p-2.5 border border-white/10 flex flex-col justify-between h-36">
              <span className="font-mono text-[8px] text-[#2f9cf0]">03 // GIVING</span>
              <p className="text-[9px] text-white/80 leading-relaxed">
                Mari bersama tebar kebaikan melalui sedekah produktif.
              </p>
              <span className="text-[8px] font-mono text-[#2f9cf0] underline underline-offset-2">
                @bazmapertamina
              </span>
            </div>
          </div>

          {/* Footer specs */}
          <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10 font-mono text-[9px] text-white/40">
            <span>FORMAT: 1080×1350 HIGH-RES</span>
            <span className="text-white/60">30+ DESIGNS PUBLISHED</span>
          </div>
        </div>
      );

    case "admission":
      return (
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-[#0d1820] via-[#10222a] to-[#070e13] p-5 md:p-7 border border-white/10 flex flex-col justify-between select-none shadow-2xl group-hover:border-[#0f9b94]/40 transition-colors">
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-[#0f9b94]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0f9b94]" />
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/90 font-semibold">
                SPMB 2025 · CAMPAIGN
              </span>
            </div>
            <span className="font-mono text-[9px] text-[#ffe846] bg-[#ffe846]/10 px-2 py-0.5 rounded border border-[#ffe846]/20">
              1.000+ REGISTRANTS
            </span>
          </div>

          {/* Campaign Poster Graphic Simulation */}
          <div className="relative z-10 my-auto py-2">
            <div className="bg-[#12282c]/80 rounded-lg border border-[#0f9b94]/30 p-4 shadow-xl">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[9px] text-[#0f9b94] font-bold tracking-wider">
                  BEASISWA PENUH 100%
                </span>
                <span className="bg-[#ffe846] text-black text-[8px] font-mono font-bold px-1.5 py-0.5 rounded">
                  BATCH 2025/2026
                </span>
              </div>
              <h3 className="font-editorial text-xl md:text-2xl font-black text-white leading-tight">
                Penerimaan Murid Baru <br />
                <span className="italic text-[#0f9b94]">SMK TI BAZMA</span>
              </h3>
              <div className="mt-3 grid grid-cols-3 gap-2 pt-2 border-t border-white/10 font-mono text-[8px] text-white/70">
                <div className="bg-black/30 p-1.5 rounded">
                  <span className="block text-[#ffe846]">01. DAFTAR</span>
                  Online Web
                </div>
                <div className="bg-black/30 p-1.5 rounded">
                  <span className="block text-[#ffe846]">02. SELEKSI</span>
                  Tes & Wawancara
                </div>
                <div className="bg-black/30 p-1.5 rounded">
                  <span className="block text-[#ffe846]">03. ASRAMA</span>
                  Gratis 4 Tahun
                </div>
              </div>
            </div>
          </div>

          {/* Footer specs */}
          <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10 font-mono text-[9px] text-white/40">
            <span>POSTER A3 · BROCHURE TRIFOLD</span>
            <span className="text-[#0f9b94]">MULTI-CHANNEL CAMPAIGN</span>
          </div>
        </div>
      );

    case "uiux":
      return (
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-[#0c101d] via-[#10162a] to-[#070912] p-5 md:p-7 border border-white/10 flex flex-col justify-between select-none shadow-2xl group-hover:border-[#7c5cfc]/40 transition-colors">
          {/* Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7c5cfc]" />
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/90 font-semibold">
                SMART ECOSYSTEM · UI/UX
              </span>
            </div>
            <span className="font-mono text-[9px] text-[#7c5cfc] bg-[#7c5cfc]/10 px-2 py-0.5 rounded border border-[#7c5cfc]/20">
              DASHBOARD + MOBILE
            </span>
          </div>

          {/* UI Window Simulation */}
          <div className="relative z-10 my-auto py-2">
            <div className="rounded-lg bg-[#141b34] border border-white/10 p-3 shadow-xl">
              {/* Window dots */}
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500/80" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                  <span className="w-2 h-2 rounded-full bg-green-500/80" />
                </div>
                <span className="font-mono text-[8px] text-white/40">iot.ecosystem.local/monitor</span>
              </div>
              
              {/* Telemetry widgets */}
              <div className="grid grid-cols-2 gap-2 mt-2.5">
                <div className="bg-black/30 rounded p-2 border border-white/5">
                  <div className="flex justify-between items-center text-[8px] font-mono text-white/50">
                    <span>SUHU RUANG</span>
                    <span className="text-emerald-400">● LIVE</span>
                  </div>
                  <div className="font-editorial text-xl font-bold text-white mt-1">24.8°C</div>
                  <div className="w-full h-1 bg-white/10 rounded-full mt-1.5 overflow-hidden">
                    <div className="w-3/5 h-full bg-[#2f9cf0]" />
                  </div>
                </div>

                <div className="bg-black/30 rounded p-2 border border-white/5">
                  <div className="flex justify-between items-center text-[8px] font-mono text-white/50">
                    <span>KELEMBAPAN</span>
                    <span className="text-emerald-400">62% RH</span>
                  </div>
                  <div className="font-editorial text-xl font-bold text-[#7c5cfc] mt-1">OPTIMAL</div>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-[7px] font-mono text-white/60">RELAY #1 ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer specs */}
          <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10 font-mono text-[9px] text-white/40">
            <span>ATOMIC DESIGN SYSTEM</span>
            <span className="text-[#7c5cfc]">FIGMA AUTO LAYOUT</span>
          </div>
        </div>
      );

    case "illustration":
    default:
      return (
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-[#1a1217] via-[#24151e] to-[#0f0b0e] p-5 md:p-7 border border-white/10 flex flex-col justify-between select-none shadow-2xl group-hover:border-[#e4607a]/40 transition-colors">
          {/* Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e4607a]" />
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/90 font-semibold">
                VECTOR LAB · ILLUSTRATION
              </span>
            </div>
            <span className="font-mono text-[9px] text-[#e4607a] bg-[#e4607a]/10 px-2 py-0.5 rounded border border-[#e4607a]/20">
              SVG ARCHIVE
            </span>
          </div>

          {/* Vector Art Simulation */}
          <div className="relative z-10 grid grid-cols-3 gap-2.5 my-auto py-2">
            <div className="bg-black/40 rounded-lg p-2.5 border border-white/10 flex flex-col items-center justify-center text-center h-32">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#e4607a] to-[#ffe846] flex items-center justify-center text-black font-black text-sm shadow-md mb-2">
                🤖
              </div>
              <span className="font-mono text-[8px] text-white/80">MCROBO MASCOT</span>
              <span className="font-mono text-[7px] text-[#e4607a]">VECTOR SVG</span>
            </div>

            <div className="bg-black/40 rounded-lg p-2.5 border border-white/10 flex flex-col items-center justify-center text-center h-32">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0f9b94] to-[#2f9cf0] flex items-center justify-center text-white font-bold text-sm shadow-md mb-2">
                ✦
              </div>
              <span className="font-mono text-[8px] text-white/80">ICON PACK</span>
              <span className="font-mono text-[7px] text-[#ffe846]">50+ ASSETS</span>
            </div>

            <div className="bg-black/40 rounded-lg p-2.5 border border-white/10 flex flex-col items-center justify-center text-center h-32">
              <div className="w-10 h-10 rounded-full border-2 border-dashed border-[#e4607a] flex items-center justify-center text-[#ffe846] text-xs font-mono mb-2">
                CUT
              </div>
              <span className="font-mono text-[8px] text-white/80">STICKER KIT</span>
              <span className="font-mono text-[7px] text-white/40">DIE-CUT READY</span>
            </div>
          </div>

          {/* Footer specs */}
          <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10 font-mono text-[9px] text-white/40">
            <span>INFINITE SCALABLE VECTOR</span>
            <span className="text-[#e4607a]">ADOBE AI + SVG</span>
          </div>
        </div>
      );
  }
}
