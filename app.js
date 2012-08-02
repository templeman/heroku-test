var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('<!DOCTYPE HTML><html><h1>Hello World!</h1></html>');
});

app.get('/user/:id', function(request, response) {
	response.json({ user : request.params.id });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
