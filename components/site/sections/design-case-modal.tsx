"use client";

import React, { useEffect } from "react";
import type { DesignWork } from "@/lib/data";
import { useT } from "@/lib/i18n";
import { DesignArtboardPreview } from "./design-artboard-preview";

interface ModalProps {
  work: DesignWork | null;
  onClose: () => void;
}

export function DesignCaseModal({ work, onClose }: ModalProps) {
  const t = useT();

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (work) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [work, onClose]);

  if (!work) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-10 animate-fade-in"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0f1016] border border-white/15 p-6 md:p-10 text-[#f4f1ea] shadow-2xl z-10 custom-scrollbar">
        {/* Top Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] tracking-[0.25em] text-[#ffe846] uppercase font-bold">
              [ ARTBOARD /{work.id} ]
            </span>
            <span className="text-white/30">·</span>
            <span className="font-mono text-[11px] text-white/60 uppercase">
              {t(work.context)}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#ffe846] hover:text-black flex items-center justify-center font-mono text-sm transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Title & Badge */}
        <div className="mb-6">
          <span className="inline-block font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded bg-white/10 text-white/80 mb-2">
            {t(work.categoryLabel)}
          </span>
          <h2 className="font-editorial text-3xl md:text-5xl font-bold leading-tight tracking-tight text-white">
            {t(work.title)}
          </h2>
          <p className="mt-2 font-mono text-xs text-white/50">
            {t(work.year)} · {work.dimensions}
          </p>
        </div>

        {/* Big Artboard Preview */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-2xl border border-white/10">
          <DesignArtboardPreview work={work} interactive={true} />
        </div>

        {/* Case Study Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/10 pt-6">
          {/* Left Column: Problem & Solution */}
          <div className="md:col-span-8 space-y-6">
            <div>
              <h3 className="font-mono text-[11px] tracking-[0.2em] text-[#ffe846] uppercase mb-2">
                01 // LATAR BELAKANG & TANTANGAN
              </h3>
              <p className="text-sm md:text-[15px] leading-relaxed text-white/80">
                {t(work.problem)}
              </p>
            </div>

            <div>
              <h3 className="font-mono text-[11px] tracking-[0.2em] text-[#ffe846] uppercase mb-2">
                02 // PENDEKATAN & SOLUSI DESAIN
              </h3>
              <p className="text-sm md:text-[15px] leading-relaxed text-white/80">
                {t(work.solution)}
              </p>
            </div>

            <div>
              <h3 className="font-mono text-[11px] tracking-[0.2em] text-white/50 uppercase mb-2">
                03 // DELIVERABLES & OUTPUT
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                {work.deliverables.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-2.5 rounded bg-white/[0.04] border border-white/5 text-xs text-white/90 font-mono"
                  >
                    <span className="text-[#ffe846]">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Specs, Palette, Tools */}
          <div className="md:col-span-4 space-y-6 border-t md:border-t-0 md:border-l border-white/10 md:pl-6">
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-wider text-white/40 mb-2">
                SOFTWARE & TOOLS
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {work.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-full bg-white/10 text-white text-[11px] font-mono"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-wider text-white/40 mb-2">
                COLOR PALETTE
              </h4>
              <div className="space-y-2">
                {work.palette.map((hex, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-1.5 rounded bg-white/[0.04] border border-white/5"
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-5 h-5 rounded-full border border-white/20 shadow-sm"
                        style={{ backgroundColor: hex }}
                      />
                      <span className="font-mono text-xs text-white/80 uppercase">{hex}</span>
                    </div>
                    <span className="font-mono text-[9px] text-white/30">COL #{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#ffe846]/10 border border-[#ffe846]/20">
              <span className="block font-mono text-[10px] text-[#ffe846] font-bold uppercase tracking-wider mb-1">
                KOLABORASI DESAIN
              </span>
              <p className="text-xs text-white/70 leading-relaxed">
                Tertarik menggunakan konsep visual atau jasa desain serupa? Hubungi lewat email atau DM Instagram.
              </p>
              <a
                href="mailto:arfinsmktibazma@gmail.com"
                className="mt-3 inline-block font-mono text-[11px] text-[#ffe846] underline underline-offset-4 hover:text-white"
              >
                Kirim Brief Desain →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
