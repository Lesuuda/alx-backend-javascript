/* eslint-disable */
export default function updateStudentGradeByCity(students, city, newGrades) {
    return students.filter((student) => student.location === city)
        .map((student) => {
            return {
                ...student,
                grade: newGrades.filter((grade) => grade.studentId === student.id)
                    .map((grade) => grade.grade)[0]
            }
        });
}