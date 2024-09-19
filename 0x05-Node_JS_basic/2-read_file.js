const fs = require('fs');

function countStudents(fileName) {
  const students = {}; // Stores students by field
  const fields = {}; // Counts students by field
  let totalStudents = 0; // Total number of students

  try {
    // Reads and splits the file content by new lines
    const content = fs.readFileSync(fileName, 'utf-8');
    const lines = content.split('\n').filter((line) => line.trim() !== '');

    // Processes each line except the header
    for (let i = 1; i < lines.length; i += 1) {
      const [firstname, , , field] = lines[i].split(',');

      // Process only lines with valid data
      if (firstname && field) {
        // Stores student names by field
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);

        // Counts the number of students in each field
        if (!fields[field]) {
          fields[field] = 0;
        }
        fields[field] += 1;

        totalStudents += 1;
      }
    }

    // Output the results
    console.log(`Number of students: ${totalStudents}`);
    for (const [field, names] of Object.entries(students)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    // Throw an error if the file cannot be read
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
