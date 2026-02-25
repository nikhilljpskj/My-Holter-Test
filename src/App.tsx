import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";

// Public pages
import Index from "./pages/Index";
import About from "./pages/About";
import HolterTest from "./pages/HolterTest";
import DoorstepTest from "./pages/DoorstepTest";
import HospitalCollaboration from "./pages/HospitalCollaboration";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Admin pages
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminVisits from "./pages/admin/Visits";
import AdminPatients from "./pages/admin/Patients";
import SalesTracking from "./pages/admin/SalesTracking";
import PhotoVerification from "./pages/admin/PhotoVerification";
import Employees from "./pages/admin/Employees";
import Hospitals from "./pages/admin/Hospitals";
import Doctors from "./pages/admin/Doctors";
import CMS from "./pages/admin/CMS";
import Settings from "./pages/admin/Settings";
import ShareLocation from "./pages/admin/ShareLocation";
import AddUser from "./pages/admin/AddUser";
import AddHospital from "./pages/admin/AddHospital";
import AddDoctor from "./pages/admin/AddDoctor";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes with main layout */}
            <Route path="/" element={<Layout><Index /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/holter-test" element={<Layout><HolterTest /></Layout>} />
            <Route path="/doorstep-test" element={<Layout><DoorstepTest /></Layout>} />
            <Route path="/hospital-collaboration" element={<Layout><HospitalCollaboration /></Layout>} />
            <Route path="/contact" element={<Layout><Contact /></Layout>} />
            
            {/* Admin routes (no main layout - uses AdminLayout) */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/visits" element={<AdminVisits />} />
            <Route path="/admin/patients" element={<AdminPatients />} />
            <Route path="/admin/sales-tracking" element={<SalesTracking />} />
            <Route path="/admin/photos" element={<PhotoVerification />} />
            <Route path="/admin/employees" element={<Employees />} />
            <Route path="/admin/employees/add" element={<AddUser />} />
            <Route path="/admin/hospitals" element={<Hospitals />} />
            <Route path="/admin/hospitals/add" element={<AddHospital />} />
            <Route path="/admin/doctors" element={<Doctors />} />
            <Route path="/admin/doctors/add" element={<AddDoctor />} />
            <Route path="/admin/cms" element={<CMS />} />
            <Route path="/admin/settings" element={<Settings />} />
            <Route path="/admin/share-location" element={<ShareLocation />} />
            
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
