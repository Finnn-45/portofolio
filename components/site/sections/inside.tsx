"use client";

import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";

/* DI DALAMNYA — catatan proses kerja. Baris teks, bukan kartu tebal. */
export function Inside() {
  const t = useT();

  return (
    <section
      id="inside"
      className="w-full border-t border-neutral-200 bg-white px-6 py-14 md:px-12 md:py-16 lg:px-16"
    >
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="grid gap-6 md:grid-cols-12 md:gap-12">
          <h2 className="font-editorial text-[clamp(26px,3.6vw,48px)] leading-[1.05] tracking-[-0.01em] text-[#111111] md:col-span-7">
            {t(C.inside.titleLines[0])} {t(C.inside.titleLines[1])}
          </h2>
          <p className="text-[15px] leading-relaxed text-neutral-600 md:col-span-5">
            {t(C.inside.lede)}
          </p>
        </div>

        <div className="mt-10 border-t border-neutral-200">
          {C.inside.cards.map((card) => (
            <div
              key={card.num}
              className="grid gap-2 border-b border-neutral-200 py-7 md:grid-cols-12 md:gap-8"
            >
              <span className="font-mono text-[11px] tabular-nums text-neutral-400 md:col-span-1">
                {card.num}
              </span>
              <h3 className="text-lg font-semibold tracking-tight text-[#111111] md:col-span-4">
                {t(card.title)}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600 md:col-span-7">
                {t(card.desc)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
