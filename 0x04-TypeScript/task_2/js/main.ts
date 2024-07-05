interface DirectorInterface {
    workFromHome(): string;
    getCoffeBreak(): string;
    workDirectorTasks(): string;

}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }
    getCoffeBreak(): string {
        return 'Getting a coffee break';
    }
    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }
    getCoffeBreak(): string {
        return 'Cannot have a break';
    }
    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

function isDirector(employee: Director | Teacher): boolean {
    return employee instanceof Director;
}

function executeWork(employee: Director | Teacher): string {
    if (employee instanceof Director) {
        return employee.workDirectorTasks();
    } else if (employee instanceof Teacher) {
        return employee.workTeacherTasks();
    }
    
}

type Subjects = 'Math' | 'History';

function Subjects(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    }
}