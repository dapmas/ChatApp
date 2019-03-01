// make socket connection
var socket = io.connect("http://localhost:4000");
// var socket = io.connect("https://af680665.ngrok.io");

// Query DOM
var message = document.getElementById('message');
    handle = document.getElementById('handle');
    btn = document.getElementById('send-message');
    messageWindow = document.getElementById('message-window');



// Events
btn.addEventListener('click', function() {
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });
});

socket.on('chat', function(data) {
  messageWindow.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>'
});
