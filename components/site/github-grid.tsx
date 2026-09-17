"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { githubProjects } from "@/lib/data";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";

/* Grid kartu repo GitHub — data asli akun Finnn-45.
   Tiap kartu punya 2 aksi terpisah: [code] buka repo, [live] buka demo.
   PENGAMAN: repo yang ternyata private / sudah dihapus (API GitHub balas
   404) otomatis disembunyikan, jadi repo private nggak pernah tampil. */
export function GithubGrid() {
  const t = useT();
  const [repoPrivate, setRepoPrivate] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;

    Promise.all(
      githubProjects.map(async (repo) => {
        try {
          const res = await fetch(`https://api.github.com/repos/Finnn-45/${repo.name}`);
          return res.status === 404 ? repo.name : null;
        } catch {
          return null; // jaringan bermasalah / kena rate limit? jangan sembunyikan apa pun
        }
      })
    ).then((hasil) => {
      if (!cancelled) setRepoPrivate(hasil.filter((n): n is string => n !== null));
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const repos = githubProjects.filter((repo) => !repoPrivate.includes(repo.name));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {repos.map((repo, i) => (
        <motion.div
          key={repo.name}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
          className="group flex flex-col rounded-2xl border border-neutral-200 bg-[#fafafa] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#1a1a1a] hover:shadow-[0_16px_40px_-20px_rgba(0,0,0,0.35)]"
        >
          <div>
            <div className="flex items-start justify-between gap-3 mb-3">
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                </svg>
                Finnn-45
              </span>
              {repo.featured && (
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] bg-[#1a1a1a] text-white px-2 py-0.5 rounded-full">
                  {t(C.github.featured)}
                </span>
              )}
            </div>
            <h4 className="text-lg font-extrabold tracking-tight text-[#1a1a1a] break-all leading-snug">
              {repo.name}
            </h4>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{t(repo.desc)}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {repo.tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] uppercase tracking-wider text-neutral-600 bg-white px-2 py-0.5 rounded border border-neutral-200"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center justify-between gap-3">
            <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">
              {repo.lang} · {repo.year}
            </span>
            <span className="flex items-center gap-3 shrink-0">
              {repo.live && (
                <a
                  href={repo.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] uppercase tracking-widest text-[#831514] hover:text-[#5a0e0e] transition-colors"
                >
                  {t(C.github.live)} ↗
                </a>
              )}
              <a
                href={repo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] font-semibold uppercase tracking-widest text-[#1a1a1a] hover:text-[#831514] transition-colors"
              >
                {t(C.github.code)} ↗
              </a>
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
