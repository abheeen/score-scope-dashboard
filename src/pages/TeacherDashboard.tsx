
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "@/components/DashboardHeader";
import SideNavigation from "@/components/SideNavigation";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

// Mock student data
const mockStudents = [
  { id: 1, name: "Alex Johnson", email: "alex@example.com", rollNo: "CS2023-001" },
  { id: 2, name: "Maya Singh", email: "maya@example.com", rollNo: "CS2023-002" },
  { id: 3, name: "James Wilson", email: "james@example.com", rollNo: "CS2023-003" },
  { id: 4, name: "Sofia Rodriguez", email: "sofia@example.com", rollNo: "CS2023-004" },
  { id: 5, name: "Ethan Chen", email: "ethan@example.com", rollNo: "CS2023-005" },
];

// Mock subject data
const subjects = ["Mathematics", "Science", "English", "History", "Computer Science"];

const TeacherDashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedStudent, setSelectedStudent] = useState<typeof mockStudents[0] | null>(null);
  const [marks, setMarks] = useState<Record<string, number>>({});

  useEffect(() => {
    // Check if logged in as teacher
    const userRole = localStorage.getItem("userRole");
    if (userRole !== "teacher") {
      navigate("/login");
    }
    
    // Initialize marks with zero for all subjects
    const initialMarks: Record<string, number> = {};
    subjects.forEach(subject => {
      initialMarks[subject] = 0;
    });
    setMarks(initialMarks);
    
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  const handleMarkChange = (subject: string, value: string) => {
    // Ensure marks are between 0-100
    const numValue = Math.min(100, Math.max(0, parseInt(value) || 0));
    setMarks(prev => ({
      ...prev,
      [subject]: numValue
    }));
  };

  const handleSaveMarks = () => {
    if (!selectedStudent) {
      toast.error("Please select a student first");
      return;
    }
    
    toast.success(`Marks saved for ${selectedStudent.name}`, {
      description: "Student records have been updated"
    });
    
    // Reset selection after saving
    setSelectedStudent(null);
    
    // Reset marks to zero
    const resetMarks: Record<string, number> = {};
    subjects.forEach(subject => {
      resetMarks[subject] = 0;
    });
    setMarks(resetMarks);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-200 dark:border-gray-700 border-t-blue-500 dark:border-t-blue-400 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg font-sf text-gray-600 dark:text-gray-300">Loading dashboard...</p>
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
              <h2 className="text-xl font-sf font-semibold">Teacher Dashboard</h2>
              <span className="text-sm text-gray-500 dark:text-gray-400 font-sf">Spring 2023</span>
            </div>
            
            <div className="flex gap-3">
              <Button 
                onClick={() => {
                  localStorage.removeItem("userRole");
                  navigate("/login");
                }} 
                variant="outline" 
                size="sm"
              >
                Logout
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Student List */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {mockStudents.map((student) => (
                      <div
                        key={student.id}
                        className={`p-3 rounded-md cursor-pointer flex justify-between items-center transition-colors ${
                          selectedStudent?.id === student.id 
                            ? "bg-blue-100/10 dark:bg-blue-900/20 border border-blue-200/30 dark:border-blue-800/30" 
                            : "hover:bg-gray-100/10 dark:hover:bg-gray-800/20"
                        }`}
                        onClick={() => setSelectedStudent(student)}
                      >
                        <div>
                          <h3 className="font-medium">{student.name}</h3>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{student.rollNo}</p>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Mark Entry Section */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {selectedStudent ? `Enter Marks for ${selectedStudent.name}` : 'Select a student to enter marks'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedStudent ? (
                    <div className="space-y-6">
                      <div className="flex flex-col gap-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Student Details</p>
                        <div className="grid grid-cols-3 gap-4 p-3 rounded-md bg-gray-50/10 dark:bg-gray-900/20">
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Name</p>
                            <p>{selectedStudent.name}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Roll Number</p>
                            <p>{selectedStudent.rollNo}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
                            <p>{selectedStudent.email}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Enter Marks (0-100)</p>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Subject</TableHead>
                              <TableHead>Marks</TableHead>
                              <TableHead>Grade</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {subjects.map((subject) => (
                              <TableRow key={subject}>
                                <TableCell>{subject}</TableCell>
                                <TableCell>
                                  <Input
                                    type="number"
                                    min="0"
                                    max="100"
                                    value={marks[subject] || 0}
                                    onChange={(e) => handleMarkChange(subject, e.target.value)}
                                    className="w-24"
                                  />
                                </TableCell>
                                <TableCell>
                                  {marks[subject] >= 90 ? 'A' : 
                                   marks[subject] >= 80 ? 'B' : 
                                   marks[subject] >= 70 ? 'C' : 
                                   marks[subject] >= 60 ? 'D' : 'F'}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                        
                        <div className="mt-6 flex justify-end">
                          <Button onClick={handleSaveMarks}>Save Marks</Button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                      <p>Please select a student from the list to enter marks</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeacherDashboard;
