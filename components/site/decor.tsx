"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useScroll } from "framer-motion";
import { location } from "@/lib/data";
import { useT } from "@/lib/i18n";

/* ===== Custom cursor: titik + ring yang ngikutin mouse =====
   Aktif hanya di perangkat berpointer presisi. Cursor bawaan baru
   disembunyikan setelah mouse pertama bergerak (class .cursor-custom di
   <html>), jadi tidak ada momen pointer hilang saat mouse diam.
   Warna dot/ring diatur di globals.css (putih + mix-blend difference). */
export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 24, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 260, damping: 24, mass: 0.6 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const root = document.documentElement;

    const move = (e: MouseEvent) => {
      if (!root.classList.contains("cursor-custom")) {
        root.classList.add("cursor-custom");
        setEnabled(true);
      }
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const t = e.target as HTMLElement | null;
      setHovering(!!t?.closest("a, button, [role='button']"));
    };
    /* relatedTarget null = pointer benar-benar keluar jendela */
    const hide = (e: MouseEvent) => {
      if (!e.relatedTarget) setVisible(false);
    };
    /* jendela kehilangan fokus (alt+tab dll) — jangan biarkan dot nyangkut */
    const blur = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseout", hide);
    window.addEventListener("blur", blur);
    document.addEventListener("mouseleave", blur);

    return () => {
      root.classList.remove("cursor-custom");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseout", hide);
      window.removeEventListener("blur", blur);
      document.removeEventListener("mouseleave", blur);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="cursor-dot"
        style={{ x, y }}
        animate={{ scale: hovering ? 0.5 : 1, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        aria-hidden
        className="cursor-ring"
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: hovering ? 1.9 : 1,
          opacity: visible ? (hovering ? 1 : 0.75) : 0,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}

/* ===== Progress bar di atas saat scroll ===== */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#831514] origin-left z-[70]"
      style={{ scaleX }}
    />
  );
}

/* ===== Jam real-time WIB ===== */
export function LocalTime() {
  const [time, setTime] = useState("");
  const t = useT();

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Asia/Jakarta",
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="hidden md:flex items-center gap-2 font-mono text-xs text-[#78716c]">
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
      </span>
      {t(location)} — {time} WIB
    </span>
  );
}

/* ===== Foto dengan tilt 3D ringan (CSS, nggak pakai WebGL) ===== */
export function TiltPhoto({ src, alt }: { src: string; alt: string }) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 140, damping: 18 });
  const rotateY = useSpring(ry, { stiffness: 140, damping: 18 });
  const [fine, setFine] = useState(false);

  useEffect(() => {
    setFine(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  return (
    <div
      className="absolute inset-0"
      style={{ perspective: 900 }}
      onMouseMove={
        fine
          ? (e) => {
              const r = e.currentTarget.getBoundingClientRect();
              ry.set(((e.clientX - r.left) / r.width - 0.5) * 12);
              rx.set(-((e.clientY - r.top) / r.height - 0.5) * 12);
            }
          : undefined
      }
      onMouseLeave={fine ? () => { rx.set(0); ry.set(0); } : undefined}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover object-top"
          draggable={false}
        />
      </motion.div>
    </div>
  );
}

/* ===== Status chip "open for collaboration" ===== */
export function StatusChip() {
  return (
    <span className="flex items-center gap-2 font-mono text-xs text-[#57534e]">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
      </span>
      open for collaboration
    </span>
  );
}
