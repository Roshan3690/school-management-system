import Link from "next/link";
import { ArrowLeft, BookOpen, User } from "lucide-react";
import { mockSubjects, mockTeachers } from "@/lib/mockData";

export default async function SubjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const subject = mockSubjects.find((s) => s.id === id);

  if (!subject) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Subject not found</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">The subject you are looking for does not exist.</p>
        <Link
          href="/subjects"
          className="inline-flex items-center text-blue-600 hover:text-blue-500"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Subjects
        </Link>
      </div>
    );
  }

  const teacher = mockTeachers.find((t) => t.teacherId === subject.teacherId);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        <Link
          href="/subjects"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Subjects
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden relative">
        <div className="px-4 py-8 sm:px-10 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-3 rounded-xl border border-blue-200 dark:border-blue-800/50">
              <BookOpen className="h-8 w-8" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">
                  {subject.code}
                </span>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">
                  Class {subject.classLevel}
                </span>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">
                  {subject.stream}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                {subject.name}
              </h1>
            </div>
          </div>
        </div>
        
        <div className="px-4 py-6 sm:px-10 bg-gray-50 dark:bg-gray-900/30">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Assigned Teacher
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center">
                <User className="h-6 w-6 text-gray-400 mr-4" />
                <div>
                  <p className="text-base font-medium text-gray-900 dark:text-white">
                    {teacher ? `${teacher.firstName} ${teacher.lastName}` : (subject.teacherId || "No teacher assigned")}
                  </p>
                  {teacher && (
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      ID: {teacher.teacherId} | Primary Subject: {teacher.primarySubject}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Subject Description
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 min-h-[100px]">
                <p className="text-gray-700 dark:text-gray-300">
                  {subject.description || "No description available for this subject."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
