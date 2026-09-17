"use client";

import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
const tools = [
  { name: "HTML", icon: "◈" },
  { name: "CSS", icon: "◑" },
  { name: "JavaScript", icon: "✦" },
  { name: "React.js", icon: "⚛" },
  { name: "Next.js", icon: "▲" },
  { name: "Laravel", icon: "⬢" },
  { name: "C++", icon: "✚" },
  { name: "Arduino", icon: "⏣" },
  { name: "ESP32", icon: "⌬" },
  { name: "Figma", icon: "✏" },
  { name: "Illustrator", icon: "✒" },
  { name: "Canva", icon: "◧" },
];
import { motion } from "framer-motion";

function ToolChip({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="group flex items-center gap-3 shrink-0 px-6 py-3 rounded-full border border-neutral-200 bg-white hover:border-[#831514]/40 transition-colors duration-300">
      <span className="text-[#831514] text-base leading-none">{icon}</span>
      <span className="font-mono text-xs md:text-sm font-semibold uppercase tracking-widest text-[#1a1a1a] whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export function Tools() {
  const t = useT();
  const firstRow = tools.slice(0, 6);
  const secondRow = tools.slice(6);

  return (
    <section
      id="tools"
      className="relative w-full bg-white px-8 md:px-16 lg:px-24 py-14 md:py-16 flex flex-col overflow-hidden border-t border-neutral-100"
    >
      <div className="w-full flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a] leading-[0.95] tracking-tight"
        >
          {t(C.tools.titleLines[0])} {t(C.tools.titleLines[1])}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm md:text-base text-gray-600 leading-relaxed max-w-md shrink-0"
        >
          {t(C.tools.lede)}
        </motion.p>
      </div>

      <div className="w-full flex flex-col gap-4">
        {[firstRow, secondRow].map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 + rowIndex * 0.15 }}
            className="group w-full flex overflow-hidden"
          >
            <div
              className={`flex gap-4 pr-4 group-hover:[animation-play-state:paused] ${
                rowIndex % 2 === 0 ? "animate-marquee-left" : "animate-marquee-right"
              }`}
            >
              {[...row, ...row, ...row, ...row].map((t, i) => (
                <ToolChip key={`${t.name}-${i}`} name={t.name} icon={t.icon} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
