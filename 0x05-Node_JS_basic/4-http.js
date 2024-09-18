// 4-http.js
const http = require('http');

const host = '127.0.0.1'; // Localhost IP
const port = 1245; // Server will listen on port 1245

// Create an HTTP server
const app = http.createServer((req, res) => {
  res.statusCode = 200; // Set response status to 200 (OK)
  res.setHeader('Content-Type', 'text/plain'); // Set the response type to plain text
  res.end('Hello Holberton School!'); // Send the response body
});

app.listen(port, host, () => {});

module.exports = app;
