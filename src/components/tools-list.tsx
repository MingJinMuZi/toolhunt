"use client";

import { useState, useMemo, useCallback } from "react";
import { ToolCard } from "./tool-card";
import { CategoryTabs } from "./category-tabs";
import { SearchBar } from "./search-bar";
import { tools as allTools, categories } from "@/data/tools";
import { ArrowUpDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "@/contexts/LocaleContext";
import Link from "next/link";

type SortOption = "name" | "price-asc" | "price-desc" | "featured";

interface ToolsListProps {
  featuredOnly?: boolean;
  showSearch?: boolean;
  showFilters?: boolean;
  initialCategory?: string;
}

const TOOLS_PER_PAGE = 24;

export function ToolsList({ 
  featuredOnly = false, 
  showSearch = true,
  showFilters = true,
  initialCategory = "all"
}: ToolsListProps) {
  const { t, tc, tool: getToolTrans } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  }, []);

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  }, []);

  const handleSortChange = useCallback((sort: SortOption) => {
    setSortBy(sort);
    setCurrentPage(1);
  }, []);

  const filteredAndSortedTools = useMemo(() => {
    let result = allTools;

    if (featuredOnly) {
      result = result.filter(tool => tool.isFeatured);
    }

    if (selectedCategory && selectedCategory !== "all") {
      result = result.filter(tool => tool.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(tool => 
        tool.name.toLowerCase().includes(query) ||
        tool.shortDesc.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    switch (sortBy) {
      case "name":
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "price-asc":
        result = [...result].sort((a, b) => a.monthlyCostMin - b.monthlyCostMin);
        break;
      case "price-desc":
        result = [...result].sort((a, b) => b.monthlyCostMin - a.monthlyCostMin);
        break;
      case "featured":
      default:
        result = [...result].sort((a, b) => {
          if (a.isFeatured !== b.isFeatured) return b.isFeatured ? 1 : -1;
          if (a.isVerified !== b.isVerified) return b.isVerified ? 1 : -1;
          return b.id - a.id;
        });
    }

    return result;
  }, [featuredOnly, selectedCategory, searchQuery, sortBy]);

  const totalPages = Math.ceil(filteredAndSortedTools.length / TOOLS_PER_PAGE);
  const startIndex = (currentPage - 1) * TOOLS_PER_PAGE;
  const paginatedTools = filteredAndSortedTools.slice(startIndex, startIndex + TOOLS_PER_PAGE);

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: "featured", label: t('filter.sortFeatured') },
    { value: "name", label: t('filter.sortName') },
    { value: "price-asc", label: t('filter.sortPriceAsc') },
    { value: "price-desc", label: t('filter.sortPriceDesc') },
  ];

  return (
    <div>
      {showSearch && (
        <div className="mb-6">
          <SearchBar onSearch={handleSearch} placeholder={t('home.hero.search', { count: String(allTools.length) })} />
        </div>
      )}

      {showFilters && (
        <div className="mb-6">
          <CategoryTabs 
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategoryChange}
          />
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <p className="text-sm text-[hsl(var(--foreground))]/60">
          {t('filter.found', { count: String(filteredAndSortedTools.length) })}
          {searchQuery && <span> "{searchQuery}"</span>}
          {selectedCategory !== "all" && (
            <span className="text-[hsl(var(--primary))]"> · {tc(selectedCategory)}</span>
          )}
        </p>

        <div className="flex items-center gap-2">
          <ArrowUpDown className="w-4 h-4 text-[hsl(var(--foreground))]/60" />
          <select
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value as SortOption)}
            className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] cursor-pointer"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {paginatedTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedTools.map((toolItem) => {
            const trans = getToolTrans(toolItem.slug);
            return (
              <Link key={toolItem.id} href={`/tools/${toolItem.slug}`}>
                <ToolCard
                  name={toolItem.name}
                  description={trans.shortDesc || toolItem.shortDesc}
                  category={toolItem.category}
                  pricing={
                    toolItem.pricingModel === "free"
                      ? t('pricing.free')
                      : `$${toolItem.monthlyCostMin}${toolItem.monthlyCostMax > toolItem.monthlyCostMin ? `-$${toolItem.monthlyCostMax}` : ""}${t('tool.perMonth')}`
                  }
                  verified={toolItem.isVerified}
                  indieMade={toolItem.indieMade}
                  featured={toolItem.isFeatured}
                />
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-[hsl(var(--foreground))]/60 mb-4">{t('filter.noResults')}</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
              setCurrentPage(1);
            }}
            className="text-[hsl(var(--primary))] hover:underline"
          >
            {t('filter.clear')}
          </button>
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--primary))]/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label={t('pagination.prev')}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-1">
            {[...Array(Math.min(5, totalPages))].map((_, i) => {
              let pageNum: number;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }
              
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-10 h-10 rounded-lg transition-colors ${
                    currentPage === pageNum
                      ? "bg-[hsl(var(--primary))] text-white"
                      : "bg-[hsl(var(--card))] border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]/50"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--primary))]/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label={t('pagination.next')}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {totalPages > 1 && (
        <p className="text-center text-sm text-[hsl(var(--foreground))]/50 mt-4">
          {t('pagination.page', { current: String(currentPage), total: String(totalPages) })}
        </p>
      )}
    </div>
  );
}