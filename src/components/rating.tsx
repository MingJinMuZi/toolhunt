"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";

interface RatingProps {
  toolId: number;
  toolName: string;
}

interface RatingData {
  average: number;
  count: number;
  userRating: number | null;
}

export function Rating({ toolId, toolName }: RatingProps) {
  const [rating, setRating] = useState<RatingData>({
    average: 4.5,
    count: 128,
    userRating: null,
  });
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  useEffect(() => {
    // 从localStorage读取用户评分
    const storedRating = localStorage.getItem(`rating-${toolId}`);
    if (storedRating) {
      const userRating = parseInt(storedRating);
      setRating(prev => ({ ...prev, userRating }));
    }
  }, [toolId]);

  const handleRate = (value: number) => {
    // 保存用户评分到localStorage
    localStorage.setItem(`rating-${toolId}`, value.toString());
    setRating(prev => ({
      ...prev,
      userRating: value,
      count: prev.userRating ? prev.count : prev.count + 1,
      average: prev.userRating 
        ? (prev.average * prev.count - prev.userRating + value) / prev.count
        : (prev.average * prev.count + value) / (prev.count + 1),
    }));
  };

  const displayRating = hoveredStar || rating.userRating || Math.round(rating.average);

  return (
    <div className="space-y-2">
      {/* 星级显示 */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleRate(star)}
              onMouseEnter={() => setHoveredStar(star)}
              onMouseLeave={() => setHoveredStar(null)}
              className="p-0.5 transition-transform hover:scale-110"
              aria-label={`评${star}星`}
            >
              <Star
                className={`w-5 h-5 transition-colors ${
                  star <= displayRating
                    ? "text-[hsl(var(--featured))] fill-[hsl(var(--featured))]"
                    : "text-[hsl(var(--border))]"
                }`}
              />
            </button>
          ))}
        </div>
        <span className="text-sm font-medium">
          {rating.average.toFixed(1)}
        </span>
        <span className="text-sm text-[hsl(var(--foreground))]/50">
          ({rating.count} 评价)
        </span>
      </div>

      {/* 用户评分提示 */}
      {rating.userRating && (
        <p className="text-xs text-[hsl(var(--accent))]">
          你已评价：{rating.userRating} 星
        </p>
      )}
      {!rating.userRating && (
        <p className="text-xs text-[hsl(var(--foreground))]/50">
          点击星星评价此工具
        </p>
      )}
    </div>
  );
}