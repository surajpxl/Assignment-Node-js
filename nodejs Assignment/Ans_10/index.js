// Load the events module
const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Print the default maximum number of listeners
console.log('Default Max Listeners:', eventEmitter.getMaxListeners());

// Set the maximum number of listeners to 5
eventEmitter.setMaxListeners(5);
console.log('Max Listeners after setting to 5:', eventEmitter.getMaxListeners());

// Add 6 event listeners to 'event1'
for (let i = 1; i <= 6; i++) {
  eventEmitter.on('event1', () => {
    console.log(`Listener ${i} triggered!`);
  });
}

// Emit the event to trigger the listeners
eventEmitter.emit('event1');

// Check if there are warnings about exceeding the maximum number of listeners
