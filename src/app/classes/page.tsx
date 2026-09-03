import Link from "next/link";
import { Plus } from "lucide-react";
import { mockClasses } from "@/lib/mockData";
import { ClassCard } from "@/components/classes/ClassCard";

export default function ClassesPage() {
  const totalSections = mockClasses.reduce((acc, curr) => acc + curr.sections.length, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Classes & Sections</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Manage your school's academic structure, view classes, and organize sections.
          </p>
        </div>
        <Link
          href="/classes/add"
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Plus className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Add Class
        </Link>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Academic Groups</p>
            <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">{mockClasses.length}</p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Sections</p>
            <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">{totalSections}</p>
          </div>
        </div>
      </div>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockClasses.map((schoolClass) => (
          <ClassCard key={schoolClass.id} schoolClass={schoolClass} />
        ))}
      </div>
    </div>
  );
}

