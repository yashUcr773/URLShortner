import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { 
  Plus, 
  GripVertical, 
  Link2, 
  Eye, 
  Edit, 
  Trash2, 
  ExternalLink,
  Instagram,
  Twitter,
  Youtube,
  Facebook,
  Mail,
  Globe,
  Palette,
  BarChart3,
  Settings,
  Share2
} from "lucide-react";

export default function BioLinkPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Link-in-Bio Page</h1>
        <p className="text-gray-600">Create your personalized landing page with all your important links</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Editor Section */}
        <div className="space-y-6">
          {/* Profile Settings */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Profile</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="w-20 h-20">
                  <AvatarFallback className="bg-gradient-to-br from-purple-600 to-blue-500 text-white text-2xl">
                    JD
                  </AvatarFallback>
                </Avatar>
                <Button variant="outline" size="sm">
                  Change Photo
                </Button>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="display-name">Display Name</Label>
                <Input id="display-name" defaultValue="John Doe" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea 
                  id="bio" 
                  placeholder="Tell your visitors about yourself..."
                  rows={3}
                  defaultValue="Designer & Developer 🎨💻"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="page-url">Your Page URL</Label>
                <div className="flex gap-2">
                  <span className="flex items-center px-3 bg-gray-100 border rounded-l-md text-gray-600 text-sm">
                    snaplink.io/
                  </span>
                  <Input 
                    id="page-url" 
                    defaultValue="johndoe"
                    className="rounded-l-none"
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Links Section */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Your Links</h2>
              <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                <Plus className="h-4 w-4 mr-1" />
                Add Link
              </Button>
            </div>

            <div className="space-y-3">
              {/* Link Item 1 */}
              <Card className="p-4 bg-white hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <GripVertical className="h-5 w-5 text-gray-400 cursor-move" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Globe className="h-4 w-4 text-purple-600" />
                      <p className="font-semibold">My Portfolio Website</p>
                    </div>
                    <p className="text-sm text-gray-500 truncate">https://johndoe.com</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      <Eye className="h-3 w-3 mr-1" />
                      234
                    </Badge>
                    <Switch defaultChecked />
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Link Item 2 */}
              <Card className="p-4 bg-white hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <GripVertical className="h-5 w-5 text-gray-400 cursor-move" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Youtube className="h-4 w-4 text-red-600" />
                      <p className="font-semibold">YouTube Channel</p>
                    </div>
                    <p className="text-sm text-gray-500 truncate">youtube.com/@johndoe</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      <Eye className="h-3 w-3 mr-1" />
                      892
                    </Badge>
                    <Switch defaultChecked />
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Link Item 3 */}
              <Card className="p-4 bg-white hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <GripVertical className="h-5 w-5 text-gray-400 cursor-move" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Instagram className="h-4 w-4 text-pink-600" />
                      <p className="font-semibold">Follow me on Instagram</p>
                    </div>
                    <p className="text-sm text-gray-500 truncate">instagram.com/johndoe</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      <Eye className="h-3 w-3 mr-1" />
                      1.2K
                    </Badge>
                    <Switch defaultChecked />
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Link Item 4 */}
              <Card className="p-4 bg-white hover:shadow-md transition-shadow opacity-50">
                <div className="flex items-center gap-3">
                  <GripVertical className="h-5 w-5 text-gray-400 cursor-move" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Twitter className="h-4 w-4 text-blue-600" />
                      <p className="font-semibold">Latest Tweets</p>
                    </div>
                    <p className="text-sm text-gray-500 truncate">twitter.com/johndoe</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      <Eye className="h-3 w-3 mr-1" />
                      567
                    </Badge>
                    <Switch />
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Add Link Button */}
              <Button variant="outline" className="w-full border-dashed border-2">
                <Plus className="h-4 w-4 mr-2" />
                Add New Link
              </Button>
            </div>
          </Card>

          {/* Customization */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Appearance
            </h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Theme</Label>
                <div className="grid grid-cols-3 gap-3">
                  <Card className="p-3 cursor-pointer hover:border-purple-500 transition-colors border-2 border-purple-500">
                    <div className="aspect-square bg-gradient-to-br from-purple-600 to-blue-500 rounded mb-2"></div>
                    <p className="text-xs text-center font-medium">Gradient</p>
                  </Card>
                  <Card className="p-3 cursor-pointer hover:border-purple-500 transition-colors">
                    <div className="aspect-square bg-gray-900 rounded mb-2"></div>
                    <p className="text-xs text-center font-medium">Dark</p>
                  </Card>
                  <Card className="p-3 cursor-pointer hover:border-purple-500 transition-colors">
                    <div className="aspect-square bg-white border rounded mb-2"></div>
                    <p className="text-xs text-center font-medium">Light</p>
                  </Card>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Button Style</Label>
                <div className="grid grid-cols-3 gap-3">
                  <Button variant="outline" size="sm" className="rounded-full">Rounded</Button>
                  <Button variant="outline" size="sm">Square</Button>
                  <Button variant="outline" size="sm" className="rounded-none">Sharp</Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Font</Label>
                <div className="grid grid-cols-3 gap-3">
                  <Button variant="outline" size="sm" className="font-sans">Sans</Button>
                  <Button variant="outline" size="sm" className="font-serif">Serif</Button>
                  <Button variant="outline" size="sm" className="font-mono">Mono</Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Social Icons */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Social Icons</h2>
            <p className="text-sm text-gray-600 mb-4">Add social media icons below your bio</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-2">
                  <Instagram className="h-5 w-5 text-pink-600" />
                  <span className="font-medium">Instagram</span>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-2">
                  <Twitter className="h-5 w-5 text-blue-400" />
                  <span className="font-medium">Twitter</span>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-2">
                  <Facebook className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">Facebook</span>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-2">
                  <Youtube className="h-5 w-5 text-red-600" />
                  <span className="font-medium">YouTube</span>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-gray-600" />
                  <span className="font-medium">Email</span>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-purple-600" />
                  <span className="font-medium">Website</span>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>
        </div>

        {/* Preview Section */}
        <div className="lg:sticky lg:top-8 space-y-6" style={{ maxHeight: 'calc(100vh - 4rem)' }}>
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Live Preview</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Visit
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="mx-auto max-w-sm">
              <div className="border-8 border-gray-900 rounded-[3rem] p-4 bg-white shadow-2xl">
                <div className="bg-gradient-to-br from-purple-600 to-blue-500 rounded-[2rem] p-8 min-h-[600px]">
                  {/* Profile */}
                  <div className="text-center mb-6">
                    <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-white">
                      <AvatarFallback className="bg-white text-purple-600 text-2xl">
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-2xl font-bold text-white mb-2">John Doe</h3>
                    <p className="text-white/90 mb-4">Designer & Developer 🎨💻</p>
                    
                    {/* Social Icons */}
                    <div className="flex justify-center gap-3">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                        <Instagram className="h-5 w-5 text-white" />
                      </div>
                      <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                        <Twitter className="h-5 w-5 text-white" />
                      </div>
                      <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                        <Youtube className="h-5 w-5 text-white" />
                      </div>
                      <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                        <Globe className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="space-y-3">
                    <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-purple-600" />
                        <span className="font-semibold">My Portfolio Website</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                      <div className="flex items-center gap-3">
                        <Youtube className="h-5 w-5 text-red-600" />
                        <span className="font-semibold">YouTube Channel</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                      <div className="flex items-center gap-3">
                        <Instagram className="h-5 w-5 text-pink-600" />
                        <span className="font-semibold">Follow me on Instagram</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="text-center mt-8">
                    <p className="text-white/70 text-sm">Powered by SnapLink</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Analytics Card */}
          <Card className="p-6">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Page Analytics
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Total Views</p>
                <p className="text-2xl font-bold">2,847</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Link Clicks</p>
                <p className="text-2xl font-bold">1,523</p>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-4" size="sm">
              View Detailed Analytics
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
