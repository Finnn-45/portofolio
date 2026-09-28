"use client";

import React, { useState } from "react";
import { socials, location } from "@/lib/data";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { SectionLabel } from "./bits";

export function Contact() {
  const t = useT();
  const [copied, setCopied] = useState(false);

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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#07080c] text-[#f4f1ea] px-6 pt-20 pb-12 md:px-12 md:pt-28 lg:px-16 border-t border-white/10"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <SectionLabel className="font-mono text-white/40" />

        <div className="mt-14 grid gap-10 md:grid-cols-12 md:gap-14">
          {/* Main Call to action */}
          <div className="md:col-span-7">
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#ffe846] mb-3 block">
              AVAILABLE FOR COMMISSIONS & INTERNSHIP
            </span>
            <h2 className="font-editorial text-[clamp(36px,5.5vw,78px)] leading-[0.98] tracking-[-0.02em] text-white">
              {t(C.contact.titleLines[0])}{" "}
              <span className="italic text-[#ffe846]">{t(C.contact.titleLines[1])}</span>
            </h2>
            <p className="mt-6 max-w-[560px] text-base leading-relaxed text-white/70">
              {t(C.contact.lede)}
            </p>

            {/* Email Box & One-Click Copy */}
            <div className="mt-8 p-6 rounded-2xl bg-[#11121a] border border-white/10 max-w-lg">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">
                {t(C.contact.mailCta)}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-3 mt-1">
                <a
                  href={`mailto:${socials.email}`}
                  className="font-editorial text-2xl md:text-3xl text-white hover:text-[#ffe846] transition-colors"
                >
                  {socials.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#ffe846] hover:text-black font-mono text-[10px] uppercase tracking-wider text-white transition-colors cursor-pointer"
                >
                  {copied ? "✓ Tersalin!" : "Salin Email"}
                </button>
              </div>
            </div>
          </div>

          {/* Directory Channels */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3">
                {t(C.contact.directLabel)}
              </p>
              <ul className="border-t border-white/10">
                {channels.map((c) => (
                  <li key={c.index} className="border-b border-white/10">
                    <a
                      href={c.href}
                      target={c.external ? "_blank" : undefined}
                      rel={c.external ? "noopener noreferrer" : undefined}
                      className="flex items-center justify-between py-4 text-white/80 hover:text-[#ffe846] transition-colors group"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40 group-hover:text-[#ffe846]">
                        {c.index} {c.label}
                      </span>
                      <span className="font-mono text-xs md:text-sm text-white group-hover:translate-x-1 transition-transform">
                        {c.handle} ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
              <span className="text-emerald-400">●</span> {t(C.contact.status)} · {t(location)}
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
          <span>{t(C.contact.footerLeft)}</span>
          <span>{t(C.contact.footerRight)}</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="text-white/60 hover:text-[#ffe846] transition-colors cursor-pointer"
          >
            ↑ {t(C.contact.backToTop)}
          </button>
        </div>
      </div>
    </footer>
  );
}
