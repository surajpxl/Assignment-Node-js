// Load the events module
const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Define an event handler for the 'event1'
const eventHandler = () => {
  console.log('Event handler triggered!');
};

// Attach the event handler to 'event1'
eventEmitter.on('event1', eventHandler);

// Emit the event (this will trigger the event handler)
eventEmitter.emit('event1'); // Output: Event handler triggered!

// Now, let's remove the event handler for 'event1'
eventEmitter.removeListener('event1', eventHandler);

// Emit the event again
eventEmitter.emit('event1'); // No output, because the event handler was removed
