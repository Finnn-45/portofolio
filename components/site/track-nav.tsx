"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";

/* Pill navigasi antar track: / (semua), /web, /design */
export function TrackNav() {
  const pathname = usePathname();
  const t = useT();

  const items = [
    { href: "/", label: t(C.track.all) },
    { href: "/web", label: t(C.track.web) },
    { href: "/design", label: t(C.track.design) },
  ];

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[80]">
      <nav className="flex items-center gap-0.5 rounded-full border border-white/15 bg-[#0d0d0d]/85 p-0.5 backdrop-blur shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)]">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-200 ${
                active
                  ? "bg-white text-[#0d0d0d]"
                  : "text-white/55 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
