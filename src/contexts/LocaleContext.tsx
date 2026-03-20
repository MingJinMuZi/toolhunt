"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useMemo, useCallback } from "react";
import { Locale, defaultLocale, t as translate, getCategoryName as getCategory, getTagName as getTag, getPricingLabel as getPricing } from "@/lib/i18n";
import { getToolTranslation, ToolTranslation } from "@/data/translations";

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  tc: (categoryId: string) => string;
  tt: (tagId: string) => string;
  tp: (pricing: string) => { label: string; desc: string };
  tool: (slug: string) => ToolTranslation;
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
  const [mounted, setMounted] = useState(false);

  // 首次加载从 localStorage 读取
  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale;
    if (saved && (saved === "zh" || saved === "en")) {
      setLocaleState(saved);
    }
    setMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    console.log('[LocaleContext] setLocale called:', newLocale);
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  }, []);

  // 所有翻译函数都依赖 locale，确保 locale 变化时重新创建
  const t = useCallback((key: string, params?: Record<string, string | number>) => {
    const result = translate(key, locale, params);
    return result;
  }, [locale]);

  const tc = useCallback((categoryId: string) => {
    const result = getCategory(categoryId, locale);
    return result;
  }, [locale]);

  const tt = useCallback((tagId: string) => {
    return getTag(tagId, locale);
  }, [locale]);

  const tp = useCallback((pricing: string) => {
    return getPricing(pricing, locale);
  }, [locale]);

  const tool = useCallback((slug: string) => {
    const result = getToolTranslation(slug, locale);
    return result;
  }, [locale]);

  const value = useMemo(() => {
    console.log('[LocaleContext] value updated, locale:', locale);
    return {
      locale,
      setLocale,
      t,
      tc,
      tt,
      tp,
      tool,
    };
  }, [locale, setLocale, t, tc, tt, tp, tool]);

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LocaleProvider");
  }
  console.log('[useTranslation] current locale:', context.locale);
  return context;
}