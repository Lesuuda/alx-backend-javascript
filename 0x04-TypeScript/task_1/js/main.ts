//interface for a teacher
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

//interface directors extends teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

//function that prints teacher 
function printTeacher(firstName: string, lastName: string) {
    return `${firstName[0]}. ${lastName}`;
}

//interface for student
interface StudentClass {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClass;
}

class StudentClass implements StudentClass {
    constructor (firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return 'Currently working';
    }
    displayName(): string {
        return this.firstName;
    }
}

