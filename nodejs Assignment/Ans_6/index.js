// index.js

// Load the os module
const os = require('os');

// Get the OS name and release version
const osName = os.type();      // OS name (e.g., Linux, Windows_NT, Darwin)
const osRelease = os.release();  // OS release version (e.g., 5.10.0, 21.0.0)

// Print the OS information to the console
console.log(`OS Name: ${osName}`);
console.log(`OS Release Version: ${osRelease}`);
