"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useT } from "@/lib/i18n";

export function TrackNav() {
  const pathname = usePathname();
  const t = useT();

  const isHome = pathname === "/";
  const isDesign = pathname === "/design";
  const isWeb = pathname === "/web";

  return (
    <header className="fixed top-5 left-1/2 z-[80] -translate-x-1/2 w-[92%] max-w-[680px]">
      <nav className="flex items-center justify-between px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-black/80 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/50 text-[#f4f1ea]">
        {/* Logo / Monogram */}
        <Link
          href="/"
          className="flex items-center gap-2 group shrink-0"
        >
          <span className="w-6 h-6 rounded-full bg-[#ffe846] text-black font-bold font-mono text-xs flex items-center justify-center group-hover:scale-110 transition-transform">
            A
          </span>
          <span className="font-mono text-[11px] font-bold tracking-widest uppercase text-white/90 hidden sm:inline">
            ARFIN
          </span>
        </Link>

        {/* Navigation Items */}
        <div className="flex items-center gap-1 sm:gap-2 font-mono text-[10px] md:text-[11px] uppercase tracking-wider">
          <Link
            href="/"
            className={`px-3 py-1.5 rounded-full transition-all ${
              isHome
                ? "bg-white/15 text-white font-semibold"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            {t({ id: "Beranda", en: "Home" })}
          </Link>

          {/* Special Porto Desain Pill */}
          <Link
            href={isHome ? "#porto-desain" : "/design"}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ffe846]/10 border border-[#ffe846]/30 text-[#ffe846] hover:bg-[#ffe846] hover:text-black font-semibold transition-all shadow-sm"
          >
            <span>✦</span>
            <span>{t({ id: "Porto Desain", en: "Design Works" })}</span>
          </Link>

          <Link
            href="/web"
            className={`px-3 py-1.5 rounded-full transition-all ${
              isWeb
                ? "bg-white/15 text-white font-semibold"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            Web & IoT
          </Link>

          <Link
            href="/design"
            className={`px-3 py-1.5 rounded-full transition-all hidden md:inline-block ${
              isDesign
                ? "bg-white/15 text-white font-semibold"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            Studio
          </Link>
        </div>

        {/* CV Link */}
        <Link
          href="/portfolio"
          className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-white/70 hover:text-[#ffe846] px-2.5 py-1 rounded transition-colors hidden sm:inline"
        >
          CV ↗
        </Link>
      </nav>
    </header>
  );
}
