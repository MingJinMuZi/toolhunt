import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Search, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "页面未找到",
  description: "您访问的页面不存在",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-[hsl(var(--border))]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-[hsl(var(--primary))]" />
            <span className="text-xl font-bold">ToolHunt</span>
          </Link>
        </div>
      </header>

      {/* 404 Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="text-8xl font-bold text-[hsl(var(--primary))]/20 mb-4">404</div>
          <h1 className="text-3xl font-bold mb-4">页面未找到</h1>
          <p className="text-[hsl(var(--foreground))]/60 mb-8 max-w-md mx-auto">
            抱歉，您访问的页面不存在或已被移除。请检查URL是否正确，或返回首页继续浏览。
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                返回首页
              </Button>
            </Link>
            <Link href="/tools">
              <Button className="gap-2">
                <Search className="w-4 h-4" />
                浏览工具
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}