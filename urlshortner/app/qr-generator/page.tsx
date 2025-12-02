import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { QrCode, Download, Link2, FileText, Mail, Wifi, Phone } from "lucide-react";

export default function QRGeneratorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mb-4">
          <QrCode className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">QR Code Generator</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Create custom QR codes for URLs, text, WiFi, and more
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <Card className="p-6">
              <Tabs defaultValue="url" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="url" className="flex items-center gap-1">
                    <Link2 className="h-4 w-4" />
                    <span className="hidden sm:inline">URL</span>
                  </TabsTrigger>
                  <TabsTrigger value="text" className="flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    <span className="hidden sm:inline">Text</span>
                  </TabsTrigger>
                  <TabsTrigger value="wifi" className="flex items-center gap-1">
                    <Wifi className="h-4 w-4" />
                    <span className="hidden sm:inline">WiFi</span>
                  </TabsTrigger>
                  <TabsTrigger value="contact" className="flex items-center gap-1">
                    <Phone className="h-4 w-4" />
                    <span className="hidden sm:inline">vCard</span>
                  </TabsTrigger>
                </TabsList>

                {/* URL Tab */}
                <TabsContent value="url" className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="url">Enter URL</Label>
                    <Input 
                      id="url"
                      type="url"
                      placeholder="https://example.com"
                      className="h-12"
                    />
                  </div>
                </TabsContent>

                {/* Text Tab */}
                <TabsContent value="text" className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="text">Enter Text</Label>
                    <Textarea 
                      id="text"
                      placeholder="Enter any text you want to encode in the QR code..."
                      rows={6}
                    />
                    <p className="text-xs text-gray-500">Maximum 2,953 characters</p>
                  </div>
                </TabsContent>

                {/* WiFi Tab */}
                <TabsContent value="wifi" className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="ssid">Network Name (SSID)</Label>
                    <Input 
                      id="ssid"
                      placeholder="My WiFi Network"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="wifi-password">Password</Label>
                    <Input 
                      id="wifi-password"
                      type="password"
                      placeholder="Enter WiFi password"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="encryption">Encryption</Label>
                    <Select defaultValue="WPA">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="WPA">WPA/WPA2</SelectItem>
                        <SelectItem value="WEP">WEP</SelectItem>
                        <SelectItem value="nopass">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>

                {/* vCard Tab */}
                <TabsContent value="contact" className="space-y-4 mt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstname">First Name</Label>
                      <Input id="firstname" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastname">Last Name</Label>
                      <Input id="lastname" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="+1 234 567 8900" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Company Name" />
                  </div>
                </TabsContent>
              </Tabs>
            </Card>

            {/* Customization Options */}
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">Customize QR Code</h3>
              
              <div className="space-y-6">
                {/* Size */}
                <div className="space-y-2">
                  <Label>Size</Label>
                  <Select defaultValue="medium">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small (256x256)</SelectItem>
                      <SelectItem value="medium">Medium (512x512)</SelectItem>
                      <SelectItem value="large">Large (1024x1024)</SelectItem>
                      <SelectItem value="xlarge">Extra Large (2048x2048)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Error Correction */}
                <div className="space-y-2">
                  <Label>Error Correction</Label>
                  <Select defaultValue="M">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="L">Low (~7%)</SelectItem>
                      <SelectItem value="M">Medium (~15%)</SelectItem>
                      <SelectItem value="Q">Quartile (~25%)</SelectItem>
                      <SelectItem value="H">High (~30%)</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-gray-500">
                    Higher levels allow the QR code to be readable even if partially damaged
                  </p>
                </div>

                {/* Colors */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fg-color">Foreground Color</Label>
                    <div className="flex gap-2">
                      <Input 
                        id="fg-color"
                        type="color"
                        defaultValue="#000000"
                        className="w-16 h-10 p-1"
                      />
                      <Input 
                        type="text"
                        defaultValue="#000000"
                        className="flex-1"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bg-color">Background Color</Label>
                    <div className="flex gap-2">
                      <Input 
                        id="bg-color"
                        type="color"
                        defaultValue="#FFFFFF"
                        className="w-16 h-10 p-1"
                      />
                      <Input 
                        type="text"
                        defaultValue="#FFFFFF"
                        className="flex-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Premium Features */}
                <div className="space-y-3 pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Label>Add Logo/Icon</Label>
                      <Badge variant="secondary" className="bg-gradient-to-r from-purple-600 to-blue-500 text-white">
                        Pro
                      </Badge>
                    </div>
                    <Button variant="outline" size="sm" disabled>
                      Upload
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Label>Add Frame with Text</Label>
                      <Badge variant="secondary" className="bg-gradient-to-r from-purple-600 to-blue-500 text-white">
                        Pro
                      </Badge>
                    </div>
                    <Button variant="outline" size="sm" disabled>
                      Customize
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Preview Section */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-6 text-center">Preview</h3>
              
              {/* QR Code Preview */}
              <div className="flex justify-center mb-6">
                <div className="w-80 h-80 bg-white border-4 border-gray-200 rounded-2xl p-6 shadow-2xl">
                  {/* Mock QR Code */}
                  <div className="w-full h-full bg-gradient-to-br from-black via-gray-800 to-black relative"
                    style={{
                      backgroundImage: `
                        repeating-linear-gradient(0deg, transparent, transparent 12px, rgba(255,255,255,0.15) 12px, rgba(255,255,255,0.15) 13px),
                        repeating-linear-gradient(90deg, transparent, transparent 12px, rgba(255,255,255,0.15) 12px, rgba(255,255,255,0.15) 13px)
                      `
                    }}
                  >
                    {/* Corner markers */}
                    <div className="absolute top-2 left-2 w-16 h-16 border-4 border-white">
                      <div className="w-8 h-8 bg-white m-1"></div>
                    </div>
                    <div className="absolute top-2 right-2 w-16 h-16 border-4 border-white">
                      <div className="w-8 h-8 bg-white m-1"></div>
                    </div>
                    <div className="absolute bottom-2 left-2 w-16 h-16 border-4 border-white">
                      <div className="w-8 h-8 bg-white m-1"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Generate Button */}
              <Button className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-lg">
                <QrCode className="mr-2 h-5 w-5" />
                Generate QR Code
              </Button>
            </Card>

            {/* Download Options */}
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">Download Format</h3>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-12">
                  <Download className="mr-2 h-4 w-4" />
                  PNG
                </Button>
                <Button variant="outline" className="h-12">
                  <Download className="mr-2 h-4 w-4" />
                  SVG
                </Button>
                <Button variant="outline" className="h-12">
                  <Download className="mr-2 h-4 w-4" />
                  PDF
                </Button>
                <Button variant="outline" className="h-12">
                  <Download className="mr-2 h-4 w-4" />
                  EPS
                </Button>
              </div>
            </Card>

            {/* Info Card */}
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-2xl">💡</span>
                Pro Tip
              </h4>
              <p className="text-sm text-gray-700">
                For best results, use high error correction when adding logos or if the QR code 
                will be printed on curved surfaces or in small sizes.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Link2 className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-bold mb-2">Website Links</h3>
            <p className="text-sm text-gray-600">
              Share website URLs on print materials, business cards, or posters
            </p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Wifi className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-bold mb-2">WiFi Access</h3>
            <p className="text-sm text-gray-600">
              Let guests connect to your WiFi network instantly by scanning
            </p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-bold mb-2">Contact Info</h3>
            <p className="text-sm text-gray-600">
              Share your contact details that can be saved directly to phones
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
