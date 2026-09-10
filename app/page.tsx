"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile, socials } from "@/lib/data";
import { CustomCursor } from "@/components/site/decor";

/* ============================================================
   DATA
============================================================ */

const tools = [
  { name: "HTML", icon: "◈" },
  { name: "CSS", icon: "◑" },
  { name: "JavaScript", icon: "✦" },
  { name: "React.js", icon: "⚛" },
  { name: "Next.js", icon: "▲" },
  { name: "Laravel", icon: "⬢" },
  { name: "C++", icon: "✚" },
  { name: "Arduino", icon: "⏣" },
  { name: "ESP32", icon: "⌬" },
  { name: "Figma", icon: "✏" },
  { name: "Illustrator", icon: "✒" },
  { name: "Canva", icon: "◧" },
];

const serviceRow1 = ["Web Development", "IoT Engineering", "UI/UX Design"];
const serviceRow2 = ["Graphic Illustration", "Arduino & ESP32", "Visual Design"];

const insideList = [
  { num: "01", title: "WEB DEVELOPMENT" },
  { num: "02", title: "IOT PROJECTS" },
  { num: "03", title: "DESIGN WORKS" },
  { num: "04", title: "ACHIEVEMENTS" },
];

type CaseStudy = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  tools: string[];
  description: string;
  overview: string;
  challenge: string;
  process: string;
  solution: string;
  result: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: "01",
    title: "SPMB",
    subtitle: "Sistem Penerimaan Murid Baru",
    category: "WEB DEVELOPMENT",
    year: "2025",
    tools: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui", "WhatsApp API"],
    description:
      "Front-end platform pendaftaran siswa baru SMK TI BAZMA — dipakai 1.000+ pengguna, dengan alur daftar se-simple mungkin plus auto-notif WhatsApp.",
    overview:
      "Sistem pendaftaran online terpadu yang memfasilitasi calon siswa dan orang tua dalam seluruh tahapan registrasi, pengunggahan berkas, verifikasi data, sampai pemantauan status seleksi secara real-time. Aku pegang bagian front-end-nya — dari desain antarmuka sampai implementasi.",
    challenge:
      "Banyaknya tahapan administrasi dan formulir data yang berpotensi membingungkan pengguna baru — memicu tingginya drop-off dan kesalahan pengisian data saat proses pendaftaran.",
    process:
      "Analisis alur pendaftaran lama → pemetaan user flow multi-step → perancangan komponen UI yang konsisten → implementasi dengan Next.js + validasi ketat di tiap langkah → usability testing sama calon pengguna.",
    solution:
      "Formulir dibagi jadi multi-step form dengan validasi otomatis, progres pendaftaran yang keliatan jelas, informasi ringkas per langkah, plus notifikasi WhatsApp otomatis di tiap milestone supaya pendaftar nggak perlu nebak statusnya.",
    result:
      "Platform dipakai 1.000+ pengguna selama periode pendaftaran — prosesnya jadi jauh lebih mudah diikuti, kesalahan input berkurang drastis, dan tim PPDB terbantu banget sama notifikasi otomatisnya.",
  },
  {
    id: "02",
    title: "Attendance via RFID",
    subtitle: "Sistem Absensi Kartu RFID",
    category: "IOT ENGINEERING",
    year: "2025",
    tools: ["Arduino", "C++", "RFID RC522", "Embedded System"],
    description:
      "Absensi siswa pake kartu RFID + Arduino. Tempel kartu, langsung kecatat otomatis ke sistem. Nggak ada lagi absen manual.",
    overview:
      "Sistem absensi otomatis berbasis kartu RFID — siswa tinggal tempel kartu ke reader, dan kehadirannya langsung tercatat ke sistem tanpa proses manual sama sekali.",
    challenge:
      "Absensi manual makan waktu, rawan salah catat, dan datanya susah direkap ulang — apalagi buat kelas dengan jumlah siswa yang banyak.",
    process:
      "Riset hardware reader RFID → perakitan modul Arduino + RC522 → pemrograman pembacaan UID kartu di C++ → sinkronisasi data kehadiran ke sistem → uji coba akurasi dan kecepatan pembacaan.",
    solution:
      "Setiap kartu dipetakan ke data siswa, pembacaan UID divalidasi anti duplikat dalam sesi yang sama, dan hasil kehadiran langsung tersimpan terstruktur supaya gampang direkap.",
    result:
      "Proses absensi yang tadinya makan waktu berubah jadi hitungan detik per siswa — data lebih akurat, rekap otomatis, dan absen manual resmi pensiun.",
  },
  {
    id: "03",
    title: "JWS Digital Clock",
    subtitle: "Prayer Time Clock",
    category: "IOT ENGINEERING",
    year: "2025",
    tools: ["Mikrokontroler", "LED Display", "Real-time Data"],
    description:
      "Jam waktu sholat digital yang nyambung ke jadwal sholat real-time — LED display + mikrokontroler, waktunya selalu akurat tanpa diatur manual.",
    overview:
      "Perangkat jam waktu sholat digital berbasis mikrokontroler dengan LED display yang menampilkan jadwal sholat secara real-time — dirancang supaya info waktu selalu akurat tanpa perlu diatur ulang manual.",
    challenge:
      "Jam waktu sholat konvensional harus diatur manual dan sering telat berubah pas jadwalnya geser — repot dan gampang salah.",
    process:
      "Perancangan rangkaian mikrokontroler + LED display → integrasi data jadwal sholat real-time → pemrograman logika tampilan dan alarm waktu sholat → kalibrasi dan uji akurasi harian.",
    solution:
      "Perangkat menarik data jadwal secara real-time, menampilkannya di LED display dengan format yang gampang dibaca, dan otomatis menyesuaikan perubahan jadwal tanpa intervensi manual.",
    result:
      "Jam waktu sholat yang selalu akurat, nggak perlu diatur-atur lagi, dan jadi perangkat yang bener-bener kepakai sehari-hari.",
  },
  {
    id: "04",
    title: "RC Car ESP32",
    subtitle: "Wireless Control Car",
    category: "IOT ENGINEERING",
    year: "2025",
    tools: ["ESP32", "IoT", "Motor Control", "Wireless"],
    description:
      "Mobil RC dari ESP32 yang dikendaliin wireless langsung dari HP — komunikasi IoT + kontrol motor. Proyek paling seru buat diutak-atik.",
    overview:
      "Mobil RC berbasis ESP32 yang dikendalikan wireless lewat perangkat mobile — gabungan komunikasi IoT, kontrol motor, dan rangkaian elektronik dalam satu proyek seru.",
    challenge:
      "Membangun kendali kendaraan yang responsif dan stabil lewat koneksi wireless, sekaligus mengatur kecepatan dan arah motor secara presisi dengan daya yang terbatas.",
    process:
      "Perakitan chassis + motor driver → pemrograman ESP32 untuk penerimaan perintah → pembuatan antarmuka kontrol di HP → kalibrasi responsivitas motor dan kestabilan koneksi → uji lapangan.",
    solution:
      "Komunikasi wireless low-latency antara HP dan ESP32, kontrol arah dan kecepatan yang dihaluskan lewat pengaturan PWM, plus struktur rangkaian yang ringkas dan hemat daya.",
    result:
      "Mobil RC yang responsif dan stabil dikendalikan dari jarak jauh — dan proyek yang paling banyak ngajarin soal integrasi hardware, software, dan troubleshooting.",
  },
];

