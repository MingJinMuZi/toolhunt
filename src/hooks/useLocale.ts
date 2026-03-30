"use client";

import { useState, useEffect } from "react";
import { Locale, defaultLocale, t as translate } from "@/lib/i18n";

export function useLocale() {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("locale") as Locale;
      if (saved && (saved === "zh" || saved === "en")) {
        setLocale(saved);
      }
    } catch {
      // localStorage 不可用或数据损坏，使用默认语言
      console.warn("localStorage unavailable, using default locale");
    }
  }, []);

  const t = (key: string, params?: Record<string, string | number>) => {
    return translate(key, locale, params);
  };

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    try {
      localStorage.setItem("locale", newLocale);
    } catch {
      console.warn("localStorage unavailable, locale not persisted");
    }
  };

  return { locale, setLocale: changeLocale, t, mounted };
}