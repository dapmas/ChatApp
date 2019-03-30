// Make socket connection to server
var clientSocket = io.connect("http://localhost:4000");

// query DOM
var message = $("#message");
    handle = $("#handle");
    sendBtn = $("#send");
    outputWindow = $("#output-window");
    notifyUsers = $("#notify-users");

// Socket listen for events sent by the server
clientSocket.on('chat', function(data) {
  notifyUsers.html('');
  outputWindow.append('<p><strong>' + data.handle + ':' + '</strong> ' + data.message + '</p>');
});

clientSocket.on('typing', function(data) {
  notifyUsers.html('<p><em>' + data + ' is typing...</em></p>');
});


// Socket emit events on send btn click
sendBtn.on('click', function() {
  clientSocket.emit('chat', {
    message: message.val(),
    handle: handle.val()
  });
  message.val('');
});

message.on('keypress', function() {
  clientSocket.emit('typing', handle.val());
});
