export default function ToolDetailLoading() {
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
        {/* Breadcrumb Skeleton */}
        <div className="flex items-center gap-2 mb-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-12 h-4 bg-[hsl(var(--card))] rounded animate-pulse" />
              <span className="text-[hsl(var(--foreground))]/30">/</span>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Badges */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-16 h-6 bg-[hsl(var(--featured))]/20 rounded-full animate-pulse" />
              <div className="w-16 h-6 bg-[hsl(var(--accent))]/20 rounded-full animate-pulse" />
            </div>

            {/* Title */}
            <div className="w-48 h-10 bg-[hsl(var(--card))] rounded animate-pulse mb-4" />
            
            {/* Description */}
            <div className="space-y-2 mb-6">
              <div className="w-full h-4 bg-[hsl(var(--card))] rounded animate-pulse" />
              <div className="w-full h-4 bg-[hsl(var(--card))] rounded animate-pulse" />
              <div className="w-3/4 h-4 bg-[hsl(var(--card))] rounded animate-pulse" />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-20 h-6 bg-[hsl(var(--card))] rounded animate-pulse" />
              ))}
            </div>

            {/* Pricing Card */}
            <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl p-6">
              <div className="w-12 h-6 bg-[hsl(var(--background))] rounded animate-pulse mb-4" />
              <div className="w-24 h-8 bg-[hsl(var(--primary))]/20 rounded animate-pulse mb-2" />
              <div className="w-48 h-4 bg-[hsl(var(--background))] rounded animate-pulse" />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* CTA Card */}
              <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl p-6">
                <div className="w-full h-10 bg-[hsl(var(--primary))] rounded animate-pulse mb-3" />
                <div className="w-24 h-3 bg-[hsl(var(--background))] rounded animate-pulse mx-auto" />
              </div>

              {/* Info Card */}
              <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl p-6">
                <div className="w-16 h-5 bg-[hsl(var(--background))] rounded animate-pulse mb-4" />
                <div className="space-y-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex justify-between">
                      <div className="w-16 h-4 bg-[hsl(var(--background))] rounded animate-pulse" />
                      <div className="w-12 h-4 bg-[hsl(var(--background))] rounded animate-pulse" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}