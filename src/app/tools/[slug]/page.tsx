import { Metadata } from "next";
import { ArrowLeft, ExternalLink, Verified, Heart, Star, Globe, Sparkles, Check, X, Zap, Users, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { tools } from "@/data/tools";
import { categories } from "@/data/categories";
import { ToolCard } from "@/components/tool-card";
import { Rating } from "@/components/rating";
import { FavoriteButton } from "@/components/favorites";
import { Screenshots } from "@/components/screenshots";
import { Header } from "@/components/header";
import { generateToolSchema, generateBreadcrumbSchema } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
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
    },
    alternates: { canonical: `https://toolhunt.ai/tools/${tool.slug}` },
  };
}

// 根据分类生成特性
function getFeatures(category: string, tags: string[]): string[] {
  const baseFeatures: Record<string, string[]> = {
    coding: ["代码生成", "语法高亮", "错误检测", "多语言支持"],
    productivity: ["任务管理", "团队协作", "进度追踪", "数据同步"],
    creative: ["AI生成", "模板库", "实时预览", "导出高清"],
    agents: ["智能对话", "任务执行", "知识问答", "自动化流程"],
    content: ["内容生成", "SEO优化", "多语言", "模板支持"],
    automation: ["工作流自动化", "API集成", "触发器", "数据分析"],
    video: ["视频生成", "剪辑编辑", "字幕生成", "特效模板"],
    audio: ["语音合成", "音频编辑", "降噪处理", "格式转换"],
    marketing: ["营销自动化", "数据分析", "A/B测试", "渠道集成"],
    design: ["AI设计", "模板库", "协作功能", "导出多格式"],
    writing: ["AI写作", "语法检查", "风格调整", "模板支持"],
    research: ["文献检索", "数据分析", "引用管理", "协作研究"],
    business: ["数据分析", "报表生成", "团队管理", "权限控制"],
    support: ["智能客服", "工单系统", "知识库", "多渠道支持"],
    education: ["课程创建", "学习追踪", "互动测验", "证书生成"],
    sales: ["线索管理", "销售预测", "CRM集成", "自动化跟进"],
  };
  return baseFeatures[category] || ["AI驱动", "易用界面", "数据安全", "持续更新"];
}

// 根据工具生成优缺点
function getProsCons(pricingModel: string, tags: string[]): { pros: string[]; cons: string[] } {
  const pros: string[] = [];
  const cons: string[] = [];

  if (pricingModel === "free") {
    pros.push("完全免费");
    pros.push("无需信用卡");
  } else if (pricingModel === "freemium") {
    pros.push("提供免费版本");
    pros.push("功能按需付费");
  }

  if (tags.includes("open-source")) {
    pros.push("开源可自托管");
    pros.push("社区支持活跃");
  }
  if (tags.includes("api")) {
    pros.push("提供API接口");
    pros.push("易于集成");
  }
  if (tags.includes("no-code")) {
    pros.push("无需编程知识");
    pros.push("上手快速");
  }

  if (pricingModel === "paid") {
    cons.push("需要付费订阅");
  }
  if (!tags.includes("api")) {
    cons.push("无API接口");
  }

  // 添加默认项
  if (pros.length < 3) pros.push("界面友好", "更新频繁");
  if (cons.length < 2) cons.push("部分功能限制", "学习曲线");

  return { pros: pros.slice(0, 4), cons: cons.slice(0, 3) };
}

