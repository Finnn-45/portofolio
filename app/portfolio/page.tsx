"use client";

import React from "react";
import Link from "next/link";
import {
  profile,
  socials,
  location,
  skills,
  education,
  experiences,
  professional,
  achievements,
  works,
} from "@/lib/data";
import { useT } from "@/lib/i18n";
import { LangSwitch } from "@/components/site/lang-switch";
import { C } from "@/lib/content";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
      [ {children} ]
    </span>
  );
}

export default function PortfolioPage() {
  const t = useT();

  return (
    <main className="min-h-screen bg-[#f4f1ea] text-neutral-900">
      {/* Toolbar — tidak ikut tercetak */}
      <div className="no-print sticky top-0 z-10 flex items-center justify-between bg-[#f4f1ea]/90 backdrop-blur border-b border-neutral-300 px-6 py-3">
        <Link href="/" className="font-mono text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
          {t(C.cv.back)}
        </Link>
        <div className="flex items-center gap-3">
          <LangSwitch variant="light" />
          <button
            onClick={() => window.print()}
            className="px-5 py-2 rounded-full bg-[#831514] text-[#fafafa] font-mono text-sm hover:bg-[#5a0e0e] transition-colors cursor-pointer"
          >
            ⬇ {t(C.cv.savePdf)}
          </button>
        </div>
      </div>

      <div className="max-w-[820px] mx-auto px-8 py-14 print:px-0 print:py-0">
        {/* ===== HEADER ===== */}
        <header className="border-b-2 border-neutral-900 pb-10">
          <Label>{t(C.cv.label)}</Label>
          <h1 className="mt-4 text-5xl md:text-6xl font-bold tracking-tight leading-none">
            Arfin Desca
            <br />
            Alzachri
          </h1>
          <p className="mt-4 font-mono text-sm tracking-[0.3em] text-neutral-600">
            {t(profile.roles)}
          </p>
          <p className="mt-6 text-sm leading-relaxed text-neutral-700 max-w-xl">
            {t(profile.tagline)}
          </p>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2 font-mono text-xs text-neutral-600">
            <a href={`mailto:${socials.email}`} className="hover:text-neutral-900">
              {socials.email}
            </a>
            <span>{t(location)}</span>
            <a href={socials.github} target="_blank" className="hover:text-neutral-900">
              github.com/Finnn-45
            </a>
            <a href={socials.linkedin} target="_blank" className="hover:text-neutral-900">
              linkedin — arfin desca alzachri
            </a>
            <a href={socials.instagram} target="_blank" className="hover:text-neutral-900">
              @zakriii___
            </a>
            <a href={socials.cv} target="_blank" className="hover:text-neutral-900">
              cv.pdf
            </a>
          </div>
        </header>

        {/* ===== EDUCATION & EXPERIENCE ===== */}
        <section className="border-b border-neutral-300 py-10">
          <Label>{t(C.cv.education)}</Label>
          <div className="mt-4 print-item">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-semibold">{education.school}</h3>
              <span className="font-mono text-xs text-neutral-500">2021 — 2025</span>
            </div>
            <p className="mt-1 text-sm text-neutral-600 leading-relaxed">{t(education.desc)}</p>
          </div>
        </section>

        <section className="border-b border-neutral-300 py-10">
          <Label>{t(C.cv.experience)}</Label>
          <div className="mt-4 divide-y divide-neutral-200">
            {experiences.map((exp, i) => (
              <div key={i} className="py-4 print-item">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-semibold">{t(exp.role)}</h3>
                  <span className="shrink-0 font-mono text-xs text-neutral-500">{exp.year}</span>
                </div>
                <p className="mt-1 text-sm text-neutral-600 leading-relaxed">{t(exp.desc)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== PROFESSIONAL ===== */}
        <section className="border-b border-neutral-300 py-10">
          <Label>professional experience — MENTION&apos;s key collaborations</Label>
          <div className="mt-4 divide-y divide-neutral-200">
            {professional.map((exp, i) => (
              <div key={i} className="py-4 print-item">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-semibold">{t(exp.role)}</h3>
                  {exp.year && (
                    <span className="shrink-0 font-mono text-xs text-neutral-500">{t(exp.year)}</span>
                  )}
                </div>
                <p className="mt-1 text-sm text-neutral-600 leading-relaxed">{t(exp.desc)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== SKILLS ===== */}
        <section className="border-b border-neutral-300 py-10">
          <Label>{t(C.cv.skills)}</Label>
          <div className="mt-4 divide-y divide-neutral-200">
            {skills.map((skill, i) => (
              <div key={i} className="py-3 grid md:grid-cols-3 gap-2 print-item">
                <span className="font-semibold text-sm">{t(skill.category)}</span>
                <span className="md:col-span-2 text-sm text-neutral-600">{skill.items}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== ACHIEVEMENTS ===== */}
        <section className="border-b border-neutral-300 py-10">
          <Label>{t(C.cv.achievements)}</Label>
          <div className="mt-4 divide-y divide-neutral-200">
            {achievements.map((ach, i) => (
              <div key={i} className="py-4 flex items-baseline justify-between gap-4 print-item">
                <div>
                  <h3 className="font-semibold">{t(ach.title)}</h3>
                  <p className="text-sm text-neutral-600">{t(ach.desc)}</p>
                </div>
                <span className="shrink-0 font-mono text-xs text-neutral-500">{ach.year}</span>
              </div>
            ))}
          </div>
        </section>


        {/* ===== SELECTED WORKS ===== */}
        <section className="border-b border-neutral-300 py-10">
          <Label>{t(C.cv.works)}</Label>
          <div className="mt-4 space-y-6">
            {works.map((work) => (
              <div key={work.id} className="flex gap-5 print-item">
                <span className="font-mono text-sm text-neutral-400 pt-0.5">{work.id}</span>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-semibold">{t(work.title)}</h3>
                    <span className="shrink-0 font-mono text-xs text-neutral-500">{work.badge}</span>
                  </div>
                  <p className="mt-1 text-sm text-neutral-600 leading-relaxed">{t(work.desc)}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                    {t(work.role)}
                  </p>
                  <p className="mt-1 font-mono text-[11px] text-neutral-500">
                    {work.tags.join(" · ")}
                  </p>
                  {work.repo && (
                    <a
                      href={work.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block font-mono text-[11px] text-neutral-500 underline underline-offset-2 hover:text-neutral-900"
                    >
                      {t(C.cv.repo)}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="py-10 flex items-center justify-between font-mono text-xs text-neutral-500">
          <span>{t(C.cv.footerLeft)}</span>
          <span>{t(C.cv.footerRight)}</span>
        </footer>
      </div>
    </main>
  );
}

