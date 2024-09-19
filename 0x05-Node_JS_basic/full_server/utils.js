const fs = require('fs');

// Reads the database file and returns student data
function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err); // Reject the promise if there's an error
      } else {
        const students = {};
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        lines.slice(1).forEach((line) => {
          const [firstname, , , field] = line.split(',');
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstname); // Add student to the field
        });
        resolve(students); // Resolves with the student data
      }
    });
  });
}

module.exports = { readDatabase };
