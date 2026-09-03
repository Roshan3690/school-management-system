import Link from "next/link";
import { BookOpen, User } from "lucide-react";
import { Subject } from "@/types/subject";
import { mockTeachers } from "@/lib/mockData";

interface SubjectCardProps {
  subject: Subject;
}

export function SubjectCard({ subject }: SubjectCardProps) {
  const teacher = mockTeachers.find((t) => t.teacherId === subject.teacherId);

  return (
    <Link href={`/subjects/${subject.id}`} className="block h-full group">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-5 flex flex-col h-full hover:shadow-md transition-all">
        <div className="flex justify-between items-start mb-3">
          <div className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 p-2 rounded-lg border border-blue-100 dark:border-blue-800/50">
            <BookOpen className="h-5 w-5" />
          </div>
          <span className="text-xs font-bold px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
            {subject.code}
          </span>
        </div>
        
        <div className="mb-4 flex-grow">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1 mb-1">
            {subject.name}
          </h3>
          <div className="flex items-center gap-2 mt-2 text-xs font-medium">
            <span className="text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              Class {subject.classLevel}
            </span>
            <span className="text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              {subject.stream}
            </span>
          </div>
        </div>
        
        <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <User className="h-4 w-4 mr-2" />
            <span className="truncate">
              {teacher ? `${teacher.firstName} ${teacher.lastName}` : (subject.teacherId || "Unassigned")}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
