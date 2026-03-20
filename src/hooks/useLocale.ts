"use client";

import { useState, useEffect } from "react";
import { Locale, defaultLocale, t as translate } from "@/lib/i18n";

export function useLocale() {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("locale") as Locale;
    if (saved && (saved === "zh" || saved === "en")) {
      setLocale(saved);
    }
  }, []);

  const t = (key: string, params?: Record<string, string | number>) => {
    return translate(key, locale, params);
  };

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  return { locale, setLocale: changeLocale, t, mounted };
}