"use client";

import { motion } from "framer-motion";
import { profile, socials, location } from "@/lib/data";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { LangSwitch } from "@/components/site/lang-switch";

/* ============================================================
   COVER TRACK DESAIN — edisi kanvas gelap "Portofolio 2025".
   Sengaja tipis: metadata sudut, folder kuning + tiga pil peran,
   judul display serif kontras tinggi, lalu satu baris status.
   Detail karya ada di seksi-seksi setelahnya.
   Tema gelapnya datang dari pembungkus .theme-design
   (app/design/page.tsx + app/globals.css).
============================================================ */

export function DesignCover() {
  const t = useT();

  return (
    <section
      id="design-hero"
      className="relative flex min-h-screen w-full flex-col bg-mosaic-black text-mosaic-cream"
    >
      {/* ── METADATA SUDUT ── */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-wrap items-start justify-between gap-6 px-6 pt-20 md:px-12 md:pt-24 lg:px-20"
      >
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
            <span className="text-neutral-500">{t(C.hero.chip)}</span>
            <span aria-hidden className="text-neutral-300">
              /
            </span>

            <a
              href={`mailto:${socials.email}`}
              className="transition-colors hover:text-mosaic-lemon"
            >
              {socials.email}
            </a>
            <span aria-hidden className="text-neutral-300">
              /
            </span>
            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-mosaic-lemon"
            >
              @zakriii___
            </a>
            <span aria-hidden className="text-neutral-300">
              /
            </span>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-mosaic-lemon"
            >
              github
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            <a
              href={socials.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-mosaic-lemon"
            >
              CV
            </a>
            <span>{profile.name}</span>
            <span className="hidden text-neutral-400 sm:inline-block">
              · {t(location)}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <LangSwitch variant="dark" />
        </div>
      </motion.div>
      {/* ── DISPLAY: FOLDER KUNING + JUDUL SERIF ── */}
      <div className="grid flex-1 grid-cols-1 items-center gap-12 px-6 py-14 md:px-12 lg:grid-cols-12 lg:gap-16 lg:px-20 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-4"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-400">
            {t(C.design.folderOwner)} {profile.name}
          </p>
          <h2 className="mt-1 font-editorial text-3xl italic leading-tight text-mosaic-cream md:text-4xl">
            {t(C.design.selectedWork)}
          </h2>

          <p className="mt-6 font-mono text-[10px] uppercase leading-relaxed tracking-[0.22em] text-neutral-400">
            {C.design.folderRoles.map((role) => t(role)).join(" · ")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-8"
        >
          <h1
            className="font-editorial font-medium leading-[0.82] tracking-[-0.02em] text-mosaic-cream"
            style={{ fontSize: "clamp(56px, 12vw, 200px)" }}
          >
            {t(C.hero.title)}
          </h1>

          <div className="mt-8 flex flex-wrap items-end justify-between gap-8 border-t border-black/5 pt-6">
            <p className="max-w-xl font-editorial text-lg italic leading-relaxed text-neutral-500 md:text-xl">
              {t(C.design.lede)}
            </p>

            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 font-mono text-[9px] uppercase tracking-[0.24em] text-neutral-400">
              <span>{t(C.design.updateLabel)}</span>
              <span className="tabular-nums text-mosaic-lemon">2026</span>
            </div>
          </div>
        </motion.div>
      </div>
      {/* ── BARIS STATUS ── */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-black/5 px-6 py-5 font-mono text-[9px] uppercase tracking-[0.24em] text-neutral-400 md:px-12 lg:px-20">
        <span>{t(profile.roles)}</span>
        <span className="text-neutral-300">[version 0.1] · 2026</span>
        <span>{t(C.hero.scroll)} ↓</span>
      </div>
    </section>
  );
}
