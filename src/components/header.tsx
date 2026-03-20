"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Menu, X, Zap, Heart } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher, LanguageSwitcherSimple } from "./language-switcher";

interface MobileNavProps {
  currentPage?: string;
}

export function MobileNav({ currentPage }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/tools", label: "所有工具", icon: "🔍" },
    { href: "/favorites", label: "我的收藏", icon: "❤️" },
    { href: "/pricing/free", label: "免费工具", icon: "🆓" },
    { href: "/submit", label: "提交工具", icon: "📤" },
  ];

  return (
    <>
      {/* 移动端菜单按钮 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 hover:bg-[hsl(var(--card))] rounded-xl transition-colors"
        aria-label="菜单"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* 移动端菜单 */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] z-40 bg-[hsl(var(--background))]/95 backdrop-blur-lg">
          <nav className="container mx-auto px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  currentPage === link.href
                    ? "bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]"
                    : "hover:bg-[hsl(var(--card))]"
                }`}
              >
                <span className="text-xl">{link.icon}</span>
                <span className="font-medium">{link.label}</span>
              </Link>
            ))}
            
            {/* 提交按钮 */}
            <div className="pt-4 border-t border-[hsl(var(--border))]">
              <Link
                href="/submit"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] text-white rounded-xl font-medium"
              >
                <Zap className="w-4 h-4" />
                提交工具
              </Link>
            </div>

            {/* 收藏数量 */}
            <div className="pt-4">
              <div className="flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))]">
                <Heart className="w-4 h-4 text-[hsl(var(--featured))]" />
                <span>收藏数据保存在本地浏览器</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

// 导出简化的Header组件
export function Header({ currentPage }: { currentPage?: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-[hsl(var(--border))] glass-strong">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold">ToolHunt</span>
        </Link>
        
        {/* 桌面端导航 */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/tools" className="text-sm text-[hsl(var(--foreground))]/70 hover:text-[hsl(var(--primary))] transition-colors">
            所有工具
          </Link>
          <Link href="/favorites" className="text-sm text-[hsl(var(--foreground))]/70 hover:text-[hsl(var(--primary))] transition-colors">
            我的收藏
          </Link>
          <Link href="/submit" className="text-sm text-[hsl(var(--foreground))]/70 hover:text-[hsl(var(--primary))] transition-colors">
            提交工具
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          
          <Link href="/submit" className="hidden sm:block">
            <button className="gap-2 px-4 py-2 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] text-white rounded-xl hover:opacity-90 transition-opacity text-sm font-medium">
              <Zap className="w-4 h-4 inline mr-1" />
              提交工具
            </button>
          </Link>
          
          {/* 移动端菜单 */}
          <MobileNav currentPage={currentPage} />
        </div>
      </div>
    </header>
  );
}