"use client";

import { Verified, Heart, Star } from "lucide-react";
import { useTranslation } from "@/contexts/LocaleContext";

interface ToolCardProps {
  name: string;
  description: string;
  category: string;
  pricing: string;
  verified?: boolean;
  indieMade?: boolean;
  featured?: boolean;
  logoUrl?: string;
}

// 分类图标映射 - 完整版
const categoryIcons: Record<string, { icon: string; color: string }> = {
  coding: { icon: "💻", color: "from-blue-500 to-cyan-400" },
  productivity: { icon: "⚡", color: "from-yellow-500 to-orange-400" },
  creative: { icon: "🎨", color: "from-purple-500 to-pink-400" },
  agents: { icon: "🤖", color: "from-indigo-500 to-blue-400" },
  content: { icon: "✍️", color: "from-green-500 to-teal-400" },
  automation: { icon: "🔄", color: "from-cyan-500 to-blue-400" },
  video: { icon: "🎬", color: "from-red-500 to-orange-400" },
  audio: { icon: "🎵", color: "from-pink-500 to-purple-400" },
  marketing: { icon: "📢", color: "from-orange-500 to-yellow-400" },
  design: { icon: "🎯", color: "from-violet-500 to-purple-400" },
  writing: { icon: "📝", color: "from-emerald-500 to-green-400" },
  research: { icon: "🔬", color: "from-teal-500 to-cyan-400" },
  business: { icon: "💼", color: "from-slate-500 to-gray-400" },
  support: { icon: "💬", color: "from-sky-500 to-blue-400" },
  education: { icon: "📚", color: "from-amber-500 to-yellow-400" },
  sales: { icon: "📈", color: "from-lime-500 to-green-400" },
  ops: { icon: "⚙️", color: "from-gray-500 to-slate-400" },
};

export function ToolCard({
  name,
  description,
  category,
  pricing,
  verified = false,
  indieMade = false,
  featured = false,
  logoUrl,
}: ToolCardProps) {
  const { t, tc } = useTranslation();
  const categoryInfo = categoryIcons[category] || { icon: "🔧", color: "from-gray-500 to-gray-400" };

  return (
    <div className={`
      group relative bg-[hsl(var(--card))] border rounded-2xl p-5 
      transition-all duration-300 hover:shadow-xl
      ${featured 
        ? "border-[hsl(var(--featured))]/30 hover:border-[hsl(var(--featured))] hover:shadow-[hsl(var(--featured))]/10" 
        : "border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]/50 hover:shadow-[hsl(var(--primary))]/10"
      }
      hover:-translate-y-1
    `}>
      {/* Featured Badge */}
      {featured && (
        <div className="absolute -top-2 -right-2 z-10">
          <span className="flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-[hsl(var(--featured))] to-orange-400 text-black text-xs font-semibold rounded-full shadow-lg">
            <Star className="w-3 h-3" />
            {t('tool.featured')}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start gap-4 mb-3">
        {/* Logo */}
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${categoryInfo.color} p-0.5 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
          <div className="w-full h-full bg-[hsl(var(--background))] rounded-[10px] flex items-center justify-center text-xl">
            {logoUrl ? (
              <img src={logoUrl} alt={name} className="w-8 h-8 rounded" />
            ) : (
              <span>{categoryInfo.icon}</span>
            )}
          </div>
        </div>

        {/* Title & Badges */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg group-hover:text-[hsl(var(--primary))] transition-colors truncate">
            {name}
          </h3>
          <div className="flex items-center gap-2 mt-1.5">
            {verified && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))] text-xs rounded-full">
                <Verified className="w-3 h-3" />
                {t('tool.verified')}
              </span>
            )}
            {indieMade && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[hsl(var(--featured))]/10 text-[hsl(var(--featured))] text-xs rounded-full">
                <Heart className="w-3 h-3" />
                {t('tool.indie')}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-[hsl(var(--foreground))]/60 line-clamp-2 mb-4 min-h-[40px]">
        {description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-[hsl(var(--border))]">
        <span className="text-xs px-2.5 py-1 bg-[hsl(var(--background))] rounded-lg text-[hsl(var(--muted-foreground))] capitalize">
          {categoryInfo.icon} {tc(category)}
        </span>
        <span className={`text-sm font-semibold ${pricing === "免费" || pricing === "Free" ? "text-green-500" : "text-[hsl(var(--foreground))]"}`}>
          {pricing}
        </span>
      </div>
    </div>
  );
}