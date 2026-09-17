"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* Gelombang titik halus — depth elegan, bukan glow norak */
function DotsWave() {
  const COLS = 72;
  const ROWS = 30;
  const GAP = 0.32;
  const ref = useRef<THREE.Points>(null);

  const { base, pos } = useMemo(() => {
    const total = COLS * ROWS;
    const base = new Float32Array(total * 2);
    const pos = new Float32Array(total * 3);
    let k = 0;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const x = (c - COLS / 2) * GAP;
        const z = (r - ROWS / 2) * GAP;
        base[k * 2] = x;
        base[k * 2 + 1] = z;
        pos[k * 3] = x;
        pos[k * 3 + 1] = 0;
        pos[k * 3 + 2] = z;
        k++;
      }
    }
    return { base, pos };
  }, []);

  useFrame((state) => {
    const pts = ref.current;
    if (!pts) return;
    const t = state.clock.elapsedTime * 0.55;
    const attr = pts.geometry.getAttribute("position") as THREE.BufferAttribute;
    const arr = attr.array as Float32Array;
    const total = COLS * ROWS;
    for (let k = 0; k < total; k++) {
      const x = base[k * 2];
      const z = base[k * 2 + 1];
      arr[k * 3 + 1] =
        Math.sin(x * 0.55 + t) * 0.28 + Math.cos(z * 0.6 + t * 0.8) * 0.22;
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={ref} position={[0, -1.7, -1]} rotation={[-0.18, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[pos, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.028} transparent opacity={0.32} sizeAttenuation depthWrite={false} />
    </points>
  );
}

/* 2 ring tipis miring — aksen geometris kalem */
function Rings() {
  const g = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!g.current) return;
    g.current.rotation.z += delta * 0.03;
    g.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.08;
  });
  return (
    <group ref={g} position={[3.4, 1.1, -3]} rotation={[0.4, 0.2, 0]}>
      <mesh>
        <ringGeometry args={[1.6, 1.615, 96]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.07} side={THREE.DoubleSide} />
      </mesh>
      <mesh>
        <ringGeometry args={[2.2, 2.21, 96]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.045} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export function CoverCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0.4, 7], fov: 52 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.7} />
      <DotsWave />
      <Rings />
    </Canvas>
  );
}
