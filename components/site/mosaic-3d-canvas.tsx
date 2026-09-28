"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { MOSAIC_COLORS } from "@/lib/mosaic";

/* ============================================================
   MOSAIC 3D CANVAS — Komponen 3D interaktif berbasis Three.js:
   Menghadirkan kubus-kubus mozaik warna palet resmi, anchor points
   khas Adobe Illustrator, garis kurva bezier vektor, dan pen tool apex.
   Berespons mulus terhadap pergerakan mouse / sentuhan kursor.
============================================================ */

const TILE_DATA = [
  { pos: [-1.4, 0.7, 0.2] as [number, number, number], color: MOSAIC_COLORS.crimson, size: [0.72, 0.72, 0.22] as [number, number, number], speed: 1.1, rot: 0.05 },
  { pos: [1.3, 0.8, -0.3] as [number, number, number], color: MOSAIC_COLORS.cobalt, size: [0.65, 0.65, 0.2] as [number, number, number], speed: 0.9, rot: -0.04 },
  { pos: [-0.9, -0.9, -0.2] as [number, number, number], color: MOSAIC_COLORS.amber, size: [0.58, 0.58, 0.18] as [number, number, number], speed: 1.3, rot: 0.06 },
  { pos: [1.1, -0.8, 0.4] as [number, number, number], color: MOSAIC_COLORS.teal, size: [0.68, 0.68, 0.22] as [number, number, number], speed: 0.8, rot: -0.05 },
  { pos: [-1.8, -0.1, -0.6] as [number, number, number], color: MOSAIC_COLORS.rose, size: [0.5, 0.5, 0.16] as [number, number, number], speed: 1.2, rot: 0.07 },
  { pos: [1.9, 0.1, -0.5] as [number, number, number], color: MOSAIC_COLORS.lilac, size: [0.52, 0.52, 0.16] as [number, number, number], speed: 1.0, rot: -0.03 },
  { pos: [0.1, 1.4, -0.4] as [number, number, number], color: MOSAIC_COLORS.sky, size: [0.55, 0.55, 0.18] as [number, number, number], speed: 1.15, rot: 0.04 },
];

/** Kubus-kubus mozaik melayang */
function FloatingMosaicTiles({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    
    // Parallax mouse follow
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouse.current.x * 0.45,
      delta * 2.5
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -mouse.current.y * 0.35,
      delta * 2.5
    );

    // Animasi per kubus
    groupRef.current.children.forEach((child, i) => {
      const data = TILE_DATA[i % TILE_DATA.length];
      child.position.y = data.pos[1] + Math.sin(t * data.speed + i) * 0.08;
      child.rotation.z += delta * data.rot;
    });
  });

  return (
    <group ref={groupRef}>
      {TILE_DATA.map((tile, i) => (
        <mesh key={i} position={tile.pos}>
          <boxGeometry args={tile.size} />
          <meshStandardMaterial
            color={tile.color}
            roughness={0.25}
            metalness={0.12}
            envMapIntensity={0.8}
          />
          {/* Garis wireframe aksen Illustrator */}
          <lineSegments>
            <edgesGeometry args={[new THREE.BoxGeometry(...tile.size)]} />
            <lineBasicMaterial color="#ffffff" transparent opacity={0.35} />
          </lineSegments>
        </mesh>
      ))}
    </group>
  );
}

