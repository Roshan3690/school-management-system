"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

export function StudentForm() {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [studentClass, setStudentClass] = useState("");
  const [stream, setStream] = useState("General");

  const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newClass = e.target.value;
    setStudentClass(newClass);
    if (newClass === "9" || newClass === "10") {
      setStream("General");
    } else if (newClass === "11" || newClass === "12") {
      setStream("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 text-center max-w-md mx-auto mt-10">
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="h-16 w-16 text-green-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Student Added!</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The student has been successfully added to the system.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none"
          >
            Add Another
          </button>
          <button
            onClick={() => router.push("/students")}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
          >
            Back to Students
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

            <div className="sm:col-span-2">
              <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Student ID</label>
              <div className="mt-1">
                <input required type="text" name="studentId" id="studentId" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border" />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="class" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Class</label>
              <div className="mt-1">
                <select 
                  required 
                  id="class" 
                  name="class" 
                  value={studentClass}
                  onChange={handleClassChange}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border"
                >
                  <option value="">Select Class</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="section" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Section</label>
              <div className="mt-1">
                <select required id="section" name="section" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border">
                  <option value="">Select Section</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
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
                  disabled={studentClass === "9" || studentClass === "10"}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border disabled:opacity-50 disabled:bg-gray-100 disabled:dark:bg-gray-800"
                >
                  <option value="">Select Stream</option>
                  <option value="General">General</option>
                  <option value="Science">Science</option>
                  <option value="Commerce">Commerce</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Date of Birth</label>
              <div className="mt-1">
                <input required type="date" name="dob" id="dob" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Gender</label>
              <div className="mt-1">
                <select required id="gender" name="gender" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border">
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
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
              <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Student Contact Number</label>
              <div className="mt-1">
                <input type="text" name="contactNumber" id="contactNumber" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border" />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Parent/Guardian Name</label>
              <div className="mt-1">
                <input required type="text" name="parentName" id="parentName" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="parentContact" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Parent Contact Number</label>
              <div className="mt-1">
                <input required type="text" name="parentContact" id="parentContact" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-right sm:px-6">
        <button
          type="button"
          onClick={() => router.push("/students")}
          className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-3"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Save Student
        </button>
      </div>
    </form>
  );
}
