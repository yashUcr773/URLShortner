'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Privacy() {
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
            <Link href="/about" className="text-muted-foreground hover:text-primary transition">About</Link>
            <Link href="/privacy" className="text-primary font-medium">Privacy</Link>
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
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6 animate-in fade-in slide-in-from-top-8 duration-700">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-xl"></div>
              <div className="relative w-20 h-20 mx-auto bg-green-500/10 rounded-full flex items-center justify-center text-5xl">
                🔒
              </div>
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your privacy is our top priority. Here&apos;s exactly how we protect your data and respect your privacy.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>

          {/* Privacy Promise */}
          <section className="p-8 rounded-2xl bg-gradient-to-r from-green-500/5 to-emerald-500/5 border border-green-500/20 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-green-600 dark:text-green-400">Our Privacy Promise</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We believe privacy is a fundamental right. That&apos;s why Shortly is built with privacy-first principles from the ground up.
              </p>
            </div>
          </section>

          {/* What We Don't Do */}
          <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-3xl font-bold text-center mb-8">What We DON&apos;T Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 shrink-0">
                    ❌
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">No Tracking</h3>
                    <p className="text-muted-foreground text-sm">
                      We don&apos;t use cookies, pixels, or any tracking mechanisms to monitor your browsing behavior.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 shrink-0">
                    ❌
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">No Data Selling</h3>
                    <p className="text-muted-foreground text-sm">
                      We never sell, rent, or share your data with third parties for marketing purposes.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 shrink-0">
                    ❌
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">No Ads</h3>
                    <p className="text-muted-foreground text-sm">
                      Our service is completely ad-free. No behavioral advertising or ad tracking.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 shrink-0">
                    ❌
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">No Personal Profiles</h3>
                    <p className="text-muted-foreground text-sm">
                      We don&apos;t build profiles about you or your interests based on your usage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What We Do */}
          <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-3xl font-bold text-center mb-8">What We DO</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-green-500/5 border border-green-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 shrink-0">
                    ✅
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Minimal Data Collection</h3>
                    <p className="text-muted-foreground">
                      We only collect the absolute minimum data necessary to provide our service:
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground ml-4">
                      <li>• The original URL you want to shorten</li>
                      <li>• The generated short code</li>
                      <li>• Basic server logs for security and performance (IP addresses are anonymized)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl bg-green-500/5 border border-green-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 shrink-0">
                    ✅
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Secure by Design</h3>
                    <p className="text-muted-foreground">
                      All data is encrypted in transit and at rest. We use industry-standard security measures to protect your information.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl bg-green-500/5 border border-green-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 shrink-0">
                    ✅
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Data Retention</h3>
                    <p className="text-muted-foreground">
                      Short links are stored indefinitely to ensure they continue working. However, we don&apos;t store any personally identifiable information linked to your URLs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-3xl font-bold text-center mb-8">Your Rights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-blue-500/5 border border-blue-500/20">
                <h3 className="font-bold text-lg mb-2 text-blue-600 dark:text-blue-400">Right to Information</h3>
                <p className="text-muted-foreground text-sm">
                  You have the right to know what data we collect and how we use it (this policy).
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-blue-500/5 border border-blue-500/20">
                <h3 className="font-bold text-lg mb-2 text-blue-600 dark:text-blue-400">Right to Deletion</h3>
                <p className="text-muted-foreground text-sm">
                  Contact us to request deletion of any data associated with your use of our service.
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-blue-500/5 border border-blue-500/20">
                <h3 className="font-bold text-lg mb-2 text-blue-600 dark:text-blue-400">Right to Portability</h3>
                <p className="text-muted-foreground text-sm">
                  You can export any data you&apos;ve provided to us in a machine-readable format.
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-blue-500/5 border border-blue-500/20">
                <h3 className="font-bold text-lg mb-2 text-blue-600 dark:text-blue-400">Right to Correction</h3>
                <p className="text-muted-foreground text-sm">
                  If any information we have is incorrect, you have the right to have it corrected.
                </p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="text-center space-y-6 p-8 rounded-2xl bg-card border border-border shadow-lg animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-3xl font-bold">Questions About Privacy?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              If you have any questions about this privacy policy or how we handle your data, 
              don&apos;t hesitate to reach out to us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8 py-3">
                <a href="mailto:privacy@shortly.com">Contact Privacy Team</a>
              </Button>
              <Button variant="outline" asChild size="lg" className="px-8 py-3">
                <Link href="/about">Learn More About Us</Link>
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
