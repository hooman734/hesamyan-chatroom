var express = require('express');
var socket = require('socket.io');
var cors = require('cors');
let port = process.env.PORT || 4444;

// App setup
var app = express();


// Setup CORS
app.use(cors());


// Static files
app.use('/:var(|api)?', express.static('public'));


// Route to chat 
app.use('/api/chat', (_, res) => {
	res.sendFile('/public/chat.html', {root: __dirname});
});

var server = app.listen(port, () => {
	console.log(`Listening to requests on port ${port}`);
});


// Socket setup
var io = socket(server);

io.on('connection', (socket) => {
	console.log('made socket connection', socket.id);

	socket.on('chat', (data) => {
		io.sockets.emit('chat', data);
	});

	socket.on('typing', (data) => {
		socket.broadcast.emit('typing', data);
	});
});


app.options('*', cors());