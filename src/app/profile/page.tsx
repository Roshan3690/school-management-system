import Link from "next/link";
import { User, Mail, Phone, Calendar, Briefcase, Activity, Settings, Edit3 } from "lucide-react";
import { mockCurrentUser } from "@/lib/mockData";

export default function ProfilePage() {
  const user = mockCurrentUser;

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">User Profile</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Manage your personal and account information.
          </p>
        </div>
        <Link
          href="/profile/edit"
          className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Edit3 className="-ml-1 mr-2 h-4 w-4" aria-hidden="true" />
          Edit Profile
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden relative">
        <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-700"></div>
        
        <div className="px-6 sm:px-10 pb-8">
          <div className="relative flex justify-between items-end -mt-12 mb-6">
            <div className="h-24 w-24 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-md overflow-hidden">
              {user.avatarUrl ? (
                <img src={user.avatarUrl} alt={`${user.firstName} ${user.lastName}`} className="h-full w-full object-cover" />
              ) : (
                <div className="h-full w-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                  <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            
            <div className="flex space-x-3 pb-2">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                user.status === 'Active' 
                  ? 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800' 
                  : 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600'
              }`}>
                {user.status === 'Active' && <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></span>}
                {user.status}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800">
                {user.role}
              </span>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center mt-1">
              <Briefcase className="h-4 w-4 mr-1.5" />
              {user.department || "No Department"} | {user.role}
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-8 sm:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Personal Information */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4 flex items-center">
                <User className="h-4 w-4 mr-2" />
                Personal Information
              </h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1">
                    <User className="h-4 w-4 mr-2" />
                    Full Name
                  </div>
                  <div className="font-medium text-gray-900 dark:text-white ml-6">
                    {user.firstName} {user.lastName}
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Address
                  </div>
                  <div className="font-medium text-gray-900 dark:text-white ml-6">
                    {user.email}
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1">
                    <Phone className="h-4 w-4 mr-2" />
                    Phone Number
                  </div>
                  <div className="font-medium text-gray-900 dark:text-white ml-6">
                    {user.phone}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Account Information */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4 flex items-center">
                <Settings className="h-4 w-4 mr-2" />
                Account Information
              </h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1">
                    <Activity className="h-4 w-4 mr-2" />
                    Account Role
                  </div>
                  <div className="font-medium text-gray-900 dark:text-white ml-6">
                    {user.role}
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1">
                    <Briefcase className="h-4 w-4 mr-2" />
                    Department
                  </div>
                  <div className="font-medium text-gray-900 dark:text-white ml-6">
                    {user.department || "N/A"}
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    Joining Date
                  </div>
                  <div className="font-medium text-gray-900 dark:text-white ml-6">
                    {user.joiningDate}
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
