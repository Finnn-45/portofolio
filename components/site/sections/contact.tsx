"use client";

import { profile, socials, location } from "@/lib/data";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { motion } from "framer-motion";
import { SectionLabel, ArrowUpRight } from "./bits";

export function Contact() {
  const t = useT();
  const links = [
    { label: t(C.contact.links[0]), href: socials.github, external: true },
    { label: t(C.contact.links[1]), href: `mailto:${socials.email}`, external: false },
    { label: t(C.contact.links[2]), href: socials.linkedin, external: true },
    { label: t(C.contact.links[4]), href: "/cv.pdf", external: true },
  ];

  return (
    <section id="contact" className="relative w-full bg-white px-8 md:px-16 lg:px-24 py-16 md:py-24">
      <div className="w-full flex flex-col gap-4 mb-12 md:mb-16">
        <SectionLabel />
      </div>

      <div className="w-full mb-10 md:mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] text-[#1a1a1a] uppercase mb-6"
        >
          {t(C.contact.titleLines[0])}{" "}
          {t(C.contact.titleLines[1])}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl"
        >
          {t(C.contact.lede)}
        </motion.p>
      </div>

      <div className="w-full flex flex-col">
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="group flex items-center justify-between py-5 md:py-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] uppercase tracking-tight transition-all duration-300 hover:text-[#831514] hover:pl-2 border-b-2 border-[#1a1a1a]"
          >
            {link.label}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5">
              <ArrowUpRight />
            </span>
          </motion.a>
        ))}
      </div>

      {/* Strip info — isi bagian bawah biar nggak kosong */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="w-full mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
      >
        <div className="p-5 rounded-2xl border border-neutral-200 bg-[#fafafa]">
          <p className="text-xs text-neutral-500 mb-1">{t(C.about.emailLabel)}</p>
          <a
            href={`mailto:${socials.email}`}
            className="text-sm font-semibold text-[#1a1a1a] hover:text-[#831514] transition-colors break-all"
          >
            {socials.email}
          </a>
        </div>
        <div className="p-5 rounded-2xl border border-neutral-200 bg-[#fafafa]">
          <p className="text-xs text-neutral-500 mb-1">{t(C.about.locationLabel)}</p>
          <span className="text-sm font-semibold text-[#1a1a1a]">{t(location)}</span>
        </div>
        <div className="p-5 rounded-2xl border border-neutral-200 bg-[#fafafa]">
          <p className="text-xs text-neutral-500 mb-1">Instagram</p>
          <a
            href={socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#1a1a1a] hover:text-[#831514] transition-colors"
          >
            @zakriii___
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full pt-8 mt-12 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs md:text-sm font-medium tracking-wider uppercase text-neutral-500"
      >
        <span>© 2026 {profile.name.toUpperCase()}</span>
        <span>{t(C.contact.footerRight)}</span>
      </motion.div>
    </section>
  );
}
