"use client";

import { useState } from "react";
import { CheckCircle2, School, GraduationCap, Globe, Save } from "lucide-react";
import Link from "next/link";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("school");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">School Settings</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Manage application-wide configurations and school details.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        
        {/* Settings Navigation */}
        <div className="w-full md:w-64 bg-gray-50 dark:bg-gray-900/50 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 p-4">
          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab("school")}
              className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === "school" 
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400" 
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <School className={`flex-shrink-0 h-5 w-5 mr-3 ${activeTab === "school" ? "text-blue-700 dark:text-blue-400" : "text-gray-400"}`} />
              School Information
            </button>
            <button
              onClick={() => setActiveTab("academic")}
              className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === "academic" 
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400" 
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <GraduationCap className={`flex-shrink-0 h-5 w-5 mr-3 ${activeTab === "academic" ? "text-blue-700 dark:text-blue-400" : "text-gray-400"}`} />
              Academic Settings
            </button>
            <button
              onClick={() => setActiveTab("general")}
              className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === "general" 
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400" 
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <Globe className={`flex-shrink-0 h-5 w-5 mr-3 ${activeTab === "general" ? "text-blue-700 dark:text-blue-400" : "text-gray-400"}`} />
              General Settings
            </button>
          </nav>
        </div>

        {/* Settings Content */}
        <div className="flex-1 p-6 md:p-8 relative">
          
          {isSubmitted && (
            <div className="absolute top-4 right-4 z-10 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-3 flex items-center shadow-md animate-fade-in-out">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-sm font-medium text-green-800 dark:text-green-400">Settings saved successfully</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="h-full flex flex-col">
            
            <div className="flex-1">
              {activeTab === "school" && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white">School Information</h2>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Update your institution's core details and contact info.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 border-t border-gray-200 dark:border-gray-700 pt-6">
                    <div className="sm:col-span-6">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">School Name</label>
                      <input type="text" defaultValue="EduSphere International School" className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border" />
                    </div>
                    
                    <div className="sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                      <input type="email" defaultValue="admin@edusphere.edu.in" className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border" />
                    </div>
                    
                    <div className="sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Contact Number</label>
                      <input type="text" defaultValue="+91 9876543210" className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border" />
                    </div>
                    
                    <div className="sm:col-span-6">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Address</label>
                      <textarea rows={3} defaultValue="123 Education Boulevard, Knowledge Park, City 400001" className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2" />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "academic" && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white">Academic Settings</h2>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Configure academic years, classes, and streams.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 border-t border-gray-200 dark:border-gray-700 pt-6">
                    <div className="sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Current Academic Year</label>
                      <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border">
                        <option>2025-2026</option>
                        <option selected>2026-2027</option>
                        <option>2027-2028</option>
                      </select>
                    </div>

                    <div className="sm:col-span-6">
                      <fieldset>
                        <legend className="text-sm font-medium text-gray-900 dark:text-white">Supported Classes & Streams</legend>
                        <div className="mt-4 space-y-4 bg-gray-50 dark:bg-gray-900/30 p-4 rounded-md border border-gray-200 dark:border-gray-700">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input checked disabled type="checkbox" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded cursor-not-allowed" />
                            </div>
                            <div className="ml-3 text-sm">
                              <label className="font-medium text-gray-700 dark:text-gray-300">Class 9 (General)</label>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input checked disabled type="checkbox" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded cursor-not-allowed" />
                            </div>
                            <div className="ml-3 text-sm">
                              <label className="font-medium text-gray-700 dark:text-gray-300">Class 10 (General)</label>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input checked disabled type="checkbox" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded cursor-not-allowed" />
                            </div>
                            <div className="ml-3 text-sm">
                              <label className="font-medium text-gray-700 dark:text-gray-300">Class 11 (Science & Commerce)</label>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input checked disabled type="checkbox" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded cursor-not-allowed" />
                            </div>
                            <div className="ml-3 text-sm">
                              <label className="font-medium text-gray-700 dark:text-gray-300">Class 12 (Science & Commerce)</label>
                            </div>
                          </div>
                        </div>
                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Structural changes to supported classes require system migration.</p>
                      </fieldset>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "general" && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white">General Settings</h2>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Localization and display preferences.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 border-t border-gray-200 dark:border-gray-700 pt-6">
                    <div className="sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Date Format</label>
                      <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border">
                        <option>MM/DD/YYYY</option>
                        <option selected>DD/MM/YYYY</option>
                        <option>YYYY-MM-DD</option>
                      </select>
                    </div>

                    <div className="sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Time Format</label>
                      <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border">
                        <option>12-hour (AM/PM)</option>
                        <option selected>24-hour</option>
                      </select>
                    </div>

                    <div className="sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Default Language</label>
                      <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border">
                        <option selected>English (US)</option>
                        <option>English (UK)</option>
                        <option>Hindi</option>
                        <option>Gujarati</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Save className="-ml-1 mr-2 h-4 w-4" />
                Save Changes
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}
