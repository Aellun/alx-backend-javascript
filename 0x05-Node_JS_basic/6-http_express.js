// Imports Express module
const express = require('express');

// Creates an Express app
const app = express();

// Defines the root route handler
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Listen on port 1245
const port = 1245;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
