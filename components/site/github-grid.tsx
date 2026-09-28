"use client";

import { useEffect, useState } from "react";
import { githubProjects } from "@/lib/data";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";

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
          return null;
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
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo) => (
        <li
          key={repo.name}
          className="p-5 rounded-xl bg-[#12131b] border border-white/10 hover:border-[#ffe846]/30 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-baseline justify-between gap-3">
              <h4 className="break-all font-mono text-[13px] font-bold text-white">
                {repo.name}
              </h4>
              {repo.featured ? (
                <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.2em] text-[#ffe846] bg-[#ffe846]/10 px-1.5 py-0.5 rounded">
                  {t(C.github.featured)}
                </span>
              ) : null}
            </div>

            <p className="mt-2.5 text-xs leading-relaxed text-white/70">
              {t(repo.desc)}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-white/5">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">
              {repo.lang} · {repo.year}
              {repo.tags.length > 0 ? ` · ${repo.tags.join(" / ")}` : ""}
            </p>

            <div className="mt-3 flex items-center gap-5 font-mono text-[10px] uppercase tracking-[0.18em]">
              <a
                href={repo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#ffe846] transition-colors"
              >
                {t(C.github.code)} ↗
              </a>
              {repo.live ? (
                <a
                  href={repo.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ffe846] hover:text-white transition-colors"
                >
                  {t(C.github.live)} ↗
                </a>
              ) : null}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
