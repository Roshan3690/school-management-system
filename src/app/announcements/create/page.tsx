"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Megaphone } from "lucide-react";
import Link from "next/link";

export default function CreateAnnouncementPage() {
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
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Announcement Created!</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The announcement has been successfully published to the selected audience.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none"
          >
            Create Another
          </button>
          <button
            onClick={() => router.push("/announcements")}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
          >
            Back to Announcements
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Create Announcement</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Draft and publish a new official notice or communication.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="p-6 md:p-8 space-y-8">
          
          <div className="flex items-center justify-center p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg">
            <Megaphone className="h-10 w-10 text-blue-500 mr-4" />
            <div>
              <h3 className="text-blue-800 dark:text-blue-300 font-medium">Important Note</h3>
              <p className="text-sm text-blue-600 dark:text-blue-400">Announcements will be visible immediately upon publishing to the selected target audience.</p>
            </div>
          </div>
          
          {/* Details Section */}
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white mb-4">Announcement Details</h3>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Announcement Title</label>
                <div className="mt-1">
                  <input required type="text" name="title" id="title" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border" />
                </div>
              </div>
              
              <div className="sm:col-span-6">
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Announcement Content</label>
                <div className="mt-1">
                  <textarea required id="content" name="content" rows={6} className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700" />

          {/* Configuration */}
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white mb-4">Publishing Options</h3>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Target Audience</label>
                <div className="mt-1">
                  <select required id="targetAudience" name="targetAudience" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border">
                    <option value="">Select Audience</option>
                    <option value="All Students">All Students</option>
                    <option value="All Teachers">All Teachers</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 11 Science">Class 11 Science</option>
                    <option value="Class 11 Commerce">Class 11 Commerce</option>
                    <option value="Class 12 Science">Class 12 Science</option>
                    <option value="Class 12 Commerce">Class 12 Commerce</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="priority" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Priority</label>
                <div className="mt-1">
                  <select required id="priority" name="priority" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border">
                    <option value="Normal">Normal</option>
                    <option value="Important">Important</option>
                    <option value="Urgent">Urgent</option>
                  </select>
                </div>
              </div>
              
              <div className="sm:col-span-3">
                <label htmlFor="publishDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Publish Date (Optional)</label>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  <input type="date" id="publishDate" name="publishDate" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border" />
                  <p className="mt-1">Leave empty to publish immediately.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-right sm:px-6">
          <Link
            href="/announcements"
            className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-3"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Publish Announcement
          </button>
        </div>
      </form>
    </div>
  );
}
