/* ============================================================
   WARNA — sistem warna untuk track DESAIN.
   Dua aturan supaya warnanya punya arti (bukan corat-coret):
     1. satu bidang pekerjaan = satu warna (DISCIPLINE_COLORS)
     2. satu siklus warna (TONE_CYCLE) buat semua penekanan lain,
        supaya ritmenya konsisten antar section
   Semua nilai di sini statis — render server & client identik.
   ============================================================ */

/* Aksen tanda tangan edisi kanvas gelap (Portofolio 2025).
   SENGAJA tidak masuk TONE_CYCLE: lemon hanya dipakai di track /design. */
export const MOSAIC_ACCENT = "#ffe846";

export const MOSAIC_COLORS = {
  lemon: MOSAIC_ACCENT,
  crimson: "#831514",
  cobalt: "#1f3be0",
  sky: "#2f9cf0",
  teal: "#0f9b94",
  amber: "#e8a33d",
  rose: "#e4607a",
  lilac: "#7c5cfc",
  ink: "#141414",
  paper: "#f6f2e9",
} as const;

export type MosaicColor = keyof typeof MOSAIC_COLORS;

/* Urutan warna utama — dipakai berulang biar ritmenya konsisten */
export const TONE_CYCLE: readonly MosaicColor[] = [
  "crimson",
  "amber",
  "cobalt",
  "teal",
  "rose",
  "lilac",
  "sky",
];

const wrap = (i: number, len: number) => ((i % len) + len) % len;

/** Warna ke-i dari siklus utama (selalu balik — aman untuk index negatif) */
export const tone = (i: number): MosaicColor => TONE_CYCLE[wrap(i, TONE_CYCLE.length)];

/* ============================================================
   BIDANG PEKERJAAN → WARNA.
   Aturannya satu: satu bidang = satu warna. Dengan begitu daftar
   karya bisa dibaca (ada artinya), bukan sekadar corat-coret.
   Dipakai sebagai garis penanda di tiap baris karya track /design.
   ============================================================ */
export const DISCIPLINE_COLORS = {
  branding: "crimson",
  content: "cobalt",
  print: "amber",
  media: "rose",
  illustration: "teal",
  ui: "sky",
  program: "lilac",
} as const;

export type Discipline = keyof typeof DISCIPLINE_COLORS;

/** Versi hex dengan alpha — dipakai buat border/tint tipis */
export const withAlpha = (hex: string, alpha: number) =>
  `${hex}${Math.round(alpha * 255)
    .toString(16)
    .padStart(2, "0")}`;