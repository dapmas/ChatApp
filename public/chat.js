// make socket connection
var socket = io.connect("http://localhost:4000");
// var socket = io.connect("https://af680665.ngrok.io");

// Query DOM
var message = document.getElementById('message');
    handle = document.getElementById('handle');
    btn = document.getElementById('send-message');
    messageWindow = document.getElementById('message-window'),
    feedback = document.getElementById('feedback');



// client Events
btn.addEventListener('click', function() {
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });
  message.value= "";
});

message.addEventListener('keypress', function() {
  socket.emit('typing', handle.value);
});


// socket events
socket.on('chat', function(data) {
  // += means append to the existing whereas only = means overwrite
  feedback.innerHTML = ""
  messageWindow.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});

socket.on('typing', function(data) {
  feedback.innerHTML = '<p><em>' + data + ' is typing...</em></p>';
});
