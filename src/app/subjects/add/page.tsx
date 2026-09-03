"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { mockTeachers } from "@/lib/mockData";

export default function AddSubjectPage() {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [classLevel, setClassLevel] = useState("9");
  const [stream, setStream] = useState("General");

  const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newClass = e.target.value;
    setClassLevel(newClass);
    if (newClass === "9" || newClass === "10") {
      setStream("General");
    } else if (newClass === "11" || newClass === "12") {
      setStream("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 text-center max-w-md mx-auto mt-10">
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="h-16 w-16 text-green-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Subject Added!</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The subject has been successfully added to the curriculum.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none"
          >
            Add Another
          </button>
          <button
            onClick={() => router.push("/subjects")}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
          >
            Back to Subjects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Add New Subject</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Create a new academic subject and assign a teacher.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="p-6 md:p-8 space-y-8">
          
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white mb-4">Subject Information</h3>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject Name</label>
                <div className="mt-1">
                  <input required type="text" name="name" id="name" placeholder="e.g., Mathematics" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="code" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject Code</label>
                <div className="mt-1">
                  <input required type="text" name="code" id="code" placeholder="e.g., MAT-10" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border" />
                </div>
              </div>
              
              <div className="sm:col-span-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description (Optional)</label>
                <div className="mt-1">
                  <textarea id="description" name="description" rows={3} className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700" />

          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white mb-4">Applicability & Assignment</h3>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-2">
                <label htmlFor="classLevel" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Class Level</label>
                <div className="mt-1">
                  <select 
                    required 
                    id="classLevel" 
                    name="classLevel" 
                    value={classLevel}
                    onChange={handleClassChange}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border"
                  >
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="stream" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Stream</label>
                <div className="mt-1">
                  <select 
                    required 
                    id="stream" 
                    name="stream" 
                    value={stream}
                    onChange={(e) => setStream(e.target.value)}
                    disabled={classLevel === "9" || classLevel === "10"}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border disabled:opacity-50 disabled:bg-gray-100 disabled:dark:bg-gray-800"
                  >
                    <option value="">Select Stream</option>
                    <option value="General">General</option>
                    <option value="Science">Science</option>
                    <option value="Commerce">Commerce</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="teacherId" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Assigned Teacher (Optional)</label>
                <div className="mt-1">
                  <select id="teacherId" name="teacherId" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border">
                    <option value="">No Teacher Assigned</option>
                    {mockTeachers.map(teacher => (
                      <option key={teacher.id} value={teacher.teacherId}>
                        {teacher.firstName} {teacher.lastName} ({teacher.primarySubject})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-right sm:px-6">
          <Link
            href="/subjects"
            className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-3"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add Subject
          </button>
        </div>
      </form>
    </div>
  );
}
