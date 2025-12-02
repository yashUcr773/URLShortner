import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link2, QrCode, BarChart3, Shield, Zap, Globe, Target, TrendingUp, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Shorten URLs & Generate QR Codes
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Simple. Fast. Reliable. Create short, memorable links and beautiful QR codes in seconds.
        </p>
      </div>

      {/* Main Shortening Card */}
      <Card className="max-w-4xl mx-auto p-8 shadow-xl bg-white">
        <div className="space-y-6">
          {/* URL Input */}
          <div className="space-y-2">
            <Label htmlFor="url" className="text-lg font-semibold">Enter your long URL</Label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input 
                  id="url"
                  type="url" 
                  placeholder="https://www.example.com/very/long/url/path..." 
                  className="pl-10 h-14 text-lg"
                />
              </div>
            </div>
          </div>

          {/* Advanced Options */}
          <details className="border rounded-lg p-4 bg-gray-50">
            <summary className="cursor-pointer font-semibold text-gray-700 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span>⚙️</span> Advanced Options
              </span>
            </summary>
            
            <div className="mt-6 space-y-6">
              {/* Custom Alias */}
              <div className="space-y-2">
                <Label htmlFor="alias">Custom Alias (Optional)</Label>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">snaplink.io/</span>
                  <Input 
                    id="alias"
                    placeholder="your-custom-name" 
                    className="flex-1"
                  />
                </div>
              </div>

              {/* Generate QR Code */}
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Generate QR Code</Label>
                  <p className="text-sm text-gray-500">Create a scannable QR code for this URL</p>
                </div>
                <Switch />
              </div>

              {/* Expiration */}
              <div className="space-y-2">
                <Label>Link Expiration</Label>
                <Select defaultValue="never">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="never">Never</SelectItem>
                    <SelectItem value="7">7 Days</SelectItem>
                    <SelectItem value="30">30 Days</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Password Protection */}
              <div className="space-y-2">
                <div className="flex items-center justify-between mb-2">
                  <Label>Password Protection</Label>
                  <Switch />
                </div>
                <Input 
                  type="password"
                  placeholder="Enter password (optional)" 
                  disabled
                  className="bg-gray-100"
                />
              </div>

              {/* Enable Analytics */}
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Enable Analytics</Label>
                  <p className="text-sm text-gray-500">Track clicks and visitor data</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </details>

          {/* UTM Parameter Builder */}
          <details className="border rounded-lg p-4 bg-gradient-to-br from-blue-50 to-purple-50">
            <summary className="cursor-pointer font-semibold text-gray-700 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-600" />
                UTM Campaign Builder
              </span>
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Marketing</Badge>
            </summary>
            
            <div className="mt-6 space-y-4">
              <p className="text-sm text-gray-600 mb-4">
                Add UTM parameters to track your marketing campaigns in Google Analytics
              </p>

              {/* UTM Source */}
              <div className="space-y-2">
                <Label htmlFor="utm-source">
                  Campaign Source <span className="text-red-500">*</span>
                </Label>
                <Input 
                  id="utm-source"
                  placeholder="e.g., google, newsletter, facebook" 
                  className="bg-white"
                />
                <p className="text-xs text-gray-500">Identify the advertiser, site, or publication</p>
              </div>

              {/* UTM Medium */}
              <div className="space-y-2">
                <Label htmlFor="utm-medium">
                  Campaign Medium <span className="text-red-500">*</span>
                </Label>
                <Select>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Select medium" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cpc">CPC (Cost Per Click)</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="social">Social</SelectItem>
                    <SelectItem value="organic">Organic</SelectItem>
                    <SelectItem value="referral">Referral</SelectItem>
                    <SelectItem value="display">Display</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-gray-500">Marketing or advertising medium</p>
              </div>

              {/* UTM Campaign */}
              <div className="space-y-2">
                <Label htmlFor="utm-campaign">
                  Campaign Name <span className="text-red-500">*</span>
                </Label>
                <Input 
                  id="utm-campaign"
                  placeholder="e.g., summer_sale, product_launch" 
                  className="bg-white"
                />
                <p className="text-xs text-gray-500">Product, promo code, or slogan</p>
              </div>

              {/* UTM Term */}
              <div className="space-y-2">
                <Label htmlFor="utm-term">Campaign Term (Optional)</Label>
                <Input 
                  id="utm-term"
                  placeholder="e.g., running+shoes" 
                  className="bg-white"
                />
                <p className="text-xs text-gray-500">Identify paid search keywords</p>
              </div>

              {/* UTM Content */}
              <div className="space-y-2">
                <Label htmlFor="utm-content">Campaign Content (Optional)</Label>
                <Input 
                  id="utm-content"
                  placeholder="e.g., banner_ad, text_link" 
                  className="bg-white"
                />
                <p className="text-xs text-gray-500">Differentiate similar content or links</p>
              </div>

              {/* Generated URL Preview */}
              <div className="bg-white border border-blue-200 rounded-lg p-4 mt-4">
                <div className="flex items-start justify-between mb-2">
                  <Label className="text-sm font-semibold text-gray-700">Generated URL Preview</Label>
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </div>
                <p className="text-xs text-gray-600 break-all font-mono bg-gray-50 p-2 rounded">
                  https://example.com/?utm_source=google&utm_medium=cpc&utm_campaign=summer_sale
                </p>
              </div>

              {/* Quick Templates */}
              <div className="mt-4">
                <Label className="text-sm font-semibold mb-2 block">Quick Templates</Label>
                <div className="flex gap-2 flex-wrap">
                  <Button variant="outline" size="sm" className="text-xs">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Facebook Ad
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    📧 Email Campaign
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    🐦 Twitter Post
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    📱 Instagram Bio
                  </Button>
                </div>
              </div>
            </div>
          </details>

          {/* Shorten Button */}
          <Button className="w-full h-14 text-lg bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
            <Zap className="mr-2 h-5 w-5" />
            Shorten URL
          </Button>

          {/* Info Text */}
          <p className="text-center text-sm text-gray-500">
            ✨ No registration required for basic shortening
          </p>
        </div>
      </Card>

      {/* Features Section */}
      <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card className="p-6 text-center hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <BarChart3 className="h-6 w-6 text-purple-600" />
          </div>
          <h3 className="font-semibold text-lg mb-2">50M+ URLs Shortened</h3>
          <p className="text-gray-600 text-sm">Trusted by millions worldwide</p>
        </Card>

        <Card className="p-6 text-center hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Zap className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-lg mb-2">&lt; 100ms Response</h3>
          <p className="text-gray-600 text-sm">Lightning-fast URL creation</p>
        </Card>

        <Card className="p-6 text-center hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Secure & Private</h3>
          <p className="text-gray-600 text-sm">Your data is always protected</p>
        </Card>
      </div>
    </div>
  );
}
