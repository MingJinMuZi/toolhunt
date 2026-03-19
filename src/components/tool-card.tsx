import { Verified, Heart, Star } from "lucide-react";

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
  return (
    <div className={`
      group relative bg-[hsl(var(--card))] border rounded-xl p-5 
      transition-all duration-200 hover:shadow-lg hover:shadow-[hsl(var(--primary))]/5
      ${featured 
        ? "border-[hsl(var(--featured))]/50 hover:border-[hsl(var(--featured))]" 
        : "border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]/50"
      }
    `}>
      {/* Featured Badge */}
      {featured && (
        <div className="absolute -top-2 -right-2">
          <span className="flex items-center gap-1 px-2 py-1 bg-[hsl(var(--featured))] text-black text-xs font-medium rounded-full">
            <Star className="w-3 h-3" />
            Featured
          </span>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start gap-4 mb-3">
        {/* Logo */}
        <div className="w-12 h-12 rounded-lg bg-[hsl(var(--background))] border border-[hsl(var(--border))] flex items-center justify-center text-xl flex-shrink-0">
          {logoUrl ? (
            <img src={logoUrl} alt={name} className="w-8 h-8 rounded" />
          ) : (
            <span className="text-2xl">
              {category === "agents" && "🤖"}
              {category === "coding" && "💻"}
              {category === "marketing" && "📢"}
              {category === "ops" && "⚡"}
              {category === "productivity" && "📊"}
              {!["agents", "coding", "marketing", "ops", "productivity"].includes(category) && "🔧"}
            </span>
          )}
        </div>

        {/* Title & Badges */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg group-hover:text-[hsl(var(--primary))] transition-colors truncate">
            {name}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            {verified && (
              <span className="inline-flex items-center gap-1 text-xs text-[hsl(var(--accent))]">
                <Verified className="w-3 h-3" />
                Verified
              </span>
            )}
            {indieMade && (
              <span className="inline-flex items-center gap-1 text-xs text-[hsl(var(--featured))]">
                <Heart className="w-3 h-3" />
                Indie
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-[hsl(var(--foreground))]/70 line-clamp-2 mb-4">
        {description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-[hsl(var(--border))]">
        <span className="text-xs px-2 py-1 bg-[hsl(var(--background))] rounded-md capitalize text-[hsl(var(--foreground))]/60">
          {category}
        </span>
        <span className={`text-sm font-medium ${pricing === "Free" ? "text-[hsl(var(--accent))]" : "text-[hsl(var(--foreground))]"}`}>
          {pricing}
        </span>
      </div>
    </div>
  );
}