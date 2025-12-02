import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe, Plus, Check, X, AlertCircle, ExternalLink, Settings, Crown, Sparkles, TrendingUp, Shield } from "lucide-react";

export default function BrandedLinksPage() {
  const domains = [
    {
      id: 1,
      domain: "brand.co",
      status: "active",
      verified: true,
      ssl: true,
      linksCount: 234,
      clicks: 45678,
      addedDate: "Nov 15, 2025",
      isPrimary: true,
    },
    {
      id: 2,
      domain: "go.mycompany.com",
      status: "active",
      verified: true,
      ssl: true,
      linksCount: 89,
      clicks: 12340,
      addedDate: "Oct 28, 2025",
      isPrimary: false,
    },
    {
      id: 3,
      domain: "links.startup.io",
      status: "pending",
      verified: false,
      ssl: false,
      linksCount: 0,
      clicks: 0,
      addedDate: "Dec 01, 2025",
      isPrimary: false,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <h1 className="text-4xl font-bold">Branded Links</h1>
          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
            <Crown className="h-3 w-3 mr-1" />
            PRO
          </Badge>
        </div>
        <p className="text-gray-600">
          Use your own custom domains to create branded short links that build trust and recognition
        </p>
      </div>

      {/* Benefits Banner */}
      <Card className="mb-8 p-6 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 border-2 border-purple-200">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-white rounded-lg shadow-sm">
            <Sparkles className="h-6 w-6 text-purple-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">Why Use Branded Links?</h3>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="flex items-start gap-2">
                <Shield className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Build Trust</p>
                  <p className="text-xs text-gray-600">Branded links increase click-through rates by up to 39%</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Brand Recognition</p>
                  <p className="text-xs text-gray-600">Every link reinforces your brand identity</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Globe className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Professional</p>
                  <p className="text-xs text-gray-600">Look more professional in all your marketing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Add New Domain Section */}
      <Card className="mb-8 p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Add Custom Domain
        </h3>
        
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="domain-name">Domain Name</Label>
              <Input 
                id="domain-name"
                placeholder="go.yourdomain.com" 
                className="font-mono"
              />
              <p className="text-xs text-gray-500">
                Enter your custom domain or subdomain
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="domain-type">Domain Type</Label>
              <Select defaultValue="subdomain">
                <SelectTrigger id="domain-type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="subdomain">Subdomain (Recommended)</SelectItem>
                  <SelectItem value="root">Root Domain</SelectItem>
                  <SelectItem value="custom">Custom Path</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium text-sm text-blue-900">DNS Configuration Required</p>
                <p className="text-xs text-blue-700 mt-1">
                  After adding your domain, you&apos;ll need to configure DNS records to verify ownership
                </p>
              </div>
            </div>
          </div>

          <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
            <Plus className="h-4 w-4 mr-2" />
            Add Domain
          </Button>
        </div>
      </Card>

      {/* Active Domains Table */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Your Custom Domains</h3>
          <Badge variant="outline" className="text-sm">
            {domains.length} {domains.length === 1 ? 'Domain' : 'Domains'}
          </Badge>
        </div>

        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Domain</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Verification</TableHead>
                <TableHead>SSL</TableHead>
                <TableHead className="text-center">Links</TableHead>
                <TableHead className="text-center">Total Clicks</TableHead>
                <TableHead>Added</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {domains.map((domain) => (
                <TableRow key={domain.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-gray-400" />
                      <span className="font-mono font-medium">{domain.domain}</span>
                      {domain.isPrimary && (
                        <Badge className="bg-purple-100 text-purple-700 text-xs">Primary</Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        domain.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }
                    >
                      {domain.status === "active" ? (
                        <>
                          <Check className="h-3 w-3 mr-1" />
                          Active
                        </>
                      ) : (
                        <>
                          <AlertCircle className="h-3 w-3 mr-1" />
                          Pending
                        </>
                      )}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {domain.verified ? (
                      <div className="flex items-center gap-1 text-green-600">
                        <Check className="h-4 w-4" />
                        <span className="text-sm">Verified</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 text-gray-400">
                        <X className="h-4 w-4" />
                        <span className="text-sm">Unverified</span>
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    {domain.ssl ? (
                      <div className="flex items-center gap-1 text-green-600">
                        <Shield className="h-4 w-4" />
                        <span className="text-sm">Enabled</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 text-gray-400">
                        <Shield className="h-4 w-4" />
                        <span className="text-sm">Disabled</span>
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="text-center font-semibold">
                    {domain.linksCount.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-center font-semibold text-blue-600">
                    {domain.clicks.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-sm text-gray-500">
                    {domain.addedDate}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      {!domain.verified && (
                        <Button variant="outline" size="sm">
                          Verify
                        </Button>
                      )}
                      <Button variant="ghost" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* DNS Configuration Guide */}
      <Card className="mt-8 p-6 bg-gray-50">
        <h3 className="text-xl font-semibold mb-4">DNS Configuration Guide</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-600 text-sm">1</span>
              Add CNAME Record
            </h4>
            <div className="ml-8 p-4 bg-white rounded-lg border font-mono text-sm">
              <div className="grid grid-cols-3 gap-4 mb-2 font-semibold text-gray-700">
                <div>Type</div>
                <div>Name</div>
                <div>Value</div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-gray-600">
                <div>CNAME</div>
                <div>go</div>
                <div>cname.snaplink.io</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-600 text-sm">2</span>
              Verify Domain Ownership
            </h4>
            <p className="ml-8 text-sm text-gray-600 mb-2">
              Add a TXT record to verify you own this domain:
            </p>
            <div className="ml-8 p-4 bg-white rounded-lg border font-mono text-sm">
              <div className="grid grid-cols-3 gap-4 mb-2 font-semibold text-gray-700">
                <div>Type</div>
                <div>Name</div>
                <div>Value</div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-gray-600">
                <div>TXT</div>
                <div>_snaplink-verify</div>
                <div>snaplink-verification=abc123xyz789</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-600 text-sm">3</span>
              Wait for DNS Propagation
            </h4>
            <p className="ml-8 text-sm text-gray-600">
              DNS changes can take up to 48 hours to propagate, but usually complete within a few hours.
            </p>
          </div>
        </div>
      </Card>

      {/* Domain Settings */}
      <Card className="mt-8 p-6">
        <h3 className="text-xl font-semibold mb-4">Default Domain Settings</h3>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="default-domain">Default Domain for New Links</Label>
            <Select defaultValue="brand.co">
              <SelectTrigger id="default-domain">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="snaplink.io">snaplink.io (Default)</SelectItem>
                <SelectItem value="brand.co">brand.co</SelectItem>
                <SelectItem value="go.mycompany.com">go.mycompany.com</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-gray-500">
              This domain will be pre-selected when creating new short links
            </p>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="space-y-0.5">
              <Label>Auto-redirect to HTTPS</Label>
              <p className="text-sm text-gray-500">
                Automatically redirect HTTP traffic to HTTPS for security
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="space-y-0.5">
              <Label>WWW Redirect</Label>
              <p className="text-sm text-gray-500">
                Redirect www subdomain to non-www version
              </p>
            </div>
            <Switch />
          </div>

          <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
            Save Settings
          </Button>
        </div>
      </Card>
    </div>
  );
}
