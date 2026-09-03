import { mockSubjects } from "./mockData";
import { AcademicStream } from "@/types/student";

export function getSubjectsForClass(classLevel: string, stream?: string) {
  if (!classLevel) return [];
  
  return mockSubjects.filter(subject => {
    const classMatches = subject.classLevel === classLevel;
    
    // For classes 9 and 10, stream is implicitly 'General' so it always matches
    if (classLevel === "9" || classLevel === "10") {
      return classMatches;
    }
    
    // For 11 and 12, stream must match if provided
    if (stream) {
      return classMatches && subject.stream === stream;
    }
    
    return classMatches;
  });
}
