// Countstudent function
const { readFile } = require('fs');

/**
 * Asynchronously reads a CSV file and counts students by field.
 * @param {string} fileName - The path to the CSV file.
 * @returns {Promise<void>}
 */
function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;

  return new Promise((resolve, reject) => {
    readFile(fileName, 'utf-8', (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');

        if (lines.length <= 1) {
          reject(Error('Cannot load the database'));
          return;
        }

        // Process each line, starting from the second line to skip the header
        lines.slice(1).forEach((line) => {
          if (line) {
            length += 1;
            const [firstname, , , field] = line.split(',');

            if (students[field]) {
              students[field].push(firstname);
            } else {
              students[field] = [firstname];
              fields[field] = 0;
            }
            fields[field] += 1;
          }
        });

        // Logs the number of students
        console.log(`Number of students: ${length}`);

        // Logs the number of students in each field
        for (const [field, count] of Object.entries(fields)) {
          console.log(`Number of students in ${field}: ${count}. List: ${students[field].join(', ')}`);
        }

        resolve();
      }
    });
  });
}

module.exports = countStudents;
