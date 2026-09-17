"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ============================================================
   3D ID CARD — badge minimalis (ref: Arvox):
   tali hitam tebal + klip metal, depan foto + panel nama,
   belakang hitam + brand + barcode.
============================================================ */

/* Dimensi kartu (world units) — badge ramping */
const CARD_W = 1.02;
const CARD_H = 1.62;
const CARD_D = 0.022;

/* ===== Tali badge: lanyard premium, realistis dari dua sisi =====
   - Strap kain dijahit lipat (dua lapis kain + piping tepi)
   - Teks timbul di sisi depan, pola halus di sisi belakang
   - Strap menukik dari atas frame ke gesper metal (buckle)
   - Dari gesper keluar pita pendek ke ring metal + hook + pin kartu */
const STRAP_W = 0.2; // lebar kain lanyard (depan & belakang badge)
const STRAP_T = 0.035; // tebal kain (lipatan strap)
const STRAP_V_TOP = 2.9; // ujung strap keluar frame atas
const STRAP_V_BOT = 1.32; // ujung strap ketemu gesper
void STRAP_V_TOP;
void STRAP_V_BOT;
const METAL = { color: "#c9c9c9", metalness: 0.95, roughness: 0.24 } as const;

/* Tekstur strap kain marun: tenunan + list hitam + bordir "PORTFOLIO" timbul.
   mode depan → ada teks bordir. mode belakang → polos, cuma tenunan kain. */
function makeLanyardCanvas(mode: "front" | "back"): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 1024;
  const ctx = c.getContext("2d")!;

  // dasar kain merah marun (match brand #831514) + highlight tengah
  const g = ctx.createLinearGradient(0, 0, 256, 0);
  g.addColorStop(0, "#5e0f0f");
  g.addColorStop(0.2, "#7d1515");
  g.addColorStop(0.5, "#96201f");
  g.addColorStop(0.8, "#7d1515");
  g.addColorStop(1, "#5e0f0f");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 256, 1024);

  // serat tenunan horizontal halus (kain woven)
  ctx.save();
  ctx.globalAlpha = 0.1;
  ctx.fillStyle = "#000000";
  for (let y = 0; y < 1024; y += 4) ctx.fillRect(0, y, 256, 1);
  ctx.restore();
  ctx.save();
  ctx.globalAlpha = 0.07;
  ctx.fillStyle = "#ffffff";
  for (let y = 2; y < 1024; y += 4) ctx.fillRect(0, y, 256, 1);
  ctx.restore();

  // serat vertikal sangat halus
  ctx.save();
  ctx.globalAlpha = 0.06;
  ctx.fillStyle = "#000000";
  for (let x = 0; x < 256; x += 4) ctx.fillRect(x, 0, 1, 1024);
  ctx.restore();

  // list tepi hitam (binding khas lanyard)
  ctx.fillStyle = "#0c0c0d";
  ctx.fillRect(0, 0, 34, 1024);
  ctx.fillRect(222, 0, 34, 1024);
  // highlight list
  ctx.fillStyle = "rgba(255,255,255,0.08)";
  ctx.fillRect(30, 0, 4, 1024);
  ctx.fillRect(222, 0, 4, 1024);

  // bordir "PORTFOLIO ✦ 2026" berulang sepanjang strap (benang krem timbul).
  // sisi belakang dibiarkan polos biar realistis kayak lanyard asli.
  if (mode === "front") {
    ctx.save();
    ctx.translate(128, 0);
    ctx.rotate(Math.PI / 2);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    // bayangan bordir (efek timbul)
    ctx.font = "700 34px 'Segoe UI', Arial, sans-serif";
    ctx.fillStyle = "rgba(0,0,0,0.55)";
    for (let x = -512; x < 1150; x += 250) {
      ctx.fillText("PORTFOLIO  ✦  2026", x, 3);
    }
    // benang krem
    ctx.fillStyle = "rgba(244,241,234,0.92)";
    for (let x = -512; x < 1150; x += 250) {
      ctx.fillText("PORTFOLIO  ✦  2026", x, 0);
    }
    ctx.restore();
  } else {
    // jahitan tengah samar di sisi belakang (bekas lipatan kain)
    ctx.save();
    ctx.globalAlpha = 0.16;
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 3;
    ctx.setLineDash([14, 10]);
    ctx.beginPath();
    ctx.moveTo(128, 0);
    ctx.lineTo(128, 1024);
    ctx.stroke();
    ctx.restore();
  }

  return c;
}


