import Link from "next/link";
import { Users, BookOpen, Layers } from "lucide-react";
import { SchoolClass } from "@/types/schoolClass";

interface ClassCardProps {
  schoolClass: SchoolClass;
}

export function ClassCard({ schoolClass }: ClassCardProps) {
  return (
    <Link 
      href={`/classes/${schoolClass.id}`}
      className="block group"
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow h-full flex flex-col relative overflow-hidden">
        {/* Top Decorative Border */}
        <div className={`absolute top-0 left-0 right-0 h-1 ${
          schoolClass.stream === 'Science' ? 'bg-blue-500' :
          schoolClass.stream === 'Commerce' ? 'bg-purple-500' :
          'bg-emerald-500'
        }`} />

        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Class {schoolClass.classLevel}
            </h2>
            <div className="flex items-center mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              <BookOpen className="h-4 w-4 mr-1.5" />
              {schoolClass.stream}
            </div>
          </div>
        </div>

        <div className="mt-auto space-y-3 pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <Layers className="h-4 w-4 mr-2" />
              Sections
            </div>
            <span className="font-semibold text-gray-900 dark:text-gray-200">{schoolClass.sections.length}</span>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <Users className="h-4 w-4 mr-2" />
              Students
            </div>
            <span className="font-semibold text-gray-900 dark:text-gray-200">{schoolClass.totalStudents}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
