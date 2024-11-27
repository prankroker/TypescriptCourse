enum StudentStatus {
    Active, 
    Academic_Leave, 
    Graduated, 
    Expelled
};

enum CourseType {
    Mandatory, 
    Optional, 
    Special
}

enum Semester {
    First,
    Second
}

enum Grades {
    Excellent = 5, 
    Good = 4, 
    Satisfactory = 3, 
    Unsatisfactory = 2
}

enum Faculty {
    Computer_Science, 
    Economics, 
    Law, 
    Engineering
}

interface Student {
    id: number;
    fullName: string;
    faculty: Faculty;
    year: number;
    status: StudentStatus;
    enrollmentDate: Date;
    groupNumber: string;
}

interface Course {
    id: number;
    name: string;
    type: CourseType;
    credits: number;
    semester: Semester;
    faculty: Faculty;
    maxStudents: number;
}

interface Grade {
    studentId: number;
    courseId: number;
    grade: Grade;
    date: Date;
    semester: Semester;
}

class UniversityManagmentSystem{
    
}