/* Resolusi tekstur (portrait) */
const TEX_W = 640;
const TEX_H = 1020;

/* Depan: foto full-bleed + panel nama putih melengkung */
function drawFront(ctx: CanvasRenderingContext2D, img: HTMLImageElement | null) {
  if (img && img.complete && img.naturalWidth > 0) {
    const s = Math.max(TEX_W / img.naturalWidth, TEX_H / img.naturalHeight);
    const dw = img.naturalWidth * s;
    const dh = img.naturalHeight * s;
    ctx.drawImage(img, (TEX_W - dw) / 2, (TEX_H - dh) / 2, dw, dh);
  } else {
    const g = ctx.createLinearGradient(0, 0, 0, TEX_H);
    g.addColorStop(0, "#d8d8d8");
    g.addColorStop(1, "#a9a9a9");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, TEX_W, TEX_H);
  }
  const vg = ctx.createLinearGradient(0, TEX_H - 420, 0, TEX_H);
  vg.addColorStop(0, "rgba(0,0,0,0)");
  vg.addColorStop(1, "rgba(0,0,0,0.18)");
  ctx.fillStyle = vg;
  ctx.fillRect(0, TEX_H - 420, TEX_W, 420);
  const panelH = 236;
  const panelY = TEX_H - panelH;
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.moveTo(0, panelY + 74);
  ctx.bezierCurveTo(150, panelY + 74, 170, panelY, 320, panelY);
  ctx.lineTo(TEX_W, panelY);
  ctx.lineTo(TEX_W, TEX_H);
  ctx.lineTo(0, TEX_H);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "#111111";
  ctx.font = "700 40px 'Segoe UI', Arial, sans-serif";
  ctx.fillText("Arfin Desca", 36, panelY + 108);
  ctx.fillText("Alzachri", 36, panelY + 154);
  ctx.fillStyle = "rgba(0,0,0,0.55)";
  ctx.font = "500 22px 'Segoe UI', Arial, sans-serif";
  ctx.fillText("Engineer - Illustrator", 36, panelY + 196);
  ctx.textAlign = "right";
  ctx.fillStyle = "rgba(0,0,0,0.35)";
  ctx.font = "600 17px Arial, sans-serif";
  ctx.fillText("ID 045", TEX_W - 32, panelY + 196);
  ctx.textAlign = "left";
}
/* Sisi belakang: hitam + brand + barcode */
function drawBack(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = "#101010";
  ctx.fillRect(0, 0, TEX_W, TEX_H);
  ctx.fillStyle = "#f5f5f5";
  ctx.textAlign = "center";
  ctx.font = "300 62px 'Segoe UI', Arial, sans-serif";
  ctx.fillText("Arfin Desca", TEX_W / 2, TEX_H / 2 - 60);
  ctx.fillText("Portfolio", TEX_W / 2, TEX_H / 2 + 14);
  ctx.fillStyle = "rgba(255,255,255,0.45)";
  ctx.font = "500 20px Arial, sans-serif";
  ctx.fillText("ENGINEER - ILLUSTRATOR - 2026", TEX_W / 2, TEX_H / 2 + 60);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(TEX_W / 2 - 148, TEX_H - 250, 296, 118);
  ctx.fillStyle = "#101010";
  let bx = TEX_W / 2 - 130;
  let seed = 45;
  const rnd = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };
  while (bx < TEX_W / 2 + 130) {
    const w = 2 + Math.floor(rnd() * 6);
    if (rnd() > 0.4) ctx.fillRect(bx, TEX_H - 232, w, 66);
    bx += w + 2 + Math.floor(rnd() * 4);
  }
  ctx.font = "600 18px Arial, sans-serif";
  ctx.fillText("PRF 26 - 045", TEX_W / 2, TEX_H - 144);
  ctx.textAlign = "left";
}

/* Atlas tekstur portrait: depan di atas, belakang di bawah */
function makeAtlasCanvas(img: HTMLImageElement | null): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = TEX_W;
  c.height = TEX_H * 2;
  const ctx = c.getContext("2d")!;

  drawFront(ctx, img);
  ctx.save();
  ctx.translate(0, TEX_H);
  drawBack(ctx);
  ctx.restore();

  return c;
}

