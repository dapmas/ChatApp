var express = require('express');
var socket = require('socket.io');
// Setup add
var app = express();

// create server
var server = app.listen(4000, function() {
  console.log("Listening to requests on port 4000");
})


// middleware to serve public/static files
app.use(express.static('client'));


// Socket setup => takes parameter as the server to bind
var io = socket(server);

io.on('connection', function(socket) {
  console.log("Made socket connection with " + socket.id);

  socket.on('chat', function(data) {
    // io.sockets means all the sockets connected to the server
    io.sockets.emit('chat', data);
  })
});
