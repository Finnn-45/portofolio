"use client";

import { Hero } from "@/components/site/sections/hero";
import { About } from "@/components/site/sections/about";
import { Services } from "@/components/site/sections/services";
import { Tools } from "@/components/site/sections/tools";
import { Works } from "@/components/site/sections/works";
import { Contact } from "@/components/site/sections/contact";
import { TrackNav } from "@/components/site/track-nav";

/* Track WEB — fokus karya web & open source. Sama sederhananya:
   tanpa loader, marquee, atau section dekoratif. */
export default function WebPage() {
  return (
    <main className="w-full bg-[#0a0b10] text-[#f4f1ea] min-h-screen selection:bg-[#ffe846] selection:text-black overflow-x-hidden">
      <TrackNav />
      <Hero />
      <About />
      <Services />
      <Tools />
      <Works />
      <Contact />
    </main>
  );
}
