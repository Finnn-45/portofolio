"use client";

import { profile } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import { C } from "@/lib/content";
import { motion } from "framer-motion";

export function SectionLabel({
  dark = false,
  className = "",
}: {
  dark?: boolean;
  className?: string;
}) {
  const { t } = useLang();
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
      } ${className}`}
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

/* Pita berjalan.
   • variant "default" → pita gelap tipis (dipakai "/" dan "/web")
   • variant "lemon"   → pita kuning tanda tangan edisi gelap /design,
     motif "→ Arfin Desca Visual → Folder Portofolio Arfin →" yang
     berulang tanpa putus (lihat public/images/behance-ref/04.gif). */
export function TickerStrip({ variant = "default" }: { variant?: "default" | "lemon" }) {
  const { tl } = useLang();
  const lemon = variant === "lemon";
  const items = tl(lemon ? C.design.ribbonItems : C.ticker.items);
  /* 4 salinan = 8 satuan → geser -50% pas 2 siklus, jadi loop-nya mulus */
  const loop = [...items, ...items, ...items, ...items];

  if (lemon) {
    return (
      <div className="group w-full overflow-hidden border-y border-black/10 bg-mosaic-lemon">
        <div className="animate-ribbon flex w-max items-center whitespace-nowrap py-3 group-hover:[animation-play-state:paused]">
          {loop.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-5 px-5 text-[13px] font-extrabold uppercase tracking-[0.14em] text-mosaic-black md:text-base"
            >
              <span aria-hidden className="text-base leading-none md:text-lg">
                →
              </span>
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  }

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
