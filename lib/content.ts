import type { Bi } from "./i18n";

/* ============================================================
   SEMUA TEKS SITUS — bilingual (id / en).
   Nada: profesional, menjual, apa adanya. Tanpa lebay.
============================================================ */

const b = (id: string, en: string): Bi => ({ id, en });

export type CaseStudyContent = {
  id: string;
  title: Bi;
  subtitle: Bi;
  category: Bi;
  year: string;
  tools: string[];
  repo?: string;
  description: Bi;
  overview: Bi;
  challenge: Bi;
  process: Bi;
  solution: Bi;
  result: Bi;
};

export const C = {
  loader: {
    roles: [
      b("PENGEMBANG WEB", "WEB DEVELOPER"),
      b("ENGINEER IOT", "IOT ENGINEER"),
      b("DESAINER VISUAL", "VISUAL DESIGNER"),
    ],
  },

  hero: {
    kicker: b("web · iot · desain", "web · iot · design"),
    title: b("Portofolio", "Portfolio"),
    chip: b("terbuka untuk magang", "open for internship"),
    location: b("Bogor, ID", "Bogor, ID"),
    scroll: b("gulir", "scroll"),
    email: b("Email", "Email"),
    github: b("GitHub", "GitHub"),
  },

  ticker: {
    items: [
      b("Terbuka untuk Magang Digital", "Open for Digital Internship"),
      b("Dipakai 1.000+ Pengguna", "Serving 1.000+ Users"),
      b("Bogor, Indonesia", "Bogor, Indonesia"),
      b("SMK TI BAZMA", "SMK TI BAZMA"),
      b("Web · IoT · Desain", "Web · IoT · Design"),
      b("Next.js · Arduino · Figma", "Next.js · Arduino · Figma"),
    ],
  },

  about: {
    label: b("Tentang Saya", "About Me"),
    hello: b("Halo!", "Hello!"),
    namePrefix: b("Saya", "I'm"),
    p1: b(
      "Siswa SMK TI BAZMA dengan fokus pengembangan web, IoT, dan desain visual.",
      "Vocational high school student at SMK TI BAZMA, focused on web development, IoT, and visual design."
    ),
    p2: b(
      "Saya membangun produk dari nol: merancang antarmuka, menulis front-end, sampai menyambungkannya ke perangkat. Pendekatannya sederhana — kode rapi, perangkat yang benar-benar bekerja, dan tampilan yang enak dipakai. Saat ini saya mencari pengalaman magang digital untuk mengasah cara kerja profesional.",
      "I build products end to end: designing interfaces, writing the front-end, and connecting it to hardware. The approach is simple — clean code, hardware that actually works, and interfaces that feel right. I am currently looking for a digital internship to sharpen how I work in a professional team."
    ),
    emailLabel: b("Email", "Email"),
    linkedinLabel: b("LinkedIn", "LinkedIn"),
    locationLabel: b("Lokasi", "Location"),
    fullscreen: b("Lihat ID card selayar", "View ID card fullscreen"),
    fullscreenShort: b("Selayar", "Fullscreen"),
  },

  services: {
    titleLines: [b("Yang saya", "What I do?"), b("kerjakan.", "(and love doing)")],
    lede: b(
      "Saya menggabungkan pengembangan web, IoT, dan desain grafis dalam satu alur kerja. Fokusnya sederhana: kode yang bersih, perangkat yang berjalan stabil, dan visual yang kuat.",
      "I combine web development, IoT, and graphic design in one workflow. The focus is simple: clean code, hardware that runs reliably, and visuals with impact."
    ),
    row1: [
      b("Pengembangan Web", "Web Development"),
      b("Rekayasa IoT", "IoT Engineering"),
      b("Desain UI/UX", "UI/UX Design"),
    ],
    row2: [
      b("Ilustrasi Grafis", "Graphic Illustration"),
      b("Arduino & ESP32", "Arduino & ESP32"),
      b("Desain Visual", "Visual Design"),
    ],
    cards: [
      {
        title: b("Pengembangan Web", "Web Development"),
        desc: b(
          "Next.js, Laravel, dan TypeScript untuk situs dan aplikasi yang cepat, rapi, dan mudah dirawat.",
          "Next.js, Laravel, and TypeScript for sites and apps that are fast, clean, and maintainable."
        ),
      },
      {
        title: b("Rekayasa IoT", "IoT Engineering"),
        desc: b(
          "Perangkat yang benar-benar bekerja — dari sensor dan mikrokontroler sampai dashboard pemantauan.",
          "Devices that actually work — from sensors and microcontrollers to monitoring dashboards."
        ),
      },
      {
        title: b("Desain UI/UX", "UI/UX Design"),
        desc: b(
          "Antarmuka yang jelas dan enak dipakai, dirancang dari alur pengguna, bukan tebakan.",
          "Interfaces that are clear and pleasant to use — designed from real user flows, not guesswork."
        ),
      },
      {
        title: b("Ilustrasi Grafis", "Graphic Illustration"),
        desc: b(
          "Ilustrasi dan aset visual untuk konten, kampanye, dan kebutuhan cetak.",
          "Illustration and visual assets for content, campaigns, and print."
        ),
      },
      {
        title: b("Arduino & ESP32", "Arduino & ESP32"),
        desc: b(
          "Pemrograman embedded dengan C++ — kendali motor, sensor, dan komunikasi nirkabel.",
          "Embedded programming in C++ — motor control, sensors, and wireless communication."
        ),
      },
      {
        title: b("Desain Visual", "Visual Design"),
        desc: b(
          "Identitas visual yang konsisten: tipografi, warna, dan komposisi yang punya karakter.",
          "Consistent visual identity: typography, color, and composition with character."
        ),
      },
    ],
  },

  tools: {
    titleLines: [b("Alat yang", "Tools I'm"), b("saya kuasai.", "fluent in.")],
    lede: b(
      "Dari menulis kode sampai menyusun desain — ini alat yang saya pakai sehari-hari untuk membangun produk digital dari nol sampai siap dipakai.",
      "From writing code to crafting design — these are the tools I use daily to build digital products from scratch to shipped."
    ),
  },

  inside: {
    titleLines: [b("Apa saja yang", "What you will"), b("ada di dalam?", "find inside?")],
    lede: b(
      "Terus gulir — seluruh proyek, perangkat, dan pencapaian tersusun rapi di bawah ini.",
      "Keep scrolling — every project, device, and achievement is laid out neatly below."
    ),
    list: [
      b("PENGEMBANGAN WEB", "WEB DEVELOPMENT"),
      b("PROYEK IOT", "IOT PROJECTS"),
      b("KARYA DESAIN", "DESIGN WORKS"),
      b("PENCAPAIAN", "ACHIEVEMENTS"),
    ],
    cards: [
      {
        num: "01",
        title: b("Pengembangan Web", "Web Development"),
        desc: b(
          "Studi kasus lengkap: SPMB, sistem manajemen hotel, dan proyek web lainnya.",
          "Full case studies: SPMB, a hotel management system, and more web projects."
        ),
      },
      {
        num: "02",
        title: b("Proyek IoT", "IoT Projects"),
        desc: b(
          "Absensi RFID, jam waktu sholat digital, dan mobil RC berbasis ESP32.",
          "RFID attendance, a digital prayer clock, and an ESP32 RC car."
        ),
      },
      {
        num: "03",
        title: b("Karya Desain", "Design Works"),
        desc: b(
          "Ilustrasi, materi kampanye, dan konten sosial media untuk event nasional.",
          "Illustration, campaign material, and social content for national events."
        ),
      },
      {
        num: "04",
        title: b("Pencapaian", "Achievements"),
        desc: b(
          "Sertifikasi dan program: Samsung Innovation Campus dan ASEAN DSE.",
          "Certifications and programmes: Samsung Innovation Campus and ASEAN DSE."
        ),
      },
    ],
  },

  cover: {
    cornerLeft: b("Portfolio", "Portfolio"),
    cornerYear: b("2025—2026", "2025—2026"),
    cornerLocation: b("Bogor, ID", "Bogor, ID"),
    cornerSchool: b("SMK TI BAZMA", "SMK TI BAZMA"),
    headline: [
      b("Pengembangan Web.", "Web Development."),
      b("Rekayasa IoT.", "IoT Engineering."),
      b("Desain Visual.", "Visual Design."),
    ],
    tags: [b("Web Dev", "Web Dev"), b("IoT", "IoT"), b("Desain", "Design")],
  },

  works: {
    titleLines: [b("Merancang Pengalaman", "Designing Digital"), b("Digital.", "Experiences.")],
    lede: b(
      "Klik salah satu karya untuk membuka studi kasusnya — mulai dari tantangan, proses pengerjaan, sampai hasil yang dicapai.",
      "Click any work to open its case study — from the challenge and the process to the outcome it delivered."
    ),
    githubKicker: b("github.com/Finnn-45 — open source", "github.com/Finnn-45 — open source"),
    githubTitle: b("Proyek Open Source.", "Open Source Projects."),
    githubCta: b("Lihat semua di GitHub", "See all on GitHub"),
    githubNote: b(
      "Repo publik dari github.com/Finnn-45 — klik kartu untuk membuka kode sumbernya.",
      "Public repositories from github.com/Finnn-45 — click a card to open its source."
    ),
  },

  modal: {
    sections: [
      b("01 / Ringkasan", "01 / Overview"),
      b("02 / Tantangan", "02 / Challenge"),
      b("03 / Proses", "03 / Process"),
      b("04 / Solusi", "04 / Solution"),
      b("05 / Hasil", "05 / Result"),
    ],
    close: b("Tutup [Esc]", "Close [Esc]"),
    closeShort: b("Tutup", "Close"),
    repoLink: b("Lihat kode sumber di GitHub", "View source on GitHub"),
    back: b("← Kembali ke Portofolio", "← Back to Portfolio"),
  },

  contact: {
    titleLines: [b("Mari", "Let's"), b("Berkolaborasi.", "Collaborate.")],
    lede: b(
      "Punya ide, proyek, atau sekadar ingin berdiskusi? Jangan ragu menghubungi saya — saya terbuka untuk magang, kolaborasi, maupun proyek lepas.",
      "Got an idea, a project, or just want to talk? Feel free to reach out — I am open to internships, collaborations, and freelance work."
    ),
    links: [
      b("GITHUB", "GITHUB"),
      b("GMAIL", "GMAIL"),
      b("LINKEDIN", "LINKEDIN"),
      b("INSTAGRAM", "INSTAGRAM"),
      b("CV / RESUME", "CV / RESUME"),
    ],
    footerLeft: b("© 2026 ARFIN DESCA ALZACHRI", "© 2026 ARFIN DESCA ALZACHRI"),
    footerRight: b(
      "Terima kasih sudah menggulir sampai bawah.",
      "Thank you for scrolling all the way down."
    ),
  },

  cv: {
    back: b("← kembali ke situs", "← back to site"),
    savePdf: b("Simpan sebagai PDF", "Save as PDF"),
    label: b("portfolio — 2026", "portfolio — 2026"),
    education: b("pendidikan", "education"),
    experience: b("pengalaman", "experience"),
    professional: b("pengalaman profesional — kolaborasi MENTION", "professional experience — MENTION collaborations"),
    skills: b("keahlian teknis", "technical skills"),
    achievements: b("pencapaian & sertifikasi", "achievement & certification"),
    works: b("karya terpilih", "selected works"),
    present: b("Sekarang", "Now"),
    repo: b("kode sumber — github.com/Finnn-45", "source code — github.com/Finnn-45"),
    footerLeft: b("[arfin desca alzachri] — [portfolio]", "[arfin desca alzachri] — [portfolio]"),
    footerRight: b("[2026]", "[2026]"),
  },

  track: {
    all: b("Semua", "All"),
    web: b("Web", "Web"),
    design: b("Desain", "Design"),
  },

  design: {
    kicker: b("Porto Desain", "Design Portfolio"),
    titleLines: [b("Desain yang", "Design that"), b("Bicara.", "Speaks.")],
    lede: b(
      "Kolaborasi desain dan produksi konten visual — dari branding media sosial sekolah sampai materi kampanye event nasional.",
      "Design collaborations and visual content production — from school social-media branding to national event campaign material."
    ),
    collab: b("Kolaborasi Desain", "Design Collaborations"),
    achievements: b("Pencapaian & Sertifikasi", "Achievements & Certifications"),
  },

  github: {
    featured: b("unggulan", "featured"),
    code: b("kode", "code"),
    live: b("demo", "live"),
  },
} as const;

