export default function getStudentIdsSum(studentsList) {
  return studentsList.reduce((sum, studentsList) => sum + studentsList.id, 0);
}