function toTexture(canvas: HTMLCanvasElement): THREE.CanvasTexture {
  const t = new THREE.CanvasTexture(canvas);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

/* ===== Load pas foto lalu build atlas tekstur ===== */
function useCardTextures() {
  const [tex, setTex] = useState<THREE.CanvasTexture | null>(null);

  useEffect(() => {
    let built = false;
    let made: THREE.CanvasTexture | null = null;
    const img = new Image();
    img.src = "/foto-saya.png";

    const build = () => {
      if (built) return;
      built = true;
      made = toTexture(makeAtlasCanvas(img.complete ? img : null));
      setTex(made);
    };

    img.onload = build;
    img.onerror = build; // tetep bikin kartu walau fotonya gagal load
    if (img.complete) build();

    return () => {
      made?.dispose();
    };
  }, []);

  return tex;
}

/* ===== Geometri badge: rounded kecil + lubang slot tengah-atas ===== */
const SLOT_W = 0.12;
const SLOT_H = 0.05;
const SLOT_Y = CARD_H / 2 - 0.13;

function roundedRectPath(
  path: THREE.Path | THREE.Shape,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  path.moveTo(x + r, y);
  path.lineTo(x + w - r, y);
  path.absarc(x + w - r, y + r, r, -Math.PI / 2, 0, false);
  path.lineTo(x + w, y + h - r);
  path.absarc(x + w - r, y + h - r, r, 0, Math.PI / 2, false);
  path.lineTo(x + r, y + h);
  path.absarc(x + r, y + h - r, r, Math.PI / 2, Math.PI, false);
  path.lineTo(x, y + r);
  path.absarc(x + r, y + r, r, Math.PI, Math.PI * 1.5, false);
}

/* UV generator: cap depan & belakang dipetakan ke atlas 2 sisi
   (belakang di-mirror, soalnya cap bawah extrude kebaca kebalik) */
function makeCardGeometry(): THREE.BufferGeometry {
  const shape = new THREE.Shape();
  roundedRectPath(shape, -CARD_W / 2, -CARD_H / 2, CARD_W, CARD_H, 0.09);

  const slot = new THREE.Path();
  roundedRectPath(slot, -SLOT_W / 2, SLOT_Y - SLOT_H / 2, SLOT_W, SLOT_H, SLOT_H / 2);
  shape.holes.push(slot);

  const uvGen = {
    generateTopUV(
      _geometry: THREE.BufferGeometry,
      vertices: number[],
      indexA: number,
      indexB: number,
      indexC: number
    ) {
      const out: THREE.Vector2[] = [];
      for (const i of [indexA, indexB, indexC]) {
        const x = vertices[i * 3];
        const y = vertices[i * 3 + 1];
        out.push(new THREE.Vector2(x / CARD_W + 0.5, 0.5 + (y / CARD_H + 0.5) * 0.5));
      }
      return out;
    },
    generateBottomUV(
      _geometry: THREE.BufferGeometry,
      vertices: number[],
      indexA: number,
      indexB: number,
      indexC: number
    ) {
      const out: THREE.Vector2[] = [];
      for (const i of [indexA, indexB, indexC]) {
        const x = vertices[i * 3];
        const y = vertices[i * 3 + 1];
        out.push(new THREE.Vector2(1 - (x / CARD_W + 0.5), (y / CARD_H + 0.5) * 0.5));
      }
      return out;
    },
    generateSideWallUV() {
      return [
        new THREE.Vector2(0, 0),
        new THREE.Vector2(1, 0),
        new THREE.Vector2(1, 1),
        new THREE.Vector2(0, 1),
      ];
    },
  };

  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: CARD_D,
    bevelEnabled: true,
    bevelThickness: 0.004,
    bevelSize: 0.004,
    bevelSegments: 2,
    curveSegments: 24,
    UVGenerator: uvGen,
  });
  geo.center();
  return geo;
}

/* ============================================================
   LANYARD — strap kain marun dua lapis + gesper metal
   (tekstur ada di makeLanyardCanvas, dimensi di konstanta atas)
============================================================ */

/* Pivot & anchor: 1 tali tengah, ujung keluar frame atas */
const PIVOT = new THREE.Vector3(0, 0.55, 0);
const STRAP_LEN = 1.0;
const ANCHOR = new THREE.Vector3(0, 3.4, -0.05);
const SAMPLES = 32;
const BUCKLE_U = 0.78; // posisi gesper sepanjang tali (0 = atas, 1 = klip)

