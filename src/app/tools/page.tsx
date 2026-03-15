import { Search } from "lucide-react";
import { ToolCard } from "@/components/tool-card";
import { CategoryTabs } from "@/components/category-tabs";
import { tools, categories } from "@/data/tools";
import Link from "next/link";

export const metadata = {
  title: "All Tools - SoloAI Tools",
  description: "Browse all AI tools for indie hackers and solopreneurs.",
};

export default function ToolsPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-[hsl(var(--border))]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">SoloAI Tools</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/tools" className="text-sm text-[hsl(var(--primary))]">
              All Tools
            </Link>
            <Link href="/submit" className="text-sm text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]">
              Submit Tool
            </Link>
            <Link href="/about" className="text-sm text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]">
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* Search Section */}
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">All AI Tools</h1>

        {/* Search Bar */}
        <div className="flex gap-4 mb-8">
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[hsl(var(--foreground))]/50" />
            <input
              type="text"
              id="search-input"
              placeholder="Search tools..."
              className="w-full pl-12 pr-4 py-3 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--foreground))]/50 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <CategoryTabs />
        </div>

        {/* Results Count */}
        <p className="text-sm text-[hsl(var(--foreground))]/60 mb-6">
          {tools.length} tools available
        </p>

        {/* Tools Grid */}
        <div id="tools-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link key={tool.id} href={`/tools/${tool.slug}`}>
              <ToolCard
                name={tool.name}
                description={tool.shortDesc}
                category={tool.category}
                pricing={
                  tool.pricingModel === "free"
                    ? "Free"
                    : `$${tool.monthlyCostMin}${tool.monthlyCostMax > tool.monthlyCostMin ? `-$${tool.monthlyCostMax}` : ""}/mo`
                }
                verified={tool.isVerified}
                indieMade={tool.indieMade}
                featured={tool.isFeatured}
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[hsl(var(--border))] py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-[hsl(var(--foreground))]/60">
          <p>© 2026 SoloAI Tools. Made with ❤️ for indie hackers.</p>
        </div>
      </footer>

      {/* Client-side search script */}
      <script dangerouslySetInnerHTML={{ __html: `
        const searchInput = document.getElementById('search-input');
        const toolsGrid = document.getElementById('tools-grid');
        const cards = toolsGrid.querySelectorAll('a');
        
        searchInput.addEventListener('input', (e) => {
          const query = e.target.value.toLowerCase();
          cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(query) ? '' : 'none';
          });
        });
      `}} />
    </main>
  );
}