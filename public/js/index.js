var socket = io();

socket.on('connect', function() {
    console.log('Connected to server with socket.io');

    socket.emit('create_message', {
        to: 'meni',
        text: 'sa ima'
    })

});

socket.on('disconnect', function() {
    console.log('Disconnected from server.');
});


socket.on('new_message', function ( data ) {
    console.log(data);
});