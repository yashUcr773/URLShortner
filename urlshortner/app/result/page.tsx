import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Copy, Download, Share2, BarChart3, Plus, Twitter, Facebook, Linkedin, Mail, CheckCircle2 } from "lucide-react";

export default function ResultPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Success Message */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-4xl font-bold mb-2">Success! Your URL has been shortened</h1>
        <p className="text-gray-600">Share your new link anywhere</p>
      </div>

      {/* Result Card */}
      <Card className="max-w-4xl mx-auto p-8 shadow-xl bg-white">
        <div className="space-y-8">
          {/* Original URL */}
          <div>
            <label className="text-sm font-medium text-gray-500 mb-2 block">Original URL:</label>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700 break-all">
                https://www.example.com/very/long/url/path/article/how-to-create-amazing-content-for-your-website
              </p>
            </div>
          </div>

          <Separator />

          {/* Shortened URL */}
          <div>
            <label className="text-sm font-medium text-gray-500 mb-2 block">Shortened URL:</label>
            <div className="flex gap-2">
              <div className="flex-1 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border-2 border-purple-200">
                <p className="text-xl font-semibold text-purple-700">
                  🔗 https://snaplink.io/abc123
                </p>
              </div>
              <Button size="lg" variant="outline" className="flex-shrink-0">
                <Copy className="h-5 w-5 mr-2" />
                Copy
              </Button>
              <Button size="lg" variant="outline" className="flex-shrink-0">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <Separator />

          {/* QR Code Section */}
          <div>
            <label className="text-sm font-medium text-gray-500 mb-4 block">QR Code:</label>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* QR Code Display */}
              <div className="flex-shrink-0">
                <div className="w-64 h-64 bg-white border-4 border-gray-200 rounded-lg p-4 shadow-lg">
                  {/* Mock QR Code Pattern */}
                  <div className="w-full h-full bg-gradient-to-br from-black via-gray-800 to-black opacity-90"
                    style={{
                      backgroundImage: `
                        repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(255,255,255,0.3) 10px, rgba(255,255,255,0.3) 11px),
                        repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(255,255,255,0.3) 10px, rgba(255,255,255,0.3) 11px)
                      `
                    }}
                  >
                    <div className="flex items-center justify-center h-full">
                      <div className="text-white text-center opacity-50 font-mono text-xs">
                        QR CODE
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* QR Actions */}
              <div className="flex-1 space-y-4">
                <p className="text-gray-600">
                  Scan this QR code with any smartphone camera to instantly access your shortened URL.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" className="flex-1 min-w-[140px]">
                    <Download className="h-4 w-4 mr-2" />
                    PNG
                  </Button>
                  <Button variant="outline" className="flex-1 min-w-[140px]">
                    <Download className="h-4 w-4 mr-2" />
                    SVG
                  </Button>
                  <Button variant="outline" className="flex-1 min-w-[140px]">
                    <Download className="h-4 w-4 mr-2" />
                    PDF
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Share Section */}
          <div>
            <label className="text-sm font-medium text-gray-500 mb-4 block">Share:</label>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="flex-1 min-w-[140px]">
                <Twitter className="h-4 w-4 mr-2 text-blue-400" />
                Twitter
              </Button>
              <Button variant="outline" className="flex-1 min-w-[140px]">
                <Facebook className="h-4 w-4 mr-2 text-blue-600" />
                Facebook
              </Button>
              <Button variant="outline" className="flex-1 min-w-[140px]">
                <Linkedin className="h-4 w-4 mr-2 text-blue-700" />
                LinkedIn
              </Button>
              <Button variant="outline" className="flex-1 min-w-[140px]">
                <Mail className="h-4 w-4 mr-2 text-gray-600" />
                Email
              </Button>
            </div>
          </div>

          {/* Analytics Link */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium text-blue-900">Track your link performance</p>
                  <p className="text-sm text-blue-700">https://snaplink.io/abc123/stats</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                View Analytics
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <Link href="/" className="flex-1">
              <Button variant="outline" className="w-full" size="lg">
                <Plus className="h-5 w-5 mr-2" />
                Shorten Another URL
              </Button>
            </Link>
            <Link href="/dashboard" className="flex-1">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600" size="lg">
                View All Links
              </Button>
            </Link>
          </div>
        </div>
      </Card>

      {/* Additional Info */}
      <div className="max-w-4xl mx-auto mt-8 text-center">
        <p className="text-sm text-gray-500">
          💡 Tip: Create a free account to track analytics, customize links, and manage all your URLs in one place
        </p>
      </div>
    </div>
  );
}
