import type { Metadata } from "next";
import { Inter, Geist_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/site/providers";
import { CustomCursor } from "@/components/site/decor";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/* Catatan: display serif edisi gelap (Bodoni Moda) dimuat di
   app/design/layout.tsx — cuma untuk track /design, biar halaman
   terang "/" dan "/web" tidak ikut mengunduhnya. */

export const metadata: Metadata = {
  title: "Arfin Desca Alzachri | Portfolio",
  description:
    "Portfolio of Arfin Desca Alzachri — web developer, IoT engineer, and visual designer. Open for digital internships. Bogor, Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} ${geistMono.variable} ${caveat.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        {/* Cursor kustom — titik + ring, kebaca di section terang & gelap */}
        <CustomCursor />
      </body>
    </html>
  );
}