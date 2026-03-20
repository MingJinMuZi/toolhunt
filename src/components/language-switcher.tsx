"use client";

import { Globe } from "lucide-react";
import { locales, type Locale } from "@/lib/i18n";
import { useTranslation } from "@/contexts/LocaleContext";

const localeNames: Record<Locale, string> = {
  zh: "中文",
  en: "English",
};

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
  };

  return (
    <div className="relative group">
      <button className="p-2 rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]/50 transition-all hover:scale-105">
        <Globe className="w-5 h-5 text-[hsl(var(--muted-foreground))]" />
      </button>
      
      <div className="absolute right-0 top-full mt-2 py-2 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[120px] z-50">
        {locales.map((loc) => (
          <button
            key={loc}
            onClick={() => changeLocale(loc)}
            className={`w-full px-4 py-2 text-left text-sm hover:bg-[hsl(var(--primary))]/10 transition-colors ${
              locale === loc ? "text-[hsl(var(--primary))] font-medium" : "text-[hsl(var(--muted-foreground))]"
            }`}
          >
            {localeNames[loc]}
            {locale === loc && <span className="ml-2">✓</span>}
          </button>
        ))}
      </div>
    </div>
  );
}

export function LanguageSwitcherSimple() {
  const { locale, setLocale } = useTranslation();

  const toggleLocale = () => {
    const newLocale = locale === "zh" ? "en" : "zh";
    setLocale(newLocale);
  };

  return (
    <button onClick={toggleLocale} className="px-3 py-1.5 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg text-sm hover:border-[hsl(var(--primary))]/50 transition-colors">
      {locale === "zh" ? "EN" : "中文"}
    </button>
  );
}