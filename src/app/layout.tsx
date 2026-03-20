import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ToolHunt - 发现最佳AI工具 | AI工具导航站",
    template: "%s | ToolHunt"
  },
  description: "发现和比较200+最佳AI工具。涵盖AI助手、编程、写作、设计等领域。每日更新，精选推荐。帮你找到最适合的AI工具。",
  keywords: "AI工具, AI导航, ChatGPT替代, AI软件, 人工智能工具, AI工具推荐, AI工具大全, 最佳AI工具",
  authors: [{ name: "ToolHunt Team" }],
  creator: "ToolHunt",
  publisher: "ToolHunt",
  metadataBase: new URL("https://toolhunt.ai"),
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://toolhunt.ai",
    siteName: "ToolHunt",
    title: "ToolHunt - 发现最佳AI工具",
    description: "发现和比较200+最佳AI工具。涵盖AI助手、编程、写作、设计等领域。",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "ToolHunt - AI工具导航站"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "ToolHunt - 发现最佳AI工具",
    description: "发现和比较200+最佳AI工具",
    images: ["/og.png"],
    creator: "@toolhunt"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "https://toolhunt.ai"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link rel="canonical" href="https://toolhunt.ai" />
        <meta name="theme-color" content="#8B5CF6" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}