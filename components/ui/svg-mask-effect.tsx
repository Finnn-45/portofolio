"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";

export default function SvgMaskEffect({
  revealText,
  size = 200,
}: {
  revealText: React.ReactNode;
  size?: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 40 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black">
      {/* teks dengan efek invert */}
      <div className="relative z-10 text-white mix-blend-difference">
        {revealText}
      </div>

      {/* lingkaran spotlight */}
      <motion.div
        className="absolute rounded-full bg-white pointer-events-none"
        style={{
          left: springX,
          top: springY,
          width: size,
          height: size,
          x: "-50%",
          y: "-50%",
        }}
      />
    </div>
  );
}
