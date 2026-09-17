import type { Bi } from "./i18n";

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
      "Kode sumber portofolio ini — Next.js dengan React Three Fiber, kartu identitas 3D yang bisa diputar, dan animasi scroll.",
      "The source of this portfolio — Next.js with React Three Fiber, a draggable 3D ID card, and scroll animation."
    ),
    lang: "TypeScript",
    tags: ["Next.js", "React Three Fiber", "Tailwind"],
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