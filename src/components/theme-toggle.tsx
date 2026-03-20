"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      setIsDark(false);
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  if (!mounted) {
    return (
      <button className="p-2 rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--border))]">
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]/50 transition-all hover:scale-105"
      aria-label={isDark ? "切换到亮色模式" : "切换到暗色模式"}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-[hsl(var(--featured))]" />
      ) : (
        <Moon className="w-5 h-5 text-[hsl(var(--primary))]" />
      )}
    </button>
  );
}