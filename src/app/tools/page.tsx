import { Sparkles } from "lucide-react";
import { ToolsList } from "@/components/tools-list";
import Link from "next/link";

export const metadata = {
  title: "All Tools - ToolHunt",
  description: "Browse all AI tools for indie hackers and solopreneurs. Find the best tools for coding, marketing, design, and productivity.",
};

export default function ToolsPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-[hsl(var(--border))]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-[hsl(var(--primary))]" />
            <span className="text-xl font-bold">ToolHunt</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/tools" className="text-sm text-[hsl(var(--primary))]">
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

      {/* Content */}
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">All AI Tools</h1>
        <p className="text-[hsl(var(--foreground))]/60 mb-8">
          Discover the best AI tools for indie hackers and solopreneurs
        </p>

        <ToolsList />
      </section>

      {/* Footer */}
      <footer className="border-t border-[hsl(var(--border))] py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-[hsl(var(--foreground))]/60">
          <p>© 2026 ToolHunt. Made with ❤️ for indie hackers.</p>
        </div>
      </footer>
    </main>
  );
}