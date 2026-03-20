import { Search, Sparkles, Verified, Heart, ArrowRight, Zap, TrendingUp, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ToolCard } from "@/components/tool-card";
import { Header } from "@/components/header";
import { tools, categories } from "@/data/tools";
import { generateFAQSchema, generateOrganizationSchema, defaultFAQs } from "@/lib/seo";
import Link from "next/link";

export const metadata = {
  title: "ToolHunt - 发现最佳AI工具 | AI工具导航站",
  description: "精心策划的AI工具合集，专为独立开发者、创业者和创作者打造。",
};

export default function Home() {
  const featuredTools = tools.filter(t => t.isFeatured).slice(0, 6);
  const faqSchema = generateFAQSchema(defaultFAQs.slice(0, 4));
  const orgSchema = generateOrganizationSchema();

  return (
    <main className="min-h-screen relative">
      {/* 结构化数据 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      {/* 背景装饰 */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(var(--primary))] opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[hsl(var(--accent))] opacity-5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--primary))]/10 border border-[hsl(var(--primary))]/20 rounded-full text-sm text-[hsl(var(--primary))] mb-8 animate-fade-in">
          <TrendingUp className="w-4 h-4" />
          <span>{tools.length}+ 精选AI工具</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
          发现最佳 <span className="text-gradient">AI工具</span>
          <br /><span className="text-[hsl(var(--foreground))]/70">助力你的项目</span>
        </h1>
        
        <p className="text-lg text-[hsl(var(--foreground))]/60 mb-10 max-w-2xl mx-auto animate-fade-in">
          精心策划的AI工具合集，专为独立开发者、创业者和创作者打造
        </p>

        {/* 搜索框 */}
        <div className="max-w-2xl mx-auto mb-12 animate-fade-in">
          <Link href="/tools">
            <div className="relative group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--primary))] transition-colors" />
              <div className="w-full pl-14 py-5 bg-[hsl(var(--card))] border-2 border-[hsl(var(--border))] rounded-2xl text-left text-[hsl(var(--muted-foreground))] group-hover:border-[hsl(var(--primary))]/50 transition-all cursor-pointer shadow-lg">
                搜索 {tools.length} 个AI工具...
              </div>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[hsl(var(--primary))] text-white text-xs rounded-lg">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>

        {/* 统计 */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 animate-fade-in">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Verified className="w-5 h-5 text-[hsl(var(--accent))]" />
              <span className="text-3xl font-bold">{tools.filter(t => t.isVerified).length}</span>
            </div>
            <span className="text-sm text-[hsl(var(--muted-foreground))]">已验证</span>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Heart className="w-5 h-5 text-[hsl(var(--featured))]" />
              <span className="text-3xl font-bold">{tools.filter(t => t.indieMade).length}</span>
            </div>
            <span className="text-sm text-[hsl(var(--muted-foreground))]">独立开发</span>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Star className="w-5 h-5 text-[hsl(var(--primary))]" />
              <span className="text-3xl font-bold">{tools.filter(t => t.isFeatured).length}</span>
            </div>
            <span className="text-sm text-[hsl(var(--muted-foreground))]">精选推荐</span>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Sparkles className="w-5 h-5 text-green-500" />
              <span className="text-3xl font-bold">{tools.filter(t => t.pricingModel === "free").length}</span>
            </div>
            <span className="text-sm text-[hsl(var(--muted-foreground))]">完全免费</span>
          </div>
        </div>

        {/* 快速筛选 */}
        <div className="flex flex-wrap justify-center gap-3 animate-fade-in">
          <Link href="/pricing/free" className="px-4 py-2 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-full text-sm hover:border-green-500/50 hover:text-green-500 transition-all">🆓 免费工具</Link>
          <Link href="/tags/open-source" className="px-4 py-2 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-full text-sm hover:border-[hsl(var(--primary))]/50 hover:text-[hsl(var(--primary))] transition-all">📖 开源项目</Link>
          <Link href="/tags/no-code" className="px-4 py-2 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-full text-sm hover:border-[hsl(var(--featured))]/50 hover:text-[hsl(var(--featured))] transition-all">🎯 无代码</Link>
        </div>
      </section>

      {/* Featured */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-[hsl(var(--featured))]/20 rounded-xl flex items-center justify-center">
            <Star className="w-5 h-5 text-[hsl(var(--featured))]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">精选推荐</h2>
            <p className="text-[hsl(var(--muted-foreground))]">编辑精心挑选</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTools.map((tool) => (
            <Link key={tool.id} href={`/tools/${tool.slug}`}>
              <ToolCard
                name={tool.name}
                description={tool.shortDesc}
                category={tool.category}
                pricing={tool.pricingModel === "free" ? "免费" : `$${tool.monthlyCostMin}/月`}
                verified={tool.isVerified}
                indieMade={tool.indieMade}
                featured={tool.isFeatured}
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">按分类浏览</h2>
          <p className="text-[hsl(var(--muted-foreground))]">选择你感兴趣的领域</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.slice(1, 13).map((category) => {
            const count = tools.filter(t => t.category === category.id).length;
            return (
              <Link key={category.id} href={`/tools?category=${category.id}`} className="group">
                <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 text-center hover:border-[hsl(var(--primary))]/50 transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="w-14 h-14 mx-auto mb-3 bg-[hsl(var(--primary))]/10 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <p className="font-medium mb-1">{category.label}</p>
                  <p className="text-xs text-[hsl(var(--muted-foreground))]">{count} 工具</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--primary))]/20 via-[hsl(var(--card))] to-[hsl(var(--accent))]/20 border border-[hsl(var(--border))] rounded-3xl p-8 md:p-16 text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-[hsl(var(--primary))] rounded-2xl flex items-center justify-center">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">有好用的AI工具？</h2>
          <p className="text-[hsl(var(--muted-foreground))] mb-8 max-w-xl mx-auto">提交你的工具，让数以万计的独立开发者发现你的产品</p>
          <Link href="/submit">
            <Button size="lg" className="gap-2 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))]">提交工具 <ArrowRight className="w-5 h-5" /></Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[hsl(var(--border))] py-12 bg-[hsl(var(--card))]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">ToolHunt</span>
              </Link>
              <p className="text-[hsl(var(--muted-foreground))] max-w-md">精心策划的AI工具合集，帮助独立开发者发现最佳工具。</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">快速链接</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/tools" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]">所有工具</Link>
                <Link href="/pricing/free" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]">免费工具</Link>
                <Link href="/favorites" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]">我的收藏</Link>
              </nav>
            </div>
            <div>
              <h3 className="font-semibold mb-4">热门分类</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/categories/coding" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]">编程开发</Link>
                <Link href="/categories/productivity" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]">效率工具</Link>
                <Link href="/categories/creative" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]">创意设计</Link>
              </nav>
            </div>
          </div>
          <div className="pt-8 border-t border-[hsl(var(--border))] text-center">
            <p className="text-sm text-[hsl(var(--muted-foreground))]">© 2026 ToolHunt. Made with ❤️ for indie hackers.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}