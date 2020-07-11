// // Make connection

// // var socket = io.connect('https://hesamyan-chat.herokuapp.com/);
// // var socket = io.connect('http://localhost:4444/');

// // Query DOM
// var message = document.getElementById('message');
//     feedback = document.getElementById('feedback'),
//     user = document.getElementById('user'),
//     btn = document.getElementById('send'),
//     output = document.getElementById('output');


// // Emit events
// btn.addEventListener('click', ()=>{
//     socket.emit('chat', {
//         user: user.value,
//         message: message.value
//     });
// });

// message.addEventListener("keyup", (event)=>{
//     if (event.key === "Enter") {
//         socket.emit('chat', {
//             user: user.value,
//             message: message.value
//         });
//     }
// });

// message.addEventListener('keypress', ()=>{
//     feedback.innerHTML = '';
//     socket.emit('typing', user.value);
// });


// // Listen for events
// socket.on('chat', (data)=>{
//     output.value += "\n" + data.user + " says --> " + data.message;
// });

// socket.on('typing', (data)=>{
//     feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
// });