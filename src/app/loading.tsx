export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--primary))]/10 rounded-full">
          <svg className="animate-spin w-5 h-5 text-[hsl(var(--primary))]" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <span className="text-sm text-[hsl(var(--primary))]">加载中...</span>
        </div>
      </div>
    </div>
  );
}