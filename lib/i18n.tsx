"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/* ============================================================
   BILINGUAL — Indonesia (default) & English.
   Semua teks disimpan sebagai { id, en } lalu dipilih lewat t().
============================================================ */

export type Lang = "id" | "en";
export type Bi = { id: string; en: string };

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: (value: Bi) => string;
  tl: (value: readonly Bi[]) => string[];
};

const LANG_KEY = "porto-lang";

const LangContext = createContext<LangContextValue>({
  lang: "id",
  setLang: () => {},
  toggle: () => {},
  t: (value) => value.id,
  tl: (value) => value.map((v) => v.id),
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id");

  /* Ambil pilihan terakhir dari localStorage (default: Indonesia) */
  useEffect(() => {
    const saved = window.localStorage.getItem(LANG_KEY);
    if (saved === "en" || saved === "id") setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(LANG_KEY, next);
  }, []);

  const toggle = useCallback(() => {
    setLangState((prev) => {
      const next: Lang = prev === "id" ? "en" : "id";
      window.localStorage.setItem(LANG_KEY, next);
      return next;
    });
  }, []);

  const value = useMemo<LangContextValue>(
    () => ({
      lang,
      setLang,
      toggle,
      t: (pair) => (lang === "en" ? pair.en : pair.id),
      tl: (pairs) => pairs.map((pair) => (lang === "en" ? pair.en : pair.id)),
    }),
    [lang, setLang, toggle]
  );
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

/** Shortcut kalau cuma butuh fungsi terjemahnya */
export function useT() {
  return useContext(LangContext).t;
}