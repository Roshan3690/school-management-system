import Link from "next/link";
import { ArrowLeft, BookOpen, Calendar, Clock, Users, User, AlignLeft } from "lucide-react";
import { mockAssignments, mockTeachers } from "@/lib/mockData";
import { AssignmentStatusBadge } from "@/components/assignments/AssignmentStatusBadge";

export default async function AssignmentDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const assignment = mockAssignments.find((a) => a.id === id);

  if (!assignment) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Assignment not found</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">The assignment you are looking for does not exist.</p>
        <Link
          href="/assignments"
          className="inline-flex items-center text-blue-600 hover:text-blue-500"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Assignments
        </Link>
      </div>
    );
  }

  const teacher = mockTeachers.find((t) => t.teacherId === assignment.teacherId);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        <Link
          href="/assignments"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Assignments
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="px-4 py-6 sm:px-8 border-b border-gray-200 dark:border-gray-700 relative">
          {/* Top Decorative Border */}
          <div className={`absolute top-0 left-0 right-0 h-1 ${
            assignment.status === 'Active' ? 'bg-blue-500' :
            assignment.status === 'Completed' ? 'bg-green-500' :
            assignment.status === 'Upcoming' ? 'bg-amber-500' :
            'bg-red-500'
          }`} />

          <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
            <div>
              <div className="flex items-center mb-2 gap-3">
                <AssignmentStatusBadge status={assignment.status} />
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                  Class {assignment.classLevel} {assignment.section ? `Sec ${assignment.section}` : ''}
                </span>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                  {assignment.stream}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-2">
                {assignment.title}
              </h1>
              <div className="flex items-center mt-3 text-sm text-gray-500 dark:text-gray-400">
                <BookOpen className="h-4 w-4 mr-1.5" />
                {assignment.subject}
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
              <User className="h-4 w-4 text-gray-400" />
              <span>Assigned by: <span className="font-medium text-gray-900 dark:text-white">{teacher ? `${teacher.firstName} ${teacher.lastName}` : assignment.teacherId}</span></span>
            </div>
          </div>
        </div>
        
        <div className="px-4 py-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center mb-3">
                  <AlignLeft className="h-5 w-5 mr-2 text-gray-400" />
                  Description / Instructions
                </h3>
                <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                  <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                    {assignment.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-900/50 p-5 rounded-lg border border-gray-100 dark:border-gray-700 space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                    Timeline
                  </h4>
                  <div className="space-y-3 mt-2">
                    <div className="flex items-start">
                      <Calendar className="h-4 w-4 mr-2 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Assigned Date</p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{assignment.assignedDate}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-4 w-4 mr-2 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Due Date</p>
                        <p className={`text-sm font-medium ${assignment.status === 'Overdue' ? 'text-red-600 dark:text-red-400' : 'text-gray-900 dark:text-white'}`}>
                          {assignment.dueDate}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                    Submissions
                  </h4>
                  <div className="flex items-start mt-2">
                    <Users className="h-4 w-4 mr-2 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {assignment.submittedCount || 0} / {assignment.totalStudents || 0}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Students Submitted</p>
                    </div>
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
