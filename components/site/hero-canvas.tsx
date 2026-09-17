"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ============================================================
   HERO BG — minimal elegan ala desainer:
   partikel putih super tipis + grid samar.
   Tanpa blob merah / kawat norak.
============================================================ */

/** Floating particle field — tipis, pelan */
function Particles() {
  const count = 130;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.015;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.022}
        opacity={0.28}
        transparent
        sizeAttenuation
      />
    </points>
  );
}

/** Grid lantai samar — kasih depth tanpa norak */
function FaintGrid() {
  return (
    <gridHelper
      args={[26, 26, 0x2a2a2a, 0x161616]}
      position={[0, -2.6, 0]}
    />
  );
}

/** Mouse-reactive camera drift */
function CameraRig() {
  const { camera, gl } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useMemo(() => {
    const el = gl.domElement;
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [gl]);

  useFrame(() => {
    camera.position.x += (mouse.current.x * 1.0 - camera.position.x) * 0.035;
    camera.position.y += (mouse.current.y * 0.5 - camera.position.y) * 0.035;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ============================================================
   EXPORTED CANVAS
============================================================ */

export function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 52 }}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      gl={{ antialias: true, alpha: false }}
      dpr={[1, 1.5]}
    >
      <color attach="background" args={["#080808"]} />

      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 4]} intensity={0.6} color="#ffffff" />

      <CameraRig />
      <FaintGrid />
      <Particles />
    </Canvas>
  );
}
