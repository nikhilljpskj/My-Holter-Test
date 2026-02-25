import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield, 
  MapPin,
  Save,
  Key,
} from "lucide-react";

export default function Settings() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-muted-foreground">Manage system configuration</p>
          </div>
          <Button variant="hero">
            <Save className="w-4 h-4 mr-2" />
            Save All Changes
          </Button>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="tracking">Tracking</TabsTrigger>
            <TabsTrigger value="roles">Roles</TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general">
            <div className="bg-card rounded-2xl border border-border p-6 space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <SettingsIcon className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-lg">General Settings</h3>
              </div>

              <div className="grid gap-6">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input id="companyName" defaultValue="Holter Test India" />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Contact Phone</Label>
                    <Input id="phone" defaultValue="+91 94473 55775" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Contact Email</Label>
                    <Input id="email" defaultValue="info@redeemertechnologies.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp Number</Label>
                  <Input id="whatsapp" defaultValue="+91 94473 55775" />
                </div>

                <div className="space-y-2">
                  <Label>Default Region</Label>
                  <Select defaultValue="chennai">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="chennai">Chennai</SelectItem>
                      <SelectItem value="bangalore">Bangalore</SelectItem>
                      <SelectItem value="hyderabad">Hyderabad</SelectItem>
                      <SelectItem value="kochi">Kochi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Notification Settings */}
          <TabsContent value="notifications">
            <div className="bg-card rounded-2xl border border-border p-6 space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Bell className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-lg">Notification Settings</h3>
              </div>

              <div className="space-y-4">
                {[
                  { id: "newVisit", label: "New Visit Reports", description: "Get notified when sales employees submit visit reports" },
                  { id: "newPatient", label: "New Patient Enrollments", description: "Notifications for new home enrollment bookings" },
                  { id: "photoVerification", label: "Photo Verification Pending", description: "Alert when photos need verification" },
                  { id: "dailyReport", label: "Daily Summary Report", description: "Receive daily activity summary via email" },
                  { id: "locationAlert", label: "Location Anomaly Alerts", description: "Alert for suspicious GPS patterns" },
                ].map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 rounded-xl border border-border">
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security">
            <div className="bg-card rounded-2xl border border-border p-6 space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-lg">Security Settings</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl border border-border">
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">Require 2FA for all admin accounts</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl border border-border">
                  <div>
                    <p className="font-medium">Session Timeout</p>
                    <p className="text-sm text-muted-foreground">Auto logout after inactivity</p>
                  </div>
                  <Select defaultValue="30">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                      <SelectItem value="120">2 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl border border-border">
                  <div>
                    <p className="font-medium">IP Logging</p>
                    <p className="text-sm text-muted-foreground">Log IP addresses for all logins</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl border border-border">
                  <div>
                    <p className="font-medium">Device Tracking</p>
                    <p className="text-sm text-muted-foreground">Track device information for employee sessions</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <Button variant="outline" className="gap-2">
                  <Key className="w-4 h-4" />
                  Change Admin Password
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Tracking Settings */}
          <TabsContent value="tracking">
            <div className="bg-card rounded-2xl border border-border p-6 space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-lg">Location Tracking Settings</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl border border-border">
                  <div>
                    <p className="font-medium">Mandatory GPS</p>
                    <p className="text-sm text-muted-foreground">Require GPS for all visit submissions</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl border border-border">
                  <div>
                    <p className="font-medium">GPS Accuracy Threshold</p>
                    <p className="text-sm text-muted-foreground">Minimum accuracy required for location</p>
                  </div>
                  <Select defaultValue="100">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="50">±50 meters</SelectItem>
                      <SelectItem value="100">±100 meters</SelectItem>
                      <SelectItem value="200">±200 meters</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl border border-border">
                  <div>
                    <p className="font-medium">Selfie Verification</p>
                    <p className="text-sm text-muted-foreground">Require selfies for visit verification</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl border border-border">
                  <div>
                    <p className="font-medium">Max Photos Per Visit</p>
                    <p className="text-sm text-muted-foreground">Maximum selfies allowed per visit</p>
                  </div>
                  <Select defaultValue="3">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 photo</SelectItem>
                      <SelectItem value="2">2 photos</SelectItem>
                      <SelectItem value="3">3 photos</SelectItem>
                      <SelectItem value="5">5 photos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl border border-border">
                  <div>
                    <p className="font-medium">Block Gallery Uploads</p>
                    <p className="text-sm text-muted-foreground">Only allow camera capture (no gallery)</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl border border-border">
                  <div>
                    <p className="font-medium">Anti-Spoofing Detection</p>
                    <p className="text-sm text-muted-foreground">Detect mock location apps (best effort)</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Role Settings */}
          <TabsContent value="roles">
            <div className="bg-card rounded-2xl border border-border p-6 space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <User className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-lg">Role Permissions</h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-medium">Permission</th>
                      <th className="text-center py-3 px-4 font-medium">Super Admin</th>
                      <th className="text-center py-3 px-4 font-medium">Admin</th>
                      <th className="text-center py-3 px-4 font-medium">Sales Manager</th>
                      <th className="text-center py-3 px-4 font-medium">Sales Executive</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "View Dashboard", sa: true, a: true, sm: true, se: true },
                      { name: "Manage Employees", sa: true, a: true, sm: false, se: false },
                      { name: "View All Visits", sa: true, a: true, sm: true, se: false },
                      { name: "Edit CMS Pages", sa: true, a: true, sm: false, se: false },
                      { name: "View Reports", sa: true, a: true, sm: true, se: false },
                      { name: "Export Data", sa: true, a: true, sm: true, se: false },
                      { name: "Verify Photos", sa: true, a: true, sm: true, se: false },
                      { name: "Manage Settings", sa: true, a: false, sm: false, se: false },
                      { name: "Track Employees", sa: true, a: true, sm: true, se: false },
                      { name: "Submit Visits", sa: true, a: true, sm: true, se: true },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-border">
                        <td className="py-3 px-4">{row.name}</td>
                        <td className="text-center py-3 px-4">
                          <Switch checked={row.sa} />
                        </td>
                        <td className="text-center py-3 px-4">
                          <Switch checked={row.a} />
                        </td>
                        <td className="text-center py-3 px-4">
                          <Switch checked={row.sm} />
                        </td>
                        <td className="text-center py-3 px-4">
                          <Switch checked={row.se} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
}
