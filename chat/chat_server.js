var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


var chatArchive = [];
//following is copied from etherpad
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "OPTIONS,HEAD,GET,PUT");
  next();
});
app.get('/', function (req, res) {
  res.send('Hello World im here!');
});

io.on('connection', function(socket){ //when socket makes a connection from the client to the server
	console.log("New Client Connection");//write "new client connection" in the terminal
	socket.on("chat message", function(msg){
		chatArchive.push(msg);
	io.emit('chat message', msg);
	});

});

app.get('/get_archive', function(req, res){
	res.send(chatArchive);//show the previous chat lines from past converstions with other 

});

app.get
http.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

