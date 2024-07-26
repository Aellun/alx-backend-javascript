export default function createIteratorObject(report) {
  // Generator function to iterate over each employee
  function* employeeIterator() {
    for (const employees of Object.values(report.allEmployees)) {
      // Yield each employee in the current department
      for (const employee of employees) {
        yield employee;
      }
    }
  }

  // Return an iterator created by the generator function
  return employeeIterator();
}
