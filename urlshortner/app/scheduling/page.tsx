import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
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
import { Calendar, Clock, Play, Pause, Edit, Trash2, Plus, AlertCircle, CheckCircle, Timer, CalendarClock } from "lucide-react";

export default function SchedulingPage() {
  const scheduledLinks = [
    {
      id: 1,
      shortUrl: "snaplink.io/black-friday",
      originalUrl: "https://shop.example.com/black-friday-deals",
      activateAt: "Nov 29, 2025 00:00",
      deactivateAt: "Nov 30, 2025 23:59",
      status: "scheduled",
      redirectAfter: "https://shop.example.com",
      created: "Nov 15, 2025",
    },
    {
      id: 2,
      shortUrl: "snaplink.io/webinar-jan",
      originalUrl: "https://zoom.us/meeting/12345",
      activateAt: "Jan 15, 2026 14:00",
      deactivateAt: "Jan 15, 2026 16:00",
      status: "scheduled",
      redirectAfter: "https://example.com/webinar-replay",
      created: "Nov 28, 2025",
    },
    {
      id: 3,
      shortUrl: "snaplink.io/holiday-promo",
      originalUrl: "https://store.example.com/holiday-sale",
      activateAt: "Dec 01, 2025 00:00",
      deactivateAt: "Dec 25, 2025 23:59",
      status: "active",
      redirectAfter: "https://store.example.com",
      created: "Nov 20, 2025",
    },
    {
      id: 4,
      shortUrl: "snaplink.io/summer-event",
      originalUrl: "https://events.example.com/summer2025",
      activateAt: "Jun 01, 2025 00:00",
      deactivateAt: "Aug 31, 2025 23:59",
      status: "expired",
      redirectAfter: "https://events.example.com",
      created: "May 15, 2025",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Link Scheduling</h1>
        <p className="text-gray-600">
          Automatically activate and deactivate links at specific times for time-sensitive campaigns
        </p>
      </div>

      {/* Info Banner */}
      <Card className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-white rounded-lg shadow-sm">
            <CalendarClock className="h-6 w-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">Perfect for Time-Based Campaigns</h3>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="flex items-start gap-2">
                <Timer className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Flash Sales</p>
                  <p className="text-xs text-gray-600">Schedule limited-time offers</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Calendar className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Events</p>
                  <p className="text-xs text-gray-600">Auto-activate before events start</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Webinars</p>
                  <p className="text-xs text-gray-600">Redirect after session ends</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Create New Scheduled Link */}
      <Card className="mb-8 p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Create Scheduled Link
        </h3>
        
        <div className="space-y-6">
          {/* Basic Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="short-url">Short URL</Label>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 text-sm">snaplink.io/</span>
                <Input 
                  id="short-url"
                  placeholder="your-campaign" 
                  className="flex-1"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="destination">Destination URL</Label>
              <Input 
                id="destination"
                type="url"
                placeholder="https://example.com/landing-page" 
              />
            </div>
          </div>

          {/* Activation Schedule */}
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h4 className="font-semibold mb-4 flex items-center gap-2 text-green-900">
              <Play className="h-4 w-4" />
              Activation Schedule
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="activate-date">Activation Date</Label>
                <Input 
                  id="activate-date"
                  type="date"
                  className="bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="activate-time">Activation Time</Label>
                <Input 
                  id="activate-time"
                  type="time"
                  className="bg-white"
                />
              </div>
            </div>
          </div>

          {/* Deactivation Schedule */}
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <h4 className="font-semibold mb-4 flex items-center gap-2 text-red-900">
              <Pause className="h-4 w-4" />
              Deactivation Schedule
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="deactivate-date">Deactivation Date</Label>
                <Input 
                  id="deactivate-date"
                  type="date"
                  className="bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deactivate-time">Deactivation Time</Label>
                <Input 
                  id="deactivate-time"
                  type="time"
                  className="bg-white"
                />
              </div>
            </div>
          </div>

          {/* Post-Expiration Behavior */}
          <div className="space-y-4">
            <Label>After Deactivation</Label>
            <Select defaultValue="redirect">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="redirect">Redirect to Another URL</SelectItem>
                <SelectItem value="404">Show 404 Page</SelectItem>
                <SelectItem value="message">Show Custom Message</SelectItem>
                <SelectItem value="disable">Disable Link Completely</SelectItem>
              </SelectContent>
            </Select>

            <div className="space-y-2">
              <Label htmlFor="redirect-url">Redirect URL (Optional)</Label>
              <Input 
                id="redirect-url"
                type="url"
                placeholder="https://example.com/expired-offer" 
              />
              <p className="text-xs text-gray-500">
                Where users will be redirected after the link expires
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="custom-message">Custom Message (Optional)</Label>
              <Textarea 
                id="custom-message"
                placeholder="This promotion has ended. Check back next year!"
                rows={3}
              />
            </div>
          </div>

          {/* Timezone */}
          <div className="space-y-2">
            <Label htmlFor="timezone">Timezone</Label>
            <Select defaultValue="utc">
              <SelectTrigger id="timezone">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="utc">UTC (Coordinated Universal Time)</SelectItem>
                <SelectItem value="est">EST (Eastern Standard Time)</SelectItem>
                <SelectItem value="pst">PST (Pacific Standard Time)</SelectItem>
                <SelectItem value="cst">CST (Central Standard Time)</SelectItem>
                <SelectItem value="gmt">GMT (Greenwich Mean Time)</SelectItem>
                <SelectItem value="local">Local Timezone</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Notification Settings */}
          <div className="p-4 bg-gray-50 rounded-lg space-y-3">
            <Label className="font-semibold">Email Notifications</Label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded" defaultChecked />
                <span>Notify me when link activates</span>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded" defaultChecked />
                <span>Notify me when link deactivates</span>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded" />
                <span>Send reminder 1 hour before activation</span>
              </label>
            </div>
          </div>

          <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
            <Calendar className="h-4 w-4 mr-2" />
            Create Scheduled Link
          </Button>
        </div>
      </Card>

      {/* Scheduled Links Table */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Scheduled Links</h3>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              {scheduledLinks.filter(l => l.status === 'scheduled').length} Scheduled
            </Badge>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              {scheduledLinks.filter(l => l.status === 'active').length} Active
            </Badge>
          </div>
        </div>

        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Short URL</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>Activate At</TableHead>
                <TableHead>Deactivate At</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scheduledLinks.map((link) => (
                <TableRow key={link.id}>
                  <TableCell>
                    <span className="font-medium text-purple-600 font-mono text-sm">
                      {link.shortUrl}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="max-w-xs truncate text-sm text-gray-600">
                      {link.originalUrl}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-green-600" />
                      <span>{link.activateAt}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-red-600" />
                      <span>{link.deactivateAt}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        link.status === "active"
                          ? "bg-green-100 text-green-700"
                          : link.status === "scheduled"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-700"
                      }
                    >
                      {link.status === "active" && (
                        <>
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Active
                        </>
                      )}
                      {link.status === "scheduled" && (
                        <>
                          <Clock className="h-3 w-3 mr-1" />
                          Scheduled
                        </>
                      )}
                      {link.status === "expired" && (
                        <>
                          <AlertCircle className="h-3 w-3 mr-1" />
                          Expired
                        </>
                      )}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Tips Section */}
      <Card className="mt-8 p-6 bg-gray-50">
        <h3 className="text-xl font-semibold mb-4">💡 Pro Tips for Scheduled Links</h3>
        
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            <p><strong>Test Before Launch:</strong> Create scheduled links a few days in advance to ensure everything is configured correctly</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            <p><strong>Consider Timezones:</strong> Always double-check the timezone settings, especially for global campaigns</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            <p><strong>Post-Expiration Strategy:</strong> Always provide a redirect URL after expiration to maintain good user experience</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            <p><strong>Monitor Performance:</strong> Check analytics during active periods to optimize future campaigns</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