/* ============================================================
   LOADER — counter 000 → 100
============================================================ */

function Loader({ isLoading }: { isLoading: boolean }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;
    const start = Date.now();
    const timer = setInterval(() => {
      const value = Math.min(100, Math.floor(((Date.now() - start) / 1200) * 100));
      setProgress(value);
      if (value >= 100) clearInterval(timer);
    }, 25);
    return () => clearInterval(timer);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#f4f1ea] flex items-center justify-center select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-[#1a1a1a] tracking-tighter tabular-nums"
          >
            {String(progress).padStart(3, "0")}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ============================================================
   KOMPONEN KECIL
============================================================ */

function SectionLabel({ dark = false }: { dark?: boolean }) {
  const today = new Date()
    .toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" })
    .toUpperCase();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex justify-between items-start text-xs md:text-sm font-medium tracking-wider uppercase select-none ${
        dark ? "text-neutral-400" : "text-neutral-600"
      }`}
    >
      <span>{profile.roles}</span>
      <span>{today}</span>
    </motion.div>
  );
}

function ArrowUpRight() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-300 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-1.5"
    >
      <path
        d="M5 15L15 5M15 5H7.5M15 5V12.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ============================================================
   HERO
============================================================ */

function Hero() {
  const today = new Date()
    .toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" })
    .toUpperCase();

  return (
    <section className="relative w-full min-h-screen bg-white flex flex-col justify-between">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-8 px-8 md:pt-12 md:px-12 lg:pt-16 lg:px-16 z-10 flex flex-col items-start"
      >
        <div className="w-8 h-8 mb-4">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <circle cx="12" cy="12" r="10" />
            <ellipse cx="12" cy="12" rx="10" ry="4" />
            <line x1="12" y1="2" x2="12" y2="22" />
          </svg>
        </div>
        <p className="text-xs text-gray-500 mb-1">{today}</p>
        <h3 className="text-sm font-bold text-[#1a1a1a] mb-1">Web Developer — IoT — Visual Designer</h3>
        <p className="text-xs text-gray-600">By: {profile.name}</p>
      </motion.div>

      <div className="flex-1 flex items-center justify-center py-6 select-none overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[17vw] md:text-[20vw] lg:text-[25vw] font-black text-[#1a1a1a] leading-none tracking-tighter"
        >
          Portfolio
        </motion.h1>
      </div>

      <div className="px-8 md:px-12 lg:px-16 pb-8 md:pb-12 lg:pb-16 z-10 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-3"
          >
            <span className="text-xs text-gray-400">©</span>
            <span className="text-gray-400">/</span>
            <span className="text-xs md:text-sm font-medium text-[#1a1a1a]">Engineer — Illustrator</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-6 md:gap-8 text-left w-full md:w-auto"
          >
            <div>
              <p className="text-xs text-gray-500 mb-1">Email</p>
              <a href={`mailto:${socials.email}`} className="hover:text-[#831514] transition-colors text-sm">
                {socials.email}
              </a>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">GitHub</p>
              <a href={socials.github} target="_blank" className="hover:text-[#831514] transition-colors text-sm">
                Finnn-45
              </a>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Location</p>
              <span className="text-sm">Bogor, Indonesia</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ABOUT
============================================================ */

function About() {
  return (
    <section id="about" className="relative w-full min-h-screen bg-white py-16 md:py-24 px-8 md:px-16 lg:px-24">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#f4f1ea] flex flex-col items-center justify-center border border-neutral-100">
              <span className="text-[10rem] md:text-[14rem] font-black text-[#831514]/15 leading-none select-none">
                AD
              </span>
              <span className="absolute bottom-6 left-6 font-mono text-[11px] uppercase tracking-widest text-neutral-500">
                Arfin Desca Alzachri
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 lg:pt-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#1a1a1a] leading-[0.95] mb-2 tracking-tight">
              Hello!
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal text-[#1a1a1a] leading-[0.95] mb-8 tracking-tight">
              I&apos;m {profile.name}
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed max-w-2xl">
              Siswa SMK yang suka banget bikin web, utak-atik IoT, dan desain visual.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl">
              Buat aku, ngoding itu bukan cuma soal kode — itu cara nyelesaiin masalah beneran. Sekarang lagi gas nyari
              pengalaman lewat magang digital, soalnya skill itu tumbuhnya dari praktik, bukan cuma teori.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full pt-12 border-t border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-xs text-gray-500 mb-1">Email</p>
              <a href={`mailto:${socials.email}`} className="hover:text-[#831514] transition-colors">
                {socials.email}
              </a>
            </div>
            <div className="md:text-center text-left">
              <p className="text-xs text-gray-500 mb-1">LinkedIn</p>
              <a href={socials.linkedin} target="_blank" className="hover:text-[#831514] transition-colors">
                Arfin Desca Alzachri
              </a>
            </div>
            <div className="md:text-right text-left">
              <p className="text-xs text-gray-500 mb-1">Location</p>
              <span>Bogor, Indonesia</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   SERVICES — What I do?
============================================================ */

function Services() {
  return (
    <section
      id="services"
      className="relative w-full min-h-screen bg-white px-8 md:px-16 lg:px-24 py-16 md:py-24 flex flex-col justify-between"
    >
      <div className="w-full flex flex-col gap-4 mb-12 md:mb-16">
        <SectionLabel />
      </div>

      <div className="w-full mb-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-[#1a1a1a] leading-[0.95] tracking-tight mb-8"
        >
          What I do?
          <br />
          (and love doing)
        </motion.h2>
      </div>

      <div className="w-full mb-16 md:mb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl"
        >
          Aku gabungin web development, IoT, dan desain grafis. Fokusnya simple: kode yang bersih, perangkat yang jalan,
          dan visual yang nendang.
        </motion.p>
      </div>

      <div className="w-full flex flex-col gap-y-8 md:gap-y-14 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-8 w-full flex-wrap"
        >
          {serviceRow1.map((s) => (
            <p key={s} className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a] text-center whitespace-normal lg:whitespace-nowrap">
              {s}
            </p>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-center md:justify-around items-center gap-6 md:gap-8 w-full flex-wrap"
        >
          {serviceRow2.map((s) => (
            <p key={s} className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a] text-center whitespace-normal lg:whitespace-nowrap">
              {s}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   TOOLS — marquee chip 2 baris, pelan, pause on hover
============================================================ */

function ToolChip({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="group flex items-center gap-3 shrink-0 px-6 py-3 rounded-full border border-neutral-200 bg-white hover:border-[#831514]/40 transition-colors duration-300">
      <span className="text-[#831514] text-base leading-none">{icon}</span>
      <span className="font-mono text-xs md:text-sm font-semibold uppercase tracking-widest text-[#1a1a1a] whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

function Tools() {
  const firstRow = tools.slice(0, 6);
  const secondRow = tools.slice(6);

  return (
    <section
      id="tools"
      className="relative w-full min-h-screen bg-white px-8 md:px-16 lg:px-24 py-16 md:py-24 flex flex-col justify-between overflow-hidden"
    >
      <div className="w-full flex flex-col gap-4 mb-12 md:mb-16">
        <SectionLabel />
      </div>

      <div className="w-full mb-16 md:mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-[#1a1a1a] leading-[0.95] tracking-tight mb-8"
        >
          Tools I&apos;m
          <br />
          fluent in.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl"
        >
          Dari ngoding sampai desain — ini senjata andalan yang kepake tiap hari buat bikin produk digital dari nol
          sampai jadi.
        </motion.p>
      </div>

      <div className="w-full flex flex-col gap-6 mb-16">
        {[firstRow, secondRow].map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 + rowIndex * 0.15 }}
            className="group w-full flex overflow-hidden"
          >
            <div
              className={`flex gap-4 pr-4 group-hover:[animation-play-state:paused] ${
                rowIndex % 2 === 0 ? "animate-marquee-left" : "animate-marquee-right"
              }`}
            >
              {[...row, ...row, ...row, ...row].map((t, i) => (
                <ToolChip key={`${t.name}-${i}`} name={t.name} icon={t.icon} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   INSIDE — What you will find inside?
============================================================ */

function Inside() {
  return (
    <section
      id="inside"
      className="relative w-full min-h-screen bg-white px-8 md:px-16 lg:px-24 py-16 md:py-24 flex flex-col"
    >
      <div className="w-full flex flex-col gap-4 mb-12 md:mb-16">
        <SectionLabel />
      </div>

      <div className="w-full mb-16 md:mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.88] text-[#1a1a1a] uppercase mb-8"
        >
          What you will
          <br />
          find inside?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl"
        >
          Scroll terus — semua proyek, perangkat, dan pencapaian ada di bawah. Tersusun rapi biar gampang disimak.
        </motion.p>
      </div>

      <div className="w-full flex flex-col">
        {insideList.map((item, i) => (
          <motion.div
            key={item.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group flex items-center justify-between py-5 md:py-6 text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-[#1a1a1a] transition-all duration-300 hover:text-[#831514] hover:pl-2 border-b-2 border-[#1a1a1a]"
          >
            <span>{item.title}</span>
            <span className="flex items-center gap-4 md:gap-8">
              <span className="font-mono text-xs md:text-sm text-neutral-400 font-medium">{item.num}</span>
              <span className="inline-block opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <ArrowUpRight />
              </span>
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   BLACK COVER — section hitam dengan kata raksasa
============================================================ */

function BlackCover() {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.88] text-white text-center uppercase select-none px-6"
      >
        Web Development.
        <br />
        IoT Engineering.
        <br />
        Visual Design.
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-10 md:mt-14 text-[#f4f1ea]/60 text-4xl md:text-6xl"
      >
        ↓
      </motion.div>
    </section>
  );
}

/* ============================================================
   WORKS — list karya + modal case study
============================================================ */

function Works() {
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null);

  return (
    <section id="works" className="relative w-full bg-white px-8 md:px-16 lg:px-24 py-16 md:py-24">
      <div className="w-full flex flex-col gap-4 mb-12 md:mb-16">
        <SectionLabel />
      </div>

      <div className="w-full mb-16 md:mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.88] text-[#1a1a1a] uppercase mb-8"
        >
          Designing Digital
          <br />
          Experiences.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl"
        >
          Klik salah satu karya buat buka case study-nya — dari tantangan, proses, sampai hasilnya.
        </motion.p>
      </div>

      <div className="w-full flex flex-col">
        {caseStudies.map((work, i) => (
          <motion.button
            key={work.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            onClick={() => setActiveCase(work)}
            className="group flex items-center justify-between gap-6 py-6 md:py-8 text-left border-b-2 border-[#1a1a1a] transition-all duration-300 hover:pl-2"
          >
            <div className="flex items-baseline gap-4 md:gap-8 min-w-0">
              <span className="font-mono text-xs md:text-sm text-neutral-400 font-medium shrink-0">
                /{work.id}
              </span>
              <div className="min-w-0">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] uppercase tracking-tight leading-tight transition-colors duration-300 group-hover:text-[#831514]">
                  {work.title}
                </h3>
                <p className="mt-1 text-xs md:text-sm text-neutral-500 font-mono uppercase tracking-wider">
                  {work.category} — {work.year}
                </p>
              </div>
            </div>
            <span className="shrink-0 text-[#1a1a1a] transition-all duration-300 group-hover:text-[#831514] group-hover:scale-110">
              <ArrowUpRight />
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeCase && <CaseStudyModal caseStudy={activeCase} onClose={() => setActiveCase(null)} />}
      </AnimatePresence>
    </section>
  );
}

/* ============================================================
   CASE STUDY MODAL
============================================================ */

function CaseStudyModal({ caseStudy, onClose }: { caseStudy: CaseStudy; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const sections = [
    { label: "01 / Overview", body: caseStudy.overview },
    { label: "02 / Challenge", body: caseStudy.challenge },
    { label: "03 / Process", body: caseStudy.process },
    { label: "04 / Solution", body: caseStudy.solution },
    { label: "05 / Result", body: caseStudy.result },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[9998] bg-[#f4f1ea] overflow-y-auto"
    >
      <div className="sticky top-0 z-10 bg-[#f4f1ea] border-b border-neutral-200 px-8 md:px-16 py-5 flex items-center justify-between">
        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-neutral-500">
          {caseStudy.category}
        </span>
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 font-mono text-xs md:text-sm font-semibold uppercase tracking-widest text-[#1a1a1a] hover:text-[#831514] transition-colors"
        >
          Close [Esc] <span className="text-lg leading-none">×</span>
        </button>
      </div>

      <div className="px-8 md:px-16 lg:px-24 py-12 md:py-20 max-w-[1400px]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] text-[#831514] font-semibold mb-4"
        >
          {caseStudy.year} — {caseStudy.subtitle}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.88] text-[#1a1a1a] uppercase mb-8"
        >
          {caseStudy.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mb-10"
        >
          {caseStudy.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-2 mb-16"
        >
          {caseStudy.tools.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] uppercase tracking-wider text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded border border-neutral-200"
            >
              {t}
            </span>
          ))}
        </motion.div>

        <div className="flex flex-col gap-16 md:gap-20">
          {sections.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10"
            >
              <h3 className="md:col-span-4 font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-neutral-500 font-semibold">
                {s.label}
              </h3>
              <p className="md:col-span-8 text-base md:text-lg text-[#1a1a1a] leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-neutral-200">
          <button
            onClick={onClose}
            className="group inline-flex items-center gap-2 font-mono text-xs md:text-sm font-semibold uppercase tracking-widest text-[#1a1a1a] hover:text-[#831514] transition-colors"
          >
            ← Back to Portfolio
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ============================================================
   CONTACT + FOOTER
============================================================ */

function Contact() {
  const links = [
    { label: "GITHUB", href: socials.github, external: true },
    { label: "GMAIL", href: `mailto:${socials.email}`, external: false },
    { label: "LINKEDIN", href: socials.linkedin, external: true },
    { label: "DOWNLOAD CV", href: "/cv.pdf", external: true },
  ];

  return (
    <section id="contact" className="relative w-full bg-white px-8 md:px-16 lg:px-24 py-16 md:py-24">
      <div className="w-full flex flex-col gap-4 mb-12 md:mb-16">
        <SectionLabel />
      </div>

      <div className="w-full mb-16 md:mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] text-[#1a1a1a] uppercase mb-8"
        >
          Let&apos;s Collaborate.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl"
        >
          Punya ide, proyek, atau sekadar mau ngobrol? Feel free to reach out — yang penting jangan sungkan.
        </motion.p>
      </div>

      <div className="w-full flex flex-col">
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="group flex items-center justify-between py-5 md:py-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] uppercase tracking-tight transition-all duration-300 hover:text-[#831514] hover:pl-2 border-b-2 border-[#1a1a1a]"
          >
            {link.label}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5">
              <ArrowUpRight />
            </span>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full pt-8 mt-20 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs md:text-sm font-medium tracking-wider uppercase text-neutral-500"
      >
        <span>© 2026 {profile.name.toUpperCase()}</span>
        <span>Thank you for scrolling all the way down.</span>
      </motion.div>
    </section>
  );
}

/* ============================================================
   PAGE
============================================================ */

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grain-overlay min-h-screen bg-white relative z-0">
      <Loader isLoading={isLoading} />
      <CustomCursor />
      <Hero />
      <About />
      <Services />
      <Tools />
      <Inside />
      <BlackCover />
      <Works />
      <Contact />
    </div>
  );
}
