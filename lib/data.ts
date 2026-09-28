import type { Bi } from "./i18n";
import type { Discipline } from "./mosaic";

/* ============================================================
   DATA PORTFOLIO — bilingual (id / en).
   Sumber tunggal untuk situs utama & halaman CV.
============================================================ */

const b = (id: string, en: string): Bi => ({ id, en });

export const profile = {
  name: "Arfin Desca Alzachri",
  roles: b("ENGINEER — ILLUSTRATOR", "ENGINEER — ILLUSTRATOR"),
  tagline: b(
    "Siswa SMK TI BAZMA yang membangun produk web dan perangkat IoT, dengan desain visual sebagai bahasa kedua. Saat ini mencari pengalaman magang digital untuk mengasah cara kerja profesional.",
    "A student at SMK TI BAZMA who builds web products and IoT devices, with visual design as a second language. Currently looking for a digital internship to sharpen how I work in a professional team."
  ),
};

export const socials = {
  instagram: "https://www.instagram.com/zakriii___/",
  github: "https://github.com/Finnn-45",
  linkedin: "https://www.linkedin.com/in/arfin-desca-alzachri-2704b5323",
  email: "arfinsmktibazma@gmail.com",
  cv: "/cv.pdf",
};

export const location = b("Bogor, Indonesia", "Bogor, Indonesia");

export const stats = [
  {
    value: "1.000+",
    label: b(
      "pendaftar memakai platform penerimaan siswa yang front-end-nya saya bangun",
      "applicants used the admission platform whose front-end I built"
    ),
  },
  {
    value: "4",
    label: b(
      "proyek web & IoT yang sudah berjalan — dari formulir siswa sampai mobil RC",
      "web & IoT projects shipped — from a student admission form to an RC car"
    ),
  },
  {
    value: "3",
    label: b(
      "bidang dalam satu orang: Development, Engineering, dan Design",
      "disciplines in one: Development, Engineering, and Design"
    ),
  },
  {
    value: "2",
    label: b(
      "program data science: Samsung Innovation Campus dan ASEAN DSE",
      "data science programs: Samsung Innovation Campus and ASEAN DSE"
    ),
  },
];

/* Karya terpilih — dipakai halaman CV (mengikuti CV resmi) */
export const works = [
  {
    id: "01",
    title: b("SPMB — Sistem Penerimaan Murid Baru", "SPMB — Student Admission System"),
    desc: b(
      "Front-end platform penerimaan murid baru yang dipakai lebih dari 1.000 pendaftar. Alurnya dibuat bertahap dengan validasi otomatis dan notifikasi WhatsApp.",
      "The front-end of a student admission platform used by more than 1,000 applicants, with a step-by-step flow, automatic validation, and WhatsApp notifications."
    ),
    role: b("Front-end Developer", "Front-end Developer"),
    tags: ["Next.js", "WhatsApp Integration"],
    badge: "2025",
    link: "https://spmb.smktibazma.sch.id/",
    repo: "https://github.com/Finnn-45/front-end-ppdb",
  },
  {
    id: "02",
    title: b("Absensi Kartu RFID", "Attendance via RFID Card"),
    desc: b(
      "Absensi siswa memakai kartu RFID dan Arduino: kartu ditempelkan, kehadiran langsung tercatat otomatis ke sistem tanpa proses manual.",
      "Student attendance using RFID cards and Arduino: tap the card and the record is logged automatically — no manual entry."
    ),
    role: b("IoT Engineer", "IoT Engineer"),
    tags: ["C++", "Arduino", "RFID"],
    badge: "2025",
    repo: "",
  },
  {
    id: "03",
    title: b("JWS Digital Clock (Jam Waktu Sholat)", "JWS Digital Clock (Prayer Time Clock)"),
    desc: b(
      "Jam waktu sholat digital yang terhubung ke jadwal real-time — LED display dan mikrokontroler, akurat tanpa perlu diatur ulang.",
      "A digital prayer time clock linked to a real-time schedule — LED display and microcontroller, accurate without manual resets."
    ),
    role: b("IoT Engineer", "IoT Engineer"),
    tags: ["Mikrokontroler", "LED Display"],
    badge: "2025",
    repo: "",
  },
  {
    id: "04",
    title: b("Mobil RC dengan ESP32", "RC Car with ESP32"),
    desc: b(
      "Mobil RC berbasis ESP32 yang dikendalikan nirkabel dari ponsel — menggabungkan komunikasi IoT dengan kontrol motor.",
      "An ESP32-based RC car controlled wirelessly from a phone — combining IoT communication with motor control."
    ),
    role: b("IoT Engineer", "IoT Engineer"),
    tags: ["ESP32", "IoT", "Motor Control"],
    badge: "2025",
    repo: "",
  },
];

