"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Filter, Plus } from "lucide-react";
import { mockSubjects } from "@/lib/mockData";
import { SubjectCard } from "@/components/subjects/SubjectCard";

export default function SubjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [classFilter, setClassFilter] = useState("All");
  const [streamFilter, setStreamFilter] = useState("All");

  const filteredSubjects = mockSubjects.filter((subject) => {
    const matchesSearch = 
      subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.code.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesClass = classFilter === "All" || subject.classLevel === classFilter;
    const matchesStream = streamFilter === "All" || subject.stream === streamFilter;
    
    return matchesSearch && matchesClass && matchesStream;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Academic Subjects</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Manage curriculum subjects across all classes and streams.
          </p>
        </div>
        <Link
          href="/subjects/add"
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Plus className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Add Subject
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Subjects</p>
        <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">{mockSubjects.length}</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 flex flex-col xl:flex-row gap-4 items-start xl:items-center justify-between">
        <div className="w-full xl:max-w-md relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border"
            placeholder="Search by name or code..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="w-full xl:w-auto flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4">
          <div className="flex items-center w-full sm:w-auto">
            <Filter className="h-4 w-4 text-gray-500 hidden sm:block mr-2" />
            <select
              className="block w-full sm:w-auto pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border"
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
            >
              <option value="All">All Classes</option>
              <option value="9">Class 9</option>
              <option value="10">Class 10</option>
              <option value="11">Class 11</option>
              <option value="12">Class 12</option>
            </select>
          </div>

          <div className="flex items-center w-full sm:w-auto">
            <select
              className="block w-full sm:w-auto pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border disabled:opacity-50"
              value={streamFilter}
              onChange={(e) => setStreamFilter(e.target.value)}
              disabled={classFilter === "9" || classFilter === "10"}
            >
              <option value="All">All Streams</option>
              <option value="General">General</option>
              <option value="Science">Science</option>
              <option value="Commerce">Commerce</option>
            </select>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-700 dark:text-gray-300">
        Showing <span className="font-semibold">{filteredSubjects.length}</span> {filteredSubjects.length === 1 ? 'subject' : 'subjects'}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredSubjects.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
        {filteredSubjects.length === 0 && (
          <div className="col-span-full py-12 text-center bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400">No subjects found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
