var express = require('express');

// Setup add
var app = express();

// create server
var server = app.listen(4000, function() {
  console.log("Listening to requests on port 4000");
})


// middleware to serve public/static files
app.use(express.static('client'));
