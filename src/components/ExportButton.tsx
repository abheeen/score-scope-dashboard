
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
      className="relative overflow-hidden group flex items-center gap-2 px-5 py-2.5 font-medium rounded-lg border-2 border-blue-100 text-blue-800 bg-blue-50 hand-drawn-border hover:bg-blue-100 transition-colors duration-200"
    >
      <Download size={18} className="group-hover:animate-bounce" />
      <span className="font-sketch">Export Report</span>
      <span className="absolute inset-0 w-full h-full bg-blue-100 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 -z-10"></span>
    </button>
  );
};

export default ExportButton;
