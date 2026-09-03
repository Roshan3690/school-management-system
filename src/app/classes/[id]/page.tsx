import Link from "next/link";
import { ArrowLeft, Users, User, Layers } from "lucide-react";
import { mockClasses } from "@/lib/mockData";

export default async function ClassDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const schoolClass = mockClasses.find((c) => c.id === id);

  if (!schoolClass) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Class not found</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">The class you are looking for does not exist.</p>
        <Link
          href="/classes"
          className="inline-flex items-center text-blue-600 hover:text-blue-500"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Classes
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4">
        <Link
          href="/classes"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Classes
        </Link>
      </div>

      {/* Header Section */}
      <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
              Class {schoolClass.classLevel}
              <span className={`ml-3 px-3 py-1 text-sm font-medium rounded-full ${
                schoolClass.stream === 'Science' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                schoolClass.stream === 'Commerce' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400' :
                'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400'
              }`}>
                {schoolClass.stream}
              </span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Academic group overview and section details.
            </p>
          </div>
          
          <div className="flex gap-6">
            <div className="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-750 px-4 py-2 rounded-lg border border-gray-100 dark:border-gray-700">
              <span className="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold tracking-wider">Sections</span>
              <div className="flex items-center mt-1">
                <Layers className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-xl font-bold text-gray-900 dark:text-white">{schoolClass.sections.length}</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-750 px-4 py-2 rounded-lg border border-gray-100 dark:border-gray-700">
              <span className="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold tracking-wider">Students</span>
              <div className="flex items-center mt-1">
                <Users className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-xl font-bold text-gray-900 dark:text-white">{schoolClass.totalStudents}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sections List */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <Layers className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" />
          Sections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {schoolClass.sections.map((section) => (
            <div key={section.id} className="bg-white dark:bg-gray-800 shadow-sm rounded-xl border border-gray-200 dark:border-gray-700 p-6 flex flex-col h-full hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-gray-300 dark:bg-gray-600" />
              
              <div className="flex justify-between items-start mb-6 pl-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {section.name}
                </h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                  <Users className="h-3 w-3 mr-1" />
                  {section.studentCount} Students
                </span>
              </div>

              <div className="mt-auto pl-2 pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                    <User className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Class Teacher</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{section.classTeacher || "Not Assigned"}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