/** Objek 3D Vektor Illustrator: Pen Tool Apex & Anchor Point Nodes */
function IllustratorPenToolVector({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const centerRef = useRef<THREE.Group>(null);

  // Titik-titik anchor bezier
  const curvePoints = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.8, -0.4, 0),
      new THREE.Vector3(-0.9, 0.8, 0.4),
      new THREE.Vector3(0, 0, 0.5),
      new THREE.Vector3(0.9, -0.7, -0.2),
      new THREE.Vector3(1.8, 0.5, 0.1),
    ]);
    return curve.getPoints(50);
  }, []);

  const lineGeometry = useMemo(() => {
    const geom = new THREE.BufferGeometry().setFromPoints(curvePoints);
    return geom;
  }, [curvePoints]);

  useFrame((state, delta) => {
    if (!centerRef.current) return;
    const t = state.clock.elapsedTime;
    centerRef.current.rotation.y += delta * 0.15;
    centerRef.current.rotation.x = Math.sin(t * 0.8) * 0.08;
    centerRef.current.position.y = Math.sin(t * 1.2) * 0.05;
  });

  return (
    <group ref={centerRef}>
      {/* Pen tool 3D diamond apex */}
      <mesh position={[0, 0, 0.2]}>
        <octahedronGeometry args={[0.48, 0]} />
        <meshStandardMaterial
          color="#141414"
          roughness={0.15}
          metalness={0.85}
        />
        <lineSegments>
          <edgesGeometry args={[new THREE.OctahedronGeometry(0.48, 0)]} />
          <lineBasicMaterial color="#e8a33d" />
        </lineSegments>
      </mesh>

      {/* Cincin emas pen nib */}
      <mesh position={[0, -0.38, 0.2]}>
        <cylinderGeometry args={[0.18, 0.18, 0.06, 24]} />
        <meshStandardMaterial color="#e8a33d" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Garis kurva bezier vektor */}
      <primitive object={new THREE.Line(lineGeometry, new THREE.LineBasicMaterial({ color: "#1f3be0", linewidth: 2, transparent: true, opacity: 0.75 }))} />

      {/* Anchor point kotak khas Illustrator di simpul bezier */}
      {[
        [-1.8, -0.4, 0],
        [-0.9, 0.8, 0.4],
        [0, 0, 0.5],
        [0.9, -0.7, -0.2],
        [1.8, 0.5, 0.1],
      ].map(([x, y, z], idx) => (
        <mesh key={idx} position={[x, y, z]}>
          <boxGeometry args={[0.11, 0.11, 0.11]} />
          <meshStandardMaterial color="#ffffff" roughness={0.1} />
          <lineSegments>
            <edgesGeometry args={[new THREE.BoxGeometry(0.11, 0.11, 0.11)]} />
            <lineBasicMaterial color="#1f3be0" />
          </lineSegments>
        </mesh>
      ))}
    </group>
  );
}

/** Pengendali kamera & listener mouse */
function SceneController({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const { gl } = useThree();

  useEffect(() => {
    const el = gl.domElement;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouse.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.current.y = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    const onLeave = () => {
      mouse.current.x = 0;
      mouse.current.y = 0;
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [gl, mouse]);

  return null;
}

export function Mosaic3DCanvas({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`flex items-center justify-center rounded-3xl border border-black/10 bg-white/60 p-8 ${className}`}>
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-black/20 border-t-mosaic-crimson" />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-3xl border border-black/10 bg-[#fbf8f2]/90 shadow-[0_20px_60px_-25px_rgba(20,20,20,0.15)] ${className}`}>
      {/* Label status teknis Illustrator di kanvas */}
      <div className="pointer-events-none absolute left-4 top-4 z-10 flex items-center gap-2">
        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500">
          [3D ARTBOARD: VECTOR + MOSAIC]
        </span>
      </div>

      <div className="pointer-events-none absolute right-4 top-4 z-10 flex items-center gap-2">
        <span className="rounded border border-black/10 bg-white/80 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.16em] text-neutral-600 backdrop-blur">
          CMYK · 300 DPI
        </span>
      </div>

      <div className="pointer-events-none absolute bottom-4 left-4 z-10">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-400">
          Move cursor to orbit · Pen Tool Precision
        </span>
      </div>

      {/* Sudut artboard crosshairs */}
      <span className="pointer-events-none absolute left-2 top-2 font-mono text-xs text-neutral-300">+</span>
      <span className="pointer-events-none absolute right-2 top-2 font-mono text-xs text-neutral-300">+</span>
      <span className="pointer-events-none absolute bottom-2 left-2 font-mono text-xs text-neutral-300">+</span>
      <span className="pointer-events-none absolute bottom-2 right-2 font-mono text-xs text-neutral-300">+</span>

      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        className="h-full w-full cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={1.1} />
        <directionalLight position={[4, 5, 3]} intensity={1.8} />
        <directionalLight position={[-4, -3, -2]} intensity={0.6} color="#2f9cf0" />
        <pointLight position={[0, 0, 2]} intensity={0.9} color="#ffffff" />

        <SceneController mouse={mouse} />
        <FloatingMosaicTiles mouse={mouse} />
        <IllustratorPenToolVector mouse={mouse} />
      </Canvas>
    </div>
  );
}
