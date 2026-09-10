"use client";

import React from "react";
import { motion } from "framer-motion";
import { CustomCursor, ScrollProgress, LocalTime, StatusChip } from "@/components/site/decor";
import {
  works,
  fieldNotes,
  education,
  experiences,
  professional,
  achievements,
  socials,
  location,
  profile,
  stats,
  githubProjects,
} from "@/lib/data";

/* ============================================================
   REUSABLE PIECES
============================================================ */

function BracketLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-xs md:text-sm text-[#78716c] tracking-wide">
      [ {children} ]
    </span>
  );
}

function Marquee({ text, reverse = false }: { text: string; reverse?: boolean }) {
  return (
    <div className="overflow-hidden border-y border-[#1a1a1a]/10 py-4 select-none">
      <div
        className={`flex whitespace-nowrap w-max animate-marquee ${
          reverse ? "marquee-reverse" : ""
        }`}
      >
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center">
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className="mx-8 text-sm uppercase tracking-[0.35em] text-[#78716c]"
              >
                {text}
                <span className="ml-8 text-[#c9c2b2]">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#f4f1ea] text-[#1a1a1a] overflow-x-hidden">
      {/* ===== DECOR: cursor, progress, noise ===== */}
      <CustomCursor />
      <ScrollProgress />
      <div className="noise-overlay" aria-hidden />

      {/* ===== TOP BAR ===== */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#f4f1ea]/85 backdrop-blur-md border-b border-[#1a1a1a]/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-mono text-sm text-[#57534e] hover:text-[#1a1a1a] transition-colors">
            arfin — portfolio
          </a>
          <div className="flex items-center gap-6 font-mono text-xs md:text-sm">
            <LocalTime />
            <a href={socials.cv} target="_blank" className="text-[#57534e] hover:text-[#1a1a1a] transition-colors">
              CV
            </a>
            <a href={socials.linkedin} target="_blank" className="text-[#57534e] hover:text-[#1a1a1a] transition-colors">
              LinkedIn
            </a>
            <a
              href="/portfolio"
              className="px-4 py-1.5 rounded-full bg-[#1a1a1a] text-[#f4f1ea] font-mono text-xs md:text-sm hover:bg-[#831514] transition-colors"
            >
              Portfolio ↓
            </a>
            <a href="#works" className="px-4 py-1.5 rounded-full border border-[#1a1a1a]/15 text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#f4f1ea] transition-all">
              See All My Work
            </a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative pt-40 pb-0 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp}>
            <BracketLabel>start here</BracketLabel>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
            }}
            className="mt-6 font-bold uppercase leading-[0.95] tracking-tight text-[clamp(2.8rem,9vw,8.5rem)]"
          >
            {[
              { text: "Arfin", muted: false },
              { text: "Desca", muted: true },
              { text: "Alzachri", muted: false },
            ].map((line) => (
              <motion.span
                key={line.text}
                variants={{
                  hidden: { opacity: 0, y: "60%" },
                  show: {
                    opacity: 1,
                    y: "0%",
                    transition: { duration: 0.7, ease: "easeOut" },
                  },
                }}
                className={`block overflow-hidden ${line.muted ? "text-[#78716c]" : ""}`}
              >
                {line.text}
              </motion.span>
            ))}
          </motion.h1>

          <div className="mt-12 grid md:grid-cols-2 gap-10 items-end">
            <motion.p {...fadeUp} className="text-[#57534e] text-base md:text-lg leading-relaxed max-w-md">
              {profile.tagline}
            </motion.p>

            <motion.div {...fadeUp} className="flex flex-col items-start md:items-end gap-4">
              <StatusChip />
              <a
                href={`mailto:${socials.email}?subject=${encodeURIComponent(
                  "Peluang Kerja / Magang — via Portfolio"
                )}`}
                className="px-6 py-3 rounded-full bg-[#1a1a1a] text-[#f4f1ea] font-medium hover:bg-[#831514] transition-colors"
              >
                Hire Me →
              </a>
              <a
                href={socials.cv}
                target="_blank"
                className="font-mono text-xs text-[#78716c] hover:text-[#1a1a1a] transition-colors underline underline-offset-4"
              >
                download my CV ↓
              </a>
              <div className="flex flex-wrap gap-4 font-mono text-xs text-[#78716c]">
                <a href={`mailto:${socials.email}`} className="hover:text-[#1a1a1a] transition-colors">
                  {socials.email}
                </a>
                <span>/</span>
                <span>{location}</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-20">
          <Marquee text="arfin portfolio" />
        </div>
      </section>

      {/* ===== IMPACT STATS ===== */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1a1a1a]/10 rounded-2xl overflow-hidden border border-[#1a1a1a]/10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="bg-[#f4f1ea] p-8 flex flex-col gap-2"
            >
              <span className="text-3xl md:text-5xl font-bold tracking-tight text-[#1a1a1a]">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-[#78716c] leading-relaxed">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== FIELD NOTES ===== */}
      <section className="px-6 py-28">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="flex items-center justify-between">
            <BracketLabel>field notes</BracketLabel>
            <BracketLabel>notes</BracketLabel>
          </motion.div>

          <motion.h2 {...fadeUp} className="mt-8 text-3xl md:text-5xl font-bold tracking-tight">
            Field Notes
          </motion.h2>

          <div className="mt-12 divide-y divide-[#1a1a1a]/10 border-y border-[#1a1a1a]/10">
            {fieldNotes.map((note, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="group flex items-center justify-between py-5 hover:pl-4 transition-all duration-300"
              >
                <span className="text-[#292524] group-hover:text-[#831514] transition-colors">
                  {note}
                </span>
                <span className="font-mono text-[#a8a294] text-sm">0{i + 1}</span>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-10 flex flex-wrap gap-3 font-mono text-xs text-[#78716c]">
            {["links", "name", "photo", "notes", "byline", "duct-tape"].map((w) => (
              <span key={w} className="px-3 py-1 rounded-full border border-[#1a1a1a]/10">
                {w}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== EDUCATION + EXPERIENCE ===== */}
      <section className="px-6 py-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div {...fadeUp}>
            <BracketLabel>experience</BracketLabel>
            <p className="mt-8 text-2xl md:text-3xl font-medium leading-snug text-[#1a1a1a]">
              Dari kegiatan sekolah hingga proyek berskala besar — pengalaman-pengalaman
              ini yang membentuk cara saya memandang teknologi dan desain.
            </p>

            <div className="mt-12 rounded-2xl border border-[#1a1a1a]/10 p-6">
              <BracketLabel>education</BracketLabel>
              <h3 className="mt-4 text-lg font-semibold text-[#1a1a1a]">
                {education.school}
              </h3>
              <p className="mt-2 text-sm text-[#78716c] leading-relaxed">
                {education.desc}
              </p>
            </div>
          </motion.div>

          <div>
            <div className="divide-y divide-[#1a1a1a]/10 border-y border-[#1a1a1a]/10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                  className="py-6 group"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-[#1a1a1a] group-hover:pl-2 transition-all duration-300">
                      {exp.role}
                    </h3>
                    <span className="shrink-0 font-mono text-xs text-[#a8a294]">
                      {exp.year}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-[#78716c] leading-relaxed">{exp.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.p {...fadeUp} className="mt-6 font-mono text-sm text-[#a8a294]">
              and many more experiences ahead….
            </motion.p>
          </div>
        </div>
      </section>

      {/* ===== PROFESSIONAL EXPERIENCE ===== */}
      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="flex items-center justify-between">
            <BracketLabel>professional experience</BracketLabel>
            <BracketLabel>2025 — now</BracketLabel>
          </motion.div>

          <motion.h2 {...fadeUp} className="mt-8 text-3xl md:text-5xl font-bold tracking-tight">
            MENTION&apos;s Key Collaborations
          </motion.h2>
          <motion.p {...fadeUp} className="mt-4 max-w-2xl text-[#57534e] leading-relaxed">
            MENTION (Media Design and Information) adalah pengelola desain media dan
            informasi SMK TI Bazma — menghasilkan konten visual untuk mendukung seluruh
            kegiatan sekolah.
          </motion.p>

          <div className="mt-12 divide-y divide-[#1a1a1a]/10 border-y border-[#1a1a1a]/10">
            {professional.map((exp, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="py-6 group"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[#1a1a1a] group-hover:pl-2 transition-all duration-300">
                    {exp.role}
                  </h3>
                  {exp.year && (
                    <span className="shrink-0 font-mono text-xs text-[#a8a294]">
                      {exp.year}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-[#78716c] leading-relaxed">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ACHIEVEMENTS ===== */}
      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="flex items-center justify-between">
            <BracketLabel>achievements</BracketLabel>
            <BracketLabel>certifications</BracketLabel>
          </motion.div>

          <motion.h2 {...fadeUp} className="mt-8 text-3xl md:text-5xl font-bold tracking-tight">
            Achievement &amp; Certification
          </motion.h2>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {achievements.map((ach, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="group rounded-2xl border border-[#1a1a1a]/10 p-8 hover:border-[#831514]/40 transition-colors duration-300"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-semibold text-[#1a1a1a]">{ach.title}</h3>
                  <span className="shrink-0 font-mono text-xs text-[#a8a294]">
                    {ach.year}
                  </span>
                </div>
                <p className="mt-2 text-sm text-[#78716c] leading-relaxed">{ach.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ===== SELECTED WORKS ===== */}
      <section id="works" className="px-6 py-28">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="flex items-center gap-4">
            <BracketLabel>selected</BracketLabel>
            <BracketLabel>works</BracketLabel>
          </motion.div>

          <motion.h2 {...fadeUp} className="mt-8 text-3xl md:text-5xl font-bold tracking-tight">
            Selected Works
          </motion.h2>

          <div className="mt-14 space-y-20">
            {works.map((work, i) => (
              <motion.article
                key={work.id}
                {...fadeUp}
                className={`group grid md:grid-cols-12 gap-8 items-start ${
                  i % 2 === 1 ? "md:text-right" : ""
                }`}
              >
                <div className={`md:col-span-5 flex ${i % 2 === 1 ? "md:order-2 md:justify-end" : ""}`}>
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#1a1a1a]/10 bg-[#e9e4d9] flex items-center justify-center">
                    <span className="text-[6rem] md:text-[8rem] font-bold text-[#1a1a1a]/10 group-hover:text-[#1a1a1a]/20 transition-colors duration-500">
                      {work.id}
                    </span>
                    <span className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.25em] text-[#78716c]">
                      {work.badge}
                    </span>
                  </div>
                </div>

                <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <h3 className="text-2xl md:text-4xl font-bold tracking-tight group-hover:text-[#831514] transition-colors">
                    {work.title}
                    <span className="inline-block ml-2 text-xl md:text-3xl opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      ↗
                    </span>
                  </h3>
                  <p className="mt-4 text-[#57534e] leading-relaxed max-w-lg md:max-w-none inline-block">
                    {work.desc}
                  </p>
                  <p className="mt-6 font-mono text-xs tracking-[0.4em] uppercase text-[#78716c]">
                    {work.role}
                  </p>
                  <div className={`mt-6 flex flex-wrap gap-2 ${i % 2 === 1 ? "md:justify-end" : ""}`}>
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full border border-[#1a1a1a]/10 font-mono text-xs text-[#57534e]"
                      >
                        {tag}
                      </span>
                    ))}
                    {work.link && (
                      <a
                        href={work.link}
                        target="_blank"
                        className="px-3 py-1 rounded-full bg-[#1a1a1a] text-[#f4f1ea] font-mono text-xs hover:bg-[#831514] transition-colors"
                      >
                        visit →
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>


      {/* ===== MORE FROM GITHUB ===== */}
      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="flex items-center gap-4">
            <BracketLabel>more</BracketLabel>
            <BracketLabel>on github</BracketLabel>
          </motion.div>

          <motion.h2 {...fadeUp} className="mt-8 text-3xl md:text-5xl font-bold tracking-tight">
            More Projects
          </motion.h2>
          <motion.p {...fadeUp} className="mt-3 text-sm text-[#78716c]">
            Repositori lain dari GitHub.
          </motion.p>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {githubProjects.map((repo, i) => (
              <motion.a
                key={repo.name}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                href={repo.link}
                target="_blank"
                className="group flex flex-col rounded-2xl border border-[#1a1a1a]/10 p-6 hover:border-[#831514]/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs text-[#a8a294]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#78716c]">
                    {repo.size}
                  </span>
                </div>
                <h3 className="mt-4 text-lg md:text-xl font-semibold tracking-tight break-words group-hover:text-[#831514] transition-colors">
                  {repo.name}
                  <span className="inline-block ml-2 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    ↗
                  </span>
                </h3>
                <p className="mt-3 text-sm text-[#57534e] leading-relaxed flex-1">
                  {repo.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {repo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full border border-[#1a1a1a]/10 font-mono text-xs text-[#57534e]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}

            <motion.a
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 5 * 0.06 }}
              href={socials.github}
              target="_blank"
              className="group flex flex-col items-start justify-center gap-3 rounded-2xl border border-dashed border-[#1a1a1a]/20 p-6 hover:border-[#831514]/50 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="font-mono text-xs text-[#a8a294]">06</span>
              <h3 className="text-lg md:text-xl font-semibold tracking-tight group-hover:text-[#831514] transition-colors">
                All repositories ↗
              </h3>
            </motion.a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="px-6 pt-28 pb-10">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="flex items-center justify-between">
            <BracketLabel>footer</BracketLabel>
            <span className="font-mono text-xs text-[#a8a294]">–</span>
            <BracketLabel>starts here</BracketLabel>
          </motion.div>

          <motion.p
            {...fadeUp}
            className="mt-14 text-center font-mono text-xl md:text-4xl tracking-[0.35em] text-[#78716c]"
          >
            open for opportunities
          </motion.p>

          <motion.p
            {...fadeUp}
            className="mt-8 text-center text-[#57534e] text-base md:text-lg leading-relaxed max-w-xl mx-auto"
          >
            Sedang mencari kesempatan magang atau kerja di bidang web development,
            IoT, atau desain. Kalau tim Anda butuh orang yang bisa langsung
            berkontribusi — nggak perlu ragu buat hubungi saya.
          </motion.p>

          <motion.div {...fadeUp} className="mt-10 flex justify-center">
            <a
              href={`mailto:${socials.email}?subject=${encodeURIComponent(
                "Peluang Kerja / Magang — via Portfolio"
              )}`}
              className="px-8 py-4 rounded-full bg-[#1a1a1a] text-[#f4f1ea] font-medium text-lg hover:bg-[#831514] transition-colors"
            >
              {socials.email}
            </a>
          </motion.div>

          <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-6 text-lg md:text-2xl">
            <span className="text-[#57534e]">follow me on</span>
            <a
              href={socials.instagram}
              target="_blank"
              className="font-semibold text-[#1a1a1a] border-b border-[#1a1a1a]/30 hover:border-[#831514] transition-colors"
            >
              Instagram
            </a>
            <a
              href={socials.github}
              target="_blank"
              className="font-semibold text-[#1a1a1a] border-b border-[#1a1a1a]/30 hover:border-[#831514] transition-colors"
            >
              GitHub
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              className="font-semibold text-[#1a1a1a] border-b border-[#1a1a1a]/30 hover:border-[#831514] transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <div className="mt-10 text-center">
            <a
              href="/portfolio"
              className="font-mono text-xs text-[#78716c] hover:text-[#1a1a1a] transition-colors"
            >
              download portfolio as pdf ↓
            </a>
          </div>

          <div className="mt-24">
            <Marquee text="arfin portfolio" reverse />
          </div>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-[#a8a294]">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-[#1a1a1a] transition-colors cursor-pointer"
            >
              back to top ↑
            </button>
            <span>
              [version 0.1] [arfin] [2026]
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}

