"use client";

import { useState, useEffect } from "react";
import { Heart, BookmarkPlus, BookmarkCheck } from "lucide-react";
import Link from "next/link";

interface FavoriteButtonProps {
  toolId: number;
  toolName: string;
  toolSlug: string;
}

interface Favorite {
  id: number;
  name: string;
  slug: string;
  addedAt: string;
}

export function FavoriteButton({ toolId, toolName, toolSlug }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // 从localStorage读取收藏状态
    try {
      const favorites: Favorite[] = JSON.parse(localStorage.getItem("favorites") || "[]");
      setIsFavorite(favorites.some(f => f.id === toolId));
    } catch {
      // localStorage 不可用或数据损坏
      setIsFavorite(false);
    }
  }, [toolId]);

  const toggleFavorite = () => {
    try {
      const favorites: Favorite[] = JSON.parse(localStorage.getItem("favorites") || "[]");
      
      if (isFavorite) {
        // 移除收藏
        const newFavorites = favorites.filter(f => f.id !== toolId);
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
        setIsFavorite(false);
      } else {
        // 添加收藏
        const newFavorite: Favorite = {
          id: toolId,
          name: toolName,
          slug: toolSlug,
          addedAt: new Date().toISOString(),
        };
        favorites.push(newFavorite);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        setIsFavorite(true);
      }

      // 显示提示
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch {
      console.warn("localStorage unavailable, favorite not saved");
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleFavorite}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-lg transition-all
          ${isFavorite 
            ? "bg-[hsl(var(--featured))]/20 text-[hsl(var(--featured))] border border-[hsl(var(--featured))]/50" 
            : "bg-[hsl(var(--card))] border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]/50"
          }
        `}
      >
        {isFavorite ? (
          <>
            <Heart className="w-4 h-4 fill-[hsl(var(--featured))]" />
            <span className="text-sm">已收藏</span>
          </>
        ) : (
          <>
            <BookmarkPlus className="w-4 h-4" />
            <span className="text-sm">收藏</span>
          </>
        )}
      </button>

      {/* Toast提示 */}
      {showToast && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg shadow-lg text-sm whitespace-nowrap animate-in fade-in slide-in-from-top-2">
          {isFavorite ? "已添加到收藏" : "已取消收藏"}
        </div>
      )}
    </div>
  );
}

// 收藏列表组件
export function FavoritesList() {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("favorites");
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch {
      // localStorage 不可用或数据损坏
      setFavorites([]);
    }
  }, []);

  const removeFavorite = (id: number) => {
    const newFavorites = favorites.filter(f => f.id !== id);
    try {
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    } catch {
      console.warn("localStorage unavailable");
    }
    setFavorites(newFavorites);
  };

  if (favorites.length === 0) {
    return (
      <div className="text-center py-12">
        <Heart className="w-12 h-12 mx-auto text-[hsl(var(--foreground))]/20 mb-4" />
        <p className="text-[hsl(var(--foreground))]/60 mb-2">暂无收藏</p>
        <p className="text-sm text-[hsl(var(--foreground))]/40">
          点击工具卡片上的收藏按钮添加
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {favorites.map(favorite => (
        <div 
          key={favorite.id}
          className="flex items-center justify-between p-3 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg"
        >
          <Link 
            href={`/tools/${favorite.slug}`}
            className="flex-1 hover:text-[hsl(var(--primary))] transition-colors"
          >
            <span className="font-medium">{favorite.name}</span>
            <span className="text-xs text-[hsl(var(--foreground))]/50 ml-2">
              收藏于 {new Date(favorite.addedAt).toLocaleDateString()}
            </span>
          </Link>
          <button
            onClick={() => removeFavorite(favorite.id)}
            className="p-1.5 text-[hsl(var(--foreground))]/50 hover:text-red-500 transition-colors"
            aria-label="取消收藏"
          >
            <Heart className="w-4 h-4 fill-current" />
          </button>
        </div>
      ))}
    </div>
  );
}