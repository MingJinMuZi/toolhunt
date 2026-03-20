import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, DollarSign, Gift, Coins } from "lucide-react";
import { tools } from "@/data/tools";
import { ToolCard } from "@/components/tool-card";

const pricingInfo: Record<string, {
  title: string;
  description: string;
  icon: React.ReactNode;
  filter: (t: typeof tools[0]) => boolean;
}> = {
  free: {
    title: "免费AI工具",
    description: "完全免费使用的AI工具，无需付费即可享受核心功能",
    icon: <Gift className="w-8 h-8 text-green-500" />,
    filter: (t) => t.pricingModel === "free",
  },
  freemium: {
    title: "免费增值AI工具",
    description: "提供免费版本，付费可解锁更多高级功能",
    icon: <Coins className="w-8 h-8 text-yellow-500" />,
    filter: (t) => t.pricingModel === "freemium",
  },
  paid: {
    title: "付费AI工具",
    description: "需要订阅才能使用的专业AI工具",
    icon: <DollarSign className="w-8 h-8 text-blue-500" />,
    filter: (t) => t.pricingModel === "paid",
  },
  "open-source": {
    title: "开源AI工具",
    description: "开源项目，可自托管，社区驱动开发",
    icon: <Sparkles className="w-8 h-8 text-purple-500" />,
    filter: (t) => t.tags.includes("open-source"),
  },
};

export async function generateStaticParams() {
  return Object.keys(pricingInfo).map((pricing) => ({
    pricing,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pricing: string }>;
}): Promise<Metadata> {
  const { pricing } = await params;
  const info = pricingInfo[pricing];

  if (!info) {
    return { title: "页面未找到" };
  }

  return {
    title: `${info.title} - 精选推荐 | ToolHunt`,
    description: info.description,
    keywords: `${info.title}, AI工具, ${pricing}`,
  };
}

export default async function PricingPage({ params }: { params: Promise<{ pricing: string }> }) {
  const { pricing: pricingId } = await params;
  const info = pricingInfo[pricingId];

  if (!info) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">页面未找到</h1>
          <Link href="/tools" className="text-[hsl(var(--primary))]">
            返回工具列表
          </Link>
        </div>
      </main>
    );
  }

  const filteredTools = tools.filter(info.filter);

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
          <span className="text-[hsl(var(--foreground))]">{info.title}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl flex items-center justify-center">
            {info.icon}
          </div>
          <div>
            <h1 className="text-3xl font-bold">{info.title}</h1>
            <p className="text-[hsl(var(--foreground))]/60 mt-2">
              {info.description}
            </p>
          </div>
        </div>

        <div className="text-sm text-[hsl(var(--foreground))]/60">
          {filteredTools.length} 个工具
        </div>
      </section>

      {/* Tools Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
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

      {/* Other Pricing Options */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold mb-4">其他定价选项</h2>
        <div className="flex flex-wrap gap-3">
          {Object.entries(pricingInfo)
            .filter(([key]) => key !== pricingId)
            .map(([key, value]) => (
              <Link key={key} href={`/pricing/${key}`}>
                <div className="px-4 py-2 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg hover:border-[hsl(var(--primary))]/50 transition-colors flex items-center gap-2">
                  {value.icon}
                  {value.title}
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