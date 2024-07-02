/* eslint-disable */
export default function getStudentIdsSum(students) {
    const total = students.reduce((currentTotal, students) => {
        return students.id + currentTotal
    }, 0);
    return total;
}