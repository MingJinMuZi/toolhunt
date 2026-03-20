export default function ToolsLoading() {
  return (
    <div className="min-h-screen">
      {/* Header Skeleton */}
      <header className="border-b border-[hsl(var(--border))]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[hsl(var(--primary))]/20 rounded animate-pulse" />
            <div className="w-24 h-6 bg-[hsl(var(--card))] rounded animate-pulse" />
          </div>
          <div className="flex items-center gap-6">
            <div className="w-16 h-4 bg-[hsl(var(--card))] rounded animate-pulse" />
            <div className="w-16 h-4 bg-[hsl(var(--card))] rounded animate-pulse" />
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Search Skeleton */}
        <div className="w-full max-w-2xl mx-auto mb-8">
          <div className="h-12 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl animate-pulse" />
        </div>

        {/* Category Tabs Skeleton */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-20 h-10 bg-[hsl(var(--card))] rounded-lg animate-pulse" />
          ))}
        </div>

        {/* Tools Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl p-5">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 bg-[hsl(var(--background))] rounded-lg animate-pulse" />
                <div className="flex-1">
                  <div className="w-24 h-5 bg-[hsl(var(--background))] rounded animate-pulse mb-2" />
                  <div className="w-16 h-3 bg-[hsl(var(--background))] rounded animate-pulse" />
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="w-full h-3 bg-[hsl(var(--background))] rounded animate-pulse" />
                <div className="w-3/4 h-3 bg-[hsl(var(--background))] rounded animate-pulse" />
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-[hsl(var(--border))]">
                <div className="w-12 h-5 bg-[hsl(var(--background))] rounded animate-pulse" />
                <div className="w-16 h-5 bg-[hsl(var(--background))] rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}