import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Paksa Turbopack pakai folder project ini sebagai root,
  // biar nggak nyasar resolve ke C:\...\porto (parent folder)
  // yang bikin error "Can't resolve 'tailwindcss'".
  // process.cwd() = folder tempat `npm run dev` dijalankan (portofolio/).
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
