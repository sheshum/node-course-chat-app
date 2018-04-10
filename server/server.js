const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const colors = require('colors');


const publicPath = path.join(__dirname, '../public');
const {generateMessage} = require('./utils/message');


const PORT = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(publicPath));


io.on('connection', ( socket ) => {

    console.log('New user connected.');

    socket.emit('new_user', generateMessage( 'Admin', 'Welcome to the chat app.'));

    socket.broadcast.emit('new_user', generateMessage( 'Admin', 'New user joined.'))

    socket.on('create_message', ( message ) => {   
         socket.emit('new_message', generateMessage( message.from, message.text));


     });


    socket.on('disconnect', () => {
        console.log('User disconnected.');
    });
});




server.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}. ${colors.rainbow(`http://localhost:${PORT}`)}`);
})

