import { ArrowLeft, ExternalLink, Verified, Heart, Star, Globe, Check, X, Zap } from "lucide-react";
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

// 静态导出配置
export const dynamic = "force-static";

// 预生成所有工具页面
export function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

// 服务器端翻译函数
function getServerTranslation(key: string, locale: string = 'zh'): string {
  const translations: Record<string, Record<string, string>> = {
    zh: {
      'nav.home': '首页',
      'nav.allTools': '全部工具',
      'tool.featured': '精选',
      'tool.verified': '已验证',
      'tool.indie': '独立开发',
      'toolDetail.backToList': '返回列表',
      'toolDetail.features': '核心功能',
      'toolDetail.pros': '优点',
      'toolDetail.cons': '缺点',
      'toolDetail.rating': '用户评分',
      'toolDetail.visitSite': '访问官网',
      'toolDetail.pricing': '定价',
      'toolDetail.basicInfo': '基本信息',
      'toolDetail.category': '分类',
      'toolDetail.pricingModel': '定价模式',
      'toolDetail.verifiedStatus': '验证状态',
      'toolDetail.indieStatus': '独立开发',
      'toolDetail.relatedTools': '相关工具',
      'toolDetail.alternatives': '同类替代',
      'tool.perMonth': '/月',
      'pricing.free': '免费',
      'pricing.freemium': '免费增值',
      'pricing.paid': '付费',
      'pricing.freeDesc': '完全免费使用',
      'pricing.freemiumDesc': '免费版可用，高级功能付费',
      'pricing.paidDesc': '需要付费订阅',
      'notVerified': '未验证',
      'no': '否',
      'footer.copyright': '© 2026 ToolHunt - 发现最佳AI工具',
      'feature.codeGen': '代码生成',
      'feature.syntax': '语法高亮',
      'feature.errorDetect': '错误检测',
      'feature.multiLang': '多语言支持',
      'feature.taskManage': '任务管理',
      'feature.collab': '团队协作',
      'feature.tracking': '进度追踪',
      'feature.sync': '多端同步',
      'feature.aiGen': 'AI生成',
      'feature.templates': '模板库',
      'feature.preview': '实时预览',
      'feature.export': '多格式导出',
      'feature.chat': '智能对话',
      'feature.taskExec': '任务执行',
      'feature.qa': '问答系统',
      'feature.autoFlow': '自动化流程',
      'pro.free': '完全免费',
      'pro.noCard': '无需信用卡',
      'pro.freeTier': '免费版可用',
      'pro.payAsGo': '按需付费',
      'pro.openSource': '开源项目',
      'pro.community': '社区支持',
      'pro.apiAccess': 'API 接口',
      'pro.easyIntegrate': '易于集成',
      'pro.noCode': '无需编程',
      'pro.quickStart': '快速上手',
      'pro.friendly': '界面友好',
      'pro.frequentUpdate': '频繁更新',
      'con.subscription': '需要订阅',
      'con.noApi': '无 API',
      'con.limits': '功能限制',
      'con.learningCurve': '学习曲线',
    },
    en: {
      'nav.home': 'Home',
      'nav.allTools': 'All Tools',
      'tool.featured': 'Featured',
      'tool.verified': 'Verified',
      'tool.indie': 'Indie Made',
      'toolDetail.backToList': 'Back to list',
      'toolDetail.features': 'Features',
      'toolDetail.pros': 'Pros',
      'toolDetail.cons': 'Cons',
      'toolDetail.rating': 'Rating',
      'toolDetail.visitSite': 'Visit Site',
      'toolDetail.pricing': 'Pricing',
      'toolDetail.basicInfo': 'Basic Info',
      'toolDetail.category': 'Category',
      'toolDetail.pricingModel': 'Pricing Model',
      'toolDetail.verifiedStatus': 'Verified',
      'toolDetail.indieStatus': 'Indie Made',
      'toolDetail.relatedTools': 'Related Tools',
      'toolDetail.alternatives': 'Alternatives',
      'tool.perMonth': '/mo',
      'pricing.free': 'Free',
      'pricing.freemium': 'Freemium',
      'pricing.paid': 'Paid',
      'pricing.freeDesc': 'Completely free',
      'pricing.freemiumDesc': 'Free tier available',
      'pricing.paidDesc': 'Requires subscription',
      'notVerified': 'Not verified',
      'no': 'No',
      'footer.copyright': '© 2026 ToolHunt - Discover Best AI Tools',
      'pro.free': 'Completely free',
      'pro.noCard': 'No credit card needed',
      'pro.freeTier': 'Free tier available',
      'pro.payAsGo': 'Pay as you go',
      'pro.openSource': 'Open source',
      'pro.community': 'Community support',
      'con.subscription': 'Requires subscription',
      'con.noApi': 'No API',
      'con.limits': 'Feature limits',
      'con.learningCurve': 'Learning curve',
    },
  };
  return translations[locale]?.[key] || key;
}

