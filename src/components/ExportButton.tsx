
import { Download } from "lucide-react";
import { toast } from "sonner";

const ExportButton = () => {
  const handleExport = () => {
    toast.success("Report exported successfully", {
      description: "Your report has been downloaded",
      duration: 3000,
    });
  };

  return (
    <button
      onClick={handleExport}
      className="relative overflow-hidden group flex items-center gap-2 px-5 py-2.5 font-medium rounded-full 
                text-white backdrop-blur-md border border-white/10 dark:border-white/5
                bg-dashboard-blue/90 dark:bg-dashboard-blue-dark/80 hover:bg-dashboard-blue/80 
                dark:hover:bg-dashboard-blue-dark/70 transition-colors duration-200 shadow-sm"
    >
      <Download size={18} className="group-hover:animate-bounce" />
      <span className="font-sf">Export Report</span>
    </button>
  );
};

export default ExportButton;
