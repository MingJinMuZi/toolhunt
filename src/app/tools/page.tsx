"use client";

import { Sparkles, Menu, X, Globe, Sun, Moon } from "lucide-react";
import { ToolsList } from "@/components/tools-list";
import { useTranslation } from "@/contexts/LocaleContext";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import Link from "next/link";
import { useState } from "react";

export default function ToolsPage() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-[hsl(var(--border))] sticky top-0 z-50 bg-[hsl(var(--background))]/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-[hsl(var(--primary))]" />
            <span className="text-xl font-bold">ToolHunt</span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/tools" className="text-sm text-[hsl(var(--primary))]">
              {t('nav.allTools')}
            </Link>
            <Link href="/favorites" className="text-sm text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors">
              {t('nav.favorites')}
            </Link>
            <Link href="/submit" className="text-sm text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors">
              {t('nav.submit')}
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[hsl(var(--border))] px-4 py-4">
            <nav className="flex flex-col gap-3">
              <Link href="/tools" className="text-[hsl(var(--primary))]">{t('nav.allTools')}</Link>
              <Link href="/favorites" className="text-[hsl(var(--foreground))]/70">{t('nav.favorites')}</Link>
              <Link href="/submit" className="text-[hsl(var(--foreground))]/70">{t('nav.submit')}</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Content */}
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">{t('nav.allTools')}</h1>
        <p className="text-[hsl(var(--foreground))]/60 mb-8">
          {t('home.hero.subtitle')}
        </p>

        <ToolsList />
      </section>

      {/* Footer */}
      <footer className="border-t border-[hsl(var(--border))] py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-[hsl(var(--foreground))]/60">
          <p>{t('footer.copyright')}</p>
        </div>
      </footer>
    </main>
  );
}