import Link from "next/link";
import { ArrowLeft, Calendar, Users, AlertCircle, Info, AlertOctagon, User } from "lucide-react";
import { mockAnnouncements } from "@/lib/mockData";

export default async function AnnouncementDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const announcement = mockAnnouncements.find((a) => a.id === id);

  if (!announcement) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Announcement not found</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">The announcement you are looking for does not exist.</p>
        <Link
          href="/announcements"
          className="inline-flex items-center text-blue-600 hover:text-blue-500"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Announcements
        </Link>
      </div>
    );
  }

  // Render priority badge
  const renderPriorityBadge = () => {
    switch (announcement.priority) {
      case "Urgent":
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-sm font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
            <AlertOctagon className="h-4 w-4 mr-1.5" />
            Urgent
          </span>
        );
      case "Important":
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-sm font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
            <AlertCircle className="h-4 w-4 mr-1.5" />
            Important
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
            <Info className="h-4 w-4 mr-1.5" />
            Normal
          </span>
        );
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        <Link
          href="/announcements"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Announcements
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden relative">
        {/* Top Decorative Border */}
        <div className={`absolute top-0 left-0 right-0 h-1.5 ${
          announcement.priority === "Urgent" ? "bg-red-500" :
          announcement.priority === "Important" ? "bg-amber-500" :
          "bg-blue-500"
        }`} />

        <div className="px-4 py-8 sm:px-10 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4 gap-3">
            {renderPriorityBadge()}
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-md flex items-center">
              <Users className="h-4 w-4 mr-1.5" />
              Target: {announcement.targetAudience}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
            {announcement.title}
          </h1>
          
          <div className="flex flex-wrap items-center mt-6 gap-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center font-medium text-gray-700 dark:text-gray-300">
              <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-2">
                <User className="h-4 w-4" />
              </div>
              {announcement.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1.5 text-gray-400" />
              Published: {announcement.publishDate}
            </div>
          </div>
        </div>
        
        <div className="px-4 py-8 sm:px-10 bg-gray-50 dark:bg-gray-900/30">
          <div className="prose prose-blue dark:prose-invert max-w-none">
            <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-wrap">
              {announcement.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
