"use client";

import { useLang, type Lang } from "@/lib/i18n";

/* Tombol ganti bahasa — dipakai di hero (gelap) & toolbar CV (terang) */
export function LangSwitch({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const { lang, setLang } = useLang();

  const options: { key: Lang; label: string }[] = [
    { key: "id", label: "ID" },
    { key: "en", label: "EN" },
  ];

  const shell =
    variant === "dark"
      ? "border-white/15 bg-white/5"
      : "border-neutral-300 bg-white/70";
  const idle =
    variant === "dark"
      ? "text-white/45 hover:text-white/80"
      : "text-neutral-500 hover:text-neutral-900";
  const active =
    variant === "dark" ? "bg-white text-[#0d0d0d]" : "bg-[#1a1a1a] text-white";

  return (
    <div
      role="group"
      aria-label="Language / Bahasa"
      className={`inline-flex items-center gap-0.5 rounded-full border p-0.5 backdrop-blur ${shell} ${className}`}
    >
      {options.map((option) => {
        const isActive = lang === option.key;
        return (
          <button
            key={option.key}
            type="button"
            onClick={() => setLang(option.key)}
            aria-pressed={isActive}
            className={`rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors duration-200 ${
              isActive ? active : idle
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}