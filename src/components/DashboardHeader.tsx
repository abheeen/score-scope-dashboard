
import { Bell } from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="flex items-center justify-between pb-6 border-b border-gray-200/60 mb-8">
      <h1 className="text-3xl font-display font-medium tracking-tight text-dashboard-text-primary">Dashboard</h1>
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100/80 transition-colors duration-200">
          <Bell size={20} className="text-gray-700" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-dashboard-red rounded-full"></span>
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
