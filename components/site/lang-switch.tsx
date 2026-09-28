"use client";

import { useLang, type Lang } from "@/lib/i18n";

/* Tombol ganti bahasa — teks biasa "ID / EN", tanpa pill atau blur.
   Putih + mix-blend-difference: terbaca di halaman terang maupun gelap. */
export function LangSwitch({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();

  const options: { key: Lang; label: string }[] = [
    { key: "id", label: "ID" },
    { key: "en", label: "EN" },
  ];

  return (
    <div
      role="group"
      aria-label="Language / Bahasa"
      className={`inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white mix-blend-difference ${className}`}
    >
      {options.map((option, i) => {
        const isActive = lang === option.key;
        return (
          <span key={option.key} className="inline-flex items-center gap-2">
            {i > 0 ? (
              <span aria-hidden className="opacity-30">
                /
              </span>
            ) : null}
            <button
              type="button"
              onClick={() => setLang(option.key)}
              aria-pressed={isActive}
              className={`transition-opacity duration-200 ${
                isActive ? "opacity-100" : "opacity-45 hover:opacity-80"
              }`}
            >
              {option.label}
            </button>
          </span>
        );
      })}
    </div>
  );
}
