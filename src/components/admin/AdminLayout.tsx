import { ReactNode } from "react";
import { FloatingSidebar } from "./FloatingSidebar";

interface AdminLayoutProps {
  children: ReactNode;
  userRole?: string;
  userName?: string;
}

export function AdminLayout({ 
  children, 
  userRole = "super_admin",
  userName = "Admin User"
}: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-muted/30">
      <FloatingSidebar userRole={userRole} userName={userName} />
      
      {/* Main content area */}
      <main className="min-h-screen p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
