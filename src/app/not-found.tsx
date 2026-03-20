"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <div className="w-20 h-20 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Sparkles className="w-10 h-10 text-[hsl(var(--primary))]" />
        </div>
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-xl font-medium mb-2">页面未找到</h2>
        <p className="text-[hsl(var(--foreground))]/60 mb-6">
          抱歉，您访问的页面不存在或已被移除。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <button className="px-6 py-3 bg-[hsl(var(--primary))] text-white rounded-lg hover:opacity-90 transition-opacity">
              返回首页
            </button>
          </Link>
          <Link href="/tools">
            <button className="px-6 py-3 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg hover:border-[hsl(var(--primary))]/50 transition-colors">
              浏览所有工具
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}