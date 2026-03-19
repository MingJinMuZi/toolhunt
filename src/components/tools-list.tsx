"use client";

import { useState, useMemo, useCallback } from "react";
import { ToolCard } from "./tool-card";
import { CategoryTabs } from "./category-tabs";
import { SearchBar } from "./search-bar";
import { tools as allTools, categories } from "@/data/tools";
import Link from "next/link";

interface ToolsListProps {
  featuredOnly?: boolean;
  showSearch?: boolean;
  showFilters?: boolean;
  initialCategory?: string;
}

export function ToolsList({ 
  featuredOnly = false, 
  showSearch = true,
  showFilters = true,
  initialCategory = "all"
}: ToolsListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const filteredTools = useMemo(() => {
    let result = allTools;

    // Filter by featured
    if (featuredOnly) {
      result = result.filter(tool => tool.isFeatured);
    }

    // Filter by category
    if (selectedCategory && selectedCategory !== "all") {
      result = result.filter(tool => tool.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(tool => 
        tool.name.toLowerCase().includes(query) ||
        tool.shortDesc.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return result;
  }, [featuredOnly, selectedCategory, searchQuery]);

  return (
    <div>
      {/* Search */}
      {showSearch && (
        <div className="mb-6">
          <SearchBar onSearch={handleSearch} placeholder="Search tools by name, description, or tags..." />
        </div>
      )}

      {/* Category Filters */}
      {showFilters && (
        <div className="mb-6">
          <CategoryTabs 
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
      )}

      {/* Results Count */}
      <p className="text-sm text-[hsl(var(--foreground))]/60 mb-6">
        {filteredTools.length} {filteredTools.length === 1 ? 'tool' : 'tools'} found
        {searchQuery && ` for "${searchQuery}"`}
        {selectedCategory !== "all" && ` in ${categories.find(c => c.id === selectedCategory)?.label}`}
      </p>

      {/* Tools Grid */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <Link key={tool.id} href={`/tools/${tool.slug}`}>
              <ToolCard
                name={tool.name}
                description={tool.shortDesc}
                category={tool.category}
                pricing={
                  tool.pricingModel === "free"
                    ? "Free"
                    : `$${tool.monthlyCostMin}${tool.monthlyCostMax > tool.monthlyCostMin ? `-$${tool.monthlyCostMax}` : ""}/mo`
                }
                verified={tool.isVerified}
                indieMade={tool.indieMade}
                featured={tool.isFeatured}
              />
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-[hsl(var(--foreground))]/60 mb-4">No tools found matching your criteria.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="text-[hsl(var(--primary))] hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}