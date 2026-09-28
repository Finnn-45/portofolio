"use client";

import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";

const toolsData = [
  { name: "Figma", category: "Design & UI/UX", level: "Primary" },
  { name: "Adobe Illustrator", category: "Vector & Branding", level: "Primary" },
  { name: "Photoshop", category: "Image Editing", level: "Proficient" },
  { name: "Next.js & React", category: "Web Frontend", level: "Primary" },
  { name: "TypeScript", category: "Programming", level: "Proficient" },
  { name: "Tailwind CSS", category: "Design System / Styling", level: "Primary" },
  { name: "Laravel & PHP", category: "Full-Stack Web", level: "Proficient" },
  { name: "C++ & Arduino", category: "IoT Embedded", level: "Proficient" },
  { name: "ESP32", category: "Hardware & Sensors", level: "Proficient" },
  { name: "Canva Pro", category: "Fast Social Assets", level: "Proficient" },
  { name: "Git & GitHub", category: "Version Control", level: "Daily" },
  { name: "Procreate", category: "Digital Sketching", level: "Creative" },
];

export function Tools() {
  const t = useT();

  return (
    <section
      id="tools"
      className="relative w-full bg-[#0a0b10] text-[#f4f1ea] px-6 py-20 md:px-12 md:py-24 lg:px-16 border-t border-white/10"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="grid gap-6 md:grid-cols-12 md:items-end md:gap-12">
          <div className="md:col-span-7">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#ffe846] mb-2 block">
              TOOLKIT & ENVIRONMENT
            </span>
            <h2 className="font-editorial text-[clamp(28px,3.8vw,52px)] leading-[1.05] tracking-[-0.01em] text-white">
              {t(C.tools.titleLines[0])}{" "}
              <span className="italic text-[#ffe846]">{t(C.tools.titleLines[1])}</span>
            </h2>
          </div>
          <p className="text-sm md:text-base leading-relaxed text-white/70 md:col-span-5">
            {t(C.tools.lede)}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {toolsData.map((tool) => (
            <div
              key={tool.name}
              className="p-4 rounded-xl bg-[#12131b] border border-white/10 hover:border-[#ffe846]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#ffe846]">
                  {tool.category}
                </span>
                <h4 className="mt-1 font-mono text-sm font-bold text-white">
                  {tool.name}
                </h4>
              </div>
              <span className="mt-3 font-mono text-[9px] text-white/40 uppercase tracking-widest pt-2 border-t border-white/5">
                ● {tool.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
