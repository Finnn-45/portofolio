"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MOSAIC_COLORS, CANVAS_NEUTRAL, MOSAIC_ACCENT, tone, withAlpha, type MosaicColor } from "@/lib/mosaic";

/* ============================================================
   ELEMEN DESAIN — dipakai track /design.
   Semuanya punya alasan, bukan hiasan acak:
     • DesignGrid  → grid 12 kolom + baseline + garis margin (61–96px)
     • MosaicBand  → urutan palet warna yang dipakai konsisten
     • WorkMosaic  → peta kerja: 1 kotak = 1 pekerjaan nyata
     • MosaicLegend→ kunci baca mozaik (bidang → warna)
============================================================ */

/* ===== Grid layout ala desainer: 12 kolom, gutter 24, margin 96 ===== */
export function DesignGrid({
  columns = 12,
  className,
}: {
  columns?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {/* kolom */}
      <div className="absolute inset-0 flex gap-6 px-6 md:px-12 lg:px-24">
        {Array.from({ length: columns }).map((_, i) => (
          <span
            key={i}
            className="h-full flex-1"
            style={{ background: withAlpha(CANVAS_NEUTRAL.line, 0.03) }}
          />
        ))}
      </div>
      {/* baseline tiap 32px */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(to bottom, ${withAlpha(
            CANVAS_NEUTRAL.line,
            0.05
          )} 0 1px, transparent 1px 32px)`,
        }}
      />
      {/* garis margin kiri & kanan */}
      <span
        className="absolute inset-y-0 left-6 w-px md:left-12 lg:left-24"
        style={{ background: withAlpha(MOSAIC_ACCENT, 0.35) }}
      />
      <span
        className="absolute inset-y-0 right-6 w-px md:right-12 lg:right-24"
        style={{ background: withAlpha(MOSAIC_ACCENT, 0.35) }}
      />
    </div>
  );
}

/* ===== Pita palet: kotak berjalan mengikuti urutan warna resmi ===== */
export function MosaicBand({
  rows = 2,
  tileSize = 24,
  label,
  className,
}: {
  rows?: number;
  tileSize?: number;
  label?: string;
  className?: string;
}) {
  /* Satu siklus = 35 kotak (5 × siklus 7 warna) → loop mulus dan
     lebarnya (~2.450px) selalu lebih panjang dari layar. */
  const strip = Array.from({ length: 35 * 2 }, (_, i) => i);

  return (
    <div className={cn("w-full", className)}>
      {label ? (
        <div className="flex items-center gap-3 px-8 pb-2 md:px-16 lg:px-24">
          <span className="h-[1px] w-8 bg-mosaic-lemon" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
            {label}
          </span>
        </div>
      ) : null}
      <div aria-hidden className="flex w-full flex-col gap-2 overflow-hidden py-2">
        {Array.from({ length: rows }).map((_, r) => (
          <div
            key={r}
            className="animate-mosaic-drift flex w-max"
            style={{
              animationDirection: r % 2 === 1 ? "reverse" : "normal",
              animationDuration: `${26 + r * 7}s`,
            }}
          >
            {strip.map((i, k) => (
              <span
                key={k}
                className="mx-[3px] shrink-0 rounded-[5px]"
                style={{
                  width: tileSize,
                  height: tileSize,
                  background: MOSAIC_COLORS[tone(i)],
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ===== Peta kerja: satu kotak = satu pekerjaan nyata =====
   colour = bidang pekerjaan (lihat DISCIPLINE_COLORS)
   weight 2 → kotak 2×2 (cakupan paling luas), weight 1 → 1×1    */
export type WorkTile = {
  id: string;
  label: string;
  context: string;
  year: string;
  note?: string;
  color: MosaicColor;
  weight: 1 | 2;
};

export function WorkMosaic({
  tiles,
  className,
}: {
  tiles: WorkTile[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid auto-rows-[124px] grid-cols-2 gap-3 md:auto-rows-[132px] md:grid-cols-4",
        className
      )}
    >
      {tiles.map((tile, i) => {
        const hex = MOSAIC_COLORS[tile.color];
        const big = tile.weight === 2;
        return (
          <motion.div
            key={tile.id}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: (i % 4) * 0.07 }}
            className={cn(
              "group relative flex flex-col justify-between overflow-hidden rounded-2xl p-4 text-white md:p-5",
              big ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
            )}
            style={{ background: hex }}
          >
            {/* atas: nomor urut + kode warna kotak (swatch-nya sendiri) */}
            <div className="relative flex items-start justify-between gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/65">
                /{tile.id}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/45">
                {hex}
              </span>
            </div>

            {/* bawah: judul + konteks + tahun */}
            <div className="relative flex flex-col gap-1.5">
              <span
                className={cn(
                  "font-extrabold leading-tight tracking-tight",
                  big ? "text-xl md:text-3xl" : "text-sm md:text-base"
                )}
              >
                {tile.label}
              </span>
              <span className="font-mono text-[10px] uppercase leading-snug tracking-[0.16em] text-white/70">
                {tile.context}
                {tile.year ? ` · ${tile.year}` : ""}
              </span>
            </div>

            {/* keterangan muncul saat hover — isi pekerjaannya */}
            {tile.note ? (
              <span
                className="pointer-events-none absolute inset-0 flex items-end p-4 text-[11px] leading-snug text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:p-5 md:text-xs"
                style={{ background: withAlpha(CANVAS_NEUTRAL.scrim, 0.72) }}
              >
                {tile.note}
              </span>
            ) : null}
          </motion.div>
        );
      })}
    </div>
  );
}
/* ===== Kunci baca mozaik: bidang → warna + jumlah pekerjaan ===== */
export type LegendItem = {
  color: MosaicColor;
  label: string;
  count: number;
};

export function MosaicLegend({
  items,
  title,
  hint,
  countLabel,
  className,
}: {
  items: LegendItem[];
  title: string;
  hint: string;
  countLabel: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-black/10 bg-white p-5 md:p-6",
        className
      )}
    >
      <div className="mb-4 flex items-baseline justify-between gap-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-mosaic-lemon">
          {title}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
          {items.reduce((sum, item) => sum + item.count, 0)} {countLabel}
        </span>
      </div>

      <ul className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
        {items.map((item, i) => {
          const hex = MOSAIC_COLORS[item.color];
          return (
            <motion.li
              key={item.color}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-3"
            >
              <span
                className="h-3.5 w-3.5 shrink-0 rounded-[4px]"
                style={{ background: hex }}
              />
              <span className="flex-1 truncate text-sm font-semibold text-mosaic-ink">
                {item.label}
              </span>
              <span className="font-mono text-[10px] tabular-nums text-neutral-400">
                ×{item.count}
              </span>
            </motion.li>
          );
        })}
      </ul>

      <p className="mt-4 border-t border-black/5 pt-3 text-[11px] leading-relaxed text-neutral-500">
        {hint}
      </p>
    </div>
  );
}

/* ===== Baris swatch palet: kotak warna + kode hex ===== */
export function MosaicPalette({ className }: { className?: string }) {
  const entries = (Object.entries(MOSAIC_COLORS) as [MosaicColor, string][]).filter(
    ([name]) => name !== "ink" && name !== "paper"
  );

  return (
    <div className={cn("flex flex-wrap items-end gap-2.5", className)}>
      {entries.map(([name, hex], i) => (
        <motion.div
          key={name}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="flex flex-col gap-1.5"
        >
          <span
            className="block h-8 w-8 rounded-[10px] border border-black/5 transition-transform duration-300 hover:-translate-y-1 md:h-10 md:w-10"
            style={{ background: hex }}
            title={name}
          />
          <span className="font-mono text-[9px] uppercase leading-tight tracking-[0.12em] text-neutral-500">
            {name}
          </span>
          <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-neutral-400">
            {hex}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

/* ===== Chip kecil berwarna (label kategori) ===== */
export function MosaicChip({
  color,
  children,
  className,
}: {
  color: MosaicColor;
  children: ReactNode;
  className?: string;
}) {
  const hex = MOSAIC_COLORS[color];
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em]",
        className
      )}
      style={{
        borderColor: withAlpha(hex, 0.35),
        color: hex,
        background: withAlpha(hex, 0.07),
      }}
    >
      {children}
    </span>
  );
}