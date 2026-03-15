import { Search, Sparkles, Verified, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ToolCard } from "@/components/tool-card";
import { CategoryTabs } from "@/components/category-tabs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-[hsl(var(--border))]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-[hsl(var(--primary))]" />
            <span className="text-xl font-bold">SoloAI Tools</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/tools" className="text-sm text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors">
              All Tools
            </Link>
            <Link href="/submit" className="text-sm text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors">
              Submit Tool
            </Link>
            <Link href="/about" className="text-sm text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors">
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          AI Tools for{" "}
          <span className="text-[hsl(var(--primary))]">Indie Hackers</span>
        </h1>
        <p className="text-lg text-[hsl(var(--foreground))]/70 mb-8 max-w-2xl mx-auto">
          Curated AI tools for solopreneurs and indie makers. 
          Find the best tools to build, market, and grow your business.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[hsl(var(--foreground))]/50" />
            <input
              type="text"
              placeholder="Search AI tools..."
              className="w-full pl-12 pr-4 py-4 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--foreground))]/50 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
            />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="flex justify-center gap-8 text-sm text-[hsl(var(--foreground))]/60">
          <div className="flex items-center gap-2">
            <Verified className="w-4 h-4 text-[hsl(var(--accent))]" />
            <span>Verified Tools</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-[hsl(var(--featured))]" />
            <span>Indie Made</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[hsl(var(--primary))]" />
            <span>Free & Affordable</span>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="container mx-auto px-4 py-8">
        <CategoryTabs />
      </section>

      {/* Featured Tools */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-[hsl(var(--featured))]" />
            Featured Tools
          </h2>
          <Link href="/tools">
            <Button variant="outline">View All</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder cards */}
          <ToolCard
            name="Cursor"
            description="AI-powered code editor for pair programming"
            category="coding"
            pricing="Free - $20/mo"
            verified
            indieMade
          />
          <ToolCard
            name="Jasper"
            description="AI content generation for marketing"
            category="marketing"
            pricing="$49/mo"
            verified
          />
          <ToolCard
            name="Zapier"
            description="Automate workflows without code"
            category="ops"
            pricing="Free - $30/mo"
            verified
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Built by Indie Hackers, for Indie Hackers</h2>
          <p className="text-[hsl(var(--foreground))]/70 mb-6">
            Have a tool to share? Submit it for free and reach thousands of indie makers.
          </p>
          <Link href="/submit">
            <Button size="lg">Submit Your Tool</Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[hsl(var(--border))] py-8">
        <div className="container mx-auto px-4 text-center text-sm text-[hsl(var(--foreground))]/60">
          <p>© 2026 SoloAI Tools. Made with ❤️ for indie hackers.</p>
        </div>
      </footer>
    </main>
  );
}