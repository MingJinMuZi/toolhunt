"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Locale, defaultLocale, t as translate } from "@/lib/i18n";

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: defaultLocale,
  setLocale: () => {},
  t: (key) => key,
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("locale") as Locale;
    if (saved && (saved === "zh" || saved === "en")) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const t = (key: string, params?: Record<string, string | number>) => {
    return translate(key, locale, params);
  };

  // 避免hydration不匹配，服务端渲染时返回默认语言
  const tWrapper = (key: string, params?: Record<string, string | number>) => translate(key, locale, params);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: tWrapper }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LocaleProvider");
  }
  return context;
}