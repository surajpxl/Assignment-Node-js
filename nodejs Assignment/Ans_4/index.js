// Load the fs (File System) module
const fs = require('fs');

// Define the new content to append (Advantages of Node.js)
const advantages = `
  Advantages of Node.js:

  1. Fast Execution: Node.js is built on the V8 JavaScript engine, which compiles JavaScript code into machine code, resulting in fast execution.
  2. Scalability: Node.js is designed for building scalable network applications, making it suitable for high-traffic applications.
  3. Asynchronous and Non-blocking: Node.js uses non-blocking, event-driven architecture, allowing it to handle multiple requests without delay.
  4. Large Ecosystem: Node.js has a large package ecosystem (npm) with many libraries and tools available for developers.
  5. Single Programming Language: With Node.js, both client-side and server-side code can be written in JavaScript, streamlining the development process.
`;

// Append the advantages to nodejs_architecture.txt
fs.appendFile('nodejs_architecture.txt', advantages, (err) => {
  if (err) {
    console.error('Error appending to file:', err);
  } else {
    console.log('Advantages of Node.js appended to nodejs_architecture.txt');
    
    // After appending, read and print the updated file content
    fs.readFile('nodejs_architecture.txt', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading the file:', err);
      } else {
        // Print the updated content of the file to the console
        console.log('Updated Content of nodejs_architecture.txt:');
        console.log(data);
      }
    });
  }
});
