import { SchoolClass } from "@/types/schoolClass";

export const mockClasses: SchoolClass[] = [
  {
    id: "class-9-general",
    classLevel: "9",
    stream: "General",
    totalStudents: 100,
    sections: [
      { id: "sec-9-a", name: "Section A", studentCount: 50, classTeacher: "Priya Desai" },
      { id: "sec-9-b", name: "Section B", studentCount: 50, classTeacher: "Kavita Joshi" },
    ],
  },
  {
    id: "class-10-general",
    classLevel: "10",
    stream: "General",
    totalStudents: 95,
    sections: [
      { id: "sec-10-a", name: "Section A", studentCount: 48, classTeacher: "Ramesh Iyer" },
      { id: "sec-10-b", name: "Section B", studentCount: 47, classTeacher: "Anjali Mehta" },
    ],
  },
  {
    id: "class-11-science",
    classLevel: "11",
    stream: "Science",
    totalStudents: 95,
    sections: [
      { id: "sec-11-sci-a", name: "Section A", studentCount: 48, classTeacher: "Suresh Nair" },
      { id: "sec-11-sci-b", name: "Section B", studentCount: 47, classTeacher: "Meera Reddy" },
    ],
  },
  {
    id: "class-11-commerce",
    classLevel: "11",
    stream: "Commerce",
    totalStudents: 50,
    sections: [
      { id: "sec-11-com-a", name: "Section A", studentCount: 50, classTeacher: "Amit Bansal" },
    ],
  },
  {
    id: "class-12-science",
    classLevel: "12",
    stream: "Science",
    totalStudents: 90,
    sections: [
      { id: "sec-12-sci-a", name: "Section A", studentCount: 45, classTeacher: "Rajeev Verma" },
      { id: "sec-12-sci-b", name: "Section B", studentCount: 45, classTeacher: "Sneha Kapur" },
    ],
  },
  {
    id: "class-12-commerce",
    classLevel: "12",
    stream: "Commerce",
    totalStudents: 45,
    sections: [
      { id: "sec-12-com-a", name: "Section A", studentCount: 45, classTeacher: "Kavita Joshi" },
    ],
  },
];
