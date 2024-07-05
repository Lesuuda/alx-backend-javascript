//create student objcts
var student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 21,
    location: 'Maralal'
};
var student2 = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 19,
    location: 'Baragoi'
};
//create an array of students
var studentList = [student1, student2];
//render table of students
function renderTable(students) {
    var table = document.createElement('table');
    var tbody = document.createElement('tbody');
    students.forEach(function (student) {
        var row = document.createElement('tr');
        var firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);
        var locationCell = document.createElement('td');
        locationCell.textContent = student.location;
        row.appendChild(locationCell);
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    document.body.appendChild(table);
}
