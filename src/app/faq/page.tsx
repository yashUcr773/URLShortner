'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    id: "free-service",
    question: "Is Shortly completely free to use?",
    answer: "Yes! Our basic URL shortening service is completely free. We also plan to offer premium features like advanced analytics and custom domains in the future.",
    category: "General"
  },
  {
    id: "privacy-tracking",
    question: "Do you track my links or personal data?",
    answer: "No, we don't track you! We value your privacy and don't use cookies, analytics trackers, or collect personal data. We only store the URLs you shorten and basic security logs.",
    category: "Privacy"
  },
  {
    id: "signup-required",
    question: "Do I need to create an account to shorten URLs?",
    answer: "Not at all! You can shorten URLs instantly without signing up. However, creating an account will give you access to features like link management and analytics (coming soon).",
    category: "Account"
  },
  {
    id: "link-expiration",
    question: "Do short links expire?",
    answer: "No, your short links don't expire. Once created, they'll continue working indefinitely unless you delete them or they violate our terms of service.",
    category: "Links"
  },
  {
    id: "custom-domains",
    question: "Can I use my own custom domain?",
    answer: "Custom domains will be available as a premium feature. This will allow you to create short links using your own branded domain instead of sho.rt.",
    category: "Premium"
  },
  {
    id: "analytics",
    question: "Can I see how many people clicked my links?",
    answer: "Analytics are coming soon! Registered users will be able to see click counts, geographic data, referrer information, and more detailed insights.",
    category: "Analytics"
  },
  {
    id: "bulk-operations",
    question: "Can I shorten multiple URLs at once?",
    answer: "Bulk URL shortening will be available for registered users. You'll be able to upload a CSV file or paste multiple URLs to shorten them all at once.",
    category: "Features"
  },
  {
    id: "api-access",
    question: "Is there an API I can use?",
    answer: "We're working on a REST API that will allow developers to integrate URL shortening into their applications. It will include rate limiting and authentication.",
    category: "Developer"
  },
  {
    id: "malicious-links",
    question: "What if I encounter a malicious short link?",
    answer: "We have security measures in place to detect and block malicious URLs. If you encounter a harmful link, please report it to us immediately at security@shortly.com.",
    category: "Security"
  },
  {
    id: "delete-links",
    question: "Can I delete my short links?",
    answer: "Yes! Registered users can manage and delete their short links from their dashboard. Anonymous links can be reported for removal if they violate our terms.",
    category: "Management"
  },
  {
    id: "data-export",
    question: "Can I export my link data?",
    answer: "Absolutely! You can export all your link data, including URLs, creation dates, and analytics, in CSV or JSON format from your account dashboard.",
    category: "Data"
  },
  {
    id: "enterprise-features",
    question: "Do you offer enterprise features?",
    answer: "We're planning enterprise features including team collaboration, advanced analytics, white-labeling, and dedicated support. Contact us for early access.",
    category: "Enterprise"
  }
];

const categories = ["All", "General", "Privacy", "Account", "Links", "Analytics", "Features", "Security"];

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = faqData.filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

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
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
              <div className="relative w-20 h-20 mx-auto bg-purple-500/10 rounded-full flex items-center justify-center text-5xl">
                ❓
              </div>
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about Shortly&apos;s URL shortening service, privacy practices, and features.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="text-muted-foreground text-xl">🔍</span>
              </div>
              <input
                type="text"
                placeholder="Search for answers..."
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="px-4 py-2"
                >
                  {category}
                  {category !== "All" && (
                    <span className="ml-2 text-xs bg-muted rounded-full px-2 py-0.5">
                      {faqData.filter(item => item.category === category).length}
                    </span>
                  )}
                </Button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12 space-y-4">
                <div className="text-6xl opacity-50">🤔</div>
                <h3 className="text-xl font-semibold">No questions found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            ) : (
              filteredFAQs.map((item, index) => (
                <div
                  key={item.id}
                  className="group bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-200"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors rounded-xl"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {item.question}
                      </h3>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <div className={`w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-200 ${
                        openItems.includes(item.id) ? 'rotate-180' : ''
                      }`}>
                        <span className="text-primary">⌄</span>
                      </div>
                    </div>
                  </button>
                  
                  {openItems.includes(item.id) && (
                    <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-200">
                      <div className="pt-4 border-t border-border">
                        <p className="text-muted-foreground leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="p-6 rounded-xl bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300 text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center text-2xl">
                🚀
              </div>
              <h3 className="font-bold text-lg">Get Started</h3>
              <p className="text-muted-foreground text-sm">
                Ready to shorten your first URL? No sign-up required!
              </p>
              <Button asChild className="w-full">
                <Link href="/">Start Now</Link>
              </Button>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300 text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-green-500/10 rounded-full flex items-center justify-center text-2xl">
                👥
              </div>
              <h3 className="font-bold text-lg">Contact Support</h3>
              <p className="text-muted-foreground text-sm">
                Can&apos;t find what you&apos;re looking for? We&apos;re here to help!
              </p>
              <Button asChild variant="outline" className="w-full">
                <a href="mailto:support@shortly.com">Email Us</a>
              </Button>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300 text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-purple-500/10 rounded-full flex items-center justify-center text-2xl">
                📚
              </div>
              <h3 className="font-bold text-lg">Learn More</h3>
              <p className="text-muted-foreground text-sm">
                Discover more about our privacy practices and mission.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/about">About Us</Link>
              </Button>
            </div>
          </div>

          {/* Still Have Questions */}
          <section className="text-center space-y-6 p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-indigo-400/5 border border-primary/20 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-3xl font-bold">Still Have Questions?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We&apos;re always happy to help! If you can&apos;t find the answer you&apos;re looking for, 
              don&apos;t hesitate to reach out to our friendly support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8 py-3">
                <a href="mailto:support@shortly.com">Contact Support</a>
              </Button>
              <Button variant="outline" asChild size="lg" className="px-8 py-3">
                <Link href="/privacy">Privacy Policy</Link>
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              💡 <strong>Pro tip:</strong> Check out our{" "}
              <Link href="/about" className="text-primary hover:underline">About page</Link> to learn more about our mission and values.
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
