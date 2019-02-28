var express = require('express');

// App setup
var app = express();
var server = app.listen(8080, function() {
  console.log("Listening to requests on port 8080.");
});


// Static Files
app.use(express.static('public'));
