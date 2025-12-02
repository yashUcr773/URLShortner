import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Link2, QrCode, BarChart3, Settings, LogOut, User } from "lucide-react";

export function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg">
              <Link2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              SnapLink
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-purple-600 transition-colors">
              My Links
            </Link>
            <Link href="/analytics" className="text-gray-600 hover:text-purple-600 transition-colors">
              Analytics
            </Link>
            <Link href="/qr-generator" className="text-gray-600 hover:text-purple-600 transition-colors">
              QR Generator
            </Link>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              Sign In
            </Button>
            <Button size="sm" className="hidden md:flex bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
              Sign Up
            </Button>
            
            {/* User Avatar Dropdown (for authenticated state) */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar>
                    <AvatarFallback className="bg-gradient-to-br from-purple-600 to-blue-500 text-white">
                      JD
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-gray-500">john@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link2 className="mr-2 h-4 w-4" />
                  My Links
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Analytics
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <QrCode className="mr-2 h-4 w-4" />
                  QR Generator
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
