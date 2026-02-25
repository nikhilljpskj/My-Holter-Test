import { AdminLayout } from "@/components/admin/AdminLayout";
import { DataTable } from "@/components/admin/DataTable";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Eye, Edit, Stethoscope, Phone, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data
const mockDoctors = [
  { 
    id: 1, 
    name: "Dr. Suresh Kumar", 
    specialty: "Cardiologist",
    hospital: "Apollo Hospital",
    city: "Chennai",
    phone: "+91 94473 55775",
    email: "dr.suresh@apollo.com",
    partneredSince: "2022-03-15",
    totalReferrals: 87,
    status: "active",
  },
  { 
    id: 2, 
    name: "Dr. Ramesh Nair", 
    specialty: "General Physician",
    hospital: "Private Practice",
    city: "Velachery",
    phone: "+91 9876543211",
    email: "dr.ramesh@gmail.com",
    partneredSince: "2022-08-20",
    totalReferrals: 64,
    status: "active",
  },
  { 
    id: 3, 
    name: "Dr. Priya Nagarajan", 
    specialty: "Cardiologist",
    hospital: "Fortis Malar",
    city: "Chennai",
    phone: "+91 9876543212",
    email: "dr.priya@fortis.com",
    partneredSince: "2023-01-10",
    totalReferrals: 52,
    status: "active",
  },
  { 
    id: 4, 
    name: "Dr. Venkat Rao", 
    specialty: "Internal Medicine",
    hospital: "Manipal Hospital",
    city: "Bangalore",
    phone: "+91 9876543213",
    email: "dr.venkat@manipal.edu",
    partneredSince: "2023-04-05",
    totalReferrals: 38,
    status: "active",
  },
  { 
    id: 5, 
    name: "Dr. Lakshmi Devi", 
    specialty: "Cardiologist",
    hospital: "KIMS Hospital",
    city: "Hyderabad",
    phone: "+91 9876543214",
    email: "dr.lakshmi@kims.com",
    partneredSince: "2023-08-12",
    totalReferrals: 23,
    status: "inactive",
  },
];

export default function Doctors() {
  const columns = [
    { 
      key: "name", 
      header: "Doctor",
      render: (item: any) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center text-white">
            <Stethoscope className="w-5 h-5" />
          </div>
          <div>
            <p className="font-medium">{item.name}</p>
            <p className="text-sm text-muted-foreground">{item.specialty}</p>
          </div>
        </div>
      )
    },
    { 
      key: "hospital", 
      header: "Hospital",
      render: (item: any) => (
        <div className="flex items-center gap-1.5">
          <Building2 className="w-4 h-4 text-muted-foreground" />
          <span>{item.hospital}</span>
        </div>
      )
    },
    { key: "city", header: "City" },
    { 
      key: "phone", 
      header: "Contact",
      render: (item: any) => (
        <div className="flex items-center gap-1 text-sm">
          <Phone className="w-3 h-3 text-muted-foreground" />
          {item.phone}
        </div>
      )
    },
    { key: "partneredSince", header: "Since" },
    { 
      key: "totalReferrals", 
      header: "Referrals",
      render: (item: any) => (
        <span className="font-semibold text-primary">{item.totalReferrals}</span>
      )
    },
    {
      key: "status",
      header: "Status",
      render: (item: any) => (
        <Badge
          variant={item.status === "active" ? "default" : "outline"}
          className={item.status === "active" ? "bg-green-100 text-green-700" : ""}
        >
          {item.status}
        </Badge>
      ),
    },
    {
      key: "actions",
      header: "",
      render: () => (
        <div className="flex gap-1">
          <Button variant="ghost" size="sm">
            <Eye className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Edit className="w-4 h-4" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Doctors</h1>
            <p className="text-muted-foreground">Referring doctor management</p>
          </div>
          <Link to="/admin/doctors/add">
            <Button variant="hero">
              <Plus className="w-5 h-5 mr-2" />
              Add Doctor
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-card rounded-2xl border border-border p-6">
            <p className="text-sm text-muted-foreground">Total Doctors</p>
            <p className="text-3xl font-bold mt-1">{mockDoctors.length}</p>
          </div>
          <div className="bg-card rounded-2xl border border-border p-6">
            <p className="text-sm text-muted-foreground">Active Partners</p>
            <p className="text-3xl font-bold mt-1 text-green-600">
              {mockDoctors.filter(d => d.status === "active").length}
            </p>
          </div>
          <div className="bg-card rounded-2xl border border-border p-6">
            <p className="text-sm text-muted-foreground">Total Referrals</p>
            <p className="text-3xl font-bold mt-1 text-primary">
              {mockDoctors.reduce((sum, d) => sum + d.totalReferrals, 0)}
            </p>
          </div>
        </div>

        {/* Table */}
        <DataTable
          columns={columns}
          data={mockDoctors}
          searchPlaceholder="Search doctors..."
          onExport={() => console.log("Exporting...")}
        />
      </div>
    </AdminLayout>
  );
}
