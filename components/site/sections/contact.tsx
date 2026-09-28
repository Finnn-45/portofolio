"use client";

import { profile, socials, location } from "@/lib/data";
import { useLang, useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SectionLabel, ArrowUpRight } from "./bits";

/* ============================================================
   KONTAK / FOOTER — penutup halaman versi gelap.
   Konsep: babak penutup seperti sampul belakang buku —
   status hidup (jam Bogor), satu aksi email yang jelas,
   kanal dalam format direktori bernomor, marquee ajakan,
   lalu bilah status + bilah hak cipta di paling bawah.
============================================================ */

export function Contact() {
  const t = useT();
  const { lang } = useLang();
  const [time, setTime] = useState("");

  /* Jam Bogor — pola sama seperti hero, biar bilah status terasa hidup */
  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString(lang === "en" ? "en-GB" : "id-ID", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Asia/Jakarta",
        })
      );
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [lang]);

  const channels = [
    {
      index: "01",
      label: t(C.contact.links[0]),
      handle: "github.com/Finnn-45",
      href: socials.github,
      external: true,
    },
    {
      index: "02",
      label: t(C.contact.links[1]),
      handle: socials.email,
      href: `mailto:${socials.email}`,
      external: false,
    },
    {
      index: "03",
      label: t(C.contact.links[2]),
      handle: "/in/arfin-desca-alzachri",
      href: socials.linkedin,
      external: true,
    },
    {
      index: "04",
      label: t(C.contact.links[3]),
      handle: "@zakriii___",
      href: socials.instagram,
      external: true,
    },
    {
      index: "05",
      label: t(C.contact.links[4]),
      handle: "cv.pdf",
      href: socials.cv,
      external: true,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative w-full overflow-hidden bg-[#090909] text-white">
      {/* Hairline grid + garis aksen — konsisten dengan hero & black cover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#831514] to-transparent" />

      <div className="relative z-10 px-8 pt-14 md:px-16 md:pt-20 lg:px-24">
        <SectionLabel dark />

        <div className="mt-12 grid grid-cols-1 gap-14 md:mt-16 lg:grid-cols-12 lg:gap-12">
          {/* ── KIRI: AJAKAN UTAMA ── */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/55">
                {t(C.contact.status)}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-7 text-[clamp(1.75rem,7.5vw,4rem)] lg:text-[clamp(2.75rem,5.2vw,5.5rem)] font-extrabold tracking-tighter leading-[0.88] uppercase"
            >
              {t(C.contact.titleLines[0])}
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.45)" }}
              >
                {t(C.contact.titleLines[1])}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-lg text-sm md:text-base text-white/45 leading-relaxed"
            >
              {t(C.contact.lede)}
            </motion.p>
            {/* Satu aksi jelas: kirim email */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              href={`mailto:${socials.email}`}
              className="group mt-10 inline-flex max-w-full items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.04] py-4 pl-4 pr-6 transition-colors duration-300 hover:border-white/30 hover:bg-white/[0.08]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#831514] text-white">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m3 6 9 7 9-7" />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">
                  {t(C.contact.mailCta)}
                </span>
                <span className="block truncate text-sm sm:text-base font-semibold text-white">
                  {socials.email}
                </span>
              </span>
              <span className="ml-auto shrink-0 text-white/50 transition-colors duration-300 group-hover:text-white">
                <ArrowUpRight />
              </span>
            </motion.a>
          </div>

          {/* ── KANAN: DIREKTORI KANAL ── */}
          <div className="lg:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/35">
              {t(C.contact.directLabel)}
            </p>

            <div className="mt-5 border-t border-white/10">
              {channels.map((channel, i) => (
                <motion.a
                  key={channel.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 border-b border-white/10 py-4 transition-colors duration-300 hover:border-white/25"
                >
                  <span className="font-mono text-[10px] tracking-widest text-white/30 transition-colors duration-300 group-hover:text-[#e4607a]">
                    /{channel.index}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-base sm:text-lg font-extrabold uppercase tracking-tight text-white/85 transition-colors duration-300 group-hover:text-white">
                      {channel.label}
                    </span>
                    <span className="block truncate font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
                      {channel.handle}
                    </span>
                  </span>
                  <span className="shrink-0 text-white/35 transition-colors duration-300 group-hover:text-white">
                    <ArrowUpRight />
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Kartu data — bahasa papan instrumen */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/35">
                  {t(C.about.locationLabel)}
                </p>
                <p className="mt-1 text-sm font-semibold text-white/80">{t(location)}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/35">
                  {t(C.contact.timezone)}
                </p>
                <p className="mt-1 font-mono text-sm font-semibold tabular-nums text-white/80">
                  {time} WIB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MARQUEE AJAKAN KOLABORASI ── */}
      <div className="relative z-10 mt-14 md:mt-20 border-y border-white/10 py-5 md:py-6 overflow-hidden">
        <div className="flex w-max animate-marquee-left">
          {[0, 1].map((half) => (
            <div key={half} className="flex shrink-0 items-center" aria-hidden={half === 1}>
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="flex items-center gap-6 pr-6 text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tighter text-white/15"
                >
                  {t(C.contact.marquee)}
                  <span className="text-base text-[#831514]" aria-hidden>
                    ✦
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── BILAH STATUS PENUTUP ── */}
      <div className="relative z-10 flex flex-col gap-4 px-8 py-7 md:flex-row md:items-center md:justify-between md:px-16 lg:px-24">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
          <span>[{t(location)}]</span>
          <span className="text-white/15" aria-hidden>
            ·
          </span>
          <span className="tabular-nums">[GMT+7 {time}]</span>
          <span className="text-white/15" aria-hidden>
            ·
          </span>
          <span>{t(profile.roles)}</span>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-white/15 bg-white/5 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.24em] text-white/70 transition-all duration-300 hover:border-white/40 hover:bg-white hover:text-[#090909] md:self-auto"
        >
          ↑ {t(C.contact.backToTop)}
        </button>
      </div>

      {/* ── BILAH HAK CIPTA ── */}
      <div className="relative z-10 flex flex-col gap-2 border-t border-white/10 px-8 py-5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/30 sm:flex-row sm:items-center sm:justify-between md:px-16 lg:px-24">
        <span>© 2026 {profile.name}</span>
        <span>{t(C.contact.footerRight)}</span>
      </div>
    </footer>
  );
}
