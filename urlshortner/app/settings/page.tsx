import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Shield, 
  CreditCard, 
  Globe, 
  Key, 
  Bell, 
  Download,
  Palette,
  Upload,
  Copy,
  RefreshCw,
  Trash2,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account settings and preferences</p>
      </div>

      <div className="max-w-6xl mx-auto">
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 h-auto">
            <TabsTrigger value="profile" className="flex items-center gap-2 py-3">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
            <TabsTrigger value="account" className="flex items-center gap-2 py-3">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">Account</span>
            </TabsTrigger>
            <TabsTrigger value="domain" className="flex items-center gap-2 py-3">
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">Domain</span>
            </TabsTrigger>
            <TabsTrigger value="api" className="flex items-center gap-2 py-3">
              <Key className="h-4 w-4" />
              <span className="hidden sm:inline">API</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2 py-3">
              <Bell className="h-4 w-4" />
              <span className="hidden sm:inline">Notifications</span>
            </TabsTrigger>
            <TabsTrigger value="billing" className="flex items-center gap-2 py-3">
              <CreditCard className="h-4 w-4" />
              <span className="hidden sm:inline">Billing</span>
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
                
                {/* Avatar */}
                <div className="flex items-center gap-6 mb-6">
                  <Avatar className="w-24 h-24">
                    <AvatarFallback className="bg-gradient-to-br from-purple-600 to-blue-500 text-white text-2xl">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <Button variant="outline">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload New Photo
                    </Button>
                    <p className="text-xs text-gray-500">JPG, PNG or GIF. Max size 5MB.</p>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="grid gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstname">First Name</Label>
                      <Input id="firstname" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastname">Last Name</Label>
                      <Input id="lastname" defaultValue="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea 
                      id="bio" 
                      placeholder="Tell us about yourself..."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" type="url" placeholder="https://yourwebsite.com" />
                  </div>

                  <Button className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                    Save Changes
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Account Tab */}
          <TabsContent value="account">
            <div className="space-y-6">
              {/* Change Password */}
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Change Password</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                    Update Password
                  </Button>
                </div>
              </Card>

              {/* Two-Factor Authentication */}
              <Card className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Two-Factor Authentication</h2>
                    <p className="text-gray-600">Add an extra layer of security to your account</p>
                  </div>
                  <Switch />
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-blue-900">Two-factor authentication is enabled</p>
                      <p className="text-sm text-blue-700 mt-1">
                        Your account is protected with an additional security layer
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Delete Account */}
              <Card className="p-6 border-red-200">
                <h2 className="text-2xl font-bold mb-2 text-red-600">Danger Zone</h2>
                <p className="text-gray-600 mb-4">
                  Once you delete your account, there is no going back. Please be certain.
                </p>
                <Button variant="destructive">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Account
                </Button>
              </Card>
            </div>
          </TabsContent>

          {/* Custom Domain Tab */}
          <TabsContent value="domain">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Custom Domain</h2>
                <Badge className="bg-gradient-to-r from-purple-600 to-blue-500 text-white">
                  Pro Feature
                </Badge>
              </div>

              <p className="text-gray-600 mb-6">
                Use your own branded domain for shortened URLs instead of snaplink.io
              </p>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="domain">Your Domain</Label>
                  <Input 
                    id="domain" 
                    placeholder="short.yourbrand.com"
                    defaultValue="short.yourbrand.com"
                  />
                </div>

                <Card className="p-4 bg-gray-50">
                  <h3 className="font-semibold mb-3">DNS Configuration Required:</h3>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-gray-500">Type:</span>
                        <span className="ml-2">CNAME</span>
                      </div>
                      <div>
                        <span className="text-gray-500">TTL:</span>
                        <span className="ml-2">3600</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-500">Host:</span>
                      <span className="ml-2">short</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Value:</span>
                      <span className="ml-2">proxy.snaplink.io</span>
                    </div>
                  </div>
                </Card>

                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-amber-600" />
                  <div>
                    <p className="font-medium text-amber-900">Pending Verification</p>
                    <p className="text-sm text-amber-700">
                      We&apos;re checking your DNS records. This may take a few minutes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                    Verify Domain
                  </Button>
                  <Button variant="outline">Remove Domain</Button>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>SSL Certificate</Label>
                    <Badge variant="outline" className="border-green-500 text-green-700">
                      Active
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    Auto-provisioned with Let&apos;s Encrypt. Automatically renews before expiration.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* API Tab */}
          <TabsContent value="api">
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">API Keys</h2>
                    <p className="text-gray-600">
                      Your API keys allow you to integrate SnapLink with your applications
                    </p>
                  </div>
                  <Badge className="bg-gradient-to-r from-purple-600 to-blue-500 text-white">
                    Pro Feature
                  </Badge>
                </div>

                <div className="space-y-4">
                  {/* Production Key */}
                  <Card className="p-4 bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold">Production Key</h3>
                          <Badge variant="outline" className="text-xs">Active</Badge>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <code className="text-sm bg-white px-3 py-1 rounded border">
                            snap_prod_a1b2c3d4e5f6g7h8i9j0k1l2
                          </code>
                          <Button variant="ghost" size="sm">
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                        <p className="text-xs text-gray-600">
                          Created: Nov 25, 2025 • Last used: Dec 1, 2025
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <RefreshCw className="h-3 w-3 mr-1" />
                        Rotate
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="h-3 w-3 mr-1" />
                        Revoke
                      </Button>
                    </div>
                  </Card>

                  {/* Development Key */}
                  <Card className="p-4 bg-gray-50 border-gray-200">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold">Development Key</h3>
                          <Badge variant="outline" className="text-xs bg-white">Active</Badge>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <code className="text-sm bg-white px-3 py-1 rounded border">
                            snap_dev_k1l2m3n4o5p6q7r8s9t0u1v2
                          </code>
                          <Button variant="ghost" size="sm">
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                        <p className="text-xs text-gray-600">
                          Created: Nov 20, 2025 • Last used: Nov 28, 2025
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <RefreshCw className="h-3 w-3 mr-1" />
                        Rotate
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="h-3 w-3 mr-1" />
                        Revoke
                      </Button>
                    </div>
                  </Card>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                    <Key className="h-4 w-4 mr-2" />
                    Generate New API Key
                  </Button>
                </div>

                <Separator className="my-6" />

                <div>
                  <h3 className="font-semibold mb-3">Usage This Month</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">API Requests</span>
                      <span className="font-semibold">24,567 / 100,000</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-600 to-blue-500 h-2 rounded-full"
                        style={{ width: '24.5%' }}
                      />
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-6">
                  View API Documentation
                </Button>
              </Card>
            </div>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Notification Preferences</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-4">Email Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b">
                      <div>
                        <p className="font-medium">Link Performance Reports</p>
                        <p className="text-sm text-gray-600">Weekly summary of your link analytics</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between py-3 border-b">
                      <div>
                        <p className="font-medium">Link Expiration Warnings</p>
                        <p className="text-sm text-gray-600">Get notified before links expire</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between py-3 border-b">
                      <div>
                        <p className="font-medium">Security Alerts</p>
                        <p className="text-sm text-gray-600">Important account security notifications</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between py-3 border-b">
                      <div>
                        <p className="font-medium">Product Updates</p>
                        <p className="text-sm text-gray-600">New features and improvements</p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <div>
                        <p className="font-medium">Marketing Emails</p>
                        <p className="text-sm text-gray-600">Tips, tricks, and promotional content</p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-4">Push Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b">
                      <div>
                        <p className="font-medium">High Traffic Alerts</p>
                        <p className="text-sm text-gray-600">When a link gets unusual traffic</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <div>
                        <p className="font-medium">Link Clicks</p>
                        <p className="text-sm text-gray-600">Real-time notifications for every click</p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Billing Tab */}
          <TabsContent value="billing">
            <div className="space-y-6">
              {/* Current Plan */}
              <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Current Plan</h2>
                    <Badge className="bg-gradient-to-r from-purple-600 to-blue-500 text-white mb-2">
                      Pro Plan
                    </Badge>
                    <p className="text-gray-600">$19/month • Billed monthly</p>
                  </div>
                  <Button variant="outline">Change Plan</Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div>
                    <p className="text-sm text-gray-600">Links</p>
                    <p className="text-2xl font-bold">Unlimited</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">API Requests</p>
                    <p className="text-2xl font-bold">100K/mo</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Custom Domain</p>
                    <p className="text-2xl font-bold">3</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Team Members</p>
                    <p className="text-2xl font-bold">5</p>
                  </div>
                </div>
              </Card>

              {/* Payment Method */}
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
                <div className="flex items-center justify-between p-4 border rounded-lg mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-8 bg-gradient-to-br from-blue-600 to-blue-400 rounded flex items-center justify-center text-white font-bold text-xs">
                      VISA
                    </div>
                    <div>
                      <p className="font-medium">•••• •••• •••• 4242</p>
                      <p className="text-sm text-gray-600">Expires 12/2027</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Update</Button>
                </div>
                <Button variant="outline" className="w-full">
                  Add Payment Method
                </Button>
              </Card>

              {/* Billing History */}
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Billing History</h2>
                <div className="space-y-3">
                  {[
                    { date: "Dec 1, 2025", amount: "$19.00", status: "Paid" },
                    { date: "Nov 1, 2025", amount: "$19.00", status: "Paid" },
                    { date: "Oct 1, 2025", amount: "$19.00", status: "Paid" },
                  ].map((invoice, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div>
                        <p className="font-medium">{invoice.date}</p>
                        <p className="text-sm text-gray-600">Pro Plan - Monthly</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="font-semibold">{invoice.amount}</p>
                        <Badge variant="outline" className="border-green-500 text-green-700">
                          {invoice.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
