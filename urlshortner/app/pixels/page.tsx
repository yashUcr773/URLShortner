import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Target, Plus, Eye, EyeOff, Code, Trash2, AlertCircle, CheckCircle, TrendingUp, Users, DollarSign } from "lucide-react";

export default function RetargetingPage() {
  const pixels = [
    {
      id: 1,
      name: "Facebook Pixel - Main",
      platform: "facebook",
      pixelId: "1234567890123456",
      status: "active",
      linksUsing: 45,
      conversions: 234,
      created: "Nov 10, 2025",
    },
    {
      id: 2,
      name: "Google Ads Conversion",
      platform: "google",
      pixelId: "AW-987654321",
      status: "active",
      linksUsing: 32,
      conversions: 189,
      created: "Nov 05, 2025",
    },
    {
      id: 3,
      name: "TikTok Pixel",
      platform: "tiktok",
      pixelId: "ABCD1234EFGH5678",
      status: "inactive",
      linksUsing: 0,
      conversions: 0,
      created: "Nov 20, 2025",
    },
    {
      id: 4,
      name: "LinkedIn Insight Tag",
      platform: "linkedin",
      pixelId: "123456",
      status: "active",
      linksUsing: 18,
      conversions: 67,
      created: "Oct 28, 2025",
    },
  ];

  const platformIcons = {
    facebook: "📘",
    google: "🔍",
    tiktok: "🎵",
    linkedin: "💼",
    twitter: "🐦",
    pinterest: "📌",
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Retargeting Pixels</h1>
        <p className="text-gray-600">
          Add tracking pixels to your short links for retargeting campaigns and conversion tracking
        </p>
      </div>

      {/* Benefits Banner */}
      <Card className="mb-8 p-6 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 border-2 border-purple-200">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-white rounded-lg shadow-sm">
            <Target className="h-6 w-6 text-purple-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">Supercharge Your Ad Campaigns</h3>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="flex items-start gap-2">
                <Users className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Build Audiences</p>
                  <p className="text-xs text-gray-600">Create custom audiences from link clicks</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <TrendingUp className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Track Conversions</p>
                  <p className="text-xs text-gray-600">Measure ROI and optimize campaigns</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <DollarSign className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Increase Revenue</p>
                  <p className="text-xs text-gray-600">Retarget visitors who clicked your links</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Add New Pixel */}
      <Card className="mb-8 p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Add Tracking Pixel
        </h3>
        
        <div className="space-y-6">
          {/* Platform Selection */}
          <div className="space-y-2">
            <Label htmlFor="platform">Platform</Label>
            <Select>
              <SelectTrigger id="platform">
                <SelectValue placeholder="Select advertising platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="facebook">
                  <div className="flex items-center gap-2">
                    <span>📘</span>
                    <span>Facebook Pixel</span>
                  </div>
                </SelectItem>
                <SelectItem value="google">
                  <div className="flex items-center gap-2">
                    <span>🔍</span>
                    <span>Google Ads</span>
                  </div>
                </SelectItem>
                <SelectItem value="tiktok">
                  <div className="flex items-center gap-2">
                    <span>🎵</span>
                    <span>TikTok Pixel</span>
                  </div>
                </SelectItem>
                <SelectItem value="linkedin">
                  <div className="flex items-center gap-2">
                    <span>💼</span>
                    <span>LinkedIn Insight Tag</span>
                  </div>
                </SelectItem>
                <SelectItem value="twitter">
                  <div className="flex items-center gap-2">
                    <span>🐦</span>
                    <span>Twitter Pixel</span>
                  </div>
                </SelectItem>
                <SelectItem value="pinterest">
                  <div className="flex items-center gap-2">
                    <span>📌</span>
                    <span>Pinterest Tag</span>
                  </div>
                </SelectItem>
                <SelectItem value="custom">
                  <div className="flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    <span>Custom Pixel</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Pixel Name */}
          <div className="space-y-2">
            <Label htmlFor="pixel-name">Pixel Name</Label>
            <Input 
              id="pixel-name"
              placeholder="e.g., Facebook Pixel - Black Friday Campaign" 
            />
            <p className="text-xs text-gray-500">
              Give your pixel a descriptive name for easy identification
            </p>
          </div>

          {/* Pixel ID */}
          <div className="space-y-2">
            <Label htmlFor="pixel-id">Pixel ID / Tracking Code</Label>
            <Input 
              id="pixel-id"
              placeholder="e.g., 1234567890123456" 
              className="font-mono"
            />
            <p className="text-xs text-gray-500">
              Find this in your advertising platform&apos;s settings
            </p>
          </div>

          {/* Custom Code (for advanced users) */}
          <details className="border rounded-lg p-4 bg-gray-50">
            <summary className="cursor-pointer font-semibold text-gray-700 flex items-center gap-2">
              <Code className="h-4 w-4" />
              Custom Tracking Code (Advanced)
            </summary>
            
            <div className="mt-4 space-y-2">
              <Label htmlFor="custom-code">Custom HTML/JavaScript</Label>
              <Textarea 
                id="custom-code"
                placeholder="<script>
  // Your custom tracking code here
  fbq('track', 'PageView');
</script>"
                rows={6}
                className="font-mono text-sm bg-white"
              />
              <p className="text-xs text-gray-500">
                Paste your complete pixel code including script tags
              </p>
            </div>
          </details>

          {/* Conversion Events */}
          <div className="space-y-3">
            <Label>Track Conversion Events</Label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded" defaultChecked />
                <span>PageView - When link is clicked</span>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded" />
                <span>Lead - Track as lead generation</span>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded" />
                <span>Purchase - Track as conversion</span>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded" />
                <span>ViewContent - Content view event</span>
              </label>
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="space-y-0.5">
              <Label>Active Status</Label>
              <p className="text-sm text-gray-500">
                Enable or disable this pixel across all links
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
            <Plus className="h-4 w-4 mr-2" />
            Add Pixel
          </Button>
        </div>
      </Card>

      {/* Active Pixels */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Your Tracking Pixels</h3>
          <Badge variant="outline" className="text-sm">
            {pixels.filter(p => p.status === 'active').length} Active
          </Badge>
        </div>

        <div className="space-y-4">
          {pixels.map((pixel) => (
            <Card key={pixel.id} className="p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="text-3xl">
                    {platformIcons[pixel.platform as keyof typeof platformIcons]}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-lg">{pixel.name}</h4>
                      <Badge
                        className={
                          pixel.status === "active"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-700"
                        }
                      >
                        {pixel.status === "active" ? (
                          <>
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Active
                          </>
                        ) : (
                          <>
                            <EyeOff className="h-3 w-3 mr-1" />
                            Inactive
                          </>
                        )}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 mb-3">
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-600">
                        {pixel.pixelId}
                      </code>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-6">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Links Using</p>
                        <p className="text-2xl font-bold text-blue-600">{pixel.linksUsing}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Conversions</p>
                        <p className="text-2xl font-bold text-green-600">{pixel.conversions}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Created</p>
                        <p className="text-sm font-medium text-gray-700">{pixel.created}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* How It Works */}
      <Card className="mt-8 p-6 bg-gray-50">
        <h3 className="text-xl font-semibold mb-4">🎯 How Retargeting Pixels Work</h3>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 font-bold text-sm flex-shrink-0">
              1
            </div>
            <div>
              <h4 className="font-semibold mb-1">Add Your Pixel</h4>
              <p className="text-sm text-gray-600">
                Add tracking pixels from Facebook, Google, TikTok, or other advertising platforms to your account
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 font-bold text-sm flex-shrink-0">
              2
            </div>
            <div>
              <h4 className="font-semibold mb-1">Assign to Links</h4>
              <p className="text-sm text-gray-600">
                When creating a short link, select which pixels you want to fire when users click
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 font-bold text-sm flex-shrink-0">
              3
            </div>
            <div>
              <h4 className="font-semibold mb-1">Build Audiences</h4>
              <p className="text-sm text-gray-600">
                The pixel fires when someone clicks your link, adding them to your retargeting audience
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 font-bold text-sm flex-shrink-0">
              4
            </div>
            <div>
              <h4 className="font-semibold mb-1">Retarget & Convert</h4>
              <p className="text-sm text-gray-600">
                Show targeted ads to people who clicked your links to increase conversions
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Platform Guides */}
      <Card className="mt-8 p-6">
        <h3 className="text-xl font-semibold mb-4">📚 Platform Setup Guides</h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <Button variant="outline" className="justify-start h-auto py-4">
            <div className="flex items-center gap-3 w-full">
              <span className="text-2xl">📘</span>
              <div className="text-left">
                <p className="font-semibold">Facebook Pixel Guide</p>
                <p className="text-xs text-gray-500">How to find and install your Facebook Pixel</p>
              </div>
            </div>
          </Button>

          <Button variant="outline" className="justify-start h-auto py-4">
            <div className="flex items-center gap-3 w-full">
              <span className="text-2xl">🔍</span>
              <div className="text-left">
                <p className="font-semibold">Google Ads Setup</p>
                <p className="text-xs text-gray-500">Configure Google Ads conversion tracking</p>
              </div>
            </div>
          </Button>

          <Button variant="outline" className="justify-start h-auto py-4">
            <div className="flex items-center gap-3 w-full">
              <span className="text-2xl">🎵</span>
              <div className="text-left">
                <p className="font-semibold">TikTok Pixel Guide</p>
                <p className="text-xs text-gray-500">Set up TikTok pixel for retargeting</p>
              </div>
            </div>
          </Button>

          <Button variant="outline" className="justify-start h-auto py-4">
            <div className="flex items-center gap-3 w-full">
              <span className="text-2xl">💼</span>
              <div className="text-left">
                <p className="font-semibold">LinkedIn Insight Tag</p>
                <p className="text-xs text-gray-500">Install LinkedIn tracking for B2B campaigns</p>
              </div>
            </div>
          </Button>
        </div>
      </Card>
    </div>
  );
}
