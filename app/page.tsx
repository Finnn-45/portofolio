"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import SvgMaskEffect from "@/components/ui/svg-mask-effect";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

// Data Tech Stack
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
    { id: "pgsql", name: "PostgreSQL", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/PostgreSQL_logo.3bytes.svg" },
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
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black text-white px-6 pb-24">

      {/* --- Ambient Background Orbs (NEW) --- */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Hero Section */}
      <SvgMaskEffect
        revealText={
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-center">
            Hi, I’m <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">Arfin Desca Alzachri</span>
          </h1>
        }
      />

      <CanvasRevealEffect
        animationSpeed={3}
        containerClassName="absolute inset-0 z-0"
        colors={[
          [59, 130, 246], // biru
          [147, 51, 234], // ungu
          [250, 204, 21], // kuning
        ]}
      />

      {/* Container untuk Konten Teks agar rata kiri */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-start text-left mt-10">

        {/* Subjudul / Deskripsi (Rata Kiri) */}
        <p className="text-gray-300 max-w-xl text-lg sm:text-xl leading-relaxed">
          I'm an <span className="text-yellow-400 font-semibold">Illustrator</span>,
          <span className="text-yellow-400 font-semibold"> IoT Engineer</span>, and also
          a <span className="text-yellow-400 font-semibold"> Junior Front-end Developer</span>.
          I bridge the gap between creative design, hardware systems, and modern web development.
        </p>
        {/* Button / CTA (Rata Kiri) */}
        <div className="mt-8 flex gap-4">
          <a
            href="#portfolio"
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:bg-yellow-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] transition-all duration-300 flex items-center gap-2"
          >
            View Portfolio
          </a>
          <a
            href="/cv.pdf" // Ganti dengan path file CV kamu
            className="px-6 py-3 border border-white/20 bg-white/5 backdrop-blur-md text-gray-300 rounded-lg hover:bg-white/10 hover:border-white/40 hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" />
            </svg>
          </a>
        </div>
      </div>

      {/* --- Live Status Badge (NEW) --- */}
      <div className="mt-10 flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md shadow-lg relative z-10 group cursor-default hover:bg-white/10 transition-colors">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <p className="text-sm text-gray-300">
          Currently building <span className="text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors">Rice & Shine</span>
        </p>
      </div>

      {/* --- BAGIAN MY TECH STACK (FIXED) --- */}
      <section className="mt-40 w-full max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Sisi Kiri: Deskripsi Singkat Stack */}
          <div className="text-left flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              My <span className="text-yellow-400">Toolkit</span>
            </h2>
            <div className="h-1 w-20 bg-yellow-400 mt-4 mb-6 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.5)]"></div>
            <p className="text-gray-400 text-lg max-w-md">
              Saya menggunakan teknologi terbaru untuk memastikan performa aplikasi yang cepat,
              aman, dan mudah dikelola. Fokus utama saya adalah pada ekosistem JavaScript modern.
            </p>
          </div>

          {/* Sisi Kanan: Grid Icon yang Bersih (Berdasarkan Gaya image_a56436.png) */}
          <div className="flex-1 relative">
            {/* Lingkaran Ornamen di Background agar mirip gambar */}
            <div className="absolute inset-0 border border-white/5 rounded-full scale-110 pointer-events-none"></div>
            <div className="absolute inset-0 border border-white/5 rounded-full scale-75 pointer-events-none"></div>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 relative z-20">
              {techStack.flat().map((tech) => (
                <div
                  key={tech.id}
                  className="group relative flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/50 hover:bg-white/10 hover:-translate-y-2"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <span className="mt-2 text-[10px] font-medium text-gray-500 group-hover:text-yellow-400 transition-colors uppercase tracking-widest">
                    {tech.name}
                  </span>

                  {/* Efek Glow saat Hover */}
                  <div className="absolute inset-0 bg-yellow-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="mt-32 w-full max-w-6xl text-center relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-white">
          Featured <span className="text-yellow-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* --- Featured Project (NEW STYLING) --- */}
          <CardContainer className="inter-var w-full">
            <CardBody className="bg-gradient-to-br from-gray-900 to-black relative group/card hover:shadow-2xl hover:shadow-yellow-400/20 border border-gray-700 hover:border-yellow-400/50 rounded-xl p-5 transition-all duration-500 w-full">

              <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
                <span className="px-2 py-1 text-[10px] font-bold bg-yellow-400 text-black rounded-sm">FINAL PROJECT</span>
              </div>

              <CardItem translateZ="50" className="text-2xl font-bold text-white text-left w-full">
                Rice & Shine
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-gray-400 text-sm mt-2 text-left w-full">
                A full-stack online catering application built for optimal performance and user experience.
              </CardItem>

              <CardItem translateZ="100" className="w-full mt-6">
                <div className="h-48 w-full bg-gray-800 rounded-xl group-hover/card:shadow-xl overflow-hidden relative">
                  {/* Ganti src dengan screenshot asli project kamu nanti */}
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

          {/* Project SPMB SMK TI BAZMA */}
          <CardContainer className="inter-var w-full">
            <CardBody className="bg-gray-900 relative group/card hover:shadow-2xl hover:shadow-green-400/20 border border-gray-800 hover:border-green-400/50 rounded-xl p-5 transition-all duration-500 w-full">

              <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
                <span className="px-2 py-1 text-[10px] font-bold bg-green-500 text-white rounded-sm uppercase">Front End Role</span>
              </div>

              <CardItem translateZ="50" className="text-xl font-bold text-white text-left w-full">
                SPMB SMK TI BAZMA
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-gray-400 text-sm mt-2 text-left w-full">
                Sistem Penerimaan Murid Baru untuk SMK TI BAZMA, fokus pada antarmuka pendaftaran yang user-friendly.
              </CardItem>

              <CardItem translateZ="100" className="w-full mt-6">
                <div className="h-48 w-full bg-gray-800 rounded-xl group-hover/card:shadow-xl overflow-hidden relative">
                  <img
                    src="https://spmb.smktibazma.sch.id/" // Opsional: Ganti dengan screenshot landing page-nya
                    alt="SPMB BAZMA"
                    className="w-full h-full object-contain p-8 grayscale group-hover/card:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover/card:bg-transparent transition-colors duration-500"></div>
                </div>
              </CardItem>

              <CardItem translateZ="40" className="w-full mt-5 flex justify-between items-center">
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] text-gray-300">Next.js</span>
                  <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] text-gray-300">Tailwind</span>
                </div>
                <a
                  href="https://spmb.smktibazma.sch.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-yellow-400 hover:underline font-medium"
                >
                  Visit Site →
                </a>
              </CardItem>
            </CardBody>
          </CardContainer>

          {/* Project: Sistem Absensi Siswa (Hardware Side) */}
          <CardContainer className="inter-var w-full">
            <CardBody className="bg-gray-900 relative group/card hover:shadow-2xl hover:shadow-cyan-400/20 border border-gray-800 hover:border-cyan-400/50 rounded-xl p-5 transition-all duration-500 w-full">

              <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
                <span className="px-2 py-1 text-[10px] font-bold bg-cyan-600 text-white rounded-sm uppercase">IoT Hardware Engineer</span>
              </div>

              <CardItem translateZ="50" className="text-xl font-bold text-white text-left w-full">
                Attendance Machine Interface
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-gray-400 text-sm mt-2 text-left w-full">
                Perancangan dan integrasi perangkat keras untuk sistem absensi, fokus pada setup modul sensor dan komunikasi data ke server.
              </CardItem>

              <CardItem translateZ="100" className="w-full mt-6">
                <div className="h-48 w-full bg-gradient-to-br from-cyan-900/20 to-black rounded-xl group-hover/card:shadow-xl overflow-hidden relative flex items-center justify-center border border-white/5">
                  {/* Visual Hardware/Circuit */}
                  <div className="flex flex-col items-center gap-2 opacity-50 group-hover/card:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M6 8h.01" /><path d="M10 8h.01" /><path d="M14 8h.01" /><path d="M18 8h.01" /><path d="M8 12h8" /><path d="M7 16h10" /></svg>
                    <span className="text-[10px] text-cyan-500 font-mono tracking-tighter">HARDWARE LAYER INTEGRATED</span>
                  </div>
                  <div className="absolute inset-0 bg-black/40 group-hover/card:bg-transparent transition-colors duration-500"></div>
                </div>
              </CardItem>

              <CardItem translateZ="40" className="w-full mt-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                {/* Container Tag: Pakai flex-wrap agar tidak overflow di mobile */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-400 font-medium whitespace-nowrap">
                    ESP32/Arduino
                  </span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-400 font-medium whitespace-nowrap">
                    RFID/Sensor
                  </span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-400 font-medium whitespace-nowrap">
                    IoT Hardware
                  </span>
                </div>

                {/* Tombol Link: Dibuat lebih tegas agar mudah diklik */}
                <a
                  href="https://docs.google.com/document/d/1styPSLm_bqN3Bw8CQa9j1YObXMr5WLtA4xGTQj7YZUQ/edit?tab=t.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-yellow-400 hover:text-yellow-300 font-bold flex items-center gap-1 transition-colors group/link"
                >
                  Hardware Specs
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </CardItem>
            </CardBody>
          </CardContainer>

        </div>
      </section>

    {/* Footer Section (Berdasarkan Gambar Referensi) */}
      <footer className="mt-32 pb-16 pt-16 border-t border-white/5 w-full max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          
          {/* Kolom 1: Find me in */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest">Find me in</h3>
            <div className="flex flex-col gap-3">
              <a href="https://linkedin.com/in/username" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                Linkedin
              </a>
              <a href="https://github.com/Finnn-45" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                Github
              </a>
            </div>
          </div>

          {/* Kolom 2: Social Media */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest">Social Media</h3>
            <div className="flex flex-col gap-3">
              <a href="https://youtube.com/@username" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                Youtube
              </a>
              <a href="https://www.instagram.com/zakriii___/" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                Instagram
              </a>
            </div>
          </div>

          {/* Kolom 3: About */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest">About</h3>
            <div className="flex flex-col gap-3">
              <p className="text-gray-400 text-sm">By: <span className="text-gray-200">Arfin Desca Alzachri</span></p>
              <p className="text-gray-400 text-sm">Icons by <a href="https://lordicon.com" className="text-gray-200 hover:text-yellow-400 transition-colors underline decoration-white/10 underline-offset-4">Lordicon.com</a></p>
            </div>
          </div>

        </div>

        {/* Garis Bawah Tambahan */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} ALL RIGHTS RESERVED</p>
          <p>MADE WITH NEXT.JS & ACETERNITY UI</p>
        </div>
      </footer>
    </main>
  );
}