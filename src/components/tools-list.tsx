"use client";

import { useState, useMemo, useCallback } from "react";
import { ToolCard } from "./tool-card";
import { CategoryTabs } from "./category-tabs";
import { SearchBar } from "./search-bar";
import { tools as allTools, categories } from "@/data/tools";
import { ArrowUpDown, ChevronLeft, ChevronRight } from "lucide-react";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // 重置页码
  }, []);

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // 重置页码
  }, []);

  const handleSortChange = useCallback((sort: SortOption) => {
    setSortBy(sort);
    setCurrentPage(1); // 重置页码
  }, []);

  const filteredAndSortedTools = useMemo(() => {
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

    // Sort
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
          // Featured first, then verified, then by id (newest)
          if (a.isFeatured !== b.isFeatured) return b.isFeatured ? 1 : -1;
          if (a.isVerified !== b.isVerified) return b.isVerified ? 1 : -1;
          return b.id - a.id;
        });
    }

    return result;
  }, [featuredOnly, selectedCategory, searchQuery, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedTools.length / TOOLS_PER_PAGE);
  const startIndex = (currentPage - 1) * TOOLS_PER_PAGE;
  const paginatedTools = filteredAndSortedTools.slice(startIndex, startIndex + TOOLS_PER_PAGE);

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: "featured", label: "推荐排序" },
    { value: "name", label: "名称 A-Z" },
    { value: "price-asc", label: "价格低到高" },
    { value: "price-desc", label: "价格高到低" },
  ];

  return (
    <div>
      {/* Search */}
      {showSearch && (
        <div className="mb-6">
          <SearchBar onSearch={handleSearch} placeholder="搜索工具名称、描述或标签..." />
        </div>
      )}

      {/* Category Filters */}
      {showFilters && (
        <div className="mb-6">
          <CategoryTabs 
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategoryChange}
          />
        </div>
      )}

      {/* Sort & Results */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <p className="text-sm text-[hsl(var(--foreground))]/60">
          找到 <span className="font-medium text-[hsl(var(--foreground))]">{filteredAndSortedTools.length}</span> 个工具
          {searchQuery && <span> 关键词 "{searchQuery}"</span>}
          {selectedCategory !== "all" && (
            <span> 在 <span className="text-[hsl(var(--primary))]">{categories.find(c => c.id === selectedCategory)?.label}</span></span>
          )}
        </p>

        {/* Sort Dropdown */}
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

      {/* Tools Grid */}
      {paginatedTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedTools.map((tool) => (
            <Link key={tool.id} href={`/tools/${tool.slug}`}>
              <ToolCard
                name={tool.name}
                description={tool.shortDesc}
                category={tool.category}
                pricing={
                  tool.pricingModel === "free"
                    ? "免费"
                    : `$${tool.monthlyCostMin}${tool.monthlyCostMax > tool.monthlyCostMin ? `-$${tool.monthlyCostMax}` : ""}/月`
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
          <p className="text-[hsl(var(--foreground))]/60 mb-4">没有找到匹配的工具</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
              setCurrentPage(1);
            }}
            className="text-[hsl(var(--primary))] hover:underline"
          >
            清除筛选条件
          </button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--primary))]/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Page Info */}
      {totalPages > 1 && (
        <p className="text-center text-sm text-[hsl(var(--foreground))]/50 mt-4">
          第 {currentPage} 页，共 {totalPages} 页
        </p>
      )}
    </div>
  );
}