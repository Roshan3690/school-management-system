"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Filter, Plus } from "lucide-react";
import { mockTeachers } from "@/lib/mockData";
import { TeacherTable } from "@/components/teachers/TeacherTable";

export default function TeachersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  // Filter teachers based on search and filters
  const filteredTeachers = mockTeachers.filter((teacher) => {
    const matchesSearch = 
      teacher.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.teacherId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.email.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesSubject = subjectFilter === "All" || teacher.primarySubject === subjectFilter || teacher.additionalSubject === subjectFilter;
    const matchesStatus = statusFilter === "All" || teacher.status === statusFilter;
    
    return matchesSearch && matchesSubject && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Teachers</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Manage your school's teaching staff, view their details, and update records.
          </p>
        </div>
        <Link
          href="/teachers/add"
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Plus className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Add Teacher
        </Link>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          <div className="w-full lg:max-w-xs relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              name="search"
              id="search"
              className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border"
              placeholder="Search by name, ID, or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="w-full lg:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center w-full sm:w-auto">
              <Filter className="h-4 w-4 text-gray-500 hidden sm:block" />
              <span className="text-sm text-gray-700 dark:text-gray-300 mx-2 whitespace-nowrap hidden sm:block">Subject:</span>
              <select
                className="block w-full sm:w-auto pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border"
                value={subjectFilter}
                onChange={(e) => setSubjectFilter(e.target.value)}
              >
                <option value="All">All Subjects</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Biology">Biology</option>
                <option value="English">English</option>
                <option value="Gujarati">Gujarati</option>
                <option value="Economics">Economics</option>
                <option value="Accountancy">Accountancy</option>
                <option value="Business Studies">Business Studies</option>
                <option value="Computer Science">Computer Science</option>
              </select>
            </div>

            <div className="flex items-center w-full sm:w-auto">
              <span className="text-sm text-gray-700 dark:text-gray-300 mr-2 whitespace-nowrap hidden sm:block">Status:</span>
              <select
                className="block w-full sm:w-auto pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="On Leave">On Leave</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="text-sm text-gray-700 dark:text-gray-300">
        Showing <span className="font-semibold">{filteredTeachers.length}</span> {filteredTeachers.length === 1 ? 'teacher' : 'teachers'}
      </div>

      {/* Table */}
      <TeacherTable teachers={filteredTeachers} />
    </div>
  );
}

