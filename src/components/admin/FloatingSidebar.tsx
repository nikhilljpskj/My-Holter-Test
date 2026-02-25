import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  MapPin,
  FileText,
  Settings,
  Camera,
  UserCheck,
  Building2,
  Stethoscope,
  ClipboardList,
  ChevronLeft,
  ChevronRight,
  GripVertical,
  LogOut,
  Bell,
  Radio,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface NavItem {
  title: string;
  href: string;
  icon: React.ElementType;
  badge?: number;
  roles?: string[];
}

const navItems: NavItem[] = [
  { title: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { title: "Share Location", href: "/admin/share-location", icon: Radio, roles: ["sales_executive", "sales_manager"] },
  { title: "Sales Tracking", href: "/admin/sales-tracking", icon: MapPin, roles: ["super_admin", "admin", "sales_manager"] },
  { title: "Visits", href: "/admin/visits", icon: ClipboardList },
  { title: "Photo Verification", href: "/admin/photos", icon: Camera, roles: ["super_admin", "admin", "sales_manager"] },
  { title: "Employees", href: "/admin/employees", icon: Users, roles: ["super_admin", "admin"] },
  { title: "Patients", href: "/admin/patients", icon: UserCheck },
  { title: "Hospitals", href: "/admin/hospitals", icon: Building2 },
  { title: "Doctors", href: "/admin/doctors", icon: Stethoscope },
  { title: "CMS", href: "/admin/cms", icon: FileText, roles: ["super_admin", "admin"] },
  { title: "Settings", href: "/admin/settings", icon: Settings, roles: ["super_admin"] },
];

interface FloatingSidebarProps {
  userRole?: string;
  userName?: string;
  userAvatar?: string;
}

export function FloatingSidebar({ 
  userRole = "super_admin", 
  userName = "Admin User",
  userAvatar 
}: FloatingSidebarProps) {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(true);
  const [position, setPosition] = useState({ x: 16, y: 80 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);
  const startPos = useRef({ x: 0, y: 0 });
  const startOffset = useRef({ x: 0, y: 0 });

  const filteredNavItems = navItems.filter(
    (item) => !item.roles || item.roles.includes(userRole)
  );

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.drag-handle')) {
      setIsDragging(true);
      startPos.current = { x: e.clientX, y: e.clientY };
      startOffset.current = { x: position.x, y: position.y };
      e.preventDefault();
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const dx = e.clientX - startPos.current.x;
        const dy = e.clientY - startPos.current.y;
        setPosition({
          x: Math.max(0, Math.min(window.innerWidth - 80, startOffset.current.x + dx)),
          y: Math.max(0, Math.min(window.innerHeight - 100, startOffset.current.y + dy)),
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const roleLabels: Record<string, string> = {
    super_admin: "Super Admin",
    admin: "Admin",
    sales_manager: "Sales Manager",
    sales_executive: "Sales Executive",
  };

  // Collapsed bubble view
  if (!isExpanded) {
    return (
      <div
        ref={dragRef}
        className={cn(
          "fixed z-50 w-16 h-16 bg-secondary rounded-full shadow-large transition-all duration-300 cursor-pointer hover:scale-110",
          isDragging && "cursor-grabbing scale-105"
        )}
        style={{ left: position.x, top: position.y }}
        onMouseDown={handleMouseDown}
        onClick={() => !isDragging && setIsExpanded(true)}
      >
        <div className="w-full h-full flex items-center justify-center drag-handle">
          <Avatar className="h-12 w-12 border-2 border-white/30">
            <AvatarImage src={userAvatar} />
            <AvatarFallback className="bg-white/20 text-white text-sm font-bold">
              {userName.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>
        {/* Pulse indicator */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
      </div>
    );
  }

  return (
    <div
      ref={dragRef}
      className={cn(
        "fixed z-50 bg-card border border-border rounded-2xl shadow-large transition-all duration-300 w-64",
        isDragging && "cursor-grabbing"
      )}
      style={{ left: position.x, top: position.y }}
      onMouseDown={handleMouseDown}
    >
      {/* Header with drag handle */}
      <div className="flex items-center justify-between p-3 border-b border-border">
        <div className="drag-handle cursor-grab flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <GripVertical className="w-4 h-4" />
          <span className="text-xs font-medium">Drag to move</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7"
          onClick={() => setIsExpanded(false)}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
      </div>

      {/* User info */}
      <div className="p-3 border-b border-border">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border-2 border-primary">
            <AvatarImage src={userAvatar} />
            <AvatarFallback className="bg-primary text-white text-sm">
              {userName.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm truncate">{userName}</p>
            <Badge variant="secondary" className="text-xs bg-primary text-white">
              {roleLabels[userRole]}
            </Badge>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-2 max-h-[50vh] overflow-y-auto">
        <ul className="space-y-1">
          {filteredNavItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                    isActive
                      ? "bg-secondary text-white shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  <item.icon className="w-5 h-5 shrink-0" />
                  <span className="flex-1">{item.title}</span>
                  {item.badge && (
                    <Badge variant="destructive" className="h-5 min-w-5 text-xs">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer actions */}
      <div className="p-2 border-t border-border">
        <div className="flex gap-1">
          <Button variant="ghost" size="sm" className="flex-1">
            <Bell className="w-4 h-4" />
            <span className="ml-2">Alerts</span>
          </Button>
          <Link to="/" className="flex-1">
            <Button
              variant="ghost"
              size="sm"
              className="w-full text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              <LogOut className="w-4 h-4" />
              <span className="ml-2">Exit</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
