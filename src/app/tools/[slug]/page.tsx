import { Metadata } from "next";
import { ArrowLeft, ExternalLink, Verified, Heart, Star, Globe, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { tools } from "@/data/tools";
import { categories } from "@/data/categories";
import { ToolCard } from "@/components/tool-card";
import { Rating } from "@/components/rating";
import { FavoriteButton } from "@/components/favorites";
import { Screenshots } from "@/components/screenshots";
import { generateToolSchema, generateBreadcrumbSchema } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) return { title: "工具未找到" };

  const category = categories.find((c) => c.id === tool.category);
  const categoryLabel = category?.label || tool.category;

  return {
    title: `${tool.name} - ${tool.shortDesc}`,
    description: `${tool.name}是${categoryLabel}领域的AI工具。${tool.description}。查看定价、功能和替代方案。`,
    keywords: `${tool.name}, ${categoryLabel}AI工具, ${tool.tags.join(", ")}`,
    openGraph: {
      title: `${tool.name} - ${tool.shortDesc}`,
      description: tool.description,
      type: "website",
      url: `https://toolhunt.ai/tools/${tool.slug}`,
      images: tool.logoUrl ? [{ url: tool.logoUrl }] : undefined,
    },
    twitter: {
      card: "summary",
      title: `${tool.name} - ${tool.shortDesc}`,
      description: tool.description,
    },
    alternates: {
      canonical: `https://toolhunt.ai/tools/${tool.slug}`,
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

  const category = categories.find((c) => c.id === tool.category);

  // 结构化数据
  const toolSchema = generateToolSchema({
    name: tool.name,
    description: tool.description,
    url: tool.url,
    pricingModel: tool.pricingModel,
    monthlyCostMin: tool.monthlyCostMin,
    monthlyCostMax: tool.monthlyCostMax,
    category: category?.label || tool.category,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "首页", url: "https://toolhunt.ai" },
    { name: "工具", url: "https://toolhunt.ai/tools" },
    { name: category?.label || "分类", url: `https://toolhunt.ai/categories/${tool.category}` },
    { name: tool.name, url: `https://toolhunt.ai/tools/${tool.slug}` },
  ]);

  return (
    <>
      {/* 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
              <Link href="/favorites" className="text-sm hover:text-[hsl(var(--primary))]">
                我的收藏
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
            <Link
              href={`/categories/${tool.category}`}
              className="hover:text-[hsl(var(--foreground))]"
            >
              {category?.label || tool.category}
            </Link>
            <span>/</span>
            <span className="text-[hsl(var(--foreground))]">{tool.name}</span>
          </nav>
        </div>

        {/* Content */}
        <article className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-sm text-[hsl(var(--foreground))]/60 hover:text-[hsl(var(--foreground))] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回工具列表
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
                    精选
                  </span>
                )}
                {tool.isVerified && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-[hsl(var(--accent))]/20 text-[hsl(var(--accent))] text-sm rounded-full">
                    <Verified className="w-4 h-4" />
                    已验证
                  </span>
                )}
                {tool.indieMade && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-[hsl(var(--featured))]/20 text-[hsl(var(--featured))] text-sm rounded-full">
                    <Heart className="w-4 h-4" />
                    独立开发
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <h1 className="text-4xl font-bold mb-4">{tool.name}</h1>
              <p className="text-lg text-[hsl(var(--foreground))]/70 mb-6">{tool.description}</p>

              {/* Screenshots */}
              <div className="mb-8">
                <Screenshots 
                  toolName={tool.name}
                  toolUrl={tool.url}
                  screenshots={[]} // 后续可从数据中获取
                />
              </div>

              {/* Category & Tags */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <Link href={`/categories/${tool.category}`}>
                  <span className="px-3 py-1 bg-[hsl(var(--primary))]/20 text-[hsl(var(--primary))] rounded-lg text-sm font-medium hover:bg-[hsl(var(--primary))]/30 transition-colors cursor-pointer">
                    {category?.icon} {category?.label}
                  </span>
                </Link>
                {tool.tags.map((tag) => (
                  <Link key={tag} href={`/tags/${tag}`}>
                    <span className="px-2 py-1 bg-[hsl(var(--card))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))]/60 text-xs rounded hover:border-[hsl(var(--primary))]/50 transition-colors cursor-pointer">
                      #{tag}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Rating */}
              <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl p-6 mb-8">
                <h2 className="text-lg font-semibold mb-4">用户评价</h2>
                <Rating toolId={tool.id} toolName={tool.name} />
              </div>

              {/* Pricing Info */}
              <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl p-6 mb-8">
                <h2 className="text-lg font-semibold mb-4">定价</h2>
                <div className="flex items-baseline gap-2">
                  <div className="text-3xl font-bold text-[hsl(var(--primary))]">
                    {tool.pricingModel === "free"
                      ? "免费"
                      : `$${tool.monthlyCostMin}${tool.monthlyCostMax > tool.monthlyCostMin ? ` - $${tool.monthlyCostMax}` : ""}`}
                  </div>
                  {tool.pricingModel !== "free" && (
                    <span className="text-[hsl(var(--foreground))]/60">/月</span>
                  )}
                </div>
                <p className="text-sm text-[hsl(var(--foreground))]/60 mt-2">
                  {tool.pricingModel === "free" && "🆓 完全免费使用"}
                  {tool.pricingModel === "freemium" && "🆓 提供免费版本，付费解锁更多功能"}
                  {tool.pricingModel === "paid" && "💳 需要付费订阅"}
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
                      访问官网
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                  <FavoriteButton toolId={tool.id} toolName={tool.name} toolSlug={tool.slug} />
                </div>

                {/* Quick Info */}
                <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl p-6">
                  <h3 className="font-semibold mb-4">基本信息</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[hsl(var(--foreground))]/60">分类</span>
                      <Link href={`/categories/${tool.category}`} className="hover:text-[hsl(var(--primary))]">
                        {category?.label}
                      </Link>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[hsl(var(--foreground))]/60">定价</span>
                      <Link href={`/pricing/${tool.pricingModel}`} className="hover:text-[hsl(var(--primary))]">
                        {tool.pricingModel === "free" ? "免费" : tool.pricingModel === "freemium" ? "免费增值" : "付费"}
                      </Link>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[hsl(var(--foreground))]/60">验证状态</span>
                      <span className={tool.isVerified ? "text-[hsl(var(--accent))]" : ""}>
                        {tool.isVerified ? "✓ 已验证" : "未验证"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[hsl(var(--foreground))]/60">独立开发</span>
                      <span className={tool.indieMade ? "text-[hsl(var(--featured))]" : ""}>
                        {tool.indieMade ? "✓ 是" : "否"}
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
              <h2 className="text-2xl font-bold mb-6">相关工具</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedTools.map((relatedTool) => (
                  <Link key={relatedTool.id} href={`/tools/${relatedTool.slug}`}>
                    <ToolCard
                      name={relatedTool.name}
                      description={relatedTool.shortDesc}
                      category={relatedTool.category}
                      pricing={
                        relatedTool.pricingModel === "free"
                          ? "免费"
                          : `$${relatedTool.monthlyCostMin}/月`
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
          <div className="container mx-auto px-4 text-center text-sm text-[hsl(var(--foreground))]/40">
            © 2026 ToolHunt.
          </div>
        </footer>
      </main>
    </>
  );
}