var sllQueue = require('./sllQueue');


// make an singley linked list queue
var queue = new sllQueue();


// add to the queue
queue.enqueue('pizza');
queue.enqueue('calzone');
queue.enqueue('meatballs');


// log out what is in it
console.log(queue.info());


// is pizza in the queue?
console.log(queue.find('pizza'));


// add more to the queue
queue.enqueue('stromboli');


// dequeue and log what is dequeued
console.log(queue.dequeue());


// what is in the queue now?
console.log(queue.info());


// can we find our pizza in the queue now?
console.log(queue.find('pizza'));
