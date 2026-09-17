"use client";

import { profile } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import { C } from "@/lib/content";
import { motion } from "framer-motion";

export function SectionLabel({ dark = false }: { dark?: boolean }) {
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

export function ArrowUpRight() {
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

export function TickerStrip() {
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
