export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4 font-sans text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <main className="flex max-w-2xl flex-col items-center justify-center gap-6 text-center">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl font-bold tracking-tight text-blue-600 dark:text-blue-400 sm:text-6xl">
            EduSphere
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 sm:text-3xl">
            School Management System
          </h2>
        </div>
        
        <p className="text-lg italic text-gray-600 dark:text-gray-400">
          "Modern school management made simple."
        </p>

        <div className="mt-8 rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700">
          <p className="font-medium text-green-600 dark:text-green-400">
            ✓ Application foundation is working
          </p>
        </div>
      </main>
    </div>
  );
}
