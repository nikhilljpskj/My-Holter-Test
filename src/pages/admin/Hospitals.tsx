import { AdminLayout } from "@/components/admin/AdminLayout";
import { DataTable } from "@/components/admin/DataTable";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Eye, Edit, Building2, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data
const mockHospitals = [
  { 
    id: 1, 
    name: "Apollo Hospital", 
    city: "Chennai",
    address: "Greams Road, Chennai 600006",
    contactPerson: "Dr. Suresh Kumar",
    phone: "+91 44 2829 3333",
    email: "cardiology@apollochennai.com",
    partneredSince: "2022-03-15",
    totalReferrals: 245,
    status: "active",
  },
  { 
    id: 2, 
    name: "MIOT International", 
    city: "Chennai",
    address: "Mount Poonamallee Road, Chennai",
    contactPerson: "Dr. Rajesh Menon",
    phone: "+91 44 4200 2288",
    email: "referrals@miotinternational.com",
    partneredSince: "2022-06-20",
    totalReferrals: 189,
    status: "active",
  },
  { 
    id: 3, 
    name: "Fortis Malar", 
    city: "Chennai",
    address: "Adyar, Chennai 600020",
    contactPerson: "Dr. Priya Nagarajan",
    phone: "+91 44 4289 2222",
    email: "cardiac@fortismalar.com",
    partneredSince: "2023-01-10",
    totalReferrals: 134,
    status: "active",
  },
  { 
    id: 4, 
    name: "Manipal Hospital", 
    city: "Bangalore",
    address: "Old Airport Road, Bangalore",
    contactPerson: "Dr. Venkat Rao",
    phone: "+91 80 2502 4444",
    email: "heart@manipal.edu",
    partneredSince: "2023-04-05",
    totalReferrals: 98,
    status: "active",
  },
  { 
    id: 5, 
    name: "KIMS Hospital", 
    city: "Hyderabad",
    address: "Kondapur, Hyderabad",
    contactPerson: "Dr. Lakshmi Devi",
    phone: "+91 40 4488 5555",
    email: "cardiology@kimshyd.com",
    partneredSince: "2023-08-12",
    totalReferrals: 56,
    status: "inactive",
  },
];

export default function Hospitals() {
  const columns = [
    { 
      key: "name", 
      header: "Hospital",
      render: (item: any) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center text-white">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <p className="font-medium">{item.name}</p>
            <p className="text-sm text-muted-foreground">{item.city}</p>
          </div>
        </div>
      )
    },
    { 
      key: "contact", 
      header: "Contact",
      render: (item: any) => (
        <div className="space-y-1">
          <p className="text-sm font-medium">{item.contactPerson}</p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Phone className="w-3 h-3" />
            {item.phone}
          </div>
        </div>
      )
    },
    { 
      key: "address", 
      header: "Address",
      render: (item: any) => (
        <div className="flex items-start gap-1 text-sm max-w-[200px]">
          <MapPin className="w-3 h-3 mt-1 shrink-0 text-muted-foreground" />
          <span className="line-clamp-2">{item.address}</span>
        </div>
      )
    },
    { key: "partneredSince", header: "Partnered Since" },
    { 
      key: "totalReferrals", 
      header: "Total Referrals",
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
            <h1 className="text-3xl font-bold">Hospitals</h1>
            <p className="text-muted-foreground">Partner hospital management</p>
          </div>
          <Link to="/admin/hospitals/add">
            <Button variant="hero">
              <Plus className="w-5 h-5 mr-2" />
              Add Hospital
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-card rounded-2xl border border-border p-6">
            <p className="text-sm text-muted-foreground">Total Partners</p>
            <p className="text-3xl font-bold mt-1">{mockHospitals.length}</p>
          </div>
          <div className="bg-card rounded-2xl border border-border p-6">
            <p className="text-sm text-muted-foreground">Active Partners</p>
            <p className="text-3xl font-bold mt-1 text-green-600">
              {mockHospitals.filter(h => h.status === "active").length}
            </p>
          </div>
          <div className="bg-card rounded-2xl border border-border p-6">
            <p className="text-sm text-muted-foreground">Total Referrals</p>
            <p className="text-3xl font-bold mt-1 text-primary">
              {mockHospitals.reduce((sum, h) => sum + h.totalReferrals, 0)}
            </p>
          </div>
        </div>

        {/* Table */}
        <DataTable
          columns={columns}
          data={mockHospitals}
          searchPlaceholder="Search hospitals..."
          onExport={() => console.log("Exporting...")}
        />
      </div>
    </AdminLayout>
  );
}
