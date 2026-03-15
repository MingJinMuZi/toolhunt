"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Send } from "lucide-react";
import Link from "next/link";

export default function SubmitPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    toolName: "",
    url: "",
    category: "",
    description: "",
    email: "",
    note: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission (in real app, this would be an API call)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <main className="min-h-screen">
        <header className="border-b border-[hsl(var(--border))]">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">SoloAI Tools</Link>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16 text-center">
          <CheckCircle className="w-16 h-16 text-[hsl(var(--accent))] mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
          <p className="text-[hsl(var(--foreground))]/70 mb-8 max-w-md mx-auto">
            Your tool submission has been received. We'll review it and get back to you within 48 hours.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/tools">
              <Button>Browse Tools</Button>
            </Link>
            <Link href="/">
              <Button variant="outline">Go Home</Button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-[hsl(var(--border))]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">SoloAI Tools</span>
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
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Submit Your Tool</h1>
          <p className="text-[hsl(var(--foreground))]/70 mb-8">
            Have an AI tool for indie hackers? Submit it for free and reach thousands of potential users.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Tool Name */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Tool Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={form.toolName}
                onChange={(e) => setForm({ ...form, toolName: e.target.value })}
                placeholder="e.g., Cursor, Notion AI"
                className="w-full px-4 py-3 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--foreground))]/50 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
              />
            </div>

            {/* URL */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Website URL <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                required
                value={form.url}
                onChange={(e) => setForm({ ...form, url: e.target.value })}
                placeholder="https://example.com"
                className="w-full px-4 py-3 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--foreground))]/50 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full px-4 py-3 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
              >
                <option value="">Select a category</option>
                <option value="agents">AI Agents</option>
                <option value="coding">Coding</option>
                <option value="marketing">Marketing</option>
                <option value="ops">Ops & Automation</option>
                <option value="productivity">Productivity</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="Briefly describe what your tool does and who it's for..."
                className="w-full px-4 py-3 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--foreground))]/50 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] resize-none"
              />
            </div>

            {/* Email (optional) */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Your Email <span className="text-[hsl(var(--foreground))]/50 font-normal">(optional)</span>
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--foreground))]/50 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
              />
              <p className="text-xs text-[hsl(var(--foreground))]/50 mt-1">
                We'll notify you when your tool is approved.
              </p>
            </div>

            {/* Additional Note */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Additional Notes <span className="text-[hsl(var(--foreground))]/50 font-normal">(optional)</span>
              </label>
              <textarea
                rows={2}
                value={form.note}
                onChange={(e) => setForm({ ...form, note: e.target.value })}
                placeholder="Anything else you'd like us to know?"
                className="w-full px-4 py-3 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--foreground))]/50 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? (
                "Submitting..."
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Submit for Review
                </>
              )}
            </Button>

            <p className="text-xs text-[hsl(var(--foreground))]/50 text-center">
              By submitting, you agree that your tool meets our quality guidelines for indie hackers.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[hsl(var(--border))] py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-[hsl(var(--foreground))]/60">
          <p>© 2026 SoloAI Tools. Made with ❤️ for indie hackers.</p>
        </div>
      </footer>
    </main>
  );
}