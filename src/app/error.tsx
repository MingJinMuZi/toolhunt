"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <div className="w-16 h-16 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Sparkles className="w-8 h-8 text-[hsl(var(--primary))]" />
        </div>
        <h1 className="text-2xl font-bold mb-4">出错了</h1>
        <p className="text-[hsl(var(--foreground))]/60 mb-6">
          页面加载时发生错误，请稍后重试。
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button onClick={reset} variant="outline" className="gap-2">
            <RefreshCw className="w-4 h-4" />
            重试
          </Button>
          <Link href="/">
            <Button className="gap-2">
              <Home className="w-4 h-4" />
              返回首页
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}