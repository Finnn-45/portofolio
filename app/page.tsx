"use client";

import { TrackNav } from "@/components/site/track-nav";
import { Hero } from "@/components/site/sections/hero";
import { TickerStrip } from "@/components/site/sections/bits";
import { DesignPortfolioSection } from "@/components/site/sections/design-portfolio-section";
import { Works } from "@/components/site/sections/works";
import { About } from "@/components/site/sections/about";
import { Services } from "@/components/site/sections/services";
import { Tools } from "@/components/site/sections/tools";
import { Contact } from "@/components/site/sections/contact";

/* ============================================================
   PORTFOLIO EDITORIAL STUDIO — Arfin Desca Alzachri.
   Tema desainer visual & kreatif, dengan bagian khusus
   Portofolio Desain Grafis (#porto-desain), studi kasus interaktif,
   dan arsip engineering Web & IoT.
   ============================================================ */
export default function Page() {
  return (
    <main className="w-full bg-[#0a0b10] text-[#f4f1ea] min-h-screen selection:bg-[#ffe846] selection:text-black overflow-x-hidden">
      <TrackNav />
      <Hero />
      <TickerStrip />
      <DesignPortfolioSection />
      <Works />
      <About />
      <Services />
      <Tools />
      <Contact />
    </main>
  );
}
