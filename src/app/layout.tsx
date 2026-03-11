import "./globals.css";

import type { Metadata } from "next";
import { Noto_Sans_Myanmar, Source_Sans_3 } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const notoSansMyanmar = Noto_Sans_Myanmar({
  subsets: ["myanmar"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mm",
});

export const metadata: Metadata = {
  title: "SkillUp MM",
  description: "Myanmar digital marketing learning, assessments, and certificate workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="my">
      <body className={`${sourceSans.variable} ${notoSansMyanmar.variable} min-h-screen text-slate-900`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
