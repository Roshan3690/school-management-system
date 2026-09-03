import { Bell, User } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex-shrink-0 h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex shadow-sm">
      <div className="flex-1 px-4 flex justify-between items-center md:px-6">
        <div className="flex-1 flex">
          {/* Mobile menu button could go here */}
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
