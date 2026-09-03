import Link from "next/link";
import { Calendar, Clock, BookOpen, Target } from "lucide-react";
import { Exam } from "@/types/exam";
import { ExamStatusBadge } from "./ExamStatusBadge";

interface ExamCardProps {
  exam: Exam;
}

export function ExamCard({ exam }: ExamCardProps) {
  return (
    <Link href={`/exams/${exam.id}`} className="block h-full group">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 flex flex-col h-full hover:shadow-md transition-all relative overflow-hidden">
        {/* Left Color Bar based on status */}
        <div className={`absolute top-0 left-0 bottom-0 w-1 ${
          exam.status === 'Ongoing' ? 'bg-blue-500' :
          exam.status === 'Completed' ? 'bg-green-500' :
          'bg-amber-500'
        }`} />
        
        <div className="flex justify-between items-start mb-3 pl-2">
          <ExamStatusBadge status={exam.status} />
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
            Class {exam.classLevel} {exam.section ? `Sec ${exam.section}` : ''}
          </span>
        </div>
        
        <div className="pl-2 mb-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 mb-1">
            {exam.name}
          </h3>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <BookOpen className="h-3.5 w-3.5 mr-1.5" />
            {exam.subject}
          </div>
        </div>
        
        <div className="mt-auto pl-2 space-y-3 pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-500 dark:text-gray-400">
              <Calendar className="h-4 w-4 mr-1.5" />
              Date
            </div>
            <span className="font-medium text-gray-900 dark:text-gray-300">
              {exam.examDate}
            </span>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-500 dark:text-gray-400">
              <Clock className="h-4 w-4 mr-1.5" />
              Time
            </div>
            <span className="font-medium text-gray-900 dark:text-gray-300">
              {exam.startTime} ({exam.duration})
            </span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-500 dark:text-gray-400">
              <Target className="h-4 w-4 mr-1.5" />
              Total Marks
            </div>
            <span className="font-bold text-gray-900 dark:text-gray-300">
              {exam.totalMarks}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
