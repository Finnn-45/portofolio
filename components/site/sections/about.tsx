"use client";

import { profile, socials, stats, location } from "@/lib/data";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { SectionLabel } from "./bits";

export function About() {
  const t = useT();

  return (
    <section
      id="about"
      className="relative w-full bg-[#0a0b10] text-[#f4f1ea] px-6 py-20 md:px-12 md:py-24 lg:px-16 border-t border-white/10"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <SectionLabel className="font-mono text-white/40" />

        <div className="mt-10 grid gap-8 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#ffe846]">
              {t(C.about.label)}
            </p>
            <h2 className="mt-3 font-editorial text-[clamp(32px,4.5vw,64px)] leading-[1.02] tracking-[-0.01em] text-white">
              {t(C.about.hello)}
              <br />
              <span className="italic font-normal text-[#ffe846]">
                {t(C.about.namePrefix)} {profile.name}
              </span>
            </h2>
          </div>

          <div className="space-y-5 text-[15px] leading-relaxed text-white/75 md:col-span-7">
            <p>{t(C.about.p1)}</p>
            <p>{t(C.about.p2)}</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-[#12131c] border border-white/10"
            >
              <p className="font-editorial text-3xl md:text-4xl tabular-nums font-bold text-[#ffe846]">
                {s.value}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase leading-relaxed tracking-wider text-white/60">
                {t(s.label)}
              </p>
            </div>
          ))}
        </div>

        {/* Short Contacts */}
        <div className="mt-10 grid gap-5 border-t border-white/10 pt-6 text-sm md:grid-cols-3">
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
              {t(C.about.emailLabel)}
            </p>
            <a
              href={`mailto:${socials.email}`}
              className="mt-1 inline-block text-white/90 hover:text-[#ffe846] transition-colors font-mono text-xs"
            >
              {socials.email}
            </a>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
              {t(C.about.linkedinLabel)}
            </p>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-white/90 hover:text-[#ffe846] transition-colors font-mono text-xs"
            >
              Arfin Desca Alzachri ↗
            </a>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
              {t(C.about.locationLabel)}
            </p>
            <p className="mt-1 text-white/90 font-mono text-xs">{t(location)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
