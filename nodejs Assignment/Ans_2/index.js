// Load the fs (File System) module
const fs = require('fs');

// Define the Node.js architecture information
const architectureInfo = `
  Node.js Architecture Overview:

  1. Event-Driven: Node.js uses an event-driven architecture. It operates in a non-blocking, asynchronous manner.
  2. Single-Threaded: Node.js uses a single thread to handle requests and perform I/O operations, but it can handle multiple requests concurrently.
  3. V8 JavaScript Engine: Node.js runs on Google's V8 engine, which compiles and executes JavaScript code.
  4. Non-blocking I/O: Node.js performs I/O operations asynchronously, which allows it to handle a large number of connections without waiting for I/O operations to finish.
  5. The Event Loop: The event loop allows Node.js to handle multiple operations without blocking, processing events and callbacks in a queue.

  For more details, refer to the official Node.js documentation.
`;

// Write the architecture information to nodejs_architecture.txt
fs.writeFile('nodejs_architecture.txt', architectureInfo, (err) => {
  if (err) {
    console.error('Error writing to file', err);
  } else {
    console.log('Information written to nodejs_architecture.txt');
  }
});
