import Link from "next/link";
import { ArrowLeft, BookOpen, User, CheckCircle2, XCircle, Award } from "lucide-react";
import { mockResults, mockStudents, mockExams } from "@/lib/mockData";

export default async function ResultDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const result = mockResults.find((r) => r.id === id);

  if (!result) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Result not found</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">The student result you are looking for does not exist.</p>
        <Link
          href="/results"
          className="inline-flex items-center text-blue-600 hover:text-blue-500"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Results
        </Link>
      </div>
    );
  }

  const student = mockStudents.find((s) => s.studentId === result.studentId);
  const exam = mockExams.find((e) => e.id === result.examId);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        <Link
          href="/results"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Results
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden relative">
        <div className={`absolute top-0 left-0 right-0 h-1.5 ${
          result.status === 'Pass' ? 'bg-green-500' : 'bg-red-500'
        }`} />

        <div className="px-4 py-8 sm:px-10 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-sm">
                <User className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {student ? `${student.firstName} ${student.lastName}` : result.studentId}
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  ID: {result.studentId} | Class {student?.class || "Unknown"} {student?.stream ? `(${student.stream})` : ""}
                </p>
              </div>
            </div>
            
            <div className="text-center md:text-right bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Final Status</p>
              {result.status === 'Pass' ? (
                <div className="flex items-center justify-center md:justify-end text-green-600 dark:text-green-400">
                  <CheckCircle2 className="h-6 w-6 mr-2" />
                  <span className="text-2xl font-bold">PASS</span>
                </div>
              ) : (
                <div className="flex items-center justify-center md:justify-end text-red-600 dark:text-red-400">
                  <XCircle className="h-6 w-6 mr-2" />
                  <span className="text-2xl font-bold">FAIL</span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="px-4 py-8 sm:px-10 bg-gray-50 dark:bg-gray-900/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                  Examination Details
                </h3>
                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-4 pb-4 border-b border-gray-100 dark:border-gray-700">
                    <BookOpen className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Exam Name</p>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">{exam?.name || "Unknown Exam"}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4 pb-4 border-b border-gray-100 dark:border-gray-700">
                    <BookOpen className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Subject</p>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">{exam?.subject || "Unknown Subject"}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-end mt-2">
                    <Link href={`/exams/${result.examId}`} className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
                      View Exam Details →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                  Score Breakdown
                </h3>
                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 space-y-5">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-500 dark:text-gray-400">Marks Obtained</span>
                      <span className="font-semibold text-gray-900 dark:text-white">{result.marksObtained} / {result.totalMarks}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${result.status === 'Pass' ? 'bg-green-500' : 'bg-red-500'}`} 
                        style={{ width: `${Math.min(100, Math.max(0, result.percentage))}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-y border-gray-100 dark:border-gray-700">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">Percentage</span>
                    <span className="text-xl font-bold text-gray-900 dark:text-white">{result.percentage.toFixed(2)}%</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">Overall Grade</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-md text-base font-bold bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-100 dark:border-blue-800">
                      <Award className="h-4 w-4 mr-2" />
                      {result.grade}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
