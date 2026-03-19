"use client";

import { useState } from "react";
import { Sparkles, Send, CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function SubmitPage() {
  const [formData, setFormData] = useState({
    toolName: "",
    toolUrl: "",
    description: "",
    category: "",
    email: "",
    note: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setStatus("success");
    setFormData({
      toolName: "",
      toolUrl: "",
      description: "",
      category: "",
      email: "",
      note: "",
    });
  };

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-[hsl(var(--border))]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-[hsl(var(--primary))]" />
            <span className="text-xl font-bold">ToolHunt</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/tools" className="text-sm text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]">
              All Tools
            </Link>
            <Link href="/submit" className="text-sm text-[hsl(var(--primary))]">
              Submit Tool
            </Link>
            <Link href="/about" className="text-sm text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]">
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <section className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Submit Your Tool</h1>
          <p className="text-[hsl(var(--foreground))]/60">
            Share your AI tool with our community of indie hackers and makers
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-[hsl(var(--accent))]/10 border border-[hsl(var(--accent))]/50 rounded-xl p-8 text-center">
            <CheckCircle className="w-12 h-12 text-[hsl(var(--accent))] mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">Thank You!</h2>
            <p className="text-[hsl(var(--foreground))]/70 mb-4">
              Your submission has been received. We&apos;ll review it and add it to our directory soon.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="text-[hsl(var(--primary))] hover:underline"
            >
              Submit another tool
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Tool Name */}
            <div>
              <label htmlFor="toolName" className="block text-sm font-medium mb-2">
                Tool Name <span className="text-[hsl(var(--featured))]">*</span>
              </label>
              <input
                type="text"
                id="toolName"
                required
                value={formData.toolName}
                onChange={(e) => setFormData({ ...formData, toolName: e.target.value })}
                className="w-full px-4 py-3 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                placeholder="e.g., Cursor"
              />
            </div>

            {/* Tool URL */}
            <div>
              <label htmlFor="toolUrl" className="block text-sm font-medium mb-2">
                Website URL <span className="text-[hsl(var(--featured))]">*</span>
              </label>
              <input
                type="url"
                id="toolUrl"
                required
                value={formData.toolUrl}
                onChange={(e) => setFormData({ ...formData, toolUrl: e.target.value })}
                className="w-full px-4 py-3 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                placeholder="https://example.com"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-2">
                Short Description <span className="text-[hsl(var(--featured))]">*</span>
              </label>
              <textarea
                id="description"
                required
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] resize-none"
                placeholder="Brief description of your tool (1-2 sentences)"
              />
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium mb-2">
                Category
              </label>
              <select
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
              >
                <option value="">Select a category</option>
                <option value="agents">🤖 AI Agents</option>
                <option value="coding">💻 Coding</option>
                <option value="marketing">📢 Marketing</option>
                <option value="design">🎨 Design</option>
                <option value="productivity">⚡ Productivity</option>
                <option value="automation">🔄 Automation</option>
                <option value="video">🎬 Video</option>
                <option value="audio">🎵 Audio</option>
                <option value="writing">✍️ Writing</option>
                <option value="other">📦 Other</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email <span className="text-[hsl(var(--foreground))]/50">(optional)</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                placeholder="you@example.com"
              />
              <p className="text-xs text-[hsl(var(--foreground))]/50 mt-1">
                We&apos;ll notify you when your tool is added
              </p>
            </div>

            {/* Note */}
            <div>
              <label htmlFor="note" className="block text-sm font-medium mb-2">
                Additional Notes <span className="text-[hsl(var(--foreground))]/50">(optional)</span>
              </label>
              <textarea
                id="note"
                rows={2}
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                className="w-full px-4 py-3 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] resize-none"
                placeholder="Anything else you'd like us to know?"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 bg-[hsl(var(--primary))] text-white rounded-xl font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                <>
                  <span className="animate-spin">⏳</span>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Submit Tool
                </>
              )}
            </button>
          </form>
        )}

        {/* Info Box */}
        <div className="mt-8 p-4 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl">
          <h3 className="font-medium mb-2 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-[hsl(var(--featured))]" />
            What happens next?
          </h3>
          <ol className="text-sm text-[hsl(var(--foreground))]/70 space-y-1 list-decimal list-inside">
            <li>We&apos;ll review your submission within 24-48 hours</li>
            <li>If approved, your tool will be added to our directory</li>
            <li>We&apos;ll notify you via email (if provided)</li>
          </ol>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[hsl(var(--border))] py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-[hsl(var(--foreground))]/60">
          <p>© 2026 ToolHunt. Made with ❤️ for indie hackers.</p>
        </div>
      </footer>
    </main>
  );
}