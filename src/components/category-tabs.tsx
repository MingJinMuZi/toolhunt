"use client";

import { categories as defaultCategories } from "@/data/tools";
import { useTranslation } from "@/contexts/LocaleContext";

interface Category {
  id: string;
  label: string;
  icon: string;
  count?: number;
}

interface CategoryTabsProps {
  categories?: Category[];
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export function CategoryTabs({ 
  categories = defaultCategories,
  selectedCategory = "all",
  onSelectCategory
}: CategoryTabsProps) {
  const { tc } = useTranslation();

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const isSelected = selectedCategory === category.id;
        return (
          <button
            key={category.id}
            onClick={() => onSelectCategory?.(category.id)}
            className={`
              px-4 py-2 rounded-lg text-sm font-medium transition-all
              flex items-center gap-2
              ${isSelected 
                ? "bg-[hsl(var(--primary))] text-white" 
                : "bg-[hsl(var(--card))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary))]/50"
              }
            `}
          >
            <span>{category.icon}</span>
            <span>{tc(category.id)}</span>
            {category.count !== undefined && (
              <span className={`text-xs ${isSelected ? "text-white/70" : "text-[hsl(var(--foreground))]/50"}`}>
                {category.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}