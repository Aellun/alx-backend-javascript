export default function createReportObject(employeesList) {
  // Initialize an empty object to store all employees
  const allEmployees = {};

  // Iterate over each entry in employeesList to populate allEmployees
  for (const [departmentName, employees] of Object.entries(employeesList)) {
    // Spread the employees array to ensure immutability and assign to allEmployees
    allEmployees[departmentName] = [...employees];
  }

  return {
    // Include allEmployees in the returned object
    allEmployees,

    // Method to get the number of departments
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };
}
