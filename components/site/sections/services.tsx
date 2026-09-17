"use client";

import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { motion } from "framer-motion";
import { SectionLabel } from "./bits";

export function Services() {
  const t = useT();
  return (
    <section
      id="services"
      className="relative w-full bg-white px-8 md:px-16 lg:px-24 py-16 md:py-20 flex flex-col"
    >
      <div className="w-full flex flex-col gap-4 mb-8 md:mb-10">
        <SectionLabel />
      </div>

      <div className="w-full flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#1a1a1a] leading-[0.95] tracking-tight"
        >
          {t(C.services.titleLines[0])}
          <br />
          {t(C.services.titleLines[1])}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-gray-700 leading-relaxed max-w-md shrink-0"
        >
          {t(C.services.lede)}
        </motion.p>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {C.services.cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="group flex flex-col p-6 rounded-2xl border border-neutral-200 bg-[#fafafa] transition-all duration-300 hover:-translate-y-1 hover:border-[#1a1a1a] hover:shadow-[0_16px_40px_-24px_rgba(0,0,0,0.3)]"
          >
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#831514] mb-4">
              0{i + 1}
            </span>
            <h3 className="text-lg md:text-xl font-extrabold tracking-tight text-[#1a1a1a] mb-2">
              {t(card.title)}
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">{t(card.desc)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
