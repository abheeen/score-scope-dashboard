
import { useState, useEffect } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import SideNavigation from "@/components/SideNavigation";
import OverallPerformance from "@/components/OverallPerformance";
import ScoreAnalysis from "@/components/ScoreAnalysis";
import CgpaDisplay from "@/components/CgpaDisplay";
import TimePeriodSelector from "@/components/TimePeriodSelector";
import SubjectCard from "@/components/SubjectCard";
import ExportButton from "@/components/ExportButton";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check system preference for dark mode
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
    
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-200 dark:border-gray-700 border-t-blue-500 dark:border-t-blue-400 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg font-sf text-gray-600 dark:text-gray-300">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-dashboard-bg dark:bg-dashboard-bg-dark transition-colors duration-300">
      <SideNavigation />
      
      <main className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <DashboardHeader />
          
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-3 items-center">
              <h2 className="text-xl font-sf font-semibold">Academic Overview</h2>
              <span className="text-sm text-gray-500 dark:text-gray-400 font-sf">Spring 2023</span>
            </div>
            
            <ExportButton />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <SubjectCard subject="Mathematics" score={68} semester="Spring Semester" />
                <SubjectCard subject="Science" score={85} semester="Spring Semester" />
                <SubjectCard subject="English" score={83} semester="Spring Semester" />
              </div>
              
              <ScoreAnalysis />
            </div>
            
            <div className="space-y-6">
              <OverallPerformance />
              <CgpaDisplay />
              <TimePeriodSelector />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
