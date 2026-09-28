"use client";

import { location, socials } from "@/lib/data";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { MOSAIC_COLORS, type MosaicColor } from "@/lib/mosaic";
import { ArrowUpRight, SectionLabel } from "./bits";

/* ============================================================
   KONTAK & FOOTER — penutup edisi kanvas gelap.
   Menghadirkan:
     • heading serif "mari bekerja sama"
     • tautan sosial warna palet mozaik
     • info singkat (email · lokasi · status)
     • tombol [back to top] dengan hover kuning lemon
============================================================ */

export function DesignContact() {
  const t = useT();

  const links: {
    label: string;
    sub: string;
    href: string;
    color: MosaicColor;
    external: boolean;
  }[] = [
    {
      label: "Instagram",
      sub: 'follow me on "Instagram" · @zakriii___',
      href: socials.instagram,
      color: "rose",
      external: true,
    },
    {
      label: "LinkedIn",
      sub: 'connect on "LinkedIn" · Arfin Desca Alzachri',
      href: socials.linkedin,
      color: "sky",
      external: true,
    },
    {
      label: "GitHub",
      sub: 'explore code on "GitHub" · @Finnn-45',
      href: socials.github,
      color: "cobalt",
      external: true,
    },
    {
      label: "Email",
      sub: 'send an "Email" · arfinsmktibazma@gmail.com',
      href: `mailto:${socials.email}`,
      color: "crimson",
      external: false,
    },
    {
      label: "CV / Resume",
      sub: 'download official "Curriculum Vitae" · PDF',
      href: socials.cv,
      color: "amber",
      external: true,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="design-contact"
      className="relative w-full border-t border-black/5 bg-mosaic-black px-6 pt-16 md:px-12 md:pt-24 lg:px-20"
    >
      <div className="mb-6 flex w-full flex-col gap-4">
        <SectionLabel className="font-mono tracking-[0.22em] text-neutral-400" />
      </div>

      {/* ── HEADER ── */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-mosaic-lemon" />
          <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-mosaic-lemon">
            contact
          </span>
        </div>

        <div className="relative mt-2">
          <div className="mt-3 flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
            <p className="max-w-2xl font-editorial text-4xl leading-[1.05] tracking-tight text-mosaic-cream sm:text-5xl md:text-6xl">
              {t(C.design.contactTitle)}{" "}
              <span className="text-mosaic-lemon">{t(C.design.contactTitleAccent)}</span>
            </p>
          </div>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-600 md:text-base">
            {t(C.design.contactNote)}
          </p>
        </div>
      </div>

      {/* ── BARIS KANAL SOSIAL BERWARNA PALET MOZAIK ── */}
      <div className="mt-12 mb-12 flex w-full flex-col md:mt-16">
        {links.map((link) => {
          const hex = MOSAIC_COLORS[link.color];
          return (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 py-5 md:py-6"
              style={{ borderColor: hex }}
            >
              <div className="flex items-center gap-4">
                <span
                  className="truncate font-editorial text-3xl leading-none tracking-tight sm:text-4xl md:text-5xl"
                  style={{ color: hex }}
                >
                  {link.label}
                </span>
                <span className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-400 md:inline-block">
                  · {link.sub}
                </span>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-400 md:hidden">
                  {link.sub}
                </span>
                <span
                  className="inline-block shrink-0"
                  style={{ color: hex }}
                >
                  <ArrowUpRight />
                </span>
              </div>
            </a>
          );
        })}
      </div>

      {/* ── INFO SINGKAT ── */}
      <div className="flex flex-wrap items-start gap-x-12 gap-y-5 border-t border-black/5 py-10">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-neutral-400">
            [email]
          </span>
          <a
            href={`mailto:${socials.email}`}
            className="text-sm font-medium text-mosaic-cream transition-colors hover:text-mosaic-lemon"
          >
            {socials.email}
          </a>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-neutral-400">
            [location]
          </span>
          <span className="text-sm font-medium text-mosaic-cream">{t(location)}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-neutral-400">
            [status]
          </span>
          <span className="text-sm font-medium text-[#5fd39a]">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {t(C.hero.chip)}
          </span>
        </div>
      </div>

      {/* ── BOTTOM STATUS BAR ALA JENUL ── */}
      <div className="flex flex-col items-start justify-between gap-4 py-8 text-[10px] font-mono uppercase tracking-[0.22em] text-neutral-500 sm:flex-row sm:items-center border-t border-black/5 mt-4">
        <div className="flex flex-wrap items-center gap-3">
          <span>[arfin desca alzachri]</span>
          <span>·</span>
          <span>[version 0.1]</span>
          <span>·</span>
          <span>[2026]</span>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 transition-colors hover:text-mosaic-lemon"
        >
          ↑ {t(C.contact.backToTop)}
        </button>
      </div>

    </section>
  );
}