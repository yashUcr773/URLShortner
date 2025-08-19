'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Terms() {
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
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6 animate-in fade-in slide-in-from-top-8 duration-700">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-xl"></div>
              <div className="relative w-20 h-20 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center text-5xl">
                📋
              </div>
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These terms govern your use of Shortly and our URL shortening services. Please read them carefully.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>

          {/* Quick Summary */}
          <section className="p-8 rounded-2xl bg-gradient-to-r from-blue-500/5 to-indigo-500/5 border border-blue-500/20 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400">TL;DR - The Basics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="p-4 rounded-lg bg-background/50">
                  <div className="text-2xl mb-2">✅</div>
                  <div className="font-medium mb-1">Use Responsibly</div>
                  <div className="text-muted-foreground">Don&apos;t use our service for harmful, illegal, or malicious content</div>
                </div>
                <div className="p-4 rounded-lg bg-background/50">
                  <div className="text-2xl mb-2">🔒</div>
                  <div className="font-medium mb-1">Respect Privacy</div>
                  <div className="text-muted-foreground">We protect your data and expect you to respect others&apos; privacy too</div>
                </div>
                <div className="p-4 rounded-lg bg-background/50">
                  <div className="text-2xl mb-2">⚖️</div>
                  <div className="font-medium mb-1">Fair Use</div>
                  <div className="text-muted-foreground">Use our service reasonably and don&apos;t try to abuse or break it</div>
                </div>
              </div>
            </div>
          </section>

          {/* Terms Sections */}
          <section className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">1. Acceptance of Terms</h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using Shortly (&quot;the Service&quot;), you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service (&quot;Terms&quot;) apply to all visitors, users, and others who access or use the service.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">2. Description of Service</h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Shortly provides a URL shortening service that allows users to create shorter versions of long URLs. 
                  The service is provided free of charge for basic usage.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>Create shortened URLs from long web addresses</li>
                  <li>Redirect users from short URLs to original destinations</li>
                  <li>Basic analytics and usage statistics (coming soon)</li>
                  <li>Custom short URL options (premium feature)</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">3. Acceptable Use Policy</h2>
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
                  <h3 className="font-bold text-lg mb-3 text-red-600 dark:text-red-400">Prohibited Uses</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm">
                    <li>Linking to illegal, harmful, threatening, abusive, or harassing content</li>
                    <li>Distributing malware, viruses, or other malicious software</li>
                    <li>Phishing, scamming, or fraudulent activities</li>
                    <li>Spam or unsolicited commercial communications</li>
                    <li>Copyright infringement or intellectual property violations</li>
                    <li>Adult content or inappropriate material (without proper age verification)</li>
                    <li>Automated abuse or excessive API usage</li>
                  </ul>
                </div>
                
                <div className="p-6 rounded-xl bg-green-500/5 border border-green-500/20">
                  <h3 className="font-bold text-lg mb-3 text-green-600 dark:text-green-400">Encouraged Uses</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm">
                    <li>Sharing legitimate web content and resources</li>
                    <li>Social media link sharing</li>
                    <li>Marketing campaigns and newsletters</li>
                    <li>Academic and educational content</li>
                    <li>Personal and business websites</li>
                    <li>Open source projects and documentation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">4. User Accounts</h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  While account creation is optional for basic URL shortening, registered users get additional features:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>Link management dashboard</li>
                  <li>Analytics and click tracking</li>
                  <li>Custom short URL aliases</li>
                  <li>Bulk URL operations</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  You are responsible for maintaining the confidentiality of your account credentials and for all activities 
                  that occur under your account.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">5. Privacy and Data</h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Your privacy is important to us. Our data practices are detailed in our{" "}
                  <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                  Key points:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>We collect minimal data necessary for service operation</li>
                  <li>We don&apos;t track users for advertising purposes</li>
                  <li>We don&apos;t sell user data to third parties</li>
                  <li>Users can request data deletion at any time</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">6. Service Availability</h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  We strive to provide reliable service but cannot guarantee 100% uptime. We reserve the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>Modify or discontinue the service with reasonable notice</li>
                  <li>Suspend service for maintenance or security reasons</li>
                  <li>Disable short URLs that violate these terms</li>
                  <li>Implement rate limiting to prevent abuse</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">7. Limitation of Liability</h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Shortly is provided &quot;as is&quot; without warranties of any kind. We are not liable for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>Service interruptions or downtime</li>
                  <li>Data loss or corruption</li>
                  <li>Security breaches beyond our control</li>
                  <li>Content accessed through shortened URLs</li>
                  <li>Indirect, incidental, or consequential damages</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">8. Changes to Terms</h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  We may update these terms from time to time. When we make significant changes, we will:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>Update the &quot;Last updated&quot; date at the top of this page</li>
                  <li>Notify registered users via email for major changes</li>
                  <li>Provide a reasonable notice period before changes take effect</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Continued use of the service after changes constitutes acceptance of the new terms.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center space-y-6 p-8 rounded-2xl bg-card border border-border shadow-lg animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-3xl font-bold">Questions About These Terms?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              If you have any questions about these Terms of Service, please don&apos;t hesitate to contact us. 
              We&apos;re here to help clarify anything you need to know.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8 py-3">
                <a href="mailto:legal@shortly.com">Contact Legal Team</a>
              </Button>
              <Button variant="outline" asChild size="lg" className="px-8 py-3">
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