export type GithubProject = {
  name: string;
  desc: Bi;
  lang: string;
  tags: string[];
  link: string;
  live?: string;
  year: string;
  featured: boolean;
};

/* Daftar repo PUBLIK github.com/Finnn-45.
   PENTING: jangan masukkan repo private di sini — repo yang di-private
   belakangan otomatis disembunyikan oleh pengaman di <GithubGrid />. */
export const githubProjects: GithubProject[] = [
  {
    name: "front-end-ppdb",
    desc: b(
      "Front-end penerimaan murid baru SMK TI BAZMA — alur bertahap plus notifikasi WhatsApp. Yang ini dipakai 1.000+ pendaftar.",
      "Front-end of SMK TI BAZMA's admission platform — a step-by-step flow with WhatsApp notifications, used by 1,000+ applicants."
    ),
    lang: "TypeScript",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://github.com/Finnn-45/front-end-ppdb",
    live: "https://spmb.smktibazma.sch.id/",
    year: "2025",
    featured: true,
  },
  {
    name: "ukk-hotel-management",
    desc: b(
      "Sistem manajemen hotel berbasis Laravel — pembayaran Midtrans, QR code, role permission (spatie), export PDF, dan deployment lewat Docker.",
      "A Laravel hotel management system — Midtrans payments, QR codes, role permissions (spatie), PDF export, and Docker deployment."
    ),
    lang: "Blade",
    tags: ["Laravel", "Midtrans", "Docker"],
    link: "https://github.com/Finnn-45/ukk-hotel-management",
    year: "2026",
    featured: true,
  },
  {
    name: "UPRAK-IoT",
    desc: b(
      "Smart Ecosystem Panel — dashboard pemantauan suhu & kelembapan real-time lewat MQTT, plus kendali lampu dari web. Laravel + Blade.",
      "Smart Ecosystem Panel — a real-time temperature & humidity dashboard over MQTT, plus web-based light control. Laravel + Blade."
    ),
    lang: "Blade",
    tags: ["Laravel", "MQTT", "IoT"],
    link: "https://github.com/Finnn-45/UPRAK-IoT",
    year: "2026",
    featured: true,
  },
  {
    name: "UKK",
    desc: b(
      "Proyek latihan uji kompetensi — Next.js dengan Prisma, Supabase, autentikasi NextAuth, dan state Zustand.",
      "A competency exam practice project — Next.js with Prisma, Supabase, NextAuth authentication, and Zustand state."
    ),
    lang: "TypeScript",
    tags: ["Next.js", "Prisma", "Supabase", "NextAuth"],
    link: "https://github.com/Finnn-45/UKK",
    year: "2026",
    featured: false,
  },
  {
    name: "task-manager-api_S2",
    desc: b(
      "REST API manajemen tugas — Express dan Mongoose (MongoDB), dengan routing yang dipisah per resource.",
      "A task management REST API — Express and Mongoose (MongoDB), with routing split per resource."
    ),
    lang: "JavaScript",
    tags: ["Express", "MongoDB", "REST API"],
    link: "https://github.com/Finnn-45/task-manager-api_S2",
    year: "2026",
    featured: false,
  },
  {
    name: "Todo-list-SIOT",
    desc: b(
      "Aplikasi todo list dengan modul IoT — Laravel full-stack memakai Blade.",
      "A todo list application with an IoT module — full-stack Laravel using Blade."
    ),
    lang: "PHP",
    tags: ["Laravel", "Blade"],
    link: "https://github.com/Finnn-45/Todo-list-SIOT",
    year: "2026",
    featured: false,
  },
  {
    name: "PRAKTIK-SAAS",
    desc: b(
      "Eksperimen landing page SaaS — komponen shadcn/ui, animasi Framer Motion, dan latar partikel tsParticles.",
      "A SaaS landing page experiment — shadcn/ui components, Framer Motion animation, and a tsParticles background."
    ),
    lang: "TypeScript",
    tags: ["Next.js", "shadcn/ui", "Framer Motion"],
    link: "https://github.com/Finnn-45/PRAKTIK-SAAS",
    year: "2025",
    featured: false,
  },
  {
    name: "portofolio",
    desc: b(
      "Kode sumber portofolio ini — Next.js App Router, TypeScript, dan Tailwind, ditulis tanpa pustaka animasi.",
      "The source of this portfolio — Next.js App Router, TypeScript, and Tailwind, written without an animation library."
    ),
    lang: "TypeScript",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://github.com/Finnn-45/portofolio",
    year: "2026",
    featured: false,
  },
];

