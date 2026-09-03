"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, XCircle, Clock, CheckSquare } from "lucide-react";
import { mockStudents } from "@/lib/mockData";
import { AttendanceStatus } from "@/types/attendance";

export default function AttendancePage() {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [classLevel, setClassLevel] = useState("9");
  const [section, setSection] = useState("A");

  // Get students for selected class and section
  const classStudents = mockStudents.filter(s => s.class === classLevel && s.section === section);
  
  // Local state for attendance, normally fetched from a backend
  const [attendance, setAttendance] = useState<Record<string, AttendanceStatus>>(
    classStudents.reduce((acc, student) => {
      acc[student.id] = "Unmarked";
      return acc;
    }, {} as Record<string, AttendanceStatus>)
  );

  const presentCount = Object.values(attendance).filter(status => status === "Present").length;
  const absentCount = Object.values(attendance).filter(status => status === "Absent").length;
  const lateCount = Object.values(attendance).filter(status => status === "Late").length;
  const totalMarked = presentCount + absentCount + lateCount;
  const totalStudents = classStudents.length;
  const percentage = totalStudents > 0 && totalMarked > 0 ? Math.round((presentCount / totalStudents) * 100) : 0;

  const handleStatusChange = (studentId: string, status: AttendanceStatus) => {
    setAttendance(prev => ({ ...prev, [studentId]: status }));
  };

  const markAllPresent = () => {
    const newAttendance = { ...attendance };
    classStudents.forEach(student => {
      if (newAttendance[student.id] === "Unmarked") {
        newAttendance[student.id] = "Present";
      }
    });
    setAttendance(newAttendance);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Attendance Management</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Record and track student attendance for classes and sections.
          </p>
        </div>
        <Link
          href="/attendance/history"
          className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          View History
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Date</label>
            <input
              type="date"
              id="date"
              className="block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border focus:ring-blue-500 focus:border-blue-500"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="classLevel" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Class</label>
            <select
              id="classLevel"
              className="block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border focus:ring-blue-500 focus:border-blue-500"
              value={classLevel}
              onChange={(e) => {
                setClassLevel(e.target.value);
                // Reset attendance on class change
                setAttendance({});
              }}
            >
              <option value="9">Class 9</option>
              <option value="10">Class 10</option>
              <option value="11">Class 11</option>
              <option value="12">Class 12</option>
            </select>
          </div>
          <div>
            <label htmlFor="section" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Section</label>
            <select
              id="section"
              className="block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border focus:ring-blue-500 focus:border-blue-500"
              value={section}
              onChange={(e) => {
                setSection(e.target.value);
                // Reset attendance on section change
                setAttendance({});
              }}
            >
              <option value="A">Section A</option>
              <option value="B">Section B</option>
              <option value="C">Section C</option>
            </select>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Students</p>
          <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">{totalStudents}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-green-200 dark:border-green-900/50 p-4">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Present</p>
          <p className="mt-1 text-2xl font-bold text-green-600 dark:text-green-400">{presentCount}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-red-200 dark:border-red-900/50 p-4">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Absent</p>
          <p className="mt-1 text-2xl font-bold text-red-600 dark:text-red-400">{absentCount}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-blue-200 dark:border-blue-900/50 p-4">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Attendance %</p>
          <p className="mt-1 text-2xl font-bold text-blue-600 dark:text-blue-400">{percentage}%</p>
        </div>
      </div>

      {/* Attendance List */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-900/50">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Student List ({totalMarked}/{totalStudents} marked)
          </h3>
          <button
            onClick={markAllPresent}
            disabled={totalStudents === 0}
            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <CheckSquare className="h-4 w-4 mr-1" />
            Mark All Present
          </button>
        </div>

        {classStudents.length === 0 ? (
          <div className="p-8 text-center text-gray-500 dark:text-gray-400">
            No students found for this class and section.
          </div>
        ) : (
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {classStudents.map((student) => {
              const status = attendance[student.id] || "Unmarked";
              return (
                <li key={student.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                      {student.firstName[0]}{student.lastName[0]}
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {student.firstName} {student.lastName}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{student.studentId}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 self-end sm:self-auto">
                    <button
                      onClick={() => handleStatusChange(student.id, "Present")}
                      className={`inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                        status === "Present"
                          ? "bg-green-100 text-green-800 border border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800"
                          : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
                      }`}
                    >
                      <CheckCircle2 className={`h-4 w-4 mr-1.5 ${status === "Present" ? "text-green-600 dark:text-green-400" : "text-gray-400"}`} />
                      Present
                    </button>
                    <button
                      onClick={() => handleStatusChange(student.id, "Absent")}
                      className={`inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                        status === "Absent"
                          ? "bg-red-100 text-red-800 border border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800"
                          : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
                      }`}
                    >
                      <XCircle className={`h-4 w-4 mr-1.5 ${status === "Absent" ? "text-red-600 dark:text-red-400" : "text-gray-400"}`} />
                      Absent
                    </button>
                    <button
                      onClick={() => handleStatusChange(student.id, "Late")}
                      className={`inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                        status === "Late"
                          ? "bg-amber-100 text-amber-800 border border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800"
                          : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
                      }`}
                    >
                      <Clock className={`h-4 w-4 mr-1.5 ${status === "Late" ? "text-amber-600 dark:text-amber-400" : "text-gray-400"}`} />
                      Late
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
