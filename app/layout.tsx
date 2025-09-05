import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { GoogleTagManager } from '@next/third-parties/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const siteTitle = "과천시중소기업협의회";
const siteDescription = "과천시 중소기업의 성장과 지역 사회 발전을 위한 든든한 파트너. 회원사 정보, 소식, 문의하기 등을 제공합니다.";
// const siteUrl = 'https://gcjungso.diginori.com';

export const metadata: Metadata = {
  generator: 'Next.js',
  applicationName: '과천시중소기업협의회',
  referrer: 'origin-when-cross-origin',
  keywords: ["과천시", "중소기업", "협의회", "비즈니스", "네트워킹", "과천", "지정타", "스타트업", "과천시중서기업협의회", "창업"],
  authors: [{ name: 'DIGINORI' }, { name: 'DIGINORI', url: 'https://gcjungso.diginori.com' }],
  creator: '과천시 중소기업협의회',
  publisher: '디지노리',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  title: "과천시중소기업협의회",
  description: siteDescription,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "과천시중소기업협의회",
    siteName: "과천시 중소기업협의회",
    description: siteDescription,
    locale: 'ko_KR',
    type: 'website',
    url: "https://gcjungso.diginori.com",
    images: {
      url: "https://gcjungso.diginori.com/opengraph-image.jpeg",
      alt: siteDescription,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <GoogleTagManager gtmId="GTM-WL3TWQGD" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
