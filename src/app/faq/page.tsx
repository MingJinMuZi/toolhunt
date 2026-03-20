import { Metadata } from "next";
import { Sparkles, HelpCircle } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/header";
import { generateFAQSchema, generateBreadcrumbSchema, defaultFAQs } from "@/lib/seo";

export const metadata: Metadata = {
  title: "常见问题 - ToolHunt",
  description: "关于ToolHunt的常见问题解答。了解工具收录、评分、收藏等功能的使用方法。",
};

export default function FAQPage() {
  const faqSchema = generateFAQSchema(defaultFAQs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "首页", url: "https://toolhunt.ai" },
    { name: "常见问题", url: "https://toolhunt.ai/faq" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="min-h-screen">
        <Header />

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-[hsl(var(--foreground))]/60">
            <Link href="/" className="hover:text-[hsl(var(--foreground))]">首页</Link>
            <span>/</span>
            <span className="text-[hsl(var(--foreground))]">常见问题</span>
          </nav>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 bg-[hsl(var(--primary))]/10 rounded-2xl flex items-center justify-center">
              <HelpCircle className="w-7 h-7 text-[hsl(var(--primary))]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">常见问题</h1>
              <p className="text-[hsl(var(--muted-foreground))]">关于ToolHunt的一切</p>
            </div>
          </div>

          {/* FAQ List */}
          <div className="space-y-6">
            {defaultFAQs.map((faq, index) => (
              <div key={index} className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6">
                <h3 className="font-semibold text-lg mb-3 flex items-start gap-3">
                  <span className="w-6 h-6 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center text-sm text-[hsl(var(--primary))] flex-shrink-0">
                    {index + 1}
                  </span>
                  {faq.question}
                </h3>
                <p className="text-[hsl(var(--muted-foreground))] leading-relaxed pl-9">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 p-6 bg-gradient-to-r from-[hsl(var(--primary))]/10 to-[hsl(var(--accent))]/10 border border-[hsl(var(--border))] rounded-2xl text-center">
            <p className="text-[hsl(var(--muted-foreground))] mb-4">还有其他问题？</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/submit" className="px-6 py-2 bg-[hsl(var(--primary))] text-white rounded-xl hover:opacity-90 transition-opacity">
                提交工具
              </Link>
              <a href="mailto:hello@toolhunt.ai" className="px-6 py-2 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl hover:border-[hsl(var(--primary))]/50 transition-colors">
                联系我们
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-[hsl(var(--border))] py-8 mt-12 bg-[hsl(var(--card))]">
          <div className="container mx-auto px-4 text-center text-sm text-[hsl(var(--muted-foreground))]">
            © 2026 ToolHunt.
          </div>
        </footer>
      </main>
    </>
  );
}