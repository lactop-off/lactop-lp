import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/JsonLd";
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
  title: "Lactop | LP制作・Webアプリ開発",
  description:
    "スタートアップ・中小企業向けのLP制作、Webアプリ開発、運用保守を提供するフリーランスエンジニア。直接のやりとりで、スピーディーかつコストパフォーマンスの高いWeb制作を実現します。",
  keywords: [
    "LP制作",
    "ランディングページ",
    "Webアプリ開発",
    "フリーランス",
    "Web制作",
    "ホームページ制作",
  ],
  authors: [{ name: "Lactop" }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://lactop.dev",
    siteName: "Lactop",
    title: "Lactop | LP制作・Webアプリ開発",
    description:
      "スタートアップ・中小企業向けのLP制作、Webアプリ開発、運用保守を提供するフリーランスエンジニア。",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lactop | LP制作・Webアプリ開発",
    description:
      "スタートアップ・中小企業向けのLP制作、Webアプリ開発、運用保守を提供するフリーランスエンジニア。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
