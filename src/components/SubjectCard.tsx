
import { Book, Atom, Languages } from "lucide-react";
import { cn } from "@/lib/utils";

interface SubjectCardProps {
  subject: string;
  score: number;
  semester: string;
  className?: string;
}

const SubjectCard = ({ subject, score, semester, className }: SubjectCardProps) => {
  const getSubjectIcon = (subject: string) => {
    switch (subject.toLowerCase()) {
      case "mathematics":
        return <div className="w-6 h-6 flex items-center justify-center text-white bg-dashboard-blue rounded-full">∑</div>;
      case "science":
        return <Atom className="text-dashboard-green" />;
      case "english":
        return <Languages className="text-dashboard-purple" />;
      default:
        return <Book className="text-dashboard-blue" />;
    }
  };
  
  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-dashboard-green";
    if (score >= 70) return "text-dashboard-blue";
    if (score >= 50) return "text-dashboard-yellow";
    return "text-dashboard-red";
  };
  
  return (
    <div 
      className={cn(
        "rounded-xl border border-gray-100/60 bg-white/80 backdrop-blur-sm p-4 transition-all duration-300 shadow-sm hover:shadow-md group hover:translate-y-[-2px] animate-fade-in",
        className
      )}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {getSubjectIcon(subject)}
          <h3 className="font-medium font-display text-lg">{subject}</h3>
        </div>
        <div className={cn(
          "w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg group-hover:scale-110 transition-transform font-display",
          getScoreColor(score)
        )}>
          {score}
        </div>
      </div>
      <div className="text-sm text-dashboard-text-secondary font-sans mt-1">{semester}</div>
    </div>
  );
};

export default SubjectCard;
