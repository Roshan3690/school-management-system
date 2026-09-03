"use client";

import { Bell, User, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navigation } from "@/lib/navigation";
import { mockCurrentUser, mockNotifications } from "@/lib/mockData";

import { useNotificationContext } from "@/contexts/NotificationContext";

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const pathname = usePathname();
  const { unreadCount } = useNotificationContext();
  
  // Find current page title
  const currentNavItem = navigation.find(
    (item) => pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href))
  );
  
  const pageTitle = currentNavItem ? currentNavItem.name : "EduSphere";

  return (
    <header className="sticky top-0 z-10 flex-shrink-0 h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex shadow-sm">
      <div className="flex-1 px-4 flex justify-between items-center md:px-6">
        <div className="flex items-center">
          <button
            onClick={onMenuClick}
            className="md:hidden mr-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none"
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
            {pageTitle}
          </h1>
        </div>
        <div className="ml-4 flex items-center md:ml-6 space-x-4">
          <Link href="/notifications" className="relative bg-white dark:bg-gray-900 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <span className="sr-only">View notifications</span>
            <Bell className="h-6 w-6" aria-hidden="true" />
            {unreadCount > 0 && (
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-900" />
            )}
          </Link>

          {/* Profile link */}
          <div className="relative">
            <Link href="/profile" className="max-w-xs bg-white dark:bg-gray-900 flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <span className="sr-only">Open user profile</span>
              <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center overflow-hidden border border-gray-200 dark:border-gray-700">
                {mockCurrentUser.avatarUrl ? (
                  <img src={mockCurrentUser.avatarUrl} alt="" className="h-full w-full object-cover" />
                ) : (
                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                    {mockCurrentUser.firstName.charAt(0)}{mockCurrentUser.lastName.charAt(0)}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
