import { Bodoni_Moda } from "next/font/google";

/* ============================================================
   LAYOUT TRACK DESAIN.
   Display serif-nya dimuat di sini (bukan di root layout) supaya
   hanya halaman /design yang mengunduh Bodoni Moda — serif Didone
   kontras tinggi yang dipakai lewat token --font-editorial.
============================================================ */
const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export default function DesignLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={bodoni.variable}>{children}</div>;
}