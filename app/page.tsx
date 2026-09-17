"use client";

import { useEffect, useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile, socials, stats, location } from "@/lib/data";
import { useLang, useT } from "@/lib/i18n";
import { GithubGrid } from "@/components/site/github-grid";
import { CustomCursor } from "@/components/site/decor";
import dynamic from "next/dynamic";
import { LangSwitch } from "@/components/site/lang-switch";
import { C, caseStudies, type CaseStudyContent } from "@/lib/content";

const HeroCanvas = dynamic(
  () => import("@/components/site/hero-canvas").then((m) => ({ default: m.HeroCanvas })),
  { ssr: false }
);

const IdCard3D = dynamic(
  () => import("@/components/site/id-card").then((m) => ({ default: m.IdCard3D })),
  { ssr: false }
);

const CoverCanvas = dynamic(
  () => import("@/components/site/cover-3d").then((m) => ({ default: m.CoverCanvas })),
  { ssr: false }
);

/* ============================================================
   DATA
============================================================ */

const tools = [
  { name: "HTML", icon: "◈" },
  { name: "CSS", icon: "◑" },
  { name: "JavaScript", icon: "✦" },
  { name: "React.js", icon: "⚛" },
  { name: "Next.js", icon: "▲" },
  { name: "Laravel", icon: "⬢" },
  { name: "C++", icon: "✚" },
  { name: "Arduino", icon: "⏣" },
  { name: "ESP32", icon: "⌬" },
  { name: "Figma", icon: "✏" },
  { name: "Illustrator", icon: "✒" },
  { name: "Canva", icon: "◧" },
];

/* ============================================================
   LOADER — minimal: nama + garis tipis, fade out halus
============================================================ */

