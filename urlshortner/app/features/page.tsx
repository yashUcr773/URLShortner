import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Link2, 
  QrCode, 
  BarChart3, 
  Users, 
  Split,
  Upload,
  Palette,
  Settings,
  Globe,
  Key,
  Shield,
  Zap,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Target,
  Calendar,
  Smartphone,
  Folder
} from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      title: "URL Shortening",
      description: "Create short, memorable links with custom aliases and advanced options",
      icon: Link2,
      href: "/",
      color: "from-purple-600 to-blue-500",
      features: ["Custom aliases", "Password protection", "Link expiration", "UTM builder"]
    },
    {
      title: "QR Code Generator",
      description: "Generate customizable QR codes for URLs, WiFi, vCards, and more",
      icon: QrCode,
      href: "/qr-generator",
      color: "from-blue-600 to-cyan-500",
      features: ["Multiple QR types", "Custom colors", "Logo embedding", "High resolution export"]
    },
    {
      title: "Link Analytics",
      description: "Track clicks, locations, devices, and get insights on your link performance",
      icon: BarChart3,
      href: "/analytics",
      color: "from-green-600 to-emerald-500",
      features: ["Real-time tracking", "Geographic data", "Device breakdown", "Referrer analytics"]
    },
    {
      title: "Link Organization",
      description: "Organize your links with folders, favorites, and smart filters",
      icon: Folder,
      href: "/dashboard",
      color: "from-yellow-600 to-amber-500",
      features: ["Folder management", "Favorites", "Quick filters", "Search & sort"]
    },
    {
      title: "Branded Links",
      description: "Use your own custom domains to create branded short links",
      icon: Globe,
      href: "/branded",
      color: "from-teal-600 to-cyan-500",
      features: ["Custom domains", "SSL certificates", "DNS management", "Multiple domains"],
      badge: "Pro"
    },
    {
      title: "Link Scheduling",
      description: "Schedule links to activate and deactivate at specific times",
      icon: Calendar,
      href: "/scheduling",
      color: "from-indigo-600 to-purple-500",
      features: ["Time-based activation", "Auto-deactivation", "Timezone support", "Email notifications"],
      badge: "Pro"
    },
    {
      title: "Retargeting Pixels",
      description: "Add tracking pixels from Facebook, Google, TikTok, and more",
      icon: Target,
      href: "/pixels",
      color: "from-pink-600 to-rose-500",
      features: ["Facebook Pixel", "Google Ads", "TikTok Pixel", "LinkedIn Insight"],
      badge: "Pro"
    },
    {
      title: "Mobile Deep Linking",
      description: "Create smart links that seamlessly open your mobile app",
      icon: Smartphone,
      href: "/deep-links",
      color: "from-blue-600 to-indigo-500",
      features: ["iOS deep links", "Android deep links", "Smart fallbacks", "App tracking"],
      badge: "Pro"
    },
    {
      title: "Link-in-Bio Page",
      description: "Create a personalized landing page with all your important links",
      icon: Palette,
      href: "/bio-link",
      color: "from-pink-600 to-rose-500",
      features: ["Drag & drop builder", "Custom themes", "Social icons", "Page analytics"],
      badge: "Popular"
    },
    {
      title: "Bulk Operations",
      description: "Import, export, and manage multiple URLs at once",
      icon: Upload,
      href: "/bulk",
      color: "from-amber-600 to-orange-500",
      features: ["CSV import/export", "Batch processing", "Error handling", "1000+ URLs at once"]
    },
    {
      title: "A/B Testing",
      description: "Split test your links to optimize conversion rates",
      icon: Split,
      href: "/ab-testing",
      color: "from-violet-600 to-purple-500",
      features: ["Split testing", "Confidence metrics", "Winner selection", "Performance reports"],
      badge: "Pro"
    },
    {
      title: "Team Collaboration",
      description: "Work together with role-based access and permissions",
      icon: Users,
      href: "/team",
      color: "from-blue-600 to-indigo-500",
      features: ["Team workspace", "Role management", "Activity tracking", "Member invitations"],
      badge: "Pro"
    },
    {
      title: "API Access",
      description: "Integrate with your applications using our powerful API",
      icon: Key,
      href: "/settings",
      color: "from-gray-700 to-gray-900",
      features: ["RESTful API", "Multiple API keys", "Webhook support", "Full documentation"],
      badge: "Pro"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl mb-6">
          <Sparkles className="h-10 w-10 text-white" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          All Features
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Powerful tools to shorten, customize, track, and optimize your links. 
          Everything you need in one platform.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
        <Card className="p-6 text-center">
          <p className="text-3xl font-bold text-purple-600 mb-1">50M+</p>
          <p className="text-sm text-gray-600">URLs Shortened</p>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-3xl font-bold text-blue-600 mb-1">99.9%</p>
          <p className="text-sm text-gray-600">Uptime SLA</p>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-3xl font-bold text-green-600 mb-1">&lt;100ms</p>
          <p className="text-sm text-gray-600">Response Time</p>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-3xl font-bold text-amber-600 mb-1">24/7</p>
          <p className="text-sm text-gray-600">Support</p>
        </Card>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {features.map((feature, idx) => (
          <Card key={idx} className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
            {/* Background Gradient on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
            
            {/* Badge */}
            {feature.badge && (
              <div className="absolute top-4 right-4">
                <Badge className="bg-gradient-to-r from-purple-600 to-blue-500 text-white">
                  {feature.badge}
                </Badge>
              </div>
            )}

            {/* Icon */}
            <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <feature.icon className="h-7 w-7 text-white" />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{feature.description}</p>

            {/* Feature List */}
            <ul className="space-y-2 mb-6">
              {feature.features.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.color}`}></div>
                  {item}
                </li>
              ))}
            </ul>

            {/* Link */}
            <Link href={feature.href}>
              <Button variant="outline" className="w-full group-hover:border-purple-500 group-hover:text-purple-600">
                Explore
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </Card>
        ))}
      </div>

      {/* Additional Features List */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Even More Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Advanced Security</h3>
                <p className="text-sm text-gray-600">Password protection, link expiration, and geo-blocking</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Smart Routing</h3>
                <p className="text-sm text-gray-600">Route users based on device, location, or language</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Lightning Fast</h3>
                <p className="text-sm text-gray-600">Global CDN ensures fast redirects worldwide</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Settings className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Deep Customization</h3>
                <p className="text-sm text-gray-600">White-label, custom CSS, and branded experiences</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <Card className="p-12 text-center bg-gradient-to-br from-purple-600 to-blue-500 border-0">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of users who trust SnapLink for their URL shortening needs
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 shadow-xl">
              Start Shortening
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
          <Link href="/settings">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View Pricing
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
