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

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale;
    if (saved && (saved === "zh" || saved === "en")) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  }, []);

  const t = useCallback((key: string, params?: Record<string, string | number>) => 
    translate(key, locale, params), [locale]);

  const tc = useCallback((categoryId: string) => 
    getCategory(categoryId, locale), [locale]);

  const tt = useCallback((tagId: string) => 
    getTag(tagId, locale), [locale]);

  const tp = useCallback((pricing: string) => 
    getPricing(pricing, locale), [locale]);

  const tool = useCallback((slug: string) => 
    getToolTranslation(slug, locale), [locale]);

  const value = useMemo(() => ({
    locale,
    setLocale,
    t,
    tc,
    tt,
    tp,
    tool,
  }), [locale, setLocale, t, tc, tt, tp, tool]);

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
  return context;
}