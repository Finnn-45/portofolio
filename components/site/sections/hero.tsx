"use client";

import { profile, socials } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import { C } from "@/lib/content";
import { motion } from "framer-motion";
import { LangSwitch } from "@/components/site/lang-switch";
import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
const HeroCanvas = dynamic(
  () => import("@/components/site/hero-canvas").then((m) => ({ default: m.HeroCanvas })),
  { ssr: false }
);

export function Hero() {
  const [time, setTime] = useState("");
  const { lang, t } = useLang();

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString(lang === "en" ? "en-GB" : "id-ID", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Asia/Jakarta",
        })
      );
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* 3D Canvas — full background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
      </div>

      {/* Gradient fade halus — bukan vignette merah, cuma biar teks kebaca */}
      <div
        className="absolute bottom-0 left-0 right-0 h-56 pointer-events-none z-[1]"
        style={{ background: "linear-gradient(to top, #080808 0%, transparent 100%)" }}
      />
      {/* Hairline grid samar di atas canvas — tekstur desainer, bukan glow */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 90% 80% at 50% 40%, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 40%, black 30%, transparent 75%)",
        }}
      />

      {/* ── TOP BAR ── */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 pt-8 px-8 md:pt-10 md:px-12 lg:pt-12 lg:px-16 flex justify-between items-start"
      >
        {/* Left */}
        <div className="flex flex-col gap-1">
          <div className="w-7 h-7 mb-3 text-white/60">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-full h-full">
              <circle cx="12" cy="12" r="10" />
              <ellipse cx="12" cy="12" rx="10" ry="4" />
              <line x1="12" y1="2" x2="12" y2="22" />
            </svg>
          </div>
          <span className="font-mono text-[11px] text-white/40 uppercase tracking-widest">{t(profile.roles)}</span>
          <span className="text-sm font-semibold text-white/80">{profile.name}</span>
        </div>

        {/* Right */}
        <div className="hidden sm:flex flex-col items-end gap-1.5">
          <span className="font-mono text-[11px] tabular-nums text-white/50 tracking-widest">{time} WIB</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">{t(C.hero.location)}</span>
          <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/15 bg-white/5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/50">
              {t(C.hero.chip)}
            </span>
          </div>
          <LangSwitch className="mt-2" />
        </div>
      </motion.div>

      {/* ── CENTER: big title ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-8 md:px-12 lg:px-16 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/50 mb-3">
            {t(C.hero.kicker)}
          </p>
          <h1
            className="font-black text-white leading-none tracking-tighter select-none"
            style={{ fontSize: "clamp(64px, 17vw, 240px)", lineHeight: 0.87 }}
          >
            Portfolio
          </h1>
          <p className="mt-5 max-w-md text-sm text-white/40 leading-relaxed font-light">
            {t(profile.tagline)}
          </p>
        </motion.div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="relative z-10 px-8 md:px-12 lg:px-16 pb-8 md:pb-10 flex justify-between items-end"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/20">
          © 2026
        </span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/20">{t(C.hero.scroll)}</span>
          <div className="w-[1px] h-6 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>

        <div className="flex gap-6">
          <a
            href={`mailto:${socials.email}`}
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-white/70 transition-colors"
          >
            {t(C.hero.email)}
          </a>
          <a
            href={socials.github}
            target="_blank"
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-white/70 transition-colors"
          >
            {t(C.hero.github)}
          </a>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
            {t(C.hero.location)}
          </span>
        </div>
      </motion.div>
    </section>
  );
}
