/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */

// Updates the grade of students based on their location and new grades provided
export default function updateStudentGradeByCity(studentList, city, newGrade) {
  return studentList
    // Filter students by the specified city
    .filter((obj) => obj.location === city)
    .map((student) => {
      newGrade.map((studentGrade) => {
        // Check if the student has a new grade
        if (studentGrade.studentId === student.id) {
          student.grade = studentGrade.grade;
        }
        // If the student does not have a new grade, set it to 'N/A'
        if (!student.hasOwnProperty('grade')) {
          student.grade = 'N/A';
        }
        return student;
      });

      return student;
    });
}
