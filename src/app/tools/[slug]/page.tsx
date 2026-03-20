"use client";

import { ArrowLeft, ExternalLink, Verified, Heart, Star, Globe, Check, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { tools } from "@/data/tools";
import { categories } from "@/data/categories";
import { ToolCard } from "@/components/tool-card";
import { Rating } from "@/components/rating";
import { FavoriteButton } from "@/components/favorites";
import { Screenshots } from "@/components/screenshots";
import { Header } from "@/components/header";
import { useTranslation } from "@/contexts/LocaleContext";
import { generateToolSchema, generateBreadcrumbSchema } from "@/lib/seo";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

// 根据分类生成特性
function getFeatures(category: string, t: (key: string) => string): string[] {
  const featureKeys: Record<string, string[]> = {
    coding: ["feature.codeGen", "feature.syntax", "feature.errorDetect", "feature.multiLang"],
    productivity: ["feature.taskManage", "feature.collab", "feature.tracking", "feature.sync"],
    creative: ["feature.aiGen", "feature.templates", "feature.preview", "feature.export"],
    agents: ["feature.chat", "feature.taskExec", "feature.qa", "feature.autoFlow"],
    content: ["feature.contentGen", "feature.seo", "feature.i18n", "feature.tpl"],
    automation: ["feature.workflow", "feature.api", "feature.trigger", "feature.analytics"],
    video: ["feature.videoGen", "feature.editing", "feature.subtitle", "feature.effects"],
    audio: ["feature.tts", "feature.audioEdit", "feature.noise", "feature.format"],
    marketing: ["feature.autoMarket", "feature.dataAnalytics", "feature.abTest", "feature.channel"],
    design: ["feature.aiDesign", "feature.designTpl", "feature.collabDesign", "feature.exportDesign"],
    writing: ["feature.aiWriting", "feature.grammar", "feature.style", "feature.writeTpl"],
    research: ["feature.litSearch", "feature.dataAnalysis", "feature.citation", "feature.researchCollab"],
    business: ["feature.bizAnalytics", "feature.reports", "feature.teamManage", "feature.permissions"],
    support: ["feature.smartSupport", "feature.tickets", "feature.knowledgeBase", "feature.multiChannel"],
    education: ["feature.courseCreate", "feature.learningTrack", "feature.quiz", "feature.cert"],
    sales: ["feature.leads", "feature.forecast", "feature.crm", "feature.autoFollow"],
  };
  const keys = featureKeys[category] || ["feature.ai", "feature.easyUI", "feature.security", "feature.updates"];
  return keys.map(key => t(key));
}

// 根据工具生成优缺点
function getProsCons(pricingModel: string, tags: string[], t: (key: string) => string): { pros: string[]; cons: string[] } {
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

export default function ToolDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { t, tc, tool: getToolTrans } = useTranslation();

  const tool = tools.find((t) => t.slug === slug);
  if (!tool) notFound();

  const category = categories.find((c) => c.id === tool.category);
  const relatedTools = tools.filter((t) => t.category === tool.category && t.id !== tool.id).slice(0, 3);
  const alternatives = tools.filter((t) => t.pricingModel === tool.pricingModel && t.id !== tool.id).slice(0, 3);
  const features = getFeatures(tool.category, t);
  const { pros, cons } = getProsCons(tool.pricingModel, tool.tags, t);
  const toolTrans = getToolTrans(tool.slug);

  const toolSchema = generateToolSchema({
    name: tool.name, description: toolTrans.description || tool.description, url: tool.url,
    pricingModel: tool.pricingModel, monthlyCostMin: tool.monthlyCostMin,
    monthlyCostMax: tool.monthlyCostMax, category: tc(tool.category),
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: t('nav.home') || "首页", url: "https://toolhunt.ai" },
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
            <Link href="/" className="hover:text-[hsl(var(--foreground))]">{t('nav.home') || '首页'}</Link>
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
                <p className="text-lg text-[hsl(var(--foreground))]/70">{toolTrans.description || tool.description}</p>
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
                {relatedTools.map((relatedTool) => {
                  const relatedTrans = getToolTrans(relatedTool.slug);
                  return (
                    <Link key={relatedTool.id} href={`/tools/${relatedTool.slug}`}>
                      <ToolCard 
                        name={relatedTool.name} 
                        description={relatedTrans.shortDesc || relatedTool.shortDesc} 
                        category={relatedTool.category} 
                        pricing={relatedTool.pricingModel === "free" ? t('pricing.free') : `$${relatedTool.monthlyCostMin}${t('tool.perMonth')}`} 
                        verified={relatedTool.isVerified} 
                        indieMade={relatedTool.indieMade} 
                      />
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {/* Alternatives */}
          {alternatives.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-bold mb-6">{t('toolDetail.alternatives')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {alternatives.map((altTool) => {
                  const altTrans = getToolTrans(altTool.slug);
                  return (
                    <Link key={altTool.id} href={`/tools/${altTool.slug}`}>
                      <ToolCard 
                        name={altTool.name} 
                        description={altTrans.shortDesc || altTool.shortDesc} 
                        category={altTool.category} 
                        pricing={altTool.pricingModel === "free" ? t('pricing.free') : `$${altTool.monthlyCostMin}${t('tool.perMonth')}`} 
                        verified={altTool.isVerified} 
                        indieMade={altTool.indieMade} 
                      />
                    </Link>
                  );
                })}
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