export const fieldNotes = [
  b(
    "Development — HTML, CSS, JavaScript, Laravel, React.js, Next.js, C++",
    "Development — HTML, CSS, JavaScript, Laravel, React.js, Next.js, C++"
  ),
  b("Engineering — IoT Development, Arduino & ESP32", "Engineering — IoT Development, Arduino & ESP32"),
  b(
    "Design — Graphic Illustration, UI/UX Design, Adobe Illustrator, Figma, Canva",
    "Design — Graphic Illustration, UI/UX Design, Adobe Illustrator, Figma, Canva"
  ),
  b(
    "Yang sedang saya cari: pengalaman magang digital untuk tumbuh lebih cepat.",
    "What I am looking for: a digital internship to grow faster."
  ),
];

export const skills = [
  {
    category: b("Development", "Development"),
    items: "HTML, CSS, JavaScript, Laravel, React.js, Next.js, C++",
  },
  {
    category: b("Engineering", "Engineering"),
    items: "IoT Development, Arduino & ESP32",
  },
  {
    category: b("Design", "Design"),
    items: "Graphic Illustration, UI/UX Design, Adobe Illustrator, Figma, Canva",
  },
];

export const education = {
  school: "SMK TI BAZMA Islamic Boarding School",
  desc: b(
    "Boarding school dengan program belajar empat tahun — di sini saya mendalami web development, desain grafis, IoT, dan sistem komputer, berjalan seiring pelajaran keagamaan. Kedisiplinan dan kerja tim terbentuk dari rutinitas harian di asrama.",
    "A four-year boarding school programme — here I studied web development, graphic design, IoT, and computer systems alongside religious studies. Discipline and teamwork come from daily boarding routines."
  ),
};

