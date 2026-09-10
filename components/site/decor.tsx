"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useScroll } from "framer-motion";
import { location } from "@/lib/data";

/* ===== Custom cursor: titik + ring yang ngikutin mouse ===== */
export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 24, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 260, damping: 24, mass: 0.6 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      setHovering(!!t?.closest("a, button"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{ x, y }}
        animate={{ scale: hovering ? 0.5 : 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        className="cursor-ring"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: hovering ? 1.9 : 1, opacity: hovering ? 0.9 : 0.5 }}
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
      {location} — {time} WIB
    </span>
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
