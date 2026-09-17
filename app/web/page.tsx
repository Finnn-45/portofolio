"use client";

import { useEffect, useState } from "react";
import { Loader } from "@/components/site/sections/loader";
import { Hero } from "@/components/site/sections/hero";
import { TickerStrip } from "@/components/site/sections/bits";
import { About } from "@/components/site/sections/about";
import { Services } from "@/components/site/sections/services";
import { Tools } from "@/components/site/sections/tools";
import { Works } from "@/components/site/sections/works";
import { Contact } from "@/components/site/sections/contact";
import { TrackNav } from "@/components/site/track-nav";

/* Track WEB — fokus karya web & open source */
export default function WebPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full bg-white">
      <Loader isLoading={loading} />
      <TrackNav />
      <Hero />
      <TickerStrip />
      <About />
      <Services />
      <Tools />
      <Works />
      <Contact />
    </main>
  );
}