export const experiences = [
  {
    year: "2024 — 2025",
    role: b(
      "Vice Chairman — MCROBO (Organisasi Robotika SMK TI Bazma)",
      "Vice Chairman — MCROBO (SMK TI Bazma Robotics Organization)"
    ),
    desc: b(
      "Wakil ketua organisasi robotika: mengoordinasikan tim, mengatur proyek, dan mengembangkan kegiatan robotika serta teknologi di sekolah.",
      "Deputy chairman of the robotics organization: coordinated the team, managed projects, and grew robotics and technology activities at school."
    ),
  },
  {
    year: "2025",
    role: b(
      "Anggota OSIS — Divisi Prestasi Akademik & Seni Olahraga",
      "Student Council Member — Academic Achievement & Arts and Sports Division"
    ),
    desc: b(
      "Mendukung penyelenggaraan event sekolah, kompetisi, dan program pengembangan siswa di lingkup divisi.",
      "Supported school events, competitions, and student development programmes within the division."
    ),
  },
  {
    year: "2024",
    role: b(
      "Anggota Forum OSIS SMK Se-Jawa Barat",
      "Member of the West Java Vocational Student Council Forum"
    ),
    desc: b(
      "Berkolaborasi dengan perwakilan OSIS dari berbagai sekolah di Jawa Barat dalam kegiatan kepemimpinan, organisasi, dan edukasi.",
      "Collaborated with student council representatives from schools across West Java in leadership, organisational, and educational activities."
    ),
  },
];

export const professional = [
  {
    year: b("2025 — Sekarang", "2025 — Present"),
    role: b(
      "Social Media Branding — MENTION (Media Design and Information SMK TI Bazma)",
      "Social Media Branding — MENTION (Media Design and Information, SMK TI Bazma)"
    ),
    desc: b(
      "MENTION menangani seluruh desain media dan informasi SMK TI BAZMA — konten visual, desain grafis, video, hingga materi promosi.",
      "MENTION handles all media and information design for SMK TI BAZMA — visual content, graphic design, video, and promotional material."
    ),
  },
  {
    year: b("", ""),
    role: b(
      "Bazma Pertamina — Social Media & Content Creator",
      "Bazma Pertamina — Social Media & Content Creator"
    ),
    desc: b(
      "Menerjemahkan rencana konten bulanan menjadi aset visual siap unggah — desain, foto, dan video untuk kebutuhan Instagram harian.",
      "Turned monthly content plans into upload-ready visual assets — design, photography, and video for daily Instagram needs."
    ),
  },
  {
    year: b("", ""),
    role: b("Himpana — Desain Event Nasional", "Himpana — National Event Design"),
    desc: b(
      "Merancang materi visual untuk event nasional: X-banner, banner, dan kebutuhan cetak lainnya.",
      "Designed visual material for a national event: X-banners, banners, and other print needs."
    ),
  },
  {
    year: b("", ""),
    role: b(
      "SPMB SMK TI BAZMA 2025 — Tim Multimedia",
      "SPMB SMK TI BAZMA 2025 — Multimedia Team"
    ),
    desc: b(
      "Bagian dari tim multimedia: desain materi promosi, dokumentasi foto dan video, serta produksi konten untuk kampanye penerimaan murid baru.",
      "Part of the multimedia team: promotional design, photo and video documentation, and content production for the admission campaign."
    ),
  },
];

export const achievements = [
  {
    year: "2024",
    title: b(
      "Samsung Innovation Campus — Batch 6 & Batch 7",
      "Samsung Innovation Campus — Batch 6 & Batch 7"
    ),
    desc: b("Data Science", "Data Science"),
  },
  {
    year: "2025",
    title: b("ASEAN Data Science Explorations", "ASEAN Data Science Explorations"),
    desc: b(
      "Sertifikasi data science tingkat ASEAN",
      "ASEAN-level data science certification"
    ),
  },
];
/* ============================================================
/* ============================================================
   PETA KERJA DESAIN — sumber data karya di track /design.
   Tiap entri jadi satu baris di daftar karya; discipline menentukan
   warna garis penandanya (lihat DISCIPLINE_COLORS di lib/mosaic).
   Isinya diambil dari pengalaman yang sama dengan professional,
   jadi warnanya bukan acak.
   ============================================================ */
export type DesignWork = {
  id: string;
  title: Bi;
  context: Bi;
  discipline: Discipline;
  year: Bi;
  note: Bi;
  tools: string[];
  dimensions: string;
  palette: string[];
  categoryLabel: Bi;
  problem: Bi;
  solution: Bi;
  deliverables: string[];
  visualType: "branding" | "banner" | "editorial" | "admission" | "uiux" | "illustration";
  image?: string;
};

