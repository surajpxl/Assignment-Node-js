// Load the http module to create an HTTP server
const http = require('http');

// Create an HTTP server and define the request handler
const server = http.createServer((req, res) => {
  // Set the response content type to text/plain
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the message to the client
  res.end('I Am Happy To Learn Full Stack Web Development From PW Skills!');
});

// Set the server to listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