function Loader({ isLoading }: { isLoading: boolean }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center select-none pointer-events-auto"
          style={{ background: "#080808" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            className="flex flex-col items-center gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.5em] text-white/70">
              Arfin Desca
            </span>
            <div className="h-px w-40 bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-white/60"
                style={{ transformOrigin: "left" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ============================================================
   KOMPONEN KECIL
============================================================ */

function SectionLabel({ dark = false }: { dark?: boolean }) {
  const { lang, t } = useLang();
  const today = new Date()
    .toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" })
    .toUpperCase();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex justify-between items-start text-xs md:text-sm font-medium tracking-wider uppercase select-none ${
        dark ? "text-neutral-400" : "text-neutral-600"
      }`}
    >
      <span>{t(profile.roles)}</span>
      <span>{today}</span>
    </motion.div>
  );
}

function ArrowUpRight() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-300 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-1.5"
    >
      <path
        d="M5 15L15 5M15 5H7.5M15 5V12.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ============================================================
   HERO — 3D DARK CINEMATIC
============================================================ */

function Hero() {
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

/* ============================================================
   TICKER
============================================================ */

function TickerStrip() {
  const { tl } = useLang();
  const items = tl(C.ticker.items);
  return (
    <div className="w-full overflow-hidden bg-[#0d0d0d] border-y border-white/5 group">
      <div className="py-3.5 flex whitespace-nowrap animate-marquee-left group-hover:[animation-play-state:paused]">
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.22em] text-white/35 px-8"
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-[#831514]/60 inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   ABOUT
============================================================ */

function About() {
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

/* ============================================================
   SERVICES — What I do?
============================================================ */

function Services() {
  const t = useT();
  return (
    <section
      id="services"
      className="relative w-full bg-white px-8 md:px-16 lg:px-24 py-16 md:py-20 flex flex-col"
    >
      <div className="w-full flex flex-col gap-4 mb-8 md:mb-10">
        <SectionLabel />
      </div>

      <div className="w-full flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#1a1a1a] leading-[0.95] tracking-tight"
        >
          {t(C.services.titleLines[0])}
          <br />
          {t(C.services.titleLines[1])}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-gray-700 leading-relaxed max-w-md shrink-0"
        >
          {t(C.services.lede)}
        </motion.p>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {C.services.cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="group flex flex-col p-6 rounded-2xl border border-neutral-200 bg-[#fafafa] transition-all duration-300 hover:-translate-y-1 hover:border-[#1a1a1a] hover:shadow-[0_16px_40px_-24px_rgba(0,0,0,0.3)]"
          >
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#831514] mb-4">
              0{i + 1}
            </span>
            <h3 className="text-lg md:text-xl font-extrabold tracking-tight text-[#1a1a1a] mb-2">
              {t(card.title)}
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">{t(card.desc)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   TOOLS — marquee chip 2 baris, pelan, pause on hover
============================================================ */

function ToolChip({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="group flex items-center gap-3 shrink-0 px-6 py-3 rounded-full border border-neutral-200 bg-white hover:border-[#831514]/40 transition-colors duration-300">
      <span className="text-[#831514] text-base leading-none">{icon}</span>
      <span className="font-mono text-xs md:text-sm font-semibold uppercase tracking-widest text-[#1a1a1a] whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

function Tools() {
  const t = useT();
  const firstRow = tools.slice(0, 6);
  const secondRow = tools.slice(6);

  return (
    <section
      id="tools"
      className="relative w-full bg-white px-8 md:px-16 lg:px-24 py-14 md:py-16 flex flex-col overflow-hidden border-t border-neutral-100"
    >
      <div className="w-full flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a] leading-[0.95] tracking-tight"
        >
          {t(C.tools.titleLines[0])} {t(C.tools.titleLines[1])}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm md:text-base text-gray-600 leading-relaxed max-w-md shrink-0"
        >
          {t(C.tools.lede)}
        </motion.p>
      </div>

      <div className="w-full flex flex-col gap-4">
        {[firstRow, secondRow].map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 + rowIndex * 0.15 }}
            className="group w-full flex overflow-hidden"
          >
            <div
              className={`flex gap-4 pr-4 group-hover:[animation-play-state:paused] ${
                rowIndex % 2 === 0 ? "animate-marquee-left" : "animate-marquee-right"
              }`}
            >
              {[...row, ...row, ...row, ...row].map((t, i) => (
                <ToolChip key={`${t.name}-${i}`} name={t.name} icon={t.icon} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   INSIDE — What you will find inside?
============================================================ */

function Inside() {
  const t = useT();
  return (
    <section
      id="inside"
      className="relative w-full bg-white px-8 md:px-16 lg:px-24 py-14 md:py-16 flex flex-col border-t border-neutral-100"
    >
      <div className="w-full flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter leading-[0.95] text-[#1a1a1a] uppercase"
        >
          {t(C.inside.titleLines[0])} {t(C.inside.titleLines[1])}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm md:text-base text-gray-600 leading-relaxed max-w-md shrink-0"
        >
          {t(C.inside.lede)}
        </motion.p>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        {C.inside.cards.map((card, i) => (
          <motion.div
            key={card.num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
            className="group flex flex-col justify-between gap-6 p-6 rounded-2xl border-2 border-[#1a1a1a] bg-white transition-colors duration-300 hover:bg-[#fafafa]"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg md:text-xl font-extrabold uppercase tracking-tight text-[#1a1a1a] transition-colors duration-300 group-hover:text-[#831514]">
                {t(card.title)}
              </h3>
              <span className="font-mono text-xs text-neutral-400 font-medium shrink-0">{card.num}</span>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-md">{t(card.desc)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   BLACK COVER — section hitam dengan kata raksasa
============================================================ */

function BlackCover() {
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

/* ============================================================
   WORKS — list karya + modal case study
============================================================ */

function Works() {
  const [activeCase, setActiveCase] = useState<CaseStudyContent | null>(null);
  const t = useT();
  const { tl } = useLang();

  return (
    <section id="works" className="relative w-full bg-white px-8 md:px-16 lg:px-24 py-16 md:py-24">
      <div className="w-full flex flex-col gap-4 mb-12 md:mb-16">
        <SectionLabel />
      </div>

      <div className="w-full mb-10 md:mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.88] text-[#1a1a1a] uppercase mb-6"
        >
          {t(C.works.titleLines[0])}
          <br />
          {t(C.works.titleLines[1])}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl"
        >
          {t(C.works.lede)}
        </motion.p>
      </div>

      <div className="w-full flex flex-col">
        {caseStudies.map((work, i) => (
          <motion.button
            key={work.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            onClick={() => setActiveCase(work)}
            className="group flex items-center justify-between gap-6 py-6 md:py-8 text-left border-b-2 border-[#1a1a1a] transition-all duration-300 hover:pl-2"
          >
            <div className="flex items-baseline gap-4 md:gap-8 min-w-0">
              <span className="font-mono text-xs md:text-sm text-neutral-400 font-medium shrink-0">
                /{work.id}
              </span>
              <div className="min-w-0">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] uppercase tracking-tight leading-tight transition-colors duration-300 group-hover:text-[#831514]">
                  {t(work.title)}
                </h3>
                <p className="mt-1 text-xs md:text-sm text-neutral-500 font-mono uppercase tracking-wider">
                  {t(work.category)} — {work.year}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {work.tools.slice(0, 4).map((tool) => (
                    <span
                      key={tool}
                      className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 bg-[#f4f1ea] px-2 py-0.5 rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <span className="shrink-0 text-[#1a1a1a] transition-all duration-300 group-hover:text-[#831514] group-hover:scale-110">
              <ArrowUpRight />
            </span>
          </motion.button>
        ))}
      </div>

      {/* ===== GitHub: repo asli akun Finnn-45 ===== */}
      <div className="w-full mt-14 md:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-end justify-between gap-4 mb-8"
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#831514] mb-2">
              {t(C.works.githubKicker)}
            </p>
            <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight text-[#1a1a1a] uppercase">
              {t(C.works.githubTitle)}
            </h3>
          </div>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-[#1a1a1a] hover:text-[#831514] transition-colors"
          >
            {t(C.works.githubCta)}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRight />
            </span>
          </a>
        </motion.div>
        <GithubGrid />
        <p className="mt-6 font-mono text-[11px] text-neutral-400 uppercase tracking-widest">
          {t(C.works.githubNote)}
        </p>
      </div>

      <AnimatePresence>
        {activeCase && <CaseStudyModal caseStudy={activeCase} onClose={() => setActiveCase(null)} />}
      </AnimatePresence>
    </section>
  );
}

/* ============================================================
   CASE STUDY MODAL
============================================================ */

function CaseStudyModal({ caseStudy, onClose }: { caseStudy: CaseStudyContent; onClose: () => void }) {
  const t = useT();
  const { tl } = useLang();
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const labels = tl(C.modal.sections);
  const sections = [
    { label: labels[0], body: t(caseStudy.overview) },
    { label: labels[1], body: t(caseStudy.challenge) },
    { label: labels[2], body: t(caseStudy.process) },
    { label: labels[3], body: t(caseStudy.solution) },
    { label: labels[4], body: t(caseStudy.result) },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[9998] bg-[#f4f1ea] overflow-y-auto"
    >
      <div className="sticky top-0 z-10 bg-[#f4f1ea] border-b border-neutral-200 px-8 md:px-16 py-5 flex items-center justify-between">
        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-neutral-500">
          {t(caseStudy.category)}
        </span>
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 font-mono text-xs md:text-sm font-semibold uppercase tracking-widest text-[#1a1a1a] hover:text-[#831514] transition-colors"
        >
          {t(C.modal.close)} <span className="text-lg leading-none">×</span>
        </button>
      </div>

      <div className="px-8 md:px-16 lg:px-24 py-12 md:py-20 max-w-[1400px]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] text-[#831514] font-semibold mb-4"
        >
          {caseStudy.year} — {t(caseStudy.subtitle)}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.88] text-[#1a1a1a] uppercase mb-8"
        >
          {t(caseStudy.title)}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mb-10"
        >
          {t(caseStudy.description)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          {caseStudy.tools.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] uppercase tracking-wider text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded border border-neutral-200"
            >
              {t}
            </span>
          ))}
        </motion.div>

        {caseStudy.repo && (
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            href={caseStudy.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 mb-16 font-mono text-xs md:text-sm font-semibold uppercase tracking-widest text-[#1a1a1a] hover:text-[#831514] transition-colors"
          >
            <span className="inline-flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
              </svg>
              {t(C.modal.repoLink)}
            </span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRight />
            </span>
          </motion.a>
        )}

        <div className="flex flex-col gap-16 md:gap-20">
          {sections.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10"
            >
              <h3 className="md:col-span-4 font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-neutral-500 font-semibold">
                {s.label}
              </h3>
              <p className="md:col-span-8 text-base md:text-lg text-[#1a1a1a] leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-neutral-200">
          <button
            onClick={onClose}
            className="group inline-flex items-center gap-2 font-mono text-xs md:text-sm font-semibold uppercase tracking-widest text-[#1a1a1a] hover:text-[#831514] transition-colors"
          >
            {t(C.modal.back)}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ============================================================
   CONTACT + FOOTER
============================================================ */

function Contact() {
  const t = useT();
  const links = [
    { label: t(C.contact.links[0]), href: socials.github, external: true },
    { label: t(C.contact.links[1]), href: `mailto:${socials.email}`, external: false },
    { label: t(C.contact.links[2]), href: socials.linkedin, external: true },
    { label: t(C.contact.links[4]), href: "/cv.pdf", external: true },
  ];

  return (
    <section id="contact" className="relative w-full bg-white px-8 md:px-16 lg:px-24 py-16 md:py-24">
      <div className="w-full flex flex-col gap-4 mb-12 md:mb-16">
        <SectionLabel />
      </div>

      <div className="w-full mb-10 md:mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] text-[#1a1a1a] uppercase mb-6"
        >
          {t(C.contact.titleLines[0])}{" "}
          {t(C.contact.titleLines[1])}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl"
        >
          {t(C.contact.lede)}
        </motion.p>
      </div>

      <div className="w-full flex flex-col">
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="group flex items-center justify-between py-5 md:py-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] uppercase tracking-tight transition-all duration-300 hover:text-[#831514] hover:pl-2 border-b-2 border-[#1a1a1a]"
          >
            {link.label}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5">
              <ArrowUpRight />
            </span>
          </motion.a>
        ))}
      </div>

      {/* Strip info — isi bagian bawah biar nggak kosong */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="w-full mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
      >
        <div className="p-5 rounded-2xl border border-neutral-200 bg-[#fafafa]">
          <p className="text-xs text-neutral-500 mb-1">{t(C.about.emailLabel)}</p>
          <a
            href={`mailto:${socials.email}`}
            className="text-sm font-semibold text-[#1a1a1a] hover:text-[#831514] transition-colors break-all"
          >
            {socials.email}
          </a>
        </div>
        <div className="p-5 rounded-2xl border border-neutral-200 bg-[#fafafa]">
          <p className="text-xs text-neutral-500 mb-1">{t(C.about.locationLabel)}</p>
          <span className="text-sm font-semibold text-[#1a1a1a]">{t(location)}</span>
        </div>
        <div className="p-5 rounded-2xl border border-neutral-200 bg-[#fafafa]">
          <p className="text-xs text-neutral-500 mb-1">Instagram</p>
          <a
            href={socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#1a1a1a] hover:text-[#831514] transition-colors"
          >
            @zakriii___
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full pt-8 mt-12 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs md:text-sm font-medium tracking-wider uppercase text-neutral-500"
      >
        <span>© 2026 {profile.name.toUpperCase()}</span>
        <span>{t(C.contact.footerRight)}</span>
      </motion.div>
    </section>
  );
}

/* ============================================================
   PAGE
============================================================ */

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grain-overlay min-h-screen bg-white relative z-0">
      <Loader isLoading={isLoading} />
      <CustomCursor />
      <Hero />
      <TickerStrip />
      <About />
      <Services />
      <Tools />
      <Inside />
      <BlackCover />
      <Works />
      <Contact />
    </div>
  );
}