function getCategoryTranslation(categoryId: string, locale: string = 'zh'): string {
  const categoryLabels: Record<string, Record<string, string>> = {
    zh: {
      coding: '编程开发',
      productivity: '效率工具',
      creative: '创意设计',
      agents: 'AI助手',
      content: '内容创作',
      automation: '自动化',
      video: '视频制作',
      audio: '音频处理',
      marketing: '营销工具',
      design: '设计工具',
      writing: '写作工具',
      research: '研究学习',
      business: '商业工具',
      support: '客服支持',
      education: '教育工具',
      sales: '销售工具',
    },
    en: {
      coding: 'Coding',
      productivity: 'Productivity',
      creative: 'Creative',
      agents: 'AI Agents',
      content: 'Content',
      automation: 'Automation',
      video: 'Video',
      audio: 'Audio',
      marketing: 'Marketing',
      design: 'Design',
      writing: 'Writing',
      research: 'Research',
      business: 'Business',
      support: 'Support',
      education: 'Education',
      sales: 'Sales',
    },
  };
  return categoryLabels[locale]?.[categoryId] || categoryId;
}

// 根据分类生成特性
function getFeatures(category: string, locale: string = 'zh'): string[] {
  const t = (key: string) => getServerTranslation(key, locale);
  const featureKeys: Record<string, string[]> = {
    coding: ["feature.codeGen", "feature.syntax", "feature.errorDetect", "feature.multiLang"],
    productivity: ["feature.taskManage", "feature.collab", "feature.tracking", "feature.sync"],
    creative: ["feature.aiGen", "feature.templates", "feature.preview", "feature.export"],
    agents: ["feature.chat", "feature.taskExec", "feature.qa", "feature.autoFlow"],
    content: ["feature.aiGen", "feature.templates", "feature.preview", "feature.export"],
    automation: ["feature.taskExec", "feature.collab", "feature.tracking", "feature.sync"],
    video: ["feature.aiGen", "feature.preview", "feature.export", "feature.multiLang"],
    audio: ["feature.aiGen", "feature.preview", "feature.export", "feature.multiLang"],
    marketing: ["feature.taskExec", "feature.tracking", "feature.collab", "feature.sync"],
    design: ["feature.aiGen", "feature.templates", "feature.preview", "feature.export"],
    writing: ["feature.aiGen", "feature.templates", "feature.preview", "feature.multiLang"],
    research: ["feature.qa", "feature.tracking", "feature.collab", "feature.sync"],
    business: ["feature.taskManage", "feature.tracking", "feature.collab", "feature.sync"],
    support: ["feature.chat", "feature.qa", "feature.taskExec", "feature.collab"],
    education: ["feature.qa", "feature.templates", "feature.tracking", "feature.preview"],
    sales: ["feature.taskManage", "feature.tracking", "feature.collab", "feature.taskExec"],
  };
  const keys = featureKeys[category] || ["feature.aiGen", "feature.templates", "feature.preview", "feature.export"];
  return keys.map(key => t(key));
}

// 根据工具生成优缺点
function getProsCons(pricingModel: string, tags: string[], locale: string = 'zh'): { pros: string[]; cons: string[] } {
  const t = (key: string) => getServerTranslation(key, locale);
  const pros: string[] = [];
  const cons: string[] = [];

  if (pricingModel === "free") {
    pros.push(t('pro.free'));
    pros.push(t('pro.noCard'));
  } else if (pricingModel === "freemium") {
    pros.push(t('pro.freeTier'));
    pros.push(t('pro.payAsGo'));
  }

  if (tags.includes("open-source")) {
    pros.push(t('pro.openSource'));
    pros.push(t('pro.community'));
  }
  if (tags.includes("api")) {
    pros.push(t('pro.apiAccess'));
    pros.push(t('pro.easyIntegrate'));
  }
  if (tags.includes("no-code")) {
    pros.push(t('pro.noCode'));
    pros.push(t('pro.quickStart'));
  }

  if (pricingModel === "paid") {
    cons.push(t('con.subscription'));
  }
  if (!tags.includes("api")) {
    cons.push(t('con.noApi'));
  }

  if (pros.length < 3) pros.push(t('pro.friendly'), t('pro.frequentUpdate'));
  if (cons.length < 2) cons.push(t('con.limits'), t('con.learningCurve'));

  return { pros: pros.slice(0, 4), cons: cons.slice(0, 3) };
}

