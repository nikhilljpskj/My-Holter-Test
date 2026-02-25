import { AdminLayout } from "@/components/admin/AdminLayout";
import { DataTable } from "@/components/admin/DataTable";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, Edit, Eye, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data
const mockEmployees = [
  { 
    id: "EMP001", 
    name: "Arun Kumar", 
    email: "arun@holtertest.in",
    phone: "+91 94473 55775",
    role: "sales_executive",
    manager: "Vijay Patel",
    region: "Chennai",
    joinDate: "2023-06-15",
    status: "active",
    totalVisits: 245,
  },
  { 
    id: "EMP002", 
    name: "Priya Sharma", 
    email: "priya@holtertest.in",
    phone: "+91 9876543211",
    role: "sales_executive",
    manager: "Vijay Patel",
    region: "Chennai",
    joinDate: "2023-08-20",
    status: "active",
    totalVisits: 189,
  },
  { 
    id: "EMP003", 
    name: "Vijay Patel", 
    email: "vijay@holtertest.in",
    phone: "+91 9876543212",
    role: "sales_manager",
    manager: "Admin",
    region: "Chennai",
    joinDate: "2022-03-10",
    status: "active",
    totalVisits: 412,
  },
  { 
    id: "EMP004", 
    name: "Deepa Menon", 
    email: "deepa@holtertest.in",
    phone: "+91 9876543213",
    role: "sales_executive",
    manager: "Vijay Patel",
    region: "Chennai",
    joinDate: "2023-11-01",
    status: "active",
    totalVisits: 67,
  },
  { 
    id: "EMP005", 
    name: "Rahul Krishnan", 
    email: "rahul@holtertest.in",
    phone: "+91 9876543214",
    role: "sales_executive",
    manager: "Vijay Patel",
    region: "Bangalore",
    joinDate: "2023-04-25",
    status: "inactive",
    totalVisits: 156,
  },
];

const roleLabels: Record<string, string> = {
  super_admin: "Super Admin",
  admin: "Admin",
  sales_manager: "Sales Manager",
  sales_executive: "Sales Executive",
};

export default function Employees() {
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
    { 
      key: "contact", 
      header: "Contact",
      render: (item: any) => (
        <div className="space-y-1">
          <div className="flex items-center gap-1 text-sm">
            <Mail className="w-3 h-3 text-muted-foreground" />
            {item.email}
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Phone className="w-3 h-3" />
            {item.phone}
          </div>
        </div>
      )
    },
    { 
      key: "role", 
      header: "Role",
      render: (item: any) => (
        <Badge variant={item.role === "sales_manager" ? "default" : "secondary"}>
          {roleLabels[item.role]}
        </Badge>
      )
    },
    { key: "region", header: "Region" },
    { key: "manager", header: "Reports To" },
    { 
      key: "totalVisits", 
      header: "Total Visits",
      render: (item: any) => (
        <span className="font-medium">{item.totalVisits}</span>
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
            <h1 className="text-3xl font-bold">Employees</h1>
            <p className="text-muted-foreground">Manage sales team members</p>
          </div>
          <Link to="/admin/employees/add">
            <Button variant="hero">
              <Plus className="w-5 h-5 mr-2" />
              Add Employee
            </Button>
          </Link>
        </div>

        {/* Table */}
        <DataTable
          columns={columns}
          data={mockEmployees}
          searchPlaceholder="Search employees..."
          onExport={() => console.log("Exporting...")}
        />
      </div>
    </AdminLayout>
  );
}
