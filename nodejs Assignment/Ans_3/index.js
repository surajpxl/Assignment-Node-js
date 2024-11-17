// Load the fs (File System) module
const fs = require('fs');

// Read the contents of nodejs_architecture.txt
fs.readFile('nodejs_architecture.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
  } else {
    // Print the content of the file to the console
    console.log('Content of nodejs_architecture.txt:');
    console.log(data);
  }
});