export const designWorks: DesignWork[] = [
  {
    id: "01",
    title: b("Brand Identity & Social Media MENTION", "Brand Identity & Social Media MENTION"),
    context: b("MENTION — SMK TI BAZMA", "MENTION — SMK TI BAZMA"),
    discipline: "branding",
    categoryLabel: b("Brand Identity & Feed System", "Brand Identity & Feed System"),
    year: b("2025 — Sekarang", "2025 — Present"),
    note: b(
      "Merancang sistem identitas visual komprehensif untuk media informasi sekolah, mencakup grid 12 kolom, tipografi editorial, palet warna berkarakter, dan template carousel Instagram.",
      "Crafted a comprehensive visual identity system for school media communication, covering 12-column grids, editorial typography, character-rich color palettes, and Instagram carousel templates."
    ),
    tools: ["Figma", "Adobe Illustrator", "Photoshop"],
    dimensions: "1080 × 1350 px · 300 DPI",
    palette: ["#0E0F14", "#831514", "#FFE846", "#F4F1EA"],
    problem: b(
      "Informasi kegiatan dan program sekolah sebelumnya dipublikasikan tanpa panduan visual terpadu, sehingga terasa sporadis dan kurang memiliki daya tarik profesional bagi calon mitra & siswa.",
      "Previous school event information lacked a unified visual design system, appearing sporadic and lacking professional appeal for prospective partners and students."
    ),
    solution: b(
      "Menciptakan brand guide modular: rasio aspek 4:5 yang optimal di feed, palet warna kontras tinggi, sistem hierarki heading yang terbaca cepat dalam 2 detik pertama scroll.",
      "Built a modular brand guide: 4:5 aspect ratio optimized for feeds, high-contrast colors, and a clear heading hierarchy legible within the first 2 seconds of scrolling."
    ),
    deliverables: ["Brand Styleguide", "Instagram Grid System (15+ Templates)", "Typography Hierarchy", "Story & Highlight Kits"],
    visualType: "branding",
    image: "/images/behance-ref/01.jpg",
  },
  {
    id: "02",
    title: b("Desain Event Nasional HIMPANA", "National Event Visuals HIMPANA"),
    context: b("HIMPANA (Himpunan Alumni)", "HIMPANA (Alumni Association)"),
    discipline: "print",
    categoryLabel: b("Event & Spatial Print Design", "Event & Spatial Print Design"),
    year: b("2025", "2025"),
    note: b(
      "Materi visual terpadu untuk konferensi & gathering nasional: main stage backdrop 6x3m, standing roll-up banner, ID card peserta VIP, dan buku panduan acara.",
      "Unified visual materials for a national conference & gathering: 6x3m main stage backdrop, standing roll-up banners, VIP participant ID cards, and event handbooks."
    ),
    tools: ["Adobe Illustrator", "Photoshop", "InDesign"],
    dimensions: "6000 × 3000 mm & 800 × 2000 mm · CMYK",
    palette: ["#141416", "#E8A33D", "#1F3BE0", "#FFFFFF"],
    problem: b(
      "Kebutuhan cetak berukuran raksasa menuntut akurasi layout skala vektor tanpa distorsi resolusi, dengan keterbacaan tinggi dari jarak pandang 15 meter.",
      "Large-format print requirements demanded vector precision without resolution distortion, maintaining crystal-clear legibility from a 15-meter viewing distance."
    ),
    solution: b(
      "Penerapan sistem grid arsitektural berbasis vektor murni, kalibrasi warna CMYK terstandarisasi percetakan, dan penataan margin aman bleed 50mm.",
      "Pure vector architectural grid layout, standardized CMYK print calibration, and 50mm safe bleed margin enforcement."
    ),
    deliverables: ["Panggung Utama 6×3m", "Roll-Up X-Banner", "Kartu Peserta & Lanyard VIP", "Brosur & Run-Down Cetak"],
    visualType: "banner",
  },
  {
    id: "03",
    title: b("Editorial Content BAZMA Pertamina", "BAZMA Pertamina Daily Editorial Content"),
    context: b("BAZMA PERTAMINA", "BAZMA PERTAMINA"),
    discipline: "content",
    categoryLabel: b("Corporate Social Content", "Corporate Social Content"),
    year: b("2025", "2025"),
    note: b(
      "Menerjemahkan laporan program bulanan dan konten edukatif menjadi infografis visual modern yang mudah dipahami donatur dan publik di Instagram.",
      "Transformed monthly program reports and educational materials into modern visual infographics readily digestible by donors and the public on Instagram."
    ),
    tools: ["Figma", "Adobe Illustrator", "Canva Pro"],
    dimensions: "1080 × 1080 px & 1080 × 1350 px",
    palette: ["#0B0E14", "#1F3BE0", "#2F9CF0", "#F8FAFC"],
    problem: b(
      "Data laporan kegiatan sosial dan penyaluran donasi seringkali terasa membosankan dan padat teks jika disajikan dalam format konvensional.",
      "Social activity data and donation distribution reports often felt dry and text-heavy when presented in conventional formats."
    ),
    solution: b(
      "Mengembangkan format infografis berbasis kartu bertingkat, diagram data visual yang bersih, dan kutipan tipografis yang memiliki nilai emosional kuat.",
      "Developed tiered card infographic formats, clean visual data diagrams, and typographic quotes carrying high emotional resonance."
    ),
    deliverables: ["30+ Aset Feed Bulanan", "Infografis Penyaluran Dana", "Template Kutipan Inspiratif", "Cover Video Reels"],
    visualType: "editorial",
  },
  {
    id: "04",
    title: b("Kampanye SPMB 2025 (Penerimaan Siswa)", "SPMB 2025 Admission Campaign Visuals"),
    context: b("TIM MULTIMEDIA SPMB BAZMA", "SPMB MULTIMEDIA TEAM"),
    discipline: "print",
    categoryLabel: b("Marketing & Admission Campaign", "Marketing & Admission Campaign"),
    year: b("2025", "2025"),
    note: b(
      "Kampanye visual multi-channel untuk penerimaan siswa baru yang sukses menjaring lebih dari 1.000 pendaftar daring dari seluruh Indonesia.",
      "Multi-channel visual campaign for new student admissions successfully engaging over 1,000 online applicants across Indonesia."
    ),
    tools: ["Adobe Illustrator", "Figma", "Photoshop"],
    dimensions: "A3 Poster, A4 Brochure, 1080×1920 Story",
    palette: ["#0F172A", "#0F9B94", "#FFE846", "#FFFFFF"],
    problem: b(
      "Menargetkan calon siswa SMP dan orang tua secara bersamaan membutuhkan gaya visual yang profesional namun tetap energik dan ramah anak muda.",
      "Simultaneously targeting middle-school students and parents required a visual tone that was professional yet energetic and youth-friendly."
    ),
    solution: b(
      "Visual hybrid: tipografi bold modern yang memikat remaja dikombinasikan dengan struktur informasi beasiswa dan akreditasi yang terpercaya bagi orang tua.",
      "Hybrid visual approach: bold modern typography engaging youth combined with clear, trustworthy scholarship & accreditation breakdowns for parents."
    ),
    deliverables: ["Poster Fisik & Pamflet A3", "Brosur Lipat Tiga (Trifold)", "Set Iklan Digital Instagram", "Visual Panduan Alur Pendaftaran"],
    visualType: "admission",
  },
  {
    id: "05",
    title: b("Smart Ecosystem UI/UX Interface Concept", "Smart Ecosystem UI/UX Interface Concept"),
    context: b("PORTFOLIO DESIGN LAB", "PORTFOLIO DESIGN LAB"),
    discipline: "ui",
    categoryLabel: b("UI/UX & Design System", "UI/UX & Design System"),
    year: b("2025 — 2026", "2025 — 2026"),
    note: b(
      "Rancangan antarmuka dashboard IoT dan mobile app pemantau sensor lingkungan: sensor suhu, kelembapan, saklar relay, dan analitik grafis real-time.",
      "UI/UX design of an IoT dashboard and mobile companion app monitoring environmental sensors: temperature, humidity, relay switches, and real-time graphics."
    ),
    tools: ["Figma", "Auto Layout", "Design Tokens"],
    dimensions: "1440 × 900 px (Desktop) & 393 × 852 px (Mobile)",
    palette: ["#0B0D13", "#1B2236", "#2F9CF0", "#7C5CFC"],
    problem: b(
      "Dashboard IoT teknis seringkali membingungkan dengan terlalu banyak grafik mentah dan kontrol tombol yang tidak ergonomis.",
      "Technical IoT dashboards are frequently cluttered with raw charts and un-ergonomic controls."
    ),
    solution: b(
      "Penyusunan komponen UI berbasis Atomic Design, status color-coded yang intuitif (Normal / Warning / Critical), serta gestur toggle satu jempol di layar ponsel.",
      "Structured Atomic Design components, intuitive color-coded telemetry states, and single-thumb mobile toggle ergonomics."
    ),
    deliverables: ["Figma Wireframes & User Flows", "High-Fidelity Component Library", "Interactive Clickable Prototype", "Dark/Light Design Tokens"],
    visualType: "uiux",
  },
  {
    id: "06",
    title: b("Ilustrasi Vektor & Koleksi Aset Grafis", "Vector Illustrations & Asset Collection"),
    context: b("PERSONAL & EDITORIAL LAB", "PERSONAL & EDITORIAL LAB"),
    discipline: "illustration",
    categoryLabel: b("Vector Art & Mascot Asset", "Vector Art & Mascot Asset"),
    year: b("2024 — 2025", "2024 — 2025"),
    note: b(
      "Koleksi ilustrasi vektor orisinal untuk kebutuhan maskot robotik, ikonografi kustom, stiker komunitas, dan elemen visual pendukung situs web.",
      "Collection of original vector illustrations for robotics mascots, custom iconography, community stickers, and supporting web visual assets."
    ),
    tools: ["Adobe Illustrator", "Procreate", "SVG Optimizer"],
    dimensions: "Infinite Vector Scalable (SVG / AI)",
    palette: ["#12131C", "#E4607A", "#FFE846", "#0F9B94"],
    problem: b(
      "Ketergantungan pada aset stok gratis membuat proyek visual terasa generik dan sulit menciptakan persona merek yang unik.",
      "Relying on generic stock art makes visual branding forgettable and hinders distinctive brand persona creation."
    ),
    solution: b(
      "Membuat perpustakaan vektor buatan tangan dengan siluet geometris tegas, sudut kurva harmonis, dan format SVG ringan teroptimasi untuk web.",
      "Handcrafted vector library featuring sharp geometric silhouettes, harmonious curve radiuses, and lightweight optimized SVG web assets."
    ),
    deliverables: ["Maskot Robotik MCROBO", "50+ Set Ikon Vektor Kustom", "Pack Stiker Digital", "Elemen Grafis Header"],
    visualType: "illustration",
  },
];

/* Perkakas desain — dipakai di track /design (semua sudah tercatat
   di skills/fieldNotes, bukan klaim baru). */
export const designToolkit = [
  { name: "Figma", use: b("layout & UI/UX", "layout & UI/UX") },
  { name: "Adobe Illustrator", use: b("vektor & ilustrasi", "vector & illustration") },
  { name: "Canva", use: b("materi cepat & kolaborasi", "quick material & collaboration") },
  { name: "Kamera & Ponsel", use: b("dokumentasi event", "event documentation") },
  { name: "Produksi Video", use: b("editing & format unggah", "editing & upload formats") },
];
