"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Calculator } from "lucide-react";
import Link from "next/link";
import { mockStudents, mockExams } from "@/lib/mockData";

export default function AddResultPage() {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [marksObtained, setMarksObtained] = useState<number | "">("");
  const [totalMarks, setTotalMarks] = useState<number | "">(100);

  const calculateResult = () => {
    if (marksObtained === "" || totalMarks === "" || totalMarks === 0) {
      return null;
    }
    
    const percentage = (Number(marksObtained) / Number(totalMarks)) * 100;
    let grade = "F";
    let status = "Fail";
    
    if (percentage >= 90) { grade = "A+"; status = "Pass"; }
    else if (percentage >= 80) { grade = "A"; status = "Pass"; }
    else if (percentage >= 70) { grade = "B"; status = "Pass"; }
    else if (percentage >= 60) { grade = "C"; status = "Pass"; }
    else if (percentage >= 50) { grade = "D"; status = "Pass"; }
    
    return { percentage, grade, status };
  };

  const calculated = calculateResult();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 text-center max-w-md mx-auto mt-10">
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="h-16 w-16 text-green-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Result Added!</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The student's examination result has been successfully recorded.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none"
          >
            Add Another
          </button>
          <button
            onClick={() => router.push("/results")}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
          >
            Back to Results
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Add Student Result</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Record examination scores and grades for a student.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="p-6 md:p-8 space-y-8">
          
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white mb-4">Student & Exam Information</h3>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Student</label>
                <div className="mt-1">
                  <select required id="studentId" name="studentId" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border">
                    <option value="">Select Student</option>
                    {mockStudents.map(student => (
                      <option key={student.id} value={student.studentId}>
                        {student.firstName} {student.lastName} (ID: {student.studentId}, Class: {student.class})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="examId" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Examination</label>
                <div className="mt-1">
                  <select required id="examId" name="examId" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border">
                    <option value="">Select Exam</option>
                    {mockExams.map(exam => (
                      <option key={exam.id} value={exam.id}>
                        {exam.name} - {exam.subject} (Class {exam.classLevel})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700" />

          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white mb-4">Marks Entry</h3>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="marksObtained" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Marks Obtained</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input 
                    required 
                    type="number" 
                    name="marksObtained" 
                    id="marksObtained"
                    min="0"
                    max={totalMarks || undefined}
                    value={marksObtained}
                    onChange={(e) => setMarksObtained(e.target.value === "" ? "" : Number(e.target.value))}
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border" 
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="totalMarks" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Total Marks</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input 
                    required 
                    type="number" 
                    name="totalMarks" 
                    id="totalMarks"
                    min="1"
                    value={totalMarks}
                    onChange={(e) => setTotalMarks(e.target.value === "" ? "" : Number(e.target.value))}
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border" 
                  />
                </div>
              </div>
            </div>

            {/* Live Calculation Preview */}
            <div className="mt-6 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-5 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center text-gray-700 dark:text-gray-300 font-medium mb-3">
                <Calculator className="h-5 w-5 mr-2 text-blue-500" />
                Live Calculation Preview
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Percentage</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {calculated ? `${calculated.percentage.toFixed(2)}%` : "--"}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Grade</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {calculated ? calculated.grade : "--"}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Status</p>
                  <p className={`text-lg font-semibold ${
                    calculated?.status === 'Pass' ? 'text-green-600 dark:text-green-400' :
                    calculated?.status === 'Fail' ? 'text-red-600 dark:text-red-400' :
                    'text-gray-900 dark:text-white'
                  }`}>
                    {calculated ? calculated.status : "--"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-right sm:px-6">
          <Link
            href="/results"
            className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-3"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={!calculated}
            className="bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            Save Result
          </button>
        </div>
      </form>
    </div>
  );
}
