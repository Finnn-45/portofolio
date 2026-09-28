"use client";

import { profile } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import { C } from "@/lib/content";

/* Label pembatas bagian: peran di kiri, tanggal hari ini di kanan.
   Murni teks — tanpa animasi masuk. */
export function SectionLabel({ className = "" }: { className?: string }) {
  const { t } = useLang();
  const today = new Date()
    .toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" })
    .toUpperCase();
  return (
    <div
      className={`flex items-start justify-between text-xs font-medium uppercase tracking-wider select-none md:text-sm text-neutral-600 ${className}`}
    >
      <span>{t(profile.roles)}</span>
      <span>{today}</span>
    </div>
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

/* Pita kuning berjalan — satu-satunya animasi yang tersisa di situs ini,
   dan hanya ada di track /design (motif dari referensi "Portofolio 2025").
   Loop mulus: 4 salinan daftar → geser -50% = pas 2 siklus. */
export function TickerStrip() {
  const { tl } = useLang();
  const items = tl(C.design.ribbonItems);
  const loop = [...items, ...items, ...items, ...items];

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
