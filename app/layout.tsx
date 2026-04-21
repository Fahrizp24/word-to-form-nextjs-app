import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Word to Form AI | Asisten Pintar Guru",
  description: "Aplikasi pengubah dokumen soal akademik menjadi Google Form secara instan dengan kecerdasan buatan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${jakarta.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-lg">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
