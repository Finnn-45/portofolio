"use client";

import { profile, socials, stats, location } from "@/lib/data";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import dynamic from "next/dynamic";
const IdCard3D = dynamic(
  () => import("@/components/site/id-card").then((m) => ({ default: m.IdCard3D })),
  { ssr: false }
);

export function About() {
  const [cardFull, setCardFull] = useState(false);
  const t = useT();

  return (
    <section id="about" className="relative w-full min-h-screen bg-white py-16 md:py-24 px-8 md:px-16 lg:px-24 overflow-hidden">
      {/* Subtle decorative circle */}
      <div className="absolute -right-40 top-20 w-[500px] h-[500px] rounded-full border border-neutral-100 pointer-events-none" />
      <div className="absolute -right-20 top-40 w-[300px] h-[300px] rounded-full border border-neutral-100 pointer-events-none" />

      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 lg:sticky lg:top-24"
          >
            {/* ID Card 3D besar — drag buat muter, klik buat flip */}
            <div className="relative w-full max-w-[440px] mx-auto">
              <div className="relative h-[480px] sm:h-[560px] lg:h-[620px]">
                <IdCard3D />
                <button
                  type="button"
                  aria-label={t(C.about.fullscreen)}
                  title={t(C.about.fullscreenShort)}
                  onClick={() => setCardFull(true)}
                  className="absolute right-3 top-3 z-10 rounded-full border border-neutral-300 bg-white/85 px-2.5 py-1 font-mono text-[10px] text-neutral-600 shadow-sm backdrop-blur transition hover:border-neutral-500 hover:text-neutral-900"
                >
                  ⛶
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 lg:pt-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#831514]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#831514]">{t(C.about.label)}</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#1a1a1a] leading-[0.95] mb-2 tracking-tight">
              {t(C.about.hello)}
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal text-[#1a1a1a] leading-[0.95] mb-8 tracking-tight">
              {t(C.about.namePrefix)} {profile.name}
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed max-w-2xl">
              {t(C.about.p1)}
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mb-10">
              {t(C.about.p2)}
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="p-4 border border-neutral-100 rounded-xl bg-[#f4f1ea]/40 hover:border-[#831514]/20 transition-colors"
                >
                  <span className="text-2xl font-extrabold text-[#1a1a1a] tracking-tight block">{s.value}</span>
                  <span className="text-xs text-neutral-500 leading-tight mt-1 block">{t(s.label)}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full pt-12 border-t border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-xs text-gray-500 mb-1">{t(C.about.emailLabel)}</p>
              <a href={`mailto:${socials.email}`} className="hover:text-[#831514] transition-colors">
                {socials.email}
              </a>
            </div>
            <div className="md:text-center text-left">
              <p className="text-xs text-gray-500 mb-1">{t(C.about.linkedinLabel)}</p>
              <a href={socials.linkedin} target="_blank" className="hover:text-[#831514] transition-colors">
                Arfin Desca Alzachri
              </a>
            </div>
            <div className="md:text-right text-left">
              <p className="text-xs text-gray-500 mb-1">{t(C.about.locationLabel)}</p>
              <span>{t(location)}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Overlay ID card selayar — dipindah dari hero ke kartu besar di About */}
      <AnimatePresence>
        {cardFull && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-black/85 backdrop-blur-sm p-6"
            onClick={() => setCardFull(false)}
          >
            <div
              className="h-[82vh] w-auto aspect-[330/560] max-w-[92vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <IdCard3D />
            </div>
            <button
              type="button"
              onClick={() => setCardFull(false)}
              className="mt-5 rounded-full border border-white/25 bg-white/10 px-6 py-2 font-mono text-[11px] uppercase tracking-[0.25em] text-white/80 transition hover:bg-white/20"
            >
              {t(C.modal.closeShort)} ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
