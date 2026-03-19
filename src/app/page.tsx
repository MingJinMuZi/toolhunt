import { Search, Sparkles, Verified, Heart, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ToolCard } from "@/components/tool-card";
import { CategoryTabs } from "@/components/category-tabs";
import { tools, categories } from "@/data/tools";
import Link from "next/link";

export const metadata = {
  title: "ToolHunt - AI Tools for Indie Hackers",
  description: "Curated AI tools for indie developers, solopreneurs, and makers. Find the best tools for coding, marketing, design, and productivity.",
};

export default function Home() {
  // Get featured tools
  const featuredTools = tools.filter(t => t.isFeatured).slice(0, 6);
  
  // Get recent tools (last added)
  const recentTools = tools.slice(0, 6);

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
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--primary))]/10 rounded-full text-sm text-[hsl(var(--primary))] mb-6">
          <Zap className="w-4 h-4" />
          <span>Curated for Indie Hackers</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Discover the Best{" "}
          <span className="text-[hsl(var(--primary))]">AI Tools</span>
          <br />
          for Your Projects
        </h1>
        
        <p className="text-lg text-[hsl(var(--foreground))]/70 mb-8 max-w-2xl mx-auto">
          Hand-picked AI tools for indie developers, solopreneurs, and makers.
          Find affordable solutions to build, market, and grow your business.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <Link href="/tools">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[hsl(var(--foreground))]/50" />
              <div className="w-full pl-12 pr-4 py-4 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl text-left text-[hsl(var(--foreground))]/50 group-hover:border-[hsl(var(--primary))]/50 transition-colors cursor-pointer">
                Search {tools.length} AI tools...
              </div>
              <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[hsl(var(--foreground))]/50 group-hover:text-[hsl(var(--primary))] transition-colors" />
            </div>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="flex justify-center flex-wrap gap-6 text-sm text-[hsl(var(--foreground))]/60">
          <div className="flex items-center gap-2">
            <Verified className="w-4 h-4 text-[hsl(var(--accent))]" />
            <span>{tools.filter(t => t.isVerified).length} Verified Tools</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-[hsl(var(--featured))]" />
            <span>{tools.filter(t => t.indieMade).length} Indie Made</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[hsl(var(--primary))]" />
            <span>{tools.filter(t => t.pricingModel === "free" || t.pricingModel === "freemium").length} Free Options</span>
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-[hsl(var(--featured))]" />
              Featured Tools
            </h2>
            <p className="text-sm text-[hsl(var(--foreground))]/60 mt-1">
              Top picks for indie hackers
            </p>
          </div>
          <Link href="/tools">
            <Button variant="outline">
              View All
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTools.map((tool) => (
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

      {/* Categories */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.slice(1).map((category) => (
            <Link key={category.id} href={`/tools?category=${category.id}`}>
              <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl p-4 text-center hover:border-[hsl(var(--primary))]/50 transition-all hover:scale-105 cursor-pointer">
                <span className="text-3xl">{category.icon}</span>
                <p className="font-medium mt-2">{category.label}</p>
                <p className="text-xs text-[hsl(var(--foreground))]/50">{category.count} tools</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Tools */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">Latest Tools</h2>
            <p className="text-sm text-[hsl(var(--foreground))]/60 mt-1">
              Recently added to our collection
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentTools.slice(0, 3).map((tool) => (
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
              />
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-[hsl(var(--primary))]/20 to-[hsl(var(--accent))]/20 border border-[hsl(var(--border))] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Have a Tool to Share?
          </h2>
          <p className="text-[hsl(var(--foreground))]/70 mb-6 max-w-xl mx-auto">
            Submit your AI tool and reach thousands of indie makers looking for solutions like yours.
          </p>
          <Link href="/submit">
            <Button size="lg" className="gap-2">
              Submit Your Tool
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[hsl(var(--border))] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[hsl(var(--primary))]" />
              <span className="font-bold">ToolHunt</span>
            </div>
            <nav className="flex items-center gap-6 text-sm text-[hsl(var(--foreground))]/60">
              <Link href="/tools" className="hover:text-[hsl(var(--foreground))]">All Tools</Link>
              <Link href="/submit" className="hover:text-[hsl(var(--foreground))]">Submit</Link>
              <Link href="/about" className="hover:text-[hsl(var(--foreground))]">About</Link>
              <a href="https://github.com/MingJinMuZi/toolhunt" target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(var(--foreground))]">
                GitHub
              </a>
            </nav>
            <p className="text-sm text-[hsl(var(--foreground))]/40">
              © 2026 ToolHunt. Made with ❤️ for indie hackers.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}