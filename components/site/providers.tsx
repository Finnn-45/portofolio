"use client";

import type { ReactNode } from "react";
import { LangProvider } from "@/lib/i18n";

/* Wrapper client supaya layout server bisa menyediakan konteks bahasa */
export function Providers({ children }: { children: ReactNode }) {
  return <LangProvider>{children}</LangProvider>;
}
