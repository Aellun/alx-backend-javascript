// Displays the welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Handles user input
process.stdin.on('data', (data) => {
  // Display the name of the user
  process.stdout.write(`Your name is: ${data.toString().trim()}\n`);

  // Close the stdin stream
  process.stdin.end();
});

// Handles the end of the program
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
  process.exit();
});
