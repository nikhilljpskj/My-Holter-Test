import { AdminLayout } from "@/components/admin/AdminLayout";
import { PatientEnrollmentForm } from "@/components/sales/PatientEnrollmentForm";
import { DataTable } from "@/components/admin/DataTable";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Eye, Calendar, Phone } from "lucide-react";
import { useState } from "react";

// Mock data
const mockPatients = [
  { 
    id: 1, 
    name: "Mrs. Lakshmi Devi", 
    age: 62,
    phone: "+91 94473 55775",
    city: "Chennai",
    testType: "24-Hour Holter",
    scheduledDate: "2024-01-16",
    technician: "Ravi Kumar",
    status: "scheduled" 
  },
  { 
    id: 2, 
    name: "Mr. Ramakrishnan", 
    age: 55,
    phone: "+91 9876543211",
    city: "Bangalore",
    testType: "48-Hour Holter",
    scheduledDate: "2024-01-15",
    technician: "Priya Sharma",
    status: "in_progress" 
  },
  { 
    id: 3, 
    name: "Mrs. Shanti Kumari", 
    age: 48,
    phone: "+91 9876543212",
    city: "Hyderabad",
    testType: "24-Hour Holter",
    scheduledDate: "2024-01-14",
    technician: "Arun Patel",
    status: "completed" 
  },
  { 
    id: 4, 
    name: "Mr. Venkatesh Iyer", 
    age: 70,
    phone: "+91 9876543213",
    city: "Chennai",
    testType: "72-Hour Holter",
    scheduledDate: "2024-01-17",
    technician: "Deepa Nair",
    status: "scheduled" 
  },
];

export default function AdminPatients() {
  const [showForm, setShowForm] = useState(false);

  const columns = [
    { 
      key: "name", 
      header: "Patient",
      render: (item: any) => (
        <div>
          <p className="font-medium">{item.name}</p>
          <p className="text-sm text-muted-foreground">{item.age} years</p>
        </div>
      )
    },
    { 
      key: "phone", 
      header: "Phone",
      render: (item: any) => (
        <div className="flex items-center gap-1">
          <Phone className="w-3 h-3 text-muted-foreground" />
          <span className="text-sm">{item.phone}</span>
        </div>
      )
    },
    { key: "city", header: "City" },
    { 
      key: "testType", 
      header: "Test Type",
      render: (item: any) => (
        <Badge variant="outline">{item.testType}</Badge>
      )
    },
    { 
      key: "scheduledDate", 
      header: "Scheduled",
      render: (item: any) => (
        <div className="flex items-center gap-1 text-sm">
          <Calendar className="w-3 h-3 text-primary" />
          {item.scheduledDate}
        </div>
      )
    },
    { key: "technician", header: "Technician" },
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

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Patients</h1>
            <p className="text-muted-foreground">Home enrollment and patient management</p>
          </div>
          <Button variant="hero" onClick={() => setShowForm(!showForm)}>
            <Plus className="w-5 h-5 mr-2" />
            {showForm ? "View All Patients" : "New Enrollment"}
          </Button>
        </div>

        {showForm ? (
          <PatientEnrollmentForm onSubmit={() => setShowForm(false)} />
        ) : (
          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">All Patients</TabsTrigger>
              <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
              <TabsTrigger value="in_progress">In Progress</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <DataTable
                columns={columns}
                data={mockPatients}
                searchPlaceholder="Search patients..."
                onExport={() => console.log("Exporting...")}
              />
            </TabsContent>
            <TabsContent value="scheduled">
              <DataTable
                columns={columns}
                data={mockPatients.filter(p => p.status === "scheduled")}
                searchPlaceholder="Search patients..."
              />
            </TabsContent>
            <TabsContent value="in_progress">
              <DataTable
                columns={columns}
                data={mockPatients.filter(p => p.status === "in_progress")}
                searchPlaceholder="Search patients..."
              />
            </TabsContent>
            <TabsContent value="completed">
              <DataTable
                columns={columns}
                data={mockPatients.filter(p => p.status === "completed")}
                searchPlaceholder="Search patients..."
              />
            </TabsContent>
          </Tabs>
        )}
      </div>
    </AdminLayout>
  );
}
