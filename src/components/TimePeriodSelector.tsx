
import { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const semesters = [
  "Spring 2023",
  "Fall 2022",
  "Summer 2022",
  "Spring 2022",
  "Fall 2021",
];

const TimePeriodSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(semesters[0]);

  return (
    <div className="relative card-sketch min-w-[250px] animate-fade-in">
      <div className="flex items-center gap-2 mb-2">
        <Calendar size={18} className="text-blue-600" />
        <h3 className="font-hand text-lg font-medium">Time Period</h3>
      </div>
      
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "mt-2 relative flex items-center justify-between px-4 py-2.5 border border-gray-200 rounded-lg",
          "cursor-pointer transition-all duration-200 hover:border-gray-300",
          "hand-drawn-border"
        )}
      >
        <span className="font-sketch">{selected}</span>
        <ChevronDown
          size={16}
          className={cn(
            "text-gray-500 transition-transform duration-200",
            isOpen && "transform rotate-180"
          )}
        />
      </div>
      
      {isOpen && (
        <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 py-1 animate-scale-in">
          {semesters.map((semester) => (
            <div
              key={semester}
              className={cn(
                "px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors font-sketch",
                semester === selected && "bg-blue-50 text-blue-600"
              )}
              onClick={() => {
                setSelected(semester);
                setIsOpen(false);
              }}
            >
              {semester}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimePeriodSelector;
