'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
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
              <Button variant="ghost" className="px-4 py-2" asChild>
                <Link href="/signin">Sign In</Link>
              </Button>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-4 py-16">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center space-y-6 animate-in fade-in slide-in-from-top-8 duration-700">
              <div className="w-20 h-20 mx-auto bg-green-500/10 rounded-full flex items-center justify-center text-5xl">
                ✅
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                Check Your Email
              </h1>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  We&apos;ve sent a password reset link to:
                </p>
                <p className="font-medium text-lg bg-card p-3 rounded-lg border">
                  {email}
                </p>
                <p className="text-sm text-muted-foreground">
                  Click the link in the email to reset your password. 
                  The link will expire in 24 hours for security.
                </p>
              </div>
            </div>

            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="text-center space-y-4">
                <p className="text-sm text-muted-foreground">
                  Didn&apos;t receive the email? Check your spam folder or try again.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setSubmitted(false)}
                  className="w-full"
                >
                  Try Different Email
                </Button>
              </div>

              <div className="text-center pt-4">
                <Link href="/signin" className="text-primary hover:underline text-sm">
                  ← Back to Sign In
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

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
            <Button variant="ghost" className="px-4 py-2" asChild>
              <Link href="/signin">Sign In</Link>
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
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-xl"></div>
              <div className="relative w-16 h-16 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center text-4xl">
                🔑
              </div>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Reset Password
            </h1>
            <p className="text-muted-foreground">
              Enter your email address and we&apos;ll send you a link to reset your password
            </p>
          </div>

          {/* Reset Form */}
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
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="text-sm text-muted-foreground bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">ℹ️</span>
                  <div>
                    <p className="font-medium mb-1">What happens next:</p>
                    <ul className="text-xs space-y-1 ml-2">
                      <li>• We&apos;ll send a secure reset link to your email</li>
                      <li>• The link expires in 24 hours for security</li>
                      <li>• You&apos;ll be able to set a new password</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full py-3 text-base font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-500/90 hover:to-indigo-600/90 shadow-lg hover:shadow-xl transition-all duration-200"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin inline-block w-4 h-4 border-2 border-t-transparent border-white rounded-full"></span>
                    Sending Reset Link...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    📧 Send Reset Link
                  </span>
                )}
              </Button>
            </div>
          </form>

          {/* Navigation Links */}
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            <div className="text-sm text-muted-foreground">
              Remember your password?{" "}
              <Link href="/signin" className="text-primary hover:underline font-medium">
                Sign in here
              </Link>
            </div>
            <div className="text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-primary hover:underline font-medium">
                Sign up for free
              </Link>
            </div>
          </div>

          {/* Security Note */}
          <div className="text-xs text-muted-foreground text-center p-4 bg-card rounded-lg border animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-green-500">🔒</span>
              <span className="font-medium">Security Notice</span>
            </div>
            <p>
              For your security, password reset links expire after 24 hours. 
              If you don&apos;t receive an email, check your spam folder.
            </p>
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
