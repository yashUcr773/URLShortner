import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Smartphone, Apple, Chrome, Link2, Settings, Plus, Code, ExternalLink, CheckCircle, AlertCircle, Zap } from "lucide-react";

export default function DeepLinkingPage() {
  const deepLinks = [
    {
      id: 1,
      name: "Product Page Deep Link",
      shortUrl: "snaplink.io/product-123",
      iosUrl: "myapp://product/123",
      androidUrl: "myapp://product/123",
      webFallback: "https://example.com/products/123",
      clicks: 1234,
      appOpens: 856,
      status: "active",
    },
    {
      id: 2,
      name: "Special Offer",
      shortUrl: "snaplink.io/offer-xyz",
      iosUrl: "myapp://offers/xyz",
      androidUrl: "myapp://offers/xyz",
      webFallback: "https://example.com/offers/xyz",
      clicks: 2341,
      appOpens: 1823,
      status: "active",
    },
    {
      id: 3,
      name: "User Profile",
      shortUrl: "snaplink.io/user-abc",
      iosUrl: "myapp://profile/abc",
      androidUrl: "myapp://profile/abc",
      webFallback: "https://example.com/user/abc",
      clicks: 567,
      appOpens: 389,
      status: "active",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Mobile Deep Linking</h1>
        <p className="text-gray-600">
          Create smart links that seamlessly open your mobile app or fallback to your website
        </p>
      </div>

      {/* Benefits Banner */}
      <Card className="mb-8 p-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-2 border-blue-200">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-white rounded-lg shadow-sm">
            <Smartphone className="h-6 w-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">Seamless Mobile Experience</h3>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="flex items-start gap-2">
                <Zap className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Direct to App</p>
                  <p className="text-xs text-gray-600">Open specific content in your mobile app</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Link2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Smart Fallback</p>
                  <p className="text-xs text-gray-600">Auto-redirect to web if app not installed</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Better Engagement</p>
                  <p className="text-xs text-gray-600">Increase app engagement and retention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Create Deep Link */}
      <Card className="mb-8 p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Create Deep Link
        </h3>
        
        <div className="space-y-6">
          {/* Basic Info */}
          <div className="space-y-2">
            <Label htmlFor="link-name">Link Name</Label>
            <Input 
              id="link-name"
              placeholder="e.g., Product Launch Campaign" 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="short-url">Short URL</Label>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm">snaplink.io/</span>
              <Input 
                id="short-url"
                placeholder="your-deep-link" 
                className="flex-1"
              />
            </div>
          </div>

          {/* iOS Configuration */}
          <div className="p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <Apple className="h-5 w-5" />
              <h4 className="font-semibold">iOS Configuration</h4>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="ios-scheme">iOS App URL Scheme</Label>
                <Input 
                  id="ios-scheme"
                  placeholder="myapp://product/123" 
                  className="bg-white font-mono"
                />
                <p className="text-xs text-gray-500">
                  The deep link URL that opens your iOS app
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="app-store">App Store URL (Fallback)</Label>
                <Input 
                  id="app-store"
                  placeholder="https://apps.apple.com/app/your-app/id123456789" 
                  className="bg-white"
                />
                <p className="text-xs text-gray-500">
                  Redirect to App Store if app is not installed
                </p>
              </div>

              <div className="flex items-center justify-between p-3 bg-white rounded border">
                <div>
                  <Label className="text-sm">Universal Links</Label>
                  <p className="text-xs text-gray-500">Use Apple Universal Links (Recommended)</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>

          {/* Android Configuration */}
          <div className="p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <Chrome className="h-5 w-5" />
              <h4 className="font-semibold">Android Configuration</h4>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="android-scheme">Android App URL Scheme</Label>
                <Input 
                  id="android-scheme"
                  placeholder="myapp://product/123" 
                  className="bg-white font-mono"
                />
                <p className="text-xs text-gray-500">
                  The deep link URL that opens your Android app
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="package-name">Package Name</Label>
                <Input 
                  id="package-name"
                  placeholder="com.example.myapp" 
                  className="bg-white font-mono"
                />
                <p className="text-xs text-gray-500">
                  Your Android app&apos;s package name
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="play-store">Play Store URL (Fallback)</Label>
                <Input 
                  id="play-store"
                  placeholder="https://play.google.com/store/apps/details?id=com.example.myapp" 
                  className="bg-white"
                />
                <p className="text-xs text-gray-500">
                  Redirect to Play Store if app is not installed
                </p>
              </div>

              <div className="flex items-center justify-between p-3 bg-white rounded border">
                <div>
                  <Label className="text-sm">App Links</Label>
                  <p className="text-xs text-gray-500">Use Android App Links (Recommended)</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>

          {/* Desktop/Web Fallback */}
          <div className="p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <ExternalLink className="h-5 w-5" />
              <h4 className="font-semibold">Desktop/Web Fallback</h4>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="web-fallback">Website URL</Label>
              <Input 
                id="web-fallback"
                placeholder="https://example.com/product/123" 
                className="bg-white"
              />
              <p className="text-xs text-gray-500">
                Where desktop users or unsupported devices will be redirected
              </p>
            </div>
          </div>

          {/* Advanced Options */}
          <details className="border rounded-lg p-4 bg-gray-50">
            <summary className="cursor-pointer font-semibold text-gray-700 flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Advanced Options
            </summary>
            
            <div className="mt-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="delay">Redirect Delay (seconds)</Label>
                <Select defaultValue="0">
                  <SelectTrigger id="delay">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">Instant (0s)</SelectItem>
                    <SelectItem value="1">1 second</SelectItem>
                    <SelectItem value="2">2 seconds</SelectItem>
                    <SelectItem value="5">5 seconds</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between p-3 bg-white rounded border">
                <div>
                  <Label className="text-sm">Show Interstitial Page</Label>
                  <p className="text-xs text-gray-500">Display message before opening app</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between p-3 bg-white rounded border">
                <div>
                  <Label className="text-sm">Track App Opens</Label>
                  <p className="text-xs text-gray-500">Monitor successful app launches</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </details>

          <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
            <Plus className="h-4 w-4 mr-2" />
            Create Deep Link
          </Button>
        </div>
      </Card>

      {/* Active Deep Links */}
      <Card className="p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Your Deep Links</h3>
          <Badge variant="outline" className="text-sm">
            {deepLinks.length} Active
          </Badge>
        </div>

        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name & URL</TableHead>
                <TableHead>Platform URLs</TableHead>
                <TableHead className="text-center">Total Clicks</TableHead>
                <TableHead className="text-center">App Opens</TableHead>
                <TableHead className="text-center">Open Rate</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {deepLinks.map((link) => {
                const openRate = ((link.appOpens / link.clicks) * 100).toFixed(1);
                return (
                  <TableRow key={link.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium mb-1">{link.name}</p>
                        <code className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">
                          {link.shortUrl}
                        </code>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1 text-xs">
                        <div className="flex items-center gap-1">
                          <Apple className="h-3 w-3 text-gray-500" />
                          <code className="text-gray-600">{link.iosUrl}</code>
                        </div>
                        <div className="flex items-center gap-1">
                          <Chrome className="h-3 w-3 text-gray-500" />
                          <code className="text-gray-600">{link.androidUrl}</code>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-center font-semibold text-blue-600">
                      {link.clicks.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-center font-semibold text-green-600">
                      {link.appOpens.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge className={
                        parseFloat(openRate) > 70 
                          ? "bg-green-100 text-green-700"
                          : parseFloat(openRate) > 50
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }>
                        {openRate}%
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Code className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Setup Guide */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* iOS Setup */}
        <Card className="p-6 bg-gray-50">
          <div className="flex items-center gap-2 mb-4">
            <Apple className="h-6 w-6" />
            <h3 className="text-xl font-semibold">iOS Setup Guide</h3>
          </div>
          
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs">1</span>
                Configure URL Schemes
              </h4>
              <p className="text-gray-600 ml-8">
                Add URL schemes to your Info.plist file in Xcode
              </p>
              <div className="ml-8 mt-2 p-3 bg-white rounded border font-mono text-xs">
                {`<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>myapp</string>
    </array>
  </dict>
</array>`}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs">2</span>
                Handle Deep Links
              </h4>
              <p className="text-gray-600 ml-8">
                Implement URL handling in your AppDelegate
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs">3</span>
                Universal Links (Optional)
              </h4>
              <p className="text-gray-600 ml-8">
                Set up Universal Links for seamless app opening
              </p>
            </div>

            <Button variant="outline" className="w-full mt-4">
              View Full iOS Documentation
            </Button>
          </div>
        </Card>

        {/* Android Setup */}
        <Card className="p-6 bg-gray-50">
          <div className="flex items-center gap-2 mb-4">
            <Chrome className="h-6 w-6" />
            <h3 className="text-xl font-semibold">Android Setup Guide</h3>
          </div>
          
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 text-xs">1</span>
                Add Intent Filter
              </h4>
              <p className="text-gray-600 ml-8">
                Configure intent filter in AndroidManifest.xml
              </p>
              <div className="ml-8 mt-2 p-3 bg-white rounded border font-mono text-xs overflow-x-auto">
                {`<intent-filter>
  <action android:name="android.intent.action.VIEW" />
  <category android:name="android.intent.category.DEFAULT" />
  <category android:name="android.intent.category.BROWSABLE" />
  <data android:scheme="myapp" />
</intent-filter>`}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 text-xs">2</span>
                Handle Intent
              </h4>
              <p className="text-gray-600 ml-8">
                Process the deep link in your Activity
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 text-xs">3</span>
                App Links (Optional)
              </h4>
              <p className="text-gray-600 ml-8">
                Configure Android App Links for verified domains
              </p>
            </div>

            <Button variant="outline" className="w-full mt-4">
              View Full Android Documentation
            </Button>
          </div>
        </Card>
      </div>

      {/* Testing Tool */}
      <Card className="mt-8 p-6 bg-gradient-to-br from-purple-50 to-blue-50">
        <h3 className="text-xl font-semibold mb-4">🧪 Test Your Deep Link</h3>
        <p className="text-sm text-gray-600 mb-4">
          Enter your short URL to test deep linking behavior on different platforms
        </p>
        
        <div className="flex gap-2 mb-4">
          <Input 
            placeholder="snaplink.io/your-link" 
            className="bg-white"
          />
          <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
            Test Link
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          <Button variant="outline" size="sm" className="justify-start">
            <Apple className="h-4 w-4 mr-2" />
            Test on iOS
          </Button>
          <Button variant="outline" size="sm" className="justify-start">
            <Chrome className="h-4 w-4 mr-2" />
            Test on Android
          </Button>
          <Button variant="outline" size="sm" className="justify-start">
            <ExternalLink className="h-4 w-4 mr-2" />
            Test on Desktop
          </Button>
        </div>
      </Card>
    </div>
  );
}
