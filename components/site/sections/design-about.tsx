"use client";

import { profile, socials, location, stats, education } from "@/lib/data";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { MOSAIC_COLORS, tone } from "@/lib/mosaic";
import { SectionLabel } from "./bits";

/* ============================================================
   TENTANG — narasi, pendidikan, tiga aturan kerja, dan angka.
   Kartu identitas 3D (WebGL) + modal layar penuh sudah dihapus:
   yang tampil sekarang kartu data statis, tanpa kanvas.
============================================================ */

export function DesignAbout() {
  const t = useT();

  const cardRows = [
    { k: "[email]", v: socials.email },
    { k: "[base]", v: t(location) },
    { k: "[focus]", v: t(C.design.selectedWork) },
  ];

  return (
    <section
      id="design-about"
      className="relative w-full border-t border-black/5 bg-mosaic-black px-6 py-16 md:px-12 md:py-24 lg:px-20"
    >
      <div className="mb-8 flex w-full flex-col gap-4 md:mb-12">
        <SectionLabel className="font-mono tracking-[0.22em] text-neutral-400" />
      </div>

      <div className="grid w-full grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
        {/* ── KOLOM KIRI: KARTU DATA ── */}
        <div className="lg:col-span-5">
          <div className="rounded-3xl bg-white p-6 md:p-8">
            <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-neutral-400">
              [profile card]
            </p>

            <div className="mt-4 flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/foto-saya.png"
                alt={profile.name}
                className="h-20 w-20 shrink-0 border border-black/10 object-cover object-top"
              />
              <div className="min-w-0">
                <h3 className="font-editorial text-xl leading-tight tracking-tight text-mosaic-ink">
                  {profile.name}
                </h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  {t(profile.roles)}
                </p>
              </div>
            </div>

            <dl className="mt-6 border-t border-black/5">
              {cardRows.map((row) => (
                <div
                  key={row.k}
                  className="flex items-baseline justify-between gap-4 border-b border-black/5 py-2.5"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                    {row.k}
                  </dt>
                  <dd className="truncate text-sm text-mosaic-ink">{row.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* ── KOLOM KANAN: NARASI & PENDIDIKAN ── */}
        <div className="flex flex-col gap-6 lg:col-span-7">
          <div className="flex flex-wrap items-center gap-3">
            <span className="h-px w-8 bg-mosaic-lemon" />
            <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-mosaic-lemon">
              about
            </span>
          </div>

          <h2 className="font-editorial text-4xl leading-[1.05] tracking-tight text-mosaic-cream sm:text-5xl md:text-6xl">
            {profile.name}
          </h2>

          <div className="space-y-4 text-base leading-relaxed text-neutral-700">
            <p>{t(C.about.p1)}</p>
            <p>{t(C.about.p2)}</p>
          </div>

          <div className="border-t border-black/10 pt-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-mosaic-lemon">
              education
            </span>
            <h4 className="mt-3 font-editorial text-xl text-mosaic-ink">
              {education.school}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              {t(education.desc)}
            </p>
          </div>
        </div>
      </div>

      {/* ── TIGA ATURAN MAIN ── */}
      <div className="mt-20 md:mt-24">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-mosaic-lemon" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-mosaic-lemon">
            {t(C.design.principlesTitle)}
          </span>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {C.design.principles.map((principle, i) => {
            const hex = MOSAIC_COLORS[tone(i)];
            return (
              <div
                key={principle.title.id}
                className="flex flex-col gap-3 border-t border-black/10 pt-5"
              >
                <span
                  className="font-mono text-[10px] font-bold tabular-nums tracking-[0.2em]"
                  style={{ color: hex }}
                >
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-editorial text-xl leading-snug tracking-tight text-mosaic-ink">
                  {t(principle.title)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {t(principle.desc)}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── ANGKA STATISTIK ── */}
      <div className="mt-16 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => {
          const hex = MOSAIC_COLORS[tone(i + 2)];
          return (
            <div key={stat.value + i} className="flex flex-col gap-2 border-t border-black/10 pt-5">
              <span
                className="font-editorial text-4xl font-medium tabular-nums leading-none tracking-tight md:text-5xl"
                style={{ color: hex }}
              >
                {stat.value}
              </span>
              <span className="text-xs leading-relaxed text-neutral-600">{t(stat.label)}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
