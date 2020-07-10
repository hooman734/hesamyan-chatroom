var express = require('express');
var socket = require('socket.io');


// App setup
var app = express();


// Static files
app.use('/:var(|api)?', express.static('public'));


// Route to chat 
app.use('/api/chat', (_, res)=>{
	res.sendFile('/front-end/chat.html', {root: __dirname});
});

var server = app.listen(4444, ()=>{
	console.log('Listening to requests on port 4444');
});


// Socket setup
var io = socket(server);

io.on('connection', (socket)=>{
	console.log('made socket connection', socket.id);

	socket.on('chat', (data)=>{
		io.sockets.emit('chat', data);
	});

	socket.on('typing', (data)=>{
		socket.broadcast.emit('typing', data);
	});
});


