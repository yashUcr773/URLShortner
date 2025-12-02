import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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
import { Search, Plus, Copy, BarChart3, Edit, Trash2, Eye, Lock, Calendar, ExternalLink, Folder, FolderPlus, ChevronRight, MoreVertical, Star } from "lucide-react";

export default function DashboardPage() {
  const folders = [
    { id: 'all', name: 'All Links', count: 48, icon: '📁' },
    { id: 'marketing', name: 'Marketing Campaigns', count: 12, icon: '📢' },
    { id: 'social', name: 'Social Media', count: 8, icon: '👥' },
    { id: 'products', name: 'Product Links', count: 15, icon: '🛍️' },
    { id: 'blog', name: 'Blog Posts', count: 7, icon: '✍️' },
    { id: 'favorites', name: 'Favorites', count: 6, icon: '⭐', special: true },
  ];

  const links = [
    {
      id: 1,
      shortUrl: "snaplink.io/abc123",
      originalUrl: "https://example.com/article/how-to-create-amazing-content",
      clicks: 1234,
      created: "Nov 28, 2025",
      expires: "Never",
      hasPassword: false,
      status: "active",
      folder: "blog",
      isFavorite: true
    },
    {
      id: 2,
      shortUrl: "snaplink.io/holiday-sale",
      originalUrl: "https://shop.example.com/sale",
      clicks: 5678,
      created: "Nov 25, 2025",
      expires: "Dec 31, 2025",
      hasPassword: true,
      status: "active",
      folder: "marketing",
      isFavorite: false
    },
    {
      id: 3,
      shortUrl: "snaplink.io/xyz789",
      originalUrl: "https://blog.example.com/post/12345",
      clicks: 432,
      created: "Nov 20, 2025",
      expires: "Dec 20, 2025",
      hasPassword: false,
      status: "active",
      folder: "blog",
      isFavorite: false
    },
    {
      id: 4,
      shortUrl: "snaplink.io/promo2025",
      originalUrl: "https://landing.example.com/special-offer",
      clicks: 891,
      created: "Nov 15, 2025",
      expires: "Dec 15, 2025",
      hasPassword: false,
      status: "expiring-soon",
      folder: "marketing",
      isFavorite: true
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">My Links</h1>
          <p className="text-gray-600">Manage and track all your shortened URLs</p>
        </div>
        <Link href="/">
          <Button className="mt-4 md:mt-0 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
            <Plus className="h-4 w-4 mr-2" />
            New Link
          </Button>
        </Link>
      </div>

      {/* Main Content Area with Sidebar */}
      <div className="flex gap-6">
        {/* Sidebar - Folders */}
        <div className="w-64 flex-shrink-0">
          <Card className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-sm text-gray-700">FOLDERS</h3>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <FolderPlus className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-1">
              {folders.map((folder) => (
                <button
                  key={folder.id}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                    folder.id === 'all' 
                      ? 'bg-purple-50 text-purple-700 font-medium' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base">{folder.icon}</span>
                    <span>{folder.name}</span>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    folder.id === 'all' 
                      ? 'bg-purple-100 text-purple-700' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {folder.count}
                  </span>
                </button>
              ))}
            </div>
            
            <div className="mt-6 pt-4 border-t">
              <h3 className="font-semibold text-sm text-gray-700 mb-3">QUICK FILTERS</h3>
              <div className="space-y-1">
                <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                  <Star className="h-4 w-4" />
                  <span>Favorites</span>
                </button>
                <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                  <Lock className="h-4 w-4" />
                  <span>Password Protected</span>
                </button>
                <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                  <Calendar className="h-4 w-4" />
                  <span>Expiring Soon</span>
                </button>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <div className="flex-1">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total Links</p>
              <p className="text-3xl font-bold">48</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <ExternalLink className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <p className="text-sm text-green-600 mt-2">↑ 12% from last month</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total Clicks</p>
              <p className="text-3xl font-bold">8.2K</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Eye className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <p className="text-sm text-green-600 mt-2">↑ 23% from last month</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">This Month</p>
              <p className="text-3xl font-bold">2.1K</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <BarChart3 className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <p className="text-sm text-green-600 mt-2">↑ 18% from last month</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Active Links</p>
              <p className="text-3xl font-bold">45</p>
            </div>
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
              <Calendar className="h-6 w-6 text-amber-600" />
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">3 expiring soon</p>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search links..." 
              className="pl-10"
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Links</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="expired">Expired</SelectItem>
              <SelectItem value="password">Password Protected</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="recent">
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="clicks">Most Clicks</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Links Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12"></TableHead>
              <TableHead>Short URL</TableHead>
              <TableHead>Original URL</TableHead>
              <TableHead className="text-center">Clicks</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Expires</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {links.map((link) => (
              <TableRow key={link.id}>
                <TableCell>
                  <button className="hover:text-yellow-500 transition-colors">
                    <Star className={`h-4 w-4 ${link.isFavorite ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                  </button>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-purple-600">
                      {link.shortUrl}
                    </span>
                    {link.hasPassword && (
                      <Lock className="h-3 w-3 text-gray-400" />
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="max-w-md truncate text-gray-600">
                    {link.originalUrl}
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Eye className="h-4 w-4 text-gray-400" />
                    <span className="font-semibold">{link.clicks.toLocaleString()}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-gray-600">{link.created}</span>
                </TableCell>
                <TableCell>
                  {link.status === "expiring-soon" ? (
                    <Badge variant="outline" className="border-amber-500 text-amber-700 bg-amber-50">
                      {link.expires}
                    </Badge>
                  ) : (
                    <span className="text-gray-600">{link.expires}</span>
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex items-center justify-end gap-1">
                    <Button variant="ghost" size="sm">
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <BarChart3 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <p className="text-sm text-gray-600">
          Showing 1-4 of 48 links
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" className="bg-purple-600 text-white">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}
