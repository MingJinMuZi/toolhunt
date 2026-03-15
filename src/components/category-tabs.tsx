"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "All", icon: "🚀" },
  { id: "agents", label: "AI Agents", icon: "🤖" },
  { id: "coding", label: "Coding", icon: "💻" },
  { id: "marketing", label: "Marketing", icon: "📢" },
  { id: "ops", label: "Ops", icon: "⚡" },
  { id: "productivity", label: "Productivity", icon: "📊" },
  { id: "free", label: "Free", icon: "🆓" },
];

export function CategoryTabs() {
  const [active, setActive] = useState("all");

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setActive(cat.id)}
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
            active === cat.id
              ? "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]"
              : "bg-[hsl(var(--card))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--card))]/80"
          )}
        >
          <span>{cat.icon}</span>
          <span>{cat.label}</span>
        </button>
      ))}
    </div>
  );
}