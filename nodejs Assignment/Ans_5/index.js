// index.js

// Load the fs (File System) module
const fs = require('fs');

// Delete the nodejs_architecture.txt file
fs.unlink('nodejs_architecture.txt', (err) => {
  if (err) {
    console.error('Error deleting the file:', err);
  } else {
    console.log('File Deleted Successfully');
  }
});
