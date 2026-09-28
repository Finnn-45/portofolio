"use client";

import { useEffect, useState } from "react";
import { Loader } from "@/components/site/sections/loader";
import { DesignCover } from "@/components/site/sections/design-cover";
import { TickerStrip } from "@/components/site/sections/bits";
import { DesignShowcase } from "@/components/site/sections/design-showcase";
import { DesignGallery } from "@/components/site/sections/design-gallery";
import { DesignAbout } from "@/components/site/sections/design-about";
import { DesignProcess } from "@/components/site/sections/design-process";
import { DesignContact } from "@/components/site/sections/design-contact";
import { TrackNav } from "@/components/site/track-nav";

/* ============================================================
   Track DESAIN — edisi kanvas gelap gaya "Portofolio 2025":
   hitam pekat, aksen kuning lemon, serif kontras tinggi untuk
   judul display, dan pita kuning berjalan sebagai pembatas bagian.
   Semua tema gelap dibungkus class "theme-design" (lihat
   app/globals.css) supaya track terang "/" dan "/web" tetap utuh.
============================================================ */
export default function DesignPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="theme-design w-full bg-mosaic-black">
      <Loader isLoading={loading} variant="lemon" />
      <TrackNav />
      <DesignCover />
      <TickerStrip variant="lemon" />
      <DesignShowcase />
      <DesignGallery />
      <DesignAbout />
      <DesignProcess />
      <DesignContact />
    </main>
  );
}
