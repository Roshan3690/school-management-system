import Link from "next/link";
import { ArrowLeft, BookOpen, Calendar, Users, Eye, Database, FileText, FileImage, Presentation, File } from "lucide-react";
import { mockStudyMaterials, mockTeachers } from "@/lib/mockData";

export default async function StudyMaterialDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const material = mockStudyMaterials.find((m) => m.id === id);

  if (!material) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Study Material not found</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">The resource you are looking for does not exist.</p>
        <Link
          href="/study-materials"
          className="inline-flex items-center text-blue-600 hover:text-blue-500"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Study Materials
        </Link>
      </div>
    );
  }

  const teacher = mockTeachers.find((t) => t.teacherId === material.teacherId);

  // Render correct icon based on file type
  const renderIcon = (className: string) => {
    switch (material.fileType) {
      case "PDF":
        return <FileText className={className} />;
      case "DOCX":
        return <FileText className={className} />;
      case "PPTX":
        return <Presentation className={className} />;
      case "Image":
        return <FileImage className={className} />;
      default:
        return <File className={className} />;
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        <Link
          href="/study-materials"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Study Materials
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="px-4 py-6 sm:px-8 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between md:items-start gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800">
                {renderIcon("h-12 w-12 text-blue-500")}
              </div>
              <div>
                <div className="flex items-center mb-2 gap-3">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    Class {material.classLevel} {material.section ? `Sec ${material.section}` : ''}
                  </span>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    {material.stream}
                  </span>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-600 px-2 py-1 rounded uppercase tracking-wider">
                    {material.fileType}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-2">
                  {material.title}
                </h1>
                <div className="flex items-center mt-3 text-sm text-gray-500 dark:text-gray-400">
                  <BookOpen className="h-4 w-4 mr-1.5" />
                  {material.subject}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="px-4 py-6 sm:px-8 bg-gray-50 dark:bg-gray-900/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Material Details
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 space-y-4">
                <div className="flex items-start">
                  <Users className="h-5 w-5 mr-3 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Uploaded By</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {teacher ? `${teacher.firstName} ${teacher.lastName}` : material.teacherId}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 mr-3 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Upload Date</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{material.uploadDate}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Database className="h-5 w-5 mr-3 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">File Size</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{material.fileSize}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Description
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 h-[calc(100%-2rem)]">
                <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                  {material.description}
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => alert("File preview will be available when file storage is connected.")}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              <Eye className="-ml-1 mr-2 h-5 w-5" />
              Preview / View Material
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
