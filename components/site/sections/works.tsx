"use client";

import { socials } from "@/lib/data";
import { useLang, useT } from "@/lib/i18n";
import { C, caseStudies } from "@/lib/content";
import { GithubGrid } from "@/components/site/github-grid";
import { SectionLabel, ArrowUpRight } from "./bits";

export function Works() {
  const t = useT();
  const { tl } = useLang();

  const labels = tl(C.modal.sections);

  return (
    <section
      id="works"
      className="relative w-full bg-[#0a0b10] text-[#f4f1ea] px-6 py-20 md:px-12 md:py-28 lg:px-16 border-t border-white/10"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <SectionLabel className="font-mono text-white/40" />

        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#ffe846] mb-2 block">
              ENGINEERING & CODE ARCHIVE
            </span>
            <h2 className="font-editorial text-[clamp(32px,4.5vw,64px)] leading-[1.05] tracking-[-0.01em] text-white">
              {t(C.works.titleLines[0])}{" "}
              <span className="italic text-[#ffe846]">{t(C.works.titleLines[1])}</span>
            </h2>
          </div>
          <p className="text-sm md:text-base leading-relaxed text-white/70 lg:col-span-5">
            {t(C.works.lede)}
          </p>
        </div>

        {/* Daftar studi kasus */}
        <div className="mt-12 border-t border-white/10">
          {caseStudies.map((work) => {
            const sections = [
              { label: labels[0], body: t(work.overview) },
              { label: labels[1], body: t(work.challenge) },
              { label: labels[2], body: t(work.process) },
              { label: labels[3], body: t(work.solution) },
              { label: labels[4], body: t(work.result) },
            ];

            return (
              <details key={work.id} className="group border-b border-white/10">
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-7 [&::-webkit-details-marker]:hidden hover:bg-white/[0.02] px-3 -mx-3 rounded-lg transition-colors">
                  <span className="flex min-w-0 items-baseline gap-4 md:gap-8">
                    <span className="shrink-0 font-mono text-[11px] tabular-nums text-[#ffe846] font-bold">
                      /{work.id}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-editorial text-[clamp(24px,3.2vw,44px)] leading-tight tracking-[-0.01em] text-white group-hover:text-[#ffe846] transition-colors">
                        {t(work.title)}
                      </span>
                      <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
                        {t(work.category)} — {work.year} · {work.tools.slice(0, 4).join(", ")}
                      </span>
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="shrink-0 font-mono text-base leading-none text-white/40 group-open:hidden"
                  >
                    +
                  </span>
                  <span
                    aria-hidden
                    className="hidden shrink-0 font-mono text-base leading-none text-[#ffe846] group-open:inline"
                  >
                    &minus;
                  </span>
                </summary>
                <div className="pb-10 pt-2 md:pl-12">
                  <p className="max-w-[760px] text-[15px] leading-relaxed text-white/80">
                    {t(work.description)}
                  </p>

                  <div className="mt-8 space-y-2">
                    {sections.map((s) => (
                      <div
                        key={s.label}
                        className="grid gap-2 border-t border-white/5 py-5 md:grid-cols-12 md:gap-8"
                      >
                        <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ffe846] md:col-span-3">
                          {s.label}
                        </h3>
                        <p className="text-sm leading-relaxed text-white/70 md:col-span-9">
                          {s.body}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-5 font-mono text-[10px] uppercase tracking-[0.18em]">
                    {work.tools.map((tool) => (
                      <span key={tool} className="text-white/50 bg-white/5 px-2 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                    {work.repo ? (
                      <a
                        href={work.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-white/80 transition-colors hover:text-[#ffe846]"
                      >
                        <span className="flex items-center gap-2">
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                          </svg>
                          {t(C.modal.repoLink)}
                        </span>
                        <ArrowUpRight />
                      </a>
                    ) : null}
                  </div>
                </div>
              </details>
            );
          })}
        </div>

        {/* Repo asli di GitHub */}
        <div className="mt-20">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#ffe846]">
                {t(C.works.githubKicker)}
              </p>
              <h3 className="mt-2 font-editorial text-[clamp(24px,3.2vw,42px)] leading-tight tracking-[-0.01em] text-white">
                {t(C.works.githubTitle)}
              </h3>
            </div>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-[#ffe846]"
            >
              {t(C.works.githubCta)}
              <ArrowUpRight />
            </a>
          </div>

          <div className="mt-8">
            <GithubGrid />
          </div>

          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
            {t(C.works.githubNote)}
          </p>
        </div>
      </div>
    </section>
  );
}
