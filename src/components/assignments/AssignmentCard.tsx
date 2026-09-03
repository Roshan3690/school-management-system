import Link from "next/link";
import { BookOpen, Calendar, Users } from "lucide-react";
import { Assignment } from "@/types/assignment";
import { AssignmentStatusBadge } from "./AssignmentStatusBadge";

interface AssignmentCardProps {
  assignment: Assignment;
}

export function AssignmentCard({ assignment }: AssignmentCardProps) {
  return (
    <Link href={`/assignments/${assignment.id}`} className="block h-full group">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 flex flex-col h-full hover:shadow-md transition-all relative overflow-hidden">
        {/* Left Color Bar based on status */}
        <div className={`absolute top-0 left-0 bottom-0 w-1 ${
          assignment.status === 'Active' ? 'bg-blue-500' :
          assignment.status === 'Completed' ? 'bg-green-500' :
          assignment.status === 'Upcoming' ? 'bg-amber-500' :
          'bg-red-500'
        }`} />
        
        <div className="flex justify-between items-start mb-3 pl-2">
          <AssignmentStatusBadge status={assignment.status} />
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
            Class {assignment.classLevel} {assignment.section ? `Sec ${assignment.section}` : ''}
          </span>
        </div>
        
        <div className="pl-2 mb-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 mb-1">
            {assignment.title}
          </h3>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <BookOpen className="h-3.5 w-3.5 mr-1.5" />
            {assignment.subject}
          </div>
        </div>
        
        <div className="mt-auto pl-2 space-y-3 pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-500 dark:text-gray-400">
              <Calendar className="h-4 w-4 mr-1.5" />
              Due Date
            </div>
            <span className={`font-medium ${assignment.status === 'Overdue' ? 'text-red-600 dark:text-red-400' : 'text-gray-900 dark:text-gray-300'}`}>
              {assignment.dueDate}
            </span>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-500 dark:text-gray-400">
              <Users className="h-4 w-4 mr-1.5" />
              Submissions
            </div>
            <span className="font-medium text-gray-900 dark:text-gray-300">
              {assignment.submittedCount || 0} / {assignment.totalStudents || 0}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
