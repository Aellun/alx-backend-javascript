import { readDatabase } from '../utils';

export default class StudentsController {
  // Handles the request to get all students
  static async getAllStudents(req, res) {
    try {
      // Reads the student data from the database
      const students = await readDatabase(process.argv[2]);
      let output = 'This is the list of our students\n';

      // Sorts fields alphabetically and format the output
      Object.keys(students)
        .sort((a, b) => a.localeCompare(b))
        .forEach((field) => {
          output += `Number of students in ${field}: ${students[field].length}. `;
          output += `List: ${students[field].join(', ')}\n`;
        });

      return res.status(200).send(output.trim());
    } catch (err) {
      // Handles errors if the database cannot be loaded
      return res.status(500).send('Cannot load the database');
    }
  }

  // Handles the request to get students by major (CS or SWE)
  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    // Validates that the major is either CS or SWE
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      // Reads the student data for the specific major
      const students = await readDatabase(process.argv[2]);
      return res.status(200).send(`List: ${students[major].join(', ')}`);
    } catch (err) {
      // Handles errors if the database cannot be loaded
      return res.status(500).send('Cannot load the database');
    }
  }
}
