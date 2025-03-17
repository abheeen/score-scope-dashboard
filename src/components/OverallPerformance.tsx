
import { TrendingUp, BarChart2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricProps {
  label: string;
  value: string | number;
  change?: string;
  positive?: boolean;
  icon: React.ReactNode;
}

const OverallPerformance = () => {
  return (
    <div className="card-sketch animate-fade-in">
      <h2 className="text-xl font-hand font-semibold mb-4 flex items-center gap-2">
        <TrendingUp size={18} className="text-blue-600" />
        <span className="sketch-highlight">Overall Performance</span>
      </h2>
      
      <div className="grid grid-cols-1 gap-6 mt-4">
        <Metric 
          label="Average Score" 
          value="78.3%" 
          change="+5.2%" 
          positive={true}
          icon={<BarChart2 size={18} className="text-blue-600" />}
        />
        
        <Metric 
          label="Pass Rate" 
          value="92%" 
          change="+2.4%" 
          positive={true} 
          icon={<div className="w-4 h-4 rounded-full bg-green-500"></div>}
        />
        
        <div className="mt-2">
          <div className="flex justify-between items-center text-sm mb-1">
            <span className="text-gray-600 font-sketch">Overall Progress</span>
            <span className="font-medium font-sketch">75%</span>
          </div>
          <div className="h-2.5 w-full bg-gray-200 rounded-full overflow-hidden relative">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse-subtle"
              style={{ width: '75%' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Metric = ({ label, value, change, positive, icon }: MetricProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        {icon}
        <span className="text-gray-600 font-sketch">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-medium font-hand text-lg">{value}</span>
        {change && (
          <span className={cn(
            "text-xs px-1.5 py-0.5 rounded font-sketch",
            positive ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100",
          )}>
            {change}
          </span>
        )}
      </div>
    </div>
  );
};

export default OverallPerformance;
