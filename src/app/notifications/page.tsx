"use client";

import { useState } from "react";
import Link from "next/link";
import { Bell, Check, Filter, Info, BookOpen, AlertCircle, FileText, Megaphone, CalendarCheck, CheckCircle2 } from "lucide-react";
import { mockNotifications } from "@/lib/mockData";
import { Notification } from "@/types/notification";

import { useNotificationContext } from "@/contexts/NotificationContext";

export default function NotificationsPage() {
  const { notifications, unreadCount, markAsRead, markAllAsRead } = useNotificationContext();
  const [filter, setFilter] = useState("All");

  const filteredNotifications = notifications.filter(n => {
    if (filter === "All") return true;
    if (filter === "Unread") return !n.isRead;
    return n.category === filter;
  });

  const handleMarkAsRead = (id: string) => {
    markAsRead(id);
  };

  const handleMarkAllAsRead = () => {
    markAllAsRead();
  };

  const getIconForCategory = (category: string) => {
    switch(category) {
      case "Attendance": return <CalendarCheck className="h-5 w-5 text-purple-500" />;
      case "Assignment": return <BookOpen className="h-5 w-5 text-blue-500" />;
      case "Study Material": return <BookOpen className="h-5 w-5 text-indigo-500" />;
      case "Exam": return <FileText className="h-5 w-5 text-orange-500" />;
      case "Fee": return <AlertCircle className="h-5 w-5 text-red-500" />;
      case "Announcement": return <Megaphone className="h-5 w-5 text-green-500" />;
      default: return <Info className="h-5 w-5 text-gray-500" />;
    }
  };

  const formatTime = (isoString: string) => {
    const date = new Date(isoString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    
    // Simplistic formatting for UI purposes
    const diffInMins = Math.floor(diffInMs / (1000 * 60));
    if (diffInMins < 60) return `${diffInMins}m ago`;
    
    const diffInHours = Math.floor(diffInMins / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) return `${diffInDays}d ago`;
    
    return date.toLocaleDateString();
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            Notifications
            {unreadCount > 0 && (
              <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                {unreadCount} Unread
              </span>
            )}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Stay updated with the latest activities and alerts.
          </p>
        </div>
        <button
          onClick={handleMarkAllAsRead}
          disabled={unreadCount === 0}
          className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <CheckCircle2 className="-ml-1 mr-2 h-4 w-4" aria-hidden="true" />
          Mark All Read
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        
        {/* Filters */}
        <div className="border-b border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900/30 flex items-center justify-between">
          <div className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
            <Filter className="h-4 w-4 mr-2 text-gray-500" />
            Filter by:
          </div>
          <div className="flex-1 ml-4 overflow-x-auto pb-1 -mb-1 hide-scrollbar">
            <div className="flex gap-2">
              {["All", "Unread", "Attendance", "Assignment", "Study Material", "Exam", "Fee", "Announcement", "General"].map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium transition-colors border ${
                    filter === f 
                      ? "bg-blue-100 border-blue-200 text-blue-700 dark:bg-blue-900/40 dark:border-blue-800 dark:text-blue-400" 
                      : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Notifications List */}
        <div className="divide-y divide-gray-100 dark:divide-gray-800 max-h-[600px] overflow-y-auto">
          {filteredNotifications.length === 0 ? (
            <div className="p-12 text-center text-gray-500 dark:text-gray-400">
              <Bell className="h-12 w-12 mx-auto mb-3 opacity-20" />
              <p>No notifications found.</p>
            </div>
          ) : (
            filteredNotifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`p-5 transition-colors relative flex gap-4 ${
                  !notification.isRead 
                    ? "bg-blue-50/50 dark:bg-blue-900/10 hover:bg-blue-50 dark:hover:bg-blue-900/20" 
                    : "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750"
                }`}
              >
                {!notification.isRead && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-r"></div>
                )}
                
                <div className="flex-shrink-0 mt-1">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center border ${
                    !notification.isRead ? "border-blue-200 bg-white dark:border-blue-800 dark:bg-gray-800" : "border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"
                  }`}>
                    {getIconForCategory(notification.category)}
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <p className={`text-sm font-medium ${!notification.isRead ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                      {notification.title}
                    </p>
                    <p className="text-xs text-gray-500 whitespace-nowrap ml-4">
                      {formatTime(notification.timestamp)}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {notification.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-3">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400">
                      {notification.category}
                    </span>
                    
                    <div className="flex items-center gap-3">
                      {notification.link && (
                        <Link href={notification.link} className="text-xs font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                          View details
                        </Link>
                      )}
                      
                      {!notification.isRead && (
                        <button 
                          onClick={() => handleMarkAsRead(notification.id)}
                          className="text-xs font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 flex items-center"
                        >
                          <Check className="h-3 w-3 mr-1" />
                          Mark as read
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
