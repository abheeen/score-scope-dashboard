
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
        return <div className="w-6 h-6 flex items-center justify-center text-white bg-blue-500 rounded-md">∑</div>;
      case "science":
        return <Atom className="text-green-500" />;
      case "english":
        return <Languages className="text-purple-500" />;
      default:
        return <Book className="text-blue-500" />;
    }
  };
  
  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 70) return "text-blue-600";
    if (score >= 50) return "text-yellow-600";
    return "text-red-600";
  };
  
  return (
    <div 
      className={cn(
        "rounded-lg border border-gray-100 bg-white p-4 transition-all duration-300 hover:shadow-md hand-drawn-border group hover:translate-y-[-2px] animate-fade-in",
        className
      )}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {getSubjectIcon(subject)}
          <h3 className="font-medium font-hand text-lg">{subject}</h3>
        </div>
        <div className={cn(
          "w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg group-hover:scale-110 transition-transform font-hand",
          getScoreColor(score)
        )}>
          {score}
        </div>
      </div>
      <div className="text-sm text-gray-500 font-sketch mt-1">{semester}</div>
    </div>
  );
};

export default SubjectCard;
