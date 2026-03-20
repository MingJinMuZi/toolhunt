"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Locale, defaultLocale, t as translate, getCategoryName as getCategory, getTagName as getTag, getPricingLabel as getPricing } from "@/lib/i18n";
import { getToolTranslation, ToolTranslation } from "@/data/translations";

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  tc: (categoryId: string) => string; // 获取分类名称
  tt: (tagId: string) => string; // 获取标签名称
  tp: (pricing: string) => { label: string; desc: string }; // 获取定价标签
  tool: (slug: string) => ToolTranslation; // 获取工具翻译
}

const LocaleContext = createContext<LocaleContextType>({
  locale: defaultLocale,
  setLocale: () => {},
  t: (key) => key,
  tc: (id) => id,
  tt: (id) => id,
  tp: (p) => ({ label: p, desc: "" }),
  tool: () => ({}),
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale;
    if (saved && (saved === "zh" || saved === "en")) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const t = (key: string, params?: Record<string, string | number>) => translate(key, locale, params);
  const tc = (categoryId: string) => getCategory(categoryId, locale);
  const tt = (tagId: string) => getTag(tagId, locale);
  const tp = (pricing: string) => getPricing(pricing, locale);
  const tool = (slug: string) => getToolTranslation(slug, locale);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, tc, tt, tp, tool }}>
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