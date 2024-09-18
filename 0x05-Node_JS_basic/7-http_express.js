const express = require('express');
const { readFile } = require('fs');

const app = express();
const port = 1245;

// Function to count students and organize them by field of study
function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;

  // Returns a promise to handle async file reading
  return new Promise((resolve, reject) => {
    readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        let output = '';
        const lines = data.toString().split('\n');

        // Processes each line
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const field = lines[i].toString().split(','); // Split line by commas
            // Collect students by field
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
            // Count number of students per field
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }
        const l = length - 1;
        output += `Number of students: ${l}\n`;

        // Format output for each field
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${students[key].join(', ')}\n`;
          }
        }
        // Resolve the promise with the output string
        resolve(output);
      }
    });
  });
}

// Root route - returns a greeting message
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Students route - returns student count and list based on CSV file
app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString()) // Database file path passed via command line
    .then((output) => {
      res.send(['This is the list of our students', output].join('\n'));
    })
    .catch(() => {
      res.send('This is the list of our students\nCannot load the database');
    });
});

app.listen(port, () => {
});

module.exports = app;
