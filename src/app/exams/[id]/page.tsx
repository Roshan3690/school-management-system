import Link from "next/link";
import { ArrowLeft, BookOpen, Calendar, Clock, Target, User } from "lucide-react";
import { mockExams, mockTeachers } from "@/lib/mockData";
import { ExamStatusBadge } from "@/components/exams/ExamStatusBadge";

export default async function ExamDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const exam = mockExams.find((e) => e.id === id);

  if (!exam) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Exam not found</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">The examination you are looking for does not exist.</p>
        <Link
          href="/exams"
          className="inline-flex items-center text-blue-600 hover:text-blue-500"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Examinations
        </Link>
      </div>
    );
  }

  const examiner = mockTeachers.find((t) => t.teacherId === exam.examinerId);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        <Link
          href="/exams"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Examinations
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden relative">
        <div className={`absolute top-0 left-0 right-0 h-1.5 ${
          exam.status === 'Ongoing' ? 'bg-blue-500' :
          exam.status === 'Completed' ? 'bg-green-500' :
          'bg-amber-500'
        }`} />

        <div className="px-4 py-8 sm:px-10 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
            <div>
              <div className="flex items-center mb-2 gap-3">
                <ExamStatusBadge status={exam.status} />
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                  Class {exam.classLevel} {exam.section ? `Sec ${exam.section}` : ''}
                </span>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                  {exam.stream}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-2">
                {exam.name}
              </h1>
              <div className="flex items-center mt-3 text-sm text-gray-500 dark:text-gray-400">
                <BookOpen className="h-4 w-4 mr-1.5" />
                {exam.subject}
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
              <User className="h-4 w-4 text-gray-400" />
              <span>Examiner: <span className="font-medium text-gray-900 dark:text-white">{examiner ? `${examiner.firstName} ${examiner.lastName}` : exam.examinerId}</span></span>
            </div>
          </div>
        </div>
        
        <div className="px-4 py-6 sm:px-8 bg-gray-50 dark:bg-gray-900/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Schedule Details
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 space-y-4">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 mr-3 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Date</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{exam.examDate}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Time & Duration</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {exam.startTime} (Duration: {exam.duration})
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Assessment Details
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 space-y-4 h-[calc(100%-2rem)]">
                <div className="flex items-start">
                  <Target className="h-5 w-5 mr-3 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Total Marks</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{exam.totalMarks}</p>
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
