import { Metadata } from "next";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { tools } from "@/data/tools";
import { categories } from "@/data/categories";
import { generateWebsiteSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "所有AI工具 - 工具列表 | ToolHunt",
  description: "浏览所有AI工具。筛选分类、定价和标签，找到最适合你的AI工具。",
  keywords: "AI工具列表, AI工具大全, 所有AI工具",
  alternates: {
    canonical: "https://toolhunt.ai/tools",
  },
};

export default function SiteMapPage() {
  const websiteSchema = generateWebsiteSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <main className="min-h-screen">
        <header className="border-b border-[hsl(var(--border))]">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-[hsl(var(--primary))]" />
              <span className="text-xl font-bold">ToolHunt</span>
            </Link>
          </div>
        </header>

        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8">网站地图</h1>

          {/* Categories */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">分类</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/categories/${category.id}`}
                  className="p-4 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg hover:border-[hsl(var(--primary))]/50 transition-colors"
                >
                  <span className="text-2xl mr-2">{category.icon}</span>
                  <span className="font-medium">{category.label}</span>
                  <span className="text-sm text-[hsl(var(--foreground))]/50 block mt-1">
                    {category.id === "all" ? tools.length : tools.filter((t) => t.category === category.id).length} 个工具
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* All Tools */}
          <section>
            <h2 className="text-2xl font-bold mb-4">所有工具 ({tools.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {tools.map((tool) => (
                <Link
                  key={tool.id}
                  href={`/tools/${tool.slug}`}
                  className="p-3 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded hover:border-[hsl(var(--primary))]/50 transition-colors"
                >
                  <span className="font-medium">{tool.name}</span>
                  <span className="text-sm text-[hsl(var(--foreground))]/50 ml-2">
                    {tool.shortDesc}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}