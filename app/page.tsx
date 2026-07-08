"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import SvgMaskEffect from "@/components/ui/svg-mask-effect";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

const techStack = [
  [
    { id: "html", name: "HTML5", logo: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" },
    { id: "css", name: "CSS3", logo: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" },
    { id: "js", name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { id: "tw", name: "Tailwind", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { id: "react", name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { id: "ts", name: "TypeScript", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
    { id: "next", name: "Next.js", logo: "https://static-00.iconduck.com/assets.00/next-js-icon-512x512-75758178.png" },
  ],
  [
    { id: "node", name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { id: "cpp", name: "C++", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" },
    { id: "laravel", name: "Laravel", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" },
    { id: "arduino", name: "Arduino", logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Arduino_Logo.svg" },
    { id: "esp32", name: "ESP32", logo: "https://www.espressif.com/sites/default/files/logo/espressif_logo_0.png" },
  ],
  [
    { id: "ps", name: "Photoshop", logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" },
    { id: "ai", name: "Illustrator", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" },
    { id: "canva", name: "Canva", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg" },
    { id: "figma", name: "Figma", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
  ],
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden bg-black text-white px-6 pb-24">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* ===== HERO ===== */}
      <section className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center">
        <SvgMaskEffect
          revealText={
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-center">
              {`Arfin Desca`}{" "}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                Alzachri
              </span>
            </h1>
          }
        />

        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="absolute inset-0 z-0"
          colors={[
            [59, 130, 246],
            [147, 51, 234],
            [250, 204, 21],
          ]}
        />

        <div className="relative z-10 w-full max-w-6xl flex flex-col items-start text-left mt-10">
          <p className="text-gray-300 max-w-xl text-lg sm:text-xl leading-relaxed">
            Illustrator &bull; IoT Engineer &bull; Junior Front-end Developer
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:bg-yellow-300 hover:scale-105 transition-all duration-300"
            >
              Lihat Projek
            </a>
            <a
              href="/cv.pdf"
              className="px-6 py-3 border border-white/20 bg-white/5 backdrop-blur-md text-gray-300 rounded-lg hover:bg-white/10 hover:border-white/40 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              CV
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            </a>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md shadow-lg relative z-10 group cursor-default hover:bg-white/10 transition-colors">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <p className="text-sm text-gray-300">
            SMK TI BAZMA &bull; Angkatan 2021 - 2025
          </p>
        </div>
      </section>

      {/* ===== TENTANG ===== */}
      <section className="mt-32 w-full max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Tentang <span className="text-yellow-400">Saya</span>
            </h2>
            <div className="h-1 w-20 bg-yellow-400 mt-4 mb-6 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.5)]"></div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Siswa SMK TI Bazma dengan ketertarikan di Web Development, IoT, dan Desain Visual.
              Berpengalaman dalam membangun aplikasi website dan sistem IoT, serta aktif di berbagai
              organisasi dan proyek kreatif.
            </p>
          </div>
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section className="mt-40 w-full max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-left flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Tech <span className="text-yellow-400">Stack</span>
            </h2>
            <div className="h-1 w-20 bg-yellow-400 mt-4 mb-6 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.5)]"></div>
            <div className="space-y-4 text-gray-400">
              <div><span className="text-yellow-400 font-semibold">Engineering:</span> IoT, Arduino, ESP32</div>
              <div><span className="text-yellow-400 font-semibold">Desain:</span> Illustrator, UI/UX, Figma, Canva</div>
              <div><span className="text-yellow-400 font-semibold">Dev:</span> HTML, CSS, JS, Laravel, React, Next.js, C++</div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-0 border border-white/5 rounded-full scale-110 pointer-events-none"></div>
            <div className="absolute inset-0 border border-white/5 rounded-full scale-75 pointer-events-none"></div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 relative z-20">
              {techStack.flat().map((tech) => (
                <div key={tech.id} className="group relative flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/50 hover:bg-white/10 hover:-translate-y-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                    <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <span className="mt-2 text-[10px] font-medium text-gray-500 group-hover:text-yellow-400 transition-colors uppercase tracking-widest">{tech.name}</span>
                  <div className="absolute inset-0 bg-yellow-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROYEK ===== */}
      <section id="projects" className="mt-32 w-full max-w-6xl text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4 text-white">
          <span className="text-yellow-400">Proyek</span> Terbaru
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Beberapa proyek yang saya kerjakan, dari pengembangan web hingga sistem IoT.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <CardContainer className="inter-var w-full">
            <CardBody className="bg-gradient-to-br from-gray-900 to-black relative group/card hover:shadow-2xl hover:shadow-yellow-400/20 border border-gray-700 hover:border-yellow-400/50 rounded-xl p-5 transition-all duration-500 w-full">
              <div className="absolute top-4 right-4 z-20">
                <span className="px-2 py-1 text-[10px] font-bold bg-yellow-400 text-black rounded-sm">FINAL PROJECT</span>
              </div>
              <CardItem translateZ="50" className="text-2xl font-bold text-white text-left w-full">Rice & Shine</CardItem>
              <CardItem as="p" translateZ="60" className="text-gray-400 text-sm mt-2 text-left w-full">Aplikasi katering online full-stack.</CardItem>
              <CardItem translateZ="100" className="w-full mt-6">
                <div className="h-48 w-full bg-gray-800 rounded-xl overflow-hidden relative">
                  <img src="/image1.png" alt="Rice and Shine" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 group-hover/card:bg-transparent transition-colors duration-500"></div>
                </div>
              </CardItem>
              <CardItem translateZ="40" className="w-full mt-5 flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-gray-300">Next.js</span>
                <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-gray-300">TypeScript</span>
                <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-gray-300">Prisma</span>
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var w-full">
            <CardBody className="bg-gray-900 relative group/card hover:shadow-2xl hover:shadow-green-400/20 border border-gray-800 hover:border-green-400/50 rounded-xl p-5 transition-all duration-500 w-full">
              <div className="absolute top-4 right-4 z-20">
                <span className="px-2 py-1 text-[10px] font-bold bg-green-500 text-white rounded-sm uppercase">Front End</span>
              </div>
              <CardItem translateZ="50" className="text-xl font-bold text-white text-left w-full">SPMB SMK TI BAZMA</CardItem>
              <CardItem as="p" translateZ="60" className="text-gray-400 text-sm mt-2 text-left w-full">Platform pendaftaran siswa baru 1.000+ user.</CardItem>
              <CardItem translateZ="100" className="w-full mt-6">
                <div className="h-48 w-full bg-gray-800 rounded-xl overflow-hidden relative flex items-center justify-center">
                  <span className="text-4xl font-bold text-green-500/30">SPMB</span>
                  <div className="absolute inset-0 bg-black/40 group-hover/card:bg-transparent transition-colors duration-500"></div>
                </div>
              </CardItem>
              <CardItem translateZ="40" className="w-full mt-5 flex justify-between items-center">
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] text-gray-300">Next.js</span>
                  <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] text-gray-300">Tailwind</span>
                </div>
                <a href="https://spmb.smktibazma.sch.id/" target="_blank" rel="noopener noreferrer" className="text-xs text-yellow-400 hover:underline font-medium">Kunjungi →</a>
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var w-full">
            <CardBody className="bg-gray-900 relative group/card hover:shadow-2xl hover:shadow-cyan-400/20 border border-gray-800 hover:border-cyan-400/50 rounded-xl p-5 transition-all duration-500 w-full">
              <div className="absolute top-4 right-4 z-20">
                <span className="px-2 py-1 text-[10px] font-bold bg-cyan-600 text-white rounded-sm uppercase">IoT</span>
              </div>
              <CardItem translateZ="50" className="text-xl font-bold text-white text-left w-full">Absensi RFID</CardItem>
              <CardItem as="p" translateZ="60" className="text-gray-400 text-sm mt-2 text-left w-full">Sistem absensi otomatis dengan kartu RFID.</CardItem>
              <CardItem translateZ="100" className="w-full mt-6">
                <div className="h-48 w-full bg-gradient-to-br from-cyan-900/20 to-black rounded-xl overflow-hidden relative flex items-center justify-center border border-white/5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h.01"/><path d="M10 8h.01"/><path d="M14 8h.01"/><path d="M18 8h.01"/><path d="M8 12h8"/><path d="M7 16h10"/></svg>
                </div>
              </CardItem>
              <CardItem translateZ="40" className="w-full mt-5 flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-400">ESP32/Arduino</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-400">RFID</span>
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var w-full">
            <CardBody className="bg-gray-900 relative group/card hover:shadow-2xl hover:shadow-purple-400/20 border border-gray-800 hover:border-purple-400/50 rounded-xl p-5 transition-all duration-500 w-full">
              <div className="absolute top-4 right-4 z-20">
                <span className="px-2 py-1 text-[10px] font-bold bg-purple-600 text-white rounded-sm uppercase">IoT</span>
              </div>
              <CardItem translateZ="50" className="text-xl font-bold text-white text-left w-full">JWS Digital Clock</CardItem>
              <CardItem as="p" translateZ="60" className="text-gray-400 text-sm mt-2 text-left w-full">Jam waktu sholat real-time.</CardItem>
              <CardItem translateZ="100" className="w-full mt-6">
                <div className="h-48 w-full bg-gradient-to-br from-purple-900/20 to-black rounded-xl overflow-hidden relative flex items-center justify-center border border-white/5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
              </CardItem>
              <CardItem translateZ="40" className="w-full mt-5 flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-400">Mikrokontroler</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-400">LED Display</span>
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var w-full">
            <CardBody className="bg-gray-900 relative group/card hover:shadow-2xl hover:shadow-red-400/20 border border-gray-800 hover:border-red-400/50 rounded-xl p-5 transition-all duration-500 w-full">
              <div className="absolute top-4 right-4 z-20">
                <span className="px-2 py-1 text-[10px] font-bold bg-red-600 text-white rounded-sm uppercase">IoT</span>
              </div>
              <CardItem translateZ="50" className="text-xl font-bold text-white text-left w-full">RC Car ESP32</CardItem>
              <CardItem as="p" translateZ="60" className="text-gray-400 text-sm mt-2 text-left w-full">Mobil RC kendali nirkabel via smartphone.</CardItem>
              <CardItem translateZ="100" className="w-full mt-6">
                <div className="h-48 w-full bg-gradient-to-br from-red-900/20 to-black rounded-xl overflow-hidden relative flex items-center justify-center border border-white/5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.5"><path d="M5 17h14l2-6h-3l-2-4H8l-2 4H3l2 6z"/><circle cx="8" cy="19" r="2"/><circle cx="16" cy="19" r="2"/></svg>
                </div>
              </CardItem>
              <CardItem translateZ="40" className="w-full mt-5 flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-400">ESP32</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-400">IoT</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-400">Motor Control</span>
              </CardItem>
            </CardBody>
          </CardContainer>

        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="mt-32 pb-16 pt-16 border-t border-white/5 w-full max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest">Temukan Saya</h3>
            <div className="flex flex-col gap-3">
              <a href="https://linkedin.com/in/username" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </a>
              <a href="https://github.com/Finnn-45" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                GitHub
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest">Media Sosial</h3>
            <div className="flex flex-col gap-3">
              <a href="https://youtube.com/@username" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                YouTube
              </a>
              <a href="https://www.instagram.com/zakriii___/" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                Instagram
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest">Tentang</h3>
            <p className="text-gray-400 text-sm">Oleh: <span className="text-gray-200">Arfin Desca Alzachri</span></p>
            <p className="text-gray-400 text-sm">SMK TI BAZMA &bull; 2021 - 2025</p>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 uppercase tracking-[0.2em]">
          <p>&copy; {new Date().getFullYear()} ALL RIGHTS RESERVED</p>
          <p>NEXT.JS & ACETERNITY UI</p>
        </div>
      </footer>
    </main>
  );
}