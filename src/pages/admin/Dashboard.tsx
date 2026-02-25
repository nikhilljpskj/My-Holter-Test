import { AdminLayout } from "@/components/admin/AdminLayout";
import { StatCard } from "@/components/admin/StatCard";
import { DataTable } from "@/components/admin/DataTable";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  MapPin,
  ClipboardCheck,
  TrendingUp,
  Calendar,
  Eye,
  Building2,
  Stethoscope,
  UserCheck,
} from "lucide-react";

// Mock data
const recentVisits = [
  { id: 1, employee: "Arun Kumar", type: "Hospital", client: "Apollo Hospital", time: "10:30 AM", status: "completed" },
  { id: 2, employee: "Priya Sharma", type: "Doctor", client: "Dr. Ramesh Nair", time: "11:15 AM", status: "in_progress" },
  { id: 3, employee: "Vijay Patel", type: "Patient", client: "Mrs. Lakshmi", time: "09:45 AM", status: "completed" },
  { id: 4, employee: "Deepa Menon", type: "Hospital", client: "MIOT Hospital", time: "02:00 PM", status: "scheduled" },
];

const activeEmployees = [
  { id: 1, name: "Arun Kumar", location: "Chennai Central", lastUpdate: "2 min ago", visits: 5 },
  { id: 2, name: "Priya Sharma", location: "Velachery", lastUpdate: "5 min ago", visits: 3 },
  { id: 3, name: "Vijay Patel", location: "Anna Nagar", lastUpdate: "1 min ago", visits: 4 },
  { id: 4, name: "Deepa Menon", location: "T. Nagar", lastUpdate: "8 min ago", visits: 2 },
];

export default function AdminDashboard() {
  const visitColumns = [
    { key: "employee", header: "Employee" },
    { 
      key: "type", 
      header: "Type",
      render: (item: any) => (
        <Badge variant="outline" className="gap-1">
          {item.type === "Hospital" && <Building2 className="w-3 h-3" />}
          {item.type === "Doctor" && <Stethoscope className="w-3 h-3" />}
          {item.type === "Patient" && <UserCheck className="w-3 h-3" />}
          {item.type}
        </Badge>
      )
    },
    { key: "client", header: "Client" },
    { key: "time", header: "Time" },
    {
      key: "status",
      header: "Status",
      render: (item: any) => (
        <Badge
          variant={
            item.status === "completed" ? "default" :
            item.status === "in_progress" ? "secondary" : "outline"
          }
          className={
            item.status === "completed" ? "bg-green-100 text-green-700" :
            item.status === "in_progress" ? "bg-primary/10 text-primary" : ""
          }
        >
          {item.status.replace("_", " ")}
        </Badge>
      ),
    },
    {
      key: "actions",
      header: "",
      render: () => (
        <Button variant="ghost" size="sm">
          <Eye className="w-4 h-4" />
        </Button>
      ),
    },
  ];

  const employeeColumns = [
    { key: "name", header: "Employee" },
    { 
      key: "location", 
      header: "Current Location",
      render: (item: any) => (
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          {item.location}
        </div>
      )
    },
    { key: "lastUpdate", header: "Last Update" },
    { key: "visits", header: "Visits Today" },
    {
      key: "actions",
      header: "",
      render: () => (
        <Button variant="outline" size="sm">
          Track
        </Button>
      ),
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's your sales overview.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Today
            </Button>
            <Button variant="default" size="sm">
              Export Report
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Total Visits Today"
            value="47"
            change="+12% from yesterday"
            changeType="positive"
            icon={ClipboardCheck}
          />
          <StatCard
            title="Active Employees"
            value="12"
            change="4 on field"
            changeType="neutral"
            icon={Users}
            iconClassName="bg-gradient-to-br from-secondary to-secondary-dark"
          />
          <StatCard
            title="Patients Enrolled"
            value="8"
            change="+3 today"
            changeType="positive"
            icon={UserCheck}
          />
          <StatCard
            title="Monthly Target"
            value="78%"
            change="On track"
            changeType="positive"
            icon={TrendingUp}
            iconClassName="bg-gradient-to-br from-secondary to-secondary-dark"
          />
        </div>

        {/* Map Placeholder */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Live Employee Locations</h3>
            </div>
            <Button variant="outline" size="sm">View Full Map</Button>
          </div>
          <div className="h-64 bg-muted flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>Interactive map view</p>
              <p className="text-sm">Showing {activeEmployees.length} active employees</p>
            </div>
          </div>
        </div>

        {/* Tables Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          <DataTable
            title="Today's Visits"
            columns={visitColumns}
            data={recentVisits}
            searchPlaceholder="Search visits..."
          />
          <DataTable
            title="Active Employees"
            columns={employeeColumns}
            data={activeEmployees}
            searchPlaceholder="Search employees..."
          />
        </div>
      </div>
    </AdminLayout>
  );
}
