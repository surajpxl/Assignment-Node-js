// Load the events module
const EventEmitter = require('events');

// Create an instance of the EventEmitter class
const eventEmitter = new EventEmitter();

// Create a listener for the 'subscribe' event
eventEmitter.on('subscribe', () => {
  console.log('User has subscribed to the channel!');
});

// Simulate triggering the 'subscribe' event (this could represent a user subscribing)
eventEmitter.emit('subscribe');
