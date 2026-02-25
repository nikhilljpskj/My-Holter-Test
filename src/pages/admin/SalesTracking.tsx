import { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { StatCard } from "@/components/admin/StatCard";
import { DataTable } from "@/components/admin/DataTable";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Users, Activity, Clock, Eye, RefreshCw, Plus } from "lucide-react";
import { SalesUpdateModal } from "@/components/sales/SalesUpdateModal";

// Mock data
const mockEmployees = [
  { 
    id: "EMP001", 
    name: "Arun Kumar", 
    role: "Sales Executive",
    location: "Chennai Central",
    coords: { lat: 13.0827, lng: 80.2707 },
    lastUpdate: "2 min ago",
    status: "active",
    visitsToday: 5,
    avgVisits: 4.2,
  },
  { 
    id: "EMP002", 
    name: "Priya Sharma", 
    role: "Sales Executive",
    location: "Velachery",
    coords: { lat: 12.9815, lng: 80.2180 },
    lastUpdate: "5 min ago",
    status: "active",
    visitsToday: 3,
    avgVisits: 3.8,
  },
  { 
    id: "EMP003", 
    name: "Vijay Patel", 
    role: "Sales Manager",
    location: "Anna Nagar",
    coords: { lat: 13.0850, lng: 80.2101 },
    lastUpdate: "1 min ago",
    status: "active",
    visitsToday: 4,
    avgVisits: 5.1,
  },
  { 
    id: "EMP004", 
    name: "Deepa Menon", 
    role: "Sales Executive",
    location: "T. Nagar",
    coords: { lat: 13.0418, lng: 80.2341 },
    lastUpdate: "8 min ago",
    status: "idle",
    visitsToday: 2,
    avgVisits: 3.5,
  },
  { 
    id: "EMP005", 
    name: "Rahul Krishnan", 
    role: "Sales Executive",
    location: "Offline",
    coords: null,
    lastUpdate: "2 hours ago",
    status: "offline",
    visitsToday: 0,
    avgVisits: 4.0,
  },
];

export default function SalesTracking() {
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<{ id: string; name: string } | null>(null);

  const handleTrackEmployee = (employee: { id: string; name: string }) => {
    setSelectedEmployee(employee);
    setUpdateModalOpen(true);
  };

  const columns = [
    { 
      key: "name", 
      header: "Employee",
      render: (item: any) => (
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={`https://avatar.vercel.sh/${item.id}`} />
            <AvatarFallback className="bg-gradient-hero text-white text-sm">
              {item.name.split(" ").map((n: string) => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{item.name}</p>
            <p className="text-sm text-muted-foreground">{item.id}</p>
          </div>
        </div>
      )
    },
    { key: "role", header: "Role" },
    { 
      key: "location", 
      header: "Current Location",
      render: (item: any) => (
        <div className="flex items-center gap-2">
          <MapPin className={`w-4 h-4 ${item.status === "offline" ? "text-muted-foreground" : "text-primary"}`} />
          <span className={item.status === "offline" ? "text-muted-foreground" : ""}>{item.location}</span>
        </div>
      )
    },
    { 
      key: "lastUpdate", 
      header: "Last Update",
      render: (item: any) => (
        <div className="flex items-center gap-1 text-sm">
          <Clock className="w-3 h-3 text-muted-foreground" />
          {item.lastUpdate}
        </div>
      )
    },
    { 
      key: "visitsToday", 
      header: "Visits Today",
      render: (item: any) => (
        <span className="font-medium">{item.visitsToday}</span>
      )
    },
    {
      key: "status",
      header: "Status",
      render: (item: any) => (
        <Badge
          variant={
            item.status === "active" ? "default" :
            item.status === "idle" ? "secondary" : "outline"
          }
          className={
            item.status === "active" ? "bg-green-100 text-green-700" :
            item.status === "idle" ? "bg-amber-100 text-amber-700" : ""
          }
        >
          <span className={`w-2 h-2 rounded-full mr-1.5 ${
            item.status === "active" ? "bg-green-500" :
            item.status === "idle" ? "bg-amber-500" : "bg-muted-foreground"
          }`} />
          {item.status}
        </Badge>
      ),
    },
    {
      key: "actions",
      header: "",
      render: (item: any) => (
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => handleTrackEmployee({ id: item.id, name: item.name })}
        >
          <Eye className="w-4 h-4 mr-2" />
          Track
        </Button>
      ),
    },
  ];

  const activeCount = mockEmployees.filter(e => e.status === "active").length;
  const totalVisits = mockEmployees.reduce((sum, e) => sum + e.visitsToday, 0);

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Sales Tracking</h1>
            <p className="text-muted-foreground">Live employee location monitoring</p>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => setUpdateModalOpen(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Add My Update
            </Button>
            <Button variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh Locations
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-4">
          <StatCard
            title="Active Now"
            value={activeCount}
            change={`${mockEmployees.length} total employees`}
            icon={Activity}
          />
          <StatCard
            title="Total Visits Today"
            value={totalVisits}
            change="+18% from average"
            changeType="positive"
            icon={MapPin}
            iconClassName="bg-gradient-to-br from-secondary to-secondary-dark"
          />
          <StatCard
            title="Avg Visits/Employee"
            value={(totalVisits / mockEmployees.length).toFixed(1)}
            change="Target: 5"
            icon={Users}
          />
        </div>

        {/* Map Placeholder */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Live Location Map</h3>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span>Active ({activeCount})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span>Idle (1)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-muted-foreground" />
                <span>Offline (1)</span>
              </div>
            </div>
          </div>
          <div className="h-80 bg-muted relative">
            {/* Mock map with employee markers */}
            <div className="absolute inset-0 flex items-center justify-center">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=80.1,12.9,80.35,13.15&layer=mapnik"
                className="w-full h-full border-0"
                title="Employee Location Map"
              />
            </div>
            {/* Overlay markers (simplified) */}
            <div className="absolute inset-0 pointer-events-none">
              {mockEmployees.filter(e => e.coords).map((emp, i) => (
                <div
                  key={emp.id}
                  className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2"
                  style={{ 
                    left: `${20 + i * 15}%`, 
                    top: `${30 + i * 10}%` 
                  }}
                >
                  <div className={`w-full h-full rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg ${
                    emp.status === "active" ? "bg-green-500" : "bg-amber-500"
                  }`}>
                    {emp.name.split(" ").map(n => n[0]).join("")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Employee Table */}
        <DataTable
          title="Employee Status"
          columns={columns}
          data={mockEmployees}
          searchPlaceholder="Search employees..."
          onExport={() => console.log("Exporting...")}
        />

        {/* Sales Update Modal */}
        <SalesUpdateModal
          open={updateModalOpen}
          onOpenChange={setUpdateModalOpen}
          employeeId={selectedEmployee?.id || "CURRENT_USER"}
          employeeName={selectedEmployee?.name || "Current User"}
        />
      </div>
    </AdminLayout>
  );
}