export default async function ToolDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) notFound();

  const category = categories.find((c) => c.id === tool.category);
  const relatedTools = tools.filter((t) => t.category === tool.category && t.id !== tool.id).slice(0, 3);
  const alternatives = tools.filter((t) => t.pricingModel === tool.pricingModel && t.id !== tool.id).slice(0, 3);
  const features = getFeatures(tool.category, tool.tags);
  const { pros, cons } = getProsCons(tool.pricingModel, tool.tags);

  const toolSchema = generateToolSchema({
    name: tool.name, description: tool.description, url: tool.url,
    pricingModel: tool.pricingModel, monthlyCostMin: tool.monthlyCostMin,
    monthlyCostMax: tool.monthlyCostMax, category: category?.label || tool.category,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "首页", url: "https://toolhunt.ai" },
    { name: "工具", url: "https://toolhunt.ai/tools" },
    { name: category?.label || "分类", url: `https://toolhunt.ai/categories/${tool.category}` },
    { name: tool.name, url: `https://toolhunt.ai/tools/${tool.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="min-h-screen">
        <Header />

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-[hsl(var(--foreground))]/60">
            <Link href="/" className="hover:text-[hsl(var(--foreground))]">首页</Link>
            <span>/</span>
            <Link href="/tools" className="hover:text-[hsl(var(--foreground))]">工具</Link>
            <span>/</span>
            <Link href={`/categories/${tool.category}`} className="hover:text-[hsl(var(--foreground))]">{category?.label}</Link>
            <span>/</span>
            <span className="text-[hsl(var(--foreground))]">{tool.name}</span>
          </nav>
        </div>

        <article className="container mx-auto px-4 py-8">
          <Link href="/tools" className="inline-flex items-center gap-2 text-sm text-[hsl(var(--foreground))]/60 hover:text-[hsl(var(--foreground))] mb-8">
            <ArrowLeft className="w-4 h-4" /> 返回工具列表
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  {tool.isFeatured && <span className="inline-flex items-center gap-1 px-3 py-1 bg-[hsl(var(--featured))] text-black text-sm font-medium rounded-full"><Star className="w-4 h-4" />精选</span>}
                  {tool.isVerified && <span className="inline-flex items-center gap-1 px-3 py-1 bg-[hsl(var(--accent))]/20 text-[hsl(var(--accent))] text-sm rounded-full"><Verified className="w-4 h-4" />已验证</span>}
                  {tool.indieMade && <span className="inline-flex items-center gap-1 px-3 py-1 bg-[hsl(var(--featured))]/20 text-[hsl(var(--featured))] text-sm rounded-full"><Heart className="w-4 h-4" />独立开发</span>}
                </div>
                <h1 className="text-4xl font-bold mb-4">{tool.name}</h1>
                <p className="text-lg text-[hsl(var(--foreground))]/70">{tool.description}</p>
              </div>

              {/* Screenshots */}
              <Screenshots toolName={tool.name} toolUrl={tool.url} screenshots={[]} />

              {/* Features */}
              <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Zap className="w-5 h-5 text-[hsl(var(--primary))]" />核心功能</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 bg-[hsl(var(--background))] rounded-xl">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pros & Cons */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-6">
                  <h3 className="font-semibold mb-4 text-green-500 flex items-center gap-2"><Check className="w-5 h-5" />优点</h3>
                  <ul className="space-y-2">
                    {pros.map((pro, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-green-500" />{pro}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
                  <h3 className="font-semibold mb-4 text-red-400 flex items-center gap-2"><X className="w-5 h-5" />缺点</h3>
                  <ul className="space-y-2">
                    {cons.map((con, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm"><X className="w-4 h-4 text-red-400" />{con}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <Link href={`/categories/${tool.category}`}><span className="px-3 py-1.5 bg-[hsl(var(--primary))]/20 text-[hsl(var(--primary))] rounded-lg text-sm font-medium hover:bg-[hsl(var(--primary))]/30 transition-colors">{category?.icon} {category?.label}</span></Link>
                {tool.tags.map((tag) => (<Link key={tag} href={`/tags/${tag}`}><span className="px-3 py-1.5 bg-[hsl(var(--card))] border border-[hsl(var(--border))] text-sm rounded-lg hover:border-[hsl(var(--primary))]/50 transition-colors">#{tag}</span></Link>))}
              </div>

              {/* Rating */}
              <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6">
                <h2 className="text-xl font-bold mb-4">用户评价</h2>
                <Rating toolId={tool.id} toolName={tool.name} />
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA */}
                <div className="bg-gradient-to-br from-[hsl(var(--primary))]/10 to-[hsl(var(--accent))]/10 border border-[hsl(var(--border))] rounded-2xl p-6">
                  <a href={tool.url} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full mb-4 gap-2 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] hover:opacity-90"><Globe className="w-4 h-4" />访问官网<ExternalLink className="w-4 h-4" /></Button>
                  </a>
                  <FavoriteButton toolId={tool.id} toolName={tool.name} toolSlug={tool.slug} />
                </div>

                {/* Pricing */}
                <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6">
                  <h3 className="font-semibold mb-4">定价</h3>
                  <div className="text-3xl font-bold text-[hsl(var(--primary))] mb-2">
                    {tool.pricingModel === "free" ? "免费" : `$${tool.monthlyCostMin}${tool.monthlyCostMax > tool.monthlyCostMin ? ` - $${tool.monthlyCostMax}` : ""}/月`}
                  </div>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    {tool.pricingModel === "free" && "🆓 完全免费使用"}
                    {tool.pricingModel === "freemium" && "🆓 提供免费版本"}
                    {tool.pricingModel === "paid" && "💳 需要付费订阅"}
                  </p>
                </div>

                {/* Quick Info */}
                <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6">
                  <h3 className="font-semibold mb-4">基本信息</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-[hsl(var(--muted-foreground))]">分类</span><Link href={`/categories/${tool.category}`} className="hover:text-[hsl(var(--primary))]">{category?.label}</Link></div>
                    <div className="flex justify-between"><span className="text-[hsl(var(--muted-foreground))]">定价</span><span className={tool.pricingModel === "free" ? "text-green-500" : ""}>{tool.pricingModel === "free" ? "免费" : tool.pricingModel === "freemium" ? "免费增值" : "付费"}</span></div>
                    <div className="flex justify-between"><span className="text-[hsl(var(--muted-foreground))]">验证状态</span><span className={tool.isVerified ? "text-[hsl(var(--accent))]" : ""}>{tool.isVerified ? "✓ 已验证" : "未验证"}</span></div>
                    <div className="flex justify-between"><span className="text-[hsl(var(--muted-foreground))]">独立开发</span><span className={tool.indieMade ? "text-[hsl(var(--featured))]" : ""}>{tool.indieMade ? "✓ 是" : "否"}</span></div>
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
                {relatedTools.map((t) => (<Link key={t.id} href={`/tools/${t.slug}`}><ToolCard name={t.name} description={t.shortDesc} category={t.category} pricing={t.pricingModel === "free" ? "免费" : `$${t.monthlyCostMin}/月`} verified={t.isVerified} indieMade={t.indieMade} /></Link>))}
              </div>
            </section>
          )}

          {/* Alternatives */}
          {alternatives.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-bold mb-6">替代方案</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {alternatives.map((t) => (<Link key={t.id} href={`/tools/${t.slug}`}><ToolCard name={t.name} description={t.shortDesc} category={t.category} pricing={t.pricingModel === "free" ? "免费" : `$${t.monthlyCostMin}/月`} verified={t.isVerified} indieMade={t.indieMade} /></Link>))}
              </div>
            </section>
          )}
        </article>

        <footer className="border-t border-[hsl(var(--border))] py-8 mt-12 bg-[hsl(var(--card))]">
          <div className="container mx-auto px-4 text-center text-sm text-[hsl(var(--muted-foreground))]">© 2026 ToolHunt. Made with ❤️ for indie hackers.</div>
        </footer>
      </main>
    </>
  );
}