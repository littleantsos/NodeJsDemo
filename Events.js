var events = require('events');
var EventEmitter = events.EventEmitter;
var event = new EventEmitter();
event.on('receive', function(){
	console.log('receive [Receive] message');
});

setTimeout(function(){
	event.emit('receive');
}, 1000);


event.on('receive-double-param', function(arg1, arg2){
	console.log('receive [Receive-double-param] message', arg1, arg2);
});

setTimeout(function(){
	event.emit('receive-double-param', 'arg1', 'arg2');
}, 1000);