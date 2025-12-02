import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { 
  Split, 
  Play, 
  Pause, 
  BarChart3, 
  TrendingUp, 
  Target,
  Users,
  Eye,
  MousePointerClick,
  Calendar,
  Plus,
  Settings,
  Trophy,
  AlertCircle
} from "lucide-react";

export default function ABTestPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">A/B Testing</h1>
          <p className="text-gray-600">Split test your links to optimize performance</p>
        </div>
        <Button className="mt-4 md:mt-0 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
          <Plus className="h-4 w-4 mr-2" />
          Create A/B Test
        </Button>
      </div>

      {/* Active Tests */}
      <div className="space-y-6 mb-8">
        <h2 className="text-2xl font-bold">Active Tests</h2>

        {/* Test 1 - Running */}
        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <Split className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold">Holiday Sale Landing Pages</h3>
                  <Badge className="bg-green-100 text-green-700 border-green-300">
                    <Play className="h-3 w-3 mr-1" />
                    Running
                  </Badge>
                </div>
                <p className="text-gray-600 mb-2">Testing two different landing page designs</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Started: Nov 25, 2025
                  </span>
                  <span>•</span>
                  <span>5 days running</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Pause className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Separator className="my-4" />

          {/* Test Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Total Visitors</p>
              <p className="text-2xl font-bold">2,456</p>
              <p className="text-xs text-green-600 mt-1">↑ 23% vs target</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Conversion Rate</p>
              <p className="text-2xl font-bold">12.8%</p>
              <p className="text-xs text-green-600 mt-1">↑ 2.3% improvement</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Confidence</p>
              <p className="text-2xl font-bold">89%</p>
              <p className="text-xs text-amber-600 mt-1">Need 95% to declare</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Est. Remaining</p>
              <p className="text-2xl font-bold">3 days</p>
              <p className="text-xs text-gray-600 mt-1">To reach 95% confidence</p>
            </div>
          </div>

          {/* Variants Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Variant A */}
            <Card className="p-4 border-2 border-purple-200 bg-purple-50">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Badge className="bg-purple-600 text-white">A</Badge>
                  <h4 className="font-bold">Original Design</h4>
                </div>
                <Badge variant="outline">Control</Badge>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Traffic Split</span>
                    <span className="font-semibold">50%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div>
                    <p className="text-xs text-gray-600">Visitors</p>
                    <p className="text-lg font-bold">1,228</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Conversions</p>
                    <p className="text-lg font-bold">147</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Conv. Rate</p>
                    <p className="text-lg font-bold">12.0%</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Avg. Time</p>
                    <p className="text-lg font-bold">2:34</p>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  View Details
                </Button>
              </div>
            </Card>

            {/* Variant B - Winner */}
            <Card className="p-4 border-2 border-green-400 bg-green-50 relative">
              <div className="absolute -top-3 -right-3">
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Trophy className="h-3 w-3" />
                  Leading
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-600 text-white">B</Badge>
                  <h4 className="font-bold">New Design</h4>
                </div>
                <Badge variant="outline" className="border-green-500 text-green-700">
                  +3.5% better
                </Badge>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Traffic Split</span>
                    <span className="font-semibold">50%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div>
                    <p className="text-xs text-gray-600">Visitors</p>
                    <p className="text-lg font-bold">1,228</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Conversions</p>
                    <p className="text-lg font-bold">190</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Conv. Rate</p>
                    <p className="text-lg font-bold text-green-700">15.5%</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Avg. Time</p>
                    <p className="text-lg font-bold">3:12</p>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full border-green-500 text-green-700">
                  View Details
                </Button>
              </div>
            </Card>
          </div>

          {/* Test Actions */}
          <div className="flex gap-3 mt-6">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <Trophy className="h-4 w-4 mr-2" />
              Declare Winner
            </Button>
            <Button variant="outline">
              <BarChart3 className="h-4 w-4 mr-2" />
              View Full Report
            </Button>
            <Button variant="outline" className="text-red-600 hover:text-red-700">
              <Pause className="h-4 w-4 mr-2" />
              Stop Test
            </Button>
          </div>
        </Card>

        {/* Test 2 - Paused */}
        <Card className="p-6 opacity-75">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-lg flex items-center justify-center">
                <Split className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold">Product Page Headlines</h3>
                  <Badge className="bg-gray-100 text-gray-700 border-gray-300">
                    <Pause className="h-3 w-3 mr-1" />
                    Paused
                  </Badge>
                </div>
                <p className="text-gray-600 mb-2">Testing different headline variations</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Started: Nov 20, 2025
                  </span>
                  <span>•</span>
                  <span>Paused after 3 days</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="text-green-600">
                <Play className="h-4 w-4 mr-1" />
                Resume
              </Button>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Total Visitors</p>
              <p className="text-2xl font-bold">892</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Best Conv. Rate</p>
              <p className="text-2xl font-bold">8.9%</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Confidence</p>
              <p className="text-2xl font-bold">67%</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Variants</p>
              <p className="text-2xl font-bold">3</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Completed Tests */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Completed Tests</h2>

        <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold">Email Campaign CTAs</h3>
                  <Badge className="bg-green-600 text-white">
                    Completed
                  </Badge>
                  <Badge variant="outline" className="border-green-600 text-green-700">
                    Winner: Variant B
                  </Badge>
                </div>
                <p className="text-gray-600 mb-2">Tested different call-to-action buttons</p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Nov 10 - Nov 22, 2025
                  </span>
                  <span>•</span>
                  <span>12 days • 5,234 visitors</span>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-sm text-gray-600 mb-1">Total Visitors</p>
              <p className="text-2xl font-bold">5,234</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-sm text-gray-600 mb-1">Winner Conv.</p>
              <p className="text-2xl font-bold text-green-600">18.2%</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-sm text-gray-600 mb-1">Improvement</p>
              <p className="text-2xl font-bold text-green-600">+5.7%</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-sm text-gray-600 mb-1">Confidence</p>
              <p className="text-2xl font-bold">98%</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-sm text-gray-600 mb-1">Status</p>
              <p className="text-sm font-semibold text-green-600">Applied ✓</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-green-100 border border-green-300 rounded-lg p-4">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <div>
              <p className="font-semibold text-green-900">Estimated Additional Revenue</p>
              <p className="text-sm text-green-700">+$12,400 per month based on improved conversion rate</p>
            </div>
          </div>

          <Button variant="outline" className="w-full mt-4">
            <BarChart3 className="h-4 w-4 mr-2" />
            View Full Report
          </Button>
        </Card>
      </div>

      {/* Create New Test Guide */}
      <Card className="mt-8 p-6 bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <AlertCircle className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">A/B Testing Best Practices</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Run tests for at least 7-14 days to account for weekly patterns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Aim for 95%+ statistical confidence before declaring a winner</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Test one variable at a time for clearer insights</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Ensure you have sufficient traffic (minimum 1000 visitors per variant)</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
