import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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
import { 
  Users, 
  Plus, 
  Mail, 
  MoreVertical, 
  Shield, 
  Eye, 
  Edit, 
  Trash2, 
  UserPlus,
  Search,
  Settings,
  Crown,
  Link2,
  BarChart3
} from "lucide-react";

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Team Workspace</h1>
          <p className="text-gray-600">Collaborate with your team on link management</p>
        </div>
        <Button className="mt-4 md:mt-0 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
          <UserPlus className="h-4 w-4 mr-2" />
          Invite Member
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Team Members</p>
              <p className="text-3xl font-bold">8</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Team Links</p>
              <p className="text-3xl font-bold">342</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Link2 className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total Clicks</p>
              <p className="text-3xl font-bold">45.2K</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <BarChart3 className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Active Projects</p>
              <p className="text-3xl font-bold">12</p>
            </div>
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
              <Settings className="h-6 w-6 text-amber-600" />
            </div>
          </div>
        </Card>
      </div>

      {/* Team Members Section */}
      <Card className="mb-8">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Team Members</h2>
            <div className="flex gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search members..." 
                  className="pl-10 w-64"
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[150px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Members</SelectItem>
                  <SelectItem value="admin">Admins</SelectItem>
                  <SelectItem value="editor">Editors</SelectItem>
                  <SelectItem value="viewer">Viewers</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Member</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Links Created</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Member 1 - Owner */}
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-gradient-to-br from-purple-600 to-blue-500 text-white">
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold flex items-center gap-2">
                        John Doe
                        <Crown className="h-4 w-4 text-amber-500" />
                      </p>
                      <p className="text-sm text-gray-500">john@example.com</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className="bg-gradient-to-r from-purple-600 to-blue-500 text-white">
                    Owner
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className="font-semibold">89</span>
                </TableCell>
                <TableCell>
                  <span className="text-gray-600">Just now</span>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="border-green-500 text-green-700">
                    Active
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>

              {/* Member 2 - Admin */}
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-blue-500 text-white">
                        SM
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Sarah Miller</p>
                      <p className="text-sm text-gray-500">sarah@example.com</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="border-purple-500 text-purple-700">
                    Admin
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className="font-semibold">67</span>
                </TableCell>
                <TableCell>
                  <span className="text-gray-600">5 min ago</span>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="border-green-500 text-green-700">
                    Active
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>

              {/* Member 3 - Editor */}
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-green-500 text-white">
                        MJ
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Mike Johnson</p>
                      <p className="text-sm text-gray-500">mike@example.com</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="border-blue-500 text-blue-700">
                    Editor
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className="font-semibold">52</span>
                </TableCell>
                <TableCell>
                  <span className="text-gray-600">2 hours ago</span>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="border-green-500 text-green-700">
                    Active
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>

              {/* Member 4 - Editor */}
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-pink-500 text-white">
                        EW
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Emma Wilson</p>
                      <p className="text-sm text-gray-500">emma@example.com</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="border-blue-500 text-blue-700">
                    Editor
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className="font-semibold">43</span>
                </TableCell>
                <TableCell>
                  <span className="text-gray-600">1 day ago</span>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="border-green-500 text-green-700">
                    Active
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>

              {/* Member 5 - Viewer */}
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-amber-500 text-white">
                        AB
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Alex Brown</p>
                      <p className="text-sm text-gray-500">alex@example.com</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="border-gray-500 text-gray-700">
                    Viewer
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className="font-semibold">—</span>
                </TableCell>
                <TableCell>
                  <span className="text-gray-600">3 days ago</span>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="border-gray-400 text-gray-600">
                    Inactive
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Pending Invitations */}
      <Card className="mb-8">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Pending Invitations</h2>
          <div className="space-y-3">
            <Card className="p-4 bg-blue-50 border-blue-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-semibold">lisa@example.com</p>
                    <p className="text-sm text-gray-600">Invited 2 days ago • Editor role</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Resend
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600">
                    Cancel
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-blue-50 border-blue-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-semibold">david@example.com</p>
                    <p className="text-sm text-gray-600">Invited 5 days ago • Viewer role</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Resend
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600">
                    Cancel
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Card>

      {/* Roles & Permissions */}
      <Card>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Roles & Permissions</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Owner */}
            <Card className="p-4 border-2 border-purple-500 bg-purple-50">
              <div className="flex items-center gap-2 mb-3">
                <Crown className="h-5 w-5 text-purple-600" />
                <h3 className="font-bold">Owner</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">Full access and control</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  All permissions
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  Manage billing
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  Delete workspace
                </li>
              </ul>
            </Card>

            {/* Admin */}
            <Card className="p-4 border-2 border-blue-500 bg-blue-50">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="h-5 w-5 text-blue-600" />
                <h3 className="font-bold">Admin</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">Manage team & links</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  Invite members
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  Manage all links
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  View analytics
                </li>
              </ul>
            </Card>

            {/* Editor */}
            <Card className="p-4 border-2 border-green-500 bg-green-50">
              <div className="flex items-center gap-2 mb-3">
                <Edit className="h-5 w-5 text-green-600" />
                <h3 className="font-bold">Editor</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">Create & edit links</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  Create links
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  Edit own links
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  View analytics
                </li>
              </ul>
            </Card>

            {/* Viewer */}
            <Card className="p-4 border-2 border-gray-500 bg-gray-50">
              <div className="flex items-center gap-2 mb-3">
                <Eye className="h-5 w-5 text-gray-600" />
                <h3 className="font-bold">Viewer</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">View only access</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  View links
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  View analytics
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-gray-400" />
                  No edit access
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
}
