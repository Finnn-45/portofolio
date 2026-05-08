"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CanvasRevealEffectProps {
  animationSpeed?: number;
  colors?: [number, number, number][];
  containerClassName?: string;
  dotSize?: number;
  particleCount?: number;
}

export function CanvasRevealEffect({
  animationSpeed = 5,
  colors = [
    [59, 130, 246], // biru
    [147, 51, 234], // ungu
    [6, 182, 212],  // cyan
  ],
  containerClassName,
  dotSize = 2,
  particleCount = 300,
}: CanvasRevealEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<
    { x: number; y: number; color: string; radius: number; dx: number; dy: number }[]
  >([]);

  // init canvas & particles
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    // fungsi resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // generate particles
    particlesRef.current = Array.from({ length: particleCount }).map(() => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const colorArr = colors[Math.floor(Math.random() * colors.length)];
      const color = `rgba(${colorArr[0]}, ${colorArr[1]}, ${colorArr[2]}, 0.7)`;
      const radius = Math.random() * dotSize + 1;

      return {
        x,
        y,
        color,
        radius,
        dx: (Math.random() - 0.5) * animationSpeed,
        dy: (Math.random() - 0.5) * animationSpeed,
      };
    });

    // animasi
    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p) => {
        let { x, y, dx, dy, color, radius } = p;

        if (x + radius > canvas.width || x - radius < 0) p.dx = -p.dx;
        if (y + radius > canvas.height || y - radius < 0) p.dy = -p.dy;

        p.x += p.dx;
        p.y += p.dy;

        context.beginPath();
        context.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
        context.fillStyle = color;
        context.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [colors, animationSpeed, dotSize, particleCount]);

  return (
    <div className={cn("absolute inset-0", containerClassName)}>
      <canvas
        ref={canvasRef}
        width={1920}   // stabil di SSR → ga bikin hydration mismatch
        height={1080}  // stabil di SSR → update pas client mount
        className="h-full w-full"
      />
    </div>
  );
}
