import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { tools } from "@/data/tools";
import { categories, getCategorySEO } from "@/data/categories";
import { ToolCard } from "@/components/tool-card";
import { Button } from "@/components/ui/button";
import { generateBreadcrumbSchema, generateWebsiteSchema } from "@/lib/seo";

// 静态生成所有分类页面
export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.id,
  }));
}

// 动态生成SEO元数据
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categoryId } = await params;
  const seo = getCategorySEO(categoryId);
  
  if (!seo) {
    return {
      title: "分类未找到",
    };
  }

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "website",
    },
    alternates: {
      canonical: `https://toolhunt.ai/categories/${categoryId}`,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categoryId } = await params;
  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    notFound();
  }

  const categoryTools = tools.filter((t) => t.category === categoryId);
  const seo = getCategorySEO(categoryId);

  // 结构化数据
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "首页", url: "https://toolhunt.ai" },
    { name: "分类", url: "https://toolhunt.ai/tools" },
    { name: category.label, url: `https://toolhunt.ai/categories/${category.id}` },
  ]);

  const websiteSchema = generateWebsiteSchema();

  return (
    <>
      {/* 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <main className="min-h-screen">
        {/* Header */}
        <header className="border-b border-[hsl(var(--border))]">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-[hsl(var(--primary))]" />
              <span className="text-xl font-bold">ToolHunt</span>
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/tools" className="text-sm hover:text-[hsl(var(--primary))]">
                所有工具
              </Link>
              <Link href="/submit" className="text-sm hover:text-[hsl(var(--primary))]">
                提交工具
              </Link>
            </nav>
          </div>
        </header>

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-[hsl(var(--foreground))]/60">
            <Link href="/" className="hover:text-[hsl(var(--foreground))]">
              首页
            </Link>
            <span>/</span>
            <Link href="/tools" className="hover:text-[hsl(var(--foreground))]">
              工具
            </Link>
            <span>/</span>
            <span className="text-[hsl(var(--foreground))]">{category.label}</span>
          </nav>
        </div>

        {/* Category Hero */}
        <section className="container mx-auto px-4 py-8">
          <Link href="/tools">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回全部工具
            </Button>
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{category.icon}</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">
                最佳{category.label}AI工具
              </h1>
              <p className="text-[hsl(var(--foreground))]/60 mt-2">
                {category.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-[hsl(var(--foreground))]/60">
            <span>{categoryTools.length} 个工具</span>
            <span>•</span>
            <span>{categoryTools.filter((t) => t.isVerified).length} 已验证</span>
            <span>•</span>
            <span>{categoryTools.filter((t) => t.pricingModel === "free").length} 免费</span>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryTools.map((tool) => (
              <Link key={tool.id} href={`/tools/${tool.slug}`}>
                <ToolCard
                  name={tool.name}
                  description={tool.shortDesc}
                  category={tool.category}
                  pricing={
                    tool.pricingModel === "free"
                      ? "免费"
                      : `$${tool.monthlyCostMin}${tool.monthlyCostMax > tool.monthlyCostMin ? `-$${tool.monthlyCostMax}` : ""}/月`
                  }
                  verified={tool.isVerified}
                  indieMade={tool.indieMade}
                  featured={tool.isFeatured}
                />
              </Link>
            ))}
          </div>

          {categoryTools.length === 0 && (
            <div className="text-center py-20 text-[hsl(var(--foreground))]/60">
              <p>该分类暂无工具</p>
            </div>
          )}
        </section>

        {/* Related Categories */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-xl font-bold mb-4">其他分类</h2>
          <div className="flex flex-wrap gap-3">
            {categories
              .filter((c) => c.id !== category.id && c.id !== "all")
              .map((c) => (
                <Link key={c.id} href={`/categories/${c.id}`}>
                  <div className="px-4 py-2 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg hover:border-[hsl(var(--primary))]/50 transition-colors">
                    <span className="mr-2">{c.icon}</span>
                    {c.label}
                  </div>
                </Link>
              ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[hsl(var(--border))] py-8 mt-12">
          <div className="container mx-auto px-4 text-center text-sm text-[hsl(var(--foreground))]/40">
            © 2026 ToolHunt. Made with ❤️ for indie hackers.
          </div>
        </footer>
      </main>
    </>
  );
}