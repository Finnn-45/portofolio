"use client";

import { useEffect, useState, type MouseEvent as ReactMouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { MOSAIC_COLORS, tone } from "@/lib/mosaic";
import { profile } from "@/lib/data";

/* ============================================================
   KARTU FOTO 3D — CSS 3D (bukan WebGL), jadi ringan.
   - desktop : tilt ngikutin kursor + kilau halus
   - sentuh  : kartu mengapung sendiri pelan
   - foto gagal dimuat : jatuh ke monogram, kartu tetap tampil
   Ganti foto: timpa public/foto-saya.png, atau kirim prop `src`.
============================================================ */

export const PHOTO_SRC = "/foto-saya.png";

export function Photo3DCard({
  src = PHOTO_SRC,
  alt = profile.name,
  caption = "2026 — portfolio",
  className = "",
}: {
  src?: string;
  alt?: string;
  caption?: string;
  className?: string;
}) {
  const [fine, setFine] = useState(false);
  const [ok, setOk] = useState(true);

  /* tilt */
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 130, damping: 18, mass: 0.5 });
  const rotateY = useSpring(ry, { stiffness: 130, damping: 18, mass: 0.5 });

  /* kilau yang ngikutin kursor */
  const gx = useMotionValue(50);
  const gy = useMotionValue(26);
  const shineX = useSpring(gx, { stiffness: 100, damping: 22 });
  const shineY = useSpring(gy, { stiffness: 100, damping: 22 });
  const shine = useMotionTemplate`radial-gradient(120% 85% at ${shineX}% ${shineY}%, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0) 58%)`;

  useEffect(() => {
    setFine(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  const handleMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * 16);
    rx.set(-(py - 0.5) * 16);
    gx.set(px * 100);
    gy.set(py * 100);
  };

  const reset = () => {
    rx.set(0);
    ry.set(0);
    gx.set(50);
    gy.set(26);
  };

  return (
    <div className={`relative ${className}`} style={{ perspective: 1100 }}>
      {/* bayangan di bawah kartu */}
      <div
        aria-hidden
        className="absolute inset-x-4 bottom-0 h-8 rounded-[50%] blur-xl"
        style={{ background: "rgba(20,20,20,0.26)" }}
      />

      <motion.div
        className="relative"
        style={{ transformStyle: "preserve-3d" }}
        animate={fine ? undefined : { y: [0, -10, 0], rotate: [-1.4, 1.4, -1.4] }}
        transition={
          fine ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <motion.div
          className="relative"
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={fine ? handleMove : undefined}
          onMouseLeave={fine ? reset : undefined}
        >
          {/* pelat warna di belakang — nuansa mozaik */}
          <div
            aria-hidden
            className="absolute inset-0 rounded-[26px]"
            style={{
              background: MOSAIC_COLORS.cobalt,
              transform: "translate3d(14px, 16px, -70px) rotate(4deg)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 rounded-[26px]"
            style={{
              background: MOSAIC_COLORS.amber,
              transform: "translate3d(-12px, 22px, -110px) rotate(-5deg)",
            }}
          />

          {/* kartu utama */}
          <div className="relative rounded-[26px] border border-black/10 bg-white p-3 shadow-[0_30px_60px_-32px_rgba(20,20,20,0.6)]">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[18px] bg-[#141414]">
              {ok ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={src}
                  alt={alt}
                  draggable={false}
                  onError={() => setOk(false)}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <span className="text-4xl font-black tracking-tighter text-white">AD</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/50">
                    photo
                  </span>
                </div>
              )}

              {/* gelap di bawah biar caption kebaca */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(20,20,20,0.62), rgba(20,20,20,0) 46%)",
                }}
              />
              {/* kilau ngikutin kursor */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 mix-blend-soft-light"
                style={{ background: shine }}
              />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3.5">
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/80">
                  {caption}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/55">
                  Bogor · ID
                </span>
              </div>
            </div>

            {/* strip mozaik di dalam frame */}
            <div className="mt-3 flex items-center gap-1.5">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <span
                  key={i}
                  className="h-2 flex-1 rounded-full"
                  style={{ background: MOSAIC_COLORS[tone(i)] }}
                />
              ))}
            </div>
          </div>

          {/* kluster mozaik melayang */}
          <div
            aria-hidden
            className="absolute -right-2 -top-3 grid grid-cols-2 gap-1.5 rounded-xl border border-black/5 bg-white p-2 shadow-[0_16px_30px_-22px_rgba(20,20,20,0.6)]"
            style={{ transform: "translate3d(0,0,70px)" }}
          >
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className="h-3.5 w-3.5 rounded-[4px]"
                style={{ background: MOSAIC_COLORS[tone(i + 2)] }}
              />
            ))}
          </div>

          {/* badge tahun */}
          <div
            className="absolute -bottom-3 -left-2 flex items-center gap-2 rounded-full bg-[#141414] px-3 py-1.5 shadow-[0_16px_30px_-20px_rgba(20,20,20,0.8)]"
            style={{ transform: "translate3d(0,0,50px)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-mosaic-amber" />
            <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/80">
              2026
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