/* Geometri pita (ribbon): 2 titik per sampel, index quad tetap */
function makeStrapGeometry(): THREE.BufferGeometry {
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(SAMPLES * 2 * 3);
  const uv = new Float32Array(SAMPLES * 2 * 2);
  const idx: number[] = [];
  for (let s = 0; s < SAMPLES; s++) {
    const u = s / (SAMPLES - 1);
    uv[s * 2 * 2] = 0;
    uv[s * 2 * 2 + 1] = u * 6;
    uv[(s * 2 + 1) * 2] = 1;
    uv[(s * 2 + 1) * 2 + 1] = u * 6;
  }
  for (let s = 0; s < SAMPLES - 1; s++) {
    const a = s * 2, b = s * 2 + 1, c = s * 2 + 2, d = s * 2 + 3;
    idx.push(a, b, c, b, d, c);
  }
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  geo.setIndex(idx);
  return geo;
}

const CURVE = new THREE.QuadraticBezierCurve3(
  new THREE.Vector3(),
  new THREE.Vector3(),
  new THREE.Vector3()
);
const TMP_P = new THREE.Vector3();
const TMP_T = new THREE.Vector3();
const TMP_S = new THREE.Vector3();
const Z_AXIS = new THREE.Vector3(0, 0, 1);
const TMP_MID = new THREE.Vector3();

/* Update bentuk tali: bezier dari anchor (atas frame) ke klip kartu */
function updateStrap(geo: THREE.BufferGeometry, anchor: THREE.Vector3, clip: THREE.Vector3) {
  const mid = TMP_MID.copy(anchor).add(clip).multiplyScalar(0.5);
  mid.y -= 0.12;
  mid.z -= 0.02;
  CURVE.v0.copy(anchor);
  CURVE.v1.copy(mid);
  CURVE.v2.copy(clip);

  const pos = geo.getAttribute("position") as THREE.BufferAttribute;
  for (let s = 0; s < SAMPLES; s++) {
    const u = s / (SAMPLES - 1);
    CURVE.getPoint(u, TMP_P);
    CURVE.getTangent(u, TMP_T);
    TMP_S.crossVectors(TMP_T, Z_AXIS).normalize().multiplyScalar(STRAP_W / 2);
    pos.setXYZ(s * 2, TMP_P.x - TMP_S.x, TMP_P.y - TMP_S.y, TMP_P.z - TMP_S.z);
    pos.setXYZ(s * 2 + 1, TMP_P.x + TMP_S.x, TMP_P.y + TMP_S.y, TMP_P.z + TMP_S.z);
  }
  pos.needsUpdate = true;
  geo.computeVertexNormals();
}

/* ============================================================
   KARTU GANTUNG — fisika pendulum, goyang ngikutin mouse
============================================================ */

