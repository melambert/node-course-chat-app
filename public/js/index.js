var socket = io();

//Use functions rather than ES6 arrow functions for browser/mobile compatibility
socket.on('connect', function() {
    console.log('Connected to server')

    socket.emit('createMessage', {
        from: "jab@jabber.com",
        text: "hey"
    });

});

socket.on('disconnect', function() {
    console.log('Disconnected from server')
});

socket.on('newEmail', function(email) {
    console.log('New email', email);
});

socket.on('newMessage', function(message) {
    console.log('New message', message);
});