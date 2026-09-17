"use client";

import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { motion } from "framer-motion";

export function Inside() {
  const t = useT();
  return (
    <section
      id="inside"
      className="relative w-full bg-white px-8 md:px-16 lg:px-24 py-14 md:py-16 flex flex-col border-t border-neutral-100"
    >
      <div className="w-full flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter leading-[0.95] text-[#1a1a1a] uppercase"
        >
          {t(C.inside.titleLines[0])} {t(C.inside.titleLines[1])}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm md:text-base text-gray-600 leading-relaxed max-w-md shrink-0"
        >
          {t(C.inside.lede)}
        </motion.p>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        {C.inside.cards.map((card, i) => (
          <motion.div
            key={card.num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
            className="group flex flex-col justify-between gap-6 p-6 rounded-2xl border-2 border-[#1a1a1a] bg-white transition-colors duration-300 hover:bg-[#fafafa]"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg md:text-xl font-extrabold uppercase tracking-tight text-[#1a1a1a] transition-colors duration-300 group-hover:text-[#831514]">
                {t(card.title)}
              </h3>
              <span className="font-mono text-xs text-neutral-400 font-medium shrink-0">{card.num}</span>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-md">{t(card.desc)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
