import { ArrowLeft, ExternalLink, Verified, Heart, Star, Globe, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { tools } from "@/data/tools";
import { ToolCard } from "@/components/tool-card";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) return { title: "Tool Not Found - ToolHunt" };

  return {
    title: `${tool.name} - AI Tool for ${tool.category} | ToolHunt`,
    description: tool.description,
    openGraph: {
      title: `${tool.name} - ToolHunt`,
      description: tool.shortDesc,
      type: "website",
    },
  };
}

export default async function ToolDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);

  if (!tool) {
    notFound();
  }

  // Find related tools (same category)
  const relatedTools = tools
    .filter((t) => t.category === tool.category && t.id !== tool.id)
    .slice(0, 3);

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
            <Link href="/tools" className="text-sm text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]">
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

      {/* Content */}
      <article className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link
          href="/tools"
          className="inline-flex items-center gap-2 text-sm text-[hsl(var(--foreground))]/60 hover:text-[hsl(var(--foreground))] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all tools
        </Link>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2">
            {/* Badges */}
            <div className="flex items-center gap-2 mb-4">
              {tool.isFeatured && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[hsl(var(--featured))] text-black text-sm font-medium rounded-full">
                  <Star className="w-4 h-4" />
                  Featured
                </span>
              )}
              {tool.isVerified && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[hsl(var(--accent))]/20 text-[hsl(var(--accent))] text-sm rounded-full">
                  <Verified className="w-4 h-4" />
                  Verified
                </span>
              )}
              {tool.indieMade && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[hsl(var(--featured))]/20 text-[hsl(var(--featured))] text-sm rounded-full">
                  <Heart className="w-4 h-4" />
                  Indie Made
                </span>
              )}
            </div>

            {/* Title & Description */}
            <h1 className="text-4xl font-bold mb-4">{tool.name}</h1>
            <p className="text-lg text-[hsl(var(--foreground))]/70 mb-6">{tool.description}</p>

            {/* Category & Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="px-3 py-1 bg-[hsl(var(--primary))]/20 text-[hsl(var(--primary))] rounded-lg text-sm font-medium capitalize">
                {tool.category}
              </span>
              {tool.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-[hsl(var(--card))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))]/60 text-xs rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Pricing Info */}
            <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl p-6 mb-8">
              <h2 className="text-lg font-semibold mb-4">Pricing</h2>
              <div className="flex items-baseline gap-2">
                <div className="text-3xl font-bold text-[hsl(var(--primary))]">
                  {tool.pricingModel === "free"
                    ? "Free"
                    : `$${tool.monthlyCostMin}${tool.monthlyCostMax > tool.monthlyCostMin ? ` - $${tool.monthlyCostMax}` : ""}`}
                </div>
                {tool.pricingModel !== "free" && (
                  <span className="text-[hsl(var(--foreground))]/60">/month</span>
                )}
              </div>
              <p className="text-sm text-[hsl(var(--foreground))]/60 mt-2">
                {tool.pricingModel === "free" && "🆓 Completely free to use"}
                {tool.pricingModel === "freemium" && "🆓 Free tier available with paid upgrades"}
                {tool.pricingModel === "paid" && "💳 Paid subscription required"}
                {tool.pricingModel === "trial" && "🧪 Free trial available"}
              </p>
            </div>
          </div>

          {/* Right Column - CTA & Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* CTA Card */}
              <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl p-6">
                <a href={tool.url} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full mb-3 gap-2">
                    <Globe className="w-4 h-4" />
                    Visit Website
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
                <p className="text-xs text-[hsl(var(--foreground))]/50 text-center">
                  Opens in new tab
                </p>
              </div>

              {/* Quick Info */}
              <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl p-6">
                <h3 className="font-semibold mb-4">Quick Info</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[hsl(var(--foreground))]/60">Category</span>
                    <span className="capitalize">{tool.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[hsl(var(--foreground))]/60">Pricing</span>
                    <span className="capitalize">{tool.pricingModel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[hsl(var(--foreground))]/60">Verified</span>
                    <span className={tool.isVerified ? "text-[hsl(var(--accent))]" : ""}>
                      {tool.isVerified ? "✓ Yes" : "No"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[hsl(var(--foreground))]/60">Indie Made</span>
                    <span className={tool.indieMade ? "text-[hsl(var(--featured))]" : ""}>
                      {tool.indieMade ? "✓ Yes" : "No"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Tools */}
        {relatedTools.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedTools.map((relatedTool) => (
                <Link key={relatedTool.id} href={`/tools/${relatedTool.slug}`}>
                  <ToolCard
                    name={relatedTool.name}
                    description={relatedTool.shortDesc}
                    category={relatedTool.category}
                    pricing={
                      relatedTool.pricingModel === "free"
                        ? "Free"
                        : `$${relatedTool.monthlyCostMin}${relatedTool.monthlyCostMax > relatedTool.monthlyCostMin ? `-$${relatedTool.monthlyCostMax}` : ""}/mo`
                    }
                    verified={relatedTool.isVerified}
                    indieMade={relatedTool.indieMade}
                  />
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      {/* Footer */}
      <footer className="border-t border-[hsl(var(--border))] py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-[hsl(var(--foreground))]/60">
          <p>© 2026 ToolHunt. Made with ❤️ for indie hackers.</p>
        </div>
      </footer>
    </main>
  );
}