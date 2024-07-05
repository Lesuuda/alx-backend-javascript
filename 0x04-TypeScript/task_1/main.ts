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
