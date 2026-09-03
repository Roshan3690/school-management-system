"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Filter, Plus } from "lucide-react";
import { mockAnnouncements } from "@/lib/mockData";
import { AnnouncementCard } from "@/components/announcements/AnnouncementCard";

export default function AnnouncementsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [audienceFilter, setAudienceFilter] = useState("All");

  const filteredAnnouncements = mockAnnouncements.filter((announcement) => {
    const matchesSearch = 
      announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      announcement.content.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesPriority = priorityFilter === "All" || announcement.priority === priorityFilter;
    const matchesAudience = audienceFilter === "All" || announcement.targetAudience === audienceFilter;
    
    return matchesSearch && matchesPriority && matchesAudience;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Announcements</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Publish and manage official school notices and communications.
          </p>
        </div>
        <Link
          href="/announcements/create"
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Plus className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Create Announcement
        </Link>
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
            placeholder="Search announcements..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="w-full xl:w-auto flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4">
          <div className="flex items-center w-full sm:w-auto">
            <Filter className="h-4 w-4 text-gray-500 hidden sm:block mr-2" />
            <select
              className="block w-full sm:w-auto pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border"
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
            >
              <option value="All">All Priorities</option>
              <option value="Normal">Normal</option>
              <option value="Important">Important</option>
              <option value="Urgent">Urgent</option>
            </select>
          </div>

          <div className="flex items-center w-full sm:w-auto">
            <select
              className="block w-full sm:w-auto pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border"
              value={audienceFilter}
              onChange={(e) => setAudienceFilter(e.target.value)}
            >
              <option value="All">All Audiences</option>
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
      </div>

      <div className="text-sm text-gray-700 dark:text-gray-300">
        Showing <span className="font-semibold">{filteredAnnouncements.length}</span> {filteredAnnouncements.length === 1 ? 'announcement' : 'announcements'}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAnnouncements.map((announcement) => (
          <AnnouncementCard key={announcement.id} announcement={announcement} />
        ))}
        {filteredAnnouncements.length === 0 && (
          <div className="col-span-full py-12 text-center bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400">No announcements found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
