"use client";

import { TrackNav } from "@/components/site/track-nav";
import { DesignCover } from "@/components/site/sections/design-cover";
import { TickerStrip } from "@/components/site/sections/bits";
import { DesignShowcase } from "@/components/site/sections/design-showcase";
import { DesignGallery } from "@/components/site/sections/design-gallery";
import { DesignAbout } from "@/components/site/sections/design-about";
import { DesignProcess } from "@/components/site/sections/design-process";
import { DesignContact } from "@/components/site/sections/design-contact";

/* ============================================================
   Track DESAIN — edisi kanvas gelap "Portofolio 2025".
   Tanpa loader: cuma cover, pita kuning, lalu seksi konten.
   Tema gelap dibungkus class "theme-design" (lihat app/globals.css)
   supaya track terang "/" dan "/web" tetap utuh.
============================================================ */
export default function DesignPage() {
  return (
    <main className="theme-design w-full bg-mosaic-black">
      <TrackNav />
      <DesignCover />
      <TickerStrip />
      <DesignShowcase />
      <DesignGallery />
      <DesignAbout />
      <DesignProcess />
      <DesignContact />
    </main>
  );
}
