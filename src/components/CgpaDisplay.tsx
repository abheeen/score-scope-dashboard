
import { Award } from "lucide-react";
import { useState, useEffect } from "react";

const CgpaDisplay = () => {
  const [cgpa, setCgpa] = useState(0);
  const targetCgpa = 3.78;
  
  useEffect(() => {
    const animateCgpa = () => {
      let startTime: number | null = null;
      const duration = 1500; // 1.5 seconds
      
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCgpa(progress * targetCgpa);
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    };
    
    animateCgpa();
  }, []);
  
  return (
    <div className="card-sketch animate-fade-in">
      <h2 className="text-xl font-hand font-semibold mb-4 flex items-center gap-2">
        <Award size={18} className="text-blue-600" />
        <span className="sketch-highlight">CGPA</span>
      </h2>
      
      <div className="flex flex-col items-center justify-center p-2">
        <div className="relative w-36 h-36 flex items-center justify-center mb-3">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#edf2f7"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#4299e1"
              strokeWidth="8"
              strokeDasharray="283"
              strokeDashoffset={283 - (283 * (cgpa / 4))}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out animate-draw-line"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold font-hand">{cgpa.toFixed(2)}</span>
            <span className="text-sm text-gray-500 font-sketch">of 4.00</span>
          </div>
        </div>
        
        <div className="w-full mt-3 grid grid-cols-4 gap-2">
          {[
            { label: "A", value: "12", color: "bg-green-500" },
            { label: "B", value: "5", color: "bg-blue-500" },
            { label: "C", value: "1", color: "bg-yellow-500" },
            { label: "F", value: "0", color: "bg-red-500" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <div className={`w-6 h-6 rounded-full ${item.color} flex items-center justify-center text-white text-xs font-medium mb-1`}>
                {item.label}
              </div>
              <span className="text-sm font-sketch">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CgpaDisplay;
