"use client";

import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { SectionLabel } from "./bits";

export function Services() {
  const t = useT();

  return (
    <section
      id="services"
      className="relative w-full bg-[#090a0f] text-[#f4f1ea] px-6 py-20 md:px-12 md:py-24 lg:px-16 border-t border-white/10"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <SectionLabel className="font-mono text-white/40" />

        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#ffe846] mb-2">
              CAPABILITIES & CRAFT
            </p>
            <h2 className="font-editorial text-[clamp(32px,4.5vw,64px)] leading-[1.02] tracking-[-0.01em] text-white">
              {t(C.services.titleLines[0])}{" "}
              <span className="italic text-[#ffe846]">{t(C.services.titleLines[1])}</span>
            </h2>
          </div>
          <p className="text-sm md:text-base leading-relaxed text-white/70 lg:col-span-5">
            {t(C.services.lede)}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {C.services.cards.map((card, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#111218] border border-white/10 hover:border-[#ffe846]/30 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs tabular-nums text-[#ffe846] font-bold">
                  [ 0{i + 1} ]
                </span>
                <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#ffe846] transition-colors" />
              </div>
              <h3 className="text-lg md:text-xl font-bold tracking-tight text-white mb-2 group-hover:text-[#ffe846] transition-colors">
                {t(card.title)}
              </h3>
              <p className="text-sm leading-relaxed text-white/70">
                {t(card.desc)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
