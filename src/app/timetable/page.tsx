"use client";

import { useState } from "react";
import { Filter, Calendar, Clock, BookOpen, User, Plus, X, CheckCircle2 } from "lucide-react";
import { mockTimetable, mockTeachers } from "@/lib/mockData";
import { TimetableEntry } from "@/types/timetable";

export default function TimetablePage() {
  const [classFilter, setClassFilter] = useState("9");
  const [streamFilter, setStreamFilter] = useState("General");
  const [sectionFilter, setSectionFilter] = useState("A");
  
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Filter timetable for currently selected class/stream/section
  const currentTimetable = mockTimetable.filter(
    (entry) => 
      entry.classLevel === classFilter && 
      entry.stream === streamFilter && 
      entry.section === sectionFilter
  );

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  // Create a grid representation
  // We'll just group by day for a responsive layout rather than a strict 2D grid which is hard on mobile
  const timetableByDay: Record<string, TimetableEntry[]> = {};
  
  days.forEach(day => {
    timetableByDay[day] = currentTimetable
      .filter(entry => entry.day === day)
      .sort((a, b) => a.startTime.localeCompare(b.startTime));
  });

  const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newClass = e.target.value;
    setClassFilter(newClass);
    if (newClass === "9" || newClass === "10") {
      setStreamFilter("General");
    } else if (newClass === "11" || newClass === "12") {
      setStreamFilter("Science"); // Default back to Science
    }
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsAddModalOpen(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Class Timetable</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Manage weekly schedules for classes and sections.
          </p>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Plus className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Add Entry
        </button>
      </div>

      {/* Selectors */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4">
          <div className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">
            <Filter className="h-5 w-5 mr-2 text-gray-400" />
            Select Schedule:
          </div>
          
          <div className="flex items-center w-full sm:w-auto">
            <select
              className="block w-full sm:w-auto pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border"
              value={classFilter}
              onChange={handleClassChange}
            >
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
              <option value="General">General</option>
              <option value="Science">Science</option>
              <option value="Commerce">Commerce</option>
            </select>
          </div>

          <div className="flex items-center w-full sm:w-auto">
            <select
              className="block w-full sm:w-auto pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border"
              value={sectionFilter}
              onChange={(e) => setSectionFilter(e.target.value)}
            >
              <option value="A">Section A</option>
              <option value="B">Section B</option>
              <option value="C">Section C</option>
            </select>
          </div>
        </div>
      </div>

      {/* Timetable Display */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            Timetable: Class {classFilter} {streamFilter !== "General" ? streamFilter : ""} (Section {sectionFilter})
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {currentTimetable.length} sessions
          </span>
        </div>

        {currentTimetable.length === 0 ? (
          <div className="p-12 text-center">
            <Calendar className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No schedule found</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              There are no timetable entries for this class/section combination in the mock data.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto p-6">
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 min-w-[800px]">
              {days.map((day) => (
                <div key={day} className="flex flex-col">
                  <div className="text-center py-2 mb-4 bg-gray-100 dark:bg-gray-700 rounded-md font-bold text-gray-700 dark:text-gray-200">
                    {day}
                  </div>
                  
                  <div className="space-y-4">
                    {timetableByDay[day].length > 0 ? (
                      timetableByDay[day].map((entry) => {
                        const teacher = mockTeachers.find(t => t.teacherId === entry.teacherId);
                        return (
                          <div key={entry.id} className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-3 hover:shadow-md transition-shadow">
                            <div className="flex items-center text-xs text-blue-600 dark:text-blue-400 font-medium mb-1">
                              <Clock className="h-3 w-3 mr-1" />
                              {entry.startTime} - {entry.endTime}
                            </div>
                            <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-2 flex items-center">
                              <BookOpen className="h-3.5 w-3.5 mr-1.5 text-gray-500" />
                              {entry.subject}
                            </h4>
                            <div className="flex items-center text-xs text-gray-600 dark:text-gray-400">
                              <User className="h-3 w-3 mr-1" />
                              {teacher ? `${teacher.firstName} ${teacher.lastName}` : entry.teacherId}
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="text-center py-6 text-sm text-gray-400 dark:text-gray-500 italic border-2 border-dashed border-gray-100 dark:border-gray-700 rounded-lg">
                        No Classes
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Add Entry Modal (Frontend Only) */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={() => setIsAddModalOpen(false)}></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              {isSubmitted ? (
                <div className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <CheckCircle2 className="h-16 w-16 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Entry Added!</h3>
                  <p className="text-gray-500 mt-2">The timetable has been updated.</p>
                </div>
              ) : (
                <form onSubmit={handleAddSubmit}>
                  <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="flex justify-between items-center mb-5">
                      <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white" id="modal-title">
                        Add Timetable Entry
                      </h3>
                      <button type="button" onClick={() => setIsAddModalOpen(false)} className="text-gray-400 hover:text-gray-500">
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Day</label>
                          <select required className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border">
                            {days.map(day => <option key={day} value={day}>{day}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                          <input required type="text" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Start Time</label>
                          <input required type="time" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">End Time</label>
                          <input required type="time" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Teacher</label>
                        <select required className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border">
                          <option value="">Select Teacher</option>
                          {mockTeachers.map(t => <option key={t.id} value={t.teacherId}>{t.firstName} {t.lastName}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 px-4 py-3 sm:px-6 flex flex-row-reverse">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Save Entry
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsAddModalOpen(false)}
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
