'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert("Sign in functionality coming soon!");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <header className="w-full border-b border-border bg-background/80 backdrop-blur">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2 group">
            <Image src="/logo.svg" alt="Logo" width={36} height={36} className="transition-transform group-hover:rotate-6" />
            <span className="font-bold text-lg tracking-tight text-primary">Shortly</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/" className="text-muted-foreground hover:text-primary transition">Home</Link>
            <Link href="/about" className="text-muted-foreground hover:text-primary transition">About</Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition">Privacy</Link>
            <Button variant="outline" className="px-4 py-2" asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-top-8 duration-700">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-indigo-400/20 rounded-full blur-xl"></div>
              <Image src="/logo.svg" alt="Logo" width={64} height={64} className="relative drop-shadow-lg" />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="text-muted-foreground">
              Sign in to your Shortly account to manage your links
            </p>
          </div>

          {/* Sign In Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="p-8 rounded-2xl bg-card border border-border shadow-lg space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition text-base"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-foreground">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition text-base pr-12"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-muted-foreground hover:text-foreground transition"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-input" />
                  <span className="text-muted-foreground">Remember me</span>
                </label>
                <Link href="/forgot-password" className="text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full py-3 text-base font-semibold bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-xl transition-all duration-200"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin inline-block w-4 h-4 border-2 border-t-transparent border-white rounded-full"></span>
                    Signing In...
                  </span>
                ) : (
                  "Sign In"
                )}
              </Button>
            </div>
          </form>

          {/* Social Sign In */}
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-background text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="w-full py-3 bg-card hover:bg-muted transition-colors"
                onClick={() => alert("Google sign-in coming soon!")}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </Button>
              <Button
                variant="outline"
                className="w-full py-3 bg-card hover:bg-muted transition-colors"
                onClick={() => alert("GitHub sign-in coming soon!")}
              >
                <Image src="/github.svg" alt="GitHub" width={20} height={20} className="mr-2" />
                GitHub
              </Button>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline font-medium">
              Sign up here
            </Link>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-3 gap-4 pt-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center text-2xl">
                📊
              </div>
              <div className="text-xs text-muted-foreground">Analytics</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 mx-auto bg-green-500/10 rounded-full flex items-center justify-center text-2xl">
                🔗
              </div>
              <div className="text-xs text-muted-foreground">Custom Links</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 mx-auto bg-purple-500/10 rounded-full flex items-center justify-center text-2xl">
                🎯
              </div>
              <div className="text-xs text-muted-foreground">Management</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-background/90 py-6 border-t border-border">
        <div className="max-w-5xl mx-auto px-4 text-center text-sm text-muted-foreground">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link href="/about" className="hover:text-primary transition">About</Link>
            <Link href="/privacy" className="hover:text-primary transition">Privacy</Link>
            <Link href="/terms" className="hover:text-primary transition">Terms</Link>
            <a href="mailto:support@shortly.com" className="hover:text-primary transition">Support</a>
          </div>
          <div>&copy; {new Date().getFullYear()} Shortly. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
