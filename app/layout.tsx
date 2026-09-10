import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arfin Desca Alzachri | Web Developer — IoT — Visual Designer",
  description:
    "Portfolio Arfin Desca Alzachri — membangun produk digital yang benar-benar dipakai orang: aplikasi web full-stack dengan 1.000+ pengguna, perangkat IoT, dan desain visual untuk event nasional. Terbuka untuk peluang kerja & magang. Bogor, Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}