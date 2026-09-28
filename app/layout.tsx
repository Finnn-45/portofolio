import type { Metadata } from "next";
import { Inter, Geist_Mono, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/site/providers";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* Display serif seluruh situs (semua track) — dipakai lewat token
   --font-editorial. Bodoni Moda: serif didone kontras tinggi + italic. */
const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

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
        className={`${inter.variable} ${geistMono.variable} ${bodoni.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}