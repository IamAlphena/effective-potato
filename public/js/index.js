const { io } = require("socket.io/client-dist/socket.io");

const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('input');

form.addEventListener('submit', function(event){
    event.preventDefault();
    if (input.value){
        socket.emit('chat message', input.value);
        input.value = '';
    }
})

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        console.log('message:' + msg);
    });
});