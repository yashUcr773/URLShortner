'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <header className="w-full border-b border-border bg-background/80 backdrop-blur sticky top-0 z-20">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2 group">
            <Image src="/logo.svg" alt="Logo" width={36} height={36} className="transition-transform group-hover:rotate-6" />
            <span className="font-bold text-lg tracking-tight text-primary">Shortly</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/" className="text-muted-foreground hover:text-primary transition">Home</Link>
            <Link href="/about" className="text-primary font-medium">About</Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition">Privacy</Link>
            <Button variant="ghost" className="px-4 py-2" asChild>
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button className="px-4 py-2" asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6 animate-in fade-in slide-in-from-top-8 duration-700">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-indigo-400/20 rounded-full blur-xl"></div>
              <Image src="/logo.svg" alt="Logo" width={80} height={80} className="relative drop-shadow-lg" />
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
              About Shortly
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The simplest, fastest, and most privacy-focused URL shortener on the web. 
              Built with modern technology and a commitment to user privacy.
            </p>
          </div>

          {/* Mission Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  In a world where URLs can be hundreds of characters long and impossible to remember, 
                  we believe link sharing should be simple, secure, and lightning-fast.
                </p>
                <p>
                  Shortly was created to solve the fundamental problem of unwieldy URLs while 
                  maintaining the highest standards of privacy and user experience.
                </p>
                <p>
                  No tracking, no ads, no unnecessary complexity - just clean, reliable URL shortening 
                  that respects your privacy and gets out of your way.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-indigo-400/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-card p-8 rounded-2xl border border-border shadow-lg">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🚀</div>
                  <h3 className="text-2xl font-bold">Built for Speed</h3>
                  <p className="text-muted-foreground">
                    Our infrastructure ensures your links are shortened and ready to share in milliseconds.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4 p-6 rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center text-3xl">
                  🔒
                </div>
                <h3 className="text-xl font-bold">Privacy First</h3>
                <p className="text-muted-foreground">
                  We don&apos;t track, log, or share your data. Your links are yours alone.
                </p>
              </div>
              <div className="text-center space-y-4 p-6 rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto bg-green-500/10 rounded-full flex items-center justify-center text-3xl">
                  ⚡
                </div>
                <h3 className="text-xl font-bold">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Instant shortening with global CDN delivery for maximum speed.
                </p>
              </div>
              <div className="text-center space-y-4 p-6 rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto bg-purple-500/10 rounded-full flex items-center justify-center text-3xl">
                  🎯
                </div>
                <h3 className="text-xl font-bold">Simple & Clean</h3>
                <p className="text-muted-foreground">
                  No clutter, no confusion. Just the essential features you need.
                </p>
              </div>
            </div>
          </section>

          {/* Technology Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl font-bold">Built with Modern Technology</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Shortly is built using cutting-edge web technologies to ensure the best 
                  possible performance, security, and user experience.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Next.js 14
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    TypeScript
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Tailwind CSS
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    shadcn/ui
                  </div>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-card p-8 rounded-2xl border border-border shadow-lg">
                <div className="text-center space-y-4">
                  <div className="text-6xl">⚙️</div>
                  <h3 className="text-2xl font-bold">Open Source</h3>
                  <p className="text-muted-foreground">
                    Transparent, auditable code that you can trust and contribute to.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center space-y-6 p-12 rounded-2xl bg-gradient-to-r from-primary/5 to-indigo-400/5 border border-primary/20 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of users who trust Shortly for their link shortening needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8 py-3 text-lg">
                <Link href="/">Start Shortening</Link>
              </Button>
              <Button variant="outline" asChild size="lg" className="px-8 py-3 text-lg">
                <Link href="/privacy">Privacy Policy</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-background/90 pt-10 pb-4 mt-auto border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col gap-6 px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image src="/logo.svg" alt="Logo" width={32} height={32} />
              <span className="font-bold text-lg tracking-tight text-primary">Shortly</span>
            </div>
            <nav className="flex flex-wrap items-center gap-4 text-sm">
              <Link href="/" className="hover:underline hover:text-primary transition">Home</Link>
              <Link href="/about" className="hover:underline hover:text-primary transition">About</Link>
              <Link href="/privacy" className="hover:underline hover:text-primary transition">Privacy</Link>
              <Link href="/terms" className="hover:underline hover:text-primary transition">Terms</Link>
            </nav>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Shortly. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