/* ============================================================
   CASE STUDIES — versi bilingual, dipakai Works & modal.
   Nada: jelas, menjual, tanpa lebay.
============================================================ */

export const caseStudies: CaseStudyContent[] = [
  {
    id: "01",
    title: b("SPMB", "SPMB"),
    subtitle: b("Sistem Penerimaan Murid Baru", "Student Admission System"),
    category: b("PENGEMBANGAN WEB", "WEB DEVELOPMENT"),
    year: "2025",
    tools: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui", "WhatsApp API"],
    repo: "https://github.com/Finnn-45/front-end-ppdb",
    description: b(
      "Front-end platform penerimaan murid baru SMK TI BAZMA — dipakai lebih dari 1.000 pendaftar dengan alur pendaftaran bertahap dan notifikasi WhatsApp otomatis.",
      "The front-end of SMK TI BAZMA's admission platform — used by 1,000+ applicants, with a guided multi-step flow and automatic WhatsApp notifications."
    ),
    overview: b(
      "Sistem pendaftaran online terpadu yang menemani calon siswa dari registrasi, unggah berkas, verifikasi data, sampai pemantauan status seleksi secara real-time. Saya menangani front-end-nya — dari desain antarmuka sampai implementasi.",
      "An end-to-end admission platform that guides applicants through registration, document upload, data verification, and real-time selection status. I owned the front-end — from interface design to implementation."
    ),
    challenge: b(
      "Banyaknya tahapan administrasi dan formulir yang panjang membuat pengguna baru mudah bingung — drop-off naik dan kesalahan pengisian data jadi masalah utama.",
      "Long administrative steps and lengthy forms confused first-time users — driving up drop-off rates and data-entry mistakes."
    ),
    process: b(
      "Menganalisis alur pendaftaran lama → memetakan user flow multi-step → merancang komponen UI yang konsisten → implementasi dengan Next.js dan validasi ketat di tiap langkah → usability testing bersama calon pengguna.",
      "Analysed the old flow → mapped a multi-step user journey → designed consistent UI components → built it with Next.js and strict per-step validation → ran usability tests with real applicants."
    ),
    solution: b(
      "Formulir dipecah menjadi multi-step dengan validasi otomatis, progres pendaftaran terlihat jelas di tiap langkah, dan notifikasi WhatsApp terkirim otomatis di tiap milestone — pendaftar tidak perlu menebak statusnya.",
      "The form became a multi-step flow with automatic validation, visible progress at every stage, and WhatsApp notifications sent automatically at each milestone — applicants never have to guess their status."
    ),
    result: b(
      "Dipakai 1.000+ pendaftar selama periode PPDB. Prosesnya jauh lebih mudah diikuti, kesalahan input turun drastis, dan tim PPDB terbantu besar oleh notifikasi otomatisnya.",
      "Used by 1,000+ applicants during the admission period. The flow became far easier to follow, input errors dropped sharply, and the admissions team relied heavily on the automatic notifications."
    ),
  },
  {
    id: "02",
    title: b("Absensi via RFID", "Attendance via RFID"),
    subtitle: b("Sistem Absensi Kartu RFID", "RFID Card Attendance System"),
    category: b("REKAYASA IOT", "IOT ENGINEERING"),
    year: "2025",
    tools: ["Arduino", "C++", "RFID RC522", "Embedded System"],
    description: b(
      "Sistem absensi siswa dengan kartu RFID dan Arduino — tempel kartu, kehadiran langsung tercatat otomatis tanpa proses manual.",
      "A student attendance system built on RFID cards and Arduino — tap the card and attendance is logged instantly, no manual entry."
    ),
    overview: b(
      "Perangkat absensi otomatis berbasis kartu RFID: siswa menempelkan kartu ke reader dan kehadirannya langsung tersimpan ke sistem — tanpa panggilan manual sama sekali.",
      "An automatic attendance device based on RFID cards: students tap their card on the reader and their attendance is stored straight into the system — no roll call at all."
    ),
    challenge: b(
      "Absensi manual memakan waktu, rawan salah catat, dan sulit direkap — terlebih untuk kelas dengan jumlah siswa yang besar.",
      "Manual attendance is slow, error-prone, and hard to recap — especially for large classes."
    ),
    process: b(
      "Riset hardware reader → perakitan modul Arduino + RC522 → pemrograman pembacaan UID kartu di C++ → sinkronisasi data kehadiran ke sistem → uji akurasi dan kecepatan baca.",
      "Researched reader hardware → assembled the Arduino + RC522 module → programmed card UID reading in C++ → synced attendance data to the system → tested accuracy and read speed."
    ),
    solution: b(
      "Setiap kartu dipetakan ke data siswa, pembacaan UID divalidasi anti-duplikat dalam sesi yang sama, dan hasilnya tersimpan terstruktur supaya mudah direkap kapan saja.",
      "Each card maps to a student record, UID reads are de-duplicated per session, and results are stored in a structured format that is easy to recap anytime."
    ),
    result: b(
      "Absensi yang tadinya berhitung menit per kelas menjadi hitungan detik per siswa — data lebih akurat dan rekapnya otomatis.",
      "Attendance that took minutes per class now takes seconds per student — with more accurate data and automatic recaps."
    ),
  },
  {
    id: "03",
    title: b("Jam Digital JWS", "JWS Digital Clock"),
    subtitle: b("Jam Waktu Sholat", "Prayer Time Clock"),
    category: b("REKAYASA IOT", "IOT ENGINEERING"),
    year: "2025",
    tools: ["Mikrokontroler", "LED Display", "Real-time Data"],
    description: b(
      "Jam waktu sholat digital yang tersambung ke jadwal real-time — LED display dan mikrokontroler, akurat tanpa perlu diatur ulang.",
      "A digital prayer-time clock connected to real-time schedules — LED display and microcontroller, accurate without manual resets."
    ),
    overview: b(
      "Perangkat jam waktu sholat berbasis mikrokontroler dengan LED display yang menampilkan jadwal secara real-time — dirancang agar waktunya selalu akurat tanpa diatur manual.",
      "A microcontroller-based prayer-time clock whose LED display pulls the schedule in real time — designed to stay accurate without manual adjustment."
    ),
    challenge: b(
      "Jam waktu sholat konvensional harus diatur manual dan sering telat mengikuti pergeseran jadwal — repot dan mudah salah.",
      "Conventional prayer clocks need manual setting and lag behind schedule changes — tedious and error-prone."
    ),
    process: b(
      "Perancangan rangkaian mikrokontroler + LED display → integrasi data jadwal real-time → pemrograman logika tampilan dan alarm → kalibrasi dan uji akurasi harian.",
      "Designed the microcontroller + LED display circuit → integrated real-time schedule data → programmed display and alarm logic → calibrated and tested accuracy daily."
    ),
    solution: b(
      "Perangkat menarik data jadwal secara real-time, menampilkannya dalam format yang mudah dibaca, dan menyesuaikan perubahan jadwal secara otomatis.",
      "The device pulls schedule data in real time, renders it in a glanceable format, and adjusts to schedule changes automatically."
    ),
    result: b(
      "Jam yang selalu akurat tanpa pernah perlu diatur ulang — dan benar-benar dipakai sehari-hari.",
      "A clock that stays accurate and never needs resetting — and is genuinely used every day."
    ),
  },
  {
    id: "04",
    title: b("Mobil RC ESP32", "RC Car ESP32"),
    subtitle: b("Kendali Nirkabel", "Wireless Control Car"),
    category: b("REKAYASA IOT", "IOT ENGINEERING"),
    year: "2025",
    tools: ["ESP32", "IoT", "Motor Control", "Wireless"],
    description: b(
      "Mobil RC berbasis ESP32 yang dikendalikan nirkabel dari ponsel — gabungan komunikasi IoT, kontrol motor, dan elektronik.",
      "An ESP32-based RC car controlled wirelessly from a phone — combining IoT communication, motor control, and electronics."
    ),
    overview: b(
      "Mobil RC berbasis ESP32 yang dikendalikan lewat perangkat mobile — komunikasi nirkabel, kontrol motor presisi, dan rangkaian hemat daya dalam satu proyek.",
      "An ESP32 RC car driven from a mobile device — wireless communication, precise motor control, and a power-efficient circuit in one build."
    ),
    challenge: b(
      "Membangun kendali yang responsif dan stabil lewat koneksi nirkabel, sekaligus mengatur kecepatan dan arah motor secara presisi dengan daya terbatas.",
      "Building control that stays responsive over a wireless link while managing speed and steering precisely on limited power."
    ),
    process: b(
      "Perakitan chassis + motor driver → pemrograman ESP32 untuk menerima perintah → pembuatan antarmuka kontrol di ponsel → kalibrasi respons motor dan kestabilan koneksi → uji lapangan.",
      "Assembled the chassis + motor driver → programmed the ESP32 command handler → built the phone control interface → calibrated motor response and connection stability → field-tested."
    ),
    solution: b(
      "Komunikasi nirkabel low-latency antara ponsel dan ESP32, kontrol arah dan kecepatan yang dihaluskan lewat pengaturan PWM, dan rangkaian yang ringkas serta hemat daya.",
      "Low-latency wireless communication between phone and ESP32, smooth steering and throttle through PWM tuning, and a compact power-efficient circuit."
    ),
    result: b(
      "Mobil RC yang responsif dan stabil dikendalikan jarak jauh — sekaligus proyek yang paling banyak mengajarkan soal integrasi hardware, software, dan troubleshooting.",
      "A responsive, stable RC car controlled from a distance — and the project that taught me the most about hardware-software integration and troubleshooting."
    ),
  },
];