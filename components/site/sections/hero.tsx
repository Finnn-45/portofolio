"use client";

import { profile, socials, location } from "@/lib/data";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { LangSwitch } from "@/components/site/lang-switch";

export function Hero() {
  const t = useT();

  return (
    <section
      id="hero"
      className="relative w-full bg-[#0a0b10] text-[#f4f1ea] px-6 pt-24 pb-16 md:px-12 md:pt-32 md:pb-24 lg:px-16 overflow-hidden border-b border-white/10"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-[#ffe846]/10 via-[#831514]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#2f9cf0]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto w-full max-w-[1240px] relative z-10">
        {/* Top identity & status bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-white/50">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-white/80 font-bold">{t(C.hero.chip)}</span>
            <span className="text-white/20">/</span>
            <span>{t(location)}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-white/40 hidden sm:inline">[ ARCHIVE: 2026 ]</span>
            <LangSwitch />
          </div>
        </div>

        {/* Main Grid: Typography & Studio Photo */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Bold Designer Typography */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] uppercase tracking-[0.25em] text-[#ffe846] mb-5">
              <span>✦</span>
              <span>CREATIVE DESIGNER & DEVELOPER</span>
            </div>

            <h1 className="font-editorial text-[clamp(44px,7.5vw,110px)] font-bold leading-[0.92] tracking-[-0.02em] text-white">
              Arfin Desca <br />
              <span className="italic font-normal text-[#ffe846]">Alzachri</span>.
            </h1>

            <p className="mt-6 max-w-[620px] text-base md:text-lg leading-relaxed text-white/70">
              {t(profile.tagline)}
            </p>

            {/* Quick Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#porto-desain"
                className="px-6 py-3.5 rounded-full bg-[#ffe846] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-all shadow-lg shadow-[#ffe846]/20 transform hover:-translate-y-0.5 cursor-pointer"
              >
                ✦ Eksplor Porto Desain ↓
              </a>
              <a
                href="#works"
                className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-mono text-xs font-medium uppercase tracking-wider border border-white/10 transition-colors"
              >
                Karya Web & IoT →
              </a>
              <a
                href="/portfolio"
                className="px-4 py-3.5 text-white/60 hover:text-white font-mono text-xs uppercase tracking-wider underline underline-offset-4 transition-colors"
              >
                CV / Resume ↗
              </a>
            </div>

            {/* Micro Discipline Pills */}
            <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2.5 font-mono text-[9px] uppercase tracking-widest text-white/50">
              <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/5 text-[#ffe846]">
                BRAND IDENTITY
              </span>
              <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/5 text-white/80">
                UI/UX ARCHITECTURE
              </span>
              <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/5 text-white/80">
                EDITORIAL & PRINT
              </span>
              <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/5 text-white/80">
                VECTOR LAB
              </span>
              <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/5 text-white/80">
                CREATIVE DEV
              </span>
            </div>
          </div>

          {/* Right Column: Studio Photo with Corner Marks */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative group max-w-[320px] w-full">
              {/* Corner crosshairs */}
              <span className="absolute -top-2 -left-2 text-white/40 font-mono text-xs select-none">+</span>
              <span className="absolute -top-2 -right-2 text-white/40 font-mono text-xs select-none">+</span>
              <span className="absolute -bottom-2 -left-2 text-white/40 font-mono text-xs select-none">+</span>
              <span className="absolute -bottom-2 -right-2 text-white/40 font-mono text-xs select-none">+</span>

              <div className="relative rounded-2xl overflow-hidden bg-[#171822] border border-white/15 p-2 shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/foto-saya.png"
                  alt={profile.name}
                  className="w-full aspect-[4/5] object-cover object-top rounded-xl filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="p-3 bg-black/60 backdrop-blur-sm rounded-lg mt-2 flex items-center justify-between font-mono text-[9px] text-white/60">
                  <span className="text-[#ffe846] font-bold">STUDIO ARCHIVE</span>
                  <span>SMK TI BAZMA // 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Channels Strip */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.2em]">
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={`mailto:${socials.email}`}
              className="text-white/70 hover:text-[#ffe846] transition-colors"
            >
              {socials.email}
            </a>
            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#ffe846] transition-colors"
            >
              @zakriii___
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#ffe846] transition-colors"
            >
              GitHub ↗
            </a>
          </div>

          <span className="text-white/30 hidden md:inline">
            [ FIGMA · ILLUSTRATOR · NEXT.JS · IOT ]
          </span>
        </div>
      </div>
    </section>
  );
}
