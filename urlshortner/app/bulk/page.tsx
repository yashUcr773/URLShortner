import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Download, FileSpreadsheet, Link2, CheckCircle2, XCircle, AlertCircle, FileText } from "lucide-react";

export default function BulkPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Bulk Operations</h1>
        <p className="text-gray-600">Import, export, and manage multiple URLs at once</p>
      </div>

      <Tabs defaultValue="import" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="import">Import URLs</TabsTrigger>
          <TabsTrigger value="export">Export URLs</TabsTrigger>
        </TabsList>

        {/* Import Tab */}
        <TabsContent value="import">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Input Section */}
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Import Multiple URLs</h2>
                
                <div className="space-y-6">
                  {/* Manual Entry */}
                  <div className="space-y-2">
                    <Label htmlFor="urls">Enter URLs (one per line)</Label>
                    <Textarea 
                      id="urls"
                      placeholder="https://example.com/page1&#10;https://example.com/page2&#10;https://example.com/page3"
                      rows={10}
                      className="font-mono text-sm"
                    />
                    <p className="text-xs text-gray-500">Up to 1,000 URLs at once</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex-1 border-t border-gray-300"></div>
                    <span className="text-sm text-gray-500">OR</span>
                    <div className="flex-1 border-t border-gray-300"></div>
                  </div>

                  {/* File Upload */}
                  <div className="space-y-4">
                    <Label>Upload File</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 transition-colors cursor-pointer">
                      <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                      <p className="font-medium mb-2">Drop files here or click to upload</p>
                      <p className="text-sm text-gray-500 mb-4">Supports CSV, TXT, XLS, XLSX</p>
                      <Button variant="outline" size="sm">
                        <FileSpreadsheet className="h-4 w-4 mr-2" />
                        Browse Files
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="link" size="sm" className="text-purple-600">
                        <Download className="h-4 w-4 mr-1" />
                        Download CSV Template
                      </Button>
                      <Button variant="link" size="sm" className="text-purple-600">
                        <FileText className="h-4 w-4 mr-1" />
                        View Format Guide
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Options Card */}
              <Card className="p-6">
                <h3 className="font-bold mb-4">Import Options</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Custom Domain</Label>
                    <Select defaultValue="default">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">snaplink.io</SelectItem>
                        <SelectItem value="custom">short.yourbrand.com</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Alias Generation</Label>
                    <Select defaultValue="random">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="random">Random (recommended)</SelectItem>
                        <SelectItem value="sequential">Sequential (001, 002, ...)</SelectItem>
                        <SelectItem value="custom">Custom prefix</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Default Expiration</Label>
                    <Select defaultValue="never">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="never">Never</SelectItem>
                        <SelectItem value="7">7 Days</SelectItem>
                        <SelectItem value="30">30 Days</SelectItem>
                        <SelectItem value="90">90 Days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Folder</Label>
                    <Select defaultValue="none">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No Folder</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="social">Social Media</SelectItem>
                        <SelectItem value="campaigns">Campaigns</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <Label>Enable Analytics</Label>
                    <input type="checkbox" className="h-4 w-4" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label>Generate QR Codes</Label>
                    <input type="checkbox" className="h-4 w-4" />
                  </div>
                </div>
              </Card>
            </div>

            {/* Preview Section */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Preview</h2>
                  <Badge variant="outline">0 URLs detected</Badge>
                </div>

                {/* Empty State */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                  <Link2 className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                  <p className="text-gray-500 mb-2">No URLs to preview yet</p>
                  <p className="text-sm text-gray-400">
                    Enter URLs or upload a file to see a preview
                  </p>
                </div>

                {/* Processing Button */}
                <Button 
                  className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                  disabled
                >
                  Process URLs
                </Button>
              </Card>

              {/* Results Card (shown after processing) */}
              <Card className="p-6 bg-green-50 border-green-200">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Import Results
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Total URLs</span>
                    <span className="font-semibold">150</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-700">✓ Successfully created</span>
                    <span className="font-semibold text-green-700">147</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-red-700">✗ Failed</span>
                    <span className="font-semibold text-red-700">3</span>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="space-y-2">
                  <Button variant="outline" className="w-full" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download Results
                  </Button>
                  <Button variant="outline" className="w-full" size="sm">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    View Error Details
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Export Tab */}
        <TabsContent value="export">
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6">Export Your Links</h2>
              
              <div className="space-y-6">
                {/* Export Options */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Select Links to Export</Label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Links (48 links)</SelectItem>
                        <SelectItem value="folder">By Folder</SelectItem>
                        <SelectItem value="date">By Date Range</SelectItem>
                        <SelectItem value="selected">Selected Links Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Export Format</Label>
                    <div className="grid grid-cols-2 gap-3">
                      <Card className="p-4 cursor-pointer hover:border-purple-500 transition-colors border-2 border-purple-500 bg-purple-50">
                        <FileSpreadsheet className="h-8 w-8 mb-2 text-purple-600" />
                        <p className="font-semibold">CSV</p>
                        <p className="text-xs text-gray-600">Excel compatible</p>
                      </Card>
                      <Card className="p-4 cursor-pointer hover:border-purple-500 transition-colors">
                        <FileText className="h-8 w-8 mb-2 text-gray-600" />
                        <p className="font-semibold">JSON</p>
                        <p className="text-xs text-gray-600">Developer friendly</p>
                      </Card>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Include Analytics Data</Label>
                    <Select defaultValue="summary">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No Analytics</SelectItem>
                        <SelectItem value="summary">Summary Only</SelectItem>
                        <SelectItem value="detailed">Detailed Analytics</SelectItem>
                        <SelectItem value="full">Full Report (All Data)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                {/* Export Preview */}
                <div className="space-y-2">
                  <Label>Export Preview</Label>
                  <div className="bg-gray-50 border rounded-lg p-4 font-mono text-xs">
                    <div className="grid grid-cols-4 gap-4 font-semibold mb-2">
                      <div>Short URL</div>
                      <div>Original URL</div>
                      <div>Clicks</div>
                      <div>Created</div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-gray-600">
                      <div>snaplink.io/abc123</div>
                      <div>example.com/...</div>
                      <div>1,234</div>
                      <div>2025-11-28</div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-gray-600 mt-1">
                      <div>snaplink.io/xyz789</div>
                      <div>blog.example...</div>
                      <div>432</div>
                      <div>2025-11-20</div>
                    </div>
                    <p className="text-center text-gray-400 mt-2">... 46 more rows</p>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                  size="lg"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Export 48 Links
                </Button>
              </div>
            </Card>

            {/* Quick Export Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <h3 className="font-semibold mb-2">Last 7 Days</h3>
                <p className="text-sm text-gray-600 mb-3">12 links created</p>
                <Button variant="outline" size="sm" className="w-full">
                  Quick Export
                </Button>
              </Card>
              <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <h3 className="font-semibold mb-2">Top Performers</h3>
                <p className="text-sm text-gray-600 mb-3">Links with 1000+ clicks</p>
                <Button variant="outline" size="sm" className="w-full">
                  Quick Export
                </Button>
              </Card>
              <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <h3 className="font-semibold mb-2">Expiring Soon</h3>
                <p className="text-sm text-gray-600 mb-3">3 links expiring</p>
                <Button variant="outline" size="sm" className="w-full">
                  Quick Export
                </Button>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
