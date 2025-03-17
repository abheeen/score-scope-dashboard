
import { Book, BarChart3, GraduationCap, Home, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

interface SideNavigationProps {
  className?: string;
}

const SideNavigation = ({ className }: SideNavigationProps) => {
  return (
    <div className={cn(
      "flex flex-col h-full w-60 bg-white/90 backdrop-blur-sm border-r border-gray-200/60 py-6 px-4 animate-slide-in",
      className
    )}>
      <div className="flex items-center gap-3 mb-10 px-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-dashboard-blue to-dashboard-blue/80 flex items-center justify-center text-white font-bold text-lg">
          S
        </div>
        <div className="flex flex-col">
          <h2 className="font-display text-lg font-semibold">Academic</h2>
          <span className="text-xs text-gray-500 font-sans">support@scoreviz</span>
        </div>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-1">
          <NavItem icon={<Home size={20} />} label="Dashboard" active />
          <NavItem icon={<Book size={20} />} label="Courses" />
          <NavItem icon={<BarChart3 size={20} />} label="Performance" />
          <NavItem icon={<GraduationCap size={20} />} label="Grades" />
        </ul>
      </nav>
      
      <div className="mt-auto pt-6 border-t border-gray-200/60">
        <ul className="space-y-1">
          <NavItem icon={<Settings size={20} />} label="Settings" />
          <NavItem icon={<LogOut size={20} />} label="Sign Out" />
        </ul>
      </div>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem = ({ icon, label, active = false }: NavItemProps) => {
  return (
    <li>
      <a
        href="#"
        className={cn(
          "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-gray-700 hover:bg-gray-50/80 group",
          active && "bg-blue-50/80 text-dashboard-blue font-medium"
        )}
      >
        <span className={cn(
          "transition-colors duration-200",
          active ? "text-dashboard-blue" : "text-gray-500 group-hover:text-gray-700"
        )}>
          {icon}
        </span>
        <span className="font-sans">{label}</span>
      </a>
    </li>
  );
};

export default SideNavigation;
