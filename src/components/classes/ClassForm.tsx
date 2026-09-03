"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

export function ClassForm() {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [classLevel, setClassLevel] = useState("");
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
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Class Added!</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The class has been successfully created.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none"
          >
            Add Another
          </button>
          <button
            onClick={() => router.push("/classes")}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
          >
            Back to Classes
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="p-6 md:p-8 space-y-6">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white mb-4">Class Configuration</h3>
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
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
                  <option value="">Select Class</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
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

            <div className="sm:col-span-3">
              <label htmlFor="numberOfSections" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Number of Sections</label>
              <div className="mt-1">
                <input required type="number" min="1" max="10" name="numberOfSections" id="numberOfSections" defaultValue={1} className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-right sm:px-6">
        <button
          type="button"
          onClick={() => router.push("/classes")}
          className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-3"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Create Class
        </button>
      </div>
    </form>
  );
}
