import Link from "next/link";
import { Megaphone, Calendar, Users, AlertCircle, Info, AlertOctagon } from "lucide-react";
import { Announcement } from "@/types/announcement";

interface AnnouncementCardProps {
  announcement: Announcement;
}

export function AnnouncementCard({ announcement }: AnnouncementCardProps) {
  // Render priority badge
  const renderPriorityBadge = () => {
    switch (announcement.priority) {
      case "Urgent":
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
            <AlertOctagon className="h-3 w-3 mr-1" />
            Urgent
          </span>
        );
      case "Important":
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
            <AlertCircle className="h-3 w-3 mr-1" />
            Important
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
            <Info className="h-3 w-3 mr-1" />
            Normal
          </span>
        );
    }
  };

  return (
    <Link href={`/announcements/${announcement.id}`} className="block h-full group">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-5 flex flex-col h-full hover:shadow-md transition-all">
        
        <div className="flex justify-between items-start mb-3">
          {renderPriorityBadge()}
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex items-center">
            <Users className="h-3 w-3 mr-1" />
            {announcement.targetAudience}
          </span>
        </div>
        
        <div className="flex items-start gap-3 mb-3">
          <div className="mt-1">
            <Megaphone className={`h-5 w-5 ${
              announcement.priority === "Urgent" ? "text-red-500" :
              announcement.priority === "Important" ? "text-amber-500" :
              "text-blue-500"
            }`} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
              {announcement.title}
            </h3>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-4 pl-8">
          {announcement.content}
        </p>
        
        <div className="mt-auto space-y-2 pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <span className="font-medium">{announcement.author}</span>
            <div className="flex items-center">
              <Calendar className="h-3.5 w-3.5 mr-1" />
              {announcement.publishDate}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
