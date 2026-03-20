"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ToolScreenshot {
  url: string;
  alt: string;
  caption?: string;
}

interface ScreenshotsProps {
  toolName: string;
  toolUrl: string;
  screenshots: ToolScreenshot[];
}

// 默认占位图
const placeholderImages = [
  { bg: "from-purple-600 to-blue-500", text: "Dashboard" },
  { bg: "from-green-500 to-teal-400", text: "Editor" },
  { bg: "from-orange-500 to-pink-500", text: "Settings" },
];

export function Screenshots({ toolName, toolUrl, screenshots }: ScreenshotsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // 如果没有截图，使用占位图
  const displayScreenshots = screenshots.length > 0 ? screenshots : placeholderImages.map((p, i) => ({
    url: `https://placehold.co/800x500/${p.bg.split(' ')[0].replace('from-', '')}/${p.bg.split(' ')[1].replace('to-', '')}?text=${encodeURIComponent(p.text)}`,
    alt: `${toolName} - ${p.text}`,
    caption: p.text,
  }));

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % displayScreenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + displayScreenshots.length) % displayScreenshots.length);
  };

  return (
    <div className="space-y-4">
      {/* 主图片 */}
      <div className="relative group">
        <div 
          className="aspect-video bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl overflow-hidden cursor-pointer"
          onClick={() => setIsLightboxOpen(true)}
        >
          {displayScreenshots[currentIndex].url.startsWith('http') ? (
            <img
              src={displayScreenshots[currentIndex].url}
              alt={displayScreenshots[currentIndex].alt}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[hsl(var(--primary))]/20 to-[hsl(var(--accent))]/20">
              <span className="text-4xl">🖼️</span>
            </div>
          )}
          
          {/* Zoom Overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <ZoomIn className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Navigation Arrows */}
        {displayScreenshots.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              aria-label="上一张"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              aria-label="下一张"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* 缩略图 */}
      {displayScreenshots.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {displayScreenshots.map((screenshot, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-colors ${
                index === currentIndex
                  ? "border-[hsl(var(--primary))]"
                  : "border-transparent hover:border-[hsl(var(--border))]"
              }`}
            >
              {screenshot.url.startsWith('http') ? (
                <img
                  src={screenshot.url}
                  alt={screenshot.alt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[hsl(var(--card))]" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Caption */}
      {displayScreenshots[currentIndex]?.caption && (
        <p className="text-sm text-[hsl(var(--foreground))]/60 text-center">
          {displayScreenshots[currentIndex].caption}
        </p>
      )}

      {/* Lightbox */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            aria-label="关闭"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-5xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            {displayScreenshots[currentIndex].url.startsWith('http') ? (
              <img
                src={displayScreenshots[currentIndex].url}
                alt={displayScreenshots[currentIndex].alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            ) : (
              <div className="aspect-video bg-[hsl(var(--card))] rounded-lg" />
            )}

            {/* Navigation in Lightbox */}
            {displayScreenshots.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-white/10 rounded-full text-white text-sm">
            {currentIndex + 1} / {displayScreenshots.length}
          </div>
        </div>
      )}
    </div>
  );
}