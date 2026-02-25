import { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, UserPlus, Eye, EyeOff, Shield, Mail, Phone, MapPin, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ROLES = [
  { value: "super_admin", label: "Super Admin", description: "Full system access" },
  { value: "admin", label: "Admin", description: "Manage users, CMS, and settings" },
  { value: "sales_manager", label: "Sales Manager", description: "Manage sales team and view reports" },
  { value: "sales_executive", label: "Sales Executive", description: "Field visits and patient enrollment" },
];

export default function AddUser() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    region: "",
    password: "",
    confirmPassword: "",
    sendWelcomeEmail: true,
    requirePasswordChange: true,
  });

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.role) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast.success("User created successfully!");
      setLoading(false);
      navigate("/admin/employees");
    }, 1000);
  };

  const initials = `${formData.firstName.charAt(0)}${formData.lastName.charAt(0)}`.toUpperCase() || "U";
  const selectedRole = ROLES.find(r => r.value === formData.role);

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link to="/admin/employees">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Add New User</h1>
            <p className="text-muted-foreground">Create a new user account with role assignment</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Basic Information
                </CardTitle>
                <CardDescription>Enter the user's personal details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      placeholder="Enter first name"
                      value={formData.firstName}
                      onChange={(e) => handleChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      placeholder="Enter last name"
                      value={formData.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="user@example.com"
                      className="pl-10"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 94473 55775"
                      className="pl-10"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="region">Assigned Region</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="region"
                      placeholder="e.g., Chennai, South Tamil Nadu"
                      className="pl-10"
                      value={formData.region}
                      onChange={(e) => handleChange("region", e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Role & Permissions Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Role & Permissions
                </CardTitle>
                <CardDescription>Assign a role to define user access levels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>User Role *</Label>
                  <Select value={formData.role} onValueChange={(value) => handleChange("role", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      {ROLES.map((role) => (
                        <SelectItem key={role.value} value={role.value}>
                          <div className="flex flex-col">
                            <span className="font-medium">{role.label}</span>
                            <span className="text-xs text-muted-foreground">{role.description}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {selectedRole && (
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <p className="font-medium text-primary">{selectedRole.label}</p>
                    <p className="text-sm text-muted-foreground mt-1">{selectedRole.description}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Password Card */}
            <Card>
              <CardHeader>
                <CardTitle>Set Password</CardTitle>
                <CardDescription>Create a secure password for the user</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password *</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password (min 8 characters)"
                      value={formData.password}
                      onChange={(e) => handleChange("password", e.target.value)}
                      required
                      minLength={8}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password *</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Re-enter password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleChange("confirmPassword", e.target.value)}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">Send Welcome Email</p>
                      <p className="text-xs text-muted-foreground">Email user with login credentials</p>
                    </div>
                    <Switch
                      checked={formData.sendWelcomeEmail}
                      onCheckedChange={(checked) => handleChange("sendWelcomeEmail", checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">Require Password Change</p>
                      <p className="text-xs text-muted-foreground">User must change password on first login</p>
                    </div>
                    <Switch
                      checked={formData.requirePasswordChange}
                      onCheckedChange={(checked) => handleChange("requirePasswordChange", checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Preview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="w-20 h-20 border-4 border-primary/20">
                    <AvatarFallback className="bg-primary text-white text-2xl">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold mt-3">
                    {formData.firstName || "First"} {formData.lastName || "Last"}
                  </h3>
                  <p className="text-sm text-muted-foreground">{formData.email || "email@example.com"}</p>
                  {selectedRole && (
                    <span className="mt-2 px-3 py-1 rounded-full text-xs font-medium bg-primary text-white">
                      {selectedRole.label}
                    </span>
                  )}
                </div>

                <div className="pt-4 border-t border-border space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phone</span>
                    <span>{formData.phone || "Not set"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Region</span>
                    <span>{formData.region || "Not set"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Welcome Email</span>
                    <span>{formData.sendWelcomeEmail ? "Yes" : "No"}</span>
                  </div>
                </div>

                <Button type="submit" className="w-full" variant="hero" disabled={loading}>
                  <UserPlus className="w-4 h-4 mr-2" />
                  {loading ? "Creating..." : "Create User"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
