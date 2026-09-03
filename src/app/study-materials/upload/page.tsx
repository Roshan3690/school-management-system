"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, UploadCloud } from "lucide-react";
import Link from "next/link";

export default function UploadMaterialPage() {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [classLevel, setClassLevel] = useState("9");
  const [stream, setStream] = useState("General");
  const [fileType, setFileType] = useState("PDF");

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
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Material Uploaded!</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The study material has been successfully added to the system.
          <br /><br />
          <span className="text-sm italic text-gray-500">Note: Real file storage will be connected later.</span>
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none"
          >
            Upload Another
          </button>
          <button
            onClick={() => router.push("/study-materials")}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
          >
            Back to Materials
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Upload Study Material</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Share notes, worksheets, and resources with students.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="p-6 md:p-8 space-y-8">
          
          {/* File Upload Section */}
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white mb-4">Material File</h3>
            <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md bg-gray-50 dark:bg-gray-900/30">
              <div className="space-y-1 text-center">
                <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600 dark:text-gray-400 justify-center">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-transparent rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                  >
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  PDF, DOCX, PPTX, or Image up to 10MB
                </p>
              </div>
            </div>
            <p className="mt-2 text-xs text-gray-500">This is a UI mockup. Real file uploading will be enabled once backend storage is connected.</p>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700" />

          {/* Details Section */}
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white mb-4">Material Details</h3>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Material Title</label>
                <div className="mt-1">
                  <input required type="text" name="title" id="title" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                <div className="mt-1">
                  <select required id="subject" name="subject" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border">
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
                <label htmlFor="fileType" className="block text-sm font-medium text-gray-700 dark:text-gray-300">File Type</label>
                <div className="mt-1">
                  <select 
                    required 
                    id="fileType" 
                    name="fileType" 
                    value={fileType}
                    onChange={(e) => setFileType(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border"
                  >
                    <option value="PDF">PDF Document</option>
                    <option value="DOCX">Word Document</option>
                    <option value="PPTX">PowerPoint Presentation</option>
                    <option value="Image">Image</option>
                  </select>
                </div>
              </div>
              
              <div className="sm:col-span-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                <div className="mt-1">
                  <textarea required id="description" name="description" rows={3} className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700" />

          {/* Target Audience */}
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white mb-4">Target Audience</h3>
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

              <div className="sm:col-span-2">
                <label htmlFor="section" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Section (Optional)</label>
                <div className="mt-1">
                  <select id="section" name="section" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border">
                    <option value="">All Sections</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-right sm:px-6">
          <Link
            href="/study-materials"
            className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-3"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Upload Material
          </button>
        </div>
      </form>
    </div>
  );
}
