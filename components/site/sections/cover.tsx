"use client";

import { useLang, useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { motion } from "framer-motion";
import { Suspense } from "react";
import dynamic from "next/dynamic";
const CoverCanvas = dynamic(
  () => import("@/components/site/cover-3d").then((m) => ({ default: m.CoverCanvas })),
  { ssr: false }
);

export function BlackCover() {
  const t = useT();
  const { tl } = useLang();
  const floatingNums = ["01", "02", "03", "04"];
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[80vh] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden">
      {/* 3D tipis: gelombang titik + ring — elegan, bukan glow */}
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <CoverCanvas />
        </Suspense>
      </div>
      {/* Grid samar ala desainer */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.035] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dark-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dark-grid)" />
      </svg>

      {/* Fade atas-bawah biar nyambung mulus sama section terang */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      {/* Floating project numbers — dibuat statis tipis, nggak ngedip norak */}
      {floatingNums.map((num, i) => (
        <span
          key={num}
          className="absolute font-black text-white select-none pointer-events-none opacity-[0.045]"
          style={{
            fontSize: "clamp(80px, 12vw, 160px)",
            left: `${10 + i * 24}%`,
            top: `${15 + (i % 2) * 55}%`,
          }}
        >
          {num}
        </span>
      ))}

      {/* Garis diagonal — 1 aja, super tipis */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="100%" x2="22%" y2="0" stroke="white" strokeWidth="1" />
      </svg>

      {/* Corner labels */}
      <span className="absolute top-8 left-8 font-mono text-[10px] uppercase tracking-[0.3em] text-white/20">{t(C.cover.cornerLeft)}</span>
      <span className="absolute top-8 right-8 font-mono text-[10px] uppercase tracking-[0.3em] text-white/20">{t(C.cover.cornerYear)}</span>
      <span className="absolute bottom-8 left-8 font-mono text-[10px] uppercase tracking-[0.3em] text-white/20">{t(C.cover.cornerLocation)}</span>
      <span className="absolute bottom-8 right-8 font-mono text-[10px] uppercase tracking-[0.3em] text-white/20">{t(C.cover.cornerSchool)}</span>

      {/* Main headline */}
      <div className="relative z-10 text-center px-6">
        {tl(C.cover.headline).map((line, i) => (
          <motion.div
            key={line}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className="overflow-hidden"
          >
            <span
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.92] uppercase select-none text-white"
            >
              {line}
            </span>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 h-[1px] bg-white/10 w-full"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 flex items-center justify-center gap-8"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">{t(C.cover.tags[0])}</span>
          <span className="text-white/25" aria-hidden>✦</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">{t(C.cover.tags[1])}</span>
          <span className="text-white/25" aria-hidden>✦</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">{t(C.cover.tags[2])}</span>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30 text-2xl"
      >
        ↓
      </motion.div>
    </section>
  );
}