function LanyardScene({ atlas }: { atlas: THREE.Texture }) {
  const outer = useRef<THREE.Group>(null); // group pendulum (posisi + goyangan)
  const inner = useRef<THREE.Group>(null); // group spin/flip kartu
  const root = useRef<THREE.Group>(null); // scaling + offset biar muat aman di frame
  const buckle = useRef<THREE.Group>(null); // gesper metal di badan tali
  const { viewport } = useThree();
  /* skala auto-fit: konten butuh ~2.0u lebar & ~2.7u tinggi (termasuk ayunan),
     dikasih margin 12-14% biar nggak pernah nempel tepi frustum */
  const fit = useMemo(() => {
    const needW = 2.0;
    const needH = 2.7;
    return Math.min(
      1,
      (viewport.width * 0.86) / needW,
      (viewport.height * 0.84) / needH
    );
  }, [viewport]);
  /* dua lapis kain: sisi depan bordir, sisi belakang polos */
  const texFront = useMemo(() => {
    const t = toTexture(makeLanyardCanvas("front"));
    t.wrapT = THREE.RepeatWrapping;
    return t;
  }, []);
  const texBack = useMemo(() => {
    const t = toTexture(makeLanyardCanvas("back"));
    t.wrapT = THREE.RepeatWrapping;
    return t;
  }, []);
  const strapFrontGeo = useMemo(() => makeStrapGeometry(), []);
  const strapBackGeo = useMemo(() => makeStrapGeometry(), []);
  const cardGeo = useMemo(() => makeCardGeometry(), []);

  /* state pendulum: sudut, kecepatan sudut, posisi mouse sebelumnya */
  const pen = useRef({ th: 0, thv: 0, ph: 0, phv: 0, px: 0, py: 0 });
  const mouse = useRef({ x: 0, y: 0, has: false });

  /* state spin/flip */
  const baseY = useRef(-0.26); // miring dikit biar kesan 3D-nya kerasa
  const baseX = useRef(0.05);
  const dragY = useRef(0);
  const dragX = useRef(0);
  const drag = useRef({ on: false, x: 0, y: 0, moved: 0 });

  /* mouse SELURUH window → kartu goyang walau kursor di luar canvas kartu.
     Pakai koordinat window (bukan relatif canvas) biar kartu nggak mentok
     di posisi ekstrem tiap mouse di luar area kartu. */
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (window.innerWidth === 0 || window.innerHeight === 0) return;
      mouse.current.x = THREE.MathUtils.clamp(
        (e.clientX / window.innerWidth) * 2 - 1,
        -1,
        1
      );
      mouse.current.y = THREE.MathUtils.clamp(
        -((e.clientY / window.innerHeight) * 2 - 1),
        -1,
        1
      );
      mouse.current.has = true;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  /* drag buat muter + klik buat flip */
  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (!drag.current.on) return;
      const dx = e.clientX - drag.current.x;
      const dy = e.clientY - drag.current.y;
      drag.current.x = e.clientX;
      drag.current.y = e.clientY;
      drag.current.moved += Math.abs(dx) + Math.abs(dy);
      dragY.current += dx * 0.012;
      dragX.current = THREE.MathUtils.clamp(dragX.current + dy * 0.008, -0.9, 0.9);
    };
    const up = () => {
      if (drag.current.on && drag.current.moved < 6) {
        baseY.current += Math.PI; // klik = flip ke sisi sebelahnya
      }
      drag.current.on = false;
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  useFrame((state, rawDt) => {
    const dt = Math.min(rawDt, 0.05);
    const t = state.clock.elapsedTime;
    const g = outer.current;
    const i = inner.current;
    if (!g) return;

    /* mouse → sudut target (kayak digoyang), plus goyangan ambient pelan */
    const px = mouse.current.has ? mouse.current.x : 0;
    const py = mouse.current.has ? mouse.current.y : 0;
    const p = pen.current;
    const dxp = px - p.px;
    const dyp = py - p.py;
    p.px = px;
    p.py = py;

    const tTh = THREE.MathUtils.clamp(px, -1, 1) * 0.17 + Math.sin(t * 0.5) * 0.03;
    const tPh = THREE.MathUtils.clamp(-py, -1, 1) * 0.08;

    /* spring-damper pendulum → overshoot/wobble natural tapi di-clamp
       biar kartu nggak pernah ngayun keluar frame */
    p.thv += ((tTh - p.th) * 24 - p.thv * 3.0) * dt + dxp * 0.6;
    p.phv += ((tPh - p.ph) * 24 - p.phv * 3.0) * dt + dyp * 0.4;
    p.thv = THREE.MathUtils.clamp(p.thv, -2.2, 2.2);
    p.phv = THREE.MathUtils.clamp(p.phv, -1.6, 1.6);
    p.th = THREE.MathUtils.clamp(p.th + p.thv * dt, -0.22, 0.22);
    p.ph = THREE.MathUtils.clamp(p.ph + p.phv * dt, -0.14, 0.14);

    const cosTh = Math.cos(p.th);
    const cosPh = Math.cos(p.ph);
    g.position.set(
      PIVOT.x + STRAP_LEN * Math.sin(p.th) * cosPh,
      PIVOT.y - STRAP_LEN * cosTh * cosPh,
      PIVOT.z + STRAP_LEN * Math.sin(p.ph) * cosTh
    );
    g.rotation.z = -p.th * 0.5;
    g.rotation.x = p.ph * 0.5;

    /* spin/flip di titik gantungnya */
    if (i) {
      const sway = Math.sin(t * 0.55) * 0.1;
      const targetY = baseY.current + dragY.current + sway + px * 0.05;
      const targetX = THREE.MathUtils.clamp(baseX.current + dragX.current - py * 0.04, -1.1, 1.1);
      i.rotation.y = THREE.MathUtils.damp(i.rotation.y, targetY, 5, dt);
      i.rotation.x = THREE.MathUtils.damp(i.rotation.x, targetX, 5, dt);
    }

    /* tali ngikutin posisi klip kartu (1 tali tengah, dua lapis kain) */
    TMP_P.set(g.position.x, g.position.y + SLOT_Y + 0.26, g.position.z);
    updateStrap(strapFrontGeo, ANCHOR, TMP_P);
    updateStrap(strapBackGeo, ANCHOR, TMP_P);
    /* gesper metal menempel di badan tali */
    if (buckle.current) {
      CURVE.getPoint(BUCKLE_U, TMP_P);
      buckle.current.position.copy(TMP_P);
    }
  });

  const onPointerDown = (e: {
    stopPropagation: () => void;
    nativeEvent: { clientX: number; clientY: number };
  }) => {
    e.stopPropagation();
    drag.current = { on: true, x: e.nativeEvent.clientX, y: e.nativeEvent.clientY, moved: 0 };
  };

  return (
    /* root dikecilin 0.8 + digeser (-0.18, -0.02): konten selalu muat */
    <group ref={root} scale={0.8 * fit} position={[-0.18, -0.02, 0]}>
      {/* strap kain dua lapis: depan bordir, belakang polos */}
      <mesh geometry={strapFrontGeo} position={[0, 0, STRAP_T / 2]}>
        <meshStandardMaterial map={texFront} side={THREE.DoubleSide} roughness={0.85} metalness={0.0} />
      </mesh>
      <mesh geometry={strapBackGeo} position={[0, 0, -STRAP_T / 2]}>
        <meshStandardMaterial map={texBack} side={THREE.DoubleSide} roughness={0.85} metalness={0.0} />
      </mesh>

      {/* gesper (crimp) metal yang menjepit kedua lapis kain */}
      <group ref={buckle} rotation={[Math.PI / 2, 0, 0]}>
        <mesh scale={[1, 1, 0.62]}>
          <torusGeometry args={[STRAP_W / 2 + 0.045, 0.02, 12, 36]} />
          <meshStandardMaterial color={METAL.color} metalness={METAL.metalness} roughness={METAL.roughness} />
        </mesh>
      </group>

      <group ref={outer}>
        <group ref={inner}>
          <mesh geometry={cardGeo} onPointerDown={onPointerDown}>
            {/* cap depan & belakang (atlas 2 sisi) */}
            <meshStandardMaterial attach="material-0" map={atlas} roughness={0.5} metalness={0.05} />
            {/* dinding pinggir */}
            <meshStandardMaterial attach="material-1" color="#e8e8e8" roughness={0.6} metalness={0.05} />
          </mesh>
          {/* klip metal: ring + hook + pin ke slot kartu */}
          <group position={[0, SLOT_Y + 0.13, 0]}>
            <mesh position={[0, 0.17, 0]}>
              <boxGeometry args={[0.13, 0.1, 0.03]} />
              <meshStandardMaterial color="#151515" metalness={0.2} roughness={0.55} />
            </mesh>
            <mesh position={[0, 0.05, 0]}>
              <torusGeometry args={[0.075, 0.012, 16, 48]} />
              <meshStandardMaterial color="#d7d7d7" metalness={0.95} roughness={0.22} />
            </mesh>
            <mesh position={[0, -0.06, 0]} rotation={[0, 0, 0.15]}>
              <torusGeometry args={[0.035, 0.008, 12, 32, Math.PI * 1.6]} />
              <meshStandardMaterial color="#d7d7d7" metalness={0.95} roughness={0.22} />
            </mesh>
            <mesh position={[0, -0.115, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.008, 0.008, 0.05, 16]} />
              <meshStandardMaterial color="#d7d7d7" metalness={0.95} roughness={0.22} />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
}

/* ============================================================
   EXPORT
============================================================ */

export function IdCard3D() {
  const tex = useCardTextures();

  return (
    <Canvas
      camera={{ position: [0, 0.0, 4.7], fov: 38 }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent", touchAction: "none", overflow: "visible" }}
    >
      <ambientLight intensity={1.0} />
      <directionalLight position={[3, 4, 5]} intensity={1.5} />
      <directionalLight position={[-4, -2, -3]} intensity={0.6} color="#e35d55" />
      <Suspense fallback={null}>
        {tex ? <LanyardScene atlas={tex} /> : null}
      </Suspense>
    </Canvas>
  );
}