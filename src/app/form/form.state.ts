export class ApplicationsDto {
    applicationNumber: number;
    applicationType: boolean;
    fullName: string;
    fullNameEn: string;
    appID: string;
    universityId: number | null;
    universityNumber: string | null;
    collegeId: number | null;
    majorId: number | null;
    semesterGPA: number | null;
    overallGPA: number | null;
    highSchoolScore: number | null;
    highSchoolGraduationDate: string;
    universityGrantID: string | null;
    universityGrantDate: string | null;
    grantRateLimit: number;
    nationalityCategory: number | null;
}

export class CourseDto {
    uniAppCoursesID: number;
    appno: number;
    courseID: number;
    courseCenterID: string;
    courseLocation: string;
    courseDate: string;
    courseAtt: string;
    documentName: string;
    mimeType: string | null;
    size: number | null;
    uploadDate: string | null;
}


export class minorDto {
    minorId: number;
    majorId: number;
    name: string;
}


export class UniversityApplicationSummaryDto {
    university: string;
    major: string;
    highestCommulativeRate: number | null;
    lowestCommulativeRate: number | null;
}



export class UniversityCollegeStatsDto {
    university: string;
    college: string;
    numberOfStudents: number;
    avgCommulativeRate: number | null;
}


export class UniversityDataDto {
    id: number | null;
    name: string;
}

export class ApplicationDataDto {
    uniID: number | null;
    uniMajor: number | null;
    commulativeRate: number | null;
}


