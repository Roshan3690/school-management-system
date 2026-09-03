"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

export function TeacherForm() {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);

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
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Teacher Added!</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The teacher has been successfully added to the system.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none"
          >
            Add Another
          </button>
          <button
            onClick={() => router.push("/teachers")}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
          >
            Back to Teachers
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="p-6 md:p-8 space-y-6">
        
        {/* Basic Information */}
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white mb-4">Basic Information</h3>
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">First name</label>
              <div className="mt-1">
                <input required type="text" name="firstName" id="firstName" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Last name</label>
              <div className="mt-1">
                <input required type="text" name="lastName" id="lastName" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="teacherId" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Teacher ID</label>
              <div className="mt-1">
                <input required type="text" name="teacherId" id="teacherId" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="joiningDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Joining Date</label>
              <div className="mt-1">
                <input required type="date" name="joiningDate" id="joiningDate" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border" />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:block">
          <div className="py-5">
            <div className="border-t border-gray-200 dark:border-gray-700" />
          </div>
        </div>

        {/* Professional Information */}
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white mb-4">Professional Details</h3>
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="primarySubject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Primary Subject</label>
              <div className="mt-1">
                <select required id="primarySubject" name="primarySubject" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border">
                  <option value="">Select Subject</option>
                  <option>Mathematics</option>
                  <option>Physics</option>
                  <option>Chemistry</option>
                  <option>Biology</option>
                  <option>English</option>
                  <option>Gujarati</option>
                  <option>Economics</option>
                  <option>Accountancy</option>
                  <option>Business Studies</option>
                  <option>Computer Science</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="additionalSubject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Additional Subject (Optional)</label>
              <div className="mt-1">
                <select id="additionalSubject" name="additionalSubject" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border">
                  <option value="">Select Subject</option>
                  <option>Mathematics</option>
                  <option>Physics</option>
                  <option>Chemistry</option>
                  <option>Biology</option>
                  <option>English</option>
                  <option>Gujarati</option>
                  <option>Economics</option>
                  <option>Accountancy</option>
                  <option>Business Studies</option>
                  <option>Computer Science</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="qualification" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Qualification</label>
              <div className="mt-1">
                <input required type="text" name="qualification" id="qualification" placeholder="e.g. M.Sc. Mathematics, B.Ed." className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border" />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:block">
          <div className="py-5">
            <div className="border-t border-gray-200 dark:border-gray-700" />
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
              <div className="mt-1">
                <input required type="email" name="email" id="email" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Contact Number</label>
              <div className="mt-1">
                <input required type="text" name="contactNumber" id="contactNumber" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-right sm:px-6">
        <button
          type="button"
          onClick={() => router.push("/teachers")}
          className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-3"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Save Teacher
        </button>
      </div>
    </form>
  );
}
