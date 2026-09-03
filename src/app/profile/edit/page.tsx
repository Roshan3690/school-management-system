"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, User, Mail, Phone, Info } from "lucide-react";
import Link from "next/link";
import { mockCurrentUser } from "@/lib/mockData";

export default function EditProfilePage() {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: mockCurrentUser.firstName,
    lastName: mockCurrentUser.lastName,
    email: mockCurrentUser.email,
    phone: mockCurrentUser.phone,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Profile Updated!</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Your profile information has been successfully updated. (Frontend simulation only)
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => router.push("/profile")}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
          >
            Back to Profile
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Edit Profile</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Update your personal details and contact information.
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 flex items-start">
        <Info className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
        <p className="text-sm text-blue-700 dark:text-blue-300">
          This is a prototype UI. Profile changes will not be saved to a database. Role and status fields cannot be edited here.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="p-6 md:p-8 space-y-8">
          
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white mb-4 flex items-center">
              <User className="h-5 w-5 mr-2 text-gray-400" />
              Personal Details
            </h3>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
                <div className="mt-1">
                  <input 
                    required 
                    type="text" 
                    name="firstName" 
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border" 
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
                <div className="mt-1">
                  <input 
                    required 
                    type="text" 
                    name="lastName" 
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border" 
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700" />

          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white mb-4 flex items-center">
              <Mail className="h-5 w-5 mr-2 text-gray-400" />
              Contact Information
            </h3>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 text-gray-400" />
                  </div>
                  <input 
                    required 
                    type="email" 
                    name="email" 
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border" 
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-4 w-4 text-gray-400" />
                  </div>
                  <input 
                    required 
                    type="text" 
                    name="phone" 
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border" 
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700" />
          
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white mb-4">Uneditable Fields</h3>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 opacity-70">
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Role</label>
                <div className="mt-1">
                  <input disabled type="text" value={mockCurrentUser.role} className="bg-gray-100 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 rounded-md p-2 border cursor-not-allowed" />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Department</label>
                <div className="mt-1">
                  <input disabled type="text" value={mockCurrentUser.department || "N/A"} className="bg-gray-100 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 rounded-md p-2 border cursor-not-allowed" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-right sm:px-6">
          <Link
            href="/profile"
            className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-3"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
