'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const shortUrlRef = useRef<HTMLInputElement>(null);

  // Dummy handler for now
  const handleShorten = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setShortUrl("");
    if (!url || !/^https?:\/\//.test(url)) {
      setError("Please enter a valid URL (must start with http:// or https://)");
      return;
    }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setShortUrl("https://sho.rt/abcd1234");
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <header className="w-full border-b border-border/50 bg-background/70 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-indigo-500/5"></div>
        <div className="relative max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-indigo-400/20 rounded-full blur group-hover:blur-md transition-all duration-300"></div>
              <Image src="/logo.svg" alt="Logo" width={40} height={40} className="relative transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
            </div>
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">Shortly</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/about" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium">About</Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium">Privacy</Link>
            <div className="h-6 w-px bg-border"></div>
            <Button variant="ghost" className="px-6 py-2 hover:bg-primary/10 transition-all duration-300 hover:scale-105" asChild>
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button className="px-6 py-2 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </nav>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-3">
            <Button variant="ghost" className="px-4 py-2" asChild>
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button className="px-4 py-2 bg-gradient-to-r from-primary to-blue-600" asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
          
          {/* Dark mode toggle */}
          <button
            aria-label="Toggle dark mode"
            className="hidden md:block ml-4 p-3 rounded-full hover:bg-muted/50 transition-all duration-300 hover:scale-110 hover:rotate-12"
            onClick={() => {
              if (typeof window !== 'undefined') {
                document.documentElement.classList.toggle('dark');
              }
            }}
          >
            <span className="sr-only">Toggle dark mode</span>
            <Image src="/dark.svg" alt="Dark" width={20} height={20} className="dark:hidden transition-transform" />
            <Image src="/light.svg" alt="Light" width={20} height={20} className="hidden dark:inline transition-transform" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          <div className="relative flex flex-col items-center justify-center px-6 py-24 lg:py-32">
            <div className="max-w-4xl w-full flex flex-col items-center gap-16">
              {/* Hero Content */}
              <div className="flex flex-col items-center gap-8 animate-in fade-in slide-in-from-top-8 duration-1000">
                <div className="relative group">
                  <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-blue-500/20 to-indigo-400/20 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
                  <div className="relative p-4 bg-gradient-to-br from-background/80 to-card/80 backdrop-blur-sm rounded-full border border-border/50 shadow-2xl">
                    <Image src="/logo.svg" alt="Logo" width={80} height={80} className="relative drop-shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
                  </div>
                </div>
                
                <div className="text-center space-y-6">
                  <div className="space-y-4">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl animate-gradient">
                      Shortly
                    </h1>
                    <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary to-indigo-400 rounded-full animate-pulse"></div>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-muted-foreground/90">
                    Shorten URLs <span className="text-primary">Instantly</span>
                  </h2>
                  
                  <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Transform long, unwieldy URLs into short, shareable links in milliseconds. 
                    <br className="hidden md:block" />
                    <span className="text-primary font-semibold"> Free, lightning-fast, and privacy-first.</span>
                  </p>
                </div>
              </div>

              {/* URL Shortener Form */}
              <form onSubmit={handleShorten} className="w-full max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                <div className="relative group">
                  <div className="absolute -inset-3 bg-gradient-to-r from-primary/30 via-blue-500/30 to-indigo-400/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500"></div>
                  
                  <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl p-2 hover:shadow-3xl transition-all duration-500">
                    <div className="flex flex-col lg:flex-row gap-3">
                      <div className="flex-1 relative">
                        <input
                          type="url"
                          placeholder="Paste your long URL here... (e.g., https://example.com/very/long/url)"
                          className="w-full px-6 py-6 text-lg rounded-xl border-0 bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 placeholder:text-muted-foreground/60"
                          value={url}
                          onChange={e => setUrl(e.target.value)}
                          required
                          autoFocus
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                      
                      <Button 
                        type="submit" 
                        size="lg"
                        className="px-8 py-6 text-lg font-bold bg-gradient-to-r from-primary via-blue-500 to-indigo-500 hover:from-primary/90 hover:via-blue-500/90 hover:to-indigo-500/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform-gpu" 
                        disabled={loading}
                      >
                        {loading ? (
                          <span className="flex items-center gap-3">
                            <div className="animate-spin w-5 h-5 border-2 border-t-transparent border-white rounded-full"></div>
                            <span>Shortening...</span>
                          </span>
                        ) : (
                          <span className="flex items-center gap-3">
                            <span className="text-xl">�</span>
                            <span>Shorten</span>
                          </span>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-6 space-y-2">
                  <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500 text-lg">✨</span>
                      <span>No sign-up required</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-500 text-lg">🔒</span>
                      <span>Privacy-first</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-500 text-lg">⚡</span>
                      <span>Instant results</span>
                    </div>
                  </div>
                </div>
              </form>

          {error && <div className="text-destructive text-sm text-center w-full animate-in fade-in slide-in-from-top-4">{error}</div>}

          {shortUrl && (
            <div className="w-full max-w-2xl flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-500">
              <div className="w-full p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-800 shadow-lg">
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
                    <span className="text-2xl">✅</span>
                    <span className="font-semibold">Your link is ready!</span>
                  </div>
                  
                  <div className="w-full space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-green-700 dark:text-green-300 mb-1">Short URL:</label>
                      <div className="flex items-center gap-2">
                        <input
                          ref={shortUrlRef}
                          value={shortUrl}
                          readOnly
                          className="flex-1 font-mono text-lg px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-green-200 dark:border-green-800 text-center cursor-pointer select-all focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                          onClick={e => (e.currentTarget as HTMLInputElement).select()}
                        />
                        <Button
                          type="button"
                          variant="secondary"
                          className="px-4 py-3 bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => {
                            if (shortUrlRef.current) {
                              shortUrlRef.current.select();
                              document.execCommand('copy');
                              setCopied(true);
                              setTimeout(() => setCopied(false), 2000);
                            }
                          }}
                        >
                          {copied ? "✅ Copied!" : "📋 Copy"}
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center gap-4 pt-2">
                      <a
                        href={shortUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-green-700 dark:text-green-300 hover:text-green-800 dark:hover:text-green-200 font-medium transition"
                      >
                        🔗 Test Link
                      </a>
                      <span className="text-muted-foreground">•</span>
                      <button
                        onClick={() => setShortUrl("")}
                        className="inline-flex items-center gap-2 text-green-700 dark:text-green-300 hover:text-green-800 dark:hover:text-green-200 font-medium transition"
                      >
                        🔄 Shorten Another
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        {/* Features Section */}
        <section className="w-full max-w-6xl mx-auto mt-32 px-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-6 bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Why Choose Shortly?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the perfect blend of simplicity, speed, and security in URL shortening
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-3xl blur-lg opacity-25 group-hover:opacity-75 transition-all duration-500"></div>
              <div className="relative flex flex-col items-center gap-6 p-8 rounded-3xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-500/10 text-primary text-5xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  ⚡
                </div>
                <div className="text-center space-y-3">
                  <h3 className="font-black text-2xl text-foreground group-hover:text-primary transition-colors">Lightning Fast</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Shorten URLs in milliseconds with our optimized infrastructure. No waiting, just instant results.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-lg opacity-25 group-hover:opacity-75 transition-all duration-500"></div>
              <div className="relative flex flex-col items-center gap-6 p-8 rounded-3xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 text-green-500 text-5xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  🔒
                </div>
                <div className="text-center space-y-3">
                  <h3 className="font-black text-2xl text-foreground group-hover:text-green-500 transition-colors">Privacy First</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No tracking, no data collection, no nonsense. Your links remain private and secure, always.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-lg opacity-25 group-hover:opacity-75 transition-all duration-500"></div>
              <div className="relative flex flex-col items-center gap-6 p-8 rounded-3xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 text-purple-500 text-5xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  📊
                </div>
                <div className="text-center space-y-3">
                  <h3 className="font-black text-2xl text-foreground group-hover:text-purple-500 transition-colors">Smart Analytics</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Track clicks and engagement with detailed analytics. Coming soon with premium features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>        {/* How it Works Section */}
        <section className="w-full max-w-2xl mx-auto mt-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-2xl font-bold text-center mb-6">How it works</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">1️⃣</span>
              <span className="font-medium">Paste your long URL</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">2️⃣</span>
              <span className="font-medium">Click Shorten</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">3️⃣</span>
              <span className="font-medium">Share your short link!</span>
            </div>
          </div>
        </section>

        {/* Trusted by Section */}
        <section className="w-full max-w-2xl mx-auto mt-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-xl font-bold text-center mb-4">Trusted by</h2>
          <div className="flex flex-wrap items-center justify-center gap-6 opacity-80">
            <Image src="/vercel.svg" alt="Vercel" width={80} height={24} />
            <Image src="/next.svg" alt="Next.js" width={80} height={24} />
            <Image src="/globe.svg" alt="Globe" width={32} height={32} />
            <Image src="/window.svg" alt="Window" width={32} height={32} />
            <Image src="/file.svg" alt="File" width={32} height={32} />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full max-w-2xl mx-auto mt-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-2xl font-bold text-center mb-6">FAQ</h2>
          <div className="space-y-4">
            <details className="bg-card rounded-lg p-4 shadow group" open>
              <summary className="font-semibold cursor-pointer group-open:text-primary">Is this service free?</summary>
              <div className="text-sm text-muted-foreground mt-2">Yes! URL shortening is completely free for everyone.</div>
            </details>
            <details className="bg-card rounded-lg p-4 shadow group">
              <summary className="font-semibold cursor-pointer group-open:text-primary">Do you track my links?</summary>
              <div className="text-sm text-muted-foreground mt-2">No, we value your privacy and do not track or log your links.</div>
            </details>
            <details className="bg-card rounded-lg p-4 shadow group">
              <summary className="font-semibold cursor-pointer group-open:text-primary">Can I see analytics?</summary>
              <div className="text-sm text-muted-foreground mt-2">Analytics are coming soon! Stay tuned.</div>
            </details>
            <details className="bg-card rounded-lg p-4 shadow group">
              <summary className="font-semibold cursor-pointer group-open:text-primary">Do I need to sign up?</summary>
              <div className="text-sm text-muted-foreground mt-2">No signup is required to shorten links, but you can sign up to manage your links in the future.</div>
            </details>
          </div>
        </section>
      </main>

      {/* Testimonials Section */}
      <section className="w-full max-w-2xl mx-auto mt-20 mb-8 px-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <h2 className="text-2xl font-bold text-center mb-6">What users say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-card rounded-lg p-4 shadow flex flex-col gap-2">
            <span className="text-lg font-semibold">&quot;Super easy and fast!&quot;</span>
            <span className="text-xs text-muted-foreground">— Priya S.</span>
          </div>
          <div className="bg-card rounded-lg p-4 shadow flex flex-col gap-2">
            <span className="text-lg font-semibold">&quot;No ads, no nonsense. Love the privacy focus.&quot;</span>
            <span className="text-xs text-muted-foreground">— Alex R.</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full bg-gradient-to-b from-background/50 to-muted/30 pt-20 pb-8 mt-auto border-t border-border/50 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
        
        <div className="relative w-full h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent mb-12"></div>
        
        <div className="relative max-w-7xl mx-auto flex flex-col gap-12 px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-4 group">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-full blur opacity-50 group-hover:opacity-100 transition-all duration-300"></div>
                  <Image src="/logo.svg" alt="Logo" width={40} height={40} className="relative transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-2xl tracking-tight bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Shortly</span>
                  <span className="text-sm text-muted-foreground">— The simplest way to share links</span>
                </div>
              </div>
              <p className="text-muted-foreground max-w-md text-center md:text-left">
                Transform long URLs into short, shareable links with our fast, secure, and privacy-first platform.
              </p>
            </div>
            
            <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <Link href="/about" className="hover:text-primary transition-colors hover:underline">About</Link>
              <Link href="/privacy" className="hover:text-primary transition-colors hover:underline">Privacy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors hover:underline">Terms</Link>
              <Link href="/faq" className="hover:text-primary transition-colors hover:underline">FAQ</Link>
              <a href="mailto:support@example.com" className="hover:text-primary transition-colors hover:underline">Contact</a>
            </nav>
            
            <div className="flex items-center gap-4">
              <a href="https://twitter.com/" target="_blank" rel="noopener" aria-label="Twitter" className="p-3 rounded-full hover:bg-primary/10 transition-all duration-300 hover:scale-110">
                <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener" aria-label="GitHub" className="p-3 rounded-full hover:bg-primary/10 transition-all duration-300 hover:scale-110">
                <Image src="/github.svg" alt="GitHub" width={24} height={24} />
              </a>
              <a href="mailto:support@example.com" aria-label="Email" className="p-3 rounded-full hover:bg-primary/10 transition-all duration-300 hover:scale-110">
                <Image src="/mail.svg" alt="Email" width={24} height={24} />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border/30">
            <form className="flex items-center gap-3 w-full md:w-auto group" onSubmit={e => { e.preventDefault(); alert('Subscribed!'); }}>
              <div className="relative flex-1 md:flex-initial">
                <input 
                  type="email" 
                  required 
                  placeholder="Subscribe to newsletter" 
                  className="w-full md:w-64 px-4 py-3 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 placeholder:text-muted-foreground/60" 
                />
              </div>
              <Button type="submit" className="px-6 py-3 bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 transition-all duration-300 hover:scale-105">
                Subscribe
              </Button>
            </form>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>&copy; {new Date().getFullYear()} Shortly. All rights reserved.</span>
              <button
                className="text-primary hover:text-primary/80 transition-colors hover:underline"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Back to top ↑
              </button>
            </div>
          </div>
          
          <div className="text-center text-sm text-muted-foreground pt-4">
            Made with <span className="text-red-500 animate-pulse">♥</span> using Next.js, Tailwind CSS, shadcn/ui. 
            <span className="hidden sm:inline"> Open source on <a href="https://github.com/" className="text-primary hover:underline transition-colors">GitHub</a>.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}