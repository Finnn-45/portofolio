"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

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

const projects = [
  {
    title: "Rice & Shine",
    desc: "Aplikasi katering online full-stack dengan Next.js",
    tags: ["Next.js", "TypeScript", "Prisma"],
    badge: "FINAL PROJECT",
    badgeColor: "from-emerald-500 to-teal-600",
    gradient: "from-gray-900 via-emerald-900/10 to-black",
    borderHover: "hover:border-emerald-500/50",
    shadowHover: "hover:shadow-emerald-500/20",
  },
  {
    title: "SPMB SMK TI BAZMA",
    desc: "Platform pendaftaran siswa baru 1.000+ user",
    tags: ["Next.js", "Tailwind"],
    badge: "FRONT END",
    badgeColor: "from-cyan-500 to-blue-600",
    gradient: "from-gray-900 via-cyan-900/10 to-black",
    borderHover: "hover:border-cyan-500/50",
    shadowHover: "hover:shadow-cyan-500/20",
    link: "https://spmb.smktibazma.sch.id/",
  },
  {
    title: "Absensi RFID",
    desc: "Sistem absensi otomatis dengan kartu RFID",
    tags: ["ESP32/Arduino", "RFID"],
    badge: "IOT",
    badgeColor: "from-violet-500 to-purple-600",
    gradient: "from-gray-900 via-violet-900/10 to-black",
    borderHover: "hover:border-violet-500/50",
    shadowHover: "hover:shadow-violet-500/20",
  },
  {
    title: "JWS Digital Clock",
    desc: "Jam waktu sholat real-time",
    tags: ["Mikrokontroler", "LED Display"],
    badge: "IOT",
    badgeColor: "from-rose-500 to-pink-600",
    gradient: "from-gray-900 via-rose-900/10 to-black",
    borderHover: "hover:border-rose-500/50",
    shadowHover: "hover:shadow-rose-500/20",
  },
  {
    title: "RC Car ESP32",
    desc: "Mobil RC kendali nirkabel via smartphone",
    tags: ["ESP32", "IoT", "Motor Control"],
    badge: "IOT",
    badgeColor: "from-amber-500 to-orange-600",
    gradient: "from-gray-900 via-amber-900/10 to-black",
    borderHover: "hover:border-amber-500/50",
    shadowHover: "hover:shadow-amber-500/20",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* ===== ANIMATED BACKGROUND ===== */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-emerald-500/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-teal-500/10 rounded-full blur-[150px] animate-pulse [animation-delay:2s]"></div>
        <div className="absolute top-[40%] right-[20%] w-[30%] h-[30%] bg-cyan-500/5 rounded-full blur-[120px] animate-pulse [animation-delay:4s]"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_20%,transparent_70%)]"></div>
      </div>

      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-6 py-3 flex items-center justify-between shadow-lg shadow-black/20">
          <span className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
            Portfolio
          </span>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">Tentang</a>
            <a href="#skills" className="hover:text-white transition-colors">Skill</a>
            <a href="#projects" className="hover:text-white transition-colors">Proyek</a>
            <a href="#contact" className="hover:text-white transition-colors">Kontak</a>
          </div>
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-16 md:gap-20">
          {/* FOTO - Kiri */}
          <div className="relative shrink-0 order-1 md:order-1">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-emerald-400/30 via-teal-400/20 to-transparent blur-2xl animate-pulse"></div>
              {/* Photo frame */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-emerald-500/10">
                <img
                  src="/foto-saya.png"
                  alt="Arfin Desca Alzachri"
                  className="w-full h-full object-contain scale-110 hover:scale-100 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
              {/* Decorative dots */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border border-emerald-400/20 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 border border-teal-400/20 rounded-full"></div>
            </div>
          </div>

          {/* TEKS - Kanan */}
          <div className="flex-1 text-center md:text-left order-2 md:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 absolute"></span>
              Open to Collaboration
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-gray-300">Halo, Saya</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Arfin Desca Alzachri
              </span>
            </h1>

            <p className="mt-6 text-gray-400 text-lg max-w-xl leading-relaxed md:mx-0">
              Illustrator &bull; IoT Engineer &bull; Junior Front-end Developer
            </p>

            <p className="mt-4 text-gray-500 text-sm max-w-lg md:mx-0">
              Siswa SMK TI Bazma — Angkatan 2021 - 2025
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="group relative px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                <span className="relative z-10">Lihat Projek</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a
                href="/cv.pdf"
                className="px-8 py-3.5 border border-white/10 bg-white/5 backdrop-blur-sm text-gray-300 rounded-xl hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                Download CV
              </a>
            </div>

            {/* Social links */}
            <div className="mt-10 flex items-center gap-5 justify-center md:justify-start">
              <a href="https://github.com/Finnn-45" target="_blank" className="p-2.5 border border-white/10 rounded-xl text-gray-500 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://www.instagram.com/zakriii___/" target="_blank" className="p-2.5 border border-white/10 rounded-xl text-gray-500 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://linkedin.com/in/username" target="_blank" className="p-2.5 border border-white/10 rounded-xl text-gray-500 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://youtube.com/@username" target="_blank" className="p-2.5 border border-white/10 rounded-xl text-gray-500 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-4 h-8 border border-gray-600 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* ===== TENTANG SAYA ===== */}
      <section id="about" className="relative z-10 px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-sm font-semibold uppercase tracking-[0.3em]">About</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Tentang <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Saya</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Siswa SMK TI Bazma dengan ketertarikan di <span className="text-emerald-400 font-medium">Web Development</span>, 
                <span className="text-teal-400 font-medium"> IoT</span>, dan <span className="text-cyan-400 font-medium">Desain Visual</span>.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Berpengalaman dalam membangun aplikasi website dan sistem IoT, serta aktif di berbagai
                organisasi dan proyek kreatif.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">5+</div>
                  <div className="text-xs text-gray-500 mt-1">Proyek Selesai</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">3</div>
                  <div className="text-xs text-gray-500 mt-1">Bidang Keahlian</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">∞</div>
                  <div className="text-xs text-gray-500 mt-1">Semangat Belajar</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Web Development</h4>
                    <p className="text-gray-500 text-sm mt-1">Next.js, React, Laravel, Tailwind CSS</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">IoT Engineering</h4>
                    <p className="text-gray-500 text-sm mt-1">ESP32, Arduino, RFID, Sensor Systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Visual Design</h4>
                    <p className="text-gray-500 text-sm mt-1">Photoshop, Illustrator, Figma, Canva</p>
                  </div>
                </div>
              </div>

              {/* Decorative */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-emerald-400/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-teal-400/10 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section id="skills" className="relative z-10 px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-sm font-semibold uppercase tracking-[0.3em]">Skills</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Tech <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Stack</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Engineering */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-all duration-500 group">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 inline-block mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-4">Engineering</h3>
              <div className="flex flex-wrap gap-2">
                {["IoT", "Arduino", "ESP32", "Sensor Systems", "RFID"].map((item) => (
                  <span key={item} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400 hover:text-emerald-400 hover:border-emerald-400/30 transition-all">{item}</span>
                ))}
              </div>
            </div>

            {/* Design */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-all duration-500 group">
              <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 inline-block mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-4">Design</h3>
              <div className="flex flex-wrap gap-2">
                {["Photoshop", "Illustrator", "Figma", "Canva", "UI/UX"].map((item) => (
                  <span key={item} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400 hover:text-teal-400 hover:border-teal-400/30 transition-all">{item}</span>
                ))}
              </div>
            </div>

            {/* Development */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-all duration-500 group">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 inline-block mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-4">Development</h3>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Laravel", "Tailwind", "C++"].map((item) => (
                  <span key={item} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all">{item}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Tech icons grid */}
          <div className="mt-16 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
            <p className="text-center text-gray-500 text-sm mb-8 uppercase tracking-[0.2em]">Teknologi yang Saya Kuasai</p>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-6">
              {techStack.flat().map((tech) => (
                <div key={tech.id} className="group flex flex-col items-center justify-center p-3 rounded-xl hover:bg-white/5 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                    <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <span className="mt-2 text-[9px] font-medium text-gray-600 group-hover:text-emerald-400 transition-colors uppercase tracking-wider">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROYEK ===== */}
      <section id="projects" className="relative z-10 px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-sm font-semibold uppercase tracking-[0.3em]">Projects</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Proyek</span> Terbaru
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto mt-4"></div>
            <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
              Beberapa proyek yang saya kerjakan, dari pengembangan web hingga sistem IoT.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <CardContainer key={idx} className="inter-var w-full">
                <CardBody className={`bg-gradient-to-br ${project.gradient} relative group/card ${project.shadowHover} border border-gray-800 ${project.borderHover} rounded-2xl p-6 transition-all duration-500 w-full`}>
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`px-3 py-1 text-[10px] font-bold bg-gradient-to-r ${project.badgeColor} text-white rounded-lg uppercase tracking-wider`}>
                      {project.badge}
                    </span>
                  </div>

                  <CardItem translateZ="50" className="text-xl font-bold text-white text-left w-full mt-2">
                    {project.title}
                  </CardItem>

                  <CardItem as="p" translateZ="60" className="text-gray-400 text-sm mt-2 text-left w-full leading-relaxed">
                    {project.desc}
                  </CardItem>

                  <CardItem translateZ="100" className="w-full mt-6">
                    <div className="h-44 w-full bg-white/5 rounded-xl overflow-hidden relative flex items-center justify-center border border-white/5 group-hover/card:border-white/10 transition-all">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent"></div>
                      <span className="text-6xl font-black opacity-[0.04] select-none">{project.title.split(" ")[0]}</span>
                    </div>
                  </CardItem>

                  {project.link ? (
                    <CardItem translateZ="40" className="w-full mt-5 flex justify-between items-center">
                      <div className="flex gap-2 flex-wrap">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-400">{tag}</span>
                        ))}
                      </div>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-400 hover:text-emerald-300 hover:underline font-medium transition-colors">Kunjungi →</a>
                    </CardItem>
                  ) : (
                    <CardItem translateZ="40" className="w-full mt-5 flex gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-400">{tag}</span>
                      ))}
                    </CardItem>
                  )}
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOOTER / CONTACT ===== */}
      <footer id="contact" className="relative z-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-sm font-semibold uppercase tracking-[0.3em]">Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Mari <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Terhubung</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto mt-4"></div>
            <p className="text-gray-500 mt-6 max-w-lg mx-auto">
              Tertarik bekerja sama? Jangan ragu untuk menghubungi saya melalui sosial media di bawah ini.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="https://github.com/Finnn-45" target="_blank" className="group flex items-center gap-3 px-6 py-3.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-500 group-hover:text-white transition-colors"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              <span className="text-gray-400 group-hover:text-white transition-colors text-sm">GitHub</span>
            </a>
            <a href="https://www.instagram.com/zakriii___/" target="_blank" className="group flex items-center gap-3 px-6 py-3.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 group-hover:text-white transition-colors"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              <span className="text-gray-400 group-hover:text-white transition-colors text-sm">Instagram</span>
            </a>
            <a href="https://linkedin.com/in/username" target="_blank" className="group flex items-center gap-3 px-6 py-3.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-500 group-hover:text-white transition-colors"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              <span className="text-gray-400 group-hover:text-white transition-colors text-sm">LinkedIn</span>
            </a>
            <a href="https://youtube.com/@username" target="_blank" className="group flex items-center gap-3 px-6 py-3.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-500 group-hover:text-white transition-colors"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              <span className="text-gray-400 group-hover:text-white transition-colors text-sm">YouTube</span>
            </a>
          </div>

          <div className="text-center pt-12 border-t border-white/5">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} <span className="text-emerald-400">Arfin Desca Alzachri</span>. All Rights Reserved.
            </p>
            <p className="text-[10px] text-gray-700 mt-2 uppercase tracking-[0.2em]">Built with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </main>
  );
}