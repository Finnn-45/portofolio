"use client";

import { useEffect, useState } from "react";
import { Loader } from "@/components/site/sections/loader";
import { Hero } from "@/components/site/sections/hero";
import { TickerStrip } from "@/components/site/sections/bits";
import { About } from "@/components/site/sections/about";
import { Services } from "@/components/site/sections/services";
import { DesignShowcase } from "@/components/site/sections/design-showcase";
import { Contact } from "@/components/site/sections/contact";
import { TrackNav } from "@/components/site/track-nav";

/* Track DESIGN — fokus karya desain & kolaborasi visual */
export default function DesignPage() {
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
      <DesignShowcase />
      <Contact />
    </main>
  );
}
