export default function getListStudentIds(studentList) {
  if (Array.isArray(studentList)) {
    return studentList.map((obj) => obj.id);
  }
  return [];
}
