//define student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
//create student objcts
const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 21,
    location: 'Maralal'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 19,
    location: 'Baragoi'
};

//create an array of students
const studentList: Student[] = [student1, student2];

//render table of students
function renderTable(students: Student[]): void {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    students.forEach(student => {
        const row = document.createElement('tr');
        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);

        const locationCell = document.createElement('td');
        locationCell.textContent = student.location;
        row.appendChild(locationCell);

        tbody.appendChild(row);

    });

    table.appendChild(tbody);
    document.body.appendChild(table);
}