import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Minipedia Blog",
  description: "Latest in Technology and Football Trends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-900 text-gray-100 min-h-screen flex flex-col antialiased`}
      >
        <Header />
        <main className="flex-grow container mx-auto px-0 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
