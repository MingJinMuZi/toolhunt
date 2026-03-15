import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoloAI Tools - AI Tools for Solopreneurs & Indie Makers",
  description: "Curated AI tools directory for indie hackers and solopreneurs. Find the best AI agents, coding assistants, marketing tools, and more.",
  keywords: "AI tools, indie hackers, solopreneurs, AI agents, coding assistants, marketing tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}