import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Heart } from "lucide-react";
import { FavoritesList } from "@/components/favorites";

export const metadata: Metadata = {
  title: "我的收藏 - ToolHunt",
  description: "查看你收藏的AI工具",
  keywords: "AI工具收藏, 我的收藏, ToolHunt",
};

export default function FavoritesPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-[hsl(var(--border))]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-[hsl(var(--primary))]" />
            <span className="text-xl font-bold">ToolHunt</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/tools" className="text-sm hover:text-[hsl(var(--primary))]">
              所有工具
            </Link>
            <Link href="/submit" className="text-sm hover:text-[hsl(var(--primary))]">
              提交工具
            </Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Hero */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-[hsl(var(--featured))]/10 rounded-xl flex items-center justify-center">
            <Heart className="w-8 h-8 text-[hsl(var(--featured))]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">我的收藏</h1>
            <p className="text-[hsl(var(--foreground))]/60 mt-1">
              你收藏的AI工具，数据保存在本地浏览器
            </p>
          </div>
        </div>

        {/* Favorites List */}
        <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl p-6">
          <FavoritesList />
        </div>

        {/* Tips */}
        <div className="mt-8 p-4 bg-[hsl(var(--primary))]/5 border border-[hsl(var(--primary))]/20 rounded-lg">
          <p className="text-sm text-[hsl(var(--foreground))]/70">
            💡 <strong>提示：</strong>收藏数据保存在浏览器本地，清除浏览器数据后会丢失。登录功能开发中，届时可同步收藏。
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[hsl(var(--border))] py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-[hsl(var(--foreground))]/40">
          © 2026 ToolHunt.
        </div>
      </footer>
    </main>
  );
}