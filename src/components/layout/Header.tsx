"use client";

import { Bell, User, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/navigation";

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const pathname = usePathname();
  
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
          <button className="bg-white dark:bg-gray-900 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <span className="sr-only">View notifications</span>
            <Bell className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Profile dropdown placeholder */}
          <div className="relative">
            <button className="max-w-xs bg-white dark:bg-gray-900 flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <span className="sr-only">Open user menu</span>
              <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <User className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
