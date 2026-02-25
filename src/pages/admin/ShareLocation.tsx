import { AdminLayout } from "@/components/admin/AdminLayout";
import { LiveLocationShare } from "@/components/sales/LiveLocationShare";

export default function ShareLocation() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Share Location</h1>
          <p className="text-muted-foreground">Share your live location with status updates</p>
        </div>

        <LiveLocationShare />
      </div>
    </AdminLayout>
  );
}
