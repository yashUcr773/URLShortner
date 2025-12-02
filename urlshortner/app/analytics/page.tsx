import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Download, FileText, TrendingUp, TrendingDown, Eye, Users, Globe, Smartphone } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Link href="/dashboard">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
        </Link>
      </div>

      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Analytics</h1>
            <p className="text-lg text-purple-600 font-semibold mb-1">snaplink.io/abc123</p>
            <p className="text-sm text-gray-600 break-all">
              → https://example.com/article/how-to-create-amazing-content
            </p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
            <Button variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Generate Report
            </Button>
          </div>
        </div>
      </div>

      {/* Time Period Selector */}
      <div className="flex items-center gap-4 mb-8">
        <Select defaultValue="7days">
          <SelectTrigger className="w-[200px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="24hours">Last 24 Hours</SelectItem>
            <SelectItem value="7days">Last 7 Days</SelectItem>
            <SelectItem value="30days">Last 30 Days</SelectItem>
            <SelectItem value="90days">Last 90 Days</SelectItem>
            <SelectItem value="custom">Custom Range</SelectItem>
          </SelectContent>
        </Select>
        <span className="text-sm text-gray-500">Nov 25 - Dec 2, 2025</span>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total Clicks</p>
              <p className="text-4xl font-bold">1,234</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Eye className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="flex items-center gap-1 text-green-600">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm font-medium">↑ 23%</span>
            <span className="text-sm text-gray-500">vs previous period</span>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Unique Visitors</p>
              <p className="text-4xl font-bold">856</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="flex items-center gap-1 text-green-600">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm font-medium">↑ 18%</span>
            <span className="text-sm text-gray-500">vs previous period</span>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Today</p>
              <p className="text-4xl font-bold">42</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="flex items-center gap-1 text-red-600">
            <TrendingDown className="h-4 w-4" />
            <span className="text-sm font-medium">↓ 5%</span>
            <span className="text-sm text-gray-500">vs yesterday</span>
          </div>
        </Card>
      </div>

      {/* Clicks Over Time Chart */}
      <Card className="p-6 mb-8">
        <h2 className="text-xl font-bold mb-6">Clicks Over Time</h2>
        <div className="h-80 flex items-end justify-between gap-2">
          {/* Mock Chart Bars */}
          {[65, 85, 72, 95, 88, 110, 78].map((height, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full bg-gradient-to-t from-purple-600 to-blue-500 rounded-t-lg hover:from-purple-700 hover:to-blue-600 transition-all cursor-pointer relative group"
                style={{ height: `${height}%` }}>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {Math.floor(height * 2)} clicks
                </div>
              </div>
              <span className="text-xs text-gray-500 mt-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][idx]}
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* Detailed Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Top Locations */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Top Locations
          </h2>
          <div className="space-y-4">
            {[
              { country: "🇺🇸 United States", clicks: 556, percent: 45 },
              { country: "🇬🇧 United Kingdom", clicks: 222, percent: 18 },
              { country: "🇨🇦 Canada", clicks: 148, percent: 12 },
              { country: "🇦🇺 Australia", clicks: 99, percent: 8 },
              { country: "🇩🇪 Germany", clicks: 86, percent: 7 },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">{item.country}</span>
                  <span className="text-sm text-gray-600">{item.clicks} clicks ({item.percent}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-blue-500 h-2 rounded-full"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Devices */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Smartphone className="h-5 w-5" />
            Devices
          </h2>
          <div className="space-y-4">
            {[
              { device: "📱 Mobile", clicks: 642, percent: 52, color: "from-purple-600 to-blue-500" },
              { device: "💻 Desktop", clicks: 432, percent: 35, color: "from-blue-600 to-cyan-500" },
              { device: "📱 Tablet", clicks: 160, percent: 13, color: "from-cyan-600 to-teal-500" },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">{item.device}</span>
                  <span className="text-sm text-gray-600">{item.clicks} clicks ({item.percent}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`bg-gradient-to-r ${item.color} h-2 rounded-full`}
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Donut Chart Visualization */}
          <div className="mt-8 flex justify-center">
            <div className="relative w-48 h-48">
              <svg viewBox="0 0 100 100" className="transform -rotate-90">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="20"/>
                <circle cx="50" cy="50" r="40" fill="none" stroke="url(#gradient1)" strokeWidth="20"
                  strokeDasharray="130 251" strokeLinecap="round"/>
                <circle cx="50" cy="50" r="40" fill="none" stroke="url(#gradient2)" strokeWidth="20"
                  strokeDasharray="88 251" strokeDashoffset="-130" strokeLinecap="round"/>
                <circle cx="50" cy="50" r="40" fill="none" stroke="url(#gradient3)" strokeWidth="20"
                  strokeDasharray="33 251" strokeDashoffset="-218" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#9333ea" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0891b2" />
                    <stop offset="100%" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </Card>
      </div>

      {/* Referrers and Browsers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Referrers */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Referrers</h2>
          <div className="space-y-4">
            {[
              { source: "Direct", clicks: 432, percent: 35 },
              { source: "Twitter", clicks: 346, percent: 28 },
              { source: "Facebook", clicks: 247, percent: 20 },
              { source: "LinkedIn", clicks: 148, percent: 12 },
              { source: "Other", clicks: 61, percent: 5 },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between py-2 border-b last:border-0">
                <span className="font-medium">{item.source}</span>
                <div className="flex items-center gap-3">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-600 to-blue-500 h-2 rounded-full"
                      style={{ width: `${item.percent * 2.5}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 w-16 text-right">{item.percent}%</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Browsers */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Browsers</h2>
          <div className="space-y-4">
            {[
              { browser: "Chrome", clicks: 716, percent: 58 },
              { browser: "Safari", clicks: 272, percent: 22 },
              { browser: "Firefox", clicks: 148, percent: 12 },
              { browser: "Edge", clicks: 74, percent: 6 },
              { browser: "Other", clicks: 24, percent: 2 },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between py-2 border-b last:border-0">
                <span className="font-medium">{item.browser}</span>
                <div className="flex items-center gap-3">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-cyan-500 h-2 rounded-full"
                      style={{ width: `${item.percent * 1.7}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 w-16 text-right">{item.percent}%</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
