import { Verified, Heart, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToolCardProps {
  name: string;
  description: string;
  category: string;
  pricing: string;
  verified?: boolean;
  indieMade?: boolean;
  featured?: boolean;
  logoUrl?: string;
  url?: string;
  className?: string;
}

export function ToolCard({
  name,
  description,
  category,
  pricing,
  verified,
  indieMade,
  featured,
  logoUrl,
  url,
  className,
}: ToolCardProps) {
  const content = (
    <div
      className={cn(
        "group relative bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl p-6 transition-all hover:border-[hsl(var(--primary))]/50 hover:shadow-lg",
        featured && "border-[hsl(var(--featured))]/50",
        className
      )}
    >
      {/* Badges */}
      <div className="flex items-center gap-2 mb-4">
        {verified && (
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-[hsl(var(--accent))]/20 text-[hsl(var(--accent))] text-xs rounded-full">
            <Verified className="w-3 h-3" />
            Verified
          </span>
        )}
        {indieMade && (
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-[hsl(var(--featured))]/20 text-[hsl(var(--featured))] text-xs rounded-full">
            <Heart className="w-3 h-3" />
            Indie Made
          </span>
        )}
        {featured && (
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-[hsl(var(--featured))]/20 text-[hsl(var(--featured))] text-xs rounded-full">
            ⭐ Featured
          </span>
        )}
      </div>

      {/* Logo placeholder */}
      <div className="w-12 h-12 bg-[hsl(var(--background))] rounded-lg flex items-center justify-center mb-4 text-2xl">
        {logoUrl ? (
          <img src={logoUrl} alt={name} className="w-full h-full object-cover rounded-lg" />
        ) : (
          name.charAt(0)
        )}
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold mb-2 group-hover:text-[hsl(var(--primary))] transition-colors">
        {name}
      </h3>
      <p className="text-sm text-[hsl(var(--foreground))]/70 mb-4 line-clamp-2">
        {description}
      </p>

      {/* Meta */}
      <div className="flex items-center justify-between text-sm">
        <span className="px-2 py-1 bg-[hsl(var(--background))] rounded text-[hsl(var(--foreground))]/60 capitalize">
          {category}
        </span>
        <span className="text-[hsl(var(--primary))]">{pricing}</span>
      </div>

      {/* External link icon */}
      <ExternalLink className="absolute top-4 right-4 w-4 h-4 text-[hsl(var(--foreground))]/30 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}