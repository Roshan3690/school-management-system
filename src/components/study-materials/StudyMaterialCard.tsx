import Link from "next/link";
import { FileText, FileImage, Presentation, File, User, Calendar, Database } from "lucide-react";
import { StudyMaterial } from "@/types/studyMaterial";
import { mockTeachers } from "@/lib/mockData";

interface StudyMaterialCardProps {
  material: StudyMaterial;
}

export function StudyMaterialCard({ material }: StudyMaterialCardProps) {
  const teacher = mockTeachers.find((t) => t.teacherId === material.teacherId);
  const teacherName = teacher ? `${teacher.firstName} ${teacher.lastName}` : material.teacherId;

  // Render correct icon based on file type
  const renderIcon = () => {
    switch (material.fileType) {
      case "PDF":
        return <FileText className="h-8 w-8 text-red-500" />;
      case "DOCX":
        return <FileText className="h-8 w-8 text-blue-500" />;
      case "PPTX":
        return <Presentation className="h-8 w-8 text-orange-500" />;
      case "Image":
        return <FileImage className="h-8 w-8 text-green-500" />;
      default:
        return <File className="h-8 w-8 text-gray-500" />;
    }
  };

  return (
    <Link href={`/study-materials/${material.id}`} className="block h-full group">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-5 flex flex-col h-full hover:shadow-md transition-all relative overflow-hidden">
        
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              Class {material.classLevel} {material.section ? `Sec ${material.section}` : ''}
            </span>
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              {material.stream}
            </span>
          </div>
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-600 px-2 py-1 rounded uppercase tracking-wider">
            {material.fileType}
          </span>
        </div>
        
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-gray-50 dark:bg-gray-900/50 p-2 rounded-lg border border-gray-100 dark:border-gray-700 flex-shrink-0">
            {renderIcon()}
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 mb-1">
              {material.title}
            </h3>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {material.subject}
            </p>
          </div>
        </div>
        
        <div className="mt-auto space-y-2 pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <User className="h-3.5 w-3.5 mr-1" />
              {teacherName}
            </div>
            <div className="flex items-center">
              <Database className="h-3.5 w-3.5 mr-1" />
              {material.fileSize}
            </div>
          </div>
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
            <Calendar className="h-3.5 w-3.5 mr-1" />
            Uploaded: {material.uploadDate}
          </div>
        </div>
      </div>
    </Link>
  );
}