export default async function ToolDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) notFound();

  const category = categories.find((c) => c.id === tool.category);
  const relatedTools = tools.filter((t) => t.category === tool.category && t.id !== tool.id).slice(0, 3);
  const alternatives = tools.filter((t) => t.pricingModel === tool.pricingModel && t.id !== tool.id).slice(0, 3);
  
  const locale = 'zh'; // 默认中文
  const t = (key: string) => getServerTranslation(key, locale);
  const tc = (catId: string) => getCategoryTranslation(catId, locale);
  
  const features = getFeatures(tool.category, locale);
  const { pros, cons } = getProsCons(tool.pricingModel, tool.tags, locale);

  const toolSchema = generateToolSchema({
    name: tool.name,
    description: tool.description,
    url: tool.url,
    pricingModel: tool.pricingModel,
    monthlyCostMin: tool.monthlyCostMin,
    monthlyCostMax: tool.monthlyCostMax,
    category: tc(tool.category),
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: t('nav.home'), url: "https://toolhunt.ai" },
    { name: t('nav.allTools'), url: "https://toolhunt.ai/tools" },
    { name: tc(tool.category), url: `https://toolhunt.ai/categories/${tool.category}` },
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
            <Link href="/" className="hover:text-[hsl(var(--foreground))]">{t('nav.home')}</Link>
            <span>/</span>
            <Link href="/tools" className="hover:text-[hsl(var(--foreground))]">{t('nav.allTools')}</Link>
            <span>/</span>
            <Link href={`/categories/${tool.category}`} className="hover:text-[hsl(var(--foreground))]">{tc(tool.category)}</Link>
            <span>/</span>
            <span className="text-[hsl(var(--foreground))]">{tool.name}</span>
          </nav>
        </div>

        <article className="container mx-auto px-4 py-8">
          <Link href="/tools" className="inline-flex items-center gap-2 text-sm text-[hsl(var(--foreground))]/60 hover:text-[hsl(var(--foreground))] mb-8">
            <ArrowLeft className="w-4 h-4" /> {t('toolDetail.backToList')}
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  {tool.isFeatured && <span className="inline-flex items-center gap-1 px-3 py-1 bg-[hsl(var(--featured))] text-black text-sm font-medium rounded-full"><Star className="w-4 h-4" />{t('tool.featured')}</span>}
                  {tool.isVerified && <span className="inline-flex items-center gap-1 px-3 py-1 bg-[hsl(var(--accent))]/20 text-[hsl(var(--accent))] text-sm rounded-full"><Verified className="w-4 h-4" />{t('tool.verified')}</span>}
                  {tool.indieMade && <span className="inline-flex items-center gap-1 px-3 py-1 bg-[hsl(var(--featured))]/20 text-[hsl(var(--featured))] text-sm rounded-full"><Heart className="w-4 h-4" />{t('tool.indie')}</span>}
                </div>
                <h1 className="text-4xl font-bold mb-4">{tool.name}</h1>
                <p className="text-lg text-[hsl(var(--foreground))]/70">{tool.description}</p>
              </div>

              {/* Screenshots */}
              <Screenshots toolName={tool.name} toolUrl={tool.url} screenshots={[]} />

              {/* Features */}
              <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Zap className="w-5 h-5 text-[hsl(var(--primary))]" />{t('toolDetail.features')}</h2>
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
                  <h3 className="font-semibold mb-4 text-green-500 flex items-center gap-2"><Check className="w-5 h-5" />{t('toolDetail.pros')}</h3>
                  <ul className="space-y-2">
                    {pros.map((pro, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-green-500" />{pro}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
                  <h3 className="font-semibold mb-4 text-red-400 flex items-center gap-2"><X className="w-5 h-5" />{t('toolDetail.cons')}</h3>
                  <ul className="space-y-2">
                    {cons.map((con, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm"><X className="w-4 h-4 text-red-400" />{con}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <Link href={`/categories/${tool.category}`}><span className="px-3 py-1.5 bg-[hsl(var(--primary))]/20 text-[hsl(var(--primary))] rounded-lg text-sm font-medium hover:bg-[hsl(var(--primary))]/30 transition-colors">{category?.icon} {tc(tool.category)}</span></Link>
                {tool.tags.map((tag) => (<Link key={tag} href={`/tags/${tag}`}><span className="px-3 py-1.5 bg-[hsl(var(--card))] border border-[hsl(var(--border))] text-sm rounded-lg hover:border-[hsl(var(--primary))]/50 transition-colors">#{tag}</span></Link>))}
              </div>

              {/* Rating */}
              <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6">
                <h2 className="text-xl font-bold mb-4">{t('toolDetail.rating')}</h2>
                <Rating toolId={tool.id} toolName={tool.name} />
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA */}
                <div className="bg-gradient-to-br from-[hsl(var(--primary))]/10 to-[hsl(var(--accent))]/10 border border-[hsl(var(--border))] rounded-2xl p-6">
                  <a href={tool.url} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full mb-4 gap-2 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] hover:opacity-90"><Globe className="w-4 h-4" />{t('toolDetail.visitSite')}<ExternalLink className="w-4 h-4" /></Button>
                  </a>
                  <FavoriteButton toolId={tool.id} toolName={tool.name} toolSlug={tool.slug} />
                </div>

                {/* Pricing */}
                <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6">
                  <h3 className="font-semibold mb-4">{t('toolDetail.pricing')}</h3>
                  <div className="text-3xl font-bold text-[hsl(var(--primary))] mb-2">
                    {tool.pricingModel === "free" ? t('pricing.free') : `$${tool.monthlyCostMin}${tool.monthlyCostMax > tool.monthlyCostMin ? ` - $${tool.monthlyCostMax}` : ""}${t('tool.perMonth')}`}
                  </div>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    {tool.pricingModel === "free" && `🆓 ${t('pricing.freeDesc')}`}
                    {tool.pricingModel === "freemium" && `🆓 ${t('pricing.freemiumDesc')}`}
                    {tool.pricingModel === "paid" && `💳 ${t('pricing.paidDesc')}`}
                  </p>
                </div>

                {/* Quick Info */}
                <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6">
                  <h3 className="font-semibold mb-4">{t('toolDetail.basicInfo')}</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-[hsl(var(--muted-foreground))]">{t('toolDetail.category')}</span><Link href={`/categories/${tool.category}`} className="hover:text-[hsl(var(--primary))]">{tc(tool.category)}</Link></div>
                    <div className="flex justify-between"><span className="text-[hsl(var(--muted-foreground))]">{t('toolDetail.pricingModel')}</span><span className={tool.pricingModel === "free" ? "text-green-500" : ""}>{tool.pricingModel === "free" ? t('pricing.free') : tool.pricingModel === "freemium" ? t('pricing.freemium') : t('pricing.paid')}</span></div>
                    <div className="flex justify-between"><span className="text-[hsl(var(--muted-foreground))]">{t('toolDetail.verifiedStatus')}</span><span className={tool.isVerified ? "text-[hsl(var(--accent))]" : ""}>{tool.isVerified ? `✓ ${t('tool.verified')}` : t('notVerified')}</span></div>
                    <div className="flex justify-between"><span className="text-[hsl(var(--muted-foreground))]">{t('toolDetail.indieStatus')}</span><span className={tool.indieMade ? "text-[hsl(var(--featured))]" : ""}>{tool.indieMade ? `✓ ${t('tool.indie')}` : t('no')}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Tools */}
          {relatedTools.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-6">{t('toolDetail.relatedTools')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedTools.map((relatedTool) => (
                  <Link key={relatedTool.id} href={`/tools/${relatedTool.slug}`}>
                    <ToolCard 
                      name={relatedTool.name} 
                      description={relatedTool.shortDesc} 
                      category={relatedTool.category} 
                      pricing={relatedTool.pricingModel === "free" ? t('pricing.free') : `$${relatedTool.monthlyCostMin}${t('tool.perMonth')}`} 
                      verified={relatedTool.isVerified} 
                      indieMade={relatedTool.indieMade} 
                    />
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Alternatives */}
          {alternatives.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-bold mb-6">{t('toolDetail.alternatives')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {alternatives.map((altTool) => (
                  <Link key={altTool.id} href={`/tools/${altTool.slug}`}>
                    <ToolCard 
                      name={altTool.name} 
                      description={altTool.shortDesc} 
                      category={altTool.category} 
                      pricing={altTool.pricingModel === "free" ? t('pricing.free') : `$${altTool.monthlyCostMin}${t('tool.perMonth')}`} 
                      verified={altTool.isVerified} 
                      indieMade={altTool.indieMade} 
                    />
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>

        <footer className="border-t border-[hsl(var(--border))] py-8 mt-12 bg-[hsl(var(--card))]">
          <div className="container mx-auto px-4 text-center text-sm text-[hsl(var(--muted-foreground))]">{t('footer.copyright')}</div>
        </footer>
      </main>
    </>
  );
}