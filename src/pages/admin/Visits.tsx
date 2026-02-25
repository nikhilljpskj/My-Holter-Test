import { AdminLayout } from "@/components/admin/AdminLayout";
import { VisitForm } from "@/components/sales/VisitForm";
import { DataTable } from "@/components/admin/DataTable";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Eye, MapPin, Clock, Building2, Stethoscope, UserCheck } from "lucide-react";
import { useState } from "react";

// Mock data
const mockVisits = [
  { 
    id: 1, 
    date: "2024-01-15", 
    time: "10:30 AM", 
    type: "Hospital", 
    client: "Apollo Hospital", 
    location: "Chennai Central",
    notes: "Met with cardiology department head. Discussed partnership.",
    photos: 3,
    status: "completed" 
  },
  { 
    id: 2, 
    date: "2024-01-15", 
    time: "02:15 PM", 
    type: "Doctor", 
    client: "Dr. Ramesh Nair", 
    location: "Velachery",
    notes: "Follow-up on previous referral cases.",
    photos: 2,
    status: "completed" 
  },
  { 
    id: 3, 
    date: "2024-01-14", 
    time: "11:00 AM", 
    type: "Patient", 
    client: "Mrs. Lakshmi Devi", 
    location: "Anna Nagar",
    notes: "Home enrollment completed. Test scheduled for tomorrow.",
    photos: 3,
    status: "completed" 
  },
  { 
    id: 4, 
    date: "2024-01-14", 
    time: "04:30 PM", 
    type: "Hospital", 
    client: "MIOT Hospital", 
    location: "T. Nagar",
    notes: "New partnership discussion. Need follow-up.",
    photos: 2,
    status: "pending_followup" 
  },
];

export default function AdminVisits() {
  const [showForm, setShowForm] = useState(false);

  const columns = [
    { 
      key: "date", 
      header: "Date/Time",
      render: (item: any) => (
        <div>
          <p className="font-medium">{item.date}</p>
          <p className="text-sm text-muted-foreground">{item.time}</p>
        </div>
      )
    },
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
    { 
      key: "location", 
      header: "Location",
      render: (item: any) => (
        <div className="flex items-center gap-1 text-sm">
          <MapPin className="w-3 h-3 text-primary" />
          {item.location}
        </div>
      )
    },
    { 
      key: "photos", 
      header: "Photos",
      render: (item: any) => (
        <span className="text-sm">{item.photos}/3</span>
      )
    },
    {
      key: "status",
      header: "Status",
      render: (item: any) => (
        <Badge
          variant={item.status === "completed" ? "default" : "secondary"}
          className={item.status === "completed" ? "bg-green-100 text-green-700" : ""}
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

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Visits</h1>
            <p className="text-muted-foreground">Manage and track client visits</p>
          </div>
          <Button variant="hero" onClick={() => setShowForm(!showForm)}>
            <Plus className="w-5 h-5 mr-2" />
            {showForm ? "View All Visits" : "New Visit"}
          </Button>
        </div>

        {showForm ? (
          <VisitForm onSubmit={() => setShowForm(false)} />
        ) : (
          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">All Visits</TabsTrigger>
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="pending">Pending Follow-up</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <DataTable
                columns={columns}
                data={mockVisits}
                searchPlaceholder="Search visits..."
                onExport={() => console.log("Exporting...")}
              />
            </TabsContent>
            <TabsContent value="today">
              <DataTable
                columns={columns}
                data={mockVisits.filter(v => v.date === "2024-01-15")}
                searchPlaceholder="Search visits..."
              />
            </TabsContent>
            <TabsContent value="pending">
              <DataTable
                columns={columns}
                data={mockVisits.filter(v => v.status === "pending_followup")}
                searchPlaceholder="Search visits..."
              />
            </TabsContent>
          </Tabs>
        )}
      </div>
    </AdminLayout>
  );
}
