// Make connection

var socket = io.connect('https://hesamyan-chat.herokuapp.com/');
// var socket = io.connect('http://localhost:4444/');

// Query DOM
var message = document.getElementById('message');
    feedback = document.getElementById('feedback'),
    user = document.getElementById('user'),
    btn = document.getElementById('send'),
    output = document.getElementById('output');


// Emit events
btn.addEventListener('click', () => {

    if (message.value === "") {
        feedback.innerHTML = `<p><i>Write something!</i></p>`;
    } else {
        socket.emit('chat', {
            user: user.value,
            message: message.value
        });
        message.value = '';
    }
    
});

message.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        if (message.value === "") {
            feedback.innerHTML = `<p><i>Write something!</i></p>`;
        } else {
            socket.emit('chat', {
                user: user.value,
                message: message.value
            });
            message.value = '';
        }
    }
});

message.addEventListener('keypress', () => {
    feedback.innerHTML = '';
    socket.emit('typing', user.value);
});


// Listen for events
socket.on('chat', (data) => {
    output.innerHTML += `<div class="media">
    <img class="d-flex rounded-circle avatar z-depth-1-half mr-3" src="avatar.png"
      alt="Avatar" width="30" height="30">
    <div class="media-body">
      <h6 class="mt-0 font-weight-bold blue-text">${data.user}</h6>
      <p legth="200" word-wrap="break-word">${data.message}</p>
    </div>
</div>`;

});


socket.on('typing', (data) => {
    feedback.innerHTML = '<p><em>' + data + ' is typing...</em></p>';
});
