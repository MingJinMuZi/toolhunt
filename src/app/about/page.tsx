import { Sparkles, Heart, Verified, Users } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About - ToolHunt",
  description: "Learn about ToolHunt - AI tools directory for indie hackers and solopreneurs.",
};

export default function AboutPage() {
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
            <Link href="/submit" className="text-sm text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]">
              Submit Tool
            </Link>
            <Link href="/about" className="text-sm text-[hsl(var(--primary))]">
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <article className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">About ToolHunt</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-[hsl(var(--foreground))]/80 mb-8">
            ToolHunt is a curated directory of AI tools designed specifically for indie hackers, 
            solopreneurs, and makers who want to find the best tools without breaking the bank.
          </p>

          {/* Mission */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-[hsl(var(--primary))]" />
              Our Mission
            </h2>
            <p className="text-[hsl(var(--foreground))]/70">
              We believe everyone should have access to powerful AI tools. Our mission is to 
              help indie creators find affordable, high-quality AI solutions to build, market, 
              and grow their businesses.
            </p>
          </section>

          {/* What Makes Us Different */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">What Makes Us Different</h2>
            <div className="grid gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[hsl(var(--accent))]/20 flex items-center justify-center flex-shrink-0">
                  <Verified className="w-6 h-6 text-[hsl(var(--accent))]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Verified Tools</h3>
                  <p className="text-sm text-[hsl(var(--foreground))]/60">
                    Every tool is manually reviewed and verified for quality and reliability.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[hsl(var(--featured))]/20 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-[hsl(var(--featured))]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Indie-Friendly Pricing</h3>
                  <p className="text-sm text-[hsl(var(--foreground))]/60">
                    We focus on tools that are affordable for solopreneurs (≤$100/month).
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[hsl(var(--primary))]/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-[hsl(var(--primary))]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Community Driven</h3>
                  <p className="text-sm text-[hsl(var(--foreground))]/60">
                    Built by indie hackers, for indie hackers. Community submissions welcome.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Categories */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Tool Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "AI Agents", icon: "🤖" },
                { name: "Coding", icon: "💻" },
                { name: "Marketing", icon: "📢" },
                { name: "Design", icon: "🎨" },
                { name: "Productivity", icon: "⚡" },
                { name: "Automation", icon: "🔄" },
              ].map((cat) => (
                <div key={cat.name} className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg p-3 text-center">
                  <span className="text-2xl">{cat.icon}</span>
                  <p className="text-sm mt-1">{cat.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
            <p className="text-[hsl(var(--foreground))]/70 mb-4">
              Have a tool to share? Found a bug? Just want to say hi?
            </p>
            <div className="flex gap-4">
              <Link 
                href="/submit"
                className="px-4 py-2 bg-[hsl(var(--primary))] text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Submit a Tool
              </Link>
              <a 
                href="https://github.com/MingJinMuZi/toolhunt"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg hover:border-[hsl(var(--primary))] transition-colors"
              >
                View on GitHub
              </a>
            </div>
          </section>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-[hsl(var(--border))] py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-[hsl(var(--foreground))]/60">
          <p>© 2026 ToolHunt. Made with ❤️ for indie hackers.</p>
        </div>
      </footer>
    </main>
  );
}