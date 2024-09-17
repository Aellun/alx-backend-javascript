const fs = require('fs');

/**
 * Reads a CSV file and counts students by field.
 * @param {string} fileName - The path to the CSV file.
 */
function countStudents(fileName) {
  const students = {};
  const fields = {};
  let studentCount = 0;

  try {
    const content = fs.readFileSync(fileName, 'utf-8');
    const lines = content.trim().split('\n');

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    // Process each line after the header
    lines.slice(1).forEach((line) => {
      if (line) {
        studentCount += 1;
        const [name, , , field] = line.split(',');

        if (!students[field]) {
          students[field] = [];
          fields[field] = 0;
        }

        students[field].push(name);
        fields[field] += 1;
      }
    });

    // Log the number of students
    console.log(`Number of students: ${studentCount}`);

    // Log the number of students in each field
    for (const [field, count] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${count}. List: ${students[field].join(', ')}`);
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
