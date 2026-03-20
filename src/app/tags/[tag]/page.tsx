import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Tag } from "lucide-react";
import { tools } from "@/data/tools";
import { popularTags } from "@/data/categories";
import { ToolCard } from "@/components/tool-card";

// 标签描述
const tagDescriptions: Record<string, string> = {
  free: "完全免费使用的AI工具，无需付费即可享受核心功能",
  "open-source": "开源AI工具，可以自托管和二次开发",
  "no-code": "无代码AI工具，无需编程知识即可使用",
  api: "提供API接口的AI工具，方便开发者集成",
  "chrome-extension": "Chrome浏览器扩展，随时随地使用AI",
  mobile: "支持移动端的AI工具，iOS和Android可用",
  "self-hosted": "可自托管的AI工具，数据完全自主控制",
  enterprise: "企业级AI工具，支持团队协作和管理",
};

export async function generateStaticParams() {
  return popularTags.map((tag) => ({
    tag: tag.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag: tagId } = await params;
  const tagInfo = popularTags.find((t) => t.id === tagId);
  const description = tagDescriptions[tagId] || "";

  return {
    title: `${tagInfo?.label || tagId}AI工具 - 精选推荐`,
    description: description,
    keywords: `${tagInfo?.label}AI工具, ${tagId}, AI工具推荐`,
  };
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag: tagId } = await params;
  const tagInfo = popularTags.find((t) => t.id === tagId);
  const tagTools = tools.filter((t) => t.tags.includes(tagId));
  const description = tagDescriptions[tagId] || "";

  if (!tagInfo) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">标签未找到</h1>
          <Link href="/tools" className="text-[hsl(var(--primary))]">
            返回工具列表
          </Link>
        </div>
      </main>
    );
  }

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
            <Link href="/tools" className="text-sm hover:text-[hsl(var(--primary))]">
              所有工具
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
          <span className="text-[hsl(var(--foreground))]">{tagInfo.label}</span>
        </nav>
      </div>

      {/* Tag Hero */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-[hsl(var(--primary))]/10 rounded-xl flex items-center justify-center">
            <Tag className="w-8 h-8 text-[hsl(var(--primary))]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <span>{tagInfo.icon}</span>
              {tagInfo.label}AI工具
            </h1>
            <p className="text-[hsl(var(--foreground))]/60 mt-2">
              {description}
            </p>
          </div>
        </div>

        <div className="text-sm text-[hsl(var(--foreground))]/60">
          {tagTools.length} 个工具
        </div>
      </section>

      {/* Tools Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tagTools.map((tool) => (
            <Link key={tool.id} href={`/tools/${tool.slug}`}>
              <ToolCard
                name={tool.name}
                description={tool.shortDesc}
                category={tool.category}
                pricing={
                  tool.pricingModel === "free"
                    ? "免费"
                    : `$${tool.monthlyCostMin}/月`
                }
                verified={tool.isVerified}
                indieMade={tool.indieMade}
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Other Tags */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold mb-4">其他标签</h2>
        <div className="flex flex-wrap gap-3">
          {popularTags
            .filter((t) => t.id !== tagId)
            .map((t) => (
              <Link key={t.id} href={`/tags/${t.id}`}>
                <div className="px-4 py-2 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg hover:border-[hsl(var(--primary))]/50 transition-colors">
                  <span className="mr-2">{t.icon}</span>
                  {t.label}
                </div>
              </Link>
            ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[hsl(var(--border))] py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-[hsl(var(--foreground))]/40">
          © 2026 ToolHunt.
        </div>
      </footer>
    </main>
  );
}