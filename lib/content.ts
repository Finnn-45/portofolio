import type { Bi } from "./i18n";

/* ============================================================
   SEMUA TEKS SITUS â€” bilingual (id / en).
   Nada: profesional, menjual, apa adanya. Tanpa lebay.
============================================================ */

const b = (id: string, en: string): Bi => ({ id, en });

export type CaseStudyContent = {
  id: string;
  title: Bi;
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
  hero: {
    kicker: b("web Â· iot Â· desain", "web Â· iot Â· design"),
    title: b("Portofolio", "Portfolio"),
    chip: b("terbuka untuk magang", "open for internship"),
    location: b("Bogor, ID", "Bogor, ID"),
    scroll: b("gulir", "scroll"),
    email: b("Email", "Email"),
    github: b("GitHub", "GitHub"),
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
      "Saya membangun produk dari nol: merancang antarmuka, menulis front-end, sampai menyambungkannya ke perangkat. Pendekatannya sederhana â€” kode rapi, perangkat yang benar-benar bekerja, dan tampilan yang enak dipakai. Saat ini saya mencari pengalaman magang digital untuk mengasah cara kerja profesional.",
      "I build products end to end: designing interfaces, writing the front-end, and connecting it to hardware. The approach is simple â€” clean code, hardware that actually works, and interfaces that feel right. I am currently looking for a digital internship to sharpen how I work in a professional team."
    ),
    emailLabel: b("Email", "Email"),
    linkedinLabel: b("LinkedIn", "LinkedIn"),
    locationLabel: b("Lokasi", "Location"),
  },

  services: {
    titleLines: [b("Yang saya", "What I do?"), b("kerjakan.", "(and love doing)")],
    lede: b(
      "Saya menggabungkan pengembangan web, IoT, dan desain grafis dalam satu alur kerja. Fokusnya sederhana: kode yang bersih, perangkat yang berjalan stabil, dan visual yang kuat.",
      "I combine web development, IoT, and graphic design in one workflow. The focus is simple: clean code, hardware that runs reliably, and visuals with impact."
    ),
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
          "Perangkat yang benar-benar bekerja â€” dari sensor dan mikrokontroler sampai dashboard pemantauan.",
          "Devices that actually work â€” from sensors and microcontrollers to monitoring dashboards."
        ),
      },
      {
        title: b("Desain UI/UX", "UI/UX Design"),
        desc: b(
          "Antarmuka yang jelas dan enak dipakai, dirancang dari alur pengguna, bukan tebakan.",
          "Interfaces that are clear and pleasant to use â€” designed from real user flows, not guesswork."
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
          "Pemrograman embedded dengan C++ â€” kendali motor, sensor, dan komunikasi nirkabel.",
          "Embedded programming in C++ â€” motor control, sensors, and wireless communication."
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
      "Dari menulis kode sampai menyusun desain â€” ini alat yang saya pakai sehari-hari untuk membangun produk digital dari nol sampai siap dipakai.",
      "From writing code to crafting design â€” these are the tools I use daily to build digital products from scratch to shipped."
    ),
  },

  inside: {
    titleLines: [b("Apa saja yang", "What you will"), b("ada di dalam?", "find inside?")],
    lede: b(
      "Terus gulir â€” seluruh proyek, perangkat, dan pencapaian tersusun rapi di bawah ini.",
      "Keep scrolling â€” every project, device, and achievement is laid out neatly below."
    ),
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

  works: {
    titleLines: [b("Merancang Pengalaman", "Designing Digital"), b("Digital.", "Experiences.")],
    lede: b(
      "Klik salah satu karya untuk membuka studi kasusnya â€” mulai dari tantangan, proses pengerjaan, sampai hasil yang dicapai.",
      "Click any work to open its case study â€” from the challenge and the process to the outcome it delivered."
    ),
    githubKicker: b("github.com/Finnn-45 â€” open source", "github.com/Finnn-45 â€” open source"),
    githubTitle: b("Proyek Open Source.", "Open Source Projects."),
    githubCta: b("Lihat semua di GitHub", "See all on GitHub"),
    githubNote: b(
      "Repo publik dari github.com/Finnn-45 â€” klik kartu untuk membuka kode sumbernya.",
      "Public repositories from github.com/Finnn-45 â€” click a card to open its source."
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
    repoLink: b("Lihat kode sumber di GitHub", "View source on GitHub"),
  },

  contact: {
    titleLines: [b("Mari", "Let's"), b("Berkolaborasi.", "Collaborate.")],
    lede: b(
      "Punya ide, proyek, atau sekadar ingin berdiskusi? Jangan ragu menghubungi saya â€” saya terbuka untuk magang, kolaborasi, maupun proyek lepas.",
      "Got an idea, a project, or just want to talk? Feel free to reach out â€” I am open to internships, collaborations, and freelance work."
    ),
    links: [
      b("GITHUB", "GITHUB"),
      b("GMAIL", "GMAIL"),
      b("LINKEDIN", "LINKEDIN"),
      b("INSTAGRAM", "INSTAGRAM"),
      b("CV / RESUME", "CV / RESUME"),
    ],
    status: b("Terbuka untuk magang digital", "Open for digital internship"),
    directLabel: b("[kanal langsung]", "[direct channels]"),
    mailCta: b("Kirim email", "Send an email"),
    backToTop: b("Kembali ke atas", "Back to top"),
    footerLeft: b("Â© 2026 ARFIN DESCA ALZACHRI", "Â© 2026 ARFIN DESCA ALZACHRI"),
    footerRight: b(
      "Terima kasih sudah menggulir sampai bawah.",
      "Thank you for scrolling all the way down."
    ),
  },

  cv: {
    back: b("â† kembali ke situs", "â† back to site"),
    savePdf: b("Simpan sebagai PDF", "Save as PDF"),
    label: b("portfolio â€” 2026", "portfolio â€” 2026"),
    education: b("pendidikan", "education"),
    experience: b("pengalaman", "experience"),
    professional: b("pengalaman profesional â€” kolaborasi MENTION", "professional experience â€” MENTION collaborations"),
    skills: b("keahlian teknis", "technical skills"),
    achievements: b("pencapaian & sertifikasi", "achievement & certification"),
    works: b("karya terpilih", "selected works"),
    repo: b("kode sumber â€” github.com/Finnn-45", "source code â€” github.com/Finnn-45"),
    footerLeft: b("[arfin desca alzachri] â€” [portfolio]", "[arfin desca alzachri] â€” [portfolio]"),
    footerRight: b("[2026]", "[2026]"),
  },

  track: {
    all: b("Semua", "All"),
    web: b("Web", "Web"),
    design: b("Desain", "Design"),
  },

  design: {
    lede: b(
      "Kolaborasi desain dan produksi konten visual â€” dari branding media sosial sekolah sampai materi kampanye event nasional.",
      "Design collaborations and visual content production â€” from school social-media branding to national event campaign material."
    ),
    /* â”€â”€ edisi kanvas gelap (Portofolio 2025): folder + pita kuning â”€â”€ */
    folderOwner: b("Folder porto milik", "Portfolio folder of"),
    selectedWork: b("Karya Terpilih", "Selected Work"),
    folderRoles: [
      b("Desainer Grafis", "Graphic Designer"),
      b("Ilustrator", "Illustrator"),
      b("Desainer Visual", "Visual Designer"),
    ],
    updateLabel: b("Pembaruan v.1.0", "Update v.1.0"),
    ribbonItems: [
      b("Arfin Desca Visual", "Arfin Desca Visual"),
      b("Folder Portofolio Arfin", "Arfin's Portfolio Folder"),
    ],
    collab: b("Kolaborasi Desain", "Design Collaborations"),
    achievements: b("Pencapaian & Sertifikasi", "Achievements & Certifications"),
    /* â”€â”€ peta kerja (mozaik yang bisa dibaca) â”€â”€ */
    worksTitle: b("Peta Kerja Desain.", "Design Work Map."),
    disciplines: {
      branding: b("Branding Media Sosial", "Social Media Branding"),
      content: b("Konten Sosial", "Social Content"),
      print: b("Cetak & Promosi", "Print & Promo"),
      media: b("Foto & Video", "Photo & Video"),
      illustration: b("Ilustrasi", "Illustration"),
      ui: b("UI/UX", "UI/UX"),
      program: b("Program & Sertifikasi", "Program & Certification"),
    },
    /* â”€â”€ tentang (versi track desain) â”€â”€ */
    principlesTitle: b("Tiga aturan main.", "Three ground rules."),
    principles: [
      {
        title: b("Terbaca dulu, baru cantik.", "Legible first, pretty second."),
        desc: b(
          "Hierarki dan keterbacaan dikunci lebih dulu. Dekorasi datang setelah pesannya jelas.",
          "Hierarchy and legibility come first. Decoration follows once the message is clear."
        ),
      },
      {
        title: b("Satu warna, satu peran.", "One colour, one role."),
        desc: b(
          "Warna bukan pengisi ruang â€” ia penanda. Karena itu tiap bidang punya warnanya sendiri.",
          "Colour is not filler â€” it is a marker. That is why every discipline keeps its own colour."
        ),
      },
      {
        title: b("Grid dulu, ekspresi kemudian.", "Grid first, expression after."),
        desc: b(
          "Semua materi duduk di grid 12 kolom yang sama supaya satu kampanye terasa satu suara.",
          "Every piece sits on the same 12-column grid so one campaign reads as one voice."
        ),
      },
    ],
    /* â”€â”€ proses & perkakas â”€â”€ */
    processTitle: b("Cara saya bekerja.", "How I work."),
    processNote: b(
      "Alur yang sama dipakai untuk konten harian maupun materi event nasional.",
      "The same flow runs for daily content and for national event material."
    ),
    steps: [
      {
        title: b("Brief & Riset", "Brief & Research"),
        desc: b("Memastikan tujuan, audiens, dan pesan utamanya jelas sebelum menyentuh kanvas.", "Nail the goal, the audience, and the core message before touching the canvas."),
      },
      {
        title: b("Konsep & Referensi", "Concept & References"),
        desc: b("Menyusun arah visual, palet, dan referensi supaya keputusan desain punya alasan.", "Set the visual direction, palette, and references so design decisions have reasons."),
      },
      {
        title: b("Desain & Produksi", "Design & Production"),
        desc: b("Eksekusi di grid yang konsisten â€” tipografi, warna, dan komposisi dijaga rapi.", "Execution on a consistent grid â€” typography, colour, and composition kept tight."),
      },
      {
        title: b("Revisi & Uji Cetak", "Revision & Print Test"),
        desc: b("Revisi berbasis masukan, lalu cek ukuran, skala, dan keterbacaan di media akhirnya.", "Revisions from feedback, then checking size, scale, and legibility on the final medium."),
      },
      {
        title: b("Serah Terima Aset", "Asset Handover"),
        desc: b("File final diserahkan rapi: format cetak, format sosial, plus sumber yang bisa diedit.", "Final files handed over tidy: print format, social format, plus editable sources."),
      },
    ],
    toolkitTitle: b("Perkakas & bahan.", "Tools & material."),
    toolkitNote: b(
      "Alat yang benar-benar saya pakai sehari-hari untuk desain dan produksi konten.",
      "The tools I actually use daily for design and content production."
    ),
    /* â”€â”€ kontak (versi track desain) â”€â”€ */
    contactTitle: b("Mari bikin", "Let's make"),
    contactTitleAccent: b("sesuatu.", "something."),
    contactNote: b(
      "Terbuka untuk kolaborasi desain, magang, maupun proyek lepas â€” kirim brief singkatnya saja.",
      "Open to design collaborations, internships, and freelance work â€” just send a short brief."
    ),
    /* â”€â”€ galeri ala behance: feed vertikal 1 kolom â”€â”€ */
    galleryIntro: b(
      "Gulir ke bawah kayak buka galeri Behance: tiap karya tampil penuh satu layar, lengkap dengan konteks, tahun, dan catatannya.",
      "Scroll down like opening a Behance gallery: each work fills one screen, complete with context, year, and notes."
    ),
    galleryCta: b("Lihat konteks karya", "View work context"),
    galleryCaseNote: b("Catatan kasus", "Case note"),
    galleryIndex: b("Indeks karya", "Work index"),
    galleryCount: b("karya terdokumentasi", "documented works"),
    galleryEnd: b("Akhir galeri â€” terima kasih sudah melihat sampai bawah.", "End of gallery â€” thanks for viewing all the way down."),
  },

  github: {
    featured: b("unggulan", "featured"),
    code: b("kode", "code"),
    live: b("demo", "live"),
  },
} as const;

/* ============================================================
   CASE STUDIES â€” versi bilingual, dipakai Works & modal.
   Nada: jelas, menjual, tanpa lebay.
============================================================ */

export const caseStudies: CaseStudyContent[] = [
  {
    id: "01",
    title: b("SPMB", "SPMB"),
    category: b("PENGEMBANGAN WEB", "WEB DEVELOPMENT"),
    year: "2025",
    tools: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui", "WhatsApp API"],
    repo: "https://github.com/Finnn-45/front-end-ppdb",
    description: b(
      "Front-end platform penerimaan murid baru SMK TI BAZMA â€” dipakai lebih dari 1.000 pendaftar dengan alur pendaftaran bertahap dan notifikasi WhatsApp otomatis.",
      "The front-end of SMK TI BAZMA's admission platform â€” used by 1,000+ applicants, with a guided multi-step flow and automatic WhatsApp notifications."
    ),
    overview: b(
      "Sistem pendaftaran online terpadu yang menemani calon siswa dari registrasi, unggah berkas, verifikasi data, sampai pemantauan status seleksi secara real-time. Saya menangani front-end-nya â€” dari desain antarmuka sampai implementasi.",
      "An end-to-end admission platform that guides applicants through registration, document upload, data verification, and real-time selection status. I owned the front-end â€” from interface design to implementation."
    ),
    challenge: b(
      "Banyaknya tahapan administrasi dan formulir yang panjang membuat pengguna baru mudah bingung â€” drop-off naik dan kesalahan pengisian data jadi masalah utama.",
      "Long administrative steps and lengthy forms confused first-time users â€” driving up drop-off rates and data-entry mistakes."
    ),
    process: b(
      "Menganalisis alur pendaftaran lama â†’ memetakan user flow multi-step â†’ merancang komponen UI yang konsisten â†’ implementasi dengan Next.js dan validasi ketat di tiap langkah â†’ usability testing bersama calon pengguna.",
      "Analysed the old flow â†’ mapped a multi-step user journey â†’ designed consistent UI components â†’ built it with Next.js and strict per-step validation â†’ ran usability tests with real applicants."
    ),
    solution: b(
      "Formulir dipecah menjadi multi-step dengan validasi otomatis, progres pendaftaran terlihat jelas di tiap langkah, dan notifikasi WhatsApp terkirim otomatis di tiap milestone â€” pendaftar tidak perlu menebak statusnya.",
      "The form became a multi-step flow with automatic validation, visible progress at every stage, and WhatsApp notifications sent automatically at each milestone â€” applicants never have to guess their status."
    ),
    result: b(
      "Dipakai 1.000+ pendaftar selama periode PPDB. Prosesnya jauh lebih mudah diikuti, kesalahan input turun drastis, dan tim PPDB terbantu besar oleh notifikasi otomatisnya.",
      "Used by 1,000+ applicants during the admission period. The flow became far easier to follow, input errors dropped sharply, and the admissions team relied heavily on the automatic notifications."
    ),
  },
  {
    id: "02",
    title: b("Absensi via RFID", "Attendance via RFID"),
    category: b("REKAYASA IOT", "IOT ENGINEERING"),
    year: "2025",
    tools: ["Arduino", "C++", "RFID RC522", "Embedded System"],
    description: b(
      "Sistem absensi siswa dengan kartu RFID dan Arduino â€” tempel kartu, kehadiran langsung tercatat otomatis tanpa proses manual.",
      "A student attendance system built on RFID cards and Arduino â€” tap the card and attendance is logged instantly, no manual entry."
    ),
    overview: b(
      "Perangkat absensi otomatis berbasis kartu RFID: siswa menempelkan kartu ke reader dan kehadirannya langsung tersimpan ke sistem â€” tanpa panggilan manual sama sekali.",
      "An automatic attendance device based on RFID cards: students tap their card on the reader and their attendance is stored straight into the system â€” no roll call at all."
    ),
    challenge: b(
      "Absensi manual memakan waktu, rawan salah catat, dan sulit direkap â€” terlebih untuk kelas dengan jumlah siswa yang besar.",
      "Manual attendance is slow, error-prone, and hard to recap â€” especially for large classes."
    ),
    process: b(
      "Riset hardware reader â†’ perakitan modul Arduino + RC522 â†’ pemrograman pembacaan UID kartu di C++ â†’ sinkronisasi data kehadiran ke sistem â†’ uji akurasi dan kecepatan baca.",
      "Researched reader hardware â†’ assembled the Arduino + RC522 module â†’ programmed card UID reading in C++ â†’ synced attendance data to the system â†’ tested accuracy and read speed."
    ),
    solution: b(
      "Setiap kartu dipetakan ke data siswa, pembacaan UID divalidasi anti-duplikat dalam sesi yang sama, dan hasilnya tersimpan terstruktur supaya mudah direkap kapan saja.",
      "Each card maps to a student record, UID reads are de-duplicated per session, and results are stored in a structured format that is easy to recap anytime."
    ),
    result: b(
      "Absensi yang tadinya berhitung menit per kelas menjadi hitungan detik per siswa â€” data lebih akurat dan rekapnya otomatis.",
      "Attendance that took minutes per class now takes seconds per student â€” with more accurate data and automatic recaps."
    ),
  },
  {
    id: "03",
    title: b("Jam Digital JWS", "JWS Digital Clock"),
    category: b("REKAYASA IOT", "IOT ENGINEERING"),
    year: "2025",
    tools: ["Mikrokontroler", "LED Display", "Real-time Data"],
    description: b(
      "Jam waktu sholat digital yang tersambung ke jadwal real-time â€” LED display dan mikrokontroler, akurat tanpa perlu diatur ulang.",
      "A digital prayer-time clock connected to real-time schedules â€” LED display and microcontroller, accurate without manual resets."
    ),
    overview: b(
      "Perangkat jam waktu sholat berbasis mikrokontroler dengan LED display yang menampilkan jadwal secara real-time â€” dirancang agar waktunya selalu akurat tanpa diatur manual.",
      "A microcontroller-based prayer-time clock whose LED display pulls the schedule in real time â€” designed to stay accurate without manual adjustment."
    ),
    challenge: b(
      "Jam waktu sholat konvensional harus diatur manual dan sering telat mengikuti pergeseran jadwal â€” repot dan mudah salah.",
      "Conventional prayer clocks need manual setting and lag behind schedule changes â€” tedious and error-prone."
    ),
    process: b(
      "Perancangan rangkaian mikrokontroler + LED display â†’ integrasi data jadwal real-time â†’ pemrograman logika tampilan dan alarm â†’ kalibrasi dan uji akurasi harian.",
      "Designed the microcontroller + LED display circuit â†’ integrated real-time schedule data â†’ programmed display and alarm logic â†’ calibrated and tested accuracy daily."
    ),
    solution: b(
      "Perangkat menarik data jadwal secara real-time, menampilkannya dalam format yang mudah dibaca, dan menyesuaikan perubahan jadwal secara otomatis.",
      "The device pulls schedule data in real time, renders it in a glanceable format, and adjusts to schedule changes automatically."
    ),
    result: b(
      "Jam yang selalu akurat tanpa pernah perlu diatur ulang â€” dan benar-benar dipakai sehari-hari.",
      "A clock that stays accurate and never needs resetting â€” and is genuinely used every day."
    ),
  },
  {
    id: "04",
    title: b("Mobil RC ESP32", "RC Car ESP32"),
    category: b("REKAYASA IOT", "IOT ENGINEERING"),
    year: "2025",
    tools: ["ESP32", "IoT", "Motor Control", "Wireless"],
    description: b(
      "Mobil RC berbasis ESP32 yang dikendalikan nirkabel dari ponsel â€” gabungan komunikasi IoT, kontrol motor, dan elektronik.",
      "An ESP32-based RC car controlled wirelessly from a phone â€” combining IoT communication, motor control, and electronics."
    ),
    overview: b(
      "Mobil RC berbasis ESP32 yang dikendalikan lewat perangkat mobile â€” komunikasi nirkabel, kontrol motor presisi, dan rangkaian hemat daya dalam satu proyek.",
      "An ESP32 RC car driven from a mobile device â€” wireless communication, precise motor control, and a power-efficient circuit in one build."
    ),
    challenge: b(
      "Membangun kendali yang responsif dan stabil lewat koneksi nirkabel, sekaligus mengatur kecepatan dan arah motor secara presisi dengan daya terbatas.",
      "Building control that stays responsive over a wireless link while managing speed and steering precisely on limited power."
    ),
    process: b(
      "Perakitan chassis + motor driver â†’ pemrograman ESP32 untuk menerima perintah â†’ pembuatan antarmuka kontrol di ponsel â†’ kalibrasi respons motor dan kestabilan koneksi â†’ uji lapangan.",
      "Assembled the chassis + motor driver â†’ programmed the ESP32 command handler â†’ built the phone control interface â†’ calibrated motor response and connection stability â†’ field-tested."
    ),
    solution: b(
      "Komunikasi nirkabel low-latency antara ponsel dan ESP32, kontrol arah dan kecepatan yang dihaluskan lewat pengaturan PWM, dan rangkaian yang ringkas serta hemat daya.",
      "Low-latency wireless communication between phone and ESP32, smooth steering and throttle through PWM tuning, and a compact power-efficient circuit."
    ),
    result: b(
      "Mobil RC yang responsif dan stabil dikendalikan jarak jauh â€” sekaligus proyek yang paling banyak mengajarkan soal integrasi hardware, software, dan troubleshooting.",
      "A responsive, stable RC car controlled from a distance â€” and the project that taught me the most about hardware-software integration and troubleshooting."
    ),
  },
];