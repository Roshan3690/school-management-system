import Link from "next/link";
import { ArrowLeft, User } from "lucide-react";
import { mockTeachers } from "@/lib/mockData";
import { TeacherStatusBadge } from "@/components/teachers/TeacherStatusBadge";

export default async function TeacherDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const teacher = mockTeachers.find((t) => t.id === id);

  if (!teacher) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Teacher not found</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">The teacher you are looking for does not exist.</p>
        <Link
          href="/teachers"
          className="inline-flex items-center text-blue-600 hover:text-blue-500"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Teachers
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        <Link
          href="/teachers"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Teachers
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="px-4 py-5 sm:px-6 bg-gray-50 dark:bg-gray-900/50 flex flex-col sm:flex-row items-center justify-between border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="h-16 w-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center border-2 border-white dark:border-gray-800 shadow-sm">
              <User className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl leading-6 font-bold text-gray-900 dark:text-white">
                {teacher.firstName} {teacher.lastName}
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
                {teacher.teacherId} | {teacher.primarySubject}
              </p>
            </div>
          </div>
          <div className="mt-4 sm:mt-0">
            <TeacherStatusBadge status={teacher.status} />
          </div>
        </div>
        
        <div className="px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200 dark:sm:divide-gray-700">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Primary Subject</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                {teacher.primarySubject}
              </dd>
            </div>
            {teacher.additionalSubject && (
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Additional Subject</dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                  {teacher.additionalSubject}
                </dd>
              </div>
            )}
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Qualification</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                {teacher.qualification}
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Joining Date</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                {teacher.joiningDate}
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-gray-50 dark:bg-gray-800/50">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Contact Number</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                {teacher.contactNumber}
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-gray-50 dark:bg-gray-800/50">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Email Address</dt>
              <dd className="mt-1 text-sm text-blue-600 dark:text-blue-400 sm:mt-0 sm:col-span-2">
                <a href={`mailto:${teacher.email}`}>{teacher.email}</a>
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Classes Assigned</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                <ul className="list-disc pl-5 space-y-1">
                  {teacher.assignedClasses.map((assignedClass, index) => (
                    <li key={index}>{assignedClass}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
