import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link2, QrCode, BarChart3, Shield, Zap, Globe } from "lucide-react";

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
